inout:
```swift
class A {
    var x: Int = 0
}
func foo(_ x: inout Int) -> Int {
    x += 3
    return x
}
func bar(_ x: Int) -> A {
    let a = A()
    a.x = x
    return a
}
var a = A()
foo(&a.x)
print(a.x)
let b = A()
var c = b
foo(&c.x)
print(c.x)
print(b.x)
var d = bar(3)
foo(&d.x)
print(d.x)
print(foo(&bar(1).x))
```
