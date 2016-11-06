console.log('Loaded!');
var element= document.getElementById('M-text');
element.innerHTML = 'Almost constructed';

//move img
var img = document.getElementById('madi');
var marginLeft = 0;
//var cnt = 1;
    function moveRight(){
        marginLeft = marginLeft + 1;
        img.style.marginLeft = marginLeft +'px';
    }
img.onclick = function(){
    //if(cnt == 1)
    var interval = setInterval(moveRight, 50);
     //cnt++ ; 
    
    //else  img.style.centre;
 
};