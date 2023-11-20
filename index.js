var cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(Ralph){
    cats.push('Ralph')
    return cats
}
function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
    return cats
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop('Garfield')
    return cats
}
function destructivelyRemoveFirstCat(Milo){
    cats.shift('Milo')
    return cats
}
function appendCat(Broom){
    var Milo= [...cats,'Broom']
    return Milo
}
function prependCat(Arnold){
    var Otis= ['Arnold',...cats]
    return Otis
}
function removeLastCat(Garfield){
    var caats= cats.slice(0,cats.length-1)
    return caats
}
function removeFirstCat(Milo){
    var catts= cats.slice(1)
    return catts
}