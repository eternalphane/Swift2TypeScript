#include "Operator.hpp"

using namespace swift2ts::ast;

Operator::Operator(
    size_t line, size_t col,
    std::string text, NodePtr left, NodePtr right
) : Node(line, col),
    text(std::move(text)), left(left), right(right)
{
}
