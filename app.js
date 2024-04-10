let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


let arr = [];
btn.addEventListener("click",function(event){
    console.dir(event.target);
    let list = document.createElement("li"); 
    let r_btn = document.createElement("button");
    r_btn.innerText = "delete";
    r_btn.classList.add("delete");
    if(input.value == ""){
        console.log("Please enter a valid task");
    }
    else{
        console.log(arr.indexOf(input.value));
        if(-1 == arr.indexOf(input.value)){
            arr.push(input.value);
            list.innerText = input.value;
            ul.append(list);
            list.append(r_btn);
            console.log(arr);
            console.log(input.value);
            input.value = "";
        }
    }
});

// let r_btns = document.querySelectorAll(".delete");
//     for(btn of r_btns){
//         btn.addEventListener("click",function(event){
//             for(let i=0; i<arr.length; i++){
//                 if(this.parentElement.innerText == arr[i]){
//                     arr.splice(i,1);
//                 }
//             }
//             this.parentElement.innerText;
//             this.parentElement.remove();
//         });
//     }
ul.addEventListener("click",function(event){
    console.log("click is performed on ul");
    for(let i=0; i<arr.length; i++){
        console.dir(event.target.parentElement);
        if(event.target.parentElement.innerText == arr[i]){
            arr.splice(i,1);
        }
    }
    if(event.target.localName == "button"){
        event.target.parentElement.remove();  
    }
});