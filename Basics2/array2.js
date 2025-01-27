const marvels = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

marvels.push(dc)
console.log(marvels); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvels[3][1]); //  flash


const marvels1 = ["thor","ironman","spiderman"]
const dc1 = ["superman","flash","batman"]
const allheroes = marvels1.concat(dc1)
console.log(allheroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman'  ]


//spread operator---   yeh concat kr deta h array ko

const marvels2 = ["thor","ironman","spiderman"]
const dc2 = ["superman","flash","batman"]

const newheros = [...marvels2, ...dc2]
console.log(newheros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman'  ]


const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr = anotherarr.flat(Infinity)
console.log(realarr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("hariom")); // false
console.log(Array.from("hariom")); // [ 'h', 'a', 'r', 'i', 'o', 'm' ] 
console.log(Array.from({name: "hariom"})); // []   yeh empty string aayegi


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[100,200,300]
