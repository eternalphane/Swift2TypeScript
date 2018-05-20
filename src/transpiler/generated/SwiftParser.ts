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
	public static readonly RULE_statement = 73;
	public static readonly RULE_statements = 74;
	public static readonly RULE_loopStatement = 75;
	public static readonly RULE_forInStatement = 76;
	public static readonly RULE_whileStatement = 77;
	public static readonly RULE_conditionList = 78;
	public static readonly RULE_condition = 79;
	public static readonly RULE_caseCondition = 80;
	public static readonly RULE_optionalBindingCondition = 81;
	public static readonly RULE_repeatWhileStatement = 82;
	public static readonly RULE_branchStatement = 83;
	public static readonly RULE_ifStatement = 84;
	public static readonly RULE_elseClause = 85;
	public static readonly RULE_guardStatement = 86;
	public static readonly RULE_switchStatement = 87;
	public static readonly RULE_switchCase = 88;
	public static readonly RULE_caseLabel = 89;
	public static readonly RULE_caseItemList = 90;
	public static readonly RULE_defaultLabel = 91;
	public static readonly RULE_whereClause = 92;
	public static readonly RULE_labeledStatement = 93;
	public static readonly RULE_statementLabel = 94;
	public static readonly RULE_labelName = 95;
	public static readonly RULE_controlTransferStatement = 96;
	public static readonly RULE_breakStatement = 97;
	public static readonly RULE_continueStatement = 98;
	public static readonly RULE_fallthroughStatement = 99;
	public static readonly RULE_returnStatement = 100;
	public static readonly RULE_throwStatement = 101;
	public static readonly RULE_deferStatement = 102;
	public static readonly RULE_doStatement = 103;
	public static readonly RULE_catchClause = 104;
	public static readonly RULE_compilerControlStatement = 105;
	public static readonly RULE_conditionalCompilationBlock = 106;
	public static readonly RULE_ifDirectiveClause = 107;
	public static readonly RULE_elseifDirectiveClause = 108;
	public static readonly RULE_elseDirectiveClause = 109;
	public static readonly RULE_compilationCondition = 110;
	public static readonly RULE_platformCondition = 111;
	public static readonly RULE_operatingSystem = 112;
	public static readonly RULE_architecture = 113;
	public static readonly RULE_swiftVersion = 114;
	public static readonly RULE_lineControlStatement = 115;
	public static readonly RULE_lineNumber = 116;
	public static readonly RULE_fileName = 117;
	public static readonly RULE_availabilityCondition = 118;
	public static readonly RULE_availabilityArgument = 119;
	public static readonly RULE_platformName = 120;
	public static readonly RULE_platformVersion = 121;
	public static readonly RULE_declaration = 122;
	public static readonly RULE_topLevelDeclaration = 123;
	public static readonly RULE_codeBlock = 124;
	public static readonly RULE_importDeclaration = 125;
	public static readonly RULE_importKind = 126;
	public static readonly RULE_importPath = 127;
	public static readonly RULE_importPathIdentifier = 128;
	public static readonly RULE_constantDeclaration = 129;
	public static readonly RULE_patternInitializerList = 130;
	public static readonly RULE_patternInitializer = 131;
	public static readonly RULE_initializer = 132;
	public static readonly RULE_variableDeclaration = 133;
	public static readonly RULE_variableDeclarationHead = 134;
	public static readonly RULE_variableName = 135;
	public static readonly RULE_getterSetterBlock = 136;
	public static readonly RULE_getterClause = 137;
	public static readonly RULE_setterClause = 138;
	public static readonly RULE_setterName = 139;
	public static readonly RULE_getterSetterKeywordBlock = 140;
	public static readonly RULE_getterKeywordClause = 141;
	public static readonly RULE_setterKeywordClause = 142;
	public static readonly RULE_willSetDidSetBlock = 143;
	public static readonly RULE_willSetClause = 144;
	public static readonly RULE_didSetClause = 145;
	public static readonly RULE_typealiasDeclaration = 146;
	public static readonly RULE_typealiasName = 147;
	public static readonly RULE_typealiasAssignment = 148;
	public static readonly RULE_functionDeclaration = 149;
	public static readonly RULE_functionHead = 150;
	public static readonly RULE_functionName = 151;
	public static readonly RULE_functionSignature = 152;
	public static readonly RULE_functionResult = 153;
	public static readonly RULE_functionBody = 154;
	public static readonly RULE_parameterClause = 155;
	public static readonly RULE_parameterList = 156;
	public static readonly RULE_parameter = 157;
	public static readonly RULE_externalParameterName = 158;
	public static readonly RULE_localParameterName = 159;
	public static readonly RULE_defaultArgumentClause = 160;
	public static readonly RULE_enumDeclaration = 161;
	public static readonly RULE_unionStyleEnum = 162;
	public static readonly RULE_unionStyleEnumMembers = 163;
	public static readonly RULE_unionStyleEnumMember = 164;
	public static readonly RULE_unionStyleEnumCaseClause = 165;
	public static readonly RULE_unionStyleEnumCaseList = 166;
	public static readonly RULE_unionStyleEnumCase = 167;
	public static readonly RULE_enumName = 168;
	public static readonly RULE_enumCaseName = 169;
	public static readonly RULE_rawValueStyleEnum = 170;
	public static readonly RULE_rawValueStyleEnumMembers = 171;
	public static readonly RULE_rawValueStyleEnumMember = 172;
	public static readonly RULE_rawValueStyleEnumCaseClause = 173;
	public static readonly RULE_rawValueStyleEnumCaseList = 174;
	public static readonly RULE_rawValueStyleEnumCase = 175;
	public static readonly RULE_rawValueAssignment = 176;
	public static readonly RULE_rawValueLiteral = 177;
	public static readonly RULE_structDeclaration = 178;
	public static readonly RULE_structName = 179;
	public static readonly RULE_structBody = 180;
	public static readonly RULE_structMembers = 181;
	public static readonly RULE_structMember = 182;
	public static readonly RULE_classDeclaration = 183;
	public static readonly RULE_className = 184;
	public static readonly RULE_classBody = 185;
	public static readonly RULE_classMembers = 186;
	public static readonly RULE_classMember = 187;
	public static readonly RULE_protocolDeclaration = 188;
	public static readonly RULE_protocolName = 189;
	public static readonly RULE_protocolBody = 190;
	public static readonly RULE_protocolMembers = 191;
	public static readonly RULE_protocolMember = 192;
	public static readonly RULE_protocolMemberDeclatation = 193;
	public static readonly RULE_protocolPropertyDeclaration = 194;
	public static readonly RULE_protocolMethodDeclaration = 195;
	public static readonly RULE_protocolInitializerDeclaration = 196;
	public static readonly RULE_protocolSubscriptDeclaration = 197;
	public static readonly RULE_protocolAssociatedTypeDeclaration = 198;
	public static readonly RULE_initializerDeclaration = 199;
	public static readonly RULE_initializerHead = 200;
	public static readonly RULE_initializerBody = 201;
	public static readonly RULE_deinitializerDeclaration = 202;
	public static readonly RULE_extensionDeclaration = 203;
	public static readonly RULE_extensionBody = 204;
	public static readonly RULE_extensionMembers = 205;
	public static readonly RULE_extensionMember = 206;
	public static readonly RULE_subscriptDeclaration = 207;
	public static readonly RULE_subscriptHead = 208;
	public static readonly RULE_subscriptResult = 209;
	public static readonly RULE_operatorDeclaration = 210;
	public static readonly RULE_prefixOperatorDeclaration = 211;
	public static readonly RULE_postfixOperatorDeclaration = 212;
	public static readonly RULE_infixOperatorDeclaration = 213;
	public static readonly RULE_infixOperatorGroup = 214;
	public static readonly RULE_precedenceGroupDeclaration = 215;
	public static readonly RULE_precedenceGroupAttributes = 216;
	public static readonly RULE_precedenceGroupAttribute = 217;
	public static readonly RULE_precedenceGroupRelation = 218;
	public static readonly RULE_precedenceGroupAssignment = 219;
	public static readonly RULE_precedenceGroupAssociativity = 220;
	public static readonly RULE_precedenceGroupNames = 221;
	public static readonly RULE_precedenceGroupName = 222;
	public static readonly RULE_declarationModifier = 223;
	public static readonly RULE_declarationModifiers = 224;
	public static readonly RULE_accessLevelModifier = 225;
	public static readonly RULE_mutationModifier = 226;
	public static readonly RULE_attribute = 227;
	public static readonly RULE_attributeName = 228;
	public static readonly RULE_attributeArgumentClause = 229;
	public static readonly RULE_attributes = 230;
	public static readonly RULE_balancedTokens = 231;
	public static readonly RULE_balancedToken = 232;
	public static readonly RULE_pattern = 233;
	public static readonly RULE_tuplePattern = 234;
	public static readonly RULE_tuplePatternElementList = 235;
	public static readonly RULE_tuplePatternElement = 236;
	public static readonly RULE_genericParameterClause = 237;
	public static readonly RULE_genericParameterList = 238;
	public static readonly RULE_genericParameter = 239;
	public static readonly RULE_genericWhereClause = 240;
	public static readonly RULE_requirementList = 241;
	public static readonly RULE_requirement = 242;
	public static readonly RULE_conformanceRequirement = 243;
	public static readonly RULE_sameTypeRequirement = 244;
	public static readonly RULE_genericArgumentClause = 245;
	public static readonly RULE_genericArgumentList = 246;
	public static readonly RULE_genericArgument = 247;
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
		"functionCallArgument", "trailingClosure", "argumentNames", "statement", 
		"statements", "loopStatement", "forInStatement", "whileStatement", "conditionList", 
		"condition", "caseCondition", "optionalBindingCondition", "repeatWhileStatement", 
		"branchStatement", "ifStatement", "elseClause", "guardStatement", "switchStatement", 
		"switchCase", "caseLabel", "caseItemList", "defaultLabel", "whereClause", 
		"labeledStatement", "statementLabel", "labelName", "controlTransferStatement", 
		"breakStatement", "continueStatement", "fallthroughStatement", "returnStatement", 
		"throwStatement", "deferStatement", "doStatement", "catchClause", "compilerControlStatement", 
		"conditionalCompilationBlock", "ifDirectiveClause", "elseifDirectiveClause", 
		"elseDirectiveClause", "compilationCondition", "platformCondition", "operatingSystem", 
		"architecture", "swiftVersion", "lineControlStatement", "lineNumber", 
		"fileName", "availabilityCondition", "availabilityArgument", "platformName", 
		"platformVersion", "declaration", "topLevelDeclaration", "codeBlock", 
		"importDeclaration", "importKind", "importPath", "importPathIdentifier", 
		"constantDeclaration", "patternInitializerList", "patternInitializer", 
		"initializer", "variableDeclaration", "variableDeclarationHead", "variableName", 
		"getterSetterBlock", "getterClause", "setterClause", "setterName", "getterSetterKeywordBlock", 
		"getterKeywordClause", "setterKeywordClause", "willSetDidSetBlock", "willSetClause", 
		"didSetClause", "typealiasDeclaration", "typealiasName", "typealiasAssignment", 
		"functionDeclaration", "functionHead", "functionName", "functionSignature", 
		"functionResult", "functionBody", "parameterClause", "parameterList", 
		"parameter", "externalParameterName", "localParameterName", "defaultArgumentClause", 
		"enumDeclaration", "unionStyleEnum", "unionStyleEnumMembers", "unionStyleEnumMember", 
		"unionStyleEnumCaseClause", "unionStyleEnumCaseList", "unionStyleEnumCase", 
		"enumName", "enumCaseName", "rawValueStyleEnum", "rawValueStyleEnumMembers", 
		"rawValueStyleEnumMember", "rawValueStyleEnumCaseClause", "rawValueStyleEnumCaseList", 
		"rawValueStyleEnumCase", "rawValueAssignment", "rawValueLiteral", "structDeclaration", 
		"structName", "structBody", "structMembers", "structMember", "classDeclaration", 
		"className", "classBody", "classMembers", "classMember", "protocolDeclaration", 
		"protocolName", "protocolBody", "protocolMembers", "protocolMember", "protocolMemberDeclatation", 
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
			this.state = 496;
			this.statements();
			this.state = 497;
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
			this.state = 499;
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
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				{
				this.state = 501;
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
				this.state = 502;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 505;
				this.match(SwiftParser.COMMA);
				this.state = 508;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 506;
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
					this.state = 507;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 514;
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
			this.state = 519;
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
				this.state = 515;
				this.numericLiteral();
				}
				break;
			case SwiftParser.STATIC_STRING_LITERAL:
			case SwiftParser.INTERPOLATED_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this.stringLiteral();
				}
				break;
			case SwiftParser.FALSE:
			case SwiftParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 517;
				this.booleanLiteral();
				}
				break;
			case SwiftParser.NIL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 518;
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
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BINARY_LITERAL:
			case SwiftParser.OCTAL_LITERAL:
			case SwiftParser.DECIMAL_DIGITS:
			case SwiftParser.DECIMAL_LITERAL:
			case SwiftParser.HEXADECIMAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 521;
				this.integerLiteral();
				}
				break;
			case SwiftParser.FLOATING_POINT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
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
			this.state = 525;
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
			this.state = 527;
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
			this.state = 529;
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
			this.state = 531;
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
			this.state = 533;
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
			this.state = 535;
			if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
			this.state = 536;
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
			this.state = 538;
			if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
			this.state = 539;
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
			this.state = 541;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 542;
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
			this.state = 577;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				{
				_localctx = new ArrayTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 545;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 546;
				this.type(0);
				this.state = 547;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 2:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 549;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 550;
				this.type(0);
				this.state = 551;
				this.match(SwiftParser.COLON);
				this.state = 552;
				this.type(0);
				this.state = 553;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.AT) {
					{
					this.state = 555;
					this.attributes();
					}
				}

				this.state = 558;
				this.functionTypeArgumentClause();
				this.state = 563;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.THROWS:
				case SwiftParser.ARROW:
					{
					this.state = 560;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===SwiftParser.THROWS) {
						{
						this.state = 559;
						this.match(SwiftParser.THROWS);
						}
					}

					}
					break;
				case SwiftParser.RETHROWS:
					{
					this.state = 562;
					this.match(SwiftParser.RETHROWS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 565;
				this.match(SwiftParser.ARROW);
				this.state = 566;
				this.type(10);
				}
				break;

			case 4:
				{
				_localctx = new GeneralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 568;
				this.typeIdentifier();
				}
				break;

			case 5:
				{
				_localctx = new TupleTypeAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 569;
				this.tupleType();
				}
				break;

			case 6:
				{
				_localctx = new ProtocolCompositionTypeAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 570;
				this.protocolCompositionType();
				}
				break;

			case 7:
				{
				_localctx = new AnyTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 571;
				this.match(SwiftParser.ANY);
				}
				break;

			case 8:
				{
				_localctx = new SelfTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 572;
				this.match(SwiftParser.SELF_TYPE);
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 573;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 574;
				this.type(0);
				this.state = 575;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 590;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 588;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
					case 1:
						{
						_localctx = new OptionalTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 579;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 580;
						if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
						this.state = 581;
						this.match(SwiftParser.QUESTION);
						}
						break;

					case 2:
						{
						_localctx = new ImplicitlyUnwrappedOptionalTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 582;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 583;
						if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
						this.state = 584;
						this.match(SwiftParser.EXCLAMATION);
						}
						break;

					case 3:
						{
						_localctx = new MetatypeTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_type);
						this.state = 585;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 586;
						this.match(SwiftParser.PERIOD);
						this.state = 587;
						_la = this._input.LA(1);
						if ( !(_la===SwiftParser.PROTOCOL_METATYPE || _la===SwiftParser.TYPE) ) {
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
					}
					} 
				}
				this.state = 592;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
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
			this.state = 593;
			this.match(SwiftParser.COLON);
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				{
				this.state = 594;
				this.attributes();
				}
				break;
			}
			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INOUT) {
				{
				this.state = 597;
				this.match(SwiftParser.INOUT);
				}
			}

			this.state = 600;
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
			this.state = 602;
			this.typeName();
			this.state = 604;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
			case 1:
				{
				this.state = 603;
				this.genericArgumentClause();
				}
				break;
			}
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				{
				this.state = 606;
				this.match(SwiftParser.PERIOD);
				this.state = 607;
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
			this.state = 610;
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
			this.state = 612;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.UNDERSCORE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 613;
				this.tupleTypeElement();
				this.state = 616; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 614;
					this.match(SwiftParser.COMMA);
					this.state = 615;
					this.tupleTypeElement();
					}
					}
					this.state = 618; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===SwiftParser.COMMA );
				}
			}

			this.state = 622;
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
			this.state = 628;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 624;
				this.elementName();
				this.state = 625;
				this.typeAnnotation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
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
			this.state = 632;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
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
				this.state = 631;
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
			this.state = 634;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INOUT || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.UNDERSCORE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 635;
				this.functionTypeArgumentList();
				this.state = 638;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,19,this._ctx) ) {
				case 1:
					{
					this.state = 636;
					if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
					this.state = 637;
					_localctx._ELLIPSIS = this.operator();
					}
					break;
				}
				}
			}

			this.state = 642;
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
			this.state = 644;
			this.functionTypeArgument();
			this.state = 649;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,21,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 645;
					this.match(SwiftParser.COMMA);
					this.state = 646;
					this.functionTypeArgument();
					}
					} 
				}
				this.state = 651;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,21,this._ctx);
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
			this.state = 662;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.INOUT:
			case SwiftParser.ANY:
			case SwiftParser.SELF_TYPE:
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
			case SwiftParser.AT:
			case SwiftParser.LEFT_BRACKET:
			case SwiftParser.LEFT_PARENTHESIS:
			case SwiftParser.IDENTIFIER:
			case SwiftParser.QUOTED_IDENTIFIER:
			case SwiftParser.IMPLICIT_PARAMETER_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 653;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
				case 1:
					{
					this.state = 652;
					this.attributes();
					}
					break;
				}
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.INOUT) {
					{
					this.state = 655;
					this.match(SwiftParser.INOUT);
					}
				}

				this.state = 658;
				this.type(0);
				}
				break;
			case SwiftParser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
				this.argumentLabel();
				this.state = 660;
				this.typeAnnotation();
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
				_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
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
			_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
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
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
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
			_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
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
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 695;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.expression();
				this.state = 697;
				this.match(SwiftParser.COMMA);
				this.state = 698;
				this.expressionList();
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
	public prefixExpression(): PrefixExpressionContext {
		let _localctx: PrefixExpressionContext = new PrefixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SwiftParser.RULE_prefixExpression);
		try {
			this.state = 707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 702;
				this.inOutExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 704;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
				case 1:
					{
					this.state = 703;
					this.prefixOperator();
					}
					break;
				}
				this.state = 706;
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
			this.state = 709;
			if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
			this.state = 710;
			this.match(SwiftParser.AMPERSAND);
			this.state = 711;
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
			this.state = 713;
			this.match(SwiftParser.TRY);
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				{
				this.state = 714;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 715;
				_localctx._TYPE = this._input.LT(1);
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.EXCLAMATION || _la===SwiftParser.QUESTION) ) {
					_localctx._TYPE = this._errHandler.recoverInline(this);
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
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.binaryOperator();
				this.state = 719;
				this.prefixExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
				case 1:
					{
					this.state = 721;
					this.assignmentOperator();
					}
					break;

				case 2:
					{
					this.state = 722;
					this.conditionalOperator();
					}
					break;
				}
				this.state = 726;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
				case 1:
					{
					this.state = 725;
					this.tryOperator();
					}
					break;
				}
				this.state = 728;
				this.prefixExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 730;
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
			this.state = 733;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 734;
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
			this.state = 736;
			if (!(testLN(this._input, -1, WS, true) && testLN(this._input, 1, WS, true))) throw new FailedPredicateException(this, "testLN(this._input, -1, WS, true) && testLN(this._input, 1, WS, true)");
			this.state = 737;
			this.match(SwiftParser.QUESTION);
			this.state = 738;
			this.expression();
			this.state = 739;
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
			this.state = 747;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IS:
				{
				this.state = 741;
				this.match(SwiftParser.IS);
				}
				break;
			case SwiftParser.AS:
				{
				this.state = 742;
				this.match(SwiftParser.AS);
				this.state = 745;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
				case 1:
					{
					this.state = 743;
					if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
					this.state = 744;
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
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 749;
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
			this.state = 766;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,40,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 751;
				this.identifier();
				this.state = 753;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
				case 1:
					{
					this.state = 752;
					this.genericArgumentClause();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 755;
				this.literalExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 756;
				this.selfExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 757;
				this.superclassExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 758;
				this.closureExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 759;
				this.parenthesizedExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 760;
				this.tupleExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 761;
				this.implicitMemberExpression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 762;
				this.wildcardExpression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 763;
				this.keyPathExpression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 764;
				this.selectorExpression();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 765;
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
			this.state = 776;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,41,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 768;
				this.literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 769;
				this.arrayLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 770;
				this.dictionaryLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 771;
				this.playgroundLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 772;
				this.match(SwiftParser.FILE);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 773;
				this.match(SwiftParser.LINE);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 774;
				this.match(SwiftParser.COLUMN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 775;
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
			this.state = 778;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 779;
			this.expression();
			this.state = 784;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 780;
					this.match(SwiftParser.COMMA);
					this.state = 781;
					this.expression();
					}
					} 
				}
				this.state = 786;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			}
			this.state = 788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COMMA) {
				{
				this.state = 787;
				this.match(SwiftParser.COMMA);
				}
			}

			this.state = 790;
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
			this.state = 792;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 793;
			this.expression();
			this.state = 794;
			this.match(SwiftParser.COLON);
			this.state = 795;
			this.expression();
			this.state = 803;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,44,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 796;
					this.match(SwiftParser.COMMA);
					this.state = 797;
					this.expression();
					this.state = 798;
					this.match(SwiftParser.COLON);
					this.state = 799;
					this.expression();
					}
					} 
				}
				this.state = 805;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,44,this._ctx);
			}
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COMMA) {
				{
				this.state = 806;
				this.match(SwiftParser.COMMA);
				}
			}

			this.state = 809;
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
			this.state = 821;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.COLOR_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 811;
				this.match(SwiftParser.COLOR_LITERAL);
				this.state = 812;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 813;
				this.functionCallArgumentList();
				this.state = 814;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;
			case SwiftParser.FILE_LITERAL:
			case SwiftParser.IMAGE_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 816;
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
				this.state = 817;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 818;
				this.functionCallArgumentList();
				this.state = 819;
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
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 823;
				this.match(SwiftParser.SELF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 824;
				this.selfMethodExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 825;
				this.selfSubscriptExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 826;
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
			this.state = 829;
			this.match(SwiftParser.SELF);
			this.state = 830;
			this.match(SwiftParser.PERIOD);
			this.state = 831;
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
			this.state = 833;
			this.match(SwiftParser.SELF);
			this.state = 834;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 835;
			this.functionCallArgumentList();
			this.state = 836;
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
			this.state = 838;
			this.match(SwiftParser.SELF);
			this.state = 839;
			this.match(SwiftParser.PERIOD);
			this.state = 840;
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
			this.state = 845;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 842;
				this.superclassMethodExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 843;
				this.superclassSubscriptExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 844;
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
			this.state = 847;
			this.match(SwiftParser.SUPER);
			this.state = 848;
			this.match(SwiftParser.PERIOD);
			this.state = 849;
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
			this.state = 851;
			this.match(SwiftParser.SUPER);
			this.state = 852;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 853;
			this.functionCallArgumentList();
			this.state = 854;
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
			this.state = 856;
			this.match(SwiftParser.SUPER);
			this.state = 857;
			this.match(SwiftParser.PERIOD);
			this.state = 858;
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
			this.state = 860;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,49,this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.closureSignature();
				}
				break;
			}
			this.state = 865;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				{
				this.state = 864;
				this.statements();
				}
				break;
			}
			this.state = 867;
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
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				{
				this.state = 870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.LEFT_BRACKET) {
					{
					this.state = 869;
					this.captureList();
					}
				}

				this.state = 872;
				this.closureParameterClause();
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.THROWS) {
					{
					this.state = 873;
					this.match(SwiftParser.THROWS);
					}
				}

				this.state = 877;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.ARROW) {
					{
					this.state = 876;
					this.functionResult();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 879;
				this.captureList();
				}
				break;
			}
			this.state = 882;
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
			this.state = 890;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.LEFT_PARENTHESIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 884;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (SwiftParser.UNDERSCORE - 55)) | (1 << (SwiftParser.ASSOCIATIVITY - 55)) | (1 << (SwiftParser.CONVENIENCE - 55)) | (1 << (SwiftParser.DYNAMIC - 55)) | (1 << (SwiftParser.DID_SET - 55)) | (1 << (SwiftParser.FINAL - 55)) | (1 << (SwiftParser.GET - 55)) | (1 << (SwiftParser.INFIX - 55)) | (1 << (SwiftParser.INDIRECT - 55)) | (1 << (SwiftParser.LAZY - 55)) | (1 << (SwiftParser.LEFT - 55)) | (1 << (SwiftParser.MUTATING - 55)) | (1 << (SwiftParser.NONE - 55)) | (1 << (SwiftParser.NOMUTATING - 55)) | (1 << (SwiftParser.OPTIONAL - 55)) | (1 << (SwiftParser.OVERRIDE - 55)) | (1 << (SwiftParser.POSTFIX - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SwiftParser.PRECEDENCE - 87)) | (1 << (SwiftParser.PREFIX - 87)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 87)) | (1 << (SwiftParser.REQUIRED - 87)) | (1 << (SwiftParser.RIGHT - 87)) | (1 << (SwiftParser.SET - 87)) | (1 << (SwiftParser.TYPE - 87)) | (1 << (SwiftParser.UNOWNED - 87)) | (1 << (SwiftParser.WEAK - 87)) | (1 << (SwiftParser.WILL_SET - 87)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
					{
					this.state = 885;
					this.closureParameterList();
					}
				}

				this.state = 888;
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
				this.state = 889;
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
			this.state = 892;
			this.closureParameter();
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 893;
				this.match(SwiftParser.COMMA);
				this.state = 894;
				this.closureParameter();
				}
				}
				this.state = 899;
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
			this.state = 900;
			this.closureParameterName();
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 901;
				this.typeAnnotation();
				this.state = 904;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
				case 1:
					{
					this.state = 902;
					if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
					this.state = 903;
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
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.UNDERSCORE) {
				{
				this.state = 908;
				this.match(SwiftParser.UNDERSCORE);
				}
			}

			this.state = 911;
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
			this.state = 913;
			this.match(SwiftParser.LEFT_BRACKET);
			this.state = 914;
			this.captureListItem();
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 915;
				this.match(SwiftParser.COMMA);
				this.state = 916;
				this.captureListItem();
				}
				}
				this.state = 921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 922;
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
			this.state = 925;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
			case 1:
				{
				this.state = 924;
				this.captureSpecifier();
				}
				break;
			}
			this.state = 927;
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
			this.state = 936;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.WEAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 929;
				this.match(SwiftParser.WEAK);
				}
				break;
			case SwiftParser.UNOWNED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.match(SwiftParser.UNOWNED);
				this.state = 934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
				case 1:
					{
					this.state = 931;
					this.match(SwiftParser.LEFT_PARENTHESIS);
					this.state = 932;
					this.match(SwiftParser.IDENTIFIER);
					this.state = 933;
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
			this.state = 938;
			this.match(SwiftParser.PERIOD);
			this.state = 939;
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
			this.state = 941;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 942;
			this.expression();
			this.state = 943;
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
			this.state = 945;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,66,this._ctx) ) {
			case 1:
				{
				this.state = 946;
				this.tupleElement();
				this.state = 949; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 947;
					this.match(SwiftParser.COMMA);
					this.state = 948;
					this.tupleElement();
					}
					}
					this.state = 951; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===SwiftParser.COMMA );
				}
				break;
			}
			this.state = 955;
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
			this.state = 962;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,68,this._ctx) ) {
			case 1:
				{
				this.state = 959;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 957;
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
					this.state = 958;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 961;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 964;
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
			this.state = 966;
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
			this.state = 968;
			this.match(SwiftParser.BACKSLASH);
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (SwiftParser.ANY - 41)) | (1 << (SwiftParser.SELF_TYPE - 41)) | (1 << (SwiftParser.ASSOCIATIVITY - 41)) | (1 << (SwiftParser.CONVENIENCE - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SwiftParser.DYNAMIC - 73)) | (1 << (SwiftParser.DID_SET - 73)) | (1 << (SwiftParser.FINAL - 73)) | (1 << (SwiftParser.GET - 73)) | (1 << (SwiftParser.INFIX - 73)) | (1 << (SwiftParser.INDIRECT - 73)) | (1 << (SwiftParser.LAZY - 73)) | (1 << (SwiftParser.LEFT - 73)) | (1 << (SwiftParser.MUTATING - 73)) | (1 << (SwiftParser.NONE - 73)) | (1 << (SwiftParser.NOMUTATING - 73)) | (1 << (SwiftParser.OPTIONAL - 73)) | (1 << (SwiftParser.OVERRIDE - 73)) | (1 << (SwiftParser.POSTFIX - 73)) | (1 << (SwiftParser.PRECEDENCE - 73)) | (1 << (SwiftParser.PREFIX - 73)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 73)) | (1 << (SwiftParser.REQUIRED - 73)) | (1 << (SwiftParser.RIGHT - 73)) | (1 << (SwiftParser.SET - 73)) | (1 << (SwiftParser.TYPE - 73)) | (1 << (SwiftParser.UNOWNED - 73)) | (1 << (SwiftParser.WEAK - 73)) | (1 << (SwiftParser.WILL_SET - 73)) | (1 << (SwiftParser.AT - 73)))) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SwiftParser.LEFT_BRACKET - 106)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 106)) | (1 << (SwiftParser.IDENTIFIER - 106)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 106)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 106)))) !== 0)) {
				{
				this.state = 969;
				this.type(0);
				}
			}

			this.state = 972;
			this.match(SwiftParser.PERIOD);
			this.state = 973;
			this.keyPathComponent();
			this.state = 976; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 974;
					this.match(SwiftParser.PERIOD);
					this.state = 975;
					this.keyPathComponent();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 978; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
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
			this.state = 992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 980;
				this.identifier();
				this.state = 984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 981;
						this.keyPathPostfix();
						}
						} 
					}
					this.state = 986;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 988; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 987;
						this.keyPathPostfix();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 990; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,72,this._ctx);
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
			this.state = 1000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 994;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 995;
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
				this.state = 996;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 997;
				this.functionCallArgumentList();
				this.state = 998;
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
			this.state = 1002;
			this.match(SwiftParser.SELECTOR);
			this.state = 1003;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1004;
			this.functionCallArgumentList();
			this.state = 1005;
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
			this.state = 1007;
			this.match(SwiftParser.KEY_PATH);
			this.state = 1008;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1009;
			this.expression();
			this.state = 1010;
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

			this.state = 1013;
			this.primaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1067;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 1065;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
					case 1:
						{
						_localctx = new PostfixOperatorExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1015;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 1016;
						this.postfixOperator();
						}
						break;

					case 2:
						{
						_localctx = new FunctionCallExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 1018;
						if (!(!isStatementStarting(this._input))) throw new FailedPredicateException(this, "!isStatementStarting(this._input)");
						this.state = 1024;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,76,this._ctx) ) {
						case 1:
							{
							this.state = 1019;
							this.functionCallArgumentClause();
							}
							break;

						case 2:
							{
							this.state = 1021;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===SwiftParser.LEFT_PARENTHESIS) {
								{
								this.state = 1020;
								this.functionCallArgumentClause();
								}
							}

							this.state = 1023;
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
						this.state = 1026;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 1027;
						this.match(SwiftParser.PERIOD);
						this.state = 1028;
						this.match(SwiftParser.INIT);
						this.state = 1033;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
						case 1:
							{
							this.state = 1029;
							this.match(SwiftParser.LEFT_PARENTHESIS);
							this.state = 1030;
							this.argumentNames();
							this.state = 1031;
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
						this.state = 1035;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 1036;
						this.match(SwiftParser.PERIOD);
						this.state = 1048;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SwiftParser.DECIMAL_DIGITS:
							{
							this.state = 1037;
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
							this.state = 1038;
							this.identifier();
							this.state = 1046;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input,79,this._ctx) ) {
							case 1:
								{
								this.state = 1040;
								this._errHandler.sync(this);
								switch ( this.interpreter.adaptivePredict(this._input,78,this._ctx) ) {
								case 1:
									{
									this.state = 1039;
									this.genericArgumentClause();
									}
									break;
								}
								}
								break;

							case 2:
								{
								this.state = 1042;
								this.match(SwiftParser.LEFT_PARENTHESIS);
								this.state = 1043;
								this.argumentNames();
								this.state = 1044;
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
						this.state = 1050;
						if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						this.state = 1051;
						this.match(SwiftParser.PERIOD);
						this.state = 1052;
						this.match(SwiftParser.SELF);
						}
						break;

					case 6:
						{
						_localctx = new SubscriptExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1053;
						if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						this.state = 1054;
						if (!(!isStatementStarting(this._input))) throw new FailedPredicateException(this, "!isStatementStarting(this._input)");
						this.state = 1055;
						this.match(SwiftParser.LEFT_BRACKET);
						this.state = 1056;
						this.functionCallArgumentList();
						this.state = 1057;
						this.match(SwiftParser.RIGHT_BRACKET);
						}
						break;

					case 7:
						{
						_localctx = new ForcedValueExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1059;
						if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						this.state = 1060;
						if (!(!testLN(this._input, -1, OP_LWS, true, true))) throw new FailedPredicateException(this, "!testLN(this._input, -1, OP_LWS, true, true)");
						this.state = 1061;
						this.match(SwiftParser.EXCLAMATION);
						}
						break;

					case 8:
						{
						_localctx = new OptionalChainingExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_postfixExpression);
						this.state = 1062;
						if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						this.state = 1063;
						if (!(!testLN(this._input, -1, OP_LWS, true, true))) throw new FailedPredicateException(this, "!testLN(this._input, -1, OP_LWS, true, true)");
						this.state = 1064;
						this.match(SwiftParser.QUESTION);
						}
						break;
					}
					} 
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,82,this._ctx);
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
			this.state = 1070;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1072;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,83,this._ctx) ) {
			case 1:
				{
				this.state = 1071;
				this.functionCallArgumentList();
				}
				break;
			}
			this.state = 1074;
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
			this.state = 1076;
			this.functionCallArgument();
			this.state = 1081;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1077;
				this.match(SwiftParser.COMMA);
				this.state = 1078;
				this.functionCallArgument();
				}
				}
				this.state = 1083;
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
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,86,this._ctx) ) {
			case 1:
				{
				this.state = 1086;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 1084;
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
					this.state = 1085;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1088;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 1093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,87,this._ctx) ) {
			case 1:
				{
				this.state = 1091;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 1092;
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
			this.state = 1095;
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
			this.state = 1102; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1099;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 1097;
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
					this.state = 1098;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1101;
				this.match(SwiftParser.COLON);
				}
				}
				this.state = 1104; 
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SwiftParser.RULE_statement);
		try {
			this.state = 1121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1106;
				if (!(isStatementStarting(this._input))) throw new FailedPredicateException(this, "isStatementStarting(this._input)");
				this.state = 1115;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,90,this._ctx) ) {
				case 1:
					{
					this.state = 1107;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 1108;
					this.declaration();
					}
					break;

				case 3:
					{
					this.state = 1109;
					this.loopStatement();
					}
					break;

				case 4:
					{
					this.state = 1110;
					this.branchStatement();
					}
					break;

				case 5:
					{
					this.state = 1111;
					this.labeledStatement();
					}
					break;

				case 6:
					{
					this.state = 1112;
					this.controlTransferStatement();
					}
					break;

				case 7:
					{
					this.state = 1113;
					this.deferStatement();
					}
					break;

				case 8:
					{
					this.state = 1114;
					this.doStatement();
					}
					break;
				}
				this.state = 1118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
				case 1:
					{
					this.state = 1117;
					this.match(SwiftParser.SEMICOLON);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1120;
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
		this.enterRule(_localctx, 148, SwiftParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1123;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1126; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,93,this._ctx);
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
		this.enterRule(_localctx, 150, SwiftParser.RULE_loopStatement);
		try {
			this.state = 1131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1128;
				this.forInStatement();
				}
				break;
			case SwiftParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1129;
				this.whileStatement();
				}
				break;
			case SwiftParser.REPEAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1130;
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
		this.enterRule(_localctx, 152, SwiftParser.RULE_forInStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1133;
			this.match(SwiftParser.FOR);
			this.state = 1135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,95,this._ctx) ) {
			case 1:
				{
				this.state = 1134;
				this.match(SwiftParser.CASE);
				}
				break;
			}
			this.state = 1137;
			this.pattern(0);
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				{
				this.state = 1138;
				this.match(SwiftParser.IN);
				}
				break;
			}
			this.state = 1141;
			this.expression();
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1142;
				this.whereClause();
				}
			}

			this.state = 1145;
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
		this.enterRule(_localctx, 154, SwiftParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1147;
			this.match(SwiftParser.WHILE);
			this.state = 1148;
			this.conditionList();
			this.state = 1149;
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
		this.enterRule(_localctx, 156, SwiftParser.RULE_conditionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1151;
			this.condition();
			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1152;
				this.match(SwiftParser.COMMA);
				this.state = 1153;
				this.condition();
				}
				}
				this.state = 1158;
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
		this.enterRule(_localctx, 158, SwiftParser.RULE_condition);
		try {
			this.state = 1163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,99,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1159;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1160;
				this.availabilityCondition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1161;
				this.caseCondition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1162;
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
		this.enterRule(_localctx, 160, SwiftParser.RULE_caseCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1165;
			this.match(SwiftParser.CASE);
			this.state = 1166;
			this.pattern(0);
			this.state = 1167;
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
		this.enterRule(_localctx, 162, SwiftParser.RULE_optionalBindingCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
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
			this.state = 1170;
			this.pattern(0);
			this.state = 1171;
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
		this.enterRule(_localctx, 164, SwiftParser.RULE_repeatWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(SwiftParser.REPEAT);
			this.state = 1174;
			this.codeBlock();
			this.state = 1175;
			this.match(SwiftParser.WHILE);
			this.state = 1176;
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
		this.enterRule(_localctx, 166, SwiftParser.RULE_branchStatement);
		try {
			this.state = 1181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1178;
				this.ifStatement();
				}
				break;
			case SwiftParser.GUARD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1179;
				this.guardStatement();
				}
				break;
			case SwiftParser.SWITCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1180;
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
		this.enterRule(_localctx, 168, SwiftParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1183;
			this.match(SwiftParser.IF);
			this.state = 1184;
			this.conditionList();
			this.state = 1185;
			this.codeBlock();
			this.state = 1187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,101,this._ctx) ) {
			case 1:
				{
				this.state = 1186;
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
		this.enterRule(_localctx, 170, SwiftParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			this.match(SwiftParser.ELSE);
			this.state = 1192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.LEFT_BRACE:
				{
				this.state = 1190;
				this.codeBlock();
				}
				break;
			case SwiftParser.IF:
				{
				this.state = 1191;
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
		this.enterRule(_localctx, 172, SwiftParser.RULE_guardStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this.match(SwiftParser.GUARD);
			this.state = 1195;
			this.conditionList();
			this.state = 1196;
			this.match(SwiftParser.ELSE);
			this.state = 1197;
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
		this.enterRule(_localctx, 174, SwiftParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(SwiftParser.SWITCH);
			this.state = 1200;
			this.expression();
			this.state = 1201;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.CASE || _la===SwiftParser.DEFAULT) {
				{
				{
				this.state = 1202;
				this.switchCase();
				}
				}
				this.state = 1207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1208;
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
		this.enterRule(_localctx, 176, SwiftParser.RULE_switchCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CASE:
				{
				this.state = 1210;
				this.caseLabel();
				}
				break;
			case SwiftParser.DEFAULT:
				{
				this.state = 1211;
				this.defaultLabel();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1214;
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
		this.enterRule(_localctx, 178, SwiftParser.RULE_caseLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(SwiftParser.CASE);
			this.state = 1217;
			this.caseItemList();
			this.state = 1218;
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
		this.enterRule(_localctx, 180, SwiftParser.RULE_caseItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1220;
			this.pattern(0);
			this.state = 1222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1221;
				this.whereClause();
				}
			}

			this.state = 1231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1224;
				this.match(SwiftParser.COMMA);
				this.state = 1225;
				this.pattern(0);
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.WHERE) {
					{
					this.state = 1226;
					this.whereClause();
					}
				}

				}
				}
				this.state = 1233;
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
	public defaultLabel(): DefaultLabelContext {
		let _localctx: DefaultLabelContext = new DefaultLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, SwiftParser.RULE_defaultLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1234;
			this.match(SwiftParser.DEFAULT);
			this.state = 1235;
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
		this.enterRule(_localctx, 184, SwiftParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1237;
			this.match(SwiftParser.WHERE);
			this.state = 1238;
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
		this.enterRule(_localctx, 186, SwiftParser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1240;
			this.statementLabel();
			this.state = 1245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.FOR:
			case SwiftParser.REPEAT:
			case SwiftParser.WHILE:
				{
				this.state = 1241;
				this.loopStatement();
				}
				break;
			case SwiftParser.IF:
				{
				this.state = 1242;
				this.ifStatement();
				}
				break;
			case SwiftParser.SWITCH:
				{
				this.state = 1243;
				this.switchStatement();
				}
				break;
			case SwiftParser.DO:
				{
				this.state = 1244;
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
		this.enterRule(_localctx, 188, SwiftParser.RULE_statementLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this.labelName();
			this.state = 1248;
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
		this.enterRule(_localctx, 190, SwiftParser.RULE_labelName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
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
		this.enterRule(_localctx, 192, SwiftParser.RULE_controlTransferStatement);
		try {
			this.state = 1257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1252;
				this.breakStatement();
				}
				break;
			case SwiftParser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1253;
				this.continueStatement();
				}
				break;
			case SwiftParser.FALLTHROUGH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1254;
				this.fallthroughStatement();
				}
				break;
			case SwiftParser.RETURN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1255;
				this.returnStatement();
				}
				break;
			case SwiftParser.THROW:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1256;
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
		this.enterRule(_localctx, 194, SwiftParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1259;
			this.match(SwiftParser.BREAK);
			this.state = 1261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,110,this._ctx) ) {
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, SwiftParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this.match(SwiftParser.CONTINUE);
			this.state = 1265;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
			case 1:
				{
				this.state = 1264;
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
		this.enterRule(_localctx, 198, SwiftParser.RULE_fallthroughStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1267;
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
		this.enterRule(_localctx, 200, SwiftParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1269;
			this.match(SwiftParser.RETURN);
			this.state = 1271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,112,this._ctx) ) {
			case 1:
				{
				this.state = 1270;
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
		this.enterRule(_localctx, 202, SwiftParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1273;
			this.match(SwiftParser.THROW);
			this.state = 1274;
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
		this.enterRule(_localctx, 204, SwiftParser.RULE_deferStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.match(SwiftParser.DEFER);
			this.state = 1277;
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
		this.enterRule(_localctx, 206, SwiftParser.RULE_doStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.match(SwiftParser.DO);
			this.state = 1280;
			this.codeBlock();
			this.state = 1284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,113,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1281;
					this.catchClause();
					}
					} 
				}
				this.state = 1286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,113,this._ctx);
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
		this.enterRule(_localctx, 208, SwiftParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.match(SwiftParser.CATCH);
			this.state = 1289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,114,this._ctx) ) {
			case 1:
				{
				this.state = 1288;
				this.pattern(0);
				}
				break;
			}
			this.state = 1292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1291;
				this.whereClause();
				}
			}

			this.state = 1294;
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
		this.enterRule(_localctx, 210, SwiftParser.RULE_compilerControlStatement);
		try {
			this.state = 1298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.IF_DIRECTIVE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1296;
				this.conditionalCompilationBlock();
				}
				break;
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1297;
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
		this.enterRule(_localctx, 212, SwiftParser.RULE_conditionalCompilationBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1300;
			this.ifDirectiveClause();
			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.ELSEIF_DIRECTIVE) {
				{
				{
				this.state = 1301;
				this.elseifDirectiveClause();
				}
				}
				this.state = 1306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.ELSE_DIRECTIVE) {
				{
				this.state = 1307;
				this.elseDirectiveClause();
				}
			}

			this.state = 1310;
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
		this.enterRule(_localctx, 214, SwiftParser.RULE_ifDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1312;
			this.match(SwiftParser.IF_DIRECTIVE);
			this.state = 1313;
			this.compilationCondition(0);
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,119,this._ctx) ) {
			case 1:
				{
				this.state = 1314;
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
		this.enterRule(_localctx, 216, SwiftParser.RULE_elseifDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.match(SwiftParser.ELSEIF_DIRECTIVE);
			this.state = 1318;
			this.compilationCondition(0);
			this.state = 1320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
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
	@RuleVersion(0)
	public elseDirectiveClause(): ElseDirectiveClauseContext {
		let _localctx: ElseDirectiveClauseContext = new ElseDirectiveClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, SwiftParser.RULE_elseDirectiveClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1322;
			this.match(SwiftParser.ELSE_DIRECTIVE);
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				{
				this.state = 1323;
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
		let _startState: number = 220;
		this.enterRecursionRule(_localctx, 220, SwiftParser.RULE_compilationCondition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,122,this._ctx) ) {
			case 1:
				{
				this.state = 1327;
				this.platformCondition();
				}
				break;

			case 2:
				{
				this.state = 1328;
				this.identifier();
				}
				break;

			case 3:
				{
				this.state = 1329;
				this.booleanLiteral();
				}
				break;

			case 4:
				{
				this.state = 1330;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1331;
				this.compilationCondition(0);
				this.state = 1332;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 5:
				{
				this.state = 1334;
				if (!(isPreOp(this._input))) throw new FailedPredicateException(this, "isPreOp(this._input)");
				this.state = 1335;
				this.match(SwiftParser.EXCLAMATION);
				this.state = 1336;
				this.compilationCondition(2);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,123,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CompilationConditionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_compilationCondition);
					this.state = 1339;
					if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					this.state = 1340;
					this.binaryOperator();
					this.state = 1341;
					this.compilationCondition(2);
					}
					} 
				}
				this.state = 1347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,123,this._ctx);
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
		this.enterRule(_localctx, 222, SwiftParser.RULE_platformCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 1362;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,124,this._ctx) ) {
			case 1:
				{
				this.state = 1349;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1350;
				this.operatingSystem();
				this.state = 1351;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				{
				this.state = 1353;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1354;
				this.architecture();
				this.state = 1355;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 3:
				{
				this.state = 1357;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 1358;
				this.prefixOperator();
				this.state = 1359;
				this.swiftVersion();
				this.state = 1360;
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
		this.enterRule(_localctx, 224, SwiftParser.RULE_operatingSystem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1364;
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
		this.enterRule(_localctx, 226, SwiftParser.RULE_architecture);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1366;
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
		this.enterRule(_localctx, 228, SwiftParser.RULE_swiftVersion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1368;
			this.match(SwiftParser.DECIMAL_DIGITS);
			this.state = 1373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.PERIOD) {
				{
				{
				this.state = 1369;
				this.match(SwiftParser.PERIOD);
				this.state = 1370;
				this.match(SwiftParser.DECIMAL_DIGITS);
				}
				}
				this.state = 1375;
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
		this.enterRule(_localctx, 230, SwiftParser.RULE_lineControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1376;
			this.match(SwiftParser.SOURCE_LOCATION);
			this.state = 1377;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.IDENTIFIER) {
				{
				this.state = 1378;
				_localctx._file = this.match(SwiftParser.IDENTIFIER);
				this.state = 1379;
				this.match(SwiftParser.COLON);
				this.state = 1380;
				this.fileName();
				this.state = 1381;
				this.match(SwiftParser.COMMA);
				this.state = 1382;
				_localctx._line = this.match(SwiftParser.IDENTIFIER);
				this.state = 1383;
				this.match(SwiftParser.COLON);
				this.state = 1384;
				this.lineNumber();
				}
			}

			this.state = 1388;
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
		this.enterRule(_localctx, 232, SwiftParser.RULE_lineNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
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
		this.enterRule(_localctx, 234, SwiftParser.RULE_fileName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1392;
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
		this.enterRule(_localctx, 236, SwiftParser.RULE_availabilityCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1394;
			this.match(SwiftParser.AVAILABLE);
			this.state = 1395;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1396;
			this.availabilityArgument();
			this.state = 1401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1397;
				this.match(SwiftParser.COMMA);
				this.state = 1398;
				this.availabilityArgument();
				}
				}
				this.state = 1403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1404;
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
		this.enterRule(_localctx, 238, SwiftParser.RULE_availabilityArgument);
		try {
			this.state = 1410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.ASTERISK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1406;
				this.match(SwiftParser.ASTERISK);
				}
				break;
			case SwiftParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1407;
				this.platformName();
				this.state = 1408;
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
		this.enterRule(_localctx, 240, SwiftParser.RULE_platformName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
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
		this.enterRule(_localctx, 242, SwiftParser.RULE_platformVersion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1414;
			this.match(SwiftParser.DECIMAL_DIGITS);
			this.state = 1421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.PERIOD) {
				{
				this.state = 1415;
				this.match(SwiftParser.PERIOD);
				this.state = 1416;
				this.match(SwiftParser.DECIMAL_DIGITS);
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.PERIOD) {
					{
					this.state = 1417;
					this.match(SwiftParser.PERIOD);
					this.state = 1418;
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
		this.enterRule(_localctx, 244, SwiftParser.RULE_declaration);
		try {
			this.state = 1438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1423;
				this.importDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1424;
				this.constantDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1425;
				this.variableDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1426;
				this.typealiasDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1427;
				this.functionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1428;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1429;
				this.structDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1430;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1431;
				this.protocolDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1432;
				this.initializerDeclaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1433;
				this.deinitializerDeclaration();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1434;
				this.extensionDeclaration();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1435;
				this.subscriptDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1436;
				this.operatorDeclaration();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1437;
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
		this.enterRule(_localctx, 246, SwiftParser.RULE_topLevelDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1441;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				{
				this.state = 1440;
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
		this.enterRule(_localctx, 248, SwiftParser.RULE_codeBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,133,this._ctx) ) {
			case 1:
				{
				this.state = 1444;
				this.statements();
				}
				break;
			}
			this.state = 1447;
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
		this.enterRule(_localctx, 250, SwiftParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1449;
				this.attributes();
				}
			}

			this.state = 1452;
			this.match(SwiftParser.IMPORT);
			this.state = 1454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.LET) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0)) {
				{
				this.state = 1453;
				this.importKind();
				}
			}

			this.state = 1456;
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
		this.enterRule(_localctx, 252, SwiftParser.RULE_importKind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
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
		this.enterRule(_localctx, 254, SwiftParser.RULE_importPath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1460;
			this.importPathIdentifier();
			this.state = 1465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,136,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1461;
					this.match(SwiftParser.PERIOD);
					this.state = 1462;
					this.importPathIdentifier();
					}
					} 
				}
				this.state = 1467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,136,this._ctx);
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
		this.enterRule(_localctx, 256, SwiftParser.RULE_importPathIdentifier);
		try {
			this.state = 1470;
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
				this.state = 1468;
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
				this.state = 1469;
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
		this.enterRule(_localctx, 258, SwiftParser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1472;
				this.attributes();
				}
			}

			this.state = 1476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1475;
				this.declarationModifiers();
				}
			}

			this.state = 1478;
			this.match(SwiftParser.LET);
			this.state = 1479;
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
		this.enterRule(_localctx, 260, SwiftParser.RULE_patternInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1481;
			this.patternInitializer();
			this.state = 1486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,140,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1482;
					this.match(SwiftParser.COMMA);
					this.state = 1483;
					this.patternInitializer();
					}
					} 
				}
				this.state = 1488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,140,this._ctx);
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
		this.enterRule(_localctx, 262, SwiftParser.RULE_patternInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.pattern(0);
			this.state = 1491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
			case 1:
				{
				this.state = 1490;
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
		this.enterRule(_localctx, 264, SwiftParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1494;
			this.match(SwiftParser.EQUAL);
			this.state = 1495;
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
		this.enterRule(_localctx, 266, SwiftParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1497;
			this.variableDeclarationHead();
			this.state = 1514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
			case 1:
				{
				this.state = 1498;
				this.patternInitializerList();
				}
				break;

			case 2:
				{
				this.state = 1499;
				this.variableName();
				this.state = 1512;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,144,this._ctx) ) {
				case 1:
					{
					this.state = 1500;
					this.initializer();
					this.state = 1501;
					this.willSetDidSetBlock();
					}
					break;

				case 2:
					{
					this.state = 1503;
					this.typeAnnotation();
					this.state = 1510;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,143,this._ctx) ) {
					case 1:
						{
						this.state = 1504;
						this.getterSetterBlock();
						}
						break;

					case 2:
						{
						this.state = 1505;
						this.getterSetterKeywordBlock();
						}
						break;

					case 3:
						{
						this.state = 1507;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
						case 1:
							{
							this.state = 1506;
							this.initializer();
							}
							break;
						}
						this.state = 1509;
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
		this.enterRule(_localctx, 268, SwiftParser.RULE_variableDeclarationHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1517;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1516;
				this.attributes();
				}
			}

			this.state = 1520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1519;
				this.declarationModifiers();
				}
			}

			this.state = 1522;
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
		this.enterRule(_localctx, 270, SwiftParser.RULE_variableName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
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
		this.enterRule(_localctx, 272, SwiftParser.RULE_getterSetterBlock);
		let _la: number;
		try {
			this.state = 1539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,150,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1526;
				this.codeBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1527;
				this.match(SwiftParser.LEFT_BRACE);
				this.state = 1535;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,149,this._ctx) ) {
				case 1:
					{
					this.state = 1528;
					this.getterClause();
					this.state = 1530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (SwiftParser.MUTATING - 81)) | (1 << (SwiftParser.NOMUTATING - 81)) | (1 << (SwiftParser.SET - 81)) | (1 << (SwiftParser.AT - 81)))) !== 0)) {
						{
						this.state = 1529;
						this.setterClause();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1532;
					this.setterClause();
					this.state = 1533;
					this.getterClause();
					}
					break;
				}
				this.state = 1537;
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
		this.enterRule(_localctx, 274, SwiftParser.RULE_getterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1542;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1541;
				this.attributes();
				}
			}

			this.state = 1545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1544;
				this.mutationModifier();
				}
			}

			this.state = 1547;
			this.match(SwiftParser.GET);
			this.state = 1548;
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
		this.enterRule(_localctx, 276, SwiftParser.RULE_setterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1550;
				this.attributes();
				}
			}

			this.state = 1554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1553;
				this.mutationModifier();
				}
			}

			this.state = 1556;
			this.match(SwiftParser.SET);
			this.state = 1558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1557;
				this.setterName();
				}
			}

			this.state = 1560;
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
		this.enterRule(_localctx, 278, SwiftParser.RULE_setterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1562;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1563;
			this.identifier();
			this.state = 1564;
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
		this.enterRule(_localctx, 280, SwiftParser.RULE_getterSetterKeywordBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				{
				this.state = 1567;
				this.getterKeywordClause();
				this.state = 1569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (SwiftParser.MUTATING - 81)) | (1 << (SwiftParser.NOMUTATING - 81)) | (1 << (SwiftParser.SET - 81)) | (1 << (SwiftParser.AT - 81)))) !== 0)) {
					{
					this.state = 1568;
					this.setterKeywordClause();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1571;
				this.setterKeywordClause();
				this.state = 1572;
				this.getterKeywordClause();
				}
				break;
			}
			this.state = 1576;
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
		this.enterRule(_localctx, 282, SwiftParser.RULE_getterKeywordClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1578;
				this.attributes();
				}
			}

			this.state = 1582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1581;
				this.mutationModifier();
				}
			}

			this.state = 1584;
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
		this.enterRule(_localctx, 284, SwiftParser.RULE_setterKeywordClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1586;
				this.attributes();
				}
			}

			this.state = 1590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.MUTATING || _la===SwiftParser.NOMUTATING) {
				{
				this.state = 1589;
				this.mutationModifier();
				}
			}

			this.state = 1592;
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
		this.enterRule(_localctx, 286, SwiftParser.RULE_willSetDidSetBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1594;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
			case 1:
				{
				this.state = 1595;
				this.willSetClause();
				this.state = 1597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.DID_SET || _la===SwiftParser.AT) {
					{
					this.state = 1596;
					this.didSetClause();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1599;
				this.didSetClause();
				this.state = 1600;
				this.willSetClause();
				}
				break;
			}
			this.state = 1604;
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
		this.enterRule(_localctx, 288, SwiftParser.RULE_willSetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1606;
				this.attributes();
				}
			}

			this.state = 1609;
			this.match(SwiftParser.WILL_SET);
			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1610;
				this.setterName();
				}
			}

			this.state = 1613;
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
		this.enterRule(_localctx, 290, SwiftParser.RULE_didSetClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1615;
				this.attributes();
				}
			}

			this.state = 1618;
			this.match(SwiftParser.DID_SET);
			this.state = 1620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1619;
				this.setterName();
				}
			}

			this.state = 1622;
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
		this.enterRule(_localctx, 292, SwiftParser.RULE_typealiasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1624;
				this.attributes();
				}
			}

			this.state = 1628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1627;
				this.accessLevelModifier();
				}
			}

			this.state = 1630;
			this.match(SwiftParser.TYPEALIAS);
			this.state = 1631;
			this.typealiasName();
			this.state = 1633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,170,this._ctx) ) {
			case 1:
				{
				this.state = 1632;
				this.genericParameterClause();
				}
				break;
			}
			this.state = 1635;
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
		this.enterRule(_localctx, 294, SwiftParser.RULE_typealiasName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1637;
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
		this.enterRule(_localctx, 296, SwiftParser.RULE_typealiasAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1640;
			this.match(SwiftParser.EQUAL);
			this.state = 1641;
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
		this.enterRule(_localctx, 298, SwiftParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this.functionHead();
			this.state = 1644;
			this.functionName();
			this.state = 1646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1645;
				this.genericParameterClause();
				}
			}

			this.state = 1648;
			this.functionSignature();
			this.state = 1650;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,172,this._ctx) ) {
			case 1:
				{
				this.state = 1649;
				this.genericWhereClause();
				}
				break;
			}
			this.state = 1653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
			case 1:
				{
				this.state = 1652;
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
		this.enterRule(_localctx, 300, SwiftParser.RULE_functionHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1655;
				this.attributes();
				}
			}

			this.state = 1659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 1658;
				this.declarationModifiers();
				}
			}

			this.state = 1661;
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
		this.enterRule(_localctx, 302, SwiftParser.RULE_functionName);
		try {
			this.state = 1665;
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
				this.state = 1663;
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
				this.state = 1664;
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
		this.enterRule(_localctx, 304, SwiftParser.RULE_functionSignature);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1667;
			this.parameterClause();
			this.state = 1669;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,177,this._ctx) ) {
			case 1:
				{
				this.state = 1668;
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
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
			}
			this.state = 1672;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,178,this._ctx) ) {
			case 1:
				{
				this.state = 1671;
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
		this.enterRule(_localctx, 306, SwiftParser.RULE_functionResult);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1674;
			this.match(SwiftParser.ARROW);
			this.state = 1676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,179,this._ctx) ) {
			case 1:
				{
				this.state = 1675;
				this.attributes();
				}
				break;
			}
			this.state = 1678;
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
		this.enterRule(_localctx, 308, SwiftParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
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
		this.enterRule(_localctx, 310, SwiftParser.RULE_parameterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1682;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 1684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (SwiftParser.UNDERSCORE - 55)) | (1 << (SwiftParser.ASSOCIATIVITY - 55)) | (1 << (SwiftParser.CONVENIENCE - 55)) | (1 << (SwiftParser.DYNAMIC - 55)) | (1 << (SwiftParser.DID_SET - 55)) | (1 << (SwiftParser.FINAL - 55)) | (1 << (SwiftParser.GET - 55)) | (1 << (SwiftParser.INFIX - 55)) | (1 << (SwiftParser.INDIRECT - 55)) | (1 << (SwiftParser.LAZY - 55)) | (1 << (SwiftParser.LEFT - 55)) | (1 << (SwiftParser.MUTATING - 55)) | (1 << (SwiftParser.NONE - 55)) | (1 << (SwiftParser.NOMUTATING - 55)) | (1 << (SwiftParser.OPTIONAL - 55)) | (1 << (SwiftParser.OVERRIDE - 55)) | (1 << (SwiftParser.POSTFIX - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SwiftParser.PRECEDENCE - 87)) | (1 << (SwiftParser.PREFIX - 87)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 87)) | (1 << (SwiftParser.REQUIRED - 87)) | (1 << (SwiftParser.RIGHT - 87)) | (1 << (SwiftParser.SET - 87)) | (1 << (SwiftParser.TYPE - 87)) | (1 << (SwiftParser.UNOWNED - 87)) | (1 << (SwiftParser.WEAK - 87)) | (1 << (SwiftParser.WILL_SET - 87)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
				{
				this.state = 1683;
				this.parameterList();
				}
			}

			this.state = 1686;
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
		this.enterRule(_localctx, 312, SwiftParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1688;
			this.parameter();
			this.state = 1693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1689;
				this.match(SwiftParser.COMMA);
				this.state = 1690;
				this.parameter();
				}
				}
				this.state = 1695;
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
		this.enterRule(_localctx, 314, SwiftParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,182,this._ctx) ) {
			case 1:
				{
				this.state = 1696;
				this.externalParameterName();
				}
				break;
			}
			this.state = 1699;
			this.localParameterName();
			this.state = 1700;
			this.typeAnnotation();
			this.state = 1704;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,183,this._ctx) ) {
			case 1:
				{
				this.state = 1701;
				this.defaultArgumentClause();
				}
				break;

			case 2:
				{
				this.state = 1702;
				if (!(testLN(this._input, 1, ["..."]))) throw new FailedPredicateException(this, "testLN(this._input, 1, [\"...\"])");
				this.state = 1703;
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
	public externalParameterName(): ExternalParameterNameContext {
		let _localctx: ExternalParameterNameContext = new ExternalParameterNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, SwiftParser.RULE_externalParameterName);
		try {
			this.state = 1708;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.UNDERSCORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1706;
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
				this.state = 1707;
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
		this.enterRule(_localctx, 318, SwiftParser.RULE_localParameterName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1710;
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
		this.enterRule(_localctx, 320, SwiftParser.RULE_defaultArgumentClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1712;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1713;
			this.match(SwiftParser.EQUAL);
			this.state = 1714;
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
		this.enterRule(_localctx, 322, SwiftParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1716;
				this.attributes();
				}
			}

			this.state = 1720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1719;
				this.accessLevelModifier();
				}
			}

			this.state = 1724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,187,this._ctx) ) {
			case 1:
				{
				this.state = 1722;
				this.unionStyleEnum();
				}
				break;

			case 2:
				{
				this.state = 1723;
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
		this.enterRule(_localctx, 324, SwiftParser.RULE_unionStyleEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INDIRECT) {
				{
				this.state = 1726;
				this.match(SwiftParser.INDIRECT);
				}
			}

			this.state = 1729;
			this.match(SwiftParser.ENUM);
			this.state = 1730;
			this.enumName();
			this.state = 1732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1731;
				this.genericParameterClause();
				}
			}

			this.state = 1735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1734;
				this.typeInheritanceClause();
				}
			}

			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1737;
				this.genericWhereClause();
				}
			}

			this.state = 1740;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR) | (1 << SwiftParser.CASE))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1741;
				this.unionStyleEnumMembers();
				}
			}

			this.state = 1744;
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
		this.enterRule(_localctx, 326, SwiftParser.RULE_unionStyleEnumMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1746;
				this.unionStyleEnumMember();
				}
				}
				this.state = 1749; 
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
		this.enterRule(_localctx, 328, SwiftParser.RULE_unionStyleEnumMember);
		try {
			this.state = 1754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,194,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1751;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1752;
				this.unionStyleEnumCaseClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1753;
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
		this.enterRule(_localctx, 330, SwiftParser.RULE_unionStyleEnumCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1756;
				this.attributes();
				}
			}

			this.state = 1760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.INDIRECT) {
				{
				this.state = 1759;
				this.match(SwiftParser.INDIRECT);
				}
			}

			this.state = 1762;
			this.match(SwiftParser.CASE);
			this.state = 1763;
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
		this.enterRule(_localctx, 332, SwiftParser.RULE_unionStyleEnumCaseList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1765;
			this.unionStyleEnumCase();
			this.state = 1770;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1766;
				this.match(SwiftParser.COMMA);
				this.state = 1767;
				this.unionStyleEnumCase();
				}
				}
				this.state = 1772;
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
		this.enterRule(_localctx, 334, SwiftParser.RULE_unionStyleEnumCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1773;
			this.enumCaseName();
			this.state = 1775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 1774;
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
		this.enterRule(_localctx, 336, SwiftParser.RULE_enumName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
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
		this.enterRule(_localctx, 338, SwiftParser.RULE_enumCaseName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1779;
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
		this.enterRule(_localctx, 340, SwiftParser.RULE_rawValueStyleEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1781;
			this.match(SwiftParser.ENUM);
			this.state = 1782;
			this.enumName();
			this.state = 1784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1783;
				this.genericParameterClause();
				}
			}

			this.state = 1786;
			this.typeInheritanceClause();
			this.state = 1788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1787;
				this.genericWhereClause();
				}
			}

			this.state = 1790;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1791;
			this.rawValueStyleEnumMembers();
			this.state = 1792;
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
		this.enterRule(_localctx, 342, SwiftParser.RULE_rawValueStyleEnumMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1794;
				this.rawValueStyleEnumMember();
				}
				}
				this.state = 1797; 
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
		this.enterRule(_localctx, 344, SwiftParser.RULE_rawValueStyleEnumMember);
		try {
			this.state = 1802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,202,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1799;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1800;
				this.rawValueStyleEnumCaseClause();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1801;
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
		this.enterRule(_localctx, 346, SwiftParser.RULE_rawValueStyleEnumCaseClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1804;
				this.attributes();
				}
			}

			this.state = 1807;
			this.match(SwiftParser.CASE);
			this.state = 1808;
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
		this.enterRule(_localctx, 348, SwiftParser.RULE_rawValueStyleEnumCaseList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1810;
			this.rawValueStyleEnumCase();
			this.state = 1815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 1811;
				this.match(SwiftParser.COMMA);
				this.state = 1812;
				this.rawValueStyleEnumCase();
				}
				}
				this.state = 1817;
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
		this.enterRule(_localctx, 350, SwiftParser.RULE_rawValueStyleEnumCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1818;
			this.enumCaseName();
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,205,this._ctx) ) {
			case 1:
				{
				this.state = 1819;
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
		this.enterRule(_localctx, 352, SwiftParser.RULE_rawValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			if (!(isBinOp(this._input))) throw new FailedPredicateException(this, "isBinOp(this._input)");
			this.state = 1823;
			this.match(SwiftParser.EQUAL);
			this.state = 1824;
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
		this.enterRule(_localctx, 354, SwiftParser.RULE_rawValueLiteral);
		try {
			this.state = 1829;
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
				this.state = 1826;
				this.numericLiteral();
				}
				break;
			case SwiftParser.STATIC_STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1827;
				this.match(SwiftParser.STATIC_STRING_LITERAL);
				}
				break;
			case SwiftParser.FALSE:
			case SwiftParser.TRUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1828;
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
		this.enterRule(_localctx, 356, SwiftParser.RULE_structDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1831;
				this.attributes();
				}
			}

			this.state = 1835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1834;
				this.accessLevelModifier();
				}
			}

			this.state = 1837;
			this.match(SwiftParser.STRUCT);
			this.state = 1838;
			this.structName();
			this.state = 1840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1839;
				this.genericParameterClause();
				}
			}

			this.state = 1843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1842;
				this.typeInheritanceClause();
				}
			}

			this.state = 1846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1845;
				this.genericWhereClause();
				}
			}

			this.state = 1848;
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
		this.enterRule(_localctx, 358, SwiftParser.RULE_structName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1850;
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
		this.enterRule(_localctx, 360, SwiftParser.RULE_structBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1852;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1853;
				this.structMembers();
				}
			}

			this.state = 1856;
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
		this.enterRule(_localctx, 362, SwiftParser.RULE_structMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1859; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1858;
				this.structMember();
				}
				}
				this.state = 1861; 
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
		this.enterRule(_localctx, 364, SwiftParser.RULE_structMember);
		try {
			this.state = 1865;
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
				this.state = 1863;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1864;
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
		this.enterRule(_localctx, 366, SwiftParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1867;
				this.attributes();
				}
			}

			this.state = 1878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,218,this._ctx) ) {
			case 1:
				{
				this.state = 1871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
					{
					this.state = 1870;
					this.accessLevelModifier();
					}
				}

				this.state = 1874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SwiftParser.FINAL) {
					{
					this.state = 1873;
					this.match(SwiftParser.FINAL);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 1876;
				this.match(SwiftParser.FINAL);
				this.state = 1877;
				this.accessLevelModifier();
				}
				break;
			}
			this.state = 1880;
			this.match(SwiftParser.CLASS);
			this.state = 1881;
			this.className();
			this.state = 1883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1882;
				this.genericParameterClause();
				}
			}

			this.state = 1886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1885;
				this.typeInheritanceClause();
				}
			}

			this.state = 1889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1888;
				this.genericWhereClause();
				}
			}

			this.state = 1891;
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
		this.enterRule(_localctx, 368, SwiftParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1893;
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
		this.enterRule(_localctx, 370, SwiftParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1895;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1896;
				this.classMembers();
				}
			}

			this.state = 1899;
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
		this.enterRule(_localctx, 372, SwiftParser.RULE_classMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1902; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1901;
				this.classMember();
				}
				}
				this.state = 1904; 
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
		this.enterRule(_localctx, 374, SwiftParser.RULE_classMember);
		try {
			this.state = 1908;
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
				this.state = 1906;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1907;
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
		this.enterRule(_localctx, 376, SwiftParser.RULE_protocolDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1910;
				this.attributes();
				}
			}

			this.state = 1914;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1913;
				this.accessLevelModifier();
				}
			}

			this.state = 1916;
			this.match(SwiftParser.PROTOCOL);
			this.state = 1917;
			this.protocolName();
			this.state = 1919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 1918;
				this.typeInheritanceClause();
				}
			}

			this.state = 1922;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1921;
				this.genericWhereClause();
				}
			}

			this.state = 1924;
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
		this.enterRule(_localctx, 378, SwiftParser.RULE_protocolName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1926;
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
		this.enterRule(_localctx, 380, SwiftParser.RULE_protocolBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1928;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 1930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.ASSOCIATEDTYPE) | (1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 1929;
				this.protocolMembers();
				}
			}

			this.state = 1932;
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
		this.enterRule(_localctx, 382, SwiftParser.RULE_protocolMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1935; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1934;
				this.protocolMember();
				}
				}
				this.state = 1937; 
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
		this.enterRule(_localctx, 384, SwiftParser.RULE_protocolMember);
		try {
			this.state = 1941;
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
				this.state = 1939;
				this.protocolMemberDeclatation();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1940;
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
	public protocolMemberDeclatation(): ProtocolMemberDeclatationContext {
		let _localctx: ProtocolMemberDeclatationContext = new ProtocolMemberDeclatationContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, SwiftParser.RULE_protocolMemberDeclatation);
		try {
			this.state = 1949;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,232,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1943;
				this.protocolPropertyDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1944;
				this.protocolMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1945;
				this.protocolInitializerDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1946;
				this.protocolSubscriptDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1947;
				this.protocolAssociatedTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1948;
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
		this.enterRule(_localctx, 388, SwiftParser.RULE_protocolPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1951;
			this.variableDeclarationHead();
			this.state = 1952;
			this.variableName();
			this.state = 1953;
			this.typeAnnotation();
			this.state = 1954;
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
		this.enterRule(_localctx, 390, SwiftParser.RULE_protocolMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1956;
			this.functionHead();
			this.state = 1957;
			this.functionName();
			this.state = 1959;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1958;
				this.genericParameterClause();
				}
			}

			this.state = 1961;
			this.functionSignature();
			this.state = 1963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1962;
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
		this.enterRule(_localctx, 392, SwiftParser.RULE_protocolInitializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1965;
			this.initializerHead();
			this.state = 1967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 1966;
				this.genericParameterClause();
				}
			}

			this.state = 1969;
			this.parameterClause();
			this.state = 1971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) {
				{
				this.state = 1970;
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
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

			this.state = 1974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1973;
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
		this.enterRule(_localctx, 394, SwiftParser.RULE_protocolSubscriptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this.subscriptHead();
			this.state = 1977;
			this.subscriptResult();
			this.state = 1979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1978;
				this.genericWhereClause();
				}
			}

			this.state = 1981;
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
		this.enterRule(_localctx, 396, SwiftParser.RULE_protocolAssociatedTypeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 1983;
				this.attributes();
				}
			}

			this.state = 1987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 1986;
				this.accessLevelModifier();
				}
			}

			this.state = 1989;
			this.match(SwiftParser.ASSOCIATEDTYPE);
			this.state = 1990;
			this.typealiasName();
			this.state = 1992;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,241,this._ctx) ) {
			case 1:
				{
				this.state = 1991;
				this.typeInheritanceClause();
				}
				break;
			}
			this.state = 1995;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,242,this._ctx) ) {
			case 1:
				{
				this.state = 1994;
				this.typealiasAssignment();
				}
				break;
			}
			this.state = 1998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 1997;
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
		this.enterRule(_localctx, 398, SwiftParser.RULE_initializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2000;
			this.initializerHead();
			this.state = 2002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 2001;
				this.genericParameterClause();
				}
			}

			this.state = 2004;
			this.parameterClause();
			this.state = 2006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) {
				{
				this.state = 2005;
				_la = this._input.LA(1);
				if ( !(_la===SwiftParser.RETHROWS || _la===SwiftParser.THROWS) ) {
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

			this.state = 2009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 2008;
				this.genericWhereClause();
				}
			}

			this.state = 2011;
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
		this.enterRule(_localctx, 400, SwiftParser.RULE_initializerHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2013;
				this.attributes();
				}
			}

			this.state = 2017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 2016;
				this.declarationModifiers();
				}
			}

			this.state = 2019;
			this.match(SwiftParser.INIT);
			this.state = 2022;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,249,this._ctx) ) {
			case 1:
				{
				this.state = 2020;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 2021;
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
		this.enterRule(_localctx, 402, SwiftParser.RULE_initializerBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2024;
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
		this.enterRule(_localctx, 404, SwiftParser.RULE_deinitializerDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2026;
				this.attributes();
				}
			}

			this.state = 2029;
			this.match(SwiftParser.DEINIT);
			this.state = 2030;
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
		this.enterRule(_localctx, 406, SwiftParser.RULE_extensionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2032;
				this.attributes();
				}
			}

			this.state = 2036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC))) !== 0)) {
				{
				this.state = 2035;
				this.accessLevelModifier();
				}
			}

			this.state = 2038;
			this.match(SwiftParser.EXTENSION);
			this.state = 2039;
			this.typeIdentifier();
			this.state = 2042;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.COLON:
				{
				this.state = 2040;
				this.typeInheritanceClause();
				}
				break;
			case SwiftParser.WHERE:
				{
				this.state = 2041;
				this.genericWhereClause();
				}
				break;
			case SwiftParser.LEFT_BRACE:
				break;
			default:
				break;
			}
			this.state = 2044;
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
		this.enterRule(_localctx, 408, SwiftParser.RULE_extensionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2046;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 2048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.DEINIT) | (1 << SwiftParser.ENUM) | (1 << SwiftParser.EXTENSION) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.FUNC) | (1 << SwiftParser.IMPORT) | (1 << SwiftParser.INIT) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.LET) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRECEDENCEGROUP) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PROTOCOL) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC) | (1 << SwiftParser.STRUCT) | (1 << SwiftParser.SUBSCRIPT) | (1 << SwiftParser.TYPEALIAS) | (1 << SwiftParser.VAR))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SwiftParser.IF_DIRECTIVE - 65)) | (1 << (SwiftParser.SOURCE_LOCATION - 65)) | (1 << (SwiftParser.CONVENIENCE - 65)) | (1 << (SwiftParser.DYNAMIC - 65)) | (1 << (SwiftParser.FINAL - 65)) | (1 << (SwiftParser.INFIX - 65)) | (1 << (SwiftParser.INDIRECT - 65)) | (1 << (SwiftParser.LAZY - 65)) | (1 << (SwiftParser.MUTATING - 65)) | (1 << (SwiftParser.NOMUTATING - 65)) | (1 << (SwiftParser.OPTIONAL - 65)) | (1 << (SwiftParser.OVERRIDE - 65)) | (1 << (SwiftParser.POSTFIX - 65)) | (1 << (SwiftParser.PREFIX - 65)) | (1 << (SwiftParser.REQUIRED - 65)) | (1 << (SwiftParser.UNOWNED - 65)) | (1 << (SwiftParser.WEAK - 65)))) !== 0) || _la===SwiftParser.AT) {
				{
				this.state = 2047;
				this.extensionMembers();
				}
			}

			this.state = 2050;
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
		this.enterRule(_localctx, 410, SwiftParser.RULE_extensionMembers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2053; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2052;
				this.extensionMember();
				}
				}
				this.state = 2055; 
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
		this.enterRule(_localctx, 412, SwiftParser.RULE_extensionMember);
		try {
			this.state = 2059;
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
				this.state = 2057;
				this.declaration();
				}
				break;
			case SwiftParser.IF_DIRECTIVE:
			case SwiftParser.SOURCE_LOCATION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2058;
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
		this.enterRule(_localctx, 414, SwiftParser.RULE_subscriptDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2061;
			this.subscriptHead();
			this.state = 2062;
			this.subscriptResult();
			this.state = 2064;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.WHERE) {
				{
				this.state = 2063;
				this.genericWhereClause();
				}
			}

			this.state = 2068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,258,this._ctx) ) {
			case 1:
				{
				this.state = 2066;
				this.getterSetterBlock();
				}
				break;

			case 2:
				{
				this.state = 2067;
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
		this.enterRule(_localctx, 416, SwiftParser.RULE_subscriptHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.AT) {
				{
				this.state = 2070;
				this.attributes();
				}
			}

			this.state = 2074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SwiftParser.CLASS) | (1 << SwiftParser.FILEPRIVATE) | (1 << SwiftParser.INTERNAL) | (1 << SwiftParser.OPEN) | (1 << SwiftParser.PRIVATE) | (1 << SwiftParser.PUBLIC) | (1 << SwiftParser.STATIC))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SwiftParser.CONVENIENCE - 72)) | (1 << (SwiftParser.DYNAMIC - 72)) | (1 << (SwiftParser.FINAL - 72)) | (1 << (SwiftParser.INFIX - 72)) | (1 << (SwiftParser.LAZY - 72)) | (1 << (SwiftParser.MUTATING - 72)) | (1 << (SwiftParser.NOMUTATING - 72)) | (1 << (SwiftParser.OPTIONAL - 72)) | (1 << (SwiftParser.OVERRIDE - 72)) | (1 << (SwiftParser.POSTFIX - 72)) | (1 << (SwiftParser.PREFIX - 72)) | (1 << (SwiftParser.REQUIRED - 72)) | (1 << (SwiftParser.UNOWNED - 72)) | (1 << (SwiftParser.WEAK - 72)))) !== 0)) {
				{
				this.state = 2073;
				this.declarationModifiers();
				}
			}

			this.state = 2076;
			this.match(SwiftParser.SUBSCRIPT);
			this.state = 2078;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LESS_THAN) {
				{
				this.state = 2077;
				this.genericParameterClause();
				}
			}

			this.state = 2080;
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
		this.enterRule(_localctx, 418, SwiftParser.RULE_subscriptResult);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2082;
			this.match(SwiftParser.ARROW);
			this.state = 2084;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,262,this._ctx) ) {
			case 1:
				{
				this.state = 2083;
				this.attributes();
				}
				break;
			}
			this.state = 2086;
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
		this.enterRule(_localctx, 420, SwiftParser.RULE_operatorDeclaration);
		try {
			this.state = 2091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.PREFIX:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2088;
				this.prefixOperatorDeclaration();
				}
				break;
			case SwiftParser.POSTFIX:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2089;
				this.postfixOperatorDeclaration();
				}
				break;
			case SwiftParser.INFIX:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2090;
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
		this.enterRule(_localctx, 422, SwiftParser.RULE_prefixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2093;
			this.match(SwiftParser.PREFIX);
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
	public postfixOperatorDeclaration(): PostfixOperatorDeclarationContext {
		let _localctx: PostfixOperatorDeclarationContext = new PostfixOperatorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, SwiftParser.RULE_postfixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2097;
			this.match(SwiftParser.POSTFIX);
			this.state = 2098;
			this.match(SwiftParser.OPERATOR_KEYWORD);
			this.state = 2099;
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
		this.enterRule(_localctx, 426, SwiftParser.RULE_infixOperatorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2101;
			this.match(SwiftParser.INFIX);
			this.state = 2102;
			this.match(SwiftParser.OPERATOR_KEYWORD);
			this.state = 2103;
			this.operator();
			this.state = 2105;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,264,this._ctx) ) {
			case 1:
				{
				this.state = 2104;
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
		this.enterRule(_localctx, 428, SwiftParser.RULE_infixOperatorGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2107;
			this.match(SwiftParser.COLON);
			this.state = 2108;
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
		this.enterRule(_localctx, 430, SwiftParser.RULE_precedenceGroupDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2110;
			this.match(SwiftParser.PRECEDENCEGROUP);
			this.state = 2111;
			this.precedenceGroupName();
			this.state = 2112;
			this.match(SwiftParser.LEFT_BRACE);
			this.state = 2114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.ASSOCIATIVITY || _la===SwiftParser.IDENTIFIER) {
				{
				this.state = 2113;
				this.precedenceGroupAttributes();
				}
			}

			this.state = 2116;
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
		this.enterRule(_localctx, 432, SwiftParser.RULE_precedenceGroupAttributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2119; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2118;
				this.precedenceGroupAttribute();
				}
				}
				this.state = 2121; 
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
		this.enterRule(_localctx, 434, SwiftParser.RULE_precedenceGroupAttribute);
		try {
			this.state = 2126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,267,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2123;
				this.precedenceGroupRelation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2124;
				this.precedenceGroupAssignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2125;
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
		this.enterRule(_localctx, 436, SwiftParser.RULE_precedenceGroupRelation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2128;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 2129;
			this.match(SwiftParser.COLON);
			this.state = 2130;
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
		this.enterRule(_localctx, 438, SwiftParser.RULE_precedenceGroupAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2132;
			this.match(SwiftParser.IDENTIFIER);
			this.state = 2133;
			this.match(SwiftParser.COLON);
			this.state = 2134;
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
		this.enterRule(_localctx, 440, SwiftParser.RULE_precedenceGroupAssociativity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2136;
			this.match(SwiftParser.ASSOCIATIVITY);
			this.state = 2137;
			this.match(SwiftParser.COLON);
			this.state = 2138;
			_la = this._input.LA(1);
			if ( !(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (SwiftParser.LEFT - 80)) | (1 << (SwiftParser.NONE - 80)) | (1 << (SwiftParser.RIGHT - 80)))) !== 0)) ) {
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
	public precedenceGroupNames(): PrecedenceGroupNamesContext {
		let _localctx: PrecedenceGroupNamesContext = new PrecedenceGroupNamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, SwiftParser.RULE_precedenceGroupNames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2140;
			this.precedenceGroupName();
			this.state = 2145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2141;
				this.match(SwiftParser.COMMA);
				this.state = 2142;
				this.precedenceGroupName();
				}
				}
				this.state = 2147;
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
		this.enterRule(_localctx, 444, SwiftParser.RULE_precedenceGroupName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2148;
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
		this.enterRule(_localctx, 446, SwiftParser.RULE_declarationModifier);
		try {
			this.state = 2165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SwiftParser.CLASS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2150;
				this.match(SwiftParser.CLASS);
				}
				break;
			case SwiftParser.CONVENIENCE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2151;
				this.match(SwiftParser.CONVENIENCE);
				}
				break;
			case SwiftParser.DYNAMIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2152;
				this.match(SwiftParser.DYNAMIC);
				}
				break;
			case SwiftParser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2153;
				this.match(SwiftParser.FINAL);
				}
				break;
			case SwiftParser.INFIX:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2154;
				this.match(SwiftParser.INFIX);
				}
				break;
			case SwiftParser.LAZY:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2155;
				this.match(SwiftParser.LAZY);
				}
				break;
			case SwiftParser.OPTIONAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2156;
				this.match(SwiftParser.OPTIONAL);
				}
				break;
			case SwiftParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2157;
				this.match(SwiftParser.OVERRIDE);
				}
				break;
			case SwiftParser.POSTFIX:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2158;
				this.match(SwiftParser.POSTFIX);
				}
				break;
			case SwiftParser.PREFIX:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2159;
				this.match(SwiftParser.PREFIX);
				}
				break;
			case SwiftParser.REQUIRED:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2160;
				this.match(SwiftParser.REQUIRED);
				}
				break;
			case SwiftParser.STATIC:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2161;
				this.match(SwiftParser.STATIC);
				}
				break;
			case SwiftParser.UNOWNED:
			case SwiftParser.WEAK:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2162;
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
				this.state = 2163;
				this.accessLevelModifier();
				}
				break;
			case SwiftParser.MUTATING:
			case SwiftParser.NOMUTATING:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2164;
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
		this.enterRule(_localctx, 448, SwiftParser.RULE_declarationModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2168; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2167;
				this.declarationModifier();
				}
				}
				this.state = 2170; 
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
		this.enterRule(_localctx, 450, SwiftParser.RULE_accessLevelModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2172;
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
			this.state = 2176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.LEFT_PARENTHESIS) {
				{
				this.state = 2173;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 2174;
				this.match(SwiftParser.SET);
				this.state = 2175;
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
		this.enterRule(_localctx, 452, SwiftParser.RULE_mutationModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2178;
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
		this.enterRule(_localctx, 454, SwiftParser.RULE_attribute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.match(SwiftParser.AT);
			this.state = 2181;
			this.attributeName();
			this.state = 2183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,272,this._ctx) ) {
			case 1:
				{
				this.state = 2182;
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
		this.enterRule(_localctx, 456, SwiftParser.RULE_attributeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2185;
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
		this.enterRule(_localctx, 458, SwiftParser.RULE_attributeArgumentClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2187;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 2189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SwiftParser.FALSE - 44)) | (1 << (SwiftParser.NIL - 44)) | (1 << (SwiftParser.TRUE - 44)) | (1 << (SwiftParser.ASSOCIATIVITY - 44)) | (1 << (SwiftParser.CONVENIENCE - 44)) | (1 << (SwiftParser.DYNAMIC - 44)) | (1 << (SwiftParser.DID_SET - 44)) | (1 << (SwiftParser.FINAL - 44)))) !== 0) || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & ((1 << (SwiftParser.GET - 76)) | (1 << (SwiftParser.INFIX - 76)) | (1 << (SwiftParser.INDIRECT - 76)) | (1 << (SwiftParser.LAZY - 76)) | (1 << (SwiftParser.LEFT - 76)) | (1 << (SwiftParser.MUTATING - 76)) | (1 << (SwiftParser.NONE - 76)) | (1 << (SwiftParser.NOMUTATING - 76)) | (1 << (SwiftParser.OPTIONAL - 76)) | (1 << (SwiftParser.OVERRIDE - 76)) | (1 << (SwiftParser.POSTFIX - 76)) | (1 << (SwiftParser.PRECEDENCE - 76)) | (1 << (SwiftParser.PREFIX - 76)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 76)) | (1 << (SwiftParser.REQUIRED - 76)) | (1 << (SwiftParser.RIGHT - 76)) | (1 << (SwiftParser.SET - 76)) | (1 << (SwiftParser.TYPE - 76)) | (1 << (SwiftParser.UNOWNED - 76)) | (1 << (SwiftParser.WEAK - 76)) | (1 << (SwiftParser.WILL_SET - 76)) | (1 << (SwiftParser.AMPERSAND - 76)) | (1 << (SwiftParser.ARROW - 76)) | (1 << (SwiftParser.AT - 76)) | (1 << (SwiftParser.COLON - 76)) | (1 << (SwiftParser.COMMA - 76)) | (1 << (SwiftParser.EQUAL - 76)) | (1 << (SwiftParser.EXCLAMATION - 76)) | (1 << (SwiftParser.GRAVE - 76)) | (1 << (SwiftParser.LEFT_BRACE - 76)) | (1 << (SwiftParser.LEFT_BRACKET - 76)) | (1 << (SwiftParser.LEFT_PARENTHESIS - 76)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (SwiftParser.NUMBER - 108)) | (1 << (SwiftParser.PERIOD - 108)) | (1 << (SwiftParser.QUESTION - 108)) | (1 << (SwiftParser.SEMICOLON - 108)) | (1 << (SwiftParser.ASTERISK - 108)) | (1 << (SwiftParser.CARET - 108)) | (1 << (SwiftParser.GREATER_THAN - 108)) | (1 << (SwiftParser.LESS_THAN - 108)) | (1 << (SwiftParser.MINUS - 108)) | (1 << (SwiftParser.PERCENT - 108)) | (1 << (SwiftParser.PIPE - 108)) | (1 << (SwiftParser.PLUS - 108)) | (1 << (SwiftParser.SLASH - 108)) | (1 << (SwiftParser.TILDE - 108)) | (1 << (SwiftParser.IDENTIFIER - 108)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 108)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 108)) | (1 << (SwiftParser.BINARY_LITERAL - 108)) | (1 << (SwiftParser.OCTAL_LITERAL - 108)) | (1 << (SwiftParser.DECIMAL_DIGITS - 108)) | (1 << (SwiftParser.DECIMAL_LITERAL - 108)) | (1 << (SwiftParser.HEXADECIMAL_LITERAL - 108)) | (1 << (SwiftParser.FLOATING_POINT_LITERAL - 108)) | (1 << (SwiftParser.STATIC_STRING_LITERAL - 108)))) !== 0) || _la===SwiftParser.INTERPOLATED_STRING_LITERAL || _la===SwiftParser.OPERATOR) {
				{
				this.state = 2188;
				this.balancedTokens();
				}
			}

			this.state = 2191;
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
		this.enterRule(_localctx, 460, SwiftParser.RULE_attributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2194; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2193;
					this.attribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2196; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,274,this._ctx);
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
		this.enterRule(_localctx, 462, SwiftParser.RULE_balancedTokens);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2199; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2198;
				this.balancedToken();
				}
				}
				this.state = 2201; 
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
		this.enterRule(_localctx, 464, SwiftParser.RULE_balancedToken);
		try {
			this.state = 2230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,276,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2203;
				this.match(SwiftParser.LEFT_PARENTHESIS);
				this.state = 2204;
				this.balancedTokens();
				this.state = 2205;
				this.match(SwiftParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2207;
				this.match(SwiftParser.LEFT_BRACKET);
				this.state = 2208;
				this.balancedTokens();
				this.state = 2209;
				this.match(SwiftParser.RIGHT_BRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2211;
				this.match(SwiftParser.LEFT_BRACE);
				this.state = 2212;
				this.balancedTokens();
				this.state = 2213;
				this.match(SwiftParser.RIGHT_BRACE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2215;
				this.identifier();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2216;
				this.literal();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2217;
				this.operator();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2218;
				this.match(SwiftParser.PERIOD);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2219;
				this.match(SwiftParser.COMMA);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2220;
				this.match(SwiftParser.COLON);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2221;
				this.match(SwiftParser.SEMICOLON);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2222;
				this.match(SwiftParser.EQUAL);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2223;
				this.match(SwiftParser.AT);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2224;
				this.match(SwiftParser.NUMBER);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2225;
				this.match(SwiftParser.AMPERSAND);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2226;
				this.match(SwiftParser.ARROW);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2227;
				this.match(SwiftParser.GRAVE);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2228;
				this.match(SwiftParser.QUESTION);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2229;
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
		let _startState: number = 466;
		this.enterRecursionRule(_localctx, 466, SwiftParser.RULE_pattern, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,282,this._ctx) ) {
			case 1:
				{
				_localctx = new WildcardPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2233;
				this.match(SwiftParser.UNDERSCORE);
				this.state = 2235;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,277,this._ctx) ) {
				case 1:
					{
					this.state = 2234;
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
				this.state = 2237;
				this.identifier();
				this.state = 2239;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,278,this._ctx) ) {
				case 1:
					{
					this.state = 2238;
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
				this.state = 2241;
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
				this.state = 2242;
				this.pattern(7);
				}
				break;

			case 4:
				{
				_localctx = new TuplePatternAlternativeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2243;
				this.tuplePattern();
				this.state = 2245;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,279,this._ctx) ) {
				case 1:
					{
					this.state = 2244;
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
				this.state = 2248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (SwiftParser.ASSOCIATIVITY - 71)) | (1 << (SwiftParser.CONVENIENCE - 71)) | (1 << (SwiftParser.DYNAMIC - 71)) | (1 << (SwiftParser.DID_SET - 71)) | (1 << (SwiftParser.FINAL - 71)) | (1 << (SwiftParser.GET - 71)) | (1 << (SwiftParser.INFIX - 71)) | (1 << (SwiftParser.INDIRECT - 71)) | (1 << (SwiftParser.LAZY - 71)) | (1 << (SwiftParser.LEFT - 71)) | (1 << (SwiftParser.MUTATING - 71)) | (1 << (SwiftParser.NONE - 71)) | (1 << (SwiftParser.NOMUTATING - 71)) | (1 << (SwiftParser.OPTIONAL - 71)) | (1 << (SwiftParser.OVERRIDE - 71)) | (1 << (SwiftParser.POSTFIX - 71)) | (1 << (SwiftParser.PRECEDENCE - 71)) | (1 << (SwiftParser.PREFIX - 71)) | (1 << (SwiftParser.PROTOCOL_METATYPE - 71)) | (1 << (SwiftParser.REQUIRED - 71)) | (1 << (SwiftParser.RIGHT - 71)) | (1 << (SwiftParser.SET - 71)) | (1 << (SwiftParser.TYPE - 71)) | (1 << (SwiftParser.UNOWNED - 71)) | (1 << (SwiftParser.WEAK - 71)) | (1 << (SwiftParser.WILL_SET - 71)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (SwiftParser.IDENTIFIER - 130)) | (1 << (SwiftParser.QUOTED_IDENTIFIER - 130)) | (1 << (SwiftParser.IMPLICIT_PARAMETER_NAME - 130)))) !== 0)) {
					{
					this.state = 2247;
					this.typeIdentifier();
					}
				}

				this.state = 2250;
				this.match(SwiftParser.PERIOD);
				this.state = 2251;
				this.enumCaseName();
				this.state = 2253;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,281,this._ctx) ) {
				case 1:
					{
					this.state = 2252;
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
				this.state = 2255;
				this.identifier();
				this.state = 2256;
				if (!(isPostOp(this._input))) throw new FailedPredicateException(this, "isPostOp(this._input)");
				this.state = 2257;
				this.match(SwiftParser.QUESTION);
				}
				break;

			case 7:
				{
				_localctx = new IsPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2259;
				this.match(SwiftParser.IS);
				this.state = 2260;
				this.type(0);
				}
				break;

			case 8:
				{
				_localctx = new ExpressionPatternContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2261;
				this.expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2269;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,283,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new AsPatternContext(new PatternContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, SwiftParser.RULE_pattern);
					this.state = 2264;
					if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					this.state = 2265;
					this.match(SwiftParser.AS);
					this.state = 2266;
					this.type(0);
					}
					} 
				}
				this.state = 2271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,283,this._ctx);
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
		this.enterRule(_localctx, 468, SwiftParser.RULE_tuplePattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2272;
			this.match(SwiftParser.LEFT_PARENTHESIS);
			this.state = 2274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,284,this._ctx) ) {
			case 1:
				{
				this.state = 2273;
				this.tuplePatternElementList();
				}
				break;
			}
			this.state = 2276;
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
		this.enterRule(_localctx, 470, SwiftParser.RULE_tuplePatternElementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2278;
			this.tuplePatternElement();
			this.state = 2283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2279;
				this.match(SwiftParser.COMMA);
				this.state = 2280;
				this.tuplePatternElement();
				}
				}
				this.state = 2285;
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
		this.enterRule(_localctx, 472, SwiftParser.RULE_tuplePatternElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,287,this._ctx) ) {
			case 1:
				{
				this.state = 2288;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SwiftParser.UNDERSCORE:
					{
					this.state = 2286;
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
					this.state = 2287;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2290;
				this.match(SwiftParser.COLON);
				}
				break;
			}
			this.state = 2293;
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
		this.enterRule(_localctx, 474, SwiftParser.RULE_genericParameterClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2295;
			this.match(SwiftParser.LESS_THAN);
			this.state = 2296;
			this.genericParameterList();
			this.state = 2297;
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
		this.enterRule(_localctx, 476, SwiftParser.RULE_genericParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2299;
			this.genericParameter();
			this.state = 2304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2300;
				this.match(SwiftParser.COMMA);
				this.state = 2301;
				this.genericParameter();
				}
				}
				this.state = 2306;
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
		this.enterRule(_localctx, 478, SwiftParser.RULE_genericParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2307;
			this.typeName();
			this.state = 2313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SwiftParser.COLON) {
				{
				this.state = 2308;
				this.match(SwiftParser.COLON);
				this.state = 2311;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,289,this._ctx) ) {
				case 1:
					{
					this.state = 2309;
					this.typeIdentifier();
					}
					break;

				case 2:
					{
					this.state = 2310;
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
		this.enterRule(_localctx, 480, SwiftParser.RULE_genericWhereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2315;
			this.match(SwiftParser.WHERE);
			this.state = 2316;
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
		this.enterRule(_localctx, 482, SwiftParser.RULE_requirementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2318;
			this.requirement();
			this.state = 2323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2319;
					this.match(SwiftParser.COMMA);
					this.state = 2320;
					this.requirement();
					}
					} 
				}
				this.state = 2325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,291,this._ctx);
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
		this.enterRule(_localctx, 484, SwiftParser.RULE_requirement);
		try {
			this.state = 2328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,292,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2326;
				this.conformanceRequirement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2327;
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
		this.enterRule(_localctx, 486, SwiftParser.RULE_conformanceRequirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2330;
			this.typeIdentifier();
			this.state = 2331;
			this.match(SwiftParser.COLON);
			this.state = 2334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,293,this._ctx) ) {
			case 1:
				{
				this.state = 2332;
				this.typeIdentifier();
				}
				break;

			case 2:
				{
				this.state = 2333;
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
		this.enterRule(_localctx, 488, SwiftParser.RULE_sameTypeRequirement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2336;
			this.typeIdentifier();
			this.state = 2337;
			this.binaryOperator();
			this.state = 2338;
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
		this.enterRule(_localctx, 490, SwiftParser.RULE_genericArgumentClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2340;
			this.match(SwiftParser.LESS_THAN);
			this.state = 2341;
			this.genericArgumentList();
			this.state = 2342;
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
		this.enterRule(_localctx, 492, SwiftParser.RULE_genericArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2344;
			this.genericArgument();
			this.state = 2349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SwiftParser.COMMA) {
				{
				{
				this.state = 2345;
				this.match(SwiftParser.COMMA);
				this.state = 2346;
				this.genericArgument();
				}
				}
				this.state = 2351;
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
		this.enterRule(_localctx, 494, SwiftParser.RULE_genericArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2352;
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

		case 73:
			return this.statement_sempred(_localctx as StatementContext, predIndex);

		case 110:
			return this.compilationCondition_sempred(_localctx as CompilationConditionContext, predIndex);

		case 132:
			return this.initializer_sempred(_localctx as InitializerContext, predIndex);

		case 148:
			return this.typealiasAssignment_sempred(_localctx as TypealiasAssignmentContext, predIndex);

		case 157:
			return this.parameter_sempred(_localctx as ParameterContext, predIndex);

		case 160:
			return this.defaultArgumentClause_sempred(_localctx as DefaultArgumentClauseContext, predIndex);

		case 176:
			return this.rawValueAssignment_sempred(_localctx as RawValueAssignmentContext, predIndex);

		case 200:
			return this.initializerHead_sempred(_localctx as InitializerHeadContext, predIndex);

		case 233:
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x8F\u0935\x04"+
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
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\u01FA"+
		"\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\u01FF\n\x04\x07\x04\u0201\n\x04"+
		"\f\x04\x0E\x04\u0204\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u020A"+
		"\n\x05\x03\x06\x03\x06\x05\x06\u020E\n\x06\x03\x07\x03\x07\x03\b\x03\b"+
		"\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03"+
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u022F\n\x0F"+
		"\x03\x0F\x03\x0F\x05\x0F\u0233\n\x0F\x03\x0F\x05\x0F\u0236\n\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x05\x0F\u0244\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u024F\n\x0F\f\x0F\x0E\x0F"+
		"\u0252\v\x0F\x03\x10\x03\x10\x05\x10\u0256\n\x10\x03\x10\x05\x10\u0259"+
		"\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\u025F\n\x11\x03\x11\x03"+
		"\x11\x05\x11\u0263\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x06\x13\u026B\n\x13\r\x13\x0E\x13\u026C\x05\x13\u026F\n\x13\x03\x13\x03"+
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0277\n\x14\x03\x15\x03\x15"+
		"\x05\x15\u027B\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0281\n\x16"+
		"\x05\x16\u0283\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\u028A"+
		"\n\x17\f\x17\x0E\x17\u028D\v\x17\x03\x18\x05\x18\u0290\n\x18\x03\x18\x05"+
		"\x18\u0293\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0299\n\x18\x03"+
		"\x19\x03\x19\x05\x19\u029D\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x06\x1A"+
		"\u02A3\n\x1A\r\x1A\x0E\x1A\u02A4\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B"+
		"\u02AB\n\x1B\f\x1B\x0E\x1B\u02AE\v\x1B\x03\x1C\x05\x1C\u02B1\n\x1C\x03"+
		"\x1C\x03\x1C\x07\x1C\u02B5\n\x1C\f\x1C\x0E\x1C\u02B8\v\x1C\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02BF\n\x1D\x03\x1E\x03\x1E\x05\x1E"+
		"\u02C3\n\x1E\x03\x1E\x05\x1E\u02C6\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03 \x03 \x03 \x05 \u02CF\n \x03!\x03!\x03!\x03!\x03!\x05!\u02D6\n!\x03"+
		"!\x05!\u02D9\n!\x03!\x03!\x03!\x05!\u02DE\n!\x03\"\x03\"\x03\"\x03#\x03"+
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x05$\u02EC\n$\x05$\u02EE\n$\x03$"+
		"\x03$\x03%\x03%\x05%\u02F4\n%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%"+
		"\x03%\x03%\x03%\x05%\u0301\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&"+
		"\x05&\u030B\n&\x03\'\x03\'\x03\'\x03\'\x07\'\u0311\n\'\f\'\x0E\'\u0314"+
		"\v\'\x03\'\x05\'\u0317\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03"+
		"(\x03(\x03(\x07(\u0324\n(\f(\x0E(\u0327\v(\x03(\x05(\u032A\n(\x03(\x03"+
		"(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0338\n)\x03"+
		"*\x03*\x03*\x03*\x05*\u033E\n*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03"+
		",\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x05.\u0350\n.\x03/\x03/\x03"+
		"/\x03/\x030\x030\x030\x030\x030\x031\x031\x031\x031\x032\x032\x052\u0361"+
		"\n2\x032\x052\u0364\n2\x032\x032\x033\x053\u0369\n3\x033\x033\x053\u036D"+
		"\n3\x033\x053\u0370\n3\x033\x053\u0373\n3\x033\x033\x034\x034\x054\u0379"+
		"\n4\x034\x034\x054\u037D\n4\x035\x035\x035\x075\u0382\n5\f5\x0E5\u0385"+
		"\v5\x036\x036\x036\x036\x056\u038B\n6\x056\u038D\n6\x037\x057\u0390\n"+
		"7\x037\x037\x038\x038\x038\x038\x078\u0398\n8\f8\x0E8\u039B\v8\x038\x03"+
		"8\x039\x059\u03A0\n9\x039\x039\x03:\x03:\x03:\x03:\x03:\x05:\u03A9\n:"+
		"\x05:\u03AB\n:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03="+
		"\x06=\u03B8\n=\r=\x0E=\u03B9\x05=\u03BC\n=\x03=\x03=\x03>\x03>\x05>\u03C2"+
		"\n>\x03>\x05>\u03C5\n>\x03>\x03>\x03?\x03?\x03@\x03@\x05@\u03CD\n@\x03"+
		"@\x03@\x03@\x03@\x06@\u03D3\n@\r@\x0E@\u03D4\x03A\x03A\x07A\u03D9\nA\f"+
		"A\x0EA\u03DC\vA\x03A\x06A\u03DF\nA\rA\x0EA\u03E0\x05A\u03E3\nA\x03B\x03"+
		"B\x03B\x03B\x03B\x03B\x05B\u03EB\nB\x03C\x03C\x03C\x03C\x03C\x03D\x03"+
		"D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u0400"+
		"\nE\x03E\x05E\u0403\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u040C\n"+
		"E\x03E\x03E\x03E\x03E\x03E\x05E\u0413\nE\x03E\x03E\x03E\x03E\x05E\u0419"+
		"\nE\x05E\u041B\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x03E\x03E\x03E\x03E\x07E\u042C\nE\fE\x0EE\u042F\vE\x03F\x03F\x05F\u0433"+
		"\nF\x03F\x03F\x03G\x03G\x03G\x07G\u043A\nG\fG\x0EG\u043D\vG\x03H\x03H"+
		"\x05H\u0441\nH\x03H\x05H\u0444\nH\x03H\x03H\x05H\u0448\nH\x03I\x03I\x03"+
		"J\x03J\x05J\u044E\nJ\x03J\x06J\u0451\nJ\rJ\x0EJ\u0452\x03K\x03K\x03K\x03"+
		"K\x03K\x03K\x03K\x03K\x03K\x05K\u045E\nK\x03K\x05K\u0461\nK\x03K\x05K"+
		"\u0464\nK\x03L\x06L\u0467\nL\rL\x0EL\u0468\x03M\x03M\x03M\x05M\u046E\n"+
		"M\x03N\x03N\x05N\u0472\nN\x03N\x03N\x05N\u0476\nN\x03N\x03N\x05N\u047A"+
		"\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x07P\u0485\nP\fP\x0E"+
		"P\u0488\vP\x03Q\x03Q\x03Q\x03Q\x05Q\u048E\nQ\x03R\x03R\x03R\x03R\x03S"+
		"\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x05U\u04A0\nU"+
		"\x03V\x03V\x03V\x03V\x05V\u04A6\nV\x03W\x03W\x03W\x05W\u04AB\nW\x03X\x03"+
		"X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x07Y\u04B6\nY\fY\x0EY\u04B9\vY\x03"+
		"Y\x03Y\x03Z\x03Z\x05Z\u04BF\nZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03\\\x03"+
		"\\\x05\\\u04C9\n\\\x03\\\x03\\\x03\\\x05\\\u04CE\n\\\x07\\\u04D0\n\\\f"+
		"\\\x0E\\\u04D3\v\\\x03]\x03]\x03]\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03"+
		"_\x05_\u04E0\n_\x03`\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x05"+
		"b\u04EC\nb\x03c\x03c\x05c\u04F0\nc\x03d\x03d\x05d\u04F4\nd\x03e\x03e\x03"+
		"f\x03f\x05f\u04FA\nf\x03g\x03g\x03g\x03h\x03h\x03h\x03i\x03i\x03i\x07"+
		"i\u0505\ni\fi\x0Ei\u0508\vi\x03j\x03j\x05j\u050C\nj\x03j\x05j\u050F\n"+
		"j\x03j\x03j\x03k\x03k\x05k\u0515\nk\x03l\x03l\x07l\u0519\nl\fl\x0El\u051C"+
		"\vl\x03l\x05l\u051F\nl\x03l\x03l\x03m\x03m\x03m\x05m\u0526\nm\x03n\x03"+
		"n\x03n\x05n\u052B\nn\x03o\x03o\x05o\u052F\no\x03p\x03p\x03p\x03p\x03p"+
		"\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u053C\np\x03p\x03p\x03p\x03p\x07p"+
		"\u0542\np\fp\x0Ep\u0545\vp\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03q\x03"+
		"q\x03q\x03q\x03q\x03q\x03q\x05q\u0555\nq\x03r\x03r\x03s\x03s\x03t\x03"+
		"t\x03t\x07t\u055E\nt\ft\x0Et\u0561\vt\x03u\x03u\x03u\x03u\x03u\x03u\x03"+
		"u\x03u\x03u\x03u\x05u\u056D\nu\x03u\x03u\x03v\x03v\x03w\x03w\x03x\x03"+
		"x\x03x\x03x\x03x\x07x\u057A\nx\fx\x0Ex\u057D\vx\x03x\x03x\x03y\x03y\x03"+
		"y\x03y\x05y\u0585\ny\x03z\x03z\x03{\x03{\x03{\x03{\x03{\x05{\u058E\n{"+
		"\x05{\u0590\n{\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|\x03|"+
		"\x03|\x03|\x03|\x03|\x05|\u05A1\n|\x03}\x05}\u05A4\n}\x03~\x03~\x05~\u05A8"+
		"\n~\x03~\x03~\x03\x7F\x05\x7F\u05AD\n\x7F\x03\x7F\x03\x7F\x05\x7F\u05B1"+
		"\n\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x07\x81"+
		"\u05BA\n\x81\f\x81\x0E\x81\u05BD\v\x81\x03\x82\x03\x82\x05\x82\u05C1\n"+
		"\x82\x03\x83\x05\x83\u05C4\n\x83\x03\x83\x05\x83\u05C7\n\x83\x03\x83\x03"+
		"\x83\x03\x83\x03\x84\x03\x84\x03\x84\x07\x84\u05CF\n\x84\f\x84\x0E\x84"+
		"\u05D2\v\x84\x03\x85\x03\x85\x05\x85\u05D6\n\x85\x03\x86\x03\x86\x03\x86"+
		"\x03\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87"+
		"\x03\x87\x03\x87\x05\x87\u05E6\n\x87\x03\x87\x05\x87\u05E9\n\x87\x05\x87"+
		"\u05EB\n\x87\x05\x87\u05ED\n\x87\x03\x88\x05\x88\u05F0\n\x88\x03\x88\x05"+
		"\x88\u05F3\n\x88\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A"+
		"\x03\x8A\x05\x8A\u05FD\n\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0602\n\x8A"+
		"\x03\x8A\x03\x8A\x05\x8A\u0606\n\x8A\x03\x8B\x05\x8B\u0609\n\x8B\x03\x8B"+
		"\x05\x8B\u060C\n\x8B\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x05\x8C\u0612\n\x8C"+
		"\x03\x8C\x05\x8C\u0615\n\x8C\x03\x8C\x03\x8C\x05\x8C\u0619\n\x8C\x03\x8C"+
		"\x03\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x05\x8E"+
		"\u0624\n\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0629\n\x8E\x03\x8E\x03\x8E"+
		"\x03\x8F\x05\x8F\u062E\n\x8F\x03\x8F\x05\x8F\u0631\n\x8F\x03\x8F\x03\x8F"+
		"\x03\x90\x05\x90\u0636\n\x90\x03\x90\x05\x90\u0639\n\x90\x03\x90\x03\x90"+
		"\x03\x91\x03\x91\x03\x91\x05\x91\u0640\n\x91\x03\x91\x03\x91\x03\x91\x05"+
		"\x91\u0645\n\x91\x03\x91\x03\x91\x03\x92\x05\x92\u064A\n\x92\x03\x92\x03"+
		"\x92\x05\x92\u064E\n\x92\x03\x92\x03\x92\x03\x93\x05\x93\u0653\n\x93\x03"+
		"\x93\x03\x93\x05\x93\u0657\n\x93\x03\x93\x03\x93\x03\x94\x05\x94\u065C"+
		"\n\x94\x03\x94\x05\x94\u065F\n\x94\x03\x94\x03\x94\x03\x94\x05\x94\u0664"+
		"\n\x94\x03\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x96\x03\x96"+
		"\x03\x97\x03\x97\x03\x97\x05\x97\u0671\n\x97\x03\x97\x03\x97\x05\x97\u0675"+
		"\n\x97\x03\x97\x05\x97\u0678\n\x97\x03\x98\x05\x98\u067B\n\x98\x03\x98"+
		"\x05\x98\u067E\n\x98\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0684\n\x99"+
		"\x03\x9A\x03\x9A\x05\x9A\u0688\n\x9A\x03\x9A\x05\x9A\u068B\n\x9A\x03\x9B"+
		"\x03\x9B\x05\x9B\u068F\n\x9B\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03\x9D\x03"+
		"\x9D\x05\x9D\u0697\n\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x07\x9E"+
		"\u069E\n\x9E\f\x9E\x0E\x9E\u06A1\v\x9E\x03\x9F\x05\x9F\u06A4\n\x9F\x03"+
		"\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u06AB\n\x9F\x03\xA0\x03\xA0"+
		"\x05\xA0\u06AF\n\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03"+
		"\xA3\x05\xA3\u06B8\n\xA3\x03\xA3\x05\xA3\u06BB\n\xA3\x03\xA3\x03\xA3\x05"+
		"\xA3\u06BF\n\xA3\x03\xA4\x05\xA4\u06C2\n\xA4\x03\xA4\x03\xA4\x03\xA4\x05"+
		"\xA4\u06C7\n\xA4\x03\xA4\x05\xA4\u06CA\n\xA4\x03\xA4\x05\xA4\u06CD\n\xA4"+
		"\x03\xA4\x03\xA4\x05\xA4\u06D1\n\xA4\x03\xA4\x03\xA4\x03\xA5\x06\xA5\u06D6"+
		"\n\xA5\r\xA5\x0E\xA5\u06D7\x03\xA6\x03\xA6\x03\xA6\x05\xA6\u06DD\n\xA6"+
		"\x03\xA7\x05\xA7\u06E0\n\xA7\x03\xA7\x05\xA7\u06E3\n\xA7\x03\xA7\x03\xA7"+
		"\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x07\xA8\u06EB\n\xA8\f\xA8\x0E\xA8\u06EE"+
		"\v\xA8\x03\xA9\x03\xA9\x05\xA9\u06F2\n\xA9\x03\xAA\x03\xAA\x03\xAB\x03"+
		"\xAB\x03\xAC\x03\xAC\x03\xAC\x05\xAC\u06FB\n\xAC\x03\xAC\x03\xAC\x05\xAC"+
		"\u06FF\n\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x06\xAD\u0706\n\xAD"+
		"\r\xAD\x0E\xAD\u0707\x03\xAE\x03\xAE\x03\xAE\x05\xAE\u070D\n\xAE\x03\xAF"+
		"\x05\xAF\u0710\n\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB0\x07"+
		"\xB0\u0718\n\xB0\f\xB0\x0E\xB0\u071B\v\xB0\x03\xB1\x03\xB1\x05\xB1\u071F"+
		"\n\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x03\xB3\x05\xB3"+
		"\u0728\n\xB3\x03\xB4\x05\xB4\u072B\n\xB4\x03\xB4\x05\xB4\u072E\n\xB4\x03"+
		"\xB4\x03\xB4\x03\xB4\x05\xB4\u0733\n\xB4\x03\xB4\x05\xB4\u0736\n\xB4\x03"+
		"\xB4\x05\xB4\u0739\n\xB4\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB6\x03\xB6"+
		"\x05\xB6\u0741\n\xB6\x03\xB6\x03\xB6\x03\xB7\x06\xB7\u0746\n\xB7\r\xB7"+
		"\x0E\xB7\u0747\x03\xB8\x03\xB8\x05\xB8\u074C\n\xB8\x03\xB9\x05\xB9\u074F"+
		"\n\xB9\x03\xB9\x05\xB9\u0752\n\xB9\x03\xB9\x05\xB9\u0755\n\xB9\x03\xB9"+
		"\x03\xB9\x05\xB9\u0759\n\xB9\x03\xB9\x03\xB9\x03\xB9\x05\xB9\u075E\n\xB9"+
		"\x03\xB9\x05\xB9\u0761\n\xB9\x03\xB9\x05\xB9\u0764\n\xB9\x03\xB9\x03\xB9"+
		"\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x05\xBB\u076C\n\xBB\x03\xBB\x03\xBB\x03"+
		"\xBC\x06\xBC\u0771\n\xBC\r\xBC\x0E\xBC\u0772\x03\xBD\x03\xBD\x05\xBD\u0777"+
		"\n\xBD\x03\xBE\x05\xBE\u077A\n\xBE\x03\xBE\x05\xBE\u077D\n\xBE\x03\xBE"+
		"\x03\xBE\x03\xBE\x05\xBE\u0782\n\xBE\x03\xBE\x05\xBE\u0785\n\xBE\x03\xBE"+
		"\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0\x05\xC0\u078D\n\xC0\x03\xC0\x03"+
		"\xC0\x03\xC1\x06\xC1\u0792\n\xC1\r\xC1\x0E\xC1\u0793\x03\xC2\x03\xC2\x05"+
		"\xC2\u0798\n\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x05\xC3"+
		"\u07A0\n\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03"+
		"\xC5\x05\xC5\u07AA\n\xC5\x03\xC5\x03\xC5\x05\xC5\u07AE\n\xC5\x03\xC6\x03"+
		"\xC6\x05\xC6\u07B2\n\xC6\x03\xC6\x03\xC6\x05\xC6\u07B6\n\xC6\x03\xC6\x05"+
		"\xC6\u07B9\n\xC6\x03\xC7\x03\xC7\x03\xC7\x05\xC7\u07BE\n\xC7\x03\xC7\x03"+
		"\xC7\x03\xC8\x05\xC8\u07C3\n\xC8\x03\xC8\x05\xC8\u07C6\n\xC8\x03\xC8\x03"+
		"\xC8\x03\xC8\x05\xC8\u07CB\n\xC8\x03\xC8\x05\xC8\u07CE\n\xC8\x03\xC8\x05"+
		"\xC8\u07D1\n\xC8\x03\xC9\x03\xC9\x05\xC9\u07D5\n\xC9\x03\xC9\x03\xC9\x05"+
		"\xC9\u07D9\n\xC9\x03\xC9\x05\xC9\u07DC\n\xC9\x03\xC9\x03\xC9\x03\xCA\x05"+
		"\xCA\u07E1\n\xCA\x03\xCA\x05\xCA\u07E4\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05"+
		"\xCA\u07E9\n\xCA\x03\xCB\x03\xCB\x03\xCC\x05\xCC\u07EE\n\xCC\x03\xCC\x03"+
		"\xCC\x03\xCC\x03\xCD\x05\xCD\u07F4\n\xCD\x03\xCD\x05\xCD\u07F7\n\xCD\x03"+
		"\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u07FD\n\xCD\x03\xCD\x03\xCD\x03\xCE"+
		"\x03\xCE\x05\xCE\u0803\n\xCE\x03\xCE\x03\xCE\x03\xCF\x06\xCF\u0808\n\xCF"+
		"\r\xCF\x0E\xCF\u0809\x03\xD0\x03\xD0\x05\xD0\u080E\n\xD0\x03\xD1\x03\xD1"+
		"\x03\xD1\x05\xD1\u0813\n\xD1\x03\xD1\x03\xD1\x05\xD1\u0817\n\xD1\x03\xD2"+
		"\x05\xD2\u081A\n\xD2\x03\xD2\x05\xD2\u081D\n\xD2\x03\xD2\x03\xD2\x05\xD2"+
		"\u0821\n\xD2\x03\xD2\x03\xD2\x03\xD3\x03\xD3\x05\xD3\u0827\n\xD3\x03\xD3"+
		"\x03\xD3\x03\xD4\x03\xD4\x03\xD4\x05\xD4\u082E\n\xD4\x03\xD5\x03\xD5\x03"+
		"\xD5\x03\xD5\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD7\x03"+
		"\xD7\x05\xD7\u083C\n\xD7\x03\xD8\x03\xD8\x03\xD8\x03\xD9\x03\xD9\x03\xD9"+
		"\x03\xD9\x05\xD9\u0845\n\xD9\x03\xD9\x03\xD9\x03\xDA\x06\xDA\u084A\n\xDA"+
		"\r\xDA\x0E\xDA\u084B\x03\xDB\x03\xDB\x03\xDB\x05\xDB\u0851\n\xDB\x03\xDC"+
		"\x03\xDC\x03\xDC\x03\xDC\x03\xDD\x03\xDD\x03\xDD\x03\xDD\x03\xDE\x03\xDE"+
		"\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xDF\x07\xDF\u0862\n\xDF\f\xDF\x0E"+
		"\xDF\u0865\v\xDF\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1"+
		"\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1"+
		"\x03\xE1\x05\xE1\u0878\n\xE1\x03\xE2\x06\xE2\u087B\n\xE2\r\xE2\x0E\xE2"+
		"\u087C\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x05\xE3\u0883\n\xE3\x03\xE4\x03"+
		"\xE4\x03\xE5\x03\xE5\x03\xE5\x05\xE5\u088A\n\xE5\x03\xE6\x03\xE6\x03\xE7"+
		"\x03\xE7\x05\xE7\u0890\n\xE7\x03\xE7\x03\xE7\x03\xE8\x06\xE8\u0895\n\xE8"+
		"\r\xE8\x0E\xE8\u0896\x03\xE9\x06\xE9\u089A\n\xE9\r\xE9\x0E\xE9\u089B\x03"+
		"\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03"+
		"\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03"+
		"\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x05"+
		"\xEA\u08B9\n\xEA\x03\xEB\x03\xEB\x03\xEB\x05\xEB\u08BE\n\xEB\x03\xEB\x03"+
		"\xEB\x05\xEB\u08C2\n\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x05\xEB\u08C8"+
		"\n\xEB\x03\xEB\x05\xEB\u08CB\n\xEB\x03\xEB\x03\xEB\x03\xEB\x05\xEB\u08D0"+
		"\n\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x05\xEB"+
		"\u08D9\n\xEB\x03\xEB\x03\xEB\x03\xEB\x07\xEB\u08DE\n\xEB\f\xEB\x0E\xEB"+
		"\u08E1\v\xEB\x03\xEC\x03\xEC\x05\xEC\u08E5\n\xEC\x03\xEC\x03\xEC\x03\xED"+
		"\x03\xED\x03\xED\x07\xED\u08EC\n\xED\f\xED\x0E\xED\u08EF\v\xED\x03\xEE"+
		"\x03\xEE\x05\xEE\u08F3\n\xEE\x03\xEE\x05\xEE\u08F6\n\xEE\x03\xEE\x03\xEE"+
		"\x03\xEF\x03\xEF\x03\xEF\x03\xEF\x03\xF0\x03\xF0\x03\xF0\x07\xF0\u0901"+
		"\n\xF0\f\xF0\x0E\xF0\u0904\v\xF0\x03\xF1\x03\xF1\x03\xF1\x03\xF1\x05\xF1"+
		"\u090A\n\xF1\x05\xF1\u090C\n\xF1\x03\xF2\x03\xF2\x03\xF2\x03\xF3\x03\xF3"+
		"\x03\xF3\x07\xF3\u0914\n\xF3\f\xF3\x0E\xF3\u0917\v";
	private static readonly _serializedATNSegment1: string =
		"\xF3\x03\xF4\x03\xF4\x05\xF4\u091B\n\xF4\x03\xF5\x03\xF5\x03\xF5\x03\xF5"+
		"\x05\xF5\u0921\n\xF5\x03\xF6\x03\xF6\x03\xF6\x03\xF6\x03\xF7\x03\xF7\x03"+
		"\xF7\x03\xF7\x03\xF8\x03\xF8\x03\xF8\x07\xF8\u092E\n\xF8\f\xF8\x0E\xF8"+
		"\u0931\v\xF8\x03\xF9\x03\xF9\x03\xF9\x02\x02\x06\x1C\x88\xDE\u01D4\xFA"+
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02"+
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02"+
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02"+
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02"+
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02"+
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02"+
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02"+
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02"+
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02"+
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A"+
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118"+
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126"+
		"\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134"+
		"\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142"+
		"\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150"+
		"\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E"+
		"\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C"+
		"\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A"+
		"\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188"+
		"\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196"+
		"\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4"+
		"\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2"+
		"\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0"+
		"\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE"+
		"\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02\u01DC"+
		"\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8\x02\u01EA"+
		"\x02\u01EC\x02\u01EE\x02\u01F0\x02\x02\x10\x04\x02Ib\x84\x86\x04\x02."+
		".77\x03\x02\x87\x8B\x03\x02\x8D\x8E\b\x02cchippuuw\x7F\x8F\x8F\x04\x02"+
		"[[__\x04\x02iipp\x04\x02AADD\x04\x02\x0E\x0E\x19\x19\t\x02\x04\x04\x06"+
		"\x06\t\t\x0E\x0E\x13\x13\x16\x16\x18\x19\x04\x021166\x05\x02RRTT]]\x07"+
		"\x02\b\b\r\r\x0F\x0F\x12\x12\x14\x14\x04\x02SSUU\u09D6\x02\u01F2\x03\x02"+
		"\x02\x02\x04\u01F5\x03\x02\x02\x02\x06\u01F9\x03\x02\x02\x02\b\u0209\x03"+
		"\x02\x02\x02\n\u020D\x03\x02\x02\x02\f\u020F\x03\x02\x02\x02\x0E\u0211"+
		"\x03\x02\x02\x02\x10\u0213\x03\x02\x02\x02\x12\u0215\x03\x02\x02\x02\x14"+
		"\u0217\x03\x02\x02\x02\x16\u0219\x03\x02\x02\x02\x18\u021C\x03\x02\x02"+
		"\x02\x1A\u021F\x03\x02\x02\x02\x1C\u0243\x03\x02\x02\x02\x1E\u0253\x03"+
		"\x02\x02\x02 \u025C\x03\x02\x02\x02\"\u0264\x03\x02\x02\x02$\u0266\x03"+
		"\x02\x02\x02&\u0276\x03\x02\x02\x02(\u027A\x03\x02\x02\x02*\u027C\x03"+
		"\x02\x02\x02,\u0286\x03\x02\x02\x02.\u0298\x03\x02\x02\x020\u029A\x03"+
		"\x02\x02\x022\u029E\x03\x02\x02\x024\u02A6\x03\x02\x02\x026\u02B0\x03"+
		"\x02\x02\x028\u02BE\x03\x02\x02\x02:\u02C5\x03\x02\x02\x02<\u02C7\x03"+
		"\x02\x02\x02>\u02CB\x03\x02\x02\x02@\u02DD\x03\x02\x02\x02B\u02DF\x03"+
		"\x02\x02\x02D\u02E2\x03\x02\x02\x02F\u02ED\x03\x02\x02\x02H\u0300\x03"+
		"\x02\x02\x02J\u030A\x03\x02\x02\x02L\u030C\x03\x02\x02\x02N\u031A\x03"+
		"\x02\x02\x02P\u0337\x03\x02\x02\x02R\u033D\x03\x02\x02\x02T\u033F\x03"+
		"\x02\x02\x02V\u0343\x03\x02\x02\x02X\u0348\x03\x02\x02\x02Z\u034F\x03"+
		"\x02\x02\x02\\\u0351\x03\x02\x02\x02^\u0355\x03\x02\x02\x02`\u035A\x03"+
		"\x02\x02\x02b\u035E\x03\x02\x02\x02d\u0372\x03\x02\x02\x02f\u037C\x03"+
		"\x02\x02\x02h\u037E\x03\x02\x02\x02j\u0386\x03\x02\x02\x02l\u038F\x03"+
		"\x02\x02\x02n\u0393\x03\x02\x02\x02p\u039F\x03\x02\x02\x02r\u03AA\x03"+
		"\x02\x02\x02t\u03AC\x03\x02\x02\x02v\u03AF\x03\x02\x02\x02x\u03B3\x03"+
		"\x02\x02\x02z\u03C4\x03\x02\x02\x02|\u03C8\x03\x02\x02\x02~\u03CA\x03"+
		"\x02\x02\x02\x80\u03E2\x03\x02\x02\x02\x82\u03EA\x03\x02\x02\x02\x84\u03EC"+
		"\x03\x02\x02\x02\x86\u03F1\x03\x02\x02\x02\x88\u03F6\x03\x02\x02\x02\x8A"+
		"\u0430\x03\x02\x02\x02\x8C\u0436\x03\x02\x02\x02\x8E\u0443\x03\x02\x02"+
		"\x02\x90\u0449\x03\x02\x02\x02\x92\u0450\x03\x02\x02\x02\x94\u0463\x03"+
		"\x02\x02\x02\x96\u0466\x03\x02\x02\x02\x98\u046D\x03\x02\x02\x02\x9A\u046F"+
		"\x03\x02\x02\x02\x9C\u047D\x03\x02\x02\x02\x9E\u0481\x03\x02\x02\x02\xA0"+
		"\u048D\x03\x02\x02\x02\xA2\u048F\x03\x02\x02\x02\xA4\u0493\x03\x02\x02"+
		"\x02\xA6\u0497\x03\x02\x02\x02\xA8\u049F\x03\x02\x02\x02\xAA\u04A1\x03"+
		"\x02\x02\x02\xAC\u04A7\x03\x02\x02\x02\xAE\u04AC\x03\x02\x02\x02\xB0\u04B1"+
		"\x03\x02\x02\x02\xB2\u04BE\x03\x02\x02\x02\xB4\u04C2\x03\x02\x02\x02\xB6"+
		"\u04C6\x03\x02\x02\x02\xB8\u04D4\x03\x02\x02\x02\xBA\u04D7\x03\x02\x02"+
		"\x02\xBC\u04DA\x03\x02\x02\x02\xBE\u04E1\x03\x02\x02\x02\xC0\u04E4\x03"+
		"\x02\x02\x02\xC2\u04EB\x03\x02\x02\x02\xC4\u04ED\x03\x02\x02\x02\xC6\u04F1"+
		"\x03\x02\x02\x02\xC8\u04F5\x03\x02\x02\x02\xCA\u04F7\x03\x02\x02\x02\xCC"+
		"\u04FB\x03\x02\x02\x02\xCE\u04FE\x03\x02\x02\x02\xD0\u0501\x03\x02\x02"+
		"\x02\xD2\u0509\x03\x02\x02\x02\xD4\u0514\x03\x02\x02\x02\xD6\u0516\x03"+
		"\x02\x02\x02\xD8\u0522\x03\x02\x02\x02\xDA\u0527\x03\x02\x02\x02\xDC\u052C"+
		"\x03\x02\x02\x02\xDE\u053B\x03\x02\x02\x02\xE0\u0546\x03\x02\x02\x02\xE2"+
		"\u0556\x03\x02\x02\x02\xE4\u0558\x03\x02\x02\x02\xE6\u055A\x03\x02\x02"+
		"\x02\xE8\u0562\x03\x02\x02\x02\xEA\u0570\x03\x02\x02\x02\xEC\u0572\x03"+
		"\x02\x02\x02\xEE\u0574\x03\x02\x02\x02\xF0\u0584\x03\x02\x02\x02\xF2\u0586"+
		"\x03\x02\x02\x02\xF4\u0588\x03\x02\x02\x02\xF6\u05A0\x03\x02\x02\x02\xF8"+
		"\u05A3\x03\x02\x02\x02\xFA\u05A5\x03\x02\x02\x02\xFC\u05AC\x03\x02\x02"+
		"\x02\xFE\u05B4\x03\x02\x02\x02\u0100\u05B6\x03\x02\x02\x02\u0102\u05C0"+
		"\x03\x02\x02\x02\u0104\u05C3\x03\x02\x02\x02\u0106\u05CB\x03\x02\x02\x02"+
		"\u0108\u05D3\x03\x02\x02\x02\u010A\u05D7\x03\x02\x02\x02\u010C\u05DB\x03"+
		"\x02\x02\x02\u010E\u05EF\x03\x02\x02\x02\u0110\u05F6\x03\x02\x02\x02\u0112"+
		"\u0605\x03\x02\x02\x02\u0114\u0608\x03\x02\x02\x02\u0116\u0611\x03\x02"+
		"\x02\x02\u0118\u061C\x03\x02\x02\x02\u011A\u0620\x03\x02\x02\x02\u011C"+
		"\u062D\x03\x02\x02\x02\u011E\u0635\x03\x02\x02\x02\u0120\u063C\x03\x02"+
		"\x02\x02\u0122\u0649\x03\x02\x02\x02\u0124\u0652\x03\x02\x02\x02\u0126"+
		"\u065B\x03\x02\x02\x02\u0128\u0667\x03\x02\x02\x02\u012A\u0669\x03\x02"+
		"\x02\x02\u012C\u066D\x03\x02\x02\x02\u012E\u067A\x03\x02\x02\x02\u0130"+
		"\u0683\x03\x02\x02\x02\u0132\u0685\x03\x02\x02\x02\u0134\u068C\x03\x02"+
		"\x02\x02\u0136\u0692\x03\x02\x02\x02\u0138\u0694\x03\x02\x02\x02\u013A"+
		"\u069A\x03\x02\x02\x02\u013C\u06A3\x03\x02\x02\x02\u013E\u06AE\x03\x02"+
		"\x02\x02\u0140\u06B0\x03\x02\x02\x02\u0142\u06B2\x03\x02\x02\x02\u0144"+
		"\u06B7\x03\x02\x02\x02\u0146\u06C1\x03\x02\x02\x02\u0148\u06D5\x03\x02"+
		"\x02\x02\u014A\u06DC\x03\x02\x02\x02\u014C\u06DF\x03\x02\x02\x02\u014E"+
		"\u06E7\x03\x02\x02\x02\u0150\u06EF\x03\x02\x02\x02\u0152\u06F3\x03\x02"+
		"\x02\x02\u0154\u06F5\x03\x02\x02\x02\u0156\u06F7\x03\x02\x02\x02\u0158"+
		"\u0705\x03\x02\x02\x02\u015A\u070C\x03\x02\x02\x02\u015C\u070F\x03\x02"+
		"\x02\x02\u015E\u0714\x03\x02\x02\x02\u0160\u071C\x03\x02\x02\x02\u0162"+
		"\u0720\x03\x02\x02\x02\u0164\u0727\x03\x02\x02\x02\u0166\u072A\x03\x02"+
		"\x02\x02\u0168\u073C\x03\x02\x02\x02\u016A\u073E\x03\x02\x02\x02\u016C"+
		"\u0745\x03\x02\x02\x02\u016E\u074B\x03\x02\x02\x02\u0170\u074E\x03\x02"+
		"\x02\x02\u0172\u0767\x03\x02\x02\x02\u0174\u0769\x03\x02\x02\x02\u0176"+
		"\u0770\x03\x02\x02\x02\u0178\u0776\x03\x02\x02\x02\u017A\u0779\x03\x02"+
		"\x02\x02\u017C\u0788\x03\x02\x02\x02\u017E\u078A\x03\x02\x02\x02\u0180"+
		"\u0791\x03\x02\x02\x02\u0182\u0797\x03\x02\x02\x02\u0184\u079F\x03\x02"+
		"\x02\x02\u0186\u07A1\x03\x02\x02\x02\u0188\u07A6\x03\x02\x02\x02\u018A"+
		"\u07AF\x03\x02\x02\x02\u018C\u07BA\x03\x02\x02\x02\u018E\u07C2\x03\x02"+
		"\x02\x02\u0190\u07D2\x03\x02\x02\x02\u0192\u07E0\x03\x02\x02\x02\u0194"+
		"\u07EA\x03\x02\x02\x02\u0196\u07ED\x03\x02\x02\x02\u0198\u07F3\x03\x02"+
		"\x02\x02\u019A\u0800\x03\x02\x02\x02\u019C\u0807\x03\x02\x02\x02\u019E"+
		"\u080D\x03\x02\x02\x02\u01A0\u080F\x03\x02\x02\x02\u01A2\u0819\x03\x02"+
		"\x02\x02\u01A4\u0824\x03\x02\x02\x02\u01A6\u082D\x03\x02\x02\x02\u01A8"+
		"\u082F\x03\x02\x02\x02\u01AA\u0833\x03\x02\x02\x02\u01AC\u0837\x03\x02"+
		"\x02\x02\u01AE\u083D\x03\x02\x02\x02\u01B0\u0840\x03\x02\x02\x02\u01B2"+
		"\u0849\x03\x02\x02\x02\u01B4\u0850\x03\x02\x02\x02\u01B6\u0852\x03\x02"+
		"\x02\x02\u01B8\u0856\x03\x02\x02\x02\u01BA\u085A\x03\x02\x02\x02\u01BC"+
		"\u085E\x03\x02\x02\x02\u01BE\u0866\x03\x02\x02\x02\u01C0\u0877\x03\x02"+
		"\x02\x02\u01C2\u087A\x03\x02\x02\x02\u01C4\u087E\x03\x02\x02\x02\u01C6"+
		"\u0884\x03\x02\x02\x02\u01C8\u0886\x03\x02\x02\x02\u01CA\u088B\x03\x02"+
		"\x02\x02\u01CC\u088D\x03\x02\x02\x02\u01CE\u0894\x03\x02\x02\x02\u01D0"+
		"\u0899\x03\x02\x02\x02\u01D2\u08B8\x03\x02\x02\x02\u01D4\u08D8\x03\x02"+
		"\x02\x02\u01D6\u08E2\x03\x02\x02\x02\u01D8\u08E8\x03\x02\x02\x02\u01DA"+
		"\u08F5\x03\x02\x02\x02\u01DC\u08F9\x03\x02\x02\x02\u01DE\u08FD\x03\x02"+
		"\x02\x02\u01E0\u0905\x03\x02\x02\x02\u01E2\u090D\x03\x02\x02\x02\u01E4"+
		"\u0910\x03\x02\x02\x02\u01E6\u091A\x03\x02\x02\x02\u01E8\u091C\x03\x02"+
		"\x02\x02\u01EA\u0922\x03\x02\x02\x02\u01EC\u0926\x03\x02\x02\x02\u01EE"+
		"\u092A\x03\x02\x02\x02\u01F0\u0932\x03\x02\x02\x02\u01F2\u01F3\x05\x96"+
		"L\x02\u01F3\u01F4\x07\x02\x02\x03\u01F4\x03\x03\x02\x02\x02\u01F5\u01F6"+
		"\t\x02\x02\x02\u01F6\x05\x03\x02\x02\x02\u01F7\u01FA\x079\x02\x02\u01F8"+
		"\u01FA\x05\x04\x03\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02"+
		"\x02\x02\u01FA\u0202\x03\x02\x02\x02\u01FB\u01FE\x07g\x02\x02\u01FC\u01FF"+
		"\x079\x02\x02\u01FD\u01FF\x05\x04\x03\x02\u01FE\u01FC\x03\x02\x02\x02"+
		"\u01FE\u01FD\x03\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200\u01FB\x03"+
		"\x02\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202"+
		"\u0203\x03\x02\x02\x02\u0203\x07\x03\x02\x02\x02\u0204\u0202\x03\x02\x02"+
		"\x02\u0205\u020A\x05\n\x06\x02\u0206\u020A\x05\x12\n\x02\u0207\u020A\x05"+
		"\f\x07\x02\u0208\u020A\x05\x0E\b\x02\u0209\u0205\x03\x02\x02\x02\u0209"+
		"\u0206\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u0208\x03\x02"+
		"\x02\x02\u020A\t\x03\x02\x02\x02\u020B\u020E\x05\x10\t\x02\u020C\u020E"+
		"\x07\x8C\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02"+
		"\u020E\v\x03\x02\x02\x02\u020F\u0210\t\x03\x02\x02\u0210\r\x03\x02\x02"+
		"\x02\u0211\u0212\x070\x02\x02\u0212\x0F\x03\x02\x02\x02\u0213\u0214\t"+
		"\x04\x02\x02\u0214\x11\x03\x02\x02\x02\u0215\u0216\t\x05\x02\x02\u0216"+
		"\x13\x03\x02\x02\x02\u0217\u0218\t\x06\x02\x02\u0218\x15\x03\x02\x02\x02"+
		"\u0219\u021A\x06\f\x02\x02\u021A\u021B\x05\x14\v\x02\u021B\x17\x03\x02"+
		"\x02\x02\u021C\u021D\x06\r\x03\x02\u021D\u021E\x05\x14\v\x02\u021E\x19"+
		"\x03\x02\x02\x02\u021F\u0220\x06\x0E\x04\x02\u0220\u0221\x05\x14\v\x02"+
		"\u0221\x1B\x03\x02\x02\x02\u0222\u0223\b\x0F\x01\x02\u0223\u0224\x07l"+
		"\x02\x02\u0224\u0225\x05\x1C\x0F\x02\u0225\u0226\x07r\x02\x02\u0226\u0244"+
		"\x03\x02\x02\x02\u0227\u0228\x07l\x02\x02\u0228\u0229\x05\x1C\x0F\x02"+
		"\u0229\u022A\x07f\x02\x02\u022A\u022B\x05\x1C\x0F\x02\u022B\u022C\x07"+
		"r\x02\x02\u022C\u0244\x03\x02\x02\x02\u022D\u022F\x05\u01CE\xE8\x02\u022E"+
		"\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02"+
		"\x02\x02\u0230\u0235\x05*\x16\x02\u0231\u0233\x076\x02\x02\u0232\u0231"+
		"\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02"+
		"\u0234\u0236\x071\x02\x02\u0235\u0232\x03\x02\x02\x02\u0235\u0234\x03"+
		"\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u0238\x07d\x02\x02\u0238"+
		"\u0239\x05\x1C\x0F\f\u0239\u0244\x03\x02\x02\x02\u023A\u0244\x05 \x11"+
		"\x02\u023B\u0244\x05$\x13\x02\u023C\u0244\x052\x1A\x02\u023D\u0244\x07"+
		"+\x02\x02\u023E\u0244\x073\x02\x02\u023F\u0240\x07m\x02\x02\u0240\u0241"+
		"\x05\x1C\x0F\x02\u0241\u0242\x07s\x02\x02\u0242\u0244\x03\x02\x02\x02"+
		"\u0243\u0222\x03\x02\x02\x02\u0243\u0227\x03\x02\x02\x02\u0243\u022E\x03"+
		"\x02\x02\x02\u0243\u023A\x03\x02\x02\x02\u0243\u023B\x03\x02\x02\x02\u0243"+
		"\u023C\x03\x02\x02\x02\u0243\u023D\x03\x02\x02\x02\u0243\u023E\x03\x02"+
		"\x02\x02\u0243\u023F\x03\x02\x02\x02\u0244\u0250\x03\x02\x02\x02\u0245"+
		"\u0246\f\t\x02\x02\u0246\u0247\x06\x0F\x06\x02\u0247\u024F\x07p\x02\x02"+
		"\u0248\u0249\f\b\x02\x02\u0249\u024A\x06\x0F\b\x02\u024A\u024F\x07i\x02"+
		"\x02\u024B\u024C\f\x06\x02\x02\u024C\u024D\x07o\x02\x02\u024D\u024F\t"+
		"\x07\x02\x02\u024E\u0245\x03\x02\x02\x02\u024E\u0248\x03\x02\x02\x02\u024E"+
		"\u024B\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02"+
		"\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\x1D\x03\x02\x02\x02\u0252\u0250"+
		"\x03\x02\x02\x02\u0253\u0255\x07f\x02\x02\u0254\u0256\x05\u01CE\xE8\x02"+
		"\u0255\u0254\x03\x02\x02\x02\u0255\u0256\x03\x02\x02\x02\u0256\u0258\x03"+
		"\x02\x02\x02\u0257\u0259\x07\f\x02\x02\u0258\u0257\x03\x02\x02\x02\u0258"+
		"\u0259\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025B\x05\x1C"+
		"\x0F\x02\u025B\x1F\x03\x02\x02\x02\u025C\u025E\x05\"\x12\x02\u025D\u025F"+
		"\x05\u01EC\xF7\x02\u025E\u025D\x03\x02\x02\x02\u025E\u025F\x03\x02\x02"+
		"\x02\u025F\u0262\x03\x02\x02\x02\u0260\u0261\x07o\x02\x02\u0261\u0263"+
		"\x05 \x11\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02"+
		"\u0263!\x03\x02\x02\x02\u0264\u0265\x05\x04\x03\x02\u0265#\x03\x02\x02"+
		"\x02\u0266\u026E\x07m\x02\x02\u0267\u026A\x05&\x14\x02\u0268\u0269\x07"+
		"g\x02\x02\u0269\u026B\x05&\x14\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026C"+
		"\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02"+
		"\u026D\u026F\x03\x02\x02\x02\u026E\u0267\x03\x02\x02\x02\u026E\u026F\x03"+
		"\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x07s\x02\x02\u0271"+
		"%\x03\x02\x02\x02\u0272\u0273\x05(\x15\x02\u0273\u0274\x05\x1E\x10\x02"+
		"\u0274\u0277\x03\x02\x02\x02\u0275\u0277\x05\x1C\x0F\x02\u0276\u0272\x03"+
		"\x02\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277\'\x03\x02\x02\x02\u0278"+
		"\u027B\x079\x02\x02\u0279\u027B\x05\x04\x03\x02\u027A\u0278\x03\x02\x02"+
		"\x02\u027A\u0279\x03\x02\x02\x02\u027B)\x03\x02\x02\x02\u027C\u0282\x07"+
		"m\x02\x02\u027D\u0280\x05,\x17\x02\u027E\u027F\x06\x16\n\x02\u027F\u0281"+
		"\x05\x14\v\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02"+
		"\u0281\u0283\x03\x02\x02\x02\u0282\u027D\x03\x02\x02\x02\u0282\u0283\x03"+
		"\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x07s\x02\x02\u0285"+
		"+\x03\x02\x02\x02\u0286\u028B\x05.\x18\x02\u0287\u0288\x07g\x02\x02\u0288"+
		"\u028A\x05.\x18\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028D\x03\x02\x02"+
		"\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C-\x03"+
		"\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0290\x05\u01CE\xE8\x02"+
		"\u028F\u028E\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0292\x03"+
		"\x02\x02\x02\u0291\u0293\x07\f\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292"+
		"\u0293\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0299\x05\x1C"+
		"\x0F\x02\u0295\u0296\x050\x19\x02\u0296\u0297\x05\x1E\x10\x02\u0297\u0299"+
		"\x03\x02\x02\x02\u0298\u028F\x03\x02\x02\x02\u0298\u0295\x03\x02\x02\x02"+
		"\u0299/\x03\x02\x02\x02\u029A\u029C\x079\x02\x02\u029B\u029D\x05\x04\x03"+
		"\x02\u029C\u029B\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D1\x03"+
		"\x02\x02\x02\u029E\u02A2\x05 \x11\x02\u029F\u02A0\x06\x1A\v\x02\u02A0"+
		"\u02A1\x07c\x02\x02\u02A1\u02A3\x05 \x11\x02\u02A2\u029F\x03\x02\x02\x02"+
		"\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03"+
		"\x02\x02\x02\u02A53\x03\x02\x02\x02\u02A6\u02A7\x07f\x02\x02\u02A7\u02AC"+
		"\x05 \x11\x02\u02A8\u02A9\x07g\x02\x02\u02A9\u02AB\x05 \x11\x02\u02AA"+
		"\u02A8\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02"+
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD5\x03\x02\x02\x02\u02AE\u02AC"+
		"\x03\x02\x02\x02\u02AF\u02B1\x05> \x02\u02B0\u02AF\x03\x02\x02\x02\u02B0"+
		"\u02B1\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B6\x05:\x1E"+
		"\x02\u02B3\u02B5\x05@!\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8\x03"+
		"\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7"+
		"7\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02BF\x056\x1C\x02"+
		"\u02BA\u02BB\x056\x1C\x02\u02BB\u02BC\x07g\x02\x02\u02BC\u02BD\x058\x1D"+
		"\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02B9\x03\x02\x02\x02\u02BE\u02BA"+
		"\x03\x02\x02\x02\u02BF9\x03\x02\x02\x02\u02C0\u02C6\x05<\x1F\x02\u02C1"+
		"\u02C3\x05\x16\f\x02\u02C2\u02C1\x03\x02\x02\x02\u02C2\u02C3\x03\x02\x02"+
		"\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4\u02C6\x05\x88E\x02\u02C5\u02C0"+
		"\x03\x02\x02\x02\u02C5\u02C2\x03\x02\x02\x02\u02C6;\x03\x02\x02\x02\u02C7"+
		"\u02C8\x06\x1F\f\x02\u02C8\u02C9\x07c\x02\x02\u02C9\u02CA\x05\x04\x03"+
		"\x02\u02CA=\x03\x02\x02\x02\u02CB\u02CE\x078\x02\x02\u02CC\u02CD\x06 "+
		"\r\x02\u02CD\u02CF\t\b\x02\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF"+
		"\x03\x02\x02\x02\u02CF?\x03\x02\x02\x02\u02D0\u02D1\x05\x1A\x0E\x02\u02D1"+
		"\u02D2\x05:\x1E\x02\u02D2\u02DE\x03\x02\x02\x02\u02D3\u02D6\x05B\"\x02"+
		"\u02D4\u02D6\x05D#\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D4\x03\x02"+
		"\x02\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02D9\x05> \x02\u02D8\u02D7"+
		"\x03\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02"+
		"\u02DA\u02DB\x05:\x1E\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DE\x05"+
		"F$\x02\u02DD\u02D0\x03\x02\x02\x02\u02DD\u02D5\x03\x02\x02\x02\u02DD\u02DC"+
		"\x03\x02\x02\x02\u02DEA\x03\x02\x02\x02\u02DF\u02E0\x06\"\x0E\x02\u02E0"+
		"\u02E1\x07h\x02\x02\u02E1C\x03\x02\x02\x02\u02E2\u02E3\x06#\x0F\x02\u02E3"+
		"\u02E4\x07p\x02\x02\u02E4\u02E5\x056\x1C\x02\u02E5\u02E6\x07f\x02\x02"+
		"\u02E6E\x03\x02\x02\x02\u02E7\u02EE\x07/\x02\x02\u02E8\u02EB\x07,\x02"+
		"\x02\u02E9\u02EA\x06$\x10\x02\u02EA\u02EC\t\b\x02\x02\u02EB\u02E9\x03"+
		"\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED"+
		"\u02E7\x03\x02\x02\x02\u02ED\u02E8\x03\x02\x02\x02\u02EE\u02EF\x03\x02"+
		"\x02\x02\u02EF\u02F0\x05\x1C\x0F\x02\u02F0G\x03\x02\x02\x02\u02F1\u02F3"+
		"\x05\x04\x03\x02\u02F2\u02F4\x05\u01EC\xF7\x02\u02F3\u02F2\x03\x02\x02"+
		"\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u0301\x03\x02\x02\x02\u02F5\u0301"+
		"\x05J&\x02\u02F6\u0301\x05R*\x02\u02F7\u0301\x05Z.\x02\u02F8\u0301\x05"+
		"b2\x02\u02F9\u0301\x05v<\x02\u02FA\u0301\x05x=\x02\u02FB\u0301\x05t;\x02"+
		"\u02FC\u0301\x05|?\x02\u02FD\u0301\x05~@\x02\u02FE\u0301\x05\x84C\x02"+
		"\u02FF\u0301\x05\x86D\x02\u0300\u02F1\x03\x02\x02\x02\u0300\u02F5\x03"+
		"\x02\x02\x02\u0300\u02F6\x03\x02\x02\x02\u0300\u02F7\x03\x02\x02\x02\u0300"+
		"\u02F8\x03\x02\x02\x02\u0300\u02F9\x03\x02\x02\x02\u0300\u02FA\x03\x02"+
		"\x02\x02\u0300\u02FB\x03\x02\x02\x02\u0300\u02FC\x03\x02\x02\x02\u0300"+
		"\u02FD\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u02FF\x03\x02"+
		"\x02\x02\u0301I\x03\x02\x02\x02\u0302\u030B\x05\b\x05\x02\u0303\u030B"+
		"\x05L\'\x02\u0304\u030B\x05N(\x02\u0305\u030B\x05P)\x02\u0306\u030B\x07"+
		"@\x02\x02\u0307\u030B\x07F\x02\x02\u0308\u030B\x07<\x02\x02\u0309\u030B"+
		"\x07B\x02\x02\u030A\u0302\x03\x02\x02\x02\u030A\u0303\x03\x02\x02\x02"+
		"\u030A\u0304\x03\x02\x02\x02\u030A\u0305\x03\x02\x02\x02\u030A\u0306\x03"+
		"\x02\x02\x02\u030A\u0307\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030A"+
		"\u0309\x03\x02\x02\x02\u030BK\x03\x02\x02\x02\u030C\u030D\x07l\x02\x02"+
		"\u030D\u0312\x056\x1C\x02\u030E\u030F\x07g\x02\x02\u030F\u0311\x056\x1C"+
		"\x02\u0310\u030E\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310"+
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02"+
		"\u0314\u0312\x03\x02\x02\x02\u0315\u0317\x07g\x02\x02\u0316\u0315\x03"+
		"\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318"+
		"\u0319\x07r\x02\x02\u0319M\x03\x02\x02\x02\u031A\u031B\x07l\x02\x02\u031B"+
		"\u031C\x056\x1C\x02\u031C\u031D\x07f\x02\x02\u031D\u0325\x056\x1C\x02"+
		"\u031E\u031F\x07g\x02\x02\u031F\u0320\x056\x1C\x02\u0320\u0321\x07f\x02"+
		"\x02\u0321\u0322\x056\x1C\x02\u0322\u0324\x03\x02\x02\x02\u0323\u031E"+
		"\x03\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02"+
		"\u0325\u0326\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327\u0325\x03"+
		"\x02\x02\x02\u0328\u032A\x07g\x02\x02\u0329\u0328\x03\x02\x02\x02\u0329"+
		"\u032A\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x07r\x02"+
		"\x02\u032CO\x03\x02\x02\x02\u032D\u032E\x07;\x02\x02\u032E\u032F\x07m"+
		"\x02\x02\u032F\u0330\x05\x8CG\x02\u0330\u0331\x07s\x02\x02\u0331\u0338"+
		"\x03\x02\x02\x02\u0332\u0333\t\t\x02\x02\u0333\u0334\x07m\x02\x02\u0334"+
		"\u0335\x05\x8CG\x02\u0335\u0336\x07s\x02\x02\u0336\u0338\x03\x02\x02\x02"+
		"\u0337\u032D\x03\x02\x02\x02\u0337\u0332\x03\x02\x02\x02\u0338Q\x03\x02"+
		"\x02\x02\u0339\u033E\x072\x02\x02\u033A\u033E\x05T+\x02\u033B\u033E\x05"+
		"V,\x02\u033C\u033E\x05X-\x02\u033D\u0339\x03\x02\x02\x02\u033D\u033A\x03"+
		"\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03\x02\x02\x02\u033E"+
		"S\x03\x02\x02\x02\u033F\u0340\x072\x02\x02\u0340\u0341\x07o\x02\x02\u0341"+
		"\u0342\x05\x04\x03\x02\u0342U\x03\x02\x02\x02\u0343\u0344\x072\x02\x02"+
		"\u0344\u0345\x07l\x02\x02\u0345\u0346\x05\x8CG\x02\u0346\u0347\x07r\x02"+
		"\x02\u0347W\x03\x02\x02\x02\u0348\u0349\x072\x02\x02\u0349\u034A\x07o"+
		"\x02\x02\u034A\u034B\x07\v\x02\x02\u034BY\x03\x02\x02\x02\u034C\u0350"+
		"\x05\\/\x02\u034D\u0350\x05^0\x02\u034E\u0350\x05`1\x02\u034F\u034C\x03"+
		"\x02\x02\x02\u034F\u034D\x03\x02\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350"+
		"[\x03\x02\x02\x02\u0351\u0352\x074\x02\x02\u0352\u0353\x07o\x02\x02\u0353"+
		"\u0354\x05\x04\x03\x02\u0354]\x03\x02\x02\x02\u0355\u0356\x074\x02\x02"+
		"\u0356\u0357\x07l\x02\x02\u0357\u0358\x05\x8CG\x02\u0358\u0359\x07r\x02"+
		"\x02\u0359_\x03\x02\x02\x02\u035A\u035B\x074\x02\x02\u035B\u035C\x07o"+
		"\x02\x02\u035C\u035D\x07\v\x02\x02\u035Da\x03\x02\x02\x02\u035E\u0360"+
		"\x07k\x02\x02\u035F\u0361\x05d3\x02\u0360\u035F\x03\x02\x02\x02\u0360"+
		"\u0361\x03\x02\x02\x02\u0361\u0363\x03\x02\x02\x02\u0362\u0364\x05\x96"+
		"L\x02\u0363\u0362\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365"+
		"\x03\x02\x02\x02\u0365\u0366\x07q\x02\x02\u0366c\x03\x02\x02\x02\u0367"+
		"\u0369\x05n8\x02\u0368\u0367\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02"+
		"\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x05f4\x02\u036B\u036D\x076\x02"+
		"\x02\u036C\u036B\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036F"+
		"\x03\x02\x02\x02\u036E\u0370\x05\u0134\x9B\x02\u036F\u036E\x03\x02\x02"+
		"\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u0373"+
		"\x05n8\x02\u0372\u0368\x03\x02\x02\x02\u0372\u0371\x03\x02\x02\x02\u0373"+
		"\u0374\x03\x02\x02\x02\u0374\u0375\x07%\x02\x02\u0375e\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0376\u0378\x07m\x02\x02\u0377\u0379\x05h5\x02\u0378\u0377\x03"+
		"\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A"+
		"\u037D\x07s\x02\x02\u037B\u037D\x05\x06\x04\x02\u037C\u0376\x03\x02\x02"+
		"\x02\u037C\u037B\x03\x02\x02\x02\u037Dg\x03\x02\x02\x02\u037E\u0383\x05"+
		"j6\x02\u037F\u0380\x07g\x02\x02\u0380\u0382\x05j6\x02\u0381\u037F\x03"+
		"\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383"+
		"\u0384\x03\x02\x02\x02\u0384i\x03\x02\x02\x02\u0385\u0383\x03\x02\x02"+
		"\x02\u0386\u038C\x05l7\x02\u0387\u038A\x05\x1E\x10\x02\u0388\u0389\x06"+
		"6\x11\x02\u0389\u038B\x05\x14\v\x02\u038A\u0388\x03\x02\x02\x02\u038A"+
		"\u038B\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u0387\x03\x02"+
		"\x02\x02\u038C\u038D\x03\x02\x02\x02\u038Dk\x03\x02\x02\x02\u038E\u0390"+
		"\x079\x02\x02\u038F\u038E\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02"+
		"\u0390\u0391\x03\x02\x02\x02\u0391\u0392\x05\x04\x03\x02\u0392m\x03\x02"+
		"\x02\x02\u0393\u0394\x07l\x02\x02\u0394\u0399\x05p9\x02\u0395\u0396\x07"+
		"g\x02\x02\u0396\u0398\x05p9\x02\u0397\u0395\x03\x02\x02\x02\u0398\u039B"+
		"\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02"+
		"\u039A\u039C\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039C\u039D\x07"+
		"r\x02\x02\u039Do\x03\x02\x02\x02\u039E\u03A0\x05r:\x02\u039F\u039E\x03"+
		"\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1"+
		"\u03A2\x056\x1C\x02\u03A2q\x03\x02\x02\x02\u03A3\u03AB\x07a\x02\x02\u03A4"+
		"\u03A8\x07`\x02\x02\u03A5\u03A6\x07m\x02\x02\u03A6\u03A7\x07\x84\x02\x02"+
		"\u03A7\u03A9\x07s\x02\x02\u03A8\u03A5\x03\x02\x02\x02\u03A8\u03A9\x03"+
		"\x02\x02\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03A3\x03\x02\x02\x02\u03AA"+
		"\u03A4\x03\x02\x02\x02\u03ABs\x03\x02\x02\x02\u03AC\u03AD\x07o\x02\x02"+
		"\u03AD\u03AE\x05\x04\x03\x02\u03AEu\x03\x02\x02\x02\u03AF\u03B0\x07m\x02"+
		"\x02\u03B0\u03B1\x056\x1C\x02\u03B1\u03B2\x07s\x02\x02\u03B2w\x03\x02"+
		"\x02\x02\u03B3\u03BB\x07m\x02\x02\u03B4\u03B7\x05z>\x02\u03B5\u03B6\x07"+
		"g\x02\x02\u03B6\u03B8\x05z>\x02\u03B7\u03B5\x03\x02\x02\x02\u03B8\u03B9"+
		"\x03\x02\x02\x02\u03B9\u03B7\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02"+
		"\u03BA\u03BC\x03\x02\x02\x02\u03BB\u03B4\x03\x02\x02\x02\u03BB\u03BC\x03"+
		"\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x07s\x02\x02\u03BE"+
		"y\x03\x02\x02\x02\u03BF\u03C2\x079\x02\x02\u03C0\u03C2\x05\x04\x03\x02"+
		"\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03"+
		"\x02\x02\x02\u03C3\u03C5\x07f\x02\x02\u03C4\u03C1\x03\x02\x02\x02\u03C4"+
		"\u03C5\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C7\x056\x1C"+
		"\x02\u03C7{\x03\x02\x02\x02\u03C8\u03C9\x079\x02\x02\u03C9}\x03\x02\x02"+
		"\x02\u03CA\u03CC\x07v\x02\x02\u03CB\u03CD\x05\x1C\x0F\x02\u03CC\u03CB"+
		"\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02"+
		"\u03CE\u03CF\x07o\x02\x02\u03CF\u03D2\x05\x80A\x02\u03D0\u03D1\x07o\x02"+
		"\x02\u03D1\u03D3\x05\x80A\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D4"+
		"\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02"+
		"\u03D5\x7F\x03\x02\x02\x02\u03D6\u03DA\x05\x04\x03\x02\u03D7\u03D9\x05"+
		"\x82B\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA"+
		"\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03E3\x03\x02"+
		"\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DF\x05\x82B\x02\u03DE\u03DD"+
		"\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02"+
		"\u03E0\u03E1\x03\x02\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03D6\x03"+
		"\x02\x02\x02\u03E2\u03DE\x03\x02\x02\x02\u03E3\x81\x03\x02\x02\x02\u03E4"+
		"\u03E5\x06B\x12\x02\u03E5\u03EB\t\b\x02\x02\u03E6\u03E7\x07l\x02\x02\u03E7"+
		"\u03E8\x05\x8CG\x02\u03E8\u03E9\x07r\x02\x02\u03E9\u03EB\x03\x02\x02\x02"+
		"\u03EA\u03E4\x03\x02\x02\x02\u03EA\u03E6\x03\x02\x02\x02\u03EB\x83\x03"+
		"\x02\x02\x02\u03EC\u03ED\x07G\x02\x02\u03ED\u03EE\x07m\x02\x02\u03EE\u03EF"+
		"\x05\x8CG\x02\u03EF\u03F0\x07s\x02\x02\u03F0\x85\x03\x02\x02\x02\u03F1"+
		"\u03F2\x07E\x02\x02\u03F2\u03F3\x07m\x02\x02\u03F3\u03F4\x056\x1C\x02"+
		"\u03F4\u03F5\x07s\x02\x02\u03F5\x87\x03\x02\x02\x02\u03F6\u03F7\bE\x01"+
		"\x02\u03F7\u03F8\x05H%\x02\u03F8\u042D\x03\x02\x02\x02\u03F9\u03FA\f\n"+
		"\x02\x02\u03FA\u042C\x05\x18\r\x02\u03FB\u03FC\f\t\x02\x02\u03FC\u0402"+
		"\x06E\x15\x02\u03FD\u0403\x05\x8AF\x02\u03FE\u0400\x05\x8AF\x02\u03FF"+
		"\u03FE\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0401\x03\x02"+
		"\x02\x02\u0401\u0403\x05\x90I\x02\u0402\u03FD\x03\x02\x02\x02\u0402\u03FF"+
		"\x03\x02\x02\x02\u0403\u042C\x03\x02\x02\x02\u0404\u0405\f\b\x02\x02\u0405"+
		"\u0406\x07o\x02\x02\u0406\u040B\x07\v\x02\x02\u0407\u0408\x07m\x02\x02"+
		"\u0408\u0409\x05\x92J\x02\u0409\u040A\x07s\x02\x02\u040A\u040C\x03\x02"+
		"\x02\x02\u040B\u0407\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C"+
		"\u042C\x03\x02\x02\x02\u040D\u040E\f\x07\x02\x02\u040E\u041A\x07o\x02"+
		"\x02\u040F\u041B\x07\x89\x02\x02\u0410\u0418\x05\x04\x03\x02\u0411\u0413"+
		"\x05\u01EC\xF7\x02\u0412\u0411\x03\x02\x02\x02\u0412\u0413\x03\x02\x02"+
		"\x02\u0413\u0419\x03\x02\x02\x02\u0414\u0415\x07m\x02\x02\u0415\u0416"+
		"\x05\x92J\x02\u0416\u0417\x07s\x02\x02\u0417\u0419\x03\x02\x02\x02\u0418"+
		"\u0412\x03\x02\x02\x02\u0418\u0414\x03\x02\x02\x02\u0419\u041B\x03\x02"+
		"\x02\x02\u041A\u040F\x03\x02\x02\x02\u041A\u0410\x03\x02\x02\x02\u041B"+
		"\u042C\x03\x02\x02\x02\u041C\u041D\f\x06\x02\x02\u041D\u041E\x07o\x02"+
		"\x02\u041E\u042C\x072\x02\x02\u041F\u0420\f\x05\x02\x02\u0420\u0421\x06"+
		"E\x1A\x02\u0421\u0422\x07l\x02\x02\u0422\u0423\x05\x8CG\x02\u0423\u0424"+
		"\x07r\x02\x02\u0424\u042C\x03\x02\x02\x02\u0425\u0426\f\x04\x02\x02\u0426"+
		"\u0427\x06E\x1C\x02\u0427\u042C\x07i\x02\x02\u0428\u0429\f\x03\x02\x02"+
		"\u0429\u042A\x06E\x1E\x02\u042A\u042C\x07p\x02\x02\u042B\u03F9\x03\x02"+
		"\x02\x02\u042B\u03FB\x03\x02\x02\x02\u042B\u0404\x03\x02\x02\x02\u042B"+
		"\u040D\x03\x02\x02\x02\u042B\u041C\x03\x02\x02\x02\u042B\u041F\x03\x02"+
		"\x02\x02\u042B\u0425\x03\x02\x02\x02\u042B\u0428\x03\x02\x02\x02\u042C"+
		"\u042F\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02"+
		"\x02\x02\u042E\x89\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u0430\u0432"+
		"\x07m\x02\x02\u0431\u0433\x05\x8CG\x02\u0432\u0431\x03\x02\x02\x02\u0432"+
		"\u0433\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0435\x07s\x02"+
		"\x02\u0435\x8B\x03\x02\x02\x02\u0436\u043B\x05\x8EH\x02\u0437\u0438\x07"+
		"g\x02\x02\u0438\u043A\x05\x8EH\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043D"+
		"\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02"+
		"\u043C\x8D\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02\u043E\u0441\x07"+
		"9\x02\x02\u043F\u0441\x05\x04\x03\x02\u0440\u043E\x03\x02\x02\x02\u0440"+
		"\u043F\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0444\x07f\x02"+
		"\x02\u0443\u0440\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0447"+
		"\x03\x02\x02\x02\u0445\u0448\x056\x1C\x02\u0446\u0448\x05\x14\v\x02\u0447"+
		"\u0445\x03\x02\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448\x8F\x03\x02\x02"+
		"\x02\u0449\u044A\x05b2\x02\u044A\x91\x03\x02\x02\x02\u044B\u044E\x079"+
		"\x02\x02\u044C\u044E\x05\x04\x03\x02\u044D\u044B\x03\x02\x02\x02\u044D"+
		"\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0451\x07f\x02"+
		"\x02\u0450\u044D\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0450"+
		"\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\x93\x03\x02\x02\x02"+
		"\u0454\u045D\x06K\x1F\x02\u0455\u045E\x056\x1C\x02\u0456\u045E\x05\xF6"+
		"|\x02\u0457\u045E\x05\x98M\x02\u0458\u045E\x05\xA8U\x02\u0459\u045E\x05"+
		"\xBC_\x02\u045A\u045E\x05\xC2b\x02\u045B\u045E\x05\xCEh\x02\u045C\u045E"+
		"\x05\xD0i\x02\u045D\u0455\x03\x02\x02\x02\u045D\u0456\x03\x02\x02\x02"+
		"\u045D\u0457\x03\x02\x02\x02\u045D\u0458\x03\x02\x02\x02\u045D\u0459\x03"+
		"\x02\x02\x02\u045D\u045A\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045D"+
		"\u045C\x03\x02\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F\u0461\x07t\x02"+
		"\x02\u0460\u045F\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0464"+
		"\x03\x02\x02\x02\u0462\u0464\x05\xD4k\x02\u0463\u0454\x03\x02\x02\x02"+
		"\u0463\u0462\x03\x02\x02\x02\u0464\x95\x03\x02\x02\x02\u0465\u0467\x05"+
		"\x94K\x02\u0466\u0465\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468"+
		"\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\x97\x03\x02\x02"+
		"\x02\u046A\u046E\x05\x9AN\x02\u046B\u046E\x05\x9CO\x02\u046C\u046E\x05"+
		"\xA6T\x02\u046D\u046A\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046D"+
		"\u046C\x03\x02\x02\x02\u046E\x99\x03\x02\x02\x02\u046F\u0471\x07\"\x02"+
		"\x02\u0470\u0472\x07\x1B\x02\x02\u0471\u0470\x03\x02\x02\x02\u0471\u0472"+
		"\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0475\x05\u01D4\xEB"+
		"\x02\u0474\u0476\x07%\x02\x02\u0475\u0474\x03\x02\x02\x02\u0475\u0476"+
		"\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x056\x1C\x02"+
		"\u0478\u047A\x05\xBA^\x02\u0479\u0478\x03\x02\x02\x02\u0479\u047A\x03"+
		"\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C\x05\xFA~\x02\u047C"+
		"\x9B\x03\x02\x02\x02\u047D\u047E\x07*\x02\x02\u047E\u047F\x05\x9EP\x02"+
		"\u047F\u0480\x05\xFA~\x02\u0480\x9D\x03\x02\x02\x02\u0481\u0486\x05\xA0"+
		"Q\x02\u0482\u0483\x07g\x02\x02\u0483\u0485\x05\xA0Q\x02\u0484\u0482\x03"+
		"\x02\x02\x02\u0485\u0488\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02\u0486"+
		"\u0487\x03\x02\x02\x02\u0487\x9F\x03\x02\x02\x02\u0488\u0486\x03\x02\x02"+
		"\x02\u0489\u048E\x056\x1C\x02\u048A\u048E\x05\xEEx\x02\u048B\u048E\x05"+
		"\xA2R\x02\u048C\u048E\x05\xA4S\x02\u048D\u0489\x03\x02\x02\x02\u048D\u048A"+
		"\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02"+
		"\u048E\xA1\x03\x02\x02\x02\u048F\u0490\x07\x1B\x02\x02\u0490\u0491\x05"+
		"\u01D4\xEB\x02\u0491\u0492\x05\u010A\x86\x02\u0492\xA3\x03\x02\x02\x02"+
		"\u0493\u0494\t\n\x02\x02\u0494\u0495\x05\u01D4\xEB\x02\u0495\u0496\x05"+
		"\u010A\x86\x02\u0496\xA5\x03\x02\x02\x02\u0497\u0498\x07&\x02\x02\u0498"+
		"\u0499\x05\xFA~\x02\u0499\u049A\x07*\x02\x02\u049A\u049B\x056\x1C\x02"+
		"\u049B\xA7\x03\x02\x02\x02\u049C\u04A0\x05\xAAV\x02\u049D\u04A0\x05\xAE"+
		"X\x02\u049E\u04A0\x05\xB0Y\x02\u049F\u049C\x03\x02\x02\x02\u049F\u049D"+
		"\x03\x02\x02\x02\u049F\u049E\x03\x02\x02\x02\u04A0\xA9\x03\x02\x02\x02"+
		"\u04A1\u04A2\x07$\x02\x02\u04A2\u04A3\x05\x9EP\x02\u04A3\u04A5\x05\xFA"+
		"~\x02\u04A4\u04A6\x05\xACW\x02\u04A5\u04A4\x03\x02\x02\x02\u04A5\u04A6"+
		"\x03\x02\x02\x02\u04A6\xAB\x03\x02\x02\x02\u04A7\u04AA\x07 \x02\x02\u04A8"+
		"\u04AB\x05\xFA~\x02\u04A9\u04AB\x05\xAAV\x02\u04AA\u04A8\x03\x02\x02\x02"+
		"\u04AA\u04A9\x03\x02\x02\x02\u04AB\xAD\x03\x02\x02\x02\u04AC\u04AD\x07"+
		"#\x02\x02\u04AD\u04AE\x05\x9EP\x02\u04AE\u04AF\x07 \x02\x02\u04AF\u04B0"+
		"\x05\xFA~\x02\u04B0\xAF\x03\x02\x02\x02\u04B1\u04B2\x07(\x02\x02\u04B2"+
		"\u04B3\x056\x1C\x02\u04B3\u04B7\x07k\x02\x02\u04B4\u04B6\x05\xB2Z\x02"+
		"\u04B5\u04B4\x03\x02\x02\x02\u04B6\u04B9\x03\x02\x02\x02\u04B7\u04B5\x03"+
		"\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04BA\x03\x02\x02\x02\u04B9"+
		"\u04B7\x03\x02\x02\x02\u04BA\u04BB\x07q\x02\x02\u04BB\xB1\x03\x02\x02"+
		"\x02\u04BC\u04BF\x05\xB4[\x02\u04BD\u04BF\x05\xB8]\x02\u04BE\u04BC\x03"+
		"\x02\x02\x02\u04BE\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0"+
		"\u04C1\x05\x96L\x02\u04C1\xB3\x03\x02\x02\x02\u04C2\u04C3\x07\x1B\x02"+
		"\x02\u04C3\u04C4\x05\xB6\\\x02\u04C4\u04C5\x07f\x02\x02\u04C5\xB5\x03"+
		"\x02\x02\x02\u04C6\u04C8\x05\u01D4\xEB\x02\u04C7\u04C9\x05\xBA^\x02\u04C8"+
		"\u04C7\x03\x02\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04D1\x03\x02"+
		"\x02\x02\u04CA\u04CB\x07g\x02\x02\u04CB\u04CD\x05\u01D4\xEB\x02\u04CC"+
		"\u04CE\x05\xBA^\x02\u04CD\u04CC\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02"+
		"\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04CA\x03\x02\x02\x02\u04D0\u04D3"+
		"\x03\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02"+
		"\u04D2\xB7\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D4\u04D5\x07"+
		"\x1D\x02\x02\u04D5\u04D6\x07f\x02\x02\u04D6\xB9\x03\x02\x02\x02\u04D7"+
		"\u04D8\x07)\x02\x02\u04D8\u04D9\x056\x1C\x02\u04D9\xBB\x03\x02\x02\x02"+
		"\u04DA\u04DF\x05\xBE`\x02\u04DB\u04E0\x05\x98M\x02\u04DC\u04E0\x05\xAA"+
		"V\x02\u04DD\u04E0\x05\xB0Y\x02\u04DE\u04E0\x05\xD0i\x02\u04DF\u04DB\x03"+
		"\x02\x02\x02\u04DF\u04DC\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04DF"+
		"\u04DE\x03\x02\x02\x02\u04E0\xBD\x03\x02\x02\x02\u04E1\u04E2\x05\xC0a"+
		"\x02\u04E2\u04E3\x07f\x02\x02\u04E3\xBF\x03\x02\x02\x02\u04E4\u04E5\x05"+
		"\x04\x03\x02\u04E5\xC1\x03\x02\x02\x02\u04E6\u04EC\x05\xC4c\x02\u04E7"+
		"\u04EC\x05\xC6d\x02\u04E8\u04EC\x05\xC8e\x02\u04E9\u04EC\x05\xCAf\x02"+
		"\u04EA\u04EC\x05\xCCg\x02\u04EB\u04E6\x03\x02\x02\x02\u04EB\u04E7\x03"+
		"\x02\x02\x02\u04EB\u04E8\x03\x02\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EB"+
		"\u04EA\x03\x02\x02\x02\u04EC\xC3\x03\x02\x02\x02\u04ED\u04EF\x07\x1A\x02"+
		"\x02\u04EE\u04F0\x05\xC0a\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0"+
		"\x03\x02\x02\x02\u04F0\xC5\x03\x02\x02\x02\u04F1\u04F3\x07\x1C\x02\x02"+
		"\u04F2\u04F4\x05\xC0a\x02\u04F3\u04F2\x03\x02\x02\x02\u04F3\u04F4\x03"+
		"\x02\x02\x02\u04F4\xC7\x03\x02\x02\x02\u04F5\u04F6\x07!\x02\x02\u04F6"+
		"\xC9\x03\x02\x02\x02\u04F7\u04F9\x07\'\x02\x02\u04F8\u04FA\x056\x1C\x02"+
		"\u04F9\u04F8\x03\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\xCB\x03"+
		"\x02\x02\x02\u04FB\u04FC\x075\x02\x02\u04FC\u04FD\x056\x1C\x02\u04FD\xCD"+
		"\x03\x02\x02\x02\u04FE\u04FF\x07\x1E\x02\x02\u04FF\u0500\x05\xFA~\x02"+
		"\u0500\xCF\x03\x02\x02\x02\u0501\u0502\x07\x1F\x02\x02\u0502\u0506\x05"+
		"\xFA~\x02\u0503\u0505\x05\xD2j\x02\u0504\u0503\x03\x02\x02\x02\u0505\u0508"+
		"\x03\x02\x02\x02\u0506\u0504\x03\x02\x02\x02\u0506\u0507\x03\x02\x02\x02"+
		"\u0507\xD1\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0509\u050B\x07"+
		"-\x02\x02\u050A\u050C\x05\u01D4\xEB\x02\u050B\u050A\x03\x02\x02\x02\u050B"+
		"\u050C\x03\x02\x02\x02\u050C\u050E\x03\x02\x02\x02\u050D\u050F\x05\xBA"+
		"^\x02\u050E\u050D\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050F\u0510"+
		"\x03\x02\x02\x02\u0510\u0511\x05\xFA~\x02\u0511\xD3\x03\x02\x02\x02\u0512"+
		"\u0515\x05\xD6l\x02\u0513\u0515\x05\xE8u\x02\u0514\u0512\x03\x02\x02\x02"+
		"\u0514\u0513\x03\x02\x02\x02\u0515\xD5\x03\x02\x02\x02\u0516\u051A\x05"+
		"\xD8m\x02\u0517\u0519\x05\xDAn\x02\u0518\u0517\x03\x02\x02\x02\u0519\u051C"+
		"\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051A\u051B\x03\x02\x02\x02"+
		"\u051B\u051E\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051D\u051F\x05"+
		"\xDCo\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F"+
		"\u0520\x03\x02\x02\x02\u0520\u0521\x07?\x02\x02\u0521\xD7\x03\x02\x02"+
		"\x02\u0522\u0523\x07C\x02\x02\u0523\u0525\x05\xDEp\x02\u0524\u0526\x05"+
		"\x96L\x02\u0525\u0524\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526"+
		"\xD9\x03\x02\x02\x02\u0527\u0528\x07>\x02\x02\u0528\u052A\x05\xDEp\x02"+
		"\u0529\u052B\x05\x96L\x02\u052A\u0529\x03\x02\x02\x02\u052A\u052B\x03"+
		"\x02\x02\x02\u052B\xDB\x03\x02\x02\x02\u052C\u052E\x07=\x02\x02\u052D"+
		"\u052F\x05\x96L\x02\u052E\u052D\x03\x02\x02\x02\u052E\u052F\x03\x02\x02"+
		"\x02\u052F\xDD\x03\x02\x02\x02\u0530\u0531\bp\x01\x02\u0531\u053C\x05"+
		"\xE0q\x02\u0532\u053C\x05\x04\x03\x02\u0533\u053C\x05\f\x07\x02\u0534"+
		"\u0535\x07m\x02\x02\u0535\u0536\x05\xDEp\x02\u0536\u0537\x07s\x02\x02"+
		"\u0537\u053C\x03\x02\x02\x02\u0538\u0539\x06p \x02\u0539\u053A\x07i\x02"+
		"\x02\u053A\u053C\x05\xDEp\x04\u053B\u0530\x03\x02\x02\x02\u053B\u0532"+
		"\x03\x02\x02\x02\u053B\u0533\x03\x02\x02\x02\u053B\u0534\x03\x02\x02\x02"+
		"\u053B\u0538\x03\x02\x02\x02\u053C\u0543\x03\x02\x02\x02\u053D\u053E\f"+
		"\x03\x02\x02\u053E\u053F\x05\x1A\x0E\x02\u053F\u0540\x05\xDEp\x04\u0540"+
		"\u0542\x03\x02\x02\x02\u0541\u053D\x03\x02\x02\x02\u0542\u0545\x03\x02"+
		"\x02\x02\u0543\u0541\x03\x02\x02\x02\u0543\u0544\x03\x02\x02\x02\u0544"+
		"\xDF\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0546\u0554\x07\x84\x02"+
		"\x02\u0547\u0548\x07m\x02\x02\u0548\u0549\x05\xE2r\x02\u0549\u054A\x07"+
		"s\x02\x02\u054A\u0555\x03\x02\x02\x02\u054B\u054C\x07m\x02\x02\u054C\u054D"+
		"\x05\xE4s\x02\u054D\u054E\x07s\x02\x02\u054E\u0555\x03\x02\x02\x02\u054F"+
		"\u0550\x07m\x02\x02\u0550\u0551\x05\x16\f\x02\u0551\u0552\x05\xE6t\x02"+
		"\u0552\u0553\x07s\x02\x02\u0553\u0555\x03\x02\x02\x02\u0554\u0547\x03"+
		"\x02\x02\x02\u0554\u054B\x03\x02\x02\x02\u0554\u054F\x03\x02\x02\x02\u0555"+
		"\xE1\x03\x02\x02\x02\u0556\u0557\x07\x84\x02\x02\u0557\xE3\x03\x02\x02"+
		"\x02\u0558\u0559\x07\x84\x02\x02\u0559\xE5\x03\x02\x02\x02\u055A\u055F"+
		"\x07\x89\x02\x02\u055B\u055C\x07o\x02\x02\u055C\u055E\x07\x89\x02\x02"+
		"\u055D\u055B\x03\x02\x02\x02\u055E\u0561\x03\x02\x02\x02\u055F\u055D\x03"+
		"\x02\x02\x02\u055F\u0560\x03\x02\x02\x02\u0560\xE7\x03\x02\x02\x02\u0561"+
		"\u055F\x03\x02\x02\x02\u0562\u0563\x07H\x02\x02\u0563\u056C\x07m\x02\x02"+
		"\u0564\u0565\x07\x84\x02\x02\u0565\u0566\x07f\x02\x02\u0566\u0567\x05"+
		"\xECw\x02\u0567\u0568\x07g\x02\x02\u0568\u0569\x07\x84\x02\x02\u0569\u056A"+
		"\x07f\x02\x02\u056A\u056B\x05\xEAv\x02\u056B\u056D\x03\x02\x02\x02\u056C"+
		"\u0564\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02\u056D\u056E\x03\x02"+
		"\x02\x02\u056E\u056F\x07s\x02\x02\u056F\xE9\x03\x02\x02\x02\u0570\u0571"+
		"\x07\x89\x02\x02\u0571\xEB\x03\x02\x02\x02\u0572\u0573\x07\x8D\x02\x02"+
		"\u0573\xED\x03\x02\x02\x02\u0574\u0575\x07:\x02\x02\u0575\u0576\x07m\x02"+
		"\x02\u0576\u057B\x05\xF0y\x02\u0577\u0578\x07g\x02\x02\u0578\u057A\x05"+
		"\xF0y\x02\u0579\u0577\x03\x02\x02\x02\u057A\u057D\x03\x02\x02\x02\u057B"+
		"\u0579\x03\x02\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u057E\x03\x02"+
		"\x02\x02\u057D\u057B\x03\x02\x02\x02\u057E\u057F\x07s\x02\x02\u057F\xEF"+
		"\x03\x02\x02\x02\u0580\u0585\x07u\x02\x02\u0581\u0582\x05\xF2z\x02\u0582"+
		"\u0583\x05\xF4{\x02\u0583\u0585\x03\x02\x02\x02\u0584\u0580\x03\x02\x02"+
		"\x02\u0584\u0581\x03\x02\x02\x02\u0585\xF1\x03\x02\x02\x02\u0586\u0587"+
		"\x07\x84\x02\x02\u0587\xF3\x03\x02\x02\x02\u0588\u058F\x07\x89\x02\x02"+
		"\u0589\u058A\x07o\x02\x02\u058A\u058D\x07\x89\x02\x02\u058B\u058C\x07"+
		"o\x02\x02\u058C\u058E\x07\x89\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D"+
		"\u058E\x03\x02\x02\x02\u058E\u0590\x03\x02\x02\x02\u058F\u0589\x03\x02"+
		"\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\xF5\x03\x02\x02\x02\u0591\u05A1"+
		"\x05\xFC\x7F\x02\u0592\u05A1\x05\u0104\x83\x02\u0593\u05A1\x05\u010C\x87"+
		"\x02\u0594\u05A1\x05\u0126\x94\x02\u0595\u05A1\x05\u012C\x97\x02\u0596"+
		"\u05A1\x05\u0144\xA3\x02\u0597\u05A1\x05\u0166\xB4\x02\u0598\u05A1\x05"+
		"\u0170\xB9\x02\u0599\u05A1\x05\u017A\xBE\x02\u059A\u05A1\x05\u0190\xC9"+
		"\x02\u059B\u05A1\x05\u0196\xCC\x02\u059C\u05A1\x05\u0198\xCD\x02\u059D"+
		"\u05A1\x05\u01A0\xD1\x02\u059E\u05A1\x05\u01A6\xD4\x02\u059F\u05A1\x05"+
		"\u01B0\xD9\x02\u05A0\u0591\x03\x02\x02\x02\u05A0\u0592\x03\x02\x02\x02"+
		"\u05A0\u0593\x03\x02\x02\x02\u05A0\u0594\x03\x02\x02\x02\u05A0\u0595\x03"+
		"\x02\x02\x02\u05A0\u0596\x03\x02\x02\x02\u05A0\u0597\x03\x02\x02\x02\u05A0"+
		"\u0598\x03\x02\x02\x02\u05A0\u0599\x03\x02\x02\x02\u05A0\u059A\x03\x02"+
		"\x02\x02\u05A0\u059B\x03\x02\x02\x02\u05A0\u059C\x03\x02\x02\x02\u05A0"+
		"\u059D\x03\x02\x02\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u059F\x03\x02"+
		"\x02\x02\u05A1\xF7\x03\x02\x02\x02\u05A2\u05A4\x05\x96L\x02\u05A3\u05A2"+
		"\x03\x02\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4\xF9\x03\x02\x02\x02"+
		"\u05A5\u05A7\x07k\x02\x02\u05A6\u05A8\x05\x96L\x02\u05A7\u05A6\x03\x02"+
		"\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8\u05A9\x03\x02\x02\x02\u05A9"+
		"\u05AA\x07q\x02\x02\u05AA\xFB\x03\x02\x02\x02\u05AB\u05AD\x05\u01CE\xE8"+
		"\x02\u05AC\u05AB\x03\x02\x02\x02\u05AC\u05AD\x03\x02\x02\x02\u05AD\u05AE"+
		"\x03\x02\x02\x02\u05AE\u05B0\x07\n\x02\x02\u05AF\u05B1\x05\xFE\x80\x02"+
		"\u05B0\u05AF\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B2\x03"+
		"\x02\x02\x02\u05B2\u05B3\x05\u0100\x81\x02\u05B3\xFD\x03\x02\x02\x02\u05B4"+
		"\u05B5\t\v\x02\x02\u05B5\xFF\x03\x02\x02\x02\u05B6\u05BB\x05\u0102\x82"+
		"\x02\u05B7\u05B8\x07o\x02\x02\u05B8\u05BA\x05\u0102\x82\x02\u05B9\u05B7"+
		"\x03\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02\u05BB\u05B9\x03\x02\x02\x02"+
		"\u05BB\u05BC\x03\x02\x02\x02\u05BC\u0101\x03\x02\x02\x02\u05BD\u05BB\x03"+
		"\x02\x02\x02\u05BE\u05C1\x05\x04\x03\x02\u05BF\u05C1\x05\x14\v\x02\u05C0"+
		"\u05BE\x03\x02\x02\x02\u05C0\u05BF\x03\x02\x02\x02\u05C1\u0103\x03\x02"+
		"\x02\x02\u05C2\u05C4\x05\u01CE\xE8\x02\u05C3\u05C2\x03\x02\x02\x02\u05C3"+
		"\u05C4\x03\x02\x02\x02\u05C4\u05C6\x03\x02\x02\x02\u05C5\u05C7\x05\u01C2"+
		"\xE2\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03\x02\x02\x02\u05C7"+
		"\u05C8\x03\x02\x02\x02\u05C8\u05C9\x07\x0E\x02\x02\u05C9\u05CA\x05\u0106"+
		"\x84\x02\u05CA\u0105\x03\x02\x02\x02\u05CB\u05D0\x05\u0108\x85\x02\u05CC"+
		"\u05CD\x07g\x02\x02\u05CD\u05CF\x05\u0108\x85\x02\u05CE\u05CC\x03\x02"+
		"\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0"+
		"\u05D1\x03\x02\x02\x02\u05D1\u0107\x03\x02\x02\x02\u05D2\u05D0\x03\x02"+
		"\x02\x02\u05D3\u05D5\x05\u01D4\xEB\x02\u05D4\u05D6\x05\u010A\x86\x02\u05D5"+
		"\u05D4\x03\x02\x02\x02\u05D5\u05D6\x03\x02\x02\x02\u05D6\u0109\x03\x02"+
		"\x02\x02\u05D7\u05D8\x06\x86\"\x02\u05D8\u05D9\x07h\x02\x02\u05D9\u05DA"+
		"\x056\x1C\x02\u05DA\u010B\x03\x02\x02\x02\u05DB\u05EC\x05\u010E\x88\x02"+
		"\u05DC\u05ED\x05\u0106\x84\x02\u05DD\u05EA\x05\u0110\x89\x02\u05DE\u05DF"+
		"\x05\u010A\x86\x02\u05DF\u05E0\x05\u0120\x91\x02\u05E0\u05EB\x03\x02\x02"+
		"\x02\u05E1\u05E8\x05\x1E\x10\x02\u05E2\u05E9\x05\u0112\x8A\x02\u05E3\u05E9"+
		"\x05\u011A\x8E\x02\u05E4\u05E6\x05\u010A\x86\x02\u05E5\u05E4\x03\x02\x02"+
		"\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05E9"+
		"\x05\u0120\x91\x02\u05E8\u05E2\x03\x02\x02\x02\u05E8\u05E3\x03\x02\x02"+
		"\x02\u05E8\u05E5\x03\x02\x02\x02\u05E9\u05EB\x03\x02\x02\x02\u05EA\u05DE"+
		"\x03\x02\x02\x02\u05EA\u05E1\x03\x02\x02\x02\u05EB\u05ED\x03\x02\x02\x02"+
		"\u05EC\u05DC\x03\x02\x02\x02\u05EC\u05DD\x03\x02\x02\x02\u05ED\u010D\x03"+
		"\x02\x02\x02\u05EE\u05F0\x05\u01CE\xE8\x02\u05EF\u05EE\x03\x02\x02\x02"+
		"\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F2\x03\x02\x02\x02\u05F1\u05F3\x05"+
		"\u01C2\xE2\x02\u05F2\u05F1\x03\x02\x02\x02\u05F2\u05F3\x03\x02\x02\x02"+
		"\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F5\x07\x19\x02\x02\u05F5\u010F\x03"+
		"\x02\x02\x02\u05F6\u05F7\x05\x04\x03\x02\u05F7\u0111\x03\x02\x02\x02\u05F8"+
		"\u0606\x05\xFA~\x02\u05F9\u0601\x07k\x02\x02\u05FA\u05FC\x05\u0114\x8B"+
		"\x02\u05FB\u05FD\x05\u0116\x8C\x02\u05FC\u05FB\x03\x02\x02\x02\u05FC\u05FD"+
		"\x03\x02\x02\x02\u05FD\u0602\x03\x02\x02\x02\u05FE\u05FF\x05\u0116\x8C"+
		"\x02\u05FF\u0600\x05\u0114\x8B\x02\u0600\u0602\x03\x02\x02\x02\u0601\u05FA"+
		"\x03\x02\x02\x02\u0601\u05FE\x03\x02\x02\x02\u0602\u0603\x03\x02\x02\x02"+
		"\u0603\u0604\x07q\x02\x02\u0604\u0606\x03\x02\x02\x02\u0605\u05F8\x03"+
		"\x02\x02\x02\u0605\u05F9\x03\x02\x02\x02\u0606\u0113\x03\x02\x02\x02\u0607"+
		"\u0609\x05\u01CE\xE8\x02\u0608\u0607\x03\x02\x02\x02\u0608\u0609\x03\x02"+
		"\x02\x02\u0609\u060B\x03\x02\x02\x02\u060A\u060C\x05\u01C6\xE4\x02\u060B"+
		"\u060A\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060D\x03\x02"+
		"\x02\x02\u060D\u060E\x07N\x02\x02\u060E\u060F\x05\xFA~\x02\u060F\u0115"+
		"\x03\x02\x02\x02\u0610\u0612\x05\u01CE\xE8\x02\u0611\u0610\x03\x02\x02"+
		"\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0614\x03\x02\x02\x02\u0613\u0615"+
		"\x05\u01C6\xE4\x02\u0614\u0613\x03\x02\x02\x02\u0614\u0615\x03\x02\x02"+
		"\x02\u0615\u0616\x03\x02\x02\x02\u0616\u0618\x07^\x02\x02\u0617\u0619"+
		"\x05\u0118\x8D\x02\u0618\u0617\x03\x02\x02\x02\u0618\u0619\x03\x02\x02"+
		"\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061B\x05\xFA~\x02\u061B\u0117"+
		"\x03\x02\x02\x02\u061C\u061D\x07m\x02\x02\u061D\u061E\x05\x04\x03\x02"+
		"\u061E\u061F\x07s\x02\x02\u061F\u0119\x03\x02\x02\x02\u0620\u0628\x07"+
		"k\x02\x02\u0621\u0623\x05\u011C\x8F\x02\u0622\u0624\x05\u011E\x90\x02"+
		"\u0623\u0622\x03\x02\x02\x02\u0623\u0624\x03\x02\x02\x02\u0624\u0629\x03"+
		"\x02\x02\x02\u0625\u0626\x05\u011E\x90\x02\u0626\u0627\x05\u011C\x8F\x02"+
		"\u0627\u0629\x03\x02\x02\x02\u0628\u0621\x03\x02\x02\x02\u0628\u0625\x03"+
		"\x02\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u0629\u062A\x03\x02\x02\x02\u062A\u062B\x07q\x02\x02\u062B\u011B\x03"+
		"\x02\x02\x02\u062C\u062E\x05\u01CE\xE8\x02\u062D\u062C\x03\x02\x02\x02"+
		"\u062D\u062E\x03\x02\x02\x02\u062E\u0630\x03\x02\x02\x02\u062F\u0631\x05"+
		"\u01C6\xE4\x02\u0630\u062F\x03\x02\x02\x02\u0630\u0631\x03\x02\x02\x02"+
		"\u0631\u0632\x03\x02\x02\x02\u0632\u0633\x07N\x02\x02\u0633\u011D\x03"+
		"\x02\x02\x02\u0634\u0636\x05\u01CE\xE8\x02\u0635\u0634\x03\x02\x02\x02"+
		"\u0635\u0636\x03\x02\x02\x02\u0636\u0638\x03\x02\x02\x02\u0637\u0639\x05"+
		"\u01C6\xE4\x02\u0638\u0637\x03\x02\x02\x02\u0638\u0639\x03\x02\x02\x02"+
		"\u0639\u063A\x03\x02\x02\x02\u063A\u063B\x07^\x02\x02\u063B\u011F\x03"+
		"\x02\x02\x02\u063C\u0644\x07k\x02\x02\u063D\u063F\x05\u0122\x92\x02\u063E"+
		"\u0640\x05\u0124\x93\x02\u063F\u063E\x03\x02\x02\x02\u063F\u0640\x03\x02"+
		"\x02\x02\u0640\u0645\x03\x02\x02\x02\u0641\u0642\x05\u0124\x93\x02\u0642"+
		"\u0643\x05\u0122\x92\x02\u0643\u0645\x03\x02\x02\x02\u0644\u063D\x03\x02"+
		"\x02\x02\u0644\u0641\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646"+
		"\u0647\x07q\x02\x02\u0647\u0121\x03\x02\x02\x02\u0648\u064A\x05\u01CE"+
		"\xE8\x02\u0649\u0648\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A"+
		"\u064B\x03\x02\x02\x02\u064B\u064D\x07b\x02\x02\u064C\u064E\x05\u0118"+
		"\x8D\x02\u064D\u064C\x03\x02\x02\x02\u064D\u064E\x03\x02\x02\x02\u064E"+
		"\u064F\x03\x02\x02\x02\u064F\u0650\x05\xFA~\x02\u0650\u0123\x03\x02\x02"+
		"\x02\u0651\u0653\x05\u01CE\xE8\x02\u0652\u0651\x03\x02\x02\x02\u0652\u0653"+
		"\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\u0656\x07L\x02\x02"+
		"\u0655\u0657\x05\u0118\x8D\x02\u0656\u0655\x03\x02\x02\x02\u0656\u0657"+
		"\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02\u0658\u0659\x05\xFA~\x02"+
		"\u0659\u0125\x03\x02\x02\x02\u065A\u065C\x05\u01CE\xE8\x02\u065B\u065A"+
		"\x03\x02\x02\x02\u065B\u065C\x03\x02\x02\x02\u065C\u065E\x03\x02\x02\x02"+
		"\u065D\u065F\x05\u01C4\xE3\x02\u065E\u065D\x03\x02\x02\x02\u065E\u065F"+
		"\x03\x02\x02\x02\u065F\u0660\x03\x02\x02\x02\u0660\u0661\x07\x18\x02\x02"+
		"\u0661\u0663\x05\u0128\x95\x02\u0662\u0664\x05\u01DC\xEF\x02\u0663\u0662"+
		"\x03\x02\x02\x02\u0663\u0664\x03\x02\x02\x02\u0664\u0665\x03\x02\x02\x02"+
		"\u0665\u0666\x05\u012A\x96\x02\u0666\u0127\x03\x02\x02\x02\u0667\u0668"+
		"\x05\x04\x03\x02\u0668\u0129\x03\x02\x02\x02\u0669\u066A\x06\x96#\x02"+
		"\u066A\u066B\x07h\x02\x02\u066B\u066C\x05\x1C\x0F\x02\u066C\u012B\x03"+
		"\x02\x02\x02\u066D\u066E\x05\u012E\x98\x02\u066E\u0670\x05\u0130\x99\x02"+
		"\u066F\u0671\x05\u01DC\xEF\x02\u0670\u066F\x03\x02\x02\x02\u0670\u0671"+
		"\x03\x02\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0674\x05\u0132\x9A"+
		"\x02\u0673\u0675\x05\u01E2\xF2\x02\u0674\u0673\x03\x02\x02\x02\u0674\u0675"+
		"\x03\x02\x02\x02\u0675\u0677\x03\x02\x02\x02\u0676\u0678\x05\u0136\x9C"+
		"\x02\u0677\u0676\x03\x02\x02\x02\u0677\u0678\x03\x02\x02\x02\u0678\u012D"+
		"\x03\x02\x02\x02\u0679\u067B\x05\u01CE\xE8\x02\u067A\u0679\x03\x02\x02"+
		"\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067D\x03\x02\x02\x02\u067C\u067E"+
		"\x05\u01C2\xE2\x02\u067D\u067C\x03\x02\x02\x02\u067D\u067E\x03\x02\x02"+
		"\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0680\x07\t\x02\x02\u0680\u012F"+
		"\x03\x02\x02\x02\u0681\u0684\x05\x04\x03\x02\u0682\u0684\x05\x14\v\x02"+
		"\u0683\u0681\x03\x02\x02\x02\u0683\u0682\x03\x02\x02\x02\u0684\u0131\x03"+
		"\x02\x02\x02\u0685\u0687\x05\u0138\x9D\x02\u0686\u0688\t\f\x02\x02\u0687"+
		"\u0686\x03\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\u068A\x03\x02"+
		"\x02\x02\u0689\u068B\x05\u0134\x9B\x02\u068A\u0689\x03\x02\x02\x02\u068A"+
		"\u068B\x03\x02\x02\x02\u068B\u0133\x03\x02\x02\x02\u068C\u068E\x07d\x02"+
		"\x02\u068D\u068F\x05\u01CE\xE8\x02\u068E\u068D\x03\x02\x02\x02\u068E\u068F"+
		"\x03\x02\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0691\x05\x1C\x0F\x02"+
		"\u0691\u0135\x03\x02\x02\x02\u0692\u0693\x05\xFA~\x02\u0693\u0137\x03"+
		"\x02\x02\x02\u0694\u0696\x07m\x02\x02\u0695\u0697\x05\u013A\x9E\x02\u0696"+
		"\u0695\x03\x02\x02\x02\u0696\u0697\x03\x02\x02\x02\u0697\u0698\x03\x02"+
		"\x02\x02\u0698\u0699\x07s\x02\x02\u0699\u0139\x03\x02\x02\x02\u069A\u069F"+
		"\x05\u013C\x9F\x02\u069B\u069C\x07g\x02\x02\u069C\u069E\x05\u013C\x9F"+
		"\x02\u069D\u069B\x03\x02\x02\x02\u069E\u06A1\x03\x02\x02\x02\u069F\u069D"+
		"\x03\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02\u06A0\u013B\x03\x02\x02\x02"+
		"\u06A1\u069F\x03\x02\x02\x02\u06A2\u06A4\x05\u013E\xA0\x02\u06A3\u06A2"+
		"\x03\x02\x02\x02\u06A3\u06A4\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02"+
		"\u06A5\u06A6\x05\u0140\xA1\x02\u06A6\u06AA\x05\x1E\x10\x02\u06A7\u06AB"+
		"\x05\u0142\xA2\x02\u06A8\u06A9\x06\x9F$\x02\u06A9\u06AB\x05\x14\v\x02"+
		"\u06AA\u06A7\x03\x02\x02\x02\u06AA\u06A8\x03\x02\x02\x02\u06AA\u06AB\x03"+
		"\x02\x02\x02\u06AB\u013D\x03\x02\x02\x02\u06AC\u06AF\x079\x02\x02\u06AD"+
		"\u06AF\x05\x04\x03\x02\u06AE\u06AC\x03\x02\x02\x02\u06AE\u06AD\x03\x02"+
		"\x02\x02\u06AF\u013F\x03\x02\x02\x02\u06B0\u06B1\x05\x04\x03\x02\u06B1"+
		"\u0141\x03\x02\x02\x02\u06B2\u06B3\x06\xA2%\x02\u06B3\u06B4\x07h\x02\x02"+
		"\u06B4\u06B5\x056\x1C\x02\u06B5\u0143\x03\x02\x02\x02\u06B6\u06B8\x05"+
		"\u01CE\xE8\x02\u06B7\u06B6\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02"+
		"\u06B8\u06BA\x03\x02\x02\x02\u06B9\u06BB\x05\u01C4\xE3\x02\u06BA\u06B9"+
		"\x03\x02\x02\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BE\x03\x02\x02\x02"+
		"\u06BC\u06BF\x05\u0146\xA4\x02\u06BD\u06BF\x05\u0156\xAC\x02\u06BE\u06BC"+
		"\x03\x02\x02\x02\u06BE\u06BD\x03\x02\x02\x02\u06BF\u0145\x03\x02\x02\x02"+
		"\u06C0\u06C2\x07P\x02\x02\u06C1\u06C0\x03\x02\x02\x02\u06C1\u06C2\x03"+
		"\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C4\x07\x06\x02\x02\u06C4"+
		"\u06C6\x05\u0152\xAA\x02\u06C5\u06C7\x05\u01DC\xEF\x02\u06C6\u06C5\x03"+
		"\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\u06C9\x03\x02\x02\x02\u06C8"+
		"\u06CA\x054\x1B\x02\u06C9\u06C8\x03\x02\x02\x02\u06C9\u06CA\x03\x02\x02"+
		"\x02\u06CA\u06CC\x03\x02\x02\x02\u06CB\u06CD\x05\u01E2\xF2\x02\u06CC\u06CB"+
		"\x03\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06CE\x03\x02\x02\x02"+
		"\u06CE\u06D0\x07k\x02\x02\u06CF\u06D1\x05\u0148\xA5\x02\u06D0\u06CF\x03"+
		"\x02\x02\x02\u06D0\u06D1\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2"+
		"\u06D3\x07q\x02\x02\u06D3\u0147\x03\x02\x02\x02\u06D4\u06D6\x05\u014A"+
		"\xA6\x02\u06D5\u06D4\x03\x02\x02\x02\u06D6\u06D7\x03\x02\x02\x02\u06D7"+
		"\u06D5\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\u0149\x03\x02"+
		"\x02\x02\u06D9\u06DD\x05\xF6|\x02\u06DA\u06DD\x05\u014C\xA7\x02\u06DB"+
		"\u06DD\x05\xD4k\x02\u06DC\u06D9\x03\x02\x02\x02\u06DC\u06DA\x03\x02\x02"+
		"\x02\u06DC\u06DB\x03\x02\x02\x02\u06DD\u014B\x03\x02\x02\x02\u06DE\u06E0"+
		"\x05\u01CE\xE8\x02\u06DF\u06DE\x03\x02\x02\x02\u06DF\u06E0\x03\x02\x02"+
		"\x02\u06E0\u06E2\x03\x02\x02\x02\u06E1\u06E3\x07P\x02\x02\u06E2\u06E1"+
		"\x03\x02\x02\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02"+
		"\u06E4\u06E5\x07\x1B\x02\x02\u06E5\u06E6\x05\u014E\xA8\x02\u06E6\u014D"+
		"\x03\x02\x02\x02\u06E7\u06EC\x05\u0150\xA9\x02\u06E8\u06E9\x07g\x02\x02"+
		"\u06E9\u06EB\x05\u0150\xA9\x02\u06EA\u06E8\x03\x02\x02\x02\u06EB\u06EE"+
		"\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02\u06EC\u06ED\x03\x02\x02\x02"+
		"\u06ED\u014F\x03\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EF\u06F1\x05"+
		"\u0154\xAB\x02\u06F0\u06F2\x05$\x13\x02\u06F1\u06F0\x03\x02\x02\x02\u06F1"+
		"\u06F2\x03\x02\x02\x02\u06F2\u0151\x03\x02\x02\x02\u06F3\u06F4\x05\x04"+
		"\x03\x02\u06F4\u0153\x03\x02\x02\x02\u06F5\u06F6\x05\x04\x03\x02\u06F6"+
		"\u0155\x03\x02\x02\x02\u06F7\u06F8\x07\x06\x02\x02\u06F8\u06FA\x05\u0152"+
		"\xAA\x02\u06F9\u06FB\x05\u01DC\xEF\x02\u06FA\u06F9\x03\x02\x02\x02\u06FA"+
		"\u06FB\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FE\x054\x1B"+
		"\x02\u06FD\u06FF\x05\u01E2\xF2\x02\u06FE\u06FD\x03\x02\x02\x02\u06FE\u06FF"+
		"\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700\u0701\x07k\x02\x02"+
		"\u0701\u0702\x05\u0158\xAD\x02\u0702\u0703\x07q\x02\x02\u0703\u0157\x03"+
		"\x02\x02\x02\u0704\u0706\x05\u015A\xAE\x02\u0705\u0704\x03\x02\x02\x02"+
		"\u0706\u0707\x03\x02\x02\x02\u0707\u0705\x03\x02\x02\x02\u0707\u0708\x03"+
		"\x02\x02\x02\u0708\u0159\x03\x02\x02\x02\u0709\u070D\x05\xF6|\x02\u070A"+
		"\u070D\x05\u015C\xAF\x02\u070B\u070D\x05\xD4k\x02\u070C\u0709\x03\x02"+
		"\x02\x02\u070C\u070A\x03\x02\x02\x02\u070C\u070B\x03\x02\x02\x02\u070D"+
		"\u015B\x03\x02\x02\x02\u070E\u0710\x05\u01CE\xE8\x02\u070F\u070E\x03\x02"+
		"\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711"+
		"\u0712\x07\x1B\x02\x02\u0712\u0713\x05\u015E\xB0\x02\u0713\u015D\x03\x02"+
		"\x02\x02\u0714\u0719\x05\u0160\xB1\x02\u0715\u0716\x07g\x02\x02\u0716"+
		"\u0718\x05\u0160\xB1\x02\u0717\u0715\x03\x02\x02\x02\u0718\u071B\x03\x02"+
		"\x02\x02\u0719\u0717\x03\x02\x02\x02\u0719\u071A\x03\x02\x02\x02\u071A"+
		"\u015F\x03\x02\x02\x02\u071B\u0719\x03\x02\x02\x02\u071C\u071E\x05\u0154"+
		"\xAB\x02\u071D\u071F\x05\u0162\xB2\x02\u071E\u071D\x03\x02\x02\x02\u071E"+
		"\u071F\x03\x02\x02\x02\u071F\u0161\x03\x02\x02\x02\u0720\u0721\x06\xB2"+
		"&\x02\u0721\u0722\x07h\x02\x02\u0722\u0723\x05\u0164\xB3\x02\u0723\u0163"+
		"\x03\x02\x02\x02\u0724\u0728\x05\n\x06\x02\u0725\u0728\x07\x8D\x02\x02"+
		"\u0726\u0728\x05\f\x07\x02\u0727\u0724\x03\x02\x02\x02\u0727\u0725\x03"+
		"\x02\x02\x02\u0727\u0726\x03\x02\x02\x02\u0728\u0165\x03\x02\x02\x02\u0729"+
		"\u072B\x05\u01CE\xE8\x02\u072A\u0729\x03\x02\x02\x02\u072A\u072B\x03\x02"+
		"\x02\x02\u072B\u072D\x03\x02\x02\x02\u072C\u072E\x05\u01C4\xE3\x02\u072D"+
		"\u072C\x03\x02\x02\x02\u072D\u072E\x03\x02\x02\x02\u072E\u072F\x03\x02"+
		"\x02\x02\u072F\u0730\x07\x16\x02\x02\u0730\u0732\x05\u0168\xB5\x02\u0731"+
		"\u0733\x05\u01DC\xEF\x02\u0732\u0731\x03\x02\x02\x02\u0732\u0733\x03\x02"+
		"\x02\x02\u0733\u0735\x03\x02\x02\x02\u0734\u0736\x054\x1B\x02\u0735\u0734"+
		"\x03\x02\x02\x02\u0735\u0736\x03\x02\x02\x02\u0736\u0738\x03\x02\x02\x02"+
		"\u0737\u0739\x05\u01E2\xF2\x02\u0738\u0737\x03\x02\x02\x02\u0738\u0739"+
		"\x03\x02\x02\x02\u0739\u073A\x03\x02\x02\x02\u073A\u073B\x05\u016A\xB6"+
		"\x02\u073B\u0167\x03\x02\x02\x02\u073C\u073D\x05\x04\x03\x02\u073D\u0169"+
		"\x03\x02\x02\x02\u073E\u0740\x07k\x02\x02\u073F\u0741\x05\u016C\xB7\x02"+
		"\u0740\u073F\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u0742\x03"+
		"\x02\x02\x02\u0742\u0743\x07q\x02\x02\u0743\u016B\x03\x02\x02\x02\u0744"+
		"\u0746\x05\u016E\xB8\x02\u0745\u0744\x03\x02\x02\x02\u0746\u0747\x03\x02"+
		"\x02\x02\u0747\u0745\x03\x02\x02\x02\u0747\u0748\x03\x02\x02\x02\u0748"+
		"\u016D\x03\x02\x02\x02\u0749\u074C\x05\xF6|\x02\u074A\u074C\x05\xD4k\x02"+
		"\u074B\u0749\x03\x02\x02\x02\u074B\u074A\x03\x02\x02\x02\u074C\u016F\x03"+
		"\x02\x02\x02\u074D\u074F\x05\u01CE\xE8\x02\u074E\u074D\x03\x02\x02\x02"+
		"\u074E\u074F\x03\x02\x02\x02\u074F\u0758\x03\x02\x02\x02\u0750\u0752\x05"+
		"\u01C4\xE3\x02\u0751\u0750\x03\x02\x02\x02\u0751\u0752\x03\x02\x02\x02"+
		"\u0752\u0754\x03\x02\x02\x02\u0753\u0755\x07M\x02\x02\u0754\u0753\x03"+
		"\x02\x02\x02\u0754\u0755\x03\x02\x02\x02\u0755\u0759\x03\x02\x02\x02\u0756"+
		"\u0757\x07M\x02\x02\u0757\u0759\x05\u01C4\xE3\x02\u0758\u0751\x03\x02"+
		"\x02\x02\u0758\u0756\x03\x02\x02\x02\u0759\u075A\x03\x02\x02\x02\u075A"+
		"\u075B\x07\x04\x02\x02\u075B\u075D\x05\u0172\xBA\x02\u075C\u075E\x05\u01DC"+
		"\xEF\x02\u075D\u075C\x03\x02\x02\x02\u075D\u075E\x03\x02\x02\x02\u075E"+
		"\u0760\x03\x02\x02\x02\u075F\u0761\x054\x1B\x02\u0760\u075F\x03\x02\x02"+
		"\x02\u0760\u0761\x03\x02\x02\x02\u0761\u0763\x03\x02\x02\x02\u0762\u0764"+
		"\x05\u01E2\xF2\x02\u0763\u0762\x03\x02\x02\x02\u0763\u0764\x03\x02\x02"+
		"\x02\u0764\u0765\x03\x02\x02\x02\u0765\u0766\x05\u0174\xBB\x02\u0766\u0171"+
		"\x03\x02\x02\x02\u0767\u0768\x05\x04\x03\x02\u0768\u0173\x03\x02\x02\x02"+
		"\u0769\u076B\x07k\x02\x02\u076A\u076C\x05\u0176\xBC\x02\u076B\u076A\x03"+
		"\x02\x02\x02\u076B\u076C\x03\x02\x02\x02\u076C\u076D\x03\x02\x02\x02\u076D"+
		"\u076E\x07q\x02\x02\u076E\u0175\x03\x02\x02\x02\u076F\u0771\x05\u0178"+
		"\xBD\x02\u0770\u076F\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772"+
		"\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773\u0177\x03\x02"+
		"\x02\x02\u0774\u0777\x05\xF6|\x02\u0775\u0777\x05\xD4k\x02\u0776\u0774"+
		"\x03\x02\x02\x02\u0776\u0775\x03\x02\x02\x02\u0777\u0179\x03\x02\x02\x02"+
		"\u0778\u077A\x05\u01CE\xE8\x02\u0779\u0778\x03\x02\x02\x02\u0779\u077A"+
		"\x03\x02\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u077D\x05\u01C4\xE3"+
		"\x02\u077C\u077B\x03\x02\x02\x02\u077C\u077D\x03\x02\x02\x02\u077D\u077E"+
		"\x03\x02\x02\x02\u077E\u077F\x07\x13\x02\x02\u077F\u0781\x05\u017C\xBF"+
		"\x02\u0780\u0782\x054\x1B\x02\u0781\u0780\x03\x02\x02\x02\u0781\u0782"+
		"\x03\x02\x02\x02\u0782\u0784\x03\x02\x02\x02\u0783\u0785\x05\u01E2\xF2"+
		"\x02\u0784\u0783\x03\x02\x02\x02\u0784\u0785\x03\x02\x02\x02\u0785\u0786"+
		"\x03\x02\x02\x02\u0786\u0787\x05\u017E\xC0\x02\u0787\u017B\x03\x02\x02"+
		"\x02\u0788\u0789\x05\x04\x03\x02\u0789\u017D\x03\x02\x02\x02\u078A\u078C"+
		"\x07k\x02\x02\u078B\u078D\x05\u0180\xC1\x02\u078C\u078B\x03\x02\x02\x02"+
		"\u078C\u078D\x03\x02\x02\x02\u078D\u078E\x03\x02\x02\x02\u078E\u078F\x07"+
		"q\x02\x02\u078F\u017F\x03\x02\x02\x02\u0790\u0792\x05\u0182\xC2\x02\u0791"+
		"\u0790\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0791\x03\x02"+
		"\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0181\x03\x02\x02\x02\u0795"+
		"\u0798\x05\u0184\xC3\x02\u0796\u0798\x05\xD4k\x02\u0797\u0795\x03\x02"+
		"\x02\x02\u0797\u0796\x03\x02\x02\x02\u0798\u0183\x03\x02\x02\x02\u0799"+
		"\u07A0\x05\u0186\xC4\x02\u079A\u07A0\x05\u0188\xC5\x02\u079B\u07A0\x05"+
		"\u018A\xC6\x02\u079C\u07A0\x05\u018C\xC7\x02\u079D\u07A0\x05\u018E\xC8"+
		"\x02\u079E\u07A0\x05\u0126\x94\x02\u079F\u0799\x03\x02\x02\x02\u079F\u079A"+
		"\x03\x02\x02\x02\u079F\u079B\x03\x02\x02\x02\u079F\u079C\x03\x02\x02\x02"+
		"\u079F\u079D\x03\x02\x02\x02\u079F\u079E\x03\x02\x02\x02\u07A0\u0185\x03"+
		"\x02\x02\x02\u07A1\u07A2\x05\u010E\x88\x02\u07A2\u07A3\x05\u0110\x89\x02"+
		"\u07A3\u07A4\x05\x1E\x10\x02\u07A4\u07A5\x05\u011A\x8E\x02\u07A5\u0187"+
		"\x03\x02\x02\x02\u07A6\u07A7\x05\u012E\x98\x02\u07A7\u07A9\x05\u0130\x99"+
		"\x02\u07A8\u07AA\x05\u01DC\xEF\x02\u07A9\u07A8\x03\x02\x02\x02\u07A9\u07AA"+
		"\x03\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB\u07AD\x05\u0132\x9A"+
		"\x02\u07AC\u07AE\x05\u01E2\xF2\x02\u07AD\u07AC\x03\x02\x02\x02\u07AD\u07AE"+
		"\x03\x02\x02\x02\u07AE\u0189\x03\x02\x02\x02\u07AF\u07B1\x05\u0192\xCA"+
		"\x02\u07B0\u07B2\x05\u01DC\xEF\x02\u07B1\u07B0\x03\x02\x02\x02\u07B1\u07B2"+
		"\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B5\x05\u0138\x9D"+
		"\x02\u07B4\u07B6\t\f\x02\x02\u07B5\u07B4\x03\x02\x02\x02\u07B5\u07B6\x03"+
		"\x02\x02\x02\u07B6\u07B8\x03\x02\x02\x02\u07B7\u07B9\x05\u01E2\xF2\x02"+
		"\u07B8\u07B7\x03\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u018B\x03"+
		"\x02\x02\x02\u07BA\u07BB\x05\u01A2\xD2\x02\u07BB\u07BD\x05\u01A4\xD3\x02"+
		"\u07BC\u07BE\x05\u01E2\xF2\x02\u07BD\u07BC\x03\x02\x02\x02\u07BD\u07BE"+
		"\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C0\x05\u011A\x8E"+
		"\x02\u07C0\u018D\x03\x02\x02\x02\u07C1\u07C3\x05\u01CE\xE8\x02\u07C2\u07C1"+
		"\x03\x02\x02\x02\u07C2\u07C3\x03\x02\x02\x02\u07C3\u07C5\x03\x02\x02\x02"+
		"\u07C4\u07C6\x05\u01C4\xE3\x02\u07C5\u07C4\x03\x02\x02\x02\u07C5\u07C6"+
		"\x03\x02\x02\x02\u07C6\u07C7\x03\x02\x02\x02\u07C7\u07C8\x07\x03\x02\x02"+
		"\u07C8\u07CA\x05\u0128\x95\x02\u07C9\u07CB\x054\x1B\x02\u07CA\u07C9\x03"+
		"\x02\x02\x02\u07CA\u07CB\x03\x02\x02\x02\u07CB\u07CD\x03\x02\x02\x02\u07CC"+
		"\u07CE\x05\u012A\x96\x02\u07CD\u07CC\x03\x02\x02\x02\u07CD\u07CE\x03\x02"+
		"\x02\x02\u07CE\u07D0\x03\x02\x02\x02\u07CF\u07D1\x05\u01E2\xF2\x02\u07D0"+
		"\u07CF\x03\x02\x02\x02\u07D0\u07D1\x03\x02\x02\x02\u07D1\u018F\x03\x02"+
		"\x02\x02\u07D2\u07D4\x05\u0192\xCA\x02\u07D3\u07D5\x05\u01DC\xEF\x02\u07D4"+
		"\u07D3\x03\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D6\x03\x02"+
		"\x02\x02\u07D6\u07D8\x05\u0138\x9D\x02\u07D7\u07D9\t\f\x02\x02\u07D8\u07D7"+
		"\x03\x02\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DB\x03\x02\x02\x02"+
		"\u07DA\u07DC\x05\u01E2\xF2\x02\u07DB\u07DA\x03\x02\x02\x02\u07DB\u07DC"+
		"\x03\x02\x02\x02\u07DC\u07DD\x03\x02\x02\x02\u07DD\u07DE\x05\u0194\xCB"+
		"\x02\u07DE\u0191\x03\x02\x02\x02\u07DF\u07E1\x05\u01CE\xE8\x02\u07E0\u07DF"+
		"\x03\x02\x02\x02\u07E0\u07E1\x03\x02\x02\x02\u07E1\u07E3\x03\x02\x02\x02"+
		"\u07E2\u07E4\x05\u01C2\xE2\x02\u07E3\u07E2\x03\x02\x02\x02\u07E3\u07E4"+
		"\x03\x02\x02\x02\u07E4\u07E5\x03\x02\x02\x02\u07E5\u07E8\x07\v\x02\x02"+
		"\u07E6\u07E7\x06\xCA\'\x02\u07E7\u07E9\t\b\x02\x02\u07E8\u07E6\x03\x02"+
		"\x02\x02\u07E8\u07E9\x03\x02\x02\x02\u07E9\u0193\x03\x02\x02\x02\u07EA"+
		"\u07EB\x05\xFA~\x02\u07EB\u0195\x03\x02\x02\x02\u07EC\u07EE\x05\u01CE"+
		"\xE8\x02\u07ED\u07EC\x03\x02\x02\x02\u07ED\u07EE\x03\x02\x02\x02\u07EE"+
		"\u07EF\x03\x02\x02\x02\u07EF\u07F0\x07\x05\x02\x02\u07F0\u07F1\x05\xFA"+
		"~\x02\u07F1\u0197\x03\x02\x02\x02\u07F2\u07F4\x05\u01CE\xE8\x02\u07F3"+
		"\u07F2\x03\x02\x02\x02\u07F3\u07F4\x03\x02\x02\x02\u07F4\u07F6\x03\x02"+
		"\x02\x02\u07F5\u07F7\x05\u01C4\xE3\x02\u07F6\u07F5\x03\x02\x02\x02\u07F6"+
		"\u07F7\x03\x02\x02\x02\u07F7\u07F8\x03\x02\x02\x02\u07F8\u07F9\x07\x07"+
		"\x02\x02\u07F9\u07FC\x05 \x11\x02\u07FA\u07FD\x054\x1B\x02\u07FB\u07FD"+
		"\x05\u01E2\xF2\x02\u07FC\u07FA\x03\x02\x02\x02\u07FC\u07FB\x03\x02\x02"+
		"\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u07FE\x03\x02\x02\x02\u07FE\u07FF"+
		"\x05\u019A\xCE\x02\u07FF\u0199\x03\x02\x02\x02\u0800\u0802\x07k\x02\x02"+
		"\u0801\u0803\x05\u019C\xCF\x02\u0802\u0801\x03\x02\x02\x02\u0802\u0803"+
		"\x03\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0805\x07q\x02\x02"+
		"\u0805\u019B\x03\x02\x02\x02\u0806\u0808\x05\u019E\xD0\x02\u0807\u0806"+
		"\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809\u0807\x03\x02\x02\x02"+
		"\u0809\u080A\x03\x02\x02\x02\u080A\u019D\x03\x02\x02\x02\u080B\u080E\x05"+
		"\xF6|\x02\u080C\u080E\x05\xD4k\x02\u080D\u080B\x03\x02\x02\x02\u080D\u080C"+
		"\x03\x02\x02\x02\u080E\u019F\x03\x02\x02\x02\u080F\u0810\x05\u01A2\xD2"+
		"\x02\u0810\u0812\x05\u01A4\xD3\x02\u0811\u0813\x05\u01E2\xF2\x02\u0812"+
		"\u0811\x03\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0816\x03\x02"+
		"\x02\x02\u0814\u0817\x05\u0112\x8A\x02\u0815\u0817\x05\u011A\x8E\x02\u0816"+
		"\u0814\x03\x02\x02\x02\u0816\u0815\x03\x02\x02\x02\u0817\u01A1\x03\x02"+
		"\x02\x02\u0818\u081A\x05\u01CE\xE8\x02\u0819\u0818\x03\x02\x02\x02\u0819"+
		"\u081A\x03\x02\x02\x02\u081A\u081C\x03\x02\x02\x02\u081B\u081D\x05\u01C2"+
		"\xE2\x02\u081C\u081B\x03\x02\x02\x02\u081C\u081D\x03\x02\x02\x02\u081D"+
		"\u081E\x03\x02\x02\x02\u081E\u0820\x07\x17\x02\x02\u081F\u0821\x05\u01DC"+
		"\xEF\x02\u0820\u081F\x03\x02\x02\x02\u0820\u0821\x03\x02\x02\x02\u0821"+
		"\u0822\x03\x02\x02\x02\u0822\u0823\x05\u0138\x9D\x02\u0823\u01A3\x03\x02"+
		"\x02\x02\u0824\u0826\x07d\x02\x02\u0825\u0827\x05\u01CE\xE8\x02\u0826"+
		"\u0825\x03\x02\x02\x02\u0826\u0827\x03\x02\x02\x02\u0827\u0828\x03\x02"+
		"\x02\x02\u0828\u0829\x05\x1C\x0F\x02\u0829\u01A5\x03\x02\x02\x02\u082A"+
		"\u082E\x05\u01A8\xD5\x02\u082B\u082E\x05\u01AA\xD6\x02\u082C\u082E\x05"+
		"\u01AC\xD7\x02\u082D\u082A\x03\x02\x02\x02\u082D\u082B\x03\x02\x02\x02"+
		"\u082D\u082C\x03\x02\x02\x02\u082E\u01A7\x03\x02\x02\x02\u082F\u0830\x07"+
		"Z\x02\x02\u0830\u0831\x07\x10\x02\x02\u0831\u0832\x05\x14\v\x02\u0832"+
		"\u01A9\x03\x02\x02\x02\u0833\u0834\x07X\x02\x02\u0834\u0835\x07\x10\x02"+
		"\x02\u0835\u0836\x05\x14\v\x02\u0836\u01AB\x03\x02\x02\x02\u0837\u0838"+
		"\x07O\x02\x02\u0838\u0839\x07\x10\x02\x02\u0839\u083B\x05\x14\v\x02\u083A"+
		"\u083C\x05\u01AE\xD8\x02\u083B\u083A\x03\x02\x02\x02\u083B\u083C\x03\x02"+
		"\x02\x02\u083C\u01AD\x03\x02\x02\x02\u083D\u083E\x07f\x02\x02\u083E\u083F"+
		"\x05\u01BE\xE0\x02\u083F\u01AF\x03\x02\x02\x02\u0840\u0841\x07\x11\x02"+
		"\x02\u0841\u0842\x05\u01BE\xE0\x02\u0842\u0844\x07k\x02\x02\u0843\u0845"+
		"\x05\u01B2\xDA\x02\u0844\u0843\x03\x02\x02\x02\u0844\u0845\x03\x02\x02"+
		"\x02\u0845\u0846\x03\x02\x02\x02\u0846\u0847\x07q\x02\x02\u0847\u01B1"+
		"\x03\x02\x02\x02\u0848\u084A\x05\u01B4\xDB\x02\u0849\u0848\x03\x02\x02"+
		"\x02\u084A\u084B\x03\x02\x02\x02\u084B\u0849\x03\x02\x02\x02\u084B\u084C"+
		"\x03\x02\x02\x02\u084C\u01B3\x03\x02\x02\x02\u084D\u0851\x05\u01B6\xDC"+
		"\x02\u084E\u0851\x05\u01B8\xDD\x02\u084F\u0851\x05\u01BA\xDE\x02\u0850"+
		"\u084D\x03\x02\x02\x02\u0850\u084E\x03\x02\x02\x02\u0850\u084F\x03\x02"+
		"\x02\x02\u0851\u01B5\x03\x02\x02\x02\u0852\u0853\x07\x84\x02\x02\u0853"+
		"\u0854\x07f\x02\x02\u0854\u0855\x05\u01BC\xDF\x02\u0855\u01B7\x03\x02"+
		"\x02\x02\u0856\u0857\x07\x84\x02\x02\u0857\u0858\x07f\x02\x02\u0858\u0859"+
		"\x05\f\x07\x02\u0859\u01B9\x03\x02\x02\x02\u085A\u085B\x07I\x02\x02\u085B"+
		"\u085C\x07f\x02\x02\u085C\u085D\t\r\x02\x02\u085D\u01BB\x03\x02\x02\x02"+
		"\u085E\u0863\x05\u01BE\xE0\x02\u085F\u0860\x07g\x02\x02\u0860\u0862\x05"+
		"\u01BE\xE0\x02\u0861\u085F\x03\x02\x02\x02\u0862\u0865\x03\x02\x02\x02"+
		"\u0863\u0861\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02\u0864\u01BD\x03"+
		"\x02\x02\x02\u0865\u0863\x03\x02\x02\x02\u0866\u0867\x05\x04\x03\x02\u0867"+
		"\u01BF\x03\x02\x02\x02\u0868\u0878\x07\x04\x02\x02\u0869\u0878\x07J\x02"+
		"\x02\u086A\u0878\x07K\x02\x02\u086B\u0878\x07M\x02\x02\u086C\u0878\x07"+
		"O\x02\x02\u086D\u0878\x07Q\x02\x02\u086E\u0878\x07V\x02\x02\u086F\u0878"+
		"\x07W\x02\x02\u0870\u0878\x07X\x02\x02\u0871\u0878\x07Z\x02\x02\u0872"+
		"\u0878\x07\\\x02\x02\u0873\u0878\x07\x15\x02\x02\u0874\u0878\x05r:\x02"+
		"\u0875\u0878\x05\u01C4\xE3\x02\u0876\u0878\x05\u01C6\xE4\x02\u0877\u0868"+
		"\x03\x02\x02\x02\u0877\u0869\x03\x02\x02\x02\u0877\u086A\x03\x02\x02\x02"+
		"\u0877\u086B\x03\x02\x02\x02\u0877\u086C\x03\x02\x02\x02\u0877\u086D\x03"+
		"\x02\x02\x02\u0877\u086E\x03\x02\x02\x02\u0877\u086F\x03\x02\x02\x02\u0877"+
		"\u0870\x03\x02\x02\x02\u0877\u0871\x03\x02\x02\x02\u0877\u0872\x03\x02"+
		"\x02\x02\u0877\u0873\x03\x02\x02\x02\u0877\u0874\x03\x02\x02\x02\u0877"+
		"\u0875\x03\x02\x02\x02\u0877\u0876\x03\x02\x02\x02\u0878\u01C1\x03\x02"+
		"\x02\x02\u0879\u087B\x05\u01C0\xE1\x02\u087A\u0879\x03\x02\x02\x02\u087B"+
		"\u087C\x03\x02\x02\x02\u087C\u087A\x03\x02\x02\x02\u087C\u087D\x03\x02"+
		"\x02\x02\u087D\u01C3\x03\x02\x02\x02\u087E\u0882\t\x0E\x02\x02\u087F\u0880"+
		"\x07m\x02\x02\u0880\u0881\x07^\x02\x02\u0881\u0883\x07s\x02\x02\u0882"+
		"\u087F\x03\x02\x02\x02\u0882\u0883\x03\x02\x02\x02\u0883\u01C5\x03\x02"+
		"\x02\x02\u0884\u0885\t\x0F\x02\x02\u0885\u01C7\x03\x02\x02\x02\u0886\u0887"+
		"\x07e\x02\x02\u0887\u0889\x05\u01CA\xE6\x02\u0888\u088A\x05\u01CC\xE7"+
		"\x02\u0889\u0888\x03\x02\x02\x02\u0889\u088A\x03\x02\x02\x02\u088A\u01C9"+
		"\x03\x02\x02\x02\u088B\u088C\x05\x04\x03\x02\u088C\u01CB\x03\x02\x02\x02"+
		"\u088D\u088F\x07m\x02\x02\u088E\u0890\x05\u01D0\xE9\x02\u088F\u088E\x03"+
		"\x02\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0891\x03\x02\x02\x02\u0891"+
		"\u0892\x07s\x02\x02\u0892\u01CD\x03\x02\x02\x02\u0893\u0895\x05\u01C8"+
		"\xE5\x02\u0894\u0893\x03\x02\x02\x02\u0895\u0896\x03\x02\x02\x02\u0896"+
		"\u0894\x03\x02\x02\x02\u0896\u0897\x03\x02\x02\x02\u0897\u01CF\x03\x02"+
		"\x02\x02\u0898\u089A\x05\u01D2\xEA\x02\u0899\u0898\x03\x02\x02\x02\u089A"+
		"\u089B\x03\x02\x02\x02\u089B\u0899\x03\x02\x02\x02\u089B\u089C\x03\x02"+
		"\x02\x02\u089C\u01D1\x03\x02\x02\x02\u089D\u089E\x07m\x02\x02\u089E\u089F"+
		"\x05\u01D0\xE9\x02\u089F\u08A0\x07s\x02\x02\u08A0\u08B9\x03\x02\x02\x02"+
		"\u08A1\u08A2\x07l\x02\x02\u08A2\u08A3\x05\u01D0\xE9\x02\u08A3\u08A4\x07"+
		"r\x02\x02\u08A4\u08B9\x03\x02\x02\x02\u08A5\u08A6\x07k\x02\x02\u08A6\u08A7"+
		"\x05\u01D0\xE9\x02\u08A7\u08A8\x07q\x02\x02\u08A8\u08B9\x03\x02\x02\x02"+
		"\u08A9\u08B9\x05\x04\x03\x02\u08AA\u08B9\x05\b\x05\x02\u08AB\u08B9\x05"+
		"\x14\v\x02\u08AC\u08B9\x07o\x02\x02\u08AD\u08B9\x07g\x02\x02\u08AE\u08B9"+
		"\x07f\x02\x02\u08AF\u08B9\x07t\x02\x02\u08B0\u08B9\x07h\x02\x02\u08B1"+
		"\u08B9\x07e\x02\x02\u08B2\u08B9\x07n\x02\x02\u08B3\u08B9\x07c\x02\x02"+
		"\u08B4\u08B9\x07d\x02\x02\u08B5\u08B9\x07j\x02\x02\u08B6\u08B9\x07p\x02"+
		"\x02\u08B7\u08B9\x07i\x02\x02\u08B8\u089D\x03\x02\x02\x02\u08B8\u08A1"+
		"\x03\x02\x02\x02\u08B8\u08A5\x03\x02\x02\x02\u08B8\u08A9\x03\x02\x02\x02"+
		"\u08B8\u08AA\x03\x02\x02\x02\u08B8\u08AB\x03\x02\x02\x02\u08B8\u08AC\x03"+
		"\x02\x02\x02\u08B8\u08AD\x03\x02\x02\x02\u08B8\u08AE\x03\x02\x02\x02\u08B8"+
		"\u08AF\x03\x02\x02\x02\u08B8\u08B0\x03\x02\x02\x02\u08B8\u08B1\x03\x02"+
		"\x02\x02\u08B8\u08B2\x03\x02\x02\x02\u08B8\u08B3\x03\x02\x02\x02\u08B8"+
		"\u08B4\x03\x02\x02\x02\u08B8\u08B5\x03\x02\x02\x02\u08B8\u08B6\x03\x02"+
		"\x02\x02\u08B8\u08B7\x03\x02\x02\x02\u08B9\u01D3\x03\x02\x02\x02\u08BA"+
		"\u08BB\b\xEB\x01\x02\u08BB\u08BD\x079\x02\x02\u08BC\u08BE\x05\x1E\x10"+
		"\x02\u08BD\u08BC\x03\x02\x02\x02\u08BD\u08BE\x03\x02\x02\x02\u08BE\u08D9"+
		"\x03\x02\x02\x02\u08BF\u08C1\x05\x04\x03\x02\u08C0\u08C2\x05\x1E\x10\x02"+
		"\u08C1\u08C0\x03\x02\x02\x02\u08C1\u08C2\x03\x02\x02\x02\u08C2\u08D9\x03"+
		"\x02\x02\x02\u08C3\u08C4\t\n\x02\x02\u08C4\u08D9\x05\u01D4\xEB\t\u08C5"+
		"\u08C7\x05\u01D6\xEC\x02\u08C6\u08C8\x05\x1E\x10\x02\u08C7\u08C6\x03\x02"+
		"\x02\x02\u08C7\u08C8\x03\x02\x02\x02\u08C8\u08D9";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u08C9\u08CB\x05 \x11\x02\u08CA\u08C9\x03\x02\x02\x02"+
		"\u08CA\u08CB\x03\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CD\x07"+
		"o\x02\x02\u08CD\u08CF\x05\u0154\xAB\x02\u08CE\u08D0\x05\u01D6\xEC\x02"+
		"\u08CF\u08CE\x03\x02\x02\x02\u08CF\u08D0\x03\x02\x02\x02\u08D0\u08D9\x03"+
		"\x02\x02\x02\u08D1\u08D2\x05\x04\x03\x02\u08D2\u08D3\x06\xEB(\x02\u08D3"+
		"\u08D4\x07p\x02\x02\u08D4\u08D9\x03\x02\x02\x02\u08D5\u08D6\x07/\x02\x02"+
		"\u08D6\u08D9\x05\x1C\x0F\x02\u08D7\u08D9\x056\x1C\x02\u08D8\u08BA\x03"+
		"\x02\x02\x02\u08D8\u08BF\x03\x02\x02\x02\u08D8\u08C3\x03\x02\x02\x02\u08D8"+
		"\u08C5\x03\x02\x02\x02\u08D8\u08CA\x03\x02\x02\x02\u08D8\u08D1\x03\x02"+
		"\x02\x02\u08D8\u08D5\x03\x02\x02\x02\u08D8\u08D7\x03\x02\x02\x02\u08D9"+
		"\u08DF\x03\x02\x02\x02\u08DA\u08DB\f\x04\x02\x02\u08DB\u08DC\x07,\x02"+
		"\x02\u08DC\u08DE\x05\x1C\x0F\x02\u08DD\u08DA\x03\x02\x02\x02\u08DE\u08E1"+
		"\x03\x02\x02\x02\u08DF\u08DD\x03\x02\x02\x02\u08DF\u08E0\x03\x02\x02\x02"+
		"\u08E0\u01D5\x03\x02\x02\x02\u08E1\u08DF\x03\x02\x02\x02\u08E2\u08E4\x07"+
		"m\x02\x02\u08E3\u08E5\x05\u01D8\xED\x02\u08E4\u08E3\x03\x02\x02\x02\u08E4"+
		"\u08E5\x03\x02\x02\x02\u08E5\u08E6\x03\x02\x02\x02\u08E6\u08E7\x07s\x02"+
		"\x02\u08E7\u01D7\x03\x02\x02\x02\u08E8\u08ED\x05\u01DA\xEE\x02\u08E9\u08EA"+
		"\x07g\x02\x02\u08EA\u08EC\x05\u01DA\xEE\x02\u08EB\u08E9\x03\x02\x02\x02"+
		"\u08EC\u08EF\x03\x02\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08ED\u08EE\x03"+
		"\x02\x02\x02\u08EE\u01D9\x03\x02\x02\x02\u08EF\u08ED\x03\x02\x02\x02\u08F0"+
		"\u08F3\x079\x02\x02\u08F1\u08F3\x05\x04\x03\x02\u08F2\u08F0\x03\x02\x02"+
		"\x02\u08F2\u08F1\x03\x02\x02\x02\u08F3\u08F4\x03\x02\x02\x02\u08F4\u08F6"+
		"\x07f\x02\x02\u08F5\u08F2\x03\x02\x02\x02\u08F5\u08F6\x03\x02\x02\x02"+
		"\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F8\x05\u01D4\xEB\x02\u08F8\u01DB"+
		"\x03\x02\x02\x02\u08F9\u08FA\x07y\x02\x02\u08FA\u08FB\x05\u01DE\xF0\x02"+
		"\u08FB\u08FC\x07x\x02\x02\u08FC\u01DD\x03\x02\x02\x02\u08FD\u0902\x05"+
		"\u01E0\xF1\x02\u08FE\u08FF\x07g\x02\x02\u08FF\u0901\x05\u01E0\xF1\x02"+
		"\u0900\u08FE\x03\x02\x02\x02\u0901\u0904\x03\x02\x02\x02\u0902\u0900\x03"+
		"\x02\x02\x02\u0902\u0903\x03\x02\x02\x02\u0903\u01DF\x03\x02\x02\x02\u0904"+
		"\u0902\x03\x02\x02\x02\u0905\u090B\x05\"\x12\x02\u0906\u0909\x07f\x02"+
		"\x02\u0907\u090A\x05 \x11\x02\u0908\u090A\x052\x1A\x02\u0909\u0907\x03"+
		"\x02\x02\x02\u0909\u0908\x03\x02\x02\x02\u090A\u090C\x03\x02\x02\x02\u090B"+
		"\u0906\x03\x02\x02\x02\u090B\u090C\x03\x02\x02\x02\u090C\u01E1\x03\x02"+
		"\x02\x02\u090D\u090E\x07)\x02\x02\u090E\u090F\x05\u01E4\xF3\x02\u090F"+
		"\u01E3\x03\x02\x02\x02\u0910\u0915\x05\u01E6\xF4\x02\u0911\u0912\x07g"+
		"\x02\x02\u0912\u0914\x05\u01E6\xF4\x02\u0913\u0911\x03\x02\x02\x02\u0914"+
		"\u0917\x03\x02\x02\x02\u0915\u0913\x03\x02\x02\x02\u0915\u0916\x03\x02"+
		"\x02\x02\u0916\u01E5\x03\x02\x02\x02\u0917\u0915\x03\x02\x02\x02\u0918"+
		"\u091B\x05\u01E8\xF5\x02\u0919\u091B\x05\u01EA\xF6\x02\u091A\u0918\x03"+
		"\x02\x02\x02\u091A\u0919\x03\x02\x02\x02\u091B\u01E7\x03\x02\x02\x02\u091C"+
		"\u091D\x05 \x11\x02\u091D\u0920\x07f\x02\x02\u091E\u0921\x05 \x11\x02"+
		"\u091F\u0921\x052\x1A\x02\u0920\u091E\x03\x02\x02\x02\u0920\u091F\x03"+
		"\x02\x02\x02\u0921\u01E9\x03\x02\x02\x02\u0922\u0923\x05 \x11\x02\u0923"+
		"\u0924\x05\x1A\x0E\x02\u0924\u0925\x05\x1C\x0F\x02\u0925\u01EB\x03\x02"+
		"\x02\x02\u0926\u0927\x07y\x02\x02\u0927\u0928\x05\u01EE\xF8\x02\u0928"+
		"\u0929\x07x\x02\x02\u0929\u01ED\x03\x02\x02\x02\u092A\u092F\x05\u01F0"+
		"\xF9\x02\u092B\u092C\x07g\x02\x02\u092C\u092E\x05\u01F0\xF9\x02\u092D"+
		"\u092B\x03\x02\x02\x02\u092E\u0931\x03\x02\x02\x02\u092F\u092D\x03\x02"+
		"\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930\u01EF\x03\x02\x02\x02\u0931"+
		"\u092F\x03\x02\x02\x02\u0932\u0933\x05\x1C\x0F\x02\u0933\u01F1\x03\x02"+
		"\x02\x02\u0129\u01F9\u01FE\u0202\u0209\u020D\u022E\u0232\u0235\u0243\u024E"+
		"\u0250\u0255\u0258\u025E\u0262\u026C\u026E\u0276\u027A\u0280\u0282\u028B"+
		"\u028F\u0292\u0298\u029C\u02A4\u02AC\u02B0\u02B6\u02BE\u02C2\u02C5\u02CE"+
		"\u02D5\u02D8\u02DD\u02EB\u02ED\u02F3\u0300\u030A\u0312\u0316\u0325\u0329"+
		"\u0337\u033D\u034F\u0360\u0363\u0368\u036C\u036F\u0372\u0378\u037C\u0383"+
		"\u038A\u038C\u038F\u0399\u039F\u03A8\u03AA\u03B9\u03BB\u03C1\u03C4\u03CC"+
		"\u03D4\u03DA\u03E0\u03E2\u03EA\u03FF\u0402\u040B\u0412\u0418\u041A\u042B"+
		"\u042D\u0432\u043B\u0440\u0443\u0447\u044D\u0452\u045D\u0460\u0463\u0468"+
		"\u046D\u0471\u0475\u0479\u0486\u048D\u049F\u04A5\u04AA\u04B7\u04BE\u04C8"+
		"\u04CD\u04D1\u04DF\u04EB\u04EF\u04F3\u04F9\u0506\u050B\u050E\u0514\u051A"+
		"\u051E\u0525\u052A\u052E\u053B\u0543\u0554\u055F\u056C\u057B\u0584\u058D"+
		"\u058F\u05A0\u05A3\u05A7\u05AC\u05B0\u05BB\u05C0\u05C3\u05C6\u05D0\u05D5"+
		"\u05E5\u05E8\u05EA\u05EC\u05EF\u05F2\u05FC\u0601\u0605\u0608\u060B\u0611"+
		"\u0614\u0618\u0623\u0628\u062D\u0630\u0635\u0638\u063F\u0644\u0649\u064D"+
		"\u0652\u0656\u065B\u065E\u0663\u0670\u0674\u0677\u067A\u067D\u0683\u0687"+
		"\u068A\u068E\u0696\u069F\u06A3\u06AA\u06AE\u06B7\u06BA\u06BE\u06C1\u06C6"+
		"\u06C9\u06CC\u06D0\u06D7\u06DC\u06DF\u06E2\u06EC\u06F1\u06FA\u06FE\u0707"+
		"\u070C\u070F\u0719\u071E\u0727\u072A\u072D\u0732\u0735\u0738\u0740\u0747"+
		"\u074B\u074E\u0751\u0754\u0758\u075D\u0760\u0763\u076B\u0772\u0776\u0779"+
		"\u077C\u0781\u0784\u078C\u0793\u0797\u079F\u07A9\u07AD\u07B1\u07B5\u07B8"+
		"\u07BD\u07C2\u07C5\u07CA\u07CD\u07D0\u07D4\u07D8\u07DB\u07E0\u07E3\u07E8"+
		"\u07ED\u07F3\u07F6\u07FC\u0802\u0809\u080D\u0812\u0816\u0819\u081C\u0820"+
		"\u0826\u082D\u083B\u0844\u084B\u0850\u0863\u0877\u087C\u0882\u0889\u088F"+
		"\u0896\u089B\u08B8\u08BD\u08C1\u08C7\u08CA\u08CF\u08D8\u08DF\u08E4\u08ED"+
		"\u08F2\u08F5\u0902\u0909\u090B\u0915\u091A\u0920\u092F";
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
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public argumentLabel(): ArgumentLabelContext | undefined {
		return this.tryGetRuleContext(0, ArgumentLabelContext);
	}
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
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
	public _TYPE: Token;
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
	public functionCallArgumentList(): FunctionCallArgumentListContext {
		return this.getRuleContext(0, FunctionCallArgumentListContext);
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
	@Override public get ruleIndex(): number { return SwiftParser.RULE_argumentNames; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitArgumentNames) return visitor.visitArgumentNames(this);
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
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	public whereClause(): WhereClauseContext[];
	public whereClause(i: number): WhereClauseContext;
	public whereClause(i?: number): WhereClauseContext | WhereClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhereClauseContext);
		} else {
			return this.getRuleContext(i, WhereClauseContext);
		}
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
	public protocolMemberDeclatation(): ProtocolMemberDeclatationContext | undefined {
		return this.tryGetRuleContext(0, ProtocolMemberDeclatationContext);
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


export class ProtocolMemberDeclatationContext extends ParserRuleContext {
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
	@Override public get ruleIndex(): number { return SwiftParser.RULE_protocolMemberDeclatation; }
	@Override
	public accept<Result>(visitor: SwiftParserVisitor<Result>): Result {
		if (visitor.visitProtocolMemberDeclatation) return visitor.visitProtocolMemberDeclatation(this);
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


