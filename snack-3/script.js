var array = [10 , 22 , 97 , 48 , 71 , 123]

function sublist(array , startIndex , endIndex) {
    return array.filter(function(element , index ) {

        return index >= startIndex && index <= endIndex;
    })
}

var nuovoArray = sublist(array , 0 , 4)
console.log(nuovoArray);
