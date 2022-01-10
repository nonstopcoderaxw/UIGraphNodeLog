const { exec, spawn } = require("child_process");
var interval = process.argv[2];//0;


main();

async function main() {
    console.log("interval", interval);
    setTimeout(restart, interval);
}

async function restart() {
    await exec(`screen -X -S "dockerTheGraphNode" quit`);
    await exec(`screen -dm -S "dockerTheGraphNode" bash -c "docker-compose up"`);

    await exec(`screen -X -S "dockerLog" quit`);
    await exec(`screen -dm -S "dockerLog" bash -c "node index.js`);
    await main();
}
