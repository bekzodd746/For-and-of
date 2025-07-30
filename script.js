let data = [`olma`,`anor`,`uzum`,`banan`]

console.log(data);

let bir = []
let ikki = []

for( item of data){
    if(item.includes(`m`)){
        bir.push(item)
    }else{
        ikki.push(item)
    }
    
}

console.log(bir);
console.log(ikki);

 