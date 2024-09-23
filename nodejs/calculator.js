import readline from "readline"

function getOperation() {
    let operation = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    operation.question("add | subtract : ", (operation) => {
        // operation = operation.lowerCase();

        if (operation === "add") {
            const sum2 = args.map((num) => parseFloat(num)).reduce((total, x) => total + x);
            console.log(`${args.join(" + ")} = ${sum2}`);
            process.exit(0);
        } else if (operation === "subtract") {
            const sub2 = args.map((num) => parseFloat(num)).reduce((total, x) => total - x);
            console.log(`${args.join(" - ")} = ${sub2}`);
            process.exit(1);
        } else {
            console.log("Unknown operation");
            process.exit(2);
        }
    });
}

function check(arr) {
    if (arr.length != 2) {
        console.error("Please enter at least two numbers.");
        process.exit(1);
    } else
    
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.error("Please enter only numbers.");
            process.exit(1);
        }
    }
    getOperation();
}

const args = process.argv.slice(2);

check(args);
