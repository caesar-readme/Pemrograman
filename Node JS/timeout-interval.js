//const time = setTimeout(() => {
//    console.info(`Saya Akan Di Tampilkan Dalam Waktu 3 Detik`);
//}, 3000);

//time


const Order = (IdOrder) => {
    console.info(`ID Order ${IdOrder}`)
    ProsesOrder(IdOrder);
}

const ProsesOrder = (IdOrder) => {
    setTimeout(() => {
        console.info(`ID Order ${IdOrder} Processed`); // Tampil Dalam Kurun Waktu 3 Detik
    },3000)
}

Order(101)
Order(102)
Order(103)

