//Business Logic
function PizzaOrder (size, dough, sauce, topping) {
  this.pizzaSize = size;
  this.pizzaDough = dough;
  this.pizzaSauce = sauce;
  this.pizzaTopping = topping;
  this.pizzaCost = 0;
}

PizzaOrder.prototype.CalculatePizzaCost = function() {
  if(this.pizzaSize === 's')
  {
    this.pizzaCost += 3.25
  }
  else if(this.pizzaSize === 'm')
  {
    this.pizzaCost += 4.25
  }
  else if(this.pizzaSize === 'l')
  {
    this.pizzaCost += 6.25
  }
  else if(this.pizzaSize === 'xl')
  {
    this.pizzaCost += 8.25
  }
  else if(this.pizzaSize === 'xl')
  {
    this.pizzaCost += 8.25
  }
  if(this.pizzaDough === 'dough1')
  {
    this.pizzaCost += 1
  }
  else if(this.pizzaDough === 'dough2')
  {
    this.pizzaCost += 2
  }
  else if(this.pizzaDough === 'dough3')
  {
    this.pizzaCost += 3
  }
  if(this.pizzaSauce === "sauce1")
  {
    this.pizzaCost += 0.50
  }
  else if(this.pizzaSauce === "sauce2")
  {
    this.pizzaCost += 0.75
  }
  for(var i=0;i<this.pizzaTopping.length;i++)
  {
    if(this.pizzaTopping[i] === "cheese1")
    {
      this.pizzaCost += 1.19
    }
    else if(this.pizzaTopping[i] === "cheese2")
    {
      this.pizzaCost += 1.05
    }
    else if(this.pizzaTopping[i] === "cheese3")
    {
      this.pizzaCost += 1.99
    }
    else if(this.pizzaTopping[i] === "veg1")
    {
      this.pizzaCost += 2.25
    }
    else if(this.pizzaTopping[i] === "veg2")
    {
      this.pizzaCost += 1.14
    }
    else if(this.pizzaTopping[i] === "veg3")
    {
      this.pizzaCost += 1.45
    }
    else if(this.pizzaTopping[i] === "meat1")
    {
      this.pizzaCost += 2.15
    }
    else if(this.pizzaTopping[i] === "meat2")
    {
      this.pizzaCost += 2.75
    }
    else if(this.pizzaTopping[i] === "herb1")
    {
      this.pizzaCost += 0.30
    }
    else if(this.pizzaTopping[i] === "herb2")
    {
      this.pizzaCost += 0.10
    }
  }
  return this.pizzaCost.toFixed(2);
}

//User Interface Logic
$(document).ready(function(){
    $(".thumb").hover(function(){
      $(".main_image img").attr('src',$(this).children('img').attr('src'));
    });
  $("#form-one").submit(function(event){

    var pizzaToppingArray = [];
    var pizzaSizeInput = $("input:radio[name=pizza-size]:checked").val();
    var pizzaDoughInput = $("input:radio[name=pizza-dough]:checked").val();
    var pizzaSauceInput = $("input:radio[name=pizza-sauce]:checked").val();
    $("input:checkbox[name=topping]:checked").each(function(){
      pizzaToppingArray.push($(this).val());
    });

    var newPizzaOrder = new PizzaOrder(pizzaSizeInput, pizzaDoughInput, pizzaSauceInput, pizzaToppingArray);
    var pizzaCost = newPizzaOrder.CalculatePizzaCost();

    $(".total-cost").text(pizzaCost);
    $("#result, #place-order").show();

    $("#place-order").click(function(){
      $("#form-one, #gallery").hide();
      $("#delivery").show();
      $("#get-receipt").click(function(event){
        var nameInput = $("#name").val();
        var phoneInput = $("#phone").val();
        $("#r-date").text(new Date());
        $("#r-number").text(Math.floor(Math.random() * 200));
        $("#r-name").text(nameInput);
        $("#r-phone").text(phoneInput);
        $(".receipt").show();

        event.preventDefault();
      });
    });
    event.preventDefault();
  });
});
