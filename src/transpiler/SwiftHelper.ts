import { Token, TokenStream } from 'antlr4ts';
import { SwiftLexer } from './generated/SwiftLexer';

export const WS = [SwiftLexer.WHITESPACE, SwiftLexer.LINE_BREAK];
export const OP_LWS = [
    SwiftLexer.WHITESPACE,
    SwiftLexer.LINE_BREAK,
    SwiftLexer.LEFT_PARENTHESIS,
    SwiftLexer.LEFT_BRACKET,
    SwiftLexer.LEFT_BRACE,
    SwiftLexer.COMMA,
    SwiftLexer.SEMICOLON,
    SwiftLexer.COLON
];
export const OP_RWS = [
    SwiftLexer.WHITESPACE,
    SwiftLexer.LINE_BREAK,
    SwiftLexer.RIGHT_PARENTHESIS,
    SwiftLexer.RIGHT_BRACKET,
    SwiftLexer.RIGHT_BRACE,
    SwiftLexer.COMMA,
    SwiftLexer.SEMICOLON,
    SwiftLexer.COLON,
    SwiftLexer.PERIOD
];
export function testLN(
    input: TokenStream,
    n: number,
    tokens: Array<string | number>,
    hidden: boolean = false,
    fallback: boolean = false
): boolean {
    const prop = 'string' === typeof tokens[0] ? 'text' : 'type';
    let tn: Token;
    if (hidden) {
        try {
            tn = input.get(input.index + n);
        } catch (e) {
            return fallback;
        }
    } else {
        tn = input.LT(n);
        if (tn.type === SwiftLexer.EOF) {
            return fallback;
        }
    }
    for (const t of tokens) {
        if (tn[prop] === t) {
            return true;
        }
    }
    return false;
}
export function isPreOp(input: TokenStream): boolean {
    return testLN(input, -1, OP_LWS, true, true) && !testLN(input, 1, OP_RWS, true, true);
}
export function isBinOp(input: TokenStream): boolean {
    return testLN(input, -1, WS, true) === testLN(input, 1, WS, true);
}
export function isPostOp(input: TokenStream): boolean {
    return !testLN(input, -1, OP_LWS, true, true) && testLN(input, 1, OP_RWS, true, true);
}
export function isStatementStarting(input: TokenStream): boolean {
    for (let i = input.index - 1; -1 < i; --i) {
        const t = input.get(i).type;
        if (t === SwiftLexer.LINE_BREAK || t === SwiftLexer.COMMA || t === SwiftLexer.LEFT_BRACE) {
            return true;
        } else if (t !== SwiftLexer.WHITESPACE) {
            return false;
        }
    }
    return true;
}
