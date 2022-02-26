console.log("hello world")
const nam = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
let namval = false;
let emval = false;
let phval = false;


nam.addEventListener("blur", () => {
    console.log("nam is blurre")

    let regex = /^[a-zA-z]([0-9a-zA-Z]){0,10}$/;
    let str = nam.value;
    console.log(regex, str)
    if (regex.test(str)) {
        console.log("it is  matched")
        nam.classList.remove('is-invalid')
        namval = true;
    }
    else {
        console.log("it is not  matched")
        nam.classList.add('is-invalid')
        namval = false;

    }

})
email.addEventListener("blur", () => {
    console.log("email is blurre")
    let regexe = /^([a-zA-Z0-9\_]+)\@([a-zA-Z]+){4,10}\.([a-zA-Z]){2,7}$/;
    let stre = email.value;
    console.log(regexe, stre)
    if (regexe.test(stre)) {
        email.classList.remove('is-invalid')
        console.log("it is  matched")
        emval = true;

    } else {
        console.log("it is not  matched")
        emval = false;

        email.classList.add('is-invalid')


    }
})
phone.addEventListener("blur", () => {
    console.log("phone is blurre")
    let regexn = /[(0-9)]{10}/;
    let strn = phone.value;
    console.log(regexn, strn)
    if (regexn.test(strn)) {
        phone.classList.remove('is-invalid')
        console.log("it is  matched")
        phval = true;

    } else {
        console.log("it is not  matched")
        phone.classList.add('is-invalid')
        phval = false;


    }
})

let success = document.getElementById("success")
let failure = document.getElementById("failure")
success.style.display = "none"
failure.style.display = "none"

let submit = document.getElementById("submit")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    // console.log("you clicked me")


    if (namval && emval && phval==true) {
        success.style.display = "block";
        failure.style.display = "none"
        success.classList.add('show')
    } else {
        success.style.display = "none";
        failure.classList.add('show')
        failure.style.display = "block"

    }

})
