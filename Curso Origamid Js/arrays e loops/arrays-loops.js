// var ultimoItem = manobrasSurf.pop();


var i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 5;
}

var manobrasSurf = [ 'drop', 'cavada', 'layback', 'tubo'];

for(var item = 0; item < manobrasSurf.length; item++) {
    console.log(manobrasSurf[item]);
    if (manobrasSurf[item] === 'layback')
    break;
}
