<?php

/*
 * Driver Configuration
 */
return array(
    
    /*
     * Process for Google Calendar:
     * 
     * - Create Google Account
     * - Go to Google Developer API Console
     * - Create Project
     * - Enable Calendar API
     * - Go to Calendar UI and share calendar using service account name
     */
    'google' => array(
        
        'default_calendar_id' => 'primary',
        
        'client_id' => '',
        
        'service_account_name' => '',
        
        'application_name' => '',
        
        'key' => 'file_path',
        
        'scopes' => array(
            'https://www.googleapis.com/auth/calendar',
        ),
        
    ),
    
    'event' => array(

        /*
         * Optional viewer class
         */
        'viewer' => 'EventViewer',
        
        /*
         * Default event attributes with their default value
         */
        'attributes' => array(
            'calendar_id' => '',
            'id' => '',
            'parent_id' => '',
            'title' => '',
            'description' => '',
            'location' => '',
            'attendees' => array(),
            'start' => '',
            'end' => '',
            'all_day' => false,
            'status' => '',
            'timeZone' => '',
            'rrule' => '',
            'rruleArray' => array(),
            'isRecurrence' => false,
        ),
    ),
    
    'attendee' => array(

        /*
         * Optional viewer class
         */
        'viewer' => 'AttendeeViewer',
        
        /*
         * Default attendee attributes with their default value
         */
        'attributes' => array(
            'id' => '',
            'name' => '',
            'email' => '',
            'comment' => '',
            'status' => '',
        )
    ),
    
);
