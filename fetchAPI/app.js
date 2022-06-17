function Product(name, description, price) {
  this.name = name;
  this.description = description;
  this.pice = price;
}
//Xu ly event click btn
function changeProduct(productId) {
  document.querySelector(".change-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name-change").value;
    let description = document.querySelector("#description-change").value;
    let price = document.querySelector("#price-change").value;
    const product = new Product(name, description, price);
    //xoa input rong
    for (const key in product) {
      if (product[key] === "") {
        delete product[key];
      }
    }
    fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product/" + productId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    window.location.reload();
  });
}
function handleBtnEvent(query) {
  btnList = document.querySelectorAll(query);
  btnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (query === ".change") {
        document.querySelector(".change-form").style.display = "block";
        changeProduct(e.target.dataset.id);
      } else if (query === ".delete") {
        fetch(
          `https://628b4592667aea3a3e2b48e5.mockapi.io/product/${e.target.dataset.id}`,
          { method: "DELETE" }
        );
        window.location.reload();
      }
    });
  });
}
document.querySelector(".add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let description = document.querySelector("#description").value;
  let price = document.querySelector("#price").value;
  const product = new Product(name, description, price);
  fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  window.location.reload();
});
//hien thi ds san pham
function RenderList(data) {
  let products = document.querySelector("tbody");
  data.forEach((product) => {
    products.innerHTML += `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.pice}</td>
            <td>
            <button class="btn change" data-id="${product.id}">Change</button>
            <button class="btn delete" data-id="${product.id}">Delete</button>
            </td>    
          </tr>`;
  });
}
fetch("https://628b4592667aea3a3e2b48e5.mockapi.io/product")
  .then((response) => response.json())
  .then((data) => {
    RenderList(data);
    handleBtnEvent(".change");
    handleBtnEvent(".delete");
  });
