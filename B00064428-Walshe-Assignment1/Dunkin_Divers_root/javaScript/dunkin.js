window.onload = startTheShow;

/* **************************************************************** *
 *     Daragh Walshe        	B00064428    		Oct. 2014       *
 *     Rich Web Developent      Assignment_01				        *
 * **************************************************************** */

//---------------------------------------------------
function startTheShow() {
	//alert("just testing the window");

	$( "#accordion" ).accordion({
		  heightStyle: "content",
		  collapsible: true
		});
	}//end startTheShow


//---------------------------------------------------
//navbar bubbles
$(document).ready(function() {
	//a variable to hold the original bubble size
	var oldSize;

	$("aside ol li a").mouseover(function(){
		oldSize = $(this).children(".navIcon").attr("width");

		$(this).children(".navIcon").animate({
			marginTop:("-=" +(oldSize*0.5)),
			marginLeft:("-=" +(oldSize*0.5)),
			width:(oldSize*2)},
			1000);
		});

	$("aside ol li a").mouseout(function(){
		$(this).children(".navIcon").animate({
			marginTop:("+=" +(oldSize*0.5)),
			marginLeft:("+=" +(oldSize*0.5)),
			width:(oldSize)},
			400);
		});
  });



//-----------------------------------------------
/*   Styling for nested lists on tabbed page   */
$(document).ready(function() {

	$("#diveLists > li").addClass("outerList");

	$("ul.innerList").addClass("innerUlList");

	$(".innerList > li").addClass("innerListItem");

	$("#listImg").addClass("listImg");

});


//---------------------------------------------------
//tabbed area Ajax loading
$(document).ready(function() {

	$( "#tabs" ).tabs({
		beforeLoad: function( event, ui ) {
			ui.jqXHR.error(function() {
				ui.panel.html(
					"<span class='fa fa-smile-o'></span>&nbsp;The funny thing is ...  <br>" +
					"There seems to be a problem with our server <br>" +
					"Please try again later" );
			});
		}
	});
});



//---------------------------------------------------
function processJSON(){
	//alert('testing processJSON 2');
	var jsonFile = "ajax/tripInfo.json";


	//get the json file
	$.getJSON(jsonFile, function(data) {

		//prevent duplicate entries on accordion open/close/open
		$('#tripInfo').empty();

		//loop through the object and pull the required data
		$.each(data, function(entryIndex, entry) {
			var tabContent = '';

			tabContent += '<h5><span class="fa fa-globe fa-fw"></span>&nbsp;<span class="blu">Location:</span> ' + entry['location'] + '<h5>';
			tabContent += '<p><span class="fa fa-calendar fa-fw"></span>&nbsp;<span class="blu">Date:</span> ' + entry['date'] + '</p>';
			tabContent += '<p><span class="fa fa-file-text-o fa-fw"></span>&nbsp;<span class="blu">Description:</span> ' + entry['description'] + '</p>';
			tabContent += '<p><span class="fa fa-money fa-fw"></span>&nbsp;<span class="blu">Price:</span> &euro;' + entry['price'] + '</p>';
			tabContent += '<hr>';

			//Add new information from json file
			$('#tripInfo').append(tabContent);
			$('#tripInfo p').css({"color": "white", "font-weight":"normal"});
			$('.blu').css({"color": "#75ABFF", "font-weight":"bold"});
		});
	});
}//end processJSON


$(document).ready(function() {
  	$("#accordion h3#trip").click(function(){
    	processJSON();
  		});
  });

//---------------------------------------------------
/****     tooltip code     ****/

$(document).ready(function() {
  	$("#tabs").mouseover(function(){
    	toolTipFunction();
  		});
  });

function toolTipFunction(){

	$(function() {
		$("#tabs p").mouseover(function(){
			//alert('testing bulb');
			$(this).children(".yellow").css({"color": "yellow"});
		});
		$("#tabs p").mouseout(function(){
			//alert('testing bulb');
			$(this).children(".yellow").css({"color": "white"});
		});
	});

	$(function() {
		$( "#tabs" ).tooltip({
			show: {
			effect: "puff",//effect: "slideDown",
			delay: 250
			},
			hide: {
			effect: "puff",
			delay: 250
			}
		});
	});

}//end toolTipFunction


$(document).ready(function() {
	$("#button").button();
	$("#button").button().css({"color": "yellow","font-size": "1em"});
});

//---------------------------------------------------
//style switcher
var badSight = true;

$(document).ready(function() {
	$("div#header button#styleButton").click(function(){
		if(badSight){
			$("#wrapper").animate({ "fontSize": "1.25em" }, 1000);
			$("#styleButton").css({ "color": "red"}, 1000);
			badSight = false;
			}else{
				$("#wrapper").animate({ "fontSize": "1.0em"}, 1000);
				$("#styleButton").css({ "color": "yellow"}, 1000);
				badSight = true;
				}

	});
});




















/***************************************************/
// Bubbles float up !!!!  keep this and work on
/***************************************************/
/*
//navbar bubbles
$(document).ready(function() {
	//a variable to hold the original bubble size
	var oldSize;
	//$("img.navIcon").mouseover(function(){
	$("aside ol li a").mouseover(function(){
		//oldSize = $(this).attr("width");
		oldSize = $(this).children(".navIcon").attr("width");
//alert("size: " + oldSize);
		//$(this).children(".navIcon").animate({ width: (oldSize*2),  }, 1000 );
		//$(this).children(".navIcon").animate({ left: "500" }, 1000, "swing");
		$(this).children(".navIcon").animate({marginTop:'-=50px', width:'+=50px'});
		});

	$("aside ol li a").mouseout(function(){
		$(this).children(".navIcon").animate({ width: oldSize }, 350 );
  		});

	$("img.navIcon").click(function(){
		$(this).children(".navIcon").hide( "puff", {percent: 120} );
  		});

  });
*/
/*********************************************************/









