function stringChop(str, size) {
   

    let res = [];
    for (let i = 0; i < str.length; i += size) {
        const chunk = str.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}


//Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
