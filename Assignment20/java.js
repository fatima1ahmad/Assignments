function fact(x) {
    let result = 1; 

    for (let i = x; i > 1; i--) {
        result *= i; 
    }
    return result;
}