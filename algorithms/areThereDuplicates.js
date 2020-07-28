// frequency counter method
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }

// single line solution

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
