//Business Logic
function PizzaOrder (size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
  this.pizzaCost = 0;
}

PizzaOrder.prototype.CalculatePizzaCost = function() {
  if(this.pizzaSize === 's')
  {
    this.pizzaCost += 3.25
  }
  return this.pizzaCost;
}



//User Interface Logic
$(document).ready(function(){
  $("#form-one").submit(function(event){

    var pizzaToppingArray = [];
    var pizzaSizeInput = $("input:radio[name=pizza-size]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppingArray.push($(this).val());
    });

    console.log(pizzaSizeInput, pizzaToppingArray);

      var newPizzaOrder = new PizzaOrder(pizzaSizeInput, pizzaToppingArray);
      console.log(newPizzaOrder);
      console.log("$"+newPizzaOrder.CalculatePizzaCost());

    event.preventDefault();
  });
});
