# YelpCamp

## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
    * Name
    * Image
    
## Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grild

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add mongoose/V2
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

## Show Page
* Review the RESTful routes we'ne seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES
name            url             verb        desc.
==============================================
INDEX           /dogs           GET         Display a list of all dogs
NEW             /dogs/new       GET         Display a form to make a new dog
CREATE          /dogs           POST        Add new dog to DB
SHOW            /dogs/:id       GET         Show info about one dog
EDIT            /dogs/:id/edit  GET         Show edit form for one dog
UPDATE          /dogs/:id       PUT         Update a particular dog, then redirect somewhere
DESTROY         /dogs/:id       DELETE      Delete a particular dog,then redirect somewhere

REST - a mapping between HTTP routes and CRUD

Semantic UI

## Data associations
* Embedding Data
* Referencing Data
