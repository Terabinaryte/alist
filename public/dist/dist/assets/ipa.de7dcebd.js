import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dB as g,dC as d,a1 as a,dA as f}from"./index.d1370f4d.js";import{F as h}from"./File.b2c16a98.js";import"./icon.d834532b.js";import"./index.aef5a268.js";import"./Layout.176ab29a.js";import"./useTitle.a8855539.js";import"./index.e77775db.js";import"./FolderTree.026be47d.js";import"./index.702f7d39.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
