let app=document.getElementById("app"),API="https://fakestoreapi.com/products";async function fetchData(t){let e=await fetch(t),a=await e.json();a.splice(0,10),console.log(a);let c=a?.map(t=>`
            <article class="card">
                <img src="${t.image}" alt="${t.title}">
                <h2>${t.title}
                    <small>Precio $ ${t.price}</small>
                </h2>
            </article>`).join(""),i=document.createElement("section");i.classList.add("items"),i.innerHTML=c,app.appendChild(i)}fetchData("https://fakestoreapi.com/products");
//# sourceMappingURL=parcel.dec6ea66.js.map
