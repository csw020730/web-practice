function daynightHandler(self){
    if(self.value=='night'){
        document.querySelector('#toggle').value='day';
        document.querySelector('body').style.color='white';
        document.querySelector('body').style.backgroundColor='black';
        var list=document.querySelectorAll('a');
        for(var i=0;i<list.length;i++){
            list[i].style.color = 'powderblue';
        }
    }
    else{
        document.querySelector('#toggle').value='night';
        document.querySelector('body').style.color='black';
        document.querySelector('body').style.backgroundColor='white';
        var list=document.querySelectorAll('a');
        for(var i=0;i<list.length;i++){
            list[i].style.color = 'blue';
        }
    }
}