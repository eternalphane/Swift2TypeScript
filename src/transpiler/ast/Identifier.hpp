#pragma once
#include "Node.hpp"
#include <string>

namespace swift2ts
{

namespace ast
{

class Identifier : public Node
{
  public:
    util::property<std::string> text;

    Identifier(size_t line, size_t col, std::string text);
    std::any accept(const ASTVisitor &visitor) const override;
};

using IdentifierPtr = std::shared_ptr<Identifier>;

} // namespace ast

} // namespace swift2ts
