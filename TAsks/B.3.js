//bonus 3
var a = {name:'Omar', age : 27},
    b = {name:'Mostafa',age : 20},
    c = {name:'Nour',   age : 23},
    d = {name:'Asser',  age : 29},
    e = {name:'Sameh', age : 24},
    f = {name:'Hesham', age : 21}
var arrnam = [a,b,c,d,e,f]

function search(string){
    for (let i = 0; i < arrnam.length; i++) {
        if(arrnam[i].name === string){
            console.log(`${string} found at index ${i}`)
        }
    
    }
}   
search('Nour')