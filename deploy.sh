echo "Switching to branch main"
git checkout main

echo "Building app...."
npm run build

echo "Deploying files to server...."
scp -r build/*  ubuntu@172.31.23.236:/var/www/172.31.23.236/

echo "done!"