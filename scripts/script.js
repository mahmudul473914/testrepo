// DOM Defining

let title = document.getElementById("title");
let author = document.getElementById("author");
let year = document.getElementById("year");
let btn = document.getElementById("btn");
let table = document.getElementById("table1");
let fulltable = document.getElementsByClassName("table");


// defining event listener

btn.addEventListener('click',function(e){
    e.preventDefault();
    
    year.value=Number(year.value);
    if(title.value=="" || author.value=="" || year.value==""){
        alert("Fill All Required Element");
        year.value=" ";
    }else if(isNaN(year.value) || year.value< 1){
        alert("Enter a valid Year");
        year.value=" ";
    }else{
        let row = document.createElement("tr");
        
        let newSr = document.createElement("td");
        newSr.innerHTML = table.rows.length+1;
        row.appendChild(newSr);

        let newtitle = document.createElement("td");
        newtitle.innerHTML = title.value;
        row.appendChild(newtitle);

        let newauthor = document.createElement("td");
        newauthor.innerHTML = author.value;
        row.appendChild(newauthor);

        let newyear = document.createElement("td");
        newyear.innerHTML = year.value;
        row.appendChild(newyear);

        table.appendChild(row);

        title.value="";
        author.value="";
        year.value="";

    }
})