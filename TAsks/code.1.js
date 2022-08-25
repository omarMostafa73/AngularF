// problem 1
function sumbObjectValues(object){
    arr1 = Object.values(object)
    
    var sum = 0;

    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            sum+= parseInt(object[property])

        }
        console.log(sum)
    }
}


let a = {
    a : 10,
    b : 20
}
sumbObjectValues(a);





