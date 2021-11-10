# demoBackend

**pre-requisite**

Node setup, Mysql, redis

**Steps**

1. Clone this repository
2. Install node js if already not there. command :sudo apt install nodejs
3. DB CONFIG Update Database credientials in app/config/db.config.js
5. Start application: node server.js
6. API to send visitors : http://localhost:3000/visitors?uuid=jqrt2uhtf5rhbw6int2hqhia42vitf6ls
7. On every 2 sec , app pushing total count from redis to mysql 


