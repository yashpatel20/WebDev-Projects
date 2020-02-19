function encrypt(str, key){
    return str.split('').map(c => {
        let code = c.charCodeAt(0)
        //uppercase
        if(code >=65 && code <=90)
            return String.fromCharCode((code-65+key)%26+65)
        else if(code >= 97 && code<=122)
            return String.fromCharCode((code-97+key)%26+97);
    }).join('')
}

export {encrypt}