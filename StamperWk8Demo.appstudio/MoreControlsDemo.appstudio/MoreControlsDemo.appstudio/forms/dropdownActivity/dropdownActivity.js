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
