const App = {
	data() {
		return {
			title: 'Test',
			cardNumber: ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
			holderName: 'FULL NAME',
			monthDate: 'MM',
			yearDate: 'YY'
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
					cardNumber[i] = '#'
				}
				this.cardNumber = cardNumber;
			}	
		},

		// Change display HOLDER NAME
		// Only latin letters - function validateName(evt) {}
		inputChangeName(event) {
			event.target.value = event.target.value.toUpperCase();
			if (event.target.value == '') {
				this.holderName = 'FULL NAME'
			} else { this.holderName = event.target.value }			
		},

		// Change display MONTH
		// Only numbers from 01 to 12
		inputChangeMonth(event) {
			// 1 <= input <= 12
			if ((event.target.value < 1) && (event.target.value != '')) {
				event.target.value = 1;
			} else {
				if (event.target.value > 12) {
					event.target.value = 12;
				}
			}

			// add '0' after the once number
			// fill card place 'MM' if input is clear
			if (event.target.value < 10) {
				this.monthDate = '0' + event.target.value
			} else {
				if (event.target.value == '') {
					this.monthDate = 'MM'
				} else {
					this.monthDate = event.target.value		
				}
			}			
		},

		// Change display YEAR
		// Only numbers more then 22
		inputChangeYear(event) {
			let yearNow = new Date();			
			let shortYearNow = yearNow.getFullYear().toString();
			// get 2 last numbers of year
			shortYearNow = shortYearNow[2] + shortYearNow[3];
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