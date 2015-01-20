// JavaScript Document

/*
 * Set ajax cache to false to prevent back button from
 * spewing json responses
 */
$.ajaxSetup({cache: false});

$(document).ready(function () {

    /*
     * Tab Pane Hash Fix - Automatically opens a tab in a tab-panel if the
     * hash id matches the id of a panel
     */
    $(function () {
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });

    /*
     * Replace all text area instances with CKeditor
     */
    CKEDITOR.replaceAll();

    /*
     * Sorts a table listing by ajax
     */
    $(document).on('click', '.link-sort', function (e) {
        e.preventDefault();

        var link = $(this).attr('href');

        $.get(link, function (data) {
            refreshContent('#resource-paginate', data);
        });

    });

    /*
     * Confirms a form submission
     */
    $(document).on('click', '.confirm', function (e) {
        e.preventDefault();

        //Get the closest form to submit
        var form = $(this).closest('form');
        //
        //Get the message to display for confirmation
        var message = $(this).data('confirm-message');

        //Check if the message is present or not
        if (typeof message === 'undefined') {
            //Set a default message if the message is not present
            message = "Are you sure?";
        }

        //Run confirm modal
        bootbox.confirm(message, function (result) {
            if (result) {
                //If user clicks ok, submit the form
                form.submit();
            } else {
                //Close modal and do nothing
            }
        });
    });

    /*
     * Submits post forms via ajax and returns the response
     */
    $(document).on('submit', '.ajax-form-post', function (e) {
        e.preventDefault();

        var refreshTarget = $(this).data('refresh-target');

        if (typeof refreshTarget === 'undefined') {

            $(this).ajaxSubmit({
                success: showFormResponse,
                error: showErrorResponse
            });

        } else {

            $(this).ajaxSubmit({
                success: function (response, status, xhr, $form) {
                    showFormResponse(response, status, xhr, $form);
                    refreshContent(refreshTarget);
                },
                error: showErrorResponse
            });

        }
    });

    /*
     * Submits get forms via ajax and returns the response
     */
    $(document).on('submit', '.ajax-form-get', function (e) {
        e.preventDefault();

        var refreshTarget = $(this).data('refresh-target');

        $(this).ajaxSubmit({
            success: function (response, status, xhr, $form) {

                refreshContent(refreshTarget, response);

            }
        });
    });

    /*
     * Paginates table information without refresh
     */
    $(document).on('click', '.pagination li a', function (e) {
        e.preventDefault();
        paginate($(this).attr('href'), '#resource-paginate');
    });

    /*
     * Replace fields with class .pickatime with Pickatime
     */
    if ($.isFunction($().mobiscroll)) {
        $('.pickatime').mobiscroll().time({
            theme: 'mobiscroll',
            display: 'modal',
            mode: 'scroller'
        });
    }

    /*
     * Replace fields with class .pickadate with Pickadate,
     * and set the default date format
     */
    if ($.isFunction($().mobiscroll)) {
        $('.pickadate').mobiscroll().date({
            theme: 'mobiscroll',
            display: 'modal',
            mode: 'scroller'
        });
    }


    if ($.isFunction($().typeahead)) {
        // Workaround for bug in mouse item selection
        $.fn.typeahead.Constructor.prototype.blur = function () {
            var that = this;
            setTimeout(function () {
                that.hide()
            }, 250);
        };

        $('input[name="make"]').typeahead({
            source: function (query, process) {
                return $.get('/api/assets/makes', {query: query}, function (data) {
                    return process(data);
                });
            }
        });

        $('input[name="model"]').typeahead({
            source: function (query, process) {
                return $.get('/api/assets/models', {query: query}, function (data) {
                    return process(data);
                });
            }
        });

        $('input[name="serial"]').typeahead({
            source: function (query, process) {
                return $.get('/api/assets/serials', {query: query}, function (data) {
                    return process(data);
                });
            }
        });
    }

    $(document).on('click', 'a[data-method]', function (e) {
        e.preventDefault();
        var link = $(this);

        var httpMethod = link.data('method').toUpperCase();
        var allowedMethods = ['POST', 'PUT', 'DELETE'];
        var msg = link.data('message');
        var title = link.data('title');

        // If the data-method attribute is not PUT or DELETE,
        // then we don't know what to do. Just ignore.
        if ($.inArray(httpMethod, allowedMethods) === -1) {
            return;
        }

        bootbox.dialog({
            message: msg,
            title: title,
            buttons: {
                main: {
                    label: "Cancel",
                    className: "btn-default"
                },
                success: {
                    label: "Ok",
                    className: "btn-primary",
                    callback: function () {
                        var form =
                            $('<form>', {
                                'method': 'POST',
                                'action': link.attr('href')
                            });

                        var hiddenInput =
                            $('<input>', {
                                'name': '_method',
                                'type': 'hidden',
                                'value': link.data('method')
                            });

                        if (link.data('method') === "POST") {
                            form.appendTo('body').submit();
                        } else {
                            form.append(hiddenInput).appendTo('body').submit();
                        }

                    }
                }
            }
        });

    });

    $(document).on('click', '.notification', function (e) {
        e.preventDefault();

        var url = $(this).data('read-url');

        $.post(url, {_method: "PATCH", read: "1"})
            .done(function (data) {
                return true;
            });
    });

    /*
     * Shows bootbox form from returned HTML to dynamically update stock locations
     */
    $(document).on('click', '.update-stock', function (e) {

        e.preventDefault();

        var link = $(this);

        $.get(link.attr('href'), function (data) {
            bootbox.dialog({
                message: data.html,
                buttons: {}
            });
        });

    });

    if ($.isFunction($().select2)) {

        $('.select2').select2();

        $('.select2-color').select2({
            formatResult: formatColor,
            formatSelection: formatColor
        });

    }

    /*
     * Clears the closest form input field when button/link is clicked
     */
    $(document).on('click', '.clear-field', function (e) {
        e.preventDefault();

        var closest = $(this).closest('.input-group').find('input');

        closest.val('');
    });

});

/**
 * Accepts errors from a JSON response and displays them to the user on each
 * individual input
 *
 * @param {type} errors
 * @returns {undefined}
 */
var showFormErrors = function (errors) {
    $('.status-message').remove();
    $('.errors').remove();
    $('.form-group').removeClass('has-error');

    for (var errorType in errors) {
        var input = $('[name="' + errorType + '"]');

        for (var i in errors[errorType]) {
            input.closest('.form-group').addClass('has-error');

            if (input.closest('.input-group').length > 0) {

                var group = input.closest('.input-group');

                group.after('<span class="label label-danger errors error-' + errorType + '">' + errors[errorType][i] + '</span>');

            } else {

                input.after('<span class="label label-danger errors error-' + errorType + '">' + errors[errorType][i] + '</span>');

            }
        }
    }
};

/**
 * Displays an internal server error message into a bootbox modal
 *
 * @param {object} xhr
 * @param {string} textStatus
 * @param {string} errorThrown
 * @returns {undefined}
 */
var showErrorResponse = function (xhr, textStatus, errorThrown) {
    console.debug(xhr);

    var response = $.parseJSON(xhr.responseText);

    bootbox.dialog({
        title: response.error.type,
        message: response.error.message + ' ' + response.error.file,
        buttons: {
            main: {
                label: "Cancel",
                className: "btn-default"
            },
            success: {
                label: "Send Error to Support",
                className: "btn-primary",
                callback: function () {
                    alert('Submitted Error');
                }
            }
        }
    });
};

/**
 * Displays the message returned from the server on an ajax request
 *
 * @param {type} message
 * @param {type} type
 * @param {type} container
 * @returns {undefined}
 */
var showStatusMessage = function (message, type, container) {
    $('.status-message').remove();
    $('.errors').remove();
    $('.form-group').removeClass('has-error');

    var html = '<div class="status-message">\n\
                        <div class="alert alert-' + type + ' alert-dismissable">\n\
                                                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>\n\
                            ' + message + '\n\
                        </div>\n\
                </div>';

    var fadeTime = 200;

    if (typeof container === "undefined") {
        $(html).prependTo('#alert-container').hide().fadeIn(fadeTime);
    } else {
        $(html).prependTo(container).hide().fadeIn(fadeTime);
    }

};

/**
 * Processes the response from the server upon ajax request
 *
 * @param {type} response
 * @param {type} status
 * @param {type} xhr
 * @param {type} $form
 * @returns {undefined}
 */
var showFormResponse = function (response, status, xhr, $form) {
    /*
     * Check if a message exists
     */
    if (typeof response.messageType !== 'undefined') {

        /*
         * Get the status target
         */
        var statusContainer = $form.data('status-target');

        /*
         * If no status target is found, use the default
         */
        if (typeof statusContainer !== 'undefined') {
            showStatusMessage(response.message, response.messageType, statusContainer);
        } else {
            showStatusMessage(response.message, response.messageType);
        }

        /*
         * If the form has the class 'clear-form', clear the form with malsup's form helper
         */
        if ($form.hasClass('clear-form')) {
            $form.resetForm();
        }

    } else if (typeof response.errors !== 'undefined') {
        /*
         * If the response contains errors, show them
         */
        showFormErrors(response.errors);

    } else {
        alert(response.error);
    }
}

/**
 * Formats an icon into a select2 list
 *
 * @param {type} icon
 * @returns {String}
 */
function formatIcon(icon) {
    return "<i class='" + icon.id.toString() + "'></i> " + icon.text;
}

/**
 * Formats a label into a select2 list
 *
 * @param {type} color
 * @returns {String}
 */
function formatColor(color) {
    return "<span class='label label-" + color.id.toString() + "'>" + color.text + "</span> ";
}

/**
 * Updates a calendar event
 *
 * @param {type} calendar
 * @param {type} event
 * @returns {Boolean}
 */
function updateEvent(calendar, event) {
    var form =
        $('<form>', {
            'method': 'POST',
            'action': calendar.data('event-url') + "/" + event.id
        });

    form.appendTo('body');

    form.on('submit', function () {
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: {
                _method: 'PATCH',
                start: moment(event.start).format('YYYY-MM-DD hh:mm:ss'),
                end: moment(event.end).format("YYYY-MM-DD hh:mm:ss"),
                all_day: event.allDay
            },
            dataType: "json"
        }).done(function (result) {
            if (calendar.fullCalendar('refetchEvents')) {
                calendar.fullCalendar('rerenderEvents');
            }
        });

        return false;
    });

    form.submit();

    return true;
}

/**
 * Refreshes the targeted area of a page
 *
 * @param {type} target
 * @param {type} data
 * @returns {undefined}
 */
function refreshContent(target, data) {

    var url = window.location;

    if (typeof data === 'undefined') {

        $.get(url, function (data) {
            var html = $(data).find(target);
            $(target).replaceWith(html);
        });

    } else {

        var html = $(data).find(target);

        $(target).replaceWith(html);

    }

}

/**
 * Paginates with ajax
 *
 * @param {type} url
 * @param {type} target
 * @returns {undefined}
 */
function paginate(url, target) {
    $.ajax(
        {
            url: url,
            type: "GET",
            datatype: "html"
        })
        .done(function (data) {
            html = $(data).find(target);
            $(target).replaceWith(html);
        });
}