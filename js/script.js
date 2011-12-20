	   $(document).ready(function() {
		alert("getScriptExecuted");
	      $("#person").click(function(event){
	          $('#naam').load('test.html');
	alert("test");
	      });

			$("#treatmentsBtn").click(function(event){
				$(".navitem").removeClass("navItemSelected");
		        $('#container').load('treatments.html #container');
				$("#treatmentsBtn").addClass("navItemSelected");
		    });
			$("#agendaBtn").click(function(event){
				$(".navitem").removeClass("navItemSelected");
			    $('#container').load('agenda.html #container');
			 	$("#agendaBtn").addClass("navItemSelected");
		    });
			$("nav.html #messagesBtn").click(function(event){
				alert("clickMess");
				$(".navitem").removeClass("navItemSelected");
				$('#container').load('messages.html #container');
				$("#messagesBtn").addClass("navItemSelected");
			});
			$("#contactsBtn").click(function(event){
				$(".navitem").removeClass("navItemSelected");
				$('#container').load('contacts.html');
				$("#contactsBtn").addClass("navItemSelected");
		    });
			$("#encyclopediaBtn").click(function(event){
				$(".navitem").removeClass("navItemSelected");
				$('#container').load('encyclopedia.html #container');
				$("#encyclopediaBtn").addClass("navItemSelected");
		    });
	   });
