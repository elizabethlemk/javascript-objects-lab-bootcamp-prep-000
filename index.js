var recipes = new Object({
  recipes : 'object'
})

function updateObjectWithKeyAndValue(obj, key, value ){
  obj.prop2 = 2
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
}