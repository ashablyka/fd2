function* a() {
    yield 1;
    yield 2;
    yield 3;
}

console.log([...a()]);

let iterator = a();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());