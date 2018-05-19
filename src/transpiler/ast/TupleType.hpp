#pragma once
#include "Identifier.hpp"
#include <vector>
#include <tuple>

namespace swift2ts
{

namespace ast
{

class TupleType : public Node
{
  public:
    using container_type = std::vector<std::tuple<IdentifierPtr, NodePtr>>;
    util::property<container_type> elems;

    TupleType(size_t line, size_t col);
    container_type::reference operator[](container_type::size_type pos);
    container_type::const_reference operator[](container_type::size_type pos) const;
    std::any accept(const ASTVisitor &visitor) const override;
    container_type::size_type size() const noexcept;
};

using TupleTypePtr = std::shared_ptr<TupleType>;

} // namespace ast

} // namespace swift2ts
