<?php
	
	$nav = array(
		array(
			'id' => 'homeBtn',
			'data' => 'index'
		),
		array(
			'id' => 'profileBtn',
			'data' => 'profile'
		),
		array(
			'id' => 'settingsBtn',
			'data' => 'settings'
		),
		array(
			'id' => 'logoutBtn',
			'data' => 'log'
		),
		array(
			'id' => 'treatmentsBtn',
			'data' => 'treatments'
		),
		array(
			'id' => 'scheduleBtn',
			'data' => 'agenda'
		),
		array(
			'id' => 'messageBtn',
			'data' => 'messages'
		),
		array(
			'id' => 'contactsBtn',
			'data' => 'contacts'
		),
		array(
			'id' => 'encyclopediaBtn',
			'data' => 'encyclopedia'
		)
	);

	echo json_encode( (object)$nav );
?>