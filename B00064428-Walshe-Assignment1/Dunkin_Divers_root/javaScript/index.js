
/* **************************************************************** *
 *     Daragh Walshe        	B00064428    		Oct. 2014       *
 *     Rich Web Developent      Assignment_01				        *
 * **************************************************************** */


// Generic image rotator
$(function() {
	// create the image rotator and rotate every 2 seconds
	setInterval("rotateImages()", 5000);
});

function rotateImages() {

	// get the current photo, ie within photoshow the current div
	var oCurPhoto = $("#imgRotate div.current");

	// get the next sibling to div.current, ie leaf
	var oNxtPhoto = oCurPhoto.next();

	// if there is no next photo, ie at 4th photo put nextPhoto = 1st photo in div
	if (oNxtPhoto.length == 0)
	oNxtPhoto = $("#imgRotate div:first");

	// remove the current photo and add the previous photo
	oCurPhoto.removeClass('current').addClass('previous');

	// set the css start of with opacity 0 so invisible, put it on top  and animate it up to visible
	// over a second
	oNxtPhoto.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 2000,
	function() {
	// remove currents photo previous class
	oCurPhoto.removeClass('previous');
	});
}



