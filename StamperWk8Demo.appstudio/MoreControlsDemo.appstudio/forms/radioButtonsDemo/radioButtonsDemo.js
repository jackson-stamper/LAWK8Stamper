/*
Important Properties & event
   onchange
   > index:   .value (starts at 0)
   > text:      $("input[name=rdoIceCream]:checked").prop("value")
                .prop - special: gets the text next to the
                button user chose. Not a control Property - it is an 
                HTML property. 
*/

rdoIceCream.onchange=function(){
   console.log(`The value property of the control is ${rdoIceCream.value}
     and the text of the choice is ${$("input[name=rdoIceCream]:checked").prop("value")}`)

   if (rdoIceCream.value == 0)   // picked the first choice
      console.log(`Raspberry is my favorite also!`)
   else
      console.log(`You didn't pick my favorite.`)
}
