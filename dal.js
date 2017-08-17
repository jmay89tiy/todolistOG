function getCompleteItems(){
  return todoArr.filter(function(item,idx, arr){
    return item.completed
  })
}
// this array above only shows array of completed items that are set as "true"

function getIncompleteItems(){
  return.todoArr.filter(function(item,idx,arr){
    return !item.completed
  })
}
// this array shows above only shows array of incomplete items that are set as "False"


//if i wanted to try and turn things into an array see above codes.
