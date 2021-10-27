/*
Scenario: Create a form with a dropdown of favorite animals (use array below).
          Populate the dropdown at runtime (remember to clear dropbox first).
          When user clicks on an animal, take them to the RadioButtonsDemo form. 
          Otherwise do nothing.

Important properties and event
   onclick (2 clicks for 1 choice)
   > items:                    items to choose (design time)
   > index:                    no index
   > text:                       's' parameter and .selection
   > top of dropdown:   .value
   > .addItem("ddd"):     add item runtime
*/

let pets = ["dog","cat","horse","hamster","mouse","guinea pig"]

drpdwnAnimals.onshow=function(){
    // always clear before populating
    drpdwnAnimals.clear()
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < pets.length; i++)
        drpdwnAnimals.addItem(pets[i])
}

drpdwnAnimals.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    ChangeForm(radioButtonsDemo)     // make dropdown show choice the user made
    //console.log(`The user chose ${s} and .selection is ${drpdwnAnimals.selection}.`)
  }  
}


