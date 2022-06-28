const App = {
	data() {
		return {
			title: 'Test',
			cardNumber: ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
			holderName: 'FULL NAME'
		}
	},
	methods: {
		// Change display CART NUMBER
		// Not more then 16 chars
		// Only numbers - function validateNumber(evt) {}
		inputChangeNumber(event) {
			cardNumber = event.target.value.split('');	
			let changeCardNumber = [];			
			for (let i = 0; cardNumber.length <= 16; i++) {		
				changeCardNumber = cardNumber.splice([i], 1, cardNumber[i]);
				if (cardNumber[i] == undefined) {
					cardNumber[i] = '#';
				}
				this.cardNumber = cardNumber;
			}	
		},

		// Change display HOLDER NAME
		// Only latin letters - function validateName(evt) {}
		inputChangeName(event) {
			event.target.value = event.target.value.toUpperCase();
			if (event.target.value == '') {
				this.holderName = 'FULL NAME';
			} else {this.holderName = event.target.value}			
		}
	}
}


Vue.createApp(App).mount('#appPayment')

// Check! 
// Only numbers on input Number
function validateNumber(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[0-9]/;
	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }


// Check!
// Only letters on input Name
function validateName(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /[A-Za-z\s]/;
	if( !regex.test(key) ) {
	  theEvent.returnValue = false;
	  if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }