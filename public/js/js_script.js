
function MenuItem(name, kcal, gl, lac, veg) {
    this.burgerName = function() {
      return name;
    };
    this.kcal = function() {
      return kcal;
    };
    this.gluten = gl;
    this.lactose = lac;
    this.vegetarian = veg;
}

var menu = new MenuItem('The German', '1200kCal', 'contains gluten', 'contains lactose' , 'is not vegetarian');
var menu2 = new MenuItem('The Danish', '870kCal', 'contains gluten', 'contains lactose' , 'is vegetarian');

console.log( menu.burgerName() );
console.log( menu.kcal() );
console.log(menu2.burgerName());
console.log(menu2.kcal());

//document.getElementById("whatever").innerHTML = "hallo ";
