var mongoose = require("mongoose");
var Campground = require("./models/campground");
var data = [
    {
        name:"Harden",
        image:"https://alumni.asu.edu/sites/default/files/james-harden-rockets.jpg",
        description:"MVP"
    }
];

var Comment = require("./models/comment");


function seedDB(){
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds!");
    //add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed,function(err,campground){
            if(err){
                console.log(err);
            }else{
                console.log("added a campground");
                
                //create a comment
                Comment.create(
                    {
                        text:"Cool",
                        author:"jitong"
                    },function(err,comment){
                        if(err){
                            console.log(err);
                        } else{
                          campground.comments.push(comment);
                        campground.save();
                        }
                    }
                );
            }
        });
    });
    });
    
    
}



module.exports = seedDB;
