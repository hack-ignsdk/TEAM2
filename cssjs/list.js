$(val,div).click(function(){
		$.getJSON(val+'.json',function(data){
		$('div#'+val).html();
		var s = '<div class="accordion" id="list">';
		for ( i=0;i<data.count;i++){
			s = s +
				'<div class="accordion-group">'+
							'<div class="accordion-heading">'+
								'<a class="accordion-toggle" data-toggle="collapse" data-parent="#shopping"'+ 'href="#collapseOne">'+
									data.list[i].title+
								'</a>'+
							'</div>'+
						    '<div id="collapseOne" class="accordion-body collapse in">'
							  '<div class="accordion-inner">'
								 '<img src="'+data.list[i].img+'">'+
								 '<h3>'+data.list[i].address+'</h3>'+
								 '<p>'+data.list[i].desc+'</p>'+
							  '</div>'+
						    '</div>'+
					    '</div>'
					    );					    
			}
		$('div#'+val).append(s);		
	}
});
	
