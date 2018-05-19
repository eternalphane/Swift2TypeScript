#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class SelfType : public Node
{
  public:
    SelfType(size_t line, size_t col);
    std::any accept(const ASTVisitor &visitor) const override;
};

using SelfTypePtr = std::shared_ptr<SelfType>;

} // namespace ast

} // namespace swift2ts
