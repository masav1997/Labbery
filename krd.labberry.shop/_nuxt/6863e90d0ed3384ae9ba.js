(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{327:function(t,e,r){"use strict";var n={name:"MInstaBlockComponent"},c=r(3),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section--block section--block_info"},[r("h2",{staticClass:"section--title"},[t._v(t._s(t.c.additionalfields.instagram_title))]),r("p",{staticClass:"section--text"},[t._v(t._s(t.c.additionalfields.instagram_text))]),r("a",{staticClass:"button",attrs:{href:t.c.additionalfields.instagram,target:"_blank"}},[r("div",{staticClass:"button--text"},[t._v("Instagram")])]),r("div",{staticClass:"item--image"},[r("img",{attrs:{src:"/"+t.c.additionalfields.instagram_image,alt:t.c.additionalfields.instagram_title}})])])}),[],!1,null,null,null);e.a=component.exports},328:function(t,e,r){"use strict";var n={name:"MInfoBlockComponent",computed:{about:function(){return this.$store.getters["pages/getAboutPage"]}}},c=r(3),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section--block section--block_info"},[r("h2",{staticClass:"section--title"},[t._v(t._s(t.about.additionalfields.info_title))]),r("p",{staticClass:"section--text"},[t._v(t._s(t.about.additionalfields.info_text))]),r("a",{staticClass:"button",attrs:{href:t.about.additionalfields.link_info}},[r("div",{staticClass:"button--text"},[t._v("Подробнее")])]),r("div",{staticClass:"item--image"},[r("img",{attrs:{src:"/"+t.about.additionalfields.info_image,alt:t.about.additionalfields.info_title}})])])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,r){"use strict";var n=r(328),c=r(327),l={name:"MSectionInfo",components:{mInfoBlock:n.a,mInstaBlock:c.a}},o=r(3),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"section--info"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section--blocks grid grid--xl-2 grid--md-1"},[e("m-info-block"),e("div",{staticClass:"section--block-divider"}),e("m-insta-block")],1)])])}),[],!1,null,null,null);e.a=component.exports},330:function(t,e,r){"use strict";var n={name:"MItemProductComponent",props:{items:{type:Array,default:function(){return[]}}},data:function(){return{title:"",price:null,item:{},size:"m"}},mounted:function(){var t=this;this.items.forEach((function(e){"m"===e.size&&(t.item=e,t.size=e.size)}))},methods:{changeSize:function(t){this.item=t,this.size=t.size},addToCart:function(){var t=this.items[0];return this.item.id&&(t=this.item),this.$store.dispatch("cart/addToCart",t),localStorage.setItem("cart",JSON.stringify(this.$store.getters["cart/getCart"])),ym(this.$store.getters.getContext.ya_num,"reachGoal","korzina"),gtag("event","click",{event_category:"korzina"}),!0}}},c=r(3),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item--product"},[r("div",{staticClass:"item--product-wrapper"},[r("div",{staticClass:"item--product-wrapper_inner"},[r("div",{staticClass:"item--media"},[t._l(t.items,(function(e,i){return r("nuxt-link",{key:i,staticClass:"item--product-inner item--product-image",class:{"item--product-image_active":e.size===t.size},attrs:{to:"/catalog/"+(e.categorySlug||"category")+"/"+e.slug}},[r("div",{staticClass:"item--media-inner"},[r("div",{staticClass:"item--image"},[r("img",{staticClass:"item--image-element",attrs:{src:"/"+e.productfields.image,alt:e.title}})])]),e.popular?r("div",{staticClass:"item--flag item--flag_popular"},[r("img",{attrs:{src:"/images/popular-flag.svg"}})]):t._e()])})),r("div",{staticClass:"item--product-inner"},t._l(t.items,(function(e,i){return r("nuxt-link",{key:i,staticClass:"item--product-title",class:{"item--product-title_active":e.size===t.size},attrs:{to:"/catalog/"+(e.categorySlug||"category")+"/"+e.slug}},[r("h3",[t._v(t._s(e.productfields.title))])])})),1)],2),r("div",{staticClass:"item--content"},[r("div",{staticClass:"item--product-inner item--product-sizes"},t._l(t.items,(function(e,i){return r("div",{key:i,staticClass:"link--icon item--product-size",class:{"item--product-size_active":e.size===t.size},on:{click:function(r){return t.changeSize(e)}}},[t._v(t._s(e.size))])})),0),r("div",{staticClass:"item--product-inner"},t._l(t.items,(function(e,i){return r("nuxt-link",{key:i,staticClass:"item--product-price",class:{"item--product-price_active":e.size===t.size},attrs:{to:"/catalog/"+(e.categorySlug||"category")+"/"+e.slug}},[e.productfields.old_price?t._e():r("div",{staticClass:"item--product-price_old_disable"}),e.productfields.old_price?r("div",{staticClass:"item--product-price_old"},[r("span",{staticClass:"item--product-price-current"},[t._v(t._s(e.productfields.old_price)+" ₽")]),r("span",{staticClass:"item--product-price-discount"},[t._v(t._s(e.price-e.productfields.old_price))])]):t._e(),r("div",{staticClass:"item--product-price-wrapper"},[t._v(t._s(e.price)+" ₽")])])})),1)])]),r("div",{staticClass:"item--product-actions"},[r("button",{staticClass:"button button_brand",on:{click:t.addToCart}},[r("div",{staticClass:"button--text"},[t._v("В корзину")])])])])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){var content=r(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("7a7dae47",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";var n=r(41),c=r(10),l=r(42),o=r(166),d=r(167),C=r(34),m=r(170),f=r(168);c(c.S+c.F*!r(169)((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,c,v,h=l(t),_="function"==typeof this?this:Array,y=arguments.length,x=y>1?arguments[1]:void 0,k=void 0!==x,w=0,L=f(h);if(k&&(x=n(x,y>2?arguments[2]:void 0,2)),null==L||_==Array&&d(L))for(r=new _(e=C(h.length));e>w;w++)m(r,w,k?x(h[w],w):h[w]);else for(v=L.call(h),r=new _;!(c=v.next()).done;w++)m(r,w,k?o(v,x,[c.value,w],!0):c.value);return r.length=w,r}})},337:function(t,e,r){"use strict";var n=r(333);r.n(n).a},338:function(t,e,r){(t.exports=r(54)(!1)).push([t.i,".item--colors{display:flex}.item--color{width:22px;height:22px;border-radius:100%;display:flex;align-items:center;justify-content:center;border:1px solid #000;margin-right:10px}.item--color_inner{width:16px;height:16px;border-radius:100%}",""])},346:function(t,e,r){"use strict";r.r(e);r(75),r(336);function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r(5);var c=r(0);function l(t){var e;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(e=t[Symbol.asyncIterator]))return e.call(t);if(Symbol.iterator&&null!=(e=t[Symbol.iterator]))return e.call(t)}throw new TypeError("Object is not async iterable")}var o,d=r(329),C=r(330),m={name:"ProductPage",components:{mSectionInfo:d.a,mItemProduct:C.a},data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:0,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}},blueberry_check:!1}},computed:{mainPage:function(){return this.$store.getters["pages/getIndexPage"]},dopImages:function(){return this.page.productfields&&this.page.productfields.dop_images?JSON.parse(this.page.productfields.dop_images):[]},deliveryTermsList:function(){return this.mainPage.additionalfields&&this.mainPage.additionalfields.delivery_terms_list?JSON.parse(this.mainPage.additionalfields.delivery_terms_list):[]},deliveryIntervalPageProductList:function(){return this.mainPage.additionalfields&&this.mainPage.additionalfields.delivery_interval_page_product_list?JSON.parse(this.mainPage.additionalfields.delivery_interval_page_product_list):[]},shelfLifeList:function(){return this.mainPage.additionalfields&&this.mainPage.additionalfields.shelf_life_list?JSON.parse(this.mainPage.additionalfields.shelf_life_list):[]},variantsPaymentList:function(){return this.mainPage.additionalfields&&this.mainPage.additionalfields.variants_payment_list?JSON.parse(this.mainPage.additionalfields.variants_payment_list):[]},swiper:function(){return this.$refs.mySwiper.swiper}},asyncData:(o=Object(c.a)(regeneratorRuntime.mark((function t(e){var r,c,o,d,C,m,f,v,h,_,y,x,k,w,L,P,M,z;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,r=e.store,c=e.params,o=e.$axios,d=r.getters.getContext.token,t.next=4,r.dispatch("products/fetchProduct",{params:{filter:{where:{slug:c.product,userId:r.getters.getContext.id},include:[{association:"productfields"},{association:"children"},{association:"parent",include:[{association:"children"}]}]}},headers:{"x-api-key":d}});case 4:return C=r.getters["products/getProduct"],m=[],3===C.parent.resourcetypeId?(m.push(C),C.children.length>0&&m.push.apply(m,n(C.children))):(C.parent.id&&m.push(C.parent),C.parent&&C.parent.children.length>0&&m.push.apply(m,n(C.parent.children))),f=m.filter((function(t){return t.size.length<2})).sort((function(a,b){return a.size>b.size?-1:a.size<b.size?1:0})),m.forEach((function(t){"xs"===t.size&&f.unshift(t),"xl"===t.size&&f.push(t)})),t.next=11,r.dispatch("products/fetchCategory",{params:{filter:{where:{slug:c.category}}},headers:{"x-api-key":d}});case 11:return v=r.getters["products/getCategory"],t.next=14,r.dispatch("products/fetchOtherProducts",{params:{filter:{limit:4,where:{parentId:v.id,resourcetypeId:2,lang:"ru",level:3},include:[{association:"productfields"},{association:"children",include:["productfields"]},"parent"]}},headers:{"x-api-key":d}});case 14:if(h=[],!C.productfields||!C.productfields.other_colors){t.next=52;break}_=!0,y=!1,t.prev=18,k=l(JSON.parse(C.productfields.other_colors));case 20:return t.next=22,k.next();case 22:return w=t.sent,_=w.done,t.next=26,w.value;case 26:if(L=t.sent,_){t.next=36;break}return P=L,t.next=31,o.$get("/products/find/".concat(P.productId.value),{headers:{"x-api-key":d}}).catch((function(t){console.error(t)}));case 31:(M=t.sent)&&h.push({color:P.color.value,slug:M.slug});case 33:_=!0,t.next=20;break;case 36:t.next=42;break;case 38:t.prev=38,t.t0=t.catch(18),y=!0,x=t.t0;case 42:if(t.prev=42,t.prev=43,_||null==k.return){t.next=47;break}return t.next=47,k.return();case 47:if(t.prev=47,!y){t.next=50;break}throw x;case 50:return t.finish(47);case 51:return t.finish(42);case 52:return z=r.getters["products/getOtherProducts"],t.abrupt("return",{page:C,items:f,category:v,otherProducts:z,otherColors:h});case 54:case"end":return t.stop()}}),t,null,[[18,38,42,52],[43,,47,51]])}))),function(t){return o.apply(this,arguments)}),mounted:function(){var t=this.swiper,e=Array.from(document.getElementsByClassName("product-gallery--thumb"));function r(){var r=this.getAttribute("data-image-number");t.slideTo(r,1e3,!1),e.forEach((function(t){t.parentNode.classList.remove("product-thumbs--item_active")})),this.parentNode.classList.add("product-thumbs--item_active")}e.forEach((function(t){t.addEventListener("click",r)}))},head:function(){return{title:this.page.title||"Товар",htmlAttrs:{lang:this.page.lang||"ru"},meta:[{hid:"description",name:"description",content:this.page.description}]}},methods:{addBlueberry:function(){this.blueberry_check?this.page.price=+this.page.price-+this.page.productfields.blueberry_price:(this.page.price=+this.page.price+ +this.page.productfields.blueberry_price,this.page.productfields.blueberry_check=!0)},addToCart:function(){return this.$store.dispatch("cart/addToCart",this.page),localStorage.setItem("cart",JSON.stringify(this.$store.getters["cart/getCart"])),ym(this.$store.getters.getContext.ya_num,"reachGoal","korzina"),gtag("event","click",{event_category:"korzina"}),!0},openModal:function(){return this.$store.dispatch("fetchCallbackModal",!0),ym(this.$store.getters.getContext.ya_num,"reachGoal","pokupka"),gtag("event","click",{event_category:"pokupka"}),!0}},beforeRouteLeave:function(t,e,r){this.$store.dispatch("fetchMenu",!1),this.$store.dispatch("fetchCityModal",!1),this.$store.dispatch("fetchCallbackModal",!1),r()}},f=(r(337),r(3)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("section",{staticClass:"section section--product"},[r("div",{staticClass:"container"},[r("div",{staticClass:"grid grid--xl-2 grid--md-1"},[r("div",{staticClass:"product-gallery--wrapper"},[r("div",{staticClass:"section--block product-gallery"},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],ref:"mySwiper"},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"item--image"},[r("img",{staticClass:"product-gallery--image",attrs:{src:"/"+t.page.productfields.image,alt:t.page.productfields.title,"data-image-number":0}})])]),t._l(t.dopImages,(function(e,i){return r("div",{key:i,staticClass:"swiper-slide"},[r("div",{staticClass:"item--image"},[r("img",{staticClass:"product-gallery--image",attrs:{src:"/"+e.image.value,alt:t.page.productfields.title,"data-image-number":i+1}})])])}))],2)])]),r("div",{staticClass:"product-thumbs"},[r("div",{staticClass:"product-thumbs--item product-thumbs--item_active"},[r("img",{staticClass:"product-gallery--thumb",attrs:{src:"/"+t.page.productfields.image,alt:t.page.productfields.title,"data-image-number":0}})]),t._l(t.dopImages,(function(e,i){return r("div",{key:i,staticClass:"product-thumbs--item"},[r("img",{staticClass:"product-gallery--thumb",attrs:{src:"/"+e.image.value,alt:t.page.productfields.title,"data-image-number":i+1}})])}))],2)]),r("div",{staticClass:"section--block"},[r("div",{staticClass:"section--block-content"},[r("h1",{staticClass:"section--title"},[t._v(t._s(t.page.productfields.title))]),r("p",{domProps:{innerHTML:t._s(t.page.productfields.subtitle)}}),r("p",{domProps:{innerHTML:t._s(t.page.productfields.composition)}})]),t.otherColors.length>0?r("h3",{staticClass:"item--colors-title"},[t._v("Выберите цвет:")]):t._e(),r("div",{staticClass:"item--colors"},t._l(t.otherColors,(function(e){return r("nuxt-link",{key:e.slug,staticClass:"item--color",style:{borderColor:e.color},attrs:{to:"/catalog/"+t.$route.params.category+"/"+e.slug}},[r("div",{staticClass:"item--color_inner",style:{backgroundColor:e.color}})])})),1),r("h3",{staticClass:"item--product-size-title"},[t._v("Выберите размер:")]),r("div",{staticClass:"section--sizes d-flex"},t._l(t.items,(function(e,i){return r("nuxt-link",{key:i,staticClass:"link--icon",class:{"item--product-size_active":e.size===t.page.size},attrs:{to:"/catalog/"+t.$route.params.category+"/"+e.slug}},[t._v(t._s(e.size))])})),1),r("div",{staticClass:"section--price"},[t.page.productfields.old_price?r("div",{staticClass:"item--product-price_old"},[r("span",{staticClass:"item--product-price-current"},[t._v(t._s(t.page.productfields.old_price)+" ₽")]),r("span",{staticClass:"item--product-price-discount"},[t._v(t._s(t.page.price-t.page.productfields.old_price))])]):t._e(),r("div",{staticClass:"item--product-card-price"},[r("div",{staticClass:"item--product-card-price-current"},[t._v(t._s(t.page.price)+" ₽")]),r("div",{staticClass:"item--product-card-price-bonus"},[r("span",{staticClass:"item--product-card-price-bonus-text"},[t._v("+ бонус "+t._s(5*t.page.price/100)+" ₽")]),r("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{cx:"10",cy:"10",r:"10",fill:"#D7607F"}}),r("path",{attrs:{d:"M8.91818 10.935C8.91818 10.645 9.01318 10.365 9.20318 10.095C9.39318 9.825 9.69318 9.515 10.1032 9.165C10.5132 8.795 10.7882 8.51 10.9282 8.31C11.0682 8.11 11.1382 7.875 11.1382 7.605C11.1382 7.255 11.0182 6.965 10.7782 6.735C10.5482 6.505 10.2632 6.39 9.92318 6.39C9.24318 6.39 8.75818 6.82 8.46818 7.68L7.14818 7.11C7.35818 6.41 7.70818 5.875 8.19818 5.505C8.69818 5.125 9.29318 4.935 9.98318 4.935C10.7632 4.935 11.4232 5.18 11.9632 5.67C12.5032 6.15 12.7732 6.755 12.7732 7.485C12.7732 7.915 12.6682 8.31 12.4582 8.67C12.2482 9.02 11.9082 9.4 11.4382 9.81C11.0082 10.19 10.7232 10.47 10.5832 10.65C10.4432 10.82 10.3732 11.01 10.3732 11.22C10.3732 11.34 10.3932 11.475 10.4332 11.625H9.08318C8.97318 11.375 8.91818 11.145 8.91818 10.935ZM8.97818 14.835C8.75818 14.615 8.64818 14.34 8.64818 14.01C8.64818 13.68 8.75818 13.405 8.97818 13.185C9.20818 12.955 9.48818 12.84 9.81818 12.84C10.1482 12.84 10.4232 12.95 10.6432 13.17C10.8732 13.39 10.9882 13.67 10.9882 14.01C10.9882 14.34 10.8732 14.615 10.6432 14.835C10.4232 15.055 10.1482 15.165 9.81818 15.165C9.48818 15.165 9.20818 15.055 8.97818 14.835Z",fill:"white"}})]),r("div",{staticClass:"item--bonus-information"},[r("h5",{staticClass:"item--bonus-title"},[t._v("Бонус на следующую покупку")]),r("p",{staticClass:"item--bonus-text"},[t._v("При покупке любого товара, вы получите кешбек 5%.")]),r("p",{staticClass:"item--bonus-text"},[t._v("Бонус зачислится на ваш счёт в течение 5 дней после оформления заказа. Посмотреть накопленные бонусы можно в"),r("nuxt-link",{attrs:{to:"/profile"}},[t._v("личном кабинете.")])],1)])])])]),t.page.productfields.blueberry_price?r("div",{staticClass:"section--blueberry"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.blueberry_check,expression:"blueberry_check"}],staticClass:"section--blueberry-checkbox",staticStyle:{display:"none"},attrs:{id:"blueberry",type:"checkbox"},domProps:{checked:Array.isArray(t.blueberry_check)?t._i(t.blueberry_check,null)>-1:t.blueberry_check},on:{change:function(e){var r=t.blueberry_check,n=e.target,c=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.blueberry_check=r.concat([null])):l>-1&&(t.blueberry_check=r.slice(0,l).concat(r.slice(l+1)))}else t.blueberry_check=c}}}),r("label",{staticClass:"section--blueberry-label",class:{"section--blueberry-label_active":t.blueberry_check},attrs:{for:"blueberry"},on:{click:t.addBlueberry}}),r("span",{staticClass:"section--blueberry-text"},[t._v("Добавить голубику в букет (+ "+t._s(t.page.productfields.blueberry_price)+" ₽)")]),r("svg",{staticClass:"section--blueberry-icon",attrs:{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M14.1417 0.545166C11.9964 0.545166 10.0922 1.73844 9.04492 3.59816C11.2855 4.79144 12.7136 7.07642 12.7136 9.6026C12.7136 10.415 12.4724 11.1767 12.2376 11.8876C12.8596 12.1288 13.4753 12.3192 14.1417 12.3192C17.3788 12.3192 20.0002 9.69781 20.0002 6.40997C20.0002 3.16655 17.3788 0.545166 14.1417 0.545166ZM17.1059 7.45091C17.1059 7.45091 16.7695 7.30492 16.4394 7.16529C16.0586 7.0193 15.7222 6.87331 15.4365 6.87966C15.1954 6.88601 15.0684 7.03199 14.8336 7.17163C14.6431 7.31762 14.4337 7.45091 14.4337 7.45091C13.9576 7.78731 13.4308 7.20972 13.7672 6.78445C13.7672 6.78445 13.9132 6.59404 14.0529 6.35285C14.4337 5.7816 14.129 4.95011 14.0529 4.77874C13.8815 4.39156 13.7165 4.11228 13.7165 4.11228C13.526 3.78858 13.7609 3.4014 14.0973 3.4014C14.2433 3.4014 14.3385 3.45218 14.4337 3.49661C14.4337 3.49661 14.6241 3.6426 14.8145 3.78223C15.3858 4.16306 15.8618 3.97265 16.4331 3.78223C16.7695 3.63625 17.0995 3.44583 17.0995 3.44583C17.163 3.41409 17.1947 3.39505 17.2899 3.39505C17.6708 3.39505 17.912 3.77588 17.7215 4.11228C17.7215 4.11228 17.6073 4.39156 17.4359 4.77874C17.1566 5.42615 17.1503 5.7816 17.4359 6.35285C17.5311 6.59404 17.6771 6.78445 17.6771 6.78445C18.0135 7.16529 17.5438 7.68576 17.1059 7.45091Z",fill:"#2F57A7"}}),r("path",{attrs:{d:"M5.85846 3.73779C2.62139 3.73779 0 6.35918 0 9.59625C0 12.8397 2.62139 15.4547 5.85846 15.4547C9.1463 15.4547 11.7613 12.8333 11.7613 9.59625C11.7613 6.35918 9.1463 3.73779 5.85846 3.73779ZM7.58489 9.3614C7.58489 9.3614 7.24849 9.21542 6.91844 9.07578C6.53761 8.92979 6.06157 8.76477 5.91558 8.79016C5.69343 8.82824 5.5284 8.9171 5.29356 9.07578C5.09679 9.20907 4.91273 9.3614 4.91273 9.3614C4.43669 9.6978 3.90987 9.12021 4.24627 8.69495C4.24627 8.69495 4.39226 8.50453 4.53189 8.26334C4.91273 7.69209 4.72866 7.19701 4.53189 6.68924C4.3986 6.35284 4.19549 6.02278 4.19549 6.02278C4.00508 5.69273 4.23992 5.3119 4.57632 5.3119C4.72231 5.3119 4.83021 5.34998 4.91273 5.4071C4.91273 5.4071 5.10314 5.55309 5.29356 5.69273C5.8648 6.07356 6.34084 5.88314 6.91209 5.69273C7.24849 5.54674 7.57855 5.35633 7.57855 5.35633C7.64837 5.32459 7.67375 5.30555 7.76896 5.30555C8.14979 5.30555 8.39099 5.68638 8.20057 6.02278C8.20057 6.02278 8.05459 6.30841 7.91495 6.68924C7.57855 7.31126 7.62932 7.69209 7.91495 8.26334C8.01016 8.50453 8.15614 8.69495 8.15614 8.69495C8.49254 9.07578 8.08632 9.60894 7.58489 9.3614Z",fill:"#2F57A7"}})])]):t._e(),r("div",{staticClass:"section--actions"},[r("div",{staticClass:"button button_brand",on:{click:t.addToCart}},[r("div",{staticClass:"button--text"},[t._v("Добавить в корзину")])]),r("div",{staticClass:"button",on:{click:t.openModal}},[r("div",{staticClass:"button--text"},[t._v("Заказать в один клик")])])])])])])]),r("section",{staticClass:"section section--advantages"},[r("div",{staticClass:"container"},[r("div",{staticClass:"advantages"},[r("div",{staticClass:"advantages--item"},[r("svg",{staticClass:"advantages--item-icon",attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M24.9346 9.58886C24.77 9.08264 24.321 8.72424 23.7919 8.67637L16.5752 8.02118L13.723 1.34382C13.5125 0.853246 13.0333 0.536621 12.5 0.536621C11.9667 0.536621 11.4874 0.853246 11.2782 1.34382L8.42606 8.02118L1.20815 8.67637C0.679043 8.7252 0.230999 9.08359 0.0654383 9.58886C-0.0991687 10.0951 0.0528495 10.6503 0.453018 11.0013L5.90832 15.7848L4.29982 22.8692C4.18214 23.3901 4.38432 23.9287 4.81653 24.2412C5.04885 24.41 5.3218 24.4943 5.5957 24.4943C5.83107 24.4943 6.06663 24.4317 6.27701 24.3058L12.5 20.5849L18.7219 24.3058C19.1783 24.5786 19.7523 24.5536 20.1835 24.2412C20.6157 23.9287 20.8179 23.3901 20.7002 22.8692L19.0917 15.7848L24.547 11.0013C24.947 10.6503 25.0992 10.0962 24.9346 9.58886Z",fill:"#D7607F"}})]),r("h5",{staticClass:"advantages--item-title"},[t._v("Гарантия качества")]),t._m(0)]),r("div",{staticClass:"advantages--item"},[r("svg",{staticClass:"advantages--item-icon",attrs:{width:"25",height:"25",viewbox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("path",{attrs:{d:"M12.5013 18.75C15.3778 18.75 17.7097 16.4181 17.7097 13.5416C17.7097 10.6651 15.3778 8.33325 12.5013 8.33325C9.62483 8.33325 7.29297 10.6651 7.29297 13.5416C7.29297 16.4181 9.62483 18.75 12.5013 18.75Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M22.9167 5.20837H19.6131C19.1956 5.20837 18.8034 5.04563 18.5079 4.75061L16.6036 2.84631C16.1118 2.35447 15.4577 2.08337 14.7619 2.08337H10.2381C9.54233 2.08337 8.88823 2.35447 8.39639 2.84631L6.49209 4.75061C6.19658 5.04563 5.80444 5.20837 5.38687 5.20837H2.08335C0.934326 5.20837 0 6.1427 0 7.29167V20.8333C0 21.9823 0.934326 22.9167 2.08335 22.9167H22.9167C24.0657 22.9167 25 21.9823 25 20.8333V7.29167C25 6.1427 24.0657 5.20837 22.9167 5.20837ZM12.5 19.7917C9.05356 19.7917 6.25 16.9881 6.25 13.5417C6.25 10.0952 9.05356 7.29167 12.5 7.29167C15.9464 7.29167 18.75 10.0952 18.75 13.5417C18.75 16.9881 15.9464 19.7917 12.5 19.7917ZM20.8333 10.4167C20.2591 10.4167 19.7917 9.94924 19.7917 9.37503C19.7917 8.80081 20.2591 8.33337 20.8333 8.33337C21.4076 8.33337 21.875 8.80081 21.875 9.37503C21.875 9.94924 21.4076 10.4167 20.8333 10.4167Z",fill:"#D7607F"}})]),r("defs",[r("clippath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"25",height:"25",fill:"white"}})])])]),r("h5",{staticClass:"advantages--item-title"},[t._v("Фотоконтроль")]),t._m(1)]),r("div",{staticClass:"advantages--item"},[r("svg",{staticClass:"advantages--item-icon",attrs:{width:"25",height:"25",viewbox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M3.20312 11.4628V22.8024C3.20312 24.0141 4.18886 24.9998 5.40047 24.9998H9.27354V11.4628H3.20312Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M14.2613 11.4628H10.7383V24.9999H14.2613V11.4628Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M20.7267 5.5534H17.3515C17.5553 5.39711 17.7501 5.22709 17.9339 5.04335C17.9729 5.00434 18.0113 4.96493 18.049 4.92509C19.313 3.59009 18.9681 1.88536 17.9741 0.891371C16.9802 -0.102569 15.2755 -0.44744 13.9405 0.816567C13.9006 0.854311 13.8611 0.892738 13.8222 0.931654C13.2412 1.51261 12.7955 2.20171 12.5002 2.94863C12.2049 2.20176 11.7591 1.51271 11.1783 0.931849C11.1392 0.892689 11.0997 0.854311 11.0599 0.816567C9.72486 -0.447488 8.02018 -0.102569 7.02619 0.891371C6.0322 1.88536 5.68728 3.59013 6.95129 4.92509C6.98899 4.96488 7.02741 5.00434 7.06643 5.04335C7.25021 5.22714 7.44494 5.39711 7.6488 5.5534H4.27352C3.06191 5.5534 2.07617 6.53914 2.07617 7.75075V8.19904C2.07617 9.00875 2.51714 9.71637 3.17084 10.0976H21.8295C22.4831 9.71642 22.9241 9.00875 22.9241 8.19904V7.75075C22.9241 6.53914 21.9384 5.5534 20.7267 5.5534ZM11.4521 5.31732C10.2103 5.36566 8.98902 4.89433 8.10216 4.00751C8.10211 4.00747 8.10206 4.00737 8.10202 4.00732C8.07252 3.97783 8.04347 3.94799 8.01496 3.91787C7.31721 3.18096 7.60422 2.38497 8.06198 1.9272C8.32238 1.66676 8.69225 1.46168 9.09849 1.46168C9.40626 1.46168 9.73501 1.5795 10.0526 1.88018C10.0827 1.9087 10.1126 1.93775 10.1422 1.96744C11.029 2.85425 11.4993 4.07539 11.4521 5.31732ZM16.8983 4.00727C16.8982 4.00732 16.8982 4.00742 16.8981 4.00747C16.0518 4.8537 14.9014 5.32064 13.7187 5.32054C13.6619 5.32054 13.6051 5.31952 13.5482 5.31732C13.5011 4.07539 13.9713 2.85425 14.8583 1.96729C14.8878 1.9378 14.9176 1.90875 14.9478 1.88023C15.6847 1.18258 16.4807 1.46954 16.9384 1.92725C17.3962 2.38497 17.6831 3.18101 16.9854 3.91792C16.9568 3.94794 16.9278 3.97778 16.8983 4.00727Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M15.7266 11.4628V24.9998H19.5996C20.8112 24.9998 21.797 24.0141 21.797 22.8024V11.4628H15.7266Z",fill:"#D7607F"}})]),r("h5",{staticClass:"advantages--item-title"},[t._v("Подарок для вас")]),t._m(2)]),r("div",{staticClass:"advantages--item"},[r("svg",{staticClass:"advantages--item-icon",attrs:{width:"25",height:"25",viewbox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{attrs:{"clip-path":"url(#clip0)"}},[r("path",{attrs:{d:"M23.3377 12.8238C23.2371 12.618 23.2371 12.3819 23.3377 12.1762L24.2701 10.2687C24.7893 9.20665 24.3779 7.94079 23.3337 7.38674L21.4582 6.39163C21.2559 6.28431 21.1172 6.09329 21.0776 5.86776L20.7108 3.77651C20.5065 2.61216 19.4295 1.82974 18.2592 1.99532L16.157 2.29268C15.9301 2.32471 15.7058 2.25176 15.5412 2.09254L14.0153 0.616372C13.1656 -0.205596 11.8346 -0.205645 10.9849 0.616372L9.45898 2.09268C9.29433 2.25196 9.06997 2.32476 8.84312 2.29283L6.74093 1.99547C5.57028 1.82979 4.49363 2.61231 4.28938 3.77666L3.92259 5.86781C3.88299 6.09339 3.74427 6.28436 3.54198 6.39173L1.6665 7.38684C0.622265 7.94084 0.210939 9.2068 0.730077 10.2689L1.66244 12.1763C1.76303 12.3821 1.76303 12.6181 1.66244 12.8239L0.730028 14.7313C0.210891 15.7933 0.622216 17.0592 1.66645 17.6132L3.54193 18.6084C3.74427 18.7157 3.88299 18.9067 3.92259 19.1322L4.28938 21.2235C4.47532 22.2834 5.3842 23.0268 6.42877 23.0267C6.53165 23.0267 6.63605 23.0195 6.74098 23.0046L8.84317 22.7073C9.06987 22.6751 9.29438 22.7482 9.45903 22.9074L10.9849 24.3836C11.4098 24.7946 11.9549 25.0001 12.5001 25C13.0451 25 13.5905 24.7945 14.0152 24.3836L15.5412 22.9074C15.7058 22.7482 15.9302 22.6754 16.157 22.7073L18.2592 23.0046C19.43 23.1702 20.5065 22.3878 20.7108 21.2234L21.0776 19.1323C21.1172 18.9067 21.2559 18.7157 21.4582 18.6084L23.3337 17.6132C24.3779 17.0592 24.7893 15.7933 24.2701 14.7312L23.3377 12.8238ZM9.61626 6.01146C11.0739 6.01146 12.2597 7.19734 12.2597 8.65495C12.2597 10.1126 11.0739 11.2984 9.61626 11.2984C8.15865 11.2984 6.97277 10.1126 6.97277 8.65495C6.97277 7.19734 8.15865 6.01146 9.61626 6.01146ZM8.25181 17.7677C8.11104 17.9085 7.92652 17.9789 7.74205 17.9789C7.55758 17.9789 7.37301 17.9086 7.23229 17.7677C6.95074 17.4862 6.95074 17.0297 7.23229 16.7482L16.7483 7.23215C17.0298 6.95061 17.4863 6.95061 17.7679 7.23215C18.0494 7.51369 18.0494 7.97019 17.7679 8.25173L8.25181 17.7677ZM15.3838 18.9885C13.9262 18.9885 12.7403 17.8026 12.7403 16.345C12.7403 14.8874 13.9262 13.7015 15.3838 13.7015C16.8414 13.7015 18.0273 14.8874 18.0273 16.345C18.0273 17.8026 16.8414 18.9885 15.3838 18.9885Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M15.3852 15.1436C14.7227 15.1436 14.1836 15.6826 14.1836 16.3451C14.1836 17.0077 14.7226 17.5467 15.3852 17.5467C16.0477 17.5467 16.5868 17.0077 16.5868 16.3451C16.5868 15.6826 16.0477 15.1436 15.3852 15.1436Z",fill:"#D7607F"}}),r("path",{attrs:{d:"M9.61757 7.45337C8.95503 7.45337 8.41602 7.99238 8.41602 8.65492C8.41602 9.31747 8.95503 9.85653 9.61757 9.85653C10.2801 9.85653 10.8192 9.31752 10.8192 8.65492C10.8191 7.99243 10.2801 7.45337 9.61757 7.45337Z",fill:"#D7607F"}})]),r("defs",[r("clippath",{attrs:{id:"clip0"}},[r("rect",{attrs:{width:"25",height:"25",fill:"white"}})])])]),r("h5",{staticClass:"advantages--item-title"},[t._v("Кешбэк 5%")]),t._m(3)])])]),r("div",{staticClass:"container d-flex justify-center"},[t.mainPage.additionalfields.review_button_text?r("a",{staticClass:"button--transformer section--button advantages--button-review",attrs:{href:t.mainPage.additionalfields.review_button_link}},[t._v(t._s(t.mainPage.additionalfields.review_button_text)),r("span",{staticClass:"button--transformer-border button--transformer-border_top"}),r("span",{staticClass:"button--transformer-border button--transformer-border_bottom"}),r("span",{staticClass:"button--transformer-border button--transformer-border_left"}),r("span",{staticClass:"button--transformer-border button--transformer-border_right"})]):t._e()])]),r("section",{staticClass:"section section--info-delivery-product"},[r("div",{staticClass:"container"},[r("div",{staticClass:"info-delivery-product"},[r("div",{staticClass:"info-delivery-product--inner"},[r("div",{staticClass:"info-delivery-product--item"},[r("h4",{staticClass:"info-delivery-product--item-title"},[t._v(t._s(t.mainPage.additionalfields.delivery_terms))]),t._l(t.deliveryTermsList,(function(e,n){return r("p",{key:n+"-q",staticClass:"info-delivery-product--item-text",domProps:{innerHTML:t._s(e.title.value)}})}))],2),r("div",{staticClass:"info-delivery-product--item"},[r("h4",{staticClass:"info-delivery-product--item-title"},[t._v(t._s(t.mainPage.additionalfields.delivery_interval_page_product))]),t._l(t.deliveryIntervalPageProductList,(function(e,n){return r("p",{key:n+"-w",staticClass:"info-delivery-product--item-text",domProps:{innerHTML:t._s(e.title.value)}})}))],2)]),r("div",{staticClass:"info-delivery-product--inner"},[r("div",{staticClass:"info-delivery-product--item"},[r("h4",{staticClass:"info-delivery-product--item-title"},[t._v(t._s(t.mainPage.additionalfields.shelf_life))]),t._l(t.shelfLifeList,(function(e,n){return r("p",{key:n+"-e",staticClass:"info-delivery-product--item-text",domProps:{innerHTML:t._s(e.title.value)}})}))],2),r("div",{staticClass:"info-delivery-product--item"},[r("h4",{staticClass:"info-delivery-product--item-title"},[t._v(t._s(t.mainPage.additionalfields.variants_payment))]),t._l(t.variantsPaymentList,(function(e,n){return r("p",{key:n+"-r",staticClass:"info-delivery-product--item-text",domProps:{innerHTML:t._s(e.title.value)}})}))],2)])])])]),r("section",{staticClass:"section section--product-page"},[t._m(4),r("div",{staticClass:"container"},[r("div",{staticClass:"grid grid--products grid--xl-4 grid--md-2 grid--sm-2"},t._l(t.otherProducts,(function(t,i){return r("m-item-product",{key:i,attrs:{items:t}})})),1)])]),r("m-section-info")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"advantages--item-text"},[this._v("Поменяем букет или вернём "),e("br"),this._v(" деньги если что-то пошло не так")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"advantages--item-text"},[this._v("Отправляем фото заказа перед "),e("br"),this._v(" доставкой в любой мессенджер")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"advantages--item-text"},[this._v("Дарим бокс с клубникой "),e("br"),this._v(" к первому заказу")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"advantages--item-text"},[this._v("Возвращаем 5% бонусами в личный "),e("br"),this._v(" кабинет от каждого заказа")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"section--title text--center"},[this._v("Похожие товары")])])}],!1,null,null,null);e.default=component.exports}}]);