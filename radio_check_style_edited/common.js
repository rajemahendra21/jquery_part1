/*------Global Properties------*/

var _html;
var _body;
var _this;
var _width;
var _height;

var _document = $(document);
var _window = $(window);



var _windowWidth = _window.width();
var _windowHeight = _window.height();

_window.load(windowloadHandler);
_document.ready(documentreadyHandler);
_window.resize(windowresizeHandler);	

/*--------- Event Handler ---------*/
function documentreadyHandler()
{
	_magnifierGlass();
	_miniHeader();
	
}
// embed a js in html
function loadJS(file) {
    // Grab the head element
    var head = document.getElementsByTagName('head')[0];
    // Create a script element
    var script = document.createElement('script');
    // Set the type
    script.type = 'text/javascript';
    // Set the source file
    script.src = 'js/jquery.inview.js';
    // Add the script element to the head
    head.appendChild(script);
}
$(function(){
	$('.register_shortlist').live("click", function(){
		$('.userInfo1').trigger('click');
	});
	$('.login_shortlist').live("click", function(){
		$('.userInfo').trigger('click');
	});
	$(".modify_search .product_gallery").jCarouselLite({ btnNext: ".next_button", btnPrev: ".prev_button", visible: 9, circular: false, vertical: false });
	$(".modify_search .product_gallery li").each(function(){
		$(this).hover(function(){
			$(this).css('overflow','visible');
			$(".modify_search").css('z-index','18');
			$(".hidden_div").show();
			//$('.modify_search .product_gallery').css('overflow','visible');
		},function(){
			$(this).css('overflow','hidden');
			$(".modify_search").css('z-index','0');
			$(".hidden_div").hide();
			//$('.modify_search .product_gallery').css('overflow','hidden');
		});
	});
	
	//
	$('.search_button').click(function(){
		alert($('.search_product input').val());
	});

//
$(".modify_search .product_gallery li").hover(function(){
	var off_left = $(this).offset().left;
	//alert('li' + off_left);
	var off_cont_left = $(".modify_search .product_gallery").offset().left ;
	//alert('product_gallery' + off_cont_left);
	var off_cont_right = $(".modify_search .product_gallery").offset().left + $(".modify_search .product_gallery").width() - 104;
	//alert('product_gallery width' + off_cont_right);

	if(off_left == off_cont_left){
		//$(".modify_search .prev_button").trigger('click');
		$(this).find('.hidden_div').css('left','-6px');
		$(this).find('.hidden_container').css('background-position','39px 0');
	}
	else if(off_left == off_cont_right){
		//$(".modify_search .next_button").trigger('click');
		$(this).find('.hidden_div').css('right','-19px').css('left','auto');
		$(this).find('.hidden_container').css('background-position','219px 0');
	}
	else{}
},
function(){
	$(this).find('.hidden_div').css('right','we').css('left','ew');
	$(this).find('.hidden_container').css('background-position','wew');
});
$('.plus_icon').click(function(){
	$('.modify_search .data').slideDown(400);
	$(this).hide();
	$('.minus_icon').show();
	$(".modify_search .product_gallery").jCarouselLite({ btnNext: ".next_button", btnPrev: ".prev_button", visible: 9, circular: false, vertical: false });
});
$('.minus_icon').click(function(){
	$('.modify_search .data').slideUp(400);
	$(this).hide();
	$('.plus_icon').show();
});
$('.plus_icon2').click(function(){
	$(this).parent().parent().next().slideDown(400);
	$(this).hide();
	$(this).next().show();
});
$('.minus_icon2').click(function(){
	$(this).parent().parent().next().slideUp(400);
	$(this).hide();
	$(this).prev().show();
});
//$('.thumb_close').click(function(){
//	$(this).parent().remove();
//});
$('.thumb_close').click(function(i) {

$(this).parent().delay(200*i).fadeOut(1000);
$(this).parent().animate({
"opacity" : "0"
},{
"complete" : function() {
$(this).remove();
if($(".total_result_div")[0])
{
$(".total_result_div").html($('.listing_grid_thumb_compare').length);
var active_add_compare_length = $('.active_add_to_compare').length;
$(".compare_result_div").html(active_add_compare_length);
if(active_add_compare_length >= 2)
{
$(".inactive_compare").hide();
$(".active_compare").show();
}
else
{
$(".inactive_compare").show();
$(".active_compare").hide();
}
}
else
{

}
}
});

});
//add new browse remove thumbnail
$('.browse .delete').click(function(){
					if($(this).next().find('li span').hasClass('active')){
						$(this).next().find('li span.active').parent().remove();						
						alert('thumbnail removed');			
					}
					else
					{
						alert('no thumbnail selected');						
					}					
				});
//add new property functions
$('.submit_input .delete').click(function(){
					$(this).parent().remove();
				})
                $('#type_owner_submit').click(function() {
					var myInput = $('#type_ownership').val();
					var Htmltext ="<li><span>"+ myInput +"</span><a href=\"javascript:void();\" class=\"delete\">Delete</a></li>";
						if(myInput == 'Type here'){
							alert(myInput);
							}
						else
						{
							//myInput.value += 'box1 ';
							//alert('1');
							alert(myInput);
							$('#ownership_add').prepend(Htmltext).find('.delete').bind("click",function(e) {
								//alert("removing");
								$(this).parent().remove();
							});;
						}
					});
					//occu cost
					$('#type_occu_submit').click(function() {
					var myInput = $('#type_occu').val();
					var Htmltext ="<li><span>"+ myInput +"</span><a href=\"javascript:void();\" class=\"delete\">Delete</a></li>";
						if(myInput == 'Type here'){
							alert(myInput);
							}
						else
						{
							//myInput.value += 'box1 ';
							//alert('1');
							alert(myInput);
							$('#occu_add').prepend(Htmltext).find('.delete').bind("click",function(e) {
								//alert("removing");
								$(this).parent().remove();
							});;
						}
					});
});
function windowloadHandler()
{
	
	_html = $("html");
	_body = $("body");
	
	$(".loaderoverlay").hide();
	_width = _window.width();
	_height = _window.height();
	
	/*-------Global Css Styling----*/
	var _lastBgOff = $('.login_box ul li:last-child, .navigation ul li:last-child, .topLinks ul li:last-child, .menu_container ul li:last-child, .propery_synopsis ul:last, .totalCount h3:last');
	
	_lastBgOff.css({'background':'none','padding-right':'0'});
	
	$('.button_wrap ul li:first-child').css({'padding-left':'0'});
	
	$('.buttons_gird ul li:first-child, .buttons_gird ul li:nth-child(4), .sale_button ul li:first-child, .sale_button ul li:nth-child(4)').css({'margin-left':'0'});
	$('.footer ul li:first').css({'padding-left':'0'});	
	$('.map_records ul li p:first-child').css({'width':'110px'});
	
	$('.map_list .listing:nth-child(2)').css({'width':'auto'});
	/*-------Global Css End Styling----*/
	
	/*------Global Function Plugin Parameter----*/	
	_magnifierGlass();		
	$(".background").fullBg();
	$('input:radio').stylecheck();
	$('input:checkbox').stylecheck();	
	selectBox_wrap();
	/*------End Global Function----*/
	
	/*--------Carsoual Start here--------*/
	var _floorPlan = $('.product_plan:eq(0) ul li').length
	var _architPlan = $('.product_plan:eq(1) ul li').length
	var _propertyPlan = $('.product_plan:last ul li').length
	
	carsoual_Gallaer_lessthanThree(_floorPlan,'.floor_prev','.floor_next');
	carsoual_Gallaer_lessthanThree(_architPlan,'.archi_prev','.archi_next');
	carsoual_Gallaer_lessthanThree(_propertyPlan,'.pro_prev','.pro_next');	
	
	carsoual_Gallery('.floor_flow','.floor_prev','.floor_next',5);
	carsoual_Gallery('.architects_plan','.archi_prev','.archi_next',5);
	carsoual_Gallery('.property_plan','.pro_prev','.pro_next',5);
	carsoual_Gallery('.nearest_container','.org_prev_button','.org_next_button',3);
	
	carsoual_Gallery('.pdfCity_wrap','.pdfCity_prev','.pdfCity_next',3);
	carsoual_Gallery('.pdfMicro_wrap','.pdfMicro_prev','.pdfMicro_next',3);
	carsoual_Gallery('.pdfTheme_wrap','.pdfTheme_prev','.pdfTheme_next',3);
	
	/*--------Carsoual ends here--------*/
	$(".nearest_container_left").jCarouselLite({ visible: 1, circular: true, vertical: false,scroll:1,auto:1000,speed:1000 });
	
	//property_menuTab('.menu_container ul li a', '.product_information');	
	property_menuTab('.viewSearchBy ul li', '.product_listing_map');	
	 
	$(".product_information").not(':first').hide();
	$(".product_listing_map").not(':first').hide();
	
	/*---------Scroll Classname/Paramerter Start here--- function is ScrollBar------*/
	ScrollBar('.container_scroll,.scroll_cont');
	ScrollBar('.map_outerWrap');
	/*---------Scroll Classname/Paramerter Ends here---------*/
	
	
	/*--------External Pages using ajax Start here--------*/
	
	
	$('.container').append("<a href='javascript:void(0);' class='scroll_top' style='display:none;'><img src='images/scroll_top.png'></a>");
	//$(function(){
	var container_left = $('.container').offset().left;
	var container_left_total = container_left + 980;
	//alert(container_left_total);
	$('.scroll_top').css('left',container_left_total);
	
	$('.scroll_top').click(function(){
		$('html , body').animate({'scrollTop':'0'},1200);
	});
	
	//var bottom_bar = $('.footer_wrapper').offset().top;
  	//alert(bottom_bar);
	//});
	/*$('.scroll_top').scrollToFixed( {
            bottom: 0,
            limit: $('.footer_wrapper').offset().top,
            preFixed: function() { $(this).css('color', 'blue'); },
            postFixed: function() { $(this).css('color', ''); },
        });*/
	$(window).scroll(function() {
		
	//var footer_top = $('.footer_wrapper').offset().top;
	var bottom_bar = $('.footer_wrapper').offset().top;
  	//alert(footer_top);
		
					if ($(this).scrollTop() > 400) { //use `this`, not `document`
						$('.scroll_top').css({
							'display': 'block'
						});
					}					
					else
					{
						$('.scroll_top').css({
							'display': 'none'
						});
					}
	});
	$("<div class='lightBox_userInfo'></div>").insertBefore('.wrapper');	
	$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
	$(".userInfo").click(function(e){		
		$(".inner_userInfo").empty();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").eq(index).show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
		  }		  		 
	  });
	   e.preventDefault();
  });
  $(".userInfo1").click(function(e){		
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		//var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
		  }		  		 
	  });
	   e.preventDefault();
  });
  $(".userInfo2").click(function(e){		
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		//var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
		  }		  		 
	  });
	   e.preventDefault();
  });
  //contact pop up
  $(".thumb_buttons_row .contact").click(function(e){	
  		$('html , body').animate({'scrollTop':'0'},1200);	
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		//var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
		  }		  		 
	  });
	   e.preventDefault();
  });
  //my shortlist pop up
  //contact pop up
  $("#save_shortlist_btn").click(function(e){	
  		$('html , body').animate({'scrollTop':'0'},1200);	
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		var shortlist_thank_html = $('.shortlist_hidden_thank').html();
		$(".inner_userInfo").show().html(shortlist_thank_html);
		useroverLay();

	   e.preventDefault();
  });
  //emi pop up
  	
  $(".emi_cal_link").click(function(e){	
  		$('html , body').animate({'scrollTop':'0'},1200);	
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		//var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
			 
			
		  }
		  
	  });
	   e.preventDefault();
  });
  //load js file for back to top button
	$('.footer_wrapper').bind('inview', function (event, visible) {
	  if (visible == true) {
		// element is now visible in the viewport
		//alert('i m visible');
		$('.scroll_top').css({
		'bottom': '191px'
		});
	  } else {
		// element has gone out of viewport
		//alert('i m invisible');
		$('.scroll_top').css({
		'bottom': '0'
		});
	  }
	});
	loadJS();
  //share via email pop up
  $(".thumb_buttons_row .email_icon").click(function(e){	
  		$('html , body').animate({'scrollTop':'0'},1200);	
		$(".inner_userInfo").remove();
		$(".lightBox_userInfo").wrapInner("<div class='inner_userInfo'></div>");
		$(".lightBox_userInfo").show();
		$(".inner_userInfo").hide();
		
		var url = $(this).attr('href');
		//var index = $(".userInfo").index(this);		
		$.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  
			  $(".inner_userInfo").show().html(data);
			  useroverLay();
			 $('input:radio').stylecheck();
			 $('input:checkbox').stylecheck();
			 selectBox_wrap();
		  }		  		 
	  });
	   e.preventDefault();
  });
	/*--------External Pages using ajax Ends here--------*/
	function useroverLay()
	{
		$(".overlayDiv").show();
		$(".login_wrap").append("<div class='close_button'></div>");
	}
	
	/*---------Lightbox Classname/Parameter --- Function is _galleryLightbox------*/
	_galleryLightbox(".productClick");
	/*----------My Profile Start here -----------*/	
	
	/*-------My Profile Ajax Start here ---------*/
	
	$(".myprofileNav ul li a").click(function(){
	{
		  var index = $(".myprofileNav ul li a").index(this);
		  
		  var url = $(this).attr('href');
		  $.ajax({
		  url: url,
		  cache:false,
		  method: 'GET',
		  success: function (data) {
			  $(".product_information").eq(index).html(data);
			  $(".product_information").css({'display':'none'});
			  $(".product_information").eq(index).css({'display':'block'});
			  $('input:radio').stylecheck();
			  $('input:checkbox').stylecheck();
			  selectBox_wrap();
		  }
	 	 });
		
		}
	});	
	$(".myprofileNav ul li a").eq(0).trigger('click');
	/*-------My Profile Ajax Ends here ---------*/	

	/*--------Login Radio button start here--------*/
	_loginTab('.individual_Event');
	_loginTab('.agent_Event');
	
	

	$(".regi_now").click(function(){
		$(".register_details").show();
	});
	$(".hidden_fields").hide();
	
	$('.agreeEvent').live("click", function() {
    if ($(this).hasClass("label-unchecked")) {
       $(".hidden_fields").hide();
    }
    else {
        $(".hidden_fields").show();
    }
	/*--------Login Radio button ends--------*/
});
/*add to compare code*/
$(".total_result_div").html($('.listing_grid_thumb_compare').length);
if($('.listing_grid_thumb_compare').length)
{
alert('Total Grid ' + $('.listing_grid_thumb_compare').length);
}
$(".btn_add_to_compare").live("click", function() {

$(this).toggleClass('active_add_to_compare');
var active_add_compare_length = $('.active_add_to_compare').length;
alert("Add to compare selected button count " + active_add_compare_length);
$(".compare_result_div").html(active_add_compare_length);
if(active_add_compare_length >= 2)
{
$(".inactive_compare").hide();
$(".active_compare").show();
}
else
{
$(".inactive_compare").show();
$(".active_compare").hide();
}

});
/*add to compare code ends*/
/*add to compare code map starts*/
$(".btn_add_to_compare_map").live("click", function() {
	$(this).toggleClass('active_btn_add_to_compare_map');
	alert('alert');
});
/*add to compare code map ends*/
/*--------compare pop box--------*/
$('.compare_check').live("click", function() {
if ($(this).hasClass("label-checked")) {
$(this).parent().addClass('compare_border_active');
}
else {
$(this).parent().removeClass('compare_border_active');
}
});

$('.compare_remove').live("click", function(i) {
var saved_thumb = $(".compare_pop .compare_border_active");
//$(saved_thumb).remove();
$(saved_thumb).delay(200*i).fadeOut(1000);
$(saved_thumb).animate({
"opacity" : "0"
},{
"complete" : function() {
$(saved_thumb).remove();
alert("No. of properties for compare " + $('.compare_thumbs').length);

if($('.compare_thumbs').length <= 4 && $('.compare_thumbs').length >= 2)
{
alert("Compare button active");
$('.compare_button_disabled').hide();
$('.compare_button').show();
}
else if($('.compare_thumbs').length == 1)
{
alert('close popup');
$(".compare_wrap .close_button").trigger("click");
}
else
{
alert("Compare button inactive");
$('.compare_button_disabled').show();
$('.compare_button').hide();
}
}
});

});

//browse1 thumb red border
$(function(){
	$('#browse_add .label-checked').parent().find('span').addClass('active');

});

$('#browse_add label').mousedown(function(){
		$('#browse_add li span').removeClass('active');	
		$(this).parent().find('span').addClass('active');	
});
$("#BrowserHidden").change(function (){
       var fileName = $(this).val();
       alert(fileName);
	   $(this).parent().find('span.upload').hide();
	   $(this).parent().find('a.upload').show();
});
$("#BrowserHidden2").change(function (){
       var fileName = $(this).val();
       alert(fileName);
	   $(this).parent().find('span.upload').hide();
	   $(this).parent().find('a.upload').show();
});
//browse2 thumb red border
$(function(){
	$('#browse_add2 .label-checked').parent().find('span').addClass('active');

});

$('#browse_add2 label').mousedown(function(){
		$('#browse_add2 li span').removeClass('active');	
		$(this).parent().find('span').addClass('active');	
});
$(".slider .add_gallery").jCarouselLite({ btnNext: ".next_button", btnPrev: ".prev_button", visible: 5, circular: false, vertical: false });

	
}
/*$('#product_handpicked_gallery').cycle({
	fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	//timeout: 100,
	pause:  1 
});*/
function windowresizeHandler()
{
	documentreadyHandler();
	$(".background").fullBg();				
}

/*---------------Login Show/Hide Tab Start here---------------*/

function _loginTab(_clickEvent)
{
	$(_clickEvent).live('click',function(){		
		if(_clickEvent=='.individual_Event')
		{
			$(".agentWrap").hide();
			$(".indWrap").show();
			$('.captcha_wrap').removeccClass('captcha_wrap2');
		}
		else 
		{
			$(".agentWrap").show();
			$(".indWrap").hide();
			$('.captcha_wrap').addClass('captcha_wrap2')
		}
	});
	
}
/*---------------Login Show/Hide Tab Ends here---------------*/

/*---------------Mini Header Start here---------------*/
function _miniHeader()
{
	var hideElements = $(".menu_product, .login_wrapper, .topLinks");
	$(window).scroll(function(){	
				
		if($(document).scrollTop()==0)
		{
			showPageElements();	
		}
		else 
		{
			//hidePageElements();
		}
		
	});	
		
	function showPageElements()
	{
		$(".header_wrapper").removeClass('mini_header_wrap');
			$('.navigation_wrapper').css('background','#E97716');
			hideElements.css('display','block');
			$(".header .logo").css('padding-top','25px');
			$(".logo img").css('width','auto');
			$(".selectBox_Location").css('top','-55px');
			$(".navigation").removeClass('menuNav');
	}
	function hidePageElements()
	{
		$(".header_wrapper").addClass('mini_header_wrap');
			$('.navigation_wrapper').css('background','none');
			hideElements.css('display','none');
			$(".logo img").css('width','250px');
			$(".header .logo").css('padding-top','5px');
			$(".selectBox_Location").css('top','-27px');
			$(".navigation").addClass('menuNav');
	}
	
}
/*---------------Mini Header Ends here---------------*/

/*-----------------Scroll Global function Start here-----------------*/

function ScrollBar(scrollEvent)
{
	$(scrollEvent).jScrollPane({showArrows: false, animateScroll: true, speed:500, autoReinitialise: true, verticalDragMinHeight: 60,verticalDragMaxHeight: 60,horizontalDragMinWidth: 27,	horizontalDragMaxWidth: 27});
}
/*-----------------Scroll Global function Ends here-----------------*/

/*-----------------Carsoual Global function Start here-----------------*/

function carsoual_Gallery(product_plan,plan_prev,plan_next,numGal)
{
	$(product_plan).jCarouselLite({ btnNext: plan_next, btnPrev: plan_prev, visible: numGal, circular: false, vertical: false });
}
function carsoual_Gallaer_lessthanThree(CounterValue,_plan_prev,_plan_next)
{
	if(CounterValue<=5)
	{
		$(_plan_prev).hide();
		$(_plan_next).hide();		
	}
	else
	{
		$(_plan_prev).show();
		$(_plan_prev).show();	
	}
}

/*-----------------Carsoual Global function Ends here-----------------*/




/*-----------------LighBox Global function Start here-----------------*/

function _galleryLightbox(_productEvent)
{	
	var _galleryContainer = $(".lightBox_Product");
	var _disClaimerText = $(".disclaimer_text");	
	var _gallerySection = $(".inner_lightbox");
	var _lightboxWidth = $(".lightBox_Product").children().width();
	
	$("<div class='overlayDiv'></div>").insertBefore('.wrapper');
	$(".overlayDiv").hide();
	
	$(document).keyup(function(e) { if (e.keyCode == 27) { $(".overlayDiv, .lightBox_Product, .lightBox_userInfo").hide();} });
	$(".overlayDiv, .close_button").live('click',function(){$(".overlayDiv, .lightBox_Product, .lightBox_userInfo").hide();});
	
	$(_productEvent).click(function(){
		
		$(".overlayDiv").show();
		_body.append(_galleryContainer);		
		_galleryContainer.wrapInner("<div class='inner_lightbox'></div>");
		$(".inner_lightbox").css({'width':_lightboxWidth,'margin':'0 auto','position':'relative'});	
		$(".inner_lightbox").append("<div class='close_button'></div><div class='zoom'>Rollover to zoom</div>");
		$('html , body').animate({'scrollTop':$(this).offset().top-63},1200);	
		_disClaimerText.css({'bottom':'0px'}).hide(0)
		_galleryContainer.hide();		
		var i = $(_productEvent).index(this);
		_disClaimerText.show().eq(i).animate({'bottom':'-32px'},1200);
		_galleryContainer.eq(i).fadeIn(300);
	});
	
}

/*-----------------LighBox Global function Ends here-----------------*/

/*-----------------Magnifier Glass Start here-----------------*/

function _magnifierGlass()
{
	var native_width = 0;
	var native_height = 0;

	$(".magnify").mousemove(function(e){
		
		if(!native_width && !native_height)
		{
			var image_object = new Image();
			image_object.src = $(".small").attr("src");			
			native_width = image_object.width;			
			native_height = image_object.height;	
		}
		else
		{
			var magnify_offset = $(this).offset();
			var mx = e.pageX - magnify_offset.left;
			var my = e.pageY - magnify_offset.top;

			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$(".large").show();
			}
			else
			{
				$(".large").hide();
			}
			if($(".large").is(":visible"))
			{
				var rx = Math.floor(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
				var ry = Math.floor(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
				
				var bgp = rx + "px " + ry + "px";
				
				var px = mx - $(".large").width()/2;
				var py = my - $(".large").height()/2;
				
				$(".large").css({left: px, top: py, backgroundPosition: bgp});
			}
		}
	})
}
/*-----------------Magnifier Glass Ends here-----------------*/


/*-----------------Tabbing Start here-----------------*/
function property_menuTab(_tabEvent, _contentEvent)
{
	$(_tabEvent).trigger('click');
	$(_tabEvent).click(function(e){		
		$('html , body').animate({'scrollTop':$(this).offset().top-170},1200);	
		$(_contentEvent).css('display','none');
		$(_tabEvent).removeClass('sel');
		var index = $(_tabEvent).index(this);	
		$(_contentEvent).eq(index).css('display','block');
		$(this).addClass('sel');
		e.preventDefault();
		
	});	
}
/*-----------------Tabbing Ends here-----------------*/

/*-----------------Select Box Start here-----------------*/
function selectBox_wrap()
{
	//if($(document).find('select').hasClass('no_style')){
		
		//}
		//else{
			// Iterate over each select element
			$('select').not('.no_style').each(function() {
			
			// Cache the number of options
			var $this = $(this),
			numberOfOptions = $(this).children('option').length;
			
			// Hides the select element
			$this.addClass('s-hidden');
			
			// Wrap the select element in a div
			$this.wrap('<div class="select"></div>');
			
			// Insert a styled div to sit over the top of the hidden select element
			$this.after('<div class="styledSelect"></div>');
			
			// Cache the styled div
			var $styledSelect = $this.next('div.styledSelect');
			
			// Show the first select option in the styled div
			$styledSelect.text($this.children('option').eq(0).text());
			
			// Insert an unordered list after the styled div and also cache the list
			var $list = $('<ul />', {
			'class': 'options'
			}).insertAfter($styledSelect);
			
			// Insert a list item into the unordered list for each select option
			for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
			}).appendTo($list);
			}
			
			// Cache the list items
			var $listItems = $list.children('li');
			
			// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
			$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.styledSelect.active').each(function() {
				$(this).removeClass('active').next('ul.options').hide();
				$(this).parent().removeClass('active1').next('ul.options').hide();
			});
			$(this).toggleClass('active').next('ul.options').toggle();			
			//$(this).parent().toggleClass('active1').next('ul.options').toggle();
			$(this).parent().addClass('active1').next('ul.options').hide();
			});
			
			
			// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
			// Updates the select element to have the value of the equivalent option
			$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			//$styledSelect.parent().text($(this).text()).removeClass('active1');
			$this.val($(this).attr('rel'));
			$list.hide();
			//alert($('.SearchBox_Location .styledSelect').text());
			alert($this.val())
			/* alert($this.val()); Uncomment this for demonstration! */
			});
			
			// Hides the unordered list when clicking outside of it
			$(document).click(function() {
			$styledSelect.removeClass('active');
			$styledSelect.parent().removeClass('active1');
			$list.hide();
			});
			
			});
		//}
}
/*-----------------Select Box Ends here-----------------*/
$(function(){
	/*$("table").on("click", ".close_compare", function ( event ) {
							// Get index of parent TD among its siblings (add one for nth-child)
							var ndx = $(this).parent().parent().index() + 1;
							alert(ndx);
							// Find all TD elements with the same index
							$("td", event.delegateTarget).remove(":nth-child(" + ndx + ")");
						});
						//
$("tr").each(function() {
    $(this).filter("td:eq(2)").remove();
});
					*/
	
$('.close_compare1').click(function(i) {
		$(this).parent().parent().delay(200*i).fadeOut(1000);
		$('.compare_col_1').delay(200*i).fadeOut(1000);
		$(this).parent().parent().animate({
					"opacity" : "0"},
					{
					"complete" : function() {
						//$(this).remove();
						$('.compare_col_1').remove();
					}
		});
});
$('.close_compare2').click(function(i) {
		$(this).parent().parent().delay(200*i).fadeOut(1000);
		$('.compare_col_2').delay(200*i).fadeOut(1000);
		$(this).parent().parent().animate({
					"opacity" : "0"},
					{
					"complete" : function() {
						//$(this).remove();
						$('.compare_col_2').remove();
					}
		});
});
$('.close_compare3').click(function(i) {
		$(this).parent().parent().delay(200*i).fadeOut(1000);
		$('.compare_col_3').delay(200*i).fadeOut(1000);
		$(this).parent().parent().animate({
					"opacity" : "0"},
					{
					"complete" : function() {
						//$(this).remove();
						$('.compare_col_3').remove();
					}
		});
});
$('.close_compare4').click(function(i) {
		$(this).parent().parent().delay(200*i).fadeOut(1000);
		$('.compare_col_4').delay(200*i).fadeOut(1000);
		$(this).parent().parent().animate({
					"opacity" : "0"},
					{
					"complete" : function() {
						//$(this).remove();
						$('.compare_col_4').remove();
					}
		});
});

	$('#info').hover(function(){
		$('.top_info').show();
	},function(){
		$('.top_info').hide();
	});
	//area conversion
	$(".area_arrow_link").click(function(e){
							 e.stopPropagation();
							 $(this).next(".other_option").show();
						});
						
						$(document).click(function(e) {
						   $(".other_option").hide();
						});
						
						$(".min_max_rate_unit li").click(function(){
							
						//add commas
					     function addCommas(nStr)
							{
								nStr += '';
								x = nStr.split('.');
								x1 = x[0];
								x2 = x.length > 1 ? '.' + x[1] : '';
								var rgx = /(\d+)(\d{3})/;
								while (rgx.test(x1)) {
									x1 = x1.replace(rgx, '$1' + ',' + '$2');
								}
								return x1 + x2;
							}		
							
						 var area_min_value = $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_min_value").html();
						 var area_max_value = $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_max_value").html();
						 var unit_in_word =  $(this).parent().parent().parent().parent().parent().parent().parent().find(".unit_in_word").html();
						 var unit_to_convert =  $(this).find("span").html();
						 var min_rate = $(this).parent().parent().parent().parent().parent().parent().parent().find(".min_rate").html();
						     min_rate = min_rate.replace(/\,/g,''); 

						 var max_rate = $(this).parent().parent().parent().parent().parent().parent().parent().find(".max_rate").html();
						     max_rate = max_rate.replace(/\,/g,''); 
						 
						 if( unit_in_word == unit_to_convert)
						 {
						 }
						 else
						 {
							 //for Sq. Ft conversion
							 if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Yards'))
							 {
								 //for min value
								 area_min_value = area_min_value * 0.111111;
								 area_min_value = parseFloat(Math.round(area_min_value * 100) / 100).toFixed(2);
								 
								 //for max value
								 area_max_value = area_max_value * 0.111111;
								 area_max_value = parseFloat(Math.round(area_max_value * 100) / 100).toFixed(2);

								 //for rate
								 min_rate = parseFloat(min_rate) * 1000;
								 max_rate = parseFloat(max_rate) * 1000;

								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_min_value").html(area_min_value);
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_max_value").html(area_max_value);
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".min_rate").html(addCommas(min_rate));
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".max_rate").html(addCommas(max_rate));
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'yard' + 'area_min_value - ' + area_min_value +'area_max_value - ' +  area_max_value);
								 
							 }
							 else if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Meter'))
							 {
								 //for min value
								 area_min_value = area_min_value * 0.092903;
								 area_min_value = parseFloat(Math.round(area_min_value * 100) / 100).toFixed(2);
								 
								 //for max value
								 area_max_value = area_max_value * 0.092903;
								 area_max_value = parseFloat(Math.round(area_max_value * 100) / 100).toFixed(2);
								 
								 //for rate
								 min_rate = parseFloat(min_rate) * 1000;
								 max_rate = parseFloat(max_rate) * 1000;
								 
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_min_value").html(area_min_value);
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".area_max_value").html(area_max_value);
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".min_rate").html(addCommas(min_rate));
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".max_rate").html(addCommas(max_rate));
								 $(this).parent().parent().parent().parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'meter' + 'area_min_value - ' + area_min_value + 'area_min_value - ' +area_min_value);
							 }
							 
						 }
						});
						//
						$(".unit_amount li").click(function(){
							
						//add commas
					     function addCommas(nStr)
							{
								nStr += '';
								x = nStr.split('.');
								x1 = x[0];
								x2 = x.length > 1 ? '.' + x[1] : '';
								var rgx = /(\d+)(\d{3})/;
								while (rgx.test(x1)) {
									x1 = x1.replace(rgx, '$1' + ',' + '$2');
								}
								return x1 + x2;
							}		
							
						 var area_value = $(this).parent().parent().parent().parent().find(".area_value").html();
						 area_value = area_value.replace(/\,/g,''); 
						 var unit_in_word =  $(this).parent().parent().parent().parent().find(".unit_in_word").html();
						 var unit_to_convert =  $(this).find("span").html();
						 if( unit_in_word == unit_to_convert)
						 {
						 }
						 else
						 {
							 //for Sq. Ft conversion
							 if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Yards'))
							 {
								 area_value = area_value * 0.111111;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 $(this).parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert('yard - ' + area_value);
								 
							 }
							 else if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Meter'))
							 {
								 //for min value
								 area_value = area_value * 0.092903;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 $(this).parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert('meter - ' + area_value);
							 }
							 
						 }
						});
						//compare converter
						$(".unit_amount2 li").click(function(){
							
						//add commas
					     function addCommas(nStr)
							{
								nStr += '';
								x = nStr.split('.');
								x1 = x[0];
								x2 = x.length > 1 ? '.' + x[1] : '';
								var rgx = /(\d+)(\d{3})/;
								while (rgx.test(x1)) {
									x1 = x1.replace(rgx, '$1' + ',' + '$2');
								}
								return x1 + x2;
							}		
							
						 var area_value = $(this).parent().parent().parent().parent().next().find(".area_value").html();
						 area_value = area_value.replace(/\,/g,''); 
						 var unit_in_word =  $(this).parent().parent().parent().parent().find(".unit_in_word").html();
						 var unit_to_convert =  $(this).find("span").html();
						 if( unit_in_word == unit_to_convert)
						 {
						 }
						 else
						 {
							 //for Sq. Ft conversion
							 if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Yards'))
							 {
								 area_value = area_value * 0.111111;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 $(this).parent().parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert('yard - ' + area_value);
								 
							 }
							 else if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Meter'))
							 {
								 //for min value
								 area_value = area_value * 0.092903;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 $(this).parent().parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert('meter - ' + area_value);
							 }
							 
						 }
						});
						// min max in single line code starts
						$(".min_max_rate_unit2 li").click(function(){
							
						//add commas
					     function addCommas(nStr)
							{
								nStr += '';
								x = nStr.split('.');
								x1 = x[0];
								x2 = x.length > 1 ? '.' + x[1] : '';
								var rgx = /(\d+)(\d{3})/;
								while (rgx.test(x1)) {
									x1 = x1.replace(rgx, '$1' + ',' + '$2');
								}
								return x1 + x2;
							}		
							
						 var area_min_value = $(this).parent().parent().parent().parent().find(".area_min_value").html();
						 var area_max_value = $(this).parent().parent().parent().parent().find(".area_max_value").html();
						 var unit_in_word =  $(this).parent().parent().parent().parent().find(".unit_in_word").html();
						 var unit_to_convert =  $(this).find("span").html();
						
						 if( unit_in_word == unit_to_convert)
						 {
						 }
						 else
						 {
							 //for Sq. Ft conversion
							 if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Yards'))
							 {
								 //for min value
								 area_min_value = area_min_value * 0.111111;
								 area_min_value = parseFloat(Math.round(area_min_value * 100) / 100).toFixed(2);
								 
								 //for max value
								 area_max_value = area_max_value * 0.111111;
								 area_max_value = parseFloat(Math.round(area_max_value * 100) / 100).toFixed(2);

								 $(this).parent().parent().parent().parent().find(".area_min_value").html(addCommas(area_min_value));
								 $(this).parent().parent().parent().parent().find(".area_max_value").html(addCommas(area_max_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'yard' + 'area_min_value - ' + area_min_value +'area_max_value - ' +  area_max_value);
								 
							 }
							 else if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Meter'))
							 {
								 //for min value
								 area_min_value = area_min_value * 0.092903;
								 area_min_value = parseFloat(Math.round(area_min_value * 100) / 100).toFixed(2);
								 
								 //for max value
								 area_max_value = area_max_value * 0.092903;
								 area_max_value = parseFloat(Math.round(area_max_value * 100) / 100).toFixed(2);
								 
								 $(this).parent().parent().parent().parent().find(".area_min_value").html(area_min_value);
								 $(this).parent().parent().parent().parent().find(".area_max_value").html(area_max_value);
								 $(this).parent().parent().parent().parent().find(".area_min_value").html(addCommas(area_min_value));
								 $(this).parent().parent().parent().parent().find(".area_max_value").html(addCommas(area_max_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'meter' + 'area_min_value - ' + area_min_value + 'area_min_value - ' +area_min_value);
							 }
							 
						 }
						});
						// one rate in single line code starts
						$(".min_max_rate_unit3 li").click(function(){
							
						//add commas
					     function addCommas(nStr)
							{
								nStr += '';
								x = nStr.split('.');
								x1 = x[0];
								x2 = x.length > 1 ? '.' + x[1] : '';
								var rgx = /(\d+)(\d{3})/;
								while (rgx.test(x1)) {
									x1 = x1.replace(rgx, '$1' + ',' + '$2');
								}
								return x1 + x2;
							}		
							
						 var area_value = $(this).parent().parent().parent().parent().find(".area_value").html();
						 var unit_in_word =  $(this).parent().parent().parent().parent().find(".unit_in_word").html();
						 var unit_to_convert =  $(this).find("span").html();
						
						 if( unit_in_word == unit_to_convert)
						 {
						 }
						 else
						 {
							 //for Sq. Ft conversion
							 if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Yards'))
							 {
								 //for min value
								 area_value = area_value * 0.111111;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 

								 $(this).parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'yard' + 'area_value - ' + area_value);
								 
							 }
							 else if((unit_in_word == 'Sq. ft') && (unit_to_convert == 'Sq. Meter'))
							 {
								 //for min value
								 area_value = area_value * 0.092903;
								 area_value = parseFloat(Math.round(area_value * 100) / 100).toFixed(2);
								 
								 
								 $(this).parent().parent().parent().parent().find(".area_value").html(area_value);
								 $(this).parent().parent().parent().parent().find(".area_value").html(addCommas(area_value));
								 $(this).parent().parent().parent().parent().find(".unit_in_word").html(unit_to_convert);
								 alert(unit_to_convert + 'meter' + 'area_value - ' + area_value);
							 }
							 
						 }
						});
});