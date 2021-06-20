
const nameProduct = document.getElementById("nameProduct");
const priceProduct = document.getElementById("priceProduct");
const productsList = document.getElementById("products_list");
const totalElement = document.getElementById("total");
const buttonMenu = document.getElementById("btnMenu");

let total = 0;

buttonMenu.addEventListener("click", () => {
    document.getElementById("menu").open("first");
    // ionMenu.open("end")
})


// function openFirst() {
//     menuController.enable(true, 'first');
//     menuController.open('first');
// }

// function openEnd() {
//     menuController.open('end');
// }

// function openCustom() {
//     menuController.enable(true, 'custom');
//     menuController.open('custom');
// }


document.getElementById("btnSave")
.addEventListener("click", () => {
    const price = priceProduct.value;
    const name = nameProduct.value;

    if (isEmpty(name) || isEmpty(price)) {
        presentAlert("Error: Datos invalidos", null, 
            "Debes completar todos los datos solicitados."
        );
        return;
    }
    createNewProduct(name, price);
    total += parseInt(price);
    totalElement.textContent = total;
    clearInputs();

});

document.getElementById("btnCancel")
.addEventListener("click", () => {
    clearInputs();
});

function createNewProduct(name, price) {
    const ionCard = document.createElement("ion-card");
    const ionCardContent = document.createElement("ion-card-content");
    ionCardContent.textContent = `${name} : $ ${price}`;
    ionCard.appendChild(ionCardContent);
    productsList.appendChild(ionCard);
}

const isEmpty = str => !str.trim().length;

function clearInputs() {
    nameProduct.value = "";
    priceProduct.value = "";
}

function presentAlert(header, subHeader = null, message) {
    const alert = document.createElement("ion-alert");
    alert.header = header;
    alert.subHeader = subHeader;
    alert.message = message;
    alert.buttons = ['Aceptar'];
    alert.cssClass = 'my-custom-class';

    document.body.appendChild(alert);
    // await alert.present();
    return alert.present();
  
    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
