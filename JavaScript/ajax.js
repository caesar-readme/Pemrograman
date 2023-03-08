// const ajax = new XMLHttpRequest();
//     ajax.open("GET", "api/hello.json");
//     ajax.addEventListener("load", () => {
//         const json = JSON.parse(ajax.responseText);
//         const header = document.getElementById('header');
//         header.textContent = json.cart;
//     });
//     ajax.send();

const displayResponse = (x) => {
    const header = document.getElementById('header');
    header.textContent = json.cart;
}

const ajax = new XMLHttpRequest();
    ajax.open("GET", "api/helleo.json");
    ajax.addEventListener("load", () => {
        if(ajax.status === 200){
            const json = JSON.parse(ajax.responseText);
            displayResponse(x);
        } else {
            displayResponse({cart : `Terjadi Kesalahan ${ajax.status}`});
        }
    })
    ajax.send();