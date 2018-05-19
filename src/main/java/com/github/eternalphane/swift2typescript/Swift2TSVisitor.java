package com.github.eternalphane.swift2typescript;

import static com.github.eternalphane.swift2typescript.SwiftParser.*;

import com.github.eternalphane.swift2typescript.SwiftParser.*;

import org.apache.commons.lang3.StringUtils;

public class Swift2TSVisitor extends SwiftParserBaseVisitor<Void> {
    static final String[] validPrefixOperators = new String[] { "+", "-", "!", "~" };
    //@formatter:off
    static final String[] validBinaryOperators = new String[] {
        "+", "-", "*", "/", "%",
        "<", ">", "<=", ">=", "==", "!=", "===", "!==",
        "<<", ">>", "&", "|", "^",
        "&&", "||", "?",
        "=", "+=", "-=", "*=", "/=", "<<=", ">>=", "&=", "|=", "^="
    };
    //@formatter:on

    String implicitCtx;

    @Override
    public Void visitNumericLiteral(NumericLiteralContext ctx) {
        if (ctx.FLOATING_POINT_LITERAL() != null) {
            String fl = ctx.FLOATING_POINT_LITERAL().getText();
            if (fl.startsWith("0x")) {
                System.out.print(Float.parseFloat(fl));
            } else {
                System.out.print(StringUtils.replace(fl, "_", ""));
            }
        } else {
            this.visit(ctx.integerLiteral());
        }
        return null;
    }

    @Override
    public Void visitIntegerLiteral(IntegerLiteralContext ctx) {
        System.out.print(StringUtils.replace(ctx.getText(), "_", ""));
        return null;
    }

    @Override
    public Void visitBooleanLiteral(BooleanLiteralContext ctx) {
        System.out.print(ctx.getText());
        return null;
    }

    @Override
    public Void visitNilLiteral(NilLiteralContext ctx) {
        System.out.print("null");
        return null;
    }

    @Override
    public Void visitExpression(ExpressionContext ctx) {
        boolean expand_try = ctx.tryOperator() != null && ctx.tryOperator().stop.getType() != TRY;
        if (expand_try) {
            System.out.print("(function() { try { return ");
        }
        this.visit(ctx.prefixExpression());
        for (BinaryExpressionContext exp : ctx.binaryExpression()) {
            this.visit(exp);
        }
        if (expand_try) {
            System.out.print("; } catch (e) { ");
            if (ctx.tryOperator().stop.getType() == QUESTION) {
                System.out.print("return null;");
            } else {
                System.out.print("throw e;");
            }
            System.out.print(" } })()");
        }
        return null;
    }

    @Override
    public Void visitPrefixExpression(PrefixExpressionContext ctx) {
        if (ctx.prefixOperator() != null) {
            String op = ctx.prefixOperator().getText();
            for (String valid_op : validPrefixOperators) {
                if (op.equals(valid_op)) {
                    System.out.print(op);
                    this.visit(ctx.postfixExpression());
                    return null;
                }
            }
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < op.length(); i++) {
                int cp = op.codePointAt(i);
                if (cp > 65535) {
                    i++;
                }
                sb.append(String.format("u%x", cp));
            }
            System.out.print(sb.toString() + "(");
            this.visit(ctx.postfixExpression());
            System.out.print(")");
        } else {
            this.visit(ctx.inOutExpression());
        }
        return null;
    }

    @Override
    public Void visitInOutExpression(InOutExpressionContext ctx) {
        System.out.print("{ get _(): int { return " + ctx.identifier() + "; }");
        System.out.print(", set _(_: int) { " + ctx.identifier() + " = _; } }");
        return null;
    }

    @Override
    public Void visitPrimaryExpression(PrimaryExpressionContext ctx) {
        if (ctx.identifier() != null) {
            this.visit(ctx.identifier());
            if (ctx.identifier() != null) {
                this.visit(ctx.genericArgumentClause());
            }
        } else if (ctx.literalExpression() != null) {
            this.visit(ctx.literalExpression());
        } else if (ctx.selfExpression() != null) {
            this.visit(ctx.selfExpression());
        } else if (ctx.superclassExpression() != null) {
            this.visit(ctx.superclassExpression());
        } else if (ctx.closureExpression() != null) {
            this.visit(ctx.closureExpression());
        } else if (ctx.parenthesizedExpression() != null) {
            this.visit(ctx.parenthesizedExpression());
        } else if (ctx.tupleExpression() != null) {
            this.visit(ctx.tupleExpression());
        } else if (ctx.implicitMemberExpression() != null) {
            this.visit(ctx.implicitMemberExpression());
        } else if (ctx.wildcardExpression() != null) {
            this.visit(ctx.wildcardExpression());
        } else if (ctx.keyPathExpression() != null) {
            this.visit(ctx.keyPathExpression());
        } else if (ctx.selectorExpression() != null) {
            this.visit(ctx.selectorExpression());
        } else if (ctx.keyPathStringExpression() != null) {
            this.visit(ctx.keyPathStringExpression());
        }
        return null;
    }
}
