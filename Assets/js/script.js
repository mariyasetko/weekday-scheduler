let currentDay = document.getElementById("currentDay");
let currentHour = moment().format("HH");
let pastHour = document.getElementsByClassName("past");
let presentHour = document.getElementsByClassName("present");
let futureHour = document.getElementsByClassName("future");

//TODAY'S DATE
let today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

//COLOR CODING TIME-BLOCKS BASED ON CURRENT TIME
for (let i = 8; i <= 17; i++) {
        if (i == currentHour) {
            document.getElementById(i).classList.add("present");
        }      
        else if (i > currentHour) {
            document.getElementById(i).classList.add("past");
        }
        else if (i < currentHour) {
            document.getElementById(i).classList.add("future");
       }
}
//INSERTS SAVED SCHEDULE ITEMS ON LOAD
function onLoad(){
    for (let i = 8; i <= 17; i++) {
        let savedSched = localStorage.getItem("scheduleInput" + i);
        document.getElementById(i).value = savedSched;
    }
};
//SAVE BUTTON FOR EACH ITEM
$( ".saveBtn" ).on( "click", function() {
    let $parentBlock = $(this).closest('.time-block');
    let $scheduleInput = $parentBlock.find("input");
    $scheduleInput.attr("id");
    localStorage.setItem("scheduleInput" + $scheduleInput.attr("id"), $scheduleInput.val());
});

onLoad();