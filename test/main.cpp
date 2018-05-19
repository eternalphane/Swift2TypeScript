#include <SwiftLexer.h>
#include <SwiftParser.h>
#include <antlr4-runtime.h>
#include <iostream>

int main()
{
    antlr4::ANTLRInputStream input(std::cin);
    swift2ts::SwiftLexer lexer(&input);
    antlr4::CommonTokenStream tokens(&lexer);
    swift2ts::SwiftParser parser(&tokens);
    auto tree = parser.program();
    std::cout << tree->toStringTree() << std::endl;
    return 0;
}
