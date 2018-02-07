import request from "./bestbuy";

export default class App {
  constructor() {
    this.initBBCall();
  }

  initBBCall() {
    request({
        url: "https://api.bestbuy.com/v1/products",
        api: "8ccddf4rtjz5k5btqam84qak"
      })
      .then(data => {
        console.log(data);
        /* fill carousel with products */
        for (var i = 0; i < 2; i++) {
          var name = (data.products[i].name);
          var price = (data.products[i].regularPrice);
          var sku = (data.products[i].sku);
          var multimedia = (data.products[i].largeFrontImage);
          var $div = $("<div></div>");
          var $p = $("<p></p>");
          var $h1 = $("<h1></h1>");
          $h1.append($p);
          $h1.append(name);
          $div.append($h1);
          $div.css('background-image', 'url(' + multimedia + ')');
          $div.addClass('products');
          $p.addClass('product-sku');
          $h1.addClass('bannertitle2');
          $("#shop").append($div);
        }
      })
      .catch(error => {
        console.log("warning Christopher Robins... Error");
        console.log(error);
      });
  }
}
let x = new App;
