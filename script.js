

$(function () {
  // Setting current date top of page
  var date = dayjs();
  $('#currentDay').text(date.format('MMM D, YYYY'));
  
  // update color of time blocks
  setInterval(colorUpdate);

  // check current hour aganist id, update color element
  function colorUpdate(){
    var hourTime
    var hour=dayjs().hour();
    $('.time-block').each(function() {
      var id=$(this).attr('id');
      // hourNum return only number
      var hourNum= id.match(/\d+/)[0];
      hourTime={
        html:id,
        militaryTime:hourNum
      };
      if (hourTime['militaryTime']<hour){
        $("#"+hourTime['html']).removeClass("future past present");
        $("#"+hourTime['html']).addClass("past");
      }
      else if (hourTime['militaryTime']>hour){
        $("#"+hourTime['html']).removeClass("future past present");
        $("#"+hourTime['html']).addClass("future");
      }else{
        $("#"+hourTime['html']).removeClass("future past present");
        $("#"+hourTime['html']).addClass("present");
      }
    });
  }

  // Gets input from textarea, store local storage
  $("div.time-block").on("click", "button", function(event){
    $(event.target).css("background-color", "grey");
    setTimeout(()=>{$(event.target).css("background-color", "#1AABD7")},2000)
    var userInput=$(this).siblings("#input").val();
    schduleHour=$(this).siblings(".hour").text();

    var inputObject={
      hours:schduleHour,
      text:userInput
    };
    localStorage.setItem(schduleHour,JSON.stringify(inputObject));
  });

// Get each input from local storage, append textarea
if (JSON.parse(localStorage.getItem("9AM") != null)){
var nine=JSON.parse(localStorage.getItem("9AM"));
$("#hour-9").children("#input").append(nine["text"])};

if (JSON.parse(localStorage.getItem("10AM") != null)){
var ten=JSON.parse(localStorage.getItem("10AM"));
$("#hour-10").children("#input").append(ten["text"])};

if (JSON.parse(localStorage.getItem("11AM") != null)){
var eleven=JSON.parse(localStorage.getItem("11AM"));
$("#hour-11").children("#input").append(eleven["text"])};

if (JSON.parse(localStorage.getItem("12PM") != null)){
var twelve=JSON.parse(localStorage.getItem("12PM"));
$("#hour-12").children("#input").append(twelve["text"])};

if (JSON.parse(localStorage.getItem("1PM") != null)){
var one=JSON.parse(localStorage.getItem("1PM"));
$("#hour-13").children("#input").append(one["text"])};

if (JSON.parse(localStorage.getItem("2PM") != null)){
var two=JSON.parse(localStorage.getItem("2PM"));
$("#hour-14").children("#input").append(two["text"])};

if (JSON.parse(localStorage.getItem("3PM") != null)){
var three=JSON.parse(localStorage.getItem("3PM"));
$("#hour-15").children("#input").append(three["text"])};

if (JSON.parse(localStorage.getItem("4PM") != null)){
var four=JSON.parse(localStorage.getItem("4PM"));
$("#hour-16").children("#input").append(four["text"])};

if (JSON.parse(localStorage.getItem("5PM") != null)){
var five=JSON.parse(localStorage.getItem("5PM"));
$("#hour-17").children("#input").append(five["text"])};

});

  

  
 


