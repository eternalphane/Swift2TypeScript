export type AbstractConstructor<T = any> = { prototype: T };
export type Constructor<T = any> = { prototype: T; new (...args: any[]): T };
export type Interface<T> = Pick<T, keyof T>;
