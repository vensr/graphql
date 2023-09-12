# GraphQL Tutorial

## What is GraphQL?
* GraphQL is a Query Language
* Alternative to using REST API
* Avoids Over Fetching (getting back more data than we need)
* Avoids Under Fetching (getting back less data than we need)
* Provides single endpoint (ex: http://localhost:4000/graphql)

## Making a GraphQL Server
* From your preferred development directory, create a directory for a new project and cd into it:

    ```bash
    mkdir graphql
    cd graphql
    ```

* Initialize a new Node.js project with npm (or another package manager you prefer, such as Yarn):

    ```bash
    npm init --yes && npm pkg set type="module"
    ```

* Applications that run Apollo Server require two top-level dependencies:

    graphql (also known as graphql-js) is the library that implements the core GraphQL parsing and execution algorithms.
    
    @apollo/server is the main library for Apollo Server itself. Apollo Server knows how to turn HTTP requests and responses into GraphQL operations and run them in an extensible context with support for plugins and other features.

    Run the following command to install both of these packages and save them in your project's node_modules directory:
    
    ```bash
    npm install @apollo/server graphql
    ```

* We will also be needing uuid generator install the uuid package.

    ```bash
    npm install uuid
    ```

* Install nodemon to run your server

    ```bash
    npm install -g nodemon
    ```

* Refer the code for details

    * schema.js - contains the schema definition of type Query and Mutation and input
    * index.js  - contains the implementation of resolvers based on the typeDef defined in the schema
    * _db.js    - contains the sample data to play around

* Start the application using the following command
    ```bash
    nodemon index
    ```

* Access the url http://localhost:4000, you will see the apollo server UI using which you can execute the query and mutation
