#pragma once
#include "Identifier.hpp"
#include <vector>
#include <tuple>

namespace swift2ts
{

namespace ast
{

class TypeIdentifier : public Node
{
  public:
    using container_type = std::vector<std::tuple<IdentifierPtr, std::vector<NodePtr>>>;
    util::property<container_type> components;

    TypeIdentifier(size_t line, size_t col);
    container_type::reference operator[](container_type::size_type pos);
    container_type::const_reference operator[](container_type::size_type pos) const;
    std::any accept(const ASTVisitor &visitor) const override;
    container_type::size_type size() const noexcept;
};

using TypeIdentifierPtr = std::shared_ptr<TypeIdentifier>;

} // namespace ast

} // namespace swift2ts
