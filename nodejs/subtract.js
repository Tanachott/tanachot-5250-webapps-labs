function subtract(n1, n2) {
    let result = parseFloat(n1) - parseFloat(n2);
    return result;
}

const args = process.argv.slice(2);
const sub2 = args.map((num) => parseFloat(num)).reduce((total, x) => total - x);

console.log(`${args.join(" - ")} = ${sub2}`);