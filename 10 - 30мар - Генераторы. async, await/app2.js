function* a() {
    return (yield  '13') + (yield  '18');
}

let iterator = a();
let r = iterator.next();

r = iterator.next(Number(r.value));
r = iterator.next(Number(r.value));

console.log(r);
