A Corescript interpreter can be very simple.
Sadly, a basic interpreter only parses 1 line at a time.
This means no indents and no chunks of code.
But a basic interpreter can help you practice your programming skills, and can
be used in hobby operating systems.

For example, the following code:
```
print Hello
print World
```
Could be easily processed by this simple code (in english):
```
for line in code:
  if line starts with print:
    print substring(6, line)
```
Of course, a simple interpreter should have a lot more functionality than a print statement. 
Using substring will cut the string from the beginning to where the string starts. This includes the space after print.
This could also be parsed by splitting the line by spaces, and checking the first item.

## GOTO
A goto function can be very useful. It allows the program to skip code, and tell the interpreter where to go.
Although GOTO isn't the best way to write programs, it is the simplest.

## IF Statements
If statements redirect the code to another line if true/false.
```
if name = Jimmy:enter
print I don't know you.
stop
:enter
print Welcome!
```

## Examples:
```
// This is 1-10 in classic Corescript
var a = 0

:init
not a = 10:plus
if a = 10:kill

:plus
a++
print (a)

goto init
:kill
stop
```
This can be compressed to be a lot smaller if you wish.
```
var a=0
:plus
a++
print (a),
not a=10:plus
```
