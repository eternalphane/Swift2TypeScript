#include "Identifier.hpp"

using namespace swift2ts::ast;

Identifier::Identifier(size_t line, size_t col, std::string text)
    : Node(line, col),
      text(std::move(text))
{
}

std::any Identifier::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
