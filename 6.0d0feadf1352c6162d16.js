(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{m9XX:function(t,e,n){"use strict";n.r(e),n.d(e,"CountriesModule",function(){return j});var a=n("ofXK"),c=n("PCNd"),o=n("tyNb"),i=n("fXoL"),r=n("+0xr"),s=n("Xquq"),d=n("Dh3D"),b=n("M9IT"),l=n("0IaG"),u=n("kmnG"),m=n("qFsG"),f=n("3Pt+"),p=n("bTqV");function h(t,e){if(1&t){const t=i.Tb();i.Sb(0,"button",7),i.Zb("click",function(){return i.nc(t),i.dc().add()}),i.yc(1,"Add"),i.Rb()}}function g(t,e){if(1&t){const t=i.Tb();i.Sb(0,"button",7),i.Zb("click",function(){return i.nc(t),i.dc().add()}),i.yc(1,"Update"),i.Rb()}}let y=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}close(){this.dialogRef.close()}add(){this.dialogRef.close(this.data.name)}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(l.f),i.Mb(l.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-dialog"]],decls:15,vars:3,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"click",4,"ngIf"],["mat-button","","cdkFocusInitial","",3,"click"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"h1",1),i.yc(2,"Country"),i.Rb(),i.Sb(3,"div",2),i.Sb(4,"p"),i.yc(5,"Enter Country Name"),i.Rb(),i.Sb(6,"mat-form-field"),i.Sb(7,"mat-label"),i.yc(8,"Name"),i.Rb(),i.Sb(9,"input",3),i.Zb("ngModelChange",function(t){return e.data.name=t}),i.Rb(),i.Rb(),i.Rb(),i.Sb(10,"div",4),i.Sb(11,"button",5),i.Zb("click",function(){return e.close()}),i.yc(12,"Cancel"),i.Rb(),i.xc(13,h,2,0,"button",6),i.xc(14,g,2,0,"button",6),i.Rb(),i.Rb()),2&t&&(i.Ab(9),i.ic("ngModel",e.data.name),i.Ab(4),i.ic("ngIf","ADD"==e.data.action),i.Ab(1),i.ic("ngIf","UPDATE"==e.data.action))},directives:[l.g,l.d,u.b,u.e,m.a,f.a,f.h,f.k,l.c,p.a,a.k],styles:[""]}),t})();var S=n("bKjt"),C=n("5eHb"),w=n("Qs10"),R=n("NFeN");function M(t,e){1&t&&(i.Sb(0,"th",16),i.yc(1," Name "),i.Rb())}function x(t,e){if(1&t&&(i.Sb(0,"td",17),i.yc(1),i.Rb()),2&t){const t=e.$implicit;i.Ab(1),i.Ac(" ",t.name," ")}}function D(t,e){1&t&&(i.Sb(0,"th",18),i.yc(1," Details "),i.Rb())}function k(t,e){if(1&t){const t=i.Tb();i.Sb(0,"td",17),i.Sb(1,"button",19),i.Zb("click",function(){i.nc(t);const n=e.$implicit;return i.dc().redirectToDetails(n.id)}),i.Sb(2,"mat-icon",20),i.yc(3,"reorder"),i.Rb(),i.Rb(),i.Rb()}}function v(t,e){1&t&&(i.Sb(0,"th",18),i.yc(1," Update "),i.Rb())}function P(t,e){if(1&t){const t=i.Tb();i.Sb(0,"td",17),i.Sb(1,"button",21),i.Zb("click",function(){i.nc(t);const n=e.$implicit;return i.dc().redirectToUpdate(n)}),i.Sb(2,"mat-icon",20),i.yc(3,"system_update"),i.Rb(),i.Rb(),i.Rb()}}function O(t,e){1&t&&(i.Sb(0,"th",18),i.yc(1," Delete "),i.Rb())}function A(t,e){if(1&t){const t=i.Tb();i.Sb(0,"td",17),i.Sb(1,"button",22),i.Zb("click",function(){i.nc(t);const n=e.$implicit;return i.dc().redirectToDelete(n.id)}),i.Sb(2,"mat-icon",20),i.yc(3,"delete"),i.Rb(),i.Rb(),i.Rb()}}function _(t,e){1&t&&i.Nb(0,"tr",23)}function T(t,e){1&t&&i.Nb(0,"tr",24)}const N=function(){return[2,4,6,10,20]};let I=(()=>{class t{constructor(t,e,n,a){this.countryService=t,this.toastr=e,this.dialog=n,this.router=a,this.displayedColumns=["name","details","update","delete"],this.dataSource=new r.k([])}ngOnInit(){this.getAllCountries()}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}getAllCountries(){this.countryService.getCountries().subscribe(t=>{this.dataSource.data=t},t=>{this.toastr.error(s.c.errorMessage)})}openDialog(){this.dialog.open(y,{width:"75%",data:{id:"",name:"",action:"ADD"}}).afterClosed().subscribe(t=>{t&&this.countryService.addCountry(t).subscribe(t=>{let e=this.dataSource.data.slice();e.push(t),this.dataSource.data=e},t=>{this.toastr.error(s.c.errorMessage)})})}redirectToDetails(t){this.router.navigate(["/city/"+t])}redirectToUpdate(t){this.dialog.open(y,{width:"75%",data:{id:t.id,name:t.name,action:"UPDATE"}}).afterClosed().subscribe(e=>{e&&this.countryService.updateCountry({id:t.id,name:e}).subscribe(t=>{this.dataSource.data.forEach(e=>{e.id==t.id&&(e.name=t.name)})},t=>{this.toastr.error(s.c.errorMessage)})})}redirectToDelete(t){this.countryService.deleteCountry(t).subscribe(t=>{let e=this.dataSource.data.filter(e=>e.id!=t.id);this.dataSource.data=e},t=>{this.toastr.error(s.c.errorMessage)})}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(S.a),i.Mb(C.b),i.Mb(l.b),i.Mb(o.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-list"]],viewQuery:function(t,e){if(1&t&&(i.Bc(d.a,!0),i.Bc(b.a,!0)),2&t){let t;i.kc(t=i.ac())&&(e.sort=t.first),i.kc(t=i.ac())&&(e.paginator=t.first)}},decls:24,vars:6,consts:[[1,"wrapper","container"],[1,"d-flex","justify-content-between","py-5"],["data-aos","fade-right",1,"title"],["mat-raised-button","","data-aos","fade-left",1,"btn",3,"click"],[1,"fa","fa-plus","text-white","ml-2","text-xs-sm","d-inline-block","mb-1"],["mat-table","","matSort","","data-aos","fade-up",1,"country-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","","mat-sort-header","","class","larger-text",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","details"],["mat-header-cell","","class","larger-text",4,"matHeaderCellDef"],["matColumnDef","update"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["mat-header-cell","","mat-sort-header","",1,"larger-text"],["mat-cell",""],["mat-header-cell","",1,"larger-text"],["mat-icon-button","","color","primary",3,"click"],[1,"mat-18"],["mat-icon-button","","color","accent",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(i.Sb(0,"section",0),i.Nb(1,"app-side-nav"),i.Sb(2,"div",1),i.Sb(3,"h1",2),i.yc(4,"Countries"),i.Rb(),i.Sb(5,"button",3),i.Zb("click",function(){return e.openDialog()}),i.yc(6," Add New Country "),i.Nb(7,"i",4),i.Rb(),i.Rb(),i.Sb(8,"table",5),i.Qb(9,6),i.xc(10,M,2,0,"th",7),i.xc(11,x,2,1,"td",8),i.Pb(),i.Qb(12,9),i.xc(13,D,2,0,"th",10),i.xc(14,k,4,0,"td",8),i.Pb(),i.Qb(15,11),i.xc(16,v,2,0,"th",10),i.xc(17,P,4,0,"td",8),i.Pb(),i.Qb(18,12),i.xc(19,O,2,0,"th",10),i.xc(20,A,4,0,"td",8),i.Pb(),i.xc(21,_,1,0,"tr",13),i.xc(22,T,1,0,"tr",14),i.Rb(),i.Nb(23,"mat-paginator",15),i.Rb()),2&t&&(i.Ab(8),i.ic("dataSource",e.dataSource),i.Ab(13),i.ic("matHeaderRowDef",e.displayedColumns),i.Ab(1),i.ic("matRowDefColumns",e.displayedColumns),i.Ab(1),i.ic("pageSize",4)("pageSizeOptions",i.jc(5,N)))},directives:[w.a,p.a,r.j,d.a,r.c,r.e,r.b,r.g,r.i,b.a,r.d,d.b,r.a,R.a,r.f,r.h],styles:[".wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.8rem}.wrapper[_ngcontent-%COMP%]   .larger-text[_ngcontent-%COMP%]{font-size:1.1rem}.wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background-color:var(--secondary);color:var(--white);font-size:1rem;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{opacity:.8}.wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{overflow-x:auto;overflow-y:hidden;min-width:500px;margin:auto;width:100%!important}.wrapper[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]{text-align:left;max-width:300px}@media only screen and (max-width:768px){table[_ngcontent-%COMP%]{min-width:50px!important}.title[_ngcontent-%COMP%]{font-size:1.3rem!important}.larger-text[_ngcontent-%COMP%]{font-size:.8rem!important}.btn[_ngcontent-%COMP%]{font-size:.7rem!important}}"]}),t})();const z=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-countries"]],decls:1,vars:0,template:function(t,e){1&t&&i.Nb(0,"app-list")},directives:[I],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(z)],o.d]}),t})(),j=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[a.c,c.a,Z,f.f]]}),t})()}}]);