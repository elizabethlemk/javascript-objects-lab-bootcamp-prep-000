var recipes = new Object({
  recipes : 'object'
})

var obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value ){
  obj.prop2 = 2
  return obj
}
