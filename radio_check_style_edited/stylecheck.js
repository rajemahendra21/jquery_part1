
(function($){
		  
	jQuery.fn.stylecheck = function(options) {	
		return this.filter('.check:checkbox,.radio:radio').each(function() {
			 $.stylecheck(this);
		});
	}
	
	$.stylecheck = function(elem_input){
		$(elem_input).hide();
		
		var $label;
		if($(elem_input).next('label').length)
			$label = $(elem_input).next('label');
		else
			$label = $(elem_input).prev('label');
		
		var isChecked = elem_input.checked;
		var groupName = elem_input.name;
		
		$.labelClick(isChecked,$label);
		
		$label.click(function(){
			if($(elem_input).is(':checkbox')){
				elem_input.checked = isChecked = isChecked ? false : true;
				$.labelClick(isChecked,$label);
			}
			else if($(elem_input).is(':radio')){
				elem_input.checked = true;
				$('input[name='+groupName+']:radio').each(function(){
					var $label;
					if($(this).next('label').length)
						$label = $(this).next('label');
					else
						$label = $(this).prev('label');
																   
					$.labelClick(this.checked,$label);
				});
			}
			
		});
	}
	
	$.labelClick = function(isChecked,$label){
		if(isChecked)
		{
			$label.removeClass('label-unchecked').addClass('label-checked');
			//$(this).click(function(){
			//});
		}
		else{
			$label.removeClass('label-checked').addClass('label-unchecked');
			//alert('unchecked');
	}
	}
	
})(jQuery)