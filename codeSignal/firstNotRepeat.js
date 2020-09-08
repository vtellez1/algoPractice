function firstNotRepeatingCharacter(s) {
    let storage = {};
    
    for(let i = 0; i < s.length; i++){
        s[i] in storage ? storage[s[i]] = storage[s[i]] + 1 : storage[s[i]] = 1
    }

    for (let property in storage){
        if (storage[property] === 1){
            return  property
        } 
    }
    return '_'
}