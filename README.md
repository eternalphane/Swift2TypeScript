# Swift to TypeScript Transpiler
This is an open source Swift4 to TypeScript transpiler powered by ANTLR4.

WIP
## Examples
### Data Types
+ Numeric Types

  Swift:
  ```swift
  let i: Int = 2, d: Double = 0.33
  var j: Int = i + 2
  print(j)
  ```
  TypeScript:
  ```ts
  /**
   * In `Foundation.ts`:
   * interface int extends Number { }
   * interface double extends Number { }
   */
  const i: int = 2, d: double = 0.33;
  let j: int = (i as number) + 2;
  console.log(j)
  ```
### Functions
+ Argument Label

  Swift:
  ```swift
  func do_sth(code: Int, _ msg: String, extra x: Double) {
      // ...
  }
  do_sth(code: 1, "error", extra: 1.5)
  ```
  TypeScript:
  ```ts
  function do_sth(_: { code: int, 1: string, extra: double }): void {
      let code: int = _.code, msg: string = _[1], x: double = _.extra;
      // ...
  }
  do_sth({ code: 1 , 1: 'error', extra: 1.5 });
  ```
+ Overloading

  Swift:
  ```swift
  func version(_ str: String) {
      print("version: \(str)")
  }
  func version(_ major: Int, _ minor: Int) {
      print("version: \(major).\(minor)")
  }

  func var_dump(_ val: Int) {
      print("[Int] \(val)")
  }
  func var_dump(_ val: String) {
      print("[String] \(val)")
  }
  func var_dump(val x: Int) {
      print("[Int](val) \(x)")
  }
  ```
  TypeScript:
  ```ts
  function version(_: { 0: string }): void;
  function version(_: { 0: int, 1: int }): void;
  function version(_: { 0: string } | { 0: int, 1: int }): void {
      if ('string' === typeof _[0]) {
          let str: string = _[0];
          console.log(`version: ${str}`);
      } else if (_[0] instanceof int) {
          let major: int = _[0], minor: int = _[1];
          console.log(`version: ${major}.${minor}`);
      }
  }

  function var_dump(_: { 0: int }): void;
  function var_dump(_: { 0: string }): void;
  function var_dump(_: { val: int }): void;
  function var_dump(_: { 0: int } | { 0: string } | { val: int }): void {
      if (_[0] instanceof int) {
          let val: int = _[0];
          console.log(`[Int] ${val}`);
      } else if ('string' === typeof _[0]) {
          let val: string = _[0];
          console.log(`[String] ${val}`);
      } else if (_.val instanceof int) {
          let val: int = _[0];
          console.log(`[Int](val) ${val}`);
      }
  }
  ```
+ In-Out Parameters

  Swift:
  ```swift
  func add(_ inc: Int, to x: inout Int) {
      x += inc
  }
  var a: Int = 1
  add(3, to: &a)
  print(a) // prints "4"
  ```
  TypeScript:
  ```ts
  function add(_: { 0: int, to: { 0: int } }): void {
      let inc: int = _[0], x: { 0: int } = _.to;
      (x[0] as number) += (inc as number);
  }
  let a: int = 1;
  add({ 0: 3, to: { get 0(): int { return a; }, set 0(_: int) { a = _; } } });
  console.log(a); // prints "4"
  ```
