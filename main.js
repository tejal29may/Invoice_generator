


// add a dyanamic date in date portion
let cdate=document.getElementById("cDate")

let date = new Date();
	let day1 = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

  let currentDate =
		day1 +
		" /" +
		month + 
		" /" +
		year ; 

cdate.innerText=currentDate

// add detail in card dynamically
// let details=document.getElementById("added")
// let itemCounter=0;
// let addDetails =()=>{
//     itemCounter++;
    
// console.log("updated");
// let third=document.createElement('div')
// third.classList.add("third")
// third.style.marginBottom="25px"


// third.innerHTML=`

// <div class="third_left">

// <input type="text" placeholder="Item Name">
// <input type="text" placeholder="Item Description">

// </div>
// <div class="third_right">
// <div class="qty">
    
//     <input type="number">
// </div>
// <div class="price">
    
//     <input type="number">
// </div>
// <div class="action">

//     <img id="trash" src="./images/trash.png" alt="" onclick="removeItem(${itemCounter})">
// </div>

// </div>




// `
// details.append(third)

// updateAmount();
// }


// document.getElementById("add-items").addEventListener("click", (e)=> {
//     e.preventDefault();
//     addDetails();
    
// });



//.........

document.getElementById("add-row").addEventListener("click", (e)=> {
    e.preventDefault();
    // addNewRow();
});
 

// demo

const tBody = document.getElementById("table-body");

let addNewRow =()=> {
    const row = document.createElement("tr");
    row.className = "single-row";
    row.innerHTML = `<td><input type="text" placeholder="Product name" class="product" id="product"></td>
                    <td><input type="number" placeholder="0" name="unit" class="unit" id="unit" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="price" class="price" id="price" onkeyup="getInput()"></td>
                    <td><input type="number" placeholder="0" name="amount" class="amount" id="amount" disabled></td>
                    <td style="text-align: right;" id="imgg"><span id="img"><img id="image"
                    src="./images/trash.png" alt="delete_outline" action="delete"></span></td>
                    `
    // tBody.insertBefore(row, tBody.lastElementChild.previousSibling);
    tBody.append(row)


    let product=document.querySelector(".product")
    let quantity=document.querySelector(".unit")
    let prices=document.querySelector(".price")
    let amt=document.querySelector(".amount")

    //create a array of obj
    let allDetails=[]
    allDetails.push({
        product:"",
        price:"",
        Quantity:"",
        amount:""
    });

    allDetails.map((value, index) => {
        product.value=item.name;
        product.addEventListener('input',()=>{
             item.name=product.value;
        })

        quantity.value=item.Quantity
        quantity.addEventListener('input',()=>{

            item.Quantity=quantity.value
        })

        prices.value=item.price;
        prices.addEventListener('input',()=>{
            item.price=prices.value;
        })

        amt.value=item.amount;
        amt.addEventListener('input',()=>{
            item.amount=amt.value;
        })

        console.log(allDetails);


    })

    

    



    

    

}

// array.push(addNewRow())
// console.log(array.length);


//getting the
getInput =()=> {
    var rows = document.querySelectorAll("tr.single-row");
    rows.forEach((currentRow) => {
        var unit = currentRow.querySelector("#unit").value;
        var price = currentRow.querySelector("#price").value;

        amount = unit * price;
        currentRow.querySelector("#amount").value = amount;
        overallSum();

    })
};


overallSum =()=> {
    var arr = document.getElementsByName("amount");
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].value) {
            total += +arr[i].value;
        }
        document.getElementById("total").value = total;
       
    }
}

//Delete row from the table
tBody.addEventListener("click", (e)=>{
    let el = e.target;
    const deleteROW = e.target.getAttribute("action");
    if(deleteROW == "delete") {
        delRow(el);
        overallSum();
    }
})

//Target row and remove from DOM;
delRow =(el)=> {
    el.parentNode.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode.parentNode);
}


// // print receipt

const btnPrint = document.querySelector(".print");
btnPrint.addEventListener("click", () => {
    // let model=document.getElementById("model")
console.log(window);
    window.print();
});


// data to be added in model
var price;
var quantity;
var amount;
var prod_name;


function calculate() {
//   ids = document.getElementById("ids").value;
  prod_name = document.getElementById("product").value;
  price = document.getElementById("price").value;
  quantity = document.getElementById("unit").value;
  amount = price * quantity;
  document.getElementById("amount").value = amount;
  document.getElementById("product").value=prod_name;
  document.getElementById("price").value=price
  document.getElementById("unit").value

}


function addData() {
    let tableBody=document.getElementById("table-body");
    console.log(tableBody.children);
    for (let i = 0; i < tableBody.length; i++) {
        // const element = array[i];
        
        
    }
//   price=document.getElementById("price").value
//   quantity=document.getElementById("unit").value
//   document.getElementById('newtr').innerHTML += '<tr><td>'  + prod_name + '</td><td>' + price + '</td> <td>' + quantity + '</td><td>' + amount + '</td></tr>'

 
//   document.getElementById("total-amount").innerHTML = price * quantity - tax;
//   let total_answer=document.getElementById("total").value

   document.getElementsByName("subtotal-amount").innerText=total_answer;
  
  
}
// const divi=document.querySelector(".single-row")
// console.log(divi.children);
// array.push(divi.children)
// console.log(array);
// array.forEach((value) => {

// // value.price
// console.log(value.price);
// })






// addData =()=> {
//     var rows = document.getElementById("newtr");
//     rows.forEach((currentRow) => {
//         var unit = currentRow.querySelector("#unit").value;
//         var price = currentRow.querySelector("#price").value;
//         prod_name = document.querySelector("#product").value;
//         document.getElementById('newtr').innerHTML += '<tr><td>'  + prod_name + '</td><td>' + price + '</td> <td>' + unit + '</td><td>' + amount + '</td></tr>'

//         // amount = unit * price;
//         // currentRow.querySelector("#amount").value = amount;
//         // overallSum();

//     })
// };



function share(){
    let modal=document.getElementById("myModal")
    
    window.open("whatsapp://send?text="+"model"+modal.innerHTML ,"twitter window","width=600","height=300");

}


// let itemAdded=document.getElementById("added")

// let data4=document.getElementById("dataAdded")
// console.log(data4);

// let amt=document.getElementById("total").value
// document.getElementById("amount_total").innerText=amt




