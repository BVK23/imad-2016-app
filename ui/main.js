console.log('Loaded!');
var element= document.getElementById('M-text');
element.innerHTML = 'Almost constructed';

//move img
var img = document.getElementById('madi');
img.onclick = function(){
var marginLeft = 0;
    function moveRight(){
        marginLeft = marginLeft + 10;
        img.style.marginLeft = marginLeft +'px';
    }
    var interval = setInterval(moveRight, 100);
 
};