import request from "./bestbuy";
import $ from 'jquery';
import flickity from 'flickity';


export default class App {
  constructor() {
    this.initBBCall();
    this.flkty = new Flickity('#shop', {
      // options
      imagesLoaded: true,
      wrapAround: true,
    });

    $("#menu a").click(event => {
      // your code goes here
      const path = $(event.target).data('path');
      this.flkty.remove($('.products'));

      this.initBBCall(path);
    });
  }
  initBBCall(path) {
    if (path == undefined) {
      path = "((categoryPath.id=abcat0502000))";

    }
    request({
        url: "https://api.bestbuy.com/v1/products" + path,
        api: "8ccddf4rtjz5k5btqam84qak"
      })
      .then(data => {
        console.log(data);
        /* fill carousel with products */
        /*Create a loop to get the products on the page*/
        for (var i = 0; i < data.products.length; i++) {
          /*Create the variables you're going to need to get the products on the page*/
          var name = (data.products[i].albumTitle);
          var price = (data.products[i].regularPrice);
          var department = (data.products[i].department);
          var multimedia = (data.products[i].largeFrontImage);
          var sku = (data.products[i].sku);
          /*Create the html elements you are going to need to get the products on the page*/
          var $div = $("<div></div>");
          var $h1 = $("<h1></h1>");
          var $department = $("<p></p>");
          var $img = $("<img>");
          var $price = $("<p>$</p>");
          var $button = $("<button>ADD TO CART</button>");
          /*Add the html elements on the page to get the products*/
          $h1.append(name);
          $price.append(price);
          $department.append(department);
          $div.append($h1);
          $div.append($department);
          $div.append($img);
          $img.attr('src', multimedia);
          $div.append($price);
          $button.attr('sku', sku);
          $div.append($button);
          /*Set the classes to each element for the CSS to work*/
          $div.addClass('products');
          $h1.addClass('bannertitle2');
          $department.addClass('product-department');
          $img.addClass('product-image');
          $price.addClass('product-price');
          $button.addClass('product-button');
          //$("#shop").append($div);
          this.flkty.append($div);

        }
        $("button").click(event => {
          console.log("ADD TO CART");
          var bestbuy = {
                        productSku:sku,
                        productName:name,
                        productDepartment:department,
                        productPrice:price
                      };
          const path = $(event.target).attr('sku');
          sessionStorage.setItem(path, JSON.stringify(bestbuy));
          console.log(i);
        });
      })

      .catch(error => {
        console.log("warning Christopher Robins... Error");
        console.log(error);
      });
  }
}
let x = new App;
