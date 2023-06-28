# Express.js blank project
Simple template project for working on Express.js with typescript.

## Usage
 - Run "npm install"
 - Add ".env" file with the following content:
   - PORT
   - SECRETORPRIVATEKEY
   - JWT_EXPIRE
 - Run using "npm run dev" (hot reload included!)
 - Test endpoint "SERVER_URL:PORT/api/test/" -> should return:
    ```json
       {
           "msg": "server up!"
       }
    ```