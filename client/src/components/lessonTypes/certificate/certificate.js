var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var imgObj = new Image();
imgObj.src = "ceer.test.jpg";
window.onload = function(){
    context.beginPath();
    context.drawImage(imgObj, 0, 0);
    context.font = "13pt Calibri";
    context.style = 'white';
    context.strokeText("-MindsOn confirms that-", 69, 223);
    context.strokeText("-UserName-", 69, 245);
    context.strokeText("-Course Name- Certificate", 165, 298);
    context.strokeText("QR Code", 520, 300);
    context.strokeText("Mar 12,2023", 520, 380);
    context.closePath();

    const img = canvas.toDataURL('image/png');
  document.getElementsByTagName('img')[0].src = img;
}