define(['jquery'], function($){

	var 
		buttons = {
			addTask: '#add-task'
		},
		
		message = {
			added: '#message .added-message',
			deleted: '#message .deleted-message',
			empty: '#message .empty-message',
			support: 'Your browser doesn\'t support local storage!'
		},
		
		container = {
			list: '#list-container',
			add: '#add-container'
		}
	

	return {
		
		checkSupport: function(){
					if(!localStorage)
						alert(message.support);
				/*	else{	
						yet to add the cookies alternative for local storage 
					} 	*/
		},
		
		initKey: function(){
					if(!localStorage.index00)
						localStorage.clear();
				
					if(localStorage.length <= 1)
						localStorage.index00 = 1;
							
					k = localStorage.index00;	
		},
		
		saveMe: function(){
					if( $('#myinput').val() ){	
						localStorage.setItem('key'+k, $('#myinput').val() );
						$(message.added).slideDown();
						$(message.added).delay(100).slideUp(3000);
						k++;
						localStorage.index00 = k;
						$('#myinput').val('');
					}
						
		},
		
		deleteMe: function(){
					localStorage.removeItem($(this).attr('id'));
					$(message.deleted).slideDown();
					$(message.deleted).delay(500).slideUp(3000);
					$(container.list).hide();
					$(message.empty).slideUp();
					
					if(k==1 || localStorage.length<=1){
						$(message.empty).slideDown();
					}
					else{
						loadList();
					}	
		},
		
		loadList: function(){
				$(container.list).html('<table></table>');
				
				for(var i=0; i< localStorage.length; i++){
					if( localStorage.key(i) != 'index00'){
						var item = localStorage.getItem(localStorage.key(i));
						$(container.list+' table').append('<tr><td>'+ item +'</td><td><a href="#" id='+ localStorage.key(i) +' class="delete">delete</a></td></tr>');
					}	
				}
				$(container.list+' table').append('<tr><td><a href="#" id="deleteall" class="delete">DeleteAll</a></td></tr>');
				$(container.list).show();
		},	
		
		
		resetAll: function(){
				location.reload();
		},
				  
		clearAll: function() {
				alert('a');
				if(!localStorage)
				{alert('error');}
				else{
				localStorage.clear();
				}
		}
		
		
	};	
});
