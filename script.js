var colors=["cyan","aliceblue","darkmagenta","gold","azure","green","moccasin"];
for(var i=0; i<7;i++){
  console.log(colors);
}
var index = 0;
$('button').click(function(){
$('body').css('background-color', colors[index]);
  index++;
if (index == colors.length){
  index = 0;
}
});