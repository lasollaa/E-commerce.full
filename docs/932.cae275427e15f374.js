"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[932],{6666:(T,u,l)=>{l.r(u),l.d(u,{LoginComponent:()=>h});var g=l(6814),n=l(95),_=l(1120),e=l(4769),p=l(9410);function c(o,s){1&o&&(e.TgZ(0,"p"),e._uU(1,"email is required"),e.qZA())}function d(o,s){if(1&o&&(e.TgZ(0,"div",12),e.YNc(1,c,2,0,"p",13),e.qZA()),2&o){const r=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("required"))}}function f(o,s){1&o&&(e.TgZ(0,"p"),e._uU(1,"password is required"),e.qZA())}function Z(o,s){if(1&o&&(e.TgZ(0,"div",12),e.YNc(1,f,2,0,"p",13),e.qZA()),2&o){const r=e.oxw();let t;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("required"))}}function v(o,s){if(1&o&&(e.TgZ(0,"p",14),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.Oqu(r.errMsg)}}let h=(()=>{class o{constructor(r,t){this._AuthService=r,this._Router=t,this.errMsg="",this.loginForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),password:new n.NI("",[n.kI.required,n.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)])})}handleForm(){!0===this.loginForm.valid&&this._AuthService.login(this.loginForm.value).subscribe({next:t=>{"success"==t.message&&(localStorage.setItem("etoken",t.token),this._AuthService.decodeUser(),this._Router.navigate(["/home"]))},error:t=>{this.errMsg=t.error.message}})}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e),e.Y36(_.F0))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:20,vars:5,consts:[[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger p-1 small w-50 mx-auto",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","my-5",3,"disabled"],["routerLink","/forgotpassword",1,"link-primary"],["class","alert alert-danger p-1 w-50 mx-auto mb-0 text-center",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-50","mx-auto"],[4,"ngIf"],[1,"alert","alert-danger","p-1","w-50","mx-auto","mb-0","text-center"]],template:function(t,i){if(1&t&&(e.TgZ(0,"section")(1,"h1",0),e._uU(2,"login now"),e.qZA(),e.TgZ(3,"form",1),e.NdJ("ngSubmit",function(){return i.handleForm()}),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"email"),e.qZA(),e._UZ(7,"input",4),e.qZA(),e.YNc(8,d,2,1,"div",5),e.TgZ(9,"div",2)(10,"label",6),e._uU(11,"password"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.YNc(13,Z,2,1,"div",5),e.TgZ(14,"div",8)(15,"button",9),e._uU(16,"login"),e.qZA(),e.TgZ(17,"a",10),e._uU(18,"ForgetPassword"),e.qZA()(),e.YNc(19,v,2,1,"p",11),e.qZA()()),2&t){let a,m;e.xp6(3),e.Q6J("formGroup",i.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(a=i.loginForm.get("email"))?null:a.errors)&&(null==(a=i.loginForm.get("email"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=i.loginForm.get("password"))?null:m.errors)&&(null==(m=i.loginForm.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",i.loginForm.invalid),e.xp6(4),e.Q6J("ngIf",i.errMsg)}},dependencies:[g.ez,g.O5,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,_.rH]})}return o})()}}]);