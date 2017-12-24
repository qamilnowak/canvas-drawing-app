var setRadius = function (newRadius) {
    if(newRadius < minRad){
        newRadius = minRad;
    }
    else if(newRadius > maxRad){
        newRadius = maxRad;
    }
    radius = newRadius;
    context.lineWidth = radius*2;

    radSpan.innerHTML = radius;
}

var minRad = 0.5;
var maxRad = 100;
var deafaultRad = 20;
var interval = 5;
var radSpan = document.getElementById('radval');
var decRad= document.getElementById('decrad');
var incRad = document.getElementById('incrad');

decRad.addEventListener('click', function () {
    setRadius(radius-interval);
});
incRad.addEventListener('click', function () {
    setRadius(radius+interval);
});


setRadius(deafaultRad);
