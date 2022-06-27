const App = {
	data() {
		return {
			title: 'Test',
			cardNumber: '################'
		}
	},
	methods: {
		inputChangeHandler(event) {
			let input = [];
			input = event.target.value;
			this.cardNumber = input.replace(/(\d{1,4}(?=(?:\d\d\d\d)+(?!\d)))/g, "$1" + ' ');
		}
	}
}

Vue.createApp(App).mount('#appPayment')