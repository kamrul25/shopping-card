
const addProduct = () =>{
    const productField = document.getElementById("product-name");
    const quantityField = document.getElementById("product-quantity")
    const product = productField.value ;
    const quantity = quantityField.value;
    productField.value = "";
    quantityField.value = "";

    console.log(product, quantity);
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    document.getElementById("product-container").appendChild(li);
}