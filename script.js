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
    },
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
        rating: "3/5",
    },
    {
        furnitureImage: "images/doublecouch.jpg",
        name: "Double Couch",
        info: "A durable, comfortable and affordable couch ",
        rating: "3/5",
    },
    {
        furnitureImage: "images/kitchen.jpg",
        name: "Kitchen",
        info: "We will help you build your dream kitchen",
        rating: "3/5",
    },
    {
        furnitureImage: "images/Orangearmchair.jpg",
        name: "Orange Armchair",
        info: "An orange armchair with matching footrest",
        rating: "1/5",
    },
    {
        furnitureImage: "images/brownchair.jpg",
        name: "Brown Chair",
        info: "A fancy but affordable chair",
        rating: "1/5",
    },
    {
        furnitureImage: "images/doublecouch.jpg",
        name: "Double Couch",
        info: "A durable, comfortable and affordable couch ",
        rating: "1/5",
    },
    {
        furnitureImage: "images/kitchen.jpg",
        name: "Kitchen",
        info: "We will help you build your dream kitchen",
        rating: "1/5",
    },
    {
        furnitureImage: "images/brownchair.jpg",
        name: "Brown Chair",
        info: "A fancy but affordable chair",
        rating: "1/5",
    },
    {
        furnitureImage: "images/doublecouch.jpg",
        name: "Double Couch",
        info: "A durable, comfortable and affordable couch ",
        rating: "1/5",
    },
    {
        furnitureImage: "images/kitchen.jpg",
        name: "Kitchen",
        info: "We will help you build your dream kitchen",
        rating: "1/5",
    }
]

let arrayNumber = 0
function placeElements() {
    console.log(arrayNumber + "pre loop")
    const productsPreviewCard = document.querySelector(".productsPreviewCards")
    productsPreviewCard.innerHTML = ""
    for (let i = 0; i < 4; i++ ) {
        let divElement = document.createElement("div")
        divElement.classList.add("productsCard")
        divElement.innerHTML = ' <img src="' + productArray[arrayNumber].furnitureImage + '" width="100%">' + 
            '<div class="infoCardPlacement"> <div class="infoCard"> <h3> '
             +  productArray[arrayNumber].name 
             + ' </h3>'
             + '<p>' + productArray[arrayNumber].info +'</p></div>'
             + '<div class="ratingCard"><p>' 
             +  productArray[arrayNumber].rating + '</p> </div><div class="buttonCard"><button>Order now</button></div></div>'
             productsPreviewCard.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        console.log(arrayNumber + "for loop")
        
    }
    arrayNumber = arrayNumber - 4
    console.log(arrayNumber + "post loop")
}

placeElements()

let shiftLeft = document.querySelector("#shiftLeft")
let shiftRight = document.querySelector("#shiftRight")

shiftLeft.addEventListener("click", () => {
    if (arrayNumber >= 1) {
    arrayNumber -= 1
    placeElements()
}
})

shiftRight.addEventListener("click", () => {
    if (arrayNumber <= productArray.length - 5) {
    arrayNumber += 1
    placeElements()}
})