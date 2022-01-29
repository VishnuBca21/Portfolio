let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle('light_theme');
    var currentIcon = document.querySelector("li span i").getAttribute("class");
    if (currentIcon == 'fas fa-moon'){
        document.querySelector("li span i").setAttribute("class","fas fa-sun");
    }
    else{
        document.querySelector("li span i").setAttribute("class","fas fa-moon");
    }
}

let html = document.getElementById("htmlNumber");
let counter = 0;
setInterval(()=>{
    if (counter === 92){
        clearInterval
    }
    else{
        counter += 1;
        html.innerHTML = counter + '%';
    }
})
let css = document.getElementById("cssNumber");
let counter1 = 0;
setInterval(()=>{
    if (counter1 === 95){
        clearInterval
    }
    else{
        counter1 += 1;
        css.innerHTML = counter1 + '%';
    }
})
let js = document.getElementById("jsNumber");
let counter2 = 0;
setInterval(()=>{
    if (counter2 === 90){
        clearInterval
    }
    else{
        counter2 += 1;
        js.innerHTML = counter2 + '%';
    }
})
let py = document.getElementById("pyNumber");
let counter3 = 0;
setInterval(()=>{
    if (counter3 === 85){
        clearInterval
    }
    else{
        counter3 += 1;
        py.innerHTML = counter3 + '%';
    }
})