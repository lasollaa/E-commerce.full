"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[45],{6286:(v,l,a)=>{a.d(l,{N:()=>u});var c=a(5619),i=a(4769),t=a(9862);let u=(()=>{class o{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new c.X(0)}addToCart(e){return this._HttpClient.post(this.baseUrl+"cart",{productId:e})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(e){return this._HttpClient.delete(this.baseUrl+`cart/${e}`,{})}updateCartCount(e,s){return this._HttpClient.put(this.baseUrl+`cart/${e}`,{count:s})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(e,s){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${e}?url=http://localhost:4200`,{shippingAddress:s})}static#t=this.\u0275fac=function(s){return new(s||o)(i.LFG(t.eN))};static#e=this.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},4045:(v,l,a)=>{a.r(l),a.d(l,{BlankLayoutComponent:()=>d});var c=a(6814),i=a(1120),t=a(4769),u=a(6286);let o=(()=>{class e{constructor(n,r){this._Router=n,this._CartService=r,this.cartNum=0}ngOnInit(){this._CartService.cartNumber.subscribe({next:n=>{console.log("nav",n),this.cartNum=n}}),this._CartService.getCartUser().subscribe({next:n=>{console.log("nav",n),this.cartNum=n.numOfCartItems}})}signOut(){localStorage.removeItem("etoken"),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(r){return new(r||e)(t.Y36(i.F0),t.Y36(u.N))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-blank"]],standalone:!0,features:[t.jDz],decls:41,vars:1,consts:[[1,"navbar","navbar-expand-md","bg-white","fixed-top","px-5","p-4"],[1,"container-fluid"],["routerLink","",1,"navbar-brand"],["src","./assets/Screenshot 2024-03-07 004128.png","alt","fresh cart"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","m-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/wishlist",1,"nav-link"],["routerLinkActive","active-link","routerLink","/cart",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0","align-items-center"],[1,"nav-item","dropdown"],["role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"fas","fa-user","fa-xl"],[1,"dropdown-menu"],["role","button","routerLink","/forgetpassword","routerLinkActive","active-link"],[1,"dropdown-item"],[1,"nav-item","fa"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2x"],[1,"badge","bg-success","position-absolute","top-0","end-0"],[1,"nav-item","my-3"],["role","button",3,"click"]],template:function(r,p){1&r&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t._UZ(4,"button",4),t.TgZ(5,"div",5)(6,"ul",6)(7,"li",7)(8,"a",8),t._uU(9,"home"),t.qZA()(),t.TgZ(10,"li",7)(11,"a",9),t._uU(12,"wish list"),t.qZA()(),t.TgZ(13,"li",7)(14,"a",10),t._uU(15,"cart"),t.qZA()(),t.TgZ(16,"li",7)(17,"a",11),t._uU(18,"products"),t.qZA()(),t.TgZ(19,"li",7)(20,"a",12),t._uU(21,"brands"),t.qZA()(),t.TgZ(22,"li",7)(23,"a",13),t._uU(24,"categories"),t.qZA()()(),t.TgZ(25,"ul",14)(26,"li",15)(27,"a",16),t._UZ(28,"i",17),t.qZA(),t.TgZ(29,"ul",18)(30,"li",19)(31,"a",20),t._uU(32,"Forget Password"),t.qZA()()()(),t.TgZ(33,"li",21)(34,"a",22),t._UZ(35,"i",23),t.TgZ(36,"span",24),t._uU(37),t.qZA()()(),t.TgZ(38,"li",25)(39,"span",26),t.NdJ("click",function(){return p.signOut()}),t._uU(40,"LogOut"),t.qZA()()()()()()),2&r&&(t.xp6(37),t.Oqu(p.cartNum))},dependencies:[c.ez,i.rH,i.Od]})}return e})(),d=(()=>{class e{static#t=this.\u0275fac=function(r){return new(r||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blank-layout"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(r,p){1&r&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA())},dependencies:[c.ez,o,i.lC],styles:[".container-fluid[_ngcontent-%COMP%]{padding-top:80px}"]})}return e})()}}]);