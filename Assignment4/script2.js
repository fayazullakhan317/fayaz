 (function(window){
 var SpeakHello = {};
 var MessageWord="Hello";
 SpeakHello.speak=function(name){
     console.log(MessageWord+" "+name);
 }
 window.SpeakHello=SpeakHello;
 })(window);