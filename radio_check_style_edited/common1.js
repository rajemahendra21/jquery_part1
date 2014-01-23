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
			//$styledSelect.text($this.children('option').eq(0).text());
			$styledSelect.text($this.children('option:selected').text());
			
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
			//alert($this.val())
			
			/* alert($this.val()); Uncomment this for demonstration! */
			});
			
			// Hides the unordered list when clicking outside of it
			$(document).click(function() {
			$styledSelect.removeClass('active');
			$styledSelect.parent().removeClass('active1');
			$list.hide();
			});
			$('.searchCatBox').not(this).mouseleave(function(){
				$styledSelect.removeClass('active');
				$styledSelect.parent().removeClass('active1');
				$list.hide();
			});
			
			});
		//}
}
/*-----------------Select Box Ends here-----------------*/