const { readFile, writeFile } = require("fs");
console.log("Starting with the task");
readFile("./content/text1.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    // console.log(first);

    readFile("./content/text2.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;
        // console.log(second);

        writeFile("./content/randomFileAsync.txt", `result is: ${first} ${second}`, (err,result) => {
            if(err)
            {
                console.log(err);
                return;
            }

            console.log("Task 1 ended");
        })
    })
})

console.log("Starting with Task 2 ");