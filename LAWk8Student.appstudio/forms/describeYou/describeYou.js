
rdoTraits.onchange=function(s){
  lblTraitDisplay.value = `I would agree that you are a ${$("input[name=rdoTraits]:checked").prop("value")} person too!`
}

btnExercisesForm.onclick=function(){
  ChangeForm(favExercises)
}
