
$(document).ready(function(){

    var calendar = $('#calendar');

    var url = calendar.data('event-url');

    var dateFormat = 'MMMM Do, YYYY';
    var timeFormat = 'h:mm a';

    calendar.fullCalendar({
        header: {
             left: 'prev,today,next',
             center: 'title',
             right: 'month,agendaWeek,agendaDay'
         },
         defaultView: 'month',
         buttonText: {
             prev: "Previous",
             next: "Next",
             today: 'Today',
             week: 'Week',
             day: 'Day'
         },
         events: {
             url: url,
             type: 'GET',
             error: function() {
                 alert('Error retrieving events');
             }
         },
         eventClick: function(calEvent, jsEvent, view) {

             $.ajax({
                 url: "/api/v1/calendar/events/"+calEvent.id
             })
             .done(function( data ) {
                 bootbox.dialog({
                     message: data,
                     title: calEvent.title,
                     buttons: {
                         main: {
                             label: "Close",
                             className: "btn-default"
                         },
                         success: {
                             label: "View Details",
                             className: "btn-primary"
                         }
                     }
                 });
             });

         }
     });


});