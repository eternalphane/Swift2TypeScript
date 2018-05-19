#pragma once
#include "TypeIdentifier.hpp"

namespace swift2ts
{

namespace ast
{

class ProtocolCompositionType : public Node
{
  public:
    using container_type = std::vector<TypeIdentifierPtr>;
    util::property<container_type> protocols;

    ProtocolCompositionType(size_t line, size_t col);
    container_type::reference operator[](container_type::size_type pos);
    container_type::const_reference operator[](container_type::size_type pos) const;
    std::any accept(const ASTVisitor &visitor) const override;
    container_type::size_type size() const noexcept;
};

using ProtocolCompositionTypePtr = std::shared_ptr<ProtocolCompositionType>;

} // namespace ast

} // namespace swift2ts
