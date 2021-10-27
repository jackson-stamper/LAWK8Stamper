/*
Important properties and event
   onclick (2 clicks for 1 choice)
   > items:                    items to choose (design time)
   > index:                    no index
   > text:                       's' parameter and .selection
   > top of dropdown:   .value
   > .addItem("ddd"):     add item runtime
*/

let flavors = ["Acai Berry","Almond","Amaretto","Anise","Apple","Apricot","Banana",
"Bacon","Bavarian Cream","Berry Cola","Birch Beer","Black Licorice","Black Cherry",
"Black Currant","Black Walnut","Blackberry","Blue Raspberry",
"Blueberry","Bourbon","Bubble Gum","Butter","Butter Almond",
"Butter Milk","Butter Pecan","Butter Rum","Butter Toffee","Butterscotch"]

// populate the flavors dropdown at runtime when form loads/is shown
// using the flavors array
dropdownDemo.onshow=function(){
    // always clear before populating
    drpBestFlavor.clear()
    // put array of flavors in the dropdown (called populating it)
    for (i = 0; i < flavors.length; i++)
        drpBestFlavor.addItem(flavors[i])
}

drpBestMajor.onclick=function(s){
// see what user clicked on in the drpBestMajor dropdown
// Notice I added 's' parameter to the function because the
// event returns the text of the chosen item.

// this control loaded at design time

  if (typeof(s) == "object"){  // means the control was clicked
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    drpBestMajor.value = s     // make dropdown show choice the user made
    console.log(`The user chose ${s} and .selection is ${drpBestMajor.selection}.`)
  }
}


drpBestFlavor.onclick=function(s){
    if (typeof(s) == "object"){// means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpBestFlavor.value = s   // make dropdown show choice user made
    console.log(`The user chose ${s} and .selection is ${drpBestFlavor.selection}.`)
  }
}

btnResetDropdowns.onclick=function(){
  drpBestMajor.value = "Best Major"
  drpBestFlavor.value = "Best Flavor"
}
