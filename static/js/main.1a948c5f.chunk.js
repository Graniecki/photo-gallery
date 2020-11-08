(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(21),r=n.n(i),o=(n(29),n(7)),l=n(11),u=n(2),j=(n(30),n(16)),b=n.n(j),m=(n(31),function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)("nav",{className:"navigation",children:Object(c.jsxs)("ul",{className:"navigation-list",children:[Object(c.jsx)(l.b,{to:"/photo-gallery",children:Object(c.jsx)("li",{className:b()({"navigation-item":!0,selected:n}),onClick:function(){return s(!0)},children:"Gallery"})}),Object(c.jsx)(l.b,{to:"/favourite",children:Object(c.jsx)("li",{className:b()({"navigation-item":!0,selected:!n}),onClick:function(){return s(!1)},children:"Favourite"})})]})})}),h=n(13),O=n(19),p=n.n(O),d=n(23),g=(n(38),n(39),function(e){var t=e.paginate,n=Object(h.a)(Array(10).keys());return Object(c.jsx)("nav",{className:"pagination",children:Object(c.jsx)("ul",{className:"pagination-list",children:n.map((function(e){return Object(c.jsx)("li",{className:"pagination-item",onClick:function(){return t(e+1)},children:e+1},e)}))})})}),f=(n(40),function(e){var t=e.imagesPerPage,n=e.setPostsPerPage;return Object(c.jsxs)("form",{className:"settings",onSubmit:function(e){e.preventDefault();var t=e.target.querySelector(".image-count").value;n(+t)},children:[Object(c.jsx)("label",{htmlFor:"picture-count",children:"Images per page:"}),Object(c.jsx)("input",{className:"image-count",type:"number",id:"picture-count",min:"1",max:"100",defaultValue:t}),Object(c.jsx)("button",{className:"submit-button",type:"submit",children:"Save"})]})}),x=s.a.createContext([]),v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(o.a)(i,2),l=r[0],u=r[1],j=Object(a.useState)(1),b=Object(o.a)(j,2),m=b[0],O=b[1],v=Object(a.useState)(15),y=Object(o.a)(v,2),N=y[0],k=y[1],S="https://picsum.photos/v2/list?page=".concat(m,"&limit=100");Object(a.useEffect)((function(){(function(){var e=Object(d.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch(S).then((function(e){return e.json()}));case 3:t=e.sent,s(t),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var P=n.slice(0,N),C=Object(a.useContext)(x),F=C.likes,L=C.setLikes,q=function(e){var t=e.target.closest(".image"),n=t.querySelector("img").src,c=t.querySelector(".heart");c.style.opacity=1,setTimeout((function(){c.style.opacity=0}),300),F.some((function(e){return e===n}))||L((function(e){return[n].concat(Object(h.a)(e))}))};return l?Object(c.jsx)("h2",{className:"loading",children:"Loading ..."}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{imagesPerPage:N,setPostsPerPage:k}),Object(c.jsx)("div",{className:"images",children:P.map((function(e){return Object(c.jsxs)("div",{className:"image",onDoubleClick:q,children:[Object(c.jsx)("img",{src:e.download_url,alt:"something-beauty"}),Object(c.jsx)("span",{className:"heart",children:"\u2764"})]},e.id)}))}),Object(c.jsx)(g,{paginate:function(e){return O(e)}})]})},y=(n(41),function(){var e=Object(a.useContext)(x),t=e.likes,n=e.setLikes,s=function(e){var c=e.target.nextSibling.src;e.target.parentElement.style.opacity=0,setTimeout((function(){n(t.filter((function(e){return e!==c})))}),400)},i=function(e){e.target.parentElement.querySelector(".remove-photo").style.opacity=1},r=function(e){e.target.parentElement.querySelector(".remove-photo").style.opacity=0};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"likes-photos",children:t.map((function(e){return Object(c.jsxs)("div",{className:"likes-photo",onMouseOver:i,onMouseLeave:r,children:[Object(c.jsx)("div",{className:"remove-photo",onClick:s,children:"\u2716"}),Object(c.jsx)("img",{src:e,alt:"something-beauty"})]},e)}))}),0===t.length&&Object(c.jsxs)("div",{className:"no-likes",children:[Object(c.jsx)("span",{className:"title",children:"No favorite photos yet!"}),Object(c.jsx)("span",{className:"smile",children:"\ud83e\udd28"})]})]})});var N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.jsx)(x.Provider,{value:{likes:n,setLikes:s},children:Object(c.jsxs)(l.a,{children:[Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Photo gallery"}),Object(c.jsx)(m,{})]}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/photo-gallery",component:v}),Object(c.jsx)(u.a,{exact:!0,path:"/favourite",component:y})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.1a948c5f.chunk.js.map