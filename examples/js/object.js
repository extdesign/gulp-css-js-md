

window.EdApp = function() {
  this.parameters = {}
  this.parameters.name = "test"
  this.parameters.description = "test babel objects"
  
  this.id = null
  this.value = null
  
  this.init()
    .then(r => r)
}

window.EdApp.prototype = {
  init: async function() {
    this.id = 10
    this.setValue("ok")
  },
  
  setValue:  v => {
    this.value = v
  }
}