#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class DictionaryType : public Node
{
  public:
    util::property<NodePtr> key, value;

    DictionaryType(size_t line, size_t col, NodePtr key, NodePtr value);
    std::any accept(const ASTVisitor &visitor) const override;
};

using DictionaryTypePtr = std::shared_ptr<DictionaryType>;

} // namespace ast

} // namespace swift2ts
