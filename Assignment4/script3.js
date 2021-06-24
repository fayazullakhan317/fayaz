(function(window){

    var SpeakGoodbye={};
    var MessageWord="Good Bye";
    SpeakGoodbye.speak=function(name){
console.log(MessageWord+" "+name);
    }
window.SpeakGoodbye=SpeakGoodbye;
})(window);
