(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{407:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__3Zbdx",dialogsTitle:"Dialogs_dialogsTitle__QCU90",dialogsContent:"Dialogs_dialogsContent__3MJab",dialogsColumn:"Dialogs_dialogsColumn__1aQch",messagesColumn:"Dialogs_messagesColumn__1Z03e",messagesItems:"Dialogs_messagesItems__33bR3"}},408:function(e,a,s){e.exports={dialogItem:"DialogItem_dialogItem__3AjHK",NavLink:"DialogItem_NavLink__28e6D",dialogItemActive:"DialogItem_dialogItemActive__2MYNC"}},409:function(e,a,s){e.exports={messageWrapper:"MessagesItem_messageWrapper__3VskI",owner:"MessagesItem_owner__W4GRb",messageAuthor:"MessagesItem_messageAuthor__1JTqE",messageAuthorPhoto:"MessagesItem_messageAuthorPhoto__1x4M2",messageAuthorName:"MessagesItem_messageAuthorName__2tIuO",messageText:"MessagesItem_messageText__1Cwle",messageAuthorPhotoOwner:"MessagesItem_messageAuthorPhotoOwner__KdKRR",messageTextOwner:"MessagesItem_messageTextOwner__3TQgC"}},705:function(e,a,s){e.exports={newPosts:"AddNewMessage_newPosts__3yqf4",newPosts__title:"AddNewMessage_newPosts__title__1iZ4S",newPosts__text:"AddNewMessage_newPosts__text__3GvE0",newPosts__button:"AddNewMessage_newPosts__button__36opm"}},713:function(e,a,s){"use strict";s.r(a);var t=s(35),n=s(36),o=s(38),i=s(37),r=s(0),l=s.n(r),m=s(17),g=s(12),c=s(9),d=s(22),u=s(106),p=s(407),_=s.n(p),h=s(16),f=s(408),v=s.n(f),w=function(e){return l.a.createElement("p",{className:v.a.dialogItem},l.a.createElement(h.b,{to:"/dialogs/"+e.id,className:v.a.NavLink,activeClassName:v.a.dialogItemActive},e.name))},N=function(e){var a=e.dialogs.map((function(e){return l.a.createElement(w,{name:e.name,key:e.id,id:e.id})}));return l.a.createElement("div",null,a)},I=s(13),M=s(48),E=s(43),b=s.n(E),O=s(409),A=s.n(O),x=function(e){return"\u042f"==e.name?l.a.createElement("div",{className:b()(A.a.messageWrapper,A.a.owner)},l.a.createElement("div",{className:A.a.messageAuthor},l.a.createElement("div",{className:A.a.messageAuthorPhotoOwner},l.a.createElement("img",{src:e.photos||M.a,alt:""})),l.a.createElement("div",{className:A.a.messageAuthorName},e.name)),l.a.createElement("p",{className:A.a.messageTextOwner},e.messageText)):l.a.createElement("div",{className:A.a.messageWrapper},l.a.createElement("div",{className:A.a.messageAuthor},l.a.createElement("div",{className:A.a.messageAuthorPhoto}),l.a.createElement("div",{className:A.a.messageAuthorName},e.name)),l.a.createElement("p",{className:A.a.messageText},e.messageText))},P=function(e){Object(o.a)(s,e);var a=Object(i.a)(s);function s(){var e;Object(t.a)(this,s);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).scrollToBottom=function(){e.messagesEnd.scrollIntoView({behavior:"smooth"})},e}return Object(n.a)(s,[{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"getDialogId",value:function(){return this.props.dialogId?this.props.dialogId:0}},{key:"getMessagesItems",value:function(){var e=this,a=Object(I.a)(this.props.dialogsMessages.filter((function(a){return a.id==+e.getDialogId()})));if(a.length>0)return a[0].messages.map((function(a){return l.a.createElement(x,{name:a.name,messageText:a.messagesText,key:a.id,id:a.id,photos:e.props.photos})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"toBottom"},this.getMessagesItems(),l.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(a){e.messagesEnd=a}}))}}]),s}(l.a.Component),C=(s(410),s(705)),T=s.n(C),j=s(136),y=s(137),k=s(75),D=Object(y.a)({form:"DialogsAddNewMessage",enableReinitialize:!0,destroyOnUnmount:!1})((function(e){return l.a.createElement("form",{className:T.a.newPosts,onSubmit:e.handleSubmit},l.a.createElement("label",{htmlFor:"newMessage"}),l.a.createElement(j.a,{className:T.a.newPosts__text,component:"textarea",name:"newMessage",validate:[k.c],placeholder:"\u043c\u043e\u0454 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f.."}),l.a.createElement("button",{className:"button ".concat(T.a.newPosts__button)},"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"))})),U=function(e){Object(r.useEffect)((function(){e.resetNewMessageField()}),[e.dialogId]);return l.a.createElement("div",null,l.a.createElement("p",{className:T.a.newPosts__title},"\u041d\u043e\u0432\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"),l.a.createElement(D,{onSubmit:function(a){e.addNewMessage(a.newMessage,e.dialogId),console.log(a.newMessage)},onChange:function(a){e.setCurrentTextOfMessage(a.newMessage,e.dialogId)},initialValues:{newMessage:void 0!=e.dialogsMessages.filter((function(a){return a.id==+e.dialogId}))[0]?e.dialogsMessages.filter((function(a){return a.id==+e.dialogId}))[0].newMessageText:""}}))},F=function(e){Object(o.a)(s,e);var a=Object(i.a)(s);function s(){return Object(t.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return l.a.createElement("section",{className:_.a.dialogs},l.a.createElement("p",{className:_.a.dialogsTitle},"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f"),l.a.createElement("div",{className:_.a.dialogsContent},l.a.createElement("div",{className:_.a.dialogsColumn},l.a.createElement("div",{className:_.a.dialog},l.a.createElement(N,this.props))),l.a.createElement("div",{className:_.a.messagesColumn},l.a.createElement("div",{className:_.a.messagesItems},l.a.createElement(P,Object.assign({},this.props,{dialogId:this.props.dialogId}))),l.a.createElement(U,Object.assign({addNewMessage:this.props.addNewMessage,dialogId:this.props.dialogId,resetNewMessageField:this.props.resetNewMessageField,setCurrentTextOfMessage:this.props.setCurrentTextOfMessage},this.props)))))}}]),s}(l.a.Component),R=s(26),W=function(e){Object(o.a)(s,e);var a=Object(i.a)(s);function s(){return Object(t.a)(this,s),a.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.authorizedUserId;this.props.getUserProfile(e)}},{key:"render",value:function(){var e=this.props.match.params.dialogId;return l.a.createElement(F,Object.assign({},this.props,{dialogId:e}))}}]),s}(l.a.Component);a.default=Object(c.d)(Object(m.b)((function(e){return{dialogs:e.dialogsPage.dialogs,dialogsMessages:e.dialogsPage.dialogsMessages,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId,photos:e.profilePage.profileInfo.photos.small}}),{addNewMessage:u.a,getUserProfile:R.d,resetNewMessageField:u.c,setCurrentTextOfMessage:u.d}),g.g,d.a)(W)}}]);
//# sourceMappingURL=4.673832ac.chunk.js.map