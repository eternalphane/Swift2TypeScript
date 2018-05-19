#include "TypeIdentifier.hpp"

using namespace swift2ts::ast;
using container_type = TypeIdentifier::container_type;

TypeIdentifier::TypeIdentifier(size_t line, size_t col)
    : Node(line, col)
{
}

container_type::reference TypeIdentifier::operator[](container_type::size_type pos)
{
    return components()[pos];
}

container_type::const_reference TypeIdentifier::operator[](container_type::size_type pos) const
{
    return components()[pos];
}

std::any TypeIdentifier::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}

container_type::size_type TypeIdentifier::size() const noexcept
{
    return components().size();
}
