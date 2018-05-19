#include "TupleType.hpp"

using namespace swift2ts::ast;
using container_type = TupleType::container_type;

TupleType::TupleType(size_t line, size_t col)
    : Node(line, col)
{
}

container_type::reference TupleType::operator[](container_type::size_type pos)
{
    return elems()[pos];
}

container_type::const_reference TupleType::operator[](container_type::size_type pos) const
{
    return elems()[pos];
}

std::any TupleType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}

container_type::size_type TupleType::size() const noexcept
{
    return elems().size();
}
