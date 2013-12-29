define( ['jquery', 'app/menu', 'app/storage'], function($, menu, storage) {

		var 
			
			sel = {
				addMe: '#add-task',
				listMe: '#list-button',
				listTable: '#list-container'
			},
			
			preparePage = function(){
				storage.checkSupport();
				storage.initKey();
			},
			
			bindEvents = function(){
					$(sel.addMe).on('click',storage.saveMe); // add task 
					$(sel.listTable).on('click','#deleteall',storage.clearAll);
					$(sel.listTable).on('click','.delete', storage.deleteMe); // delete entry
					storage.loadList();
			}
			

		return{
				init: function(){
					preparePage();
					menu.init();
					bindEvents();
				}
		}

});

