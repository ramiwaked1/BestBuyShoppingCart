import request from "./bestbuy";

export default class App{
	constructor(){
	}
	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			/* fill carousel with products */
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}
}
let x = new App;
