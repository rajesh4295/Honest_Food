# Project

Node JS app for taking input address and suggesting store based on KML data.

# Setting up the project

 - HONEST_FOOD (Node Server)
 - npm install
 - npm start


# Running the project
  
- Run **npm start** to run the project in node terminal.
- Server will startup on *localhost* port *4115*
- Open browser and goto http:localhost:4115/
- **UI post is not yet working. Please use postman to test.**

# Endpoints

|URL    |Endpoint   |Type   |Description    |
|-------|-----------|-------|---------------|
|localhost:4115    |/address  |POST    | Retrun store in that address (test from Postman) example **Key:** address, **value:** Stumpergasse 51, 1060 Vienna, **type:** x-www-form-urlencoded  |
|http:localhost:4115    |/ |GET    | Renders UI in Browser 


