const os=require("os");

//info about current user
const user=os.userInfo();
console.log(user);

//System uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

//OS details
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);