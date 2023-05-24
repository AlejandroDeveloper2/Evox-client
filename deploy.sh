echo "Switching to branch main"
git checkout main

echo "Building app...."
npm run build

echo "Deploying files to server...."
scp -r dist/* ubuntu@18.117.174.93:/var/www/html/evoxclient

echo "done!"