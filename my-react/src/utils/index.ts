const dog = {
  name: 'annimal',
  age: 1,
  sex: 'male',
  say() {
    console.log('hello world')
  }
}

const yellowdog = Object.create(dog)

console.log(yellowdog.__proto__ === dog)
