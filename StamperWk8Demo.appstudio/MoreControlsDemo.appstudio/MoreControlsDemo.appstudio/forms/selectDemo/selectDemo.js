/*
Important properties and events
   .onchange
      > item:               items to choose (design time)
      > index:             .item(s)
      > text:                .text 
      > hidden value:  .value(s)
      > .multiselect:     true if allowed (design time) 

Do Multiple together
Do Single as an Activity
*/


// MULTIPLE list choices; uses button onclick
// set multiple property = true


btnDone.onclick=function(){
  // returns array of the choices' text

  let message = "Your favorite sandwiches are: "
  for (i = 0; i < selSandwiches.text.length; i++)
     message = message + selSandwiches.text[i] + ", "

  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the
  //     string minus 2 characters
  message = message.slice(0, -2)
  console.log(message)
}

/*
// SINGLE: one list choice allowed; uses onchange
// Comment multiple code above

*/
