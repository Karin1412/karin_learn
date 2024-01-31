//function

const nhaphang = (x , y = 1) =>{
    if(x >= 100)
    {
        console.log('So luong hang ton kho qua nhieu, khong the nhap')
        return x
    }
    else if (x + y >= 100)
    {
        const num = 100 - x
        console.log(`Theo quy dinh( Khong duoc ton qua 100 quyen) nen chung toi chi nhap ${num} quyen`)
        return 100
    }
    else
    {
        console.log(`Nhap thanh con ${y} quyen`)
        return x + y
    } 
}

const banhang = (x, y = 1) => {
    if(x <= 0) {
        console.log('Mat hang hien khong co san')
        return 0
    }
    else if( x - y < 0){
        console.log('Mat hang nay hien tai khong co du so luong')
        return x
    }
    else{
        console.log(`Da ban thanh cong ${y} cuon`)
        return x - y;
    }
}
const loinhuan = (x , y, z) =>{
    return (y - x)*z
}

const Kho = {
    tenhang: 'sach cho be',
    soluong: 30,
    gianhap: 12000,
    giaban: 15000,
}

console.log(Kho)

//Nhap thu 100 quyen
Kho.soluong = nhaphang(Kho.soluong, 100)
console.log(Kho)

// Nhap thu them 1 quyen
/* Kho.soluong = nhaphang(Kho.soluong)
console.log(Kho) */

// Ban thu 120 quyen
/* Kho.soluong = banhang(Kho.soluong, 100)
console.log(Kho) */

// Luu tam ra mot bien soluong khac
const tam = Kho.soluong

// Ban thu 100 quyen
Kho.soluong = banhang(Kho.soluong, 100)
console.log(Kho)

// Ban thu khi het sach
/* Kho.soluong = banhang(Kho.soluong)
console.log(Kho) */
const loi = loinhuan(Kho.gianhap, Kho.giaban, tam)
console.log(`Loi nhuan sau khi ban het ${tam} cuon sach la ${loi}`)
