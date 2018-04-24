var tabs= document.getElementById('tabs').getElementsByTagName("li");
var divs= document.getElementById('tabBoxs').children;
for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=function(){tab(this);}
}
function tab(obj){
    for(var i=0;i<tabs.length;i++)
    {
        if(tabs[i]==obj){
            tabs[i].className="fl on";
            divs[i].className="loginBox on";
        }
        else{
            tabs[i].className="fl";
            divs[i].className="loginBox";
        }
    }
}