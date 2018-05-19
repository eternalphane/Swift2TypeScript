#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class OptionalType : public Node
{
  public:
    enum { none, implicit };

    util::property<NodePtr> type;
    util::property<int> kind;

    OptionalType(size_t line, size_t col, NodePtr type, int kind);
    std::any accept(const ASTVisitor &visitor) const override;
};

using OptionalTypePtr = std::shared_ptr<OptionalType>;

} // namespace ast

} // namespace swift2ts
