#include "ProtocolCompositionType.hpp"

using namespace swift2ts::ast;
using container_type = ProtocolCompositionType::container_type;

ProtocolCompositionType::ProtocolCompositionType(size_t line, size_t col)
    : Node(line, col)
{
}

container_type::reference ProtocolCompositionType::operator[](container_type::size_type pos)
{
    return protocols()[pos];
}

container_type::const_reference ProtocolCompositionType::operator[](container_type::size_type pos) const
{
    return protocols()[pos];
}

std::any ProtocolCompositionType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}

container_type::size_type ProtocolCompositionType::size() const noexcept
{
    return protocols().size();
}
