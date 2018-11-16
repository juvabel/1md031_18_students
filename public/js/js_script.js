
/**
var german = document.getElementById("germanBurger");
var danish = document.getElementById("danishBurger");
var italian = document.getElementById("italianBurger");
var american = document.getElementById("americanBurger");
var australian = document.getElementById("australianBurger");

var burgers = [german, danish, italian, american, australian];

var germanName = document.getElementById("germanName");
var danishName = document.getElementById("danishName");
var italianName = document.getElementById("italianName");
var americanName = document.getElementById("americanName");
var australianName = document.getElementById("australianName");

var burgerNames = [germanName, danishName, italianName, americanName, australianName];

for (i in burgerMenu)
{
var img = document.createElement("img");
img.src = burgerMenu[i].img;

var src = burgers[i];
src.appendChild(img);

var listItemIng1 = document.createElement("li");
var listItemIng2 = document.createElement("li");
var listItemIng3 = document.createElement("li");
var listItemIng4 = document.createElement("li");
var listItemIng5 = document.createElement("li");
var listItemIng6 = document.createElement("li");
var listIng1 = document.createTextNode(burgerMenu[i].ing1);
var listIng2 = document.createTextNode(burgerMenu[i].ing2);
var listIng3 = document.createTextNode(burgerMenu[i].ing3);
var listIng4 = document.createTextNode(burgerMenu[i].ing4);
var listIng5 = document.createTextNode(burgerMenu[i].ing5);
var listIng6 = document.createTextNode(burgerMenu[i].ing6);

if (burgerMenu[i].veg == 'true') {
burgerNames[i].innerHTML = burgerMenu[i].name + "  --- vegetarian";
}
else {
burgerNames[i].innerHTML = burgerMenu[i].name;
}


for (k in burgers) {
listItemIng1.appendChild(listIng1);
listItemIng2.appendChild(listIng2);
listItemIng3.appendChild(listIng3);
listItemIng4.appendChild(listIng4);
listItemIng5.appendChild(listIng5);
listItemIng6.appendChild(listIng6);
burgers[i].appendChild(listItemIng1);
burgers[i].appendChild(listItemIng2);
burgers[i].appendChild(listItemIng3);
burgers[i].appendChild(listItemIng4);
burgers[i].appendChild(listItemIng5);
burgers[i].appendChild(listItemIng6);
}

}
**/


function returnOrder() {
  // textfields
  var name = document.getElementById("name").value;

  // var street = document.getElementById("street").value;
  // var housenumber = document.getElementById("housenumber").value;
  // var postalcode = document.getElementById("postalcode").value;
  // var city = document.getElementById("city").value;

  var email = document.getElementById("email").value;

  // radio button: gender
  var gender = document.querySelector('input[name="gender"]:checked').value;

  // checkboxes: allergies
  if (document.getElementsByName("allergic")[0].checked == true && document.getElementsByName("allergic")[1].checked == true) {
    var allergies = "Gluten-free, Lactose-free"; }
    else if (document.getElementsByName("allergic")[1].checked == true) {
      allergies = "Lactose-free";
    }
    else if (document.getElementsByName("allergic")[0].checked == true ) {
      allergies = "Gluten-free";
    }

    // select field: payment

      var payment = document.getElementById("payment").value;


    //checkbox: burger selection
    // not working. Why??
    // var burgerSelection = [];
    // for (var j=0; j<6; j++){
    //   if(document.getElementsByName("burgertype")[j].checked == true){
    //     burgerSelection.push(document.getElementsByName("burgertype")[j].value);
    //   }
    // }
    var burgerSelection = [];
    if(document.getElementsByName("burgertype")[0].checked == true){
      burgerSelection.push(document.getElementsByName("burgertype")[0].value);
    }
    if(document.getElementsByName("burgertype")[1].checked == true){
      burgerSelection.push(document.getElementsByName("burgertype")[1].value);
    }
    if(document.getElementsByName("burgertype")[2].checked == true){
      burgerSelection.push(document.getElementsByName("burgertype")[2].value);
    }
    if(document.getElementsByName("burgertype")[3].checked == true){
      burgerSelection.push(document.getElementsByName("burgertype")[3].value);
    }
    if(document.getElementsByName("burgertype")[4].checked == true){
      burgerSelection.push(document.getElementsByName("burgertype")[4].value);
    }
    console.log(burgerSelection);


    // var allBurgers = document.getElementsByName("burgertype");
    // var burgerSelection = [];
    // for (var i=0; i<6; i++){
    // if (allBurgers[i].checked == true) {
    //   burgerSelection += allBurgers[i].value;
    //   }
    // }

    var order = [];
    order.push(name);
    // order.push(street);
    // order.push(housenumber);
    // order.push(postalcode);
    // order.push(city);
    order.push(email);
    order.push(gender);
    order.push(allergies);
    order.push(payment);
    order.push(burgerSelection);

    return order;
  }

  // click button
  // var sendOrder = document.getElementById("order");
  //
  // sendOrder.onclick = function () {
  //   console.log( "Button clicked." );
  //   console.log(document.getElementById("name").value);
  //   console.log(document.querySelector('input[name="gender"]:checked').value);
  //   console.log(document.getElementById("payment").value);
  // }
