package com.github.eternalphane.swift2typescript;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

public class Main {
    public static void main(String[] args) throws Exception {
        CharStream input = CharStreams.fromStream(System.in);
        SwiftLexer lexer = new SwiftLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        SwiftParser parser = new SwiftParser(tokens);
        ParseTree tree = parser.start();
        Swift2TSVisitor visitor = new Swift2TSVisitor();
        visitor.visit(tree);
    }
}
