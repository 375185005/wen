/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload=function(){
   $('.add').click(function(){
       var x=document.documentElement.clientWidth;
       var y=document.documentElement.clientHeight;
       $('.screen').width(x);
       $('.screen').height(y);
       $('.screen').css('display','block');
       $('.center').css('display','block');
       var top=(document.documentElement.clientHeight-600)/2;
       var left=(document.documentElement.clientWidth-600)/2;
       $('.center').css('left',left)
       $('.center').css('top',top)
   });
    $('#cancel').click(function(){
        $('.screen').css('display','none');
        $('.center').css('display','none');
    })
};