(this.webpackJsonplounge=this.webpackJsonplounge||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"a":"https://hyun.pythonanywhere.com/"}')},38:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(31),r=a.n(s),i=a(6),l=a(5),o=a(2),u=a.n(o),j=a(4),d=a(12),b=(a(38),a(0)),h=function(){return Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(i.b,{to:"/",children:"SW Lounge"})})},p=a(3),O=(a(45),function(e){var t=e.qnaData,a=e.answer,c=e.name,n=e.password,s=e.kakao,r=e.postComment,l=e.delectComment,o=e.updateComment,u=e.pwdInput;return Object(b.jsx)("div",{className:"detail",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"d-title d-header",children:t.title}),Object(b.jsxs)("div",{className:"d-nav",children:[Object(b.jsx)("div",{className:"d-n-writer d-header",children:t.writer}),Object(b.jsx)("div",{className:"d-n-language d-header",children:t.language})]}),Object(b.jsxs)("div",{className:"d-nav",children:[Object(b.jsx)("div",{className:"d-n-date d-header",children:t.create_at}),Object(b.jsx)("div",{className:"d-header",children:t.tag1}),Object(b.jsx)("div",{className:"d-header",children:t.tag2&&t.tag2}),Object(b.jsx)("div",{className:"d-header",children:t.tag3&&t.tag3}),Object(b.jsx)(i.b,{to:"update?id="+t.id,className:"d-n-update d-header",children:"\uc218\uc815"})]}),Object(b.jsxs)("div",{className:"d-question",children:[Object(b.jsx)("div",{className:"d-qTitle",children:"\uc9c8\ubb38"}),Object(b.jsx)("div",{className:"d-q",children:t.content})]}),Object(b.jsxs)("div",{className:"d-answer",children:[Object(b.jsx)("div",{className:"d-aTitle",children:"\ub2f5\ubcc0"}),t.comment&&t.comment[0]?t.comment.map((function(e){return Object(b.jsxs)("div",{className:"d-a",children:[Object(b.jsxs)("div",{className:"d-a-header",children:[Object(b.jsx)("div",{children:e.create_at}),Object(b.jsx)("div",{children:e.name})]}),Object(b.jsx)("div",{className:"d-a-header",children:Object(b.jsxs)("div",{className:"d-a-option",children:[Object(b.jsx)("div",{onClick:function(){n.value===e.password?o(c.value,t.id,a.value,n.value,s.value,e.id):(u.current.focus(),alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"))},children:"\uc218\uc815"}),Object(b.jsx)("div",{onClick:function(){n.value===e.password?l(e.id):(u.current.focus(),alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"))},children:"\uc0ad\uc81c"})]})}),Object(b.jsx)("div",{className:"d-a-content",children:e.content})]},e.id)})):Object(b.jsx)("div",{className:"d-a",children:"\uc544\uc9c1 \ub2f5\ubcc0\uc774 \uc5c6\uc2b5\ub2c8\ub2e4 \ub2f5\ubcc0\uc744 \ucd94\uac00\ud574 \ubcf4\uc138\uc694"})]}),Object(b.jsx)("div",{className:"d-aTitle",children:"\ub2f5\ubcc0\ud558\uae30"}),Object(b.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},c),{},{placeholder:"\uc774\ub984"})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({type:"text"},n),{},{ref:u,placeholder:"\ube44\ubc00\ubc88\ud638"})),Object(b.jsx)("input",Object(p.a)({type:"checkbox"},s)),Object(b.jsx)("textarea",Object(p.a)({className:"d-aWrite",placeholder:"\uc9c8\ubb38\uc5d0 \ub300\ud55c \ub2f5\ubcc0\uc744 \ud574\uc8fc\uc138\uc694"},a)),Object(b.jsx)("div",{className:"d-form",children:Object(b.jsx)("button",{className:"d-f-button",onClick:function(){return r(c.value,t.id,a.value,n.value,s.value)},children:"\uc791\uc131\ud558\uae30"})})]})})}),x=(a(46),function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)(i.b,{to:"https://www.instagram.com/jnu_sw_lounge/",children:Object(b.jsx)("img",{className:"footer-img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/480px-Instagram_logo_2016.svg.png",alt:""})}),Object(b.jsx)(i.b,{to:"http://pf.kakao.com/_xiBKcK",children:Object(b.jsx)("img",{className:"footer-img",src:"https://upload.wikimedia.org/wikipedia/commons/d/de/Kakao_CI_yellow.svg",alt:""})})]})}),v=function(e){var t=Object(c.useState)(e),a=Object(d.a)(t,2),n=a[0],s=a[1];return{value:n,onChange:function(e){s(e.target.value)},setValue:s}},m=a(16),f=a(13),g=a.n(f),w=a(14),N=new function e(){Object(m.a)(this,e),this.getDetail=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(w.a,"board/detail/").concat(t));case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.updateBoard=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c,n,s,r,i,l,o,j,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,c=t.content,n=t.writer,s=t.language,r=t.password,i=t.tag1,l=t.tag2,o=t.tag3,j=t.id,d={title:a,content:c,writer:n,language:s,password:r,tag1:i,tag2:l,tag3:o},e.prev=2,e.next=5,g.a.put("".concat(w.a,"board/detail/").concat(j,"/"),d);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),this.deleteDetail=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,g.a.delete("".concat(w.a,"board/detail/").concat(t));case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},k=new function e(){Object(m.a)(this,e),this.postComment=function(){var e=Object(j.a)(u.a.mark((function e(t,a,c,n,s){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={name:t,board_id:a,content:c,password:n,kakao:s},e.next=4,g.a.post("".concat(w.a,"/board/comment/post/"),r);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,c,n,s){return e.apply(this,arguments)}}(),this.updateComment=function(){var e=Object(j.a)(u.a.mark((function e(t,a,c,n,s,r){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i={name:t,board_id:a,content:c,password:n,kakao:s},e.next=4,g.a.put("".concat(w.a,"/board/comment/").concat(r,"/"),i);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),400===e.t0.response.status&&alert("\uc774\ub984\uacfc \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a,c,n,s,r){return e.apply(this,arguments)}}(),this.delectComment=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("".concat(w.a,"/board/comment/").concat(t,"/"));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},y=function(e){var t=Object(c.useState)(e),a=Object(d.a)(t,2),n=a[0],s=a[1];return{value:n,onClick:function(){s(!n)}}},C=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(d.a)(s,2),i=r[0],o=r[1],p=Object(c.useRef)(),m=Object(l.f)().location.search.split("=")[1],f=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.setValue(""),w.setValue(""),q.setValue(""),N.getDetail(1*m).then((function(e){return n(e.data)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return f()}),[i]);var g=v(""),w=v(""),C=y(!1),q=v(""),V=function(){var e=Object(j.a)(u.a.mark((function e(t,a,c,n,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.postComment(t,a,c,n,s).then((function(){o(!i)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,c,n,s){return e.apply(this,arguments)}}(),_=function(){var e=Object(j.a)(u.a.mark((function e(t,a,c,n,s,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.updateComment(t,a,c,n,s,r).then((function(){return o(!i)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,c,n,s,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.delectComment(t).then((function(){return o(!i)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(O,{qnaData:a,name:g,password:w,kakao:C,answer:q,postComment:V,delectComment:S,updateComment:_,pwdInput:p}),Object(b.jsx)(x,{})]})},q=(a(65),a.p+"static/media/Lounge.bcdcdc34.webm"),V=function(){return Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)("video",{className:"video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,children:[Object(b.jsx)("source",{src:q,type:"video/webm"}),"Your browser does not support the video tag."]})})},_=a.p+"static/media/hamburger.f8d6c5c1.png",S=(a(66),function(){var e=y(!1);return Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)("div",{className:"white "+(e.value&&"openMenu")}),Object(b.jsx)("div",{}),e.value?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.b,{className:"nav-item",to:"/qna",children:"Q&A"}),Object(b.jsx)(i.b,{className:"nav-item",to:"/printer",children:"3D Printer"}),Object(b.jsx)("div",{className:"title",children:"SW Lounge"}),Object(b.jsx)("a",{className:"nav-item",href:"https://www.instagram.com/jnu_sw_lounge/",children:"Instagram"}),Object(b.jsx)("a",{className:"nav-item",href:"http://pf.kakao.com/_xiBKcK",children:"KaKaotalk Channel"}),Object(b.jsx)("img",{className:"m-button",onClick:e.onClick,src:_,alt:""})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"title",children:"SW Lounge"}),Object(b.jsx)("img",{className:"m-button",onClick:e.onClick,src:_,alt:""})]})]})}),D=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(S,{}),Object(b.jsx)(V,{})]})},I=(a(67),function(){return Object(b.jsx)("div",{className:"printer",children:Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"p-title",children:"\uc900\ube44\uc911"})})})}),P=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(I,{}),Object(b.jsx)(x,{})]})},B=(a(68),function(e){var t=e.searchValue,a=e.searcher;return Object(b.jsx)("div",{className:"search",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"s-form",children:[Object(b.jsxs)("select",Object(p.a)(Object(p.a)({className:"s-select"},a),{},{children:[Object(b.jsx)("option",{value:"\uc81c\ubaa9",children:"\uc81c\ubaa9"}),Object(b.jsx)("option",{value:"\uc791\uc131\uc790",children:"\uc791\uc131\uc790"}),Object(b.jsx)("option",{value:"\ud0dc\uadf8",children:"\ud0dc\uadf8"}),Object(b.jsx)("option",{value:"\uc5b8\uc5b4",children:"\uc5b8\uc5b4"})]})),Object(b.jsx)("input",Object(p.a)({className:"s-input",placeholder:"\uac80\uc0c9\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",type:"text"},t))]}),Object(b.jsx)(i.b,{className:"s-button",to:"/write",children:Object(b.jsx)("button",{className:"s-b-item",children:"\uc791\uc131\ud558\uae30"})})]})})}),W=(a(69),function(e){var t=e.qnaList,a=e.searchValue,c=e.searcher;return Object(b.jsx)("div",{className:"qna",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"q-title",children:"Q&A"}),Object(b.jsxs)("div",{className:"q-allBorad",children:["\uc804\uccb4 \uac8c\uc2dc\uae00: ",t.length]}),Object(b.jsx)(B,{searchValue:a,searcher:c}),Object(b.jsx)("div",{className:"q-content",children:Object(b.jsxs)("table",{className:"q-list",children:[Object(b.jsxs)("colgroup",{children:[Object(b.jsx)("col",{width:"5%"}),Object(b.jsx)("col",{width:"50%"}),Object(b.jsx)("col",{width:"10%"}),Object(b.jsx)("col",{width:"15%"}),Object(b.jsx)("col",{width:"5%"}),Object(b.jsx)("col",{width:"15%"})]}),Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"NO."}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Writer"}),Object(b.jsx)("th",{children:"KeyWord"}),Object(b.jsx)("th",{children:"language"}),Object(b.jsx)("th",{children:"Date"})]})}),Object(b.jsx)("tbody",{children:""!==a.value?t.filter((function(e){return"\uc81c\ubaa9"===c.value&&e.title.includes(a.value)||"\uc791\uc131\uc790"===c.value&&e.writer.includes(a.value)||"\ud0dc\uadf8"===c.value&&e.tag1.includes(a.value)||"\uc5b8\uc5b4"===c.value&&e.language.includes(a.value)})).map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{className:"q-l-title",children:Object(b.jsx)(i.b,{to:"/detail?id="+e.id,children:e.title})}),Object(b.jsx)("td",{children:e.writer}),Object(b.jsxs)("td",{className:"q-l-tags",children:[Object(b.jsxs)("span",{children:[e.tag1,","]}),Object(b.jsxs)("span",{children:[" ",e.tag2,","]}),Object(b.jsxs)("span",{children:[" ",e.tag3]})]}),Object(b.jsx)("td",{children:e.language}),Object(b.jsx)("td",{children:e.date})]},t)})):t.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{className:"q-l-title",children:Object(b.jsx)(i.b,{to:"/detail?id="+e.id,children:e.title})}),Object(b.jsx)("td",{children:e.writer}),Object(b.jsxs)("td",{className:"q-l-tags",children:[Object(b.jsxs)("span",{children:[e.tag1,","]}),Object(b.jsxs)("span",{children:[" ",e.tag2,","]}),Object(b.jsxs)("span",{children:[" ",e.tag3]})]}),Object(b.jsx)("td",{children:e.language}),Object(b.jsx)("td",{children:e.create_at})]},t)}))})]})})]})})}),K=function(e){var t=Object(c.useState)(e),a=Object(d.a)(t,2),n=a[0],s=a[1];return{value:n,onChange:function(e){s(e.target.value)},setValue:s}},J=new function e(){Object(m.a)(this,e),this.getBoard=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(w.a,"board"));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.postBoard=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c,n,s,r,i,l,o,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.title,c=t.content,n=t.writer,s=t.language,r=t.password,i=t.tag1,l=t.tag2,o=t.tag3,j={title:a,content:c,writer:n,language:s,password:r,tag1:i,tag2:l,tag3:o},e.prev=2,e.next=5,g.a.post("".concat(w.a,"board/"),j);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getBoard().then((function(e){n(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){s().then((function(){return console.log(a)}))}),[]);var r=v(""),i=K("\uc81c\ubaa9");return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),a&&Object(b.jsx)(W,{qnaList:a,searchValue:r,searcher:i}),Object(b.jsx)(x,{})]})},L=(a(70),function(e){var t=e.title,a=e.language,c=e.password,n=e.tag1,s=e.tag2,r=e.tag3,i=e.writer,l=e.content,o=e.tryWrite,u=e.isPass;return Object(b.jsx)("div",{className:"write",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"w-title",children:"\uac8c\uc2dc\uae00 \uc791\uc131"}),Object(b.jsxs)("div",{className:"w-from",children:[Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-title w-f",type:"text"},t),{},{placeholder:"\uc81c\ubaa9"})),Object(b.jsxs)("select",Object(p.a)(Object(p.a)({className:"w-f-len w-f"},a),{},{children:[Object(b.jsx)("option",{value:null,children:"\uc5b8\uc5b4"}),Object(b.jsx)("option",{value:"C",children:"C"}),Object(b.jsx)("option",{value:"JS",children:"JavaScript"}),Object(b.jsx)("option",{value:"PYTHON",children:"PYTHON"}),Object(b.jsx)("option",{value:"JAVA",children:"JAVA"}),Object(b.jsx)("option",{value:"C+",children:"C+"})]})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-pwd w-f",type:"text"},c),{},{placeholder:"\ube44\ubc00\ubc88\ud638"})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-key w-f",type:"text"},n),{},{placeholder:"\ud0a4\uc6cc\ub4dc1                               ex)C, Python"})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-key1 w-f",type:"text"},s),{},{placeholder:"\ud0a4\uc6cc\ub4dc2              ex)\ud568\uc218,\ubc30\uc5f4"})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-key2 w-f",type:"text"},r),{},{placeholder:"\ud0a4\uc6cc\ub4dc3"})),Object(b.jsx)("input",Object(p.a)(Object(p.a)({className:"w-f-writer w-f",type:"text"},i),{},{placeholder:"\uc791\uc131\uc790"})),Object(b.jsx)("textarea",Object(p.a)(Object(p.a)({className:"w-f-content w-f"},l),{},{placeholder:"\ub0b4\uc6a9"})),Object(b.jsx)("button",{className:"w-f-button w-f",onClick:o,children:u?"\uc218\uc815":"\uc791\uc131"})]})]})})}),T=(a(71),function(e){var t=e.password,a=e.isPass,c=e.pwdInput;return Object(b.jsx)("div",{className:"password",children:Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"p-form",children:[Object(b.jsx)("div",{className:"p-f-title",children:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),Object(b.jsx)("input",Object(p.a)({type:"password",className:"p-f-input"},c)),Object(b.jsx)("button",{className:"p-f-button",onClick:function(){1*c.value===1*t?a.onClick():alert("\ube44\ubc00\ubc88\ud638\uac00 \ud2c0\ub838\uc2b5\ub2c8\ub2e4.")},children:"\ud655\uc778\ud558\uae30"})]})})})}),E=(a(72),function(e){var t=e.deleteDetail;return Object(b.jsx)("div",{className:"delete",children:Object(b.jsx)("button",{onClick:t,children:"\uc0ad\uc81c"})})}),F=function(){var e=v(),t=K(),a=v(),n=v(),s=v(),r=v(),i=v(),o=v(),d=function(){var c=Object(j.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,N.getDetail(1*O).then((function(c){var l=c.data;e.setValue(l.title),t.setValue(l.language),a.setValue(l.password),n.setValue(l.tag1),s.setValue(l.tag2),r.setValue(l.tag3),i.setValue(l.writer),o.setValue(l.content)}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();Object(c.useEffect)((function(){d()}),[]);var p=Object(l.f)(),O=p.location.search.split("=")[1],m=function(){var c=Object(j.a)(u.a.mark((function c(){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:console.log(e.value,o.value,i.value,t.value,a.value,n.value,s.value,r.value,1*O),N.updateBoard({title:e.value,content:o.value,writer:i.value,language:t.value,password:a.value,tag1:n.value,tag2:s.value,tag3:r.value,id:1*O}).then((function(){return p.push("/qna")}));case 2:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.deleteDetail(1*O).then((function(){return p.push("/qna")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=y(!1),w=v("");return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),g.value?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(L,{title:e,language:t,password:a,tag1:n,tag2:s,tag3:r,writer:i,content:o,tryWrite:m,isPass:g}),Object(b.jsx)(E,{deleteDetail:f})]}):Object(b.jsx)(T,{password:a.value,isPass:g,pwdInput:w}),Object(b.jsx)(x,{})]})},Y=function(){var e=v(""),t=K(""),a=v(""),c=v(""),n=v(""),s=v(""),r=v(""),i=v(""),o=Object(l.f)(),d=function(){var l=Object(j.a)(u.a.mark((function l(){return u.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(l.prev=0,!(e.value&&t.value&&a.value&&c.value&&r.value&&i.value)){l.next=6;break}return l.next=4,J.postBoard({title:e.value,content:i.value,writer:r.value,language:t.value,password:a.value,tag1:c.value,tag2:n.value,tag3:s.value}).then((function(){o.push("/qna")}));case 4:l.next=7;break;case 6:alert("\uc785\ub825\uc744 \ud574\uc8fc\uc138\uc694");case 7:l.next=12;break;case 9:l.prev=9,l.t0=l.catch(0),console.log(l.t0);case 12:case"end":return l.stop()}}),l,null,[[0,9]])})));return function(){return l.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)(L,{title:e,language:t,password:a,tag1:c,tag2:n,tag3:s,writer:r,content:i,tryWrite:d}),Object(b.jsx)(x,{})]})},H=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:D}),Object(b.jsx)(l.a,{path:"/qna",component:A}),Object(b.jsx)(l.a,{path:"/write",component:Y}),Object(b.jsx)(l.a,{path:"/detail",component:C}),Object(b.jsx)(l.a,{path:"/update",component:F}),Object(b.jsx)(l.a,{path:"/printer",component:P})]})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.707d852d.chunk.js.map