# UIGraphNodeLog
How to set it up

1. Clone the repo
```bash
git clone https://github.com/AlexTheCodeMan/UIGraphNodeLog
```
2. Find the TheGraph Node docker log
```bash
cd /var/lib/docker/containers/
```
3. Update index.js logFileLocation variable to the docker log file location
```js
const logFileLocation = "/var/lib/docker/containers/679c4dc2ec97de1e51f419c24f42a7dfbd7973560f09f256311ace337a2ae6a4/679c4dc2ec97de1e51f419c24f42a7dfbd7973560f09f256311ace337a2ae6a4-json.log"
```
4. Start the express server
```bash
node index.js
```
