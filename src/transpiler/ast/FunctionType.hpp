#pragma once
#include "Attribute.hpp"
#include <tuple>

namespace swift2ts
{

namespace ast
{

class FunctionType : public Node
{
  public:
    enum { none, throws, rethrows };

    util::property<std::vector<AttributePtr>> attrs;
    util::property<std::vector<std::tuple<std::vector<AttributePtr>, bool, NodePtr>>> args;
    util::property<bool> variadic;
    util::property<int> kind;
    util::property<NodePtr> returnType;

    FunctionType(size_t line, size_t col, bool variadic, int kind, NodePtr returnType);
    std::any accept(const ASTVisitor &visitor) const override;
};

using FunctionTypePtr = std::shared_ptr<FunctionType>;

} // namespace ast

} // namespace swift2ts
