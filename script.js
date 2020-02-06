var Week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday"
];
        var Month = [
          "January",
          "February",
             "March",
             "April",
               "May",
               "June",
            "July",
            "August",
            "September",
              "October",
              "November",
             "December"
];

        var AllActivityKeys = [
      "K9AM",
       "K10AM",
        "K11AM",
        "K12PM",
         "K1PM",
        "K2PM",
        "K3PM",
          "K4PM",
          "K5PM"
];

//function to add event; uses local storage for permanent storage
function addCalendarActivity(key, value) {



  if (window.localStorage.getItem(key) === null) {
    window.localStorage.setItem(key, value);
  } 
  
  
  else {
    //sneaky way to update specific data in local storage since its read only
    window.localStorage.removeItem(key);
    window.localStorage.setItem(key, value);
  }
}





var Today = new Date();

var CurrentMonth = Today.getMonth(); //returns current month

var DayOfWeek = Today.getDay(); //returns Day of Week

var DayOfMonth = Today.getDate(); //returns Day of Month

var ThisYear = Today.getFullYear(); //returns Year

var DisplayedDate = Week[DayOfWeek].toString();






DisplayedDate += ", ";
DisplayedDate += Month[CurrentMonth].toString();
DisplayedDate += " ";
DisplayedDate += DayOfMonth.toString();



var DaySuffix = "th";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "1")
  DaySuffix = "st";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "2")
  DaySuffix = "nd";

if (DayOfMonth.toString().charAt(DayOfMonth.toString.length - 1) === "3")
  DaySuffix = "rd";
DisplayedDate += DaySuffix;

var currentDay = $("#currentDay");
currentDay.text(DisplayedDate);

//adding existing calender activities
      if (window.localStorage.getItem(AllActivityKeys[0]) !== null)
       $("#SHDL9AM").val(window.localStorage.getItem(AllActivityKeys[0]));

    if (window.localStorage.getItem(AllActivityKeys[1]) !== null)
  $("#SHDL10AM").val(window.localStorage.getItem(AllActivityKeys[1]));

      if (window.localStorage.getItem(AllActivityKeys[2]) !== null)
  $("#SHDL11AM").val(window.localStorage.getItem(AllActivityKeys[2]));

        if (window.localStorage.getItem(AllActivityKeys[3]) !== null)
        $("#SHDL12PM").val(window.localStorage.getItem(AllActivityKeys[3]));

     if (window.localStorage.getItem(AllActivityKeys[4]) !== null)
 $("#SHDL1PM").val(window.localStorage.getItem(AllActivityKeys[4]));



   if (window.localStorage.getItem(AllActivityKeys[5]) !== null)
  $("#SHDL2PM").val(window.localStorage.getItem(AllActivityKeys[5]));

      if (window.localStorage.getItem(AllActivityKeys[6]) !== null)
  $("#SHDL3PM").val(window.localStorage.getItem(AllActivityKeys[6]));

            if (window.localStorage.getItem(AllActivityKeys[7]) !== null)
  $("#SHDL4PM").val(window.localStorage.getItem(AllActivityKeys[7]));

    if (window.localStorage.getItem(AllActivityKeys[8]) !== null)
  $("#SHDL5PM").val(window.localStorage.getItem(AllActivityKeys[8]));

//adding colors for past present and future
var currentHour = Today.getHours();




//check if 9am is past, present or future
      $(document).ready(function() {
  if (currentHour > 9) {
    $("#SHDL9AM").addClass("past");

    $("#SHDL9AM").prop("disabled", true);
    $("#SHDL9AMBtn").prop("disabled", true);
  }
  
  
  else if (currentHour === 9) {
    $("#SHDL9AM").addClass("present");
  } 
  
  else if (currentHour < 9) {
    $("#SHDL9AM").addClass("future");
  }


});

//check if 10am is past, present or future
$(document).ready(function() {
          if (currentHour > 10) {
         $("#SHDL10AM").addClass("past");
        $("#SHDL10AM").prop("disabled", true);
        $("#SHDL10AMBtn").prop("disabled", true);
  } 
  
  
  
  else if (currentHour === 10) {
    $("#SHDL10AM").addClass("present");
  } 
  
  
  else if (currentHour < 10) {
    $("#SHDL10AM").addClass("future");
  }


});

//check if 11am is past, present or future
$(document).ready(function() {
  if (currentHour > 11) {
    $("#SHDL11AM").addClass("past");
    $("#SHDL11AM").prop("disabled", true);
    $("#SHD11AMBtn").prop("disabled", true);
  } else if (currentHour === 11) {
    $("#SHDL11AM").addClass("present");
  } else if (currentHour < 11) {
    $("#SHDL11AM").addClass("future");
  }
});

//check if 12pm is past, present or future


    $(document).ready(function() {
  
      if (currentHour > 12) {
    $("#SHDL12PM").addClass("past");
    $("#SHDL12PM").prop("disabled", true);
    $("#SHDL12PMBtn").prop("disabled", true);
  } 
  else if (currentHour === 12) {
    $("#SHDL12PM").addClass("present");
  } 
  else if (currentHour < 12) {
    $("#SHDL12PM").addClass("future");
  }

});

//check if 1pm is past, present or future
  $(document).ready(function() {
      if (currentHour > 13) {
    $("#SHDL1PM").addClass("past");
    $("#SHDL1PM").prop("disabled", true);
    $("#SHDL1PMBtn").prop("disabled", true);
  } 
  
  else if (currentHour === 13) {
    $("#SHDL1PM").addClass("present");
  } 
  
  else if (currentHour < 13) {
    $("#SHDL1PM").addClass("future");
  }
});

//check if 2pm is past, present or future
$(document).ready(function() {
  
  
if (currentHour > 14) {
    $("#SHDL2PM").addClass("past");
    $("#SHDL2PM").prop("disabled", true);
    $("#SHDL2PMBtn").prop("disabled", true);
  } 
  else if (currentHour === 14) {
    $("#SHDL2PM").addClass("present");
  } 
  else if (currentHour < 14) {
    $("#SHDL2PM").addClass("future");
  }
});

//check if 3pm is past, present or future

$(document).ready(function() {
  if (currentHour > 15) {
    $("#SHDL3PM").addClass("past");
    $("#SHDL3PM").prop("disabled", true);
    $("#SHDL3PMBtn").prop("disabled", true);
  } else if (currentHour === 15) {
    $("#SHDL3PM").addClass("present");
  } else if (currentHour < 15) {
    $("#SHDL3PM").addClass("future");
  }
});

//check if 4pm is past, present or future
      $(document).ready(function() {
      if (currentHour > 16) {
        $("#SHDL4PM").addClass("past");
        $("#SHDL4PM").prop("disabled", true);
        $("#SHDL4PMBtn").prop("disabled", true);
  } 
  else if (currentHour === 16) {
    $("#SHDL4PM").addClass("present");
  } 
  else if (currentHour < 16) {
    $("#SHDL4PM").addClass("future");
  }
});

//check if 5pm is past, present or future

$(document).ready(function() {

  if (currentHour > 17) {
    $("#SHDL5PM").addClass("past");
    $("#SHDL5PM").prop("disabled", true);
    $("#SHDL5PMBtn").prop("disabled", true);
  } else if (currentHour === 17) {
    $("#SHDL5PM").addClass("present");
  } else if (currentHour < 17) {
    $("#SHDL5PM").addClass("future");
  }
});

//9am calender save function
$(document).ready(function() {
  $("#SHDL9AMBtn").click(function(event) {
    var EventInfo = $("#SHDL9AM").val();
    addCalendarActivity(AllActivityKeys[0], EventInfo);
    alert("Activity added successfully");
  });
      });

//10am calender save function
$(document).ready(function() {
  $("#SHDL10AMBtn").click(function() {
    var EventInfo = $("#SHDL10AM").val();
    addCalendarActivity(AllActivityKeys[1], EventInfo);
    alert("Activity added successfully");
  });
      });

//11am calender save function
$(document).ready(function() {
  $("#SHDL11AMBtn").click(function() {
    var EventInfo = $("#SHDL11AM").val();
    addCalendarActivity(AllActivityKeys[2], EventInfo);
    alert("Activity added successfully");
  });
});

//12pm calender save function
$(document).ready(function() {
  $("#SHDL12PMBtn").click(function() {
    var EventInfo = $("#SHDL12PM").val();
    addCalendarActivity(AllActivityKeys[3], EventInfo);
    alert("Activity added successfully");
        });
});

//1pm calender save function
$(document).ready(function() {
  $("#SHDL1PMBtn").click(function() {
    var EventInfo = $("#SHDL1PM").val();
    addCalendarActivity(AllActivityKeys[4], EventInfo);
    alert("Activity added successfully");
  });
});

//2pm calender save function
$(document).ready(function() {
  $("#SHDL2PMBtn").click(function() {
    var EventInfo = $("#SHDL2PM").val();
    addCalendarActivity(AllActivityKeys[5], EventInfo);
    alert("Activity added successfully");
  });
});

//3pm calender save function
$(document).ready(function() {
  $("#SHDL3PMBtn").click(function() {
    var EventInfo = $("#SHDL3PM").val();
    addCalendarActivity(AllActivityKeys[6], EventInfo);
    alert("Activity added successfully");
  });
});

//4pm calender save function
$(document).ready(function() {
  $("#SHDL4PMBtn").click(function() {
    var EventInfo = $("#SHDL4PM").val();
    addCalendarActivity(AllActivityKeys[7], EventInfo);
    alert("Activity added successfully");
  });
});

//5pm calender save function
$(document).ready(function() {
  $("#SHDL5PMBtn").click(function() {
    var EventInfo = $("#SHDL5PM").val();
    addCalendarActivity(AllActivityKeys[8], EventInfo);
    alert("Activity added successfully");
  });
});
