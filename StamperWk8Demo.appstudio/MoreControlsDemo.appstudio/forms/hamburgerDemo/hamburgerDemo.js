/*
Scenario: Make hamburger menu that goes to RadioButtons and Select.

Important properties and event
  onclick
   > item:                .item (design time) 
   > text:                 .selection 
   > position:           .style (design time) 
                                 eg. to position in top left: 
                                        float:left; align:left;
*/

hamburgerDemo.onshow=function(){
  hmbrMenu.hidden = false
}

hmbrMenu.onclick=function(s){ // when just click the control. 's' is
                              // the object returned
    if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Hide Hamb See Btn":
            // hide the hamburger menu and show signin button
                hmbrMenu.hide()
                btnSignIn.show()
                break
            case "Overview":
                // Go to the Overview form
                ChangeForm(Overview)
                break
       }  //switch
   } //else
}


btnSignIn.onclick=function(){
  // if disappears (browser issue), force to reshow
  hmbrMenu.show()
}
