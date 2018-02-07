import request from "./bestbuy";
import $ from 'jquery';


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
        for (var i = 0; i < data.products.length; i++) {
          var name = (data.products[i].name);
          var price = (data.products[i].regularPrice);
          var sku = (data.products[i].sku);
          var multimedia = (data.products[i].largeFrontImage);
          var $div = $("<div></div>");
          var $h1 = $("<h1></h1>");
          var $sku = $("<p></p>");
          var $img = $("<img>");
          var $price = $("<p></p>");
          var $button = $("<button>ADD TO CART</button>");
          $h1.append(name);
          $price.append(price);
          $sku.append(sku);
          $div.append($h1);
          $div.append($sku);
          $div.append($img);
          $img.attr('src', multimedia);
          $div.append($price);
          $div.append($button);
          $div.addClass('products');
          $h1.addClass('bannertitle2');
          $sku.addClass('product-sku');
          $img.addClass('product-image');
          $price.addClass('product-price');
          $button.addClass('product-button');
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
