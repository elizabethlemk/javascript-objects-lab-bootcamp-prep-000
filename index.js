var recipes = new Object({
  recipes : 'object'
})

function destructivelyUpdateObjectWithKeyAndValue(object, key, value ){
  var obj = { prop: 1 }
  obj.prop2 = 2
  return obj
}
