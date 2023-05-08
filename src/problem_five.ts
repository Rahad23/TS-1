type setType = unknown;
function checkValue(value: setType) {
    if (typeof value === "string") {
        return value;
    } else if (typeof value === "undefined") {
        throw new Error("Value is undefined");
    }
}

console.log(checkValue("I am string "))