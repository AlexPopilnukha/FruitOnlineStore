let tabProducts= document.querySelector('#tab-1')
let containerAllProducts=document.querySelector('#containerForProducts')
let nameAllProducts=document.querySelector('#allProducts')

myStorage = window.localStorage;
localStorage.setItem("Apple",'15')
localStorage.setItem("priceApple",'2')
localStorage.setItem("Orange",'85')
localStorage.setItem("priceOrange",'5')
localStorage.setItem("Pineapple",'60')
localStorage.setItem("pricePineapple",'4')
localStorage.setItem("Pear",'120')
localStorage.setItem("pricePear",'9')
localStorage.setItem("Banana",'90')
localStorage.setItem("priceBanana",'8')
localStorage.setItem("Cherry",'93')
localStorage.setItem("priceCherry",'5')
localStorage.setItem("Pomegranate",'152')
localStorage.setItem("pricePomegranate",'7')
localStorage.setItem("Mango",'36')
localStorage.setItem("priceMango",'9')


function priceProductsCell (){
    document.querySelector('#priceApple').innerHTML=localStorage.getItem('priceApple')+'  $'
    document.querySelector('#priceOrange').innerHTML=localStorage.getItem('priceOrange')+'  $'
    document.querySelector('#pricePineapple').innerHTML=localStorage.getItem('pricePineapple')+'  $'
    document.querySelector('#pricePear').innerHTML=localStorage.getItem('pricePear')+'  $'
    document.querySelector('#priceBanana').innerHTML=localStorage.getItem('priceBanana')+'  $'
    document.querySelector('#priceCherry').innerHTML=localStorage.getItem('priceCherry')+'  $'
    document.querySelector('#pricePomegranate').innerHTML=localStorage.getItem('pricePomegranate')+'  $'
    document.querySelector('#priceMango').innerHTML=localStorage.getItem('priceMango')+'  $'
}
priceProductsCell()

tabProducts.onclick=function (){
    containerAllProducts.style.visibility='visible'
    nameAllProducts.style.visibility='visible'
    containerForBasket.style.visibility='hidden'
    containerForAdmin.style.visibility='hidden'
    inputAppleBasket.style.visibility='hidden'
    inputOrangeBasket.style.visibility='hidden'
}
let tabBasket=document.querySelector('#tab-2')
let containerForBasket=document.querySelector('#MainContainerForBasket')
tabBasket.onclick=function (){
    containerAllProducts.style.visibility='hidden'
    nameAllProducts.style.visibility='hidden'
    containerForAdmin.style.visibility='hidden'
    containerForBasket.style.visibility='visible'
    inputAppleBasket.style.visibility='visible'
    inputOrangeBasket.style.visibility='visible'
    containerForBasket.style.marginTop='-650px'
}
let tabAdmin=document.querySelector('#tab-3')
let containerForAdmin=document.querySelector('#MainContainerForAdmin')
tabAdmin.onclick=function (){
    containerAllProducts.style.visibility='hidden'
    nameAllProducts.style.visibility='hidden'
    containerForBasket.style.visibility='hidden'
    containerForAdmin.style.visibility='visible'
    inputAppleBasket.style.visibility='hidden'
    inputOrangeBasket.style.visibility='hidden'
}



let buttonApple=document.querySelector('#buttonApple')
let inputApple=document.querySelector('#inputApple')
let table2=document.querySelector('#table2id')
let totalPriceCell=document.querySelector('#totalPrice')
let totalPriceResult=0
let inputAppleBasket=document.querySelector('#appleBasket')


let size=0

buttonApple.onclick=function () {
    size+=30
    containerForAdmin.style.marginTop='-'+size+'px'
    console.log(size)
    inputAppleBasket.value=inputApple.value
    let localStorageCurrent = localStorage.getItem('Apple') - inputApple.value
    localStorage.setItem('Apple',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTr.style.border='1px solid grey'
    addTd2.innerText='Apple (Ukraine)'
    addTd3.innerText=''
    addTd4.innerText= inputApple.value*localStorage.getItem('priceApple')+'$'
    addTd3.appendChild(inputAppleBasket)
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputApple.value*localStorage.getItem('priceApple'))
    totalPriceC()
    Quantity ()
}
inputAppleBasket.onchange=function (){
    if (inputAppleBasket.value<inputApple.value){
        let localUpdate= (inputApple.value-inputAppleBasket.value)+ parseInt(localStorage.getItem('Apple'))
        localStorage.setItem('Apple',localUpdate)
       inputApple.value= inputAppleBasket.value
        Quantity ()
    }
    if (inputAppleBasket.value>inputApple.value){
        let localUpdate2= parseInt(localStorage.getItem('Apple')) - (inputAppleBasket.value-inputApple.value)
        localStorage.setItem('Apple',localUpdate2)
        inputApple.value= inputAppleBasket.value
        Quantity ()
    }

    }

let buttonOrange=document.querySelector('#buttonOrange')
let inputOrange=document.querySelector('#inputOrange')
let inputOrangeBasket=document.querySelector('#orangeBasket')

buttonOrange.onclick=function () {
    inputOrangeBasket.value=inputOrange.value
    let localStorageCurrent = localStorage.getItem('Orange') - inputOrange.value
    localStorage.setItem('Orange',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTr.style.border='1px solid grey'
    addTd2.innerText='Orange (Florida)'
    addTd3.innerText=''
    addTd4.innerText= inputOrange.value*localStorage.getItem('priceOrange')+'$'
    addTd3.appendChild(inputOrangeBasket)
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputOrange.value*localStorage.getItem('priceOrange'))
    totalPriceC()
    Quantity ()

}
inputOrangeBasket.onchange=function (){
    if (inputOrangeBasket.value<inputOrange.value){
        let localUpdate= (inputOrange.value-inputOrangeBasket.value)+ parseInt(localStorage.getItem('Orange'))
        localStorage.setItem('Orange',localUpdate)
        inputOrange.value= inputOrangeBasket.value
        Quantity ()
    }
    if (inputOrangeBasket.value>inputOrange.value){
        let localUpdate2= parseInt(localStorage.getItem('Orange')) - (inputOrangeBasket.value-inputOrange.value)
        localStorage.setItem('Orange',localUpdate2)
        inputOrange.value= inputOrangeBasket.value
        Quantity ()
    }

}


let buttonPineapple=document.querySelector('#buttonPineapple')
let inputPineapple=document.querySelector('#inputPineapple')
buttonPineapple.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Pineapple') - inputPineapple.value
    localStorage.setItem('Pineapple',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Pineapple (California)'
    addTd3.innerText=inputPineapple.value  + '    lb'
    addTd4.innerText= inputPineapple.value*localStorage.getItem('pricePineapple')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputPineapple.value*localStorage.getItem('pricePineapple'))
    totalPriceC()
}
let buttonPear=document.querySelector('#buttonPear')
let inputPear=document.querySelector('#inputPear')
buttonPear.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Pear') - inputPear.value
    localStorage.setItem('Pear',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Pear (California)'
    addTd3.innerText=inputPear.value + '    lb'
    addTd4.innerText= inputPear.value*localStorage.getItem('pricePear')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputPear.value*localStorage.getItem('pricePear'))
    totalPriceC()
}
let buttonBanana=document.querySelector('#buttonBanana')
let inputBanana=document.querySelector('#inputBanana')
buttonBanana.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Banana') - inputBanana.value
    localStorage.setItem('Banana',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Banana (Florida)'
    addTd3.innerText=inputBanana.value  + '    lb'
    addTd4.innerText= inputBanana.value*localStorage.getItem('priceBanana')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputBanana.value*localStorage.getItem('priceBanana'))
    totalPriceC()
}
let buttonCherry=document.querySelector('#buttonCherry')
let inputCherry=document.querySelector('#inputCherry')
buttonCherry.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Cherry') - inputCherry.value
    localStorage.setItem('Cherry',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Cherry (Mexico)'
    addTd3.innerText=inputCherry.value  + '    lb'
    addTd4.innerText= inputCherry.value*localStorage.getItem('priceCherry')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputCherry.value*localStorage.getItem('priceCherry'))
    totalPriceC()
}
let buttonPomegranate=document.querySelector('#buttonPomegranate')
let inputPomegranate=document.querySelector('#inputPomegranate')
buttonPomegranate.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Pomegranate') - inputPomegranate.value
    localStorage.setItem('Pomegranate',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Pomegranate (Mexico)'
    addTd3.innerText=inputPomegranate.value  + '    lb'
    addTd4.innerText= inputPomegranate.value*localStorage.getItem('pricePomegranate')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputPomegranate.value*localStorage.getItem('pricePomegranate'))
    totalPriceC()
}
let buttonMango=document.querySelector('#buttonMango')
let inputMango=document.querySelector('#inputMango')
buttonMango.onclick=function (){
    let localStorageCurrent = localStorage.getItem('Mango') - inputMango.value
    localStorage.setItem('Mango',localStorageCurrent)
    Quantity ()
    let addTr=document.createElement('tr')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTd2.innerText='Mango (Florida)'
    addTd3.innerText=inputMango.value  + '    lb'
    addTd4.innerText= inputMango.value*localStorage.getItem('priceMango')+'$'
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table2.appendChild(addTr)
    totalPriceResult=totalPriceResult+(inputMango.value*localStorage.getItem('priceMango'))
    totalPriceC()
}

let buttonNewProduct=document.querySelector('#buttonNewProduct')
let table3=document.querySelector('#table3id')
buttonNewProduct.onclick=function (){
    let addTr=document.createElement('tr')
    let addTd1=document.createElement('td')
    let addTd2=document.createElement('td')
    let addTd3=document.createElement('td')
    let addTd4=document.createElement('td')
    addTr.appendChild(addTd1)
    addTr.appendChild(addTd2)
    addTr.appendChild(addTd3)
    addTr.appendChild(addTd4)
    table3.appendChild(addTr)
}
function Quantity () {
    document.querySelector('#appleAdminQuantity').innerHTML=localStorage.getItem('Apple')
    document.querySelector('#orangeAdminQuantity').innerHTML=localStorage.getItem('Orange')
    document.querySelector('#pineappleAdminQuantity').innerHTML=localStorage.getItem('Pineapple')
    document.querySelector('#pearAdminQuantity').innerHTML=localStorage.getItem('Pear')
    document.querySelector('#bananaAdminQuantity').innerHTML=localStorage.getItem('Banana')
    document.querySelector('#cherryAdminQuantity').innerHTML=localStorage.getItem('Cherry')
    document.querySelector('#pomegranateAdminQuantity').innerHTML=localStorage.getItem('Pomegranate')
    document.querySelector('#mangoAdminQuantity').innerHTML=localStorage.getItem('Mango')
}
Quantity()

function Price(){
    document.querySelector('#applePrice').innerHTML=localStorage.getItem('priceApple')
    document.querySelector('#orangePrice').innerHTML=localStorage.getItem('priceOrange')
    document.querySelector('#pineapplePrice').innerHTML=localStorage.getItem('pricePineapple')
    document.querySelector('#pearPrice').innerHTML=localStorage.getItem('pricePear')
    document.querySelector('#bananaPrice').innerHTML=localStorage.getItem('priceBanana')
    document.querySelector('#cherryPrice').innerHTML=localStorage.getItem('priceCherry')
    document.querySelector('#pomegranatePrice').innerHTML=localStorage.getItem('pricePomegranate')
    document.querySelector('#mangoPrice').innerHTML=localStorage.getItem('priceMango')
}
Price()

function totalPriceC(){
    totalPriceCell.innerHTML=totalPriceResult + '$'
}
totalPriceC()

let buttonAdminSubmit=document.querySelector('#buttonAdminSubmit')
buttonAdminSubmit.onclick=function (){

}
