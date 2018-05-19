#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class Statement : public Node
{
  public:
    Statement(size_t line, size_t col)
        : Node(line, col)
    {
    }
};

using StatementPtr = std::shared_ptr<Statement>;

} // namespace ast

} // namespace swift2ts
