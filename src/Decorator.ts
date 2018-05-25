import { Constructor } from './util';

export function final(target: any, key: PropertyKey, descriptor?: PropertyDescriptor): void;
export function final<T extends Constructor>(target: T): T;
export function final<T extends Constructor>(
    target: T,
    key?: PropertyKey,
    descriptor?: PropertyDescriptor
): any {
    if (undefined !== key) {
        // TODO
    } else {
        return class Final extends target {
            constructor(...args: any[]) {
                if (new.target !== Final) {
                    throw new Error(`Final class "${target.name}" cannot be extended`);
                }
                super(...args);
            }
        };
    }
}

export function mixin(...bases: any[]): <T extends Constructor>(derived: T) => T {
    return function apply_mixin<T extends Constructor>(derived: T): T {
        const initializers: Array<() => void | InstanceType<T>> = [];
        for (const base of bases) {
            for (const name of Reflect.ownKeys(base.prototype)) {
                if ('_init' === name && 'function' === typeof base.prototype._init) {
                    initializers.push(base.prototype._init);
                } else if ('constructor' !== name) {
                    const descriptor = Reflect.getOwnPropertyDescriptor(
                        base.prototype,
                        name
                    );
                    if (
                        descriptor &&
                        (!descriptor.writable ||
                            !descriptor.configurable ||
                            !descriptor.enumerable ||
                            descriptor.get ||
                            descriptor.set)
                    ) {
                        Reflect.defineProperty(derived.prototype, name, descriptor);
                    } else {
                        derived.prototype[name] = base.prototype[name];
                    }
                }
            }
        }
        function surrogate(...args: any[]): InstanceType<T> {
            let self: InstanceType<T> = new derived(...args);
            for (const initializer of initializers) {
                const result = initializer.apply(self);
                if (result instanceof derived) {
                    self = result;
                }
            }
            return self;
        }
        surrogate.prototype = derived.prototype;
        return surrogate as any;
    };
}

export function override(target: any, key: PropertyKey, descriptor?: PropertyDescriptor): void {
    const base = Reflect.getPrototypeOf(target);
    if ('function' !== typeof base[key]) {
        throw new Error(
            `Method "${target.constructor.name}#${key}" does not override any base class method`
        );
    }
}
