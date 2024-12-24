import{d,j as m,o as t,e as i,t as c,n as k,k as v,l as s,g as z,m as p,p as a,q as l}from"./vue.esm-bundler-C4Z7zYUC.js";const r=d({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(u,{emit:o}){const e=u,n=o,y=m(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),g=m(()=>({backgroundColor:e.backgroundColor})),b=()=>{n("click",1)};return(f,A)=>(t(),i("button",{type:"button",class:k(y.value),onClick:b,style:v(g.value)},c(f.label),7))}});r.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["D:/code/learning/实战项目/组件库/component-library/stories/Button.vue"]};const h={class:"storybook-header"},B={key:0,class:"welcome"},C=d({__name:"Header",props:{user:{}},emits:["createAccount","login","logout"],setup(u){return(o,e)=>(t(),i("header",null,[s("div",h,[e[5]||(e[5]=z('<div><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg><h1>Acme</h1></div>',1)),s("div",null,[o.user?(t(),i("span",B,[e[3]||(e[3]=p("Welcome, ")),s("b",null,c(o.user.name),1),e[4]||(e[4]=p("!"))])):a("",!0),o.user?(t(),l(r,{key:1,size:"small",onClick:e[0]||(e[0]=n=>o.$emit("logout")),label:"Log out"})):a("",!0),o.user?a("",!0):(t(),l(r,{key:2,size:"small",onClick:e[1]||(e[1]=n=>o.$emit("login")),label:"Log in"})),o.user?a("",!0):(t(),l(r,{key:3,primary:"",size:"small",onClick:e[2]||(e[2]=n=>o.$emit("createAccount")),label:"Sign up"}))])])]))}});C.__docgenInfo={exportName:"default",displayName:"Header",description:"",tags:{},props:[{name:"user",required:!0,type:{name:"union",elements:[{name:"{ name: string }"},{name:"null"}]}}],events:[{name:"logout"},{name:"login"},{name:"createAccount"}],sourceFiles:["D:/code/learning/实战项目/组件库/component-library/stories/Header.vue"]};export{C as _};