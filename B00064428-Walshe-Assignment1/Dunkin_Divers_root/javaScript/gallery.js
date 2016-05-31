
/* **************************************************************** *
 *     Daragh Walshe        	B00064428    		Oct. 2014       *
 *     Rich Web Developent      Assignment_01				        *
 * **************************************************************** */

/**************************************/
//globals
var creatureShow = false;
var diverShow = false;
var wreckShow = false;

var playing = false;
var currentSet = false;


/**************************************/
//jQuery widget init
$(document).ready(function() {

	$(function() {
		$("#selectable").selectable();
	});


	$(function() {
	  	$("#theGal").resizable();
	});

});


/*******************************************************************/
/*  fit to window  */
function fitToWindow() {
	//initial fitting image to div
	var picWidth = $("div#theGal").innerWidth() - 20;
	var picHeight = $("div#theGal").height() - 25;
	$("div#theGal img.rotate").css({"position": "relative",
									"width": picWidth,
									"height": picHeight,
									"padding": "10",
									"padding-bottom": "15"});
}

/*******************************************************************/
/*   Play slideshows  */

$(document).ready(function() {
	$("#leftGal button#button").click(function() {
		if(currentSet && !playing){
			// create the image rotator and rotate every 3 seconds
			setInterval("rotateImages()", 4000);
			playing = true;
			$("button#button").html("Pause");
			$("button#button").css({ "color": "red", "padding": "0.5em"}, 10);
			}
	});

});

/**************************************/
/*   Get selected slideshows  */
$(document).ready(function() {

	var index;
	var slideFrag;

	$( "#selectable" ).selectable({
		stop: function() {
			slideFrag = '';

			$( ".ui-selected", this ).each(function() {
		  		index = $( "#selectable li" ).index( this );
		  		//alert("u picked "  + ( index ) );
		  		if(index == 0){
					if(!currentSet){ currentSet = !currentSet; }
					if(!creatureShow){
						creatureShow = !creatureShow; //alert(creatureShow);
						if(creatureShow){$("#sBut1").css("background-color","red");}
						//build html fragment
						for(var i=1; i<7; i++){
							slideFrag += 	'<div';
							if(!currentSet){ slideFrag += 	'current'; }
							slideFrag +=    '>' +
											'<img src="images/images/creature' + i + '.jpg" alt="dive photo" class="rotate">' +
											'</div>';
							}
						}//end if not creatureShow
					}
		  		if(index == 1){
					if(!currentSet){ currentSet = !currentSet; }
					if(!diverShow){
						diverShow = !diverShow; //alert(diverShow);
						if(diverShow){$("#sBut2").css("background-color","red");}
						//build html fragment
						for(var i=1; i<7; i++){
							slideFrag += 	'<div';
							if(!currentSet){ slideFrag += 	'current'; }
							slideFrag +=    '>' +
											'<img src="images/images/diver' + i + '.jpg" alt="dive photo" class="rotate">' +
											'</div>';
							}
						}//end if not creatureShow
					}
		  		if(index == 2){
					if(!currentSet){ currentSet = !currentSet; }
					if(!wreckShow){
						wreckShow = !wreckShow; //alert(wreckShow);
						if(wreckShow){$("#sBut3").css("background-color","red");}
						//build html fragment
						for(var i=1; i<7; i++){
							slideFrag += 	'<div';
							if(!currentSet){ slideFrag += 	'current'; }
							slideFrag +=    '>' +
											'<img src="images/images/wreck' + i + '.jpg" alt="dive photo" class="rotate">' +
											'</div>';
							}
						}//end if not creatureShow
					}
			});
			$('#imgRotate div').html("");
			$('#imgRotate').append(slideFrag);
			fitToWindow();

		}//end stop func
	});

});
/*******************************************************************/
/*   image rotator  NOT MY CODE (mostly not)*/
function rotateImages() {

	if(playing){

		//fit image to div if it has been resized
		var picWidth = $("div#theGal").innerWidth() - 20;
		var picHeight = $("div#theGal").height() - 25;
		$("div#theGal img.rotate").css({"position": "relative","width": picWidth,
										"height": picHeight, "padding": "10",
										"padding-bottom": "15"});

		// get the current pic
		var oCurPhoto = $("#imgRotate div.current");

		// get the next pic
		var oNxtPhoto = oCurPhoto.next();

		// if this is last pic make next firstPic
		if (oNxtPhoto.length == 0)
		oNxtPhoto = $("#imgRotate div:first");

		// change classes on pic
		oCurPhoto.removeClass('current').addClass('previous');

		// start of with opacity 0, put it on top  and animate it up to visible
		oNxtPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1500,
		function() {
		// remove currents pic previous class
		oCurPhoto.removeClass('previous');
		});


	}//end if playing


	//Stop playing
	$("#leftGal button#button").click(function() {
		if(playing){
			playing = false;
			$("button#button").html("Play");
			$("button#button").css({ "color": "yellow", "padding": "0.5em"}, 10);
			}
	});


}




/**************************************/






