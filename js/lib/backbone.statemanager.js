/*
Backbone.Statemanager, v0.0.2
Copyright (c)2012 Patrick Camacho and Mark Roseboom, Crashlytics
Distributed under MIT license
http://github.com/crashlytics/backbone.statemanager
*/

(function(e){var t;define(["backbone"],function(n){return function(){(function(){n.StateManager=function(e,t){var n,r;return n=function(e,t){return this.options=t!=null?t:{},this.states=new n.States(e),this},n.extend=e.View.extend,t.extend(n.prototype,e.Events,{getCurrentState:function(){return this.currentState},addState:function(e,t){return this.states.add(e,t),this.trigger("add:state",e)},removeState:function(e){return this.states.remove(e),this.trigger("remove:state",e)},initialize:function(e){var t;e==null&&(e={});if(t=this.states.findInitial())return this.triggerState(t,e)},triggerState:function(e,n){return n==null&&(n={}),e===this.currentState&&!n.reEnter?!1:(t.extend(n,{toState:e,fromState:this.currentState}),this.currentState&&this.exitState(n),this.enterState(e,n))},enterState:function(e,n){var r,i,s;return n==null&&(n={}),!(r=this.states.find(e))||!t.isFunction(r.enter)?!1:(this.trigger("before:enter:state",e,r,n),typeof (i=r.findTransition("onBeforeEnterFrom",n.fromState))=="function"&&i(n),r.enter(n),typeof (s=r.findTransition("onEnterFrom",n.fromState))=="function"&&s(n),this.trigger("enter:state",e,r,n),this.currentState=e,this)},exitState:function(e){var n,r,i;return e==null&&(e={}),!(n=this.states.find(this.currentState))||!t.isFunction(n.exit)?!1:(this.trigger("before:exit:state",this.currentState,n,e),typeof (r=n.findTransition("onBeforeExitTo",e.toState))=="function"&&r(e),n.exit(e),typeof (i=n.findTransition("onExitTo",e.toState))=="function"&&i(e),this.trigger("exit:state",this.currentState,n,e),delete this.currentState,this)}}),n.States=function(e){var n=this;return this.states={},e&&t.isObject(e)&&t.each(e,function(e,t){return n.add(t,e)}),this},t.extend(n.States.prototype,{add:function(e,r){return!t.isString(e)||!t.isObject(r)?!1:this.states[e]=new n.State(e,r)},remove:function(e){return t.isString(e)?delete this.states[e]:!1},find:function(e){return t.isString(e)?t.chain(this.states).find(function(t){return t.matchName(e)}).value():!1},findInitial:function(){var e,n=this;return(e=t.find(this.states,function(e,t){return e.initial}))!=null?e.name:void 0}}),n.State=function(e,r){return this.name=e,t.extend(this,r),this.regExpName=n.State._regExpStateConversion(this.name),this},t.extend(n.State.prototype,{matchName:function(e){return this.regExpName.test(e)},findTransition:function(e,r){var i=this;return this.transitions&&t.isString(r)&&t.isString(e)?t.find(this.transitions,function(t,i){return i.indexOf(""+e+":")===0&&n.State._regExpStateConversion(i.substring(e.length+1)).test(r)}):!1}}),n.State._regExpStateConversion=function(e){return e=e.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/:\w+/g,"([^/]+)").replace(/\*\w+/g,"(.*?)"),new RegExp("^"+e+"$")},n.addStateManager=function(n,i){var s,o;return i==null&&(i={}),n||new Error("Target must be defined"),o=t.isFunction(n.states)?n.states():n.states,r(o,n),n.stateManager=s=new e.StateManager(o,i),n.triggerState=function(){return s.triggerState.apply(s,arguments)},n.getCurrentState=function(){return s.getCurrentState()},(i.initialize||t.isUndefined(i.initialize))&&s.initialize(i),delete n.states},r=function(e){var n;return n=t.last(arguments),t.each(e,function(i,s){if(t.isFunction(i))return e[s]=t.bind(i,n);if(t.isObject(i))return e[s]=r(i,n)}),e},n}(n,_)}).call(this)}.call(e),t})})(this)