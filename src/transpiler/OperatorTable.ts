class PrecedenceGroup {
    public assignment: boolean;
    public associativity: 'left' | 'right' | null;
    private _higherThan: WeakSet<PrecedenceGroup>;
    private _lowerThan: WeakSet<PrecedenceGroup>;

    constructor(assignment: boolean, associativity: 'left' | 'right' | null) {
        this.assignment = assignment;
        this.associativity = associativity;
    }

    public higherThan(pg: PrecedenceGroup): void {
        this._higherThan.add(pg);
        pg._lowerThan.add(this);
    }

    public isHigherThan(pg: PrecedenceGroup): boolean {
        return this._higherThan.has(pg);
    }

    public isLowerThan(pg: PrecedenceGroup): boolean {
        return this._lowerThan.has(pg);
    }

    public lowerThan(pg: PrecedenceGroup): void {
        this._lowerThan.add(pg);
        pg._higherThan.add(this);
    }
}

/**
 * Stores binary operators and their precedences.
 */
export class OperatorTable {
    private _operators: Map<string, string>;
    private _precedenceGroups: Map<string, PrecedenceGroup>;

    constructor() {
        // standard precedence groups
        // ==========================

        this.addPrecedenceGroup('AssignmentPrecedence', true, 'right');
        this.addPrecedenceGroup('FunctionArrowPrecedence', false, 'right', [
            'AssignmentPrecedence'
        ]);
        this.addPrecedenceGroup('TernaryPrecedence', false, 'right', ['FunctionArrowPrecedence']);
        this.addPrecedenceGroup('DefaultPrecedence', false, null, ['TernaryPrecedence']);
        this.addPrecedenceGroup('LogicalDisjunctionPrecedence', false, 'left', [
            'TernaryPrecedence'
        ]);
        this.addPrecedenceGroup('LogicalConjunctionPrecedence', false, 'left', [
            'LogicalDisjunctionPrecedence'
        ]);
        this.addPrecedenceGroup('ComparisonPrecedence', false, null, [
            'LogicalConjunctionPrecedence'
        ]);
        this.addPrecedenceGroup('NilCoalescingPrecedence', false, 'right', [
            'ComparisonPrecedence'
        ]);
        this.addPrecedenceGroup('CastingPrecedence', false, null, ['NilCoalescingPrecedence']);
        this.addPrecedenceGroup('RangeFormationPrecedence', false, null, ['CastingPrecedence']);
        this.addPrecedenceGroup('AdditionPrecedence', false, 'left', ['RangeFormationPrecedence']);
        this.addPrecedenceGroup('MultiplicationPrecedence', false, 'left', ['AdditionPrecedence']);
        this.addPrecedenceGroup('BitwiseShiftPrecedence', false, null, [
            'MultiplicationPrecedence'
        ]);

        // standard infix operators
        // ========================

        // exponentiative

        this.addOperator('<<', 'BitwiseShiftPrecedence');
        this.addOperator('&<<', 'BitwiseShiftPrecedence');
        this.addOperator('>>', 'BitwiseShiftPrecedence');
        this.addOperator('&>>', 'BitwiseShiftPrecedence');

        // multiplicative

        this.addOperator('*', 'MultiplicationPrecedence');
        this.addOperator('&*', 'MultiplicationPrecedence');
        this.addOperator('/', 'MultiplicationPrecedence');
        this.addOperator('%', 'MultiplicationPrecedence');
        this.addOperator('&', 'MultiplicationPrecedence');

        // additive

        this.addOperator('+', 'AdditionPrecedence');
        this.addOperator('&+', 'AdditionPrecedence');
        this.addOperator('-', 'AdditionPrecedence');
        this.addOperator('&-', 'AdditionPrecedence');
        this.addOperator('|', 'AdditionPrecedence');
        this.addOperator('^', 'AdditionPrecedence');
        // FIXME: is this the right precedence level for "..." ?
        this.addOperator('...', 'RangeFormationPrecedence');
        this.addOperator('..<', 'RangeFormationPrecedence');

        // coalescing

        this.addOperator('??', 'NilCoalescingPrecedence');

        // comparative

        this.addOperator('<', 'ComparisonPrecedence');
        this.addOperator('<=', 'ComparisonPrecedence');
        this.addOperator('>', 'ComparisonPrecedence');
        this.addOperator('>=', 'ComparisonPrecedence');
        this.addOperator('==', 'ComparisonPrecedence');
        this.addOperator('!=', 'ComparisonPrecedence');
        this.addOperator('===', 'ComparisonPrecedence');
        this.addOperator('!==', 'ComparisonPrecedence');
        this.addOperator('~=', 'ComparisonPrecedence');

        // conjunctive

        this.addOperator('&&', 'LogicalConjunctionPrecedence');

        // disjunctive

        this.addOperator('||', 'LogicalDisjunctionPrecedence');

        // compound

        this.addOperator('*=', 'AssignmentPrecedence');
        this.addOperator('&*=', 'AssignmentPrecedence');
        this.addOperator('/=', 'AssignmentPrecedence');
        this.addOperator('%=', 'AssignmentPrecedence');
        this.addOperator('+=', 'AssignmentPrecedence');
        this.addOperator('&+=', 'AssignmentPrecedence');
        this.addOperator('-=', 'AssignmentPrecedence');
        this.addOperator('&-=', 'AssignmentPrecedence');
        this.addOperator('<<=', 'AssignmentPrecedence');
        this.addOperator('&<<=', 'AssignmentPrecedence');
        this.addOperator('>>=', 'AssignmentPrecedence');
        this.addOperator('&>>=', 'AssignmentPrecedence');
        this.addOperator('&=', 'AssignmentPrecedence');
        this.addOperator('^=', 'AssignmentPrecedence');
        this.addOperator('|=', 'AssignmentPrecedence');
    }

    public addOperator(name: string, pg: string = 'DefaultPrecedence'): void {
        if (this._operators.has(name)) {
            // FIXME
            throw new Error(`Operator "${name}" already exist`);
        }
        if (!this._precedenceGroups.has(pg)) {
            // FIXME
            throw new Error(`Precedence group "${pg}" not exist`);
        }
        this._operators.set(name, pg);
    }

    public addPrecedenceGroup(
        name: string,
        assignment: boolean = false,
        associativity: 'left' | 'right' | null = null,
        higherThan: string[] = [],
        lowerThan: string[] = []
    ): void {
        if (this._precedenceGroups.has(name)) {
            // FIXME
            throw new Error(`Precedence group "${name}" already exist`);
        }
        const npg = new PrecedenceGroup(assignment, associativity);
        for (const name of higherThan) {
            if (!this._precedenceGroups.has(name)) {
                // FIXME
                throw new Error(`Precedence group "${name}" not exist`);
            }
            const lpg = this._precedenceGroups.get(name)!;
            lpg.lowerThan(npg);
            for (const pg of this._precedenceGroups.values()) {
                if (lpg.isHigherThan(pg)) {
                    pg.lowerThan(npg);
                }
            }
        }
        for (const name of lowerThan) {
            if (!this._precedenceGroups.has(name)) {
                // FIXME
                throw new Error(`Precedence group "${name}" not exist`);
            }
            const hpg = this._precedenceGroups.get(name)!;
            hpg.higherThan(npg);
            for (const pg of this._precedenceGroups.values()) {
                if (hpg.isLowerThan(pg)) {
                    pg.higherThan(npg);
                }
            }
        }
        this._precedenceGroups.set(name, npg);
    }

    public compare(op1: string, op2: string): number {
        if (!this._operators.has(op1)) {
            // FIXME
            throw new Error(`Operator "${op1}" not exist`);
        }
        if (!this._operators.has(op2)) {
            // FIXME
            throw new Error(`Operator "${op2}" not exist`);
        }
        const pg1 = this._precedenceGroups.get(this._operators.get(op1)!)!;
        const pg2 = this._precedenceGroups.get(this._operators.get(op2)!)!;
        if (pg1 === pg2 && pg1.associativity) {
            return { left: 0, right: -1 }[pg1.associativity];
        }
        if (pg1.isHigherThan(pg2)) {
            return 1;
        }
        if (pg1.isLowerThan(pg2)) {
            return -1;
        }
        return NaN;
    }
}
