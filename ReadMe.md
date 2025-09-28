## How to run locally the system

1. clone the repos 
https://github.com/Assessor-s-Tax-Roll-Pinamungajan/server.git
https://github.com/Assessor-s-Tax-Roll-Pinamungajan/client.git

2. check node version
node --version

3. cd to client
npm i
npm run start

4. cd server
npm i
make new .env
DATABASE_URL="file:./reyal.db"
npx prisma generate
npm start

5. Make new seed - for bulk data (optional)
change 
seed.ts in accordance with schema.prisma

