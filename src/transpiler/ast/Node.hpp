#pragma once
#include "ASTVisitor.hpp"
#include "../../util/property_helper.hpp"
#include <any>
#include <memory>

namespace swift2ts
{

namespace ast
{

class ASTVisitor;

class Node
{
  protected:
    Node(size_t line, size_t col);

  public:
    util::property<size_t> line, col;

    virtual ~Node();
    virtual std::any accept(const ASTVisitor &visitor) const = 0;
};

using NodePtr = std::shared_ptr<Node>;

} // namespace ast

} // namespace swift2ts
