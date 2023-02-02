[] Use a Rails API backend with a React frontend.


Inspired by one of my favorite hobbies and everyday life, going to the park, and hiking. I thought it would be most suited for me to utilize hiking places that I have been to in the East Coast. Calling it All Trails Rails..TRails..get it? Ruby on Rails to Ruby on TRails...

Using real friends with real experiences with the Hiking Trails that we have been through of course fake email 

KEEP NPM NO YARN 

# AllTRails / Ruby on tRails

https://www.alltrails.com/ (resources on Hiking Trails near me that I've been through )
https://www.nynjtc.org/ ( Template Example on how it looks like )


## REMINDER:
DON'T FORGET --no-test-framework
rails g resources user user password_digest --no-test-framework
rails d to delete
rails g controller
rails g model
rails g serializer 

## PORTS 
npm install --prefix client (frontend PORT=4000)
rails s (backend PORT=3000)

# PLAN: 
## User/Hiker -> Hikes/TRails/ Location

# MVC

Username/Hiker:
t.string :account_name: (uniqueness)
t.string :email 
t.string: password_digest(BCrypt) in rb username.rb 
add in has_secure_password

Controller Folders: 
has_many :hikes
has_many :locations, dependent: :destroy
has_many :locations, through: :hikes

Hikes/TRails
t.belong_to :user_id/account_name
t.belong_to :location_id/location
t.text :review (JOIN TABLE) (USE text for more than 50 characters when writing a review)
t.string :review? 
t.string: date? 

Locations
t.string :trail_name 
t.string :city
t.string :state
t.string :image_url
t.string :difficulty (star rating)
t.string :length (min/hour)
t.string :elevation_gain (ft)
t.string :route_type (loop/straight/u-shape)
<!-- t.string :description -->

has_many :hikes, dependent: :destroy
has_many :locations, through: :hikes

* JOIN TABLE: 
REVIEWS section using t.text!!! 

* FULL CRUD: (one resource)
HIKE

* CREATE / READ: 
:account_name OK!!! / user 
:location /hiking locations with image_url

** Implement authentication/authorization, including password protection. A user must be able to: ** 
REMINDER: BCrypt has_secure_password (macro)

First Page: 
sign in / login / logout 

Webpage Plan: 
1. Signin/Signup first page before website appears 
2. Hiking Trails with photos / reviews 
 - Account_user can edit their review / delete it 




MEETING W ENOCH: 
- STYLING LAST! MUI
- FUNCTION COMES FIRST THEN MUI/BOOTSTRAP (CHOOSE ONE!)
- SWITCH BRANCH 
- PHASE 5 MASTERPIECE LOOK BETTER THERE FOCUS ON FUNCTIONS MORE! "ALL OUT FOR PHASE-5" 
- STYLE CSS INSTEAD FOR PHASE-4 

DB:ROLLBACK 
