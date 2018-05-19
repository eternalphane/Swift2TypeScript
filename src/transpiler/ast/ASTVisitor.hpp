#pragma once
#include "Node.hpp"
#include <any>

namespace swift2ts
{

namespace ast
{

class Node;
class SwiftAST;
class TryOperator;
class PrefixOperator;
class BinaryOperator;
class PostfixOperator;
class AssignmentOperator;
class ConditionalOperator;
class TypeCastingOperator;
class ArrayType;
class DictionaryType;
class Identifier;
class Attribute;
class FunctionType;
class TypeIdentifier;
class InOutExpression;

class ASTVisitor
{
  public:
    virtual std::any visit(const SwiftAST &node) const = 0;
    virtual std::any visit(const TryOperator &node) const = 0;
    virtual std::any visit(const PrefixOperator &node) const = 0;
    virtual std::any visit(const BinaryOperator &node) const = 0;
    virtual std::any visit(const PostfixOperator &node) const = 0;
    virtual std::any visit(const AssignmentOperator &node) const = 0;
    virtual std::any visit(const ConditionalOperator &node) const = 0;
    virtual std::any visit(const TypeCastingOperator &node) const = 0;

    virtual std::any visit(const Node &node) const final;
};

} // namespace ast

} // namespace swift2ts
