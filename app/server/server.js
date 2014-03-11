/**
 * Created by jinwyp on 14-2-24.
 */


if (Meteor.isServer) {

    Meteor.publish('clicks', function(){
        return Clicks.find();
    });

    Meteor.publish('projects', function(){
        return Projects.find();
    });

    Meteor.publish('usermessages', function(){
        return Usermessages.find();
    });


    Usermessages.allow({
        insert : function(){
            return true;
        },
        update : function(){
            return true;
        },
        remove : function(){
            return true
        }
    });


//    Projects.deny({
//        insert:function(){
//            return false;
//        }
//    });


    Meteor.startup(function () {



        // code to run on server at startup
    });


    Meteor.methods({
        'removeAllProjects' : function(){
            Projects.remove({});
        },

        'addClick' : function(){
            Clicks.insert({"num" : Math.floor(Math.random()*1000)});
        }
    });



}