Chirp It Up, Full Stack Style!
The purpose of this lab is to take your chirpr schema, connect it to your Chirper Half Stack app, and utilize the database instead of chirpsstore.ts or chirps.json!

Required Steps
Database
Create a database user named chirprapp
Grant all privileges to your chirpr database.
Hint: use chirpr.* in the ON part of the GRANT statement.
Node
In your chirpr API, use your database to store chirps instead of a file
Install and save the mysql @types/mysql NodeJS package using NPM
Configure your connection using createConnection
In each API method, make the appropriate database call to create, read, update, and delete chirps
Test all the REST API endpoints in Postman to confirm they all work
React
Adjust your frontend React components to use the same API endpoints from above to achieve the same functionality it had reading a json file. It should display all chirps, view one chirp, delete or edit that, and the ability to add new chirps.
