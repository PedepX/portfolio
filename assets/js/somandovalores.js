function soma(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}

console.log(soma(10, 20, 30));