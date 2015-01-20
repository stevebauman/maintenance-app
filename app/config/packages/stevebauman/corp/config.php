<?php

return array(

	'adldap_config' => array(
		'account_suffix' => "@domain.org",

		'domain_controllers' => array("domain.org", "domain2.org"), // An array of domains may be provided for load balancing.

		'base_dn' => '',//'DC=domain,DC=local',

		'admin_username' => 'admin',

		'admin_password' => '12345',
		'real_primary_group' => true, // Returns the primary group (an educated guess).

		//Both can be false if no SSL/TLS is used on server
		'use_ssl' => false, // If TLS is true this MUST be false.
		'use_tls' => false, // If SSL is true this MUST be false.

		'recursive_groups' => true,
	),

	/*
	* You can edit some options here for some customization of results on functions
	*/
	'options' => array(
		// Function name (ex Corp::allUsers())
		'users' => array(
			/*
			* When using function Corp::allUsers(), certain group types can be excluded so service accounts and other non-human accounts don't mess up your results
			*/
			'excluded_user_types' => array(
				'Service Accounts', 
				'Microsoft Exchange System Objects',
			),
			/*
                         *  You can also exclude specific groups from your user results
                         */
			'excluded_user_groups' => array(
				'corp'
			),
                    
		),

		'computers' => array(
			'folder' => array('Computers'), // Must leave folder as array
		),
	),

);