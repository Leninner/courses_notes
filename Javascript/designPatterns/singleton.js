const mySingleton = ((() => {
  let instance

  function init() {
    const object = new Object('I am the instance')

    return object
  }

  return {
    instanciate: () => {
      if (!instance) {
        instance = init()
      }

      return instance
    }
  }
}))()

let instanceOne = {}
let instanceTwo = {}

console.log(`Is instanceOne the same as instanceTwo? ${instanceOne === instanceTwo}`)

instanceOne = mySingleton.instanciate()
instanceTwo = mySingleton.instanciate()

console.log(`Is instanceOne the same as instanceTwo? ${instanceOne === instanceTwo}`)