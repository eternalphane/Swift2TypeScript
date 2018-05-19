#include "DictionaryType.hpp"

using namespace swift2ts::ast;

DictionaryType::DictionaryType(size_t line, size_t col, NodePtr key, NodePtr value)
    : Node(line, col), key(key), value(value)
{
}

std::any DictionaryType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
