// Generated from ./grammar/SwiftParser.g4 by ANTLR 4.6-SNAPSHOT


import {
    WS, OP_LWS, OP_RWS, testLN, isPreOp, isBinOp, isPostOp, isStatementStarting
} from '../SwiftHelper';


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SwiftParserVisitor } from './SwiftParserVisitor';


export class SwiftParser extends Parser {
	public static readonly ASSOCIATEDTYPE=1;
	public static readonly CLASS=2;
	public static readonly DEINIT=3;
	public static readonly ENUM=4;
	public static readonly EXTENSION=5;
	public static readonly FILEPRIVATE=6;
	public static readonly FUNC=7;
	public static readonly IMPORT=8;
	public static readonly INIT=9;
	public static readonly INOUT=10;
	public static readonly INTERNAL=11;
	public static readonly LET=12;
	public static readonly OPEN=13;
	public static readonly OPERATOR_KEYWORD=14;
	public static readonly PRECEDENCEGROUP=15;
	public static readonly PRIVATE=16;
	public static readonly PROTOCOL=17;
	public static readonly PUBLIC=18;
	public static readonly STATIC=19;
	public static readonly STRUCT=20;
	public static readonly SUBSCRIPT=21;
	public static readonly TYPEALIAS=22;
	public static readonly VAR=23;
	public static readonly BREAK=24;
	public static readonly CASE=25;
	public static readonly CONTINUE=26;
	public static readonly DEFAULT=27;
	public static readonly DEFER=28;
	public static readonly DO=29;
	public static readonly ELSE=30;
	public static readonly FALLTHROUGH=31;
	public static readonly FOR=32;
	public static readonly GUARD=33;
	public static readonly IF=34;
	public static readonly IN=35;
	public static readonly REPEAT=36;
	public static readonly RETURN=37;
	public static readonly SWITCH=38;
	public static readonly WHERE=39;
	public static readonly WHILE=40;
	public static readonly ANY=41;
	public static readonly AS=42;
	public static readonly CATCH=43;
	public static readonly FALSE=44;
	public static readonly IS=45;
	public static readonly NIL=46;
	public static readonly RETHROWS=47;
	public static readonly SELF=48;
	public static readonly SELF_TYPE=49;
	public static readonly SUPER=50;
	public static readonly THROW=51;
	public static readonly THROWS=52;
	public static readonly TRUE=53;
	public static readonly TRY=54;
	public static readonly UNDERSCORE=55;
	public static readonly AVAILABLE=56;
	public static readonly COLOR_LITERAL=57;
	public static readonly COLUMN=58;
	public static readonly ELSE_DIRECTIVE=59;
	public static readonly ELSEIF_DIRECTIVE=60;
	public static readonly ENDIF_DIRECTIVE=61;
	public static readonly FILE=62;
	public static readonly FILE_LITERAL=63;
	public static readonly FUNCTION=64;
	public static readonly IF_DIRECTIVE=65;
	public static readonly IMAGE_LITERAL=66;
	public static readonly KEY_PATH=67;
	public static readonly LINE=68;
	public static readonly SELECTOR=69;
	public static readonly SOURCE_LOCATION=70;
	public static readonly ASSOCIATIVITY=71;
	public static readonly CONVENIENCE=72;
	public static readonly DYNAMIC=73;
	public static readonly DID_SET=74;
	public static readonly FINAL=75;
	public static readonly GET=76;
	public static readonly INFIX=77;
	public static readonly INDIRECT=78;
	public static readonly LAZY=79;
	public static readonly LEFT=80;
	public static readonly MUTATING=81;
	public static readonly NONE=82;
	public static readonly NOMUTATING=83;
	public static readonly OPTIONAL=84;
	public static readonly OVERRIDE=85;
	public static readonly POSTFIX=86;
	public static readonly PRECEDENCE=87;
	public static readonly PREFIX=88;
	public static readonly PROTOCOL_METATYPE=89;
	public static readonly REQUIRED=90;
	public static readonly RIGHT=91;
	public static readonly SET=92;
	public static readonly TYPE=93;
	public static readonly UNOWNED=94;
	public static readonly WEAK=95;
	public static readonly WILL_SET=96;
	public static readonly AMPERSAND=97;
	public static readonly ARROW=98;
	public static readonly AT=99;
	public static readonly COLON=100;
	public static readonly COMMA=101;
	public static readonly EQUAL=102;
	public static readonly EXCLAMATION=103;
	public static readonly GRAVE=104;
	public static readonly LEFT_BRACE=105;
	public static readonly LEFT_BRACKET=106;
	public static readonly LEFT_PARENTHESIS=107;
	public static readonly NUMBER=108;
	public static readonly PERIOD=109;
	public static readonly QUESTION=110;
	public static readonly RIGHT_BRACE=111;
	public static readonly RIGHT_BRACKET=112;
	public static readonly RIGHT_PARENTHESIS=113;
	public static readonly SEMICOLON=114;
	public static readonly ASTERISK=115;
	public static readonly BACKSLASH=116;
	public static readonly CARET=117;
	public static readonly GREATER_THAN=118;
	public static readonly LESS_THAN=119;
	public static readonly MINUS=120;
	public static readonly PERCENT=121;
	public static readonly PIPE=122;
	public static readonly PLUS=123;
	public static readonly SLASH=124;
	public static readonly TILDE=125;
	public static readonly WHITESPACE=126;
	public static readonly LINE_BREAK=127;
	public static readonly COMMENT=128;
	public static readonly BLOCK_COMMENT=129;
	public static readonly IDENTIFIER=130;
	public static readonly QUOTED_IDENTIFIER=131;
	public static readonly IMPLICIT_PARAMETER_NAME=132;
	public static readonly BINARY_LITERAL=133;
	public static readonly OCTAL_LITERAL=134;
	public static readonly DECIMAL_DIGITS=135;
	public static readonly DECIMAL_LITERAL=136;
	public static readonly HEXADECIMAL_LITERAL=137;
	public static readonly FLOATING_POINT_LITERAL=138;
	public static readonly STATIC_STRING_LITERAL=139;
	public static readonly INTERPOLATED_STRING_LITERAL=140;
	public static readonly OPERATOR=141;
	public static readonly RULE_program = 0;
	public static readonly RULE_identifier = 1;
	public static readonly RULE_identifierList = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_numericLiteral = 4;
	public static readonly RULE_booleanLiteral = 5;
	public static readonly RULE_nilLiteral = 6;
	public static readonly RULE_integerLiteral = 7;
	public static readonly RULE_stringLiteral = 8;
	public static readonly RULE_operator = 9;
	public static readonly RULE_prefixOperator = 10;
	public static readonly RULE_postfixOperator = 11;
	public static readonly RULE_binaryOperator = 12;
	public static readonly RULE_type = 13;
	public static readonly RULE_typeAnnotation = 14;
	public static readonly RULE_typeIdentifier = 15;
	public static readonly RULE_typeName = 16;
	public static readonly RULE_tupleType = 17;
	public static readonly RULE_tupleTypeElement = 18;
	public static readonly RULE_elementName = 19;
	public static readonly RULE_functionTypeArgumentClause = 20;
	public static readonly RULE_functionTypeArgumentList = 21;
	public static readonly RULE_functionTypeArgument = 22;
	public static readonly RULE_argumentLabel = 23;
	public static readonly RULE_protocolCompositionType = 24;
	public static readonly RULE_typeInheritanceClause = 25;
	public static readonly RULE_expression = 26;
	public static readonly RULE_expressionList = 27;
	public static readonly RULE_prefixExpression = 28;
	public static readonly RULE_inOutExpression = 29;
	public static readonly RULE_tryOperator = 30;
	public static readonly RULE_binaryExpression = 31;
	public static readonly RULE_assignmentOperator = 32;
	public static readonly RULE_conditionalOperator = 33;
	public static readonly RULE_typeCastingOperator = 34;
	public static readonly RULE_primaryExpression = 35;
	public static readonly RULE_literalExpression = 36;
	public static readonly RULE_arrayLiteral = 37;
	public static readonly RULE_dictionaryLiteral = 38;
	public static readonly RULE_playgroundLiteral = 39;
	public static readonly RULE_selfExpression = 40;
	public static readonly RULE_selfMethodExpression = 41;
	public static readonly RULE_selfSubscriptExpression = 42;
	public static readonly RULE_selfInitializerExpression = 43;
	public static readonly RULE_superclassExpression = 44;
	public static readonly RULE_superclassMethodExpression = 45;
	public static readonly RULE_superclassSubscriptExpression = 46;
	public static readonly RULE_superclassInitializerExpression = 47;
	public static readonly RULE_closureExpression = 48;
	public static readonly RULE_closureSignature = 49;
	public static readonly RULE_closureParameterClause = 50;
	public static readonly RULE_closureParameterList = 51;
	public static readonly RULE_closureParameter = 52;
	public static readonly RULE_closureParameterName = 53;
	public static readonly RULE_captureList = 54;
	public static readonly RULE_captureListItem = 55;
	public static readonly RULE_captureSpecifier = 56;
	public static readonly RULE_implicitMemberExpression = 57;
	public static readonly RULE_parenthesizedExpression = 58;
	public static readonly RULE_tupleExpression = 59;
	public static readonly RULE_tupleElement = 60;
	public static readonly RULE_wildcardExpression = 61;
	public static readonly RULE_keyPathExpression = 62;
	public static readonly RULE_keyPathComponent = 63;
	public static readonly RULE_keyPathPostfix = 64;
	public static readonly RULE_selectorExpression = 65;
	public static readonly RULE_keyPathStringExpression = 66;
	public static readonly RULE_postfixExpression = 67;
	public static readonly RULE_functionCallArgumentClause = 68;
	public static readonly RULE_functionCallArgumentList = 69;
	public static readonly RULE_functionCallArgument = 70;
	public static readonly RULE_trailingClosure = 71;
	public static readonly RULE_argumentNames = 72;
	public static readonly RULE_argumentName = 73;
	public static readonly RULE_statement = 74;
	public static readonly RULE_statements = 75;
	public static readonly RULE_loopStatement = 76;
	public static readonly RULE_forInStatement = 77;
	public static readonly RULE_whileStatement = 78;
	public static readonly RULE_conditionList = 79;
	public static readonly RULE_condition = 80;
	public static readonly RULE_caseCondition = 81;
	public static readonly RULE_optionalBindingCondition = 82;
	public static readonly RULE_repeatWhileStatement = 83;
	public static readonly RULE_branchStatement = 84;
	public static readonly RULE_ifStatement = 85;
	public static readonly RULE_elseClause = 86;
	public static readonly RULE_guardStatement = 87;
	public static readonly RULE_switchStatement = 88;
	public static readonly RULE_switchCase = 89;
	public static readonly RULE_caseLabel = 90;
	public static readonly RULE_caseItemList = 91;
	public static readonly RULE_defaultLabel = 92;
	public static readonly RULE_whereClause = 93;
	public static readonly RULE_labeledStatement = 94;
	public static readonly RULE_statementLabel = 95;
	public static readonly RULE_labelName = 96;
	public static readonly RULE_controlTransferStatement = 97;
	public static readonly RULE_breakStatement = 98;
	public static readonly RULE_continueStatement = 99;
	public static readonly RULE_fallthroughStatement = 100;
	public static readonly RULE_returnStatement = 101;
	public static readonly RULE_throwStatement = 102;
	public static readonly RULE_deferStatement = 103;
	public static readonly RULE_doStatement = 104;
	public static readonly RULE_catchClause = 105;
	public static readonly RULE_compilerControlStatement = 106;
	public static readonly RULE_conditionalCompilationBlock = 107;
	public static readonly RULE_ifDirectiveClause = 108;
	public static readonly RULE_elseifDirectiveClause = 109;
	public static readonly RULE_elseDirectiveClause = 110;
	public static readonly RULE_compilationCondition = 111;
	public static readonly RULE_platformCondition = 112;
	public static readonly RULE_operatingSystem = 113;
	public static readonly RULE_architecture = 114;
	public static readonly RULE_swiftVersion = 115;
	public static readonly RULE_lineControlStatement = 116;
	public static readonly RULE_lineNumber = 117;
	public static readonly RULE_fileName = 118;
	public static readonly RULE_availabilityCondition = 119;
	public static readonly RULE_availabilityArgument = 120;
	public static readonly RULE_platformName = 121;
	public static readonly RULE_platformVersion = 122;
	public static readonly RULE_declaration = 123;
	public static readonly RULE_topLevelDeclaration = 124;
	public static readonly RULE_codeBlock = 125;
	public static readonly RULE_importDeclaration = 126;
	public static readonly RULE_importKind = 127;
	public static readonly RULE_importPath = 128;
	public static readonly RULE_importPathIdentifier = 129;
	public static readonly RULE_constantDeclaration = 130;
	public static readonly RULE_patternInitializerList = 131;
	public static readonly RULE_patternInitializer = 132;
	public static readonly RULE_initializer = 133;
	public static readonly RULE_variableDeclaration = 134;
	public static readonly RULE_variableDeclarationHead = 135;
	public static readonly RULE_variableName = 136;
	public static readonly RULE_getterSetterBlock = 137;
	public static readonly RULE_getterClause = 138;
	public static readonly RULE_setterClause = 139;
	public static readonly RULE_setterName = 140;
	public static readonly RULE_getterSetterKeywordBlock = 141;
	public static readonly RULE_getterKeywordClause = 142;
	public static readonly RULE_setterKeywordClause = 143;
	public static readonly RULE_willSetDidSetBlock = 144;
	public static readonly RULE_willSetClause = 145;
	public static readonly RULE_didSetClause = 146;
	public static readonly RULE_typealiasDeclaration = 147;
	public static readonly RULE_typealiasName = 148;
	public static readonly RULE_typealiasAssignment = 149;
	public static readonly RULE_functionDeclaration = 150;
	public static readonly RULE_functionHead = 151;
	public static readonly RULE_functionName = 152;
	public static readonly RULE_functionSignature = 153;
	public static readonly RULE_functionResult = 154;
	public static readonly RULE_functionBody = 155;
	public static readonly RULE_parameterClause = 156;
	public static readonly RULE_parameterList = 157;
	public static readonly RULE_parameter = 158;
	public static readonly RULE_externalParameterName = 159;
	public static readonly RULE_localParameterName = 160;
	public static readonly RULE_defaultArgumentClause = 161;
	public static readonly RULE_enumDeclaration = 162;
	public static readonly RULE_unionStyleEnum = 163;
	public static readonly RULE_unionStyleEnumMembers = 164;
	public static readonly RULE_unionStyleEnumMember = 165;
	public static readonly RULE_unionStyleEnumCaseClause = 166;
	public static readonly RULE_unionStyleEnumCaseList = 167;
	public static readonly RULE_unionStyleEnumCase = 168;
	public static readonly RULE_enumName = 169;
	public static readonly RULE_enumCaseName = 170;
	public static readonly RULE_rawValueStyleEnum = 171;
	public static readonly RULE_rawValueStyleEnumMembers = 172;
	public static readonly RULE_rawValueStyleEnumMember = 173;
	public static readonly RULE_rawValueStyleEnumCaseClause = 174;
	public static readonly RULE_rawValueStyleEnumCaseList = 175;
	public static readonly RULE_rawValueStyleEnumCase = 176;
	public static readonly RULE_rawValueAssignment = 177;
	public static readonly RULE_rawValueLiteral = 178;
	public static readonly RULE_structDeclaration = 179;
	public static readonly RULE_structName = 180;
	public static readonly RULE_structBody = 181;
	public static readonly RULE_structMembers = 182;
	public static readonly RULE_structMember = 183;
	public static readonly RULE_classDeclaration = 184;
	public static readonly RULE_className = 185;
	public static readonly RULE_classBody = 186;
	public static readonly RULE_classMembers = 187;
	public static readonly RULE_classMember = 188;
	public static readonly RULE_protocolDeclaration = 189;
	public static readonly RULE_protocolName = 190;
	public static readonly RULE_protocolBody = 191;
	public static readonly RULE_protocolMembers = 192;
	public static readonly RULE_protocolMember = 193;
	public static readonly RULE_protocolMemberDeclaration = 194;
	public static readonly RULE_protocolPropertyDeclaration = 195;
	public static readonly RULE_protocolMethodDeclaration = 196;
	public static readonly RULE_protocolInitializerDeclaration = 197;
	public static readonly RULE_protocolSubscriptDeclaration = 198;
	public static readonly RULE_protocolAssociatedTypeDeclaration = 199;
	public static readonly RULE_initializerDeclaration = 200;
	public static readonly RULE_initializerHead = 201;
	public static readonly RULE_initializerBody = 202;
	public static readonly RULE_deinitializerDeclaration = 203;
	public static readonly RULE_extensionDeclaration = 204;
	public static readonly RULE_extensionBody = 205;
	public static readonly RULE_extensionMembers = 206;
	public static readonly RULE_extensionMember = 207;
	public static readonly RULE_subscriptDeclaration = 208;
	public static readonly RULE_subscriptHead = 209;
	public static readonly RULE_subscriptResult = 210;
	public static readonly RULE_operatorDeclaration = 211;
	public static readonly RULE_prefixOperatorDeclaration = 212;
	public static readonly RULE_postfixOperatorDeclaration = 213;
	public static readonly RULE_infixOperatorDeclaration = 214;
	public static readonly RULE_infixOperatorGroup = 215;
	public static readonly RULE_precedenceGroupDeclaration = 216;
	public static readonly RULE_precedenceGroupAttributes = 217;
	public static readonly RULE_precedenceGroupAttribute = 218;
	public static readonly RULE_precedenceGroupRelation = 219;
	public static readonly RULE_precedenceGroupAssignment = 220;
	public static readonly RULE_precedenceGroupAssociativity = 221;
	public static readonly RULE_precedenceGroupNames = 222;
	public static readonly RULE_precedenceGroupName = 223;
	public static readonly RULE_declarationModifier = 224;
	public static readonly RULE_declarationModifiers = 225;
	public static readonly RULE_accessLevelModifier = 226;
	public static readonly RULE_mutationModifier = 227;
	public static readonly RULE_attribute = 228;
	public static readonly RULE_attributeName = 229;
	public static readonly RULE_attributeArgumentClause = 230;
	public static readonly RULE_attributes = 231;
	public static readonly RULE_balancedTokens = 232;
	public static readonly RULE_balancedToken = 233;
	public static readonly RULE_pattern = 234;
	public static readonly RULE_tuplePattern = 235;
	public static readonly RULE_tuplePatternElementList = 236;
	public static readonly RULE_tuplePatternElement = 237;
	public static readonly RULE_genericParameterClause = 238;
	public static readonly RULE_genericParameterList = 239;
	public static readonly RULE_genericParameter = 240;
	public static readonly RULE_genericWhereClause = 241;
	public static readonly RULE_requirementList = 242;
	public static readonly RULE_requirement = 243;
	public static readonly RULE_conformanceRequirement = 244;
	public static readonly RULE_sameTypeRequirement = 245;
	public static readonly RULE_genericArgumentClause = 246;
	public static readonly RULE_genericArgumentList = 247;
	public static readonly RULE_genericArgument = 248;
	public static readonly ruleNames: string[] = [
		"program", "identifier", "identifierList", "literal", "numericLiteral", 
		"booleanLiteral", "nilLiteral", "integerLiteral", "stringLiteral", "operator", 
		"prefixOperator", "postfixOperator", "binaryOperator", "type", "typeAnnotation", 
		"typeIdentifier", "typeName", "tupleType", "tupleTypeElement", "elementName", 
		"functionTypeArgumentClause", "functionTypeArgumentList", "functionTypeArgument", 
		"argumentLabel", "protocolCompositionType", "typeInheritanceClause", "expression", 
		"expressionList", "prefixExpression", "inOutExpression", "tryOperator", 
		"binaryExpression", "assignmentOperator", "conditionalOperator", "typeCastingOperator", 
		"primaryExpression", "literalExpression", "arrayLiteral", "dictionaryLiteral", 
		"playgroundLiteral", "selfExpression", "selfMethodExpression", "selfSubscriptExpression", 
		"selfInitializerExpression", "superclassExpression", "superclassMethodExpression", 
		"superclassSubscriptExpression", "superclassInitializerExpression", "closureExpression", 
		"closureSignature", "closureParameterClause", "closureParameterList", 
		"closureParameter", "closureParameterName", "captureList", "captureListItem", 
		"captureSpecifier", "implicitMemberExpression", "parenthesizedExpression", 
		"tupleExpression", "tupleElement", "wildcardExpression", "keyPathExpression", 
		"keyPathComponent", "keyPathPostfix", "selectorExpression", "keyPathStringExpression", 
		"postfixExpression", "functionCallArgumentClause", "functionCallArgumentList", 
		"functionCallArgument", "trailingClosure", "argumentNames", "argumentName", 
		"statement", "statements", "loopStatement", "forInStatement", "whileStatement", 
		"conditionList", "condition", "caseCondition", "optionalBindingCondition", 
		"repeatWhileStatement", "branchStatement", "ifStatement", "elseClause", 
		"guardStatement", "switchStatement", "switchCase", "caseLabel", "caseItemList", 
		"defaultLabel", "whereClause", "labeledStatement", "statementLabel", "labelName", 
		"controlTransferStatement", "breakStatement", "continueStatement", "fallthroughStatement", 
		"returnStatement", "throwStatement", "deferStatement", "doStatement", 
		"catchClause", "compilerControlStatement", "conditionalCompilationBlock", 
		"ifDirectiveClause", "elseifDirectiveClause", "elseDirectiveClause", "compilationCondition", 
		"platformCondition", "operatingSystem", "architecture", "swiftVersion", 
		"lineControlStatement", "lineNumber", "fileName", "availabilityCondition", 
		"availabilityArgument", "platformName", "platformVersion", "declaration", 
		"topLevelDeclaration", "codeBlock", "importDeclaration", "importKind", 
		"importPath", "importPathIdentifier", "constantDeclaration", "patternInitializerList", 
		"patternInitializer", "initializer", "variableDeclaration", "variableDeclarationHead", 
		"variableName", "getterSetterBlock", "getterClause", "setterClause", "setterName", 
		"getterSetterKeywordBlock", "getterKeywordClause", "setterKeywordClause", 
		"willSetDidSetBlock", "willSetClause", "didSetClause", "typealiasDeclaration", 
		"typealiasName", "typealiasAssignment", "functionDeclaration", "functionHead", 
		"functionName", "functionSignature", "functionResult", "functionBody", 
		"parameterClause", "parameterList", "parameter", "externalParameterName", 
		"localParameterName", "defaultArgumentClause", "enumDeclaration", "unionStyleEnum", 
		"unionStyleEnumMembers", "unionStyleEnumMember", "unionStyleEnumCaseClause", 
		"unionStyleEnumCaseList", "unionStyleEnumCase", "enumName", "enumCaseName", 
		"rawValueStyleEnum", "rawValueStyleEnumMembers", "rawValueStyleEnumMember", 
		"rawValueStyleEnumCaseClause", "rawValueStyleEnumCaseList", "rawValueStyleEnumCase", 
		"rawValueAssignment", "rawValueLiteral", "structDeclaration", "structName", 
		"structBody", "structMembers", "structMember", "classDeclaration", "className", 
		"classBody", "classMembers", "classMember", "protocolDeclaration", "protocolName", 
		"protocolBody", "protocolMembers", "protocolMember", "protocolMemberDeclaration", 
		"protocolPropertyDeclaration", "protocolMethodDeclaration", "protocolInitializerDeclaration", 
		"protocolSubscriptDeclaration", "protocolAssociatedTypeDeclaration", "initializerDeclaration", 
		"initializerHead", "initializerBody", "deinitializerDeclaration", "extensionDeclaration", 
		"extensionBody", "extensionMembers", "extensionMember", "subscriptDeclaration", 
		"subscriptHead", "subscriptResult", "operatorDeclaration", "prefixOperatorDeclaration", 
		"postfixOperatorDeclaration", "infixOperatorDeclaration", "infixOperatorGroup", 
		"precedenceGroupDeclaration", "precedenceGroupAttributes", "precedenceGroupAttribute", 
		"precedenceGroupRelation", "precedenceGroupAssignment", "precedenceGroupAssociativity", 
		"precedenceGroupNames", "precedenceGroupName", "declarationModifier", 
		"declarationModifiers", "accessLevelModifier", "mutationModifier", "attribute", 
		"attributeName", "attributeArgumentClause", "attributes", "balancedTokens", 
		"balancedToken", "pattern", "tuplePattern", "tuplePatternElementList", 
		"tuplePatternElement", "genericParameterClause", "genericParameterList", 
		"genericParameter", "genericWhereClause", "requirementList", "requirement", 
		"conformanceRequirement", "sameTypeRequirement", "genericArgumentClause", 
		"genericArgumentList", "genericArgument"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'associatedtype'", "'class'", "'deinit'", "'enum'", "'extension'", 
		"'fileprivate'", "'func'", "'import'", "'init'", "'inout'", "'internal'", 
		"'let'", "'open'", "'operator'", "'precedencegroup'", "'private'", "'protocol'", 
		"'public'", "'static'", "'struct'", "'subscript'", "'typealias'", "'var'", 
		"'break'", "'case'", "'continue'", "'default'", "'defer'", "'do'", "'else'", 
		"'fallthrough'", "'for'", "'guard'", "'if'", "'in'", "'repeat'", "'return'", 
		"'switch'", "'where'", "'while'", "'Any'", "'as'", "'catch'", "'false'", 
		"'is'", "'nil'", "'rethrows'", "'self'", "'Self'", "'super'", "'throw'", 
		"'throws'", "'true'", "'try'", "'_'", "'#available'", "'#colorLiteral'", 
		"'#column'", "'#else'", "'#elseif'", "'#endif'", "'#file'", "'#fileLiteral'", 
		"'#function'", "'#if'", "'#imageLiteral'", "'#keyPath'", "'#line'", "'#selector'", 
		"'#sourceLocation'", "'associativity'", "'convenience'", "'dynamic'", 
		"'didSet'", "'final'", "'get'", "'infix'", "'indirect'", "'lazy'", "'left'", 
		"'mutating'", "'none'", "'nomutating'", "'optional'", "'override'", "'postfix'", 
		"'precedence'", "'prefix'", "'Protocol'", "'required'", "'right'", "'set'", 
		"'Type'", "'unowned'", "'weak'", "'willSet'", "'&'", "'->'", "'@'", "':'", 
		"','", "'='", "'!'", "'`'", "'{'", "'['", "'('", "'#'", "'.'", "'?'", 
		"'}'", "']'", "')'", "';'", "'*'", "'\\'", "'^'", "'>'", "'<'", "'-'", 
		"'%'", "'|'", "'+'", "'/'", "'~'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "ASSOCIATEDTYPE", "CLASS", "DEINIT", "ENUM", "EXTENSION", "FILEPRIVATE", 
		"FUNC", "IMPORT", "INIT", "INOUT", "INTERNAL", "LET", "OPEN", "OPERATOR_KEYWORD", 
		"PRECEDENCEGROUP", "PRIVATE", "PROTOCOL", "PUBLIC", "STATIC", "STRUCT", 
		"SUBSCRIPT", "TYPEALIAS", "VAR", "BREAK", "CASE", "CONTINUE", "DEFAULT", 
		"DEFER", "DO", "ELSE", "FALLTHROUGH", "FOR", "GUARD", "IF", "IN", "REPEAT", 
		"RETURN", "SWITCH", "WHERE", "WHILE", "ANY", "AS", "CATCH", "FALSE", "IS", 
		"NIL", "RETHROWS", "SELF", "SELF_TYPE", "SUPER", "THROW", "THROWS", "TRUE", 
		"TRY", "UNDERSCORE", "AVAILABLE", "COLOR_LITERAL", "COLUMN", "ELSE_DIRECTIVE", 
		"ELSEIF_DIRECTIVE", "ENDIF_DIRECTIVE", "FILE", "FILE_LITERAL", "FUNCTION", 
		"IF_DIRECTIVE", "IMAGE_LITERAL", "KEY_PATH", "LINE", "SELECTOR", "SOURCE_LOCATION", 
		"ASSOCIATIVITY", "CONVENIENCE", "DYNAMIC", "DID_SET", "FINAL", "GET", 
		"INFIX", "INDIRECT", "LAZY", "LEFT", "MUTATING", "NONE", "NOMUTATING", 
		"OPTIONAL", "OVERRIDE", "POSTFIX", "PRECEDENCE", "PREFIX", "PROTOCOL_METATYPE", 
		"REQUIRED", "RIGHT", "SET", "TYPE", "UNOWNED", "WEAK", "WILL_SET", "AMPERSAND", 
		"ARROW", "AT", "COLON", "COMMA", "EQUAL", "EXCLAMATION", "GRAVE", "LEFT_BRACE", 
		"LEFT_BRACKET", "LEFT_PARENTHESIS", "NUMBER", "PERIOD", "QUESTION", "RIGHT_BRACE", 
		"RIGHT_BRACKET", "RIGHT_PARENTHESIS", "SEMICOLON", "ASTERISK", "BACKSLASH", 
		"CARET", "GREATER_THAN", "LESS_THAN", "MINUS", "PERCENT", "PIPE", "PLUS", 
		"SLASH", "TILDE", "WHITESPACE", "LINE_BREAK", "COMMENT", "BLOCK_COMMENT", 
		"IDENTIFIER", "QUOTED_IDENTIFIER", "IMPLICIT_PARAMETER_NAME", "BINARY_LITERAL", 
		"OCTAL_LITERAL", "DECIMAL_DIGITS", "DECIMAL_LITERAL", "HEXADECIMAL_LITERAL", 
		"FLOATING_POINT_LITERAL", "STATIC_STRING_LITERAL", "INTERPOLATED_STRING_LITERAL", 
		"OPERATOR"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SwiftParser._LITERAL_NAMES, SwiftParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SwiftParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "SwiftParser.g4"; }

	@Override
	public get ruleNames(): string[] { return SwiftParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SwiftParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SwiftParser._ATN, this);
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SwiftParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.statements();
			this.state = 499;
			this.match(SwiftParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SwiftParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			_la = this._input.LA(1);
			if ( !(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SwiftParser.ASSOCIATIVITY - 71)) | (1 << (SwiftParser.CONVENIENCE - 71)) | (1 << (SwiftParser.DYNAMIC - 71)) | (1 << (SwiftParser.DID_SET - 71)) | (1 << (SwiftParser.FINAL - 71)) | (1 << (SwiftParser.GET - 71)) | (1 << (SwiftParser.INFIX - 71)) | (1 << (SwiftParser.INDIRECT - 71)) | (1 << (SwiftParser.LAZY - 71)) | (1 << (SwiftParser.LEFT - 71)) | (1 << (SwiftParser.MUTATING - 71)) | (1 << (SwiftParser.NONE - 71)) | (1 << (SwiftParser.NOMUTATING - 71)) | (1 << (SwiftParser.OPTIONAL - 71)) | (1 << (SwiftParser.OVERRIDE - 71)) | (1 << (SwiftParser.POSTFIX - 71)) | (1 << (SwiftParser.PRECEDENCE - 71)) | (1 << (SwiftParser.PREFIX - 71)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 71)) | (1 << (SwiftParser.REQUIRED - 71)) | (1 << (SwiftParser.RIGHT - 71)) | (1 << (SwiftParser.SET - 71)) | (1 << (SwiftParser.TYPE - 71)) | (1 << (SwiftParser.UNOWNED - 71)) | (1 << (SwiftParser.WEAK - 71)) | (1 << (SwiftParser.WILL_SET - 71)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SwiftParser.RULE_identifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				{
				this.state = 503;
				this.match(SwiftParser.UNDERSCORE);
				}
				break;
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				{
				this.state = 504;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 507;
				this.match(SwiftParser.COMMA);
				this.state = 510;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 508;
					this.match(SwiftParser.UNDERSCORE);
					}
					break;
				case SwiftParser.ASSOCIATIVITY:
				case SwiftParser.CONVENIENCE:
				case SwiftParser.DYNAMIC:
				case SwiftParser.DID_SET:
				case SwiftParser.FINAL:
				case SwiftParser.GET:
				case SwiftParser.INFIX:
				case SwiftParser.INDIRECT:
				case SwiftParser.LAZY:
				case SwiftParser.LEFT:
				case SwiftParser.MUTATING:
				case SwiftParser.NONE:
				case SwiftParser.NOMUTATING:
				case SwiftParser.OPTIONAL:
				case SwiftParser.OVERRIDE:
				case SwiftParser.POSTFIX:
				case SwiftParser.PRECEDENCE:
				case SwiftParser.PREFIX:
				case SwiftParser.PROTOCOL_METATYPE:
				case SwiftParser.REQUIRED:
				case SwiftParser.RIGHT:
				case SwiftParser.SET:
				case SwiftParser.TYPE:
				case SwiftParser.UNOWNED:
				case SwiftParser.WEAK:
				case SwiftParser.WILL_SET:
				case SwiftParser.IDENTIFIER:
				case SwiftParser.QUOTED_IDENTIFIER:
				case SwiftParser.IMPLICIT_PARAMETER_NAME:
					{
					this.state = 509;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 516;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SwiftParser.RULE_literal);
		try {
			this.state = 521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BINARY_LITERAL:
			case SwiftParser.OCTAL_LITERAL:
			case SwiftParser.DECIMAL_DIGITS:
			case SwiftParser.DECIMAL_LITERAL:
			case SwiftParser.HEXADECIMAL_LITERAL:
			case SwiftParser.FLOATING_POINT_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 517;
				this.numericLiteral();
				}
				break;
			case SwiftParser.STATIC_STRING_LITERAL:
			case SwiftParser.INTERPOLATED_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 518;
				this.stringLiteral();
				}
				break;
			case SwiftParser.FALSE:
			case SwiftParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 519;
				this.booleanLiteral();
				}
				break;
			case SwiftParser.NIL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 520;
				this.nilLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SwiftParser.RULE_numericLiteral);
		try {
			this.state = 525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BINARY_LITERAL:
			case SwiftParser.OCTAL_LITERAL:
			case SwiftParser.DECIMAL_DIGITS:
			case SwiftParser.DECIMAL_LITERAL:
			case SwiftParser.HEXADECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 523;
				this.integerLiteral();
				}
				break;
			case SwiftParser.FLOATING_POINT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 524;
				this.match(SwiftParser.FLOATING_POINT_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SwiftParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			_la = this._input.LA(1);
			if ( !(_la===SwiftParser.FALSE || _la===SwiftParser.TRUE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nilLiteral(): NilLiteralContext {
		let _localctx: NilLiteralContext = new NilLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SwiftParser.RULE_nilLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(SwiftParser.NIL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SwiftParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			_la = this._input.LA(1);
			if ( !(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (SwiftParser.BINARY_LITERAL - 133)) | (1 << (SwiftParser.OCTAL_LITERAL - 133)) | (1 << (SwiftParser.DECIMAL_DIGITS - 133)) | (1 << (SwiftParser.DECIMAL_LITERAL - 133)) | (1 << (SwiftParser.HEXADECIMAL_LITERAL - 133)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SwiftParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			_la = this._input.LA(1);
			if ( !(_la===SwiftParser.STATIC_STRING_LITERAL || _la===SwiftParser.INTERPOLATED_STRING_LITERAL) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SwiftParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if ( !(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (SwiftParser.AMPERSAND - 97)) | (1 << (SwiftParser.EQUAL - 97)) | (1 << (SwiftParser.EXCLAMATION - 97)) | (1 << (SwiftParser.QUESTION - 97)) | (1 << (SwiftParser.ASTERISK - 97)) | (1 << (SwiftParser.CARET - 97)) | (1 << (SwiftParser.GREATER_THAN - 97)) | (1 << (SwiftParser.LESS_THAN - 97)) | (1 << (SwiftParser.MINUS - 97)) | (1 << (SwiftParser.PERCENT - 97)) | (1 << (SwiftParser.PIPE - 97)) | (1 << (SwiftParser.PLUS - 97)) | (1 << (SwiftParser.SLASH - 97)) | (1 << (SwiftParser.TILDE - 97)))) !== 0) || _la===SwiftParser.OPERATOR) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefixOperator(): PrefixOperatorContext {
		let _localctx: PrefixOperatorContext = new PrefixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SwiftParser.RULE_prefixOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
			this.state = 538;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfixOperator(): PostfixOperatorContext {
		let _localctx: PostfixOperatorContext = new PostfixOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SwiftParser.RULE_postfixOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
			this.state = 541;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public binaryOperator(): BinaryOperatorContext {
		let _localctx: BinaryOperatorContext = new BinaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SwiftParser.RULE_binaryOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 544;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	@RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, SwiftParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,7,this._ctx) ) {
			case 1:
				{
				_localctx = new ArrayTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 547;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 548;
				this.type(0);
				this.state = 549;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 2:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 551;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 552;
				(_localctx as DictionaryTypeContext)._KEY = this.type(0);
				this.state = 553;
				this.match(SwiftParser.COLON);
				this.state = 554;
				(_localctx as DictionaryTypeContext)._VALUE = this.type(0);
				this.state = 555;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.AT) {
					{
					this.state = 557;
					this.attributes();
					}
				}

				this.state = 560;
				this.functionTypeArgumentClause();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) {
					{
					this.state = 561;
					(_localctx as FunctionTypeContext)._KIND = this._input.LT(1);
					_la = this._input.LA(1);
					if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
						(_localctx as FunctionTypeContext)._KIND = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 564;
				this.match(SwiftParser.ARROW);
				this.state = 565;
				this.type(10);
				}
				break;

			case 4:
				{
				_localctx = new GeneralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 567;
				this.typeIdentifier();
				}
				break;

			case 5:
				{
				_localctx = new TupleTypeAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 568;
				this.tupleType();
				}
				break;

			case 6:
				{
				_localctx = new ProtocolCompositionTypeAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 569;
				this.protocolCompositionType();
				}
				break;

			case 7:
				{
				_localctx = new AnyTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 570;
				this.match(SwiftParser.ANY);
				}
				break;

			case 8:
				{
				_localctx = new SelfTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 571;
				this.match(SwiftParser.SELF_TYPE);
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 572;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 573;
				this.type(0);
				this.state = 574;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 589;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 587;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
					case 1:
						{
						_localctx = new OptionalTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 578;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 579;
						if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
						this.state = 580;
						this.match(SwiftParser.QUESTION);
						}
						break;

					case 2:
						{
						_localctx = new ImplicitlyUnwrappedOptionalTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 581;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 582;
						if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
						this.state = 583;
						this.match(SwiftParser.EXCLAMATION);
						}
						break;

					case 3:
						{
						_localctx = new MetatypeTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 584;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 585;
						this.match(SwiftParser.PERIOD);
						this.state = 586;
						(_localctx as MetatypeTypeContext)._KIND = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===SwiftParser.PROTOCOL_METATYPE || _la===SwiftParser.TYPE) ) {
							(_localctx as MetatypeTypeContext)._KIND = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;
					}
					} 
				}
				this.state = 591;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,9,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let _localctx: TypeAnnotationContext = new TypeAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SwiftParser.RULE_typeAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(SwiftParser.COLON);
			this.state = 594;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
			case 1:
				{
				this.state = 593;
				this.attributes();
				}
				break;
			}
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INOUT) {
				{
				this.state = 596;
				_localctx._INOUT = this.match(SwiftParser.INOUT);
				}
			}

			this.state = 599;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SwiftParser.RULE_typeIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.typeName();
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.genericArgumentClause();
				}
				break;
			}
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				{
				this.state = 605;
				this.match(SwiftParser.PERIOD);
				this.state = 606;
				this.typeIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SwiftParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SwiftParser.RULE_tupleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.UNDERSCORE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 612;
				this.tupleTypeElement();
				this.state = 615; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 613;
					this.match(SwiftParser.COMMA);
					this.state = 614;
					this.tupleTypeElement();
					}
					}
					this.state = 617; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===SwiftParser.COMMA );
				}
			}

			this.state = 621;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tupleTypeElement(): TupleTypeElementContext {
		let _localctx: TupleTypeElementContext = new TupleTypeElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SwiftParser.RULE_tupleTypeElement);
		try {
			this.state = 627;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 623;
				this.elementName();
				this.state = 624;
				this.typeAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 626;
				this.type(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elementName(): ElementNameContext {
		let _localctx: ElementNameContext = new ElementNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SwiftParser.RULE_elementName);
		try {
			this.state = 631;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.match(SwiftParser.UNDERSCORE);
				}
				break;
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 630;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionTypeArgumentClause(): FunctionTypeArgumentClauseContext {
		let _localctx: FunctionTypeArgumentClauseContext = new FunctionTypeArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SwiftParser.RULE_functionTypeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INOUT || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.UNDERSCORE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 634;
				this.functionTypeArgumentList();
				this.state = 637;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,18,this._ctx) ) {
				case 1:
					{
					this.state = 635;
					if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
					this.state = 636;
					_localctx._ELLIPSIS = this.operator();
					}
					break;
				}
				}
			}

			this.state = 641;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionTypeArgumentList(): FunctionTypeArgumentListContext {
		let _localctx: FunctionTypeArgumentListContext = new FunctionTypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SwiftParser.RULE_functionTypeArgumentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 643;
			this.functionTypeArgument();
			this.state = 648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 644;
					this.match(SwiftParser.COMMA);
					this.state = 645;
					this.functionTypeArgument();
					}
					} 
				}
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionTypeArgument(): FunctionTypeArgumentContext {
		let _localctx: FunctionTypeArgumentContext = new FunctionTypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SwiftParser.RULE_functionTypeArgument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.UNDERSCORE) {
				{
				this.state = 651;
				this.argumentLabel();
				this.state = 652;
				this.match(SwiftParser.COLON);
				}
			}

			this.state = 657;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
			case 1:
				{
				this.state = 656;
				this.attributes();
				}
				break;
			}
			this.state = 660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INOUT) {
				{
				this.state = 659;
				_localctx._INOUT = this.match(SwiftParser.INOUT);
				}
			}

			this.state = 662;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argumentLabel(): ArgumentLabelContext {
		let _localctx: ArgumentLabelContext = new ArgumentLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SwiftParser.RULE_argumentLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(SwiftParser.UNDERSCORE);
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SwiftParser.ASSOCIATIVITY - 71)) | (1 << (SwiftParser.CONVENIENCE - 71)) | (1 << (SwiftParser.DYNAMIC - 71)) | (1 << (SwiftParser.DID_SET - 71)) | (1 << (SwiftParser.FINAL - 71)) | (1 << (SwiftParser.GET - 71)) | (1 << (SwiftParser.INFIX - 71)) | (1 << (SwiftParser.INDIRECT - 71)) | (1 << (SwiftParser.LAZY - 71)) | (1 << (SwiftParser.LEFT - 71)) | (1 << (SwiftParser.MUTATING - 71)) | (1 << (SwiftParser.NONE - 71)) | (1 << (SwiftParser.NOMUTATING - 71)) | (1 << (SwiftParser.OPTIONAL - 71)) | (1 << (SwiftParser.OVERRIDE - 71)) | (1 << (SwiftParser.POSTFIX - 71)) | (1 << (SwiftParser.PRECEDENCE - 71)) | (1 << (SwiftParser.PREFIX - 71)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 71)) | (1 << (SwiftParser.REQUIRED - 71)) | (1 << (SwiftParser.RIGHT - 71)) | (1 << (SwiftParser.SET - 71)) | (1 << (SwiftParser.TYPE - 71)) | (1 << (SwiftParser.UNOWNED - 71)) | (1 << (SwiftParser.WEAK - 71)) | (1 << (SwiftParser.WILL_SET - 71)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
				{
				this.state = 665;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolCompositionType(): ProtocolCompositionTypeContext {
		let _localctx: ProtocolCompositionTypeContext = new ProtocolCompositionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SwiftParser.RULE_protocolCompositionType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.typeIdentifier();
			this.state = 672; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 669;
					if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
					this.state = 670;
					this.match(SwiftParser.AMPERSAND);
					this.state = 671;
					this.typeIdentifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 674; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeInheritanceClause(): TypeInheritanceClauseContext {
		let _localctx: TypeInheritanceClauseContext = new TypeInheritanceClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SwiftParser.RULE_typeInheritanceClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.match(SwiftParser.COLON);
			this.state = 677;
			this.typeIdentifier();
			this.state = 682;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 678;
					this.match(SwiftParser.COMMA);
					this.state = 679;
					this.typeIdentifier();
					}
					} 
				}
				this.state = 684;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SwiftParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
			case 1:
				{
				this.state = 685;
				this.tryOperator();
				}
				break;
			}
			this.state = 688;
			this.prefixExpression();
			this.state = 692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 689;
					this.binaryExpression();
					}
					} 
				}
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,28,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SwiftParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.expression();
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 696;
				this.match(SwiftParser.COMMA);
				this.state = 697;
				this.expression();
				}
				}
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefixExpression(): PrefixExpressionContext {
		let _localctx: PrefixExpressionContext = new PrefixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SwiftParser.RULE_prefixExpression);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.inOutExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
				case 1:
					{
					this.state = 704;
					this.prefixOperator();
					}
					break;
				}
				this.state = 707;
				this.postfixExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public inOutExpression(): InOutExpressionContext {
		let _localctx: InOutExpressionContext = new InOutExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SwiftParser.RULE_inOutExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
			this.state = 711;
			this.match(SwiftParser.AMPERSAND);
			this.state = 712;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryOperator(): TryOperatorContext {
		let _localctx: TryOperatorContext = new TryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SwiftParser.RULE_tryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(SwiftParser.TRY);
			this.state = 717;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
			case 1:
				{
				this.state = 715;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 716;
				_localctx._MARK = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.EXCLAMATION || _la===SwiftParser.QUESTION) ) {
					_localctx._MARK = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public binaryExpression(): BinaryExpressionContext {
		let _localctx: BinaryExpressionContext = new BinaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SwiftParser.RULE_binaryExpression);
		try {
			this.state = 732;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 719;
				this.binaryOperator();
				this.state = 720;
				this.prefixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 724;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
				case 1:
					{
					this.state = 722;
					this.assignmentOperator();
					}
					break;

				case 2:
					{
					this.state = 723;
					this.conditionalOperator();
					}
					break;
				}
				this.state = 727;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
				case 1:
					{
					this.state = 726;
					this.tryOperator();
					}
					break;
				}
				this.state = 729;
				this.prefixExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 731;
				this.typeCastingOperator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SwiftParser.RULE_assignmentOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 735;
			this.match(SwiftParser.EQUAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditionalOperator(): ConditionalOperatorContext {
		let _localctx: ConditionalOperatorContext = new ConditionalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SwiftParser.RULE_conditionalOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			if (!(testLN(this._input, -1, WS, true) && testLN(this._input, 1, WS, true))) throw new FailedPredicateException(this, "testLN(this._input, -1, WS, true) && testLN(this._input, 1, WS, true)");
			this.state = 738;
			this.match(SwiftParser.QUESTION);
			this.state = 739;
			this.expression();
			this.state = 740;
			this.match(SwiftParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeCastingOperator(): TypeCastingOperatorContext {
		let _localctx: TypeCastingOperatorContext = new TypeCastingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SwiftParser.RULE_typeCastingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IS:
				{
				this.state = 742;
				this.match(SwiftParser.IS);
				}
				break;
			case SwiftParser.AS:
				{
				this.state = 743;
				this.match(SwiftParser.AS);
				this.state = 746;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
				case 1:
					{
					this.state = 744;
					if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
					this.state = 745;
					_localctx._MARK = this._input.LT(1);
					_la = this._input.LA(1);
					if ( !(_la===SwiftParser.EXCLAMATION || _la===SwiftParser.QUESTION) ) {
						_localctx._MARK = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 750;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SwiftParser.RULE_primaryExpression);
		try {
			this.state = 767;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.identifier();
				this.state = 754;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
				case 1:
					{
					this.state = 753;
					this.genericArgumentClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 756;
				this.literalExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 757;
				this.selfExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 758;
				this.superclassExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 759;
				this.closureExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 760;
				this.parenthesizedExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 761;
				this.tupleExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 762;
				this.implicitMemberExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 763;
				this.wildcardExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 764;
				this.keyPathExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 765;
				this.selectorExpression();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 766;
				this.keyPathStringExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalExpression(): LiteralExpressionContext {
		let _localctx: LiteralExpressionContext = new LiteralExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SwiftParser.RULE_literalExpression);
		try {
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.arrayLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 771;
				this.dictionaryLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 772;
				this.playgroundLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 773;
				this.match(SwiftParser.FILE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 774;
				this.match(SwiftParser.LINE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 775;
				this.match(SwiftParser.COLUMN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 776;
				this.match(SwiftParser.FUNCTION);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SwiftParser.RULE_arrayLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 780;
			this.expression();
			this.state = 785;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,41,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 781;
					this.match(SwiftParser.COMMA);
					this.state = 782;
					this.expression();
					}
					} 
				}
				this.state = 787;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,41,this._ctx);
			}
			this.state = 789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COMMA) {
				{
				this.state = 788;
				this.match(SwiftParser.COMMA);
				}
			}

			this.state = 791;
			this.match(SwiftParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dictionaryLiteral(): DictionaryLiteralContext {
		let _localctx: DictionaryLiteralContext = new DictionaryLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SwiftParser.RULE_dictionaryLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 794;
			_localctx._expression = this.expression();
			_localctx._KEYS.push(_localctx._expression);
			this.state = 795;
			this.match(SwiftParser.COLON);
			this.state = 796;
			_localctx._expression = this.expression();
			_localctx._VALUES.push(_localctx._expression);
			this.state = 804;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 797;
					this.match(SwiftParser.COMMA);
					this.state = 798;
					_localctx._expression = this.expression();
					_localctx._KEYS.push(_localctx._expression);
					this.state = 799;
					this.match(SwiftParser.COLON);
					this.state = 800;
					_localctx._expression = this.expression();
					_localctx._VALUES.push(_localctx._expression);
					}
					} 
				}
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			}
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COMMA) {
				{
				this.state = 807;
				this.match(SwiftParser.COMMA);
				}
			}

			this.state = 810;
			this.match(SwiftParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public playgroundLiteral(): PlaygroundLiteralContext {
		let _localctx: PlaygroundLiteralContext = new PlaygroundLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SwiftParser.RULE_playgroundLiteral);
		let _la: number;
		try {
			this.state = 822;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.COLOR_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 812;
				this.match(SwiftParser.COLOR_LITERAL);
				this.state = 813;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 814;
				this.functionCallArgumentList();
				this.state = 815;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			case SwiftParser.FILE_LITERAL:
			case SwiftParser.IMAGE_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.FILE_LITERAL || _la===SwiftParser.IMAGE_LITERAL) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 818;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 819;
				this.functionCallArgumentList();
				this.state = 820;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selfExpression(): SelfExpressionContext {
		let _localctx: SelfExpressionContext = new SelfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SwiftParser.RULE_selfExpression);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 824;
				this.match(SwiftParser.SELF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 825;
				this.selfMethodExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 826;
				this.selfSubscriptExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 827;
				this.selfInitializerExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selfMethodExpression(): SelfMethodExpressionContext {
		let _localctx: SelfMethodExpressionContext = new SelfMethodExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SwiftParser.RULE_selfMethodExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(SwiftParser.SELF);
			this.state = 831;
			this.match(SwiftParser.PERIOD);
			this.state = 832;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selfSubscriptExpression(): SelfSubscriptExpressionContext {
		let _localctx: SelfSubscriptExpressionContext = new SelfSubscriptExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SwiftParser.RULE_selfSubscriptExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(SwiftParser.SELF);
			this.state = 835;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 836;
			this.functionCallArgumentList();
			this.state = 837;
			this.match(SwiftParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selfInitializerExpression(): SelfInitializerExpressionContext {
		let _localctx: SelfInitializerExpressionContext = new SelfInitializerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SwiftParser.RULE_selfInitializerExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 839;
			this.match(SwiftParser.SELF);
			this.state = 840;
			this.match(SwiftParser.PERIOD);
			this.state = 841;
			this.match(SwiftParser.INIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superclassExpression(): SuperclassExpressionContext {
		let _localctx: SuperclassExpressionContext = new SuperclassExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SwiftParser.RULE_superclassExpression);
		try {
			this.state = 847;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 843;
				this.match(SwiftParser.SUPER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 844;
				this.superclassMethodExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 845;
				this.superclassSubscriptExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 846;
				this.superclassInitializerExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superclassMethodExpression(): SuperclassMethodExpressionContext {
		let _localctx: SuperclassMethodExpressionContext = new SuperclassMethodExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SwiftParser.RULE_superclassMethodExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this.match(SwiftParser.SUPER);
			this.state = 850;
			this.match(SwiftParser.PERIOD);
			this.state = 851;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superclassSubscriptExpression(): SuperclassSubscriptExpressionContext {
		let _localctx: SuperclassSubscriptExpressionContext = new SuperclassSubscriptExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SwiftParser.RULE_superclassSubscriptExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.match(SwiftParser.SUPER);
			this.state = 854;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 855;
			this.functionCallArgumentList();
			this.state = 856;
			this.match(SwiftParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superclassInitializerExpression(): SuperclassInitializerExpressionContext {
		let _localctx: SuperclassInitializerExpressionContext = new SuperclassInitializerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SwiftParser.RULE_superclassInitializerExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 858;
			this.match(SwiftParser.SUPER);
			this.state = 859;
			this.match(SwiftParser.PERIOD);
			this.state = 860;
			this.match(SwiftParser.INIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureExpression(): ClosureExpressionContext {
		let _localctx: ClosureExpressionContext = new ClosureExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SwiftParser.RULE_closureExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
			case 1:
				{
				this.state = 863;
				this.closureSignature();
				}
				break;
			}
			this.state = 867;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
			case 1:
				{
				this.state = 866;
				this.statements();
				}
				break;
			}
			this.state = 869;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureSignature(): ClosureSignatureContext {
		let _localctx: ClosureSignatureContext = new ClosureSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SwiftParser.RULE_closureSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.LEFT_BRACKET) {
					{
					this.state = 871;
					this.captureList();
					}
				}

				this.state = 874;
				this.closureParameterClause();
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.THROWS) {
					{
					this.state = 875;
					_localctx._THROWS = this.match(SwiftParser.THROWS);
					}
				}

				this.state = 879;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.ARROW) {
					{
					this.state = 878;
					this.functionResult();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 881;
				this.captureList();
				}
				break;
			}
			this.state = 884;
			this.match(SwiftParser.IN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureParameterClause(): ClosureParameterClauseContext {
		let _localctx: ClosureParameterClauseContext = new ClosureParameterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SwiftParser.RULE_closureParameterClause);
		let _la: number;
		try {
			this.state = 892;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.LEFT_PARENTHESIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 886;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (SwiftParser.UNDERSCORE - 55)) | (1 << (SwiftParser.ASSOCIATIVITY - 55)) | (1 << (SwiftParser.CONVENIENCE - 55)) | (1 << (SwiftParser.DYNAMIC - 55)) | (1 << (SwiftParser.DID_SET - 55)) | (1 << (SwiftParser.FINAL - 55)) | (1 << (SwiftParser.GET - 55)) | (1 << (SwiftParser.INFIX - 55)) | (1 << (SwiftParser.INDIRECT - 55)) | (1 << (SwiftParser.LAZY - 55)) | (1 << (SwiftParser.LEFT - 55)) | (1 << (SwiftParser.MUTATING - 55)) | (1 << (SwiftParser.NONE - 55)) | (1 << (SwiftParser.NOMUTATING - 55)) | (1 << (SwiftParser.OPTIONAL - 55)) | (1 << (SwiftParser.OVERRIDE - 55)) | (1 << (SwiftParser.POSTFIX - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SwiftParser.PRECEDENCE - 87)) | (1 << (SwiftParser.PREFIX - 87)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 87)) | (1 << (SwiftParser.REQUIRED - 87)) | (1 << (SwiftParser.RIGHT - 87)) | (1 << (SwiftParser.SET - 87)) | (1 << (SwiftParser.TYPE - 87)) | (1 << (SwiftParser.UNOWNED - 87)) | (1 << (SwiftParser.WEAK - 87)) | (1 << (SwiftParser.WILL_SET - 87)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
					{
					this.state = 887;
					this.closureParameterList();
					}
				}

				this.state = 890;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			case SwiftParser.UNDERSCORE:
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 891;
				this.identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureParameterList(): ClosureParameterListContext {
		let _localctx: ClosureParameterListContext = new ClosureParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SwiftParser.RULE_closureParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.closureParameter();
			this.state = 899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 895;
				this.match(SwiftParser.COMMA);
				this.state = 896;
				this.closureParameter();
				}
				}
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureParameter(): ClosureParameterContext {
		let _localctx: ClosureParameterContext = new ClosureParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SwiftParser.RULE_closureParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 902;
			this.closureParameterName();
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 903;
				this.typeAnnotation();
				this.state = 906;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
				case 1:
					{
					this.state = 904;
					if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
					this.state = 905;
					this.operator();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public closureParameterName(): ClosureParameterNameContext {
		let _localctx: ClosureParameterNameContext = new ClosureParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SwiftParser.RULE_closureParameterName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.UNDERSCORE) {
				{
				this.state = 910;
				this.match(SwiftParser.UNDERSCORE);
				}
			}

			this.state = 913;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public captureList(): CaptureListContext {
		let _localctx: CaptureListContext = new CaptureListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SwiftParser.RULE_captureList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 916;
			this.captureListItem();
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 917;
				this.match(SwiftParser.COMMA);
				this.state = 918;
				this.captureListItem();
				}
				}
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 924;
			this.match(SwiftParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public captureListItem(): CaptureListItemContext {
		let _localctx: CaptureListItemContext = new CaptureListItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SwiftParser.RULE_captureListItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,61,this._ctx) ) {
			case 1:
				{
				this.state = 926;
				this.captureSpecifier();
				}
				break;
			}
			this.state = 929;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public captureSpecifier(): CaptureSpecifierContext {
		let _localctx: CaptureSpecifierContext = new CaptureSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SwiftParser.RULE_captureSpecifier);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.WEAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 931;
				this.match(SwiftParser.WEAK);
				}
				break;
			case SwiftParser.UNOWNED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 932;
				this.match(SwiftParser.UNOWNED);
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
				case 1:
					{
					this.state = 933;
					this.match(SwiftParser.LEFT_PARENTHESIS);
					this.state = 934;
					this.match(SwiftParser.IDENTIFIER);
					this.state = 935;
					this.match(SwiftParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public implicitMemberExpression(): ImplicitMemberExpressionContext {
		let _localctx: ImplicitMemberExpressionContext = new ImplicitMemberExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SwiftParser.RULE_implicitMemberExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 940;
			this.match(SwiftParser.PERIOD);
			this.state = 941;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let _localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SwiftParser.RULE_parenthesizedExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 944;
			this.expression();
			this.state = 945;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SwiftParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this.tupleElement();
				this.state = 951; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 949;
					this.match(SwiftParser.COMMA);
					this.state = 950;
					this.tupleElement();
					}
					}
					this.state = 953; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===SwiftParser.COMMA );
				}
				break;
			}
			this.state = 957;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tupleElement(): TupleElementContext {
		let _localctx: TupleElementContext = new TupleElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SwiftParser.RULE_tupleElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
			case 1:
				{
				this.state = 961;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 959;
					this.match(SwiftParser.UNDERSCORE);
					}
					break;
				case SwiftParser.ASSOCIATIVITY:
				case SwiftParser.CONVENIENCE:
				case SwiftParser.DYNAMIC:
				case SwiftParser.DID_SET:
				case SwiftParser.FINAL:
				case SwiftParser.GET:
				case SwiftParser.INFIX:
				case SwiftParser.INDIRECT:
				case SwiftParser.LAZY:
				case SwiftParser.LEFT:
				case SwiftParser.MUTATING:
				case SwiftParser.NONE:
				case SwiftParser.NOMUTATING:
				case SwiftParser.OPTIONAL:
				case SwiftParser.OVERRIDE:
				case SwiftParser.POSTFIX:
				case SwiftParser.PRECEDENCE:
				case SwiftParser.PREFIX:
				case SwiftParser.PROTOCOL_METATYPE:
				case SwiftParser.REQUIRED:
				case SwiftParser.RIGHT:
				case SwiftParser.SET:
				case SwiftParser.TYPE:
				case SwiftParser.UNOWNED:
				case SwiftParser.WEAK:
				case SwiftParser.WILL_SET:
				case SwiftParser.IDENTIFIER:
				case SwiftParser.QUOTED_IDENTIFIER:
				case SwiftParser.IMPLICIT_PARAMETER_NAME:
					{
					this.state = 960;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 963;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 966;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public wildcardExpression(): WildcardExpressionContext {
		let _localctx: WildcardExpressionContext = new WildcardExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SwiftParser.RULE_wildcardExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(SwiftParser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyPathExpression(): KeyPathExpressionContext {
		let _localctx: KeyPathExpressionContext = new KeyPathExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SwiftParser.RULE_keyPathExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(SwiftParser.BACKSLASH);
			this.state = 972;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 971;
				this.type(0);
				}
			}

			this.state = 974;
			this.match(SwiftParser.PERIOD);
			this.state = 975;
			this.keyPathComponent();
			this.state = 978; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 976;
					this.match(SwiftParser.PERIOD);
					this.state = 977;
					this.keyPathComponent();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 980; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyPathComponent(): KeyPathComponentContext {
		let _localctx: KeyPathComponentContext = new KeyPathComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SwiftParser.RULE_keyPathComponent);
		try {
			let _alt: number;
			this.state = 994;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,72,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 982;
				this.identifier();
				this.state = 986;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 983;
						this.keyPathPostfix();
						}
						} 
					}
					this.state = 988;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 990; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 989;
						this.keyPathPostfix();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 992; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyPathPostfix(): KeyPathPostfixContext {
		let _localctx: KeyPathPostfixContext = new KeyPathPostfixContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SwiftParser.RULE_keyPathPostfix);
		let _la: number;
		try {
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 996;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 997;
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.EXCLAMATION || _la===SwiftParser.QUESTION) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 998;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 999;
				this.functionCallArgumentList();
				this.state = 1000;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public selectorExpression(): SelectorExpressionContext {
		let _localctx: SelectorExpressionContext = new SelectorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SwiftParser.RULE_selectorExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(SwiftParser.SELECTOR);
			this.state = 1005;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1006;
			this.functionCallArgument();
			this.state = 1007;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keyPathStringExpression(): KeyPathStringExpressionContext {
		let _localctx: KeyPathStringExpressionContext = new KeyPathStringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SwiftParser.RULE_keyPathStringExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(SwiftParser.KEY_PATH);
			this.state = 1010;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1011;
			this.expression();
			this.state = 1012;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public postfixExpression(): PostfixExpressionContext;
	public postfixExpression(_p: number): PostfixExpressionContext;
	@RuleVersion(0)
	public postfixExpression(_p?: number): PostfixExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, _parentState);
		let _prevctx: PostfixExpressionContext = _localctx;
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, SwiftParser.RULE_postfixExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new GeneralPostfixExpressionContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 1015;
			this.primaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1069;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1067;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,80,this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixOperatorExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 1018;
						this.postfixOperator();
						}
						break;

					case 2:
						{
						_localctx = new FunctionCallExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1019;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 1020;
						if (!(!isStatementStarting(this._input))) throw new FailedPredicateException(this, "!isStatementStarting(this._input)");
						this.state = 1026;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,75,this._ctx) ) {
						case 1:
							{
							this.state = 1021;
							this.functionCallArgumentClause();
							}
							break;

						case 2:
							{
							this.state = 1023;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===SwiftParser.LEFT_PARENTHESIS) {
								{
								this.state = 1022;
								this.functionCallArgumentClause();
								}
							}

							this.state = 1025;
							this.trailingClosure();
							}
							break;
						}
						}
						break;

					case 3:
						{
						_localctx = new InitializerExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1028;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 1029;
						this.match(SwiftParser.PERIOD);
						this.state = 1030;
						(_localctx as InitializerExpressionContext)._INIT = this.match(SwiftParser.INIT);
						this.state = 1035;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
						case 1:
							{
							this.state = 1031;
							this.match(SwiftParser.LEFT_PARENTHESIS);
							this.state = 1032;
							this.argumentNames();
							this.state = 1033;
							this.match(SwiftParser.RIGHT_PARENTHESIS);
							}
							break;
						}
						}
						break;

					case 4:
						{
						_localctx = new ExplicitMemberExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1037;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 1038;
						this.match(SwiftParser.PERIOD);
						this.state = 1050;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SwiftParser.DECIMAL_DIGITS:
							{
							this.state = 1039;
							this.match(SwiftParser.DECIMAL_DIGITS);
							}
							break;
						case SwiftParser.ASSOCIATIVITY:
						case SwiftParser.CONVENIENCE:
						case SwiftParser.DYNAMIC:
						case SwiftParser.DID_SET:
						case SwiftParser.FINAL:
						case SwiftParser.GET:
						case SwiftParser.INFIX:
						case SwiftParser.INDIRECT:
						case SwiftParser.LAZY:
						case SwiftParser.LEFT:
						case SwiftParser.MUTATING:
						case SwiftParser.NONE:
						case SwiftParser.NOMUTATING:
						case SwiftParser.OPTIONAL:
						case SwiftParser.OVERRIDE:
						case SwiftParser.POSTFIX:
						case SwiftParser.PRECEDENCE:
						case SwiftParser.PREFIX:
						case SwiftParser.PROTOCOL_METATYPE:
						case SwiftParser.REQUIRED:
						case SwiftParser.RIGHT:
						case SwiftParser.SET:
						case SwiftParser.TYPE:
						case SwiftParser.UNOWNED:
						case SwiftParser.WEAK:
						case SwiftParser.WILL_SET:
						case SwiftParser.IDENTIFIER:
						case SwiftParser.QUOTED_IDENTIFIER:
						case SwiftParser.IMPLICIT_PARAMETER_NAME:
							{
							this.state = 1040;
							this.identifier();
							this.state = 1048;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
							case 1:
								{
								this.state = 1042;
								this._errHandler.sync(this);
								switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
								case 1:
									{
									this.state = 1041;
									this.genericArgumentClause();
									}
									break;
								}
								}
								break;

							case 2:
								{
								this.state = 1044;
								this.match(SwiftParser.LEFT_PARENTHESIS);
								this.state = 1045;
								this.argumentNames();
								this.state = 1046;
								this.match(SwiftParser.RIGHT_PARENTHESIS);
								}
								break;
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 5:
						{
						_localctx = new PostfixSelfExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1052;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 1053;
						this.match(SwiftParser.PERIOD);
						this.state = 1054;
						this.match(SwiftParser.SELF);
						}
						break;

					case 6:
						{
						_localctx = new SubscriptExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1055;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1056;
						if (!(!isStatementStarting(this._input))) throw new FailedPredicateException(this, "!isStatementStarting(this._input)");
						this.state = 1057;
						this.match(SwiftParser.LEFT_BRACKET);
						this.state = 1058;
						this.functionCallArgumentList();
						this.state = 1059;
						this.match(SwiftParser.RIGHT_BRACKET);
						}
						break;

					case 7:
						{
						_localctx = new ForcedValueExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1061;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 1062;
						if (!(!testLN(this._input, -1, OP_LWS, true, true))) throw new FailedPredicateException(this, "!testLN(this._input, -1, OP_LWS, true, true)");
						this.state = 1063;
						this.match(SwiftParser.EXCLAMATION);
						}
						break;

					case 8:
						{
						_localctx = new OptionalChainingExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1064;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 1065;
						if (!(!testLN(this._input, -1, OP_LWS, true, true))) throw new FailedPredicateException(this, "!testLN(this._input, -1, OP_LWS, true, true)");
						this.state = 1066;
						this.match(SwiftParser.QUESTION);
						}
						break;
					}
					} 
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCallArgumentClause(): FunctionCallArgumentClauseContext {
		let _localctx: FunctionCallArgumentClauseContext = new FunctionCallArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SwiftParser.RULE_functionCallArgumentClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1074;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,82,this._ctx) ) {
			case 1:
				{
				this.state = 1073;
				this.functionCallArgumentList();
				}
				break;
			}
			this.state = 1076;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		let _localctx: FunctionCallArgumentListContext = new FunctionCallArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SwiftParser.RULE_functionCallArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.functionCallArgument();
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1079;
				this.match(SwiftParser.COMMA);
				this.state = 1080;
				this.functionCallArgument();
				}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCallArgument(): FunctionCallArgumentContext {
		let _localctx: FunctionCallArgumentContext = new FunctionCallArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SwiftParser.RULE_functionCallArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 1086;
					_localctx._WILDCARD = this.match(SwiftParser.UNDERSCORE);
					}
					break;
				case SwiftParser.ASSOCIATIVITY:
				case SwiftParser.CONVENIENCE:
				case SwiftParser.DYNAMIC:
				case SwiftParser.DID_SET:
				case SwiftParser.FINAL:
				case SwiftParser.GET:
				case SwiftParser.INFIX:
				case SwiftParser.INDIRECT:
				case SwiftParser.LAZY:
				case SwiftParser.LEFT:
				case SwiftParser.MUTATING:
				case SwiftParser.NONE:
				case SwiftParser.NOMUTATING:
				case SwiftParser.OPTIONAL:
				case SwiftParser.OVERRIDE:
				case SwiftParser.POSTFIX:
				case SwiftParser.PRECEDENCE:
				case SwiftParser.PREFIX:
				case SwiftParser.PROTOCOL_METATYPE:
				case SwiftParser.REQUIRED:
				case SwiftParser.RIGHT:
				case SwiftParser.SET:
				case SwiftParser.TYPE:
				case SwiftParser.UNOWNED:
				case SwiftParser.WEAK:
				case SwiftParser.WILL_SET:
				case SwiftParser.IDENTIFIER:
				case SwiftParser.QUOTED_IDENTIFIER:
				case SwiftParser.IMPLICIT_PARAMETER_NAME:
					{
					this.state = 1087;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1090;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1094;
				this.operator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailingClosure(): TrailingClosureContext {
		let _localctx: TrailingClosureContext = new TrailingClosureContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SwiftParser.RULE_trailingClosure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this.closureExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argumentNames(): ArgumentNamesContext {
		let _localctx: ArgumentNamesContext = new ArgumentNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SwiftParser.RULE_argumentNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1099;
				this.argumentName();
				}
				}
				this.state = 1102; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (SwiftParser.UNDERSCORE - 55)) | (1 << (SwiftParser.ASSOCIATIVITY - 55)) | (1 << (SwiftParser.CONVENIENCE - 55)) | (1 << (SwiftParser.DYNAMIC - 55)) | (1 << (SwiftParser.DID_SET - 55)) | (1 << (SwiftParser.FINAL - 55)) | (1 << (SwiftParser.GET - 55)) | (1 << (SwiftParser.INFIX - 55)) | (1 << (SwiftParser.INDIRECT - 55)) | (1 << (SwiftParser.LAZY - 55)) | (1 << (SwiftParser.LEFT - 55)) | (1 << (SwiftParser.MUTATING - 55)) | (1 << (SwiftParser.NONE - 55)) | (1 << (SwiftParser.NOMUTATING - 55)) | (1 << (SwiftParser.OPTIONAL - 55)) | (1 << (SwiftParser.OVERRIDE - 55)) | (1 << (SwiftParser.POSTFIX - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SwiftParser.PRECEDENCE - 87)) | (1 << (SwiftParser.PREFIX - 87)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 87)) | (1 << (SwiftParser.REQUIRED - 87)) | (1 << (SwiftParser.RIGHT - 87)) | (1 << (SwiftParser.SET - 87)) | (1 << (SwiftParser.TYPE - 87)) | (1 << (SwiftParser.UNOWNED - 87)) | (1 << (SwiftParser.WEAK - 87)) | (1 << (SwiftParser.WILL_SET - 87)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argumentName(): ArgumentNameContext {
		let _localctx: ArgumentNameContext = new ArgumentNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SwiftParser.RULE_argumentName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				{
				this.state = 1104;
				this.match(SwiftParser.UNDERSCORE);
				}
				break;
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				{
				this.state = 1105;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1108;
			this.match(SwiftParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SwiftParser.RULE_statement);
		try {
			this.state = 1125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1110;
				if (!(isStatementStarting(this._input))) throw new FailedPredicateException(this, "isStatementStarting(this._input)");
				this.state = 1119;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
				case 1:
					{
					this.state = 1111;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 1112;
					this.declaration();
					}
					break;

				case 3:
					{
					this.state = 1113;
					this.loopStatement();
					}
					break;

				case 4:
					{
					this.state = 1114;
					this.branchStatement();
					}
					break;

				case 5:
					{
					this.state = 1115;
					this.labeledStatement();
					}
					break;

				case 6:
					{
					this.state = 1116;
					this.controlTransferStatement();
					}
					break;

				case 7:
					{
					this.state = 1117;
					this.deferStatement();
					}
					break;

				case 8:
					{
					this.state = 1118;
					this.doStatement();
					}
					break;
				}
				this.state = 1122;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
				case 1:
					{
					this.state = 1121;
					this.match(SwiftParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1124;
				this.compilerControlStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SwiftParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1128; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1127;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1130; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,92,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SwiftParser.RULE_loopStatement);
		try {
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1132;
				this.forInStatement();
				}
				break;
			case SwiftParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1133;
				this.whileStatement();
				}
				break;
			case SwiftParser.REPEAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1134;
				this.repeatWhileStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forInStatement(): ForInStatementContext {
		let _localctx: ForInStatementContext = new ForInStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SwiftParser.RULE_forInStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1137;
			this.match(SwiftParser.FOR);
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,94,this._ctx) ) {
			case 1:
				{
				this.state = 1138;
				_localctx._CASE = this.match(SwiftParser.CASE);
				}
				break;
			}
			this.state = 1141;
			this.pattern(0);
			this.state = 1142;
			this.match(SwiftParser.IN);
			this.state = 1143;
			this.expression();
			this.state = 1145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1144;
				this.whereClause();
				}
			}

			this.state = 1147;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SwiftParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.match(SwiftParser.WHILE);
			this.state = 1150;
			this.conditionList();
			this.state = 1151;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditionList(): ConditionListContext {
		let _localctx: ConditionListContext = new ConditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SwiftParser.RULE_conditionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1153;
			this.condition();
			this.state = 1158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1154;
				this.match(SwiftParser.COMMA);
				this.state = 1155;
				this.condition();
				}
				}
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SwiftParser.RULE_condition);
		try {
			this.state = 1165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1161;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1162;
				this.availabilityCondition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1163;
				this.caseCondition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1164;
				this.optionalBindingCondition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseCondition(): CaseConditionContext {
		let _localctx: CaseConditionContext = new CaseConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SwiftParser.RULE_caseCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1167;
			this.match(SwiftParser.CASE);
			this.state = 1168;
			this.pattern(0);
			this.state = 1169;
			this.initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public optionalBindingCondition(): OptionalBindingConditionContext {
		let _localctx: OptionalBindingConditionContext = new OptionalBindingConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SwiftParser.RULE_optionalBindingCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1171;
			_la = this._input.LA(1);
			if ( !(_la===SwiftParser.LET || _la===SwiftParser.VAR) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1172;
			this.pattern(0);
			this.state = 1173;
			this.initializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public repeatWhileStatement(): RepeatWhileStatementContext {
		let _localctx: RepeatWhileStatementContext = new RepeatWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SwiftParser.RULE_repeatWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1175;
			this.match(SwiftParser.REPEAT);
			this.state = 1176;
			this.codeBlock();
			this.state = 1177;
			this.match(SwiftParser.WHILE);
			this.state = 1178;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public branchStatement(): BranchStatementContext {
		let _localctx: BranchStatementContext = new BranchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SwiftParser.RULE_branchStatement);
		try {
			this.state = 1183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1180;
				this.ifStatement();
				}
				break;
			case SwiftParser.GUARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1181;
				this.guardStatement();
				}
				break;
			case SwiftParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1182;
				this.switchStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SwiftParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.match(SwiftParser.IF);
			this.state = 1186;
			this.conditionList();
			this.state = 1187;
			this.codeBlock();
			this.state = 1189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,99,this._ctx) ) {
			case 1:
				{
				this.state = 1188;
				this.elseClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SwiftParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this.match(SwiftParser.ELSE);
			this.state = 1194;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.LEFT_BRACE:
				{
				this.state = 1192;
				this.codeBlock();
				}
				break;
			case SwiftParser.IF:
				{
				this.state = 1193;
				this.ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public guardStatement(): GuardStatementContext {
		let _localctx: GuardStatementContext = new GuardStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SwiftParser.RULE_guardStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.match(SwiftParser.GUARD);
			this.state = 1197;
			this.conditionList();
			this.state = 1198;
			this.match(SwiftParser.ELSE);
			this.state = 1199;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SwiftParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1201;
			this.match(SwiftParser.SWITCH);
			this.state = 1202;
			this.expression();
			this.state = 1203;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.CASE || _la===SwiftParser.DEFAULT) {
				{
				{
				this.state = 1204;
				this.switchCase();
				}
				}
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1210;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public switchCase(): SwitchCaseContext {
		let _localctx: SwitchCaseContext = new SwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SwiftParser.RULE_switchCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CASE:
				{
				this.state = 1212;
				this.caseLabel();
				}
				break;
			case SwiftParser.DEFAULT:
				{
				this.state = 1213;
				this.defaultLabel();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1216;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseLabel(): CaseLabelContext {
		let _localctx: CaseLabelContext = new CaseLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SwiftParser.RULE_caseLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1218;
			this.match(SwiftParser.CASE);
			this.state = 1219;
			this.caseItemList();
			this.state = 1220;
			this.match(SwiftParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public caseItemList(): CaseItemListContext {
		let _localctx: CaseItemListContext = new CaseItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SwiftParser.RULE_caseItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.pattern(0);
			this.state = 1224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1223;
				this.whereClause();
				}
			}

			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COMMA) {
				{
				this.state = 1226;
				this.match(SwiftParser.COMMA);
				this.state = 1227;
				this.caseItemList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public defaultLabel(): DefaultLabelContext {
		let _localctx: DefaultLabelContext = new DefaultLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, SwiftParser.RULE_defaultLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1230;
			this.match(SwiftParser.DEFAULT);
			this.state = 1231;
			this.match(SwiftParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, SwiftParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1233;
			this.match(SwiftParser.WHERE);
			this.state = 1234;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, SwiftParser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this.statementLabel();
			this.state = 1241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.FOR:
			case SwiftParser.REPEAT:
			case SwiftParser.WHILE:
				{
				this.state = 1237;
				this.loopStatement();
				}
				break;
			case SwiftParser.IF:
				{
				this.state = 1238;
				this.ifStatement();
				}
				break;
			case SwiftParser.SWITCH:
				{
				this.state = 1239;
				this.switchStatement();
				}
				break;
			case SwiftParser.DO:
				{
				this.state = 1240;
				this.doStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statementLabel(): StatementLabelContext {
		let _localctx: StatementLabelContext = new StatementLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, SwiftParser.RULE_statementLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.labelName();
			this.state = 1244;
			this.match(SwiftParser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labelName(): LabelNameContext {
		let _localctx: LabelNameContext = new LabelNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, SwiftParser.RULE_labelName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1246;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public controlTransferStatement(): ControlTransferStatementContext {
		let _localctx: ControlTransferStatementContext = new ControlTransferStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, SwiftParser.RULE_controlTransferStatement);
		try {
			this.state = 1253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1248;
				this.breakStatement();
				}
				break;
			case SwiftParser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1249;
				this.continueStatement();
				}
				break;
			case SwiftParser.FALLTHROUGH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1250;
				this.fallthroughStatement();
				}
				break;
			case SwiftParser.RETURN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1251;
				this.returnStatement();
				}
				break;
			case SwiftParser.THROW:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1252;
				this.throwStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SwiftParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this.match(SwiftParser.BREAK);
			this.state = 1257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,107,this._ctx) ) {
			case 1:
				{
				this.state = 1256;
				this.labelName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, SwiftParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.match(SwiftParser.CONTINUE);
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,108,this._ctx) ) {
			case 1:
				{
				this.state = 1260;
				this.labelName();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fallthroughStatement(): FallthroughStatementContext {
		let _localctx: FallthroughStatementContext = new FallthroughStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, SwiftParser.RULE_fallthroughStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this.match(SwiftParser.FALLTHROUGH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, SwiftParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this.match(SwiftParser.RETURN);
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,109,this._ctx) ) {
			case 1:
				{
				this.state = 1266;
				this.expression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, SwiftParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this.match(SwiftParser.THROW);
			this.state = 1270;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deferStatement(): DeferStatementContext {
		let _localctx: DeferStatementContext = new DeferStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, SwiftParser.RULE_deferStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1272;
			this.match(SwiftParser.DEFER);
			this.state = 1273;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, SwiftParser.RULE_doStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.match(SwiftParser.DO);
			this.state = 1276;
			this.codeBlock();
			this.state = 1280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1277;
					this.catchClause();
					}
					} 
				}
				this.state = 1282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, SwiftParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(SwiftParser.CATCH);
			this.state = 1285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
			case 1:
				{
				this.state = 1284;
				this.pattern(0);
				}
				break;
			}
			this.state = 1288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1287;
				this.whereClause();
				}
			}

			this.state = 1290;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compilerControlStatement(): CompilerControlStatementContext {
		let _localctx: CompilerControlStatementContext = new CompilerControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, SwiftParser.RULE_compilerControlStatement);
		try {
			this.state = 1294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IF_DIRECTIVE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1292;
				this.conditionalCompilationBlock();
				}
				break;
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1293;
				this.lineControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditionalCompilationBlock(): ConditionalCompilationBlockContext {
		let _localctx: ConditionalCompilationBlockContext = new ConditionalCompilationBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, SwiftParser.RULE_conditionalCompilationBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.ifDirectiveClause();
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.ELSEIF_DIRECTIVE) {
				{
				{
				this.state = 1297;
				this.elseifDirectiveClause();
				}
				}
				this.state = 1302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.ELSE_DIRECTIVE) {
				{
				this.state = 1303;
				this.elseDirectiveClause();
				}
			}

			this.state = 1306;
			this.match(SwiftParser.ENDIF_DIRECTIVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifDirectiveClause(): IfDirectiveClauseContext {
		let _localctx: IfDirectiveClauseContext = new IfDirectiveClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, SwiftParser.RULE_ifDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1308;
			this.match(SwiftParser.IF_DIRECTIVE);
			this.state = 1309;
			this.compilationCondition(0);
			this.state = 1311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
			case 1:
				{
				this.state = 1310;
				this.statements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseifDirectiveClause(): ElseifDirectiveClauseContext {
		let _localctx: ElseifDirectiveClauseContext = new ElseifDirectiveClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, SwiftParser.RULE_elseifDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1313;
			this.match(SwiftParser.ELSEIF_DIRECTIVE);
			this.state = 1314;
			this.compilationCondition(0);
			this.state = 1316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,117,this._ctx) ) {
			case 1:
				{
				this.state = 1315;
				this.statements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elseDirectiveClause(): ElseDirectiveClauseContext {
		let _localctx: ElseDirectiveClauseContext = new ElseDirectiveClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, SwiftParser.RULE_elseDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1318;
			this.match(SwiftParser.ELSE_DIRECTIVE);
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,118,this._ctx) ) {
			case 1:
				{
				this.state = 1319;
				this.statements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public compilationCondition(): CompilationConditionContext;
	public compilationCondition(_p: number): CompilationConditionContext;
	@RuleVersion(0)
	public compilationCondition(_p?: number): CompilationConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CompilationConditionContext = new CompilationConditionContext(this._ctx, _parentState);
		let _prevctx: CompilationConditionContext = _localctx;
		let _startState: number = 222;
		this.enterRecursionRule(_localctx, 222, SwiftParser.RULE_compilationCondition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				{
				this.state = 1323;
				this.platformCondition();
				}
				break;

			case 2:
				{
				this.state = 1324;
				this.identifier();
				}
				break;

			case 3:
				{
				this.state = 1325;
				this.booleanLiteral();
				}
				break;

			case 4:
				{
				this.state = 1326;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1327;
				this.compilationCondition(0);
				this.state = 1328;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 5:
				{
				this.state = 1330;
				if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
				this.state = 1331;
				this.match(SwiftParser.EXCLAMATION);
				this.state = 1332;
				this.compilationCondition(2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1341;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,120,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CompilationConditionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_compilationCondition);
					this.state = 1335;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1336;
					this.binaryOperator();
					this.state = 1337;
					this.compilationCondition(2);
					}
					} 
				}
				this.state = 1343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,120,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public platformCondition(): PlatformConditionContext {
		let _localctx: PlatformConditionContext = new PlatformConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, SwiftParser.RULE_platformCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1344;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 1358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				{
				this.state = 1345;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1346;
				this.operatingSystem();
				this.state = 1347;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				{
				this.state = 1349;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1350;
				this.architecture();
				this.state = 1351;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 3:
				{
				this.state = 1353;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1354;
				this.prefixOperator();
				this.state = 1355;
				this.swiftVersion();
				this.state = 1356;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public operatingSystem(): OperatingSystemContext {
		let _localctx: OperatingSystemContext = new OperatingSystemContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, SwiftParser.RULE_operatingSystem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1360;
			this.match(SwiftParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public architecture(): ArchitectureContext {
		let _localctx: ArchitectureContext = new ArchitectureContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, SwiftParser.RULE_architecture);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1362;
			this.match(SwiftParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public swiftVersion(): SwiftVersionContext {
		let _localctx: SwiftVersionContext = new SwiftVersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, SwiftParser.RULE_swiftVersion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
			this.match(SwiftParser.DECIMAL_DIGITS);
			this.state = 1369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.PERIOD) {
				{
				{
				this.state = 1365;
				this.match(SwiftParser.PERIOD);
				this.state = 1366;
				this.match(SwiftParser.DECIMAL_DIGITS);
				}
				}
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lineControlStatement(): LineControlStatementContext {
		let _localctx: LineControlStatementContext = new LineControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, SwiftParser.RULE_lineControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1372;
			this.match(SwiftParser.SOURCE_LOCATION);
			this.state = 1373;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.IDENTIFIER) {
				{
				this.state = 1374;
				_localctx._file = this.match(SwiftParser.IDENTIFIER);
				this.state = 1375;
				this.match(SwiftParser.COLON);
				this.state = 1376;
				this.fileName();
				this.state = 1377;
				this.match(SwiftParser.COMMA);
				this.state = 1378;
				_localctx._line = this.match(SwiftParser.IDENTIFIER);
				this.state = 1379;
				this.match(SwiftParser.COLON);
				this.state = 1380;
				this.lineNumber();
				}
			}

			this.state = 1384;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lineNumber(): LineNumberContext {
		let _localctx: LineNumberContext = new LineNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, SwiftParser.RULE_lineNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this.match(SwiftParser.DECIMAL_DIGITS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fileName(): FileNameContext {
		let _localctx: FileNameContext = new FileNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, SwiftParser.RULE_fileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.match(SwiftParser.STATIC_STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public availabilityCondition(): AvailabilityConditionContext {
		let _localctx: AvailabilityConditionContext = new AvailabilityConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, SwiftParser.RULE_availabilityCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
			this.match(SwiftParser.AVAILABLE);
			this.state = 1391;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1392;
			this.availabilityArgument();
			this.state = 1397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1393;
				this.match(SwiftParser.COMMA);
				this.state = 1394;
				this.availabilityArgument();
				}
				}
				this.state = 1399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1400;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public availabilityArgument(): AvailabilityArgumentContext {
		let _localctx: AvailabilityArgumentContext = new AvailabilityArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, SwiftParser.RULE_availabilityArgument);
		try {
			this.state = 1406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.ASTERISK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1402;
				this.match(SwiftParser.ASTERISK);
				}
				break;
			case SwiftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1403;
				this.platformName();
				this.state = 1404;
				this.platformVersion();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public platformName(): PlatformNameContext {
		let _localctx: PlatformNameContext = new PlatformNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, SwiftParser.RULE_platformName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
			this.match(SwiftParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public platformVersion(): PlatformVersionContext {
		let _localctx: PlatformVersionContext = new PlatformVersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, SwiftParser.RULE_platformVersion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
			this.match(SwiftParser.DECIMAL_DIGITS);
			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.PERIOD) {
				{
				this.state = 1411;
				this.match(SwiftParser.PERIOD);
				this.state = 1412;
				this.match(SwiftParser.DECIMAL_DIGITS);
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.PERIOD) {
					{
					this.state = 1413;
					this.match(SwiftParser.PERIOD);
					this.state = 1414;
					this.match(SwiftParser.DECIMAL_DIGITS);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, SwiftParser.RULE_declaration);
		try {
			this.state = 1434;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,128,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1419;
				this.importDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1420;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1421;
				this.variableDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1422;
				this.typealiasDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1423;
				this.functionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1424;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1425;
				this.structDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1426;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1427;
				this.protocolDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1428;
				this.initializerDeclaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1429;
				this.deinitializerDeclaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1430;
				this.extensionDeclaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1431;
				this.subscriptDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1432;
				this.operatorDeclaration();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1433;
				this.precedenceGroupDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public topLevelDeclaration(): TopLevelDeclarationContext {
		let _localctx: TopLevelDeclarationContext = new TopLevelDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, SwiftParser.RULE_topLevelDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1437;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,129,this._ctx) ) {
			case 1:
				{
				this.state = 1436;
				this.statements();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public codeBlock(): CodeBlockContext {
		let _localctx: CodeBlockContext = new CodeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, SwiftParser.RULE_codeBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,130,this._ctx) ) {
			case 1:
				{
				this.state = 1440;
				this.statements();
				}
				break;
			}
			this.state = 1443;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, SwiftParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1445;
				this.attributes();
				}
			}

			this.state = 1448;
			this.match(SwiftParser.IMPORT);
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.LET) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0)) {
				{
				this.state = 1449;
				this.importKind();
				}
			}

			this.state = 1452;
			this.importPath();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importKind(): ImportKindContext {
		let _localctx: ImportKindContext = new ImportKindContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, SwiftParser.RULE_importKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1454;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.LET) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importPath(): ImportPathContext {
		let _localctx: ImportPathContext = new ImportPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, SwiftParser.RULE_importPath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			this.importPathIdentifier();
			this.state = 1461;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,133,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1457;
					this.match(SwiftParser.PERIOD);
					this.state = 1458;
					this.importPathIdentifier();
					}
					} 
				}
				this.state = 1463;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,133,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importPathIdentifier(): ImportPathIdentifierContext {
		let _localctx: ImportPathIdentifierContext = new ImportPathIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, SwiftParser.RULE_importPathIdentifier);
		try {
			this.state = 1466;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1464;
				this.identifier();
				}
				break;
			case SwiftParser.AMPERSAND:
			case SwiftParser.EQUAL:
			case SwiftParser.EXCLAMATION:
			case SwiftParser.QUESTION:
			case SwiftParser.ASTERISK:
			case SwiftParser.CARET:
			case SwiftParser.GREATER_THAN:
			case SwiftParser.LESS_THAN:
			case SwiftParser.MINUS:
			case SwiftParser.PERCENT:
			case SwiftParser.PIPE:
			case SwiftParser.PLUS:
			case SwiftParser.SLASH:
			case SwiftParser.TILDE:
			case SwiftParser.OPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1465;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, SwiftParser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1468;
				this.attributes();
				}
			}

			this.state = 1472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1471;
				this.declarationModifiers();
				}
			}

			this.state = 1474;
			this.match(SwiftParser.LET);
			this.state = 1475;
			this.patternInitializerList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public patternInitializerList(): PatternInitializerListContext {
		let _localctx: PatternInitializerListContext = new PatternInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, SwiftParser.RULE_patternInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.patternInitializer();
			this.state = 1482;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1478;
					this.match(SwiftParser.COMMA);
					this.state = 1479;
					this.patternInitializer();
					}
					} 
				}
				this.state = 1484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public patternInitializer(): PatternInitializerContext {
		let _localctx: PatternInitializerContext = new PatternInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, SwiftParser.RULE_patternInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1485;
			this.pattern(0);
			this.state = 1487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
			case 1:
				{
				this.state = 1486;
				this.initializer();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, SwiftParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1490;
			this.match(SwiftParser.EQUAL);
			this.state = 1491;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, SwiftParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this.variableDeclarationHead();
			this.state = 1510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
			case 1:
				{
				this.state = 1494;
				this.patternInitializerList();
				}
				break;

			case 2:
				{
				this.state = 1495;
				this.variableName();
				this.state = 1508;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
				case 1:
					{
					this.state = 1496;
					this.initializer();
					this.state = 1497;
					this.willSetDidSetBlock();
					}
					break;

				case 2:
					{
					this.state = 1499;
					this.typeAnnotation();
					this.state = 1506;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,140,this._ctx) ) {
					case 1:
						{
						this.state = 1500;
						this.getterSetterBlock();
						}
						break;

					case 2:
						{
						this.state = 1501;
						this.getterSetterKeywordBlock();
						}
						break;

					case 3:
						{
						this.state = 1503;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,139,this._ctx) ) {
						case 1:
							{
							this.state = 1502;
							this.initializer();
							}
							break;
						}
						this.state = 1505;
						this.willSetDidSetBlock();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclarationHead(): VariableDeclarationHeadContext {
		let _localctx: VariableDeclarationHeadContext = new VariableDeclarationHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, SwiftParser.RULE_variableDeclarationHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1512;
				this.attributes();
				}
			}

			this.state = 1516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1515;
				this.declarationModifiers();
				}
			}

			this.state = 1518;
			this.match(SwiftParser.VAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableName(): VariableNameContext {
		let _localctx: VariableNameContext = new VariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, SwiftParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1520;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getterSetterBlock(): GetterSetterBlockContext {
		let _localctx: GetterSetterBlockContext = new GetterSetterBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, SwiftParser.RULE_getterSetterBlock);
		let _la: number;
		try {
			this.state = 1535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,147,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1522;
				this.codeBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1523;
				this.match(SwiftParser.LEFT_BRACE);
				this.state = 1531;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,146,this._ctx) ) {
				case 1:
					{
					this.state = 1524;
					this.getterClause();
					this.state = 1526;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (SwiftParser.MUTATING - 81)) | (1 << (SwiftParser.NOMUTATING - 81)) | (1 << (SwiftParser.SET - 81)) | (1 << (SwiftParser.AT - 81)))) !== 0)) {
						{
						this.state = 1525;
						this.setterClause();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1528;
					this.setterClause();
					this.state = 1529;
					this.getterClause();
					}
					break;
				}
				this.state = 1533;
				this.match(SwiftParser.RIGHT_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getterClause(): GetterClauseContext {
		let _localctx: GetterClauseContext = new GetterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, SwiftParser.RULE_getterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1537;
				this.attributes();
				}
			}

			this.state = 1541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1540;
				this.mutationModifier();
				}
			}

			this.state = 1543;
			this.match(SwiftParser.GET);
			this.state = 1544;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setterClause(): SetterClauseContext {
		let _localctx: SetterClauseContext = new SetterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, SwiftParser.RULE_setterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1546;
				this.attributes();
				}
			}

			this.state = 1550;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1549;
				this.mutationModifier();
				}
			}

			this.state = 1552;
			this.match(SwiftParser.SET);
			this.state = 1554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1553;
				this.setterName();
				}
			}

			this.state = 1556;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setterName(): SetterNameContext {
		let _localctx: SetterNameContext = new SetterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, SwiftParser.RULE_setterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1558;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1559;
			this.identifier();
			this.state = 1560;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getterSetterKeywordBlock(): GetterSetterKeywordBlockContext {
		let _localctx: GetterSetterKeywordBlockContext = new GetterSetterKeywordBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, SwiftParser.RULE_getterSetterKeywordBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,154,this._ctx) ) {
			case 1:
				{
				this.state = 1563;
				this.getterKeywordClause();
				this.state = 1565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (SwiftParser.MUTATING - 81)) | (1 << (SwiftParser.NOMUTATING - 81)) | (1 << (SwiftParser.SET - 81)) | (1 << (SwiftParser.AT - 81)))) !== 0)) {
					{
					this.state = 1564;
					this.setterKeywordClause();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1567;
				this.setterKeywordClause();
				this.state = 1568;
				this.getterKeywordClause();
				}
				break;
			}
			this.state = 1572;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getterKeywordClause(): GetterKeywordClauseContext {
		let _localctx: GetterKeywordClauseContext = new GetterKeywordClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, SwiftParser.RULE_getterKeywordClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1574;
				this.attributes();
				}
			}

			this.state = 1578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1577;
				this.mutationModifier();
				}
			}

			this.state = 1580;
			this.match(SwiftParser.GET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setterKeywordClause(): SetterKeywordClauseContext {
		let _localctx: SetterKeywordClauseContext = new SetterKeywordClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, SwiftParser.RULE_setterKeywordClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1582;
				this.attributes();
				}
			}

			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1585;
				this.mutationModifier();
				}
			}

			this.state = 1588;
			this.match(SwiftParser.SET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public willSetDidSetBlock(): WillSetDidSetBlockContext {
		let _localctx: WillSetDidSetBlockContext = new WillSetDidSetBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, SwiftParser.RULE_willSetDidSetBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,160,this._ctx) ) {
			case 1:
				{
				this.state = 1591;
				this.willSetClause();
				this.state = 1593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.DID_SET || _la===SwiftParser.AT) {
					{
					this.state = 1592;
					this.didSetClause();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1595;
				this.didSetClause();
				this.state = 1596;
				this.willSetClause();
				}
				break;
			}
			this.state = 1600;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public willSetClause(): WillSetClauseContext {
		let _localctx: WillSetClauseContext = new WillSetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, SwiftParser.RULE_willSetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1602;
				this.attributes();
				}
			}

			this.state = 1605;
			this.match(SwiftParser.WILL_SET);
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1606;
				this.setterName();
				}
			}

			this.state = 1609;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public didSetClause(): DidSetClauseContext {
		let _localctx: DidSetClauseContext = new DidSetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, SwiftParser.RULE_didSetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1611;
				this.attributes();
				}
			}

			this.state = 1614;
			this.match(SwiftParser.DID_SET);
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1615;
				this.setterName();
				}
			}

			this.state = 1618;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typealiasDeclaration(): TypealiasDeclarationContext {
		let _localctx: TypealiasDeclarationContext = new TypealiasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, SwiftParser.RULE_typealiasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1620;
				this.attributes();
				}
			}

			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1623;
				this.accessLevelModifier();
				}
			}

			this.state = 1626;
			this.match(SwiftParser.TYPEALIAS);
			this.state = 1627;
			this.typealiasName();
			this.state = 1629;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,167,this._ctx) ) {
			case 1:
				{
				this.state = 1628;
				this.genericParameterClause();
				}
				break;
			}
			this.state = 1631;
			this.typealiasAssignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typealiasName(): TypealiasNameContext {
		let _localctx: TypealiasNameContext = new TypealiasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, SwiftParser.RULE_typealiasName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1633;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typealiasAssignment(): TypealiasAssignmentContext {
		let _localctx: TypealiasAssignmentContext = new TypealiasAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, SwiftParser.RULE_typealiasAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1635;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1636;
			this.match(SwiftParser.EQUAL);
			this.state = 1637;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, SwiftParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this.functionHead();
			this.state = 1640;
			this.functionName();
			this.state = 1642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1641;
				this.genericParameterClause();
				}
			}

			this.state = 1644;
			this.functionSignature();
			this.state = 1646;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,169,this._ctx) ) {
			case 1:
				{
				this.state = 1645;
				this.genericWhereClause();
				}
				break;
			}
			this.state = 1649;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,170,this._ctx) ) {
			case 1:
				{
				this.state = 1648;
				this.functionBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionHead(): FunctionHeadContext {
		let _localctx: FunctionHeadContext = new FunctionHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, SwiftParser.RULE_functionHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1651;
				this.attributes();
				}
			}

			this.state = 1655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1654;
				this.declarationModifiers();
				}
			}

			this.state = 1657;
			this.match(SwiftParser.FUNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionName(): FunctionNameContext {
		let _localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, SwiftParser.RULE_functionName);
		try {
			this.state = 1661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1659;
				this.identifier();
				}
				break;
			case SwiftParser.AMPERSAND:
			case SwiftParser.EQUAL:
			case SwiftParser.EXCLAMATION:
			case SwiftParser.QUESTION:
			case SwiftParser.ASTERISK:
			case SwiftParser.CARET:
			case SwiftParser.GREATER_THAN:
			case SwiftParser.LESS_THAN:
			case SwiftParser.MINUS:
			case SwiftParser.PERCENT:
			case SwiftParser.PIPE:
			case SwiftParser.PLUS:
			case SwiftParser.SLASH:
			case SwiftParser.TILDE:
			case SwiftParser.OPERATOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1660;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionSignature(): FunctionSignatureContext {
		let _localctx: FunctionSignatureContext = new FunctionSignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, SwiftParser.RULE_functionSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1663;
			this.parameterClause();
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,174,this._ctx) ) {
			case 1:
				{
				this.state = 1664;
				_localctx._KIND = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
					_localctx._KIND = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1668;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,175,this._ctx) ) {
			case 1:
				{
				this.state = 1667;
				this.functionResult();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionResult(): FunctionResultContext {
		let _localctx: FunctionResultContext = new FunctionResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, SwiftParser.RULE_functionResult);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.match(SwiftParser.ARROW);
			this.state = 1672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,176,this._ctx) ) {
			case 1:
				{
				this.state = 1671;
				this.attributes();
				}
				break;
			}
			this.state = 1674;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, SwiftParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1676;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameterClause(): ParameterClauseContext {
		let _localctx: ParameterClauseContext = new ParameterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, SwiftParser.RULE_parameterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1678;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (SwiftParser.UNDERSCORE - 55)) | (1 << (SwiftParser.ASSOCIATIVITY - 55)) | (1 << (SwiftParser.CONVENIENCE - 55)) | (1 << (SwiftParser.DYNAMIC - 55)) | (1 << (SwiftParser.DID_SET - 55)) | (1 << (SwiftParser.FINAL - 55)) | (1 << (SwiftParser.GET - 55)) | (1 << (SwiftParser.INFIX - 55)) | (1 << (SwiftParser.INDIRECT - 55)) | (1 << (SwiftParser.LAZY - 55)) | (1 << (SwiftParser.LEFT - 55)) | (1 << (SwiftParser.MUTATING - 55)) | (1 << (SwiftParser.NONE - 55)) | (1 << (SwiftParser.NOMUTATING - 55)) | (1 << (SwiftParser.OPTIONAL - 55)) | (1 << (SwiftParser.OVERRIDE - 55)) | (1 << (SwiftParser.POSTFIX - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SwiftParser.PRECEDENCE - 87)) | (1 << (SwiftParser.PREFIX - 87)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 87)) | (1 << (SwiftParser.REQUIRED - 87)) | (1 << (SwiftParser.RIGHT - 87)) | (1 << (SwiftParser.SET - 87)) | (1 << (SwiftParser.TYPE - 87)) | (1 << (SwiftParser.UNOWNED - 87)) | (1 << (SwiftParser.WEAK - 87)) | (1 << (SwiftParser.WILL_SET - 87)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
				{
				this.state = 1679;
				this.parameterList();
				}
			}

			this.state = 1682;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, SwiftParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1684;
			this.parameter();
			this.state = 1689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1685;
				this.match(SwiftParser.COMMA);
				this.state = 1686;
				this.parameter();
				}
				}
				this.state = 1691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, SwiftParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1693;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,179,this._ctx) ) {
			case 1:
				{
				this.state = 1692;
				this.externalParameterName();
				}
				break;
			}
			this.state = 1695;
			this.localParameterName();
			this.state = 1696;
			this.typeAnnotation();
			this.state = 1700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,180,this._ctx) ) {
			case 1:
				{
				this.state = 1697;
				this.defaultArgumentClause();
				}
				break;

			case 2:
				{
				this.state = 1698;
				if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
				this.state = 1699;
				_localctx._ELLIPSIS = this.operator();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public externalParameterName(): ExternalParameterNameContext {
		let _localctx: ExternalParameterNameContext = new ExternalParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, SwiftParser.RULE_externalParameterName);
		try {
			this.state = 1704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1702;
				this.match(SwiftParser.UNDERSCORE);
				}
				break;
			case SwiftParser.ASSOCIATIVITY:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.DID_SET:
			case SwiftParser.FINAL:
			case SwiftParser.GET:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.LEFT:
			case SwiftParser.MUTATING:
			case SwiftParser.NONE:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PRECEDENCE:
			case SwiftParser.PREFIX:
			case SwiftParser.PROTOCOL_METATYPE:
			case SwiftParser.REQUIRED:
			case SwiftParser.RIGHT:
			case SwiftParser.SET:
			case SwiftParser.TYPE:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.WILL_SET:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1703;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public localParameterName(): LocalParameterNameContext {
		let _localctx: LocalParameterNameContext = new LocalParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, SwiftParser.RULE_localParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1706;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public defaultArgumentClause(): DefaultArgumentClauseContext {
		let _localctx: DefaultArgumentClauseContext = new DefaultArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, SwiftParser.RULE_defaultArgumentClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1708;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1709;
			this.match(SwiftParser.EQUAL);
			this.state = 1710;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, SwiftParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1712;
				this.attributes();
				}
			}

			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1715;
				this.accessLevelModifier();
				}
			}

			this.state = 1720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,184,this._ctx) ) {
			case 1:
				{
				this.state = 1718;
				this.unionStyleEnum();
				}
				break;

			case 2:
				{
				this.state = 1719;
				this.rawValueStyleEnum();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnum(): UnionStyleEnumContext {
		let _localctx: UnionStyleEnumContext = new UnionStyleEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, SwiftParser.RULE_unionStyleEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INDIRECT) {
				{
				this.state = 1722;
				_localctx._INDIRECT = this.match(SwiftParser.INDIRECT);
				}
			}

			this.state = 1725;
			this.match(SwiftParser.ENUM);
			this.state = 1726;
			this.enumName();
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1727;
				this.genericParameterClause();
				}
			}

			this.state = 1731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1730;
				this.typeInheritanceClause();
				}
			}

			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1733;
				this.genericWhereClause();
				}
			}

			this.state = 1736;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR) | (1 << SwiftParser.CASE))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1737;
				this.unionStyleEnumMembers();
				}
			}

			this.state = 1740;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnumMembers(): UnionStyleEnumMembersContext {
		let _localctx: UnionStyleEnumMembersContext = new UnionStyleEnumMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, SwiftParser.RULE_unionStyleEnumMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1742;
				this.unionStyleEnumMember();
				}
				}
				this.state = 1745; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR) | (1 << SwiftParser.CASE))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnumMember(): UnionStyleEnumMemberContext {
		let _localctx: UnionStyleEnumMemberContext = new UnionStyleEnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, SwiftParser.RULE_unionStyleEnumMember);
		try {
			this.state = 1750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,191,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1747;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1748;
				this.unionStyleEnumCaseClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1749;
				this.compilerControlStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnumCaseClause(): UnionStyleEnumCaseClauseContext {
		let _localctx: UnionStyleEnumCaseClauseContext = new UnionStyleEnumCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, SwiftParser.RULE_unionStyleEnumCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1752;
				this.attributes();
				}
			}

			this.state = 1756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INDIRECT) {
				{
				this.state = 1755;
				_localctx._INDIRECT = this.match(SwiftParser.INDIRECT);
				}
			}

			this.state = 1758;
			this.match(SwiftParser.CASE);
			this.state = 1759;
			this.unionStyleEnumCaseList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnumCaseList(): UnionStyleEnumCaseListContext {
		let _localctx: UnionStyleEnumCaseListContext = new UnionStyleEnumCaseListContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, SwiftParser.RULE_unionStyleEnumCaseList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1761;
			this.unionStyleEnumCase();
			this.state = 1766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1762;
				this.match(SwiftParser.COMMA);
				this.state = 1763;
				this.unionStyleEnumCase();
				}
				}
				this.state = 1768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unionStyleEnumCase(): UnionStyleEnumCaseContext {
		let _localctx: UnionStyleEnumCaseContext = new UnionStyleEnumCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, SwiftParser.RULE_unionStyleEnumCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1769;
			this.enumCaseName();
			this.state = 1771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1770;
				this.tupleType();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumName(): EnumNameContext {
		let _localctx: EnumNameContext = new EnumNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, SwiftParser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1773;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumCaseName(): EnumCaseNameContext {
		let _localctx: EnumCaseNameContext = new EnumCaseNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, SwiftParser.RULE_enumCaseName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1775;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnum(): RawValueStyleEnumContext {
		let _localctx: RawValueStyleEnumContext = new RawValueStyleEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, SwiftParser.RULE_rawValueStyleEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(SwiftParser.ENUM);
			this.state = 1778;
			this.enumName();
			this.state = 1780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1779;
				this.genericParameterClause();
				}
			}

			this.state = 1782;
			this.typeInheritanceClause();
			this.state = 1784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1783;
				this.genericWhereClause();
				}
			}

			this.state = 1786;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1787;
			this.rawValueStyleEnumMembers();
			this.state = 1788;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnumMembers(): RawValueStyleEnumMembersContext {
		let _localctx: RawValueStyleEnumMembersContext = new RawValueStyleEnumMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, SwiftParser.RULE_rawValueStyleEnumMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1791; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1790;
				this.rawValueStyleEnumMember();
				}
				}
				this.state = 1793; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR) | (1 << SwiftParser.CASE))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnumMember(): RawValueStyleEnumMemberContext {
		let _localctx: RawValueStyleEnumMemberContext = new RawValueStyleEnumMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, SwiftParser.RULE_rawValueStyleEnumMember);
		try {
			this.state = 1798;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,199,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1795;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1796;
				this.rawValueStyleEnumCaseClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1797;
				this.compilerControlStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnumCaseClause(): RawValueStyleEnumCaseClauseContext {
		let _localctx: RawValueStyleEnumCaseClauseContext = new RawValueStyleEnumCaseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, SwiftParser.RULE_rawValueStyleEnumCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1800;
				this.attributes();
				}
			}

			this.state = 1803;
			this.match(SwiftParser.CASE);
			this.state = 1804;
			this.rawValueStyleEnumCaseList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnumCaseList(): RawValueStyleEnumCaseListContext {
		let _localctx: RawValueStyleEnumCaseListContext = new RawValueStyleEnumCaseListContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, SwiftParser.RULE_rawValueStyleEnumCaseList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			this.rawValueStyleEnumCase();
			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1807;
				this.match(SwiftParser.COMMA);
				this.state = 1808;
				this.rawValueStyleEnumCase();
				}
				}
				this.state = 1813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueStyleEnumCase(): RawValueStyleEnumCaseContext {
		let _localctx: RawValueStyleEnumCaseContext = new RawValueStyleEnumCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, SwiftParser.RULE_rawValueStyleEnumCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1814;
			this.enumCaseName();
			this.state = 1816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,202,this._ctx) ) {
			case 1:
				{
				this.state = 1815;
				this.rawValueAssignment();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueAssignment(): RawValueAssignmentContext {
		let _localctx: RawValueAssignmentContext = new RawValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, SwiftParser.RULE_rawValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1819;
			this.match(SwiftParser.EQUAL);
			this.state = 1820;
			this.rawValueLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rawValueLiteral(): RawValueLiteralContext {
		let _localctx: RawValueLiteralContext = new RawValueLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, SwiftParser.RULE_rawValueLiteral);
		try {
			this.state = 1825;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BINARY_LITERAL:
			case SwiftParser.OCTAL_LITERAL:
			case SwiftParser.DECIMAL_DIGITS:
			case SwiftParser.DECIMAL_LITERAL:
			case SwiftParser.HEXADECIMAL_LITERAL:
			case SwiftParser.FLOATING_POINT_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1822;
				this.numericLiteral();
				}
				break;
			case SwiftParser.STATIC_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1823;
				this.match(SwiftParser.STATIC_STRING_LITERAL);
				}
				break;
			case SwiftParser.FALSE:
			case SwiftParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1824;
				this.booleanLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structDeclaration(): StructDeclarationContext {
		let _localctx: StructDeclarationContext = new StructDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, SwiftParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1827;
				this.attributes();
				}
			}

			this.state = 1831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1830;
				this.accessLevelModifier();
				}
			}

			this.state = 1833;
			this.match(SwiftParser.STRUCT);
			this.state = 1834;
			this.structName();
			this.state = 1836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1835;
				this.genericParameterClause();
				}
			}

			this.state = 1839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1838;
				this.typeInheritanceClause();
				}
			}

			this.state = 1842;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1841;
				this.genericWhereClause();
				}
			}

			this.state = 1844;
			this.structBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structName(): StructNameContext {
		let _localctx: StructNameContext = new StructNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, SwiftParser.RULE_structName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1846;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structBody(): StructBodyContext {
		let _localctx: StructBodyContext = new StructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, SwiftParser.RULE_structBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1848;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1849;
				this.structMembers();
				}
			}

			this.state = 1852;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structMembers(): StructMembersContext {
		let _localctx: StructMembersContext = new StructMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, SwiftParser.RULE_structMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1855; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1854;
				this.structMember();
				}
				}
				this.state = 1857; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, SwiftParser.RULE_structMember);
		try {
			this.state = 1861;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CLASS:
			case SwiftParser.DEINIT:
			case SwiftParser.ENUM:
			case SwiftParser.EXTENSION:
			case SwiftParser.FILEPRIVATE:
			case SwiftParser.FUNC:
			case SwiftParser.IMPORT:
			case SwiftParser.INIT:
			case SwiftParser.INTERNAL:
			case SwiftParser.LET:
			case SwiftParser.OPEN:
			case SwiftParser.PRECEDENCEGROUP:
			case SwiftParser.PRIVATE:
			case SwiftParser.PROTOCOL:
			case SwiftParser.PUBLIC:
			case SwiftParser.STATIC:
			case SwiftParser.STRUCT:
			case SwiftParser.SUBSCRIPT:
			case SwiftParser.TYPEALIAS:
			case SwiftParser.VAR:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.FINAL:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PREFIX:
			case SwiftParser.REQUIRED:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1859;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1860;
				this.compilerControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, SwiftParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1864;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1863;
				this.attributes();
				}
			}

			this.state = 1874;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,215,this._ctx) ) {
			case 1:
				{
				this.state = 1867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
					{
					this.state = 1866;
					this.accessLevelModifier();
					}
				}

				this.state = 1870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.FINAL) {
					{
					this.state = 1869;
					_localctx._FINAL = this.match(SwiftParser.FINAL);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1872;
				_localctx._FINAL = this.match(SwiftParser.FINAL);
				this.state = 1873;
				this.accessLevelModifier();
				}
				break;
			}
			this.state = 1876;
			this.match(SwiftParser.CLASS);
			this.state = 1877;
			this.className();
			this.state = 1879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1878;
				this.genericParameterClause();
				}
			}

			this.state = 1882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1881;
				this.typeInheritanceClause();
				}
			}

			this.state = 1885;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1884;
				this.genericWhereClause();
				}
			}

			this.state = 1887;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, SwiftParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1889;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, SwiftParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1891;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1892;
				this.classMembers();
				}
			}

			this.state = 1895;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classMembers(): ClassMembersContext {
		let _localctx: ClassMembersContext = new ClassMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, SwiftParser.RULE_classMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1898; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1897;
				this.classMember();
				}
				}
				this.state = 1900; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classMember(): ClassMemberContext {
		let _localctx: ClassMemberContext = new ClassMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, SwiftParser.RULE_classMember);
		try {
			this.state = 1904;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CLASS:
			case SwiftParser.DEINIT:
			case SwiftParser.ENUM:
			case SwiftParser.EXTENSION:
			case SwiftParser.FILEPRIVATE:
			case SwiftParser.FUNC:
			case SwiftParser.IMPORT:
			case SwiftParser.INIT:
			case SwiftParser.INTERNAL:
			case SwiftParser.LET:
			case SwiftParser.OPEN:
			case SwiftParser.PRECEDENCEGROUP:
			case SwiftParser.PRIVATE:
			case SwiftParser.PROTOCOL:
			case SwiftParser.PUBLIC:
			case SwiftParser.STATIC:
			case SwiftParser.STRUCT:
			case SwiftParser.SUBSCRIPT:
			case SwiftParser.TYPEALIAS:
			case SwiftParser.VAR:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.FINAL:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PREFIX:
			case SwiftParser.REQUIRED:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1902;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1903;
				this.compilerControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolDeclaration(): ProtocolDeclarationContext {
		let _localctx: ProtocolDeclarationContext = new ProtocolDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, SwiftParser.RULE_protocolDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1906;
				this.attributes();
				}
			}

			this.state = 1910;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1909;
				this.accessLevelModifier();
				}
			}

			this.state = 1912;
			this.match(SwiftParser.PROTOCOL);
			this.state = 1913;
			this.protocolName();
			this.state = 1915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1914;
				this.typeInheritanceClause();
				}
			}

			this.state = 1918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1917;
				this.genericWhereClause();
				}
			}

			this.state = 1920;
			this.protocolBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolName(): ProtocolNameContext {
		let _localctx: ProtocolNameContext = new ProtocolNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, SwiftParser.RULE_protocolName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1922;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolBody(): ProtocolBodyContext {
		let _localctx: ProtocolBodyContext = new ProtocolBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, SwiftParser.RULE_protocolBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1924;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.ASSOCIATEDTYPE) | (1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1925;
				this.protocolMembers();
				}
			}

			this.state = 1928;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolMembers(): ProtocolMembersContext {
		let _localctx: ProtocolMembersContext = new ProtocolMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, SwiftParser.RULE_protocolMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1931; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1930;
				this.protocolMember();
				}
				}
				this.state = 1933; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.ASSOCIATEDTYPE) | (1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolMember(): ProtocolMemberContext {
		let _localctx: ProtocolMemberContext = new ProtocolMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, SwiftParser.RULE_protocolMember);
		try {
			this.state = 1937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.ASSOCIATEDTYPE:
			case SwiftParser.CLASS:
			case SwiftParser.FILEPRIVATE:
			case SwiftParser.FUNC:
			case SwiftParser.INIT:
			case SwiftParser.INTERNAL:
			case SwiftParser.OPEN:
			case SwiftParser.PRIVATE:
			case SwiftParser.PUBLIC:
			case SwiftParser.STATIC:
			case SwiftParser.SUBSCRIPT:
			case SwiftParser.TYPEALIAS:
			case SwiftParser.VAR:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.FINAL:
			case SwiftParser.INFIX:
			case SwiftParser.LAZY:
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PREFIX:
			case SwiftParser.REQUIRED:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1935;
				this.protocolMemberDeclaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1936;
				this.compilerControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolMemberDeclaration(): ProtocolMemberDeclarationContext {
		let _localctx: ProtocolMemberDeclarationContext = new ProtocolMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, SwiftParser.RULE_protocolMemberDeclaration);
		try {
			this.state = 1945;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,229,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1939;
				this.protocolPropertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1940;
				this.protocolMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1941;
				this.protocolInitializerDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1942;
				this.protocolSubscriptDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1943;
				this.protocolAssociatedTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1944;
				this.typealiasDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolPropertyDeclaration(): ProtocolPropertyDeclarationContext {
		let _localctx: ProtocolPropertyDeclarationContext = new ProtocolPropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, SwiftParser.RULE_protocolPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1947;
			this.variableDeclarationHead();
			this.state = 1948;
			this.variableName();
			this.state = 1949;
			this.typeAnnotation();
			this.state = 1950;
			this.getterSetterKeywordBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolMethodDeclaration(): ProtocolMethodDeclarationContext {
		let _localctx: ProtocolMethodDeclarationContext = new ProtocolMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, SwiftParser.RULE_protocolMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1952;
			this.functionHead();
			this.state = 1953;
			this.functionName();
			this.state = 1955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1954;
				this.genericParameterClause();
				}
			}

			this.state = 1957;
			this.functionSignature();
			this.state = 1959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1958;
				this.genericWhereClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolInitializerDeclaration(): ProtocolInitializerDeclarationContext {
		let _localctx: ProtocolInitializerDeclarationContext = new ProtocolInitializerDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, SwiftParser.RULE_protocolInitializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1961;
			this.initializerHead();
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1962;
				this.genericParameterClause();
				}
			}

			this.state = 1965;
			this.parameterClause();
			this.state = 1967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) {
				{
				this.state = 1966;
				_localctx._KIND = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
					_localctx._KIND = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1969;
				this.genericWhereClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolSubscriptDeclaration(): ProtocolSubscriptDeclarationContext {
		let _localctx: ProtocolSubscriptDeclarationContext = new ProtocolSubscriptDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, SwiftParser.RULE_protocolSubscriptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1972;
			this.subscriptHead();
			this.state = 1973;
			this.subscriptResult();
			this.state = 1975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1974;
				this.genericWhereClause();
				}
			}

			this.state = 1977;
			this.getterSetterKeywordBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public protocolAssociatedTypeDeclaration(): ProtocolAssociatedTypeDeclarationContext {
		let _localctx: ProtocolAssociatedTypeDeclarationContext = new ProtocolAssociatedTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, SwiftParser.RULE_protocolAssociatedTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1980;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1979;
				this.attributes();
				}
			}

			this.state = 1983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1982;
				this.accessLevelModifier();
				}
			}

			this.state = 1985;
			this.match(SwiftParser.ASSOCIATEDTYPE);
			this.state = 1986;
			this.typealiasName();
			this.state = 1988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,238,this._ctx) ) {
			case 1:
				{
				this.state = 1987;
				this.typeInheritanceClause();
				}
				break;
			}
			this.state = 1991;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,239,this._ctx) ) {
			case 1:
				{
				this.state = 1990;
				this.typealiasAssignment();
				}
				break;
			}
			this.state = 1994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1993;
				this.genericWhereClause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializerDeclaration(): InitializerDeclarationContext {
		let _localctx: InitializerDeclarationContext = new InitializerDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, SwiftParser.RULE_initializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1996;
			this.initializerHead();
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1997;
				this.genericParameterClause();
				}
			}

			this.state = 2000;
			this.parameterClause();
			this.state = 2002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) {
				{
				this.state = 2001;
				_localctx._KIND = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
					_localctx._KIND = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 2005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 2004;
				this.genericWhereClause();
				}
			}

			this.state = 2007;
			this.initializerBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializerHead(): InitializerHeadContext {
		let _localctx: InitializerHeadContext = new InitializerHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, SwiftParser.RULE_initializerHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2010;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2009;
				this.attributes();
				}
			}

			this.state = 2013;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 2012;
				this.declarationModifiers();
				}
			}

			this.state = 2015;
			this.match(SwiftParser.INIT);
			this.state = 2018;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,246,this._ctx) ) {
			case 1:
				{
				this.state = 2016;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 2017;
				_localctx._MARK = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.EXCLAMATION || _la===SwiftParser.QUESTION) ) {
					_localctx._MARK = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public initializerBody(): InitializerBodyContext {
		let _localctx: InitializerBodyContext = new InitializerBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, SwiftParser.RULE_initializerBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2020;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public deinitializerDeclaration(): DeinitializerDeclarationContext {
		let _localctx: DeinitializerDeclarationContext = new DeinitializerDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, SwiftParser.RULE_deinitializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2022;
				this.attributes();
				}
			}

			this.state = 2025;
			this.match(SwiftParser.DEINIT);
			this.state = 2026;
			this.codeBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public extensionDeclaration(): ExtensionDeclarationContext {
		let _localctx: ExtensionDeclarationContext = new ExtensionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, SwiftParser.RULE_extensionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2028;
				this.attributes();
				}
			}

			this.state = 2032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 2031;
				this.accessLevelModifier();
				}
			}

			this.state = 2034;
			this.match(SwiftParser.EXTENSION);
			this.state = 2035;
			this.typeIdentifier();
			this.state = 2038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.COLON:
				{
				this.state = 2036;
				this.typeInheritanceClause();
				}
				break;
			case SwiftParser.WHERE:
				{
				this.state = 2037;
				this.genericWhereClause();
				}
				break;
			case SwiftParser.LEFT_BRACE:
				break;
			default:
				break;
			}
			this.state = 2040;
			this.extensionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public extensionBody(): ExtensionBodyContext {
		let _localctx: ExtensionBodyContext = new ExtensionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, SwiftParser.RULE_extensionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2042;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 2044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 2043;
				this.extensionMembers();
				}
			}

			this.state = 2046;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public extensionMembers(): ExtensionMembersContext {
		let _localctx: ExtensionMembersContext = new ExtensionMembersContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, SwiftParser.RULE_extensionMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2049; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2048;
				this.extensionMember();
				}
				}
				this.state = 2051; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public extensionMember(): ExtensionMemberContext {
		let _localctx: ExtensionMemberContext = new ExtensionMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, SwiftParser.RULE_extensionMember);
		try {
			this.state = 2055;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CLASS:
			case SwiftParser.DEINIT:
			case SwiftParser.ENUM:
			case SwiftParser.EXTENSION:
			case SwiftParser.FILEPRIVATE:
			case SwiftParser.FUNC:
			case SwiftParser.IMPORT:
			case SwiftParser.INIT:
			case SwiftParser.INTERNAL:
			case SwiftParser.LET:
			case SwiftParser.OPEN:
			case SwiftParser.PRECEDENCEGROUP:
			case SwiftParser.PRIVATE:
			case SwiftParser.PROTOCOL:
			case SwiftParser.PUBLIC:
			case SwiftParser.STATIC:
			case SwiftParser.STRUCT:
			case SwiftParser.SUBSCRIPT:
			case SwiftParser.TYPEALIAS:
			case SwiftParser.VAR:
			case SwiftParser.CONVENIENCE:
			case SwiftParser.DYNAMIC:
			case SwiftParser.FINAL:
			case SwiftParser.INFIX:
			case SwiftParser.INDIRECT:
			case SwiftParser.LAZY:
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
			case SwiftParser.OPTIONAL:
			case SwiftParser.OVERRIDE:
			case SwiftParser.POSTFIX:
			case SwiftParser.PREFIX:
			case SwiftParser.REQUIRED:
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
			case SwiftParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2053;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2054;
				this.compilerControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscriptDeclaration(): SubscriptDeclarationContext {
		let _localctx: SubscriptDeclarationContext = new SubscriptDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, SwiftParser.RULE_subscriptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2057;
			this.subscriptHead();
			this.state = 2058;
			this.subscriptResult();
			this.state = 2060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 2059;
				this.genericWhereClause();
				}
			}

			this.state = 2064;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,255,this._ctx) ) {
			case 1:
				{
				this.state = 2062;
				this.getterSetterBlock();
				}
				break;

			case 2:
				{
				this.state = 2063;
				this.getterSetterKeywordBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscriptHead(): SubscriptHeadContext {
		let _localctx: SubscriptHeadContext = new SubscriptHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, SwiftParser.RULE_subscriptHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2066;
				this.attributes();
				}
			}

			this.state = 2070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 2069;
				this.declarationModifiers();
				}
			}

			this.state = 2072;
			this.match(SwiftParser.SUBSCRIPT);
			this.state = 2074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 2073;
				this.genericParameterClause();
				}
			}

			this.state = 2076;
			this.parameterClause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscriptResult(): SubscriptResultContext {
		let _localctx: SubscriptResultContext = new SubscriptResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, SwiftParser.RULE_subscriptResult);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			this.match(SwiftParser.ARROW);
			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,259,this._ctx) ) {
			case 1:
				{
				this.state = 2079;
				this.attributes();
				}
				break;
			}
			this.state = 2082;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public operatorDeclaration(): OperatorDeclarationContext {
		let _localctx: OperatorDeclarationContext = new OperatorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, SwiftParser.RULE_operatorDeclaration);
		try {
			this.state = 2087;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.PREFIX:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2084;
				this.prefixOperatorDeclaration();
				}
				break;
			case SwiftParser.POSTFIX:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2085;
				this.postfixOperatorDeclaration();
				}
				break;
			case SwiftParser.INFIX:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2086;
				this.infixOperatorDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefixOperatorDeclaration(): PrefixOperatorDeclarationContext {
		let _localctx: PrefixOperatorDeclarationContext = new PrefixOperatorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, SwiftParser.RULE_prefixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this.match(SwiftParser.PREFIX);
			this.state = 2090;
			this.match(SwiftParser.OPERATOR_KEYWORD);
			this.state = 2091;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfixOperatorDeclaration(): PostfixOperatorDeclarationContext {
		let _localctx: PostfixOperatorDeclarationContext = new PostfixOperatorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, SwiftParser.RULE_postfixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2093;
			this.match(SwiftParser.POSTFIX);
			this.state = 2094;
			this.match(SwiftParser.OPERATOR_KEYWORD);
			this.state = 2095;
			this.operator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infixOperatorDeclaration(): InfixOperatorDeclarationContext {
		let _localctx: InfixOperatorDeclarationContext = new InfixOperatorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, SwiftParser.RULE_infixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2097;
			this.match(SwiftParser.INFIX);
			this.state = 2098;
			this.match(SwiftParser.OPERATOR_KEYWORD);
			this.state = 2099;
			this.operator();
			this.state = 2101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,261,this._ctx) ) {
			case 1:
				{
				this.state = 2100;
				this.infixOperatorGroup();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infixOperatorGroup(): InfixOperatorGroupContext {
		let _localctx: InfixOperatorGroupContext = new InfixOperatorGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, SwiftParser.RULE_infixOperatorGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2103;
			this.match(SwiftParser.COLON);
			this.state = 2104;
			this.precedenceGroupName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupDeclaration(): PrecedenceGroupDeclarationContext {
		let _localctx: PrecedenceGroupDeclarationContext = new PrecedenceGroupDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, SwiftParser.RULE_precedenceGroupDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2106;
			this.match(SwiftParser.PRECEDENCEGROUP);
			this.state = 2107;
			this.precedenceGroupName();
			this.state = 2108;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 2110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.ASSOCIATIVITY || _la===SwiftParser.IDENTIFIER) {
				{
				this.state = 2109;
				this.precedenceGroupAttributes();
				}
			}

			this.state = 2112;
			this.match(SwiftParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupAttributes(): PrecedenceGroupAttributesContext {
		let _localctx: PrecedenceGroupAttributesContext = new PrecedenceGroupAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, SwiftParser.RULE_precedenceGroupAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2115; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2114;
				this.precedenceGroupAttribute();
				}
				}
				this.state = 2117; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SwiftParser.ASSOCIATIVITY || _la===SwiftParser.IDENTIFIER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupAttribute(): PrecedenceGroupAttributeContext {
		let _localctx: PrecedenceGroupAttributeContext = new PrecedenceGroupAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, SwiftParser.RULE_precedenceGroupAttribute);
		try {
			this.state = 2122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,264,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2119;
				this.precedenceGroupRelation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2120;
				this.precedenceGroupAssignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2121;
				this.precedenceGroupAssociativity();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupRelation(): PrecedenceGroupRelationContext {
		let _localctx: PrecedenceGroupRelationContext = new PrecedenceGroupRelationContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, SwiftParser.RULE_precedenceGroupRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2124;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 2125;
			this.match(SwiftParser.COLON);
			this.state = 2126;
			this.precedenceGroupNames();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupAssignment(): PrecedenceGroupAssignmentContext {
		let _localctx: PrecedenceGroupAssignmentContext = new PrecedenceGroupAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, SwiftParser.RULE_precedenceGroupAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2128;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 2129;
			this.match(SwiftParser.COLON);
			this.state = 2130;
			this.booleanLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupAssociativity(): PrecedenceGroupAssociativityContext {
		let _localctx: PrecedenceGroupAssociativityContext = new PrecedenceGroupAssociativityContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, SwiftParser.RULE_precedenceGroupAssociativity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2132;
			this.match(SwiftParser.ASSOCIATIVITY);
			this.state = 2133;
			this.match(SwiftParser.COLON);
			this.state = 2134;
			_localctx._VALUE = this._input.LT(1);
			_la = this._input.LA(1);
			if ( !(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (SwiftParser.LEFT - 80)) | (1 << (SwiftParser.NONE - 80)) | (1 << (SwiftParser.RIGHT - 80)))) !== 0)) ) {
				_localctx._VALUE = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupNames(): PrecedenceGroupNamesContext {
		let _localctx: PrecedenceGroupNamesContext = new PrecedenceGroupNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, SwiftParser.RULE_precedenceGroupNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2136;
			this.precedenceGroupName();
			this.state = 2141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2137;
				this.match(SwiftParser.COMMA);
				this.state = 2138;
				this.precedenceGroupName();
				}
				}
				this.state = 2143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public precedenceGroupName(): PrecedenceGroupNameContext {
		let _localctx: PrecedenceGroupNameContext = new PrecedenceGroupNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, SwiftParser.RULE_precedenceGroupName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2144;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declarationModifier(): DeclarationModifierContext {
		let _localctx: DeclarationModifierContext = new DeclarationModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 448, SwiftParser.RULE_declarationModifier);
		try {
			this.state = 2161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2146;
				this.match(SwiftParser.CLASS);
				}
				break;
			case SwiftParser.CONVENIENCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2147;
				this.match(SwiftParser.CONVENIENCE);
				}
				break;
			case SwiftParser.DYNAMIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2148;
				this.match(SwiftParser.DYNAMIC);
				}
				break;
			case SwiftParser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2149;
				this.match(SwiftParser.FINAL);
				}
				break;
			case SwiftParser.INFIX:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2150;
				this.match(SwiftParser.INFIX);
				}
				break;
			case SwiftParser.LAZY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2151;
				this.match(SwiftParser.LAZY);
				}
				break;
			case SwiftParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2152;
				this.match(SwiftParser.OPTIONAL);
				}
				break;
			case SwiftParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2153;
				this.match(SwiftParser.OVERRIDE);
				}
				break;
			case SwiftParser.POSTFIX:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2154;
				this.match(SwiftParser.POSTFIX);
				}
				break;
			case SwiftParser.PREFIX:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2155;
				this.match(SwiftParser.PREFIX);
				}
				break;
			case SwiftParser.REQUIRED:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2156;
				this.match(SwiftParser.REQUIRED);
				}
				break;
			case SwiftParser.STATIC:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2157;
				this.match(SwiftParser.STATIC);
				}
				break;
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2158;
				this.captureSpecifier();
				}
				break;
			case SwiftParser.FILEPRIVATE:
			case SwiftParser.INTERNAL:
			case SwiftParser.OPEN:
			case SwiftParser.PRIVATE:
			case SwiftParser.PUBLIC:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2159;
				this.accessLevelModifier();
				}
				break;
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2160;
				this.mutationModifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declarationModifiers(): DeclarationModifiersContext {
		let _localctx: DeclarationModifiersContext = new DeclarationModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 450, SwiftParser.RULE_declarationModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2164; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2163;
				this.declarationModifier();
				}
				}
				this.state = 2166; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public accessLevelModifier(): AccessLevelModifierContext {
		let _localctx: AccessLevelModifierContext = new AccessLevelModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 452, SwiftParser.RULE_accessLevelModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2168;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 2169;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 2170;
				this.match(SwiftParser.SET);
				this.state = 2171;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public mutationModifier(): MutationModifierContext {
		let _localctx: MutationModifierContext = new MutationModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 454, SwiftParser.RULE_mutationModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2174;
			_la = this._input.LA(1);
			if ( !(_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 456, SwiftParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2176;
			this.match(SwiftParser.AT);
			this.state = 2177;
			this.attributeName();
			this.state = 2179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,269,this._ctx) ) {
			case 1:
				{
				this.state = 2178;
				this.attributeArgumentClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributeName(): AttributeNameContext {
		let _localctx: AttributeNameContext = new AttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 458, SwiftParser.RULE_attributeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2181;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributeArgumentClause(): AttributeArgumentClauseContext {
		let _localctx: AttributeArgumentClauseContext = new AttributeArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 460, SwiftParser.RULE_attributeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2183;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 2185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SwiftParser.FALSE - 44)) | (1 << (SwiftParser.NIL - 44)) | (1 << (SwiftParser.TRUE - 44)) | (1 << (SwiftParser.ASSOCIATIVITY - 44)) | (1 << (SwiftParser.CONVENIENCE - 44)) | (1 << (SwiftParser.DYNAMIC - 44)) | (1 << (SwiftParser.DID_SET - 44)) | (1 << (SwiftParser.FINAL - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SwiftParser.GET - 76)) | (1 << (SwiftParser.INFIX - 76)) | (1 << (SwiftParser.INDIRECT - 76)) | (1 << (SwiftParser.LAZY - 76)) | (1 << (SwiftParser.LEFT - 76)) | (1 << (SwiftParser.MUTATING - 76)) | (1 << (SwiftParser.NONE - 76)) | (1 << (SwiftParser.NOMUTATING - 76)) | (1 << (SwiftParser.OPTIONAL - 76)) | (1 << (SwiftParser.OVERRIDE - 76)) | (1 << (SwiftParser.POSTFIX - 76)) | (1 << (SwiftParser.PRECEDENCE - 76)) | (1 << (SwiftParser.PREFIX - 76)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 76)) | (1 << (SwiftParser.REQUIRED - 76)) | (1 << (SwiftParser.RIGHT - 76)) | (1 << (SwiftParser.SET - 76)) | (1 << (SwiftParser.TYPE - 76)) | (1 << (SwiftParser.UNOWNED - 76)) | (1 << (SwiftParser.WEAK - 76)) | (1 << (SwiftParser.WILL_SET - 76)) | (1 << (SwiftParser.AMPERSAND - 76)) | (1 << (SwiftParser.ARROW - 76)) | (1 << (SwiftParser.AT - 76)) | (1 << (SwiftParser.COLON - 76)) | (1 << (SwiftParser.COMMA - 76)) | (1 << (SwiftParser.EQUAL - 76)) | (1 << (SwiftParser.EXCLAMATION - 76)) | (1 << (SwiftParser.GRAVE - 76)) | (1 << (SwiftParser.LEFT_BRACE - 76)) | (1 << (SwiftParser.LEFT_BRACKET - 76)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SwiftParser.NUMBER - 108)) | (1 << (SwiftParser.PERIOD - 108)) | (1 << (SwiftParser.QUESTION - 108)) | (1 << (SwiftParser.SEMICOLON - 108)) | (1 << (SwiftParser.ASTERISK - 108)) | (1 << (SwiftParser.CARET - 108)) | (1 << (SwiftParser.GREATER_THAN - 108)) | (1 << (SwiftParser.LESS_THAN - 108)) | (1 << (SwiftParser.MINUS - 108)) | (1 << (SwiftParser.PERCENT - 108)) | (1 << (SwiftParser.PIPE - 108)) | (1 << (SwiftParser.PLUS - 108)) | (1 << (SwiftParser.SLASH - 108)) | (1 << (SwiftParser.TILDE - 108)) | (1 << (SwiftParser.IDENTIFIER - 108)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 108)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 108)) | (1 << (SwiftParser.BINARY_LITERAL - 108)) | (1 << (SwiftParser.OCTAL_LITERAL - 108)) | (1 << (SwiftParser.DECIMAL_DIGITS - 108)) | (1 << (SwiftParser.DECIMAL_LITERAL - 108)) | (1 << (SwiftParser.HEXADECIMAL_LITERAL - 108)) | (1 << (SwiftParser.FLOATING_POINT_LITERAL - 108)) | (1 << (SwiftParser.STATIC_STRING_LITERAL - 108)))) !== 0) || _la===SwiftParser.INTERPOLATED_STRING_LITERAL || _la===SwiftParser.OPERATOR) {
				{
				this.state = 2184;
				this.balancedTokens();
				}
			}

			this.state = 2187;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 462, SwiftParser.RULE_attributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2189;
					this.attribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2192; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,271,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public balancedTokens(): BalancedTokensContext {
		let _localctx: BalancedTokensContext = new BalancedTokensContext(this._ctx, this.state);
		this.enterRule(_localctx, 464, SwiftParser.RULE_balancedTokens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2195; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2194;
				this.balancedToken();
				}
				}
				this.state = 2197; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SwiftParser.FALSE - 44)) | (1 << (SwiftParser.NIL - 44)) | (1 << (SwiftParser.TRUE - 44)) | (1 << (SwiftParser.ASSOCIATIVITY - 44)) | (1 << (SwiftParser.CONVENIENCE - 44)) | (1 << (SwiftParser.DYNAMIC - 44)) | (1 << (SwiftParser.DID_SET - 44)) | (1 << (SwiftParser.FINAL - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SwiftParser.GET - 76)) | (1 << (SwiftParser.INFIX - 76)) | (1 << (SwiftParser.INDIRECT - 76)) | (1 << (SwiftParser.LAZY - 76)) | (1 << (SwiftParser.LEFT - 76)) | (1 << (SwiftParser.MUTATING - 76)) | (1 << (SwiftParser.NONE - 76)) | (1 << (SwiftParser.NOMUTATING - 76)) | (1 << (SwiftParser.OPTIONAL - 76)) | (1 << (SwiftParser.OVERRIDE - 76)) | (1 << (SwiftParser.POSTFIX - 76)) | (1 << (SwiftParser.PRECEDENCE - 76)) | (1 << (SwiftParser.PREFIX - 76)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 76)) | (1 << (SwiftParser.REQUIRED - 76)) | (1 << (SwiftParser.RIGHT - 76)) | (1 << (SwiftParser.SET - 76)) | (1 << (SwiftParser.TYPE - 76)) | (1 << (SwiftParser.UNOWNED - 76)) | (1 << (SwiftParser.WEAK - 76)) | (1 << (SwiftParser.WILL_SET - 76)) | (1 << (SwiftParser.AMPERSAND - 76)) | (1 << (SwiftParser.ARROW - 76)) | (1 << (SwiftParser.AT - 76)) | (1 << (SwiftParser.COLON - 76)) | (1 << (SwiftParser.COMMA - 76)) | (1 << (SwiftParser.EQUAL - 76)) | (1 << (SwiftParser.EXCLAMATION - 76)) | (1 << (SwiftParser.GRAVE - 76)) | (1 << (SwiftParser.LEFT_BRACE - 76)) | (1 << (SwiftParser.LEFT_BRACKET - 76)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SwiftParser.NUMBER - 108)) | (1 << (SwiftParser.PERIOD - 108)) | (1 << (SwiftParser.QUESTION - 108)) | (1 << (SwiftParser.SEMICOLON - 108)) | (1 << (SwiftParser.ASTERISK - 108)) | (1 << (SwiftParser.CARET - 108)) | (1 << (SwiftParser.GREATER_THAN - 108)) | (1 << (SwiftParser.LESS_THAN - 108)) | (1 << (SwiftParser.MINUS - 108)) | (1 << (SwiftParser.PERCENT - 108)) | (1 << (SwiftParser.PIPE - 108)) | (1 << (SwiftParser.PLUS - 108)) | (1 << (SwiftParser.SLASH - 108)) | (1 << (SwiftParser.TILDE - 108)) | (1 << (SwiftParser.IDENTIFIER - 108)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 108)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 108)) | (1 << (SwiftParser.BINARY_LITERAL - 108)) | (1 << (SwiftParser.OCTAL_LITERAL - 108)) | (1 << (SwiftParser.DECIMAL_DIGITS - 108)) | (1 << (SwiftParser.DECIMAL_LITERAL - 108)) | (1 << (SwiftParser.HEXADECIMAL_LITERAL - 108)) | (1 << (SwiftParser.FLOATING_POINT_LITERAL - 108)) | (1 << (SwiftParser.STATIC_STRING_LITERAL - 108)))) !== 0) || _la===SwiftParser.INTERPOLATED_STRING_LITERAL || _la===SwiftParser.OPERATOR );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public balancedToken(): BalancedTokenContext {
		let _localctx: BalancedTokenContext = new BalancedTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 466, SwiftParser.RULE_balancedToken);
		try {
			this.state = 2226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,273,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2199;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 2200;
				this.balancedTokens();
				this.state = 2201;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2203;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 2204;
				this.balancedTokens();
				this.state = 2205;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2207;
				this.match(SwiftParser.LEFT_BRACE);
				this.state = 2208;
				this.balancedTokens();
				this.state = 2209;
				this.match(SwiftParser.RIGHT_BRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2211;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2212;
				this.literal();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2213;
				this.operator();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2214;
				this.match(SwiftParser.PERIOD);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2215;
				this.match(SwiftParser.COMMA);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2216;
				this.match(SwiftParser.COLON);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2217;
				this.match(SwiftParser.SEMICOLON);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2218;
				this.match(SwiftParser.EQUAL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2219;
				this.match(SwiftParser.AT);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2220;
				this.match(SwiftParser.NUMBER);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2221;
				this.match(SwiftParser.AMPERSAND);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2222;
				this.match(SwiftParser.ARROW);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2223;
				this.match(SwiftParser.GRAVE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2224;
				this.match(SwiftParser.QUESTION);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2225;
				this.match(SwiftParser.EXCLAMATION);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	@RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatternContext = new PatternContext(this._ctx, _parentState);
		let _prevctx: PatternContext = _localctx;
		let _startState: number = 468;
		this.enterRecursionRule(_localctx, 468, SwiftParser.RULE_pattern, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,279,this._ctx) ) {
			case 1:
				{
				_localctx = new WildcardPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2229;
				this.match(SwiftParser.UNDERSCORE);
				this.state = 2231;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,274,this._ctx) ) {
				case 1:
					{
					this.state = 2230;
					this.typeAnnotation();
					}
					break;
				}
				}
				break;

			case 2:
				{
				_localctx = new IdentifierPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2233;
				this.identifier();
				this.state = 2235;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,275,this._ctx) ) {
				case 1:
					{
					this.state = 2234;
					this.typeAnnotation();
					}
					break;
				}
				}
				break;

			case 3:
				{
				_localctx = new ValueBindingPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2237;
				(_localctx as ValueBindingPatternContext)._KIND = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.LET || _la===SwiftParser.VAR) ) {
					(_localctx as ValueBindingPatternContext)._KIND = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2238;
				this.pattern(7);
				}
				break;

			case 4:
				{
				_localctx = new TuplePatternAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2239;
				this.tuplePattern();
				this.state = 2241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,276,this._ctx) ) {
				case 1:
					{
					this.state = 2240;
					this.typeAnnotation();
					}
					break;
				}
				}
				break;

			case 5:
				{
				_localctx = new EnumCasePatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SwiftParser.ASSOCIATIVITY - 71)) | (1 << (SwiftParser.CONVENIENCE - 71)) | (1 << (SwiftParser.DYNAMIC - 71)) | (1 << (SwiftParser.DID_SET - 71)) | (1 << (SwiftParser.FINAL - 71)) | (1 << (SwiftParser.GET - 71)) | (1 << (SwiftParser.INFIX - 71)) | (1 << (SwiftParser.INDIRECT - 71)) | (1 << (SwiftParser.LAZY - 71)) | (1 << (SwiftParser.LEFT - 71)) | (1 << (SwiftParser.MUTATING - 71)) | (1 << (SwiftParser.NONE - 71)) | (1 << (SwiftParser.NOMUTATING - 71)) | (1 << (SwiftParser.OPTIONAL - 71)) | (1 << (SwiftParser.OVERRIDE - 71)) | (1 << (SwiftParser.POSTFIX - 71)) | (1 << (SwiftParser.PRECEDENCE - 71)) | (1 << (SwiftParser.PREFIX - 71)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 71)) | (1 << (SwiftParser.REQUIRED - 71)) | (1 << (SwiftParser.RIGHT - 71)) | (1 << (SwiftParser.SET - 71)) | (1 << (SwiftParser.TYPE - 71)) | (1 << (SwiftParser.UNOWNED - 71)) | (1 << (SwiftParser.WEAK - 71)) | (1 << (SwiftParser.WILL_SET - 71)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
					{
					this.state = 2243;
					this.typeIdentifier();
					}
				}

				this.state = 2246;
				this.match(SwiftParser.PERIOD);
				this.state = 2247;
				this.enumCaseName();
				this.state = 2249;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,278,this._ctx) ) {
				case 1:
					{
					this.state = 2248;
					this.tuplePattern();
					}
					break;
				}
				}
				break;

			case 6:
				{
				_localctx = new OptionalPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2251;
				this.identifier();
				this.state = 2252;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 2253;
				this.match(SwiftParser.QUESTION);
				}
				break;

			case 7:
				{
				_localctx = new IsPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2255;
				this.match(SwiftParser.IS);
				this.state = 2256;
				this.type(0);
				}
				break;

			case 8:
				{
				_localctx = new ExpressionPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2257;
				this.expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2265;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,280,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AsPatternContext(new PatternContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_pattern);
					this.state = 2260;
					if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					this.state = 2261;
					this.match(SwiftParser.AS);
					this.state = 2262;
					this.type(0);
					}
					} 
				}
				this.state = 2267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,280,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tuplePattern(): TuplePatternContext {
		let _localctx: TuplePatternContext = new TuplePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, SwiftParser.RULE_tuplePattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2268;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 2270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,281,this._ctx) ) {
			case 1:
				{
				this.state = 2269;
				this.tuplePatternElementList();
				}
				break;
			}
			this.state = 2272;
			this.match(SwiftParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tuplePatternElementList(): TuplePatternElementListContext {
		let _localctx: TuplePatternElementListContext = new TuplePatternElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, SwiftParser.RULE_tuplePatternElementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2274;
			this.tuplePatternElement();
			this.state = 2279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2275;
				this.match(SwiftParser.COMMA);
				this.state = 2276;
				this.tuplePatternElement();
				}
				}
				this.state = 2281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tuplePatternElement(): TuplePatternElementContext {
		let _localctx: TuplePatternElementContext = new TuplePatternElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, SwiftParser.RULE_tuplePatternElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,284,this._ctx) ) {
			case 1:
				{
				this.state = 2284;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 2282;
					this.match(SwiftParser.UNDERSCORE);
					}
					break;
				case SwiftParser.ASSOCIATIVITY:
				case SwiftParser.CONVENIENCE:
				case SwiftParser.DYNAMIC:
				case SwiftParser.DID_SET:
				case SwiftParser.FINAL:
				case SwiftParser.GET:
				case SwiftParser.INFIX:
				case SwiftParser.INDIRECT:
				case SwiftParser.LAZY:
				case SwiftParser.LEFT:
				case SwiftParser.MUTATING:
				case SwiftParser.NONE:
				case SwiftParser.NOMUTATING:
				case SwiftParser.OPTIONAL:
				case SwiftParser.OVERRIDE:
				case SwiftParser.POSTFIX:
				case SwiftParser.PRECEDENCE:
				case SwiftParser.PREFIX:
				case SwiftParser.PROTOCOL_METATYPE:
				case SwiftParser.REQUIRED:
				case SwiftParser.RIGHT:
				case SwiftParser.SET:
				case SwiftParser.TYPE:
				case SwiftParser.UNOWNED:
				case SwiftParser.WEAK:
				case SwiftParser.WILL_SET:
				case SwiftParser.IDENTIFIER:
				case SwiftParser.QUOTED_IDENTIFIER:
				case SwiftParser.IMPLICIT_PARAMETER_NAME:
					{
					this.state = 2283;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2286;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 2289;
			this.pattern(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericParameterClause(): GenericParameterClauseContext {
		let _localctx: GenericParameterClauseContext = new GenericParameterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, SwiftParser.RULE_genericParameterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this.match(SwiftParser.LESS_THAN);
			this.state = 2292;
			this.genericParameterList();
			this.state = 2293;
			this.match(SwiftParser.GREATER_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericParameterList(): GenericParameterListContext {
		let _localctx: GenericParameterListContext = new GenericParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, SwiftParser.RULE_genericParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.genericParameter();
			this.state = 2300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2296;
				this.match(SwiftParser.COMMA);
				this.state = 2297;
				this.genericParameter();
				}
				}
				this.state = 2302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericParameter(): GenericParameterContext {
		let _localctx: GenericParameterContext = new GenericParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, SwiftParser.RULE_genericParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2303;
			this.typeName();
			this.state = 2309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 2304;
				this.match(SwiftParser.COLON);
				this.state = 2307;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,286,this._ctx) ) {
				case 1:
					{
					this.state = 2305;
					this.typeIdentifier();
					}
					break;

				case 2:
					{
					this.state = 2306;
					this.protocolCompositionType();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericWhereClause(): GenericWhereClauseContext {
		let _localctx: GenericWhereClauseContext = new GenericWhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, SwiftParser.RULE_genericWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2311;
			this.match(SwiftParser.WHERE);
			this.state = 2312;
			this.requirementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public requirementList(): RequirementListContext {
		let _localctx: RequirementListContext = new RequirementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, SwiftParser.RULE_requirementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2314;
			this.requirement();
			this.state = 2319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,288,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2315;
					this.match(SwiftParser.COMMA);
					this.state = 2316;
					this.requirement();
					}
					} 
				}
				this.state = 2321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,288,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public requirement(): RequirementContext {
		let _localctx: RequirementContext = new RequirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, SwiftParser.RULE_requirement);
		try {
			this.state = 2324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,289,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2322;
				this.conformanceRequirement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2323;
				this.sameTypeRequirement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conformanceRequirement(): ConformanceRequirementContext {
		let _localctx: ConformanceRequirementContext = new ConformanceRequirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, SwiftParser.RULE_conformanceRequirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2326;
			this.typeIdentifier();
			this.state = 2327;
			this.match(SwiftParser.COLON);
			this.state = 2330;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,290,this._ctx) ) {
			case 1:
				{
				this.state = 2328;
				this.typeIdentifier();
				}
				break;

			case 2:
				{
				this.state = 2329;
				this.protocolCompositionType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sameTypeRequirement(): SameTypeRequirementContext {
		let _localctx: SameTypeRequirementContext = new SameTypeRequirementContext(this._ctx, this.state);
		this.enterRule(_localctx, 490, SwiftParser.RULE_sameTypeRequirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2332;
			this.typeIdentifier();
			this.state = 2333;
			this.binaryOperator();
			this.state = 2334;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericArgumentClause(): GenericArgumentClauseContext {
		let _localctx: GenericArgumentClauseContext = new GenericArgumentClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 492, SwiftParser.RULE_genericArgumentClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2336;
			this.match(SwiftParser.LESS_THAN);
			this.state = 2337;
			this.genericArgumentList();
			this.state = 2338;
			this.match(SwiftParser.GREATER_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericArgumentList(): GenericArgumentListContext {
		let _localctx: GenericArgumentListContext = new GenericArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 494, SwiftParser.RULE_genericArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2340;
			this.genericArgument();
			this.state = 2345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2341;
				this.match(SwiftParser.COMMA);
				this.state = 2342;
				this.genericArgument();
				}
				}
				this.state = 2347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public genericArgument(): GenericArgumentContext {
		let _localctx: GenericArgumentContext = new GenericArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 496, SwiftParser.RULE_genericArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2348;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.prefixOperator_sempred(_localctx as PrefixOperatorContext, predIndex);

		case 11:
			return this.postfixOperator_sempred(_localctx as PostfixOperatorContext, predIndex);

		case 12:
			return this.binaryOperator_sempred(_localctx as BinaryOperatorContext, predIndex);

		case 13:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 20:
			return this.functionTypeArgumentClause_sempred(_localctx as FunctionTypeArgumentClauseContext, predIndex);

		case 24:
			return this.protocolCompositionType_sempred(_localctx as ProtocolCompositionTypeContext, predIndex);

		case 29:
			return this.inOutExpression_sempred(_localctx as InOutExpressionContext, predIndex);

		case 30:
			return this.tryOperator_sempred(_localctx as TryOperatorContext, predIndex);

		case 32:
			return this.assignmentOperator_sempred(_localctx as AssignmentOperatorContext, predIndex);

		case 33:
			return this.conditionalOperator_sempred(_localctx as ConditionalOperatorContext, predIndex);

		case 34:
			return this.typeCastingOperator_sempred(_localctx as TypeCastingOperatorContext, predIndex);

		case 52:
			return this.closureParameter_sempred(_localctx as ClosureParameterContext, predIndex);

		case 64:
			return this.keyPathPostfix_sempred(_localctx as KeyPathPostfixContext, predIndex);

		case 67:
			return this.postfixExpression_sempred(_localctx as PostfixExpressionContext, predIndex);

		case 74:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 111:
			return this.compilationCondition_sempred(_localctx as CompilationConditionContext, predIndex);

		case 133:
			return this.initializer_sempred(_localctx as InitializerContext, predIndex);

		case 149:
			return this.typealiasAssignment_sempred(_localctx as TypealiasAssignmentContext, predIndex);

		case 158:
			return this.parameter_sempred(_localctx as ParameterContext, predIndex);

		case 161:
			return this.defaultArgumentClause_sempred(_localctx as DefaultArgumentClauseContext, predIndex);

		case 177:
			return this.rawValueAssignment_sempred(_localctx as RawValueAssignmentContext, predIndex);

		case 201:
			return this.initializerHead_sempred(_localctx as InitializerHeadContext, predIndex);

		case 234:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);
		}
		return true;
	}
	private prefixOperator_sempred(_localctx: PrefixOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return isPreOp(this._input);
		}
		return true;
	}
	private postfixOperator_sempred(_localctx: PostfixOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return isPostOp(this._input);
		}
		return true;
	}
	private binaryOperator_sempred(_localctx: BinaryOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return isBinOp(this._input);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return isPostOp(this._input);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return isPostOp(this._input);

		case 7:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private functionTypeArgumentClause_sempred(_localctx: FunctionTypeArgumentClauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return testLN(this._input, 1, ["..."]);
		}
		return true;
	}
	private protocolCompositionType_sempred(_localctx: ProtocolCompositionTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return isBinOp(this._input);
		}
		return true;
	}
	private inOutExpression_sempred(_localctx: InOutExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return isPreOp(this._input);
		}
		return true;
	}
	private tryOperator_sempred(_localctx: TryOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return isPostOp(this._input);
		}
		return true;
	}
	private assignmentOperator_sempred(_localctx: AssignmentOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return isBinOp(this._input);
		}
		return true;
	}
	private conditionalOperator_sempred(_localctx: ConditionalOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return testLN(this._input, -1, WS, true) && testLN(this._input, 1, WS, true);
		}
		return true;
	}
	private typeCastingOperator_sempred(_localctx: TypeCastingOperatorContext, predIndex: number): boolean {
		switch (predIndex) {
		case 14:
			return isPostOp(this._input);
		}
		return true;
	}
	private closureParameter_sempred(_localctx: ClosureParameterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return testLN(this._input, 1, ["..."]);
		}
		return true;
	}
	private keyPathPostfix_sempred(_localctx: KeyPathPostfixContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return isPostOp(this._input);
		}
		return true;
	}
	private postfixExpression_sempred(_localctx: PostfixExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 8);

		case 18:
			return this.precpred(this._ctx, 7);

		case 19:
			return !isStatementStarting(this._input);

		case 20:
			return this.precpred(this._ctx, 6);

		case 21:
			return this.precpred(this._ctx, 5);

		case 22:
			return this.precpred(this._ctx, 4);

		case 23:
			return this.precpred(this._ctx, 3);

		case 24:
			return !isStatementStarting(this._input);

		case 25:
			return this.precpred(this._ctx, 2);

		case 26:
			return !testLN(this._input, -1, OP_LWS, true, true);

		case 27:
			return this.precpred(this._ctx, 1);

		case 28:
			return !testLN(this._input, -1, OP_LWS, true, true);
		}
		return true;
	}
	private statement_sempred(_localctx: StatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return isStatementStarting(this._input);
		}
		return true;
	}
	private compilationCondition_sempred(_localctx: CompilationConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return isPreOp(this._input);

		case 31:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private initializer_sempred(_localctx: InitializerContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return isBinOp(this._input);
		}
		return true;
	}
	private typealiasAssignment_sempred(_localctx: TypealiasAssignmentContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return isBinOp(this._input);
		}
		return true;
	}
	private parameter_sempred(_localctx: ParameterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return testLN(this._input, 1, ["..."]);
		}
		return true;
	}
	private defaultArgumentClause_sempred(_localctx: DefaultArgumentClauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return isBinOp(this._input);
		}
		return true;
	}
	private rawValueAssignment_sempred(_localctx: RawValueAssignmentContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return isBinOp(this._input);
		}
		return true;
	}
	private initializerHead_sempred(_localctx: InitializerHeadContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return isPostOp(this._input);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return isPostOp(this._input);

		case 39:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x8F\u0931\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A"+
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F"+
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4"+
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9"+
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE"+
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3"+
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8"+
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD"+
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2"+
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7"+
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC"+
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1"+
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6"+
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB"+
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0"+
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5"+
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA"+
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF"+
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4"+
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x04\xF7\t\xF7\x04\xF8\t\xF8\x04\xF9\t\xF9"+
		"\x04\xFA\t\xFA\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04"+
		"\x05\x04\u01FC\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u0201\n\x04\x07\x04"+
		"\u0203\n\x04\f\x04\x0E\x04\u0206\v\x04\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x05\x05\u020C\n\x05\x03\x06\x03\x06\x05\x06\u0210\n\x06\x03\x07\x03\x07"+
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03"+
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F"+
		"\u0231\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0235\n\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x05\x0F\u0243\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u024E\n\x0F\f\x0F\x0E\x0F\u0251\v\x0F\x03"+
		"\x10\x03\x10\x05\x10\u0255\n\x10\x03\x10\x05\x10\u0258\n\x10\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x05\x11\u025E\n\x11\x03\x11\x03\x11\x05\x11\u0262"+
		"\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x06\x13\u026A\n"+
		"\x13\r\x13\x0E\x13\u026B\x05\x13\u026E\n\x13\x03\x13\x03\x13\x03\x14\x03"+
		"\x14\x03\x14\x03\x14\x05\x14\u0276\n\x14\x03\x15\x03\x15\x05\x15\u027A"+
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0280\n\x16\x05\x16\u0282"+
		"\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\u0289\n\x17\f\x17"+
		"\x0E\x17\u028C\v\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0291\n\x18\x03\x18"+
		"\x05\x18\u0294\n\x18\x03\x18\x05\x18\u0297\n\x18\x03\x18\x03\x18\x03\x19"+
		"\x03\x19\x05\x19\u029D\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u02A3"+
		"\n\x1A\r\x1A\x0E\x1A\u02A4\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u02AB"+
		"\n\x1B\f\x1B\x0E\x1B\u02AE\v\x1B\x03\x1C\x05\x1C\u02B1\n\x1C\x03\x1C\x03"+
		"\x1C\x07\x1C\u02B5\n\x1C\f\x1C\x0E\x1C\u02B8\v\x1C\x03\x1D\x03\x1D\x03"+
		"\x1D\x07\x1D\u02BD\n\x1D\f\x1D\x0E\x1D\u02C0\v\x1D\x03\x1E\x03\x1E\x05"+
		"\x1E\u02C4\n\x1E\x03\x1E\x05\x1E\u02C7\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03"+
		"\x1F\x03 \x03 \x03 \x05 \u02D0\n \x03!\x03!\x03!\x03!\x03!\x05!\u02D7"+
		"\n!\x03!\x05!\u02DA\n!\x03!\x03!\x03!\x05!\u02DF\n!\x03\"\x03\"\x03\""+
		"\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x05$\u02ED\n$\x05$\u02EF"+
		"\n$\x03$\x03$\x03%\x03%\x05%\u02F5\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x05%\u0302\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03"+
		"&\x03&\x05&\u030C\n&\x03\'\x03\'\x03\'\x03\'\x07\'\u0312\n\'\f\'\x0E\'"+
		"\u0315\v\'\x03\'\x05\'\u0318\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03("+
		"\x03(\x03(\x03(\x03(\x07(\u0325\n(\f(\x0E(\u0328\v(\x03(\x05(\u032B\n"+
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0339"+
		"\n)\x03*\x03*\x03*\x03*\x05*\u033F\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03"+
		",\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x05.\u0352\n.\x03"+
		"/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x031\x031\x031\x031\x032\x03"+
		"2\x052\u0363\n2\x032\x052\u0366\n2\x032\x032\x033\x053\u036B\n3\x033\x03"+
		"3\x053\u036F\n3\x033\x053\u0372\n3\x033\x053\u0375\n3\x033\x033\x034\x03"+
		"4\x054\u037B\n4\x034\x034\x054\u037F\n4\x035\x035\x035\x075\u0384\n5\f"+
		"5\x0E5\u0387\v5\x036\x036\x036\x036\x056\u038D\n6\x056\u038F\n6\x037\x05"+
		"7\u0392\n7\x037\x037\x038\x038\x038\x038\x078\u039A\n8\f8\x0E8\u039D\v"+
		"8\x038\x038\x039\x059\u03A2\n9\x039\x039\x03:\x03:\x03:\x03:\x03:\x05"+
		":\u03AB\n:\x05:\u03AD\n:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03="+
		"\x03=\x03=\x06=\u03BA\n=\r=\x0E=\u03BB\x05=\u03BE\n=\x03=\x03=\x03>\x03"+
		">\x05>\u03C4\n>\x03>\x05>\u03C7\n>\x03>\x03>\x03?\x03?\x03@\x03@\x05@"+
		"\u03CF\n@\x03@\x03@\x03@\x03@\x06@\u03D5\n@\r@\x0E@\u03D6\x03A\x03A\x07"+
		"A\u03DB\nA\fA\x0EA\u03DE\vA\x03A\x06A\u03E1\nA\rA\x0EA\u03E2\x05A\u03E5"+
		"\nA\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03ED\nB\x03C\x03C\x03C\x03C\x03"+
		"C\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x05E\u0402\nE\x03E\x05E\u0405\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E"+
		"\x05E\u040E\nE\x03E\x03E\x03E\x03E\x03E\x05E\u0415\nE\x03E\x03E\x03E\x03"+
		"E\x05E\u041B\nE\x05E\u041D\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E"+
		"\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x07E\u042E\nE\fE\x0EE\u0431\vE\x03"+
		"F\x03F\x05F\u0435\nF\x03F\x03F\x03G\x03G\x03G\x07G\u043C\nG\fG\x0EG\u043F"+
		"\vG\x03H\x03H\x05H\u0443\nH\x03H\x05H\u0446\nH\x03H\x03H\x05H\u044A\n"+
		"H\x03I\x03I\x03J\x06J\u044F\nJ\rJ\x0EJ\u0450\x03K\x03K\x05K\u0455\nK\x03"+
		"K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0462\nL\x03"+
		"L\x05L\u0465\nL\x03L\x05L\u0468\nL\x03M\x06M\u046B\nM\rM\x0EM\u046C\x03"+
		"N\x03N\x03N\x05N\u0472\nN\x03O\x03O\x05O\u0476\nO\x03O\x03O\x03O\x03O"+
		"\x05O\u047C\nO\x03O\x03O\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x07Q\u0487"+
		"\nQ\fQ\x0EQ\u048A\vQ\x03R\x03R\x03R\x03R\x05R\u0490\nR\x03S\x03S\x03S"+
		"\x03S\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x05"+
		"V\u04A2\nV\x03W\x03W\x03W\x03W\x05W\u04A8\nW\x03X\x03X\x03X\x05X\u04AD"+
		"\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x07Z\u04B8\nZ\fZ\x0E"+
		"Z\u04BB\vZ\x03Z\x03Z\x03[\x03[\x05[\u04C1\n[\x03[\x03[\x03\\\x03\\\x03"+
		"\\\x03\\\x03]\x03]\x05]\u04CB\n]\x03]\x03]\x05]\u04CF\n]\x03^\x03^\x03"+
		"^\x03_\x03_\x03_\x03`\x03`\x03`\x03`\x03`\x05`\u04DC\n`\x03a\x03a\x03"+
		"a\x03b\x03b\x03c\x03c\x03c\x03c\x03c\x05c\u04E8\nc\x03d\x03d\x05d\u04EC"+
		"\nd\x03e\x03e\x05e\u04F0\ne\x03f\x03f\x03g\x03g\x05g\u04F6\ng\x03h\x03"+
		"h\x03h\x03i\x03i\x03i\x03j\x03j\x03j\x07j\u0501\nj\fj\x0Ej\u0504\vj\x03"+
		"k\x03k\x05k\u0508\nk\x03k\x05k\u050B\nk\x03k\x03k\x03l\x03l\x05l\u0511"+
		"\nl\x03m\x03m\x07m\u0515\nm\fm\x0Em\u0518\vm\x03m\x05m\u051B\nm\x03m\x03"+
		"m\x03n\x03n\x03n\x05n\u0522\nn\x03o\x03o\x03o\x05o\u0527\no\x03p\x03p"+
		"\x05p\u052B\np\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q"+
		"\x05q\u0538\nq\x03q\x03q\x03q\x03q\x07q\u053E\nq\fq\x0Eq\u0541\vq\x03"+
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05"+
		"r\u0551\nr\x03s\x03s\x03t\x03t\x03u\x03u\x03u\x07u\u055A\nu\fu\x0Eu\u055D"+
		"\vu\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u0569\nv\x03"+
		"v\x03v\x03w\x03w\x03x\x03x\x03y\x03y\x03y\x03y\x03y\x07y\u0576\ny\fy\x0E"+
		"y\u0579\vy\x03y\x03y\x03z\x03z\x03z\x03z\x05z\u0581\nz\x03{\x03{\x03|"+
		"\x03|\x03|\x03|\x03|\x05|\u058A\n|\x05|\u058C\n|\x03}\x03}\x03}\x03}\x03"+
		"}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x03}\x05}\u059D\n}\x03"+
		"~\x05~\u05A0\n~\x03\x7F\x03\x7F\x05\x7F\u05A4\n\x7F\x03\x7F\x03\x7F\x03"+
		"\x80\x05\x80\u05A9\n\x80\x03\x80\x03\x80\x05\x80\u05AD\n\x80\x03\x80\x03"+
		"\x80\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x07\x82\u05B6\n\x82\f\x82"+
		"\x0E\x82\u05B9\v\x82\x03\x83\x03\x83\x05\x83\u05BD\n\x83\x03\x84\x05\x84"+
		"\u05C0\n\x84\x03\x84\x05\x84\u05C3\n\x84\x03\x84\x03\x84\x03\x84\x03\x85"+
		"\x03\x85\x03\x85\x07\x85\u05CB\n\x85\f\x85\x0E\x85\u05CE\v\x85\x03\x86"+
		"\x03\x86\x05\x86\u05D2\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x88\x03"+
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05"+
		"\x88\u05E2\n\x88\x03\x88\x05\x88\u05E5\n\x88\x05\x88\u05E7\n\x88\x05\x88"+
		"\u05E9\n\x88\x03\x89\x05\x89\u05EC\n\x89\x03\x89\x05\x89\u05EF\n\x89\x03"+
		"\x89\x03\x89\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u05F9"+
		"\n\x8B\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u05FE\n\x8B\x03\x8B\x03\x8B\x05"+
		"\x8B\u0602\n\x8B\x03\x8C\x05\x8C\u0605\n\x8C\x03\x8C\x05\x8C\u0608\n\x8C"+
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8D\x05\x8D\u060E\n\x8D\x03\x8D\x05\x8D\u0611"+
		"\n\x8D\x03\x8D\x03\x8D\x05\x8D\u0615\n\x8D\x03\x8D\x03\x8D\x03\x8E\x03"+
		"\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x05\x8F\u0620\n\x8F\x03\x8F"+
		"\x03\x8F\x03\x8F\x05\x8F\u0625\n\x8F\x03\x8F\x03\x8F\x03\x90\x05\x90\u062A"+
		"\n\x90\x03\x90\x05\x90\u062D\n\x90\x03\x90\x03\x90\x03\x91\x05\x91\u0632"+
		"\n\x91\x03\x91\x05\x91\u0635\n\x91\x03\x91\x03\x91\x03\x92\x03\x92\x03"+
		"\x92\x05\x92\u063C\n\x92\x03\x92\x03\x92\x03\x92\x05\x92\u0641\n\x92\x03"+
		"\x92\x03\x92\x03\x93\x05\x93\u0646\n\x93\x03\x93\x03\x93\x05\x93\u064A"+
		"\n\x93\x03\x93\x03\x93\x03\x94\x05\x94\u064F\n\x94\x03\x94\x03\x94\x05"+
		"\x94\u0653\n\x94\x03\x94\x03\x94\x03\x95\x05\x95\u0658\n\x95\x03\x95\x05"+
		"\x95\u065B\n\x95\x03\x95\x03\x95\x03\x95\x05\x95\u0660\n\x95\x03\x95\x03"+
		"\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x98\x03\x98\x03"+
		"\x98\x05\x98\u066D\n\x98\x03\x98\x03\x98\x05\x98\u0671\n\x98\x03\x98\x05"+
		"\x98\u0674\n\x98\x03\x99\x05\x99\u0677\n\x99\x03\x99\x05\x99\u067A\n\x99"+
		"\x03\x99\x03\x99\x03\x9A\x03\x9A\x05\x9A\u0680\n\x9A\x03\x9B\x03\x9B\x05"+
		"\x9B\u0684\n\x9B\x03\x9B\x05\x9B\u0687\n\x9B\x03\x9C\x03\x9C\x05\x9C\u068B"+
		"\n\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x05\x9E\u0693\n"+
		"\x9E\x03\x9E\x03\x9E\x03\x9F\x03\x9F\x03\x9F\x07\x9F\u069A\n\x9F\f\x9F"+
		"\x0E\x9F\u069D\v\x9F\x03\xA0\x05\xA0\u06A0\n\xA0\x03\xA0\x03\xA0\x03\xA0"+
		"\x03\xA0\x03\xA0\x05\xA0\u06A7\n\xA0\x03\xA1\x03\xA1\x05\xA1\u06AB\n\xA1"+
		"\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA3\x03\xA4\x05\xA4\u06B4"+
		"\n\xA4\x03\xA4\x05\xA4\u06B7\n\xA4\x03\xA4\x03\xA4\x05\xA4\u06BB\n\xA4"+
		"\x03\xA5\x05\xA5\u06BE\n\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u06C3\n\xA5"+
		"\x03\xA5\x05\xA5\u06C6\n\xA5\x03\xA5\x05\xA5\u06C9\n\xA5\x03\xA5\x03\xA5"+
		"\x05\xA5\u06CD\n\xA5\x03\xA5\x03\xA5\x03\xA6\x06\xA6\u06D2\n\xA6\r\xA6"+
		"\x0E\xA6\u06D3\x03\xA7\x03\xA7\x03\xA7\x05\xA7\u06D9\n\xA7\x03\xA8\x05"+
		"\xA8\u06DC\n\xA8\x03\xA8\x05\xA8\u06DF\n\xA8\x03\xA8\x03\xA8\x03\xA8\x03"+
		"\xA9\x03\xA9\x03\xA9\x07\xA9\u06E7\n\xA9\f\xA9\x0E\xA9\u06EA\v\xA9\x03"+
		"\xAA\x03\xAA\x05\xAA\u06EE\n\xAA\x03\xAB\x03\xAB\x03\xAC\x03\xAC\x03\xAD"+
		"\x03\xAD\x03\xAD\x05\xAD\u06F7\n\xAD\x03\xAD\x03\xAD\x05\xAD\u06FB\n\xAD"+
		"\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x06\xAE\u0702\n\xAE\r\xAE\x0E"+
		"\xAE\u0703\x03\xAF\x03\xAF\x03\xAF\x05\xAF\u0709\n\xAF\x03\xB0\x05\xB0"+
		"\u070C\n\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x07\xB1\u0714"+
		"\n\xB1\f\xB1\x0E\xB1\u0717\v\xB1\x03\xB2\x03\xB2\x05\xB2\u071B\n\xB2\x03"+
		"\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u0724\n\xB4"+
		"\x03\xB5\x05\xB5\u0727\n\xB5\x03\xB5\x05\xB5\u072A\n\xB5\x03\xB5\x03\xB5"+
		"\x03\xB5\x05\xB5\u072F\n\xB5\x03\xB5\x05\xB5\u0732\n\xB5\x03\xB5\x05\xB5"+
		"\u0735\n\xB5\x03\xB5\x03\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x05\xB7\u073D"+
		"\n\xB7\x03\xB7\x03\xB7\x03\xB8\x06\xB8\u0742\n\xB8\r\xB8\x0E\xB8\u0743"+
		"\x03\xB9\x03\xB9\x05\xB9\u0748\n\xB9\x03\xBA\x05\xBA\u074B\n\xBA\x03\xBA"+
		"\x05\xBA\u074E\n\xBA\x03\xBA\x05\xBA\u0751\n\xBA\x03\xBA\x03\xBA\x05\xBA"+
		"\u0755\n\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u075A\n\xBA\x03\xBA\x05\xBA"+
		"\u075D\n\xBA\x03\xBA\x05\xBA\u0760\n\xBA\x03\xBA\x03\xBA\x03\xBB\x03\xBB"+
		"\x03\xBC\x03\xBC\x05\xBC\u0768\n\xBC\x03\xBC\x03\xBC\x03\xBD\x06\xBD\u076D"+
		"\n\xBD\r\xBD\x0E\xBD\u076E\x03\xBE\x03\xBE\x05\xBE\u0773\n\xBE\x03\xBF"+
		"\x05\xBF\u0776\n\xBF\x03\xBF\x05\xBF\u0779\n\xBF\x03\xBF\x03\xBF\x03\xBF"+
		"\x05\xBF\u077E\n\xBF\x03\xBF\x05\xBF\u0781\n\xBF\x03\xBF\x03\xBF\x03\xC0"+
		"\x03\xC0\x03\xC1\x03\xC1\x05\xC1\u0789\n\xC1\x03\xC1\x03\xC1\x03\xC2\x06"+
		"\xC2\u078E\n\xC2\r\xC2\x0E\xC2\u078F\x03\xC3\x03\xC3\x05\xC3\u0794\n\xC3"+
		"\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x05\xC4\u079C\n\xC4\x03"+
		"\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u07A6"+
		"\n\xC6\x03\xC6\x03\xC6\x05\xC6\u07AA\n\xC6\x03\xC7\x03\xC7\x05\xC7\u07AE"+
		"\n\xC7\x03\xC7\x03\xC7\x05\xC7\u07B2\n\xC7\x03\xC7\x05\xC7\u07B5\n\xC7"+
		"\x03\xC8\x03\xC8\x03\xC8\x05\xC8\u07BA\n\xC8\x03\xC8\x03\xC8\x03\xC9\x05"+
		"\xC9\u07BF\n\xC9\x03\xC9\x05\xC9\u07C2\n\xC9\x03\xC9\x03\xC9\x03\xC9\x05"+
		"\xC9\u07C7\n\xC9\x03\xC9\x05\xC9\u07CA\n\xC9\x03\xC9\x05\xC9\u07CD\n\xC9"+
		"\x03\xCA\x03\xCA\x05\xCA\u07D1\n\xCA\x03\xCA\x03\xCA\x05\xCA\u07D5\n\xCA"+
		"\x03\xCA\x05\xCA\u07D8\n\xCA\x03\xCA\x03\xCA\x03\xCB\x05\xCB\u07DD\n\xCB"+
		"\x03\xCB\x05\xCB\u07E0\n\xCB\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u07E5\n\xCB"+
		"\x03\xCC\x03\xCC\x03\xCD\x05\xCD\u07EA\n\xCD\x03\xCD\x03\xCD\x03\xCD\x03"+
		"\xCE\x05\xCE\u07F0\n\xCE\x03\xCE\x05\xCE\u07F3\n\xCE\x03\xCE\x03\xCE\x03"+
		"\xCE\x03\xCE\x05\xCE\u07F9\n\xCE\x03\xCE\x03\xCE\x03\xCF\x03\xCF\x05\xCF"+
		"\u07FF\n\xCF\x03\xCF\x03\xCF\x03\xD0\x06\xD0\u0804\n\xD0\r\xD0\x0E\xD0"+
		"\u0805\x03\xD1\x03\xD1\x05\xD1\u080A\n\xD1\x03\xD2\x03\xD2\x03\xD2\x05"+
		"\xD2\u080F\n\xD2\x03\xD2\x03\xD2\x05\xD2\u0813\n\xD2\x03\xD3\x05\xD3\u0816"+
		"\n\xD3\x03\xD3\x05\xD3\u0819\n\xD3\x03\xD3\x03\xD3\x05\xD3\u081D\n\xD3"+
		"\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x05\xD4\u0823\n\xD4\x03\xD4\x03\xD4\x03"+
		"\xD5\x03\xD5\x03\xD5\x05\xD5\u082A\n\xD5\x03\xD6\x03\xD6\x03\xD6\x03\xD6"+
		"\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8"+
		"\u0838\n\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05"+
		"\xDA\u0841\n\xDA\x03\xDA\x03\xDA\x03\xDB\x06\xDB\u0846\n\xDB\r\xDB\x0E"+
		"\xDB\u0847\x03\xDC\x03\xDC\x03\xDC\x05\xDC\u084D\n\xDC\x03\xDD\x03\xDD"+
		"\x03\xDD\x03\xDD\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xDF"+
		"\x03\xDF\x03\xE0\x03\xE0\x03\xE0\x07\xE0\u085E\n\xE0\f\xE0\x0E\xE0\u0861"+
		"\v\xE0\x03\xE1\x03\xE1\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2"+
		"\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x03\xE2"+
		"\x05\xE2\u0874\n\xE2\x03\xE3\x06\xE3\u0877\n\xE3\r\xE3\x0E\xE3\u0878\x03"+
		"\xE4\x03\xE4\x03\xE4\x03\xE4\x05\xE4\u087F\n\xE4\x03\xE5\x03\xE5\x03\xE6"+
		"\x03\xE6\x03\xE6\x05\xE6\u0886\n\xE6\x03\xE7\x03\xE7\x03\xE8\x03\xE8\x05"+
		"\xE8\u088C\n\xE8\x03\xE8\x03\xE8\x03\xE9\x06\xE9\u0891\n\xE9\r\xE9\x0E"+
		"\xE9\u0892\x03\xEA\x06\xEA\u0896\n\xEA\r\xEA\x0E\xEA\u0897\x03\xEB\x03"+
		"\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03"+
		"\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03"+
		"\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x05\xEB\u08B5"+
		"\n\xEB\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u08BA\n\xEC\x03\xEC\x03\xEC\x05"+
		"\xEC\u08BE\n\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u08C4\n\xEC\x03"+
		"\xEC\x05\xEC\u08C7\n\xEC\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u08CC\n\xEC\x03"+
		"\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u08D5\n\xEC"+
		"\x03\xEC\x03\xEC\x03\xEC\x07\xEC\u08DA\n\xEC\f\xEC\x0E\xEC\u08DD\v\xEC"+
		"\x03\xED\x03\xED\x05\xED\u08E1\n\xED\x03\xED\x03\xED\x03\xEE\x03\xEE\x03"+
		"\xEE\x07\xEE\u08E8\n\xEE\f\xEE\x0E\xEE\u08EB\v\xEE\x03\xEF\x03\xEF\x05"+
		"\xEF\u08EF\n\xEF\x03\xEF\x05\xEF\u08F2\n\xEF\x03\xEF\x03\xEF\x03\xF0\x03"+
		"\xF0\x03\xF0\x03\xF0\x03\xF1\x03\xF1\x03\xF1\x07\xF1\u08FD\n\xF1\f\xF1"+
		"\x0E\xF1\u0900\v\xF1\x03\xF2\x03\xF2\x03\xF2\x03\xF2\x05\xF2\u0906\n\xF2"+
		"\x05\xF2\u0908\n\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF4\x03\xF4\x03\xF4\x07"+
		"\xF4\u0910\n\xF4\f\xF4\x0E\xF4\u0913\v\xF4\x03\xF5\x03\xF5\x05\xF5\u0917"+
		"\n\xF5\x03";
	private static readonly _serializedATNSegment1: string =
		"\xF6\x03\xF6\x03\xF6\x03\xF6\x05\xF6\u091D\n\xF6\x03\xF7\x03\xF7\x03\xF7"+
		"\x03\xF7\x03\xF8\x03\xF8\x03\xF8\x03\xF8\x03\xF9\x03\xF9\x03\xF9\x07\xF9"+
		"\u092A\n\xF9\f\xF9\x0E\xF9\u092D\v\xF9\x03\xFA\x03\xFA\x03\xFA\x02\x02"+
		"\x06\x1C\x88\xE0\u01D6\xFB\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E"+
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 "+
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02"+
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02"+
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02"+
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02"+
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02"+
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02"+
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02"+
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02"+
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02"+
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02"+
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02"+
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02"+
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02"+
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02"+
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02"+
		"\u013E\x02\u0140\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02"+
		"\u014C\x02\u014E\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02"+
		"\u015A\x02\u015C\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02"+
		"\u0168\x02\u016A\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02"+
		"\u0176\x02\u0178\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02"+
		"\u0184\x02\u0186\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02"+
		"\u0192\x02\u0194\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02"+
		"\u01A0\x02\u01A2\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02"+
		"\u01AE\x02\u01B0\x02\u01B2\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02"+
		"\u01BC\x02\u01BE\x02\u01C0\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02"+
		"\u01CA\x02\u01CC\x02\u01CE\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02"+
		"\u01D8\x02\u01DA\x02\u01DC\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02"+
		"\u01E6\x02\u01E8\x02\u01EA\x02\u01EC\x02\u01EE\x02\u01F0\x02\u01F2\x02"+
		"\x02\x10\x04\x02Ib\x84\x86\x04\x02..77\x03\x02\x87\x8B\x03\x02\x8D\x8E"+
		"\b\x02cchippuuw\x7F\x8F\x8F\x04\x021166\x04\x02[[__\x04\x02iipp\x04\x02"+
		"AADD\x04\x02\x0E\x0E\x19\x19\t\x02\x04\x04\x06\x06\t\t\x0E\x0E\x13\x13"+
		"\x16\x16\x18\x19\x05\x02RRTT]]\x07\x02\b\b\r\r\x0F\x0F\x12\x12\x14\x14"+
		"\x04\x02SSUU\u09CF\x02\u01F4\x03\x02\x02\x02\x04\u01F7\x03\x02\x02\x02"+
		"\x06\u01FB\x03\x02\x02\x02\b\u020B\x03\x02\x02\x02\n\u020F\x03\x02\x02"+
		"\x02\f\u0211\x03\x02\x02\x02\x0E\u0213\x03\x02\x02\x02\x10\u0215\x03\x02"+
		"\x02\x02\x12\u0217\x03\x02\x02\x02\x14\u0219\x03\x02\x02\x02\x16\u021B"+
		"\x03\x02\x02\x02\x18\u021E\x03\x02\x02\x02\x1A\u0221\x03\x02\x02\x02\x1C"+
		"\u0242\x03\x02\x02\x02\x1E\u0252\x03\x02\x02\x02 \u025B\x03\x02\x02\x02"+
		"\"\u0263\x03\x02\x02\x02$\u0265\x03\x02\x02\x02&\u0275\x03\x02\x02\x02"+
		"(\u0279\x03\x02\x02\x02*\u027B\x03\x02\x02\x02,\u0285\x03\x02\x02\x02"+
		".\u0290\x03\x02\x02\x020\u029A\x03\x02\x02\x022\u029E\x03\x02\x02\x02"+
		"4\u02A6\x03\x02\x02\x026\u02B0\x03\x02\x02\x028\u02B9\x03\x02\x02\x02"+
		":\u02C6\x03\x02\x02\x02<\u02C8\x03\x02\x02\x02>\u02CC\x03\x02\x02\x02"+
		"@\u02DE\x03\x02\x02\x02B\u02E0\x03\x02\x02\x02D\u02E3\x03\x02\x02\x02"+
		"F\u02EE\x03\x02\x02\x02H\u0301\x03\x02\x02\x02J\u030B\x03\x02\x02\x02"+
		"L\u030D\x03\x02\x02\x02N\u031B\x03\x02\x02\x02P\u0338\x03\x02\x02\x02"+
		"R\u033E\x03\x02\x02\x02T\u0340\x03\x02\x02\x02V\u0344\x03\x02\x02\x02"+
		"X\u0349\x03\x02\x02\x02Z\u0351\x03\x02\x02\x02\\\u0353\x03\x02\x02\x02"+
		"^\u0357\x03\x02\x02\x02`\u035C\x03\x02\x02\x02b\u0360\x03\x02\x02\x02"+
		"d\u0374\x03\x02\x02\x02f\u037E\x03\x02\x02\x02h\u0380\x03\x02\x02\x02"+
		"j\u0388\x03\x02\x02\x02l\u0391\x03\x02\x02\x02n\u0395\x03\x02\x02\x02"+
		"p\u03A1\x03\x02\x02\x02r\u03AC\x03\x02\x02\x02t\u03AE\x03\x02\x02\x02"+
		"v\u03B1\x03\x02\x02\x02x\u03B5\x03\x02\x02\x02z\u03C6\x03\x02\x02\x02"+
		"|\u03CA\x03\x02\x02\x02~\u03CC\x03\x02\x02\x02\x80\u03E4\x03\x02\x02\x02"+
		"\x82\u03EC\x03\x02\x02\x02\x84\u03EE\x03\x02\x02\x02\x86\u03F3\x03\x02"+
		"\x02\x02\x88\u03F8\x03\x02\x02\x02\x8A\u0432\x03\x02\x02\x02\x8C\u0438"+
		"\x03\x02\x02\x02\x8E\u0445\x03\x02\x02\x02\x90\u044B\x03\x02\x02\x02\x92"+
		"\u044E\x03\x02\x02\x02\x94\u0454\x03\x02\x02\x02\x96\u0467\x03\x02\x02"+
		"\x02\x98\u046A\x03\x02\x02\x02\x9A\u0471\x03\x02\x02\x02\x9C\u0473\x03"+
		"\x02\x02\x02\x9E\u047F\x03\x02\x02\x02\xA0\u0483\x03\x02\x02\x02\xA2\u048F"+
		"\x03\x02\x02\x02\xA4\u0491\x03\x02\x02\x02\xA6\u0495\x03\x02\x02\x02\xA8"+
		"\u0499\x03\x02\x02\x02\xAA\u04A1\x03\x02\x02\x02\xAC\u04A3\x03\x02\x02"+
		"\x02\xAE\u04A9\x03\x02\x02\x02\xB0\u04AE\x03\x02\x02\x02\xB2\u04B3\x03"+
		"\x02\x02\x02\xB4\u04C0\x03\x02\x02\x02\xB6\u04C4\x03\x02\x02\x02\xB8\u04C8"+
		"\x03\x02\x02\x02\xBA\u04D0\x03\x02\x02\x02\xBC\u04D3\x03\x02\x02\x02\xBE"+
		"\u04D6\x03\x02\x02\x02\xC0\u04DD\x03\x02\x02\x02\xC2\u04E0\x03\x02\x02"+
		"\x02\xC4\u04E7\x03\x02\x02\x02\xC6\u04E9\x03\x02\x02\x02\xC8\u04ED\x03"+
		"\x02\x02\x02\xCA\u04F1\x03\x02\x02\x02\xCC\u04F3\x03\x02\x02\x02\xCE\u04F7"+
		"\x03\x02\x02\x02\xD0\u04FA\x03\x02\x02\x02\xD2\u04FD\x03\x02\x02\x02\xD4"+
		"\u0505\x03\x02\x02\x02\xD6\u0510\x03\x02\x02\x02\xD8\u0512\x03\x02\x02"+
		"\x02\xDA\u051E\x03\x02\x02\x02\xDC\u0523\x03\x02\x02\x02\xDE\u0528\x03"+
		"\x02\x02\x02\xE0\u0537\x03\x02\x02\x02\xE2\u0542\x03\x02\x02\x02\xE4\u0552"+
		"\x03\x02\x02\x02\xE6\u0554\x03\x02\x02\x02\xE8\u0556\x03\x02\x02\x02\xEA"+
		"\u055E\x03\x02\x02\x02\xEC\u056C\x03\x02\x02\x02\xEE\u056E\x03\x02\x02"+
		"\x02\xF0\u0570\x03\x02\x02\x02\xF2\u0580\x03\x02\x02\x02\xF4\u0582\x03"+
		"\x02\x02\x02\xF6\u0584\x03\x02\x02\x02\xF8\u059C\x03\x02\x02\x02\xFA\u059F"+
		"\x03\x02\x02\x02\xFC\u05A1\x03\x02\x02\x02\xFE\u05A8\x03\x02\x02\x02\u0100"+
		"\u05B0\x03\x02\x02\x02\u0102\u05B2\x03\x02\x02\x02\u0104\u05BC\x03\x02"+
		"\x02\x02\u0106\u05BF\x03\x02\x02\x02\u0108\u05C7\x03\x02\x02\x02\u010A"+
		"\u05CF\x03\x02\x02\x02\u010C\u05D3\x03\x02\x02\x02\u010E\u05D7\x03\x02"+
		"\x02\x02\u0110\u05EB\x03\x02\x02\x02\u0112\u05F2\x03\x02\x02\x02\u0114"+
		"\u0601\x03\x02\x02\x02\u0116\u0604\x03\x02\x02\x02\u0118\u060D\x03\x02"+
		"\x02\x02\u011A\u0618\x03\x02\x02\x02\u011C\u061C\x03\x02\x02\x02\u011E"+
		"\u0629\x03\x02\x02\x02\u0120\u0631\x03\x02\x02\x02\u0122\u0638\x03\x02"+
		"\x02\x02\u0124\u0645\x03\x02\x02\x02\u0126\u064E\x03\x02\x02\x02\u0128"+
		"\u0657\x03\x02\x02\x02\u012A\u0663\x03\x02\x02\x02\u012C\u0665\x03\x02"+
		"\x02\x02\u012E\u0669\x03\x02\x02\x02\u0130\u0676\x03\x02\x02\x02\u0132"+
		"\u067F\x03\x02\x02\x02\u0134\u0681\x03\x02\x02\x02\u0136\u0688\x03\x02"+
		"\x02\x02\u0138\u068E\x03\x02\x02\x02\u013A\u0690\x03\x02\x02\x02\u013C"+
		"\u0696\x03\x02\x02\x02\u013E\u069F\x03\x02\x02\x02\u0140\u06AA\x03\x02"+
		"\x02\x02\u0142\u06AC\x03\x02\x02\x02\u0144\u06AE\x03\x02\x02\x02\u0146"+
		"\u06B3\x03\x02\x02\x02\u0148\u06BD\x03\x02\x02\x02\u014A\u06D1\x03\x02"+
		"\x02\x02\u014C\u06D8\x03\x02\x02\x02\u014E\u06DB\x03\x02\x02\x02\u0150"+
		"\u06E3\x03\x02\x02\x02\u0152\u06EB\x03\x02\x02\x02\u0154\u06EF\x03\x02"+
		"\x02\x02\u0156\u06F1\x03\x02\x02\x02\u0158\u06F3\x03\x02\x02\x02\u015A"+
		"\u0701\x03\x02\x02\x02\u015C\u0708\x03\x02\x02\x02\u015E\u070B\x03\x02"+
		"\x02\x02\u0160\u0710\x03\x02\x02\x02\u0162\u0718\x03\x02\x02\x02\u0164"+
		"\u071C\x03\x02\x02\x02\u0166\u0723\x03\x02\x02\x02\u0168\u0726\x03\x02"+
		"\x02\x02\u016A\u0738\x03\x02\x02\x02\u016C\u073A\x03\x02\x02\x02\u016E"+
		"\u0741\x03\x02\x02\x02\u0170\u0747\x03\x02\x02\x02\u0172\u074A\x03\x02"+
		"\x02\x02\u0174\u0763\x03\x02\x02\x02\u0176\u0765\x03\x02\x02\x02\u0178"+
		"\u076C\x03\x02\x02\x02\u017A\u0772\x03\x02\x02\x02\u017C\u0775\x03\x02"+
		"\x02\x02\u017E\u0784\x03\x02\x02\x02\u0180\u0786\x03\x02\x02\x02\u0182"+
		"\u078D\x03\x02\x02\x02\u0184\u0793\x03\x02\x02\x02\u0186\u079B\x03\x02"+
		"\x02\x02\u0188\u079D\x03\x02\x02\x02\u018A\u07A2\x03\x02\x02\x02\u018C"+
		"\u07AB\x03\x02\x02\x02\u018E\u07B6\x03\x02\x02\x02\u0190\u07BE\x03\x02"+
		"\x02\x02\u0192\u07CE\x03\x02\x02\x02\u0194\u07DC\x03\x02\x02\x02\u0196"+
		"\u07E6\x03\x02\x02\x02\u0198\u07E9\x03\x02\x02\x02\u019A\u07EF\x03\x02"+
		"\x02\x02\u019C\u07FC\x03\x02\x02\x02\u019E\u0803\x03\x02\x02\x02\u01A0"+
		"\u0809\x03\x02\x02\x02\u01A2\u080B\x03\x02\x02\x02\u01A4\u0815\x03\x02"+
		"\x02\x02\u01A6\u0820\x03\x02\x02\x02\u01A8\u0829\x03\x02\x02\x02\u01AA"+
		"\u082B\x03\x02\x02\x02\u01AC\u082F\x03\x02\x02\x02\u01AE\u0833\x03\x02"+
		"\x02\x02\u01B0\u0839\x03\x02\x02\x02\u01B2\u083C\x03\x02\x02\x02\u01B4"+
		"\u0845\x03\x02\x02\x02\u01B6\u084C\x03\x02\x02\x02\u01B8\u084E\x03\x02"+
		"\x02\x02\u01BA\u0852\x03\x02\x02\x02\u01BC\u0856\x03\x02\x02\x02\u01BE"+
		"\u085A\x03\x02\x02\x02\u01C0\u0862\x03\x02\x02\x02\u01C2\u0873\x03\x02"+
		"\x02\x02\u01C4\u0876\x03\x02\x02\x02\u01C6\u087A\x03\x02\x02\x02\u01C8"+
		"\u0880\x03\x02\x02\x02\u01CA\u0882\x03\x02\x02\x02\u01CC\u0887\x03\x02"+
		"\x02\x02\u01CE\u0889\x03\x02\x02\x02\u01D0\u0890\x03\x02\x02\x02\u01D2"+
		"\u0895\x03\x02\x02\x02\u01D4\u08B4\x03\x02\x02\x02\u01D6\u08D4\x03\x02"+
		"\x02\x02\u01D8\u08DE\x03\x02\x02\x02\u01DA\u08E4\x03\x02\x02\x02\u01DC"+
		"\u08F1\x03\x02\x02\x02\u01DE\u08F5\x03\x02\x02\x02\u01E0\u08F9\x03\x02"+
		"\x02\x02\u01E2\u0901\x03\x02\x02\x02\u01E4\u0909\x03\x02\x02\x02\u01E6"+
		"\u090C\x03\x02\x02\x02\u01E8\u0916\x03\x02\x02\x02\u01EA\u0918\x03\x02"+
		"\x02\x02\u01EC\u091E\x03\x02\x02\x02\u01EE\u0922\x03\x02\x02\x02\u01F0"+
		"\u0926\x03\x02\x02\x02\u01F2\u092E\x03\x02\x02\x02\u01F4\u01F5\x05\x98"+
		"M\x02\u01F5\u01F6\x07\x02\x02\x03\u01F6\x03\x03\x02\x02\x02\u01F7\u01F8"+
		"\t\x02\x02\x02\u01F8\x05\x03\x02\x02\x02\u01F9\u01FC\x079\x02\x02\u01FA"+
		"\u01FC\x05\x04\x03\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02"+
		"\x02\x02\u01FC\u0204\x03\x02\x02\x02\u01FD\u0200\x07g\x02\x02\u01FE\u0201"+
		"\x079\x02\x02\u01FF\u0201\x05\x04\x03\x02\u0200\u01FE\x03\x02\x02\x02"+
		"\u0200\u01FF\x03\x02\x02\x02\u0201\u0203\x03\x02\x02\x02\u0202\u01FD\x03"+
		"\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204"+
		"\u0205\x03\x02\x02\x02\u0205\x07\x03\x02\x02\x02\u0206\u0204\x03\x02\x02"+
		"\x02\u0207\u020C\x05\n\x06\x02\u0208\u020C\x05\x12\n\x02\u0209\u020C\x05"+
		"\f\x07\x02\u020A\u020C\x05\x0E\b\x02\u020B\u0207\x03\x02\x02\x02\u020B"+
		"\u0208\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020A\x03\x02"+
		"\x02\x02\u020C\t\x03\x02\x02\x02\u020D\u0210\x05\x10\t\x02\u020E\u0210"+
		"\x07\x8C\x02\x02\u020F\u020D\x03\x02\x02\x02\u020F\u020E\x03\x02\x02\x02"+
		"\u0210\v\x03\x02\x02\x02\u0211\u0212\t\x03\x02\x02\u0212\r\x03\x02\x02"+
		"\x02\u0213\u0214\x070\x02\x02\u0214\x0F\x03\x02\x02\x02\u0215\u0216\t"+
		"\x04\x02\x02\u0216\x11\x03\x02\x02\x02\u0217\u0218\t\x05\x02\x02\u0218"+
		"\x13\x03\x02\x02\x02\u0219\u021A\t\x06\x02\x02\u021A\x15\x03\x02\x02\x02"+
		"\u021B\u021C\x06\f\x02\x02\u021C\u021D\x05\x14\v\x02\u021D\x17\x03\x02"+
		"\x02\x02\u021E\u021F\x06\r\x03\x02\u021F\u0220\x05\x14\v\x02\u0220\x19"+
		"\x03\x02\x02\x02\u0221\u0222\x06\x0E\x04\x02\u0222\u0223\x05\x14\v\x02"+
		"\u0223\x1B\x03\x02\x02\x02\u0224\u0225\b\x0F\x01\x02\u0225\u0226\x07l"+
		"\x02\x02\u0226\u0227\x05\x1C\x0F\x02\u0227\u0228\x07r\x02\x02\u0228\u0243"+
		"\x03\x02\x02\x02\u0229\u022A\x07l\x02\x02\u022A\u022B\x05\x1C\x0F\x02"+
		"\u022B\u022C\x07f\x02\x02\u022C\u022D\x05\x1C\x0F\x02\u022D\u022E\x07"+
		"r\x02\x02\u022E\u0243\x03\x02\x02\x02\u022F\u0231\x05\u01D0\xE9\x02\u0230"+
		"\u022F\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x03\x02"+
		"\x02\x02\u0232\u0234\x05*\x16\x02\u0233\u0235\t\x07\x02\x02\u0234\u0233"+
		"\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02"+
		"\u0236\u0237\x07d\x02\x02\u0237\u0238\x05\x1C\x0F\f\u0238\u0243\x03\x02"+
		"\x02\x02\u0239\u0243\x05 \x11\x02\u023A\u0243\x05$\x13\x02\u023B\u0243"+
		"\x052\x1A\x02\u023C\u0243\x07+\x02\x02\u023D\u0243\x073\x02\x02\u023E"+
		"\u023F\x07m\x02\x02\u023F\u0240\x05\x1C\x0F\x02\u0240\u0241\x07s\x02\x02"+
		"\u0241\u0243\x03\x02\x02\x02\u0242\u0224\x03\x02\x02\x02\u0242\u0229\x03"+
		"\x02\x02\x02\u0242\u0230\x03\x02\x02\x02\u0242\u0239\x03\x02\x02\x02\u0242"+
		"\u023A\x03\x02\x02\x02\u0242\u023B\x03\x02\x02\x02\u0242\u023C\x03\x02"+
		"\x02\x02\u0242\u023D\x03\x02\x02\x02\u0242\u023E\x03\x02\x02\x02\u0243"+
		"\u024F\x03\x02\x02\x02\u0244\u0245\f\t\x02\x02\u0245\u0246\x06\x0F\x06"+
		"\x02\u0246\u024E\x07p\x02\x02\u0247\u0248\f\b\x02\x02\u0248\u0249\x06"+
		"\x0F\b\x02\u0249\u024E\x07i\x02\x02\u024A\u024B\f\x06\x02\x02\u024B\u024C"+
		"\x07o\x02\x02\u024C\u024E\t\b\x02\x02\u024D\u0244\x03\x02\x02\x02\u024D"+
		"\u0247\x03\x02\x02\x02\u024D\u024A\x03\x02\x02\x02\u024E\u0251\x03\x02"+
		"\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250"+
		"\x1D\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0254\x07f\x02"+
		"\x02\u0253\u0255\x05\u01D0\xE9\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255"+
		"\x03\x02\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u0258\x07\f\x02\x02"+
		"\u0257\u0256\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03"+
		"\x02\x02\x02\u0259\u025A\x05\x1C\x0F\x02\u025A\x1F\x03\x02\x02\x02\u025B"+
		"\u025D\x05\"\x12\x02\u025C\u025E\x05\u01EE\xF8\x02\u025D\u025C\x03\x02"+
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F"+
		"\u0260\x07o\x02\x02\u0260\u0262\x05 \x11\x02\u0261\u025F\x03\x02\x02\x02"+
		"\u0261\u0262\x03\x02\x02\x02\u0262!\x03\x02\x02\x02\u0263\u0264\x05\x04"+
		"\x03\x02\u0264#\x03\x02\x02\x02\u0265\u026D\x07m\x02\x02\u0266\u0269\x05"+
		"&\x14\x02\u0267\u0268\x07g\x02\x02\u0268\u026A\x05&\x14\x02\u0269\u0267"+
		"\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02"+
		"\u026B\u026C\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u0266\x03"+
		"\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F"+
		"\u0270\x07s\x02\x02\u0270%\x03\x02\x02\x02\u0271\u0272\x05(\x15\x02\u0272"+
		"\u0273\x05\x1E\x10\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0276\x05\x1C"+
		"\x0F\x02\u0275\u0271\x03\x02\x02\x02\u0275\u0274\x03\x02\x02\x02\u0276"+
		"\'\x03\x02\x02\x02\u0277\u027A\x079\x02\x02\u0278\u027A\x05\x04\x03\x02"+
		"\u0279\u0277\x03\x02\x02\x02\u0279\u0278\x03\x02\x02\x02\u027A)\x03\x02"+
		"\x02\x02\u027B\u0281\x07m\x02\x02\u027C\u027F\x05,\x17\x02\u027D\u027E"+
		"\x06\x16\n\x02\u027E\u0280\x05\x14\v\x02\u027F\u027D\x03\x02\x02\x02\u027F"+
		"\u0280\x03\x02\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027C\x03\x02"+
		"\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283"+
		"\u0284\x07s\x02\x02\u0284+\x03\x02\x02\x02\u0285\u028A\x05.\x18\x02\u0286"+
		"\u0287\x07g\x02\x02\u0287\u0289\x05.\x18\x02\u0288\u0286\x03\x02\x02\x02"+
		"\u0289\u028C\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03"+
		"\x02\x02\x02\u028B-\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D"+
		"\u028E\x050\x19\x02\u028E\u028F\x07f\x02\x02\u028F\u0291\x03\x02\x02\x02"+
		"\u0290\u028D\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291\u0293\x03"+
		"\x02\x02\x02\u0292\u0294\x05\u01D0\xE9\x02\u0293\u0292\x03\x02\x02\x02"+
		"\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0297\x07"+
		"\f\x02\x02\u0296\u0295\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297"+
		"\u0298\x03\x02\x02\x02\u0298\u0299\x05\x1C\x0F\x02\u0299/\x03\x02\x02"+
		"\x02\u029A\u029C\x079\x02\x02\u029B\u029D\x05\x04\x03\x02\u029C\u029B"+
		"\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D1\x03\x02\x02\x02\u029E"+
		"\u02A2\x05 \x11\x02\u029F\u02A0\x06\x1A\v\x02\u02A0\u02A1\x07c\x02\x02"+
		"\u02A1\u02A3\x05 \x11\x02\u02A2\u029F\x03\x02\x02\x02\u02A3\u02A4\x03"+
		"\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5"+
		"3\x03\x02\x02\x02\u02A6\u02A7\x07f\x02\x02\u02A7\u02AC\x05 \x11\x02\u02A8"+
		"\u02A9\x07g\x02\x02\u02A9\u02AB\x05 \x11\x02\u02AA\u02A8\x03\x02\x02\x02"+
		"\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AD\x03"+
		"\x02\x02\x02\u02AD5\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02\u02AF"+
		"\u02B1\x05> \x02\u02B0\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02"+
		"\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B6\x05:\x1E\x02\u02B3\u02B5\x05"+
		"@!\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8\x03\x02\x02\x02\u02B6\u02B4"+
		"\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B77\x03\x02\x02\x02\u02B8"+
		"\u02B6\x03\x02\x02\x02\u02B9\u02BE\x056\x1C\x02\u02BA\u02BB\x07g\x02\x02"+
		"\u02BB\u02BD\x056\x1C\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD\u02C0\x03"+
		"\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF"+
		"9\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C1\u02C7\x05<\x1F\x02"+
		"\u02C2\u02C4\x05\x16\f\x02\u02C3\u02C2\x03\x02\x02\x02\u02C3\u02C4\x03"+
		"\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7\x05\x88E\x02\u02C6"+
		"\u02C1\x03\x02\x02\x02\u02C6\u02C3\x03\x02\x02\x02\u02C7;\x03\x02\x02"+
		"\x02\u02C8\u02C9\x06\x1F\f\x02\u02C9\u02CA\x07c\x02\x02\u02CA\u02CB\x05"+
		"\x04\x03\x02\u02CB=\x03\x02\x02\x02\u02CC\u02CF\x078\x02\x02\u02CD\u02CE"+
		"\x06 \r\x02\u02CE\u02D0\t\t\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF"+
		"\u02D0\x03\x02\x02\x02\u02D0?\x03\x02\x02\x02\u02D1\u02D2\x05\x1A\x0E"+
		"\x02\u02D2\u02D3\x05:\x1E\x02\u02D3\u02DF\x03\x02\x02\x02\u02D4\u02D7"+
		"\x05B\"\x02\u02D5\u02D7\x05D#\x02\u02D6\u02D4\x03\x02\x02\x02\u02D6\u02D5"+
		"\x03\x02\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02DA\x05> \x02\u02D9"+
		"\u02D8\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DB\x03\x02"+
		"\x02\x02\u02DB\u02DC\x05:\x1E\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DF"+
		"\x05F$\x02\u02DE\u02D1\x03\x02\x02\x02\u02DE\u02D6\x03\x02\x02\x02\u02DE"+
		"\u02DD\x03\x02\x02\x02\u02DFA\x03\x02\x02\x02\u02E0\u02E1\x06\"\x0E\x02"+
		"\u02E1\u02E2\x07h\x02\x02\u02E2C\x03\x02\x02\x02\u02E3\u02E4\x06#\x0F"+
		"\x02\u02E4\u02E5\x07p\x02\x02\u02E5\u02E6\x056\x1C\x02\u02E6\u02E7\x07"+
		"f\x02\x02\u02E7E\x03\x02\x02\x02\u02E8\u02EF\x07/\x02\x02\u02E9\u02EC"+
		"\x07,\x02\x02\u02EA\u02EB\x06$\x10\x02\u02EB\u02ED\t\t\x02\x02\u02EC\u02EA"+
		"\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02\x02\x02"+
		"\u02EE\u02E8\x03\x02\x02\x02\u02EE\u02E9\x03\x02\x02\x02\u02EF\u02F0\x03"+
		"\x02\x02\x02\u02F0\u02F1\x05\x1C\x0F\x02\u02F1G\x03\x02\x02\x02\u02F2"+
		"\u02F4\x05\x04\x03\x02\u02F3\u02F5\x05\u01EE\xF8\x02\u02F4\u02F3\x03\x02"+
		"\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u0302\x03\x02\x02\x02\u02F6"+
		"\u0302\x05J&\x02\u02F7\u0302\x05R*\x02\u02F8\u0302\x05Z.\x02\u02F9\u0302"+
		"\x05b2\x02\u02FA\u0302\x05v<\x02\u02FB\u0302\x05x=\x02\u02FC\u0302\x05"+
		"t;\x02\u02FD\u0302\x05|?\x02\u02FE\u0302\x05~@\x02\u02FF\u0302\x05\x84"+
		"C\x02\u0300\u0302\x05\x86D\x02\u0301\u02F2\x03\x02\x02\x02\u0301\u02F6"+
		"\x03\x02\x02\x02\u0301\u02F7\x03\x02\x02\x02\u0301\u02F8\x03\x02\x02\x02"+
		"\u0301\u02F9\x03\x02\x02\x02\u0301\u02FA\x03\x02\x02\x02\u0301\u02FB\x03"+
		"\x02\x02\x02\u0301\u02FC\x03\x02\x02\x02\u0301\u02FD\x03\x02\x02\x02\u0301"+
		"\u02FE\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0300\x03\x02"+
		"\x02\x02\u0302I\x03\x02\x02\x02\u0303\u030C\x05\b\x05\x02\u0304\u030C"+
		"\x05L\'\x02\u0305\u030C\x05N(\x02\u0306\u030C\x05P)\x02\u0307\u030C\x07"+
		"@\x02\x02\u0308\u030C\x07F\x02\x02\u0309\u030C\x07<\x02\x02\u030A\u030C"+
		"\x07B\x02\x02\u030B\u0303\x03\x02\x02\x02\u030B\u0304\x03\x02\x02\x02"+
		"\u030B\u0305\x03\x02\x02\x02\u030B\u0306\x03\x02\x02\x02\u030B\u0307\x03"+
		"\x02\x02\x02\u030B\u0308\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B"+
		"\u030A\x03\x02\x02\x02\u030CK\x03\x02\x02\x02\u030D\u030E\x07l\x02\x02"+
		"\u030E\u0313\x056\x1C\x02\u030F\u0310\x07g\x02\x02\u0310\u0312\x056\x1C"+
		"\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313\u0311"+
		"\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02"+
		"\u0315\u0313\x03\x02\x02\x02\u0316\u0318\x07g\x02\x02\u0317\u0316\x03"+
		"\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319"+
		"\u031A\x07r\x02\x02\u031AM\x03\x02\x02\x02\u031B\u031C\x07l\x02\x02\u031C"+
		"\u031D\x056\x1C\x02\u031D\u031E\x07f\x02\x02\u031E\u0326\x056\x1C\x02"+
		"\u031F\u0320\x07g\x02\x02\u0320\u0321\x056\x1C\x02\u0321\u0322\x07f\x02"+
		"\x02\u0322\u0323\x056\x1C\x02\u0323\u0325\x03\x02\x02\x02\u0324\u031F"+
		"\x03\x02\x02\x02\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02"+
		"\u0326\u0327\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03"+
		"\x02\x02\x02\u0329\u032B\x07g\x02\x02\u032A\u0329\x03\x02\x02\x02\u032A"+
		"\u032B\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u032D\x07r\x02"+
		"\x02\u032DO\x03\x02\x02\x02\u032E\u032F\x07;\x02\x02\u032F\u0330\x07m"+
		"\x02\x02\u0330\u0331\x05\x8CG\x02\u0331\u0332\x07s\x02\x02\u0332\u0339"+
		"\x03\x02\x02\x02\u0333\u0334\t\n\x02\x02\u0334\u0335\x07m\x02\x02\u0335"+
		"\u0336\x05\x8CG\x02\u0336\u0337\x07s\x02\x02\u0337\u0339\x03\x02\x02\x02"+
		"\u0338\u032E\x03\x02\x02\x02\u0338\u0333\x03\x02\x02\x02\u0339Q\x03\x02"+
		"\x02\x02\u033A\u033F\x072\x02\x02\u033B\u033F\x05T+\x02\u033C\u033F\x05"+
		"V,\x02\u033D\u033F\x05X-\x02\u033E\u033A\x03\x02\x02\x02\u033E\u033B\x03"+
		"\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033D\x03\x02\x02\x02\u033F"+
		"S\x03\x02\x02\x02\u0340\u0341\x072\x02\x02\u0341\u0342\x07o\x02\x02\u0342"+
		"\u0343\x05\x04\x03\x02\u0343U\x03\x02\x02\x02\u0344\u0345\x072\x02\x02"+
		"\u0345\u0346\x07l\x02\x02\u0346\u0347\x05\x8CG\x02\u0347\u0348\x07r\x02"+
		"\x02\u0348W\x03\x02\x02\x02\u0349\u034A\x072\x02\x02\u034A\u034B\x07o"+
		"\x02\x02\u034B\u034C\x07\v\x02\x02\u034CY\x03\x02\x02\x02\u034D\u0352"+
		"\x074\x02\x02\u034E\u0352\x05\\/\x02\u034F\u0352\x05^0\x02\u0350\u0352"+
		"\x05`1\x02\u0351\u034D\x03\x02\x02\x02\u0351\u034E\x03\x02\x02\x02\u0351"+
		"\u034F\x03\x02\x02\x02\u0351\u0350\x03\x02\x02\x02\u0352[\x03\x02\x02"+
		"\x02\u0353\u0354\x074\x02\x02\u0354\u0355\x07o\x02\x02\u0355\u0356\x05"+
		"\x04\x03\x02\u0356]\x03\x02\x02\x02\u0357\u0358\x074\x02\x02\u0358\u0359"+
		"\x07l\x02\x02\u0359\u035A\x05\x8CG\x02\u035A\u035B\x07r\x02\x02\u035B"+
		"_\x03\x02\x02\x02\u035C\u035D\x074\x02\x02\u035D\u035E\x07o\x02\x02\u035E"+
		"\u035F\x07\v\x02\x02\u035Fa\x03\x02\x02\x02\u0360\u0362\x07k\x02\x02\u0361"+
		"\u0363\x05d3\x02\u0362\u0361\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02"+
		"\u0363\u0365\x03\x02\x02\x02\u0364\u0366\x05\x98M\x02\u0365\u0364\x03"+
		"\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367"+
		"\u0368\x07q\x02\x02\u0368c\x03\x02\x02\x02\u0369\u036B\x05n8\x02\u036A"+
		"\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B\u036C\x03\x02"+
		"\x02\x02\u036C\u036E\x05f4\x02\u036D\u036F\x076\x02\x02\u036E\u036D\x03"+
		"\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370"+
		"\u0372\x05\u0136\x9C\x02\u0371\u0370\x03\x02\x02\x02\u0371\u0372\x03\x02"+
		"\x02\x02\u0372\u0375\x03\x02\x02\x02\u0373\u0375\x05n8\x02\u0374\u036A"+
		"\x03\x02\x02\x02\u0374\u0373\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02"+
		"\u0376\u0377\x07%\x02\x02\u0377e\x03\x02\x02\x02\u0378";
	private static readonly _serializedATNSegment2: string =
		"\u037A\x07m\x02\x02\u0379\u037B\x05h5\x02\u037A\u0379\x03\x02\x02\x02"+
		"\u037A\u037B\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037F\x07"+
		"s\x02\x02\u037D\u037F\x05\x06\x04\x02\u037E\u0378\x03\x02\x02\x02\u037E"+
		"\u037D\x03\x02\x02\x02\u037Fg\x03\x02\x02\x02\u0380\u0385\x05j6\x02\u0381"+
		"\u0382\x07g\x02\x02\u0382\u0384\x05j6\x02\u0383\u0381\x03\x02\x02\x02"+
		"\u0384\u0387\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02\u0385\u0386\x03"+
		"\x02\x02\x02\u0386i\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0388"+
		"\u038E\x05l7\x02\u0389\u038C\x05\x1E\x10\x02\u038A\u038B\x066\x11\x02"+
		"\u038B\u038D\x05\x14\v\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03"+
		"\x02\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u0389\x03\x02\x02\x02\u038E"+
		"\u038F\x03\x02\x02\x02\u038Fk\x03\x02\x02\x02\u0390\u0392\x079\x02\x02"+
		"\u0391\u0390\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0393\x03"+
		"\x02\x02\x02\u0393\u0394\x05\x04\x03\x02\u0394m\x03\x02\x02\x02\u0395"+
		"\u0396\x07l\x02\x02\u0396\u039B\x05p9\x02\u0397\u0398\x07g\x02\x02\u0398"+
		"\u039A\x05p9\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039D\x03\x02\x02\x02"+
		"\u039B\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\u039E\x03"+
		"\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039E\u039F\x07r\x02\x02\u039F"+
		"o\x03\x02\x02\x02\u03A0\u03A2\x05r:\x02\u03A1\u03A0\x03\x02\x02\x02\u03A1"+
		"\u03A2\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x056\x1C"+
		"\x02\u03A4q\x03\x02\x02\x02\u03A5\u03AD\x07a\x02\x02\u03A6\u03AA\x07`"+
		"\x02\x02\u03A7\u03A8\x07m\x02\x02\u03A8\u03A9\x07\x84\x02\x02\u03A9\u03AB"+
		"\x07s\x02\x02\u03AA\u03A7\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02"+
		"\u03AB\u03AD\x03\x02\x02\x02\u03AC\u03A5\x03\x02\x02\x02\u03AC\u03A6\x03"+
		"\x02\x02\x02\u03ADs\x03\x02\x02\x02\u03AE\u03AF\x07o\x02\x02\u03AF\u03B0"+
		"\x05\x04\x03\x02\u03B0u\x03\x02\x02\x02\u03B1\u03B2\x07m\x02\x02\u03B2"+
		"\u03B3\x056\x1C\x02\u03B3\u03B4\x07s\x02\x02\u03B4w\x03\x02\x02\x02\u03B5"+
		"\u03BD\x07m\x02\x02\u03B6\u03B9\x05z>\x02\u03B7\u03B8\x07g\x02\x02\u03B8"+
		"\u03BA\x05z>\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02"+
		"\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03"+
		"\x02\x02\x02\u03BD\u03B6\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE"+
		"\u03BF\x03\x02\x02\x02\u03BF\u03C0\x07s\x02\x02\u03C0y\x03\x02\x02\x02"+
		"\u03C1\u03C4\x079\x02\x02\u03C2\u03C4\x05\x04\x03\x02\u03C3\u03C1\x03"+
		"\x02\x02\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5"+
		"\u03C7\x07f\x02\x02\u03C6\u03C3\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02"+
		"\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x056\x1C\x02\u03C9{\x03\x02"+
		"\x02\x02\u03CA\u03CB\x079\x02\x02\u03CB}\x03\x02\x02\x02\u03CC\u03CE\x07"+
		"v\x02\x02\u03CD\u03CF\x05\x1C\x0F\x02\u03CE\u03CD\x03\x02\x02\x02\u03CE"+
		"\u03CF\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D1\x07o\x02"+
		"\x02\u03D1\u03D4\x05\x80A\x02\u03D2\u03D3\x07o\x02\x02\u03D3\u03D5\x05"+
		"\x80A\x02\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6"+
		"\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\x7F\x03\x02\x02"+
		"\x02\u03D8\u03DC\x05\x04\x03\x02\u03D9\u03DB\x05\x82B\x02\u03DA\u03D9"+
		"\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02"+
		"\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03E5\x03\x02\x02\x02\u03DE\u03DC\x03"+
		"\x02\x02\x02\u03DF\u03E1\x05\x82B\x02\u03E0\u03DF\x03\x02\x02\x02\u03E1"+
		"\u03E2\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02"+
		"\x02\x02\u03E3\u03E5\x03\x02\x02\x02\u03E4\u03D8\x03\x02\x02\x02\u03E4"+
		"\u03E0\x03\x02\x02\x02\u03E5\x81\x03\x02\x02\x02\u03E6\u03E7\x06B\x12"+
		"\x02\u03E7\u03ED\t\t\x02\x02\u03E8\u03E9\x07l\x02\x02\u03E9\u03EA\x05"+
		"\x8CG\x02\u03EA\u03EB\x07r\x02\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03E6"+
		"\x03\x02\x02\x02\u03EC\u03E8\x03\x02\x02\x02\u03ED\x83\x03\x02\x02\x02"+
		"\u03EE\u03EF\x07G\x02\x02\u03EF\u03F0\x07m\x02\x02\u03F0\u03F1\x05\x8E"+
		"H\x02\u03F1\u03F2\x07s\x02\x02\u03F2\x85\x03\x02\x02\x02\u03F3\u03F4\x07"+
		"E\x02\x02\u03F4\u03F5\x07m\x02\x02\u03F5\u03F6\x056\x1C\x02\u03F6\u03F7"+
		"\x07s\x02\x02\u03F7\x87\x03\x02\x02\x02\u03F8\u03F9\bE\x01\x02\u03F9\u03FA"+
		"\x05H%\x02\u03FA\u042F\x03\x02\x02\x02\u03FB\u03FC\f\n\x02\x02\u03FC\u042E"+
		"\x05\x18\r\x02\u03FD\u03FE\f\t\x02\x02\u03FE\u0404\x06E\x15\x02\u03FF"+
		"\u0405\x05\x8AF\x02\u0400\u0402\x05\x8AF\x02\u0401\u0400\x03\x02\x02\x02"+
		"\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0405\x05"+
		"\x90I\x02\u0404\u03FF\x03\x02\x02\x02\u0404\u0401\x03\x02\x02\x02\u0405"+
		"\u042E\x03\x02\x02\x02\u0406\u0407\f\b\x02\x02\u0407\u0408\x07o\x02\x02"+
		"\u0408\u040D\x07\v\x02\x02\u0409\u040A\x07m\x02\x02\u040A\u040B\x05\x92"+
		"J\x02\u040B\u040C\x07s\x02\x02\u040C\u040E\x03\x02\x02\x02\u040D\u0409"+
		"\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u042E\x03\x02\x02\x02"+
		"\u040F\u0410\f\x07\x02\x02\u0410\u041C\x07o\x02\x02\u0411\u041D\x07\x89"+
		"\x02\x02\u0412\u041A\x05\x04\x03\x02\u0413\u0415\x05\u01EE\xF8\x02\u0414"+
		"\u0413\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u041B\x03\x02"+
		"\x02\x02\u0416\u0417\x07m\x02\x02\u0417\u0418\x05\x92J\x02\u0418\u0419"+
		"\x07s\x02\x02\u0419\u041B\x03\x02\x02\x02\u041A\u0414\x03\x02\x02\x02"+
		"\u041A\u0416\x03\x02\x02\x02\u041B\u041D\x03\x02\x02\x02\u041C\u0411\x03"+
		"\x02\x02\x02\u041C\u0412\x03\x02\x02\x02\u041D\u042E\x03\x02\x02\x02\u041E"+
		"\u041F\f\x06\x02\x02\u041F\u0420\x07o\x02\x02\u0420\u042E\x072\x02\x02"+
		"\u0421\u0422\f\x05\x02\x02\u0422\u0423\x06E\x1A\x02\u0423\u0424\x07l\x02"+
		"\x02\u0424\u0425\x05\x8CG\x02\u0425\u0426\x07r\x02\x02\u0426\u042E\x03"+
		"\x02\x02\x02\u0427\u0428\f\x04\x02\x02\u0428\u0429\x06E\x1C\x02\u0429"+
		"\u042E\x07i\x02\x02\u042A\u042B\f\x03\x02\x02\u042B\u042C\x06E\x1E\x02"+
		"\u042C\u042E\x07p\x02\x02\u042D\u03FB\x03\x02\x02\x02\u042D\u03FD\x03"+
		"\x02\x02\x02\u042D\u0406\x03\x02\x02\x02\u042D\u040F\x03\x02\x02\x02\u042D"+
		"\u041E\x03\x02\x02\x02\u042D\u0421\x03\x02\x02\x02\u042D\u0427\x03\x02"+
		"\x02\x02\u042D\u042A\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F"+
		"\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\x89\x03\x02\x02"+
		"\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0434\x07m\x02\x02\u0433\u0435"+
		"\x05\x8CG\x02\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02"+
		"\u0435\u0436\x03\x02\x02\x02\u0436\u0437\x07s\x02\x02\u0437\x8B\x03\x02"+
		"\x02\x02\u0438\u043D\x05\x8EH\x02\u0439\u043A\x07g\x02\x02\u043A\u043C"+
		"\x05\x8EH\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043F\x03\x02\x02\x02"+
		"\u043D\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E\x8D\x03"+
		"\x02\x02\x02\u043F\u043D\x03\x02\x02\x02\u0440\u0443\x079\x02\x02\u0441"+
		"\u0443\x05\x04\x03\x02\u0442\u0440\x03\x02\x02\x02\u0442\u0441\x03\x02"+
		"\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0446\x07f\x02\x02\u0445\u0442"+
		"\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02"+
		"\u0447\u044A\x056\x1C\x02\u0448\u044A\x05\x14\v\x02\u0449\u0447\x03\x02"+
		"\x02\x02\u0449\u0448\x03\x02\x02\x02\u044A\x8F\x03\x02\x02\x02\u044B\u044C"+
		"\x05b2\x02\u044C\x91\x03\x02\x02\x02\u044D\u044F\x05\x94K\x02\u044E\u044D"+
		"\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u044E\x03\x02\x02\x02"+
		"\u0450\u0451\x03\x02\x02\x02\u0451\x93\x03\x02\x02\x02\u0452\u0455\x07"+
		"9\x02\x02\u0453\u0455\x05\x04\x03\x02\u0454\u0452\x03\x02\x02\x02\u0454"+
		"\u0453\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456\u0457\x07f\x02"+
		"\x02\u0457\x95\x03\x02\x02\x02\u0458\u0461\x06L\x1F\x02\u0459\u0462\x05"+
		"6\x1C\x02\u045A\u0462\x05\xF8}\x02\u045B\u0462\x05\x9AN\x02\u045C\u0462"+
		"\x05\xAAV\x02\u045D\u0462\x05\xBE`\x02\u045E\u0462\x05\xC4c\x02\u045F"+
		"\u0462\x05\xD0i\x02\u0460\u0462\x05\xD2j\x02\u0461\u0459\x03\x02\x02\x02"+
		"\u0461\u045A\x03\x02\x02\x02\u0461\u045B\x03\x02\x02\x02\u0461\u045C\x03"+
		"\x02\x02\x02\u0461\u045D\x03\x02\x02\x02\u0461\u045E\x03\x02\x02\x02\u0461"+
		"\u045F\x03\x02\x02\x02\u0461\u0460\x03\x02\x02\x02\u0462\u0464\x03\x02"+
		"\x02\x02\u0463\u0465\x07t\x02\x02\u0464\u0463\x03\x02\x02\x02\u0464\u0465"+
		"\x03\x02\x02\x02\u0465\u0468\x03\x02\x02\x02\u0466\u0468\x05\xD6l\x02"+
		"\u0467\u0458\x03\x02\x02\x02\u0467\u0466\x03\x02\x02\x02\u0468\x97\x03"+
		"\x02\x02\x02\u0469\u046B\x05\x96L\x02\u046A\u0469\x03\x02\x02\x02\u046B"+
		"\u046C\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02"+
		"\x02\x02\u046D\x99\x03\x02\x02\x02\u046E\u0472\x05\x9CO\x02\u046F\u0472"+
		"\x05\x9EP\x02\u0470\u0472\x05\xA8U\x02\u0471\u046E\x03\x02\x02\x02\u0471"+
		"\u046F\x03\x02\x02\x02\u0471\u0470\x03\x02\x02\x02\u0472\x9B\x03\x02\x02"+
		"\x02\u0473\u0475\x07\"\x02\x02\u0474\u0476\x07\x1B\x02\x02\u0475\u0474"+
		"\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02"+
		"\u0477\u0478\x05\u01D6\xEC\x02\u0478\u0479\x07%\x02\x02\u0479\u047B\x05"+
		"6\x1C\x02\u047A\u047C\x05\xBC_\x02\u047B\u047A\x03\x02\x02\x02\u047B\u047C"+
		"\x03\x02\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x05\xFC\x7F\x02"+
		"\u047E\x9D\x03\x02\x02\x02\u047F\u0480\x07*\x02\x02\u0480\u0481\x05\xA0"+
		"Q\x02\u0481\u0482\x05\xFC\x7F\x02\u0482\x9F\x03\x02\x02\x02\u0483\u0488"+
		"\x05\xA2R\x02\u0484\u0485\x07g\x02\x02\u0485\u0487\x05\xA2R\x02\u0486"+
		"\u0484\x03\x02\x02\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03\x02"+
		"\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\xA1\x03\x02\x02\x02\u048A\u0488"+
		"\x03\x02\x02\x02\u048B\u0490\x056\x1C\x02\u048C\u0490\x05\xF0y\x02\u048D"+
		"\u0490\x05\xA4S\x02\u048E\u0490\x05\xA6T\x02\u048F\u048B\x03\x02\x02\x02"+
		"\u048F\u048C\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02\u048F\u048E\x03"+
		"\x02\x02\x02\u0490\xA3\x03\x02\x02\x02\u0491\u0492\x07\x1B\x02\x02\u0492"+
		"\u0493\x05\u01D6\xEC\x02\u0493\u0494\x05\u010C\x87\x02\u0494\xA5\x03\x02"+
		"\x02\x02\u0495\u0496\t\v\x02\x02\u0496\u0497\x05\u01D6\xEC\x02\u0497\u0498"+
		"\x05\u010C\x87\x02\u0498\xA7\x03\x02\x02\x02\u0499\u049A\x07&\x02\x02"+
		"\u049A\u049B\x05\xFC\x7F\x02\u049B\u049C\x07*\x02\x02\u049C\u049D\x05"+
		"6\x1C\x02\u049D\xA9\x03\x02\x02\x02\u049E\u04A2\x05\xACW\x02\u049F\u04A2"+
		"\x05\xB0Y\x02\u04A0\u04A2\x05\xB2Z\x02\u04A1\u049E\x03\x02\x02\x02\u04A1"+
		"\u049F\x03\x02\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\xAB\x03\x02\x02"+
		"\x02\u04A3\u04A4\x07$\x02\x02\u04A4\u04A5\x05\xA0Q\x02\u04A5\u04A7\x05"+
		"\xFC\x7F\x02\u04A6\u04A8\x05\xAEX\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7"+
		"\u04A8\x03\x02\x02\x02\u04A8\xAD\x03\x02\x02\x02\u04A9\u04AC\x07 \x02"+
		"\x02\u04AA\u04AD\x05\xFC\x7F\x02\u04AB\u04AD\x05\xACW\x02\u04AC\u04AA"+
		"\x03\x02\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\xAF\x03\x02\x02\x02"+
		"\u04AE\u04AF\x07#\x02\x02\u04AF\u04B0\x05\xA0Q\x02\u04B0\u04B1\x07 \x02"+
		"\x02\u04B1\u04B2\x05\xFC\x7F\x02\u04B2\xB1\x03\x02\x02\x02\u04B3\u04B4"+
		"\x07(\x02\x02\u04B4\u04B5\x056\x1C\x02\u04B5\u04B9\x07k\x02\x02\u04B6"+
		"\u04B8\x05\xB4[\x02\u04B7\u04B6\x03\x02\x02\x02\u04B8\u04BB\x03\x02\x02"+
		"\x02\u04B9\u04B7\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BC"+
		"\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BC\u04BD\x07q\x02\x02"+
		"\u04BD\xB3\x03\x02\x02\x02\u04BE\u04C1\x05\xB6\\\x02\u04BF\u04C1\x05\xBA"+
		"^\x02\u04C0\u04BE\x03\x02\x02\x02\u04C0\u04BF\x03\x02\x02\x02\u04C1\u04C2"+
		"\x03\x02\x02\x02\u04C2\u04C3\x05\x98M\x02\u04C3\xB5\x03\x02\x02\x02\u04C4"+
		"\u04C5\x07\x1B\x02\x02\u04C5\u04C6\x05\xB8]\x02\u04C6\u04C7\x07f\x02\x02"+
		"\u04C7\xB7\x03\x02\x02\x02\u04C8\u04CA\x05\u01D6\xEC\x02\u04C9\u04CB\x05"+
		"\xBC_\x02\u04CA\u04C9\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB"+
		"\u04CE\x03\x02\x02\x02\u04CC\u04CD\x07g\x02\x02\u04CD\u04CF\x05\xB8]\x02"+
		"\u04CE\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\xB9\x03"+
		"\x02\x02\x02\u04D0\u04D1\x07\x1D\x02\x02\u04D1\u04D2\x07f\x02\x02\u04D2"+
		"\xBB\x03\x02\x02\x02\u04D3\u04D4\x07)\x02\x02\u04D4\u04D5\x056\x1C\x02"+
		"\u04D5\xBD\x03\x02\x02\x02\u04D6\u04DB\x05\xC0a\x02\u04D7\u04DC\x05\x9A"+
		"N\x02\u04D8\u04DC\x05\xACW\x02\u04D9\u04DC\x05\xB2Z\x02\u04DA\u04DC\x05"+
		"\xD2j\x02\u04DB\u04D7\x03\x02\x02\x02\u04DB\u04D8\x03\x02\x02\x02\u04DB"+
		"\u04D9\x03\x02\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC\xBF\x03\x02\x02"+
		"\x02\u04DD\u04DE\x05\xC2b\x02\u04DE\u04DF\x07f\x02\x02\u04DF\xC1\x03\x02"+
		"\x02\x02\u04E0\u04E1\x05\x04\x03\x02\u04E1\xC3\x03\x02\x02\x02\u04E2\u04E8"+
		"\x05\xC6d\x02\u04E3\u04E8\x05\xC8e\x02\u04E4\u04E8\x05\xCAf\x02\u04E5"+
		"\u04E8\x05\xCCg\x02\u04E6\u04E8\x05\xCEh\x02\u04E7\u04E2\x03\x02\x02\x02"+
		"\u04E7\u04E3\x03\x02\x02\x02\u04E7\u04E4\x03\x02\x02\x02\u04E7\u04E5\x03"+
		"\x02\x02\x02\u04E7\u04E6\x03\x02\x02\x02\u04E8\xC5\x03\x02\x02\x02\u04E9"+
		"\u04EB\x07\x1A\x02\x02\u04EA\u04EC\x05\xC2b\x02\u04EB\u04EA\x03\x02\x02"+
		"\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC\xC7\x03\x02\x02\x02\u04ED\u04EF"+
		"\x07\x1C\x02\x02\u04EE\u04F0\x05\xC2b\x02\u04EF\u04EE\x03\x02\x02\x02"+
		"\u04EF\u04F0\x03\x02\x02\x02\u04F0\xC9\x03\x02\x02\x02\u04F1\u04F2\x07"+
		"!\x02\x02\u04F2\xCB\x03\x02\x02\x02\u04F3\u04F5\x07\'\x02\x02\u04F4\u04F6"+
		"\x056\x1C\x02\u04F5\u04F4\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02"+
		"\u04F6\xCD\x03\x02\x02\x02\u04F7\u04F8\x075\x02\x02\u04F8\u04F9\x056\x1C"+
		"\x02\u04F9\xCF\x03\x02\x02\x02\u04FA\u04FB\x07\x1E\x02\x02\u04FB\u04FC"+
		"\x05\xFC\x7F\x02\u04FC\xD1\x03\x02\x02\x02\u04FD\u04FE\x07\x1F\x02\x02"+
		"\u04FE\u0502\x05\xFC\x7F\x02\u04FF\u0501\x05\xD4k\x02\u0500\u04FF\x03"+
		"\x02\x02\x02\u0501\u0504\x03\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502"+
		"\u0503\x03\x02\x02\x02\u0503\xD3\x03\x02\x02\x02\u0504\u0502\x03\x02\x02"+
		"\x02\u0505\u0507\x07-\x02\x02\u0506\u0508\x05\u01D6\xEC\x02\u0507\u0506"+
		"\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508\u050A\x03\x02\x02\x02"+
		"\u0509\u050B\x05\xBC_\x02\u050A\u0509\x03\x02\x02\x02\u050A\u050B\x03"+
		"\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C\u050D\x05\xFC\x7F\x02\u050D"+
		"\xD5\x03\x02\x02\x02\u050E\u0511\x05\xD8m\x02\u050F\u0511\x05\xEAv\x02"+
		"\u0510\u050E\x03\x02\x02\x02\u0510\u050F\x03\x02\x02\x02\u0511\xD7\x03"+
		"\x02\x02\x02\u0512\u0516\x05\xDAn\x02\u0513\u0515\x05\xDCo\x02\u0514\u0513"+
		"\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03\x02\x02\x02"+
		"\u0516\u0517\x03\x02\x02\x02\u0517\u051A\x03\x02\x02\x02\u0518\u0516\x03"+
		"\x02\x02\x02\u0519\u051B\x05\xDEp\x02\u051A\u0519\x03\x02\x02\x02\u051A"+
		"\u051B\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051D\x07?\x02"+
		"\x02\u051D\xD9\x03\x02\x02\x02\u051E\u051F\x07C\x02\x02\u051F\u0521\x05"+
		"\xE0q\x02\u0520\u0522\x05\x98M\x02\u0521\u0520\x03\x02\x02\x02\u0521\u0522"+
		"\x03\x02\x02\x02\u0522\xDB\x03\x02\x02\x02\u0523\u0524\x07>\x02\x02\u0524"+
		"\u0526\x05\xE0q\x02\u0525\u0527\x05\x98M\x02\u0526\u0525\x03\x02\x02\x02"+
		"\u0526\u0527\x03\x02\x02\x02\u0527\xDD\x03\x02\x02\x02\u0528\u052A\x07"+
		"=\x02\x02\u0529\u052B\x05\x98M\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B"+
		"\x03\x02\x02\x02\u052B\xDF\x03\x02\x02\x02\u052C\u052D\bq\x01\x02\u052D"+
		"\u0538\x05\xE2r\x02\u052E\u0538\x05\x04\x03\x02\u052F\u0538\x05\f\x07"+
		"\x02\u0530\u0531\x07m\x02\x02\u0531\u0532\x05\xE0q\x02\u0532\u0533\x07"+
		"s\x02\x02\u0533\u0538\x03\x02\x02\x02\u0534\u0535\x06q \x02\u0535\u0536"+
		"\x07i\x02\x02\u0536\u0538\x05\xE0q\x04\u0537\u052C\x03\x02\x02\x02\u0537"+
		"\u052E\x03\x02\x02\x02\u0537\u052F\x03\x02\x02\x02\u0537\u0530\x03\x02"+
		"\x02\x02\u0537\u0534\x03\x02\x02\x02\u0538\u053F\x03\x02\x02\x02\u0539"+
		"\u053A\f\x03\x02\x02\u053A\u053B\x05\x1A\x0E\x02\u053B\u053C\x05\xE0q"+
		"\x04\u053C\u053E\x03\x02\x02\x02\u053D\u0539\x03\x02\x02\x02\u053E\u0541"+
		"\x03\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02"+
		"\u0540\xE1\x03\x02\x02\x02\u0541\u053F\x03\x02\x02\x02\u0542\u0550\x07"+
		"\x84\x02\x02\u0543\u0544\x07m\x02\x02\u0544\u0545\x05\xE4s\x02\u0545\u0546"+
		"\x07s\x02\x02\u0546\u0551\x03\x02\x02\x02\u0547\u0548\x07m\x02\x02\u0548"+
		"\u0549\x05\xE6t\x02\u0549\u054A\x07s\x02\x02\u054A\u0551\x03\x02\x02\x02"+
		"\u054B\u054C\x07m\x02\x02\u054C\u054D\x05\x16\f\x02\u054D\u054E\x05\xE8"+
		"u\x02\u054E\u054F\x07s\x02\x02\u054F\u0551\x03\x02\x02\x02\u0550\u0543"+
		"\x03\x02\x02\x02\u0550\u0547\x03\x02\x02\x02\u0550\u054B\x03\x02\x02\x02"+
		"\u0551\xE3\x03\x02\x02\x02\u0552\u0553\x07\x84\x02\x02\u0553\xE5\x03\x02"+
		"\x02\x02\u0554\u0555\x07\x84\x02\x02\u0555\xE7\x03\x02\x02\x02\u0556\u055B"+
		"\x07\x89\x02\x02\u0557\u0558\x07o\x02\x02\u0558\u055A\x07\x89\x02\x02"+
		"\u0559\u0557\x03\x02\x02\x02\u055A\u055D\x03\x02\x02\x02\u055B\u0559\x03"+
		"\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\xE9\x03\x02\x02\x02\u055D"+
		"\u055B\x03\x02\x02\x02\u055E\u055F\x07H\x02\x02\u055F\u0568\x07m\x02\x02"+
		"\u0560\u0561\x07\x84\x02\x02\u0561\u0562\x07f\x02\x02\u0562\u0563\x05"+
		"\xEEx\x02\u0563\u0564\x07g\x02\x02\u0564\u0565\x07\x84\x02\x02\u0565\u0566"+
		"\x07f\x02\x02\u0566\u0567\x05\xECw\x02\u0567\u0569\x03\x02\x02\x02\u0568"+
		"\u0560\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u056A\x03\x02"+
		"\x02\x02\u056A\u056B\x07s\x02\x02\u056B\xEB\x03\x02\x02\x02\u056C\u056D"+
		"\x07\x89\x02\x02\u056D\xED\x03\x02\x02\x02\u056E\u056F\x07\x8D\x02\x02"+
		"\u056F\xEF\x03\x02\x02\x02\u0570\u0571\x07:\x02\x02\u0571\u0572\x07m\x02"+
		"\x02\u0572\u0577\x05\xF2z\x02\u0573\u0574\x07g\x02\x02\u0574\u0576\x05"+
		"\xF2z\x02\u0575\u0573\x03\x02\x02\x02\u0576\u0579\x03\x02\x02\x02\u0577"+
		"\u0575\x03\x02\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u057A\x03\x02"+
		"\x02\x02\u0579\u0577\x03\x02\x02\x02\u057A\u057B\x07s\x02\x02\u057B\xF1"+
		"\x03\x02\x02\x02\u057C\u0581\x07u\x02\x02\u057D\u057E\x05\xF4{\x02\u057E"+
		"\u057F\x05\xF6|\x02\u057F\u0581\x03\x02\x02\x02\u0580\u057C\x03\x02\x02"+
		"\x02\u0580\u057D\x03\x02\x02\x02\u0581\xF3\x03\x02\x02\x02\u0582\u0583"+
		"\x07\x84\x02\x02\u0583\xF5\x03\x02\x02\x02\u0584\u058B\x07\x89\x02\x02"+
		"\u0585\u0586\x07o\x02\x02\u0586\u0589\x07\x89\x02\x02\u0587\u0588\x07"+
		"o\x02\x02\u0588\u058A\x07\x89\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589"+
		"\u058A\x03\x02\x02\x02\u058A\u058C\x03\x02\x02\x02\u058B\u0585\x03\x02"+
		"\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\xF7\x03\x02\x02\x02\u058D\u059D"+
		"\x05\xFE\x80\x02\u058E\u059D\x05\u0106\x84\x02\u058F\u059D\x05\u010E\x88"+
		"\x02\u0590\u059D\x05\u0128\x95\x02\u0591\u059D\x05\u012E\x98\x02\u0592"+
		"\u059D\x05\u0146\xA4\x02\u0593\u059D\x05\u0168\xB5\x02\u0594\u059D\x05"+
		"\u0172\xBA\x02\u0595\u059D\x05\u017C\xBF\x02\u0596\u059D\x05\u0192\xCA"+
		"\x02\u0597\u059D\x05\u0198\xCD\x02\u0598\u059D\x05\u019A\xCE\x02\u0599"+
		"\u059D\x05\u01A2\xD2\x02\u059A\u059D\x05\u01A8\xD5\x02\u059B\u059D\x05"+
		"\u01B2\xDA\x02\u059C\u058D\x03\x02\x02\x02\u059C\u058E\x03\x02\x02\x02"+
		"\u059C\u058F\x03\x02\x02\x02\u059C\u0590\x03\x02\x02\x02\u059C\u0591\x03"+
		"\x02\x02\x02\u059C\u0592\x03\x02\x02\x02\u059C\u0593\x03\x02\x02\x02\u059C"+
		"\u0594\x03\x02\x02\x02\u059C\u0595\x03\x02\x02\x02\u059C\u0596\x03\x02"+
		"\x02\x02\u059C\u0597\x03\x02\x02\x02\u059C\u0598\x03\x02\x02\x02\u059C"+
		"\u0599\x03\x02\x02\x02\u059C\u059A\x03\x02\x02\x02\u059C\u059B\x03\x02"+
		"\x02\x02\u059D\xF9\x03\x02\x02\x02\u059E\u05A0\x05\x98M\x02\u059F\u059E"+
		"\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0\xFB\x03\x02\x02\x02"+
		"\u05A1\u05A3\x07k\x02\x02\u05A2\u05A4\x05\x98M\x02\u05A3\u05A2\x03\x02"+
		"\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4\u05A5\x03\x02\x02\x02\u05A5"+
		"\u05A6\x07q\x02\x02\u05A6\xFD\x03\x02\x02\x02\u05A7\u05A9\x05\u01D0\xE9"+
		"\x02\u05A8\u05A7\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9\u05AA"+
		"\x03\x02\x02\x02\u05AA\u05AC\x07\n\x02\x02\u05AB\u05AD\x05\u0100\x81\x02"+
		"\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE\x03"+
		"\x02\x02\x02\u05AE\u05AF\x05\u0102\x82\x02\u05AF\xFF\x03\x02\x02\x02\u05B0"+
		"\u05B1\t\f\x02\x02\u05B1\u0101\x03\x02\x02\x02\u05B2\u05B7\x05\u0104\x83"+
		"\x02\u05B3\u05B4\x07o\x02\x02\u05B4\u05B6\x05\u0104\x83\x02\u05B5\u05B3"+
		"\x03\x02\x02\x02\u05B6\u05B9\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02\x02"+
		"\u05B7\u05B8\x03\x02\x02\x02\u05B8\u0103\x03\x02\x02\x02\u05B9\u05B7\x03"+
		"\x02\x02\x02\u05BA\u05BD\x05\x04\x03\x02\u05BB\u05BD\x05\x14\v\x02\u05BC"+
		"\u05BA\x03\x02\x02\x02\u05BC\u05BB\x03\x02\x02\x02\u05BD\u0105\x03\x02"+
		"\x02\x02\u05BE\u05C0\x05\u01D0\xE9\x02\u05BF\u05BE\x03\x02\x02\x02\u05BF"+
		"\u05C0\x03\x02\x02\x02\u05C0\u05C2\x03\x02\x02\x02\u05C1\u05C3\x05\u01C4"+
		"\xE3\x02\u05C2\u05C1\x03\x02\x02\x02\u05C2\u05C3\x03\x02\x02\x02\u05C3"+
		"\u05C4\x03\x02\x02\x02\u05C4\u05C5\x07\x0E\x02\x02\u05C5\u05C6\x05\u0108"+
		"\x85\x02\u05C6\u0107\x03\x02\x02\x02\u05C7\u05CC\x05\u010A\x86\x02\u05C8"+
		"\u05C9\x07g\x02\x02\u05C9\u05CB\x05\u010A\x86\x02\u05CA\u05C8\x03\x02"+
		"\x02\x02\u05CB\u05CE\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02\u05CC"+
		"\u05CD\x03\x02\x02\x02\u05CD\u0109\x03\x02\x02\x02\u05CE\u05CC\x03\x02"+
		"\x02\x02\u05CF\u05D1\x05\u01D6\xEC\x02\u05D0\u05D2\x05\u010C\x87\x02\u05D1"+
		"\u05D0\x03\x02\x02\x02\u05D1\u05D2\x03\x02\x02\x02\u05D2\u010B\x03\x02"+
		"\x02\x02\u05D3\u05D4\x06\x87\"\x02\u05D4\u05D5\x07h\x02\x02\u05D5\u05D6"+
		"\x056\x1C\x02\u05D6\u010D\x03\x02\x02\x02\u05D7\u05E8\x05\u0110\x89\x02"+
		"\u05D8\u05E9\x05\u0108\x85\x02\u05D9\u05E6\x05\u0112\x8A\x02\u05DA\u05DB"+
		"\x05\u010C\x87\x02\u05DB\u05DC\x05\u0122\x92\x02\u05DC\u05E7\x03\x02\x02"+
		"\x02\u05DD\u05E4\x05\x1E\x10\x02\u05DE\u05E5\x05\u0114\x8B\x02\u05DF\u05E5"+
		"\x05\u011C\x8F\x02\u05E0\u05E2\x05\u010C\x87\x02\u05E1\u05E0\x03\x02\x02"+
		"\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5"+
		"\x05\u0122\x92\x02\u05E4\u05DE\x03\x02\x02\x02\u05E4\u05DF\x03\x02\x02"+
		"\x02\u05E4\u05E1\x03\x02\x02\x02\u05E5\u05E7\x03\x02\x02\x02\u05E6\u05DA"+
		"\x03\x02\x02\x02\u05E6\u05DD\x03\x02\x02\x02\u05E7\u05E9\x03\x02\x02\x02"+
		"\u05E8\u05D8\x03\x02\x02\x02\u05E8\u05D9\x03\x02\x02\x02\u05E9\u010F\x03"+
		"\x02\x02\x02\u05EA\u05EC\x05\u01D0\xE9\x02\u05EB\u05EA\x03\x02\x02\x02"+
		"\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05EE\x03\x02\x02\x02\u05ED\u05EF\x05"+
		"\u01C4\xE3\x02\u05EE\u05ED\x03\x02\x02\x02\u05EE\u05EF\x03\x02\x02\x02"+
		"\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F1\x07\x19\x02\x02\u05F1\u0111\x03"+
		"\x02\x02\x02\u05F2\u05F3\x05\x04\x03\x02\u05F3\u0113\x03\x02\x02\x02\u05F4"+
		"\u0602\x05\xFC\x7F\x02\u05F5\u05FD\x07k\x02\x02\u05F6\u05F8\x05\u0116"+
		"\x8C\x02\u05F7\u05F9\x05\u0118\x8D\x02\u05F8\u05F7\x03\x02\x02\x02\u05F8"+
		"\u05F9\x03\x02\x02\x02\u05F9\u05FE\x03\x02\x02\x02\u05FA\u05FB\x05\u0118"+
		"\x8D\x02\u05FB\u05FC\x05\u0116\x8C\x02\u05FC\u05FE\x03\x02\x02\x02\u05FD"+
		"\u05F6\x03\x02\x02\x02\u05FD\u05FA\x03\x02\x02\x02\u05FE\u05FF\x03\x02"+
		"\x02\x02\u05FF\u0600\x07q\x02\x02\u0600\u0602\x03\x02\x02\x02\u0601\u05F4"+
		"\x03\x02\x02\x02\u0601\u05F5\x03\x02\x02\x02\u0602\u0115\x03\x02\x02\x02"+
		"\u0603\u0605\x05\u01D0\xE9\x02\u0604\u0603\x03\x02\x02\x02\u0604\u0605"+
		"\x03\x02\x02\x02\u0605\u0607\x03\x02\x02\x02\u0606\u0608\x05\u01C8\xE5"+
		"\x02\u0607\u0606\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u0609"+
		"\x03\x02\x02\x02\u0609\u060A\x07N\x02\x02\u060A\u060B\x05\xFC\x7F\x02"+
		"\u060B\u0117\x03\x02\x02\x02\u060C\u060E\x05\u01D0\xE9\x02\u060D\u060C"+
		"\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02\u060E\u0610\x03\x02\x02\x02"+
		"\u060F\u0611\x05\u01C8\xE5\x02\u0610\u060F\x03\x02\x02\x02\u0610\u0611"+
		"\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0614\x07^\x02\x02"+
		"\u0613\u0615\x05\u011A\x8E\x02\u0614\u0613\x03\x02\x02\x02\u0614\u0615"+
		"\x03\x02\x02\x02\u0615\u0616\x03\x02\x02\x02\u0616\u0617\x05\xFC\x7F\x02"+
		"\u0617\u0119\x03\x02\x02\x02\u0618\u0619\x07m\x02\x02\u0619\u061A\x05"+
		"\x04\x03\x02\u061A\u061B\x07s\x02\x02\u061B\u011B\x03\x02\x02\x02\u061C"+
		"\u0624\x07k\x02\x02\u061D\u061F\x05\u011E\x90\x02\u061E\u0620\x05\u0120"+
		"\x91\x02\u061F\u061E\x03\x02\x02\x02\u061F\u0620\x03\x02\x02\x02\u0620"+
		"\u0625\x03\x02\x02\x02\u0621\u0622\x05\u0120\x91\x02\u0622\u0623\x05\u011E"+
		"\x90\x02\u0623\u0625\x03\x02\x02\x02\u0624\u061D\x03\x02\x02\x02\u0624"+
		"\u0621\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0627\x07q\x02"+
		"\x02\u0627\u011D\x03\x02\x02\x02\u0628\u062A\x05\u01D0\xE9\x02\u0629\u0628"+
		"\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062C\x03\x02\x02\x02"+
		"\u062B\u062D\x05\u01C8\xE5\x02\u062C\u062B\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E"+
		"\u062F\x07N\x02\x02\u062F\u011F\x03\x02\x02\x02\u0630\u0632\x05\u01D0"+
		"\xE9\x02\u0631\u0630\x03\x02\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632"+
		"\u0634\x03\x02\x02\x02\u0633\u0635\x05\u01C8\xE5\x02\u0634\u0633\x03\x02"+
		"\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\u0636\x03\x02\x02\x02\u0636"+
		"\u0637\x07^\x02\x02\u0637\u0121\x03\x02\x02\x02\u0638\u0640\x07k\x02\x02"+
		"\u0639\u063B\x05\u0124\x93\x02\u063A\u063C\x05\u0126\x94\x02\u063B\u063A"+
		"\x03\x02\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C\u0641\x03\x02\x02\x02"+
		"\u063D\u063E\x05\u0126\x94\x02\u063E\u063F\x05\u0124\x93\x02\u063F\u0641"+
		"\x03\x02\x02\x02\u0640\u0639\x03\x02\x02\x02\u0640\u063D\x03\x02\x02\x02"+
		"\u0641\u0642\x03\x02\x02\x02\u0642\u0643\x07q\x02\x02\u0643\u0123\x03"+
		"\x02\x02\x02\u0644\u0646\x05\u01D0\xE9\x02\u0645\u0644\x03\x02\x02\x02"+
		"\u0645\u0646\x03\x02\x02\x02\u0646\u0647\x03\x02\x02\x02\u0647\u0649\x07"+
		"b\x02\x02\u0648\u064A\x05\u011A\x8E\x02\u0649\u0648\x03\x02\x02\x02\u0649"+
		"\u064A\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u064C\x05\xFC"+
		"\x7F\x02\u064C\u0125\x03\x02\x02\x02\u064D\u064F\x05\u01D0\xE9\x02\u064E"+
		"\u064D\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0650\x03\x02"+
		"\x02\x02\u0650\u0652\x07L\x02\x02\u0651\u0653\x05\u011A\x8E\x02\u0652"+
		"\u0651\x03\x02\x02\x02\u0652\u0653\x03\x02\x02\x02\u0653\u0654\x03\x02"+
		"\x02\x02\u0654\u0655\x05\xFC\x7F\x02\u0655\u0127\x03\x02\x02\x02\u0656"+
		"\u0658\x05\u01D0\xE9\x02\u0657\u0656\x03\x02\x02\x02\u0657\u0658\x03\x02"+
		"\x02\x02\u0658\u065A\x03\x02\x02\x02\u0659\u065B\x05\u01C6\xE4\x02\u065A"+
		"\u0659\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u065C\x03\x02"+
		"\x02\x02\u065C\u065D\x07\x18\x02\x02\u065D\u065F\x05\u012A\x96\x02\u065E"+
		"\u0660\x05\u01DE\xF0\x02\u065F\u065E\x03\x02\x02\x02\u065F\u0660\x03\x02"+
		"\x02\x02\u0660\u0661\x03\x02\x02\x02\u0661\u0662\x05\u012C\x97\x02\u0662"+
		"\u0129\x03\x02\x02\x02\u0663\u0664\x05\x04\x03\x02\u0664\u012B\x03\x02"+
		"\x02\x02\u0665\u0666\x06\x97#\x02\u0666\u0667\x07h\x02\x02\u0667\u0668"+
		"\x05\x1C\x0F\x02\u0668\u012D\x03\x02\x02\x02\u0669\u066A\x05\u0130\x99"+
		"\x02\u066A\u066C\x05\u0132\x9A\x02\u066B\u066D\x05\u01DE\xF0\x02\u066C"+
		"\u066B\x03\x02\x02\x02\u066C\u066D\x03\x02\x02\x02\u066D\u066E\x03\x02"+
		"\x02\x02\u066E\u0670\x05\u0134\x9B\x02\u066F\u0671\x05\u01E4\xF3\x02\u0670"+
		"\u066F\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\u0673\x03\x02"+
		"\x02\x02\u0672\u0674\x05\u0138\x9D\x02\u0673\u0672\x03\x02\x02\x02\u0673"+
		"\u0674\x03\x02\x02\x02\u0674\u012F\x03\x02\x02\x02\u0675\u0677\x05\u01D0"+
		"\xE9\x02\u0676\u0675\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677"+
		"\u0679\x03\x02\x02\x02\u0678\u067A\x05\u01C4\xE3\x02\u0679\u0678\x03\x02"+
		"\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B"+
		"\u067C\x07\t\x02\x02\u067C\u0131\x03\x02\x02\x02\u067D\u0680\x05\x04\x03"+
		"\x02\u067E\u0680\x05\x14\v\x02\u067F\u067D\x03\x02\x02\x02\u067F\u067E"+
		"\x03\x02\x02\x02\u0680\u0133\x03\x02\x02\x02\u0681\u0683\x05\u013A\x9E"+
		"\x02\u0682\u0684\t\x07\x02\x02\u0683\u0682\x03\x02\x02\x02\u0683\u0684"+
		"\x03\x02\x02\x02\u0684\u0686\x03\x02\x02\x02\u0685\u0687\x05\u0136\x9C"+
		"\x02\u0686\u0685\x03\x02\x02\x02\u0686\u0687\x03\x02\x02\x02\u0687\u0135"+
		"\x03\x02\x02\x02\u0688\u068A\x07d\x02\x02\u0689\u068B\x05\u01D0\xE9\x02"+
		"\u068A\u0689\x03\x02\x02\x02\u068A\u068B\x03\x02\x02\x02\u068B\u068C\x03"+
		"\x02\x02\x02\u068C\u068D\x05\x1C\x0F\x02\u068D\u0137\x03\x02\x02\x02\u068E"+
		"\u068F\x05\xFC\x7F\x02\u068F\u0139\x03\x02\x02\x02\u0690\u0692\x07m\x02"+
		"\x02\u0691\u0693\x05\u013C\x9F\x02\u0692\u0691\x03\x02\x02\x02\u0692\u0693"+
		"\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x07s\x02\x02"+
		"\u0695\u013B\x03\x02\x02\x02\u0696\u069B\x05\u013E\xA0\x02\u0697\u0698"+
		"\x07g\x02\x02\u0698\u069A\x05\u013E\xA0\x02\u0699\u0697\x03\x02\x02\x02"+
		"\u069A\u069D\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03"+
		"\x02\x02\x02\u069C\u013D\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E"+
		"\u06A0\x05\u0140\xA1\x02\u069F\u069E\x03\x02\x02\x02\u069F\u06A0\x03\x02"+
		"\x02\x02\u06A0\u06A1\x03\x02\x02\x02\u06A1\u06A2\x05\u0142\xA2\x02\u06A2"+
		"\u06A6\x05\x1E\x10\x02\u06A3\u06A7\x05\u0144\xA3\x02\u06A4\u06A5\x06\xA0"+
		"$\x02\u06A5\u06A7\x05\x14\v\x02\u06A6\u06A3\x03\x02\x02\x02\u06A6\u06A4"+
		"\x03\x02\x02\x02\u06A6\u06A7\x03\x02\x02\x02\u06A7\u013F\x03\x02\x02\x02"+
		"\u06A8\u06AB\x079\x02\x02\u06A9\u06AB\x05\x04\x03\x02\u06AA\u06A8\x03"+
		"\x02\x02\x02\u06AA\u06A9\x03\x02\x02\x02\u06AB\u0141\x03\x02\x02\x02\u06AC"+
		"\u06AD\x05\x04\x03\x02\u06AD\u0143\x03\x02\x02\x02\u06AE\u06AF\x06\xA3"+
		"%\x02\u06AF\u06B0\x07h\x02\x02\u06B0\u06B1\x056\x1C\x02\u06B1\u0145\x03"+
		"\x02\x02\x02\u06B2\u06B4\x05\u01D0\xE9\x02\u06B3\u06B2\x03\x02\x02\x02"+
		"\u06B3\u06B4\x03\x02\x02\x02\u06B4\u06B6\x03\x02\x02\x02\u06B5\u06B7\x05"+
		"\u01C6\xE4\x02\u06B6\u06B5\x03\x02\x02\x02\u06B6\u06B7\x03\x02\x02\x02"+
		"\u06B7\u06BA\x03\x02\x02\x02\u06B8\u06BB\x05\u0148\xA5\x02\u06B9\u06BB"+
		"\x05\u0158\xAD\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA\u06B9\x03\x02\x02"+
		"\x02\u06BB\u0147\x03\x02\x02\x02\u06BC\u06BE\x07P\x02\x02\u06BD\u06BC"+
		"\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02"+
		"\u06BF\u06C0\x07\x06\x02\x02\u06C0\u06C2\x05\u0154\xAB\x02\u06C1\u06C3"+
		"\x05\u01DE\xF0\x02\u06C2\u06C1\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02"+
		"\x02\u06C3\u06C5\x03\x02\x02\x02\u06C4\u06C6\x054\x1B\x02\u06C5\u06C4"+
		"\x03\x02\x02\x02\u06C5\u06C6\x03\x02\x02\x02\u06C6\u06C8\x03\x02\x02\x02"+
		"\u06C7\u06C9\x05\u01E4\xF3\x02\u06C8\u06C7\x03\x02\x02\x02\u06C8\u06C9"+
		"\x03\x02\x02\x02\u06C9\u06CA\x03\x02\x02\x02\u06CA\u06CC\x07k\x02\x02"+
		"\u06CB\u06CD\x05\u014A\xA6\x02\u06CC\u06CB\x03\x02\x02\x02\u06CC\u06CD"+
		"\x03\x02\x02\x02\u06CD\u06CE\x03\x02\x02\x02\u06CE\u06CF\x07q\x02\x02"+
		"\u06CF\u0149\x03\x02\x02\x02\u06D0\u06D2\x05\u014C\xA7\x02\u06D1\u06D0"+
		"\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02"+
		"\u06D3\u06D4\x03\x02\x02\x02\u06D4\u014B\x03\x02\x02\x02\u06D5\u06D9\x05"+
		"\xF8}\x02\u06D6\u06D9\x05\u014E\xA8\x02\u06D7\u06D9\x05\xD6l\x02\u06D8"+
		"\u06D5\x03\x02\x02\x02\u06D8\u06D6\x03\x02\x02\x02\u06D8\u06D7\x03\x02"+
		"\x02\x02\u06D9\u014D\x03\x02\x02\x02\u06DA\u06DC\x05\u01D0\xE9\x02\u06DB"+
		"\u06DA\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02\x02\u06DC\u06DE\x03\x02"+
		"\x02\x02\u06DD\u06DF\x07P\x02\x02\u06DE\u06DD\x03\x02\x02\x02\u06DE\u06DF"+
		"\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02\x02\u06E0\u06E1\x07\x1B\x02\x02"+
		"\u06E1\u06E2\x05\u0150\xA9\x02\u06E2\u014F\x03\x02\x02\x02\u06E3\u06E8"+
		"\x05\u0152\xAA\x02\u06E4\u06E5\x07g\x02\x02\u06E5\u06E7\x05\u0152\xAA"+
		"\x02\u06E6\u06E4\x03\x02\x02\x02\u06E7\u06EA\x03\x02\x02\x02\u06E8\u06E6"+
		"\x03\x02\x02\x02\u06E8\u06E9\x03\x02\x02\x02\u06E9\u0151\x03\x02\x02\x02"+
		"\u06EA\u06E8\x03\x02\x02\x02\u06EB\u06ED\x05\u0156\xAC\x02\u06EC\u06EE"+
		"\x05$\x13\x02\u06ED\u06EC\x03\x02\x02\x02\u06ED\u06EE\x03\x02\x02\x02"+
		"\u06EE\u0153\x03\x02\x02\x02\u06EF\u06F0\x05\x04\x03\x02\u06F0\u0155\x03"+
		"\x02\x02\x02\u06F1\u06F2\x05\x04\x03\x02\u06F2\u0157\x03\x02\x02\x02\u06F3"+
		"\u06F4\x07\x06\x02\x02\u06F4\u06F6\x05\u0154\xAB\x02\u06F5\u06F7\x05\u01DE"+
		"\xF0\x02\u06F6\u06F5\x03\x02\x02\x02\u06F6\u06F7\x03\x02\x02\x02\u06F7"+
		"\u06F8\x03\x02\x02\x02\u06F8\u06FA\x054\x1B\x02\u06F9\u06FB\x05\u01E4"+
		"\xF3\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA\u06FB\x03\x02\x02\x02\u06FB"+
		"\u06FC\x03\x02\x02\x02\u06FC\u06FD\x07k\x02\x02\u06FD\u06FE\x05\u015A"+
		"\xAE\x02\u06FE\u06FF\x07q\x02\x02\u06FF\u0159\x03\x02\x02\x02\u0700\u0702"+
		"\x05\u015C\xAF\x02\u0701\u0700\x03\x02\x02\x02\u0702\u0703\x03\x02\x02"+
		"\x02\u0703\u0701\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u015B"+
		"\x03\x02\x02\x02\u0705\u0709\x05\xF8}\x02\u0706\u0709\x05\u015E\xB0\x02"+
		"\u0707\u0709\x05\xD6l\x02\u0708\u0705\x03\x02\x02\x02\u0708\u0706\x03"+
		"\x02\x02\x02\u0708\u0707\x03\x02\x02\x02\u0709\u015D\x03\x02\x02\x02\u070A"+
		"\u070C\x05\u01D0\xE9\x02\u070B\u070A\x03\x02\x02\x02\u070B\u070C\x03\x02"+
		"\x02\x02\u070C\u070D\x03\x02\x02\x02\u070D\u070E\x07\x1B\x02\x02\u070E"+
		"\u070F\x05\u0160\xB1\x02\u070F\u015F\x03\x02\x02\x02\u0710\u0715\x05\u0162"+
		"\xB2\x02\u0711\u0712\x07g\x02\x02\u0712\u0714\x05\u0162\xB2\x02\u0713"+
		"\u0711\x03\x02\x02\x02\u0714\u0717\x03\x02\x02\x02\u0715\u0713\x03\x02"+
		"\x02\x02\u0715\u0716\x03\x02\x02\x02\u0716\u0161\x03\x02\x02\x02\u0717"+
		"\u0715\x03\x02\x02\x02\u0718\u071A\x05\u0156\xAC\x02\u0719\u071B\x05\u0164"+
		"\xB3\x02\u071A\u0719\x03\x02\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B"+
		"\u0163\x03\x02\x02\x02\u071C\u071D\x06\xB3&\x02\u071D\u071E\x07h\x02\x02"+
		"\u071E\u071F\x05\u0166\xB4\x02\u071F\u0165\x03\x02\x02\x02\u0720\u0724"+
		"\x05\n\x06\x02\u0721\u0724\x07\x8D\x02\x02\u0722\u0724\x05\f\x07\x02\u0723"+
		"\u0720\x03\x02\x02\x02\u0723\u0721\x03\x02\x02\x02\u0723\u0722\x03\x02"+
		"\x02\x02\u0724\u0167\x03\x02\x02\x02\u0725\u0727\x05\u01D0\xE9\x02\u0726"+
		"\u0725\x03\x02\x02\x02\u0726\u0727\x03\x02\x02\x02\u0727\u0729\x03\x02"+
		"\x02\x02\u0728\u072A\x05\u01C6\xE4\x02\u0729\u0728\x03\x02\x02\x02\u0729"+
		"\u072A\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u072C\x07\x16"+
		"\x02\x02\u072C\u072E\x05\u016A\xB6\x02\u072D\u072F\x05\u01DE\xF0\x02\u072E"+
		"\u072D\x03\x02\x02\x02\u072E\u072F\x03\x02\x02\x02\u072F\u0731\x03\x02"+
		"\x02\x02\u0730\u0732\x054\x1B\x02\u0731\u0730\x03\x02\x02\x02\u0731\u0732"+
		"\x03\x02\x02\x02\u0732\u0734\x03\x02\x02\x02\u0733\u0735\x05\u01E4\xF3"+
		"\x02\u0734\u0733\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u0736"+
		"\x03\x02\x02\x02\u0736\u0737\x05\u016C\xB7\x02\u0737\u0169\x03\x02\x02"+
		"\x02\u0738\u0739\x05\x04\x03\x02\u0739\u016B\x03\x02\x02\x02\u073A\u073C"+
		"\x07k\x02\x02\u073B\u073D\x05\u016E\xB8\x02\u073C\u073B\x03\x02\x02\x02"+
		"\u073C\u073D\x03\x02\x02\x02\u073D\u073E\x03\x02\x02\x02\u073E\u073F\x07"+
		"q\x02\x02\u073F\u016D\x03\x02\x02\x02\u0740\u0742\x05\u0170\xB9\x02\u0741"+
		"\u0740\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\u0741\x03\x02"+
		"\x02\x02\u0743\u0744\x03\x02\x02\x02\u0744\u016F\x03\x02\x02\x02\u0745"+
		"\u0748\x05\xF8}\x02\u0746\u0748\x05\xD6l\x02\u0747\u0745\x03\x02\x02\x02"+
		"\u0747\u0746\x03\x02\x02\x02\u0748\u0171\x03\x02\x02\x02\u0749\u074B\x05"+
		"\u01D0\xE9\x02\u074A\u0749\x03\x02\x02\x02\u074A\u074B\x03\x02\x02\x02"+
		"\u074B\u0754\x03\x02\x02\x02\u074C\u074E\x05\u01C6\xE4\x02\u074D\u074C"+
		"\x03\x02\x02\x02\u074D\u074E\x03\x02\x02\x02\u074E\u0750\x03\x02\x02\x02"+
		"\u074F\u0751\x07M\x02\x02\u0750\u074F\x03\x02\x02\x02\u0750\u0751\x03"+
		"\x02\x02\x02\u0751\u0755\x03\x02\x02\x02\u0752\u0753\x07M\x02\x02\u0753"+
		"\u0755\x05\u01C6\xE4\x02\u0754\u074D\x03\x02\x02\x02\u0754\u0752\x03\x02"+
		"\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756\u0757\x07\x04\x02\x02\u0757"+
		"\u0759\x05\u0174\xBB\x02\u0758\u075A\x05\u01DE\xF0\x02\u0759\u0758\x03"+
		"\x02\x02\x02\u0759\u075A\x03\x02\x02\x02\u075A\u075C\x03\x02\x02\x02\u075B"+
		"\u075D\x054\x1B\x02\u075C\u075B\x03\x02\x02\x02\u075C\u075D\x03\x02\x02"+
		"\x02\u075D\u075F\x03\x02\x02\x02\u075E\u0760\x05\u01E4\xF3\x02\u075F\u075E"+
		"\x03\x02\x02\x02\u075F\u0760\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02"+
		"\u0761\u0762\x05\u0176\xBC\x02\u0762\u0173\x03\x02\x02\x02\u0763\u0764"+
		"\x05\x04\x03\x02\u0764\u0175\x03\x02\x02\x02\u0765\u0767\x07k\x02\x02"+
		"\u0766\u0768\x05\u0178\xBD\x02\u0767\u0766\x03\x02\x02\x02\u0767\u0768"+
		"\x03\x02\x02\x02\u0768\u0769\x03\x02\x02\x02\u0769\u076A\x07q\x02\x02"+
		"\u076A\u0177\x03\x02\x02\x02\u076B\u076D\x05\u017A\xBE\x02\u076C\u076B"+
		"\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u076C\x03\x02\x02\x02"+
		"\u076E\u076F\x03\x02\x02\x02\u076F\u0179\x03\x02\x02\x02\u0770\u0773\x05"+
		"\xF8}\x02\u0771\u0773\x05\xD6l\x02\u0772\u0770\x03\x02\x02\x02\u0772\u0771"+
		"\x03\x02\x02\x02\u0773\u017B\x03\x02\x02\x02\u0774\u0776\x05\u01D0\xE9"+
		"\x02\u0775\u0774\x03\x02\x02\x02\u0775\u0776\x03\x02\x02\x02\u0776\u0778"+
		"\x03\x02\x02\x02\u0777\u0779\x05\u01C6\xE4\x02\u0778\u0777\x03\x02\x02"+
		"\x02\u0778\u0779\x03\x02\x02\x02\u0779\u077A\x03\x02\x02\x02\u077A\u077B"+
		"\x07\x13\x02\x02\u077B\u077D\x05\u017E\xC0\x02\u077C\u077E\x054\x1B\x02"+
		"\u077D\u077C\x03\x02\x02\x02\u077D\u077E\x03\x02\x02\x02\u077E\u0780\x03"+
		"\x02\x02\x02\u077F\u0781\x05\u01E4\xF3\x02\u0780\u077F\x03\x02\x02\x02"+
		"\u0780\u0781\x03\x02\x02\x02\u0781\u0782\x03\x02\x02\x02\u0782\u0783\x05"+
		"\u0180\xC1\x02\u0783\u017D\x03\x02\x02\x02\u0784\u0785\x05\x04\x03\x02"+
		"\u0785\u017F\x03\x02\x02\x02\u0786\u0788\x07k\x02\x02\u0787\u0789\x05"+
		"\u0182\xC2\x02\u0788\u0787\x03\x02\x02\x02\u0788\u0789\x03\x02\x02\x02"+
		"\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x07q\x02\x02\u078B\u0181\x03"+
		"\x02\x02\x02\u078C\u078E\x05\u0184\xC3\x02\u078D\u078C\x03\x02\x02\x02"+
		"\u078E\u078F\x03\x02\x02\x02\u078F\u078D\x03\x02\x02\x02\u078F\u0790\x03"+
		"\x02\x02\x02\u0790\u0183\x03\x02\x02\x02\u0791\u0794\x05\u0186\xC4\x02"+
		"\u0792\u0794\x05\xD6l\x02\u0793\u0791\x03\x02\x02\x02\u0793\u0792\x03"+
		"\x02\x02\x02\u0794\u0185\x03\x02\x02\x02\u0795\u079C\x05\u0188\xC5\x02"+
		"\u0796\u079C\x05\u018A\xC6\x02\u0797\u079C\x05\u018C\xC7\x02\u0798\u079C"+
		"\x05\u018E\xC8\x02\u0799\u079C\x05\u0190\xC9\x02\u079A\u079C\x05\u0128"+
		"\x95\x02\u079B\u0795\x03\x02\x02\x02\u079B\u0796\x03\x02\x02\x02\u079B"+
		"\u0797\x03\x02\x02\x02\u079B\u0798\x03\x02\x02\x02\u079B\u0799\x03\x02"+
		"\x02\x02\u079B\u079A\x03\x02\x02\x02\u079C\u0187\x03\x02\x02\x02\u079D"+
		"\u079E\x05\u0110\x89\x02\u079E\u079F\x05\u0112\x8A\x02\u079F\u07A0\x05"+
		"\x1E\x10\x02\u07A0\u07A1\x05\u011C\x8F\x02\u07A1\u0189\x03\x02\x02\x02"+
		"\u07A2\u07A3\x05\u0130\x99\x02\u07A3\u07A5\x05\u0132\x9A\x02\u07A4\u07A6"+
		"\x05\u01DE\xF0\x02\u07A5\u07A4\x03\x02\x02\x02\u07A5\u07A6\x03\x02\x02"+
		"\x02\u07A6\u07A7\x03\x02\x02\x02\u07A7\u07A9\x05\u0134\x9B\x02\u07A8\u07AA"+
		"\x05\u01E4\xF3\x02\u07A9\u07A8\x03\x02\x02\x02\u07A9\u07AA\x03\x02\x02"+
		"\x02\u07AA\u018B\x03\x02\x02\x02\u07AB\u07AD\x05\u0194\xCB\x02\u07AC\u07AE"+
		"\x05\u01DE\xF0\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE\x03\x02\x02"+
		"\x02\u07AE\u07AF\x03\x02\x02\x02\u07AF\u07B1\x05\u013A\x9E\x02\u07B0\u07B2"+
		"\t\x07\x02\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2\x03\x02\x02\x02"+
		"\u07B2\u07B4\x03\x02\x02\x02\u07B3\u07B5\x05\u01E4\xF3\x02\u07B4\u07B3"+
		"\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u018D\x03\x02\x02\x02"+
		"\u07B6\u07B7\x05\u01A4\xD3\x02\u07B7\u07B9\x05\u01A6\xD4\x02\u07B8\u07BA"+
		"\x05\u01E4\xF3\x02\u07B9\u07B8\x03\x02\x02\x02\u07B9\u07BA\x03\x02\x02"+
		"\x02\u07BA\u07BB\x03\x02\x02\x02\u07BB\u07BC\x05\u011C\x8F\x02\u07BC\u018F"+
		"\x03\x02\x02\x02\u07BD\u07BF\x05\u01D0\xE9\x02\u07BE\u07BD\x03\x02\x02"+
		"\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C1\x03\x02\x02\x02\u07C0\u07C2"+
		"\x05\u01C6\xE4\x02\u07C1\u07C0\x03\x02\x02\x02\u07C1\u07C2\x03\x02\x02"+
		"\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07C4\x07\x03\x02\x02\u07C4\u07C6"+
		"\x05\u012A\x96\x02\u07C5\u07C7\x054\x1B\x02\u07C6\u07C5\x03\x02\x02\x02"+
		"\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07C9\x03\x02\x02\x02\u07C8\u07CA\x05"+
		"\u012C\x97\x02\u07C9\u07C8\x03\x02\x02\x02\u07C9\u07CA\x03\x02\x02\x02"+
		"\u07CA\u07CC\x03\x02\x02\x02\u07CB\u07CD\x05\u01E4\xF3\x02\u07CC\u07CB"+
		"\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u0191\x03\x02\x02\x02"+
		"\u07CE\u07D0\x05\u0194\xCB\x02\u07CF\u07D1\x05\u01DE\xF0\x02\u07D0\u07CF"+
		"\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u07D2\x03\x02\x02\x02"+
		"\u07D2\u07D4\x05\u013A\x9E\x02\u07D3\u07D5\t\x07\x02\x02\u07D4\u07D3\x03"+
		"\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D7\x03\x02\x02\x02\u07D6"+
		"\u07D8\x05\u01E4\xF3\x02\u07D7\u07D6\x03\x02\x02\x02\u07D7\u07D8\x03\x02"+
		"\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DA\x05\u0196\xCC\x02\u07DA"+
		"\u0193\x03\x02\x02\x02\u07DB\u07DD\x05\u01D0\xE9\x02\u07DC\u07DB\x03\x02"+
		"\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DF\x03\x02\x02\x02\u07DE"+
		"\u07E0\x05\u01C4\xE3\x02\u07DF\u07DE\x03\x02\x02\x02\u07DF\u07E0\x03\x02"+
		"\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07E4\x07\v\x02\x02\u07E2\u07E3"+
		"\x06\xCB\'\x02\u07E3\u07E5\t\t\x02\x02\u07E4\u07E2\x03\x02\x02\x02\u07E4"+
		"\u07E5\x03\x02\x02\x02\u07E5\u0195\x03\x02\x02\x02\u07E6\u07E7\x05\xFC"+
		"\x7F\x02\u07E7\u0197\x03\x02\x02\x02\u07E8\u07EA\x05\u01D0\xE9\x02\u07E9"+
		"\u07E8\x03\x02\x02\x02\u07E9\u07EA\x03\x02\x02\x02\u07EA\u07EB\x03\x02"+
		"\x02\x02\u07EB\u07EC\x07\x05\x02\x02\u07EC\u07ED\x05\xFC\x7F\x02\u07ED"+
		"\u0199\x03\x02\x02\x02\u07EE\u07F0\x05\u01D0\xE9\x02\u07EF\u07EE\x03\x02"+
		"\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F2\x03\x02\x02\x02\u07F1"+
		"\u07F3\x05\u01C6\xE4\x02\u07F2\u07F1\x03\x02\x02\x02\u07F2\u07F3\x03\x02"+
		"\x02\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F5\x07\x07\x02\x02\u07F5"+
		"\u07F8\x05 \x11\x02\u07F6\u07F9\x054\x1B\x02\u07F7\u07F9\x05\u01E4\xF3"+
		"\x02\u07F8\u07F6\x03\x02\x02\x02\u07F8\u07F7\x03\x02\x02\x02\u07F8\u07F9"+
		"\x03\x02\x02\x02\u07F9\u07FA\x03\x02\x02\x02\u07FA\u07FB\x05\u019C\xCF"+
		"\x02\u07FB\u019B\x03\x02\x02\x02\u07FC\u07FE\x07k\x02\x02\u07FD\u07FF"+
		"\x05\u019E\xD0\x02\u07FE\u07FD\x03\x02\x02\x02\u07FE\u07FF\x03\x02\x02"+
		"\x02\u07FF\u0800\x03\x02\x02\x02\u0800\u0801\x07q\x02\x02\u0801\u019D"+
		"\x03\x02\x02\x02\u0802\u0804\x05\u01A0\xD1\x02\u0803\u0802\x03\x02\x02"+
		"\x02\u0804\u0805\x03\x02\x02\x02\u0805\u0803\x03\x02\x02\x02\u0805\u0806"+
		"\x03\x02\x02\x02\u0806\u019F\x03\x02\x02\x02\u0807\u080A\x05\xF8}\x02"+
		"\u0808\u080A\x05\xD6l\x02\u0809\u0807\x03\x02\x02\x02\u0809\u0808\x03"+
		"\x02\x02\x02\u080A\u01A1\x03\x02\x02\x02\u080B\u080C\x05\u01A4\xD3\x02"+
		"\u080C\u080E\x05\u01A6\xD4\x02\u080D\u080F\x05\u01E4\xF3\x02\u080E\u080D"+
		"\x03\x02\x02\x02\u080E\u080F\x03\x02\x02\x02\u080F\u0812\x03\x02\x02\x02"+
		"\u0810\u0813\x05\u0114\x8B\x02\u0811\u0813\x05\u011C\x8F\x02\u0812\u0810"+
		"\x03\x02\x02\x02\u0812\u0811\x03\x02\x02\x02\u0813\u01A3\x03\x02\x02\x02"+
		"\u0814\u0816\x05\u01D0\xE9\x02\u0815\u0814\x03\x02\x02\x02\u0815\u0816"+
		"\x03\x02\x02\x02\u0816\u0818\x03\x02\x02\x02\u0817\u0819\x05\u01C4\xE3"+
		"\x02\u0818\u0817\x03\x02\x02\x02\u0818\u0819\x03\x02\x02\x02\u0819\u081A"+
		"\x03\x02\x02\x02\u081A\u081C\x07\x17\x02\x02\u081B\u081D\x05\u01DE\xF0"+
		"\x02\u081C\u081B\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D\u081E"+
		"\x03\x02\x02\x02\u081E\u081F\x05\u013A\x9E\x02\u081F\u01A5\x03\x02\x02"+
		"\x02\u0820\u0822\x07d\x02\x02\u0821\u0823\x05\u01D0\xE9\x02\u0822\u0821"+
		"\x03\x02\x02\x02\u0822\u0823\x03\x02\x02\x02\u0823\u0824\x03\x02\x02\x02"+
		"\u0824\u0825\x05\x1C\x0F\x02\u0825\u01A7\x03\x02\x02\x02\u0826\u082A\x05"+
		"\u01AA\xD6\x02\u0827\u082A\x05\u01AC\xD7\x02\u0828\u082A\x05\u01AE\xD8"+
		"\x02\u0829\u0826\x03\x02\x02\x02\u0829\u0827\x03\x02\x02\x02\u0829\u0828"+
		"\x03\x02\x02\x02\u082A\u01A9\x03\x02\x02\x02\u082B\u082C\x07Z\x02\x02"+
		"\u082C\u082D\x07\x10\x02\x02\u082D\u082E\x05\x14\v\x02\u082E\u01AB\x03"+
		"\x02\x02\x02\u082F\u0830\x07X\x02\x02\u0830\u0831\x07\x10\x02\x02\u0831"+
		"\u0832\x05\x14\v\x02\u0832\u01AD\x03\x02\x02\x02\u0833\u0834\x07O\x02"+
		"\x02\u0834\u0835\x07\x10\x02\x02\u0835\u0837\x05\x14\v\x02\u0836\u0838"+
		"\x05\u01B0\xD9\x02\u0837\u0836\x03\x02\x02\x02\u0837\u0838\x03\x02\x02"+
		"\x02\u0838\u01AF\x03\x02\x02\x02\u0839\u083A\x07f\x02\x02\u083A\u083B"+
		"\x05\u01C0\xE1\x02\u083B\u01B1\x03\x02\x02\x02\u083C\u083D\x07\x11\x02"+
		"\x02\u083D\u083E\x05\u01C0\xE1\x02\u083E\u0840\x07k\x02\x02\u083F\u0841"+
		"\x05\u01B4\xDB\x02\u0840\u083F\x03\x02\x02\x02\u0840\u0841\x03\x02\x02"+
		"\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0843\x07q\x02\x02\u0843\u01B3"+
		"\x03\x02\x02\x02\u0844\u0846\x05\u01B6\xDC\x02\u0845\u0844\x03\x02\x02"+
		"\x02\u0846\u0847\x03\x02\x02\x02\u0847\u0845\x03\x02\x02\x02\u0847\u0848"+
		"\x03\x02\x02\x02\u0848\u01B5\x03\x02\x02\x02\u0849\u084D\x05\u01B8\xDD"+
		"\x02\u084A\u084D\x05\u01BA\xDE\x02\u084B\u084D\x05\u01BC\xDF\x02\u084C"+
		"\u0849\x03\x02\x02\x02\u084C\u084A\x03\x02\x02\x02\u084C\u084B\x03\x02"+
		"\x02\x02\u084D\u01B7\x03\x02\x02\x02\u084E\u084F\x07\x84\x02\x02\u084F"+
		"\u0850\x07f\x02\x02\u0850\u0851\x05\u01BE\xE0\x02\u0851\u01B9\x03\x02"+
		"\x02\x02\u0852\u0853\x07\x84\x02\x02\u0853\u0854\x07f\x02\x02\u0854\u0855"+
		"\x05\f\x07\x02\u0855\u01BB\x03\x02\x02\x02\u0856\u0857\x07I\x02\x02\u0857"+
		"\u0858\x07f\x02\x02\u0858\u0859\t\r\x02\x02\u0859\u01BD\x03\x02\x02\x02"+
		"\u085A\u085F\x05\u01C0\xE1\x02\u085B\u085C\x07g\x02\x02\u085C\u085E\x05"+
		"\u01C0\xE1\x02\u085D\u085B\x03\x02\x02\x02\u085E\u0861\x03\x02\x02\x02"+
		"\u085F\u085D\x03\x02\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u01BF\x03"+
		"\x02\x02\x02\u0861\u085F\x03\x02\x02\x02\u0862\u0863\x05\x04\x03\x02\u0863"+
		"\u01C1\x03\x02\x02\x02\u0864\u0874\x07\x04\x02\x02\u0865\u0874\x07J\x02"+
		"\x02\u0866\u0874\x07K\x02\x02\u0867\u0874\x07M\x02\x02\u0868\u0874\x07"+
		"O\x02\x02\u0869\u0874\x07Q\x02\x02\u086A\u0874\x07V\x02\x02\u086B\u0874"+
		"\x07W\x02\x02\u086C\u0874\x07X\x02\x02\u086D\u0874\x07Z\x02\x02\u086E"+
		"\u0874\x07\\\x02\x02\u086F\u0874\x07\x15\x02\x02\u0870\u0874\x05r:\x02"+
		"\u0871\u0874\x05\u01C6\xE4\x02\u0872\u0874\x05\u01C8\xE5\x02\u0873\u0864"+
		"\x03\x02\x02\x02\u0873\u0865\x03\x02\x02\x02\u0873\u0866\x03\x02\x02\x02"+
		"\u0873\u0867\x03\x02\x02\x02\u0873\u0868\x03\x02\x02\x02\u0873\u0869\x03"+
		"\x02\x02\x02\u0873\u086A\x03\x02\x02\x02\u0873\u086B\x03\x02\x02\x02\u0873"+
		"\u086C\x03\x02\x02\x02\u0873\u086D\x03\x02\x02\x02\u0873\u086E\x03\x02"+
		"\x02\x02\u0873\u086F\x03\x02\x02\x02\u0873\u0870\x03\x02\x02\x02\u0873"+
		"\u0871\x03\x02\x02\x02\u0873\u0872\x03\x02\x02\x02\u0874\u01C3\x03\x02"+
		"\x02\x02\u0875\u0877\x05\u01C2\xE2\x02\u0876\u0875\x03\x02\x02\x02\u0877"+
		"\u0878\x03\x02\x02\x02\u0878\u0876\x03\x02\x02\x02\u0878\u0879\x03\x02"+
		"\x02\x02\u0879\u01C5\x03\x02\x02\x02\u087A\u087E\t\x0E\x02\x02\u087B\u087C"+
		"\x07m\x02\x02\u087C\u087D\x07^\x02\x02\u087D\u087F\x07s\x02\x02\u087E"+
		"\u087B\x03\x02\x02\x02\u087E\u087F\x03\x02\x02\x02\u087F\u01C7\x03\x02"+
		"\x02\x02\u0880\u0881\t\x0F\x02\x02\u0881\u01C9\x03\x02\x02\x02\u0882\u0883"+
		"\x07e\x02\x02\u0883\u0885\x05\u01CC\xE7\x02\u0884\u0886\x05\u01CE\xE8"+
		"\x02\u0885\u0884\x03\x02\x02\x02\u0885\u0886\x03\x02\x02\x02\u0886\u01CB"+
		"\x03\x02\x02\x02\u0887\u0888\x05\x04\x03\x02\u0888\u01CD\x03\x02\x02\x02"+
		"\u0889\u088B\x07m\x02\x02\u088A\u088C\x05\u01D2\xEA\x02\u088B\u088A\x03"+
		"\x02\x02\x02\u088B\u088C\x03\x02\x02\x02\u088C\u088D\x03\x02\x02\x02\u088D"+
		"\u088E\x07s\x02\x02\u088E\u01CF\x03\x02\x02\x02\u088F\u0891\x05\u01CA"+
		"\xE6\x02\u0890\u088F\x03\x02\x02\x02\u0891\u0892\x03\x02\x02\x02\u0892"+
		"\u0890\x03\x02\x02\x02\u0892\u0893\x03\x02\x02\x02\u0893\u01D1\x03\x02"+
		"\x02\x02\u0894\u0896\x05\u01D4\xEB\x02\u0895\u0894\x03\x02\x02\x02\u0896"+
		"\u0897\x03\x02\x02\x02\u0897\u0895\x03\x02\x02\x02\u0897\u0898\x03\x02"+
		"\x02\x02\u0898\u01D3\x03\x02\x02\x02\u0899\u089A\x07m\x02\x02\u089A\u089B"+
		"\x05\u01D2\xEA\x02\u089B\u089C\x07s\x02\x02\u089C\u08B5\x03\x02\x02\x02"+
		"\u089D\u089E\x07l\x02\x02\u089E\u089F\x05\u01D2\xEA\x02\u089F\u08A0\x07"+
		"r\x02\x02\u08A0\u08B5\x03\x02\x02\x02\u08A1\u08A2\x07k\x02\x02\u08A2\u08A3"+
		"\x05\u01D2\xEA\x02\u08A3\u08A4\x07q\x02\x02\u08A4\u08B5\x03\x02\x02\x02"+
		"\u08A5\u08B5\x05\x04\x03\x02\u08A6\u08B5\x05\b\x05\x02\u08A7\u08B5\x05"+
		"\x14\v\x02\u08A8\u08B5\x07o\x02\x02\u08A9\u08B5\x07g\x02\x02\u08AA\u08B5"+
		"\x07f\x02\x02\u08AB\u08B5\x07t\x02\x02\u08AC\u08B5\x07h\x02\x02\u08AD"+
		"\u08B5\x07e\x02\x02\u08AE\u08B5\x07n\x02\x02\u08AF\u08B5\x07c\x02\x02"+
		"\u08B0\u08B5\x07d\x02\x02\u08B1\u08B5\x07j\x02\x02\u08B2\u08B5\x07p\x02"+
		"\x02\u08B3\u08B5\x07i\x02\x02\u08B4\u0899\x03\x02\x02\x02\u08B4\u089D"+
		"\x03\x02\x02\x02\u08B4\u08A1\x03\x02\x02\x02\u08B4\u08A5\x03\x02\x02\x02"+
		"\u08B4\u08A6\x03\x02\x02\x02\u08B4\u08A7\x03\x02\x02\x02\u08B4\u08A8\x03"+
		"\x02\x02\x02\u08B4\u08A9\x03\x02\x02\x02\u08B4\u08AA\x03\x02\x02\x02\u08B4"+
		"\u08AB\x03\x02\x02\x02\u08B4\u08AC\x03\x02\x02\x02\u08B4\u08AD\x03\x02"+
		"\x02\x02\u08B4\u08AE\x03\x02\x02\x02\u08B4\u08AF\x03\x02\x02\x02\u08B4"+
		"\u08B0\x03\x02\x02\x02\u08B4\u08B1\x03\x02\x02\x02\u08B4\u08B2\x03\x02"+
		"\x02\x02\u08B4\u08B3\x03\x02\x02\x02\u08B5\u01D5\x03\x02\x02\x02\u08B6"+
		"\u08B7\b\xEC\x01\x02\u08B7\u08B9\x079\x02\x02\u08B8\u08BA\x05\x1E\x10"+
		"\x02\u08B9\u08B8\x03\x02\x02\x02\u08B9\u08BA\x03\x02\x02\x02\u08BA\u08D5"+
		"\x03\x02\x02\x02\u08BB\u08BD\x05\x04\x03\x02\u08BC\u08BE\x05\x1E\x10\x02"+
		"\u08BD\u08BC\x03\x02\x02\x02\u08BD\u08BE\x03\x02\x02\x02\u08BE\u08D5\x03"+
		"\x02\x02\x02\u08BF\u08C0\t\v\x02\x02\u08C0\u08D5\x05\u01D6\xEC\t\u08C1"+
		"\u08C3\x05\u01D8\xED\x02\u08C2\u08C4\x05\x1E\x10\x02\u08C3\u08C2\x03\x02"+
		"\x02\x02\u08C3\u08C4\x03\x02\x02\x02\u08C4\u08D5\x03\x02\x02\x02\u08C5"+
		"\u08C7\x05 \x11\x02\u08C6\u08C5\x03\x02\x02\x02\u08C6\u08C7\x03\x02\x02"+
		"\x02\u08C7\u08C8\x03\x02\x02\x02\u08C8\u08C9\x07o\x02\x02\u08C9\u08CB"+
		"\x05\u0156\xAC\x02\u08CA\u08CC\x05\u01D8\xED\x02\u08CB\u08CA\x03\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08D5\x03\x02\x02\x02\u08CD\u08CE"+
		"\x05\x04\x03\x02\u08CE\u08CF\x06\xEC(\x02\u08CF\u08D0\x07p\x02\x02\u08D0"+
		"\u08D5\x03\x02\x02\x02\u08D1\u08D2\x07/\x02\x02\u08D2\u08D5\x05\x1C\x0F"+
		"\x02\u08D3\u08D5\x056\x1C\x02\u08D4\u08B6\x03\x02\x02\x02\u08D4\u08BB"+
		"\x03\x02\x02\x02\u08D4\u08BF\x03\x02\x02\x02\u08D4\u08C1\x03\x02\x02\x02"+
		"\u08D4\u08C6\x03\x02\x02\x02\u08D4\u08CD\x03\x02\x02\x02\u08D4\u08D1\x03"+
		"\x02\x02\x02\u08D4\u08D3\x03\x02\x02\x02\u08D5\u08DB\x03\x02\x02\x02\u08D6"+
		"\u08D7\f\x04\x02\x02\u08D7\u08D8\x07,\x02\x02\u08D8\u08DA\x05\x1C\x0F"+
		"\x02\u08D9\u08D6\x03\x02\x02\x02\u08DA\u08DD\x03\x02\x02\x02\u08DB\u08D9"+
		"\x03\x02\x02\x02\u08DB\u08DC\x03\x02\x02\x02\u08DC\u01D7\x03\x02\x02\x02"+
		"\u08DD\u08DB\x03\x02\x02\x02\u08DE\u08E0\x07m\x02\x02\u08DF\u08E1\x05"+
		"\u01DA\xEE\x02\u08E0\u08DF\x03\x02\x02\x02\u08E0\u08E1\x03\x02\x02\x02"+
		"\u08E1\u08E2\x03\x02\x02\x02\u08E2\u08E3\x07s\x02\x02\u08E3\u01D9\x03"+
		"\x02\x02\x02\u08E4\u08E9\x05\u01DC\xEF\x02\u08E5\u08E6\x07g\x02\x02\u08E6"+
		"\u08E8\x05\u01DC\xEF\x02\u08E7\u08E5\x03\x02\x02\x02\u08E8\u08EB\x03\x02"+
		"\x02\x02\u08E9\u08E7\x03\x02\x02\x02\u08E9\u08EA\x03\x02\x02\x02\u08EA"+
		"\u01DB\x03\x02\x02\x02\u08EB\u08E9\x03\x02\x02\x02\u08EC\u08EF\x079\x02"+
		"\x02\u08ED\u08EF\x05\x04\x03\x02\u08EE\u08EC\x03\x02\x02\x02\u08EE\u08ED"+
		"\x03\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\u08F2\x07f\x02\x02"+
		"\u08F1\u08EE\x03\x02\x02\x02\u08F1\u08F2\x03\x02\x02\x02\u08F2\u08F3\x03"+
		"\x02\x02\x02\u08F3\u08F4\x05\u01D6\xEC\x02\u08F4\u01DD\x03\x02\x02\x02"+
		"\u08F5\u08F6\x07y\x02\x02\u08F6\u08F7\x05\u01E0\xF1\x02\u08F7\u08F8\x07"+
		"x\x02\x02\u08F8\u01DF\x03\x02\x02\x02\u08F9\u08FE\x05\u01E2\xF2\x02\u08FA"+
		"\u08FB\x07g\x02\x02\u08FB\u08FD\x05\u01E2\xF2\x02\u08FC\u08FA\x03\x02"+
		"\x02\x02\u08FD\u0900\x03\x02\x02\x02\u08FE\u08FC\x03\x02\x02\x02\u08FE"+
		"\u08FF\x03\x02\x02\x02\u08FF\u01E1\x03\x02\x02\x02\u0900\u08FE\x03\x02"+
		"\x02\x02\u0901\u0907\x05\"\x12\x02\u0902\u0905\x07f\x02\x02\u0903\u0906"+
		"\x05 \x11\x02\u0904\u0906\x052\x1A\x02\u0905\u0903\x03\x02\x02\x02\u0905"+
		"\u0904\x03\x02\x02\x02\u0906\u0908\x03\x02\x02\x02\u0907\u0902\x03\x02"+
		"\x02\x02\u0907\u0908\x03\x02\x02\x02\u0908\u01E3\x03\x02\x02\x02\u0909"+
		"\u090A\x07)\x02\x02\u090A\u090B\x05\u01E6\xF4\x02\u090B\u01E5\x03\x02"+
		"\x02\x02\u090C\u0911\x05\u01E8\xF5\x02\u090D\u090E\x07g\x02\x02\u090E"+
		"\u0910\x05\u01E8\xF5\x02\u090F\u090D\x03\x02\x02\x02\u0910\u0913\x03\x02"+
		"\x02\x02\u0911\u090F\x03\x02\x02\x02\u0911\u0912\x03\x02\x02\x02\u0912"+
		"\u01E7\x03\x02\x02\x02\u0913\u0911\x03\x02\x02\x02\u0914\u0917\x05\u01EA"+
		"\xF6\x02\u0915\u0917\x05\u01EC\xF7\x02\u0916\u0914\x03\x02\x02\x02\u0916"+
		"\u0915\x03\x02\x02\x02\u0917\u01E9\x03\x02\x02\x02\u0918\u0919\x05 \x11"+
		"\x02\u0919\u091C\x07f\x02\x02\u091A\u091D\x05 \x11\x02\u091B\u091D\x05"+
		"2\x1A\x02\u091C\u091A\x03\x02\x02\x02\u091C\u091B\x03\x02\x02\x02\u091D"+
		"\u01EB\x03\x02\x02\x02\u091E\u091F\x05 \x11\x02\u091F\u0920\x05\x1A\x0E"+
		"\x02\u0920\u0921\x05\x1C\x0F\x02\u0921\u01ED\x03\x02\x02\x02\u0922\u0923"+
		"\x07y\x02\x02\u0923\u0924\x05\u01F0\xF9\x02\u0924\u0925\x07x\x02\x02\u0925"+
		"\u01EF\x03\x02\x02\x02\u0926\u092B\x05\u01F2\xFA\x02\u0927\u0928\x07g"+
		"\x02\x02\u0928\u092A\x05\u01F2\xFA\x02\u0929\u0927\x03\x02\x02\x02\u092A"+
		"\u092D\x03\x02\x02\x02\u092B\u0929\x03\x02\x02\x02\u092B\u092C\x03\x02"+
		"\x02\x02\u092C\u01F1\x03\x02\x02\x02\u092D\u092B\x03\x02\x02\x02\u092E"+
		"\u092F\x05\x1C\x0F\x02\u092F\u01F3\x03\x02\x02\x02\u0126\u01FB\u0200\u0204"+
		"\u020B\u020F\u0230\u0234\u0242\u024D\u024F\u0254\u0257\u025D\u0261\u026B"+
		"\u026D\u0275\u0279\u027F\u0281\u028A\u0290\u0293\u0296\u029C\u02A4\u02AC"+
		"\u02B0\u02B6\u02BE\u02C3\u02C6\u02CF\u02D6\u02D9\u02DE\u02EC\u02EE\u02F4"+
		"\u0301\u030B\u0313\u0317\u0326\u032A\u0338\u033E\u0351\u0362\u0365\u036A"+
		"\u036E\u0371\u0374\u037A\u037E\u0385\u038C\u038E\u0391\u039B\u03A1\u03AA"+
		"\u03AC\u03BB\u03BD\u03C3\u03C6\u03CE\u03D6\u03DC\u03E2\u03E4\u03EC\u0401"+
		"\u0404\u040D\u0414\u041A\u041C\u042D\u042F\u0434\u043D\u0442\u0445\u0449"+
		"\u0450\u0454\u0461\u0464\u0467\u046C\u0471\u0475\u047B\u0488\u048F\u04A1"+
		"\u04A7\u04AC\u04B9\u04C0\u04CA\u04CE\u04DB\u04E7\u04EB\u04EF\u04F5\u0502"+
		"\u0507\u050A\u0510\u0516\u051A\u0521\u0526\u052A\u0537\u053F\u0550\u055B"+
		"\u0568\u0577\u0580\u0589\u058B\u059C\u059F\u05A3\u05A8\u05AC\u05B7\u05BC"+
		"\u05BF\u05C2\u05CC\u05D1\u05E1\u05E4\u05E6\u05E8\u05EB\u05EE\u05F8\u05FD"+
		"\u0601\u0604\u0607\u060D\u0610\u0614\u061F\u0624\u0629\u062C\u0631\u0634"+
		"\u063B\u0640\u0645\u0649\u064E\u0652\u0657\u065A\u065F\u066C\u0670\u0673"+
		"\u0676\u0679\u067F\u0683\u0686\u068A\u0692\u069B\u069F\u06A6\u06AA\u06B3"+
		"\u06B6\u06BA\u06BD\u06C2\u06C5\u06C8\u06CC\u06D3\u06D8\u06DB\u06DE\u06E8"+
		"\u06ED\u06F6\u06FA\u0703\u0708\u070B\u0715\u071A\u0723\u0726\u0729\u072E"+
		"\u0731\u0734\u073C\u0743\u0747\u074A\u074D\u0750\u0754\u0759\u075C\u075F"+
		"\u0767\u076E\u0772\u0775\u0778\u077D\u0780\u0788\u078F\u0793\u079B\u07A5"+
		"\u07A9\u07AD\u07B1\u07B4\u07B9\u07BE\u07C1\u07C6\u07C9\u07CC\u07D0\u07D4"+
		"\u07D7\u07DC\u07DF\u07E4\u07E9\u07EF\u07F2\u07F8\u07FE\u0805\u0809\u080E"+
		"\u0812\u0815\u0818\u081C\u0822\u0829\u0837\u0840\u0847\u084C\u085F\u0873"+
		"\u0878\u087E\u0885\u088B\u0892\u0897\u08B4\u08B9\u08BD\u08C3\u08C6\u08CB"+
		"\u08D4\u08DB\u08E0\u08E9\u08EE\u08F1\u08FE\u0905\u0907\u0911\u0916\u091C"+
		"\u092B";
	public static readonly _serializedATN: string = Utils.join(
		[
			SwiftParser._serializedATNSegment0,
			SwiftParser._serializedATNSegment1,
			SwiftParser._serializedATNSegment2,
			SwiftParser._serializedATNSegment3,
			SwiftParser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SwiftParser.__ATN) {
			SwiftParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SwiftParser._serializedATN));
		}

		return SwiftParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(SwiftParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_program; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProgram) return visitor.visitProgram(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.IDENTIFIER, 0); }
	public QUOTED_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.QUOTED_IDENTIFIER, 0); }
	public IMPLICIT_PARAMETER_NAME(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.IMPLICIT_PARAMETER_NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_identifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_identifierList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIdentifierList) return visitor.visitIdentifierList(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public nilLiteral(): NilLiteralContext | undefined {
		return this.tryGetRuleContext(0, NilLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_literal; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public FLOATING_POINT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.FLOATING_POINT_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_numericLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) return visitor.visitNumericLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_booleanLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) return visitor.visitBooleanLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class NilLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_nilLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitNilLiteral) return visitor.visitNilLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public BINARY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.BINARY_LITERAL, 0); }
	public OCTAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.OCTAL_LITERAL, 0); }
	public DECIMAL_DIGITS(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.DECIMAL_DIGITS, 0); }
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.DECIMAL_LITERAL, 0); }
	public HEXADECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.HEXADECIMAL_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_integerLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) return visitor.visitIntegerLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public STATIC_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
	public INTERPOLATED_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.INTERPOLATED_STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_stringLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) return visitor.visitStringLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class OperatorContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(SwiftParser.OPERATOR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_operator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOperator) return visitor.visitOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class PrefixOperatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_prefixOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrefixOperator) return visitor.visitPrefixOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class PostfixOperatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_postfixOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPostfixOperator) return visitor.visitPostfixOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class BinaryOperatorContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_binaryOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBinaryOperator) return visitor.visitBinaryOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_type; }
 
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class GeneralTypeContext extends TypeContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGeneralType) return visitor.visitGeneralType(this);
		else return visitor.visitChildren(this);
	}
}
export class ImplicitlyUnwrappedOptionalTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImplicitlyUnwrappedOptionalType) return visitor.visitImplicitlyUnwrappedOptionalType(this);
		else return visitor.visitChildren(this);
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArrayType) return visitor.visitArrayType(this);
		else return visitor.visitChildren(this);
	}
}
export class ProtocolCompositionTypeAlternativeContext extends TypeContext {
	public protocolCompositionType(): ProtocolCompositionTypeContext {
		return this.getRuleContext(0, ProtocolCompositionTypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolCompositionTypeAlternative) return visitor.visitProtocolCompositionTypeAlternative(this);
		else return visitor.visitChildren(this);
	}
}
export class AnyTypeContext extends TypeContext {
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAnyType) return visitor.visitAnyType(this);
		else return visitor.visitChildren(this);
	}
}
export class DictionaryTypeContext extends TypeContext {
	public _KEY: TypeContext;
	public _VALUE: TypeContext;
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDictionaryType) return visitor.visitDictionaryType(this);
		else return visitor.visitChildren(this);
	}
}
export class OptionalTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOptionalType) return visitor.visitOptionalType(this);
		else return visitor.visitChildren(this);
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) return visitor.visitParenthesizedType(this);
		else return visitor.visitChildren(this);
	}
}
export class MetatypeTypeContext extends TypeContext {
	public _KIND: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitMetatypeType) return visitor.visitMetatypeType(this);
		else return visitor.visitChildren(this);
	}
}
export class FunctionTypeContext extends TypeContext {
	public _KIND: Token;
	public functionTypeArgumentClause(): FunctionTypeArgumentClauseContext {
		return this.getRuleContext(0, FunctionTypeArgumentClauseContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionType) return visitor.visitFunctionType(this);
		else return visitor.visitChildren(this);
	}
}
export class SelfTypeContext extends TypeContext {
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelfType) return visitor.visitSelfType(this);
		else return visitor.visitChildren(this);
	}
}
export class TupleTypeAlternativeContext extends TypeContext {
	public tupleType(): TupleTypeContext {
		return this.getRuleContext(0, TupleTypeContext);
	}
	constructor(ctx: TypeContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeAlternative) return visitor.visitTupleTypeAlternative(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	public _INOUT: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typeAnnotation; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) return visitor.visitTypeAnnotation(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public genericArgumentClause(): GenericArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentClauseContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typeIdentifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypeIdentifier) return visitor.visitTypeIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typeName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypeName) return visitor.visitTypeName(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public tupleTypeElement(): TupleTypeElementContext[];
	public tupleTypeElement(i: number): TupleTypeElementContext;
	public tupleTypeElement(i?: number): TupleTypeElementContext | TupleTypeElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleTypeElementContext);
		} else {
			return this.getRuleContext(i, TupleTypeElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tupleType; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTupleType) return visitor.visitTupleType(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeElementContext extends ParserRuleContext {
	public elementName(): ElementNameContext | undefined {
		return this.tryGetRuleContext(0, ElementNameContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tupleTypeElement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeElement) return visitor.visitTupleTypeElement(this);
		else return visitor.visitChildren(this);
	}
}


export class ElementNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_elementName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitElementName) return visitor.visitElementName(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionTypeArgumentClauseContext extends ParserRuleContext {
	public _ELLIPSIS: OperatorContext;
	public functionTypeArgumentList(): FunctionTypeArgumentListContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeArgumentListContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionTypeArgumentClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionTypeArgumentClause) return visitor.visitFunctionTypeArgumentClause(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionTypeArgumentListContext extends ParserRuleContext {
	public functionTypeArgument(): FunctionTypeArgumentContext[];
	public functionTypeArgument(i: number): FunctionTypeArgumentContext;
	public functionTypeArgument(i?: number): FunctionTypeArgumentContext | FunctionTypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionTypeArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionTypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionTypeArgumentList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionTypeArgumentList) return visitor.visitFunctionTypeArgumentList(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionTypeArgumentContext extends ParserRuleContext {
	public _INOUT: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public argumentLabel(): ArgumentLabelContext | undefined {
		return this.tryGetRuleContext(0, ArgumentLabelContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionTypeArgument; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionTypeArgument) return visitor.visitFunctionTypeArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentLabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_argumentLabel; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArgumentLabel) return visitor.visitArgumentLabel(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolCompositionTypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolCompositionType; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolCompositionType) return visitor.visitProtocolCompositionType(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeInheritanceClauseContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typeInheritanceClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypeInheritanceClause) return visitor.visitTypeInheritanceClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public prefixExpression(): PrefixExpressionContext {
		return this.getRuleContext(0, PrefixExpressionContext);
	}
	public tryOperator(): TryOperatorContext | undefined {
		return this.tryGetRuleContext(0, TryOperatorContext);
	}
	public binaryExpression(): BinaryExpressionContext[];
	public binaryExpression(i: number): BinaryExpressionContext;
	public binaryExpression(i?: number): BinaryExpressionContext | BinaryExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BinaryExpressionContext);
		} else {
			return this.getRuleContext(i, BinaryExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_expression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_expressionList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}


export class PrefixExpressionContext extends ParserRuleContext {
	public inOutExpression(): InOutExpressionContext | undefined {
		return this.tryGetRuleContext(0, InOutExpressionContext);
	}
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public prefixOperator(): PrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_prefixExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrefixExpression) return visitor.visitPrefixExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class InOutExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_inOutExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInOutExpression) return visitor.visitInOutExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TryOperatorContext extends ParserRuleContext {
	public _MARK: Token;
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tryOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTryOperator) return visitor.visitTryOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class BinaryExpressionContext extends ParserRuleContext {
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	public prefixExpression(): PrefixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrefixExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public conditionalOperator(): ConditionalOperatorContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOperatorContext);
	}
	public tryOperator(): TryOperatorContext | undefined {
		return this.tryGetRuleContext(0, TryOperatorContext);
	}
	public typeCastingOperator(): TypeCastingOperatorContext | undefined {
		return this.tryGetRuleContext(0, TypeCastingOperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_binaryExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBinaryExpression) return visitor.visitBinaryExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_assignmentOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) return visitor.visitAssignmentOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionalOperatorContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_conditionalOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitConditionalOperator) return visitor.visitConditionalOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeCastingOperatorContext extends ParserRuleContext {
	public _MARK: Token;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typeCastingOperator; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypeCastingOperator) return visitor.visitTypeCastingOperator(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public genericArgumentClause(): GenericArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentClauseContext);
	}
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
	public selfExpression(): SelfExpressionContext | undefined {
		return this.tryGetRuleContext(0, SelfExpressionContext);
	}
	public superclassExpression(): SuperclassExpressionContext | undefined {
		return this.tryGetRuleContext(0, SuperclassExpressionContext);
	}
	public closureExpression(): ClosureExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClosureExpressionContext);
	}
	public parenthesizedExpression(): ParenthesizedExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
	}
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public implicitMemberExpression(): ImplicitMemberExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImplicitMemberExpressionContext);
	}
	public wildcardExpression(): WildcardExpressionContext | undefined {
		return this.tryGetRuleContext(0, WildcardExpressionContext);
	}
	public keyPathExpression(): KeyPathExpressionContext | undefined {
		return this.tryGetRuleContext(0, KeyPathExpressionContext);
	}
	public selectorExpression(): SelectorExpressionContext | undefined {
		return this.tryGetRuleContext(0, SelectorExpressionContext);
	}
	public keyPathStringExpression(): KeyPathStringExpressionContext | undefined {
		return this.tryGetRuleContext(0, KeyPathStringExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_primaryExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) return visitor.visitPrimaryExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralExpressionContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public dictionaryLiteral(): DictionaryLiteralContext | undefined {
		return this.tryGetRuleContext(0, DictionaryLiteralContext);
	}
	public playgroundLiteral(): PlaygroundLiteralContext | undefined {
		return this.tryGetRuleContext(0, PlaygroundLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_literalExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) return visitor.visitLiteralExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_arrayLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) return visitor.visitArrayLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class DictionaryLiteralContext extends ParserRuleContext {
	public _expression: ExpressionContext;
	public _KEYS: ExpressionContext[] = [];
	public _VALUES: ExpressionContext[] = [];
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_dictionaryLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDictionaryLiteral) return visitor.visitDictionaryLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class PlaygroundLiteralContext extends ParserRuleContext {
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		return this.getRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_playgroundLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPlaygroundLiteral) return visitor.visitPlaygroundLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class SelfExpressionContext extends ParserRuleContext {
	public selfMethodExpression(): SelfMethodExpressionContext | undefined {
		return this.tryGetRuleContext(0, SelfMethodExpressionContext);
	}
	public selfSubscriptExpression(): SelfSubscriptExpressionContext | undefined {
		return this.tryGetRuleContext(0, SelfSubscriptExpressionContext);
	}
	public selfInitializerExpression(): SelfInitializerExpressionContext | undefined {
		return this.tryGetRuleContext(0, SelfInitializerExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_selfExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelfExpression) return visitor.visitSelfExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SelfMethodExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_selfMethodExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelfMethodExpression) return visitor.visitSelfMethodExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SelfSubscriptExpressionContext extends ParserRuleContext {
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		return this.getRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_selfSubscriptExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelfSubscriptExpression) return visitor.visitSelfSubscriptExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SelfInitializerExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_selfInitializerExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelfInitializerExpression) return visitor.visitSelfInitializerExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SuperclassExpressionContext extends ParserRuleContext {
	public superclassMethodExpression(): SuperclassMethodExpressionContext | undefined {
		return this.tryGetRuleContext(0, SuperclassMethodExpressionContext);
	}
	public superclassSubscriptExpression(): SuperclassSubscriptExpressionContext | undefined {
		return this.tryGetRuleContext(0, SuperclassSubscriptExpressionContext);
	}
	public superclassInitializerExpression(): SuperclassInitializerExpressionContext | undefined {
		return this.tryGetRuleContext(0, SuperclassInitializerExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_superclassExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSuperclassExpression) return visitor.visitSuperclassExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SuperclassMethodExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_superclassMethodExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSuperclassMethodExpression) return visitor.visitSuperclassMethodExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SuperclassSubscriptExpressionContext extends ParserRuleContext {
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		return this.getRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_superclassSubscriptExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSuperclassSubscriptExpression) return visitor.visitSuperclassSubscriptExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class SuperclassInitializerExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_superclassInitializerExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSuperclassInitializerExpression) return visitor.visitSuperclassInitializerExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureExpressionContext extends ParserRuleContext {
	public closureSignature(): ClosureSignatureContext | undefined {
		return this.tryGetRuleContext(0, ClosureSignatureContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureExpression) return visitor.visitClosureExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureSignatureContext extends ParserRuleContext {
	public _THROWS: Token;
	public closureParameterClause(): ClosureParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, ClosureParameterClauseContext);
	}
	public captureList(): CaptureListContext | undefined {
		return this.tryGetRuleContext(0, CaptureListContext);
	}
	public functionResult(): FunctionResultContext | undefined {
		return this.tryGetRuleContext(0, FunctionResultContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureSignature; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureSignature) return visitor.visitClosureSignature(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureParameterClauseContext extends ParserRuleContext {
	public closureParameterList(): ClosureParameterListContext | undefined {
		return this.tryGetRuleContext(0, ClosureParameterListContext);
	}
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureParameterClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureParameterClause) return visitor.visitClosureParameterClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureParameterListContext extends ParserRuleContext {
	public closureParameter(): ClosureParameterContext[];
	public closureParameter(i: number): ClosureParameterContext;
	public closureParameter(i?: number): ClosureParameterContext | ClosureParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClosureParameterContext);
		} else {
			return this.getRuleContext(i, ClosureParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureParameterList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureParameterList) return visitor.visitClosureParameterList(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureParameterContext extends ParserRuleContext {
	public closureParameterName(): ClosureParameterNameContext {
		return this.getRuleContext(0, ClosureParameterNameContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureParameter; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureParameter) return visitor.visitClosureParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class ClosureParameterNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_closureParameterName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClosureParameterName) return visitor.visitClosureParameterName(this);
		else return visitor.visitChildren(this);
	}
}


export class CaptureListContext extends ParserRuleContext {
	public captureListItem(): CaptureListItemContext[];
	public captureListItem(i: number): CaptureListItemContext;
	public captureListItem(i?: number): CaptureListItemContext | CaptureListItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaptureListItemContext);
		} else {
			return this.getRuleContext(i, CaptureListItemContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_captureList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaptureList) return visitor.visitCaptureList(this);
		else return visitor.visitChildren(this);
	}
}


export class CaptureListItemContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public captureSpecifier(): CaptureSpecifierContext | undefined {
		return this.tryGetRuleContext(0, CaptureSpecifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_captureListItem; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaptureListItem) return visitor.visitCaptureListItem(this);
		else return visitor.visitChildren(this);
	}
}


export class CaptureSpecifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_captureSpecifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaptureSpecifier) return visitor.visitCaptureSpecifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ImplicitMemberExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_implicitMemberExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImplicitMemberExpression) return visitor.visitImplicitMemberExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_parenthesizedExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) return visitor.visitParenthesizedExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public tupleElement(): TupleElementContext[];
	public tupleElement(i: number): TupleElementContext;
	public tupleElement(i?: number): TupleElementContext | TupleElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleElementContext);
		} else {
			return this.getRuleContext(i, TupleElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tupleExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) return visitor.visitTupleExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tupleElement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTupleElement) return visitor.visitTupleElement(this);
		else return visitor.visitChildren(this);
	}
}


export class WildcardExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_wildcardExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWildcardExpression) return visitor.visitWildcardExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyPathExpressionContext extends ParserRuleContext {
	public keyPathComponent(): KeyPathComponentContext[];
	public keyPathComponent(i: number): KeyPathComponentContext;
	public keyPathComponent(i?: number): KeyPathComponentContext | KeyPathComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyPathComponentContext);
		} else {
			return this.getRuleContext(i, KeyPathComponentContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_keyPathExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitKeyPathExpression) return visitor.visitKeyPathExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyPathComponentContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public keyPathPostfix(): KeyPathPostfixContext[];
	public keyPathPostfix(i: number): KeyPathPostfixContext;
	public keyPathPostfix(i?: number): KeyPathPostfixContext | KeyPathPostfixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyPathPostfixContext);
		} else {
			return this.getRuleContext(i, KeyPathPostfixContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_keyPathComponent; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitKeyPathComponent) return visitor.visitKeyPathComponent(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyPathPostfixContext extends ParserRuleContext {
	public functionCallArgumentList(): FunctionCallArgumentListContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_keyPathPostfix; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitKeyPathPostfix) return visitor.visitKeyPathPostfix(this);
		else return visitor.visitChildren(this);
	}
}


export class SelectorExpressionContext extends ParserRuleContext {
	public functionCallArgument(): FunctionCallArgumentContext {
		return this.getRuleContext(0, FunctionCallArgumentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_selectorExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSelectorExpression) return visitor.visitSelectorExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class KeyPathStringExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_keyPathStringExpression; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitKeyPathStringExpression) return visitor.visitKeyPathStringExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_postfixExpression; }
 
	public copyFrom(ctx: PostfixExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class GeneralPostfixExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGeneralPostfixExpression) return visitor.visitGeneralPostfixExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class InitializerExpressionContext extends PostfixExpressionContext {
	public _INIT: Token;
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public argumentNames(): ArgumentNamesContext | undefined {
		return this.tryGetRuleContext(0, ArgumentNamesContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInitializerExpression) return visitor.visitInitializerExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class SubscriptExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		return this.getRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSubscriptExpression) return visitor.visitSubscriptExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class ForcedValueExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitForcedValueExpression) return visitor.visitForcedValueExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class FunctionCallExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public functionCallArgumentClause(): FunctionCallArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentClauseContext);
	}
	public trailingClosure(): TrailingClosureContext | undefined {
		return this.tryGetRuleContext(0, TrailingClosureContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) return visitor.visitFunctionCallExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class PostfixSelfExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPostfixSelfExpression) return visitor.visitPostfixSelfExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class PostfixOperatorExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public postfixOperator(): PostfixOperatorContext {
		return this.getRuleContext(0, PostfixOperatorContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPostfixOperatorExpression) return visitor.visitPostfixOperatorExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class ExplicitMemberExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public DECIMAL_DIGITS(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.DECIMAL_DIGITS, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public argumentNames(): ArgumentNamesContext | undefined {
		return this.tryGetRuleContext(0, ArgumentNamesContext);
	}
	public genericArgumentClause(): GenericArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericArgumentClauseContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExplicitMemberExpression) return visitor.visitExplicitMemberExpression(this);
		else return visitor.visitChildren(this);
	}
}
export class OptionalChainingExpressionContext extends PostfixExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: PostfixExpressionContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOptionalChainingExpression) return visitor.visitOptionalChainingExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallArgumentClauseContext extends ParserRuleContext {
	public functionCallArgumentList(): FunctionCallArgumentListContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionCallArgumentClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallArgumentClause) return visitor.visitFunctionCallArgumentClause(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallArgumentListContext extends ParserRuleContext {
	public functionCallArgument(): FunctionCallArgumentContext[];
	public functionCallArgument(i: number): FunctionCallArgumentContext;
	public functionCallArgument(i?: number): FunctionCallArgumentContext | FunctionCallArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallArgumentContext);
		} else {
			return this.getRuleContext(i, FunctionCallArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionCallArgumentList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallArgumentList) return visitor.visitFunctionCallArgumentList(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallArgumentContext extends ParserRuleContext {
	public _WILDCARD: Token;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionCallArgument; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallArgument) return visitor.visitFunctionCallArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailingClosureContext extends ParserRuleContext {
	public closureExpression(): ClosureExpressionContext {
		return this.getRuleContext(0, ClosureExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_trailingClosure; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTrailingClosure) return visitor.visitTrailingClosure(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentNamesContext extends ParserRuleContext {
	public argumentName(): ArgumentNameContext[];
	public argumentName(i: number): ArgumentNameContext;
	public argumentName(i?: number): ArgumentNameContext | ArgumentNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentNameContext);
		} else {
			return this.getRuleContext(i, ArgumentNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_argumentNames; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArgumentNames) return visitor.visitArgumentNames(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_argumentName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArgumentName) return visitor.visitArgumentName(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public branchStatement(): BranchStatementContext | undefined {
		return this.tryGetRuleContext(0, BranchStatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public controlTransferStatement(): ControlTransferStatementContext | undefined {
		return this.tryGetRuleContext(0, ControlTransferStatementContext);
	}
	public deferStatement(): DeferStatementContext | undefined {
		return this.tryGetRuleContext(0, DeferStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_statement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_statements; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStatements) return visitor.visitStatements(this);
		else return visitor.visitChildren(this);
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public forInStatement(): ForInStatementContext | undefined {
		return this.tryGetRuleContext(0, ForInStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public repeatWhileStatement(): RepeatWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, RepeatWhileStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_loopStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLoopStatement) return visitor.visitLoopStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ForInStatementContext extends ParserRuleContext {
	public _CASE: Token;
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_forInStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitForInStatement) return visitor.visitForInStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public conditionList(): ConditionListContext {
		return this.getRuleContext(0, ConditionListContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_whileStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) return visitor.visitWhileStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionListContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_conditionList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitConditionList) return visitor.visitConditionList(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public availabilityCondition(): AvailabilityConditionContext | undefined {
		return this.tryGetRuleContext(0, AvailabilityConditionContext);
	}
	public caseCondition(): CaseConditionContext | undefined {
		return this.tryGetRuleContext(0, CaseConditionContext);
	}
	public optionalBindingCondition(): OptionalBindingConditionContext | undefined {
		return this.tryGetRuleContext(0, OptionalBindingConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_condition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class CaseConditionContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_caseCondition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaseCondition) return visitor.visitCaseCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalBindingConditionContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext {
		return this.getRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_optionalBindingCondition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOptionalBindingCondition) return visitor.visitOptionalBindingCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class RepeatWhileStatementContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_repeatWhileStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRepeatWhileStatement) return visitor.visitRepeatWhileStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BranchStatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public guardStatement(): GuardStatementContext | undefined {
		return this.tryGetRuleContext(0, GuardStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_branchStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBranchStatement) return visitor.visitBranchStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class IfStatementContext extends ParserRuleContext {
	public conditionList(): ConditionListContext {
		return this.getRuleContext(0, ConditionListContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_ifStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) return visitor.visitIfStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_elseClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitElseClause) return visitor.visitElseClause(this);
		else return visitor.visitChildren(this);
	}
}


export class GuardStatementContext extends ParserRuleContext {
	public conditionList(): ConditionListContext {
		return this.getRuleContext(0, ConditionListContext);
	}
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_guardStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGuardStatement) return visitor.visitGuardStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchCase(): SwitchCaseContext[];
	public switchCase(i: number): SwitchCaseContext;
	public switchCase(i?: number): SwitchCaseContext | SwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchCaseContext);
		} else {
			return this.getRuleContext(i, SwitchCaseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_switchStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) return visitor.visitSwitchStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class SwitchCaseContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public caseLabel(): CaseLabelContext | undefined {
		return this.tryGetRuleContext(0, CaseLabelContext);
	}
	public defaultLabel(): DefaultLabelContext | undefined {
		return this.tryGetRuleContext(0, DefaultLabelContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_switchCase; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSwitchCase) return visitor.visitSwitchCase(this);
		else return visitor.visitChildren(this);
	}
}


export class CaseLabelContext extends ParserRuleContext {
	public caseItemList(): CaseItemListContext {
		return this.getRuleContext(0, CaseItemListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_caseLabel; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaseLabel) return visitor.visitCaseLabel(this);
		else return visitor.visitChildren(this);
	}
}


export class CaseItemListContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public caseItemList(): CaseItemListContext | undefined {
		return this.tryGetRuleContext(0, CaseItemListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_caseItemList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCaseItemList) return visitor.visitCaseItemList(this);
		else return visitor.visitChildren(this);
	}
}


export class DefaultLabelContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_defaultLabel; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDefaultLabel) return visitor.visitDefaultLabel(this);
		else return visitor.visitChildren(this);
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_whereClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) return visitor.visitWhereClause(this);
		else return visitor.visitChildren(this);
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public statementLabel(): StatementLabelContext {
		return this.getRuleContext(0, StatementLabelContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_labeledStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) return visitor.visitLabeledStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementLabelContext extends ParserRuleContext {
	public labelName(): LabelNameContext {
		return this.getRuleContext(0, LabelNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_statementLabel; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStatementLabel) return visitor.visitStatementLabel(this);
		else return visitor.visitChildren(this);
	}
}


export class LabelNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_labelName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLabelName) return visitor.visitLabelName(this);
		else return visitor.visitChildren(this);
	}
}


export class ControlTransferStatementContext extends ParserRuleContext {
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public fallthroughStatement(): FallthroughStatementContext | undefined {
		return this.tryGetRuleContext(0, FallthroughStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_controlTransferStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitControlTransferStatement) return visitor.visitControlTransferStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public labelName(): LabelNameContext | undefined {
		return this.tryGetRuleContext(0, LabelNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_breakStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) return visitor.visitBreakStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public labelName(): LabelNameContext | undefined {
		return this.tryGetRuleContext(0, LabelNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_continueStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) return visitor.visitContinueStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class FallthroughStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_fallthroughStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFallthroughStatement) return visitor.visitFallthroughStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_returnStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) return visitor.visitReturnStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_throwStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) return visitor.visitThrowStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DeferStatementContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_deferStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDeferStatement) return visitor.visitDeferStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class DoStatementContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_doStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) return visitor.visitDoStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_catchClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) return visitor.visitCatchClause(this);
		else return visitor.visitChildren(this);
	}
}


export class CompilerControlStatementContext extends ParserRuleContext {
	public conditionalCompilationBlock(): ConditionalCompilationBlockContext | undefined {
		return this.tryGetRuleContext(0, ConditionalCompilationBlockContext);
	}
	public lineControlStatement(): LineControlStatementContext | undefined {
		return this.tryGetRuleContext(0, LineControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_compilerControlStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCompilerControlStatement) return visitor.visitCompilerControlStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionalCompilationBlockContext extends ParserRuleContext {
	public ifDirectiveClause(): IfDirectiveClauseContext {
		return this.getRuleContext(0, IfDirectiveClauseContext);
	}
	public elseifDirectiveClause(): ElseifDirectiveClauseContext[];
	public elseifDirectiveClause(i: number): ElseifDirectiveClauseContext;
	public elseifDirectiveClause(i?: number): ElseifDirectiveClauseContext | ElseifDirectiveClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseifDirectiveClauseContext);
		} else {
			return this.getRuleContext(i, ElseifDirectiveClauseContext);
		}
	}
	public elseDirectiveClause(): ElseDirectiveClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseDirectiveClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_conditionalCompilationBlock; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitConditionalCompilationBlock) return visitor.visitConditionalCompilationBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class IfDirectiveClauseContext extends ParserRuleContext {
	public compilationCondition(): CompilationConditionContext {
		return this.getRuleContext(0, CompilationConditionContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_ifDirectiveClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIfDirectiveClause) return visitor.visitIfDirectiveClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseifDirectiveClauseContext extends ParserRuleContext {
	public compilationCondition(): CompilationConditionContext {
		return this.getRuleContext(0, CompilationConditionContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_elseifDirectiveClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitElseifDirectiveClause) return visitor.visitElseifDirectiveClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ElseDirectiveClauseContext extends ParserRuleContext {
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_elseDirectiveClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitElseDirectiveClause) return visitor.visitElseDirectiveClause(this);
		else return visitor.visitChildren(this);
	}
}


export class CompilationConditionContext extends ParserRuleContext {
	public platformCondition(): PlatformConditionContext | undefined {
		return this.tryGetRuleContext(0, PlatformConditionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public compilationCondition(): CompilationConditionContext[];
	public compilationCondition(i: number): CompilationConditionContext;
	public compilationCondition(i?: number): CompilationConditionContext | CompilationConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompilationConditionContext);
		} else {
			return this.getRuleContext(i, CompilationConditionContext);
		}
	}
	public binaryOperator(): BinaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinaryOperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_compilationCondition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCompilationCondition) return visitor.visitCompilationCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class PlatformConditionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	public operatingSystem(): OperatingSystemContext | undefined {
		return this.tryGetRuleContext(0, OperatingSystemContext);
	}
	public architecture(): ArchitectureContext | undefined {
		return this.tryGetRuleContext(0, ArchitectureContext);
	}
	public prefixOperator(): PrefixOperatorContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorContext);
	}
	public swiftVersion(): SwiftVersionContext | undefined {
		return this.tryGetRuleContext(0, SwiftVersionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_platformCondition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPlatformCondition) return visitor.visitPlatformCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class OperatingSystemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_operatingSystem; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOperatingSystem) return visitor.visitOperatingSystem(this);
		else return visitor.visitChildren(this);
	}
}


export class ArchitectureContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_architecture; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArchitecture) return visitor.visitArchitecture(this);
		else return visitor.visitChildren(this);
	}
}


export class SwiftVersionContext extends ParserRuleContext {
	public DECIMAL_DIGITS(): TerminalNode[];
	public DECIMAL_DIGITS(i: number): TerminalNode;
	public DECIMAL_DIGITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftParser.DECIMAL_DIGITS);
		} else {
			return this.getToken(SwiftParser.DECIMAL_DIGITS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_swiftVersion; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSwiftVersion) return visitor.visitSwiftVersion(this);
		else return visitor.visitChildren(this);
	}
}


export class LineControlStatementContext extends ParserRuleContext {
	public _file: Token;
	public _line: Token;
	public fileName(): FileNameContext | undefined {
		return this.tryGetRuleContext(0, FileNameContext);
	}
	public lineNumber(): LineNumberContext | undefined {
		return this.tryGetRuleContext(0, LineNumberContext);
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftParser.IDENTIFIER);
		} else {
			return this.getToken(SwiftParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_lineControlStatement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLineControlStatement) return visitor.visitLineControlStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class LineNumberContext extends ParserRuleContext {
	public DECIMAL_DIGITS(): TerminalNode { return this.getToken(SwiftParser.DECIMAL_DIGITS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_lineNumber; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLineNumber) return visitor.visitLineNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class FileNameContext extends ParserRuleContext {
	public STATIC_STRING_LITERAL(): TerminalNode { return this.getToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_fileName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFileName) return visitor.visitFileName(this);
		else return visitor.visitChildren(this);
	}
}


export class AvailabilityConditionContext extends ParserRuleContext {
	public availabilityArgument(): AvailabilityArgumentContext[];
	public availabilityArgument(i: number): AvailabilityArgumentContext;
	public availabilityArgument(i?: number): AvailabilityArgumentContext | AvailabilityArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AvailabilityArgumentContext);
		} else {
			return this.getRuleContext(i, AvailabilityArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_availabilityCondition; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAvailabilityCondition) return visitor.visitAvailabilityCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class AvailabilityArgumentContext extends ParserRuleContext {
	public platformName(): PlatformNameContext | undefined {
		return this.tryGetRuleContext(0, PlatformNameContext);
	}
	public platformVersion(): PlatformVersionContext | undefined {
		return this.tryGetRuleContext(0, PlatformVersionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_availabilityArgument; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAvailabilityArgument) return visitor.visitAvailabilityArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class PlatformNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_platformName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPlatformName) return visitor.visitPlatformName(this);
		else return visitor.visitChildren(this);
	}
}


export class PlatformVersionContext extends ParserRuleContext {
	public DECIMAL_DIGITS(): TerminalNode[];
	public DECIMAL_DIGITS(i: number): TerminalNode;
	public DECIMAL_DIGITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SwiftParser.DECIMAL_DIGITS);
		} else {
			return this.getToken(SwiftParser.DECIMAL_DIGITS, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_platformVersion; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPlatformVersion) return visitor.visitPlatformVersion(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationContext extends ParserRuleContext {
	public importDeclaration(): ImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ImportDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public typealiasDeclaration(): TypealiasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypealiasDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public structDeclaration(): StructDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StructDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public protocolDeclaration(): ProtocolDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolDeclarationContext);
	}
	public initializerDeclaration(): InitializerDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InitializerDeclarationContext);
	}
	public deinitializerDeclaration(): DeinitializerDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeinitializerDeclarationContext);
	}
	public extensionDeclaration(): ExtensionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ExtensionDeclarationContext);
	}
	public subscriptDeclaration(): SubscriptDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SubscriptDeclarationContext);
	}
	public operatorDeclaration(): OperatorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, OperatorDeclarationContext);
	}
	public precedenceGroupDeclaration(): PrecedenceGroupDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PrecedenceGroupDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_declaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) return visitor.visitDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class TopLevelDeclarationContext extends ParserRuleContext {
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_topLevelDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTopLevelDeclaration) return visitor.visitTopLevelDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class CodeBlockContext extends ParserRuleContext {
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_codeBlock; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitCodeBlock) return visitor.visitCodeBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public importPath(): ImportPathContext {
		return this.getRuleContext(0, ImportPathContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public importKind(): ImportKindContext | undefined {
		return this.tryGetRuleContext(0, ImportKindContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_importDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) return visitor.visitImportDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportKindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_importKind; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImportKind) return visitor.visitImportKind(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportPathContext extends ParserRuleContext {
	public importPathIdentifier(): ImportPathIdentifierContext[];
	public importPathIdentifier(i: number): ImportPathIdentifierContext;
	public importPathIdentifier(i?: number): ImportPathIdentifierContext | ImportPathIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportPathIdentifierContext);
		} else {
			return this.getRuleContext(i, ImportPathIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_importPath; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImportPath) return visitor.visitImportPath(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportPathIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_importPathIdentifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitImportPathIdentifier) return visitor.visitImportPathIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public patternInitializerList(): PatternInitializerListContext {
		return this.getRuleContext(0, PatternInitializerListContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declarationModifiers(): DeclarationModifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModifiersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_constantDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitConstantDeclaration) return visitor.visitConstantDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class PatternInitializerListContext extends ParserRuleContext {
	public patternInitializer(): PatternInitializerContext[];
	public patternInitializer(i: number): PatternInitializerContext;
	public patternInitializer(i?: number): PatternInitializerContext | PatternInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternInitializerContext);
		} else {
			return this.getRuleContext(i, PatternInitializerContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_patternInitializerList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPatternInitializerList) return visitor.visitPatternInitializerList(this);
		else return visitor.visitChildren(this);
	}
}


export class PatternInitializerContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_patternInitializer; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPatternInitializer) return visitor.visitPatternInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_initializer; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInitializer) return visitor.visitInitializer(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public variableDeclarationHead(): VariableDeclarationHeadContext {
		return this.getRuleContext(0, VariableDeclarationHeadContext);
	}
	public patternInitializerList(): PatternInitializerListContext | undefined {
		return this.tryGetRuleContext(0, PatternInitializerListContext);
	}
	public variableName(): VariableNameContext | undefined {
		return this.tryGetRuleContext(0, VariableNameContext);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	public willSetDidSetBlock(): WillSetDidSetBlockContext | undefined {
		return this.tryGetRuleContext(0, WillSetDidSetBlockContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public getterSetterBlock(): GetterSetterBlockContext | undefined {
		return this.tryGetRuleContext(0, GetterSetterBlockContext);
	}
	public getterSetterKeywordBlock(): GetterSetterKeywordBlockContext | undefined {
		return this.tryGetRuleContext(0, GetterSetterKeywordBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_variableDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) return visitor.visitVariableDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableDeclarationHeadContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declarationModifiers(): DeclarationModifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModifiersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_variableDeclarationHead; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationHead) return visitor.visitVariableDeclarationHead(this);
		else return visitor.visitChildren(this);
	}
}


export class VariableNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_variableName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitVariableName) return visitor.visitVariableName(this);
		else return visitor.visitChildren(this);
	}
}


export class GetterSetterBlockContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	public getterClause(): GetterClauseContext | undefined {
		return this.tryGetRuleContext(0, GetterClauseContext);
	}
	public setterClause(): SetterClauseContext | undefined {
		return this.tryGetRuleContext(0, SetterClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_getterSetterBlock; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGetterSetterBlock) return visitor.visitGetterSetterBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class GetterClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutationModifier(): MutationModifierContext | undefined {
		return this.tryGetRuleContext(0, MutationModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_getterClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGetterClause) return visitor.visitGetterClause(this);
		else return visitor.visitChildren(this);
	}
}


export class SetterClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutationModifier(): MutationModifierContext | undefined {
		return this.tryGetRuleContext(0, MutationModifierContext);
	}
	public setterName(): SetterNameContext | undefined {
		return this.tryGetRuleContext(0, SetterNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_setterClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSetterClause) return visitor.visitSetterClause(this);
		else return visitor.visitChildren(this);
	}
}


export class SetterNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_setterName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSetterName) return visitor.visitSetterName(this);
		else return visitor.visitChildren(this);
	}
}


export class GetterSetterKeywordBlockContext extends ParserRuleContext {
	public getterKeywordClause(): GetterKeywordClauseContext | undefined {
		return this.tryGetRuleContext(0, GetterKeywordClauseContext);
	}
	public setterKeywordClause(): SetterKeywordClauseContext | undefined {
		return this.tryGetRuleContext(0, SetterKeywordClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_getterSetterKeywordBlock; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGetterSetterKeywordBlock) return visitor.visitGetterSetterKeywordBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class GetterKeywordClauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutationModifier(): MutationModifierContext | undefined {
		return this.tryGetRuleContext(0, MutationModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_getterKeywordClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGetterKeywordClause) return visitor.visitGetterKeywordClause(this);
		else return visitor.visitChildren(this);
	}
}


export class SetterKeywordClauseContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public mutationModifier(): MutationModifierContext | undefined {
		return this.tryGetRuleContext(0, MutationModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_setterKeywordClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSetterKeywordClause) return visitor.visitSetterKeywordClause(this);
		else return visitor.visitChildren(this);
	}
}


export class WillSetDidSetBlockContext extends ParserRuleContext {
	public willSetClause(): WillSetClauseContext | undefined {
		return this.tryGetRuleContext(0, WillSetClauseContext);
	}
	public didSetClause(): DidSetClauseContext | undefined {
		return this.tryGetRuleContext(0, DidSetClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_willSetDidSetBlock; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWillSetDidSetBlock) return visitor.visitWillSetDidSetBlock(this);
		else return visitor.visitChildren(this);
	}
}


export class WillSetClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public setterName(): SetterNameContext | undefined {
		return this.tryGetRuleContext(0, SetterNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_willSetClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWillSetClause) return visitor.visitWillSetClause(this);
		else return visitor.visitChildren(this);
	}
}


export class DidSetClauseContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public setterName(): SetterNameContext | undefined {
		return this.tryGetRuleContext(0, SetterNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_didSetClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDidSetClause) return visitor.visitDidSetClause(this);
		else return visitor.visitChildren(this);
	}
}


export class TypealiasDeclarationContext extends ParserRuleContext {
	public typealiasName(): TypealiasNameContext {
		return this.getRuleContext(0, TypealiasNameContext);
	}
	public typealiasAssignment(): TypealiasAssignmentContext {
		return this.getRuleContext(0, TypealiasAssignmentContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typealiasDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypealiasDeclaration) return visitor.visitTypealiasDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class TypealiasNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typealiasName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypealiasName) return visitor.visitTypealiasName(this);
		else return visitor.visitChildren(this);
	}
}


export class TypealiasAssignmentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_typealiasAssignment; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTypealiasAssignment) return visitor.visitTypealiasAssignment(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public functionHead(): FunctionHeadContext {
		return this.getRuleContext(0, FunctionHeadContext);
	}
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public functionSignature(): FunctionSignatureContext {
		return this.getRuleContext(0, FunctionSignatureContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	public functionBody(): FunctionBodyContext | undefined {
		return this.tryGetRuleContext(0, FunctionBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) return visitor.visitFunctionDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionHeadContext extends ParserRuleContext {
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declarationModifiers(): DeclarationModifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModifiersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionHead; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionHead) return visitor.visitFunctionHead(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionName) return visitor.visitFunctionName(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionSignatureContext extends ParserRuleContext {
	public _KIND: Token;
	public parameterClause(): ParameterClauseContext {
		return this.getRuleContext(0, ParameterClauseContext);
	}
	public functionResult(): FunctionResultContext | undefined {
		return this.tryGetRuleContext(0, FunctionResultContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionSignature; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionSignature) return visitor.visitFunctionSignature(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionResultContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionResult; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionResult) return visitor.visitFunctionResult(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_functionBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) return visitor.visitFunctionBody(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterClauseContext extends ParserRuleContext {
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_parameterClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitParameterClause) return visitor.visitParameterClause(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_parameterList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitParameterList) return visitor.visitParameterList(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterContext extends ParserRuleContext {
	public _ELLIPSIS: OperatorContext;
	public localParameterName(): LocalParameterNameContext {
		return this.getRuleContext(0, LocalParameterNameContext);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getRuleContext(0, TypeAnnotationContext);
	}
	public externalParameterName(): ExternalParameterNameContext | undefined {
		return this.tryGetRuleContext(0, ExternalParameterNameContext);
	}
	public defaultArgumentClause(): DefaultArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, DefaultArgumentClauseContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_parameter; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitParameter) return visitor.visitParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class ExternalParameterNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_externalParameterName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExternalParameterName) return visitor.visitExternalParameterName(this);
		else return visitor.visitChildren(this);
	}
}


export class LocalParameterNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_localParameterName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitLocalParameterName) return visitor.visitLocalParameterName(this);
		else return visitor.visitChildren(this);
	}
}


export class DefaultArgumentClauseContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_defaultArgumentClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDefaultArgumentClause) return visitor.visitDefaultArgumentClause(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public unionStyleEnum(): UnionStyleEnumContext | undefined {
		return this.tryGetRuleContext(0, UnionStyleEnumContext);
	}
	public rawValueStyleEnum(): RawValueStyleEnumContext | undefined {
		return this.tryGetRuleContext(0, RawValueStyleEnumContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_enumDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) return visitor.visitEnumDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumContext extends ParserRuleContext {
	public _INDIRECT: Token;
	public enumName(): EnumNameContext {
		return this.getRuleContext(0, EnumNameContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	public unionStyleEnumMembers(): UnionStyleEnumMembersContext | undefined {
		return this.tryGetRuleContext(0, UnionStyleEnumMembersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnum; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnum) return visitor.visitUnionStyleEnum(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumMembersContext extends ParserRuleContext {
	public unionStyleEnumMember(): UnionStyleEnumMemberContext[];
	public unionStyleEnumMember(i: number): UnionStyleEnumMemberContext;
	public unionStyleEnumMember(i?: number): UnionStyleEnumMemberContext | UnionStyleEnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionStyleEnumMemberContext);
		} else {
			return this.getRuleContext(i, UnionStyleEnumMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnumMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnumMembers) return visitor.visitUnionStyleEnumMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumMemberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public unionStyleEnumCaseClause(): UnionStyleEnumCaseClauseContext | undefined {
		return this.tryGetRuleContext(0, UnionStyleEnumCaseClauseContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnumMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnumMember) return visitor.visitUnionStyleEnumMember(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumCaseClauseContext extends ParserRuleContext {
	public _INDIRECT: Token;
	public unionStyleEnumCaseList(): UnionStyleEnumCaseListContext {
		return this.getRuleContext(0, UnionStyleEnumCaseListContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnumCaseClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnumCaseClause) return visitor.visitUnionStyleEnumCaseClause(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumCaseListContext extends ParserRuleContext {
	public unionStyleEnumCase(): UnionStyleEnumCaseContext[];
	public unionStyleEnumCase(i: number): UnionStyleEnumCaseContext;
	public unionStyleEnumCase(i?: number): UnionStyleEnumCaseContext | UnionStyleEnumCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionStyleEnumCaseContext);
		} else {
			return this.getRuleContext(i, UnionStyleEnumCaseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnumCaseList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnumCaseList) return visitor.visitUnionStyleEnumCaseList(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionStyleEnumCaseContext extends ParserRuleContext {
	public enumCaseName(): EnumCaseNameContext {
		return this.getRuleContext(0, EnumCaseNameContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_unionStyleEnumCase; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitUnionStyleEnumCase) return visitor.visitUnionStyleEnumCase(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_enumName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitEnumName) return visitor.visitEnumName(this);
		else return visitor.visitChildren(this);
	}
}


export class EnumCaseNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_enumCaseName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitEnumCaseName) return visitor.visitEnumCaseName(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumContext extends ParserRuleContext {
	public enumName(): EnumNameContext {
		return this.getRuleContext(0, EnumNameContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext {
		return this.getRuleContext(0, TypeInheritanceClauseContext);
	}
	public rawValueStyleEnumMembers(): RawValueStyleEnumMembersContext {
		return this.getRuleContext(0, RawValueStyleEnumMembersContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnum; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnum) return visitor.visitRawValueStyleEnum(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumMembersContext extends ParserRuleContext {
	public rawValueStyleEnumMember(): RawValueStyleEnumMemberContext[];
	public rawValueStyleEnumMember(i: number): RawValueStyleEnumMemberContext;
	public rawValueStyleEnumMember(i?: number): RawValueStyleEnumMemberContext | RawValueStyleEnumMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawValueStyleEnumMemberContext);
		} else {
			return this.getRuleContext(i, RawValueStyleEnumMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnumMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnumMembers) return visitor.visitRawValueStyleEnumMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumMemberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public rawValueStyleEnumCaseClause(): RawValueStyleEnumCaseClauseContext | undefined {
		return this.tryGetRuleContext(0, RawValueStyleEnumCaseClauseContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnumMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnumMember) return visitor.visitRawValueStyleEnumMember(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumCaseClauseContext extends ParserRuleContext {
	public rawValueStyleEnumCaseList(): RawValueStyleEnumCaseListContext {
		return this.getRuleContext(0, RawValueStyleEnumCaseListContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnumCaseClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnumCaseClause) return visitor.visitRawValueStyleEnumCaseClause(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumCaseListContext extends ParserRuleContext {
	public rawValueStyleEnumCase(): RawValueStyleEnumCaseContext[];
	public rawValueStyleEnumCase(i: number): RawValueStyleEnumCaseContext;
	public rawValueStyleEnumCase(i?: number): RawValueStyleEnumCaseContext | RawValueStyleEnumCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RawValueStyleEnumCaseContext);
		} else {
			return this.getRuleContext(i, RawValueStyleEnumCaseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnumCaseList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnumCaseList) return visitor.visitRawValueStyleEnumCaseList(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueStyleEnumCaseContext extends ParserRuleContext {
	public enumCaseName(): EnumCaseNameContext {
		return this.getRuleContext(0, EnumCaseNameContext);
	}
	public rawValueAssignment(): RawValueAssignmentContext | undefined {
		return this.tryGetRuleContext(0, RawValueAssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueStyleEnumCase; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueStyleEnumCase) return visitor.visitRawValueStyleEnumCase(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueAssignmentContext extends ParserRuleContext {
	public rawValueLiteral(): RawValueLiteralContext {
		return this.getRuleContext(0, RawValueLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueAssignment; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueAssignment) return visitor.visitRawValueAssignment(this);
		else return visitor.visitChildren(this);
	}
}


export class RawValueLiteralContext extends ParserRuleContext {
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public STATIC_STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_rawValueLiteral; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRawValueLiteral) return visitor.visitRawValueLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class StructDeclarationContext extends ParserRuleContext {
	public structName(): StructNameContext {
		return this.getRuleContext(0, StructNameContext);
	}
	public structBody(): StructBodyContext {
		return this.getRuleContext(0, StructBodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_structDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStructDeclaration) return visitor.visitStructDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class StructNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_structName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStructName) return visitor.visitStructName(this);
		else return visitor.visitChildren(this);
	}
}


export class StructBodyContext extends ParserRuleContext {
	public structMembers(): StructMembersContext | undefined {
		return this.tryGetRuleContext(0, StructMembersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_structBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStructBody) return visitor.visitStructBody(this);
		else return visitor.visitChildren(this);
	}
}


export class StructMembersContext extends ParserRuleContext {
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_structMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStructMembers) return visitor.visitStructMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class StructMemberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_structMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitStructMember) return visitor.visitStructMember(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public _FINAL: Token;
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_classDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) return visitor.visitClassDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_className; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClassName) return visitor.visitClassName(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public classMembers(): ClassMembersContext | undefined {
		return this.tryGetRuleContext(0, ClassMembersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_classBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClassBody) return visitor.visitClassBody(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassMembersContext extends ParserRuleContext {
	public classMember(): ClassMemberContext[];
	public classMember(i: number): ClassMemberContext;
	public classMember(i?: number): ClassMemberContext | ClassMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberContext);
		} else {
			return this.getRuleContext(i, ClassMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_classMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClassMembers) return visitor.visitClassMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassMemberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_classMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitClassMember) return visitor.visitClassMember(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolDeclarationContext extends ParserRuleContext {
	public protocolName(): ProtocolNameContext {
		return this.getRuleContext(0, ProtocolNameContext);
	}
	public protocolBody(): ProtocolBodyContext {
		return this.getRuleContext(0, ProtocolBodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolDeclaration) return visitor.visitProtocolDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolName) return visitor.visitProtocolName(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolBodyContext extends ParserRuleContext {
	public protocolMembers(): ProtocolMembersContext | undefined {
		return this.tryGetRuleContext(0, ProtocolMembersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolBody) return visitor.visitProtocolBody(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolMembersContext extends ParserRuleContext {
	public protocolMember(): ProtocolMemberContext[];
	public protocolMember(i: number): ProtocolMemberContext;
	public protocolMember(i?: number): ProtocolMemberContext | ProtocolMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProtocolMemberContext);
		} else {
			return this.getRuleContext(i, ProtocolMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolMembers) return visitor.visitProtocolMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolMemberContext extends ParserRuleContext {
	public protocolMemberDeclaration(): ProtocolMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolMemberDeclarationContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolMember) return visitor.visitProtocolMember(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolMemberDeclarationContext extends ParserRuleContext {
	public protocolPropertyDeclaration(): ProtocolPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolPropertyDeclarationContext);
	}
	public protocolMethodDeclaration(): ProtocolMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolMethodDeclarationContext);
	}
	public protocolInitializerDeclaration(): ProtocolInitializerDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolInitializerDeclarationContext);
	}
	public protocolSubscriptDeclaration(): ProtocolSubscriptDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolSubscriptDeclarationContext);
	}
	public protocolAssociatedTypeDeclaration(): ProtocolAssociatedTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolAssociatedTypeDeclarationContext);
	}
	public typealiasDeclaration(): TypealiasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypealiasDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolMemberDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolMemberDeclaration) return visitor.visitProtocolMemberDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolPropertyDeclarationContext extends ParserRuleContext {
	public variableDeclarationHead(): VariableDeclarationHeadContext {
		return this.getRuleContext(0, VariableDeclarationHeadContext);
	}
	public variableName(): VariableNameContext {
		return this.getRuleContext(0, VariableNameContext);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getRuleContext(0, TypeAnnotationContext);
	}
	public getterSetterKeywordBlock(): GetterSetterKeywordBlockContext {
		return this.getRuleContext(0, GetterSetterKeywordBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolPropertyDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolPropertyDeclaration) return visitor.visitProtocolPropertyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolMethodDeclarationContext extends ParserRuleContext {
	public functionHead(): FunctionHeadContext {
		return this.getRuleContext(0, FunctionHeadContext);
	}
	public functionName(): FunctionNameContext {
		return this.getRuleContext(0, FunctionNameContext);
	}
	public functionSignature(): FunctionSignatureContext {
		return this.getRuleContext(0, FunctionSignatureContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolMethodDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolMethodDeclaration) return visitor.visitProtocolMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolInitializerDeclarationContext extends ParserRuleContext {
	public _KIND: Token;
	public initializerHead(): InitializerHeadContext {
		return this.getRuleContext(0, InitializerHeadContext);
	}
	public parameterClause(): ParameterClauseContext {
		return this.getRuleContext(0, ParameterClauseContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolInitializerDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolInitializerDeclaration) return visitor.visitProtocolInitializerDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolSubscriptDeclarationContext extends ParserRuleContext {
	public subscriptHead(): SubscriptHeadContext {
		return this.getRuleContext(0, SubscriptHeadContext);
	}
	public subscriptResult(): SubscriptResultContext {
		return this.getRuleContext(0, SubscriptResultContext);
	}
	public getterSetterKeywordBlock(): GetterSetterKeywordBlockContext {
		return this.getRuleContext(0, GetterSetterKeywordBlockContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolSubscriptDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolSubscriptDeclaration) return visitor.visitProtocolSubscriptDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ProtocolAssociatedTypeDeclarationContext extends ParserRuleContext {
	public typealiasName(): TypealiasNameContext {
		return this.getRuleContext(0, TypealiasNameContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public typealiasAssignment(): TypealiasAssignmentContext | undefined {
		return this.tryGetRuleContext(0, TypealiasAssignmentContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolAssociatedTypeDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolAssociatedTypeDeclaration) return visitor.visitProtocolAssociatedTypeDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerDeclarationContext extends ParserRuleContext {
	public _KIND: Token;
	public initializerHead(): InitializerHeadContext {
		return this.getRuleContext(0, InitializerHeadContext);
	}
	public parameterClause(): ParameterClauseContext {
		return this.getRuleContext(0, ParameterClauseContext);
	}
	public initializerBody(): InitializerBodyContext {
		return this.getRuleContext(0, InitializerBodyContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_initializerDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInitializerDeclaration) return visitor.visitInitializerDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerHeadContext extends ParserRuleContext {
	public _MARK: Token;
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declarationModifiers(): DeclarationModifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModifiersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_initializerHead; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInitializerHead) return visitor.visitInitializerHead(this);
		else return visitor.visitChildren(this);
	}
}


export class InitializerBodyContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_initializerBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInitializerBody) return visitor.visitInitializerBody(this);
		else return visitor.visitChildren(this);
	}
}


export class DeinitializerDeclarationContext extends ParserRuleContext {
	public codeBlock(): CodeBlockContext {
		return this.getRuleContext(0, CodeBlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_deinitializerDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDeinitializerDeclaration) return visitor.visitDeinitializerDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ExtensionDeclarationContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public extensionBody(): ExtensionBodyContext {
		return this.getRuleContext(0, ExtensionBodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public typeInheritanceClause(): TypeInheritanceClauseContext | undefined {
		return this.tryGetRuleContext(0, TypeInheritanceClauseContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_extensionDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExtensionDeclaration) return visitor.visitExtensionDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ExtensionBodyContext extends ParserRuleContext {
	public extensionMembers(): ExtensionMembersContext | undefined {
		return this.tryGetRuleContext(0, ExtensionMembersContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_extensionBody; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExtensionBody) return visitor.visitExtensionBody(this);
		else return visitor.visitChildren(this);
	}
}


export class ExtensionMembersContext extends ParserRuleContext {
	public extensionMember(): ExtensionMemberContext[];
	public extensionMember(i: number): ExtensionMemberContext;
	public extensionMember(i?: number): ExtensionMemberContext | ExtensionMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionMemberContext);
		} else {
			return this.getRuleContext(i, ExtensionMemberContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_extensionMembers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExtensionMembers) return visitor.visitExtensionMembers(this);
		else return visitor.visitChildren(this);
	}
}


export class ExtensionMemberContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public compilerControlStatement(): CompilerControlStatementContext | undefined {
		return this.tryGetRuleContext(0, CompilerControlStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_extensionMember; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExtensionMember) return visitor.visitExtensionMember(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptDeclarationContext extends ParserRuleContext {
	public subscriptHead(): SubscriptHeadContext {
		return this.getRuleContext(0, SubscriptHeadContext);
	}
	public subscriptResult(): SubscriptResultContext {
		return this.getRuleContext(0, SubscriptResultContext);
	}
	public getterSetterBlock(): GetterSetterBlockContext | undefined {
		return this.tryGetRuleContext(0, GetterSetterBlockContext);
	}
	public getterSetterKeywordBlock(): GetterSetterKeywordBlockContext | undefined {
		return this.tryGetRuleContext(0, GetterSetterKeywordBlockContext);
	}
	public genericWhereClause(): GenericWhereClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericWhereClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_subscriptDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSubscriptDeclaration) return visitor.visitSubscriptDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptHeadContext extends ParserRuleContext {
	public parameterClause(): ParameterClauseContext {
		return this.getRuleContext(0, ParameterClauseContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public declarationModifiers(): DeclarationModifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationModifiersContext);
	}
	public genericParameterClause(): GenericParameterClauseContext | undefined {
		return this.tryGetRuleContext(0, GenericParameterClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_subscriptHead; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSubscriptHead) return visitor.visitSubscriptHead(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptResultContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_subscriptResult; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSubscriptResult) return visitor.visitSubscriptResult(this);
		else return visitor.visitChildren(this);
	}
}


export class OperatorDeclarationContext extends ParserRuleContext {
	public prefixOperatorDeclaration(): PrefixOperatorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PrefixOperatorDeclarationContext);
	}
	public postfixOperatorDeclaration(): PostfixOperatorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PostfixOperatorDeclarationContext);
	}
	public infixOperatorDeclaration(): InfixOperatorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InfixOperatorDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_operatorDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOperatorDeclaration) return visitor.visitOperatorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class PrefixOperatorDeclarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_prefixOperatorDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrefixOperatorDeclaration) return visitor.visitPrefixOperatorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class PostfixOperatorDeclarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_postfixOperatorDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPostfixOperatorDeclaration) return visitor.visitPostfixOperatorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class InfixOperatorDeclarationContext extends ParserRuleContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public infixOperatorGroup(): InfixOperatorGroupContext | undefined {
		return this.tryGetRuleContext(0, InfixOperatorGroupContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_infixOperatorDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInfixOperatorDeclaration) return visitor.visitInfixOperatorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class InfixOperatorGroupContext extends ParserRuleContext {
	public precedenceGroupName(): PrecedenceGroupNameContext {
		return this.getRuleContext(0, PrecedenceGroupNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_infixOperatorGroup; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitInfixOperatorGroup) return visitor.visitInfixOperatorGroup(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupDeclarationContext extends ParserRuleContext {
	public precedenceGroupName(): PrecedenceGroupNameContext {
		return this.getRuleContext(0, PrecedenceGroupNameContext);
	}
	public precedenceGroupAttributes(): PrecedenceGroupAttributesContext | undefined {
		return this.tryGetRuleContext(0, PrecedenceGroupAttributesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupDeclaration; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupDeclaration) return visitor.visitPrecedenceGroupDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupAttributesContext extends ParserRuleContext {
	public precedenceGroupAttribute(): PrecedenceGroupAttributeContext[];
	public precedenceGroupAttribute(i: number): PrecedenceGroupAttributeContext;
	public precedenceGroupAttribute(i?: number): PrecedenceGroupAttributeContext | PrecedenceGroupAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrecedenceGroupAttributeContext);
		} else {
			return this.getRuleContext(i, PrecedenceGroupAttributeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupAttributes; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupAttributes) return visitor.visitPrecedenceGroupAttributes(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupAttributeContext extends ParserRuleContext {
	public precedenceGroupRelation(): PrecedenceGroupRelationContext | undefined {
		return this.tryGetRuleContext(0, PrecedenceGroupRelationContext);
	}
	public precedenceGroupAssignment(): PrecedenceGroupAssignmentContext | undefined {
		return this.tryGetRuleContext(0, PrecedenceGroupAssignmentContext);
	}
	public precedenceGroupAssociativity(): PrecedenceGroupAssociativityContext | undefined {
		return this.tryGetRuleContext(0, PrecedenceGroupAssociativityContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupAttribute; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupAttribute) return visitor.visitPrecedenceGroupAttribute(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupRelationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	public precedenceGroupNames(): PrecedenceGroupNamesContext {
		return this.getRuleContext(0, PrecedenceGroupNamesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupRelation; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupRelation) return visitor.visitPrecedenceGroupRelation(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupAssignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SwiftParser.IDENTIFIER, 0); }
	public booleanLiteral(): BooleanLiteralContext {
		return this.getRuleContext(0, BooleanLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupAssignment; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupAssignment) return visitor.visitPrecedenceGroupAssignment(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupAssociativityContext extends ParserRuleContext {
	public _VALUE: Token;
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupAssociativity; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupAssociativity) return visitor.visitPrecedenceGroupAssociativity(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupNamesContext extends ParserRuleContext {
	public precedenceGroupName(): PrecedenceGroupNameContext[];
	public precedenceGroupName(i: number): PrecedenceGroupNameContext;
	public precedenceGroupName(i?: number): PrecedenceGroupNameContext | PrecedenceGroupNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrecedenceGroupNameContext);
		} else {
			return this.getRuleContext(i, PrecedenceGroupNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupNames; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupNames) return visitor.visitPrecedenceGroupNames(this);
		else return visitor.visitChildren(this);
	}
}


export class PrecedenceGroupNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_precedenceGroupName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitPrecedenceGroupName) return visitor.visitPrecedenceGroupName(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationModifierContext extends ParserRuleContext {
	public captureSpecifier(): CaptureSpecifierContext | undefined {
		return this.tryGetRuleContext(0, CaptureSpecifierContext);
	}
	public accessLevelModifier(): AccessLevelModifierContext | undefined {
		return this.tryGetRuleContext(0, AccessLevelModifierContext);
	}
	public mutationModifier(): MutationModifierContext | undefined {
		return this.tryGetRuleContext(0, MutationModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_declarationModifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDeclarationModifier) return visitor.visitDeclarationModifier(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationModifiersContext extends ParserRuleContext {
	public declarationModifier(): DeclarationModifierContext[];
	public declarationModifier(i: number): DeclarationModifierContext;
	public declarationModifier(i?: number): DeclarationModifierContext | DeclarationModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationModifierContext);
		} else {
			return this.getRuleContext(i, DeclarationModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_declarationModifiers; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitDeclarationModifiers) return visitor.visitDeclarationModifiers(this);
		else return visitor.visitChildren(this);
	}
}


export class AccessLevelModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_accessLevelModifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAccessLevelModifier) return visitor.visitAccessLevelModifier(this);
		else return visitor.visitChildren(this);
	}
}


export class MutationModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_mutationModifier; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitMutationModifier) return visitor.visitMutationModifier(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributeContext extends ParserRuleContext {
	public attributeName(): AttributeNameContext {
		return this.getRuleContext(0, AttributeNameContext);
	}
	public attributeArgumentClause(): AttributeArgumentClauseContext | undefined {
		return this.tryGetRuleContext(0, AttributeArgumentClauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_attribute; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAttribute) return visitor.visitAttribute(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_attributeName; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAttributeName) return visitor.visitAttributeName(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributeArgumentClauseContext extends ParserRuleContext {
	public balancedTokens(): BalancedTokensContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokensContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_attributeArgumentClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAttributeArgumentClause) return visitor.visitAttributeArgumentClause(this);
		else return visitor.visitChildren(this);
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_attributes; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAttributes) return visitor.visitAttributes(this);
		else return visitor.visitChildren(this);
	}
}


export class BalancedTokensContext extends ParserRuleContext {
	public balancedToken(): BalancedTokenContext[];
	public balancedToken(i: number): BalancedTokenContext;
	public balancedToken(i?: number): BalancedTokenContext | BalancedTokenContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BalancedTokenContext);
		} else {
			return this.getRuleContext(i, BalancedTokenContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_balancedTokens; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBalancedTokens) return visitor.visitBalancedTokens(this);
		else return visitor.visitChildren(this);
	}
}


export class BalancedTokenContext extends ParserRuleContext {
	public balancedTokens(): BalancedTokensContext | undefined {
		return this.tryGetRuleContext(0, BalancedTokensContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_balancedToken; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitBalancedToken) return visitor.visitBalancedToken(this);
		else return visitor.visitChildren(this);
	}
}


export class PatternContext extends ParserRuleContext {
	constructor();
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent?: ParserRuleContext, invokingState?: number) {
		if (parent !== undefined && invokingState !== undefined) {
			super(parent, invokingState);
		} else {
			super();
		}
	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_pattern; }
 
	public copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class WildcardPatternContext extends PatternContext {
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitWildcardPattern) return visitor.visitWildcardPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class ValueBindingPatternContext extends PatternContext {
	public _KIND: Token;
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitValueBindingPattern) return visitor.visitValueBindingPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class IdentifierPatternContext extends PatternContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPattern) return visitor.visitIdentifierPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class TuplePatternAlternativeContext extends PatternContext {
	public tuplePattern(): TuplePatternContext {
		return this.getRuleContext(0, TuplePatternContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTuplePatternAlternative) return visitor.visitTuplePatternAlternative(this);
		else return visitor.visitChildren(this);
	}
}
export class EnumCasePatternContext extends PatternContext {
	public enumCaseName(): EnumCaseNameContext {
		return this.getRuleContext(0, EnumCaseNameContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public tuplePattern(): TuplePatternContext | undefined {
		return this.tryGetRuleContext(0, TuplePatternContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitEnumCasePattern) return visitor.visitEnumCasePattern(this);
		else return visitor.visitChildren(this);
	}
}
export class AsPatternContext extends PatternContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitAsPattern) return visitor.visitAsPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class ExpressionPatternContext extends PatternContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitExpressionPattern) return visitor.visitExpressionPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class IsPatternContext extends PatternContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitIsPattern) return visitor.visitIsPattern(this);
		else return visitor.visitChildren(this);
	}
}
export class OptionalPatternContext extends PatternContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PatternContext) { super(); this.copyFrom(ctx); }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitOptionalPattern) return visitor.visitOptionalPattern(this);
		else return visitor.visitChildren(this);
	}
}


export class TuplePatternContext extends ParserRuleContext {
	public tuplePatternElementList(): TuplePatternElementListContext | undefined {
		return this.tryGetRuleContext(0, TuplePatternElementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tuplePattern; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTuplePattern) return visitor.visitTuplePattern(this);
		else return visitor.visitChildren(this);
	}
}


export class TuplePatternElementListContext extends ParserRuleContext {
	public tuplePatternElement(): TuplePatternElementContext[];
	public tuplePatternElement(i: number): TuplePatternElementContext;
	public tuplePatternElement(i?: number): TuplePatternElementContext | TuplePatternElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TuplePatternElementContext);
		} else {
			return this.getRuleContext(i, TuplePatternElementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tuplePatternElementList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTuplePatternElementList) return visitor.visitTuplePatternElementList(this);
		else return visitor.visitChildren(this);
	}
}


export class TuplePatternElementContext extends ParserRuleContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_tuplePatternElement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitTuplePatternElement) return visitor.visitTuplePatternElement(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericParameterClauseContext extends ParserRuleContext {
	public genericParameterList(): GenericParameterListContext {
		return this.getRuleContext(0, GenericParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericParameterClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericParameterClause) return visitor.visitGenericParameterClause(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericParameterListContext extends ParserRuleContext {
	public genericParameter(): GenericParameterContext[];
	public genericParameter(i: number): GenericParameterContext;
	public genericParameter(i?: number): GenericParameterContext | GenericParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericParameterContext);
		} else {
			return this.getRuleContext(i, GenericParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericParameterList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericParameterList) return visitor.visitGenericParameterList(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public protocolCompositionType(): ProtocolCompositionTypeContext | undefined {
		return this.tryGetRuleContext(0, ProtocolCompositionTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericParameter; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericParameter) return visitor.visitGenericParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericWhereClauseContext extends ParserRuleContext {
	public requirementList(): RequirementListContext {
		return this.getRuleContext(0, RequirementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericWhereClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericWhereClause) return visitor.visitGenericWhereClause(this);
		else return visitor.visitChildren(this);
	}
}


export class RequirementListContext extends ParserRuleContext {
	public requirement(): RequirementContext[];
	public requirement(i: number): RequirementContext;
	public requirement(i?: number): RequirementContext | RequirementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequirementContext);
		} else {
			return this.getRuleContext(i, RequirementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_requirementList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRequirementList) return visitor.visitRequirementList(this);
		else return visitor.visitChildren(this);
	}
}


export class RequirementContext extends ParserRuleContext {
	public conformanceRequirement(): ConformanceRequirementContext | undefined {
		return this.tryGetRuleContext(0, ConformanceRequirementContext);
	}
	public sameTypeRequirement(): SameTypeRequirementContext | undefined {
		return this.tryGetRuleContext(0, SameTypeRequirementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_requirement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitRequirement) return visitor.visitRequirement(this);
		else return visitor.visitChildren(this);
	}
}


export class ConformanceRequirementContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext[];
	public typeIdentifier(i: number): TypeIdentifierContext;
	public typeIdentifier(i?: number): TypeIdentifierContext | TypeIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeIdentifierContext);
		}
	}
	public protocolCompositionType(): ProtocolCompositionTypeContext | undefined {
		return this.tryGetRuleContext(0, ProtocolCompositionTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_conformanceRequirement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitConformanceRequirement) return visitor.visitConformanceRequirement(this);
		else return visitor.visitChildren(this);
	}
}


export class SameTypeRequirementContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext {
		return this.getRuleContext(0, TypeIdentifierContext);
	}
	public binaryOperator(): BinaryOperatorContext {
		return this.getRuleContext(0, BinaryOperatorContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_sameTypeRequirement; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitSameTypeRequirement) return visitor.visitSameTypeRequirement(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericArgumentClauseContext extends ParserRuleContext {
	public genericArgumentList(): GenericArgumentListContext {
		return this.getRuleContext(0, GenericArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericArgumentClause; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericArgumentClause) return visitor.visitGenericArgumentClause(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericArgumentListContext extends ParserRuleContext {
	public genericArgument(): GenericArgumentContext[];
	public genericArgument(i: number): GenericArgumentContext;
	public genericArgument(i?: number): GenericArgumentContext | GenericArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GenericArgumentContext);
		} else {
			return this.getRuleContext(i, GenericArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericArgumentList; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericArgumentList) return visitor.visitGenericArgumentList(this);
		else return visitor.visitChildren(this);
	}
}


export class GenericArgumentContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SwiftParser.RULE_genericArgument; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitGenericArgument) return visitor.visitGenericArgument(this);
		else return visitor.visitChildren(this);
	}
}


