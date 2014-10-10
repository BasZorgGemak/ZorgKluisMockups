$(document).ready(function() {



	/*
	 *	Dit doet min of meer hetzelfde als je eerdere code, maar dan modulair,
	 *	dat scheelt heel veel herhalende code.
	 *
	 *	Probeer de flow van de code te begrijpen, en verder uit te bouwen.
	 *	Lees je ook nog even in het gebruik van JSON en XML in jQuery, en hoe
	 *	je daarmee web applicaties bouwt.
	 *
	 */

	// Set global vars
	var navData;
	var currentID;
	var dataRef;

	// Get a list of navigation options
	$.getJSON('json/nav.php', function(data) { navData = data; });

	$("notification").click(function(){
		alert("test");
		$('#notificationOnTime').hide();

	});
/*
	// Capture click, get related data and display it
	$("nav a").click(function(event){

		event.preventDefault();
		var currentID = $(this).attr('id');
	 	console.log(currentID);

		// Get the reference to the data for the current selected navigation item
		var dataRef = _.detect(navData, function(val) { return val.id == currentID; }).data;

		// $("nav a").removeClass("navItemSelected");

		// Nu even voor test: HTML via load()
		$('#loadtest').load(dataRef+'.html');
		console.log("dataRef " + dataRef);
		// Dit moet worden: JSON via getJSON()
        //$.getJSON('json/'+dataRef+'.php', function(data) {
        	// Put content in the appropriate places
        //});


		$(this).addClass("active");

		// Not refreshing div to apply CSS
		// $("#loadtest").listview("refresh");

    });


 */


  		// Swipe
			$('#test').live('swipeleft',function(event){
				alert("swipe left");
				window.history.back();
				event.preventDefault();
			});
			$('#jqm-home').live('swiperight',function(event){
				alert("swipe right");
				window.history.forward();
				event.preventDefault();
			});

		// Hide no results div
        $('#no-results').hide();

  		// Alert if no results using a filter on a list
        $(function(){
         $('.ui-input-text').live('keyup', function(){
            if($('.result:visible').length != 0) {
               $('#no-results').hide();
            }
            else
            {
               $('#no-results').show();
            }
         });
      });

});

	// Override jQuery Mobile's defaults (This script therefore needs to be placed between jQuery.js and jQuery.Mobile.js)
	$(document).bind("mobileinit", function(){
		// Set deffault page transition to 'none'
		$.mobile.defaultTransition = "none";
	});

