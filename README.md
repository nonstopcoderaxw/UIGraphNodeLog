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
3. Under the repo folder sync the contain folder with "logFolder"
```bash
rsync -avu --delete "/var/lib/docker/containers/{fullDockerContainerID}" "./logFolder"
```
4. Start the express server
```bash
node index.js
```
