console.log('Hello!');

let productArray = [
    {
        furnitureImage: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        rating: "5/5",
    },
    {
        furnitureImage: "images/brownchair.jpg",
        name: "Brown Chair",
        info: "A fancy but affordable chair",
        rating: "5/5",
    },
    {
        furnitureImage: "images/doublecouch.jpg",
        name: "Double Couch",
        info: "A durable, comfortable and affordable couch ",
        rating: "5/5",
    },
    {
        furnitureImage: "images/kitchen.jpg",
        name: "Kitchen",
        info: "We will help you build your dream kitchen",
        rating: "5/5",
    }
]

function placeElements() {
    let arrayNumber = 0
    const productsPreviewCard = document.querySelector(".productsPreviewCards")
    productArray.forEach((item) => {
        let divElement = document.createElement("div")
        // let imgElement = document.createElement("div")
        // let h3Element = document.createElement("h3")
        // let h6Element = document.createElement("h6")
        // let pElement = document.createElement("p")
        // let buttonElement = document.createElement("button")
        // imgElement.innerHTML = '<img src="'+ productArray[arrayNumber].furnitureImage+ '"width="100%"></img>' 
        //       + '<h3>'+ productArray[arrayNumber].name + '</h3>'
        // pElement.textContent = productArray[arrayNumber].info
        // h6Element.textContent = productArray[arrayNumber].rating
        // buttonElement.textContent = "Buy Now"
        divElement.classList.add("productsCard")

        // divElement.appendChild(imgElement)
        // divElement.appendChild(h3Element)
        // divElement.appendChild(pElement)
        // divElement.appendChild(h6Element)
        // divElement.appendChild(buttonElement)
        
        divElement.innerHTML = ' <img src="' + productArray[arrayNumber].furnitureImage + '" width="100%">' + 
            '<div class="infoCardPlacement"> <div class="infoCard"> <h3 id="product1H3"> '
             +  productArray[arrayNumber].name 
             + ' </h3>'
             + '<p>' + productArray[arrayNumber].info +'</p></div>'
             + '<div class="ratingCard"><p>' 
             +  productArray[arrayNumber].rating + '</p> </div><div class="buttonCard"><button>Order now</button></div></div>'
             productsPreviewCard.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    })
}

placeElements()

let h3Element = document.createElement("h3")
let pElement = document.createElement("p")

let shiftLeft = document.querySelector("#shiftLeft")
let shiftRight = document.querySelector("#shiftRight")

shiftLeft.addEventListener("click", () => {

})