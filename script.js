    let kpop = ["BIGBANG", "SHINee", "SEVENTEEN", "2NE1", "Hyuna"];

    console.log(kpop);

     kpop.unshift("Super Junior")
    console.log(kpop);

    kpop.pop();
    console.log(kpop);

    kpop.push("Block B", "Girl's Generation");
    console.log(kpop);

    kpop.shift();
    console.log(kpop);

    let numbers = [7, 222, 103, 202, 483, 20, 4];

    numbers.sort(function(a, b){
     return a - b
    })
    console.log(numbers);