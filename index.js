console.log(`App Started`);
let count = 0;

setInterval(() => {
    console.log(`App Interval ${++count}`);
}, 10000);

console.log(`App Ended`);