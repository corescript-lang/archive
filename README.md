For making a simple interpreter, see
https://github.com/corescript-lang/explaination/blob/master/simpleinterpreter.md

# Compiler
First, "compile" the code. This should generate make sure indents are correct,
and store info for where functions are declared.
It also needs to put code in chunks. This should mainly be separated by the line's indents,
so functions and false if statements can be skipped easily.

In most cases, putting arrays in arrays should work.

For example, this:
```
var name = Jim
if name = Jim
	print Hello
```
Should compile to:
```
[
"var name = Jim",
["if name = Jim", "print Hello"]
]
```
It could also compile to:
```
[
"var name = Jim",
{"if name = Jim": ["print Hello"]}
]
```

# Interpreter
Next, the interpreter. This should **not** go through each line and parse each one.
It should be able to parse 2 different parts of code at the same time. This is done to
be able to get return data from a function without moving the line it is called from.

For example:
```
print 2 + 1 is:
print (doThing 2)

function doThing parameter
	return (doThing + 1)

```

While executing the 2nd line, the line number for function `doThing` is grabbed,
and the code inside doThing is interpreted outside the main interpreter.

Once `return` is called, that data is given
to the main interpreter executing the 2nd line.

By "main interpreter", that means the first set of code that is run in the program.
More than one "interpreter" means that the `interpreter` function in Corescript is
just being called again.

# Concatenation
A big part of the language is being able to parse raw strings, math equations, and being able to put them together. In classic Corescript, this would work like this:
```
input name = Jimmy
print Hello, (name)
```
Of course, this could interpret enclosed words than aren't meant to be parsed. To avoid this, the interpreter would skip it if the requested varible is undefined. For example:
```
print Jacob, (my dad) is cool.
```
Would print:
```
Jacob, (my dad) is cool.
```

To avoid having this conflict altogether, an alternative method could use [] instead of (). This should be able to be easily configured, so I can change it to $$, {}, etc.

