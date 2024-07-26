



// function changecar(){
//    let value = document.getElementById('selectcar').value
//    console.log(value)
   
//    document.getElementById('car').src = `images/${value}`


    
// }




var topside = 10
var leftside = 10
var keycar = document.getElementById('keycar')

onkeydown = (e) => {

    if (e.key == "ArrowDown") {
        keycar.style.top = topside+"px"
        topside += 10
    }

    if (e.key == "ArrowUp") {
        keycar.style.top = topside+"px"
        topside -= 10

    }

    
    if (e.key == "ArrowLeft") {
        keycar.style.left = leftside+"px"
        leftside -= 10 
    }

    if (e.key == "ArrowRight") {
        keycar.style.left = leftside+"px"
        leftside += 10 
    }
}


// var sectop = 10
// var secleft = 10
// var secondcar = document.getElementById('secondcar')

// onkeydown = (e) => {

//     if (e.key == "83") {
//         secondcar.style.top = sectop+"px"
//         sectop += 10
//     }

//     if (e.key == '87') {
//         secondcar.style.top = sectop+"px"
//         sectop -= 10

//     }

    
//     if (e.key == "65") {
//         secondcar.style.left = secleft+"px"
//         secleft  -= 10 
//     }

//     if (e.key == "68") {
//         secondcar.style.left = secleft +"px"
//         secleft  += 10 
//     }
// }
