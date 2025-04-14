const app = document.getElementById('app');
const API = 'https://fakestoreapi.com/products';


async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    data.splice(0, 10);
    console.log(data);

    const products = data?.map(product => {
        return `
            <article class="card">
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}
                    <small>Precio $ ${product.price}</small>
                </h2>
            </article>`;
    }).join('');

    const newItem = document.createElement('section');
    newItem.classList.add('items');
    newItem.innerHTML = products;
    app.appendChild(newItem);
};

fetchData(API);
