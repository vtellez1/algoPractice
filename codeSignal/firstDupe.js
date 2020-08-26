function firstDuplicate(a) {
    let storage = {};
    
    for(var i = 0; i < a.length; i++){
        if(a[i] in storage){
            return a[i]
        } else {
            storage[a[i]] = 1
        } 
    }
    return -1;
}

//Solved in about 7 mins