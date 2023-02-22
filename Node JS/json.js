const Person = [
    { name: 'Iqbal Caesar', age: 21, jurusan: 'Teknik Informatika' },
    { name: 'Willy Sunandar', age: 23, jurusan: 'Akutansi' },
    { name: 'Jaka Bimantara', age: 22, jurusan: 'Teknik Informatika' }
];

for (const x in Person) {
    //console.info(Person[x]); // ambil semua data didalam Person
    //console.info(Person[x].jurusan); // ambil data cuma bagian jurusan saja
    console.info(Person[x].jurusan , Person[x].age); // ambil data jurusan dan age
}