/* Overview

Goto this reference for controls:
https://wiki.nsbasic.com/Category:Bootstrap

RADIO BUTTONS
   Checkboxes about the same but can pick more than one.
   
Important Properties & event
   onchange
   > index:   .value (starts at 0)
   > text:      $("input[name=rdoIceCream]:checked").prop("value")
                .prop - special: gets the text next to the
                button user chose. Not a control Property - it is an 
                HTML property. 

   Explanation (read on your own if interested)
   > $ means this is jQuery code
   > input - an array of all the choices of the control.
   > name - name of radio button control (eg. rdoIceCream)
   > checked - checked property is 'true'
   > .prop("value") is the HTML property (not appstudio Property)
      named 'value': returns the text by the radio button.

*****************
1. run radioButtonsDemo
2. students do radioButtonsActivity 
----------------------------------------------------------------------------------------

DROPDOWN - shows a list of links; user can pick one or 
   multiple (hold Cmd/Ctrl key).
   This is a two click control. 
   
Important properties and event
   onclick (2 clicks for 1 choice)
   > items:                    items to choose (design time)
   > index:                    no index
   > text:                       's' parameter and .selection
   > top of dropdown:   .value
   > .addItem("ddd"):     add item runtime

*****************
1. run dropdownDemo
2. students do dropdownActivity 
----------------------------------------------------------------------------------------

SELECT - like dropdown but 
        > shows the list 
        > allows multiple choices (returns array of chosen)
        > supports hidden values (eg price)

Important properties and events
   .onchange
      > item:               items to choose (design time)
      > index:             .item(s)
      > text:                .text 
      > hidden value:  .value(s)
      > .multiselect:     true if allowed (design time) 
*****************
1. run selectDemo
2. students do selectActivity 
----------------------------------------------------------------------------------------

HAMBURGER - menu of links; works like select 
   This is a two click control. 
   
Important properties and event
  onclick
   > item:                .item (design time) 
   > text:                 .selection 
   > position:           .style (design time) 
                                 eg. to position in top left: 
                                        float:left; align:left;
***********************
1. run hamburgerDemo
2. students do hamburgerActivity 
----------------------------------------------------------------------------------------

 LISTGROUP - works just like dropdown except the 
   list control returns the INDEX of the chosen item(s) 
   to the event handler.  
   
   This is a 2 click control. 

Important properties and event
   onclick
   > items:                .items (runtime)
   > text:                   .textContent using jquery and control 'lstNames':    
                                    NSB.$("lstNames_" + choice).textContent
                                    OR with multiple chosen: 
                                    NSB.$("lstNames[0]_" + choice).textContent
                
**************************

Other interesting controls:
   > input control - try using property 'input type' - set to 'date'.
          This puts a calender dropdown on the input box.
   > nav control - this has different ways to have tabs - cool.
*/

// buttons for the other forms in this project

btnRadioButtonsDemo.onclick=function(){
    ChangeForm(radioButtonsDemo)
}

btnRadioButtonsActivity.onclick=function(){
    ChangeForm(radioButtonsActivity)
}

btnDropdownDemo.onclick=function(){
    ChangeForm(dropdownDemo)
}

btnDropdownActivity.onclick=function(){
    ChangeForm(dropdownActivity)
}

btnListDemo.onclick=function(){
    ChangeForm(listGroupDemo)
}

btnSelectDemo.onclick=function(){
    ChangeForm(selectDemo)
}

btnSelectActivity.onclick=function(){
    ChangeForm(selectActivity)
}

btnHamburgerDemo.onclick=function(){
    ChangeForm(hamburgerDemo)
}

btnHamburgerActivity.onclick=function(){
    ChangeForm(hamburgerActivity)
}
