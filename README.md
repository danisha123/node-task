# Node/Javascript Programming Task

## Prerequisites
* Knowledge of NodeJS (v12+) and Javascript (es6+)
* Knowledge of how to call and consume APIs
* Knowledge of how to create RESTful APIs
* [NodeJS](https://nodejs.org/en/) (and npm) will need to be installed
* [Docker](https://docs.docker.com/) will need to be installed
* Knowledge of a relational DBs (eg MySQL)
* Knowledge of [ExpressJS](https://expressjs.com/)

## Links
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API Documentation

## DB Connection Info
Host: localhost:8001
User: root
Pass: root

## Your Task
    1. Fork this repository
    2. Run 'npm install' (this will install express and a few other packages)
    3. Run 'docker-compose up' to bring up the docker stack (including MySQL)
    3a. In the given Express appplication:
      * Create a route at 'http://localhost:3000/write'
      * When the '/save' route is visited by a user, the application will make an API request to JSONPlaceholder's 
      'GET /posts' endpoint. 
      * When the results of the 'GET /posts' request is returned, INSERT each post into the 'posts' MySQL table 
      (see 'Other Notes' below for connection information). There should be 100 rows inserted.
      * When the DB Inserts are completed. Return a 200 OK to the user.
      * NOTE: Post Ids are unique. If a post with an given Id already exists in the DB table, the application should 
      not try to insert it agian.
      
    3b. In the given Express appplication:
      * Create a route at 'http://localhost:300/read'
      * When the '/read' route is visisted by a user, read ALL rows from the 'posts' MySQL table.
      * Before returning the 'posts' to the user, filter out (remove) all rows where the userId equals 2 (Do not 
      delete rows from the DB table)
      * Return all the remaining posts to the user as a JSON array (array length should be less than 100).  
      * The page response should be a 200 OK.
      
    4. Commit and Push your code to your new repository.
    5. Send us a pull request, we will review your code and get back to you. 
    
## Other Notes
    * You are free to use ANY npm package which will help you complete the task.
    * Once completed, we should be able to run 'npm start' and visit "http://localhost:3000" to see your app run.
    * You can view your MySQL database through phpMyAdmin by visiting: http://localhost:8001/phpMyAdmin 
    (User: 'root' , Pass: 'root'). (Only after you run 'docker-compose up')
