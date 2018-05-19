#pragma once
#include "Statement.hpp"

namespace swift2ts
{

namespace ast
{

class Expression : public Statement
{
  public:
    Expression(size_t line, size_t col)
        : Statement(line, col)
    {
    }

    // TODO: add virtual clone function
};

using ExpressionPtr = std::shared_ptr<Expression>;

} // namespace ast

} // namespace swift2ts
