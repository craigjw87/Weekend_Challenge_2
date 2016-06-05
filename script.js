// // Sourced console.log("hi");

// x-You first task is to make an AJAX call from the client side app.js, using the .ajax method and access the json data through the url above. When successful, it should bring the data back down.
// You will then need to combine that with what you have learned about parsing objects and arrays to complete the challenge.
//
// x-What I would like to see on the DOM, is one person at a time represented - the info for the first person in the json data.
// x-One the screen should also be Prev and Next buttons, that when pressed, show the information for the appropriate person.
// x-These should wrap - prev when on the first person should wrap around to show the last person and vice versa.
// x-Also on the dom should be a display showing the number of people and which is being currently viewed (eg. 2/20)
// x-When a person is displayed, show their name, their city, and their piece of shoutout feedback.
// x-Only one person should be show cased at any given time.

var allStudents;
var index = 0;

$(document).ready(function(){

  $.ajax({
    url: "https://raw.githubusercontent.com/devjanaprime/2.4-jQueryAjaxJSON/master/students.json",
    dataType: "json",
    success: function( data ){
        allStudents = data;
        console.log("data received");
        console.log(data);
        newStudent();
      },  // End success
        statusCode: {
           404: function(){
              alert( 'error connecting to server' );
           }  // End 404
         } // End statusCode
       }); // End ajax

  function newStudent (){
    $("#students").html("<p><span>First Name: </span>" + allStudents.students[index].first_name + "</p>" + " <p><span>Last Name: </span>" + allStudents.students[index].last_name + "</p>" + "<p><span>City: </span>" + allStudents.students[index].city + "</p>" + "<p><span>Shoutout: </span>" + allStudents.students[index].shoutout + " <p><span>Student Number: </span>" + index + "/20" + "</p>");
  }

  // Next Button Functionality
    $("#nextButton").on("click", function(){
    // console.log("hi"); Testing button
    if (index <= 0) index = 0; // Prevent infinite clicks
    $(this).next(); // Next Student
    index++; // Adding to index
    newStudent();
  });

  // Previous Button Functionality
    // $(".students").next().text(students.first_name);
    $("#previousButton").on("click", function(){
    // console.log("hi"); Testing button
    if (index >= 19) index = 19;  // Prevent infinite clicks
    $(this).prev(); //Previous Student
    index--; // Subtracting from index
    newStudent();

    });
});
