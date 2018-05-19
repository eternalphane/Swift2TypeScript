// Generated from SwiftParser.g4 by ANTLR 4.7
package com.github.eternalphane.swift2typescript;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class SwiftParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ASSOCIATEDTYPE=1, CLASS=2, DEINIT=3, ENUM=4, EXTENSION=5, FILEPRIVATE=6, 
		FUNC=7, IMPORT=8, INIT=9, INOUT=10, INTERNAL=11, LET=12, OPEN=13, OPERATOR_KEYWORD=14, 
		PRECEDENCEGROUP=15, PRIVATE=16, PROTOCOL=17, PUBLIC=18, STATIC=19, STRUCT=20, 
		SUBSCRIPT=21, TYPEALIAS=22, VAR=23, BREAK=24, CASE=25, CONTINUE=26, DEFAULT=27, 
		DEFER=28, DO=29, ELSE=30, FALLTHROUGH=31, FOR=32, GUARD=33, IF=34, IN=35, 
		REPEAT=36, RETURN=37, SWITCH=38, WHERE=39, WHILE=40, ANY=41, AS=42, CATCH=43, 
		FALSE=44, IS=45, NIL=46, RETHROWS=47, SELF=48, SELF_TYPE=49, SUPER=50, 
		THROW=51, THROWS=52, TRUE=53, TRY=54, UNDERSCORE=55, AVAILABLE=56, COLOR_LITERAL=57, 
		COLUMN=58, ELSE_DIRECTIVE=59, ELSEIF_DIRECTIVE=60, ENDIF_DIRECTIVE=61, 
		FILE=62, FILE_LITERAL=63, FUNCTION=64, IF_DIRECTIVE=65, IMAGE_LITERAL=66, 
		KEY_PATH=67, LINE=68, SELECTOR=69, SOURCE_LOCATION=70, AMPERSAND=71, ARROW=72, 
		AT=73, COLON=74, COMMA=75, EQUAL=76, EXCLAMATION=77, GRAVE=78, LEFT_BRACE=79, 
		LEFT_BRACKET=80, LEFT_PARENTHESIS=81, PERIOD=82, QUESTION=83, RIGHT_BRACE=84, 
		RIGHT_BRACKET=85, RIGHT_PARENTHESIS=86, SEMICOLON=87, ASTERISK=88, BACKSLASH=89, 
		CARET=90, GREATER_THAN=91, LESS_THAN=92, MINUS=93, PERCENT=94, PIPE=95, 
		PLUS=96, SLASH=97, TILDE=98, WHITESPACE=99, LINE_BREAK=100, COMMENT=101, 
		BLOCK_COMMENT=102, IDENTIFIER=103, IMPLICIT_PARAMETER_NAME=104, BINARY_LITERAL=105, 
		OCTAL_LITERAL=106, DECIMAL_DIGITS=107, DECIMAL_LITERAL=108, HEXADECIMAL_LITERAL=109, 
		FLOATING_POINT_LITERAL=110, STATIC_STRING_LITERAL=111, INTERPOLATED_STRING_LITERAL=112, 
		OPERATOR_HEAD_OTHER=113, OPERATOR_CHARACTER_OTHER=114;
	public static final int
		RULE_start = 0, RULE_identifier = 1, RULE_identifierList = 2, RULE_literal = 3, 
		RULE_numericLiteral = 4, RULE_booleanLiteral = 5, RULE_nilLiteral = 6, 
		RULE_integerLiteral = 7, RULE_stringLiteral = 8, RULE_operator = 9, RULE_operatorHead = 10, 
		RULE_operatorCharacter = 11, RULE_dotOperatorHead = 12, RULE_dotOperatorCharacter = 13, 
		RULE_prefixOperator = 14, RULE_postfixOperator = 15, RULE_binaryOperator = 16, 
		RULE_type = 17, RULE_typeAnnotation = 18, RULE_typeIdentifier = 19, RULE_typeName = 20, 
		RULE_tupleType = 21, RULE_tupleTypeElement = 22, RULE_elementName = 23, 
		RULE_functionTypeArgumentClause = 24, RULE_functionTypeArgumentList = 25, 
		RULE_functionTypeArgument = 26, RULE_argumentLabel = 27, RULE_protocolCompositionType = 28, 
		RULE_typeInheritanceClause = 29, RULE_expression = 30, RULE_expressionList = 31, 
		RULE_prefixExpression = 32, RULE_inOutExpression = 33, RULE_tryOperator = 34, 
		RULE_binaryExpression = 35, RULE_assignmentOperator = 36, RULE_conditionalOperator = 37, 
		RULE_typeCastingOperator = 38, RULE_primaryExpression = 39, RULE_literalExpression = 40, 
		RULE_arrayLiteral = 41, RULE_dictionaryLiteral = 42, RULE_playgroundLiteral = 43, 
		RULE_selfExpression = 44, RULE_selfMethodExpression = 45, RULE_selfSubscriptExpression = 46, 
		RULE_selfInitializerExpression = 47, RULE_superclassExpression = 48, RULE_superclassMethodExpression = 49, 
		RULE_superclassSubscriptExpression = 50, RULE_superclassInitializerExpression = 51, 
		RULE_closureExpression = 52, RULE_closureSignature = 53, RULE_closureParameterClause = 54, 
		RULE_closureParameterList = 55, RULE_closureParameter = 56, RULE_closureParameterName = 57, 
		RULE_captureList = 58, RULE_captureListItem = 59, RULE_captureSpecifier = 60, 
		RULE_implicitMemberExpression = 61, RULE_parenthesizedExpression = 62, 
		RULE_tupleExpression = 63, RULE_tupleElement = 64, RULE_wildcardExpression = 65, 
		RULE_keyPathExpression = 66, RULE_keyPathComponent = 67, RULE_keyPathPostfix = 68, 
		RULE_selectorExpression = 69, RULE_keyPathStringExpression = 70, RULE_postfixExpression = 71, 
		RULE_functionCallArgumentClause = 72, RULE_functionCallArgumentList = 73, 
		RULE_functionCallArgument = 74, RULE_trailingClosure = 75, RULE_argumentNames = 76, 
		RULE_statement = 77, RULE_statements = 78, RULE_loopStatement = 79, RULE_forInStatement = 80, 
		RULE_whileStatement = 81, RULE_conditionList = 82, RULE_condition = 83, 
		RULE_caseCondition = 84, RULE_optionalBindingCondition = 85, RULE_repeatWhileStatement = 86, 
		RULE_branchStatement = 87, RULE_ifStatement = 88, RULE_elseClause = 89, 
		RULE_guardStatement = 90, RULE_switchStatement = 91, RULE_switchCase = 92, 
		RULE_caseLabel = 93, RULE_caseItemList = 94, RULE_defaultLabel = 95, RULE_whereClause = 96, 
		RULE_labeledStatement = 97, RULE_statementLabel = 98, RULE_labelName = 99, 
		RULE_controlTransferStatement = 100, RULE_breakStatement = 101, RULE_continueStatement = 102, 
		RULE_fallthroughStatement = 103, RULE_returnStatement = 104, RULE_throwStatement = 105, 
		RULE_deferStatement = 106, RULE_doStatement = 107, RULE_catchClause = 108, 
		RULE_compilerControlStatement = 109, RULE_conditionalCompilationBlock = 110, 
		RULE_ifDirectiveClause = 111, RULE_elseifDirectiveClause = 112, RULE_elseDirectiveClause = 113, 
		RULE_compilationCondition = 114, RULE_platformCondition = 115, RULE_operatingSystem = 116, 
		RULE_architecture = 117, RULE_swiftVersion = 118, RULE_lineControlStatement = 119, 
		RULE_lineNumber = 120, RULE_fileName = 121, RULE_availabilityCondition = 122, 
		RULE_availabilityArgument = 123, RULE_platformName = 124, RULE_platformVersion = 125, 
		RULE_declaration = 126, RULE_topLevelDeclaration = 127, RULE_codeBlock = 128, 
		RULE_importDeclaration = 129, RULE_importKind = 130, RULE_importPath = 131, 
		RULE_importPathIdentifier = 132, RULE_constantDeclaration = 133, RULE_patternInitializerList = 134, 
		RULE_patternInitializer = 135, RULE_initializer = 136, RULE_variableDeclaration = 137, 
		RULE_variableDeclarationHead = 138, RULE_variableName = 139, RULE_getterSetterBlock = 140, 
		RULE_getterClause = 141, RULE_setterClause = 142, RULE_setterName = 143, 
		RULE_getterSetterKeywordBlock = 144, RULE_getterKeywordClause = 145, RULE_setterKeywordClause = 146, 
		RULE_willSetDidSetBlock = 147, RULE_willSetClause = 148, RULE_didSetClause = 149, 
		RULE_typealiasDeclaration = 150, RULE_typealiasName = 151, RULE_typealiasAssignment = 152, 
		RULE_functionDeclaration = 153, RULE_functionHead = 154, RULE_functionName = 155, 
		RULE_functionSignature = 156, RULE_functionResult = 157, RULE_functionBody = 158, 
		RULE_parameterClause = 159, RULE_parameterList = 160, RULE_parameter = 161, 
		RULE_externalParameterName = 162, RULE_localParameterName = 163, RULE_defaultArgumentClause = 164, 
		RULE_enumDeclaration = 165, RULE_unionStyleEnum = 166, RULE_unionStyleEnumMembers = 167, 
		RULE_unionStyleEnumMember = 168, RULE_unionStyleEnumCaseClause = 169, 
		RULE_unionStyleEnumCaseList = 170, RULE_unionStyleEnumCase = 171, RULE_enumName = 172, 
		RULE_enumCaseName = 173, RULE_rawValueStyleEnum = 174, RULE_rawValueStyleEnumMembers = 175, 
		RULE_rawValueStyleEnumMember = 176, RULE_rawValueStyleEnumCaseClause = 177, 
		RULE_rawValueStyleEnumCaseList = 178, RULE_rawValueStyleEnumCase = 179, 
		RULE_rawValueAssignment = 180, RULE_rawValueLiteral = 181, RULE_structDeclaration = 182, 
		RULE_structName = 183, RULE_structBody = 184, RULE_structMembers = 185, 
		RULE_structMember = 186, RULE_classDeclaration = 187, RULE_className = 188, 
		RULE_classBody = 189, RULE_classMembers = 190, RULE_classMember = 191, 
		RULE_protocolDeclaration = 192, RULE_protocolName = 193, RULE_protocolBody = 194, 
		RULE_protocolMembers = 195, RULE_protocolMember = 196, RULE_protocolMemberDeclatation = 197, 
		RULE_protocolPropertyDeclaration = 198, RULE_protocolMethodDeclaration = 199, 
		RULE_protocolInitializerDeclaration = 200, RULE_protocolSubscriptDeclaration = 201, 
		RULE_protocolAssociatedTypeDeclaration = 202, RULE_initializerDeclaration = 203, 
		RULE_initializerHead = 204, RULE_initializerBody = 205, RULE_deinitializerDeclaration = 206, 
		RULE_extensionDeclaration = 207, RULE_extensionBody = 208, RULE_extensionMembers = 209, 
		RULE_extensionMember = 210, RULE_subscriptDeclaration = 211, RULE_subscriptHead = 212, 
		RULE_subscriptResult = 213, RULE_operatorDeclaration = 214, RULE_prefixOperatorDeclaration = 215, 
		RULE_postfixOperatorDeclaration = 216, RULE_infixOperatorDeclaration = 217, 
		RULE_infixOperatorGroup = 218, RULE_precedenceGroupDeclaration = 219, 
		RULE_precedenceGroupAttributes = 220, RULE_precedenceGroupAttribute = 221, 
		RULE_precedenceGroupRelation = 222, RULE_precedenceGroupAssignment = 223, 
		RULE_precedenceGroupAssociativity = 224, RULE_precedenceGroupNames = 225, 
		RULE_precedenceGroupName = 226, RULE_declarationModifier = 227, RULE_declarationModifiers = 228, 
		RULE_accessLevelModifier = 229, RULE_mutationModifier = 230, RULE_attribute = 231, 
		RULE_attributeName = 232, RULE_attributeArgumentClause = 233, RULE_attributes = 234, 
		RULE_balancedTokens = 235, RULE_balancedToken = 236, RULE_pattern = 237, 
		RULE_wildcardPattern = 238, RULE_identifierPattern = 239, RULE_valueBindingPattern = 240, 
		RULE_tuplePattern = 241, RULE_tuplePatternElementList = 242, RULE_tuplePatternElement = 243, 
		RULE_enumCasePattern = 244, RULE_optionalPattern = 245, RULE_typeCastingPattern = 246, 
		RULE_isPattern = 247, RULE_asPattern = 248, RULE_expressionPattern = 249, 
		RULE_genericParameterClause = 250, RULE_genericParameterList = 251, RULE_genericParameter = 252, 
		RULE_genericWhereClause = 253, RULE_requirementList = 254, RULE_requirement = 255, 
		RULE_conformanceRequirement = 256, RULE_sameTypeRequirement = 257, RULE_genericArgumentClause = 258, 
		RULE_genericArgumentList = 259, RULE_genericArgument = 260;
	public static final String[] ruleNames = {
		"start", "identifier", "identifierList", "literal", "numericLiteral", 
		"booleanLiteral", "nilLiteral", "integerLiteral", "stringLiteral", "operator", 
		"operatorHead", "operatorCharacter", "dotOperatorHead", "dotOperatorCharacter", 
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
		"balancedToken", "pattern", "wildcardPattern", "identifierPattern", "valueBindingPattern", 
		"tuplePattern", "tuplePatternElementList", "tuplePatternElement", "enumCasePattern", 
		"optionalPattern", "typeCastingPattern", "isPattern", "asPattern", "expressionPattern", 
		"genericParameterClause", "genericParameterList", "genericParameter", 
		"genericWhereClause", "requirementList", "requirement", "conformanceRequirement", 
		"sameTypeRequirement", "genericArgumentClause", "genericArgumentList", 
		"genericArgument"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'associatedtype'", "'class'", "'deinit'", "'enum'", "'extension'", 
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
		"'#sourceLocation'", "'&'", "'->'", "'@'", "':'", "','", "'='", "'!'", 
		"'`'", "'{'", "'['", "'('", "'.'", "'?'", "'}'", "']'", "')'", "';'", 
		"'*'", "'\\'", "'^'", "'>'", "'<'", "'-'", "'%'", "'|'", "'+'", "'/'", 
		"'~'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "ASSOCIATEDTYPE", "CLASS", "DEINIT", "ENUM", "EXTENSION", "FILEPRIVATE", 
		"FUNC", "IMPORT", "INIT", "INOUT", "INTERNAL", "LET", "OPEN", "OPERATOR_KEYWORD", 
		"PRECEDENCEGROUP", "PRIVATE", "PROTOCOL", "PUBLIC", "STATIC", "STRUCT", 
		"SUBSCRIPT", "TYPEALIAS", "VAR", "BREAK", "CASE", "CONTINUE", "DEFAULT", 
		"DEFER", "DO", "ELSE", "FALLTHROUGH", "FOR", "GUARD", "IF", "IN", "REPEAT", 
		"RETURN", "SWITCH", "WHERE", "WHILE", "ANY", "AS", "CATCH", "FALSE", "IS", 
		"NIL", "RETHROWS", "SELF", "SELF_TYPE", "SUPER", "THROW", "THROWS", "TRUE", 
		"TRY", "UNDERSCORE", "AVAILABLE", "COLOR_LITERAL", "COLUMN", "ELSE_DIRECTIVE", 
		"ELSEIF_DIRECTIVE", "ENDIF_DIRECTIVE", "FILE", "FILE_LITERAL", "FUNCTION", 
		"IF_DIRECTIVE", "IMAGE_LITERAL", "KEY_PATH", "LINE", "SELECTOR", "SOURCE_LOCATION", 
		"AMPERSAND", "ARROW", "AT", "COLON", "COMMA", "EQUAL", "EXCLAMATION", 
		"GRAVE", "LEFT_BRACE", "LEFT_BRACKET", "LEFT_PARENTHESIS", "PERIOD", "QUESTION", 
		"RIGHT_BRACE", "RIGHT_BRACKET", "RIGHT_PARENTHESIS", "SEMICOLON", "ASTERISK", 
		"BACKSLASH", "CARET", "GREATER_THAN", "LESS_THAN", "MINUS", "PERCENT", 
		"PIPE", "PLUS", "SLASH", "TILDE", "WHITESPACE", "LINE_BREAK", "COMMENT", 
		"BLOCK_COMMENT", "IDENTIFIER", "IMPLICIT_PARAMETER_NAME", "BINARY_LITERAL", 
		"OCTAL_LITERAL", "DECIMAL_DIGITS", "DECIMAL_LITERAL", "HEXADECIMAL_LITERAL", 
		"FLOATING_POINT_LITERAL", "STATIC_STRING_LITERAL", "INTERPOLATED_STRING_LITERAL", 
		"OPERATOR_HEAD_OTHER", "OPERATOR_CHARACTER_OTHER"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "SwiftParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }


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

	public SwiftParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class StartContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode EOF() { return getToken(SwiftParser.EOF, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStart(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(522);
			statements();
			setState(523);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public TerminalNode IMPLICIT_PARAMETER_NAME() { return getToken(SwiftParser.IMPLICIT_PARAMETER_NAME, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_identifier);
		int _la;
		try {
			setState(532);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				enterOuterAlt(_localctx, 1);
				{
				setState(525);
				match(IDENTIFIER);
				}
				break;
			case GRAVE:
				enterOuterAlt(_localctx, 2);
				{
				setState(526);
				match(GRAVE);
				setState(527);
				if (!(!testLN(-1, true, WHITESPACE))) throw new FailedPredicateException(this, "!testLN(-1, true, WHITESPACE)");
				setState(528);
				_la = _input.LA(1);
				if ( !(_la==UNDERSCORE || _la==IDENTIFIER) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(529);
				if (!(!testLN(-1, true, WHITESPACE))) throw new FailedPredicateException(this, "!testLN(-1, true, WHITESPACE)");
				setState(530);
				match(GRAVE);
				}
				break;
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 3);
				{
				setState(531);
				match(IMPLICIT_PARAMETER_NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierListContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public IdentifierListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIdentifierList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierListContext identifierList() throws RecognitionException {
		IdentifierListContext _localctx = new IdentifierListContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_identifierList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(536);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				{
				setState(534);
				match(UNDERSCORE);
				}
				break;
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				{
				setState(535);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(538);
				match(COMMA);
				setState(541);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(539);
					match(UNDERSCORE);
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(540);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				setState(547);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public StringLiteralContext stringLiteral() {
			return getRuleContext(StringLiteralContext.class,0);
		}
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public NilLiteralContext nilLiteral() {
			return getRuleContext(NilLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_literal);
		try {
			setState(552);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BINARY_LITERAL:
			case OCTAL_LITERAL:
			case DECIMAL_DIGITS:
			case DECIMAL_LITERAL:
			case HEXADECIMAL_LITERAL:
			case FLOATING_POINT_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(548);
				numericLiteral();
				}
				break;
			case STATIC_STRING_LITERAL:
			case INTERPOLATED_STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(549);
				stringLiteral();
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(550);
				booleanLiteral();
				}
				break;
			case NIL:
				enterOuterAlt(_localctx, 4);
				{
				setState(551);
				nilLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumericLiteralContext extends ParserRuleContext {
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public TerminalNode FLOATING_POINT_LITERAL() { return getToken(SwiftParser.FLOATING_POINT_LITERAL, 0); }
		public NumericLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numericLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitNumericLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumericLiteralContext numericLiteral() throws RecognitionException {
		NumericLiteralContext _localctx = new NumericLiteralContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_numericLiteral);
		try {
			setState(556);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BINARY_LITERAL:
			case OCTAL_LITERAL:
			case DECIMAL_DIGITS:
			case DECIMAL_LITERAL:
			case HEXADECIMAL_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(554);
				integerLiteral();
				}
				break;
			case FLOATING_POINT_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(555);
				match(FLOATING_POINT_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BooleanLiteralContext extends ParserRuleContext {
		public BooleanLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleanLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBooleanLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BooleanLiteralContext booleanLiteral() throws RecognitionException {
		BooleanLiteralContext _localctx = new BooleanLiteralContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_booleanLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			_la = _input.LA(1);
			if ( !(_la==FALSE || _la==TRUE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NilLiteralContext extends ParserRuleContext {
		public NilLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nilLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitNilLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NilLiteralContext nilLiteral() throws RecognitionException {
		NilLiteralContext _localctx = new NilLiteralContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_nilLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			match(NIL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IntegerLiteralContext extends ParserRuleContext {
		public TerminalNode BINARY_LITERAL() { return getToken(SwiftParser.BINARY_LITERAL, 0); }
		public TerminalNode OCTAL_LITERAL() { return getToken(SwiftParser.OCTAL_LITERAL, 0); }
		public TerminalNode DECIMAL_DIGITS() { return getToken(SwiftParser.DECIMAL_DIGITS, 0); }
		public TerminalNode DECIMAL_LITERAL() { return getToken(SwiftParser.DECIMAL_LITERAL, 0); }
		public TerminalNode HEXADECIMAL_LITERAL() { return getToken(SwiftParser.HEXADECIMAL_LITERAL, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIntegerLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_integerLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(562);
			_la = _input.LA(1);
			if ( !(((((_la - 105)) & ~0x3f) == 0 && ((1L << (_la - 105)) & ((1L << (BINARY_LITERAL - 105)) | (1L << (OCTAL_LITERAL - 105)) | (1L << (DECIMAL_DIGITS - 105)) | (1L << (DECIMAL_LITERAL - 105)) | (1L << (HEXADECIMAL_LITERAL - 105)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringLiteralContext extends ParserRuleContext {
		public TerminalNode STATIC_STRING_LITERAL() { return getToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
		public TerminalNode INTERPOLATED_STRING_LITERAL() { return getToken(SwiftParser.INTERPOLATED_STRING_LITERAL, 0); }
		public StringLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStringLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StringLiteralContext stringLiteral() throws RecognitionException {
		StringLiteralContext _localctx = new StringLiteralContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_stringLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(564);
			_la = _input.LA(1);
			if ( !(_la==STATIC_STRING_LITERAL || _la==INTERPOLATED_STRING_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorContext extends ParserRuleContext {
		public OperatorHeadContext operatorHead() {
			return getRuleContext(OperatorHeadContext.class,0);
		}
		public List<OperatorCharacterContext> operatorCharacter() {
			return getRuleContexts(OperatorCharacterContext.class);
		}
		public OperatorCharacterContext operatorCharacter(int i) {
			return getRuleContext(OperatorCharacterContext.class,i);
		}
		public DotOperatorHeadContext dotOperatorHead() {
			return getRuleContext(DotOperatorHeadContext.class,0);
		}
		public List<DotOperatorCharacterContext> dotOperatorCharacter() {
			return getRuleContexts(DotOperatorCharacterContext.class);
		}
		public DotOperatorCharacterContext dotOperatorCharacter(int i) {
			return getRuleContext(DotOperatorCharacterContext.class,i);
		}
		public OperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatorContext operator() throws RecognitionException {
		OperatorContext _localctx = new OperatorContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_operator);
		try {
			int _alt;
			setState(581);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(566);
				operatorHead();
				setState(571);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(567);
						if (!(!testLN(-1, true, WHITESPACE))) throw new FailedPredicateException(this, "!testLN(-1, true, WHITESPACE)");
						setState(568);
						operatorCharacter();
						}
						} 
					}
					setState(573);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
				}
				}
				break;
			case PERIOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(574);
				dotOperatorHead();
				setState(577); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(575);
						if (!(!testLN(-1, true, WHITESPACE))) throw new FailedPredicateException(this, "!testLN(-1, true, WHITESPACE)");
						setState(576);
						dotOperatorCharacter();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(579); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorHeadContext extends ParserRuleContext {
		public TerminalNode OPERATOR_HEAD_OTHER() { return getToken(SwiftParser.OPERATOR_HEAD_OTHER, 0); }
		public OperatorHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOperatorHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatorHeadContext operatorHead() throws RecognitionException {
		OperatorHeadContext _localctx = new OperatorHeadContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_operatorHead);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(583);
			_la = _input.LA(1);
			if ( !(((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (AMPERSAND - 71)) | (1L << (EQUAL - 71)) | (1L << (EXCLAMATION - 71)) | (1L << (QUESTION - 71)) | (1L << (ASTERISK - 71)) | (1L << (CARET - 71)) | (1L << (GREATER_THAN - 71)) | (1L << (LESS_THAN - 71)) | (1L << (MINUS - 71)) | (1L << (PERCENT - 71)) | (1L << (PIPE - 71)) | (1L << (PLUS - 71)) | (1L << (SLASH - 71)) | (1L << (TILDE - 71)) | (1L << (OPERATOR_HEAD_OTHER - 71)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorCharacterContext extends ParserRuleContext {
		public OperatorHeadContext operatorHead() {
			return getRuleContext(OperatorHeadContext.class,0);
		}
		public TerminalNode OPERATOR_CHARACTER_OTHER() { return getToken(SwiftParser.OPERATOR_CHARACTER_OTHER, 0); }
		public OperatorCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorCharacter; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOperatorCharacter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatorCharacterContext operatorCharacter() throws RecognitionException {
		OperatorCharacterContext _localctx = new OperatorCharacterContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_operatorCharacter);
		try {
			setState(587);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
				enterOuterAlt(_localctx, 1);
				{
				setState(585);
				operatorHead();
				}
				break;
			case OPERATOR_CHARACTER_OTHER:
				enterOuterAlt(_localctx, 2);
				{
				setState(586);
				match(OPERATOR_CHARACTER_OTHER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DotOperatorHeadContext extends ParserRuleContext {
		public DotOperatorHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dotOperatorHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDotOperatorHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DotOperatorHeadContext dotOperatorHead() throws RecognitionException {
		DotOperatorHeadContext _localctx = new DotOperatorHeadContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_dotOperatorHead);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(589);
			match(PERIOD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DotOperatorCharacterContext extends ParserRuleContext {
		public OperatorCharacterContext operatorCharacter() {
			return getRuleContext(OperatorCharacterContext.class,0);
		}
		public DotOperatorCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dotOperatorCharacter; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDotOperatorCharacter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DotOperatorCharacterContext dotOperatorCharacter() throws RecognitionException {
		DotOperatorCharacterContext _localctx = new DotOperatorCharacterContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_dotOperatorCharacter);
		try {
			setState(593);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PERIOD:
				enterOuterAlt(_localctx, 1);
				{
				setState(591);
				match(PERIOD);
				}
				break;
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
			case OPERATOR_CHARACTER_OTHER:
				enterOuterAlt(_localctx, 2);
				{
				setState(592);
				operatorCharacter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixOperatorContext extends ParserRuleContext {
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public PrefixOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrefixOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrefixOperatorContext prefixOperator() throws RecognitionException {
		PrefixOperatorContext _localctx = new PrefixOperatorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_prefixOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(595);
			if (!(isPreOp())) throw new FailedPredicateException(this, "isPreOp()");
			setState(596);
			operator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixOperatorContext extends ParserRuleContext {
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public PostfixOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPostfixOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PostfixOperatorContext postfixOperator() throws RecognitionException {
		PostfixOperatorContext _localctx = new PostfixOperatorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_postfixOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(598);
			if (!(isPostOp())) throw new FailedPredicateException(this, "isPostOp()");
			setState(599);
			operator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryOperatorContext extends ParserRuleContext {
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public BinaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBinaryOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BinaryOperatorContext binaryOperator() throws RecognitionException {
		BinaryOperatorContext _localctx = new BinaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_binaryOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(601);
			if (!(isBinOp())) throw new FailedPredicateException(this, "isBinOp()");
			setState(602);
			operator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	 
		public TypeContext() { }
		public void copyFrom(TypeContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class GeneralTypeContext extends TypeContext {
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public GeneralTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGeneralType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ImplicitlyUnwrappedOptionalTypeContext extends TypeContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ImplicitlyUnwrappedOptionalTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImplicitlyUnwrappedOptionalType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayTypeContext extends TypeContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ArrayTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitArrayType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ProtocolCompositionTypeAlternativeContext extends TypeContext {
		public ProtocolCompositionTypeContext protocolCompositionType() {
			return getRuleContext(ProtocolCompositionTypeContext.class,0);
		}
		public ProtocolCompositionTypeAlternativeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolCompositionTypeAlternative(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class AnyTypeContext extends TypeContext {
		public AnyTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAnyType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class DictionaryTypeContext extends TypeContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public DictionaryTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDictionaryType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class OptionalTypeContext extends TypeContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public OptionalTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOptionalType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MetatypeTypeContext extends TypeContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public MetatypeTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitMetatypeType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class FunctionTypeContext extends TypeContext {
		public FunctionTypeArgumentClauseContext functionTypeArgumentClause() {
			return getRuleContext(FunctionTypeArgumentClauseContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public FunctionTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SelfTypeContext extends TypeContext {
		public SelfTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelfType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class QuotedTypeContext extends TypeContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public QuotedTypeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitQuotedType(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class TupleTypeAlternativeContext extends TypeContext {
		public TupleTypeContext tupleType() {
			return getRuleContext(TupleTypeContext.class,0);
		}
		public TupleTypeAlternativeContext(TypeContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTupleTypeAlternative(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		return type(0);
	}

	private TypeContext type(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeContext _localctx = new TypeContext(_ctx, _parentState);
		TypeContext _prevctx = _localctx;
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_type, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(637);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				_localctx = new ArrayTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(605);
				match(LEFT_BRACKET);
				setState(606);
				type(0);
				setState(607);
				match(RIGHT_BRACKET);
				}
				break;
			case 2:
				{
				_localctx = new DictionaryTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(609);
				match(LEFT_BRACKET);
				setState(610);
				type(0);
				setState(611);
				match(COLON);
				setState(612);
				type(0);
				setState(613);
				match(RIGHT_BRACKET);
				}
				break;
			case 3:
				{
				_localctx = new FunctionTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==AT) {
					{
					setState(615);
					attributes();
					}
				}

				setState(618);
				functionTypeArgumentClause();
				setState(623);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case THROWS:
				case ARROW:
					{
					setState(620);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==THROWS) {
						{
						setState(619);
						match(THROWS);
						}
					}

					}
					break;
				case RETHROWS:
					{
					setState(622);
					match(RETHROWS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(625);
				match(ARROW);
				setState(626);
				type(10);
				}
				break;
			case 4:
				{
				_localctx = new GeneralTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(628);
				typeIdentifier();
				}
				break;
			case 5:
				{
				_localctx = new TupleTypeAlternativeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(629);
				tupleType();
				}
				break;
			case 6:
				{
				_localctx = new ProtocolCompositionTypeAlternativeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(630);
				protocolCompositionType();
				}
				break;
			case 7:
				{
				_localctx = new AnyTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(631);
				match(ANY);
				}
				break;
			case 8:
				{
				_localctx = new SelfTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(632);
				match(SELF_TYPE);
				}
				break;
			case 9:
				{
				_localctx = new QuotedTypeContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(633);
				match(LEFT_PARENTHESIS);
				setState(634);
				type(0);
				setState(635);
				match(RIGHT_PARENTHESIS);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(651);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(649);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new OptionalTypeContext(new TypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_type);
						setState(639);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(640);
						if (!(isPostOp())) throw new FailedPredicateException(this, "isPostOp()");
						setState(641);
						match(QUESTION);
						}
						break;
					case 2:
						{
						_localctx = new ImplicitlyUnwrappedOptionalTypeContext(new TypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_type);
						setState(642);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(643);
						if (!(isPostOp())) throw new FailedPredicateException(this, "isPostOp()");
						setState(644);
						match(EXCLAMATION);
						}
						break;
					case 3:
						{
						_localctx = new MetatypeTypeContext(new TypeContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_type);
						setState(645);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(646);
						match(PERIOD);
						setState(647);
						if (!(testLN(1, "Type", "Protocol"))) throw new FailedPredicateException(this, "testLN(1, \"Type\", \"Protocol\")");
						setState(648);
						match(IDENTIFIER);
						}
						break;
					}
					} 
				}
				setState(653);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypeAnnotationContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public TypeAnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeAnnotation; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeAnnotation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeAnnotationContext typeAnnotation() throws RecognitionException {
		TypeAnnotationContext _localctx = new TypeAnnotationContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_typeAnnotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(654);
			match(COLON);
			setState(656);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(655);
				attributes();
				}
				break;
			}
			setState(659);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INOUT) {
				{
				setState(658);
				match(INOUT);
				}
			}

			setState(661);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeIdentifierContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public GenericArgumentClauseContext genericArgumentClause() {
			return getRuleContext(GenericArgumentClauseContext.class,0);
		}
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public TypeIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeIdentifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeIdentifierContext typeIdentifier() throws RecognitionException {
		TypeIdentifierContext _localctx = new TypeIdentifierContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_typeIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(663);
			typeName();
			setState(665);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(664);
				genericArgumentClause();
				}
				break;
			}
			setState(669);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(667);
				match(PERIOD);
				setState(668);
				typeIdentifier();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeNameContext typeName() throws RecognitionException {
		TypeNameContext _localctx = new TypeNameContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_typeName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(671);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleTypeContext extends ParserRuleContext {
		public List<TupleTypeElementContext> tupleTypeElement() {
			return getRuleContexts(TupleTypeElementContext.class);
		}
		public TupleTypeElementContext tupleTypeElement(int i) {
			return getRuleContext(TupleTypeElementContext.class,i);
		}
		public TupleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleType; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTupleType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleTypeContext tupleType() throws RecognitionException {
		TupleTypeContext _localctx = new TupleTypeContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_tupleType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(673);
			match(LEFT_PARENTHESIS);
			setState(681);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 41)) & ~0x3f) == 0 && ((1L << (_la - 41)) & ((1L << (ANY - 41)) | (1L << (SELF_TYPE - 41)) | (1L << (UNDERSCORE - 41)) | (1L << (AT - 41)) | (1L << (GRAVE - 41)) | (1L << (LEFT_BRACKET - 41)) | (1L << (LEFT_PARENTHESIS - 41)) | (1L << (IDENTIFIER - 41)) | (1L << (IMPLICIT_PARAMETER_NAME - 41)))) != 0)) {
				{
				setState(674);
				tupleTypeElement();
				setState(677); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(675);
					match(COMMA);
					setState(676);
					tupleTypeElement();
					}
					}
					setState(679); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==COMMA );
				}
			}

			setState(683);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleTypeElementContext extends ParserRuleContext {
		public ElementNameContext elementName() {
			return getRuleContext(ElementNameContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TupleTypeElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleTypeElement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTupleTypeElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleTypeElementContext tupleTypeElement() throws RecognitionException {
		TupleTypeElementContext _localctx = new TupleTypeElementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_tupleTypeElement);
		try {
			setState(689);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(685);
				elementName();
				setState(686);
				typeAnnotation();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(688);
				type(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ElementNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitElementName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementNameContext elementName() throws RecognitionException {
		ElementNameContext _localctx = new ElementNameContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_elementName);
		try {
			setState(693);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(691);
				match(UNDERSCORE);
				}
				break;
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(692);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionTypeArgumentClauseContext extends ParserRuleContext {
		public FunctionTypeArgumentListContext functionTypeArgumentList() {
			return getRuleContext(FunctionTypeArgumentListContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public FunctionTypeArgumentClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeArgumentClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionTypeArgumentClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionTypeArgumentClauseContext functionTypeArgumentClause() throws RecognitionException {
		FunctionTypeArgumentClauseContext _localctx = new FunctionTypeArgumentClauseContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_functionTypeArgumentClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(695);
			match(LEFT_PARENTHESIS);
			setState(701);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INOUT) | (1L << ANY) | (1L << SELF_TYPE) | (1L << UNDERSCORE))) != 0) || ((((_la - 73)) & ~0x3f) == 0 && ((1L << (_la - 73)) & ((1L << (AT - 73)) | (1L << (GRAVE - 73)) | (1L << (LEFT_BRACKET - 73)) | (1L << (LEFT_PARENTHESIS - 73)) | (1L << (IDENTIFIER - 73)) | (1L << (IMPLICIT_PARAMETER_NAME - 73)))) != 0)) {
				{
				setState(696);
				functionTypeArgumentList();
				setState(699);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(697);
					if (!(testLN(1, "..."))) throw new FailedPredicateException(this, "testLN(1, \"...\")");
					setState(698);
					operator();
					}
					break;
				}
				}
			}

			setState(703);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionTypeArgumentListContext extends ParserRuleContext {
		public FunctionTypeArgumentContext functionTypeArgument() {
			return getRuleContext(FunctionTypeArgumentContext.class,0);
		}
		public List<FunctionTypeArgumentListContext> functionTypeArgumentList() {
			return getRuleContexts(FunctionTypeArgumentListContext.class);
		}
		public FunctionTypeArgumentListContext functionTypeArgumentList(int i) {
			return getRuleContext(FunctionTypeArgumentListContext.class,i);
		}
		public FunctionTypeArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeArgumentList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionTypeArgumentList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionTypeArgumentListContext functionTypeArgumentList() throws RecognitionException {
		FunctionTypeArgumentListContext _localctx = new FunctionTypeArgumentListContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_functionTypeArgumentList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(705);
			functionTypeArgument();
			setState(710);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(706);
					match(COMMA);
					setState(707);
					functionTypeArgumentList();
					}
					} 
				}
				setState(712);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionTypeArgumentContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public ArgumentLabelContext argumentLabel() {
			return getRuleContext(ArgumentLabelContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public FunctionTypeArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionTypeArgument; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionTypeArgument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionTypeArgumentContext functionTypeArgument() throws RecognitionException {
		FunctionTypeArgumentContext _localctx = new FunctionTypeArgumentContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_functionTypeArgument);
		int _la;
		try {
			setState(723);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INOUT:
			case ANY:
			case SELF_TYPE:
			case AT:
			case GRAVE:
			case LEFT_BRACKET:
			case LEFT_PARENTHESIS:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(714);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
				case 1:
					{
					setState(713);
					attributes();
					}
					break;
				}
				setState(717);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INOUT) {
					{
					setState(716);
					match(INOUT);
					}
				}

				setState(719);
				type(0);
				}
				break;
			case UNDERSCORE:
				enterOuterAlt(_localctx, 2);
				{
				setState(720);
				argumentLabel();
				setState(721);
				typeAnnotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentLabelContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentLabel; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitArgumentLabel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgumentLabelContext argumentLabel() throws RecognitionException {
		ArgumentLabelContext _localctx = new ArgumentLabelContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_argumentLabel);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(725);
			match(UNDERSCORE);
			setState(727);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 78)) & ~0x3f) == 0 && ((1L << (_la - 78)) & ((1L << (GRAVE - 78)) | (1L << (IDENTIFIER - 78)) | (1L << (IMPLICIT_PARAMETER_NAME - 78)))) != 0)) {
				{
				setState(726);
				identifier();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolCompositionTypeContext extends ParserRuleContext {
		public List<TypeIdentifierContext> typeIdentifier() {
			return getRuleContexts(TypeIdentifierContext.class);
		}
		public TypeIdentifierContext typeIdentifier(int i) {
			return getRuleContext(TypeIdentifierContext.class,i);
		}
		public ProtocolCompositionTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolCompositionType; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolCompositionType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolCompositionTypeContext protocolCompositionType() throws RecognitionException {
		ProtocolCompositionTypeContext _localctx = new ProtocolCompositionTypeContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_protocolCompositionType);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(729);
			typeIdentifier();
			setState(733); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(730);
					if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
					setState(731);
					match(AMPERSAND);
					setState(732);
					typeIdentifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(735); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeInheritanceClauseContext extends ParserRuleContext {
		public List<TypeIdentifierContext> typeIdentifier() {
			return getRuleContexts(TypeIdentifierContext.class);
		}
		public TypeIdentifierContext typeIdentifier(int i) {
			return getRuleContext(TypeIdentifierContext.class,i);
		}
		public TypeInheritanceClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeInheritanceClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeInheritanceClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeInheritanceClauseContext typeInheritanceClause() throws RecognitionException {
		TypeInheritanceClauseContext _localctx = new TypeInheritanceClauseContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_typeInheritanceClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(737);
			match(COLON);
			setState(738);
			typeIdentifier();
			setState(743);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(739);
					match(COMMA);
					setState(740);
					typeIdentifier();
					}
					} 
				}
				setState(745);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public PrefixExpressionContext prefixExpression() {
			return getRuleContext(PrefixExpressionContext.class,0);
		}
		public TryOperatorContext tryOperator() {
			return getRuleContext(TryOperatorContext.class,0);
		}
		public List<BinaryExpressionContext> binaryExpression() {
			return getRuleContexts(BinaryExpressionContext.class);
		}
		public BinaryExpressionContext binaryExpression(int i) {
			return getRuleContext(BinaryExpressionContext.class,i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_expression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(747);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				{
				setState(746);
				tryOperator();
				}
				break;
			}
			setState(749);
			prefixExpression();
			setState(753);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(750);
					binaryExpression();
					}
					} 
				}
				setState(755);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,35,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExpressionList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_expressionList);
		try {
			setState(761);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(756);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(757);
				expression();
				setState(758);
				match(COMMA);
				setState(759);
				expressionList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixExpressionContext extends ParserRuleContext {
		public InOutExpressionContext inOutExpression() {
			return getRuleContext(InOutExpressionContext.class,0);
		}
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public PrefixOperatorContext prefixOperator() {
			return getRuleContext(PrefixOperatorContext.class,0);
		}
		public PrefixExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrefixExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrefixExpressionContext prefixExpression() throws RecognitionException {
		PrefixExpressionContext _localctx = new PrefixExpressionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_prefixExpression);
		try {
			setState(768);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(763);
				inOutExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(765);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(764);
					prefixOperator();
					}
					break;
				}
				setState(767);
				postfixExpression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InOutExpressionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public InOutExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inOutExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInOutExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InOutExpressionContext inOutExpression() throws RecognitionException {
		InOutExpressionContext _localctx = new InOutExpressionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_inOutExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(770);
			if (!(isPreOp(1))) throw new FailedPredicateException(this, "isPreOp(1)");
			setState(771);
			match(AMPERSAND);
			setState(772);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryOperatorContext extends ParserRuleContext {
		public TryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTryOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TryOperatorContext tryOperator() throws RecognitionException {
		TryOperatorContext _localctx = new TryOperatorContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_tryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(774);
			match(TRY);
			setState(777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
			case 1:
				{
				setState(775);
				if (!(isPostOp(1))) throw new FailedPredicateException(this, "isPostOp(1)");
				setState(776);
				_la = _input.LA(1);
				if ( !(_la==EXCLAMATION || _la==QUESTION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryExpressionContext extends ParserRuleContext {
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public PrefixExpressionContext prefixExpression() {
			return getRuleContext(PrefixExpressionContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ConditionalOperatorContext conditionalOperator() {
			return getRuleContext(ConditionalOperatorContext.class,0);
		}
		public TryOperatorContext tryOperator() {
			return getRuleContext(TryOperatorContext.class,0);
		}
		public TypeCastingOperatorContext typeCastingOperator() {
			return getRuleContext(TypeCastingOperatorContext.class,0);
		}
		public BinaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBinaryExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BinaryExpressionContext binaryExpression() throws RecognitionException {
		BinaryExpressionContext _localctx = new BinaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_binaryExpression);
		try {
			setState(792);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(779);
				binaryOperator();
				setState(780);
				prefixExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(784);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
				case 1:
					{
					setState(782);
					assignmentOperator();
					}
					break;
				case 2:
					{
					setState(783);
					conditionalOperator();
					}
					break;
				}
				setState(787);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
				case 1:
					{
					setState(786);
					tryOperator();
					}
					break;
				}
				setState(789);
				prefixExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(791);
				typeCastingOperator();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAssignmentOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_assignmentOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(794);
			if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
			setState(795);
			match(EQUAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalOperatorContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConditionalOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitConditionalOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionalOperatorContext conditionalOperator() throws RecognitionException {
		ConditionalOperatorContext _localctx = new ConditionalOperatorContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_conditionalOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(797);
			if (!(testLN(-1, true, WHITESPACE, LINE_BREAK) && testLN(1, true, WHITESPACE, LINE_BREAK))) throw new FailedPredicateException(this, "testLN(-1, true, WHITESPACE, LINE_BREAK) && testLN(1, true, WHITESPACE, LINE_BREAK)");
			setState(798);
			match(QUESTION);
			setState(799);
			expression();
			setState(800);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeCastingOperatorContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypeCastingOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeCastingOperator; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeCastingOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeCastingOperatorContext typeCastingOperator() throws RecognitionException {
		TypeCastingOperatorContext _localctx = new TypeCastingOperatorContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_typeCastingOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(808);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IS:
				{
				setState(802);
				match(IS);
				}
				break;
			case AS:
				{
				setState(803);
				match(AS);
				setState(806);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(804);
					if (!(isPostOp(1))) throw new FailedPredicateException(this, "isPostOp(1)");
					setState(805);
					_la = _input.LA(1);
					if ( !(_la==EXCLAMATION || _la==QUESTION) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(810);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryExpressionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public GenericArgumentClauseContext genericArgumentClause() {
			return getRuleContext(GenericArgumentClauseContext.class,0);
		}
		public LiteralExpressionContext literalExpression() {
			return getRuleContext(LiteralExpressionContext.class,0);
		}
		public SelfExpressionContext selfExpression() {
			return getRuleContext(SelfExpressionContext.class,0);
		}
		public SuperclassExpressionContext superclassExpression() {
			return getRuleContext(SuperclassExpressionContext.class,0);
		}
		public ClosureExpressionContext closureExpression() {
			return getRuleContext(ClosureExpressionContext.class,0);
		}
		public ParenthesizedExpressionContext parenthesizedExpression() {
			return getRuleContext(ParenthesizedExpressionContext.class,0);
		}
		public TupleExpressionContext tupleExpression() {
			return getRuleContext(TupleExpressionContext.class,0);
		}
		public ImplicitMemberExpressionContext implicitMemberExpression() {
			return getRuleContext(ImplicitMemberExpressionContext.class,0);
		}
		public WildcardExpressionContext wildcardExpression() {
			return getRuleContext(WildcardExpressionContext.class,0);
		}
		public KeyPathExpressionContext keyPathExpression() {
			return getRuleContext(KeyPathExpressionContext.class,0);
		}
		public SelectorExpressionContext selectorExpression() {
			return getRuleContext(SelectorExpressionContext.class,0);
		}
		public KeyPathStringExpressionContext keyPathStringExpression() {
			return getRuleContext(KeyPathStringExpressionContext.class,0);
		}
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrimaryExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_primaryExpression);
		try {
			setState(827);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(812);
				identifier();
				setState(814);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
				case 1:
					{
					setState(813);
					genericArgumentClause();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(816);
				literalExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(817);
				selfExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(818);
				superclassExpression();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(819);
				closureExpression();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(820);
				parenthesizedExpression();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(821);
				tupleExpression();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(822);
				implicitMemberExpression();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(823);
				wildcardExpression();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(824);
				keyPathExpression();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(825);
				selectorExpression();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(826);
				keyPathStringExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralExpressionContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public DictionaryLiteralContext dictionaryLiteral() {
			return getRuleContext(DictionaryLiteralContext.class,0);
		}
		public PlaygroundLiteralContext playgroundLiteral() {
			return getRuleContext(PlaygroundLiteralContext.class,0);
		}
		public LiteralExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLiteralExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralExpressionContext literalExpression() throws RecognitionException {
		LiteralExpressionContext _localctx = new LiteralExpressionContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_literalExpression);
		try {
			setState(837);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(829);
				literal();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(830);
				arrayLiteral();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(831);
				dictionaryLiteral();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(832);
				playgroundLiteral();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(833);
				match(FILE);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(834);
				match(LINE);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(835);
				match(COLUMN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(836);
				match(FUNCTION);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayLiteralContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitArrayLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_arrayLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(839);
			match(LEFT_BRACKET);
			setState(840);
			expression();
			setState(845);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(841);
					match(COMMA);
					setState(842);
					expression();
					}
					} 
				}
				setState(847);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			setState(849);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(848);
				match(COMMA);
				}
			}

			setState(851);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryLiteralContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public DictionaryLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDictionaryLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DictionaryLiteralContext dictionaryLiteral() throws RecognitionException {
		DictionaryLiteralContext _localctx = new DictionaryLiteralContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_dictionaryLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			match(LEFT_BRACKET);
			setState(854);
			expression();
			setState(855);
			match(COLON);
			setState(856);
			expression();
			setState(864);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(857);
					match(COMMA);
					setState(858);
					expression();
					setState(859);
					match(COLON);
					setState(860);
					expression();
					}
					} 
				}
				setState(866);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			}
			setState(868);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(867);
				match(COMMA);
				}
			}

			setState(870);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlaygroundLiteralContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(SwiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(SwiftParser.IDENTIFIER, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PlaygroundLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_playgroundLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPlaygroundLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PlaygroundLiteralContext playgroundLiteral() throws RecognitionException {
		PlaygroundLiteralContext _localctx = new PlaygroundLiteralContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_playgroundLiteral);
		int _la;
		try {
			setState(903);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLOR_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(872);
				match(COLOR_LITERAL);
				setState(873);
				match(LEFT_PARENTHESIS);
				setState(874);
				if (!(testLN(1, "red"))) throw new FailedPredicateException(this, "testLN(1, \"red\")");
				setState(875);
				match(IDENTIFIER);
				setState(876);
				match(COLON);
				setState(877);
				expression();
				setState(878);
				match(COMMA);
				setState(879);
				if (!(testLN(1, "green"))) throw new FailedPredicateException(this, "testLN(1, \"green\")");
				setState(880);
				match(IDENTIFIER);
				setState(881);
				match(COLON);
				setState(882);
				expression();
				setState(883);
				match(COMMA);
				setState(884);
				if (!(testLN(1, "blue"))) throw new FailedPredicateException(this, "testLN(1, \"blue\")");
				setState(885);
				match(IDENTIFIER);
				setState(886);
				match(COLON);
				setState(887);
				expression();
				setState(888);
				match(COMMA);
				setState(889);
				if (!(testLN(1, "alpha"))) throw new FailedPredicateException(this, "testLN(1, \"alpha\")");
				setState(890);
				match(IDENTIFIER);
				setState(891);
				match(COLON);
				setState(892);
				expression();
				setState(893);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case FILE_LITERAL:
			case IMAGE_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(895);
				_la = _input.LA(1);
				if ( !(_la==FILE_LITERAL || _la==IMAGE_LITERAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(896);
				match(LEFT_PARENTHESIS);
				setState(897);
				if (!(testLN(1, "resourceName"))) throw new FailedPredicateException(this, "testLN(1, \"resourceName\")");
				setState(898);
				match(IDENTIFIER);
				setState(899);
				match(COLON);
				setState(900);
				expression();
				setState(901);
				match(RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfExpressionContext extends ParserRuleContext {
		public SelfMethodExpressionContext selfMethodExpression() {
			return getRuleContext(SelfMethodExpressionContext.class,0);
		}
		public SelfSubscriptExpressionContext selfSubscriptExpression() {
			return getRuleContext(SelfSubscriptExpressionContext.class,0);
		}
		public SelfInitializerExpressionContext selfInitializerExpression() {
			return getRuleContext(SelfInitializerExpressionContext.class,0);
		}
		public SelfExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelfExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelfExpressionContext selfExpression() throws RecognitionException {
		SelfExpressionContext _localctx = new SelfExpressionContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_selfExpression);
		try {
			setState(909);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(905);
				match(SELF);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(906);
				selfMethodExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(907);
				selfSubscriptExpression();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(908);
				selfInitializerExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfMethodExpressionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SelfMethodExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfMethodExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelfMethodExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelfMethodExpressionContext selfMethodExpression() throws RecognitionException {
		SelfMethodExpressionContext _localctx = new SelfMethodExpressionContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_selfMethodExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(911);
			match(SELF);
			setState(912);
			match(PERIOD);
			setState(913);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfSubscriptExpressionContext extends ParserRuleContext {
		public FunctionCallArgumentListContext functionCallArgumentList() {
			return getRuleContext(FunctionCallArgumentListContext.class,0);
		}
		public SelfSubscriptExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfSubscriptExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelfSubscriptExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelfSubscriptExpressionContext selfSubscriptExpression() throws RecognitionException {
		SelfSubscriptExpressionContext _localctx = new SelfSubscriptExpressionContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_selfSubscriptExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(915);
			match(SELF);
			setState(916);
			match(LEFT_BRACKET);
			setState(917);
			functionCallArgumentList();
			setState(918);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelfInitializerExpressionContext extends ParserRuleContext {
		public SelfInitializerExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selfInitializerExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelfInitializerExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelfInitializerExpressionContext selfInitializerExpression() throws RecognitionException {
		SelfInitializerExpressionContext _localctx = new SelfInitializerExpressionContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_selfInitializerExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(920);
			match(SELF);
			setState(921);
			match(PERIOD);
			setState(922);
			match(INIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperclassExpressionContext extends ParserRuleContext {
		public SuperclassMethodExpressionContext superclassMethodExpression() {
			return getRuleContext(SuperclassMethodExpressionContext.class,0);
		}
		public SuperclassSubscriptExpressionContext superclassSubscriptExpression() {
			return getRuleContext(SuperclassSubscriptExpressionContext.class,0);
		}
		public SuperclassInitializerExpressionContext superclassInitializerExpression() {
			return getRuleContext(SuperclassInitializerExpressionContext.class,0);
		}
		public SuperclassExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superclassExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSuperclassExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SuperclassExpressionContext superclassExpression() throws RecognitionException {
		SuperclassExpressionContext _localctx = new SuperclassExpressionContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_superclassExpression);
		try {
			setState(927);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(924);
				superclassMethodExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(925);
				superclassSubscriptExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(926);
				superclassInitializerExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperclassMethodExpressionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SuperclassMethodExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superclassMethodExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSuperclassMethodExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SuperclassMethodExpressionContext superclassMethodExpression() throws RecognitionException {
		SuperclassMethodExpressionContext _localctx = new SuperclassMethodExpressionContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_superclassMethodExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(929);
			match(SUPER);
			setState(930);
			match(PERIOD);
			setState(931);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperclassSubscriptExpressionContext extends ParserRuleContext {
		public FunctionCallArgumentListContext functionCallArgumentList() {
			return getRuleContext(FunctionCallArgumentListContext.class,0);
		}
		public SuperclassSubscriptExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superclassSubscriptExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSuperclassSubscriptExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SuperclassSubscriptExpressionContext superclassSubscriptExpression() throws RecognitionException {
		SuperclassSubscriptExpressionContext _localctx = new SuperclassSubscriptExpressionContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_superclassSubscriptExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(933);
			match(SUPER);
			setState(934);
			match(LEFT_BRACKET);
			setState(935);
			functionCallArgumentList();
			setState(936);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SuperclassInitializerExpressionContext extends ParserRuleContext {
		public SuperclassInitializerExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_superclassInitializerExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSuperclassInitializerExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SuperclassInitializerExpressionContext superclassInitializerExpression() throws RecognitionException {
		SuperclassInitializerExpressionContext _localctx = new SuperclassInitializerExpressionContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_superclassInitializerExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(938);
			match(SUPER);
			setState(939);
			match(PERIOD);
			setState(940);
			match(INIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureExpressionContext extends ParserRuleContext {
		public ClosureSignatureContext closureSignature() {
			return getRuleContext(ClosureSignatureContext.class,0);
		}
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public ClosureExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureExpressionContext closureExpression() throws RecognitionException {
		ClosureExpressionContext _localctx = new ClosureExpressionContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_closureExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(942);
			match(LEFT_BRACE);
			setState(944);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				{
				setState(943);
				closureSignature();
				}
				break;
			}
			setState(947);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(946);
				statements();
				}
				break;
			}
			setState(949);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureSignatureContext extends ParserRuleContext {
		public ClosureParameterClauseContext closureParameterClause() {
			return getRuleContext(ClosureParameterClauseContext.class,0);
		}
		public CaptureListContext captureList() {
			return getRuleContext(CaptureListContext.class,0);
		}
		public FunctionResultContext functionResult() {
			return getRuleContext(FunctionResultContext.class,0);
		}
		public ClosureSignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureSignature; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureSignature(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureSignatureContext closureSignature() throws RecognitionException {
		ClosureSignatureContext _localctx = new ClosureSignatureContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_closureSignature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
			case 1:
				{
				setState(952);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LEFT_BRACKET) {
					{
					setState(951);
					captureList();
					}
				}

				setState(954);
				closureParameterClause();
				setState(956);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==THROWS) {
					{
					setState(955);
					match(THROWS);
					}
				}

				setState(959);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ARROW) {
					{
					setState(958);
					functionResult();
					}
				}

				}
				break;
			case 2:
				{
				setState(961);
				captureList();
				}
				break;
			}
			setState(964);
			match(IN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureParameterClauseContext extends ParserRuleContext {
		public ClosureParameterListContext closureParameterList() {
			return getRuleContext(ClosureParameterListContext.class,0);
		}
		public IdentifierListContext identifierList() {
			return getRuleContext(IdentifierListContext.class,0);
		}
		public ClosureParameterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParameterClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureParameterClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureParameterClauseContext closureParameterClause() throws RecognitionException {
		ClosureParameterClauseContext _localctx = new ClosureParameterClauseContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_closureParameterClause);
		int _la;
		try {
			setState(972);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEFT_PARENTHESIS:
				enterOuterAlt(_localctx, 1);
				{
				setState(966);
				match(LEFT_PARENTHESIS);
				setState(968);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 55)) & ~0x3f) == 0 && ((1L << (_la - 55)) & ((1L << (UNDERSCORE - 55)) | (1L << (GRAVE - 55)) | (1L << (IDENTIFIER - 55)) | (1L << (IMPLICIT_PARAMETER_NAME - 55)))) != 0)) {
					{
					setState(967);
					closureParameterList();
					}
				}

				setState(970);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case UNDERSCORE:
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(971);
				identifierList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureParameterListContext extends ParserRuleContext {
		public List<ClosureParameterContext> closureParameter() {
			return getRuleContexts(ClosureParameterContext.class);
		}
		public ClosureParameterContext closureParameter(int i) {
			return getRuleContext(ClosureParameterContext.class,i);
		}
		public ClosureParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParameterList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureParameterList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureParameterListContext closureParameterList() throws RecognitionException {
		ClosureParameterListContext _localctx = new ClosureParameterListContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_closureParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(974);
			closureParameter();
			setState(979);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(975);
				match(COMMA);
				setState(976);
				closureParameter();
				}
				}
				setState(981);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureParameterContext extends ParserRuleContext {
		public ClosureParameterNameContext closureParameterName() {
			return getRuleContext(ClosureParameterNameContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public ClosureParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParameter; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureParameterContext closureParameter() throws RecognitionException {
		ClosureParameterContext _localctx = new ClosureParameterContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_closureParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(982);
			closureParameterName();
			setState(988);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(983);
				typeAnnotation();
				setState(986);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,64,_ctx) ) {
				case 1:
					{
					setState(984);
					if (!(testLN(1, "..."))) throw new FailedPredicateException(this, "testLN(1, \"...\")");
					setState(985);
					operator();
					}
					break;
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClosureParameterNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClosureParameterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_closureParameterName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClosureParameterName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClosureParameterNameContext closureParameterName() throws RecognitionException {
		ClosureParameterNameContext _localctx = new ClosureParameterNameContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_closureParameterName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(991);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UNDERSCORE) {
				{
				setState(990);
				match(UNDERSCORE);
				}
			}

			setState(993);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaptureListContext extends ParserRuleContext {
		public List<CaptureListItemContext> captureListItem() {
			return getRuleContexts(CaptureListItemContext.class);
		}
		public CaptureListItemContext captureListItem(int i) {
			return getRuleContext(CaptureListItemContext.class,i);
		}
		public CaptureListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_captureList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaptureList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaptureListContext captureList() throws RecognitionException {
		CaptureListContext _localctx = new CaptureListContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_captureList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(995);
			match(LEFT_BRACKET);
			setState(996);
			captureListItem();
			setState(1001);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(997);
				match(COMMA);
				setState(998);
				captureListItem();
				}
				}
				setState(1003);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1004);
			match(RIGHT_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaptureListItemContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CaptureSpecifierContext captureSpecifier() {
			return getRuleContext(CaptureSpecifierContext.class,0);
		}
		public CaptureListItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_captureListItem; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaptureListItem(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaptureListItemContext captureListItem() throws RecognitionException {
		CaptureListItemContext _localctx = new CaptureListItemContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_captureListItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1007);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
			case 1:
				{
				setState(1006);
				captureSpecifier();
				}
				break;
			}
			setState(1009);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaptureSpecifierContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(SwiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(SwiftParser.IDENTIFIER, i);
		}
		public CaptureSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_captureSpecifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaptureSpecifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaptureSpecifierContext captureSpecifier() throws RecognitionException {
		CaptureSpecifierContext _localctx = new CaptureSpecifierContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_captureSpecifier);
		try {
			setState(1021);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1011);
				if (!(testLN(1, "weak"))) throw new FailedPredicateException(this, "testLN(1, \"weak\")");
				setState(1012);
				match(IDENTIFIER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1013);
				if (!(testLN(1, "unowned"))) throw new FailedPredicateException(this, "testLN(1, \"unowned\")");
				setState(1014);
				match(IDENTIFIER);
				setState(1019);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
				case 1:
					{
					setState(1015);
					match(LEFT_PARENTHESIS);
					setState(1016);
					if (!(testLN(1, "safe", "unsafe"))) throw new FailedPredicateException(this, "testLN(1, \"safe\", \"unsafe\")");
					setState(1017);
					match(IDENTIFIER);
					setState(1018);
					match(RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImplicitMemberExpressionContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ImplicitMemberExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_implicitMemberExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImplicitMemberExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImplicitMemberExpressionContext implicitMemberExpression() throws RecognitionException {
		ImplicitMemberExpressionContext _localctx = new ImplicitMemberExpressionContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_implicitMemberExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1023);
			match(PERIOD);
			setState(1024);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParenthesizedExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesizedExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthesizedExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitParenthesizedExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParenthesizedExpressionContext parenthesizedExpression() throws RecognitionException {
		ParenthesizedExpressionContext _localctx = new ParenthesizedExpressionContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_parenthesizedExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1026);
			match(LEFT_PARENTHESIS);
			setState(1027);
			expression();
			setState(1028);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleExpressionContext extends ParserRuleContext {
		public List<TupleElementContext> tupleElement() {
			return getRuleContexts(TupleElementContext.class);
		}
		public TupleElementContext tupleElement(int i) {
			return getRuleContext(TupleElementContext.class,i);
		}
		public TupleExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTupleExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleExpressionContext tupleExpression() throws RecognitionException {
		TupleExpressionContext _localctx = new TupleExpressionContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_tupleExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1030);
			match(LEFT_PARENTHESIS);
			setState(1038);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				{
				setState(1031);
				tupleElement();
				setState(1034); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(1032);
					match(COMMA);
					setState(1033);
					tupleElement();
					}
					}
					setState(1036); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==COMMA );
				}
				break;
			}
			setState(1040);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleElementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TupleElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleElement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTupleElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleElementContext tupleElement() throws RecognitionException {
		TupleElementContext _localctx = new TupleElementContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_tupleElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1047);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
			case 1:
				{
				setState(1044);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(1042);
					match(UNDERSCORE);
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(1043);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1046);
				match(COLON);
				}
				break;
			}
			setState(1049);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WildcardExpressionContext extends ParserRuleContext {
		public WildcardExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wildcardExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWildcardExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WildcardExpressionContext wildcardExpression() throws RecognitionException {
		WildcardExpressionContext _localctx = new WildcardExpressionContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_wildcardExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1051);
			match(UNDERSCORE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyPathExpressionContext extends ParserRuleContext {
		public List<KeyPathComponentContext> keyPathComponent() {
			return getRuleContexts(KeyPathComponentContext.class);
		}
		public KeyPathComponentContext keyPathComponent(int i) {
			return getRuleContext(KeyPathComponentContext.class,i);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public KeyPathExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyPathExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitKeyPathExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final KeyPathExpressionContext keyPathExpression() throws RecognitionException {
		KeyPathExpressionContext _localctx = new KeyPathExpressionContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_keyPathExpression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1053);
			match(BACKSLASH);
			setState(1055);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 41)) & ~0x3f) == 0 && ((1L << (_la - 41)) & ((1L << (ANY - 41)) | (1L << (SELF_TYPE - 41)) | (1L << (AT - 41)) | (1L << (GRAVE - 41)) | (1L << (LEFT_BRACKET - 41)) | (1L << (LEFT_PARENTHESIS - 41)) | (1L << (IDENTIFIER - 41)) | (1L << (IMPLICIT_PARAMETER_NAME - 41)))) != 0)) {
				{
				setState(1054);
				type(0);
				}
			}

			setState(1057);
			match(PERIOD);
			setState(1058);
			keyPathComponent();
			setState(1061); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1059);
					match(PERIOD);
					setState(1060);
					keyPathComponent();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1063); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyPathComponentContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<KeyPathPostfixContext> keyPathPostfix() {
			return getRuleContexts(KeyPathPostfixContext.class);
		}
		public KeyPathPostfixContext keyPathPostfix(int i) {
			return getRuleContext(KeyPathPostfixContext.class,i);
		}
		public KeyPathComponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyPathComponent; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitKeyPathComponent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final KeyPathComponentContext keyPathComponent() throws RecognitionException {
		KeyPathComponentContext _localctx = new KeyPathComponentContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_keyPathComponent);
		try {
			int _alt;
			setState(1077);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1065);
				identifier();
				setState(1069);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1066);
						keyPathPostfix();
						}
						} 
					}
					setState(1071);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,77,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1073); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(1072);
						keyPathPostfix();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(1075); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,78,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyPathPostfixContext extends ParserRuleContext {
		public FunctionCallArgumentListContext functionCallArgumentList() {
			return getRuleContext(FunctionCallArgumentListContext.class,0);
		}
		public KeyPathPostfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyPathPostfix; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitKeyPathPostfix(this);
			else return visitor.visitChildren(this);
		}
	}

	public final KeyPathPostfixContext keyPathPostfix() throws RecognitionException {
		KeyPathPostfixContext _localctx = new KeyPathPostfixContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_keyPathPostfix);
		int _la;
		try {
			setState(1085);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,80,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1079);
				if (!(isPostOp(1))) throw new FailedPredicateException(this, "isPostOp(1)");
				setState(1080);
				_la = _input.LA(1);
				if ( !(_la==EXCLAMATION || _la==QUESTION) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1081);
				match(LEFT_BRACKET);
				setState(1082);
				functionCallArgumentList();
				setState(1083);
				match(RIGHT_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectorExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public SelectorExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectorExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSelectorExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelectorExpressionContext selectorExpression() throws RecognitionException {
		SelectorExpressionContext _localctx = new SelectorExpressionContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_selectorExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1087);
			match(SELECTOR);
			setState(1088);
			match(LEFT_PARENTHESIS);
			setState(1092);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				{
				setState(1089);
				if (!(testLN(1, "getter", "setter"))) throw new FailedPredicateException(this, "testLN(1, \"getter\", \"setter\")");
				setState(1090);
				match(IDENTIFIER);
				setState(1091);
				match(COLON);
				}
				break;
			}
			setState(1094);
			expression();
			setState(1095);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeyPathStringExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public KeyPathStringExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyPathStringExpression; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitKeyPathStringExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final KeyPathStringExpressionContext keyPathStringExpression() throws RecognitionException {
		KeyPathStringExpressionContext _localctx = new KeyPathStringExpressionContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_keyPathStringExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1097);
			match(KEY_PATH);
			setState(1098);
			match(LEFT_PARENTHESIS);
			setState(1099);
			expression();
			setState(1100);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixExpressionContext extends ParserRuleContext {
		public PostfixExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixExpression; }
	 
		public PostfixExpressionContext() { }
		public void copyFrom(PostfixExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class GeneralPostfixExpressionContext extends PostfixExpressionContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public GeneralPostfixExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGeneralPostfixExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class InitializerExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public ArgumentNamesContext argumentNames() {
			return getRuleContext(ArgumentNamesContext.class,0);
		}
		public InitializerExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInitializerExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SubscriptExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public FunctionCallArgumentListContext functionCallArgumentList() {
			return getRuleContext(FunctionCallArgumentListContext.class,0);
		}
		public SubscriptExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSubscriptExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ForcedValueExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public ForcedValueExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitForcedValueExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class FunctionCallExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public FunctionCallArgumentClauseContext functionCallArgumentClause() {
			return getRuleContext(FunctionCallArgumentClauseContext.class,0);
		}
		public TrailingClosureContext trailingClosure() {
			return getRuleContext(TrailingClosureContext.class,0);
		}
		public FunctionCallExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionCallExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class PostfixSelfExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public PostfixSelfExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPostfixSelfExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class PostfixOperatorExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public PostfixOperatorContext postfixOperator() {
			return getRuleContext(PostfixOperatorContext.class,0);
		}
		public PostfixOperatorExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPostfixOperatorExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ExplicitMemberExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public TerminalNode DECIMAL_DIGITS() { return getToken(SwiftParser.DECIMAL_DIGITS, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentNamesContext argumentNames() {
			return getRuleContext(ArgumentNamesContext.class,0);
		}
		public GenericArgumentClauseContext genericArgumentClause() {
			return getRuleContext(GenericArgumentClauseContext.class,0);
		}
		public ExplicitMemberExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExplicitMemberExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class OptionalChainingExpressionContext extends PostfixExpressionContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public OptionalChainingExpressionContext(PostfixExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOptionalChainingExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PostfixExpressionContext postfixExpression() throws RecognitionException {
		return postfixExpression(0);
	}

	private PostfixExpressionContext postfixExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PostfixExpressionContext _localctx = new PostfixExpressionContext(_ctx, _parentState);
		PostfixExpressionContext _prevctx = _localctx;
		int _startState = 142;
		enterRecursionRule(_localctx, 142, RULE_postfixExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new GeneralPostfixExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(1103);
			primaryExpression();
			}
			_ctx.stop = _input.LT(-1);
			setState(1156);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(1154);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
					case 1:
						{
						_localctx = new PostfixOperatorExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1105);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(1106);
						postfixOperator();
						}
						break;
					case 2:
						{
						_localctx = new FunctionCallExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1107);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(1108);
						if (!(!isStatementStarting())) throw new FailedPredicateException(this, "!isStatementStarting()");
						setState(1114);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
						case 1:
							{
							setState(1109);
							functionCallArgumentClause();
							}
							break;
						case 2:
							{
							setState(1111);
							_errHandler.sync(this);
							_la = _input.LA(1);
							if (_la==LEFT_PARENTHESIS) {
								{
								setState(1110);
								functionCallArgumentClause();
								}
							}

							setState(1113);
							trailingClosure();
							}
							break;
						}
						}
						break;
					case 3:
						{
						_localctx = new InitializerExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1116);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(1117);
						match(PERIOD);
						setState(1118);
						match(INIT);
						setState(1123);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
						case 1:
							{
							setState(1119);
							match(LEFT_PARENTHESIS);
							setState(1120);
							argumentNames();
							setState(1121);
							match(RIGHT_PARENTHESIS);
							}
							break;
						}
						}
						break;
					case 4:
						{
						_localctx = new ExplicitMemberExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1125);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(1126);
						match(PERIOD);
						setState(1138);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case DECIMAL_DIGITS:
							{
							setState(1127);
							match(DECIMAL_DIGITS);
							}
							break;
						case GRAVE:
						case IDENTIFIER:
						case IMPLICIT_PARAMETER_NAME:
							{
							setState(1128);
							identifier();
							setState(1136);
							_errHandler.sync(this);
							switch ( getInterpreter().adaptivePredict(_input,86,_ctx) ) {
							case 1:
								{
								setState(1130);
								_errHandler.sync(this);
								switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
								case 1:
									{
									setState(1129);
									genericArgumentClause();
									}
									break;
								}
								}
								break;
							case 2:
								{
								setState(1132);
								match(LEFT_PARENTHESIS);
								setState(1133);
								argumentNames();
								setState(1134);
								match(RIGHT_PARENTHESIS);
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
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1140);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(1141);
						match(PERIOD);
						setState(1142);
						match(SELF);
						}
						break;
					case 6:
						{
						_localctx = new SubscriptExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1143);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(1144);
						match(LEFT_BRACKET);
						setState(1145);
						functionCallArgumentList();
						setState(1146);
						match(RIGHT_BRACKET);
						}
						break;
					case 7:
						{
						_localctx = new ForcedValueExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1148);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(1149);
						if (!(!testLN(-1, true, true, opLWS))) throw new FailedPredicateException(this, "!testLN(-1, true, true, opLWS)");
						setState(1150);
						match(EXCLAMATION);
						}
						break;
					case 8:
						{
						_localctx = new OptionalChainingExpressionContext(new PostfixExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_postfixExpression);
						setState(1151);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(1152);
						if (!(!testLN(-1, true, true, opLWS))) throw new FailedPredicateException(this, "!testLN(-1, true, true, opLWS)");
						setState(1153);
						match(QUESTION);
						}
						break;
					}
					} 
				}
				setState(1158);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,89,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FunctionCallArgumentClauseContext extends ParserRuleContext {
		public FunctionCallArgumentListContext functionCallArgumentList() {
			return getRuleContext(FunctionCallArgumentListContext.class,0);
		}
		public FunctionCallArgumentClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallArgumentClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionCallArgumentClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallArgumentClauseContext functionCallArgumentClause() throws RecognitionException {
		FunctionCallArgumentClauseContext _localctx = new FunctionCallArgumentClauseContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_functionCallArgumentClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1159);
			match(LEFT_PARENTHESIS);
			setState(1161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
			case 1:
				{
				setState(1160);
				functionCallArgumentList();
				}
				break;
			}
			setState(1163);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallArgumentListContext extends ParserRuleContext {
		public List<FunctionCallArgumentContext> functionCallArgument() {
			return getRuleContexts(FunctionCallArgumentContext.class);
		}
		public FunctionCallArgumentContext functionCallArgument(int i) {
			return getRuleContext(FunctionCallArgumentContext.class,i);
		}
		public FunctionCallArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallArgumentList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionCallArgumentList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallArgumentListContext functionCallArgumentList() throws RecognitionException {
		FunctionCallArgumentListContext _localctx = new FunctionCallArgumentListContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_functionCallArgumentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1165);
			functionCallArgument();
			setState(1170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1166);
				match(COMMA);
				setState(1167);
				functionCallArgument();
				}
				}
				setState(1172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallArgumentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FunctionCallArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCallArgument; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionCallArgument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallArgumentContext functionCallArgument() throws RecognitionException {
		FunctionCallArgumentContext _localctx = new FunctionCallArgumentContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_functionCallArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1178);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				{
				setState(1175);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(1173);
					match(UNDERSCORE);
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(1174);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1177);
				match(COLON);
				}
				break;
			}
			setState(1182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
			case 1:
				{
				setState(1180);
				expression();
				}
				break;
			case 2:
				{
				setState(1181);
				operator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TrailingClosureContext extends ParserRuleContext {
		public ClosureExpressionContext closureExpression() {
			return getRuleContext(ClosureExpressionContext.class,0);
		}
		public TrailingClosureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trailingClosure; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTrailingClosure(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TrailingClosureContext trailingClosure() throws RecognitionException {
		TrailingClosureContext _localctx = new TrailingClosureContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_trailingClosure);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1184);
			closureExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentNamesContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public ArgumentNamesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentNames; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitArgumentNames(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgumentNamesContext argumentNames() throws RecognitionException {
		ArgumentNamesContext _localctx = new ArgumentNamesContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_argumentNames);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1191); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1188);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(1186);
					match(UNDERSCORE);
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(1187);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1190);
				match(COLON);
				}
				}
				setState(1193); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( ((((_la - 55)) & ~0x3f) == 0 && ((1L << (_la - 55)) & ((1L << (UNDERSCORE - 55)) | (1L << (GRAVE - 55)) | (1L << (IDENTIFIER - 55)) | (1L << (IMPLICIT_PARAMETER_NAME - 55)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public LoopStatementContext loopStatement() {
			return getRuleContext(LoopStatementContext.class,0);
		}
		public BranchStatementContext branchStatement() {
			return getRuleContext(BranchStatementContext.class,0);
		}
		public LabeledStatementContext labeledStatement() {
			return getRuleContext(LabeledStatementContext.class,0);
		}
		public ControlTransferStatementContext controlTransferStatement() {
			return getRuleContext(ControlTransferStatementContext.class,0);
		}
		public DeferStatementContext deferStatement() {
			return getRuleContext(DeferStatementContext.class,0);
		}
		public DoStatementContext doStatement() {
			return getRuleContext(DoStatementContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_statement);
		try {
			setState(1210);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1195);
				if (!(isStatementStarting())) throw new FailedPredicateException(this, "isStatementStarting()");
				setState(1204);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
				case 1:
					{
					setState(1196);
					expression();
					}
					break;
				case 2:
					{
					setState(1197);
					declaration();
					}
					break;
				case 3:
					{
					setState(1198);
					loopStatement();
					}
					break;
				case 4:
					{
					setState(1199);
					branchStatement();
					}
					break;
				case 5:
					{
					setState(1200);
					labeledStatement();
					}
					break;
				case 6:
					{
					setState(1201);
					controlTransferStatement();
					}
					break;
				case 7:
					{
					setState(1202);
					deferStatement();
					}
					break;
				case 8:
					{
					setState(1203);
					doStatement();
					}
					break;
				}
				setState(1207);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
				case 1:
					{
					setState(1206);
					match(SEMICOLON);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1209);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementsContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statements; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStatements(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementsContext statements() throws RecognitionException {
		StatementsContext _localctx = new StatementsContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_statements);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1213); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1212);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1215); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,100,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopStatementContext extends ParserRuleContext {
		public ForInStatementContext forInStatement() {
			return getRuleContext(ForInStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public RepeatWhileStatementContext repeatWhileStatement() {
			return getRuleContext(RepeatWhileStatementContext.class,0);
		}
		public LoopStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLoopStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LoopStatementContext loopStatement() throws RecognitionException {
		LoopStatementContext _localctx = new LoopStatementContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_loopStatement);
		try {
			setState(1220);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FOR:
				enterOuterAlt(_localctx, 1);
				{
				setState(1217);
				forInStatement();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1218);
				whileStatement();
				}
				break;
			case REPEAT:
				enterOuterAlt(_localctx, 3);
				{
				setState(1219);
				repeatWhileStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForInStatementContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public ForInStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitForInStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForInStatementContext forInStatement() throws RecognitionException {
		ForInStatementContext _localctx = new ForInStatementContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_forInStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1222);
			match(FOR);
			setState(1224);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
			case 1:
				{
				setState(1223);
				match(CASE);
				}
				break;
			}
			setState(1226);
			pattern();
			setState(1228);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				{
				setState(1227);
				match(IN);
				}
				break;
			}
			setState(1230);
			expression();
			setState(1232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1231);
				whereClause();
				}
			}

			setState(1234);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public ConditionListContext conditionList() {
			return getRuleContext(ConditionListContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWhileStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1236);
			match(WHILE);
			setState(1237);
			conditionList();
			setState(1238);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionListContext extends ParserRuleContext {
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public ConditionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitConditionList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionListContext conditionList() throws RecognitionException {
		ConditionListContext _localctx = new ConditionListContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_conditionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1240);
			condition();
			setState(1245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1241);
				match(COMMA);
				setState(1242);
				condition();
				}
				}
				setState(1247);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AvailabilityConditionContext availabilityCondition() {
			return getRuleContext(AvailabilityConditionContext.class,0);
		}
		public CaseConditionContext caseCondition() {
			return getRuleContext(CaseConditionContext.class,0);
		}
		public OptionalBindingConditionContext optionalBindingCondition() {
			return getRuleContext(OptionalBindingConditionContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_condition);
		try {
			setState(1252);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1248);
				expression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1249);
				availabilityCondition();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1250);
				caseCondition();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1251);
				optionalBindingCondition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseConditionContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public CaseConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseCondition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaseCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaseConditionContext caseCondition() throws RecognitionException {
		CaseConditionContext _localctx = new CaseConditionContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_caseCondition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1254);
			match(CASE);
			setState(1255);
			pattern();
			setState(1256);
			initializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalBindingConditionContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public OptionalBindingConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalBindingCondition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOptionalBindingCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OptionalBindingConditionContext optionalBindingCondition() throws RecognitionException {
		OptionalBindingConditionContext _localctx = new OptionalBindingConditionContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_optionalBindingCondition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1258);
			_la = _input.LA(1);
			if ( !(_la==LET || _la==VAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1259);
			pattern();
			setState(1260);
			initializer();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RepeatWhileStatementContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public RepeatWhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_repeatWhileStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRepeatWhileStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RepeatWhileStatementContext repeatWhileStatement() throws RecognitionException {
		RepeatWhileStatementContext _localctx = new RepeatWhileStatementContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_repeatWhileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1262);
			match(REPEAT);
			setState(1263);
			codeBlock();
			setState(1264);
			match(WHILE);
			setState(1265);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BranchStatementContext extends ParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public GuardStatementContext guardStatement() {
			return getRuleContext(GuardStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public BranchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_branchStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBranchStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BranchStatementContext branchStatement() throws RecognitionException {
		BranchStatementContext _localctx = new BranchStatementContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_branchStatement);
		try {
			setState(1270);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(1267);
				ifStatement();
				}
				break;
			case GUARD:
				enterOuterAlt(_localctx, 2);
				{
				setState(1268);
				guardStatement();
				}
				break;
			case SWITCH:
				enterOuterAlt(_localctx, 3);
				{
				setState(1269);
				switchStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public ConditionListContext conditionList() {
			return getRuleContext(ConditionListContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIfStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1272);
			match(IF);
			setState(1273);
			conditionList();
			setState(1274);
			codeBlock();
			setState(1276);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				{
				setState(1275);
				elseClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseClauseContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ElseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitElseClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseClauseContext elseClause() throws RecognitionException {
		ElseClauseContext _localctx = new ElseClauseContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_elseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1278);
			match(ELSE);
			setState(1281);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEFT_BRACE:
				{
				setState(1279);
				codeBlock();
				}
				break;
			case IF:
				{
				setState(1280);
				ifStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GuardStatementContext extends ParserRuleContext {
		public ConditionListContext conditionList() {
			return getRuleContext(ConditionListContext.class,0);
		}
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public GuardStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_guardStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGuardStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GuardStatementContext guardStatement() throws RecognitionException {
		GuardStatementContext _localctx = new GuardStatementContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_guardStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1283);
			match(GUARD);
			setState(1284);
			conditionList();
			setState(1285);
			match(ELSE);
			setState(1286);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<SwitchCaseContext> switchCase() {
			return getRuleContexts(SwitchCaseContext.class);
		}
		public SwitchCaseContext switchCase(int i) {
			return getRuleContext(SwitchCaseContext.class,i);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSwitchStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_switchStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1288);
			match(SWITCH);
			setState(1289);
			expression();
			setState(1290);
			match(LEFT_BRACE);
			setState(1294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CASE || _la==DEFAULT) {
				{
				{
				setState(1291);
				switchCase();
				}
				}
				setState(1296);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1297);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchCaseContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public CaseLabelContext caseLabel() {
			return getRuleContext(CaseLabelContext.class,0);
		}
		public DefaultLabelContext defaultLabel() {
			return getRuleContext(DefaultLabelContext.class,0);
		}
		public SwitchCaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchCase; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSwitchCase(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SwitchCaseContext switchCase() throws RecognitionException {
		SwitchCaseContext _localctx = new SwitchCaseContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_switchCase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1301);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CASE:
				{
				setState(1299);
				caseLabel();
				}
				break;
			case DEFAULT:
				{
				setState(1300);
				defaultLabel();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(1303);
			statements();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseLabelContext extends ParserRuleContext {
		public CaseItemListContext caseItemList() {
			return getRuleContext(CaseItemListContext.class,0);
		}
		public CaseLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseLabel; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaseLabel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaseLabelContext caseLabel() throws RecognitionException {
		CaseLabelContext _localctx = new CaseLabelContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_caseLabel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1305);
			match(CASE);
			setState(1306);
			caseItemList();
			setState(1307);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseItemListContext extends ParserRuleContext {
		public List<PatternContext> pattern() {
			return getRuleContexts(PatternContext.class);
		}
		public PatternContext pattern(int i) {
			return getRuleContext(PatternContext.class,i);
		}
		public List<WhereClauseContext> whereClause() {
			return getRuleContexts(WhereClauseContext.class);
		}
		public WhereClauseContext whereClause(int i) {
			return getRuleContext(WhereClauseContext.class,i);
		}
		public CaseItemListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseItemList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCaseItemList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CaseItemListContext caseItemList() throws RecognitionException {
		CaseItemListContext _localctx = new CaseItemListContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_caseItemList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1309);
			pattern();
			setState(1311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1310);
				whereClause();
				}
			}

			setState(1320);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1313);
				match(COMMA);
				setState(1314);
				pattern();
				setState(1316);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WHERE) {
					{
					setState(1315);
					whereClause();
					}
				}

				}
				}
				setState(1322);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultLabelContext extends ParserRuleContext {
		public DefaultLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultLabel; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDefaultLabel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DefaultLabelContext defaultLabel() throws RecognitionException {
		DefaultLabelContext _localctx = new DefaultLabelContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_defaultLabel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1323);
			match(DEFAULT);
			setState(1324);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhereClauseContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public WhereClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWhereClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhereClauseContext whereClause() throws RecognitionException {
		WhereClauseContext _localctx = new WhereClauseContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_whereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1326);
			match(WHERE);
			setState(1327);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabeledStatementContext extends ParserRuleContext {
		public StatementLabelContext statementLabel() {
			return getRuleContext(StatementLabelContext.class,0);
		}
		public LoopStatementContext loopStatement() {
			return getRuleContext(LoopStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public DoStatementContext doStatement() {
			return getRuleContext(DoStatementContext.class,0);
		}
		public LabeledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labeledStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLabeledStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LabeledStatementContext labeledStatement() throws RecognitionException {
		LabeledStatementContext _localctx = new LabeledStatementContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_labeledStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1329);
			statementLabel();
			setState(1334);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FOR:
			case REPEAT:
			case WHILE:
				{
				setState(1330);
				loopStatement();
				}
				break;
			case IF:
				{
				setState(1331);
				ifStatement();
				}
				break;
			case SWITCH:
				{
				setState(1332);
				switchStatement();
				}
				break;
			case DO:
				{
				setState(1333);
				doStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementLabelContext extends ParserRuleContext {
		public LabelNameContext labelName() {
			return getRuleContext(LabelNameContext.class,0);
		}
		public StatementLabelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementLabel; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStatementLabel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementLabelContext statementLabel() throws RecognitionException {
		StatementLabelContext _localctx = new StatementLabelContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_statementLabel);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1336);
			labelName();
			setState(1337);
			match(COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabelNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LabelNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labelName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLabelName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LabelNameContext labelName() throws RecognitionException {
		LabelNameContext _localctx = new LabelNameContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_labelName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1339);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ControlTransferStatementContext extends ParserRuleContext {
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public FallthroughStatementContext fallthroughStatement() {
			return getRuleContext(FallthroughStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ThrowStatementContext throwStatement() {
			return getRuleContext(ThrowStatementContext.class,0);
		}
		public ControlTransferStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_controlTransferStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitControlTransferStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ControlTransferStatementContext controlTransferStatement() throws RecognitionException {
		ControlTransferStatementContext _localctx = new ControlTransferStatementContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_controlTransferStatement);
		try {
			setState(1346);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BREAK:
				enterOuterAlt(_localctx, 1);
				{
				setState(1341);
				breakStatement();
				}
				break;
			case CONTINUE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1342);
				continueStatement();
				}
				break;
			case FALLTHROUGH:
				enterOuterAlt(_localctx, 3);
				{
				setState(1343);
				fallthroughStatement();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 4);
				{
				setState(1344);
				returnStatement();
				}
				break;
			case THROW:
				enterOuterAlt(_localctx, 5);
				{
				setState(1345);
				throwStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public LabelNameContext labelName() {
			return getRuleContext(LabelNameContext.class,0);
		}
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBreakStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1348);
			match(BREAK);
			setState(1350);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				{
				setState(1349);
				labelName();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public LabelNameContext labelName() {
			return getRuleContext(LabelNameContext.class,0);
		}
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitContinueStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1352);
			match(CONTINUE);
			setState(1354);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				{
				setState(1353);
				labelName();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FallthroughStatementContext extends ParserRuleContext {
		public FallthroughStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fallthroughStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFallthroughStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FallthroughStatementContext fallthroughStatement() throws RecognitionException {
		FallthroughStatementContext _localctx = new FallthroughStatementContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_fallthroughStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1356);
			match(FALLTHROUGH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitReturnStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1358);
			match(RETURN);
			setState(1360);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,119,_ctx) ) {
			case 1:
				{
				setState(1359);
				expression();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThrowStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ThrowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitThrowStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ThrowStatementContext throwStatement() throws RecognitionException {
		ThrowStatementContext _localctx = new ThrowStatementContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_throwStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1362);
			match(THROW);
			setState(1363);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeferStatementContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public DeferStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deferStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDeferStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeferStatementContext deferStatement() throws RecognitionException {
		DeferStatementContext _localctx = new DeferStatementContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_deferStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1365);
			match(DEFER);
			setState(1366);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DoStatementContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public DoStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDoStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DoStatementContext doStatement() throws RecognitionException {
		DoStatementContext _localctx = new DoStatementContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_doStatement);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1368);
			match(DO);
			setState(1369);
			codeBlock();
			setState(1373);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1370);
					catchClause();
					}
					} 
				}
				setState(1375);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,120,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCatchClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_catchClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1376);
			match(CATCH);
			setState(1378);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
			case 1:
				{
				setState(1377);
				pattern();
				}
				break;
			}
			setState(1381);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1380);
				whereClause();
				}
			}

			setState(1383);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilerControlStatementContext extends ParserRuleContext {
		public ConditionalCompilationBlockContext conditionalCompilationBlock() {
			return getRuleContext(ConditionalCompilationBlockContext.class,0);
		}
		public LineControlStatementContext lineControlStatement() {
			return getRuleContext(LineControlStatementContext.class,0);
		}
		public CompilerControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilerControlStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCompilerControlStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CompilerControlStatementContext compilerControlStatement() throws RecognitionException {
		CompilerControlStatementContext _localctx = new CompilerControlStatementContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_compilerControlStatement);
		try {
			setState(1387);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF_DIRECTIVE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1385);
				conditionalCompilationBlock();
				}
				break;
			case SOURCE_LOCATION:
				enterOuterAlt(_localctx, 2);
				{
				setState(1386);
				lineControlStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalCompilationBlockContext extends ParserRuleContext {
		public IfDirectiveClauseContext ifDirectiveClause() {
			return getRuleContext(IfDirectiveClauseContext.class,0);
		}
		public List<ElseifDirectiveClauseContext> elseifDirectiveClause() {
			return getRuleContexts(ElseifDirectiveClauseContext.class);
		}
		public ElseifDirectiveClauseContext elseifDirectiveClause(int i) {
			return getRuleContext(ElseifDirectiveClauseContext.class,i);
		}
		public ElseDirectiveClauseContext elseDirectiveClause() {
			return getRuleContext(ElseDirectiveClauseContext.class,0);
		}
		public ConditionalCompilationBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalCompilationBlock; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitConditionalCompilationBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionalCompilationBlockContext conditionalCompilationBlock() throws RecognitionException {
		ConditionalCompilationBlockContext _localctx = new ConditionalCompilationBlockContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_conditionalCompilationBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1389);
			ifDirectiveClause();
			setState(1393);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF_DIRECTIVE) {
				{
				{
				setState(1390);
				elseifDirectiveClause();
				}
				}
				setState(1395);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1397);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE_DIRECTIVE) {
				{
				setState(1396);
				elseDirectiveClause();
				}
			}

			setState(1399);
			match(ENDIF_DIRECTIVE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfDirectiveClauseContext extends ParserRuleContext {
		public CompilationConditionContext compilationCondition() {
			return getRuleContext(CompilationConditionContext.class,0);
		}
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public IfDirectiveClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifDirectiveClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIfDirectiveClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfDirectiveClauseContext ifDirectiveClause() throws RecognitionException {
		IfDirectiveClauseContext _localctx = new IfDirectiveClauseContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_ifDirectiveClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1401);
			match(IF_DIRECTIVE);
			setState(1402);
			compilationCondition(0);
			setState(1404);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
			case 1:
				{
				setState(1403);
				statements();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseifDirectiveClauseContext extends ParserRuleContext {
		public CompilationConditionContext compilationCondition() {
			return getRuleContext(CompilationConditionContext.class,0);
		}
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public ElseifDirectiveClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseifDirectiveClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitElseifDirectiveClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseifDirectiveClauseContext elseifDirectiveClause() throws RecognitionException {
		ElseifDirectiveClauseContext _localctx = new ElseifDirectiveClauseContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_elseifDirectiveClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1406);
			match(ELSEIF_DIRECTIVE);
			setState(1407);
			compilationCondition(0);
			setState(1409);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
			case 1:
				{
				setState(1408);
				statements();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseDirectiveClauseContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public ElseDirectiveClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseDirectiveClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitElseDirectiveClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseDirectiveClauseContext elseDirectiveClause() throws RecognitionException {
		ElseDirectiveClauseContext _localctx = new ElseDirectiveClauseContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_elseDirectiveClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1411);
			match(ELSE_DIRECTIVE);
			setState(1413);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				{
				setState(1412);
				statements();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilationConditionContext extends ParserRuleContext {
		public PlatformConditionContext platformCondition() {
			return getRuleContext(PlatformConditionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public List<CompilationConditionContext> compilationCondition() {
			return getRuleContexts(CompilationConditionContext.class);
		}
		public CompilationConditionContext compilationCondition(int i) {
			return getRuleContext(CompilationConditionContext.class,i);
		}
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public CompilationConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationCondition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCompilationCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CompilationConditionContext compilationCondition() throws RecognitionException {
		return compilationCondition(0);
	}

	private CompilationConditionContext compilationCondition(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CompilationConditionContext _localctx = new CompilationConditionContext(_ctx, _parentState);
		CompilationConditionContext _prevctx = _localctx;
		int _startState = 228;
		enterRecursionRule(_localctx, 228, RULE_compilationCondition, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1426);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
			case 1:
				{
				setState(1416);
				platformCondition();
				}
				break;
			case 2:
				{
				setState(1417);
				identifier();
				}
				break;
			case 3:
				{
				setState(1418);
				booleanLiteral();
				}
				break;
			case 4:
				{
				setState(1419);
				match(LEFT_PARENTHESIS);
				setState(1420);
				compilationCondition(0);
				setState(1421);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case 5:
				{
				setState(1423);
				if (!(isPreOp(1))) throw new FailedPredicateException(this, "isPreOp(1)");
				setState(1424);
				match(EXCLAMATION);
				setState(1425);
				compilationCondition(2);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(1435);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CompilationConditionContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_compilationCondition);
					setState(1428);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(1429);
					if (!(testLN(1, "&&", "||"))) throw new FailedPredicateException(this, "testLN(1, \"&&\", \"||\")");
					setState(1430);
					binaryOperator();
					setState(1431);
					compilationCondition(2);
					}
					} 
				}
				setState(1437);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,130,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PlatformConditionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public OperatingSystemContext operatingSystem() {
			return getRuleContext(OperatingSystemContext.class,0);
		}
		public ArchitectureContext architecture() {
			return getRuleContext(ArchitectureContext.class,0);
		}
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public SwiftVersionContext swiftVersion() {
			return getRuleContext(SwiftVersionContext.class,0);
		}
		public PlatformConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_platformCondition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPlatformCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PlatformConditionContext platformCondition() throws RecognitionException {
		PlatformConditionContext _localctx = new PlatformConditionContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_platformCondition);
		try {
			setState(1458);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1438);
				if (!(testLN(1, "os"))) throw new FailedPredicateException(this, "testLN(1, \"os\")");
				setState(1439);
				match(IDENTIFIER);
				setState(1440);
				match(LEFT_PARENTHESIS);
				setState(1441);
				operatingSystem();
				setState(1442);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1444);
				if (!(testLN(1, "arch"))) throw new FailedPredicateException(this, "testLN(1, \"arch\")");
				setState(1445);
				match(IDENTIFIER);
				setState(1446);
				match(LEFT_PARENTHESIS);
				setState(1447);
				architecture();
				setState(1448);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1450);
				if (!(testLN(1, "swift"))) throw new FailedPredicateException(this, "testLN(1, \"swift\")");
				setState(1451);
				match(IDENTIFIER);
				setState(1452);
				match(LEFT_PARENTHESIS);
				setState(1453);
				if (!(testLN(1, ">="))) throw new FailedPredicateException(this, "testLN(1, \">=\")");
				setState(1454);
				binaryOperator();
				setState(1455);
				swiftVersion();
				setState(1456);
				match(RIGHT_PARENTHESIS);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatingSystemContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public OperatingSystemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatingSystem; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOperatingSystem(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatingSystemContext operatingSystem() throws RecognitionException {
		OperatingSystemContext _localctx = new OperatingSystemContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_operatingSystem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1460);
			if (!(testLN(1, "macOS", "iOS", "watchOS", "tvOS"))) throw new FailedPredicateException(this, "testLN(1, \"macOS\", \"iOS\", \"watchOS\", \"tvOS\")");
			setState(1461);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArchitectureContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public ArchitectureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_architecture; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitArchitecture(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArchitectureContext architecture() throws RecognitionException {
		ArchitectureContext _localctx = new ArchitectureContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_architecture);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1463);
			if (!(testLN(1, "i386", "x86_64", "arm", "arm64"))) throw new FailedPredicateException(this, "testLN(1, \"i386\", \"x86_64\", \"arm\", \"arm64\")");
			setState(1464);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwiftVersionContext extends ParserRuleContext {
		public List<TerminalNode> DECIMAL_DIGITS() { return getTokens(SwiftParser.DECIMAL_DIGITS); }
		public TerminalNode DECIMAL_DIGITS(int i) {
			return getToken(SwiftParser.DECIMAL_DIGITS, i);
		}
		public SwiftVersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_swiftVersion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSwiftVersion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SwiftVersionContext swiftVersion() throws RecognitionException {
		SwiftVersionContext _localctx = new SwiftVersionContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_swiftVersion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1466);
			match(DECIMAL_DIGITS);
			setState(1471);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PERIOD) {
				{
				{
				setState(1467);
				match(PERIOD);
				setState(1468);
				match(DECIMAL_DIGITS);
				}
				}
				setState(1473);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LineControlStatementContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(SwiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(SwiftParser.IDENTIFIER, i);
		}
		public FileNameContext fileName() {
			return getRuleContext(FileNameContext.class,0);
		}
		public LineNumberContext lineNumber() {
			return getRuleContext(LineNumberContext.class,0);
		}
		public LineControlStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lineControlStatement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLineControlStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LineControlStatementContext lineControlStatement() throws RecognitionException {
		LineControlStatementContext _localctx = new LineControlStatementContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_lineControlStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1474);
			match(SOURCE_LOCATION);
			setState(1475);
			match(LEFT_PARENTHESIS);
			setState(1486);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
			case 1:
				{
				setState(1476);
				if (!(testLN(1, "file"))) throw new FailedPredicateException(this, "testLN(1, \"file\")");
				setState(1477);
				match(IDENTIFIER);
				setState(1478);
				match(COLON);
				setState(1479);
				fileName();
				setState(1480);
				match(COMMA);
				setState(1481);
				if (!(testLN(1, "line"))) throw new FailedPredicateException(this, "testLN(1, \"line\")");
				setState(1482);
				match(IDENTIFIER);
				setState(1483);
				match(COLON);
				setState(1484);
				lineNumber();
				}
				break;
			}
			setState(1488);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LineNumberContext extends ParserRuleContext {
		public TerminalNode DECIMAL_DIGITS() { return getToken(SwiftParser.DECIMAL_DIGITS, 0); }
		public LineNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lineNumber; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLineNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LineNumberContext lineNumber() throws RecognitionException {
		LineNumberContext _localctx = new LineNumberContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_lineNumber);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1490);
			if (!(Integer.parseInt(_input.LT(1).getText()) > 0)) throw new FailedPredicateException(this, "Integer.parseInt(_input.LT(1).getText()) > 0");
			setState(1491);
			match(DECIMAL_DIGITS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FileNameContext extends ParserRuleContext {
		public TerminalNode STATIC_STRING_LITERAL() { return getToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
		public FileNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fileName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFileName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FileNameContext fileName() throws RecognitionException {
		FileNameContext _localctx = new FileNameContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_fileName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1493);
			match(STATIC_STRING_LITERAL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AvailabilityConditionContext extends ParserRuleContext {
		public List<AvailabilityArgumentContext> availabilityArgument() {
			return getRuleContexts(AvailabilityArgumentContext.class);
		}
		public AvailabilityArgumentContext availabilityArgument(int i) {
			return getRuleContext(AvailabilityArgumentContext.class,i);
		}
		public AvailabilityConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_availabilityCondition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAvailabilityCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AvailabilityConditionContext availabilityCondition() throws RecognitionException {
		AvailabilityConditionContext _localctx = new AvailabilityConditionContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_availabilityCondition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1495);
			match(AVAILABLE);
			setState(1496);
			match(LEFT_PARENTHESIS);
			setState(1497);
			availabilityArgument();
			setState(1502);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1498);
				match(COMMA);
				setState(1499);
				availabilityArgument();
				}
				}
				setState(1504);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1505);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AvailabilityArgumentContext extends ParserRuleContext {
		public PlatformNameContext platformName() {
			return getRuleContext(PlatformNameContext.class,0);
		}
		public PlatformVersionContext platformVersion() {
			return getRuleContext(PlatformVersionContext.class,0);
		}
		public AvailabilityArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_availabilityArgument; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAvailabilityArgument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AvailabilityArgumentContext availabilityArgument() throws RecognitionException {
		AvailabilityArgumentContext _localctx = new AvailabilityArgumentContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_availabilityArgument);
		try {
			setState(1511);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1507);
				match(ASTERISK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1508);
				platformName();
				setState(1509);
				platformVersion();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlatformNameContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public PlatformNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_platformName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPlatformName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PlatformNameContext platformName() throws RecognitionException {
		PlatformNameContext _localctx = new PlatformNameContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_platformName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1513);
			if (!(testLN(1, "iOS", "iOSApplicationExtension­", "macOS­", "macOSApplicationExtension­", "watchOS", "tvOS"))) throw new FailedPredicateException(this, "testLN(1, \"iOS\", \"iOSApplicationExtension\u0029\", \"macOS\u0033\", \"macOSApplicationExtension\u0051\", \"watchOS\", \"tvOS\")");
			setState(1514);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlatformVersionContext extends ParserRuleContext {
		public List<TerminalNode> DECIMAL_DIGITS() { return getTokens(SwiftParser.DECIMAL_DIGITS); }
		public TerminalNode DECIMAL_DIGITS(int i) {
			return getToken(SwiftParser.DECIMAL_DIGITS, i);
		}
		public PlatformVersionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_platformVersion; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPlatformVersion(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PlatformVersionContext platformVersion() throws RecognitionException {
		PlatformVersionContext _localctx = new PlatformVersionContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_platformVersion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1516);
			match(DECIMAL_DIGITS);
			setState(1523);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PERIOD) {
				{
				setState(1517);
				match(PERIOD);
				setState(1518);
				match(DECIMAL_DIGITS);
				setState(1521);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PERIOD) {
					{
					setState(1519);
					match(PERIOD);
					setState(1520);
					match(DECIMAL_DIGITS);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public ConstantDeclarationContext constantDeclaration() {
			return getRuleContext(ConstantDeclarationContext.class,0);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public TypealiasDeclarationContext typealiasDeclaration() {
			return getRuleContext(TypealiasDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public StructDeclarationContext structDeclaration() {
			return getRuleContext(StructDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public ProtocolDeclarationContext protocolDeclaration() {
			return getRuleContext(ProtocolDeclarationContext.class,0);
		}
		public InitializerDeclarationContext initializerDeclaration() {
			return getRuleContext(InitializerDeclarationContext.class,0);
		}
		public DeinitializerDeclarationContext deinitializerDeclaration() {
			return getRuleContext(DeinitializerDeclarationContext.class,0);
		}
		public ExtensionDeclarationContext extensionDeclaration() {
			return getRuleContext(ExtensionDeclarationContext.class,0);
		}
		public SubscriptDeclarationContext subscriptDeclaration() {
			return getRuleContext(SubscriptDeclarationContext.class,0);
		}
		public OperatorDeclarationContext operatorDeclaration() {
			return getRuleContext(OperatorDeclarationContext.class,0);
		}
		public PrecedenceGroupDeclarationContext precedenceGroupDeclaration() {
			return getRuleContext(PrecedenceGroupDeclarationContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_declaration);
		try {
			setState(1540);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,138,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1525);
				importDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1526);
				constantDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1527);
				variableDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1528);
				typealiasDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1529);
				functionDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1530);
				enumDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1531);
				structDeclaration();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1532);
				classDeclaration();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1533);
				protocolDeclaration();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1534);
				initializerDeclaration();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1535);
				deinitializerDeclaration();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1536);
				extensionDeclaration();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(1537);
				subscriptDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(1538);
				operatorDeclaration();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(1539);
				precedenceGroupDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TopLevelDeclarationContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TopLevelDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topLevelDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTopLevelDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TopLevelDeclarationContext topLevelDeclaration() throws RecognitionException {
		TopLevelDeclarationContext _localctx = new TopLevelDeclarationContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_topLevelDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1543);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,139,_ctx) ) {
			case 1:
				{
				setState(1542);
				statements();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CodeBlockContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public CodeBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codeBlock; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitCodeBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CodeBlockContext codeBlock() throws RecognitionException {
		CodeBlockContext _localctx = new CodeBlockContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_codeBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1545);
			match(LEFT_BRACE);
			setState(1547);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,140,_ctx) ) {
			case 1:
				{
				setState(1546);
				statements();
				}
				break;
			}
			setState(1549);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportDeclarationContext extends ParserRuleContext {
		public ImportPathContext importPath() {
			return getRuleContext(ImportPathContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public ImportKindContext importKind() {
			return getRuleContext(ImportKindContext.class,0);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImportDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1552);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(1551);
				attributes();
				}
			}

			setState(1554);
			match(IMPORT);
			setState(1556);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << ENUM) | (1L << FUNC) | (1L << LET) | (1L << PROTOCOL) | (1L << STRUCT) | (1L << TYPEALIAS) | (1L << VAR))) != 0)) {
				{
				setState(1555);
				importKind();
				}
			}

			setState(1558);
			importPath();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportKindContext extends ParserRuleContext {
		public ImportKindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importKind; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImportKind(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportKindContext importKind() throws RecognitionException {
		ImportKindContext _localctx = new ImportKindContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_importKind);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1560);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CLASS) | (1L << ENUM) | (1L << FUNC) | (1L << LET) | (1L << PROTOCOL) | (1L << STRUCT) | (1L << TYPEALIAS) | (1L << VAR))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportPathContext extends ParserRuleContext {
		public List<ImportPathIdentifierContext> importPathIdentifier() {
			return getRuleContexts(ImportPathIdentifierContext.class);
		}
		public ImportPathIdentifierContext importPathIdentifier(int i) {
			return getRuleContext(ImportPathIdentifierContext.class,i);
		}
		public ImportPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importPath; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImportPath(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportPathContext importPath() throws RecognitionException {
		ImportPathContext _localctx = new ImportPathContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_importPath);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1562);
			importPathIdentifier();
			setState(1567);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1563);
					match(PERIOD);
					setState(1564);
					importPathIdentifier();
					}
					} 
				}
				setState(1569);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportPathIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public ImportPathIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importPathIdentifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitImportPathIdentifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportPathIdentifierContext importPathIdentifier() throws RecognitionException {
		ImportPathIdentifierContext _localctx = new ImportPathIdentifierContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_importPathIdentifier);
		try {
			setState(1572);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1570);
				identifier();
				}
				break;
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case PERIOD:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1571);
				operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantDeclarationContext extends ParserRuleContext {
		public PatternInitializerListContext patternInitializerList() {
			return getRuleContext(PatternInitializerListContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeclarationModifiersContext declarationModifiers() {
			return getRuleContext(DeclarationModifiersContext.class,0);
		}
		public ConstantDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constantDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitConstantDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConstantDeclarationContext constantDeclaration() throws RecognitionException {
		ConstantDeclarationContext _localctx = new ConstantDeclarationContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_constantDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1575);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				{
				setState(1574);
				attributes();
				}
				break;
			}
			setState(1578);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				{
				setState(1577);
				declarationModifiers();
				}
				break;
			}
			setState(1580);
			match(LET);
			setState(1581);
			patternInitializerList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternInitializerListContext extends ParserRuleContext {
		public List<PatternInitializerContext> patternInitializer() {
			return getRuleContexts(PatternInitializerContext.class);
		}
		public PatternInitializerContext patternInitializer(int i) {
			return getRuleContext(PatternInitializerContext.class,i);
		}
		public PatternInitializerListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternInitializerList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPatternInitializerList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PatternInitializerListContext patternInitializerList() throws RecognitionException {
		PatternInitializerListContext _localctx = new PatternInitializerListContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_patternInitializerList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1583);
			patternInitializer();
			setState(1588);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,147,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1584);
					match(COMMA);
					setState(1585);
					patternInitializer();
					}
					} 
				}
				setState(1590);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,147,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternInitializerContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public PatternInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patternInitializer; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPatternInitializer(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PatternInitializerContext patternInitializer() throws RecognitionException {
		PatternInitializerContext _localctx = new PatternInitializerContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_patternInitializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1591);
			pattern();
			setState(1593);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
			case 1:
				{
				setState(1592);
				initializer();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInitializer(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_initializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1595);
			if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
			setState(1596);
			match(EQUAL);
			setState(1597);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationContext extends ParserRuleContext {
		public VariableDeclarationHeadContext variableDeclarationHead() {
			return getRuleContext(VariableDeclarationHeadContext.class,0);
		}
		public PatternInitializerListContext patternInitializerList() {
			return getRuleContext(PatternInitializerListContext.class,0);
		}
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public WillSetDidSetBlockContext willSetDidSetBlock() {
			return getRuleContext(WillSetDidSetBlockContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public GetterSetterBlockContext getterSetterBlock() {
			return getRuleContext(GetterSetterBlockContext.class,0);
		}
		public GetterSetterKeywordBlockContext getterSetterKeywordBlock() {
			return getRuleContext(GetterSetterKeywordBlockContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitVariableDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1599);
			variableDeclarationHead();
			setState(1616);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
			case 1:
				{
				setState(1600);
				patternInitializerList();
				}
				break;
			case 2:
				{
				setState(1601);
				variableName();
				setState(1614);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,151,_ctx) ) {
				case 1:
					{
					setState(1602);
					initializer();
					setState(1603);
					willSetDidSetBlock();
					}
					break;
				case 2:
					{
					setState(1605);
					typeAnnotation();
					setState(1612);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,150,_ctx) ) {
					case 1:
						{
						setState(1606);
						getterSetterBlock();
						}
						break;
					case 2:
						{
						setState(1607);
						getterSetterKeywordBlock();
						}
						break;
					case 3:
						{
						setState(1609);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,149,_ctx) ) {
						case 1:
							{
							setState(1608);
							initializer();
							}
							break;
						}
						setState(1611);
						willSetDidSetBlock();
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
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclarationHeadContext extends ParserRuleContext {
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeclarationModifiersContext declarationModifiers() {
			return getRuleContext(DeclarationModifiersContext.class,0);
		}
		public VariableDeclarationHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarationHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitVariableDeclarationHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableDeclarationHeadContext variableDeclarationHead() throws RecognitionException {
		VariableDeclarationHeadContext _localctx = new VariableDeclarationHeadContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_variableDeclarationHead);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1619);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
			case 1:
				{
				setState(1618);
				attributes();
				}
				break;
			}
			setState(1622);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,154,_ctx) ) {
			case 1:
				{
				setState(1621);
				declarationModifiers();
				}
				break;
			}
			setState(1624);
			match(VAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public VariableNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitVariableName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableNameContext variableName() throws RecognitionException {
		VariableNameContext _localctx = new VariableNameContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_variableName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1626);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterSetterBlockContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public GetterClauseContext getterClause() {
			return getRuleContext(GetterClauseContext.class,0);
		}
		public SetterClauseContext setterClause() {
			return getRuleContext(SetterClauseContext.class,0);
		}
		public GetterSetterBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getterSetterBlock; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGetterSetterBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GetterSetterBlockContext getterSetterBlock() throws RecognitionException {
		GetterSetterBlockContext _localctx = new GetterSetterBlockContext(_ctx, getState());
		enterRule(_localctx, 280, RULE_getterSetterBlock);
		try {
			setState(1641);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1628);
				codeBlock();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1629);
				match(LEFT_BRACE);
				setState(1637);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,156,_ctx) ) {
				case 1:
					{
					setState(1630);
					getterClause();
					setState(1632);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
					case 1:
						{
						setState(1631);
						setterClause();
						}
						break;
					}
					}
					break;
				case 2:
					{
					setState(1634);
					setterClause();
					setState(1635);
					getterClause();
					}
					break;
				}
				setState(1639);
				match(RIGHT_BRACE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public MutationModifierContext mutationModifier() {
			return getRuleContext(MutationModifierContext.class,0);
		}
		public GetterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getterClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGetterClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GetterClauseContext getterClause() throws RecognitionException {
		GetterClauseContext _localctx = new GetterClauseContext(_ctx, getState());
		enterRule(_localctx, 282, RULE_getterClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1644);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,158,_ctx) ) {
			case 1:
				{
				setState(1643);
				attributes();
				}
				break;
			}
			setState(1647);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,159,_ctx) ) {
			case 1:
				{
				setState(1646);
				mutationModifier();
				}
				break;
			}
			setState(1649);
			if (!(testLN(1, "get"))) throw new FailedPredicateException(this, "testLN(1, \"get\")");
			setState(1650);
			match(IDENTIFIER);
			setState(1651);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetterClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public MutationModifierContext mutationModifier() {
			return getRuleContext(MutationModifierContext.class,0);
		}
		public SetterNameContext setterName() {
			return getRuleContext(SetterNameContext.class,0);
		}
		public SetterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setterClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSetterClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SetterClauseContext setterClause() throws RecognitionException {
		SetterClauseContext _localctx = new SetterClauseContext(_ctx, getState());
		enterRule(_localctx, 284, RULE_setterClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1654);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,160,_ctx) ) {
			case 1:
				{
				setState(1653);
				attributes();
				}
				break;
			}
			setState(1657);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,161,_ctx) ) {
			case 1:
				{
				setState(1656);
				mutationModifier();
				}
				break;
			}
			setState(1659);
			if (!(testLN(1, "set"))) throw new FailedPredicateException(this, "testLN(1, \"set\")");
			setState(1660);
			match(IDENTIFIER);
			setState(1662);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LEFT_PARENTHESIS) {
				{
				setState(1661);
				setterName();
				}
			}

			setState(1664);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetterNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SetterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setterName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSetterName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SetterNameContext setterName() throws RecognitionException {
		SetterNameContext _localctx = new SetterNameContext(_ctx, getState());
		enterRule(_localctx, 286, RULE_setterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1666);
			match(LEFT_PARENTHESIS);
			setState(1667);
			identifier();
			setState(1668);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterSetterKeywordBlockContext extends ParserRuleContext {
		public GetterKeywordClauseContext getterKeywordClause() {
			return getRuleContext(GetterKeywordClauseContext.class,0);
		}
		public SetterKeywordClauseContext setterKeywordClause() {
			return getRuleContext(SetterKeywordClauseContext.class,0);
		}
		public GetterSetterKeywordBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getterSetterKeywordBlock; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGetterSetterKeywordBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GetterSetterKeywordBlockContext getterSetterKeywordBlock() throws RecognitionException {
		GetterSetterKeywordBlockContext _localctx = new GetterSetterKeywordBlockContext(_ctx, getState());
		enterRule(_localctx, 288, RULE_getterSetterKeywordBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1670);
			match(LEFT_BRACE);
			setState(1678);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,164,_ctx) ) {
			case 1:
				{
				setState(1671);
				getterKeywordClause();
				setState(1673);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,163,_ctx) ) {
				case 1:
					{
					setState(1672);
					setterKeywordClause();
					}
					break;
				}
				}
				break;
			case 2:
				{
				setState(1675);
				setterKeywordClause();
				setState(1676);
				getterKeywordClause();
				}
				break;
			}
			setState(1680);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterKeywordClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public MutationModifierContext mutationModifier() {
			return getRuleContext(MutationModifierContext.class,0);
		}
		public GetterKeywordClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getterKeywordClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGetterKeywordClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GetterKeywordClauseContext getterKeywordClause() throws RecognitionException {
		GetterKeywordClauseContext _localctx = new GetterKeywordClauseContext(_ctx, getState());
		enterRule(_localctx, 290, RULE_getterKeywordClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1683);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,165,_ctx) ) {
			case 1:
				{
				setState(1682);
				attributes();
				}
				break;
			}
			setState(1686);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,166,_ctx) ) {
			case 1:
				{
				setState(1685);
				mutationModifier();
				}
				break;
			}
			setState(1688);
			if (!(testLN(1, "get"))) throw new FailedPredicateException(this, "testLN(1, \"get\")");
			setState(1689);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetterKeywordClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public MutationModifierContext mutationModifier() {
			return getRuleContext(MutationModifierContext.class,0);
		}
		public SetterKeywordClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setterKeywordClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSetterKeywordClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SetterKeywordClauseContext setterKeywordClause() throws RecognitionException {
		SetterKeywordClauseContext _localctx = new SetterKeywordClauseContext(_ctx, getState());
		enterRule(_localctx, 292, RULE_setterKeywordClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1692);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,167,_ctx) ) {
			case 1:
				{
				setState(1691);
				attributes();
				}
				break;
			}
			setState(1695);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,168,_ctx) ) {
			case 1:
				{
				setState(1694);
				mutationModifier();
				}
				break;
			}
			setState(1697);
			if (!(testLN(1, "set"))) throw new FailedPredicateException(this, "testLN(1, \"set\")");
			setState(1698);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WillSetDidSetBlockContext extends ParserRuleContext {
		public WillSetClauseContext willSetClause() {
			return getRuleContext(WillSetClauseContext.class,0);
		}
		public DidSetClauseContext didSetClause() {
			return getRuleContext(DidSetClauseContext.class,0);
		}
		public WillSetDidSetBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_willSetDidSetBlock; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWillSetDidSetBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WillSetDidSetBlockContext willSetDidSetBlock() throws RecognitionException {
		WillSetDidSetBlockContext _localctx = new WillSetDidSetBlockContext(_ctx, getState());
		enterRule(_localctx, 294, RULE_willSetDidSetBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1700);
			match(LEFT_BRACE);
			setState(1708);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,170,_ctx) ) {
			case 1:
				{
				setState(1701);
				willSetClause();
				setState(1703);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,169,_ctx) ) {
				case 1:
					{
					setState(1702);
					didSetClause();
					}
					break;
				}
				}
				break;
			case 2:
				{
				setState(1705);
				didSetClause();
				setState(1706);
				willSetClause();
				}
				break;
			}
			setState(1710);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WillSetClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public SetterNameContext setterName() {
			return getRuleContext(SetterNameContext.class,0);
		}
		public WillSetClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_willSetClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWillSetClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WillSetClauseContext willSetClause() throws RecognitionException {
		WillSetClauseContext _localctx = new WillSetClauseContext(_ctx, getState());
		enterRule(_localctx, 296, RULE_willSetClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1713);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,171,_ctx) ) {
			case 1:
				{
				setState(1712);
				attributes();
				}
				break;
			}
			setState(1715);
			if (!(testLN(1, "willSet"))) throw new FailedPredicateException(this, "testLN(1, \"willSet\")");
			setState(1716);
			match(IDENTIFIER);
			setState(1718);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LEFT_PARENTHESIS) {
				{
				setState(1717);
				setterName();
				}
			}

			setState(1720);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DidSetClauseContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public SetterNameContext setterName() {
			return getRuleContext(SetterNameContext.class,0);
		}
		public DidSetClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_didSetClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDidSetClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DidSetClauseContext didSetClause() throws RecognitionException {
		DidSetClauseContext _localctx = new DidSetClauseContext(_ctx, getState());
		enterRule(_localctx, 298, RULE_didSetClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1723);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
			case 1:
				{
				setState(1722);
				attributes();
				}
				break;
			}
			setState(1725);
			if (!(testLN(1, "didSet"))) throw new FailedPredicateException(this, "testLN(1, \"didSet\")");
			setState(1726);
			match(IDENTIFIER);
			setState(1728);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LEFT_PARENTHESIS) {
				{
				setState(1727);
				setterName();
				}
			}

			setState(1730);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypealiasDeclarationContext extends ParserRuleContext {
		public TypealiasNameContext typealiasName() {
			return getRuleContext(TypealiasNameContext.class,0);
		}
		public TypealiasAssignmentContext typealiasAssignment() {
			return getRuleContext(TypealiasAssignmentContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public TypealiasDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typealiasDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypealiasDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypealiasDeclarationContext typealiasDeclaration() throws RecognitionException {
		TypealiasDeclarationContext _localctx = new TypealiasDeclarationContext(_ctx, getState());
		enterRule(_localctx, 300, RULE_typealiasDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1733);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(1732);
				attributes();
				}
			}

			setState(1736);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) {
				{
				setState(1735);
				accessLevelModifier();
				}
			}

			setState(1738);
			match(TYPEALIAS);
			setState(1739);
			typealiasName();
			setState(1741);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,177,_ctx) ) {
			case 1:
				{
				setState(1740);
				genericParameterClause();
				}
				break;
			}
			setState(1743);
			typealiasAssignment();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypealiasNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TypealiasNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typealiasName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypealiasName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypealiasNameContext typealiasName() throws RecognitionException {
		TypealiasNameContext _localctx = new TypealiasNameContext(_ctx, getState());
		enterRule(_localctx, 302, RULE_typealiasName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1745);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypealiasAssignmentContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypealiasAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typealiasAssignment; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypealiasAssignment(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypealiasAssignmentContext typealiasAssignment() throws RecognitionException {
		TypealiasAssignmentContext _localctx = new TypealiasAssignmentContext(_ctx, getState());
		enterRule(_localctx, 304, RULE_typealiasAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1747);
			if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
			setState(1748);
			match(EQUAL);
			setState(1749);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public FunctionHeadContext functionHead() {
			return getRuleContext(FunctionHeadContext.class,0);
		}
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public FunctionSignatureContext functionSignature() {
			return getRuleContext(FunctionSignatureContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 306, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1751);
			functionHead();
			setState(1752);
			functionName();
			setState(1754);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(1753);
				genericParameterClause();
				}
			}

			setState(1756);
			functionSignature();
			setState(1758);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,179,_ctx) ) {
			case 1:
				{
				setState(1757);
				genericWhereClause();
				}
				break;
			}
			setState(1761);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,180,_ctx) ) {
			case 1:
				{
				setState(1760);
				functionBody();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionHeadContext extends ParserRuleContext {
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeclarationModifiersContext declarationModifiers() {
			return getRuleContext(DeclarationModifiersContext.class,0);
		}
		public FunctionHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionHeadContext functionHead() throws RecognitionException {
		FunctionHeadContext _localctx = new FunctionHeadContext(_ctx, getState());
		enterRule(_localctx, 308, RULE_functionHead);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1764);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,181,_ctx) ) {
			case 1:
				{
				setState(1763);
				attributes();
				}
				break;
			}
			setState(1767);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,182,_ctx) ) {
			case 1:
				{
				setState(1766);
				declarationModifiers();
				}
				break;
			}
			setState(1769);
			match(FUNC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public FunctionNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionNameContext functionName() throws RecognitionException {
		FunctionNameContext _localctx = new FunctionNameContext(_ctx, getState());
		enterRule(_localctx, 310, RULE_functionName);
		try {
			setState(1773);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(1771);
				identifier();
				}
				break;
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case PERIOD:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
				enterOuterAlt(_localctx, 2);
				{
				setState(1772);
				operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionSignatureContext extends ParserRuleContext {
		public ParameterClauseContext parameterClause() {
			return getRuleContext(ParameterClauseContext.class,0);
		}
		public FunctionResultContext functionResult() {
			return getRuleContext(FunctionResultContext.class,0);
		}
		public FunctionSignatureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionSignature; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionSignature(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionSignatureContext functionSignature() throws RecognitionException {
		FunctionSignatureContext _localctx = new FunctionSignatureContext(_ctx, getState());
		enterRule(_localctx, 312, RULE_functionSignature);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1775);
			parameterClause();
			setState(1777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,184,_ctx) ) {
			case 1:
				{
				setState(1776);
				_la = _input.LA(1);
				if ( !(_la==RETHROWS || _la==THROWS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(1780);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
			case 1:
				{
				setState(1779);
				functionResult();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionResultContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public FunctionResultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionResult; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionResult(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionResultContext functionResult() throws RecognitionException {
		FunctionResultContext _localctx = new FunctionResultContext(_ctx, getState());
		enterRule(_localctx, 314, RULE_functionResult);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1782);
			match(ARROW);
			setState(1784);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
			case 1:
				{
				setState(1783);
				attributes();
				}
				break;
			}
			setState(1786);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitFunctionBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 316, RULE_functionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1788);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterClauseContext extends ParserRuleContext {
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public ParameterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitParameterClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParameterClauseContext parameterClause() throws RecognitionException {
		ParameterClauseContext _localctx = new ParameterClauseContext(_ctx, getState());
		enterRule(_localctx, 318, RULE_parameterClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1790);
			match(LEFT_PARENTHESIS);
			setState(1792);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 55)) & ~0x3f) == 0 && ((1L << (_la - 55)) & ((1L << (UNDERSCORE - 55)) | (1L << (GRAVE - 55)) | (1L << (IDENTIFIER - 55)) | (1L << (IMPLICIT_PARAMETER_NAME - 55)))) != 0)) {
				{
				setState(1791);
				parameterList();
				}
			}

			setState(1794);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitParameterList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 320, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1796);
			parameter();
			setState(1801);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1797);
				match(COMMA);
				setState(1798);
				parameter();
				}
				}
				setState(1803);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public LocalParameterNameContext localParameterName() {
			return getRuleContext(LocalParameterNameContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public ExternalParameterNameContext externalParameterName() {
			return getRuleContext(ExternalParameterNameContext.class,0);
		}
		public DefaultArgumentClauseContext defaultArgumentClause() {
			return getRuleContext(DefaultArgumentClauseContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 322, RULE_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1805);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
			case 1:
				{
				setState(1804);
				externalParameterName();
				}
				break;
			}
			setState(1807);
			localParameterName();
			setState(1808);
			typeAnnotation();
			setState(1812);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,190,_ctx) ) {
			case 1:
				{
				setState(1809);
				defaultArgumentClause();
				}
				break;
			case 2:
				{
				setState(1810);
				if (!(testLN(1, "..."))) throw new FailedPredicateException(this, "testLN(1, \"...\")");
				setState(1811);
				operator();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExternalParameterNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExternalParameterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externalParameterName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExternalParameterName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExternalParameterNameContext externalParameterName() throws RecognitionException {
		ExternalParameterNameContext _localctx = new ExternalParameterNameContext(_ctx, getState());
		enterRule(_localctx, 324, RULE_externalParameterName);
		try {
			setState(1816);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UNDERSCORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(1814);
				match(UNDERSCORE);
				}
				break;
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(1815);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalParameterNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LocalParameterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localParameterName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitLocalParameterName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LocalParameterNameContext localParameterName() throws RecognitionException {
		LocalParameterNameContext _localctx = new LocalParameterNameContext(_ctx, getState());
		enterRule(_localctx, 326, RULE_localParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1818);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultArgumentClauseContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DefaultArgumentClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultArgumentClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDefaultArgumentClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DefaultArgumentClauseContext defaultArgumentClause() throws RecognitionException {
		DefaultArgumentClauseContext _localctx = new DefaultArgumentClauseContext(_ctx, getState());
		enterRule(_localctx, 328, RULE_defaultArgumentClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1820);
			if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
			setState(1821);
			match(EQUAL);
			setState(1822);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public UnionStyleEnumContext unionStyleEnum() {
			return getRuleContext(UnionStyleEnumContext.class,0);
		}
		public RawValueStyleEnumContext rawValueStyleEnum() {
			return getRuleContext(RawValueStyleEnumContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitEnumDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 330, RULE_enumDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1825);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,192,_ctx) ) {
			case 1:
				{
				setState(1824);
				attributes();
				}
				break;
			}
			setState(1828);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,193,_ctx) ) {
			case 1:
				{
				setState(1827);
				accessLevelModifier();
				}
				break;
			}
			setState(1832);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,194,_ctx) ) {
			case 1:
				{
				setState(1830);
				unionStyleEnum();
				}
				break;
			case 2:
				{
				setState(1831);
				rawValueStyleEnum();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumContext extends ParserRuleContext {
		public EnumNameContext enumName() {
			return getRuleContext(EnumNameContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public UnionStyleEnumMembersContext unionStyleEnumMembers() {
			return getRuleContext(UnionStyleEnumMembersContext.class,0);
		}
		public UnionStyleEnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnum; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumContext unionStyleEnum() throws RecognitionException {
		UnionStyleEnumContext _localctx = new UnionStyleEnumContext(_ctx, getState());
		enterRule(_localctx, 332, RULE_unionStyleEnum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1836);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,195,_ctx) ) {
			case 1:
				{
				setState(1834);
				if (!(testLN(1, "indirect"))) throw new FailedPredicateException(this, "testLN(1, \"indirect\")");
				setState(1835);
				match(IDENTIFIER);
				}
				break;
			}
			setState(1838);
			match(ENUM);
			setState(1839);
			enumName();
			setState(1841);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(1840);
				genericParameterClause();
				}
			}

			setState(1844);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1843);
				typeInheritanceClause();
				}
			}

			setState(1847);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1846);
				genericWhereClause();
				}
			}

			setState(1849);
			match(LEFT_BRACE);
			setState(1851);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,199,_ctx) ) {
			case 1:
				{
				setState(1850);
				unionStyleEnumMembers();
				}
				break;
			}
			setState(1853);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumMembersContext extends ParserRuleContext {
		public List<UnionStyleEnumMemberContext> unionStyleEnumMember() {
			return getRuleContexts(UnionStyleEnumMemberContext.class);
		}
		public UnionStyleEnumMemberContext unionStyleEnumMember(int i) {
			return getRuleContext(UnionStyleEnumMemberContext.class,i);
		}
		public UnionStyleEnumMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnumMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnumMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumMembersContext unionStyleEnumMembers() throws RecognitionException {
		UnionStyleEnumMembersContext _localctx = new UnionStyleEnumMembersContext(_ctx, getState());
		enterRule(_localctx, 334, RULE_unionStyleEnumMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1856); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1855);
					unionStyleEnumMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1858); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,200,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumMemberContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public UnionStyleEnumCaseClauseContext unionStyleEnumCaseClause() {
			return getRuleContext(UnionStyleEnumCaseClauseContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public UnionStyleEnumMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnumMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnumMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumMemberContext unionStyleEnumMember() throws RecognitionException {
		UnionStyleEnumMemberContext _localctx = new UnionStyleEnumMemberContext(_ctx, getState());
		enterRule(_localctx, 336, RULE_unionStyleEnumMember);
		try {
			setState(1863);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,201,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1860);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1861);
				unionStyleEnumCaseClause();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1862);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumCaseClauseContext extends ParserRuleContext {
		public UnionStyleEnumCaseListContext unionStyleEnumCaseList() {
			return getRuleContext(UnionStyleEnumCaseListContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public UnionStyleEnumCaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnumCaseClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnumCaseClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumCaseClauseContext unionStyleEnumCaseClause() throws RecognitionException {
		UnionStyleEnumCaseClauseContext _localctx = new UnionStyleEnumCaseClauseContext(_ctx, getState());
		enterRule(_localctx, 338, RULE_unionStyleEnumCaseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1866);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,202,_ctx) ) {
			case 1:
				{
				setState(1865);
				attributes();
				}
				break;
			}
			setState(1870);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,203,_ctx) ) {
			case 1:
				{
				setState(1868);
				if (!(testLN(1, "indirect"))) throw new FailedPredicateException(this, "testLN(1, \"indirect\")");
				setState(1869);
				match(IDENTIFIER);
				}
				break;
			}
			setState(1872);
			match(CASE);
			setState(1873);
			unionStyleEnumCaseList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumCaseListContext extends ParserRuleContext {
		public List<UnionStyleEnumCaseContext> unionStyleEnumCase() {
			return getRuleContexts(UnionStyleEnumCaseContext.class);
		}
		public UnionStyleEnumCaseContext unionStyleEnumCase(int i) {
			return getRuleContext(UnionStyleEnumCaseContext.class,i);
		}
		public UnionStyleEnumCaseListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnumCaseList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnumCaseList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumCaseListContext unionStyleEnumCaseList() throws RecognitionException {
		UnionStyleEnumCaseListContext _localctx = new UnionStyleEnumCaseListContext(_ctx, getState());
		enterRule(_localctx, 340, RULE_unionStyleEnumCaseList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1875);
			unionStyleEnumCase();
			setState(1880);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,204,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1876);
					match(COMMA);
					setState(1877);
					unionStyleEnumCase();
					}
					} 
				}
				setState(1882);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,204,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionStyleEnumCaseContext extends ParserRuleContext {
		public EnumCaseNameContext enumCaseName() {
			return getRuleContext(EnumCaseNameContext.class,0);
		}
		public TupleTypeContext tupleType() {
			return getRuleContext(TupleTypeContext.class,0);
		}
		public UnionStyleEnumCaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unionStyleEnumCase; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitUnionStyleEnumCase(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UnionStyleEnumCaseContext unionStyleEnumCase() throws RecognitionException {
		UnionStyleEnumCaseContext _localctx = new UnionStyleEnumCaseContext(_ctx, getState());
		enterRule(_localctx, 342, RULE_unionStyleEnumCase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1883);
			enumCaseName();
			setState(1885);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,205,_ctx) ) {
			case 1:
				{
				setState(1884);
				tupleType();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EnumNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitEnumName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumNameContext enumName() throws RecognitionException {
		EnumNameContext _localctx = new EnumNameContext(_ctx, getState());
		enterRule(_localctx, 344, RULE_enumName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1887);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumCaseNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EnumCaseNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumCaseName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitEnumCaseName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumCaseNameContext enumCaseName() throws RecognitionException {
		EnumCaseNameContext _localctx = new EnumCaseNameContext(_ctx, getState());
		enterRule(_localctx, 346, RULE_enumCaseName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1889);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumContext extends ParserRuleContext {
		public EnumNameContext enumName() {
			return getRuleContext(EnumNameContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public RawValueStyleEnumMembersContext rawValueStyleEnumMembers() {
			return getRuleContext(RawValueStyleEnumMembersContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public RawValueStyleEnumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnum; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnum(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumContext rawValueStyleEnum() throws RecognitionException {
		RawValueStyleEnumContext _localctx = new RawValueStyleEnumContext(_ctx, getState());
		enterRule(_localctx, 348, RULE_rawValueStyleEnum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1891);
			match(ENUM);
			setState(1892);
			enumName();
			setState(1894);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(1893);
				genericParameterClause();
				}
			}

			setState(1896);
			typeInheritanceClause();
			setState(1898);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1897);
				genericWhereClause();
				}
			}

			setState(1900);
			match(LEFT_BRACE);
			setState(1901);
			rawValueStyleEnumMembers();
			setState(1902);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumMembersContext extends ParserRuleContext {
		public List<RawValueStyleEnumMemberContext> rawValueStyleEnumMember() {
			return getRuleContexts(RawValueStyleEnumMemberContext.class);
		}
		public RawValueStyleEnumMemberContext rawValueStyleEnumMember(int i) {
			return getRuleContext(RawValueStyleEnumMemberContext.class,i);
		}
		public RawValueStyleEnumMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnumMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnumMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumMembersContext rawValueStyleEnumMembers() throws RecognitionException {
		RawValueStyleEnumMembersContext _localctx = new RawValueStyleEnumMembersContext(_ctx, getState());
		enterRule(_localctx, 350, RULE_rawValueStyleEnumMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1905); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1904);
					rawValueStyleEnumMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1907); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,208,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumMemberContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public RawValueStyleEnumCaseClauseContext rawValueStyleEnumCaseClause() {
			return getRuleContext(RawValueStyleEnumCaseClauseContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public RawValueStyleEnumMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnumMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnumMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumMemberContext rawValueStyleEnumMember() throws RecognitionException {
		RawValueStyleEnumMemberContext _localctx = new RawValueStyleEnumMemberContext(_ctx, getState());
		enterRule(_localctx, 352, RULE_rawValueStyleEnumMember);
		try {
			setState(1912);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,209,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1909);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1910);
				rawValueStyleEnumCaseClause();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1911);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumCaseClauseContext extends ParserRuleContext {
		public RawValueStyleEnumCaseListContext rawValueStyleEnumCaseList() {
			return getRuleContext(RawValueStyleEnumCaseListContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public RawValueStyleEnumCaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnumCaseClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnumCaseClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumCaseClauseContext rawValueStyleEnumCaseClause() throws RecognitionException {
		RawValueStyleEnumCaseClauseContext _localctx = new RawValueStyleEnumCaseClauseContext(_ctx, getState());
		enterRule(_localctx, 354, RULE_rawValueStyleEnumCaseClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1915);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(1914);
				attributes();
				}
			}

			setState(1917);
			match(CASE);
			setState(1918);
			rawValueStyleEnumCaseList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumCaseListContext extends ParserRuleContext {
		public List<RawValueStyleEnumCaseContext> rawValueStyleEnumCase() {
			return getRuleContexts(RawValueStyleEnumCaseContext.class);
		}
		public RawValueStyleEnumCaseContext rawValueStyleEnumCase(int i) {
			return getRuleContext(RawValueStyleEnumCaseContext.class,i);
		}
		public RawValueStyleEnumCaseListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnumCaseList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnumCaseList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumCaseListContext rawValueStyleEnumCaseList() throws RecognitionException {
		RawValueStyleEnumCaseListContext _localctx = new RawValueStyleEnumCaseListContext(_ctx, getState());
		enterRule(_localctx, 356, RULE_rawValueStyleEnumCaseList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1920);
			rawValueStyleEnumCase();
			setState(1925);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,211,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1921);
					match(COMMA);
					setState(1922);
					rawValueStyleEnumCase();
					}
					} 
				}
				setState(1927);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,211,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueStyleEnumCaseContext extends ParserRuleContext {
		public EnumCaseNameContext enumCaseName() {
			return getRuleContext(EnumCaseNameContext.class,0);
		}
		public RawValueAssignmentContext rawValueAssignment() {
			return getRuleContext(RawValueAssignmentContext.class,0);
		}
		public RawValueStyleEnumCaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueStyleEnumCase; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueStyleEnumCase(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueStyleEnumCaseContext rawValueStyleEnumCase() throws RecognitionException {
		RawValueStyleEnumCaseContext _localctx = new RawValueStyleEnumCaseContext(_ctx, getState());
		enterRule(_localctx, 358, RULE_rawValueStyleEnumCase);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1928);
			enumCaseName();
			setState(1930);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,212,_ctx) ) {
			case 1:
				{
				setState(1929);
				rawValueAssignment();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueAssignmentContext extends ParserRuleContext {
		public RawValueLiteralContext rawValueLiteral() {
			return getRuleContext(RawValueLiteralContext.class,0);
		}
		public RawValueAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueAssignment; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueAssignment(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueAssignmentContext rawValueAssignment() throws RecognitionException {
		RawValueAssignmentContext _localctx = new RawValueAssignmentContext(_ctx, getState());
		enterRule(_localctx, 360, RULE_rawValueAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1932);
			if (!(isBinOp(1))) throw new FailedPredicateException(this, "isBinOp(1)");
			setState(1933);
			match(EQUAL);
			setState(1934);
			rawValueLiteral();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawValueLiteralContext extends ParserRuleContext {
		public NumericLiteralContext numericLiteral() {
			return getRuleContext(NumericLiteralContext.class,0);
		}
		public TerminalNode STATIC_STRING_LITERAL() { return getToken(SwiftParser.STATIC_STRING_LITERAL, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public RawValueLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rawValueLiteral; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRawValueLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RawValueLiteralContext rawValueLiteral() throws RecognitionException {
		RawValueLiteralContext _localctx = new RawValueLiteralContext(_ctx, getState());
		enterRule(_localctx, 362, RULE_rawValueLiteral);
		try {
			setState(1939);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BINARY_LITERAL:
			case OCTAL_LITERAL:
			case DECIMAL_DIGITS:
			case DECIMAL_LITERAL:
			case HEXADECIMAL_LITERAL:
			case FLOATING_POINT_LITERAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(1936);
				numericLiteral();
				}
				break;
			case STATIC_STRING_LITERAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(1937);
				match(STATIC_STRING_LITERAL);
				}
				break;
			case FALSE:
			case TRUE:
				enterOuterAlt(_localctx, 3);
				{
				setState(1938);
				booleanLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructDeclarationContext extends ParserRuleContext {
		public StructNameContext structName() {
			return getRuleContext(StructNameContext.class,0);
		}
		public StructBodyContext structBody() {
			return getRuleContext(StructBodyContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public StructDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStructDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StructDeclarationContext structDeclaration() throws RecognitionException {
		StructDeclarationContext _localctx = new StructDeclarationContext(_ctx, getState());
		enterRule(_localctx, 364, RULE_structDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1942);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(1941);
				attributes();
				}
			}

			setState(1945);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) {
				{
				setState(1944);
				accessLevelModifier();
				}
			}

			setState(1947);
			match(STRUCT);
			setState(1948);
			structName();
			setState(1950);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(1949);
				genericParameterClause();
				}
			}

			setState(1953);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1952);
				typeInheritanceClause();
				}
			}

			setState(1956);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1955);
				genericWhereClause();
				}
			}

			setState(1958);
			structBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public StructNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStructName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StructNameContext structName() throws RecognitionException {
		StructNameContext _localctx = new StructNameContext(_ctx, getState());
		enterRule(_localctx, 366, RULE_structName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1960);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructBodyContext extends ParserRuleContext {
		public StructMembersContext structMembers() {
			return getRuleContext(StructMembersContext.class,0);
		}
		public StructBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStructBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StructBodyContext structBody() throws RecognitionException {
		StructBodyContext _localctx = new StructBodyContext(_ctx, getState());
		enterRule(_localctx, 368, RULE_structBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1962);
			match(LEFT_BRACE);
			setState(1964);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,219,_ctx) ) {
			case 1:
				{
				setState(1963);
				structMembers();
				}
				break;
			}
			setState(1966);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructMembersContext extends ParserRuleContext {
		public List<StructMemberContext> structMember() {
			return getRuleContexts(StructMemberContext.class);
		}
		public StructMemberContext structMember(int i) {
			return getRuleContext(StructMemberContext.class,i);
		}
		public StructMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStructMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StructMembersContext structMembers() throws RecognitionException {
		StructMembersContext _localctx = new StructMembersContext(_ctx, getState());
		enterRule(_localctx, 370, RULE_structMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1969); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(1968);
					structMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1971); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,220,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructMemberContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public StructMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitStructMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StructMemberContext structMember() throws RecognitionException {
		StructMemberContext _localctx = new StructMemberContext(_ctx, getState());
		enterRule(_localctx, 372, RULE_structMember);
		try {
			setState(1975);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,221,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1973);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1974);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public ClassNameContext className() {
			return getRuleContext(ClassNameContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClassDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 374, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1978);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,222,_ctx) ) {
			case 1:
				{
				setState(1977);
				attributes();
				}
				break;
			}
			setState(1990);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,225,_ctx) ) {
			case 1:
				{
				setState(1981);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,223,_ctx) ) {
				case 1:
					{
					setState(1980);
					accessLevelModifier();
					}
					break;
				}
				setState(1985);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,224,_ctx) ) {
				case 1:
					{
					setState(1983);
					if (!(testLN(1, "final"))) throw new FailedPredicateException(this, "testLN(1, \"final\")");
					setState(1984);
					match(IDENTIFIER);
					}
					break;
				}
				}
				break;
			case 2:
				{
				setState(1987);
				if (!(testLN(1, "final"))) throw new FailedPredicateException(this, "testLN(1, \"final\")");
				setState(1988);
				match(IDENTIFIER);
				setState(1989);
				accessLevelModifier();
				}
				break;
			}
			setState(1992);
			match(CLASS);
			setState(1993);
			className();
			setState(1995);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(1994);
				genericParameterClause();
				}
			}

			setState(1998);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(1997);
				typeInheritanceClause();
				}
			}

			setState(2001);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(2000);
				genericWhereClause();
				}
			}

			setState(2003);
			classBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ClassNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_className; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClassName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassNameContext className() throws RecognitionException {
		ClassNameContext _localctx = new ClassNameContext(_ctx, getState());
		enterRule(_localctx, 376, RULE_className);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2005);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyContext extends ParserRuleContext {
		public ClassMembersContext classMembers() {
			return getRuleContext(ClassMembersContext.class,0);
		}
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClassBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 378, RULE_classBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2007);
			match(LEFT_BRACE);
			setState(2009);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,229,_ctx) ) {
			case 1:
				{
				setState(2008);
				classMembers();
				}
				break;
			}
			setState(2011);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMembersContext extends ParserRuleContext {
		public List<ClassMemberContext> classMember() {
			return getRuleContexts(ClassMemberContext.class);
		}
		public ClassMemberContext classMember(int i) {
			return getRuleContext(ClassMemberContext.class,i);
		}
		public ClassMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClassMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassMembersContext classMembers() throws RecognitionException {
		ClassMembersContext _localctx = new ClassMembersContext(_ctx, getState());
		enterRule(_localctx, 380, RULE_classMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2014); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2013);
					classMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2016); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,230,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassMemberContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public ClassMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitClassMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassMemberContext classMember() throws RecognitionException {
		ClassMemberContext _localctx = new ClassMemberContext(_ctx, getState());
		enterRule(_localctx, 382, RULE_classMember);
		try {
			setState(2020);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,231,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2018);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2019);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolDeclarationContext extends ParserRuleContext {
		public ProtocolNameContext protocolName() {
			return getRuleContext(ProtocolNameContext.class,0);
		}
		public ProtocolBodyContext protocolBody() {
			return getRuleContext(ProtocolBodyContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ProtocolDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolDeclarationContext protocolDeclaration() throws RecognitionException {
		ProtocolDeclarationContext _localctx = new ProtocolDeclarationContext(_ctx, getState());
		enterRule(_localctx, 384, RULE_protocolDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2023);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(2022);
				attributes();
				}
			}

			setState(2026);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) {
				{
				setState(2025);
				accessLevelModifier();
				}
			}

			setState(2028);
			match(PROTOCOL);
			setState(2029);
			protocolName();
			setState(2031);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(2030);
				typeInheritanceClause();
				}
			}

			setState(2034);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(2033);
				genericWhereClause();
				}
			}

			setState(2036);
			protocolBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ProtocolNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolNameContext protocolName() throws RecognitionException {
		ProtocolNameContext _localctx = new ProtocolNameContext(_ctx, getState());
		enterRule(_localctx, 386, RULE_protocolName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2038);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolBodyContext extends ParserRuleContext {
		public ProtocolMembersContext protocolMembers() {
			return getRuleContext(ProtocolMembersContext.class,0);
		}
		public ProtocolBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolBodyContext protocolBody() throws RecognitionException {
		ProtocolBodyContext _localctx = new ProtocolBodyContext(_ctx, getState());
		enterRule(_localctx, 388, RULE_protocolBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2040);
			match(LEFT_BRACE);
			setState(2042);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,236,_ctx) ) {
			case 1:
				{
				setState(2041);
				protocolMembers();
				}
				break;
			}
			setState(2044);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolMembersContext extends ParserRuleContext {
		public List<ProtocolMemberContext> protocolMember() {
			return getRuleContexts(ProtocolMemberContext.class);
		}
		public ProtocolMemberContext protocolMember(int i) {
			return getRuleContext(ProtocolMemberContext.class,i);
		}
		public ProtocolMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolMembersContext protocolMembers() throws RecognitionException {
		ProtocolMembersContext _localctx = new ProtocolMembersContext(_ctx, getState());
		enterRule(_localctx, 390, RULE_protocolMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2047); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2046);
					protocolMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2049); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,237,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolMemberContext extends ParserRuleContext {
		public ProtocolMemberDeclatationContext protocolMemberDeclatation() {
			return getRuleContext(ProtocolMemberDeclatationContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public ProtocolMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolMemberContext protocolMember() throws RecognitionException {
		ProtocolMemberContext _localctx = new ProtocolMemberContext(_ctx, getState());
		enterRule(_localctx, 392, RULE_protocolMember);
		try {
			setState(2053);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,238,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2051);
				protocolMemberDeclatation();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2052);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolMemberDeclatationContext extends ParserRuleContext {
		public ProtocolPropertyDeclarationContext protocolPropertyDeclaration() {
			return getRuleContext(ProtocolPropertyDeclarationContext.class,0);
		}
		public ProtocolMethodDeclarationContext protocolMethodDeclaration() {
			return getRuleContext(ProtocolMethodDeclarationContext.class,0);
		}
		public ProtocolInitializerDeclarationContext protocolInitializerDeclaration() {
			return getRuleContext(ProtocolInitializerDeclarationContext.class,0);
		}
		public ProtocolSubscriptDeclarationContext protocolSubscriptDeclaration() {
			return getRuleContext(ProtocolSubscriptDeclarationContext.class,0);
		}
		public ProtocolAssociatedTypeDeclarationContext protocolAssociatedTypeDeclaration() {
			return getRuleContext(ProtocolAssociatedTypeDeclarationContext.class,0);
		}
		public TypealiasDeclarationContext typealiasDeclaration() {
			return getRuleContext(TypealiasDeclarationContext.class,0);
		}
		public ProtocolMemberDeclatationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolMemberDeclatation; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolMemberDeclatation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolMemberDeclatationContext protocolMemberDeclatation() throws RecognitionException {
		ProtocolMemberDeclatationContext _localctx = new ProtocolMemberDeclatationContext(_ctx, getState());
		enterRule(_localctx, 394, RULE_protocolMemberDeclatation);
		try {
			setState(2061);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,239,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2055);
				protocolPropertyDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2056);
				protocolMethodDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2057);
				protocolInitializerDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2058);
				protocolSubscriptDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2059);
				protocolAssociatedTypeDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2060);
				typealiasDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolPropertyDeclarationContext extends ParserRuleContext {
		public VariableDeclarationHeadContext variableDeclarationHead() {
			return getRuleContext(VariableDeclarationHeadContext.class,0);
		}
		public VariableNameContext variableName() {
			return getRuleContext(VariableNameContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public GetterSetterKeywordBlockContext getterSetterKeywordBlock() {
			return getRuleContext(GetterSetterKeywordBlockContext.class,0);
		}
		public ProtocolPropertyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolPropertyDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolPropertyDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolPropertyDeclarationContext protocolPropertyDeclaration() throws RecognitionException {
		ProtocolPropertyDeclarationContext _localctx = new ProtocolPropertyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 396, RULE_protocolPropertyDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2063);
			variableDeclarationHead();
			setState(2064);
			variableName();
			setState(2065);
			typeAnnotation();
			setState(2066);
			getterSetterKeywordBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolMethodDeclarationContext extends ParserRuleContext {
		public FunctionHeadContext functionHead() {
			return getRuleContext(FunctionHeadContext.class,0);
		}
		public FunctionNameContext functionName() {
			return getRuleContext(FunctionNameContext.class,0);
		}
		public FunctionSignatureContext functionSignature() {
			return getRuleContext(FunctionSignatureContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ProtocolMethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolMethodDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolMethodDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolMethodDeclarationContext protocolMethodDeclaration() throws RecognitionException {
		ProtocolMethodDeclarationContext _localctx = new ProtocolMethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 398, RULE_protocolMethodDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2068);
			functionHead();
			setState(2069);
			functionName();
			setState(2071);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(2070);
				genericParameterClause();
				}
			}

			setState(2073);
			functionSignature();
			setState(2075);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,241,_ctx) ) {
			case 1:
				{
				setState(2074);
				genericWhereClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolInitializerDeclarationContext extends ParserRuleContext {
		public InitializerHeadContext initializerHead() {
			return getRuleContext(InitializerHeadContext.class,0);
		}
		public ParameterClauseContext parameterClause() {
			return getRuleContext(ParameterClauseContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ProtocolInitializerDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolInitializerDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolInitializerDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolInitializerDeclarationContext protocolInitializerDeclaration() throws RecognitionException {
		ProtocolInitializerDeclarationContext _localctx = new ProtocolInitializerDeclarationContext(_ctx, getState());
		enterRule(_localctx, 400, RULE_protocolInitializerDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2077);
			initializerHead();
			setState(2079);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(2078);
				genericParameterClause();
				}
			}

			setState(2081);
			parameterClause();
			setState(2083);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,243,_ctx) ) {
			case 1:
				{
				setState(2082);
				_la = _input.LA(1);
				if ( !(_la==RETHROWS || _la==THROWS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
			setState(2086);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,244,_ctx) ) {
			case 1:
				{
				setState(2085);
				genericWhereClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolSubscriptDeclarationContext extends ParserRuleContext {
		public SubscriptHeadContext subscriptHead() {
			return getRuleContext(SubscriptHeadContext.class,0);
		}
		public SubscriptResultContext subscriptResult() {
			return getRuleContext(SubscriptResultContext.class,0);
		}
		public GetterSetterKeywordBlockContext getterSetterKeywordBlock() {
			return getRuleContext(GetterSetterKeywordBlockContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ProtocolSubscriptDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolSubscriptDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolSubscriptDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolSubscriptDeclarationContext protocolSubscriptDeclaration() throws RecognitionException {
		ProtocolSubscriptDeclarationContext _localctx = new ProtocolSubscriptDeclarationContext(_ctx, getState());
		enterRule(_localctx, 402, RULE_protocolSubscriptDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2088);
			subscriptHead();
			setState(2089);
			subscriptResult();
			setState(2091);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(2090);
				genericWhereClause();
				}
			}

			setState(2093);
			getterSetterKeywordBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProtocolAssociatedTypeDeclarationContext extends ParserRuleContext {
		public TypealiasNameContext typealiasName() {
			return getRuleContext(TypealiasNameContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public TypealiasAssignmentContext typealiasAssignment() {
			return getRuleContext(TypealiasAssignmentContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ProtocolAssociatedTypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_protocolAssociatedTypeDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitProtocolAssociatedTypeDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProtocolAssociatedTypeDeclarationContext protocolAssociatedTypeDeclaration() throws RecognitionException {
		ProtocolAssociatedTypeDeclarationContext _localctx = new ProtocolAssociatedTypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 404, RULE_protocolAssociatedTypeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2096);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(2095);
				attributes();
				}
			}

			setState(2099);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) {
				{
				setState(2098);
				accessLevelModifier();
				}
			}

			setState(2101);
			match(ASSOCIATEDTYPE);
			setState(2102);
			typealiasName();
			setState(2104);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,248,_ctx) ) {
			case 1:
				{
				setState(2103);
				typeInheritanceClause();
				}
				break;
			}
			setState(2107);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,249,_ctx) ) {
			case 1:
				{
				setState(2106);
				typealiasAssignment();
				}
				break;
			}
			setState(2110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,250,_ctx) ) {
			case 1:
				{
				setState(2109);
				genericWhereClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerDeclarationContext extends ParserRuleContext {
		public InitializerHeadContext initializerHead() {
			return getRuleContext(InitializerHeadContext.class,0);
		}
		public ParameterClauseContext parameterClause() {
			return getRuleContext(ParameterClauseContext.class,0);
		}
		public InitializerBodyContext initializerBody() {
			return getRuleContext(InitializerBodyContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public InitializerDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInitializerDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InitializerDeclarationContext initializerDeclaration() throws RecognitionException {
		InitializerDeclarationContext _localctx = new InitializerDeclarationContext(_ctx, getState());
		enterRule(_localctx, 406, RULE_initializerDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2112);
			initializerHead();
			setState(2114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(2113);
				genericParameterClause();
				}
			}

			setState(2116);
			parameterClause();
			setState(2118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RETHROWS || _la==THROWS) {
				{
				setState(2117);
				_la = _input.LA(1);
				if ( !(_la==RETHROWS || _la==THROWS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(2121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(2120);
				genericWhereClause();
				}
			}

			setState(2123);
			initializerBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerHeadContext extends ParserRuleContext {
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeclarationModifiersContext declarationModifiers() {
			return getRuleContext(DeclarationModifiersContext.class,0);
		}
		public InitializerHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInitializerHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InitializerHeadContext initializerHead() throws RecognitionException {
		InitializerHeadContext _localctx = new InitializerHeadContext(_ctx, getState());
		enterRule(_localctx, 408, RULE_initializerHead);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,254,_ctx) ) {
			case 1:
				{
				setState(2125);
				attributes();
				}
				break;
			}
			setState(2129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,255,_ctx) ) {
			case 1:
				{
				setState(2128);
				declarationModifiers();
				}
				break;
			}
			setState(2131);
			match(INIT);
			setState(2132);
			if (!(isPostOp(1))) throw new FailedPredicateException(this, "isPostOp(1)");
			setState(2133);
			_la = _input.LA(1);
			if ( !(_la==EXCLAMATION || _la==QUESTION) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializerBodyContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public InitializerBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializerBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInitializerBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InitializerBodyContext initializerBody() throws RecognitionException {
		InitializerBodyContext _localctx = new InitializerBodyContext(_ctx, getState());
		enterRule(_localctx, 410, RULE_initializerBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2135);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeinitializerDeclarationContext extends ParserRuleContext {
		public CodeBlockContext codeBlock() {
			return getRuleContext(CodeBlockContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeinitializerDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deinitializerDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDeinitializerDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeinitializerDeclarationContext deinitializerDeclaration() throws RecognitionException {
		DeinitializerDeclarationContext _localctx = new DeinitializerDeclarationContext(_ctx, getState());
		enterRule(_localctx, 412, RULE_deinitializerDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(2137);
				attributes();
				}
			}

			setState(2140);
			match(DEINIT);
			setState(2141);
			codeBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtensionDeclarationContext extends ParserRuleContext {
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ExtensionBodyContext extensionBody() {
			return getRuleContext(ExtensionBodyContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public TypeInheritanceClauseContext typeInheritanceClause() {
			return getRuleContext(TypeInheritanceClauseContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public ExtensionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extensionDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExtensionDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExtensionDeclarationContext extensionDeclaration() throws RecognitionException {
		ExtensionDeclarationContext _localctx = new ExtensionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 414, RULE_extensionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(2143);
				attributes();
				}
			}

			setState(2147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) {
				{
				setState(2146);
				accessLevelModifier();
				}
			}

			setState(2149);
			match(EXTENSION);
			setState(2150);
			typeIdentifier();
			setState(2153);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case COLON:
				{
				setState(2151);
				typeInheritanceClause();
				}
				break;
			case WHERE:
				{
				setState(2152);
				genericWhereClause();
				}
				break;
			case LEFT_BRACE:
				break;
			default:
				break;
			}
			setState(2155);
			extensionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtensionBodyContext extends ParserRuleContext {
		public ExtensionMembersContext extensionMembers() {
			return getRuleContext(ExtensionMembersContext.class,0);
		}
		public ExtensionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extensionBody; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExtensionBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExtensionBodyContext extensionBody() throws RecognitionException {
		ExtensionBodyContext _localctx = new ExtensionBodyContext(_ctx, getState());
		enterRule(_localctx, 416, RULE_extensionBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2157);
			match(LEFT_BRACE);
			setState(2159);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,260,_ctx) ) {
			case 1:
				{
				setState(2158);
				extensionMembers();
				}
				break;
			}
			setState(2161);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtensionMembersContext extends ParserRuleContext {
		public List<ExtensionMemberContext> extensionMember() {
			return getRuleContexts(ExtensionMemberContext.class);
		}
		public ExtensionMemberContext extensionMember(int i) {
			return getRuleContext(ExtensionMemberContext.class,i);
		}
		public ExtensionMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extensionMembers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExtensionMembers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExtensionMembersContext extensionMembers() throws RecognitionException {
		ExtensionMembersContext _localctx = new ExtensionMembersContext(_ctx, getState());
		enterRule(_localctx, 418, RULE_extensionMembers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2164); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2163);
					extensionMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2166); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,261,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExtensionMemberContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public CompilerControlStatementContext compilerControlStatement() {
			return getRuleContext(CompilerControlStatementContext.class,0);
		}
		public ExtensionMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_extensionMember; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExtensionMember(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExtensionMemberContext extensionMember() throws RecognitionException {
		ExtensionMemberContext _localctx = new ExtensionMemberContext(_ctx, getState());
		enterRule(_localctx, 420, RULE_extensionMember);
		try {
			setState(2170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,262,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2168);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2169);
				compilerControlStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubscriptDeclarationContext extends ParserRuleContext {
		public SubscriptHeadContext subscriptHead() {
			return getRuleContext(SubscriptHeadContext.class,0);
		}
		public SubscriptResultContext subscriptResult() {
			return getRuleContext(SubscriptResultContext.class,0);
		}
		public GetterSetterBlockContext getterSetterBlock() {
			return getRuleContext(GetterSetterBlockContext.class,0);
		}
		public GetterSetterKeywordBlockContext getterSetterKeywordBlock() {
			return getRuleContext(GetterSetterKeywordBlockContext.class,0);
		}
		public GenericWhereClauseContext genericWhereClause() {
			return getRuleContext(GenericWhereClauseContext.class,0);
		}
		public SubscriptDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subscriptDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSubscriptDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubscriptDeclarationContext subscriptDeclaration() throws RecognitionException {
		SubscriptDeclarationContext _localctx = new SubscriptDeclarationContext(_ctx, getState());
		enterRule(_localctx, 422, RULE_subscriptDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2172);
			subscriptHead();
			setState(2173);
			subscriptResult();
			setState(2175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(2174);
				genericWhereClause();
				}
			}

			setState(2179);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,264,_ctx) ) {
			case 1:
				{
				setState(2177);
				getterSetterBlock();
				}
				break;
			case 2:
				{
				setState(2178);
				getterSetterKeywordBlock();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubscriptHeadContext extends ParserRuleContext {
		public ParameterClauseContext parameterClause() {
			return getRuleContext(ParameterClauseContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public DeclarationModifiersContext declarationModifiers() {
			return getRuleContext(DeclarationModifiersContext.class,0);
		}
		public GenericParameterClauseContext genericParameterClause() {
			return getRuleContext(GenericParameterClauseContext.class,0);
		}
		public SubscriptHeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subscriptHead; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSubscriptHead(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubscriptHeadContext subscriptHead() throws RecognitionException {
		SubscriptHeadContext _localctx = new SubscriptHeadContext(_ctx, getState());
		enterRule(_localctx, 424, RULE_subscriptHead);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,265,_ctx) ) {
			case 1:
				{
				setState(2181);
				attributes();
				}
				break;
			}
			setState(2185);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,266,_ctx) ) {
			case 1:
				{
				setState(2184);
				declarationModifiers();
				}
				break;
			}
			setState(2187);
			match(SUBSCRIPT);
			setState(2189);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LESS_THAN) {
				{
				setState(2188);
				genericParameterClause();
				}
			}

			setState(2191);
			parameterClause();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubscriptResultContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public AttributesContext attributes() {
			return getRuleContext(AttributesContext.class,0);
		}
		public SubscriptResultContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subscriptResult; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSubscriptResult(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubscriptResultContext subscriptResult() throws RecognitionException {
		SubscriptResultContext _localctx = new SubscriptResultContext(_ctx, getState());
		enterRule(_localctx, 426, RULE_subscriptResult);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2193);
			match(ARROW);
			setState(2195);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,268,_ctx) ) {
			case 1:
				{
				setState(2194);
				attributes();
				}
				break;
			}
			setState(2197);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OperatorDeclarationContext extends ParserRuleContext {
		public PrefixOperatorDeclarationContext prefixOperatorDeclaration() {
			return getRuleContext(PrefixOperatorDeclarationContext.class,0);
		}
		public PostfixOperatorDeclarationContext postfixOperatorDeclaration() {
			return getRuleContext(PostfixOperatorDeclarationContext.class,0);
		}
		public InfixOperatorDeclarationContext infixOperatorDeclaration() {
			return getRuleContext(InfixOperatorDeclarationContext.class,0);
		}
		public OperatorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOperatorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OperatorDeclarationContext operatorDeclaration() throws RecognitionException {
		OperatorDeclarationContext _localctx = new OperatorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 428, RULE_operatorDeclaration);
		try {
			setState(2202);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,269,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2199);
				prefixOperatorDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2200);
				postfixOperatorDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2201);
				infixOperatorDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixOperatorDeclarationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public PrefixOperatorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixOperatorDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrefixOperatorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrefixOperatorDeclarationContext prefixOperatorDeclaration() throws RecognitionException {
		PrefixOperatorDeclarationContext _localctx = new PrefixOperatorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 430, RULE_prefixOperatorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2204);
			if (!(testLN(1, "prefix"))) throw new FailedPredicateException(this, "testLN(1, \"prefix\")");
			setState(2205);
			match(IDENTIFIER);
			setState(2206);
			match(OPERATOR_KEYWORD);
			setState(2207);
			operator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixOperatorDeclarationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public PostfixOperatorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixOperatorDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPostfixOperatorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PostfixOperatorDeclarationContext postfixOperatorDeclaration() throws RecognitionException {
		PostfixOperatorDeclarationContext _localctx = new PostfixOperatorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 432, RULE_postfixOperatorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2209);
			if (!(testLN(1, "postfix"))) throw new FailedPredicateException(this, "testLN(1, \"postfix\")");
			setState(2210);
			match(IDENTIFIER);
			setState(2211);
			match(OPERATOR_KEYWORD);
			setState(2212);
			operator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InfixOperatorDeclarationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public InfixOperatorGroupContext infixOperatorGroup() {
			return getRuleContext(InfixOperatorGroupContext.class,0);
		}
		public InfixOperatorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_infixOperatorDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInfixOperatorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InfixOperatorDeclarationContext infixOperatorDeclaration() throws RecognitionException {
		InfixOperatorDeclarationContext _localctx = new InfixOperatorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 434, RULE_infixOperatorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2214);
			if (!(testLN(1, "infix"))) throw new FailedPredicateException(this, "testLN(1, \"infix\")");
			setState(2215);
			match(IDENTIFIER);
			setState(2216);
			match(OPERATOR_KEYWORD);
			setState(2217);
			operator();
			setState(2219);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,270,_ctx) ) {
			case 1:
				{
				setState(2218);
				infixOperatorGroup();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InfixOperatorGroupContext extends ParserRuleContext {
		public PrecedenceGroupNameContext precedenceGroupName() {
			return getRuleContext(PrecedenceGroupNameContext.class,0);
		}
		public InfixOperatorGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_infixOperatorGroup; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitInfixOperatorGroup(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InfixOperatorGroupContext infixOperatorGroup() throws RecognitionException {
		InfixOperatorGroupContext _localctx = new InfixOperatorGroupContext(_ctx, getState());
		enterRule(_localctx, 436, RULE_infixOperatorGroup);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2221);
			match(COLON);
			setState(2222);
			precedenceGroupName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupDeclarationContext extends ParserRuleContext {
		public PrecedenceGroupNameContext precedenceGroupName() {
			return getRuleContext(PrecedenceGroupNameContext.class,0);
		}
		public PrecedenceGroupAttributesContext precedenceGroupAttributes() {
			return getRuleContext(PrecedenceGroupAttributesContext.class,0);
		}
		public PrecedenceGroupDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupDeclaration; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupDeclarationContext precedenceGroupDeclaration() throws RecognitionException {
		PrecedenceGroupDeclarationContext _localctx = new PrecedenceGroupDeclarationContext(_ctx, getState());
		enterRule(_localctx, 438, RULE_precedenceGroupDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2224);
			match(PRECEDENCEGROUP);
			setState(2225);
			precedenceGroupName();
			setState(2226);
			match(LEFT_BRACE);
			setState(2228);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,271,_ctx) ) {
			case 1:
				{
				setState(2227);
				precedenceGroupAttributes();
				}
				break;
			}
			setState(2230);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupAttributesContext extends ParserRuleContext {
		public List<PrecedenceGroupAttributeContext> precedenceGroupAttribute() {
			return getRuleContexts(PrecedenceGroupAttributeContext.class);
		}
		public PrecedenceGroupAttributeContext precedenceGroupAttribute(int i) {
			return getRuleContext(PrecedenceGroupAttributeContext.class,i);
		}
		public PrecedenceGroupAttributesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupAttributes; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupAttributes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupAttributesContext precedenceGroupAttributes() throws RecognitionException {
		PrecedenceGroupAttributesContext _localctx = new PrecedenceGroupAttributesContext(_ctx, getState());
		enterRule(_localctx, 440, RULE_precedenceGroupAttributes);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2233); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2232);
					precedenceGroupAttribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2235); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,272,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupAttributeContext extends ParserRuleContext {
		public PrecedenceGroupRelationContext precedenceGroupRelation() {
			return getRuleContext(PrecedenceGroupRelationContext.class,0);
		}
		public PrecedenceGroupAssignmentContext precedenceGroupAssignment() {
			return getRuleContext(PrecedenceGroupAssignmentContext.class,0);
		}
		public PrecedenceGroupAssociativityContext precedenceGroupAssociativity() {
			return getRuleContext(PrecedenceGroupAssociativityContext.class,0);
		}
		public PrecedenceGroupAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupAttribute; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupAttribute(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupAttributeContext precedenceGroupAttribute() throws RecognitionException {
		PrecedenceGroupAttributeContext _localctx = new PrecedenceGroupAttributeContext(_ctx, getState());
		enterRule(_localctx, 442, RULE_precedenceGroupAttribute);
		try {
			setState(2240);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,273,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2237);
				precedenceGroupRelation();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2238);
				precedenceGroupAssignment();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2239);
				precedenceGroupAssociativity();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupRelationContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public PrecedenceGroupNamesContext precedenceGroupNames() {
			return getRuleContext(PrecedenceGroupNamesContext.class,0);
		}
		public PrecedenceGroupRelationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupRelation; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupRelation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupRelationContext precedenceGroupRelation() throws RecognitionException {
		PrecedenceGroupRelationContext _localctx = new PrecedenceGroupRelationContext(_ctx, getState());
		enterRule(_localctx, 444, RULE_precedenceGroupRelation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2242);
			if (!(testLN(1, "higherThan", "lowerThan"))) throw new FailedPredicateException(this, "testLN(1, \"higherThan\", \"lowerThan\")");
			setState(2243);
			match(IDENTIFIER);
			setState(2244);
			match(COLON);
			setState(2245);
			precedenceGroupNames();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupAssignmentContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public BooleanLiteralContext booleanLiteral() {
			return getRuleContext(BooleanLiteralContext.class,0);
		}
		public PrecedenceGroupAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupAssignment; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupAssignment(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupAssignmentContext precedenceGroupAssignment() throws RecognitionException {
		PrecedenceGroupAssignmentContext _localctx = new PrecedenceGroupAssignmentContext(_ctx, getState());
		enterRule(_localctx, 446, RULE_precedenceGroupAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2247);
			if (!(testLN(1, "assignment"))) throw new FailedPredicateException(this, "testLN(1, \"assignment\")");
			setState(2248);
			match(IDENTIFIER);
			setState(2249);
			match(COLON);
			setState(2250);
			booleanLiteral();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupAssociativityContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(SwiftParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(SwiftParser.IDENTIFIER, i);
		}
		public PrecedenceGroupAssociativityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupAssociativity; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupAssociativity(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupAssociativityContext precedenceGroupAssociativity() throws RecognitionException {
		PrecedenceGroupAssociativityContext _localctx = new PrecedenceGroupAssociativityContext(_ctx, getState());
		enterRule(_localctx, 448, RULE_precedenceGroupAssociativity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2252);
			if (!(testLN(1, "associativity"))) throw new FailedPredicateException(this, "testLN(1, \"associativity\")");
			setState(2253);
			match(IDENTIFIER);
			setState(2254);
			match(COLON);
			setState(2255);
			if (!(testLN(1, "left", "right", "none"))) throw new FailedPredicateException(this, "testLN(1, \"left\", \"right\", \"none\")");
			setState(2256);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupNamesContext extends ParserRuleContext {
		public List<PrecedenceGroupNameContext> precedenceGroupName() {
			return getRuleContexts(PrecedenceGroupNameContext.class);
		}
		public PrecedenceGroupNameContext precedenceGroupName(int i) {
			return getRuleContext(PrecedenceGroupNameContext.class,i);
		}
		public PrecedenceGroupNamesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupNames; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupNames(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupNamesContext precedenceGroupNames() throws RecognitionException {
		PrecedenceGroupNamesContext _localctx = new PrecedenceGroupNamesContext(_ctx, getState());
		enterRule(_localctx, 450, RULE_precedenceGroupNames);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2258);
			precedenceGroupName();
			setState(2263);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,274,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2259);
					match(COMMA);
					setState(2260);
					precedenceGroupName();
					}
					} 
				}
				setState(2265);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,274,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrecedenceGroupNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PrecedenceGroupNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_precedenceGroupName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPrecedenceGroupName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrecedenceGroupNameContext precedenceGroupName() throws RecognitionException {
		PrecedenceGroupNameContext _localctx = new PrecedenceGroupNameContext(_ctx, getState());
		enterRule(_localctx, 452, RULE_precedenceGroupName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2266);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationModifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public AccessLevelModifierContext accessLevelModifier() {
			return getRuleContext(AccessLevelModifierContext.class,0);
		}
		public MutationModifierContext mutationModifier() {
			return getRuleContext(MutationModifierContext.class,0);
		}
		public DeclarationModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationModifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDeclarationModifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeclarationModifierContext declarationModifier() throws RecognitionException {
		DeclarationModifierContext _localctx = new DeclarationModifierContext(_ctx, getState());
		enterRule(_localctx, 454, RULE_declarationModifier);
		try {
			setState(2274);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,275,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2268);
				match(CLASS);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2269);
				match(STATIC);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2270);
				if (!(testLN(1, "convenience", "dynamic", "final", "infix", "lazy", "optional", "override", "postfix", "prefix", "required", "unowned", "unowned(safe)", "unowned(unsafe)", "weak"))) throw new FailedPredicateException(this, "testLN(1, \"convenience\", \"dynamic\", \"final\", \"infix\", \"lazy\", \"optional\", \"override\", \"postfix\", \"prefix\", \"required\", \"unowned\", \"unowned(safe)\", \"unowned(unsafe)\", \"weak\")");
				setState(2271);
				match(IDENTIFIER);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2272);
				accessLevelModifier();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2273);
				mutationModifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationModifiersContext extends ParserRuleContext {
		public List<DeclarationModifierContext> declarationModifier() {
			return getRuleContexts(DeclarationModifierContext.class);
		}
		public DeclarationModifierContext declarationModifier(int i) {
			return getRuleContext(DeclarationModifierContext.class,i);
		}
		public DeclarationModifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationModifiers; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitDeclarationModifiers(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeclarationModifiersContext declarationModifiers() throws RecognitionException {
		DeclarationModifiersContext _localctx = new DeclarationModifiersContext(_ctx, getState());
		enterRule(_localctx, 456, RULE_declarationModifiers);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2277); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2276);
					declarationModifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2279); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,276,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AccessLevelModifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public AccessLevelModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accessLevelModifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAccessLevelModifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AccessLevelModifierContext accessLevelModifier() throws RecognitionException {
		AccessLevelModifierContext _localctx = new AccessLevelModifierContext(_ctx, getState());
		enterRule(_localctx, 458, RULE_accessLevelModifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2281);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FILEPRIVATE) | (1L << INTERNAL) | (1L << OPEN) | (1L << PRIVATE) | (1L << PUBLIC))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(2286);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,277,_ctx) ) {
			case 1:
				{
				setState(2282);
				match(LEFT_PARENTHESIS);
				setState(2283);
				if (!(testLN(1, "set"))) throw new FailedPredicateException(this, "testLN(1, \"set\")");
				setState(2284);
				match(IDENTIFIER);
				setState(2285);
				match(RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MutationModifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(SwiftParser.IDENTIFIER, 0); }
		public MutationModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mutationModifier; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitMutationModifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MutationModifierContext mutationModifier() throws RecognitionException {
		MutationModifierContext _localctx = new MutationModifierContext(_ctx, getState());
		enterRule(_localctx, 460, RULE_mutationModifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2288);
			if (!(testLN(1, "mutating", "nomutating"))) throw new FailedPredicateException(this, "testLN(1, \"mutating\", \"nomutating\")");
			setState(2289);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeContext extends ParserRuleContext {
		public AttributeNameContext attributeName() {
			return getRuleContext(AttributeNameContext.class,0);
		}
		public AttributeArgumentClauseContext attributeArgumentClause() {
			return getRuleContext(AttributeArgumentClauseContext.class,0);
		}
		public AttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attribute; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAttribute(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AttributeContext attribute() throws RecognitionException {
		AttributeContext _localctx = new AttributeContext(_ctx, getState());
		enterRule(_localctx, 462, RULE_attribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2291);
			match(AT);
			setState(2292);
			attributeName();
			setState(2294);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,278,_ctx) ) {
			case 1:
				{
				setState(2293);
				attributeArgumentClause();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public AttributeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeName; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAttributeName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AttributeNameContext attributeName() throws RecognitionException {
		AttributeNameContext _localctx = new AttributeNameContext(_ctx, getState());
		enterRule(_localctx, 464, RULE_attributeName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2296);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributeArgumentClauseContext extends ParserRuleContext {
		public BalancedTokensContext balancedTokens() {
			return getRuleContext(BalancedTokensContext.class,0);
		}
		public AttributeArgumentClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributeArgumentClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAttributeArgumentClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AttributeArgumentClauseContext attributeArgumentClause() throws RecognitionException {
		AttributeArgumentClauseContext _localctx = new AttributeArgumentClauseContext(_ctx, getState());
		enterRule(_localctx, 466, RULE_attributeArgumentClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2298);
			match(LEFT_PARENTHESIS);
			setState(2300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << NIL) | (1L << TRUE))) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (AMPERSAND - 71)) | (1L << (EQUAL - 71)) | (1L << (EXCLAMATION - 71)) | (1L << (GRAVE - 71)) | (1L << (LEFT_BRACE - 71)) | (1L << (LEFT_BRACKET - 71)) | (1L << (LEFT_PARENTHESIS - 71)) | (1L << (PERIOD - 71)) | (1L << (QUESTION - 71)) | (1L << (ASTERISK - 71)) | (1L << (CARET - 71)) | (1L << (GREATER_THAN - 71)) | (1L << (LESS_THAN - 71)) | (1L << (MINUS - 71)) | (1L << (PERCENT - 71)) | (1L << (PIPE - 71)) | (1L << (PLUS - 71)) | (1L << (SLASH - 71)) | (1L << (TILDE - 71)) | (1L << (IDENTIFIER - 71)) | (1L << (IMPLICIT_PARAMETER_NAME - 71)) | (1L << (BINARY_LITERAL - 71)) | (1L << (OCTAL_LITERAL - 71)) | (1L << (DECIMAL_DIGITS - 71)) | (1L << (DECIMAL_LITERAL - 71)) | (1L << (HEXADECIMAL_LITERAL - 71)) | (1L << (FLOATING_POINT_LITERAL - 71)) | (1L << (STATIC_STRING_LITERAL - 71)) | (1L << (INTERPOLATED_STRING_LITERAL - 71)) | (1L << (OPERATOR_HEAD_OTHER - 71)))) != 0)) {
				{
				setState(2299);
				balancedTokens();
				}
			}

			setState(2302);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AttributesContext extends ParserRuleContext {
		public List<AttributeContext> attribute() {
			return getRuleContexts(AttributeContext.class);
		}
		public AttributeContext attribute(int i) {
			return getRuleContext(AttributeContext.class,i);
		}
		public AttributesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attributes; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAttributes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AttributesContext attributes() throws RecognitionException {
		AttributesContext _localctx = new AttributesContext(_ctx, getState());
		enterRule(_localctx, 468, RULE_attributes);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2305); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2304);
					attribute();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2307); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,280,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BalancedTokensContext extends ParserRuleContext {
		public List<BalancedTokenContext> balancedToken() {
			return getRuleContexts(BalancedTokenContext.class);
		}
		public BalancedTokenContext balancedToken(int i) {
			return getRuleContext(BalancedTokenContext.class,i);
		}
		public BalancedTokensContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_balancedTokens; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBalancedTokens(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BalancedTokensContext balancedTokens() throws RecognitionException {
		BalancedTokensContext _localctx = new BalancedTokensContext(_ctx, getState());
		enterRule(_localctx, 470, RULE_balancedTokens);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2310); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(2309);
				balancedToken();
				}
				}
				setState(2312); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << FALSE) | (1L << NIL) | (1L << TRUE))) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (AMPERSAND - 71)) | (1L << (EQUAL - 71)) | (1L << (EXCLAMATION - 71)) | (1L << (GRAVE - 71)) | (1L << (LEFT_BRACE - 71)) | (1L << (LEFT_BRACKET - 71)) | (1L << (LEFT_PARENTHESIS - 71)) | (1L << (PERIOD - 71)) | (1L << (QUESTION - 71)) | (1L << (ASTERISK - 71)) | (1L << (CARET - 71)) | (1L << (GREATER_THAN - 71)) | (1L << (LESS_THAN - 71)) | (1L << (MINUS - 71)) | (1L << (PERCENT - 71)) | (1L << (PIPE - 71)) | (1L << (PLUS - 71)) | (1L << (SLASH - 71)) | (1L << (TILDE - 71)) | (1L << (IDENTIFIER - 71)) | (1L << (IMPLICIT_PARAMETER_NAME - 71)) | (1L << (BINARY_LITERAL - 71)) | (1L << (OCTAL_LITERAL - 71)) | (1L << (DECIMAL_DIGITS - 71)) | (1L << (DECIMAL_LITERAL - 71)) | (1L << (HEXADECIMAL_LITERAL - 71)) | (1L << (FLOATING_POINT_LITERAL - 71)) | (1L << (STATIC_STRING_LITERAL - 71)) | (1L << (INTERPOLATED_STRING_LITERAL - 71)) | (1L << (OPERATOR_HEAD_OTHER - 71)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BalancedTokenContext extends ParserRuleContext {
		public BalancedTokensContext balancedTokens() {
			return getRuleContext(BalancedTokensContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public OperatorContext operator() {
			return getRuleContext(OperatorContext.class,0);
		}
		public BalancedTokenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_balancedToken; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitBalancedToken(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BalancedTokenContext balancedToken() throws RecognitionException {
		BalancedTokenContext _localctx = new BalancedTokenContext(_ctx, getState());
		enterRule(_localctx, 472, RULE_balancedToken);
		try {
			setState(2329);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEFT_PARENTHESIS:
				enterOuterAlt(_localctx, 1);
				{
				setState(2314);
				match(LEFT_PARENTHESIS);
				setState(2315);
				balancedTokens();
				setState(2316);
				match(RIGHT_PARENTHESIS);
				}
				break;
			case LEFT_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(2318);
				match(LEFT_BRACKET);
				setState(2319);
				balancedTokens();
				setState(2320);
				match(RIGHT_BRACKET);
				}
				break;
			case LEFT_BRACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(2322);
				match(LEFT_BRACE);
				setState(2323);
				balancedTokens();
				setState(2324);
				match(RIGHT_BRACE);
				}
				break;
			case GRAVE:
			case IDENTIFIER:
			case IMPLICIT_PARAMETER_NAME:
				enterOuterAlt(_localctx, 4);
				{
				setState(2326);
				identifier();
				}
				break;
			case FALSE:
			case NIL:
			case TRUE:
			case BINARY_LITERAL:
			case OCTAL_LITERAL:
			case DECIMAL_DIGITS:
			case DECIMAL_LITERAL:
			case HEXADECIMAL_LITERAL:
			case FLOATING_POINT_LITERAL:
			case STATIC_STRING_LITERAL:
			case INTERPOLATED_STRING_LITERAL:
				enterOuterAlt(_localctx, 5);
				{
				setState(2327);
				literal();
				}
				break;
			case AMPERSAND:
			case EQUAL:
			case EXCLAMATION:
			case PERIOD:
			case QUESTION:
			case ASTERISK:
			case CARET:
			case GREATER_THAN:
			case LESS_THAN:
			case MINUS:
			case PERCENT:
			case PIPE:
			case PLUS:
			case SLASH:
			case TILDE:
			case OPERATOR_HEAD_OTHER:
				enterOuterAlt(_localctx, 6);
				{
				setState(2328);
				operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatternContext extends ParserRuleContext {
		public WildcardPatternContext wildcardPattern() {
			return getRuleContext(WildcardPatternContext.class,0);
		}
		public IdentifierPatternContext identifierPattern() {
			return getRuleContext(IdentifierPatternContext.class,0);
		}
		public TuplePatternContext tuplePattern() {
			return getRuleContext(TuplePatternContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public ValueBindingPatternContext valueBindingPattern() {
			return getRuleContext(ValueBindingPatternContext.class,0);
		}
		public EnumCasePatternContext enumCasePattern() {
			return getRuleContext(EnumCasePatternContext.class,0);
		}
		public OptionalPatternContext optionalPattern() {
			return getRuleContext(OptionalPatternContext.class,0);
		}
		public TypeCastingPatternContext typeCastingPattern() {
			return getRuleContext(TypeCastingPatternContext.class,0);
		}
		public ExpressionPatternContext expressionPattern() {
			return getRuleContext(ExpressionPatternContext.class,0);
		}
		public PatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PatternContext pattern() throws RecognitionException {
		PatternContext _localctx = new PatternContext(_ctx, getState());
		enterRule(_localctx, 474, RULE_pattern);
		try {
			setState(2344);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,285,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2334);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(2331);
					wildcardPattern();
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(2332);
					identifierPattern();
					}
					break;
				case LEFT_PARENTHESIS:
					{
					setState(2333);
					tuplePattern();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2337);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,284,_ctx) ) {
				case 1:
					{
					setState(2336);
					typeAnnotation();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2339);
				valueBindingPattern();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(2340);
				enumCasePattern();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(2341);
				optionalPattern();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(2342);
				typeCastingPattern();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(2343);
				expressionPattern();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WildcardPatternContext extends ParserRuleContext {
		public WildcardPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wildcardPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitWildcardPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WildcardPatternContext wildcardPattern() throws RecognitionException {
		WildcardPatternContext _localctx = new WildcardPatternContext(_ctx, getState());
		enterRule(_localctx, 476, RULE_wildcardPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2346);
			match(UNDERSCORE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierPatternContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIdentifierPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdentifierPatternContext identifierPattern() throws RecognitionException {
		IdentifierPatternContext _localctx = new IdentifierPatternContext(_ctx, getState());
		enterRule(_localctx, 478, RULE_identifierPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2348);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueBindingPatternContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public ValueBindingPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueBindingPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitValueBindingPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ValueBindingPatternContext valueBindingPattern() throws RecognitionException {
		ValueBindingPatternContext _localctx = new ValueBindingPatternContext(_ctx, getState());
		enterRule(_localctx, 480, RULE_valueBindingPattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2350);
			_la = _input.LA(1);
			if ( !(_la==LET || _la==VAR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(2351);
			pattern();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TuplePatternContext extends ParserRuleContext {
		public TuplePatternElementListContext tuplePatternElementList() {
			return getRuleContext(TuplePatternElementListContext.class,0);
		}
		public TuplePatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuplePattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTuplePattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TuplePatternContext tuplePattern() throws RecognitionException {
		TuplePatternContext _localctx = new TuplePatternContext(_ctx, getState());
		enterRule(_localctx, 482, RULE_tuplePattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2353);
			match(LEFT_PARENTHESIS);
			setState(2355);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,286,_ctx) ) {
			case 1:
				{
				setState(2354);
				tuplePatternElementList();
				}
				break;
			}
			setState(2357);
			match(RIGHT_PARENTHESIS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TuplePatternElementListContext extends ParserRuleContext {
		public List<TuplePatternElementContext> tuplePatternElement() {
			return getRuleContexts(TuplePatternElementContext.class);
		}
		public TuplePatternElementContext tuplePatternElement(int i) {
			return getRuleContext(TuplePatternElementContext.class,i);
		}
		public TuplePatternElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuplePatternElementList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTuplePatternElementList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TuplePatternElementListContext tuplePatternElementList() throws RecognitionException {
		TuplePatternElementListContext _localctx = new TuplePatternElementListContext(_ctx, getState());
		enterRule(_localctx, 484, RULE_tuplePatternElementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2359);
			tuplePatternElement();
			setState(2364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2360);
				match(COMMA);
				setState(2361);
				tuplePatternElement();
				}
				}
				setState(2366);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TuplePatternElementContext extends ParserRuleContext {
		public PatternContext pattern() {
			return getRuleContext(PatternContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TuplePatternElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuplePatternElement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTuplePatternElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TuplePatternElementContext tuplePatternElement() throws RecognitionException {
		TuplePatternElementContext _localctx = new TuplePatternElementContext(_ctx, getState());
		enterRule(_localctx, 486, RULE_tuplePatternElement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2372);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,289,_ctx) ) {
			case 1:
				{
				setState(2369);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(2367);
					match(UNDERSCORE);
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(2368);
					identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2371);
				match(COLON);
				}
				break;
			}
			setState(2374);
			pattern();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumCasePatternContext extends ParserRuleContext {
		public EnumCaseNameContext enumCaseName() {
			return getRuleContext(EnumCaseNameContext.class,0);
		}
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public TuplePatternContext tuplePattern() {
			return getRuleContext(TuplePatternContext.class,0);
		}
		public EnumCasePatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumCasePattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitEnumCasePattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumCasePatternContext enumCasePattern() throws RecognitionException {
		EnumCasePatternContext _localctx = new EnumCasePatternContext(_ctx, getState());
		enterRule(_localctx, 488, RULE_enumCasePattern);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2377);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 78)) & ~0x3f) == 0 && ((1L << (_la - 78)) & ((1L << (GRAVE - 78)) | (1L << (IDENTIFIER - 78)) | (1L << (IMPLICIT_PARAMETER_NAME - 78)))) != 0)) {
				{
				setState(2376);
				typeIdentifier();
				}
			}

			setState(2379);
			match(PERIOD);
			setState(2380);
			enumCaseName();
			setState(2382);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,291,_ctx) ) {
			case 1:
				{
				setState(2381);
				tuplePattern();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalPatternContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public OptionalPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitOptionalPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OptionalPatternContext optionalPattern() throws RecognitionException {
		OptionalPatternContext _localctx = new OptionalPatternContext(_ctx, getState());
		enterRule(_localctx, 490, RULE_optionalPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2384);
			identifier();
			setState(2385);
			if (!(isPostOp(1))) throw new FailedPredicateException(this, "isPostOp(1)");
			setState(2386);
			match(QUESTION);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeCastingPatternContext extends ParserRuleContext {
		public IsPatternContext isPattern() {
			return getRuleContext(IsPatternContext.class,0);
		}
		public AsPatternContext asPattern() {
			return getRuleContext(AsPatternContext.class,0);
		}
		public TypeCastingPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeCastingPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitTypeCastingPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeCastingPatternContext typeCastingPattern() throws RecognitionException {
		TypeCastingPatternContext _localctx = new TypeCastingPatternContext(_ctx, getState());
		enterRule(_localctx, 492, RULE_typeCastingPattern);
		try {
			setState(2390);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,292,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2388);
				isPattern();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2389);
				asPattern();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IsPatternContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public IsPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_isPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitIsPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IsPatternContext isPattern() throws RecognitionException {
		IsPatternContext _localctx = new IsPatternContext(_ctx, getState());
		enterRule(_localctx, 494, RULE_isPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2392);
			match(IS);
			setState(2393);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AsPatternContext extends ParserRuleContext {
		public ValueBindingPatternContext valueBindingPattern() {
			return getRuleContext(ValueBindingPatternContext.class,0);
		}
		public EnumCasePatternContext enumCasePattern() {
			return getRuleContext(EnumCasePatternContext.class,0);
		}
		public OptionalPatternContext optionalPattern() {
			return getRuleContext(OptionalPatternContext.class,0);
		}
		public IsPatternContext isPattern() {
			return getRuleContext(IsPatternContext.class,0);
		}
		public ExpressionPatternContext expressionPattern() {
			return getRuleContext(ExpressionPatternContext.class,0);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public WildcardPatternContext wildcardPattern() {
			return getRuleContext(WildcardPatternContext.class,0);
		}
		public IdentifierPatternContext identifierPattern() {
			return getRuleContext(IdentifierPatternContext.class,0);
		}
		public TuplePatternContext tuplePattern() {
			return getRuleContext(TuplePatternContext.class,0);
		}
		public TypeAnnotationContext typeAnnotation() {
			return getRuleContext(TypeAnnotationContext.class,0);
		}
		public AsPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitAsPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AsPatternContext asPattern() throws RecognitionException {
		AsPatternContext _localctx = new AsPatternContext(_ctx, getState());
		enterRule(_localctx, 496, RULE_asPattern);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2408);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,295,_ctx) ) {
			case 1:
				{
				setState(2398);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case UNDERSCORE:
					{
					setState(2395);
					wildcardPattern();
					}
					break;
				case GRAVE:
				case IDENTIFIER:
				case IMPLICIT_PARAMETER_NAME:
					{
					setState(2396);
					identifierPattern();
					}
					break;
				case LEFT_PARENTHESIS:
					{
					setState(2397);
					tuplePattern();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2401);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COLON) {
					{
					setState(2400);
					typeAnnotation();
					}
				}

				}
				break;
			case 2:
				{
				setState(2403);
				valueBindingPattern();
				}
				break;
			case 3:
				{
				setState(2404);
				enumCasePattern();
				}
				break;
			case 4:
				{
				setState(2405);
				optionalPattern();
				}
				break;
			case 5:
				{
				setState(2406);
				isPattern();
				}
				break;
			case 6:
				{
				setState(2407);
				expressionPattern();
				}
				break;
			}
			setState(2412); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(2410);
					match(AS);
					setState(2411);
					type(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(2414); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,296,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionPatternContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionPatternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionPattern; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitExpressionPattern(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionPatternContext expressionPattern() throws RecognitionException {
		ExpressionPatternContext _localctx = new ExpressionPatternContext(_ctx, getState());
		enterRule(_localctx, 498, RULE_expressionPattern);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2416);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericParameterClauseContext extends ParserRuleContext {
		public GenericParameterListContext genericParameterList() {
			return getRuleContext(GenericParameterListContext.class,0);
		}
		public GenericParameterClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericParameterClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericParameterClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericParameterClauseContext genericParameterClause() throws RecognitionException {
		GenericParameterClauseContext _localctx = new GenericParameterClauseContext(_ctx, getState());
		enterRule(_localctx, 500, RULE_genericParameterClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2418);
			match(LESS_THAN);
			setState(2419);
			genericParameterList();
			setState(2420);
			match(GREATER_THAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericParameterListContext extends ParserRuleContext {
		public List<GenericParameterContext> genericParameter() {
			return getRuleContexts(GenericParameterContext.class);
		}
		public GenericParameterContext genericParameter(int i) {
			return getRuleContext(GenericParameterContext.class,i);
		}
		public GenericParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericParameterList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericParameterList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericParameterListContext genericParameterList() throws RecognitionException {
		GenericParameterListContext _localctx = new GenericParameterListContext(_ctx, getState());
		enterRule(_localctx, 502, RULE_genericParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2422);
			genericParameter();
			setState(2427);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2423);
				match(COMMA);
				setState(2424);
				genericParameter();
				}
				}
				setState(2429);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericParameterContext extends ParserRuleContext {
		public TypeNameContext typeName() {
			return getRuleContext(TypeNameContext.class,0);
		}
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public ProtocolCompositionTypeContext protocolCompositionType() {
			return getRuleContext(ProtocolCompositionTypeContext.class,0);
		}
		public GenericParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericParameter; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericParameterContext genericParameter() throws RecognitionException {
		GenericParameterContext _localctx = new GenericParameterContext(_ctx, getState());
		enterRule(_localctx, 504, RULE_genericParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2430);
			typeName();
			setState(2436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(2431);
				match(COLON);
				setState(2434);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,298,_ctx) ) {
				case 1:
					{
					setState(2432);
					typeIdentifier();
					}
					break;
				case 2:
					{
					setState(2433);
					protocolCompositionType();
					}
					break;
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericWhereClauseContext extends ParserRuleContext {
		public RequirementListContext requirementList() {
			return getRuleContext(RequirementListContext.class,0);
		}
		public GenericWhereClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericWhereClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericWhereClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericWhereClauseContext genericWhereClause() throws RecognitionException {
		GenericWhereClauseContext _localctx = new GenericWhereClauseContext(_ctx, getState());
		enterRule(_localctx, 506, RULE_genericWhereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2438);
			match(WHERE);
			setState(2439);
			requirementList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RequirementListContext extends ParserRuleContext {
		public List<RequirementContext> requirement() {
			return getRuleContexts(RequirementContext.class);
		}
		public RequirementContext requirement(int i) {
			return getRuleContext(RequirementContext.class,i);
		}
		public RequirementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_requirementList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRequirementList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RequirementListContext requirementList() throws RecognitionException {
		RequirementListContext _localctx = new RequirementListContext(_ctx, getState());
		enterRule(_localctx, 508, RULE_requirementList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(2441);
			requirement();
			setState(2446);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,300,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(2442);
					match(COMMA);
					setState(2443);
					requirement();
					}
					} 
				}
				setState(2448);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,300,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RequirementContext extends ParserRuleContext {
		public ConformanceRequirementContext conformanceRequirement() {
			return getRuleContext(ConformanceRequirementContext.class,0);
		}
		public SameTypeRequirementContext sameTypeRequirement() {
			return getRuleContext(SameTypeRequirementContext.class,0);
		}
		public RequirementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_requirement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitRequirement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RequirementContext requirement() throws RecognitionException {
		RequirementContext _localctx = new RequirementContext(_ctx, getState());
		enterRule(_localctx, 510, RULE_requirement);
		try {
			setState(2451);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,301,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(2449);
				conformanceRequirement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(2450);
				sameTypeRequirement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConformanceRequirementContext extends ParserRuleContext {
		public List<TypeIdentifierContext> typeIdentifier() {
			return getRuleContexts(TypeIdentifierContext.class);
		}
		public TypeIdentifierContext typeIdentifier(int i) {
			return getRuleContext(TypeIdentifierContext.class,i);
		}
		public ProtocolCompositionTypeContext protocolCompositionType() {
			return getRuleContext(ProtocolCompositionTypeContext.class,0);
		}
		public ConformanceRequirementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conformanceRequirement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitConformanceRequirement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConformanceRequirementContext conformanceRequirement() throws RecognitionException {
		ConformanceRequirementContext _localctx = new ConformanceRequirementContext(_ctx, getState());
		enterRule(_localctx, 512, RULE_conformanceRequirement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2453);
			typeIdentifier();
			setState(2454);
			match(COLON);
			setState(2457);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,302,_ctx) ) {
			case 1:
				{
				setState(2455);
				typeIdentifier();
				}
				break;
			case 2:
				{
				setState(2456);
				protocolCompositionType();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SameTypeRequirementContext extends ParserRuleContext {
		public TypeIdentifierContext typeIdentifier() {
			return getRuleContext(TypeIdentifierContext.class,0);
		}
		public BinaryOperatorContext binaryOperator() {
			return getRuleContext(BinaryOperatorContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public SameTypeRequirementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sameTypeRequirement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitSameTypeRequirement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SameTypeRequirementContext sameTypeRequirement() throws RecognitionException {
		SameTypeRequirementContext _localctx = new SameTypeRequirementContext(_ctx, getState());
		enterRule(_localctx, 514, RULE_sameTypeRequirement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2459);
			typeIdentifier();
			setState(2460);
			if (!(testLN(1, "=="))) throw new FailedPredicateException(this, "testLN(1, \"==\")");
			setState(2461);
			binaryOperator();
			setState(2462);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericArgumentClauseContext extends ParserRuleContext {
		public GenericArgumentListContext genericArgumentList() {
			return getRuleContext(GenericArgumentListContext.class,0);
		}
		public GenericArgumentClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericArgumentClause; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericArgumentClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericArgumentClauseContext genericArgumentClause() throws RecognitionException {
		GenericArgumentClauseContext _localctx = new GenericArgumentClauseContext(_ctx, getState());
		enterRule(_localctx, 516, RULE_genericArgumentClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2464);
			match(LESS_THAN);
			setState(2465);
			genericArgumentList();
			setState(2466);
			match(GREATER_THAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericArgumentListContext extends ParserRuleContext {
		public List<GenericArgumentContext> genericArgument() {
			return getRuleContexts(GenericArgumentContext.class);
		}
		public GenericArgumentContext genericArgument(int i) {
			return getRuleContext(GenericArgumentContext.class,i);
		}
		public GenericArgumentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericArgumentList; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericArgumentList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericArgumentListContext genericArgumentList() throws RecognitionException {
		GenericArgumentListContext _localctx = new GenericArgumentListContext(_ctx, getState());
		enterRule(_localctx, 518, RULE_genericArgumentList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2468);
			genericArgument();
			setState(2473);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(2469);
				match(COMMA);
				setState(2470);
				genericArgument();
				}
				}
				setState(2475);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GenericArgumentContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public GenericArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericArgument; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof SwiftParserVisitor ) return ((SwiftParserVisitor<? extends T>)visitor).visitGenericArgument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GenericArgumentContext genericArgument() throws RecognitionException {
		GenericArgumentContext _localctx = new GenericArgumentContext(_ctx, getState());
		enterRule(_localctx, 520, RULE_genericArgument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(2476);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return identifier_sempred((IdentifierContext)_localctx, predIndex);
		case 9:
			return operator_sempred((OperatorContext)_localctx, predIndex);
		case 14:
			return prefixOperator_sempred((PrefixOperatorContext)_localctx, predIndex);
		case 15:
			return postfixOperator_sempred((PostfixOperatorContext)_localctx, predIndex);
		case 16:
			return binaryOperator_sempred((BinaryOperatorContext)_localctx, predIndex);
		case 17:
			return type_sempred((TypeContext)_localctx, predIndex);
		case 24:
			return functionTypeArgumentClause_sempred((FunctionTypeArgumentClauseContext)_localctx, predIndex);
		case 28:
			return protocolCompositionType_sempred((ProtocolCompositionTypeContext)_localctx, predIndex);
		case 33:
			return inOutExpression_sempred((InOutExpressionContext)_localctx, predIndex);
		case 34:
			return tryOperator_sempred((TryOperatorContext)_localctx, predIndex);
		case 36:
			return assignmentOperator_sempred((AssignmentOperatorContext)_localctx, predIndex);
		case 37:
			return conditionalOperator_sempred((ConditionalOperatorContext)_localctx, predIndex);
		case 38:
			return typeCastingOperator_sempred((TypeCastingOperatorContext)_localctx, predIndex);
		case 43:
			return playgroundLiteral_sempred((PlaygroundLiteralContext)_localctx, predIndex);
		case 56:
			return closureParameter_sempred((ClosureParameterContext)_localctx, predIndex);
		case 60:
			return captureSpecifier_sempred((CaptureSpecifierContext)_localctx, predIndex);
		case 68:
			return keyPathPostfix_sempred((KeyPathPostfixContext)_localctx, predIndex);
		case 69:
			return selectorExpression_sempred((SelectorExpressionContext)_localctx, predIndex);
		case 71:
			return postfixExpression_sempred((PostfixExpressionContext)_localctx, predIndex);
		case 77:
			return statement_sempred((StatementContext)_localctx, predIndex);
		case 114:
			return compilationCondition_sempred((CompilationConditionContext)_localctx, predIndex);
		case 115:
			return platformCondition_sempred((PlatformConditionContext)_localctx, predIndex);
		case 116:
			return operatingSystem_sempred((OperatingSystemContext)_localctx, predIndex);
		case 117:
			return architecture_sempred((ArchitectureContext)_localctx, predIndex);
		case 119:
			return lineControlStatement_sempred((LineControlStatementContext)_localctx, predIndex);
		case 120:
			return lineNumber_sempred((LineNumberContext)_localctx, predIndex);
		case 124:
			return platformName_sempred((PlatformNameContext)_localctx, predIndex);
		case 136:
			return initializer_sempred((InitializerContext)_localctx, predIndex);
		case 141:
			return getterClause_sempred((GetterClauseContext)_localctx, predIndex);
		case 142:
			return setterClause_sempred((SetterClauseContext)_localctx, predIndex);
		case 145:
			return getterKeywordClause_sempred((GetterKeywordClauseContext)_localctx, predIndex);
		case 146:
			return setterKeywordClause_sempred((SetterKeywordClauseContext)_localctx, predIndex);
		case 148:
			return willSetClause_sempred((WillSetClauseContext)_localctx, predIndex);
		case 149:
			return didSetClause_sempred((DidSetClauseContext)_localctx, predIndex);
		case 152:
			return typealiasAssignment_sempred((TypealiasAssignmentContext)_localctx, predIndex);
		case 161:
			return parameter_sempred((ParameterContext)_localctx, predIndex);
		case 164:
			return defaultArgumentClause_sempred((DefaultArgumentClauseContext)_localctx, predIndex);
		case 166:
			return unionStyleEnum_sempred((UnionStyleEnumContext)_localctx, predIndex);
		case 169:
			return unionStyleEnumCaseClause_sempred((UnionStyleEnumCaseClauseContext)_localctx, predIndex);
		case 180:
			return rawValueAssignment_sempred((RawValueAssignmentContext)_localctx, predIndex);
		case 187:
			return classDeclaration_sempred((ClassDeclarationContext)_localctx, predIndex);
		case 204:
			return initializerHead_sempred((InitializerHeadContext)_localctx, predIndex);
		case 215:
			return prefixOperatorDeclaration_sempred((PrefixOperatorDeclarationContext)_localctx, predIndex);
		case 216:
			return postfixOperatorDeclaration_sempred((PostfixOperatorDeclarationContext)_localctx, predIndex);
		case 217:
			return infixOperatorDeclaration_sempred((InfixOperatorDeclarationContext)_localctx, predIndex);
		case 222:
			return precedenceGroupRelation_sempred((PrecedenceGroupRelationContext)_localctx, predIndex);
		case 223:
			return precedenceGroupAssignment_sempred((PrecedenceGroupAssignmentContext)_localctx, predIndex);
		case 224:
			return precedenceGroupAssociativity_sempred((PrecedenceGroupAssociativityContext)_localctx, predIndex);
		case 227:
			return declarationModifier_sempred((DeclarationModifierContext)_localctx, predIndex);
		case 229:
			return accessLevelModifier_sempred((AccessLevelModifierContext)_localctx, predIndex);
		case 230:
			return mutationModifier_sempred((MutationModifierContext)_localctx, predIndex);
		case 245:
			return optionalPattern_sempred((OptionalPatternContext)_localctx, predIndex);
		case 257:
			return sameTypeRequirement_sempred((SameTypeRequirementContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean identifier_sempred(IdentifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return !testLN(-1, true, WHITESPACE);
		case 1:
			return !testLN(-1, true, WHITESPACE);
		}
		return true;
	}
	private boolean operator_sempred(OperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return !testLN(-1, true, WHITESPACE);
		case 3:
			return !testLN(-1, true, WHITESPACE);
		}
		return true;
	}
	private boolean prefixOperator_sempred(PrefixOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return isPreOp();
		}
		return true;
	}
	private boolean postfixOperator_sempred(PostfixOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return isPostOp();
		}
		return true;
	}
	private boolean binaryOperator_sempred(BinaryOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return isBinOp();
		}
		return true;
	}
	private boolean type_sempred(TypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return precpred(_ctx, 7);
		case 8:
			return isPostOp();
		case 9:
			return precpred(_ctx, 6);
		case 10:
			return isPostOp();
		case 11:
			return precpred(_ctx, 4);
		case 12:
			return testLN(1, "Type", "Protocol");
		}
		return true;
	}
	private boolean functionTypeArgumentClause_sempred(FunctionTypeArgumentClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return testLN(1, "...");
		}
		return true;
	}
	private boolean protocolCompositionType_sempred(ProtocolCompositionTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 14:
			return isBinOp(1);
		}
		return true;
	}
	private boolean inOutExpression_sempred(InOutExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 15:
			return isPreOp(1);
		}
		return true;
	}
	private boolean tryOperator_sempred(TryOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 16:
			return isPostOp(1);
		}
		return true;
	}
	private boolean assignmentOperator_sempred(AssignmentOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 17:
			return isBinOp(1);
		}
		return true;
	}
	private boolean conditionalOperator_sempred(ConditionalOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 18:
			return testLN(-1, true, WHITESPACE, LINE_BREAK) && testLN(1, true, WHITESPACE, LINE_BREAK);
		}
		return true;
	}
	private boolean typeCastingOperator_sempred(TypeCastingOperatorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 19:
			return isPostOp(1);
		}
		return true;
	}
	private boolean playgroundLiteral_sempred(PlaygroundLiteralContext _localctx, int predIndex) {
		switch (predIndex) {
		case 20:
			return testLN(1, "red");
		case 21:
			return testLN(1, "green");
		case 22:
			return testLN(1, "blue");
		case 23:
			return testLN(1, "alpha");
		case 24:
			return testLN(1, "resourceName");
		}
		return true;
	}
	private boolean closureParameter_sempred(ClosureParameterContext _localctx, int predIndex) {
		switch (predIndex) {
		case 25:
			return testLN(1, "...");
		}
		return true;
	}
	private boolean captureSpecifier_sempred(CaptureSpecifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 26:
			return testLN(1, "weak");
		case 27:
			return testLN(1, "unowned");
		case 28:
			return testLN(1, "safe", "unsafe");
		}
		return true;
	}
	private boolean keyPathPostfix_sempred(KeyPathPostfixContext _localctx, int predIndex) {
		switch (predIndex) {
		case 29:
			return isPostOp(1);
		}
		return true;
	}
	private boolean selectorExpression_sempred(SelectorExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 30:
			return testLN(1, "getter", "setter");
		}
		return true;
	}
	private boolean postfixExpression_sempred(PostfixExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 31:
			return precpred(_ctx, 8);
		case 32:
			return precpred(_ctx, 7);
		case 33:
			return !isStatementStarting();
		case 34:
			return precpred(_ctx, 6);
		case 35:
			return precpred(_ctx, 5);
		case 36:
			return precpred(_ctx, 4);
		case 37:
			return precpred(_ctx, 3);
		case 38:
			return precpred(_ctx, 2);
		case 39:
			return !testLN(-1, true, true, opLWS);
		case 40:
			return precpred(_ctx, 1);
		case 41:
			return !testLN(-1, true, true, opLWS);
		}
		return true;
	}
	private boolean statement_sempred(StatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 42:
			return isStatementStarting();
		}
		return true;
	}
	private boolean compilationCondition_sempred(CompilationConditionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 43:
			return isPreOp(1);
		case 44:
			return precpred(_ctx, 1);
		case 45:
			return testLN(1, "&&", "||");
		}
		return true;
	}
	private boolean platformCondition_sempred(PlatformConditionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 46:
			return testLN(1, "os");
		case 47:
			return testLN(1, "arch");
		case 48:
			return testLN(1, "swift");
		case 49:
			return testLN(1, ">=");
		}
		return true;
	}
	private boolean operatingSystem_sempred(OperatingSystemContext _localctx, int predIndex) {
		switch (predIndex) {
		case 50:
			return testLN(1, "macOS", "iOS", "watchOS", "tvOS");
		}
		return true;
	}
	private boolean architecture_sempred(ArchitectureContext _localctx, int predIndex) {
		switch (predIndex) {
		case 51:
			return testLN(1, "i386", "x86_64", "arm", "arm64");
		}
		return true;
	}
	private boolean lineControlStatement_sempred(LineControlStatementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 52:
			return testLN(1, "file");
		case 53:
			return testLN(1, "line");
		}
		return true;
	}
	private boolean lineNumber_sempred(LineNumberContext _localctx, int predIndex) {
		switch (predIndex) {
		case 54:
			return Integer.parseInt(_input.LT(1).getText()) > 0;
		}
		return true;
	}
	private boolean platformName_sempred(PlatformNameContext _localctx, int predIndex) {
		switch (predIndex) {
		case 55:
			return testLN(1, "iOS", "iOSApplicationExtension­", "macOS­", "macOSApplicationExtension­", "watchOS", "tvOS");
		}
		return true;
	}
	private boolean initializer_sempred(InitializerContext _localctx, int predIndex) {
		switch (predIndex) {
		case 56:
			return isBinOp(1);
		}
		return true;
	}
	private boolean getterClause_sempred(GetterClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 57:
			return testLN(1, "get");
		}
		return true;
	}
	private boolean setterClause_sempred(SetterClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 58:
			return testLN(1, "set");
		}
		return true;
	}
	private boolean getterKeywordClause_sempred(GetterKeywordClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 59:
			return testLN(1, "get");
		}
		return true;
	}
	private boolean setterKeywordClause_sempred(SetterKeywordClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 60:
			return testLN(1, "set");
		}
		return true;
	}
	private boolean willSetClause_sempred(WillSetClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 61:
			return testLN(1, "willSet");
		}
		return true;
	}
	private boolean didSetClause_sempred(DidSetClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 62:
			return testLN(1, "didSet");
		}
		return true;
	}
	private boolean typealiasAssignment_sempred(TypealiasAssignmentContext _localctx, int predIndex) {
		switch (predIndex) {
		case 63:
			return isBinOp(1);
		}
		return true;
	}
	private boolean parameter_sempred(ParameterContext _localctx, int predIndex) {
		switch (predIndex) {
		case 64:
			return testLN(1, "...");
		}
		return true;
	}
	private boolean defaultArgumentClause_sempred(DefaultArgumentClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 65:
			return isBinOp(1);
		}
		return true;
	}
	private boolean unionStyleEnum_sempred(UnionStyleEnumContext _localctx, int predIndex) {
		switch (predIndex) {
		case 66:
			return testLN(1, "indirect");
		}
		return true;
	}
	private boolean unionStyleEnumCaseClause_sempred(UnionStyleEnumCaseClauseContext _localctx, int predIndex) {
		switch (predIndex) {
		case 67:
			return testLN(1, "indirect");
		}
		return true;
	}
	private boolean rawValueAssignment_sempred(RawValueAssignmentContext _localctx, int predIndex) {
		switch (predIndex) {
		case 68:
			return isBinOp(1);
		}
		return true;
	}
	private boolean classDeclaration_sempred(ClassDeclarationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 69:
			return testLN(1, "final");
		case 70:
			return testLN(1, "final");
		}
		return true;
	}
	private boolean initializerHead_sempred(InitializerHeadContext _localctx, int predIndex) {
		switch (predIndex) {
		case 71:
			return isPostOp(1);
		}
		return true;
	}
	private boolean prefixOperatorDeclaration_sempred(PrefixOperatorDeclarationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 72:
			return testLN(1, "prefix");
		}
		return true;
	}
	private boolean postfixOperatorDeclaration_sempred(PostfixOperatorDeclarationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 73:
			return testLN(1, "postfix");
		}
		return true;
	}
	private boolean infixOperatorDeclaration_sempred(InfixOperatorDeclarationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 74:
			return testLN(1, "infix");
		}
		return true;
	}
	private boolean precedenceGroupRelation_sempred(PrecedenceGroupRelationContext _localctx, int predIndex) {
		switch (predIndex) {
		case 75:
			return testLN(1, "higherThan", "lowerThan");
		}
		return true;
	}
	private boolean precedenceGroupAssignment_sempred(PrecedenceGroupAssignmentContext _localctx, int predIndex) {
		switch (predIndex) {
		case 76:
			return testLN(1, "assignment");
		}
		return true;
	}
	private boolean precedenceGroupAssociativity_sempred(PrecedenceGroupAssociativityContext _localctx, int predIndex) {
		switch (predIndex) {
		case 77:
			return testLN(1, "associativity");
		case 78:
			return testLN(1, "left", "right", "none");
		}
		return true;
	}
	private boolean declarationModifier_sempred(DeclarationModifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 79:
			return testLN(1, "convenience", "dynamic", "final", "infix", "lazy", "optional", "override", "postfix", "prefix", "required", "unowned", "unowned(safe)", "unowned(unsafe)", "weak");
		}
		return true;
	}
	private boolean accessLevelModifier_sempred(AccessLevelModifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 80:
			return testLN(1, "set");
		}
		return true;
	}
	private boolean mutationModifier_sempred(MutationModifierContext _localctx, int predIndex) {
		switch (predIndex) {
		case 81:
			return testLN(1, "mutating", "nomutating");
		}
		return true;
	}
	private boolean optionalPattern_sempred(OptionalPatternContext _localctx, int predIndex) {
		switch (predIndex) {
		case 82:
			return isPostOp(1);
		}
		return true;
	}
	private boolean sameTypeRequirement_sempred(SameTypeRequirementContext _localctx, int predIndex) {
		switch (predIndex) {
		case 83:
			return testLN(1, "==");
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3t\u09b1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\4\u008e"+
		"\t\u008e\4\u008f\t\u008f\4\u0090\t\u0090\4\u0091\t\u0091\4\u0092\t\u0092"+
		"\4\u0093\t\u0093\4\u0094\t\u0094\4\u0095\t\u0095\4\u0096\t\u0096\4\u0097"+
		"\t\u0097\4\u0098\t\u0098\4\u0099\t\u0099\4\u009a\t\u009a\4\u009b\t\u009b"+
		"\4\u009c\t\u009c\4\u009d\t\u009d\4\u009e\t\u009e\4\u009f\t\u009f\4\u00a0"+
		"\t\u00a0\4\u00a1\t\u00a1\4\u00a2\t\u00a2\4\u00a3\t\u00a3\4\u00a4\t\u00a4"+
		"\4\u00a5\t\u00a5\4\u00a6\t\u00a6\4\u00a7\t\u00a7\4\u00a8\t\u00a8\4\u00a9"+
		"\t\u00a9\4\u00aa\t\u00aa\4\u00ab\t\u00ab\4\u00ac\t\u00ac\4\u00ad\t\u00ad"+
		"\4\u00ae\t\u00ae\4\u00af\t\u00af\4\u00b0\t\u00b0\4\u00b1\t\u00b1\4\u00b2"+
		"\t\u00b2\4\u00b3\t\u00b3\4\u00b4\t\u00b4\4\u00b5\t\u00b5\4\u00b6\t\u00b6"+
		"\4\u00b7\t\u00b7\4\u00b8\t\u00b8\4\u00b9\t\u00b9\4\u00ba\t\u00ba\4\u00bb"+
		"\t\u00bb\4\u00bc\t\u00bc\4\u00bd\t\u00bd\4\u00be\t\u00be\4\u00bf\t\u00bf"+
		"\4\u00c0\t\u00c0\4\u00c1\t\u00c1\4\u00c2\t\u00c2\4\u00c3\t\u00c3\4\u00c4"+
		"\t\u00c4\4\u00c5\t\u00c5\4\u00c6\t\u00c6\4\u00c7\t\u00c7\4\u00c8\t\u00c8"+
		"\4\u00c9\t\u00c9\4\u00ca\t\u00ca\4\u00cb\t\u00cb\4\u00cc\t\u00cc\4\u00cd"+
		"\t\u00cd\4\u00ce\t\u00ce\4\u00cf\t\u00cf\4\u00d0\t\u00d0\4\u00d1\t\u00d1"+
		"\4\u00d2\t\u00d2\4\u00d3\t\u00d3\4\u00d4\t\u00d4\4\u00d5\t\u00d5\4\u00d6"+
		"\t\u00d6\4\u00d7\t\u00d7\4\u00d8\t\u00d8\4\u00d9\t\u00d9\4\u00da\t\u00da"+
		"\4\u00db\t\u00db\4\u00dc\t\u00dc\4\u00dd\t\u00dd\4\u00de\t\u00de\4\u00df"+
		"\t\u00df\4\u00e0\t\u00e0\4\u00e1\t\u00e1\4\u00e2\t\u00e2\4\u00e3\t\u00e3"+
		"\4\u00e4\t\u00e4\4\u00e5\t\u00e5\4\u00e6\t\u00e6\4\u00e7\t\u00e7\4\u00e8"+
		"\t\u00e8\4\u00e9\t\u00e9\4\u00ea\t\u00ea\4\u00eb\t\u00eb\4\u00ec\t\u00ec"+
		"\4\u00ed\t\u00ed\4\u00ee\t\u00ee\4\u00ef\t\u00ef\4\u00f0\t\u00f0\4\u00f1"+
		"\t\u00f1\4\u00f2\t\u00f2\4\u00f3\t\u00f3\4\u00f4\t\u00f4\4\u00f5\t\u00f5"+
		"\4\u00f6\t\u00f6\4\u00f7\t\u00f7\4\u00f8\t\u00f8\4\u00f9\t\u00f9\4\u00fa"+
		"\t\u00fa\4\u00fb\t\u00fb\4\u00fc\t\u00fc\4\u00fd\t\u00fd\4\u00fe\t\u00fe"+
		"\4\u00ff\t\u00ff\4\u0100\t\u0100\4\u0101\t\u0101\4\u0102\t\u0102\4\u0103"+
		"\t\u0103\4\u0104\t\u0104\4\u0105\t\u0105\4\u0106\t\u0106\3\2\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u0217\n\3\3\4\3\4\5\4\u021b\n\4\3\4\3\4"+
		"\3\4\5\4\u0220\n\4\7\4\u0222\n\4\f\4\16\4\u0225\13\4\3\5\3\5\3\5\3\5\5"+
		"\5\u022b\n\5\3\6\3\6\5\6\u022f\n\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\13\7\13\u023c\n\13\f\13\16\13\u023f\13\13\3\13\3\13\3\13\6\13"+
		"\u0244\n\13\r\13\16\13\u0245\5\13\u0248\n\13\3\f\3\f\3\r\3\r\5\r\u024e"+
		"\n\r\3\16\3\16\3\17\3\17\5\17\u0254\n\17\3\20\3\20\3\20\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23"+
		"\3\23\5\23\u026b\n\23\3\23\3\23\5\23\u026f\n\23\3\23\5\23\u0272\n\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u0280"+
		"\n\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\7\23\u028c\n\23"+
		"\f\23\16\23\u028f\13\23\3\24\3\24\5\24\u0293\n\24\3\24\5\24\u0296\n\24"+
		"\3\24\3\24\3\25\3\25\5\25\u029c\n\25\3\25\3\25\5\25\u02a0\n\25\3\26\3"+
		"\26\3\27\3\27\3\27\3\27\6\27\u02a8\n\27\r\27\16\27\u02a9\5\27\u02ac\n"+
		"\27\3\27\3\27\3\30\3\30\3\30\3\30\5\30\u02b4\n\30\3\31\3\31\5\31\u02b8"+
		"\n\31\3\32\3\32\3\32\3\32\5\32\u02be\n\32\5\32\u02c0\n\32\3\32\3\32\3"+
		"\33\3\33\3\33\7\33\u02c7\n\33\f\33\16\33\u02ca\13\33\3\34\5\34\u02cd\n"+
		"\34\3\34\5\34\u02d0\n\34\3\34\3\34\3\34\3\34\5\34\u02d6\n\34\3\35\3\35"+
		"\5\35\u02da\n\35\3\36\3\36\3\36\3\36\6\36\u02e0\n\36\r\36\16\36\u02e1"+
		"\3\37\3\37\3\37\3\37\7\37\u02e8\n\37\f\37\16\37\u02eb\13\37\3 \5 \u02ee"+
		"\n \3 \3 \7 \u02f2\n \f \16 \u02f5\13 \3!\3!\3!\3!\3!\5!\u02fc\n!\3\""+
		"\3\"\5\"\u0300\n\"\3\"\5\"\u0303\n\"\3#\3#\3#\3#\3$\3$\3$\5$\u030c\n$"+
		"\3%\3%\3%\3%\3%\5%\u0313\n%\3%\5%\u0316\n%\3%\3%\3%\5%\u031b\n%\3&\3&"+
		"\3&\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\5(\u0329\n(\5(\u032b\n(\3(\3(\3)\3"+
		")\5)\u0331\n)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\5)\u033e\n)\3*\3*\3*\3"+
		"*\3*\3*\3*\3*\5*\u0348\n*\3+\3+\3+\3+\7+\u034e\n+\f+\16+\u0351\13+\3+"+
		"\5+\u0354\n+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\3,\7,\u0361\n,\f,\16,\u0364"+
		"\13,\3,\5,\u0367\n,\3,\3,\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3"+
		"-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\5-\u038a\n-\3.\3.\3"+
		".\3.\5.\u0390\n.\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3"+
		"\61\3\62\3\62\3\62\5\62\u03a2\n\62\3\63\3\63\3\63\3\63\3\64\3\64\3\64"+
		"\3\64\3\64\3\65\3\65\3\65\3\65\3\66\3\66\5\66\u03b3\n\66\3\66\5\66\u03b6"+
		"\n\66\3\66\3\66\3\67\5\67\u03bb\n\67\3\67\3\67\5\67\u03bf\n\67\3\67\5"+
		"\67\u03c2\n\67\3\67\5\67\u03c5\n\67\3\67\3\67\38\38\58\u03cb\n8\38\38"+
		"\58\u03cf\n8\39\39\39\79\u03d4\n9\f9\169\u03d7\139\3:\3:\3:\3:\5:\u03dd"+
		"\n:\5:\u03df\n:\3;\5;\u03e2\n;\3;\3;\3<\3<\3<\3<\7<\u03ea\n<\f<\16<\u03ed"+
		"\13<\3<\3<\3=\5=\u03f2\n=\3=\3=\3>\3>\3>\3>\3>\3>\3>\3>\5>\u03fe\n>\5"+
		">\u0400\n>\3?\3?\3?\3@\3@\3@\3@\3A\3A\3A\3A\6A\u040d\nA\rA\16A\u040e\5"+
		"A\u0411\nA\3A\3A\3B\3B\5B\u0417\nB\3B\5B\u041a\nB\3B\3B\3C\3C\3D\3D\5"+
		"D\u0422\nD\3D\3D\3D\3D\6D\u0428\nD\rD\16D\u0429\3E\3E\7E\u042e\nE\fE\16"+
		"E\u0431\13E\3E\6E\u0434\nE\rE\16E\u0435\5E\u0438\nE\3F\3F\3F\3F\3F\3F"+
		"\5F\u0440\nF\3G\3G\3G\3G\3G\5G\u0447\nG\3G\3G\3G\3H\3H\3H\3H\3H\3I\3I"+
		"\3I\3I\3I\3I\3I\3I\3I\5I\u045a\nI\3I\5I\u045d\nI\3I\3I\3I\3I\3I\3I\3I"+
		"\5I\u0466\nI\3I\3I\3I\3I\3I\5I\u046d\nI\3I\3I\3I\3I\5I\u0473\nI\5I\u0475"+
		"\nI\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\3I\7I\u0485\nI\fI\16I\u0488"+
		"\13I\3J\3J\5J\u048c\nJ\3J\3J\3K\3K\3K\7K\u0493\nK\fK\16K\u0496\13K\3L"+
		"\3L\5L\u049a\nL\3L\5L\u049d\nL\3L\3L\5L\u04a1\nL\3M\3M\3N\3N\5N\u04a7"+
		"\nN\3N\6N\u04aa\nN\rN\16N\u04ab\3O\3O\3O\3O\3O\3O\3O\3O\3O\5O\u04b7\n"+
		"O\3O\5O\u04ba\nO\3O\5O\u04bd\nO\3P\6P\u04c0\nP\rP\16P\u04c1\3Q\3Q\3Q\5"+
		"Q\u04c7\nQ\3R\3R\5R\u04cb\nR\3R\3R\5R\u04cf\nR\3R\3R\5R\u04d3\nR\3R\3"+
		"R\3S\3S\3S\3S\3T\3T\3T\7T\u04de\nT\fT\16T\u04e1\13T\3U\3U\3U\3U\5U\u04e7"+
		"\nU\3V\3V\3V\3V\3W\3W\3W\3W\3X\3X\3X\3X\3X\3Y\3Y\3Y\5Y\u04f9\nY\3Z\3Z"+
		"\3Z\3Z\5Z\u04ff\nZ\3[\3[\3[\5[\u0504\n[\3\\\3\\\3\\\3\\\3\\\3]\3]\3]\3"+
		"]\7]\u050f\n]\f]\16]\u0512\13]\3]\3]\3^\3^\5^\u0518\n^\3^\3^\3_\3_\3_"+
		"\3_\3`\3`\5`\u0522\n`\3`\3`\3`\5`\u0527\n`\7`\u0529\n`\f`\16`\u052c\13"+
		"`\3a\3a\3a\3b\3b\3b\3c\3c\3c\3c\3c\5c\u0539\nc\3d\3d\3d\3e\3e\3f\3f\3"+
		"f\3f\3f\5f\u0545\nf\3g\3g\5g\u0549\ng\3h\3h\5h\u054d\nh\3i\3i\3j\3j\5"+
		"j\u0553\nj\3k\3k\3k\3l\3l\3l\3m\3m\3m\7m\u055e\nm\fm\16m\u0561\13m\3n"+
		"\3n\5n\u0565\nn\3n\5n\u0568\nn\3n\3n\3o\3o\5o\u056e\no\3p\3p\7p\u0572"+
		"\np\fp\16p\u0575\13p\3p\5p\u0578\np\3p\3p\3q\3q\3q\5q\u057f\nq\3r\3r\3"+
		"r\5r\u0584\nr\3s\3s\5s\u0588\ns\3t\3t\3t\3t\3t\3t\3t\3t\3t\3t\3t\5t\u0595"+
		"\nt\3t\3t\3t\3t\3t\7t\u059c\nt\ft\16t\u059f\13t\3u\3u\3u\3u\3u\3u\3u\3"+
		"u\3u\3u\3u\3u\3u\3u\3u\3u\3u\3u\3u\3u\5u\u05b5\nu\3v\3v\3v\3w\3w\3w\3"+
		"x\3x\3x\7x\u05c0\nx\fx\16x\u05c3\13x\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y\3y"+
		"\3y\5y\u05d1\ny\3y\3y\3z\3z\3z\3{\3{\3|\3|\3|\3|\3|\7|\u05df\n|\f|\16"+
		"|\u05e2\13|\3|\3|\3}\3}\3}\3}\5}\u05ea\n}\3~\3~\3~\3\177\3\177\3\177\3"+
		"\177\3\177\5\177\u05f4\n\177\5\177\u05f6\n\177\3\u0080\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080\3\u0080"+
		"\3\u0080\3\u0080\3\u0080\5\u0080\u0607\n\u0080\3\u0081\5\u0081\u060a\n"+
		"\u0081\3\u0082\3\u0082\5\u0082\u060e\n\u0082\3\u0082\3\u0082\3\u0083\5"+
		"\u0083\u0613\n\u0083\3\u0083\3\u0083\5\u0083\u0617\n\u0083\3\u0083\3\u0083"+
		"\3\u0084\3\u0084\3\u0085\3\u0085\3\u0085\7\u0085\u0620\n\u0085\f\u0085"+
		"\16\u0085\u0623\13\u0085\3\u0086\3\u0086\5\u0086\u0627\n\u0086\3\u0087"+
		"\5\u0087\u062a\n\u0087\3\u0087\5\u0087\u062d\n\u0087\3\u0087\3\u0087\3"+
		"\u0087\3\u0088\3\u0088\3\u0088\7\u0088\u0635\n\u0088\f\u0088\16\u0088"+
		"\u0638\13\u0088\3\u0089\3\u0089\5\u0089\u063c\n\u0089\3\u008a\3\u008a"+
		"\3\u008a\3\u008a\3\u008b\3\u008b\3\u008b\3\u008b\3\u008b\3\u008b\3\u008b"+
		"\3\u008b\3\u008b\3\u008b\5\u008b\u064c\n\u008b\3\u008b\5\u008b\u064f\n"+
		"\u008b\5\u008b\u0651\n\u008b\5\u008b\u0653\n\u008b\3\u008c\5\u008c\u0656"+
		"\n\u008c\3\u008c\5\u008c\u0659\n\u008c\3\u008c\3\u008c\3\u008d\3\u008d"+
		"\3\u008e\3\u008e\3\u008e\3\u008e\5\u008e\u0663\n\u008e\3\u008e\3\u008e"+
		"\3\u008e\5\u008e\u0668\n\u008e\3\u008e\3\u008e\5\u008e\u066c\n\u008e\3"+
		"\u008f\5\u008f\u066f\n\u008f\3\u008f\5\u008f\u0672\n\u008f\3\u008f\3\u008f"+
		"\3\u008f\3\u008f\3\u0090\5\u0090\u0679\n\u0090\3\u0090\5\u0090\u067c\n"+
		"\u0090\3\u0090\3\u0090\3\u0090\5\u0090\u0681\n\u0090\3\u0090\3\u0090\3"+
		"\u0091\3\u0091\3\u0091\3\u0091\3\u0092\3\u0092\3\u0092\5\u0092\u068c\n"+
		"\u0092\3\u0092\3\u0092\3\u0092\5\u0092\u0691\n\u0092\3\u0092\3\u0092\3"+
		"\u0093\5\u0093\u0696\n\u0093\3\u0093\5\u0093\u0699\n\u0093\3\u0093\3\u0093"+
		"\3\u0093\3\u0094\5\u0094\u069f\n\u0094\3\u0094\5\u0094\u06a2\n\u0094\3"+
		"\u0094\3\u0094\3\u0094\3\u0095\3\u0095\3\u0095\5\u0095\u06aa\n\u0095\3"+
		"\u0095\3\u0095\3\u0095\5\u0095\u06af\n\u0095\3\u0095\3\u0095\3\u0096\5"+
		"\u0096\u06b4\n\u0096\3\u0096\3\u0096\3\u0096\5\u0096\u06b9\n\u0096\3\u0096"+
		"\3\u0096\3\u0097\5\u0097\u06be\n\u0097\3\u0097\3\u0097\3\u0097\5\u0097"+
		"\u06c3\n\u0097\3\u0097\3\u0097\3\u0098\5\u0098\u06c8\n\u0098\3\u0098\5"+
		"\u0098\u06cb\n\u0098\3\u0098\3\u0098\3\u0098\5\u0098\u06d0\n\u0098\3\u0098"+
		"\3\u0098\3\u0099\3\u0099\3\u009a\3\u009a\3\u009a\3\u009a\3\u009b\3\u009b"+
		"\3\u009b\5\u009b\u06dd\n\u009b\3\u009b\3\u009b\5\u009b\u06e1\n\u009b\3"+
		"\u009b\5\u009b\u06e4\n\u009b\3\u009c\5\u009c\u06e7\n\u009c\3\u009c\5\u009c"+
		"\u06ea\n\u009c\3\u009c\3\u009c\3\u009d\3\u009d\5\u009d\u06f0\n\u009d\3"+
		"\u009e\3\u009e\5\u009e\u06f4\n\u009e\3\u009e\5\u009e\u06f7\n\u009e\3\u009f"+
		"\3\u009f\5\u009f\u06fb\n\u009f\3\u009f\3\u009f\3\u00a0\3\u00a0\3\u00a1"+
		"\3\u00a1\5\u00a1\u0703\n\u00a1\3\u00a1\3\u00a1\3\u00a2\3\u00a2\3\u00a2"+
		"\7\u00a2\u070a\n\u00a2\f\u00a2\16\u00a2\u070d\13\u00a2\3\u00a3\5\u00a3"+
		"\u0710\n\u00a3\3\u00a3\3\u00a3\3\u00a3\3\u00a3\3\u00a3\5\u00a3\u0717\n"+
		"\u00a3\3\u00a4\3\u00a4\5\u00a4\u071b\n\u00a4\3\u00a5\3\u00a5\3\u00a6\3"+
		"\u00a6\3\u00a6\3\u00a6\3\u00a7\5\u00a7\u0724\n\u00a7\3\u00a7\5\u00a7\u0727"+
		"\n\u00a7\3\u00a7\3\u00a7\5\u00a7\u072b\n\u00a7\3\u00a8\3\u00a8\5\u00a8"+
		"\u072f\n\u00a8\3\u00a8\3\u00a8\3\u00a8\5\u00a8\u0734\n\u00a8\3\u00a8\5"+
		"\u00a8\u0737\n\u00a8\3\u00a8\5\u00a8\u073a\n\u00a8\3\u00a8\3\u00a8\5\u00a8"+
		"\u073e\n\u00a8\3\u00a8\3\u00a8\3\u00a9\6\u00a9\u0743\n\u00a9\r\u00a9\16"+
		"\u00a9\u0744\3\u00aa\3\u00aa\3\u00aa\5\u00aa\u074a\n\u00aa\3\u00ab\5\u00ab"+
		"\u074d\n\u00ab\3\u00ab\3\u00ab\5\u00ab\u0751\n\u00ab\3\u00ab\3\u00ab\3"+
		"\u00ab\3\u00ac\3\u00ac\3\u00ac\7\u00ac\u0759\n\u00ac\f\u00ac\16\u00ac"+
		"\u075c\13\u00ac\3\u00ad\3\u00ad\5\u00ad\u0760\n\u00ad\3\u00ae\3\u00ae"+
		"\3\u00af\3\u00af\3\u00b0\3\u00b0\3\u00b0\5\u00b0\u0769\n\u00b0\3\u00b0"+
		"\3\u00b0\5\u00b0\u076d\n\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b0\3\u00b1"+
		"\6\u00b1\u0774\n\u00b1\r\u00b1\16\u00b1\u0775\3\u00b2\3\u00b2\3\u00b2"+
		"\5\u00b2\u077b\n\u00b2\3\u00b3\5\u00b3\u077e\n\u00b3\3\u00b3\3\u00b3\3"+
		"\u00b3\3\u00b4\3\u00b4\3\u00b4\7\u00b4\u0786\n\u00b4\f\u00b4\16\u00b4"+
		"\u0789\13\u00b4\3\u00b5\3\u00b5\5\u00b5\u078d\n\u00b5\3\u00b6\3\u00b6"+
		"\3\u00b6\3\u00b6\3\u00b7\3\u00b7\3\u00b7\5\u00b7\u0796\n\u00b7\3\u00b8"+
		"\5\u00b8\u0799\n\u00b8\3\u00b8\5\u00b8\u079c\n\u00b8\3\u00b8\3\u00b8\3"+
		"\u00b8\5\u00b8\u07a1\n\u00b8\3\u00b8\5\u00b8\u07a4\n\u00b8\3\u00b8\5\u00b8"+
		"\u07a7\n\u00b8\3\u00b8\3\u00b8\3\u00b9\3\u00b9\3\u00ba\3\u00ba\5\u00ba"+
		"\u07af\n\u00ba\3\u00ba\3\u00ba\3\u00bb\6\u00bb\u07b4\n\u00bb\r\u00bb\16"+
		"\u00bb\u07b5\3\u00bc\3\u00bc\5\u00bc\u07ba\n\u00bc\3\u00bd\5\u00bd\u07bd"+
		"\n\u00bd\3\u00bd\5\u00bd\u07c0\n\u00bd\3\u00bd\3\u00bd\5\u00bd\u07c4\n"+
		"\u00bd\3\u00bd\3\u00bd\3\u00bd\5\u00bd\u07c9\n\u00bd\3\u00bd\3\u00bd\3"+
		"\u00bd\5\u00bd\u07ce\n\u00bd\3\u00bd\5\u00bd\u07d1\n\u00bd\3\u00bd\5\u00bd"+
		"\u07d4\n\u00bd\3\u00bd\3\u00bd\3\u00be\3\u00be\3\u00bf\3\u00bf\5\u00bf"+
		"\u07dc\n\u00bf\3\u00bf\3\u00bf\3\u00c0\6\u00c0\u07e1\n\u00c0\r\u00c0\16"+
		"\u00c0\u07e2\3\u00c1\3\u00c1\5\u00c1\u07e7\n\u00c1\3\u00c2\5\u00c2\u07ea"+
		"\n\u00c2\3\u00c2\5\u00c2\u07ed\n\u00c2\3\u00c2\3\u00c2\3\u00c2\5\u00c2"+
		"\u07f2\n\u00c2\3\u00c2\5\u00c2\u07f5\n\u00c2\3\u00c2\3\u00c2\3\u00c3\3"+
		"\u00c3\3\u00c4\3\u00c4\5\u00c4\u07fd\n\u00c4\3\u00c4\3\u00c4\3\u00c5\6"+
		"\u00c5\u0802\n\u00c5\r\u00c5\16\u00c5\u0803\3\u00c6\3\u00c6\5\u00c6\u0808"+
		"\n\u00c6\3\u00c7\3\u00c7\3\u00c7\3\u00c7\3\u00c7\3\u00c7\5\u00c7\u0810"+
		"\n\u00c7\3\u00c8\3\u00c8\3\u00c8\3\u00c8\3\u00c8\3\u00c9\3\u00c9\3\u00c9"+
		"\5\u00c9\u081a\n\u00c9\3\u00c9\3\u00c9\5\u00c9\u081e\n\u00c9\3\u00ca\3"+
		"\u00ca\5\u00ca\u0822\n\u00ca\3\u00ca\3\u00ca\5\u00ca\u0826\n\u00ca\3\u00ca"+
		"\5\u00ca\u0829\n\u00ca\3\u00cb\3\u00cb\3\u00cb\5\u00cb\u082e\n\u00cb\3"+
		"\u00cb\3\u00cb\3\u00cc\5\u00cc\u0833\n\u00cc\3\u00cc\5\u00cc\u0836\n\u00cc"+
		"\3\u00cc\3\u00cc\3\u00cc\5\u00cc\u083b\n\u00cc\3\u00cc\5\u00cc\u083e\n"+
		"\u00cc\3\u00cc\5\u00cc\u0841\n\u00cc\3\u00cd\3\u00cd\5\u00cd\u0845\n\u00cd"+
		"\3\u00cd\3\u00cd\5\u00cd\u0849\n\u00cd\3\u00cd\5\u00cd\u084c\n\u00cd\3"+
		"\u00cd\3\u00cd\3\u00ce\5\u00ce\u0851\n\u00ce\3\u00ce\5\u00ce\u0854\n\u00ce"+
		"\3\u00ce\3\u00ce\3\u00ce\3\u00ce\3\u00cf\3\u00cf\3\u00d0\5\u00d0\u085d"+
		"\n\u00d0\3\u00d0\3\u00d0\3\u00d0\3\u00d1\5\u00d1\u0863\n\u00d1\3\u00d1"+
		"\5\u00d1\u0866\n\u00d1\3\u00d1\3\u00d1\3\u00d1\3\u00d1\5\u00d1\u086c\n"+
		"\u00d1\3\u00d1\3\u00d1\3\u00d2\3\u00d2\5\u00d2\u0872\n\u00d2\3\u00d2\3"+
		"\u00d2\3\u00d3\6\u00d3\u0877\n\u00d3\r\u00d3\16\u00d3\u0878\3\u00d4\3"+
		"\u00d4\5\u00d4\u087d\n\u00d4\3\u00d5\3\u00d5\3\u00d5\5\u00d5\u0882\n\u00d5"+
		"\3\u00d5\3\u00d5\5\u00d5\u0886\n\u00d5\3\u00d6\5\u00d6\u0889\n\u00d6\3"+
		"\u00d6\5\u00d6\u088c\n\u00d6\3\u00d6\3\u00d6\5\u00d6\u0890\n\u00d6\3\u00d6"+
		"\3\u00d6\3\u00d7\3\u00d7\5\u00d7\u0896\n\u00d7\3\u00d7\3\u00d7\3\u00d8"+
		"\3\u00d8\3\u00d8\5\u00d8\u089d\n\u00d8\3\u00d9\3\u00d9\3\u00d9\3\u00d9"+
		"\3\u00d9\3\u00da\3\u00da\3\u00da\3\u00da\3\u00da\3\u00db\3\u00db\3\u00db"+
		"\3\u00db\3\u00db\5\u00db\u08ae\n\u00db\3\u00dc\3\u00dc\3\u00dc\3\u00dd"+
		"\3\u00dd\3\u00dd\3\u00dd\5\u00dd\u08b7\n\u00dd\3\u00dd\3\u00dd\3\u00de"+
		"\6\u00de\u08bc\n\u00de\r\u00de\16\u00de\u08bd\3\u00df\3\u00df\3\u00df"+
		"\5\u00df\u08c3\n\u00df\3\u00e0\3\u00e0\3\u00e0\3\u00e0\3\u00e0\3\u00e1"+
		"\3\u00e1\3\u00e1\3\u00e1\3\u00e1\3\u00e2\3\u00e2\3\u00e2\3\u00e2\3\u00e2"+
		"\3\u00e2\3\u00e3\3\u00e3\3\u00e3\7\u00e3\u08d8\n\u00e3\f\u00e3\16\u00e3"+
		"\u08db\13\u00e3\3\u00e4\3\u00e4\3\u00e5\3\u00e5\3\u00e5\3\u00e5\3\u00e5"+
		"\3\u00e5\5\u00e5\u08e5\n\u00e5\3\u00e6\6\u00e6\u08e8\n\u00e6\r\u00e6\16"+
		"\u00e6\u08e9\3\u00e7\3\u00e7\3\u00e7\3\u00e7\3\u00e7\5\u00e7\u08f1\n\u00e7"+
		"\3\u00e8\3\u00e8\3\u00e8\3\u00e9\3\u00e9\3\u00e9\5\u00e9\u08f9\n\u00e9"+
		"\3\u00ea\3\u00ea\3\u00eb\3\u00eb\5\u00eb\u08ff\n\u00eb\3\u00eb\3\u00eb"+
		"\3\u00ec\6\u00ec\u0904\n\u00ec\r\u00ec\16\u00ec\u0905\3\u00ed\6\u00ed"+
		"\u0909\n\u00ed\r\u00ed\16\u00ed\u090a\3\u00ee\3\u00ee\3\u00ee\3\u00ee"+
		"\3\u00ee\3\u00ee\3\u00ee\3\u00ee\3\u00ee\3\u00ee\3\u00ee\3\u00ee\3\u00ee"+
		"\3\u00ee\3\u00ee\5\u00ee\u091c\n\u00ee\3\u00ef\3\u00ef\3\u00ef\5\u00ef"+
		"\u0921\n\u00ef\3\u00ef\5\u00ef\u0924\n\u00ef\3\u00ef\3\u00ef\3\u00ef\3"+
		"\u00ef\3\u00ef\5\u00ef\u092b\n\u00ef\3\u00f0\3\u00f0\3\u00f1\3\u00f1\3"+
		"\u00f2\3\u00f2\3\u00f2\3\u00f3\3\u00f3\5\u00f3\u0936\n\u00f3\3\u00f3\3"+
		"\u00f3\3\u00f4\3\u00f4\3\u00f4\7\u00f4\u093d\n\u00f4\f\u00f4\16\u00f4"+
		"\u0940\13\u00f4\3\u00f5\3\u00f5\5\u00f5\u0944\n\u00f5\3\u00f5\5\u00f5"+
		"\u0947\n\u00f5\3\u00f5\3\u00f5\3\u00f6\5\u00f6\u094c\n\u00f6\3\u00f6\3"+
		"\u00f6\3\u00f6\5\u00f6\u0951\n\u00f6\3\u00f7\3\u00f7\3\u00f7\3\u00f7\3"+
		"\u00f8\3\u00f8\5\u00f8\u0959\n\u00f8\3\u00f9\3\u00f9\3\u00f9\3\u00fa\3"+
		"\u00fa\3\u00fa\5\u00fa\u0961\n\u00fa\3\u00fa\5\u00fa\u0964\n\u00fa\3\u00fa"+
		"\3\u00fa\3\u00fa\3\u00fa\3\u00fa\5\u00fa\u096b\n\u00fa\3\u00fa\3\u00fa"+
		"\6\u00fa\u096f\n\u00fa\r\u00fa\16\u00fa\u0970\3\u00fb\3\u00fb\3\u00fc"+
		"\3\u00fc\3\u00fc\3\u00fc\3\u00fd\3\u00fd\3\u00fd\7\u00fd\u097c\n\u00fd"+
		"\f\u00fd\16\u00fd\u097f\13\u00fd\3\u00fe\3\u00fe\3\u00fe\3\u00fe\5\u00fe"+
		"\u0985\n\u00fe\5\u00fe\u0987\n\u00fe\3\u00ff\3\u00ff\3\u00ff\3\u0100\3"+
		"\u0100\3\u0100\7\u0100\u098f\n\u0100\f\u0100\16\u0100\u0992\13\u0100\3"+
		"\u0101\3\u0101\5\u0101\u0996\n\u0101\3\u0102\3\u0102\3\u0102\3\u0102\5"+
		"\u0102\u099c\n\u0102\3\u0103\3\u0103\3\u0103\3\u0103\3\u0103\3\u0104\3"+
		"\u0104\3\u0104\3\u0104\3\u0105\3\u0105\3\u0105\7\u0105\u09aa\n\u0105\f"+
		"\u0105\16\u0105\u09ad\13\u0105\3\u0106\3\u0106\3\u0106\2\5$\u0090\u00e6"+
		"\u0107\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<"+
		">@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a"+
		"\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2"+
		"\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8\u00ba"+
		"\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0\u00d2"+
		"\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8\u00ea"+
		"\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe\u0100\u0102"+
		"\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118\u011a"+
		"\u011c\u011e\u0120\u0122\u0124\u0126\u0128\u012a\u012c\u012e\u0130\u0132"+
		"\u0134\u0136\u0138\u013a\u013c\u013e\u0140\u0142\u0144\u0146\u0148\u014a"+
		"\u014c\u014e\u0150\u0152\u0154\u0156\u0158\u015a\u015c\u015e\u0160\u0162"+
		"\u0164\u0166\u0168\u016a\u016c\u016e\u0170\u0172\u0174\u0176\u0178\u017a"+
		"\u017c\u017e\u0180\u0182\u0184\u0186\u0188\u018a\u018c\u018e\u0190\u0192"+
		"\u0194\u0196\u0198\u019a\u019c\u019e\u01a0\u01a2\u01a4\u01a6\u01a8\u01aa"+
		"\u01ac\u01ae\u01b0\u01b2\u01b4\u01b6\u01b8\u01ba\u01bc\u01be\u01c0\u01c2"+
		"\u01c4\u01c6\u01c8\u01ca\u01cc\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da"+
		"\u01dc\u01de\u01e0\u01e2\u01e4\u01e6\u01e8\u01ea\u01ec\u01ee\u01f0\u01f2"+
		"\u01f4\u01f6\u01f8\u01fa\u01fc\u01fe\u0200\u0202\u0204\u0206\u0208\u020a"+
		"\2\r\4\299ii\4\2..\67\67\3\2ko\3\2qr\b\2IINOUUZZ\\dss\4\2OOUU\4\2AADD"+
		"\4\2\16\16\31\31\t\2\4\4\6\6\t\t\16\16\23\23\26\26\30\31\4\2\61\61\66"+
		"\66\7\2\b\b\r\r\17\17\22\22\24\24\2\u0a3d\2\u020c\3\2\2\2\4\u0216\3\2"+
		"\2\2\6\u021a\3\2\2\2\b\u022a\3\2\2\2\n\u022e\3\2\2\2\f\u0230\3\2\2\2\16"+
		"\u0232\3\2\2\2\20\u0234\3\2\2\2\22\u0236\3\2\2\2\24\u0247\3\2\2\2\26\u0249"+
		"\3\2\2\2\30\u024d\3\2\2\2\32\u024f\3\2\2\2\34\u0253\3\2\2\2\36\u0255\3"+
		"\2\2\2 \u0258\3\2\2\2\"\u025b\3\2\2\2$\u027f\3\2\2\2&\u0290\3\2\2\2(\u0299"+
		"\3\2\2\2*\u02a1\3\2\2\2,\u02a3\3\2\2\2.\u02b3\3\2\2\2\60\u02b7\3\2\2\2"+
		"\62\u02b9\3\2\2\2\64\u02c3\3\2\2\2\66\u02d5\3\2\2\28\u02d7\3\2\2\2:\u02db"+
		"\3\2\2\2<\u02e3\3\2\2\2>\u02ed\3\2\2\2@\u02fb\3\2\2\2B\u0302\3\2\2\2D"+
		"\u0304\3\2\2\2F\u0308\3\2\2\2H\u031a\3\2\2\2J\u031c\3\2\2\2L\u031f\3\2"+
		"\2\2N\u032a\3\2\2\2P\u033d\3\2\2\2R\u0347\3\2\2\2T\u0349\3\2\2\2V\u0357"+
		"\3\2\2\2X\u0389\3\2\2\2Z\u038f\3\2\2\2\\\u0391\3\2\2\2^\u0395\3\2\2\2"+
		"`\u039a\3\2\2\2b\u03a1\3\2\2\2d\u03a3\3\2\2\2f\u03a7\3\2\2\2h\u03ac\3"+
		"\2\2\2j\u03b0\3\2\2\2l\u03c4\3\2\2\2n\u03ce\3\2\2\2p\u03d0\3\2\2\2r\u03d8"+
		"\3\2\2\2t\u03e1\3\2\2\2v\u03e5\3\2\2\2x\u03f1\3\2\2\2z\u03ff\3\2\2\2|"+
		"\u0401\3\2\2\2~\u0404\3\2\2\2\u0080\u0408\3\2\2\2\u0082\u0419\3\2\2\2"+
		"\u0084\u041d\3\2\2\2\u0086\u041f\3\2\2\2\u0088\u0437\3\2\2\2\u008a\u043f"+
		"\3\2\2\2\u008c\u0441\3\2\2\2\u008e\u044b\3\2\2\2\u0090\u0450\3\2\2\2\u0092"+
		"\u0489\3\2\2\2\u0094\u048f\3\2\2\2\u0096\u049c\3\2\2\2\u0098\u04a2\3\2"+
		"\2\2\u009a\u04a9\3\2\2\2\u009c\u04bc\3\2\2\2\u009e\u04bf\3\2\2\2\u00a0"+
		"\u04c6\3\2\2\2\u00a2\u04c8\3\2\2\2\u00a4\u04d6\3\2\2\2\u00a6\u04da\3\2"+
		"\2\2\u00a8\u04e6\3\2\2\2\u00aa\u04e8\3\2\2\2\u00ac\u04ec\3\2\2\2\u00ae"+
		"\u04f0\3\2\2\2\u00b0\u04f8\3\2\2\2\u00b2\u04fa\3\2\2\2\u00b4\u0500\3\2"+
		"\2\2\u00b6\u0505\3\2\2\2\u00b8\u050a\3\2\2\2\u00ba\u0517\3\2\2\2\u00bc"+
		"\u051b\3\2\2\2\u00be\u051f\3\2\2\2\u00c0\u052d\3\2\2\2\u00c2\u0530\3\2"+
		"\2\2\u00c4\u0533\3\2\2\2\u00c6\u053a\3\2\2\2\u00c8\u053d\3\2\2\2\u00ca"+
		"\u0544\3\2\2\2\u00cc\u0546\3\2\2\2\u00ce\u054a\3\2\2\2\u00d0\u054e\3\2"+
		"\2\2\u00d2\u0550\3\2\2\2\u00d4\u0554\3\2\2\2\u00d6\u0557\3\2\2\2\u00d8"+
		"\u055a\3\2\2\2\u00da\u0562\3\2\2\2\u00dc\u056d\3\2\2\2\u00de\u056f\3\2"+
		"\2\2\u00e0\u057b\3\2\2\2\u00e2\u0580\3\2\2\2\u00e4\u0585\3\2\2\2\u00e6"+
		"\u0594\3\2\2\2\u00e8\u05b4\3\2\2\2\u00ea\u05b6\3\2\2\2\u00ec\u05b9\3\2"+
		"\2\2\u00ee\u05bc\3\2\2\2\u00f0\u05c4\3\2\2\2\u00f2\u05d4\3\2\2\2\u00f4"+
		"\u05d7\3\2\2\2\u00f6\u05d9\3\2\2\2\u00f8\u05e9\3\2\2\2\u00fa\u05eb\3\2"+
		"\2\2\u00fc\u05ee\3\2\2\2\u00fe\u0606\3\2\2\2\u0100\u0609\3\2\2\2\u0102"+
		"\u060b\3\2\2\2\u0104\u0612\3\2\2\2\u0106\u061a\3\2\2\2\u0108\u061c\3\2"+
		"\2\2\u010a\u0626\3\2\2\2\u010c\u0629\3\2\2\2\u010e\u0631\3\2\2\2\u0110"+
		"\u0639\3\2\2\2\u0112\u063d\3\2\2\2\u0114\u0641\3\2\2\2\u0116\u0655\3\2"+
		"\2\2\u0118\u065c\3\2\2\2\u011a\u066b\3\2\2\2\u011c\u066e\3\2\2\2\u011e"+
		"\u0678\3\2\2\2\u0120\u0684\3\2\2\2\u0122\u0688\3\2\2\2\u0124\u0695\3\2"+
		"\2\2\u0126\u069e\3\2\2\2\u0128\u06a6\3\2\2\2\u012a\u06b3\3\2\2\2\u012c"+
		"\u06bd\3\2\2\2\u012e\u06c7\3\2\2\2\u0130\u06d3\3\2\2\2\u0132\u06d5\3\2"+
		"\2\2\u0134\u06d9\3\2\2\2\u0136\u06e6\3\2\2\2\u0138\u06ef\3\2\2\2\u013a"+
		"\u06f1\3\2\2\2\u013c\u06f8\3\2\2\2\u013e\u06fe\3\2\2\2\u0140\u0700\3\2"+
		"\2\2\u0142\u0706\3\2\2\2\u0144\u070f\3\2\2\2\u0146\u071a\3\2\2\2\u0148"+
		"\u071c\3\2\2\2\u014a\u071e\3\2\2\2\u014c\u0723\3\2\2\2\u014e\u072e\3\2"+
		"\2\2\u0150\u0742\3\2\2\2\u0152\u0749\3\2\2\2\u0154\u074c\3\2\2\2\u0156"+
		"\u0755\3\2\2\2\u0158\u075d\3\2\2\2\u015a\u0761\3\2\2\2\u015c\u0763\3\2"+
		"\2\2\u015e\u0765\3\2\2\2\u0160\u0773\3\2\2\2\u0162\u077a\3\2\2\2\u0164"+
		"\u077d\3\2\2\2\u0166\u0782\3\2\2\2\u0168\u078a\3\2\2\2\u016a\u078e\3\2"+
		"\2\2\u016c\u0795\3\2\2\2\u016e\u0798\3\2\2\2\u0170\u07aa\3\2\2\2\u0172"+
		"\u07ac\3\2\2\2\u0174\u07b3\3\2\2\2\u0176\u07b9\3\2\2\2\u0178\u07bc\3\2"+
		"\2\2\u017a\u07d7\3\2\2\2\u017c\u07d9\3\2\2\2\u017e\u07e0\3\2\2\2\u0180"+
		"\u07e6\3\2\2\2\u0182\u07e9\3\2\2\2\u0184\u07f8\3\2\2\2\u0186\u07fa\3\2"+
		"\2\2\u0188\u0801\3\2\2\2\u018a\u0807\3\2\2\2\u018c\u080f\3\2\2\2\u018e"+
		"\u0811\3\2\2\2\u0190\u0816\3\2\2\2\u0192\u081f\3\2\2\2\u0194\u082a\3\2"+
		"\2\2\u0196\u0832\3\2\2\2\u0198\u0842\3\2\2\2\u019a\u0850\3\2\2\2\u019c"+
		"\u0859\3\2\2\2\u019e\u085c\3\2\2\2\u01a0\u0862\3\2\2\2\u01a2\u086f\3\2"+
		"\2\2\u01a4\u0876\3\2\2\2\u01a6\u087c\3\2\2\2\u01a8\u087e\3\2\2\2\u01aa"+
		"\u0888\3\2\2\2\u01ac\u0893\3\2\2\2\u01ae\u089c\3\2\2\2\u01b0\u089e\3\2"+
		"\2\2\u01b2\u08a3\3\2\2\2\u01b4\u08a8\3\2\2\2\u01b6\u08af\3\2\2\2\u01b8"+
		"\u08b2\3\2\2\2\u01ba\u08bb\3\2\2\2\u01bc\u08c2\3\2\2\2\u01be\u08c4\3\2"+
		"\2\2\u01c0\u08c9\3\2\2\2\u01c2\u08ce\3\2\2\2\u01c4\u08d4\3\2\2\2\u01c6"+
		"\u08dc\3\2\2\2\u01c8\u08e4\3\2\2\2\u01ca\u08e7\3\2\2\2\u01cc\u08eb\3\2"+
		"\2\2\u01ce\u08f2\3\2\2\2\u01d0\u08f5\3\2\2\2\u01d2\u08fa\3\2\2\2\u01d4"+
		"\u08fc\3\2\2\2\u01d6\u0903\3\2\2\2\u01d8\u0908\3\2\2\2\u01da\u091b\3\2"+
		"\2\2\u01dc\u092a\3\2\2\2\u01de\u092c\3\2\2\2\u01e0\u092e\3\2\2\2\u01e2"+
		"\u0930\3\2\2\2\u01e4\u0933\3\2\2\2\u01e6\u0939\3\2\2\2\u01e8\u0946\3\2"+
		"\2\2\u01ea\u094b\3\2\2\2\u01ec\u0952\3\2\2\2\u01ee\u0958\3\2\2\2\u01f0"+
		"\u095a\3\2\2\2\u01f2\u096a\3\2\2\2\u01f4\u0972\3\2\2\2\u01f6\u0974\3\2"+
		"\2\2\u01f8\u0978\3\2\2\2\u01fa\u0980\3\2\2\2\u01fc\u0988\3\2\2\2\u01fe"+
		"\u098b\3\2\2\2\u0200\u0995\3\2\2\2\u0202\u0997\3\2\2\2\u0204\u099d\3\2"+
		"\2\2\u0206\u09a2\3\2\2\2\u0208\u09a6\3\2\2\2\u020a\u09ae\3\2\2\2\u020c"+
		"\u020d\5\u009eP\2\u020d\u020e\7\2\2\3\u020e\3\3\2\2\2\u020f\u0217\7i\2"+
		"\2\u0210\u0211\7P\2\2\u0211\u0212\6\3\2\2\u0212\u0213\t\2\2\2\u0213\u0214"+
		"\6\3\3\2\u0214\u0217\7P\2\2\u0215\u0217\7j\2\2\u0216\u020f\3\2\2\2\u0216"+
		"\u0210\3\2\2\2\u0216\u0215\3\2\2\2\u0217\5\3\2\2\2\u0218\u021b\79\2\2"+
		"\u0219\u021b\5\4\3\2\u021a\u0218\3\2\2\2\u021a\u0219\3\2\2\2\u021b\u0223"+
		"\3\2\2\2\u021c\u021f\7M\2\2\u021d\u0220\79\2\2\u021e\u0220\5\4\3\2\u021f"+
		"\u021d\3\2\2\2\u021f\u021e\3\2\2\2\u0220\u0222\3\2\2\2\u0221\u021c\3\2"+
		"\2\2\u0222\u0225\3\2\2\2\u0223\u0221\3\2\2\2\u0223\u0224\3\2\2\2\u0224"+
		"\7\3\2\2\2\u0225\u0223\3\2\2\2\u0226\u022b\5\n\6\2\u0227\u022b\5\22\n"+
		"\2\u0228\u022b\5\f\7\2\u0229\u022b\5\16\b\2\u022a\u0226\3\2\2\2\u022a"+
		"\u0227\3\2\2\2\u022a\u0228\3\2\2\2\u022a\u0229\3\2\2\2\u022b\t\3\2\2\2"+
		"\u022c\u022f\5\20\t\2\u022d\u022f\7p\2\2\u022e\u022c\3\2\2\2\u022e\u022d"+
		"\3\2\2\2\u022f\13\3\2\2\2\u0230\u0231\t\3\2\2\u0231\r\3\2\2\2\u0232\u0233"+
		"\7\60\2\2\u0233\17\3\2\2\2\u0234\u0235\t\4\2\2\u0235\21\3\2\2\2\u0236"+
		"\u0237\t\5\2\2\u0237\23\3\2\2\2\u0238\u023d\5\26\f\2\u0239\u023a\6\13"+
		"\4\2\u023a\u023c\5\30\r\2\u023b\u0239\3\2\2\2\u023c\u023f\3\2\2\2\u023d"+
		"\u023b\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u0248\3\2\2\2\u023f\u023d\3\2"+
		"\2\2\u0240\u0243\5\32\16\2\u0241\u0242\6\13\5\2\u0242\u0244\5\34\17\2"+
		"\u0243\u0241\3\2\2\2\u0244\u0245\3\2\2\2\u0245\u0243\3\2\2\2\u0245\u0246"+
		"\3\2\2\2\u0246\u0248\3\2\2\2\u0247\u0238\3\2\2\2\u0247\u0240\3\2\2\2\u0248"+
		"\25\3\2\2\2\u0249\u024a\t\6\2\2\u024a\27\3\2\2\2\u024b\u024e\5\26\f\2"+
		"\u024c\u024e\7t\2\2\u024d\u024b\3\2\2\2\u024d\u024c\3\2\2\2\u024e\31\3"+
		"\2\2\2\u024f\u0250\7T\2\2\u0250\33\3\2\2\2\u0251\u0254\7T\2\2\u0252\u0254"+
		"\5\30\r\2\u0253\u0251\3\2\2\2\u0253\u0252\3\2\2\2\u0254\35\3\2\2\2\u0255"+
		"\u0256\6\20\6\2\u0256\u0257\5\24\13\2\u0257\37\3\2\2\2\u0258\u0259\6\21"+
		"\7\2\u0259\u025a\5\24\13\2\u025a!\3\2\2\2\u025b\u025c\6\22\b\2\u025c\u025d"+
		"\5\24\13\2\u025d#\3\2\2\2\u025e\u025f\b\23\1\2\u025f\u0260\7R\2\2\u0260"+
		"\u0261\5$\23\2\u0261\u0262\7W\2\2\u0262\u0280\3\2\2\2\u0263\u0264\7R\2"+
		"\2\u0264\u0265\5$\23\2\u0265\u0266\7L\2\2\u0266\u0267\5$\23\2\u0267\u0268"+
		"\7W\2\2\u0268\u0280\3\2\2\2\u0269\u026b\5\u01d6\u00ec\2\u026a\u0269\3"+
		"\2\2\2\u026a\u026b\3\2\2\2\u026b\u026c\3\2\2\2\u026c\u0271\5\62\32\2\u026d"+
		"\u026f\7\66\2\2\u026e\u026d\3\2\2\2\u026e\u026f\3\2\2\2\u026f\u0272\3"+
		"\2\2\2\u0270\u0272\7\61\2\2\u0271\u026e\3\2\2\2\u0271\u0270\3\2\2\2\u0272"+
		"\u0273\3\2\2\2\u0273\u0274\7J\2\2\u0274\u0275\5$\23\f\u0275\u0280\3\2"+
		"\2\2\u0276\u0280\5(\25\2\u0277\u0280\5,\27\2\u0278\u0280\5:\36\2\u0279"+
		"\u0280\7+\2\2\u027a\u0280\7\63\2\2\u027b\u027c\7S\2\2\u027c\u027d\5$\23"+
		"\2\u027d\u027e\7X\2\2\u027e\u0280\3\2\2\2\u027f\u025e\3\2\2\2\u027f\u0263"+
		"\3\2\2\2\u027f\u026a\3\2\2\2\u027f\u0276\3\2\2\2\u027f\u0277\3\2\2\2\u027f"+
		"\u0278\3\2\2\2\u027f\u0279\3\2\2\2\u027f\u027a\3\2\2\2\u027f\u027b\3\2"+
		"\2\2\u0280\u028d\3\2\2\2\u0281\u0282\f\t\2\2\u0282\u0283\6\23\n\2\u0283"+
		"\u028c\7U\2\2\u0284\u0285\f\b\2\2\u0285\u0286\6\23\f\2\u0286\u028c\7O"+
		"\2\2\u0287\u0288\f\6\2\2\u0288\u0289\7T\2\2\u0289\u028a\6\23\16\2\u028a"+
		"\u028c\7i\2\2\u028b\u0281\3\2\2\2\u028b\u0284\3\2\2\2\u028b\u0287\3\2"+
		"\2\2\u028c\u028f\3\2\2\2\u028d\u028b\3\2\2\2\u028d\u028e\3\2\2\2\u028e"+
		"%\3\2\2\2\u028f\u028d\3\2\2\2\u0290\u0292\7L\2\2\u0291\u0293\5\u01d6\u00ec"+
		"\2\u0292\u0291\3\2\2\2\u0292\u0293\3\2\2\2\u0293\u0295\3\2\2\2\u0294\u0296"+
		"\7\f\2\2\u0295\u0294\3\2\2\2\u0295\u0296\3\2\2\2\u0296\u0297\3\2\2\2\u0297"+
		"\u0298\5$\23\2\u0298\'\3\2\2\2\u0299\u029b\5*\26\2\u029a\u029c\5\u0206"+
		"\u0104\2\u029b\u029a\3\2\2\2\u029b\u029c\3\2\2\2\u029c\u029f\3\2\2\2\u029d"+
		"\u029e\7T\2\2\u029e\u02a0\5(\25\2\u029f\u029d\3\2\2\2\u029f\u02a0\3\2"+
		"\2\2\u02a0)\3\2\2\2\u02a1\u02a2\5\4\3\2\u02a2+\3\2\2\2\u02a3\u02ab\7S"+
		"\2\2\u02a4\u02a7\5.\30\2\u02a5\u02a6\7M\2\2\u02a6\u02a8\5.\30\2\u02a7"+
		"\u02a5\3\2\2\2\u02a8\u02a9\3\2\2\2\u02a9\u02a7\3\2\2\2\u02a9\u02aa\3\2"+
		"\2\2\u02aa\u02ac\3\2\2\2\u02ab\u02a4\3\2\2\2\u02ab\u02ac\3\2\2\2\u02ac"+
		"\u02ad\3\2\2\2\u02ad\u02ae\7X\2\2\u02ae-\3\2\2\2\u02af\u02b0\5\60\31\2"+
		"\u02b0\u02b1\5&\24\2\u02b1\u02b4\3\2\2\2\u02b2\u02b4\5$\23\2\u02b3\u02af"+
		"\3\2\2\2\u02b3\u02b2\3\2\2\2\u02b4/\3\2\2\2\u02b5\u02b8\79\2\2\u02b6\u02b8"+
		"\5\4\3\2\u02b7\u02b5\3\2\2\2\u02b7\u02b6\3\2\2\2\u02b8\61\3\2\2\2\u02b9"+
		"\u02bf\7S\2\2\u02ba\u02bd\5\64\33\2\u02bb\u02bc\6\32\17\2\u02bc\u02be"+
		"\5\24\13\2\u02bd\u02bb\3\2\2\2\u02bd\u02be\3\2\2\2\u02be\u02c0\3\2\2\2"+
		"\u02bf\u02ba\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02c1\3\2\2\2\u02c1\u02c2"+
		"\7X\2\2\u02c2\63\3\2\2\2\u02c3\u02c8\5\66\34\2\u02c4\u02c5\7M\2\2\u02c5"+
		"\u02c7\5\64\33\2\u02c6\u02c4\3\2\2\2\u02c7\u02ca\3\2\2\2\u02c8\u02c6\3"+
		"\2\2\2\u02c8\u02c9\3\2\2\2\u02c9\65\3\2\2\2\u02ca\u02c8\3\2\2\2\u02cb"+
		"\u02cd\5\u01d6\u00ec\2\u02cc\u02cb\3\2\2\2\u02cc\u02cd\3\2\2\2\u02cd\u02cf"+
		"\3\2\2\2\u02ce\u02d0\7\f\2\2\u02cf\u02ce\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0"+
		"\u02d1\3\2\2\2\u02d1\u02d6\5$\23\2\u02d2\u02d3\58\35\2\u02d3\u02d4\5&"+
		"\24\2\u02d4\u02d6\3\2\2\2\u02d5\u02cc\3\2\2\2\u02d5\u02d2\3\2\2\2\u02d6"+
		"\67\3\2\2\2\u02d7\u02d9\79\2\2\u02d8\u02da\5\4\3\2\u02d9\u02d8\3\2\2\2"+
		"\u02d9\u02da\3\2\2\2\u02da9\3\2\2\2\u02db\u02df\5(\25\2\u02dc\u02dd\6"+
		"\36\20\2\u02dd\u02de\7I\2\2\u02de\u02e0\5(\25\2\u02df\u02dc\3\2\2\2\u02e0"+
		"\u02e1\3\2\2\2\u02e1\u02df\3\2\2\2\u02e1\u02e2\3\2\2\2\u02e2;\3\2\2\2"+
		"\u02e3\u02e4\7L\2\2\u02e4\u02e9\5(\25\2\u02e5\u02e6\7M\2\2\u02e6\u02e8"+
		"\5(\25\2\u02e7\u02e5\3\2\2\2\u02e8\u02eb\3\2\2\2\u02e9\u02e7\3\2\2\2\u02e9"+
		"\u02ea\3\2\2\2\u02ea=\3\2\2\2\u02eb\u02e9\3\2\2\2\u02ec\u02ee\5F$\2\u02ed"+
		"\u02ec\3\2\2\2\u02ed\u02ee\3\2\2\2\u02ee\u02ef\3\2\2\2\u02ef\u02f3\5B"+
		"\"\2\u02f0\u02f2\5H%\2\u02f1\u02f0\3\2\2\2\u02f2\u02f5\3\2\2\2\u02f3\u02f1"+
		"\3\2\2\2\u02f3\u02f4\3\2\2\2\u02f4?\3\2\2\2\u02f5\u02f3\3\2\2\2\u02f6"+
		"\u02fc\5> \2\u02f7\u02f8\5> \2\u02f8\u02f9\7M\2\2\u02f9\u02fa\5@!\2\u02fa"+
		"\u02fc\3\2\2\2\u02fb\u02f6\3\2\2\2\u02fb\u02f7\3\2\2\2\u02fcA\3\2\2\2"+
		"\u02fd\u0303\5D#\2\u02fe\u0300\5\36\20\2\u02ff\u02fe\3\2\2\2\u02ff\u0300"+
		"\3\2\2\2\u0300\u0301\3\2\2\2\u0301\u0303\5\u0090I\2\u0302\u02fd\3\2\2"+
		"\2\u0302\u02ff\3\2\2\2\u0303C\3\2\2\2\u0304\u0305\6#\21\2\u0305\u0306"+
		"\7I\2\2\u0306\u0307\5\4\3\2\u0307E\3\2\2\2\u0308\u030b\78\2\2\u0309\u030a"+
		"\6$\22\2\u030a\u030c\t\7\2\2\u030b\u0309\3\2\2\2\u030b\u030c\3\2\2\2\u030c"+
		"G\3\2\2\2\u030d\u030e\5\"\22\2\u030e\u030f\5B\"\2\u030f\u031b\3\2\2\2"+
		"\u0310\u0313\5J&\2\u0311\u0313\5L\'\2\u0312\u0310\3\2\2\2\u0312\u0311"+
		"\3\2\2\2\u0313\u0315\3\2\2\2\u0314\u0316\5F$\2\u0315\u0314\3\2\2\2\u0315"+
		"\u0316\3\2\2\2\u0316\u0317\3\2\2\2\u0317\u0318\5B\"\2\u0318\u031b\3\2"+
		"\2\2\u0319\u031b\5N(\2\u031a\u030d\3\2\2\2\u031a\u0312\3\2\2\2\u031a\u0319"+
		"\3\2\2\2\u031bI\3\2\2\2\u031c\u031d\6&\23\2\u031d\u031e\7N\2\2\u031eK"+
		"\3\2\2\2\u031f\u0320\6\'\24\2\u0320\u0321\7U\2\2\u0321\u0322\5> \2\u0322"+
		"\u0323\7L\2\2\u0323M\3\2\2\2\u0324\u032b\7/\2\2\u0325\u0328\7,\2\2\u0326"+
		"\u0327\6(\25\2\u0327\u0329\t\7\2\2\u0328\u0326\3\2\2\2\u0328\u0329\3\2"+
		"\2\2\u0329\u032b\3\2\2\2\u032a\u0324\3\2\2\2\u032a\u0325\3\2\2\2\u032b"+
		"\u032c\3\2\2\2\u032c\u032d\5$\23\2\u032dO\3\2\2\2\u032e\u0330\5\4\3\2"+
		"\u032f\u0331\5\u0206\u0104\2\u0330\u032f\3\2\2\2\u0330\u0331\3\2\2\2\u0331"+
		"\u033e\3\2\2\2\u0332\u033e\5R*\2\u0333\u033e\5Z.\2\u0334\u033e\5b\62\2"+
		"\u0335\u033e\5j\66\2\u0336\u033e\5~@\2\u0337\u033e\5\u0080A\2\u0338\u033e"+
		"\5|?\2\u0339\u033e\5\u0084C\2\u033a\u033e\5\u0086D\2\u033b\u033e\5\u008c"+
		"G\2\u033c\u033e\5\u008eH\2\u033d\u032e\3\2\2\2\u033d\u0332\3\2\2\2\u033d"+
		"\u0333\3\2\2\2\u033d\u0334\3\2\2\2\u033d\u0335\3\2\2\2\u033d\u0336\3\2"+
		"\2\2\u033d\u0337\3\2\2\2\u033d\u0338\3\2\2\2\u033d\u0339\3\2\2\2\u033d"+
		"\u033a\3\2\2\2\u033d\u033b\3\2\2\2\u033d\u033c\3\2\2\2\u033eQ\3\2\2\2"+
		"\u033f\u0348\5\b\5\2\u0340\u0348\5T+\2\u0341\u0348\5V,\2\u0342\u0348\5"+
		"X-\2\u0343\u0348\7@\2\2\u0344\u0348\7F\2\2\u0345\u0348\7<\2\2\u0346\u0348"+
		"\7B\2\2\u0347\u033f\3\2\2\2\u0347\u0340\3\2\2\2\u0347\u0341\3\2\2\2\u0347"+
		"\u0342\3\2\2\2\u0347\u0343\3\2\2\2\u0347\u0344\3\2\2\2\u0347\u0345\3\2"+
		"\2\2\u0347\u0346\3\2\2\2\u0348S\3\2\2\2\u0349\u034a\7R\2\2\u034a\u034f"+
		"\5> \2\u034b\u034c\7M\2\2\u034c\u034e\5> \2\u034d\u034b\3\2\2\2\u034e"+
		"\u0351\3\2\2\2\u034f\u034d\3\2\2\2\u034f\u0350\3\2\2\2\u0350\u0353\3\2"+
		"\2\2\u0351\u034f\3\2\2\2\u0352\u0354\7M\2\2\u0353\u0352\3\2\2\2\u0353"+
		"\u0354\3\2\2\2\u0354\u0355\3\2\2\2\u0355\u0356\7W\2\2\u0356U\3\2\2\2\u0357"+
		"\u0358\7R\2\2\u0358\u0359\5> \2\u0359\u035a\7L\2\2\u035a\u0362\5> \2\u035b"+
		"\u035c\7M\2\2\u035c\u035d\5> \2\u035d\u035e\7L\2\2\u035e\u035f\5> \2\u035f"+
		"\u0361\3\2\2\2\u0360\u035b\3\2\2\2\u0361\u0364\3\2\2\2\u0362\u0360\3\2"+
		"\2\2\u0362\u0363\3\2\2\2\u0363\u0366\3\2\2\2\u0364\u0362\3\2\2\2\u0365"+
		"\u0367\7M\2\2\u0366\u0365\3\2\2\2\u0366\u0367\3\2\2\2\u0367\u0368\3\2"+
		"\2\2\u0368\u0369\7W\2\2\u0369W\3\2\2\2\u036a\u036b\7;\2\2\u036b\u036c"+
		"\7S\2\2\u036c\u036d\6-\26\2\u036d\u036e\7i\2\2\u036e\u036f\7L\2\2\u036f"+
		"\u0370\5> \2\u0370\u0371\7M\2\2\u0371\u0372\6-\27\2\u0372\u0373\7i\2\2"+
		"\u0373\u0374\7L\2\2\u0374\u0375\5> \2\u0375\u0376\7M\2\2\u0376\u0377\6"+
		"-\30\2\u0377\u0378\7i\2\2\u0378\u0379\7L\2\2\u0379\u037a\5> \2\u037a\u037b"+
		"\7M\2\2\u037b\u037c\6-\31\2\u037c\u037d\7i\2\2\u037d\u037e\7L\2\2\u037e"+
		"\u037f\5> \2\u037f\u0380\7X\2\2\u0380\u038a\3\2\2\2\u0381\u0382\t\b\2"+
		"\2\u0382\u0383\7S\2\2\u0383\u0384\6-\32\2\u0384\u0385\7i\2\2\u0385\u0386"+
		"\7L\2\2\u0386\u0387\5> \2\u0387\u0388\7X\2\2\u0388\u038a\3\2\2\2\u0389"+
		"\u036a\3\2\2\2\u0389\u0381\3\2\2\2\u038aY\3\2\2\2\u038b\u0390\7\62\2\2"+
		"\u038c\u0390\5\\/\2\u038d\u0390\5^\60\2\u038e\u0390\5`\61\2\u038f\u038b"+
		"\3\2\2\2\u038f\u038c\3\2\2\2\u038f\u038d\3\2\2\2\u038f\u038e\3\2\2\2\u0390"+
		"[\3\2\2\2\u0391\u0392\7\62\2\2\u0392\u0393\7T\2\2\u0393\u0394\5\4\3\2"+
		"\u0394]\3\2\2\2\u0395\u0396\7\62\2\2\u0396\u0397\7R\2\2\u0397\u0398\5"+
		"\u0094K\2\u0398\u0399\7W\2\2\u0399_\3\2\2\2\u039a\u039b\7\62\2\2\u039b"+
		"\u039c\7T\2\2\u039c\u039d\7\13\2\2\u039da\3\2\2\2\u039e\u03a2\5d\63\2"+
		"\u039f\u03a2\5f\64\2\u03a0\u03a2\5h\65\2\u03a1\u039e\3\2\2\2\u03a1\u039f"+
		"\3\2\2\2\u03a1\u03a0\3\2\2\2\u03a2c\3\2\2\2\u03a3\u03a4\7\64\2\2\u03a4"+
		"\u03a5\7T\2\2\u03a5\u03a6\5\4\3\2\u03a6e\3\2\2\2\u03a7\u03a8\7\64\2\2"+
		"\u03a8\u03a9\7R\2\2\u03a9\u03aa\5\u0094K\2\u03aa\u03ab\7W\2\2\u03abg\3"+
		"\2\2\2\u03ac\u03ad\7\64\2\2\u03ad\u03ae\7T\2\2\u03ae\u03af\7\13\2\2\u03af"+
		"i\3\2\2\2\u03b0\u03b2\7Q\2\2\u03b1\u03b3\5l\67\2\u03b2\u03b1\3\2\2\2\u03b2"+
		"\u03b3\3\2\2\2\u03b3\u03b5\3\2\2\2\u03b4\u03b6\5\u009eP\2\u03b5\u03b4"+
		"\3\2\2\2\u03b5\u03b6\3\2\2\2\u03b6\u03b7\3\2\2\2\u03b7\u03b8\7V\2\2\u03b8"+
		"k\3\2\2\2\u03b9\u03bb\5v<\2\u03ba\u03b9\3\2\2\2\u03ba\u03bb\3\2\2\2\u03bb"+
		"\u03bc\3\2\2\2\u03bc\u03be\5n8\2\u03bd\u03bf\7\66\2\2\u03be\u03bd\3\2"+
		"\2\2\u03be\u03bf\3\2\2\2\u03bf\u03c1\3\2\2\2\u03c0\u03c2\5\u013c\u009f"+
		"\2\u03c1\u03c0\3\2\2\2\u03c1\u03c2\3\2\2\2\u03c2\u03c5\3\2\2\2\u03c3\u03c5"+
		"\5v<\2\u03c4\u03ba\3\2\2\2\u03c4\u03c3\3\2\2\2\u03c5\u03c6\3\2\2\2\u03c6"+
		"\u03c7\7%\2\2\u03c7m\3\2\2\2\u03c8\u03ca\7S\2\2\u03c9\u03cb\5p9\2\u03ca"+
		"\u03c9\3\2\2\2\u03ca\u03cb\3\2\2\2\u03cb\u03cc\3\2\2\2\u03cc\u03cf\7X"+
		"\2\2\u03cd\u03cf\5\6\4\2\u03ce\u03c8\3\2\2\2\u03ce\u03cd\3\2\2\2\u03cf"+
		"o\3\2\2\2\u03d0\u03d5\5r:\2\u03d1\u03d2\7M\2\2\u03d2\u03d4\5r:\2\u03d3"+
		"\u03d1\3\2\2\2\u03d4\u03d7\3\2\2\2\u03d5\u03d3\3\2\2\2\u03d5\u03d6\3\2"+
		"\2\2\u03d6q\3\2\2\2\u03d7\u03d5\3\2\2\2\u03d8\u03de\5t;\2\u03d9\u03dc"+
		"\5&\24\2\u03da\u03db\6:\33\2\u03db\u03dd\5\24\13\2\u03dc\u03da\3\2\2\2"+
		"\u03dc\u03dd\3\2\2\2\u03dd\u03df\3\2\2\2\u03de\u03d9\3\2\2\2\u03de\u03df"+
		"\3\2\2\2\u03dfs\3\2\2\2\u03e0\u03e2\79\2\2\u03e1\u03e0\3\2\2\2\u03e1\u03e2"+
		"\3\2\2\2\u03e2\u03e3\3\2\2\2\u03e3\u03e4\5\4\3\2\u03e4u\3\2\2\2\u03e5"+
		"\u03e6\7R\2\2\u03e6\u03eb\5x=\2\u03e7\u03e8\7M\2\2\u03e8\u03ea\5x=\2\u03e9"+
		"\u03e7\3\2\2\2\u03ea\u03ed\3\2\2\2\u03eb\u03e9\3\2\2\2\u03eb\u03ec\3\2"+
		"\2\2\u03ec\u03ee\3\2\2\2\u03ed\u03eb\3\2\2\2\u03ee\u03ef\7W\2\2\u03ef"+
		"w\3\2\2\2\u03f0\u03f2\5z>\2\u03f1\u03f0\3\2\2\2\u03f1\u03f2\3\2\2\2\u03f2"+
		"\u03f3\3\2\2\2\u03f3\u03f4\5> \2\u03f4y\3\2\2\2\u03f5\u03f6\6>\34\2\u03f6"+
		"\u0400\7i\2\2\u03f7\u03f8\6>\35\2\u03f8\u03fd\7i\2\2\u03f9\u03fa\7S\2"+
		"\2\u03fa\u03fb\6>\36\2\u03fb\u03fc\7i\2\2\u03fc\u03fe\7X\2\2\u03fd\u03f9"+
		"\3\2\2\2\u03fd\u03fe\3\2\2\2\u03fe\u0400\3\2\2\2\u03ff\u03f5\3\2\2\2\u03ff"+
		"\u03f7\3\2\2\2\u0400{\3\2\2\2\u0401\u0402\7T\2\2\u0402\u0403\5\4\3\2\u0403"+
		"}\3\2\2\2\u0404\u0405\7S\2\2\u0405\u0406\5> \2\u0406\u0407\7X\2\2\u0407"+
		"\177\3\2\2\2\u0408\u0410\7S\2\2\u0409\u040c\5\u0082B\2\u040a\u040b\7M"+
		"\2\2\u040b\u040d\5\u0082B\2\u040c\u040a\3\2\2\2\u040d\u040e\3\2\2\2\u040e"+
		"\u040c\3\2\2\2\u040e\u040f\3\2\2\2\u040f\u0411\3\2\2\2\u0410\u0409\3\2"+
		"\2\2\u0410\u0411\3\2\2\2\u0411\u0412\3\2\2\2\u0412\u0413\7X\2\2\u0413"+
		"\u0081\3\2\2\2\u0414\u0417\79\2\2\u0415\u0417\5\4\3\2\u0416\u0414\3\2"+
		"\2\2\u0416\u0415\3\2\2\2\u0417\u0418\3\2\2\2\u0418\u041a\7L\2\2\u0419"+
		"\u0416\3\2\2\2\u0419\u041a\3\2\2\2\u041a\u041b\3\2\2\2\u041b\u041c\5>"+
		" \2\u041c\u0083\3\2\2\2\u041d\u041e\79\2\2\u041e\u0085\3\2\2\2\u041f\u0421"+
		"\7[\2\2\u0420\u0422\5$\23\2\u0421\u0420\3\2\2\2\u0421\u0422\3\2\2\2\u0422"+
		"\u0423\3\2\2\2\u0423\u0424\7T\2\2\u0424\u0427\5\u0088E\2\u0425\u0426\7"+
		"T\2\2\u0426\u0428\5\u0088E\2\u0427\u0425\3\2\2\2\u0428\u0429\3\2\2\2\u0429"+
		"\u0427\3\2\2\2\u0429\u042a\3\2\2\2\u042a\u0087\3\2\2\2\u042b\u042f\5\4"+
		"\3\2\u042c\u042e\5\u008aF\2\u042d\u042c\3\2\2\2\u042e\u0431\3\2\2\2\u042f"+
		"\u042d\3\2\2\2\u042f\u0430\3\2\2\2\u0430\u0438\3\2\2\2\u0431\u042f\3\2"+
		"\2\2\u0432\u0434\5\u008aF\2\u0433\u0432\3\2\2\2\u0434\u0435\3\2\2\2\u0435"+
		"\u0433\3\2\2\2\u0435\u0436\3\2\2\2\u0436\u0438\3\2\2\2\u0437\u042b\3\2"+
		"\2\2\u0437\u0433\3\2\2\2\u0438\u0089\3\2\2\2\u0439\u043a\6F\37\2\u043a"+
		"\u0440\t\7\2\2\u043b\u043c\7R\2\2\u043c\u043d\5\u0094K\2\u043d\u043e\7"+
		"W\2\2\u043e\u0440\3\2\2\2\u043f\u0439\3\2\2\2\u043f\u043b\3\2\2\2\u0440"+
		"\u008b\3\2\2\2\u0441\u0442\7G\2\2\u0442\u0446\7S\2\2\u0443\u0444\6G \2"+
		"\u0444\u0445\7i\2\2\u0445\u0447\7L\2\2\u0446\u0443\3\2\2\2\u0446\u0447"+
		"\3\2\2\2\u0447\u0448\3\2\2\2\u0448\u0449\5> \2\u0449\u044a\7X\2\2\u044a"+
		"\u008d\3\2\2\2\u044b\u044c\7E\2\2\u044c\u044d\7S\2\2\u044d\u044e\5> \2"+
		"\u044e\u044f\7X\2\2\u044f\u008f\3\2\2\2\u0450\u0451\bI\1\2\u0451\u0452"+
		"\5P)\2\u0452\u0486\3\2\2\2\u0453\u0454\f\n\2\2\u0454\u0485\5 \21\2\u0455"+
		"\u0456\f\t\2\2\u0456\u045c\6I#\2\u0457\u045d\5\u0092J\2\u0458\u045a\5"+
		"\u0092J\2\u0459\u0458\3\2\2\2\u0459\u045a\3\2\2\2\u045a\u045b\3\2\2\2"+
		"\u045b\u045d\5\u0098M\2\u045c\u0457\3\2\2\2\u045c\u0459\3\2\2\2\u045d"+
		"\u0485\3\2\2\2\u045e\u045f\f\b\2\2\u045f\u0460\7T\2\2\u0460\u0465\7\13"+
		"\2\2\u0461\u0462\7S\2\2\u0462\u0463\5\u009aN\2\u0463\u0464\7X\2\2\u0464"+
		"\u0466\3\2\2\2\u0465\u0461\3\2\2\2\u0465\u0466\3\2\2\2\u0466\u0485\3\2"+
		"\2\2\u0467\u0468\f\7\2\2\u0468\u0474\7T\2\2\u0469\u0475\7m\2\2\u046a\u0472"+
		"\5\4\3\2\u046b\u046d\5\u0206\u0104\2\u046c\u046b\3\2\2\2\u046c\u046d\3"+
		"\2\2\2\u046d\u0473\3\2\2\2\u046e\u046f\7S\2\2\u046f\u0470\5\u009aN\2\u0470"+
		"\u0471\7X\2\2\u0471\u0473\3\2\2\2\u0472\u046c\3\2\2\2\u0472\u046e\3\2"+
		"\2\2\u0473\u0475\3\2\2\2\u0474\u0469\3\2\2\2\u0474\u046a\3\2\2\2\u0475"+
		"\u0485\3\2\2\2\u0476\u0477\f\6\2\2\u0477\u0478\7T\2\2\u0478\u0485\7\62"+
		"\2\2\u0479\u047a\f\5\2\2\u047a\u047b\7R\2\2\u047b\u047c\5\u0094K\2\u047c"+
		"\u047d\7W\2\2\u047d\u0485\3\2\2\2\u047e\u047f\f\4\2\2\u047f\u0480\6I)"+
		"\2\u0480\u0485\7O\2\2\u0481\u0482\f\3\2\2\u0482\u0483\6I+\2\u0483\u0485"+
		"\7U\2\2\u0484\u0453\3\2\2\2\u0484\u0455\3\2\2\2\u0484\u045e\3\2\2\2\u0484"+
		"\u0467\3\2\2\2\u0484\u0476\3\2\2\2\u0484\u0479\3\2\2\2\u0484\u047e\3\2"+
		"\2\2\u0484\u0481\3\2\2\2\u0485\u0488\3\2\2\2\u0486\u0484\3\2\2\2\u0486"+
		"\u0487\3\2\2\2\u0487\u0091\3\2\2\2\u0488\u0486\3\2\2\2\u0489\u048b\7S"+
		"\2\2\u048a\u048c\5\u0094K\2\u048b\u048a\3\2\2\2\u048b\u048c\3\2\2\2\u048c"+
		"\u048d\3\2\2\2\u048d\u048e\7X\2\2\u048e\u0093\3\2\2\2\u048f\u0494\5\u0096"+
		"L\2\u0490\u0491\7M\2\2\u0491\u0493\5\u0096L\2\u0492\u0490\3\2\2\2\u0493"+
		"\u0496\3\2\2\2\u0494\u0492\3\2\2\2\u0494\u0495\3\2\2\2\u0495\u0095\3\2"+
		"\2\2\u0496\u0494\3\2\2\2\u0497\u049a\79\2\2\u0498\u049a\5\4\3\2\u0499"+
		"\u0497\3\2\2\2\u0499\u0498\3\2\2\2\u049a\u049b\3\2\2\2\u049b\u049d\7L"+
		"\2\2\u049c\u0499\3\2\2\2\u049c\u049d\3\2\2\2\u049d\u04a0\3\2\2\2\u049e"+
		"\u04a1\5> \2\u049f\u04a1\5\24\13\2\u04a0\u049e\3\2\2\2\u04a0\u049f\3\2"+
		"\2\2\u04a1\u0097\3\2\2\2\u04a2\u04a3\5j\66\2\u04a3\u0099\3\2\2\2\u04a4"+
		"\u04a7\79\2\2\u04a5\u04a7\5\4\3\2\u04a6\u04a4\3\2\2\2\u04a6\u04a5\3\2"+
		"\2\2\u04a7\u04a8\3\2\2\2\u04a8\u04aa\7L\2\2\u04a9\u04a6\3\2\2\2\u04aa"+
		"\u04ab\3\2\2\2\u04ab\u04a9\3\2\2\2\u04ab\u04ac\3\2\2\2\u04ac\u009b\3\2"+
		"\2\2\u04ad\u04b6\6O,\2\u04ae\u04b7\5> \2\u04af\u04b7\5\u00fe\u0080\2\u04b0"+
		"\u04b7\5\u00a0Q\2\u04b1\u04b7\5\u00b0Y\2\u04b2\u04b7\5\u00c4c\2\u04b3"+
		"\u04b7\5\u00caf\2\u04b4\u04b7\5\u00d6l\2\u04b5\u04b7\5\u00d8m\2\u04b6"+
		"\u04ae\3\2\2\2\u04b6\u04af\3\2\2\2\u04b6\u04b0\3\2\2\2\u04b6\u04b1\3\2"+
		"\2\2\u04b6\u04b2\3\2\2\2\u04b6\u04b3\3\2\2\2\u04b6\u04b4\3\2\2\2\u04b6"+
		"\u04b5\3\2\2\2\u04b7\u04b9\3\2\2\2\u04b8\u04ba\7Y\2\2\u04b9\u04b8\3\2"+
		"\2\2\u04b9\u04ba\3\2\2\2\u04ba\u04bd\3\2\2\2\u04bb\u04bd\5\u00dco\2\u04bc"+
		"\u04ad\3\2\2\2\u04bc\u04bb\3\2\2\2\u04bd\u009d\3\2\2\2\u04be\u04c0\5\u009c"+
		"O\2\u04bf\u04be\3\2\2\2\u04c0\u04c1\3\2\2\2\u04c1\u04bf\3\2\2\2\u04c1"+
		"\u04c2\3\2\2\2\u04c2\u009f\3\2\2\2\u04c3\u04c7\5\u00a2R\2\u04c4\u04c7"+
		"\5\u00a4S\2\u04c5\u04c7\5\u00aeX\2\u04c6\u04c3\3\2\2\2\u04c6\u04c4\3\2"+
		"\2\2\u04c6\u04c5\3\2\2\2\u04c7\u00a1\3\2\2\2\u04c8\u04ca\7\"\2\2\u04c9"+
		"\u04cb\7\33\2\2\u04ca\u04c9\3\2\2\2\u04ca\u04cb\3\2\2\2\u04cb\u04cc\3"+
		"\2\2\2\u04cc\u04ce\5\u01dc\u00ef\2\u04cd\u04cf\7%\2\2\u04ce\u04cd\3\2"+
		"\2\2\u04ce\u04cf\3\2\2\2\u04cf\u04d0\3\2\2\2\u04d0\u04d2\5> \2\u04d1\u04d3"+
		"\5\u00c2b\2\u04d2\u04d1\3\2\2\2\u04d2\u04d3\3\2\2\2\u04d3\u04d4\3\2\2"+
		"\2\u04d4\u04d5\5\u0102\u0082\2\u04d5\u00a3\3\2\2\2\u04d6\u04d7\7*\2\2"+
		"\u04d7\u04d8\5\u00a6T\2\u04d8\u04d9\5\u0102\u0082\2\u04d9\u00a5\3\2\2"+
		"\2\u04da\u04df\5\u00a8U\2\u04db\u04dc\7M\2\2\u04dc\u04de\5\u00a8U\2\u04dd"+
		"\u04db\3\2\2\2\u04de\u04e1\3\2\2\2\u04df\u04dd\3\2\2\2\u04df\u04e0\3\2"+
		"\2\2\u04e0\u00a7\3\2\2\2\u04e1\u04df\3\2\2\2\u04e2\u04e7\5> \2\u04e3\u04e7"+
		"\5\u00f6|\2\u04e4\u04e7\5\u00aaV\2\u04e5\u04e7\5\u00acW\2\u04e6\u04e2"+
		"\3\2\2\2\u04e6\u04e3\3\2\2\2\u04e6\u04e4\3\2\2\2\u04e6\u04e5\3\2\2\2\u04e7"+
		"\u00a9\3\2\2\2\u04e8\u04e9\7\33\2\2\u04e9\u04ea\5\u01dc\u00ef\2\u04ea"+
		"\u04eb\5\u0112\u008a\2\u04eb\u00ab\3\2\2\2\u04ec\u04ed\t\t\2\2\u04ed\u04ee"+
		"\5\u01dc\u00ef\2\u04ee\u04ef\5\u0112\u008a\2\u04ef\u00ad\3\2\2\2\u04f0"+
		"\u04f1\7&\2\2\u04f1\u04f2\5\u0102\u0082\2\u04f2\u04f3\7*\2\2\u04f3\u04f4"+
		"\5> \2\u04f4\u00af\3\2\2\2\u04f5\u04f9\5\u00b2Z\2\u04f6\u04f9\5\u00b6"+
		"\\\2\u04f7\u04f9\5\u00b8]\2\u04f8\u04f5\3\2\2\2\u04f8\u04f6\3\2\2\2\u04f8"+
		"\u04f7\3\2\2\2\u04f9\u00b1\3\2\2\2\u04fa\u04fb\7$\2\2\u04fb\u04fc\5\u00a6"+
		"T\2\u04fc\u04fe\5\u0102\u0082\2\u04fd\u04ff\5\u00b4[\2\u04fe\u04fd\3\2"+
		"\2\2\u04fe\u04ff\3\2\2\2\u04ff\u00b3\3\2\2\2\u0500\u0503\7 \2\2\u0501"+
		"\u0504\5\u0102\u0082\2\u0502\u0504\5\u00b2Z\2\u0503\u0501\3\2\2\2\u0503"+
		"\u0502\3\2\2\2\u0504\u00b5\3\2\2\2\u0505\u0506\7#\2\2\u0506\u0507\5\u00a6"+
		"T\2\u0507\u0508\7 \2\2\u0508\u0509\5\u0102\u0082\2\u0509\u00b7\3\2\2\2"+
		"\u050a\u050b\7(\2\2\u050b\u050c\5> \2\u050c\u0510\7Q\2\2\u050d\u050f\5"+
		"\u00ba^\2\u050e\u050d\3\2\2\2\u050f\u0512\3\2\2\2\u0510\u050e\3\2\2\2"+
		"\u0510\u0511\3\2\2\2\u0511\u0513\3\2\2\2\u0512\u0510\3\2\2\2\u0513\u0514"+
		"\7V\2\2\u0514\u00b9\3\2\2\2\u0515\u0518\5\u00bc_\2\u0516\u0518\5\u00c0"+
		"a\2\u0517\u0515\3\2\2\2\u0517\u0516\3\2\2\2\u0518\u0519\3\2\2\2\u0519"+
		"\u051a\5\u009eP\2\u051a\u00bb\3\2\2\2\u051b\u051c\7\33\2\2\u051c\u051d"+
		"\5\u00be`\2\u051d\u051e\7L\2\2\u051e\u00bd\3\2\2\2\u051f\u0521\5\u01dc"+
		"\u00ef\2\u0520\u0522\5\u00c2b\2\u0521\u0520\3\2\2\2\u0521\u0522\3\2\2"+
		"\2\u0522\u052a\3\2\2\2\u0523\u0524\7M\2\2\u0524\u0526\5\u01dc\u00ef\2"+
		"\u0525\u0527\5\u00c2b\2\u0526\u0525\3\2\2\2\u0526\u0527\3\2\2\2\u0527"+
		"\u0529\3\2\2\2\u0528\u0523\3\2\2\2\u0529\u052c\3\2\2\2\u052a\u0528\3\2"+
		"\2\2\u052a\u052b\3\2\2\2\u052b\u00bf\3\2\2\2\u052c\u052a\3\2\2\2\u052d"+
		"\u052e\7\35\2\2\u052e\u052f\7L\2\2\u052f\u00c1\3\2\2\2\u0530\u0531\7)"+
		"\2\2\u0531\u0532\5> \2\u0532\u00c3\3\2\2\2\u0533\u0538\5\u00c6d\2\u0534"+
		"\u0539\5\u00a0Q\2\u0535\u0539\5\u00b2Z\2\u0536\u0539\5\u00b8]\2\u0537"+
		"\u0539\5\u00d8m\2\u0538\u0534\3\2\2\2\u0538\u0535\3\2\2\2\u0538\u0536"+
		"\3\2\2\2\u0538\u0537\3\2\2\2\u0539\u00c5\3\2\2\2\u053a\u053b\5\u00c8e"+
		"\2\u053b\u053c\7L\2\2\u053c\u00c7\3\2\2\2\u053d\u053e\5\4\3\2\u053e\u00c9"+
		"\3\2\2\2\u053f\u0545\5\u00ccg\2\u0540\u0545\5\u00ceh\2\u0541\u0545\5\u00d0"+
		"i\2\u0542\u0545\5\u00d2j\2\u0543\u0545\5\u00d4k\2\u0544\u053f\3\2\2\2"+
		"\u0544\u0540\3\2\2\2\u0544\u0541\3\2\2\2\u0544\u0542\3\2\2\2\u0544\u0543"+
		"\3\2\2\2\u0545\u00cb\3\2\2\2\u0546\u0548\7\32\2\2\u0547\u0549\5\u00c8"+
		"e\2\u0548\u0547\3\2\2\2\u0548\u0549\3\2\2\2\u0549\u00cd\3\2\2\2\u054a"+
		"\u054c\7\34\2\2\u054b\u054d\5\u00c8e\2\u054c\u054b\3\2\2\2\u054c\u054d"+
		"\3\2\2\2\u054d\u00cf\3\2\2\2\u054e\u054f\7!\2\2\u054f\u00d1\3\2\2\2\u0550"+
		"\u0552\7\'\2\2\u0551\u0553\5> \2\u0552\u0551\3\2\2\2\u0552\u0553\3\2\2"+
		"\2\u0553\u00d3\3\2\2\2\u0554\u0555\7\65\2\2\u0555\u0556\5> \2\u0556\u00d5"+
		"\3\2\2\2\u0557\u0558\7\36\2\2\u0558\u0559\5\u0102\u0082\2\u0559\u00d7"+
		"\3\2\2\2\u055a\u055b\7\37\2\2\u055b\u055f\5\u0102\u0082\2\u055c\u055e"+
		"\5\u00dan\2\u055d\u055c\3\2\2\2\u055e\u0561\3\2\2\2\u055f\u055d\3\2\2"+
		"\2\u055f\u0560\3\2\2\2\u0560\u00d9\3\2\2\2\u0561\u055f\3\2\2\2\u0562\u0564"+
		"\7-\2\2\u0563\u0565\5\u01dc\u00ef\2\u0564\u0563\3\2\2\2\u0564\u0565\3"+
		"\2\2\2\u0565\u0567\3\2\2\2\u0566\u0568\5\u00c2b\2\u0567\u0566\3\2\2\2"+
		"\u0567\u0568\3\2\2\2\u0568\u0569\3\2\2\2\u0569\u056a\5\u0102\u0082\2\u056a"+
		"\u00db\3\2\2\2\u056b\u056e\5\u00dep\2\u056c\u056e\5\u00f0y\2\u056d\u056b"+
		"\3\2\2\2\u056d\u056c\3\2\2\2\u056e\u00dd\3\2\2\2\u056f\u0573\5\u00e0q"+
		"\2\u0570\u0572\5\u00e2r\2\u0571\u0570\3\2\2\2\u0572\u0575\3\2\2\2\u0573"+
		"\u0571\3\2\2\2\u0573\u0574\3\2\2\2\u0574\u0577\3\2\2\2\u0575\u0573\3\2"+
		"\2\2\u0576\u0578\5\u00e4s\2\u0577\u0576\3\2\2\2\u0577\u0578\3\2\2\2\u0578"+
		"\u0579\3\2\2\2\u0579\u057a\7?\2\2\u057a\u00df\3\2\2\2\u057b\u057c\7C\2"+
		"\2\u057c\u057e\5\u00e6t\2\u057d\u057f\5\u009eP\2\u057e\u057d\3\2\2\2\u057e"+
		"\u057f\3\2\2\2\u057f\u00e1\3\2\2\2\u0580\u0581\7>\2\2\u0581\u0583\5\u00e6"+
		"t\2\u0582\u0584\5\u009eP\2\u0583\u0582\3\2\2\2\u0583\u0584\3\2\2\2\u0584"+
		"\u00e3\3\2\2\2\u0585\u0587\7=\2\2\u0586\u0588\5\u009eP\2\u0587\u0586\3"+
		"\2\2\2\u0587\u0588\3\2\2\2\u0588\u00e5\3\2\2\2\u0589\u058a\bt\1\2\u058a"+
		"\u0595\5\u00e8u\2\u058b\u0595\5\4\3\2\u058c\u0595\5\f\7\2\u058d\u058e"+
		"\7S\2\2\u058e\u058f\5\u00e6t\2\u058f\u0590\7X\2\2\u0590\u0595\3\2\2\2"+
		"\u0591\u0592\6t-\2\u0592\u0593\7O\2\2\u0593\u0595\5\u00e6t\4\u0594\u0589"+
		"\3\2\2\2\u0594\u058b\3\2\2\2\u0594\u058c\3\2\2\2\u0594\u058d\3\2\2\2\u0594"+
		"\u0591\3\2\2\2\u0595\u059d\3\2\2\2\u0596\u0597\f\3\2\2\u0597\u0598\6t"+
		"/\2\u0598\u0599\5\"\22\2\u0599\u059a\5\u00e6t\4\u059a\u059c\3\2\2\2\u059b"+
		"\u0596\3\2\2\2\u059c\u059f\3\2\2\2\u059d\u059b\3\2\2\2\u059d\u059e\3\2"+
		"\2\2\u059e\u00e7\3\2\2\2\u059f\u059d\3\2\2\2\u05a0\u05a1\6u\60\2\u05a1"+
		"\u05a2\7i\2\2\u05a2\u05a3\7S\2\2\u05a3\u05a4\5\u00eav\2\u05a4\u05a5\7"+
		"X\2\2\u05a5\u05b5\3\2\2\2\u05a6\u05a7\6u\61\2\u05a7\u05a8\7i\2\2\u05a8"+
		"\u05a9\7S\2\2\u05a9\u05aa\5\u00ecw\2\u05aa\u05ab\7X\2\2\u05ab\u05b5\3"+
		"\2\2\2\u05ac\u05ad\6u\62\2\u05ad\u05ae\7i\2\2\u05ae\u05af\7S\2\2\u05af"+
		"\u05b0\6u\63\2\u05b0\u05b1\5\"\22\2\u05b1\u05b2\5\u00eex\2\u05b2\u05b3"+
		"\7X\2\2\u05b3\u05b5\3\2\2\2\u05b4\u05a0\3\2\2\2\u05b4\u05a6\3\2\2\2\u05b4"+
		"\u05ac\3\2\2\2\u05b5\u00e9\3\2\2\2\u05b6\u05b7\6v\64\2\u05b7\u05b8\7i"+
		"\2\2\u05b8\u00eb\3\2\2\2\u05b9\u05ba\6w\65\2\u05ba\u05bb\7i\2\2\u05bb"+
		"\u00ed\3\2\2\2\u05bc\u05c1\7m\2\2\u05bd\u05be\7T\2\2\u05be\u05c0\7m\2"+
		"\2\u05bf\u05bd\3\2\2\2\u05c0\u05c3\3\2\2\2\u05c1\u05bf\3\2\2\2\u05c1\u05c2"+
		"\3\2\2\2\u05c2\u00ef\3\2\2\2\u05c3\u05c1\3\2\2\2\u05c4\u05c5\7H\2\2\u05c5"+
		"\u05d0\7S\2\2\u05c6\u05c7\6y\66\2\u05c7\u05c8\7i\2\2\u05c8\u05c9\7L\2"+
		"\2\u05c9\u05ca\5\u00f4{\2\u05ca\u05cb\7M\2\2\u05cb\u05cc\6y\67\2\u05cc"+
		"\u05cd\7i\2\2\u05cd\u05ce\7L\2\2\u05ce\u05cf\5\u00f2z\2\u05cf\u05d1\3"+
		"\2\2\2\u05d0\u05c6\3\2\2\2\u05d0\u05d1\3\2\2\2\u05d1\u05d2\3\2\2\2\u05d2"+
		"\u05d3\7X\2\2\u05d3\u00f1\3\2\2\2\u05d4\u05d5\6z8\2\u05d5\u05d6\7m\2\2"+
		"\u05d6\u00f3\3\2\2\2\u05d7\u05d8\7q\2\2\u05d8\u00f5\3\2\2\2\u05d9\u05da"+
		"\7:\2\2\u05da\u05db\7S\2\2\u05db\u05e0\5\u00f8}\2\u05dc\u05dd\7M\2\2\u05dd"+
		"\u05df\5\u00f8}\2\u05de\u05dc\3\2\2\2\u05df\u05e2\3\2\2\2\u05e0\u05de"+
		"\3\2\2\2\u05e0\u05e1\3\2\2\2\u05e1\u05e3\3\2\2\2\u05e2\u05e0\3\2\2\2\u05e3"+
		"\u05e4\7X\2\2\u05e4\u00f7\3\2\2\2\u05e5\u05ea\7Z\2\2\u05e6\u05e7\5\u00fa"+
		"~\2\u05e7\u05e8\5\u00fc\177\2\u05e8\u05ea\3\2\2\2\u05e9\u05e5\3\2\2\2"+
		"\u05e9\u05e6\3\2\2\2\u05ea\u00f9\3\2\2\2\u05eb\u05ec\6~9\2\u05ec\u05ed"+
		"\7i\2\2\u05ed\u00fb\3\2\2\2\u05ee\u05f5\7m\2\2\u05ef\u05f0\7T\2\2\u05f0"+
		"\u05f3\7m\2\2\u05f1\u05f2\7T\2\2\u05f2\u05f4\7m\2\2\u05f3\u05f1\3\2\2"+
		"\2\u05f3\u05f4\3\2\2\2\u05f4\u05f6\3\2\2\2\u05f5\u05ef\3\2\2\2\u05f5\u05f6"+
		"\3\2\2\2\u05f6\u00fd\3\2\2\2\u05f7\u0607\5\u0104\u0083\2\u05f8\u0607\5"+
		"\u010c\u0087\2\u05f9\u0607\5\u0114\u008b\2\u05fa\u0607\5\u012e\u0098\2"+
		"\u05fb\u0607\5\u0134\u009b\2\u05fc\u0607\5\u014c\u00a7\2\u05fd\u0607\5"+
		"\u016e\u00b8\2\u05fe\u0607\5\u0178\u00bd\2\u05ff\u0607\5\u0182\u00c2\2"+
		"\u0600\u0607\5\u0198\u00cd\2\u0601\u0607\5\u019e\u00d0\2\u0602\u0607\5"+
		"\u01a0\u00d1\2\u0603\u0607\5\u01a8\u00d5\2\u0604\u0607\5\u01ae\u00d8\2"+
		"\u0605\u0607\5\u01b8\u00dd\2\u0606\u05f7\3\2\2\2\u0606\u05f8\3\2\2\2\u0606"+
		"\u05f9\3\2\2\2\u0606\u05fa\3\2\2\2\u0606\u05fb\3\2\2\2\u0606\u05fc\3\2"+
		"\2\2\u0606\u05fd\3\2\2\2\u0606\u05fe\3\2\2\2\u0606\u05ff\3\2\2\2\u0606"+
		"\u0600\3\2\2\2\u0606\u0601\3\2\2\2\u0606\u0602\3\2\2\2\u0606\u0603\3\2"+
		"\2\2\u0606\u0604\3\2\2\2\u0606\u0605\3\2\2\2\u0607\u00ff\3\2\2\2\u0608"+
		"\u060a\5\u009eP\2\u0609\u0608\3\2\2\2\u0609\u060a\3\2\2\2\u060a\u0101"+
		"\3\2\2\2\u060b\u060d\7Q\2\2\u060c\u060e\5\u009eP\2\u060d\u060c\3\2\2\2"+
		"\u060d\u060e\3\2\2\2\u060e\u060f\3\2\2\2\u060f\u0610\7V\2\2\u0610\u0103"+
		"\3\2\2\2\u0611\u0613\5\u01d6\u00ec\2\u0612\u0611\3\2\2\2\u0612\u0613\3"+
		"\2\2\2\u0613\u0614\3\2\2\2\u0614\u0616\7\n\2\2\u0615\u0617\5\u0106\u0084"+
		"\2\u0616\u0615\3\2\2\2\u0616\u0617\3\2\2\2\u0617\u0618\3\2\2\2\u0618\u0619"+
		"\5\u0108\u0085\2\u0619\u0105\3\2\2\2\u061a\u061b\t\n\2\2\u061b\u0107\3"+
		"\2\2\2\u061c\u0621\5\u010a\u0086\2\u061d\u061e\7T\2\2\u061e\u0620\5\u010a"+
		"\u0086\2\u061f\u061d\3\2\2\2\u0620\u0623\3\2\2\2\u0621\u061f\3\2\2\2\u0621"+
		"\u0622\3\2\2\2\u0622\u0109\3\2\2\2\u0623\u0621\3\2\2\2\u0624\u0627\5\4"+
		"\3\2\u0625\u0627\5\24\13\2\u0626\u0624\3\2\2\2\u0626\u0625\3\2\2\2\u0627"+
		"\u010b\3\2\2\2\u0628\u062a\5\u01d6\u00ec\2\u0629\u0628\3\2\2\2\u0629\u062a"+
		"\3\2\2\2\u062a\u062c\3\2\2\2\u062b\u062d\5\u01ca\u00e6\2\u062c\u062b\3"+
		"\2\2\2\u062c\u062d\3\2\2\2\u062d\u062e\3\2\2\2\u062e\u062f\7\16\2\2\u062f"+
		"\u0630\5\u010e\u0088\2\u0630\u010d\3\2\2\2\u0631\u0636\5\u0110\u0089\2"+
		"\u0632\u0633\7M\2\2\u0633\u0635\5\u0110\u0089\2\u0634\u0632\3\2\2\2\u0635"+
		"\u0638\3\2\2\2\u0636\u0634\3\2\2\2\u0636\u0637\3\2\2\2\u0637\u010f\3\2"+
		"\2\2\u0638\u0636\3\2\2\2\u0639\u063b\5\u01dc\u00ef\2\u063a\u063c\5\u0112"+
		"\u008a\2\u063b\u063a\3\2\2\2\u063b\u063c\3\2\2\2\u063c\u0111\3\2\2\2\u063d"+
		"\u063e\6\u008a:\2\u063e\u063f\7N\2\2\u063f\u0640\5> \2\u0640\u0113\3\2"+
		"\2\2\u0641\u0652\5\u0116\u008c\2\u0642\u0653\5\u010e\u0088\2\u0643\u0650"+
		"\5\u0118\u008d\2\u0644\u0645\5\u0112\u008a\2\u0645\u0646\5\u0128\u0095"+
		"\2\u0646\u0651\3\2\2\2\u0647\u064e\5&\24\2\u0648\u064f\5\u011a\u008e\2"+
		"\u0649\u064f\5\u0122\u0092\2\u064a\u064c\5\u0112\u008a\2\u064b\u064a\3"+
		"\2\2\2\u064b\u064c\3\2\2\2\u064c\u064d\3\2\2\2\u064d\u064f\5\u0128\u0095"+
		"\2\u064e\u0648\3\2\2\2\u064e\u0649\3\2\2\2\u064e\u064b\3\2\2\2\u064f\u0651"+
		"\3\2\2\2\u0650\u0644\3\2\2\2\u0650\u0647\3\2\2\2\u0651\u0653\3\2\2\2\u0652"+
		"\u0642\3\2\2\2\u0652\u0643\3\2\2\2\u0653\u0115\3\2\2\2\u0654\u0656\5\u01d6"+
		"\u00ec\2\u0655\u0654\3\2\2\2\u0655\u0656\3\2\2\2\u0656\u0658\3\2\2\2\u0657"+
		"\u0659\5\u01ca\u00e6\2\u0658\u0657\3\2\2\2\u0658\u0659\3\2\2\2\u0659\u065a"+
		"\3\2\2\2\u065a\u065b\7\31\2\2\u065b\u0117\3\2\2\2\u065c\u065d\5\4\3\2"+
		"\u065d\u0119\3\2\2\2\u065e\u066c\5\u0102\u0082\2\u065f\u0667\7Q\2\2\u0660"+
		"\u0662\5\u011c\u008f\2\u0661\u0663\5\u011e\u0090\2\u0662\u0661\3\2\2\2"+
		"\u0662\u0663\3\2\2\2\u0663\u0668\3\2\2\2\u0664\u0665\5\u011e\u0090\2\u0665"+
		"\u0666\5\u011c\u008f\2\u0666\u0668\3\2\2\2\u0667\u0660\3\2\2\2\u0667\u0664"+
		"\3\2\2\2\u0668\u0669\3\2\2\2\u0669\u066a\7V\2\2\u066a\u066c\3\2\2\2\u066b"+
		"\u065e\3\2\2\2\u066b\u065f\3\2\2\2\u066c\u011b\3\2\2\2\u066d\u066f\5\u01d6"+
		"\u00ec\2\u066e\u066d\3\2\2\2\u066e\u066f\3\2\2\2\u066f\u0671\3\2\2\2\u0670"+
		"\u0672\5\u01ce\u00e8\2\u0671\u0670\3\2\2\2\u0671\u0672\3\2\2\2\u0672\u0673"+
		"\3\2\2\2\u0673\u0674\6\u008f;\2\u0674\u0675\7i\2\2\u0675\u0676\5\u0102"+
		"\u0082\2\u0676\u011d\3\2\2\2\u0677\u0679\5\u01d6\u00ec\2\u0678\u0677\3"+
		"\2\2\2\u0678\u0679\3\2\2\2\u0679\u067b\3\2\2\2\u067a\u067c\5\u01ce\u00e8"+
		"\2\u067b\u067a\3\2\2\2\u067b\u067c\3\2\2\2\u067c\u067d\3\2\2\2\u067d\u067e"+
		"\6\u0090<\2\u067e\u0680\7i\2\2\u067f\u0681\5\u0120\u0091\2\u0680\u067f"+
		"\3\2\2\2\u0680\u0681\3\2\2\2\u0681\u0682\3\2\2\2\u0682\u0683\5\u0102\u0082"+
		"\2\u0683\u011f\3\2\2\2\u0684\u0685\7S\2\2\u0685\u0686\5\4\3\2\u0686\u0687"+
		"\7X\2\2\u0687\u0121\3\2\2\2\u0688\u0690\7Q\2\2\u0689\u068b\5\u0124\u0093"+
		"\2\u068a\u068c\5\u0126\u0094\2\u068b\u068a\3\2\2\2\u068b\u068c\3\2\2\2"+
		"\u068c\u0691\3\2\2\2\u068d\u068e\5\u0126\u0094\2\u068e\u068f\5\u0124\u0093"+
		"\2\u068f\u0691\3\2\2\2\u0690\u0689\3\2\2\2\u0690\u068d\3\2\2\2\u0691\u0692"+
		"\3\2\2\2\u0692\u0693\7V\2\2\u0693\u0123\3\2\2\2\u0694\u0696\5\u01d6\u00ec"+
		"\2\u0695\u0694\3\2\2\2\u0695\u0696\3\2\2\2\u0696\u0698\3\2\2\2\u0697\u0699"+
		"\5\u01ce\u00e8\2\u0698\u0697\3\2\2\2\u0698\u0699\3\2\2\2\u0699\u069a\3"+
		"\2\2\2\u069a\u069b\6\u0093=\2\u069b\u069c\7i\2\2\u069c\u0125\3\2\2\2\u069d"+
		"\u069f\5\u01d6\u00ec\2\u069e\u069d\3\2\2\2\u069e\u069f\3\2\2\2\u069f\u06a1"+
		"\3\2\2\2\u06a0\u06a2\5\u01ce\u00e8\2\u06a1\u06a0\3\2\2\2\u06a1\u06a2\3"+
		"\2\2\2\u06a2\u06a3\3\2\2\2\u06a3\u06a4\6\u0094>\2\u06a4\u06a5\7i\2\2\u06a5"+
		"\u0127\3\2\2\2\u06a6\u06ae\7Q\2\2\u06a7\u06a9\5\u012a\u0096\2\u06a8\u06aa"+
		"\5\u012c\u0097\2\u06a9\u06a8\3\2\2\2\u06a9\u06aa\3\2\2\2\u06aa\u06af\3"+
		"\2\2\2\u06ab\u06ac\5\u012c\u0097\2\u06ac\u06ad\5\u012a\u0096\2\u06ad\u06af"+
		"\3\2\2\2\u06ae\u06a7\3\2\2\2\u06ae\u06ab\3\2\2\2\u06af\u06b0\3\2\2\2\u06b0"+
		"\u06b1\7V\2\2\u06b1\u0129\3\2\2\2\u06b2\u06b4\5\u01d6\u00ec\2\u06b3\u06b2"+
		"\3\2\2\2\u06b3\u06b4\3\2\2\2\u06b4\u06b5\3\2\2\2\u06b5\u06b6\6\u0096?"+
		"\2\u06b6\u06b8\7i\2\2\u06b7\u06b9\5\u0120\u0091\2\u06b8\u06b7\3\2\2\2"+
		"\u06b8\u06b9\3\2\2\2\u06b9\u06ba\3\2\2\2\u06ba\u06bb\5\u0102\u0082\2\u06bb"+
		"\u012b\3\2\2\2\u06bc\u06be\5\u01d6\u00ec\2\u06bd\u06bc\3\2\2\2\u06bd\u06be"+
		"\3\2\2\2\u06be\u06bf\3\2\2\2\u06bf\u06c0\6\u0097@\2\u06c0\u06c2\7i\2\2"+
		"\u06c1\u06c3\5\u0120\u0091\2\u06c2\u06c1\3\2\2\2\u06c2\u06c3\3\2\2\2\u06c3"+
		"\u06c4\3\2\2\2\u06c4\u06c5\5\u0102\u0082\2\u06c5\u012d\3\2\2\2\u06c6\u06c8"+
		"\5\u01d6\u00ec\2\u06c7\u06c6\3\2\2\2\u06c7\u06c8\3\2\2\2\u06c8\u06ca\3"+
		"\2\2\2\u06c9\u06cb\5\u01cc\u00e7\2\u06ca\u06c9\3\2\2\2\u06ca\u06cb\3\2"+
		"\2\2\u06cb\u06cc\3\2\2\2\u06cc\u06cd\7\30\2\2\u06cd\u06cf\5\u0130\u0099"+
		"\2\u06ce\u06d0\5\u01f6\u00fc\2\u06cf\u06ce\3\2\2\2\u06cf\u06d0\3\2\2\2"+
		"\u06d0\u06d1\3\2\2\2\u06d1\u06d2\5\u0132\u009a\2\u06d2\u012f\3\2\2\2\u06d3"+
		"\u06d4\5\4\3\2\u06d4\u0131\3\2\2\2\u06d5\u06d6\6\u009aA\2\u06d6\u06d7"+
		"\7N\2\2\u06d7\u06d8\5$\23\2\u06d8\u0133\3\2\2\2\u06d9\u06da\5\u0136\u009c"+
		"\2\u06da\u06dc\5\u0138\u009d\2\u06db\u06dd\5\u01f6\u00fc\2\u06dc\u06db"+
		"\3\2\2\2\u06dc\u06dd\3\2\2\2\u06dd\u06de\3\2\2\2\u06de\u06e0\5\u013a\u009e"+
		"\2\u06df\u06e1\5\u01fc\u00ff\2\u06e0\u06df\3\2\2\2\u06e0\u06e1\3\2\2\2"+
		"\u06e1\u06e3\3\2\2\2\u06e2\u06e4\5\u013e\u00a0\2\u06e3\u06e2\3\2\2\2\u06e3"+
		"\u06e4\3\2\2\2\u06e4\u0135\3\2\2\2\u06e5\u06e7\5\u01d6\u00ec\2\u06e6\u06e5"+
		"\3\2\2\2\u06e6\u06e7\3\2\2\2\u06e7\u06e9\3\2\2\2\u06e8\u06ea\5\u01ca\u00e6"+
		"\2\u06e9\u06e8\3\2\2\2\u06e9\u06ea\3\2\2\2\u06ea\u06eb\3\2\2\2\u06eb\u06ec"+
		"\7\t\2\2\u06ec\u0137\3\2\2\2\u06ed\u06f0\5\4\3\2\u06ee\u06f0\5\24\13\2"+
		"\u06ef\u06ed\3\2\2\2\u06ef\u06ee\3\2\2\2\u06f0\u0139\3\2\2\2\u06f1\u06f3"+
		"\5\u0140\u00a1\2\u06f2\u06f4\t\13\2\2\u06f3\u06f2\3\2\2\2\u06f3\u06f4"+
		"\3\2\2\2\u06f4\u06f6\3\2\2\2\u06f5\u06f7\5\u013c\u009f\2\u06f6\u06f5\3"+
		"\2\2\2\u06f6\u06f7\3\2\2\2\u06f7\u013b\3\2\2\2\u06f8\u06fa\7J\2\2\u06f9"+
		"\u06fb\5\u01d6\u00ec\2\u06fa\u06f9\3\2\2\2\u06fa\u06fb\3\2\2\2\u06fb\u06fc"+
		"\3\2\2\2\u06fc\u06fd\5$\23\2\u06fd\u013d\3\2\2\2\u06fe\u06ff\5\u0102\u0082"+
		"\2\u06ff\u013f\3\2\2\2\u0700\u0702\7S\2\2\u0701\u0703\5\u0142\u00a2\2"+
		"\u0702\u0701\3\2\2\2\u0702\u0703\3\2\2\2\u0703\u0704\3\2\2\2\u0704\u0705"+
		"\7X\2\2\u0705\u0141\3\2\2\2\u0706\u070b\5\u0144\u00a3\2\u0707\u0708\7"+
		"M\2\2\u0708\u070a\5\u0144\u00a3\2\u0709\u0707\3\2\2\2\u070a\u070d\3\2"+
		"\2\2\u070b\u0709\3\2\2\2\u070b\u070c\3\2\2\2\u070c\u0143\3\2\2\2\u070d"+
		"\u070b\3\2\2\2\u070e\u0710\5\u0146\u00a4\2\u070f\u070e\3\2\2\2\u070f\u0710"+
		"\3\2\2\2\u0710\u0711\3\2\2\2\u0711\u0712\5\u0148\u00a5\2\u0712\u0716\5"+
		"&\24\2\u0713\u0717\5\u014a\u00a6\2\u0714\u0715\6\u00a3B\2\u0715\u0717"+
		"\5\24\13\2\u0716\u0713\3\2\2\2\u0716\u0714\3\2\2\2\u0716\u0717\3\2\2\2"+
		"\u0717\u0145\3\2\2\2\u0718\u071b\79\2\2\u0719\u071b\5\4\3\2\u071a\u0718"+
		"\3\2\2\2\u071a\u0719\3\2\2\2\u071b\u0147\3\2\2\2\u071c\u071d\5\4\3\2\u071d"+
		"\u0149\3\2\2\2\u071e\u071f\6\u00a6C\2\u071f\u0720\7N\2\2\u0720\u0721\5"+
		"> \2\u0721\u014b\3\2\2\2\u0722\u0724\5\u01d6\u00ec\2\u0723\u0722\3\2\2"+
		"\2\u0723\u0724\3\2\2\2\u0724\u0726\3\2\2\2\u0725\u0727\5\u01cc\u00e7\2"+
		"\u0726\u0725\3\2\2\2\u0726\u0727\3\2\2\2\u0727\u072a\3\2\2\2\u0728\u072b"+
		"\5\u014e\u00a8\2\u0729\u072b\5\u015e\u00b0\2\u072a\u0728\3\2\2\2\u072a"+
		"\u0729\3\2\2\2\u072b\u014d\3\2\2\2\u072c\u072d\6\u00a8D\2\u072d\u072f"+
		"\7i\2\2\u072e\u072c\3\2\2\2\u072e\u072f\3\2\2\2\u072f\u0730\3\2\2\2\u0730"+
		"\u0731\7\6\2\2\u0731\u0733\5\u015a\u00ae\2\u0732\u0734\5\u01f6\u00fc\2"+
		"\u0733\u0732\3\2\2\2\u0733\u0734\3\2\2\2\u0734\u0736\3\2\2\2\u0735\u0737"+
		"\5<\37\2\u0736\u0735\3\2\2\2\u0736\u0737\3\2\2\2\u0737\u0739\3\2\2\2\u0738"+
		"\u073a\5\u01fc\u00ff\2\u0739\u0738\3\2\2\2\u0739\u073a\3\2\2\2\u073a\u073b"+
		"\3\2\2\2\u073b\u073d\7Q\2\2\u073c\u073e\5\u0150\u00a9\2\u073d\u073c\3"+
		"\2\2\2\u073d\u073e\3\2\2\2\u073e\u073f\3\2\2\2\u073f\u0740\7V\2\2\u0740"+
		"\u014f\3\2\2\2\u0741\u0743\5\u0152\u00aa\2\u0742\u0741\3\2\2\2\u0743\u0744"+
		"\3\2\2\2\u0744\u0742\3\2\2\2\u0744\u0745\3\2\2\2\u0745\u0151\3\2\2\2\u0746"+
		"\u074a\5\u00fe\u0080\2\u0747\u074a\5\u0154\u00ab\2\u0748\u074a\5\u00dc"+
		"o\2\u0749\u0746\3\2\2\2\u0749\u0747\3\2\2\2\u0749\u0748\3\2\2\2\u074a"+
		"\u0153\3\2\2\2\u074b\u074d\5\u01d6\u00ec\2\u074c\u074b\3\2\2\2\u074c\u074d"+
		"\3\2\2\2\u074d\u0750\3\2\2\2\u074e\u074f\6\u00abE\2\u074f\u0751\7i\2\2"+
		"\u0750\u074e\3\2\2\2\u0750\u0751\3\2\2\2\u0751\u0752\3\2\2\2\u0752\u0753"+
		"\7\33\2\2\u0753\u0754\5\u0156\u00ac\2\u0754\u0155\3\2\2\2\u0755\u075a"+
		"\5\u0158\u00ad\2\u0756\u0757\7M\2\2\u0757\u0759\5\u0158\u00ad\2\u0758"+
		"\u0756\3\2\2\2\u0759\u075c\3\2\2\2\u075a\u0758\3\2\2\2\u075a\u075b\3\2"+
		"\2\2\u075b\u0157\3\2\2\2\u075c\u075a\3\2\2\2\u075d\u075f\5\u015c\u00af"+
		"\2\u075e\u0760\5,\27\2\u075f\u075e\3\2\2\2\u075f\u0760\3\2\2\2\u0760\u0159"+
		"\3\2\2\2\u0761\u0762\5\4\3\2\u0762\u015b\3\2\2\2\u0763\u0764\5\4\3\2\u0764"+
		"\u015d\3\2\2\2\u0765\u0766\7\6\2\2\u0766\u0768\5\u015a\u00ae\2\u0767\u0769"+
		"\5\u01f6\u00fc\2\u0768\u0767\3\2\2\2\u0768\u0769\3\2\2\2\u0769\u076a\3"+
		"\2\2\2\u076a\u076c\5<\37\2\u076b\u076d\5\u01fc\u00ff\2\u076c\u076b\3\2"+
		"\2\2\u076c\u076d\3\2\2\2\u076d\u076e\3\2\2\2\u076e\u076f\7Q\2\2\u076f"+
		"\u0770\5\u0160\u00b1\2\u0770\u0771\7V\2\2\u0771\u015f\3\2\2\2\u0772\u0774"+
		"\5\u0162\u00b2\2\u0773\u0772\3\2\2\2\u0774\u0775\3\2\2\2\u0775\u0773\3"+
		"\2\2\2\u0775\u0776\3\2\2\2\u0776\u0161\3\2\2\2\u0777\u077b\5\u00fe\u0080"+
		"\2\u0778\u077b\5\u0164\u00b3\2\u0779\u077b\5\u00dco\2\u077a\u0777\3\2"+
		"\2\2\u077a\u0778\3\2\2\2\u077a\u0779\3\2\2\2\u077b\u0163\3\2\2\2\u077c"+
		"\u077e\5\u01d6\u00ec\2\u077d\u077c\3\2\2\2\u077d\u077e\3\2\2\2\u077e\u077f"+
		"\3\2\2\2\u077f\u0780\7\33\2\2\u0780\u0781\5\u0166\u00b4\2\u0781\u0165"+
		"\3\2\2\2\u0782\u0787\5\u0168\u00b5\2\u0783\u0784\7M\2\2\u0784\u0786\5"+
		"\u0168\u00b5\2\u0785\u0783\3\2\2\2\u0786\u0789\3\2\2\2\u0787\u0785\3\2"+
		"\2\2\u0787\u0788\3\2\2\2\u0788\u0167\3\2\2\2\u0789\u0787\3\2\2\2\u078a"+
		"\u078c\5\u015c\u00af\2\u078b\u078d\5\u016a\u00b6\2\u078c\u078b\3\2\2\2"+
		"\u078c\u078d\3\2\2\2\u078d\u0169\3\2\2\2\u078e\u078f\6\u00b6F\2\u078f"+
		"\u0790\7N\2\2\u0790\u0791\5\u016c\u00b7\2\u0791\u016b\3\2\2\2\u0792\u0796"+
		"\5\n\6\2\u0793\u0796\7q\2\2\u0794\u0796\5\f\7\2\u0795\u0792\3\2\2\2\u0795"+
		"\u0793\3\2\2\2\u0795\u0794\3\2\2\2\u0796\u016d\3\2\2\2\u0797\u0799\5\u01d6"+
		"\u00ec\2\u0798\u0797\3\2\2\2\u0798\u0799\3\2\2\2\u0799\u079b\3\2\2\2\u079a"+
		"\u079c\5\u01cc\u00e7\2\u079b\u079a\3\2\2\2\u079b\u079c\3\2\2\2\u079c\u079d"+
		"\3\2\2\2\u079d\u079e\7\26\2\2\u079e\u07a0\5\u0170\u00b9\2\u079f\u07a1"+
		"\5\u01f6\u00fc\2\u07a0\u079f\3\2\2\2\u07a0\u07a1\3\2\2\2\u07a1\u07a3\3"+
		"\2\2\2\u07a2\u07a4\5<\37\2\u07a3\u07a2\3\2\2\2\u07a3\u07a4\3\2\2\2\u07a4"+
		"\u07a6\3\2\2\2\u07a5\u07a7\5\u01fc\u00ff\2\u07a6\u07a5\3\2\2\2\u07a6\u07a7"+
		"\3\2\2\2\u07a7\u07a8\3\2\2\2\u07a8\u07a9\5\u0172\u00ba\2\u07a9\u016f\3"+
		"\2\2\2\u07aa\u07ab\5\4\3\2\u07ab\u0171\3\2\2\2\u07ac\u07ae\7Q\2\2\u07ad"+
		"\u07af\5\u0174\u00bb\2\u07ae\u07ad\3\2\2\2\u07ae\u07af\3\2\2\2\u07af\u07b0"+
		"\3\2\2\2\u07b0\u07b1\7V\2\2\u07b1\u0173\3\2\2\2\u07b2\u07b4\5\u0176\u00bc"+
		"\2\u07b3\u07b2\3\2\2\2\u07b4\u07b5\3\2\2\2\u07b5\u07b3\3\2\2\2\u07b5\u07b6"+
		"\3\2\2\2\u07b6\u0175\3\2\2\2\u07b7\u07ba\5\u00fe\u0080\2\u07b8\u07ba\5"+
		"\u00dco\2\u07b9\u07b7\3\2\2\2\u07b9\u07b8\3\2\2\2\u07ba\u0177\3\2\2\2"+
		"\u07bb\u07bd\5\u01d6\u00ec\2\u07bc\u07bb\3\2\2\2\u07bc\u07bd\3\2\2\2\u07bd"+
		"\u07c8\3\2\2\2\u07be\u07c0\5\u01cc\u00e7\2\u07bf\u07be\3\2\2\2\u07bf\u07c0"+
		"\3\2\2\2\u07c0\u07c3\3\2\2\2\u07c1\u07c2\6\u00bdG\2\u07c2\u07c4\7i\2\2"+
		"\u07c3\u07c1\3\2\2\2\u07c3\u07c4\3\2\2\2\u07c4\u07c9\3\2\2\2\u07c5\u07c6"+
		"\6\u00bdH\2\u07c6\u07c7\7i\2\2\u07c7\u07c9\5\u01cc\u00e7\2\u07c8\u07bf"+
		"\3\2\2\2\u07c8\u07c5\3\2\2\2\u07c9\u07ca\3\2\2\2\u07ca\u07cb\7\4\2\2\u07cb"+
		"\u07cd\5\u017a\u00be\2\u07cc\u07ce\5\u01f6\u00fc\2\u07cd\u07cc\3\2\2\2"+
		"\u07cd\u07ce\3\2\2\2\u07ce\u07d0\3\2\2\2\u07cf\u07d1\5<\37\2\u07d0\u07cf"+
		"\3\2\2\2\u07d0\u07d1\3\2\2\2\u07d1\u07d3\3\2\2\2\u07d2\u07d4\5\u01fc\u00ff"+
		"\2\u07d3\u07d2\3\2\2\2\u07d3\u07d4\3\2\2\2\u07d4\u07d5\3\2\2\2\u07d5\u07d6"+
		"\5\u017c\u00bf\2\u07d6\u0179\3\2\2\2\u07d7\u07d8\5\4\3\2\u07d8\u017b\3"+
		"\2\2\2\u07d9\u07db\7Q\2\2\u07da\u07dc\5\u017e\u00c0\2\u07db\u07da\3\2"+
		"\2\2\u07db\u07dc\3\2\2\2\u07dc\u07dd\3\2\2\2\u07dd\u07de\7V\2\2\u07de"+
		"\u017d\3\2\2\2\u07df\u07e1\5\u0180\u00c1\2\u07e0\u07df\3\2\2\2\u07e1\u07e2"+
		"\3\2\2\2\u07e2\u07e0\3\2\2\2\u07e2\u07e3\3\2\2\2\u07e3\u017f\3\2\2\2\u07e4"+
		"\u07e7\5\u00fe\u0080\2\u07e5\u07e7\5\u00dco\2\u07e6\u07e4\3\2\2\2\u07e6"+
		"\u07e5\3\2\2\2\u07e7\u0181\3\2\2\2\u07e8\u07ea\5\u01d6\u00ec\2\u07e9\u07e8"+
		"\3\2\2\2\u07e9\u07ea\3\2\2\2\u07ea\u07ec\3\2\2\2\u07eb\u07ed\5\u01cc\u00e7"+
		"\2\u07ec\u07eb\3\2\2\2\u07ec\u07ed\3\2\2\2\u07ed\u07ee\3\2\2\2\u07ee\u07ef"+
		"\7\23\2\2\u07ef\u07f1\5\u0184\u00c3\2\u07f0\u07f2\5<\37\2\u07f1\u07f0"+
		"\3\2\2\2\u07f1\u07f2\3\2\2\2\u07f2\u07f4\3\2\2\2\u07f3\u07f5\5\u01fc\u00ff"+
		"\2\u07f4\u07f3\3\2\2\2\u07f4\u07f5\3\2\2\2\u07f5\u07f6\3\2\2\2\u07f6\u07f7"+
		"\5\u0186\u00c4\2\u07f7\u0183\3\2\2\2\u07f8\u07f9\5\4\3\2\u07f9\u0185\3"+
		"\2\2\2\u07fa\u07fc\7Q\2\2\u07fb\u07fd\5\u0188\u00c5\2\u07fc\u07fb\3\2"+
		"\2\2\u07fc\u07fd\3\2\2\2\u07fd\u07fe\3\2\2\2\u07fe\u07ff\7V\2\2\u07ff"+
		"\u0187\3\2\2\2\u0800\u0802\5\u018a\u00c6\2\u0801\u0800\3\2\2\2\u0802\u0803"+
		"\3\2\2\2\u0803\u0801\3\2\2\2\u0803\u0804\3\2\2\2\u0804\u0189\3\2\2\2\u0805"+
		"\u0808\5\u018c\u00c7\2\u0806\u0808\5\u00dco\2\u0807\u0805\3\2\2\2\u0807"+
		"\u0806\3\2\2\2\u0808\u018b\3\2\2\2\u0809\u0810\5\u018e\u00c8\2\u080a\u0810"+
		"\5\u0190\u00c9\2\u080b\u0810\5\u0192\u00ca\2\u080c\u0810\5\u0194\u00cb"+
		"\2\u080d\u0810\5\u0196\u00cc\2\u080e\u0810\5\u012e\u0098\2\u080f\u0809"+
		"\3\2\2\2\u080f\u080a\3\2\2\2\u080f\u080b\3\2\2\2\u080f\u080c\3\2\2\2\u080f"+
		"\u080d\3\2\2\2\u080f\u080e\3\2\2\2\u0810\u018d\3\2\2\2\u0811\u0812\5\u0116"+
		"\u008c\2\u0812\u0813\5\u0118\u008d\2\u0813\u0814\5&\24\2\u0814\u0815\5"+
		"\u0122\u0092\2\u0815\u018f\3\2\2\2\u0816\u0817\5\u0136\u009c\2\u0817\u0819"+
		"\5\u0138\u009d\2\u0818\u081a\5\u01f6\u00fc\2\u0819\u0818\3\2\2\2\u0819"+
		"\u081a\3\2\2\2\u081a\u081b\3\2\2\2\u081b\u081d\5\u013a\u009e\2\u081c\u081e"+
		"\5\u01fc\u00ff\2\u081d\u081c\3\2\2\2\u081d\u081e\3\2\2\2\u081e\u0191\3"+
		"\2\2\2\u081f\u0821\5\u019a\u00ce\2\u0820\u0822\5\u01f6\u00fc\2\u0821\u0820"+
		"\3\2\2\2\u0821\u0822\3\2\2\2\u0822\u0823\3\2\2\2\u0823\u0825\5\u0140\u00a1"+
		"\2\u0824\u0826\t\13\2\2\u0825\u0824\3\2\2\2\u0825\u0826\3\2\2\2\u0826"+
		"\u0828\3\2\2\2\u0827\u0829\5\u01fc\u00ff\2\u0828\u0827\3\2\2\2\u0828\u0829"+
		"\3\2\2\2\u0829\u0193\3\2\2\2\u082a\u082b\5\u01aa\u00d6\2\u082b\u082d\5"+
		"\u01ac\u00d7\2\u082c\u082e\5\u01fc\u00ff\2\u082d\u082c\3\2\2\2\u082d\u082e"+
		"\3\2\2\2\u082e\u082f\3\2\2\2\u082f\u0830\5\u0122\u0092\2\u0830\u0195\3"+
		"\2\2\2\u0831\u0833\5\u01d6\u00ec\2\u0832\u0831\3\2\2\2\u0832\u0833\3\2"+
		"\2\2\u0833\u0835\3\2\2\2\u0834\u0836\5\u01cc\u00e7\2\u0835\u0834\3\2\2"+
		"\2\u0835\u0836\3\2\2\2\u0836\u0837\3\2\2\2\u0837\u0838\7\3\2\2\u0838\u083a"+
		"\5\u0130\u0099\2\u0839\u083b\5<\37\2\u083a\u0839\3\2\2\2\u083a\u083b\3"+
		"\2\2\2\u083b\u083d\3\2\2\2\u083c\u083e\5\u0132\u009a\2\u083d\u083c\3\2"+
		"\2\2\u083d\u083e\3\2\2\2\u083e\u0840\3\2\2\2\u083f\u0841\5\u01fc\u00ff"+
		"\2\u0840\u083f\3\2\2\2\u0840\u0841\3\2\2\2\u0841\u0197\3\2\2\2\u0842\u0844"+
		"\5\u019a\u00ce\2\u0843\u0845\5\u01f6\u00fc\2\u0844\u0843\3\2\2\2\u0844"+
		"\u0845\3\2\2\2\u0845\u0846\3\2\2\2\u0846\u0848\5\u0140\u00a1\2\u0847\u0849"+
		"\t\13\2\2\u0848\u0847\3\2\2\2\u0848\u0849\3\2\2\2\u0849\u084b\3\2\2\2"+
		"\u084a\u084c\5\u01fc\u00ff\2\u084b\u084a\3\2\2\2\u084b\u084c\3\2\2\2\u084c"+
		"\u084d\3\2\2\2\u084d\u084e\5\u019c\u00cf\2\u084e\u0199\3\2\2\2\u084f\u0851"+
		"\5\u01d6\u00ec\2\u0850\u084f\3\2\2\2\u0850\u0851\3\2\2\2\u0851\u0853\3"+
		"\2\2\2\u0852\u0854\5\u01ca\u00e6\2\u0853\u0852\3\2\2\2\u0853\u0854\3\2"+
		"\2\2\u0854\u0855\3\2\2\2\u0855\u0856\7\13\2\2\u0856\u0857\6\u00ceI\2\u0857"+
		"\u0858\t\7\2\2\u0858\u019b\3\2\2\2\u0859\u085a\5\u0102\u0082\2\u085a\u019d"+
		"\3\2\2\2\u085b\u085d\5\u01d6\u00ec\2\u085c\u085b\3\2\2\2\u085c\u085d\3"+
		"\2\2\2\u085d\u085e\3\2\2\2\u085e\u085f\7\5\2\2\u085f\u0860\5\u0102\u0082"+
		"\2\u0860\u019f\3\2\2\2\u0861\u0863\5\u01d6\u00ec\2\u0862\u0861\3\2\2\2"+
		"\u0862\u0863\3\2\2\2\u0863\u0865\3\2\2\2\u0864\u0866\5\u01cc\u00e7\2\u0865"+
		"\u0864\3\2\2\2\u0865\u0866\3\2\2\2\u0866\u0867\3\2\2\2\u0867\u0868\7\7"+
		"\2\2\u0868\u086b\5(\25\2\u0869\u086c\5<\37\2\u086a\u086c\5\u01fc\u00ff"+
		"\2\u086b\u0869\3\2\2\2\u086b\u086a\3\2\2\2\u086b\u086c\3\2\2\2\u086c\u086d"+
		"\3\2\2\2\u086d\u086e\5\u01a2\u00d2\2\u086e\u01a1\3\2\2\2\u086f\u0871\7"+
		"Q\2\2\u0870\u0872\5\u01a4\u00d3\2\u0871\u0870\3\2\2\2\u0871\u0872\3\2"+
		"\2\2\u0872\u0873\3\2\2\2\u0873\u0874\7V\2\2\u0874\u01a3\3\2\2\2\u0875"+
		"\u0877\5\u01a6\u00d4\2\u0876\u0875\3\2\2\2\u0877\u0878\3\2\2\2\u0878\u0876"+
		"\3\2\2\2\u0878\u0879\3\2\2\2\u0879\u01a5\3\2\2\2\u087a\u087d\5\u00fe\u0080"+
		"\2\u087b\u087d\5\u00dco\2\u087c\u087a\3\2\2\2\u087c\u087b\3\2\2\2\u087d"+
		"\u01a7\3\2\2\2\u087e\u087f\5\u01aa\u00d6\2\u087f\u0881\5\u01ac\u00d7\2"+
		"\u0880\u0882\5\u01fc\u00ff\2\u0881\u0880\3\2\2\2\u0881\u0882\3\2\2\2\u0882"+
		"\u0885\3\2\2\2\u0883\u0886\5\u011a\u008e\2\u0884\u0886\5\u0122\u0092\2"+
		"\u0885\u0883\3\2\2\2\u0885\u0884\3\2\2\2\u0886\u01a9\3\2\2\2\u0887\u0889"+
		"\5\u01d6\u00ec\2\u0888\u0887\3\2\2\2\u0888\u0889\3\2\2\2\u0889\u088b\3"+
		"\2\2\2\u088a\u088c\5\u01ca\u00e6\2\u088b\u088a\3\2\2\2\u088b\u088c\3\2"+
		"\2\2\u088c\u088d\3\2\2\2\u088d\u088f\7\27\2\2\u088e\u0890\5\u01f6\u00fc"+
		"\2\u088f\u088e\3\2\2\2\u088f\u0890\3\2\2\2\u0890\u0891\3\2\2\2\u0891\u0892"+
		"\5\u0140\u00a1\2\u0892\u01ab\3\2\2\2\u0893\u0895\7J\2\2\u0894\u0896\5"+
		"\u01d6\u00ec\2\u0895\u0894\3\2\2\2\u0895\u0896\3\2\2\2\u0896\u0897\3\2"+
		"\2\2\u0897\u0898\5$\23\2\u0898\u01ad\3\2\2\2\u0899\u089d\5\u01b0\u00d9"+
		"\2\u089a\u089d\5\u01b2\u00da\2\u089b\u089d\5\u01b4\u00db\2\u089c\u0899"+
		"\3\2\2\2\u089c\u089a\3\2\2\2\u089c\u089b\3\2\2\2\u089d\u01af\3\2\2\2\u089e"+
		"\u089f\6\u00d9J\2\u089f\u08a0\7i\2\2\u08a0\u08a1\7\20\2\2\u08a1\u08a2"+
		"\5\24\13\2\u08a2\u01b1\3\2\2\2\u08a3\u08a4\6\u00daK\2\u08a4\u08a5\7i\2"+
		"\2\u08a5\u08a6\7\20\2\2\u08a6\u08a7\5\24\13\2\u08a7\u01b3\3\2\2\2\u08a8"+
		"\u08a9\6\u00dbL\2\u08a9\u08aa\7i\2\2\u08aa\u08ab\7\20\2\2\u08ab\u08ad"+
		"\5\24\13\2\u08ac\u08ae\5\u01b6\u00dc\2\u08ad\u08ac\3\2\2\2\u08ad\u08ae"+
		"\3\2\2\2\u08ae\u01b5\3\2\2\2\u08af\u08b0\7L\2\2\u08b0\u08b1\5\u01c6\u00e4"+
		"\2\u08b1\u01b7\3\2\2\2\u08b2\u08b3\7\21\2\2\u08b3\u08b4\5\u01c6\u00e4"+
		"\2\u08b4\u08b6\7Q\2\2\u08b5\u08b7\5\u01ba\u00de\2\u08b6\u08b5\3\2\2\2"+
		"\u08b6\u08b7\3\2\2\2\u08b7\u08b8\3\2\2\2\u08b8\u08b9\7V\2\2\u08b9\u01b9"+
		"\3\2\2\2\u08ba\u08bc\5\u01bc\u00df\2\u08bb\u08ba\3\2\2\2\u08bc\u08bd\3"+
		"\2\2\2\u08bd\u08bb\3\2\2\2\u08bd\u08be\3\2\2\2\u08be\u01bb\3\2\2\2\u08bf"+
		"\u08c3\5\u01be\u00e0\2\u08c0\u08c3\5\u01c0\u00e1\2\u08c1\u08c3\5\u01c2"+
		"\u00e2\2\u08c2\u08bf\3\2\2\2\u08c2\u08c0\3\2\2\2\u08c2\u08c1\3\2\2\2\u08c3"+
		"\u01bd\3\2\2\2\u08c4\u08c5\6\u00e0M\2\u08c5\u08c6\7i\2\2\u08c6\u08c7\7"+
		"L\2\2\u08c7\u08c8\5\u01c4\u00e3\2\u08c8\u01bf\3\2\2\2\u08c9\u08ca\6\u00e1"+
		"N\2\u08ca\u08cb\7i\2\2\u08cb\u08cc\7L\2\2\u08cc\u08cd\5\f\7\2\u08cd\u01c1"+
		"\3\2\2\2\u08ce\u08cf\6\u00e2O\2\u08cf\u08d0\7i\2\2\u08d0\u08d1\7L\2\2"+
		"\u08d1\u08d2\6\u00e2P\2\u08d2\u08d3\7i\2\2\u08d3\u01c3\3\2\2\2\u08d4\u08d9"+
		"\5\u01c6\u00e4\2\u08d5\u08d6\7M\2\2\u08d6\u08d8\5\u01c6\u00e4\2\u08d7"+
		"\u08d5\3\2\2\2\u08d8\u08db\3\2\2\2\u08d9\u08d7\3\2\2\2\u08d9\u08da\3\2"+
		"\2\2\u08da\u01c5\3\2\2\2\u08db\u08d9\3\2\2\2\u08dc\u08dd\5\4\3\2\u08dd"+
		"\u01c7\3\2\2\2\u08de\u08e5\7\4\2\2\u08df\u08e5\7\25\2\2\u08e0\u08e1\6"+
		"\u00e5Q\2\u08e1\u08e5\7i\2\2\u08e2\u08e5\5\u01cc\u00e7\2\u08e3\u08e5\5"+
		"\u01ce\u00e8\2\u08e4\u08de\3\2\2\2\u08e4\u08df\3\2\2\2\u08e4\u08e0\3\2"+
		"\2\2\u08e4\u08e2\3\2\2\2\u08e4\u08e3\3\2\2\2\u08e5\u01c9\3\2\2\2\u08e6"+
		"\u08e8\5\u01c8\u00e5\2\u08e7\u08e6\3\2\2\2\u08e8\u08e9\3\2\2\2\u08e9\u08e7"+
		"\3\2\2\2\u08e9\u08ea\3\2\2\2\u08ea\u01cb\3\2\2\2\u08eb\u08f0\t\f\2\2\u08ec"+
		"\u08ed\7S\2\2\u08ed\u08ee\6\u00e7R\2\u08ee\u08ef\7i\2\2\u08ef\u08f1\7"+
		"X\2\2\u08f0\u08ec\3\2\2\2\u08f0\u08f1\3\2\2\2\u08f1\u01cd\3\2\2\2\u08f2"+
		"\u08f3\6\u00e8S\2\u08f3\u08f4\7i\2\2\u08f4\u01cf\3\2\2\2\u08f5\u08f6\7"+
		"K\2\2\u08f6\u08f8\5\u01d2\u00ea\2\u08f7\u08f9\5\u01d4\u00eb\2\u08f8\u08f7"+
		"\3\2\2\2\u08f8\u08f9\3\2\2\2\u08f9\u01d1\3\2\2\2\u08fa\u08fb\5\4\3\2\u08fb"+
		"\u01d3\3\2\2\2\u08fc\u08fe\7S\2\2\u08fd\u08ff\5\u01d8\u00ed\2\u08fe\u08fd"+
		"\3\2\2\2\u08fe\u08ff\3\2\2\2\u08ff\u0900\3\2\2\2\u0900\u0901\7X\2\2\u0901"+
		"\u01d5\3\2\2\2\u0902\u0904\5\u01d0\u00e9\2\u0903\u0902\3\2\2\2\u0904\u0905"+
		"\3\2\2\2\u0905\u0903\3\2\2\2\u0905\u0906\3\2\2\2\u0906\u01d7\3\2\2\2\u0907"+
		"\u0909\5\u01da\u00ee\2\u0908\u0907\3\2\2\2\u0909\u090a\3\2\2\2\u090a\u0908"+
		"\3\2\2\2\u090a\u090b\3\2\2\2\u090b\u01d9\3\2\2\2\u090c\u090d\7S\2\2\u090d"+
		"\u090e\5\u01d8\u00ed\2\u090e\u090f\7X\2\2\u090f\u091c\3\2\2\2\u0910\u0911"+
		"\7R\2\2\u0911\u0912\5\u01d8\u00ed\2\u0912\u0913\7W\2\2\u0913\u091c\3\2"+
		"\2\2\u0914\u0915\7Q\2\2\u0915\u0916\5\u01d8\u00ed\2\u0916\u0917\7V\2\2"+
		"\u0917\u091c\3\2\2\2\u0918\u091c\5\4\3\2\u0919\u091c\5\b\5\2\u091a\u091c"+
		"\5\24\13\2\u091b\u090c\3\2\2\2\u091b\u0910\3\2\2\2\u091b\u0914\3\2\2\2"+
		"\u091b\u0918\3\2\2\2\u091b\u0919\3\2\2\2\u091b\u091a\3\2\2\2\u091c\u01db"+
		"\3\2\2\2\u091d\u0921\5\u01de\u00f0\2\u091e\u0921\5\u01e0\u00f1\2\u091f"+
		"\u0921\5\u01e4\u00f3\2\u0920\u091d\3\2\2\2\u0920\u091e\3\2\2\2\u0920\u091f"+
		"\3\2\2\2\u0921\u0923\3\2\2\2\u0922\u0924\5&\24\2\u0923\u0922\3\2\2\2\u0923"+
		"\u0924\3\2\2\2\u0924\u092b\3\2\2\2\u0925\u092b\5\u01e2\u00f2\2\u0926\u092b"+
		"\5\u01ea\u00f6\2\u0927\u092b\5\u01ec\u00f7\2\u0928\u092b\5\u01ee\u00f8"+
		"\2\u0929\u092b\5\u01f4\u00fb\2\u092a\u0920\3\2\2\2\u092a\u0925\3\2\2\2"+
		"\u092a\u0926\3\2\2\2\u092a\u0927\3\2\2\2\u092a\u0928\3\2\2\2\u092a\u0929"+
		"\3\2\2\2\u092b\u01dd\3\2\2\2\u092c\u092d\79\2\2\u092d\u01df\3\2\2\2\u092e"+
		"\u092f\5\4\3\2\u092f\u01e1\3\2\2\2\u0930\u0931\t\t\2\2\u0931\u0932\5\u01dc"+
		"\u00ef\2\u0932\u01e3\3\2\2\2\u0933\u0935\7S\2\2\u0934\u0936\5\u01e6\u00f4"+
		"\2\u0935\u0934\3\2\2\2\u0935\u0936\3\2\2\2\u0936\u0937\3\2\2\2\u0937\u0938"+
		"\7X\2\2\u0938\u01e5\3\2\2\2\u0939\u093e\5\u01e8\u00f5\2\u093a\u093b\7"+
		"M\2\2\u093b\u093d\5\u01e8\u00f5\2\u093c\u093a\3\2\2\2\u093d\u0940\3\2"+
		"\2\2\u093e\u093c\3\2\2\2\u093e\u093f\3\2\2\2\u093f\u01e7\3\2\2\2\u0940"+
		"\u093e\3\2\2\2\u0941\u0944\79\2\2\u0942\u0944\5\4\3\2\u0943\u0941\3\2"+
		"\2\2\u0943\u0942\3\2\2\2\u0944\u0945\3\2\2\2\u0945\u0947\7L\2\2\u0946"+
		"\u0943\3\2\2\2\u0946\u0947\3\2\2\2\u0947\u0948\3\2\2\2\u0948\u0949\5\u01dc"+
		"\u00ef\2\u0949\u01e9\3\2\2\2\u094a\u094c\5(\25\2\u094b\u094a\3\2\2\2\u094b"+
		"\u094c\3\2\2\2\u094c\u094d\3\2\2\2\u094d\u094e\7T\2\2\u094e\u0950\5\u015c"+
		"\u00af\2\u094f\u0951\5\u01e4\u00f3\2\u0950\u094f\3\2\2\2\u0950\u0951\3"+
		"\2\2\2\u0951\u01eb\3\2\2\2\u0952\u0953\5\4\3\2\u0953\u0954\6\u00f7T\2"+
		"\u0954\u0955\7U\2\2\u0955\u01ed\3\2\2\2\u0956\u0959\5\u01f0\u00f9\2\u0957"+
		"\u0959\5\u01f2\u00fa\2\u0958\u0956\3\2\2\2\u0958\u0957\3\2\2\2\u0959\u01ef"+
		"\3\2\2\2\u095a\u095b\7/\2\2\u095b\u095c\5$\23\2\u095c\u01f1\3\2\2\2\u095d"+
		"\u0961\5\u01de\u00f0\2\u095e\u0961\5\u01e0\u00f1\2\u095f\u0961\5\u01e4"+
		"\u00f3\2\u0960\u095d\3\2\2\2\u0960\u095e\3\2\2\2\u0960\u095f\3\2\2\2\u0961"+
		"\u0963\3\2\2\2\u0962\u0964\5&\24\2\u0963\u0962\3\2\2\2\u0963\u0964\3\2"+
		"\2\2\u0964\u096b\3\2\2\2\u0965\u096b\5\u01e2\u00f2\2\u0966\u096b\5\u01ea"+
		"\u00f6\2\u0967\u096b\5\u01ec\u00f7\2\u0968\u096b\5\u01f0\u00f9\2\u0969"+
		"\u096b\5\u01f4\u00fb\2\u096a\u0960\3\2\2\2\u096a\u0965\3\2\2\2\u096a\u0966"+
		"\3\2\2\2\u096a\u0967\3\2\2\2\u096a\u0968\3\2\2\2\u096a\u0969\3\2\2\2\u096b"+
		"\u096e\3\2\2\2\u096c\u096d\7,\2\2\u096d\u096f\5$\23\2\u096e\u096c\3\2"+
		"\2\2\u096f\u0970\3\2\2\2\u0970\u096e\3\2\2\2\u0970\u0971\3\2\2\2\u0971"+
		"\u01f3\3\2\2\2\u0972\u0973\5> \2\u0973\u01f5\3\2\2\2\u0974\u0975\7^\2"+
		"\2\u0975\u0976\5\u01f8\u00fd\2\u0976\u0977\7]\2\2\u0977\u01f7\3\2\2\2"+
		"\u0978\u097d\5\u01fa\u00fe\2\u0979\u097a\7M\2\2\u097a\u097c\5\u01fa\u00fe"+
		"\2\u097b\u0979\3\2\2\2\u097c\u097f\3\2\2\2\u097d\u097b\3\2\2\2\u097d\u097e"+
		"\3\2\2\2\u097e\u01f9\3\2\2\2\u097f\u097d\3\2\2\2\u0980\u0986\5*\26\2\u0981"+
		"\u0984\7L\2\2\u0982\u0985\5(\25\2\u0983\u0985\5:\36\2\u0984\u0982\3\2"+
		"\2\2\u0984\u0983\3\2\2\2\u0985\u0987\3\2\2\2\u0986\u0981\3\2\2\2\u0986"+
		"\u0987\3\2\2\2\u0987\u01fb\3\2\2\2\u0988\u0989\7)\2\2\u0989\u098a\5\u01fe"+
		"\u0100\2\u098a\u01fd\3\2\2\2\u098b\u0990\5\u0200\u0101\2\u098c\u098d\7"+
		"M\2\2\u098d\u098f\5\u0200\u0101\2\u098e\u098c\3\2\2\2\u098f\u0992\3\2"+
		"\2\2\u0990\u098e\3\2\2\2\u0990\u0991\3\2\2\2\u0991\u01ff\3\2\2\2\u0992"+
		"\u0990\3\2\2\2\u0993\u0996\5\u0202\u0102\2\u0994\u0996\5\u0204\u0103\2"+
		"\u0995\u0993\3\2\2\2\u0995\u0994\3\2\2\2\u0996\u0201\3\2\2\2\u0997\u0998"+
		"\5(\25\2\u0998\u099b\7L\2\2\u0999\u099c\5(\25\2\u099a\u099c\5:\36\2\u099b"+
		"\u0999\3\2\2\2\u099b\u099a\3\2\2\2\u099c\u0203\3\2\2\2\u099d\u099e\5("+
		"\25\2\u099e\u099f\6\u0103U\2\u099f\u09a0\5\"\22\2\u09a0\u09a1\5$\23\2"+
		"\u09a1\u0205\3\2\2\2\u09a2\u09a3\7^\2\2\u09a3\u09a4\5\u0208\u0105\2\u09a4"+
		"\u09a5\7]\2\2\u09a5\u0207\3\2\2\2\u09a6\u09ab\5\u020a\u0106\2\u09a7\u09a8"+
		"\7M\2\2\u09a8\u09aa\5\u020a\u0106\2\u09a9\u09a7\3\2\2\2\u09aa\u09ad\3"+
		"\2\2\2\u09ab\u09a9\3\2\2\2\u09ab\u09ac\3\2\2\2\u09ac\u0209\3\2\2\2\u09ad"+
		"\u09ab\3\2\2\2\u09ae\u09af\5$\23\2\u09af\u020b\3\2\2\2\u0132\u0216\u021a"+
		"\u021f\u0223\u022a\u022e\u023d\u0245\u0247\u024d\u0253\u026a\u026e\u0271"+
		"\u027f\u028b\u028d\u0292\u0295\u029b\u029f\u02a9\u02ab\u02b3\u02b7\u02bd"+
		"\u02bf\u02c8\u02cc\u02cf\u02d5\u02d9\u02e1\u02e9\u02ed\u02f3\u02fb\u02ff"+
		"\u0302\u030b\u0312\u0315\u031a\u0328\u032a\u0330\u033d\u0347\u034f\u0353"+
		"\u0362\u0366\u0389\u038f\u03a1\u03b2\u03b5\u03ba\u03be\u03c1\u03c4\u03ca"+
		"\u03ce\u03d5\u03dc\u03de\u03e1\u03eb\u03f1\u03fd\u03ff\u040e\u0410\u0416"+
		"\u0419\u0421\u0429\u042f\u0435\u0437\u043f\u0446\u0459\u045c\u0465\u046c"+
		"\u0472\u0474\u0484\u0486\u048b\u0494\u0499\u049c\u04a0\u04a6\u04ab\u04b6"+
		"\u04b9\u04bc\u04c1\u04c6\u04ca\u04ce\u04d2\u04df\u04e6\u04f8\u04fe\u0503"+
		"\u0510\u0517\u0521\u0526\u052a\u0538\u0544\u0548\u054c\u0552\u055f\u0564"+
		"\u0567\u056d\u0573\u0577\u057e\u0583\u0587\u0594\u059d\u05b4\u05c1\u05d0"+
		"\u05e0\u05e9\u05f3\u05f5\u0606\u0609\u060d\u0612\u0616\u0621\u0626\u0629"+
		"\u062c\u0636\u063b\u064b\u064e\u0650\u0652\u0655\u0658\u0662\u0667\u066b"+
		"\u066e\u0671\u0678\u067b\u0680\u068b\u0690\u0695\u0698\u069e\u06a1\u06a9"+
		"\u06ae\u06b3\u06b8\u06bd\u06c2\u06c7\u06ca\u06cf\u06dc\u06e0\u06e3\u06e6"+
		"\u06e9\u06ef\u06f3\u06f6\u06fa\u0702\u070b\u070f\u0716\u071a\u0723\u0726"+
		"\u072a\u072e\u0733\u0736\u0739\u073d\u0744\u0749\u074c\u0750\u075a\u075f"+
		"\u0768\u076c\u0775\u077a\u077d\u0787\u078c\u0795\u0798\u079b\u07a0\u07a3"+
		"\u07a6\u07ae\u07b5\u07b9\u07bc\u07bf\u07c3\u07c8\u07cd\u07d0\u07d3\u07db"+
		"\u07e2\u07e6\u07e9\u07ec\u07f1\u07f4\u07fc\u0803\u0807\u080f\u0819\u081d"+
		"\u0821\u0825\u0828\u082d\u0832\u0835\u083a\u083d\u0840\u0844\u0848\u084b"+
		"\u0850\u0853\u085c\u0862\u0865\u086b\u0871\u0878\u087c\u0881\u0885\u0888"+
		"\u088b\u088f\u0895\u089c\u08ad\u08b6\u08bd\u08c2\u08d9\u08e4\u08e9\u08f0"+
		"\u08f8\u08fe\u0905\u090a\u091b\u0920\u0923\u092a\u0935\u093e\u0943\u0946"+
		"\u094b\u0950\u0958\u0960\u0963\u096a\u0970\u097d\u0984\u0986\u0990\u0995"+
		"\u099b\u09ab";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}