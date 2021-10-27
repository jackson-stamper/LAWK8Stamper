/*
 Scenario: Let the user select their top hobby.
    Output the three chosen hobbies, one per line, in the console. 
    Hint: will need a button and a loop to cycle through array with 3 items in it. 

Important properties and events
   .onchange
      > item:               items to choose (design time)
      > index:             .item(s)
      > text:                .text 
      > hidden value:  .value(s)
      > .multiselect:     true if allowed (design time) 
*/
let hobbies = ["rugby","golf","hiking","riding horses","swimming"]



selHobby.onchange=function(){
  console.log(`your choice was ${selHobby.text}`)
}

selectActivity.onshow=function(){
  selHobby.clear()
  for (i=0; i<hobbies.length; i++)
  selHobby.addItem(hobbies[i])
}
