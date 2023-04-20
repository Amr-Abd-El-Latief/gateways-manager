# Gateways App 


gateways is an application for showing stored gateways in the system, also you can see the details of gateway 
with its stored devices. 

## how to setup and run Front End

    -	 Using terminal:

            1-	Reach by terminal to the front end main folder besides the package.json file (gateways/FrontEnd/gateways-FrontEnd)
            2-	Run in the terminal:    npm install 
            3-	After terminal finishes installing the application libraries, run command: npm start
            4-	Application would be in the link: http://localhost:4200/

   -     How To run unit test: 
        
            1 - Reach by terminal to the front end main folder besides the package.json file.
            2 – in terminal run command:  ng test   
 
             And for Code Covergae: 
          
            3 - ng test --code-coverage


## how to setup and run Back End

    -	 Using terminal:

            1-	Reach by terminal to the backend  main folder besides the package.json file (gateways/BackEnd/gateways-BackEnd)
            2-	Run in the terminal:    npm install 
            3-	After terminal finishes installing the application libraries, run command: npm run start (For usage mode) 
            or: npm run dev (for development mode)
            4-	Application would be in the link: http://localhost:3000/

   -     How To run unit test: 
        
            1 - Reach by terminal to  the backend  main folder  besides the package.json file.
            2 - go inside the test folder 
            2 – in terminal run command: npm test -- <test-file-name>
             

             example : npm test -- ip-validator-test.test.js

              

## how to run Database filling script


1 - install mongodb 
2- create database with the name: gatewaysdb

3 - run the API :GET :   http://localhost:3000/api/gates/createtestgateways



# technical Notes:

## library and tools used in this app 

Front End: 

 1 - angular 
 2 - angular material 
 3- Jasmin (in testing )

 Back End: 

 1 - Nodejs
 2- Mongoose  
 2 - jest (in testing )


Database: 

1 - mongodb 