const Slidewarna = () => {
    const r = Math.ceil(Math.random() * 255 + 5);
    const g = Math.ceil(Math.random() * 255 + 5);
    const b = Math.ceil(Math.random() * 255 + 5);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}