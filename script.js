
$(function () {
  var time = dayjs();
  $('#currentDay').text(time.format('MMM D, YYYY'));
  var hour=dayjs().hour();
  console.log(hour);
    
  $("div.time-block").on("click", "button", function(event){
    $(event.target).css("background-color", "pink");
    var userInput=$(this).siblings("#input").val();
    var schduleHour=$(this).siblings(".hour").text();

    var trial={
      hours:schduleHour,
      text:userInput
    };
    localStorage.setItem(schduleHour,JSON.stringify(trial));
    // var ser=JSON.parse(localStorage.getItem("9AM"));
    // console.log(ser)


    
    // var id=$(this).siblings(".time-block")
  
    // console.log(id);
 


  // if (element === hour){

  // }
  
});




var nine=JSON.parse(localStorage.getItem("9AM"));
$("#hour-9").children("#input").append(nine["text"]);

var ten=JSON.parse(localStorage.getItem("10AM"));
$("#hour-10").children("#input").append(ten["text"]);

var eleven=JSON.parse(localStorage.getItem("11AM"));
$("#hour-11").children("#input").append(eleven["text"]);

var twelve=JSON.parse(localStorage.getItem("12PM"));
$("#hour-12").children("#input").append(twelve["text"]);

var one=JSON.parse(localStorage.getItem("1PM"));
$("#hour-1").children("#input").append(one["text"]);

var two=JSON.parse(localStorage.getItem("2PM"));
$("#hour-2").children("#input").append(two["text"]);

var three=JSON.parse(localStorage.getItem("3PM"));
$("#hour-3").children("#input").append(three["text"]);

var four=JSON.parse(localStorage.getItem("4PM"));
$("#hour-4").children("#input").append(four["text"]);

var five=JSON.parse(localStorage.getItem("5PM"));
$("#hour-5").children("#input").append(five["text"]);
  });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


