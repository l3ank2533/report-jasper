	
  /*configuration datepicker defaults */
    $.datepicker.setDefaults({
/*		  showOn: "both",
		  buttonImageOnly: true,
		  buttonImage: "gsb/images/icon/ico_calendar.png",*/
		  buttonText: "Calendar",
		  dateFormat: "dd/mm/yy",
		  changeMonth: true,
	      changeYear: true,
	      monthNamesShort: $.datepicker.regional["en"].monthNames
		});

	 
	/* 1) examples set datepicker normal case
	$( "#startDate" ).datepicker();
	*/
	
   /* 2) examples set date picker with current date 
	 	$("#startDate").datepicker().datepicker("setDate", new Date());
   */
	
	 /* 3) examples datepicker with between to
	 $( "#startDate" ).datepicker(
		     {
		      onClose: function( selectedDate ) {
		        $( "#endDate" ).datepicker( "option", "minDate", selectedDate );
		      }
		    });
		    $( "#endDate" ).datepicker({
		    	 setDate: new Date(),
		      onClose: function( selectedDate ) {
		        $( "#startDate" ).datepicker( "option", "maxDate", selectedDate );
		      }
		    });
	 */
    
    /* option
     * 
     *   MaxDate is Today >> $("#startDate").datepicker( "option", "maxDate", new Date() );
		 MinDate last 1 year >> $("#startDate").datepicker( "option", "minDate", "-1y" );
		 Set Today after init datepicker >> $("#startDate").datepicker("setDate", new Date());
     * 
     */
