#include "Node.hpp"

using namespace swift2ts::ast;

Node::Node(size_t line, size_t col)
    : line(line), col(col)
{
}

Node::~Node()
{
}
