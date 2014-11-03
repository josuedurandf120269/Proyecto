
var device = navigator.userAgent

if (device.match(/Iphone/i)|| device.match(/Ipod/i)|| device.match(/Android/i)|| device.match(/J2ME/i)|| device.match(/HTC/i)) {
window.location="http://localhost/proyecto/index.html";
alert('Navegador movil')
}
else if (device.match(/Ipad/i))
{
alert('iPad');
} else {
alert('PC/Laptop/Mac');
}
