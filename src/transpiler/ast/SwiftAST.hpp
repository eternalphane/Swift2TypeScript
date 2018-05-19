#pragma once
#include "Node.hpp"
#include <vector>

namespace swift2ts
{

namespace ast
{

class SwiftAST : public Node
{
  private:
    std::vector<NodePtr> _statements;
};

} // namespace ast

} // namespace swift2ts
