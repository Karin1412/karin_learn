const Karin = {
    name: 'Karin',
    age: 2003,
    aspect: 'KTPM',
    moto: false,
    finance: false
}

const calcAge = (n) =>{
    const day = new Date()
    const year = day.getFullYear()
    console.log(year)
    return year - n
}

Karin.age = calcAge(Karin.age)

if (Karin.age > 20){
    Karin.aspect = 'Đi làm'
    Karin.name = 'Karin coder'
    Karin.finance = true
    Karin.moto = true
}

console.log(Karin)
