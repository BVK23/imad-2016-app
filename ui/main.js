console.log('Loaded!');
var element= document.getElementById('M-text');
element.innerHTML = 'Almost constructed';

//move img
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginLeft = '100px';
};