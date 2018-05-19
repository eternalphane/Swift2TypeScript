lexer grammar SwiftLexer
;

// Implicit tokens in parser
// =========================

// KEYWORDS USED IN DECLARATIONS

ASSOCIATEDTYPE
    : 'associatedtype'
;

CLASS
    : 'class'
;

DEINIT
    : 'deinit'
;

ENUM
    : 'enum'
;

EXTENSION
    : 'extension'
;

FILEPRIVATE
    : 'fileprivate'
;

FUNC
    : 'func'
;

IMPORT
    : 'import'
;

INIT
    : 'init'
;

INOUT
    : 'inout'
;

INTERNAL
    : 'internal'
;

LET
    : 'let'
;

OPEN
    : 'open'
;

OPERATOR_KEYWORD
    : 'operator'
;

PRECEDENCEGROUP
    : 'precedencegroup'
;

PRIVATE
    : 'private'
;

PROTOCOL
    : 'protocol'
;

PUBLIC
    : 'public'
;

STATIC
    : 'static'
;

STRUCT
    : 'struct'
;

SUBSCRIPT
    : 'subscript'
;

TYPEALIAS
    : 'typealias'
;

VAR
    : 'var'
;

// KEYWORDS USED IN STATEMENTS

BREAK
    : 'break'
;

CASE
    : 'case'
;

CONTINUE
    : 'continue'
;

DEFAULT
    : 'default'
;

DEFER
    : 'defer'
;

DO
    : 'do'
;

ELSE
    : 'else'
;

FALLTHROUGH
    : 'fallthrough'
;

FOR
    : 'for'
;

GUARD
    : 'guard'
;

IF
    : 'if'
;

IN
    : 'in'
;

REPEAT
    : 'repeat'
;

RETURN
    : 'return'
;

SWITCH
    : 'switch'
;

WHERE
    : 'where'
;

WHILE
    : 'while'
;

// KEYWORDS USED IN EXPRESSIONS AND TYPES

ANY
    : 'Any'
;

AS
    : 'as'
;

CATCH
    : 'catch'
;

FALSE
    : 'false'
;

IS
    : 'is'
;

NIL
    : 'nil'
;

RETHROWS
    : 'rethrows'
;

SELF
    : 'self'
;

SELF_TYPE
    : 'Self'
;

SUPER
    : 'super'
;

THROW
    : 'throw'
;

THROWS
    : 'throws'
;

TRUE
    : 'true'
;

TRY
    : 'try'
;

// KEYWORDS USED IN PATTERNS

UNDERSCORE
    : '_'
;

// KEYWORDS BEGIN WITH NUMBER SIGN (#)

AVAILABLE
    : '#available'
;

COLOR_LITERAL
    : '#colorLiteral'
;

COLUMN
    : '#column'
;

ELSE_DIRECTIVE
    : '#else'
;

ELSEIF_DIRECTIVE
    : '#elseif'
;

ENDIF_DIRECTIVE
    : '#endif'
;

FILE
    : '#file'
;

FILE_LITERAL
    : '#fileLiteral'
;

FUNCTION
    : '#function'
;

IF_DIRECTIVE
    : '#if'
;

IMAGE_LITERAL
    : '#imageLiteral'
;

KEY_PATH
    : '#keyPath'
;

LINE
    : '#line'
;

SELECTOR
    : '#selector'
;

SOURCE_LOCATION
    : '#sourceLocation'
;

// KEYWORDS RESERVED IN PARTICULAR CONTEXTS

ASSOCIATIVITY
    : 'associativity'
;

CONVENIENCE
    : 'convenience'
;

DYNAMIC
    : 'dynamic'
;

DID_SET
    : 'didSet'
;

FINAL
    : 'final'
;

GET
    : 'get'
;

INFIX
    : 'infix'
;

INDIRECT
    : 'indirect'
;

LAZY
    : 'lazy'
;

LEFT
    : 'left'
;

MUTATING
    : 'mutating'
;

NONE
    : 'none'
;

NOMUTATING
    : 'nomutating'
;

OPTIONAL
    : 'optional'
;

OVERRIDE
    : 'override'
;

POSTFIX
    : 'postfix'
;

PRECEDENCE
    : 'precedence'
;

PREFIX
    : 'prefix'
;

PROTOCOL_METATYPE
    : 'Protocol'
;

REQUIRED
    : 'required'
;

RIGHT
    : 'right'
;

SET
    : 'set'
;

TYPE
    : 'Type'
;

UNOWNED
    : 'unowned'
;

WEAK
    : 'weak'
;

WILL_SET
    : 'willSet'
;

// PUNCTUATIONS

AMPERSAND
    : '&'
;

ARROW
    : '->'
;

AT
    : '@'
;

COLON
    : ':'
;

COMMA
    : ','
;

EQUAL
    : '='
;

EXCLAMATION
    : '!'
;

GRAVE
    : '`'
;

LEFT_BRACE
    : '{'
;

LEFT_BRACKET
    : '['
;

LEFT_PARENTHESIS
    : '('
;

NUMBER
    : '#'
;

PERIOD
    : '.'
;

QUESTION
    : '?'
;

RIGHT_BRACE
    : '}'
;

RIGHT_BRACKET
    : ']'
;

RIGHT_PARENTHESIS
    : ')'
;

SEMICOLON
    : ';'
;

// OTHERS

ASTERISK
    : '*'
;

BACKSLASH
    : '\\'
;

CARET
    : '^'
;

GREATER_THAN
    : '>'
;

LESS_THAN
    : '<'
;

MINUS
    : '-'
;

PERCENT
    : '%'
;

PIPE
    : '|'
;

PLUS
    : '+'
;

SLASH
    : '/'
;

TILDE
    : '~'
;

// Lexical Structure
// =================

// GRAMMAR OF WHITESPACE

WHITESPACE
    : [\u0000\u0009\u000b\u000c\u0020]+ -> channel(HIDDEN)
;

LINE_BREAK
    : ('\u000a' | '\u000d' '\u000a'?)+ -> channel(HIDDEN)
;

COMMENT
    : '//' ~[\u000a\u000d]* LINE_BREAK -> skip
;

BLOCK_COMMENT
    : '/*' ('/'*? BLOCK_COMMENT | ('/'* | '*'*) ~[/*])*? '*'*? '*/' -> skip
;

// GRAMMAR OF AN IDENTIFIER

IDENTIFIER
    : IDENTIFIER_HEAD
    | ('_' | IDENTIFIER_HEAD) IDENTIFIER_CHARACTERS
;

fragment IDENTIFIER_HEAD
    : [a-zA-Z\u00a8\u00aa\u00ad\u00af\u00b2-\u00b5\u00b7-\u00ba\u00bc-\u00be\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u02ff\u0370-\u167f\u1681-\u180d\u180f-\u1dbf\u1e00-\u1fff\u200b-\u200d\u202a-\u202e\u203f-\u2040\u2054\u2060-\u206f\u2070-\u20cf\u2100-\u218f\u2460-\u24ff\u2776-\u2793\u2c00-\u2dff\u2e80-\u2fff\u3004-\u3007\u3021-\u302f\u3031-\u303f\u3040-\ud7ff\uf900-\ufd3d\ufd40-\ufdcf\ufdf0-\ufe1f\ufe30-\ufe44\ufe47-\ufffd\u{10000}-\u{1fffd}\u{20000}-\u{2fffd}\u{30000}-\u{3fffd}\u{40000}-\u{4fffd}\u{50000}-\u{5fffd}\u{60000}-\u{6fffd}\u{70000}-\u{7fffd}\u{80000}-\u{8fffd}\u{90000}-\u{9fffd}\u{a0000}-\u{afffd}\u{b0000}-\u{bfffd}\u{c0000}-\u{cfffd}\u{d0000}-\u{dfffd}\u{e0000}-\u{efffd}]
;

fragment IDENTIFIER_CHARACTER
    : [0-9_\u0300-\u036f\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]
    | IDENTIFIER_HEAD
;

fragment IDENTIFIER_CHARACTERS
    : IDENTIFIER_CHARACTER+
;

QUOTED_IDENTIFIER
    : '`' ('_' | IDENTIFIER) '`'
;

IMPLICIT_PARAMETER_NAME
    : '$' DECIMAL_DIGITS
;

// GRAMMAR OF AN INTEGER LITERAL

BINARY_LITERAL
    : '0b' BINARY_DIGIT BINARY_LITERAL_CHARACTERS?
;

fragment BINARY_DIGIT
    : [01]
;

fragment BINARY_LITERAL_CHARACTERS
    : (BINARY_DIGIT | '_')+
;

OCTAL_LITERAL
    : '0o' OCTAL_DIGIT OCTAL_LITERAL_CHARACTERS?
;

fragment OCTAL_DIGIT
    : [0-7]
;

fragment OCTAL_LITERAL_CHARACTERS
    : (OCTAL_DIGIT | '_')+
;

DECIMAL_DIGITS
    : DECIMAL_DIGIT+
;

DECIMAL_LITERAL
    : DECIMAL_DIGIT DECIMAL_LITERAL_CHARACTERS?
;

fragment DECIMAL_DIGIT
    : [0-9]
;

fragment DECIMAL_LITERAL_CHARACTERS
    : (DECIMAL_DIGIT | '_')+
;

HEXADECIMAL_LITERAL
    : '0x' HEXADECIMAL_DIGIT HEXADECIMAL_LITERAL_CHARACTERS?
;

fragment HEXADECIMAL_DIGIT
    : [0-9a-fA-F]
;

fragment HEXADECIMAL_LITERAL_CHARACTERS
    : (HEXADECIMAL_DIGIT | '_')+
;

// GRAMMAR OF A FLOATING-POINT LITERAL

FLOATING_POINT_LITERAL
    : DECIMAL_LITERAL DECIMAL_FRACTION? DECIMAL_EXPONENT?
    | HEXADECIMAL_LITERAL HEXADECIMAL_FRACTION? HEXADECIMAL_EXPONENT
;

fragment DECIMAL_FRACTION
    : '.' DECIMAL_LITERAL
;

fragment DECIMAL_EXPONENT
    : FLOATING_POINT_E SIGN? DECIMAL_LITERAL
;

fragment HEXADECIMAL_FRACTION
    : '.' HEXADECIMAL_DIGIT HEXADECIMAL_LITERAL_CHARACTERS?
;

fragment HEXADECIMAL_EXPONENT
    : FLOATING_POINT_P SIGN? DECIMAL_LITERAL
;

fragment FLOATING_POINT_E
    : [eE]
;

fragment FLOATING_POINT_P
    : [pP]
;

fragment SIGN
    : [-+]
;

// GRAMMAR OF A STRING LITERAL

STATIC_STRING_LITERAL
    : '"' QUOTED_TEXT_ITEM* '"'
    | '"""' MULTILINE_QUOTED_TEXT_ITEM*? '"""'
;

fragment QUOTED_TEXT_ITEM
    : ESCAPED_CHARACTER
    | ~["\\\u000a\u000d]
;

fragment MULTILINE_QUOTED_TEXT_ITEM
    : ESCAPED_CHARACTER
    | ESCAPED_NEWLINE
    | ~'\\'
;

INTERPOLATED_STRING_LITERAL
    : '"' INTERPOLATED_TEXT_ITEM* '"'
    | '"""' MULTILINE_INTERPOLATED_TEXT_ITEM*? '"""'
;

fragment INTERPOLATED_TEXT_ITEM
    : ESCAPED_EXPRESSION
    | QUOTED_TEXT_ITEM
;

fragment MULTILINE_INTERPOLATED_TEXT_ITEM
    : ESCAPED_EXPRESSION
    | MULTILINE_QUOTED_TEXT_ITEM
;

fragment ESCAPED_CHARACTER
    : '\\0'
    | '\\\\'
    | '\\t'
    | '\\n'
    | '\\r'
    | '\\"'
    | '\\\''
    | '\\u{' UNICODE_SCALAR_DIGITS '}'
;

fragment UNICODE_SCALAR_DIGITS
    : HEXADECIMAL_DIGIT+ {getText().length()<=8}?
;

fragment ESCAPED_EXPRESSION
    : '\\(' (STATIC_STRING_LITERAL | INTERPOLATED_STRING_LITERAL | .)*? ')'
;

fragment ESCAPED_NEWLINE
    : '\\' WHITESPACE? LINE_BREAK
;

// GRAMMAR OF OPERATORS

OPERATOR
    : OPERATOR_HEAD OPERATOR_CHARACTER*
    | DOT_OPERATOR_HEAD DOT_OPERATOR_CHARACTER+
;

fragment OPERATOR_HEAD
    : [/=\-+!*%<>&|^~?\u00a1-\u00a7\u00a9\u00ab\u00ac\u00ae\u00b0\u00b1\u00b6\u00bb\u00bf\u00d7\u00f7\u2016\u2017\u2020-\u2027\u2030-\u203e\u2041-\u2053\u2055-\u205e\u2190-\u23ff\u2500-\u2775\u2794-\u2bff\u2e00-\u2e7f\u3001-\u3003\u3008-\u3030]
;

fragment OPERATOR_CHARACTER
    : OPERATOR_HEAD
    | [\u0300-\u036f\u1dc0-\u1dff\u20d0-\u20ff\ufe00-\ufe0f\ufe20-\ufe2f\u{e0100}-\u{e01ef}]
;

fragment DOT_OPERATOR_HEAD
    : '.'
;

fragment DOT_OPERATOR_CHARACTER
    : '.'
    | OPERATOR_CHARACTER
;
