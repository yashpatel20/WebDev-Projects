function average(arr){
    return arr.reduce((prev,curr)=>prev+curr/arr.length,0)
}

function min(arr){
    return Math.min(...arr)
}

function max(arr){
    return Math.max(...arr)
}

function getLength(arr){
    return arr.length
}

export {average, min, max, getLength}