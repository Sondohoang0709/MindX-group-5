let obj = {
foo: {a: "hello", b: "world"  },
bar: [ "example","mem", null, {xyz: 6}, 88],
qux: [4, 8, 12],

} 
// Cách 1:
console.log ( "Trước khi đổi xyz= " + (obj.bar[3].xyz) );
obj.bar[3].xyz= 606;
// Cách 2:
console.log("Sau khi đổi xyz =  " + (obj["bar"][3]["xyz"]) )



