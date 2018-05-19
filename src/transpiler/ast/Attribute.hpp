#pragma once
#include "Identifier.hpp"
#include <vector>

namespace swift2ts
{

namespace ast
{

class Attribute : public Node
{
  public:
    util::property<IdentifierPtr> name;
    util::property<std::vector<NodePtr>> args;

    Attribute(size_t line, size_t col, IdentifierPtr name);
    std::any accept(const ASTVisitor &visitor) const override;
};

using AttributePtr = std::shared_ptr<Attribute>;

} // namespace ast

} // namespace swift2ts
