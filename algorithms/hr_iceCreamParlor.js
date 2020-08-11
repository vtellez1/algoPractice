function whatFlavors(cost, money) {
    // We have loop through cost array and see which 2 add up to equal money
    // Brute force solution - two inner loops
    // for(var i = 0; i < cost.length; i++){
    //     for(var j = i + 1 ; j < cost.length; j++){
    //         if ( cost[i] + cost[j] === money ){
    //             // We have to return index of the 2 costs starting from index 1
    //             return console.log(i+1, j+1);
    //         }
    //     }
    // }

    // Better solution - hash table
    let storage = {};

    for(var i = 0; i < cost.length; i++){
        storage[cost[i]] ? 
        storage[cost[i]].push(i + 1) : 
        storage[cost[i]] = [i + 1]
    }

    for(var j = 0; j < cost.length; j++){
        let flavor = cost[j];
        if (storage[money - flavor]) {
            if( flavor === money - flavor ){
                if(storage[flavor].length > 1){
                  console.log(storage[flavor][0], storage[flavor][1])
                    return  
                }   
            } else {
            console.log(storage[flavor][0], storage[money - flavor][0])
            return
            } 
        }
    }  
}