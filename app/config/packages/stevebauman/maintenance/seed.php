<?php

return array(

    /**
     * The maintenance application installation seeds. They are completely optional.
     */
    'priorities' => array(
        array(
            'name' => 'Low',
            'color' => 'default'
        ),
        array(
            'name' => 'Medium',
            'color' => 'warning',
        ),
        array(
            'name' => 'High',
            'color' => 'danger',
        ),
        array(
            'name' => 'Test',
            'color' => 'success'
        ),
    ),

    'statuses' => array(
        array(
            'name' => 'Open',
            'color' => 'danger',
        ),
        array(
            'name' => 'Closed',
            'color' => 'success'
        ),
        array(
            'name' => 'In Progress',
            'color' => 'warning'
        )
    ),

    'metrics' => array(
        array(
            'name' => 'Pieces',
            'symbol' => 'Pc',
        ),
        array(
            'name' => 'Grams',
            'symbol' => 'G',
        ),
        array(
            'name' => 'Kilograms',
            'symbol' => 'Kg',
        ),
        array(
            'name' => 'Tonnes',
            'symbol' => 'T',
        ),
        array(
            'name' => 'Millilitres',
            'symbol' => 'mL',
        ),
        array(
            'name' => 'Litres',
            'symbol' => 'L',
        ),
    ),

);