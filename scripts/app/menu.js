define(['jquery', 'app/storage'], function($, storage) {
	
	var 
		buttons = {
			home: '#home-button',
			add: '#add-button',
			list: '#list-button',
			addTask: '#add-task'
		},
		
		message = {
			added: '#message .added-message',
			deleted: '#message .deleted-message',
			empty: '#message .empty-message'
		},
		
		container = {
			list: '#list-container',
			add: '#add-container'
		},
		
		
		menuEvents = function(){
				
				$(buttons.home).on('click',function(){
						storage.resetAll();
				});
				  
				
				$(buttons.add).on('click',function(){
						$(container.add).show();
						$(container.list).hide();
						$(message.empty).slideUp();
				});
					
				
				$(buttons.list).on('click',function(){
						$(container.add).hide();
						$(message.empty).slideUp();
						if(k==1 || localStorage.length<=1){
							$(message.empty).slideDown();
							
						}
						else
							storage.loadList();
				});	
				
		}
	
	
	return {
		// call init after DOM ready
		init: function() {
			menuEvents();
		}
	};
});