import {navbar} from "./component/navbar.js"

let navbar2 = document.getElementById("nav");
navbar2.innerHTML = navbar();
// let recipeByName = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

let query = document.getElementById("showData");

query.oninput = function(){
    debouncing(getData,1000);
}

let getData = async ()=>{
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.value}`)
    let data = await res.json();
    appendData(data.meals);
}

let appendData = (data)=>{
    let dabba = document.getElementById("main");
    dabba.innerHTML = null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.strMealThumb;
        let title = document.createElement("p");
        title.innerText = el.strMeal;
        div.append(img,title)
        dabba.append(div);
    })
}
let id;
let debouncing = (func,delay)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    },delay)
}




