#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class TypeCastingOperator : public Node
{
  public:
    enum { none, optional, forced, boolean };

    util::property<NodePtr> expr, type;
    util::property<int> kind;

    TypeCastingOperator(
        size_t line, size_t col,
        NodePtr expr, NodePtr type, int kind
    );
    std::any accept(const ASTVisitor &visitor) const override;
};

using TypeCastingOperatorPtr = std::shared_ptr<TypeCastingOperator>;

} // namespace ast

} // namespace swift2ts
