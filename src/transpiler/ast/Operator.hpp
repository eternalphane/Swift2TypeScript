#pragma once
#include "Node.hpp"
#include <string>

namespace swift2ts
{

namespace ast
{

class Operator : public Node
{
  protected:
    Operator(
        size_t line, size_t col,
        std::string text, NodePtr left, NodePtr right
    );

  public:
    util::property<std::string> text;
    util::property<NodePtr> left, right;
};

} // namespace ast

} // namespace swift2ts
