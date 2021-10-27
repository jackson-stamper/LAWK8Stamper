/*
Scenario: create a radiobutton control that asks the
      user if s/he wants to go to the radioButtonDemo
      or Overview Send form. Send them to their chosen form.
      Hint: use switch and ChangeForm()'s.
      
Important Properties & event
   onchange
   > index:   .value (starts at 0)
   > text:      $("input[name=rdoIceCream]:checked").prop("value")
                .prop - special: gets the text next to the
                button user chose. Not a control Property - it is an 
                HTML property. 
*/
