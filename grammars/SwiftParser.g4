parser grammar SwiftParser
;

options
{
    tokenVocab = SwiftLexer;
}

@members {
static const int WS[];
static const int OP_LWS[];
static const int OP_RWS[];
//static const int OP_CHAR[];

bool testLN(int n, std::initializer_list<int> tokens, bool hidden = false, bool fallback = false)
{
    return testLN(n, tokens.begin(), tokens.size(), hidden, fallback);
}

bool testLN(int n, const int *tokens, size_t size, bool hidden = false, bool fallback = false)
{
    int tn;
    if (hidden)
    {
        try
        {
            tn = _input->get(_input->index() + n)->getType();
        }
        catch (antlr4::IndexOutOfBoundsException e)
        {
            return fallback;
        }
    }
    else
    {
        tn = _input->LA(n);
        if (tn == EOF)
            return fallback;
    }
    for (size_t i = 0; i < size; ++i)
        if (tn == tokens[i])
            return true;
    return false;
}

bool testLN(int n, std::initializer_list<std::string> tokens, bool hidden = false, bool fallback = false)
{
    std::string tn;
    if (hidden)
    {
        try
        {
            tn = _input->get(_input->index() + n)->getText();
        }
        catch (antlr4::IndexOutOfBoundsException e)
        {
            return fallback;
        }
    }
    else
    {
        tn = _input->LT(n)->getText();
        if (tn == "<EOF>")
            return fallback;
    }
    for (std::string t : tokens)
        if (tn == t)
            return true;
    return false;
}

/*
int tailOfOp()
{
    bool f1 = _input->LA(1) == PERIOD, f2;
    int i = 2;
    for (int tp = _input->LA(i); tp != -1; tp = _input->LA(++i))
    {
        f2 = true;
        for (int i = 0; i < 16; i++)
        {
            if (tp == OP_CHAR[i])
            {
                f2 = false;
                break;
            }
        }
        if (f2 && !(f1 && tp == PERIOD))
            break;
    }
    return i - 1;
}
*/

bool isPreOp()
{
    return testLN(-1, OP_LWS, 8, true, true) && !testLN(1, OP_RWS, 9, true, true);
}

bool isBinOp()
{
    return !(testLN(-1, WS, 2, true) ^ testLN(1, WS, 2, true));
}

bool isPostOp()
{
    return !testLN(-1, OP_LWS, 8, true, true) && testLN(1, OP_RWS, 9, true, true);
}

bool isStatementStarting()
{
    for (int i = _input->index() - 1; i > -1; --i)
    {
        int t = _input->get(i)->getType();
        if (t == LINE_BREAK || t == COMMA || t == LEFT_BRACE)
            return true;
        else if (t != WHITESPACE)
            return false;
    }
    return true;
}
}

@definitions {
const int SwiftParser::WS[]{
    SwiftParser::WHITESPACE,
    SwiftParser::LINE_BREAK
};
const int SwiftParser::OP_LWS[]{
    SwiftParser::WHITESPACE,
    SwiftParser::LINE_BREAK,
    SwiftParser::LEFT_PARENTHESIS,
    SwiftParser::LEFT_BRACKET,
    SwiftParser::LEFT_BRACE,
    SwiftParser::COMMA,
    SwiftParser::SEMICOLON,
    SwiftParser::COLON
};
const int SwiftParser::OP_RWS[]{
    SwiftParser::WHITESPACE,
    SwiftParser::LINE_BREAK,
    SwiftParser::RIGHT_PARENTHESIS,
    SwiftParser::RIGHT_BRACKET,
    SwiftParser::RIGHT_BRACE,
    SwiftParser::COMMA,
    SwiftParser::SEMICOLON,
    SwiftParser::COLON,
    SwiftParser::PERIOD
};
/*
const int SwiftParser::OP_CHAR[]{
    SwiftParser::SLASH,
    SwiftParser::EQUAL,
    SwiftParser::MINUS,
    SwiftParser::PLUS,
    SwiftParser::EXCLAMATION,
    SwiftParser::ASTERISK,
    SwiftParser::PERCENT,
    SwiftParser::LESS_THAN,
    SwiftParser::GREATER_THAN,
    SwiftParser::AMPERSAND,
    SwiftParser::PIPE,
    SwiftParser::CARET,
    SwiftParser::TILDE,
    SwiftParser::QUESTION,
    SwiftParser::OPERATOR_HEAD_OTHER,
    SwiftParser::OPERATOR_CHARACTER_OTHER
};
*/
}

program
    : statements EOF
;

// Lexical Structure
// =================

// GRAMMAR OF AN IDENTIFIER

identifier
    : 'associativity'
    | 'convenience'
    | 'dynamic'
    | 'didSet'
    | 'final'
    | 'get'
    | 'infix'
    | 'indirect'
    | 'lazy'
    | 'left'
    | 'mutating'
    | 'none'
    | 'nomutating'
    | 'optional'
    | 'override'
    | 'postfix'
    | 'precedence'
    | 'prefix'
    | 'Protocol'
    | 'required'
    | 'right'
    | 'set'
    | 'Type'
    | 'unowned'
    | 'weak'
    | 'willSet'
    | IDENTIFIER
    | QUOTED_IDENTIFIER
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

operator_
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
    | OPERATOR
;

prefixOperator
    : {isPreOp()}? operator_
;

postfixOperator
    : {isPostOp()}? operator_
;

binaryOperator
    : {isBinOp()}? operator_
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
    | type '.' ('Type' | 'Protocol') # metatypeType
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
    : '(' (functionTypeArgumentList ({testLN(1, {"..."})}? ELLIPSIS = operator_)?)? ')'
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
    : typeIdentifier ({isBinOp()}? '&' typeIdentifier)+
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
    : {isPreOp()}? '&' identifier
;

// GRAMMAR OF A TRY EXPRESSION

tryOperator
    : 'try' ({isPostOp()}? TYPE = ('?' | '!'))?
;

// GRAMMAR OF A BINARY EXPRESSION

binaryExpression
    : binaryOperator prefixExpression
    | (assignmentOperator | conditionalOperator) tryOperator? prefixExpression
    | typeCastingOperator
;

// GRAMMAR OF AN ASSIGNMENT OPERATOR

assignmentOperator
    : {isBinOp()}? '='
;

// GRAMMAR OF A CONDITIONAL OPERATOR

conditionalOperator
    : {testLN(-1, WS, 2, true) && testLN(1, WS, 2, true)}? '?' expression ':'
;

// GRAMMAR OF A TYPE-CASTING OPERATOR

typeCastingOperator
    : ('is' | 'as' ({isPostOp()}? ('?' | '!'))?) type
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

/**
 * '#colorLiteral' '('
 *     'red' ':' expression ','
 *     'green' ':' expression ','
 *     'blue' ':' expression ','
 *     'alpha' ':' expression
 * ')'
 *
 * '#fileLiteral' '(' 'resourceName' ':' expression ')'
 *
 * '#imageLiteral' '(' 'resourceName' ':' expression ')'
 */
playgroundLiteral
    : '#colorLiteral' '(' functionCallArgumentList ')'
    | ('#fileLiteral' | '#imageLiteral') '(' functionCallArgumentList ')'
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
    : closureParameterName (typeAnnotation ({testLN(1, {"..."})}? operator_)?)?
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

/**
 * 'unowned'
 *
 * 'unowned' 'safe'
 *
 * 'unowned' 'unsafe'
 */
captureSpecifier
    : 'weak'
    | 'unowned' ('(' IDENTIFIER ')')?
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
    : {isPostOp()}? ('?' | '!')
    | '[' functionCallArgumentList ']'
;

// GRAMMAR OF A SELECTOR EXPRESSION

/**
 * '#selector' '(' expression ')'
 *
 * '#selector' '(' 'getter' ':' expression ')'
 *
 * '#selector' '(' 'setter' ':' expression ')'
 */
selectorExpression
    : '#selector' '(' functionCallArgumentList ')'
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
    | postfixExpression {!testLN(-1, OP_LWS, 8, true, true)}? '!' # forcedValueExpression
    | postfixExpression {!testLN(-1, OP_LWS, 8, true, true)}? '?' # optionalChainingExpression
;

// GRAMMAR OF A FUNCTION CALL EXPRESSION

functionCallArgumentClause
    : '(' functionCallArgumentList? ')'
;

functionCallArgumentList
    : functionCallArgument (',' functionCallArgument)*
;

functionCallArgument
    : (('_' | identifier) ':')? (expression | operator_)
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

/**
 * compilationCondition '&&' compilationCondition
 *
 * compilationCondition '||' compilationCondition
 */
compilationCondition
    : platformCondition
    | identifier
    | booleanLiteral
    | '(' compilationCondition ')'
    | {isPreOp()}? '!' compilationCondition
    | compilationCondition binaryOperator compilationCondition
;

/**
 * 'os' ':' '(' operatingSystem ')'
 *
 * 'arch' ':' '(' archutecture ')'
 *
 * 'swift' ':' '(' '>=' swiftVersion ')'
 */
platformCondition
    : IDENTIFIER ('(' operatingSystem ')' | '(' architecture ')' | '(' prefixOperator swiftVersion ')')
;

operatingSystem
    : IDENTIFIER
;

architecture
    : IDENTIFIER
;

swiftVersion
    : DECIMAL_DIGITS ('.' DECIMAL_DIGITS)*
;

// GRAMMAR OF A LINE CONTROL STATEMENT

/**
 * '#sourceLocation' '(' ')'
 *
 * '#sourceLocation' '(' 'file' ':' fileName ',' 'line' ':' lineNumber ')'
 */
lineControlStatement
    : '#sourceLocation' '(' (file = IDENTIFIER ':' fileName ',' line = IDENTIFIER ':' lineNumber)? ')'
;

lineNumber
    : DECIMAL_DIGITS
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

/**
 * 'iOS'
 *
 * 'iOSApplicationExtension'
 *
 * 'macOS'
 *
 * 'macOSApplicationExtension'
 *
 * 'watchOS'
 *
 * 'tvOS'
 */
platformName
    : IDENTIFIER
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
    | operator_
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
    : {isBinOp()}? '=' expression
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
    : attributes? mutationModifier? 'get' codeBlock
;

setterClause
    : attributes? mutationModifier? 'set' setterName? codeBlock
;

setterName
    : '(' identifier ')'
;

getterSetterKeywordBlock
    : '{' (getterKeywordClause setterKeywordClause? | setterKeywordClause getterKeywordClause) '}'
;

getterKeywordClause
    : attributes? mutationModifier? 'get'
;

setterKeywordClause
    : attributes? mutationModifier? 'set'
;

willSetDidSetBlock
    : '{' (willSetClause didSetClause? | didSetClause willSetClause) '}'
;

willSetClause
    : attributes? 'willSet' setterName? codeBlock
;

didSetClause
    : attributes? 'didSet' setterName? codeBlock
;

// GRAMMAR OF A TYPE ALIAS DECLARATION

typealiasDeclaration
    : attributes? accessLevelModifier? 'typealias' typealiasName genericParameterClause? typealiasAssignment
;

typealiasName
    : identifier
;

typealiasAssignment
    : {isBinOp()}? '=' type
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
    | operator_
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
    : externalParameterName? localParameterName typeAnnotation (defaultArgumentClause | {testLN(1, {"..."})}? operator_)?
;

externalParameterName
    : '_'
    | identifier
;

localParameterName
    : identifier
;

defaultArgumentClause
    : {isBinOp()}? '=' expression
;

// GRAMMAR OF AN ENUMERATION DECLARATION

enumDeclaration
    : attributes? accessLevelModifier? (unionStyleEnum | rawValueStyleEnum)
;

unionStyleEnum
    : ('indirect')? 'enum' enumName genericParameterClause? typeInheritanceClause? genericWhereClause? '{' unionStyleEnumMembers? '}'
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
    : attributes? ('indirect')? 'case' unionStyleEnumCaseList
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
    : {isBinOp()}? '=' rawValueLiteral
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
    : attributes? (accessLevelModifier? ('final')? | 'final' accessLevelModifier) 'class' className genericParameterClause? typeInheritanceClause? genericWhereClause? classBody
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
    : attributes? declarationModifiers? 'init' {isPostOp()}? ('?' | '!')
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
    : 'prefix' 'operator' operator_
;

postfixOperatorDeclaration
    : 'postfix' 'operator' operator_
;

infixOperatorDeclaration
    : 'infix' 'operator' operator_ infixOperatorGroup?
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

/**
 * 'higherThan' ':' precedenceGroupNames
 *
 * 'lowerThan' ':' precedenceGroupNames
 */
precedenceGroupRelation
    : IDENTIFIER ':' precedenceGroupNames
;

/**
 * 'assignment' ':' booleanLiteral
 */
precedenceGroupAssignment
    : IDENTIFIER ':' booleanLiteral
;

precedenceGroupAssociativity
    : 'associativity' ':' ('left' | 'right' | 'none')
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
    | 'convenience'
    | 'dynamic'
    | 'final'
    | 'infix'
    | 'lazy'
    | 'optional'
    | 'override'
    | 'postfix'
    | 'prefix'
    | 'required'
    | 'static'
    | captureSpecifier
    | accessLevelModifier
    | mutationModifier
;

declarationModifiers
    : declarationModifier+
;

accessLevelModifier
    : ('private' | 'fileprivate' | 'internal' | 'public' | 'open') ('(' 'set' ')')?
;

mutationModifier
    : 'mutating'
    | 'nomutating'
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
    | operator_
    | '.'
    | ','
    | ':'
    | ';'
    | '='
    | '@'
    | '#'
    | '&'
    | '->'
    | '`'
    | '?'
    | '!'
;

// Patterns
// ========

// GRAMMAR OF A PATTERN

pattern
    : '_' typeAnnotation? # wildcardPattern
    | identifier typeAnnotation? # identifierPattern
    | ('var' | 'let') pattern # valueBindingPattern
    | tuplePattern typeAnnotation? # tuplePatternAlternative
    | typeIdentifier? '.' enumCaseName tuplePattern? # enumCasePattern
    | identifier {isPostOp()}? '?' # optionalPattern
    | 'is' type # isPattern
    | pattern 'as' type # asPattern
    | expression # expressionPattern
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

/**
 * typeIdentifier '==' type
 */
sameTypeRequirement
    : typeIdentifier binaryOperator type
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
