(function(){
var names=["Fayaz","Khan","Jhon","Jason","Hello","Jhello"];
for(var i=0;i<names.length;i++){
    var CheckFirstName=names[i].charAt(0).toLowerCase();
    if(CheckFirstName=='j')
    {
      SpeakGoodbye.speak(names[i]);
    }
    else{
        SpeakHello.speak(names[i]);
    }
}
})();