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
             + '<div class="ratingCard"><h5>User Rating</h5><p>' 
             +  productArray[arrayNumber].rating + '</p> </div><div class="buttonCard"><button>Order now</button></div></div>'
        productsPreviewCard.appendChild(divElement)
        arrayNumber = arrayNumber + 1
        
    }
    arrayNumber = arrayNumber - 4
}

placeElements()

let shiftLeft = document.querySelector("#shiftLeft")
let shiftLeft2 = document.querySelector("#shiftLeft2")
let shiftRight = document.querySelector("#shiftRight")
let shiftRight2 = document.querySelector("#shiftRight2")

function shiftLeftFunction() {
    if (arrayNumber >= 1) {
        arrayNumber -= 1
        placeElements()
    }
}

function shiftRightFunction() {
    if (arrayNumber <= productArray.length - 5) {
    arrayNumber += 1
    placeElements()}
}

shiftLeft.addEventListener("click", shiftLeftFunction)
shiftLeft2.addEventListener("click", shiftLeftFunction)

shiftRight.addEventListener("click", shiftRightFunction)
shiftRight2.addEventListener("click", shiftRightFunction)