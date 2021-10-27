/*
2 click control 
Important properties and event
   onclick
   > items:                .items (runtime)
   > text:                   .textContent using jquery and control 'lstNames':    
                                    NSB.$("lstNames_" + choice).textContent
                                    OR with multiple chosen: 
                                    NSB.$("lstNames[0]_" + choice).textContent
*/

lstNames.onclick=function(s){  // 's' is index of chosen
  if (typeof(s) == "object") {// user clicked the control
    return
  } else {
      let textChoice = NSB.$("lstNames_" + s).textContent 
      // item they chose (index = 0) and text 
      // (textcontent) at that location

      console.log(`The item number of the choice is ${s} 
      and the text is ${textChoice}`)
      
      // change Vito (location 0) to Esmerelda
      let newPlace = 0   //index where you want replacement to go
      NSB.$("lstNames_" + newPlace).textContent = "Esmerelda"
      
      // add new item to end of list. 
      lstNames.addItem("Garbanzo","active","default")
      //              (item to add,active/disabled,appearance)

 }
}
