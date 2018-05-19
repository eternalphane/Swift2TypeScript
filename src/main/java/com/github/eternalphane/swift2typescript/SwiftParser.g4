parser grammar SwiftParser
;

options
{
    tokenVocab = SwiftLexer;
}

@members {
static final int[] opLWS = new int[] { WHITESPACE, LINE_BREAK, LEFT_PARENTHESIS, LEFT_BRACKET, LEFT_BRACE, COMMA, SEMICOLON, COLON };
static final int[] opRWS = new int[] { WHITESPACE, LINE_BREAK, RIGHT_PARENTHESIS, RIGHT_BRACKET, RIGHT_BRACE, COMMA, SEMICOLON, COLON, PERIOD };
static final int[] opChar = new int[] { SLASH, EQUAL, MINUS, PLUS, EXCLAMATION, ASTERISK, PERCENT, LESS_THAN, GREATER_THAN, AMPERSAND, PIPE, CARET, TILDE, QUESTION, OPERATOR_HEAD_OTHER, OPERATOR_CHARACTER_OTHER };

boolean testLN(int n, int... tokens) {
    return testLN(n, false, tokens);
}

boolean testLN(int n, boolean hidden, int... tokens) {
    return testLN(n, hidden, false, tokens);
}

boolean testLN(int n, boolean hidden, boolean fallback, int... tokens) {
    int i = _input.index() + n, nt;
    if (i < 0 || i >= _input.size()) {
        return fallback;
    }
    if (hidden) {
        nt = _input.get(i).getType();
    } else {
        nt = _input.LA(n);
    }
    for (int t : tokens) {
        if (nt == t) {
            return true;
        }
    }
    return false;
}

boolean testLN(int n, String... tokens) {
    return testLN(n, false, tokens);
}

boolean testLN(int n, boolean hidden, String... tokens) {
    return testLN(n, hidden, false, tokens);
}

boolean testLN(int n, boolean hidden, boolean fallback, String... tokens) {
    int i = _input.index() + n;
    String nt;
    if (i < 0 || i >= _input.size()) {
        return fallback;
    }
    if (hidden) {
        nt = _input.get(i).getText();
    } else {
        nt = _input.LT(n).getText();
    }
    for (String t : tokens) {
        if (nt.equals(t)) {
            return true;
        }
    }
    return false;
}

int tailOfOp() {
    boolean f1 = _input.LA(1) == PERIOD, f2;
    int i = 2;
    for (int tp = _input.LA(i); tp != -1; tp = _input.LA(++i)) {
        f2 = true;
        for (int t : opChar) {
            if (tp == t) {
                f2 = false;
                break;
            }
        }
        if (f2 && !(f1 && tp == PERIOD)) {
            break;
        }
    }
    return i - 1;
}

boolean isPreOp() {
    return isPreOp(tailOfOp());
}

boolean isPreOp(int size) {
    return testLN(-1, true, true, opLWS) && !testLN(size, true, true, opRWS);
}

boolean isBinOp() {
    return isBinOp(tailOfOp());
}

boolean isBinOp(int size) {
    return !(testLN(-1, true, WHITESPACE, LINE_BREAK) ^ testLN(size, true, WHITESPACE, LINE_BREAK));
}

boolean isPostOp() {
    return isPostOp(tailOfOp());
}

boolean isPostOp(int size) {
    return !testLN(-1, true, true, opLWS) && testLN(size, true, true, opRWS);
}

boolean isStatementStarting() {
    for (int i = _input.index() - 1; i > -1; i--) {
        int t = _input.get(i).getType();
        if (t == LINE_BREAK || t == COMMA || t == LEFT_BRACE) {
            return true;
        } else if (t != WHITESPACE) {
            return false;
        }
    }
    return true;
}
}

start
    : statements EOF
;

// Lexical Structure
// =================

// GRAMMAR OF AN IDENTIFIER

identifier
    : IDENTIFIER
    | '`' {!testLN(-1, true, WHITESPACE)}? ('_' | IDENTIFIER) {!testLN(-1, true, WHITESPACE)}? '`'
    | IMPLICIT_PARAMETER_NAME
;

identifierList
    : ('_' | identifier) (',' ('_' | identifier))*
;

// GRAMMAR OF A LITERAL

literal
    : numericLiteral
    | stringLiteral
    | booleanLiteral
    | nilLiteral
;

numericLiteral
    : integerLiteral
    | FLOATING_POINT_LITERAL
;

booleanLiteral
    : 'true'
    | 'false'
;

nilLiteral
    : 'nil'
;

// GRAMMAR OF AN INTEGER LITERAL

integerLiteral
    : BINARY_LITERAL
    | OCTAL_LITERAL
    | DECIMAL_DIGITS
    | DECIMAL_LITERAL
    | HEXADECIMAL_LITERAL
;

// GRAMMAR OF A STRING LITERAL

stringLiteral
    : STATIC_STRING_LITERAL
    | INTERPOLATED_STRING_LITERAL
;

// GRAMMAR OF OPERATORS

operator
    : operatorHead ({!testLN(-1, true, WHITESPACE)}? operatorCharacter)*
    | dotOperatorHead ({!testLN(-1, true, WHITESPACE)}? dotOperatorCharacter)+
;

operatorHead
    : '/'
    | '='
    | '-'
    | '+'
    | '!'
    | '*'
    | '%'
    | '<'
    | '>'
    | '&'
    | '|'
    | '^'
    | '~'
    | '?'
    | OPERATOR_HEAD_OTHER
;

operatorCharacter
    : operatorHead
    | OPERATOR_CHARACTER_OTHER
;

dotOperatorHead
    : '.'
;

dotOperatorCharacter
    : '.'
    | operatorCharacter
;

prefixOperator
    : {isPreOp()}? operator
;

postfixOperator
    : {isPostOp()}? operator
;

binaryOperator
    : {isBinOp()}? operator
;

// Types
// =====

// GRAMMAR OF A TYPE

type
    : '[' type ']' # arrayType
    | '[' type ':' type ']' # dictionaryType
    | attributes? functionTypeArgumentClause ('throws'? | 'rethrows') '->' type # functionType
    | typeIdentifier # generalType
    | tupleType # tupleTypeAlternative
    | type {isPostOp()}? '?' # optionalType
    | type {isPostOp()}? '!' # implicitlyUnwrappedOptionalType
    | protocolCompositionType # protocolCompositionTypeAlternative
    | type '.' {testLN(1, "Type", "Protocol")}? IDENTIFIER # metatypeType
    | 'Any' # anyType
    | 'Self' # selfType
    | '(' type ')' # quotedType
;

// GRAMMAR OF A TYPE ANNOTATION

typeAnnotation
    : ':' attributes? 'inout'? type
;

// GRAMMAR OF A TYPE IDENTIFIER

typeIdentifier
    : typeName genericArgumentClause? ('.' typeIdentifier)?
;

typeName
    : identifier
;

// GRAMMAR OF A TUPLE TYPE

tupleType
    : '(' (tupleTypeElement (',' tupleTypeElement)+)? ')'
;

tupleTypeElement
    : elementName typeAnnotation
    | type
;

elementName
    : '_'
    | identifier
;

// GRAMMAR OF A FUNCTION TYPE

functionTypeArgumentClause
    : '(' (functionTypeArgumentList ({testLN(1, "...")}? operator)?)? ')'
;

functionTypeArgumentList
    : functionTypeArgument (',' functionTypeArgumentList)*
;

functionTypeArgument
    : attributes? 'inout'? type
    | argumentLabel typeAnnotation
;

argumentLabel
    : '_' identifier?
;

// GRAMMAR OF A PROTOCOL COMPOSITION TYPE

protocolCompositionType
    : typeIdentifier ({isBinOp(1)}? '&' typeIdentifier)+
;

// GRAMMAR OF A TYPE INHERITANCE CLAUSE

typeInheritanceClause
    : ':' typeIdentifier (',' typeIdentifier)*
;

// Expressions
// ===========

// GRAMMAR OF AN EXPRESSION

expression
    : tryOperator? prefixExpression binaryExpression*
;

expressionList
    : expression
    | expression ',' expressionList
;

// GRAMMAR OF A PREFIX EXPRESSION

prefixExpression
    : inOutExpression
    | prefixOperator? postfixExpression
;

inOutExpression
    : {isPreOp(1)}? '&' identifier
;

// GRAMMAR OF A TRY EXPRESSION

tryOperator
    : 'try' ({isPostOp(1)}? ('?' | '!'))?
;

// GRAMMAR OF A BINARY EXPRESSION

binaryExpression
    : binaryOperator prefixExpression
    | (assignmentOperator | conditionalOperator) tryOperator? prefixExpression
    | typeCastingOperator
;

// GRAMMAR OF AN ASSIGNMENT OPERATOR

assignmentOperator
    : {isBinOp(1)}? '='
;

// GRAMMAR OF A CONDITIONAL OPERATOR

conditionalOperator
    : {testLN(-1, true, WHITESPACE, LINE_BREAK) && testLN(1, true, WHITESPACE, LINE_BREAK)}? '?' expression ':'
;

// GRAMMAR OF A TYPE-CASTING OPERATOR

typeCastingOperator
    : ('is' | 'as' ({isPostOp(1)}? ('?' | '!'))?) type
;

// GRAMMAR OF A PRIMARY EXPRESSION

primaryExpression
    : identifier genericArgumentClause?
    | literalExpression
    | selfExpression
    | superclassExpression
    | closureExpression
    | parenthesizedExpression
    | tupleExpression
    | implicitMemberExpression
    | wildcardExpression
    | keyPathExpression
    | selectorExpression
    | keyPathStringExpression
;

// GRAMMAR OF A LITERAL EXPRESSION

literalExpression
    : literal
    | arrayLiteral
    | dictionaryLiteral
    | playgroundLiteral
    | '#file'
    | '#line'
    | '#column'
    | '#function'
;

arrayLiteral
    : '[' expression (',' expression)* ','? ']'
;

dictionaryLiteral
    : '[' expression ':' expression (',' expression ':' expression)* ','? ']'
;

playgroundLiteral
    : '#colorLiteral' '(' {testLN(1, "red")}? IDENTIFIER ':' expression ',' {testLN(1, "green")}? IDENTIFIER ':' expression ',' {testLN(1, "blue")}? IDENTIFIER ':' expression ',' {testLN(1, "alpha")}? IDENTIFIER ':' expression ')'
    | ('#fileLiteral' | '#imageLiteral') '(' {testLN(1, "resourceName")}? IDENTIFIER ':' expression ')'
;

// GRAMMAR OF A SELF EXPRESSION

selfExpression
    : 'self'
    | selfMethodExpression
    | selfSubscriptExpression
    | selfInitializerExpression
;

selfMethodExpression
    : 'self' '.' identifier
;

selfSubscriptExpression
    : 'self' '[' functionCallArgumentList ']'
;

selfInitializerExpression
    : 'self' '.' 'init'
;

// GRAMMAR OF A SUPERCLASS EXPRESSION

superclassExpression
    : superclassMethodExpression
    | superclassSubscriptExpression
    | superclassInitializerExpression
;

superclassMethodExpression
    : 'super' '.' identifier
;

superclassSubscriptExpression
    : 'super' '[' functionCallArgumentList ']'
;

superclassInitializerExpression
    : 'super' '.' 'init'
;

// GRAMMAR OF A CLOSURE EXPRESSION

closureExpression
    : '{' closureSignature? statements? '}'
;

closureSignature
    : (captureList? closureParameterClause 'throws'? functionResult? | captureList) 'in'
;

closureParameterClause
    : '(' closureParameterList? ')'
    | identifierList
;

closureParameterList
    : closureParameter (',' closureParameter)*
;

closureParameter
    : closureParameterName (typeAnnotation ({testLN(1, "...")}? operator)?)?
;

closureParameterName
    : '_'? identifier
;

captureList
    : '[' captureListItem (',' captureListItem)* ']'
;

captureListItem
    : captureSpecifier? expression
;

captureSpecifier
    : {testLN(1, "weak")}? IDENTIFIER
    | {testLN(1, "unowned")}? IDENTIFIER ('(' {testLN(1, "safe", "unsafe")}? IDENTIFIER ')')?
;

// GRAMMAR OF A IMPLICIT MEMBER EXPRESSION

implicitMemberExpression
    : '.' identifier
;

// GRAMMAR OF A PARENTHESIZED EXPRESSION

parenthesizedExpression
    : '(' expression ')'
;

// GRAMMAR OF A TUPLE EXPRESSION

tupleExpression
    : '(' (tupleElement (',' tupleElement)+)? ')'
;

tupleElement
    : (('_' | identifier) ':')? expression
;

// GRAMMAR OF A WILDCARD EXPRESSION

wildcardExpression
    : '_'
;

// GRAMMAR OF A KEY-PATH EXPRESSION

keyPathExpression
    : '\\' type? '.' keyPathComponent ('.' keyPathComponent)+
;

keyPathComponent
    : identifier keyPathPostfix*
    | keyPathPostfix+
;

keyPathPostfix
    : {isPostOp(1)}? ('?' | '!')
    | '[' functionCallArgumentList ']'
;

// GRAMMAR OF A SELECTOR EXPRESSION

selectorExpression
    : '#selector' '(' ({testLN(1, "getter", "setter")}? IDENTIFIER ':')? expression ')'
;

// GRAMMAR OF A KEY-PATH STRING EXPRESSION

keyPathStringExpression
    : '#keyPath' '(' expression ')'
;

// GRAMMAR OF A POSTFIX EXPRESSION

postfixExpression
    : primaryExpression # generalPostfixExpression
    | postfixExpression postfixOperator # postfixOperatorExpression
    | postfixExpression {!isStatementStarting()}? (functionCallArgumentClause | functionCallArgumentClause? trailingClosure) # functionCallExpression
    | postfixExpression '.' 'init' ('(' argumentNames ')')? # initializerExpression
    | postfixExpression '.' (DECIMAL_DIGITS | identifier (genericArgumentClause? | '(' argumentNames ')')) # explicitMemberExpression
    | postfixExpression '.' 'self' # postfixSelfExpression
    | postfixExpression '[' functionCallArgumentList ']' # subscriptExpression
    | postfixExpression {!testLN(-1, true, true, opLWS)}? '!' # forcedValueExpression
    | postfixExpression {!testLN(-1, true, true, opLWS)}? '?' # optionalChainingExpression
;

// GRAMMAR OF A FUNCTION CALL EXPRESSION

functionCallArgumentClause
    : '(' functionCallArgumentList? ')'
;

functionCallArgumentList
    : functionCallArgument (',' functionCallArgument)*
;

functionCallArgument
    : (('_' | identifier) ':')? (expression | operator)
;

trailingClosure
    : closureExpression
;

// GRAMMAR OF AN EXPLICIT MEMBER EXPRESSION

argumentNames
    : (('_' | identifier) ':')+
;

// Statements
// ==========

// GRAMMAR OF A STATEMENT

statement
    : {isStatementStarting()}? (expression | declaration | loopStatement | branchStatement | labeledStatement | controlTransferStatement | deferStatement | doStatement) ';'?
    | compilerControlStatement
;

statements
    : statement+
;

// GRAMMAR OF A LOOP STATEMENT

loopStatement
    : forInStatement
    | whileStatement
    | repeatWhileStatement
;

// GRAMMAR OF A FOR-IN STATEMENT

forInStatement
    : 'for' 'case'? pattern 'in'? expression whereClause? codeBlock
;

// GRAMMAR OF A WHILE STATEMENT

whileStatement
    : 'while' conditionList codeBlock
;

conditionList
    : condition (',' condition)*
;

condition
    : expression
    | availabilityCondition
    | caseCondition
    | optionalBindingCondition
;

caseCondition
    : 'case' pattern initializer
;

optionalBindingCondition
    : ('let' | 'var') pattern initializer
;

// GRAMMAR OF A REPEAT-WHILE STATEMENT

repeatWhileStatement
    : 'repeat' codeBlock 'while' expression
;

// GRAMMAR OF A BRANCH STATEMENT

branchStatement
    : ifStatement
    | guardStatement
    | switchStatement
;

// GRAMMAR OF AN IF STATEMENT

ifStatement
    : 'if' conditionList codeBlock elseClause?
;

elseClause
    : 'else' (codeBlock | ifStatement)
;

// GRAMMAR OF A GUARD STATEMENT

guardStatement
    : 'guard' conditionList 'else' codeBlock
;

// GRAMMAR OF A SWITCH STATEMENT

switchStatement
    : 'switch' expression '{' switchCase* '}'
;

switchCase
    : (caseLabel | defaultLabel) statements
;

caseLabel
    : 'case' caseItemList ':'
;

caseItemList
    : pattern whereClause? (',' pattern whereClause?)*
;

defaultLabel
    : 'default' ':'
;

whereClause
    : 'where' expression
;

// GRAMMAR OF A LABELED STATEMENT

labeledStatement
    : statementLabel (loopStatement | ifStatement | switchStatement | doStatement)
;

statementLabel
    : labelName ':'
;

labelName
    : identifier
;

// GRAMMAR OF A CONTROL TRANSFER STATEMENT

controlTransferStatement
    : breakStatement
    | continueStatement
    | fallthroughStatement
    | returnStatement
    | throwStatement
;

// GRAMMAR OF A BREAK STATEMENT

breakStatement
    : 'break' labelName?
;

// GRAMMAR OF A CONTINUE STATEMENT

continueStatement
    : 'continue' labelName?
;

// GRAMMAR OF A FALLTHROUGH STATEMENT

fallthroughStatement
    : 'fallthrough'
;

// GRAMMAR OF A RETURN STATEMENT

returnStatement
    : 'return' expression?
;

// GRAMMAR OF A THROW STATEMENT

throwStatement
    : 'throw' expression
;

// GRAMMAR OF A DEFER STATEMENT

deferStatement
    : 'defer' codeBlock
;

// GRAMMAR OF A DO STATEMENT

doStatement
    : 'do' codeBlock catchClause*
;

catchClause
    : 'catch' pattern? whereClause? codeBlock
;

// GRAMMAR OF A COMPILER CONTROL STATEMENT

compilerControlStatement
    : conditionalCompilationBlock
    | lineControlStatement
;

// GRAMMAR OF A CONDITIONAL COMPILATION BLOCK

conditionalCompilationBlock
    : ifDirectiveClause elseifDirectiveClause* elseDirectiveClause? '#endif'
;

ifDirectiveClause
    : '#if' compilationCondition statements?
;

elseifDirectiveClause
    : '#elseif' compilationCondition statements?
;

elseDirectiveClause
    : '#else' statements?
;

compilationCondition
    : platformCondition
    | identifier
    | booleanLiteral
    | '(' compilationCondition ')'
    | {isPreOp(1)}? '!' compilationCondition
    | compilationCondition {testLN(1, "&&", "||")}? binaryOperator compilationCondition
;

platformCondition
    : {testLN(1, "os")}? IDENTIFIER '(' operatingSystem ')'
    | {testLN(1, "arch")}? IDENTIFIER '(' architecture ')'
    | {testLN(1, "swift")}? IDENTIFIER '(' {testLN(1, ">=")}? binaryOperator swiftVersion ')'
;

operatingSystem
    : {testLN(1, "macOS", "iOS", "watchOS", "tvOS")}? IDENTIFIER
;

architecture
    : {testLN(1, "i386", "x86_64", "arm", "arm64")}? IDENTIFIER
;

swiftVersion
    : DECIMAL_DIGITS ('.' DECIMAL_DIGITS)*
;

// GRAMMAR OF A LINE CONTROL STATEMENT

lineControlStatement
    : '#sourceLocation' '(' ({testLN(1, "file")}? IDENTIFIER ':' fileName ',' {testLN(1, "line")}? IDENTIFIER ':' lineNumber)? ')'
;

lineNumber
    : {Integer.parseInt(_input.LT(1).getText()) > 0}? DECIMAL_DIGITS
;

fileName
    : STATIC_STRING_LITERAL
;

// GRAMMAR OF AN AVAILABILITY CONDITION

availabilityCondition
    : '#available' '(' availabilityArgument (',' availabilityArgument)* ')'
;

availabilityArgument
    : '*'
    | platformName platformVersion
;

platformName
    : {testLN(1, "iOS", "iOSApplicationExtension­", "macOS­", "macOSApplicationExtension­", "watchOS", "tvOS")}? IDENTIFIER
;

platformVersion
    : DECIMAL_DIGITS ('.' DECIMAL_DIGITS ('.' DECIMAL_DIGITS)?)?
;

// Declarations
// ============

// GRAMMAR OF A DECLARATION

declaration
    : importDeclaration
    | constantDeclaration
    | variableDeclaration
    | typealiasDeclaration
    | functionDeclaration
    | enumDeclaration
    | structDeclaration
    | classDeclaration
    | protocolDeclaration
    | initializerDeclaration
    | deinitializerDeclaration
    | extensionDeclaration
    | subscriptDeclaration
    | operatorDeclaration
    | precedenceGroupDeclaration
;

// GRAMMAR OF A TOP-LEVEL DECLARATION

topLevelDeclaration
    : statements?
;

// GRAMMAR OF A CODE BLOCK

codeBlock
    : '{' statements? '}'
;

// GRAMMAR OF AN IMPORT DECLARATION

importDeclaration
    : attributes? 'import' importKind? importPath
;

importKind
    : 'typealias'
    | 'struct'
    | 'class'
    | 'enum'
    | 'protocol'
    | 'let'
    | 'var'
    | 'func'
;

importPath
    : importPathIdentifier ('.' importPathIdentifier)*
;

importPathIdentifier
    : identifier
    | operator
;

// GRAMMAR OF A CONSTANT DECLARATION

constantDeclaration
    : attributes? declarationModifiers? 'let' patternInitializerList
;

patternInitializerList
    : patternInitializer (',' patternInitializer)*
;

patternInitializer
    : pattern initializer?
;

initializer
    : {isBinOp(1)}? '=' expression
;

// GRAMMAR OF A VARIABLE DECLARATION

variableDeclaration
    : variableDeclarationHead (patternInitializerList | variableName (initializer willSetDidSetBlock | typeAnnotation (getterSetterBlock | getterSetterKeywordBlock | initializer? willSetDidSetBlock)))
;

variableDeclarationHead
    : attributes? declarationModifiers? 'var'
;

variableName
    : identifier
;

getterSetterBlock
    : codeBlock
    | '{' (getterClause setterClause? | setterClause getterClause) '}'
;

getterClause
    : attributes? mutationModifier? {testLN(1, "get")}? IDENTIFIER codeBlock
;

setterClause
    : attributes? mutationModifier? {testLN(1, "set")}? IDENTIFIER setterName? codeBlock
;

setterName
    : '(' identifier ')'
;

getterSetterKeywordBlock
    : '{' (getterKeywordClause setterKeywordClause? | setterKeywordClause getterKeywordClause) '}'
;

getterKeywordClause
    : attributes? mutationModifier? {testLN(1, "get")}? IDENTIFIER
;

setterKeywordClause
    : attributes? mutationModifier? {testLN(1, "set")}? IDENTIFIER
;

willSetDidSetBlock
    : '{' (willSetClause didSetClause? | didSetClause willSetClause) '}'
;

willSetClause
    : attributes? {testLN(1, "willSet")}? IDENTIFIER setterName? codeBlock
;

didSetClause
    : attributes? {testLN(1, "didSet")}? IDENTIFIER setterName? codeBlock
;

// GRAMMAR OF A TYPE ALIAS DECLARATION

typealiasDeclaration
    : attributes? accessLevelModifier? 'typealias' typealiasName genericParameterClause? typealiasAssignment
;

typealiasName
    : identifier
;

typealiasAssignment
    : {isBinOp(1)}? '=' type
;

// GRAMMAR OF A FUNCTION DECLARATION

functionDeclaration
    : functionHead functionName genericParameterClause? functionSignature genericWhereClause? functionBody?
;

functionHead
    : attributes? declarationModifiers? 'func'
;

functionName
    : identifier
    | operator
;

functionSignature
    : parameterClause ('throws' | 'rethrows')? functionResult?
;

functionResult
    : '->' attributes? type
;

functionBody
    : codeBlock
;

parameterClause
    : '(' parameterList? ')'
;

parameterList
    : parameter (',' parameter)*
;

parameter
    : externalParameterName? localParameterName typeAnnotation (defaultArgumentClause | {testLN(1, "...")}? operator)?
;

externalParameterName
    : '_'
    | identifier
;

localParameterName
    : identifier
;

defaultArgumentClause
    : {isBinOp(1)}? '=' expression
;

// GRAMMAR OF AN ENUMERATION DECLARATION

enumDeclaration
    : attributes? accessLevelModifier? (unionStyleEnum | rawValueStyleEnum)
;

unionStyleEnum
    : ({testLN(1, "indirect")}? IDENTIFIER)? 'enum' enumName genericParameterClause? typeInheritanceClause? genericWhereClause? '{' unionStyleEnumMembers? '}'
;

unionStyleEnumMembers
    : unionStyleEnumMember+
;

unionStyleEnumMember
    : declaration
    | unionStyleEnumCaseClause
    | compilerControlStatement
;

unionStyleEnumCaseClause
    : attributes? ({testLN(1, "indirect")}? IDENTIFIER)? 'case' unionStyleEnumCaseList
;

unionStyleEnumCaseList
    : unionStyleEnumCase (',' unionStyleEnumCase)*
;

unionStyleEnumCase
    : enumCaseName tupleType?
;

enumName
    : identifier
;

enumCaseName
    : identifier
;

rawValueStyleEnum
    : 'enum' enumName genericParameterClause? typeInheritanceClause genericWhereClause? '{' rawValueStyleEnumMembers '}'
;

rawValueStyleEnumMembers
    : rawValueStyleEnumMember+
;

rawValueStyleEnumMember
    : declaration
    | rawValueStyleEnumCaseClause
    | compilerControlStatement
;

rawValueStyleEnumCaseClause
    : attributes? 'case' rawValueStyleEnumCaseList
;

rawValueStyleEnumCaseList
    : rawValueStyleEnumCase (',' rawValueStyleEnumCase)*
;

rawValueStyleEnumCase
    : enumCaseName rawValueAssignment?
;

rawValueAssignment
    : {isBinOp(1)}? '=' rawValueLiteral
;

rawValueLiteral
    : numericLiteral
    | STATIC_STRING_LITERAL
    | booleanLiteral
;

// GRAMMAR OF A STRUCTURE DECLARATION

structDeclaration
    : attributes? accessLevelModifier? 'struct' structName genericParameterClause? typeInheritanceClause? genericWhereClause? structBody
;

structName
    : identifier
;

structBody
    : '{' structMembers? '}'
;

structMembers
    : structMember+
;

structMember
    : declaration
    | compilerControlStatement
;

// GRAMMAR OF A CLASS DECLARATION

classDeclaration
    : attributes? (accessLevelModifier? ({testLN(1, "final")}? IDENTIFIER)? | {testLN(1, "final")}? IDENTIFIER accessLevelModifier) 'class' className genericParameterClause? typeInheritanceClause? genericWhereClause? classBody
;

className
    : identifier
;

classBody
    : '{' classMembers? '}'
;

classMembers
    : classMember+
;

classMember
    : declaration
    | compilerControlStatement
;

// GRAMMAR OF A PROTOCOL DECLARATION

protocolDeclaration
    : attributes? accessLevelModifier? 'protocol' protocolName typeInheritanceClause? genericWhereClause? protocolBody
;

protocolName
    : identifier
;

protocolBody
    : '{' protocolMembers? '}'
;

protocolMembers
    : protocolMember+
;

protocolMember
    : protocolMemberDeclatation
    | compilerControlStatement
;

protocolMemberDeclatation
    : protocolPropertyDeclaration
    | protocolMethodDeclaration
    | protocolInitializerDeclaration
    | protocolSubscriptDeclaration
    | protocolAssociatedTypeDeclaration
    | typealiasDeclaration
;

// GRAMMAR OF A PROTOCOL PROPERTY DECLARATION

protocolPropertyDeclaration
    : variableDeclarationHead variableName typeAnnotation getterSetterKeywordBlock
;

// GRAMMAR OF A PROTOCOL METHOD DECLARATION

protocolMethodDeclaration
    : functionHead functionName genericParameterClause? functionSignature genericWhereClause?
;

// GRAMMAR OF A PROTOCOL INITIALIZER DECLARATION

protocolInitializerDeclaration
    : initializerHead genericParameterClause? parameterClause ('throws' | 'rethrows')? genericWhereClause?
;

// GRAMMAR OF A PROTOCOL SUBSCRIPT DECLARATION

protocolSubscriptDeclaration
    : subscriptHead subscriptResult genericWhereClause? getterSetterKeywordBlock
;

// GRAMMAR OF A PROTOCOL ASSOCIATED TYPE DECLARATION

protocolAssociatedTypeDeclaration
    : attributes? accessLevelModifier? 'associatedtype' typealiasName typeInheritanceClause? typealiasAssignment? genericWhereClause?
;

// GRAMMAR OF AN INITIALIZER DECLARATION

initializerDeclaration
    : initializerHead genericParameterClause? parameterClause ('throws' | 'rethrows')? genericWhereClause? initializerBody
;

initializerHead
    : attributes? declarationModifiers? 'init' {isPostOp(1)}? ('?' | '!')
;

initializerBody
    : codeBlock
;

// GRAMMAR OF A DEINITIALIZER DECLARATION

deinitializerDeclaration
    : attributes? 'deinit' codeBlock
;

// GRAMMAR OF AN EXTENSION DECLARATION

extensionDeclaration
    : attributes? accessLevelModifier? 'extension' typeIdentifier (typeInheritanceClause | genericWhereClause)? extensionBody
;

extensionBody
    : '{' extensionMembers? '}'
;

extensionMembers
    : extensionMember+
;

extensionMember
    : declaration
    | compilerControlStatement
;

// GRAMMAR OF A SUBSCRIPT DECLARATION

subscriptDeclaration
    : subscriptHead subscriptResult genericWhereClause? (getterSetterBlock | getterSetterKeywordBlock)
;

subscriptHead
    : attributes? declarationModifiers? 'subscript' genericParameterClause? parameterClause
;

subscriptResult
    : '->' attributes? type
;

// GRAMMAR OF AN OPERATOR DECLARATION

operatorDeclaration
    : prefixOperatorDeclaration
    | postfixOperatorDeclaration
    | infixOperatorDeclaration
;

prefixOperatorDeclaration
    : {testLN(1, "prefix")}? IDENTIFIER 'operator' operator
;

postfixOperatorDeclaration
    : {testLN(1, "postfix")}? IDENTIFIER 'operator' operator
;

infixOperatorDeclaration
    : {testLN(1, "infix")}? IDENTIFIER 'operator' operator infixOperatorGroup?
;

infixOperatorGroup
    : ':' precedenceGroupName
;

// GRAMMAR OF A PRECEDENCE GROUP DECLARATION

precedenceGroupDeclaration
    : 'precedencegroup' precedenceGroupName '{' precedenceGroupAttributes? '}'
;

precedenceGroupAttributes
    : precedenceGroupAttribute+
;

precedenceGroupAttribute
    : precedenceGroupRelation
    | precedenceGroupAssignment
    | precedenceGroupAssociativity
;

precedenceGroupRelation
    : {testLN(1, "higherThan", "lowerThan")}? IDENTIFIER ':' precedenceGroupNames
;

precedenceGroupAssignment
    : {testLN(1, "assignment")}? IDENTIFIER ':' booleanLiteral
;

precedenceGroupAssociativity
    : {testLN(1, "associativity")}? IDENTIFIER ':' {testLN(1, "left", "right", "none")}? IDENTIFIER
;

precedenceGroupNames
    : precedenceGroupName (',' precedenceGroupName)*
;

precedenceGroupName
    : identifier
;

// GRAMMAR OF A DECLARATION MODIFIER

declarationModifier
    : 'class'
    | 'static'
    | {testLN(1, "convenience", "dynamic", "final", "infix", "lazy", "optional", "override", "postfix", "prefix", "required", "unowned", "unowned(safe)", "unowned(unsafe)", "weak")}? IDENTIFIER
    | accessLevelModifier
    | mutationModifier
;

declarationModifiers
    : declarationModifier+
;

accessLevelModifier
    : ('private' | 'fileprivate' | 'internal' | 'public' | 'open') ('(' {testLN(1, "set")}? IDENTIFIER ')')?
;

mutationModifier
    : {testLN(1, "mutating", "nomutating")}? IDENTIFIER
;

// Attributes
// ==========

// GRAMMAR OF AN ATTRIBUTE

attribute
    : '@' attributeName attributeArgumentClause?
;

attributeName
    : identifier
;

attributeArgumentClause
    : '(' balancedTokens? ')'
;

attributes
    : attribute+
;

balancedTokens
    : balancedToken+
;

balancedToken
    : '(' balancedTokens ')'
    | '[' balancedTokens ']'
    | '{' balancedTokens '}'
    | identifier
    | literal
    | operator
;

// Patterns
// ========

// GRAMMAR OF A PATTERN

pattern
    : (wildcardPattern | identifierPattern | tuplePattern) typeAnnotation?
    | valueBindingPattern
    | enumCasePattern
    | optionalPattern
    | typeCastingPattern
    | expressionPattern
;

// GRAMMAR OF A WILDCARD PATTERN

wildcardPattern
    : '_'
;

// GRAMMAR OF AN IDENTIFIER PATTERN

identifierPattern
    : identifier
;

// GRAMMAR OF A VALUE-BINDING PATTERN

valueBindingPattern
    : ('var' | 'let') pattern
;

// GRAMMAR OF A TUPLE PATTERN

tuplePattern
    : '(' tuplePatternElementList? ')'
;

tuplePatternElementList
    : tuplePatternElement (',' tuplePatternElement)*
;

tuplePatternElement
    : (('_' | identifier) ':')? pattern
;

// GRAMMAR OF AN ENUMERATION CASE PATTERN

enumCasePattern
    : typeIdentifier? '.' enumCaseName tuplePattern?
;

// GRAMMAR OF AN OPTIONAL PATTERN

optionalPattern
    : identifier {isPostOp(1)}? '?'
;

// GRAMMAR OF A TYPE CASTING PATTERN

typeCastingPattern
    : isPattern
    | asPattern
;

isPattern
    : 'is' type
;

/* with left recursive:
 *
 * asPattern
 *     : pattern 'as' type
 * ;
 */

asPattern
    : ((wildcardPattern | identifierPattern | tuplePattern) typeAnnotation? | valueBindingPattern | enumCasePattern | optionalPattern | isPattern | expressionPattern) ('as' type)+
;

// GRAMMAR OF AN EXPRESSION PATTERN

expressionPattern
    : expression
;

// Generic Parameters and Arguments
// ================================

// GRAMMAR OF A GENERIC PARAMETER CLAUSE

genericParameterClause
    : '<' genericParameterList '>'
;

genericParameterList
    : genericParameter (',' genericParameter)*
;

genericParameter
    : typeName (':' (typeIdentifier | protocolCompositionType))?
;

genericWhereClause
    : 'where' requirementList
;

requirementList
    : requirement (',' requirement)*
;

requirement
    : conformanceRequirement
    | sameTypeRequirement
;

conformanceRequirement
    : typeIdentifier ':' (typeIdentifier | protocolCompositionType)
;

sameTypeRequirement
    : typeIdentifier {testLN(1, "==")}? binaryOperator type
;

// GRAMMAR OF A GENERIC ARGUMENT CLAUSE

genericArgumentClause
    : '<' genericArgumentList '>'
;

genericArgumentList
    : genericArgument (',' genericArgument)*
;

genericArgument
    : type
;
