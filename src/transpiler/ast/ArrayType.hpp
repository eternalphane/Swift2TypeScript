#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class ArrayType : public Node
{
  public:
    util::property<NodePtr> type;

    ArrayType(size_t line, size_t col, NodePtr type);
    std::any accept(const ASTVisitor &visitor) const override;
};

using ArrayTypePtr = std::shared_ptr<ArrayType>;

} // namespace ast

} // namespace swift2ts
