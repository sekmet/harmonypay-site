function config(){return{default:{baseURL:"https://harmonypay.one/",apiBaseUrl:"https://api.harmonypay.test/api/v1/",accountsApiBaseUrl:"https://account.harmonypay.test/",donationWidgetUrl:"https://harmonypay.test/api/donation",donationWithInputsWidget:"https://harmonypay.one/api/donationplus",allowedPaymentCurrencies:["USD","EUR","NZD","BRL","GBP","NOK","AUD","CAD"],allowedFiatCurrencies:["USD","GBP","EUR"],publicApiKey:"A79365E4-416F-409E-93AE-B7300D8B9BE3"}}}var sp=document.querySelector(".section--payment-method"),elems=sp.querySelectorAll(".content-box__row--secondary"),buttons=Array.prototype.filter.call(elems,function(e){if(e.textContent&&e.textContent.toLowerCase().includes("harmonypay"))return e});console.log(buttons[0]);var r=config(),a=document.querySelector("body"),u=((o=document.createElement("iframe")).style.display="none",o.style.border="0",o.setAttribute("allowtransparency","true"),o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.height="100%",o.style.width="100%",o.style.zIndex="99",o.style.backgroundColor="transparent",o);console.log(u);var n=document.createElement("button"),i=document.createElement("img"),e=u;i.src=r.default.baseURL+"images/paybutton.png",i.alt="Pay with HarmonyPay",n.appendChild(i),n.style.outline="none",i.width=139,i.height=36,n.onclick=function(){e.style.display="block",e.src||(e.src=function(e){var t={paymentCurrency:window.Shopify.Checkout.currency.toUpperCase(),apiKey:e,paymentAmount:window.Shopify.Checkout.total_price,shipping:0,tax:window.Shopify.Checkout.total_tax,orderID:"shopify"+window.Shopify.Checkout.order_id,merchantName:window.Shopify.Shop};return window.Shopify.Checkout.shipping_rate&&window.Shopify.Checkout.shipping_rate.price&&(t.shipping=window.Shopify.Checkout.shipping_rate.price),r.default.baseURL+"api/shopify/?data="+encodeURIComponent("TEST")}(e))},a.appendChild(e),buttons[0].appendChild(n);
