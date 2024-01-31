const Karin = {
    name: 'Karin',
    sex: 'male',
    year: 2003,
    class: 'KTPM2021',
    address:'Ben Tre'
}

const getAge = n =>{
    const date = new Date();
    const year = date.getFullYear();
    return year - n;
}

const KarinUpdate = {
    ...Karin,
    age: getAge(Karin.year)
}
const name = Karin.name

console.log(`-----Thong tin co ban ve ${name}-----`)
console.log(KarinUpdate)

const KarinFood = {
    breakfast: 'banh mi',
    lunch: 'com',
    dinner: 'pho'
} 

const {breakfast, lunch, dinner} = KarinFood
const KarinFavourite = ['code', 'choi the thao', 'nghe nhac']



console.log(`Bua sang cua ${name} la ${breakfast}`)
console.log(`Bua trua cua ${name} la ${lunch}`)
console.log(`Bua toi cua ${name} la ${dinner}`)

for(let favour in KarinFavourite){
    console.log(`So thich thu ${favour} cua Karin la ${KarinFavourite[favour]} `)
}