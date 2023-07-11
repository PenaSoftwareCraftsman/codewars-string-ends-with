const StringEndsWith = (str, endOfTheString) =>{
    let strEnd = str.substring(str.length - endOfTheString.length);

    if(endOfTheString.length > strEnd.length || str.length > 0 && endOfTheString === "")
        return false;
    else if(strEnd == endOfTheString)
        return true;
    else
        return false;
}

module.exports = {
    StringEndsWith
}