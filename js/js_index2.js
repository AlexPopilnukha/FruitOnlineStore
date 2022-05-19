let mainBox=document.querySelector('#mainBox')
let apple1=document.querySelector('#apple1')
let apple2=document.querySelector('#apple2')
let apple3=document.querySelector('#apple3')
let apple4=document.querySelector('#apple4')
let apple5=document.querySelector('#apple5')
let apple6=document.querySelector('#apple6')
let apple7=document.querySelector('#apple7')
let apple8=document.querySelector('#apple8')
let apple9=document.querySelector('#apple9')
let apple10=document.querySelector('#apple10')
let apple11=document.querySelector('#apple11')
let apple12=document.querySelector('#apple12')
let apple13=document.querySelector('#apple13')
let apple14=document.querySelector('#apple14')
let apple15=document.querySelector('#apple15')
let apple16=document.querySelector('#apple16')
let apple17=document.querySelector('#apple17')
let apple18=document.querySelector('#apple18')
let apple19=document.querySelector('#apple19')
let apple20=document.querySelector('#apple20')
let apple21=document.querySelector('#apple20')
let apple22=document.querySelector('#apple20')
let apple23=document.querySelector('#apple20')
let apple24=document.querySelector('#apple20')
let apple25=document.querySelector('#apple20')
let apple26=document.querySelector('#apple20')
let apple27=document.querySelector('#apple20')
let apple28=document.querySelector('#apple20')
let apple29=document.querySelector('#apple20')
let apple30=document.querySelector('#apple20')
let apple31=document.querySelector('#apple20')
let apple32=document.querySelector('#apple20')
let apple33=document.querySelector('#apple20')
let apple34=document.querySelector('#apple20')
let apple35=document.querySelector('#apple20')
let apple36=document.querySelector('#apple20')
let apple37=document.querySelector('#apple20')
let apple38=document.querySelector('#apple20')
let apple39=document.querySelector('#apple20')
let apple40=document.querySelector('#apple20')



let arr=[apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12,apple13,apple14,apple15,apple16,apple17,apple18,apple19,apple20,apple21,apple22,apple23,apple24,apple25,apple26,apple27,apple28,apple29,apple30,apple31,apple32,apple33,apple34,apple35,apple36,apple37,apple38,apple39,apple40]
let arr2=[200,220,220,240,451,440,450,420,420,420,390,390,390,360,360,360,330,330,330,330,300,300,300,270,270,270,240,240,240,210,210,210,180,180,180,150,150,150,120,120]
let arr3=[]
let i =0
let b=0

let interval=setInterval(c,2000)
function c() {
    b+=1
    console.log(b)
    arr[i].style.transition='0s'
    i=5
    if(i>2){
        i=Math.floor(Math.random() * 40)
        arr3.push(i)
        arr[i].style.transition='linear 0.5s'

        arr[i].style.marginTop = '555px'
        if (b===5){
            arr[i].style.transition='0s'
            b=0
            arr[arr3[0]].style.marginTop=arr2[i]+'px'
            arr3.shift()
        }
    }
}
c()

let us=document.querySelector('#userName')
let userMessage = document.querySelector('#userMessage')



us.onblur=function () {
    if (us.value.length === 0 || us.value.length >= 1 && us.value.length < 4 || us.value.length > 20 || us.value === 'test' || us.value === 'user' || us.value === 'admin') {
        resultUserName = false
    }
    if (us.value.length === 0) {
        userMessage.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Username is required'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (us.value.length >= 1 && us.value.length < 4) {
        userMessage.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Min length is 4 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (us.value.length > 20) {
        userMessage.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Max length is 20 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (us.value === 'test' || us.value === 'user' || us.value === 'admin') {
        userMessage.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Username ‘admin’ or ‘user’or ‘test’ is not allowed'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (us.value.length > 4 && us.value.length <= 20) {
        userMessage.innerHTML = ''
    }
}

let password=document.querySelector('#password')
let passwordMessage=document.querySelector('#passwordMessage')
password.onblur=function (){
    if (password.value.length === 0) {
        passwordMessage.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Password is required' +'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResult=false
    }
    if (password.value.length>=1 && password.value.length<6 ){
        passwordMessage.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Min length is 6 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResult=false
    }
    if (password.value.length>30 ){
        passwordMessage.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Max length is 30 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResult=false
    }
    if (password.value.length>5&&password.value.length<=30){
        passwordMessage.innerHTML=''
        passwordResult=true
    }
}

let usCreate=document.querySelector('#userNameCreate')
let userMessageCreate = document.querySelector('#userMessageCreate')
let resultUserNameCreate=2



usCreate.onblur=function () {
    if (usCreate.value.length === 0 || usCreate.value.length >= 1 && usCreate.value.length < 4 || usCreate.value.length > 20 || usCreate.value === 'test' || usCreate.value === 'user' || usCreate.value === 'admin') {
        resultUserNameCreate = false
    }
    if (usCreate.value.length === 0) {
        userMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Username is required'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (usCreate.value.length >= 1 && usCreate.value.length < 4) {
        userMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Min length is 4 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (usCreate.value.length > 20) {
        userMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Max length is 20 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (usCreate.value === 'test' || usCreate.value === 'user' || usCreate.value === 'admin') {
        userMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Username ‘admin’ or ‘user’or ‘test’ is not allowed'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (usCreate.value.length > 4 && usCreate.value.length <= 20) {
        userMessageCreate.innerHTML = ''
        resultUserNameCreate = true
    }
}
let passwordResultCreate=2
let passwordCreate=document.querySelector('#passwordCreate')
let passwordMessageCreate=document.querySelector('#passwordMessageCreate')
passwordCreate.onblur=function (){
    if (passwordCreate.value.length === 0) {
        passwordMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Password is required' +'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResultCreate=false
    }
    if (passwordCreate.value.length>=1 && passwordCreate.value.length<6 ){
        passwordMessageCreate.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Min length is 6 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResult=false
    }
    if (passwordCreate.value.length>30 ){
        passwordMessageCreate.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+'Max length is 30 characters'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        passwordResult=false
    }
    if (passwordCreate.value.length>5&&passwordCreate.value.length<=30){
        passwordMessageCreate.innerHTML=''
        passwordResultCreate=true
    }
}

let emailCreate=document.querySelector('#emailCreate')
let emailMessageCreate=document.querySelector('#emailMessageCreate')
let resultEmail=2
emailCreate.onblur=function (){
    if (emailCreate.value.length === 0) {
        resultEmail = false
        emailMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Email is required'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
    }
    if (emailCreate.value.length > 0) {
        let validateEmail = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-])+\.([A-Za-z]{2,4})$/
        if (emailCreate.value.match(validateEmail)) {
            emailMessageCreate.innerHTML = ''
            resultEmail = true
        } else {
            emailMessageCreate.innerHTML ='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Enter a valid email address'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
            resultEmail = false
        }
    }
}
let repeatPasswordCreate=document.querySelector('#repeatPasswordCreate')
let repeatPasswordMessageCreate=document.querySelector('#repeatPasswordMessageCreate')
let repeatResult=2
repeatPasswordCreate.onblur=function (){
    if (repeatPasswordCreate.value.length===0){
        repeatPasswordMessageCreate.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'Repeat is required'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        repeatResult=false
    }
    if (repeatPasswordCreate.value!==passwordCreate.value){
        repeatPasswordMessageCreate.innerHTML='<img src="../img/apple.png" alt="" class="appleExc">' +' '+ 'The passwords must match'+'  ' + '<img src="../img/apple.png" alt="" class="appleExc">'
        repeatResult=false
    }
    if (repeatPasswordCreate.value===passwordCreate.value){
        repeatPasswordMessageCreate.innerHTML=''
        repeatResult=true
    }
}
let tableCreateAccount= document.querySelector('#tableCreateAccount')
let createAccountButton=document.querySelector('#createAccount')
createAccountButton.onclick = function (){
tableCreateAccount.style.visibility='visible'
}
let createAccountButton2=document.querySelector('#createAccount2')
let signInButton=document.querySelector('#signIn')
signInButton.onclick=function (){
    window.location.href ='index3.html'
}

createAccountButton2.onclick=function () {
    if (repeatResult === true && resultEmail === true && passwordResultCreate === true && resultUserNameCreate === true) {
        localStorage.setItem(usCreate.value, repeatPasswordCreate.value)
        tableCreateAccount.style.visibility='hidden'
    }
}
