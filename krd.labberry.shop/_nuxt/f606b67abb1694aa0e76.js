(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{356:function(t,e,n){"use strict";n.r(e);var c={name:"PoliticsPage",computed:{page:function(){return this.$store.getters["pages/getPoliticsPage"]}},beforeRouteLeave:function(t,e,n){this.$store.dispatch("fetchMenu",!1),this.$store.dispatch("fetchCityModal",!1),this.$store.dispatch("fetchCallbackModal",!1),n()}},o=n(3),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"section--title text--center"},[this._v("Политика конфиденциальности")]),e("div",{staticClass:"section--content",domProps:{innerHTML:this._s(this.page.content)}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);