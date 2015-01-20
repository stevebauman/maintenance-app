
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
         buttonText: {
             prev: "Previous",
             next: "Next",
             today: 'Today',
             month: 'Month',
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
         editable: true,
         eventDrop: function(event, delta, revertFunc) {

             var format = '';

             if(event.allDay){
                 format = dateFormat;
             } else {
                 format = dateFormat+" - "+timeFormat;
             }

             bootbox.confirm({
                 title: "Are you sure you want to move this event?",
                 message: event.title+" will be moved to "+moment(event.start).format(format),
                 callback: function(result){
                    if(result){
                        updateEvent(calendar, event);
                    } else{
                        revert();
                    }
                 }
             });

             function revert(){
                 revertFunc();
             }
         },
         eventResize: function(event, delta, revertFunc, jsEvent, ui, view){

             var format = '';

             if(event.allDay){
                 format = dateFormat;
             } else {
                 format = dateFormat+" - "+timeFormat;
             }

             bootbox.confirm({
                 title: "Are you sure you want to change the time of this event?",
                 message: event.title+" will now end at "+moment(event.end).format(format),
                 callback: function(result){
                    if(result){
                        updateEvent(calendar, event);
                    } else{
                        revert();
                    }
                 }
             });

             function revert(){
                 revertFunc();
             }

         },
         eventClick: function(calEvent, jsEvent, view) {

             $.ajax({
                 url: "/api/calendar/events/"+calEvent.id
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