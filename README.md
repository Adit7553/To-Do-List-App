# To-Do-List-App
A to do list app that is accessible by registered user in database . It saves user data in local storage and store to-do-list history in database 


************   Used Concepts To Make To-Do-App

 

 

NodeJs and ExressJs :

 

NodeJs and expressJs as back-end javascript runtime environment.
Template engine of express.js (hbs) :that enables us to use static template files in our application.
path module : to work with different file path in our application.
static folder(app.use(express.static(public)) :to serve static files in our express app .
express.json() method is used to parse the incoming request with JSON.
.get method to get files from different path .
.post method to create some data in our database.
async await to handle javascript promise based API.
.then and .catch to handle promise states (resolved,pending,rejected).
if else syntax used for check the hashed password from database.
bcrypt module to secure user password by hash every password with a salt.
 

 

 

HTML :

 

Used basic html and css to create app pages.
used fontawesome icons and goggleApi in html .
 

CSS :

 

used fontawesome css file to use icons in our page
 

Responsive app :

 

Used rem perameter in css for make the whole page responsive.
Used html media query to set the icon according to the page size for a responsive app.
 

JavaScript :

 

select elemnts by id or class from To-do-list page and store this in varibles by which we can easily use them.
select class name for check,uncheck and line-through fetaure by simply changing googleApi classes .
show current date by new Date();
for add to do in list simply make a function and use .insertAdjacentHTML to add  to do in list .
add item when user click on enter use the .addEventListner.
make complete to do and delete to do function to add checked and delete functionality.
add the item to local storage and get it from local storage.
users to do data can't delete by page refresh untill user can't click refresh button.
 

 

 

MongoDb :

 

Created conn.js to connect our app to the mongodb databse.
.then and .catch by which we can assure that our connection is successfull or not.
 

created userSchema and create a collection in our database in which we store user data
By findOne method check login user email if it found it database then check the hashed password and if both is true then login the user successfully




******************  To use the app 
1. Let's make sure that NodeJs, Node, Git, VS code editor or any other plateform and MongoDb is installed in your system for local database.
2. Clone the repo and install the required dependencies 
          
           git clone https://github.com/Adit7553/To-Do-List-App.git
           cd To-Do-List-App.git
           
3.  Install the required dependencies:        

          npm install  
          
4. To start express server :

          npm run dev
          
     Open 
     http://127.0.0.1:3000 
     and take a look around  ...
     
     
     
     
 A big thank to visit....    
