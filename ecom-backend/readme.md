# Learning of the backend all code and steps 

- npm init
- setting up of backend with typescript is quite different from normal js
//  mkdir ecom-backend
  cd ecom-backend
  npm init
  nano readme.md
  npm i -g typescript
  tsc --init
  npm i express dotenv mongoose
  npm i --save-dev @types/express @types/node typescript
  npm i --save-dev nodemon
  tsc
  node ./dist/app.js

//setting up the backend
 -first of all add typescript to the project backend
 -create controller,middleware,types,utils,routes folder in src
 Controller is like the chef in a kitchen, preparing and serving what people ask for.
Middleware are like helpers or guards in the kitchen, doing small tasks before or after the main job.
Utils are special tools in the kitchen, doing specific jobs that we use often.
Routes are like addresses to different places, directing people (or requests) to the right place in our application.
 -two terminal one for node dist/app.js (npm run start)and other for convertin the typescript to javascript at the runtime itself (npm run watch) see the package.json file
 -in app.ts  create a default port and listen to that port

 -Do the operations with database in the controller folder

//for example take for user
 -first create a user.ts schema in models , import mongoose and create a schema

 -then create a user.ts in the routes ,which will have the route for user 

 -import this route to app.ts and use it 
 import userRoute from './routes/user.js';
 const app = express();
 app.use("/api/v1/user",userRoute);

 -Now in controller make a user.ts file which will talk to the database ,import the model user.ts here . it is like creating a api

 -after creating a api(controller) in the types folder create types.ts file which will have the interface of the api i.e. .body.name, .email etc 

-Now most crucial step is to connect to databse 

open the mongodb compass application

brew services start mongodb-community@7.0 //in the terminal or else it will give error while connecting


 -in the utils create a features.ts file which will hace a function to connect to database
 -check these using postman

 //do npm run dev and npm run watch
 -make sure the database is created successfully
 -the schema should be right and post this address in post man with example json in body section before add this in app.ts above all route app.use(express.json());
 
 -create a custom error handler in the middle wares so that the user dont get the error code



