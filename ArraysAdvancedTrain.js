function train(input){
let wagons = input.shift().split(` `).map(Number);
let capacity = input.shift();
for (let i=0; i<input.length; i++){
    //let addPassengers=command.split(` `)
    let command = input[i];
    let addPassengers=command.split(` `)
    if(command.includes(`Add`)){
        addPassengers=Number(addPassengers[1])
        wagons.push(addPassengers)
    }else{
        addPassengers = Number(addPassengers[0])
      for(let j=0; j<wagons.length; j++){
        if((wagons[j] + addPassengers)<=capacity){
            wagons[j]+=addPassengers;
                break;
            }
        }
    }  
}
console.log(wagons.join(` `));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);