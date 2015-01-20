<?php

return array(

    /**
     * The maintenance application notification icons.
     * A different icon will be displayed depending on the model that created it
     */
    'icons' => array(
        'Stevebauman\Maintenance\Models\WorkOrder'                  => 'fa fa-book success',
        'Stevebauman\Maintenance\Models\WorkOrderAssignment'        => 'fa fa-flag danger',
        'Stevebauman\Maintenance\Models\InventoryStock'             => 'fa fa-dropbox info',
    ),

);