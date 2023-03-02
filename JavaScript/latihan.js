const h_judul = document.getElementById('judul');
h_judul.addEventListener('mouseenter', () => {
    h_judul.innerHTML = 'Latihan JavaScript DOM';
})

const p1 = document.getElementsByClassName('p1')[0];
const p = document.querySelectorAll('p');
p1.addEventListener('mouseenter',() => {
    p1.innerHTML = 'Iqbal Caesar';
})

p1.addEventListener('mouseleave',() => {
    p1.innerHTML = 'Paragraf 1';
})

p1.addEventListener('mouseenter',() => {
    p1.style.backgroundColor = 'lightblue';
})
p1.addEventListener('mouseleave',() => {
    p1.style.backgroundColor = 'white';
})

// for(const x of p) {
//     x.style.backgroundColor = 'yellow';
// }

const p4 = document.querySelector('#b p');
p4.addEventListener('click',() => {
    const ul = document.querySelector('#b ul');
    const li_baru = document.createElement('li');
    const txt_baru = document.createTextNode('item baru');
    li_baru.appendChild(txt_baru);
    ul.appendChild(li_baru);
})

p4.style.backgroundColor = 'lightblue';
p4.style.cursor = 'pointer';