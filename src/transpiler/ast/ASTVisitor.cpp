#include "ASTVisitor.hpp"

using namespace swift2ts::ast;

std::any ASTVisitor::visit(const Node &node) const
{
    return node.accept(*this);
}
