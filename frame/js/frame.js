/**
 * Created by Administrator on 2017/3/28 0028.
 */
window.onload=function(){
    $('#top01').click(function(){
        $('#bottom01').toggle()
    })
    $('#top02').click(function(){
        $('#bottom02').toggle()
    })
    $('#search-product').click(function(){
        $('#search-product').css('color','red');
        $('#create-product').css('color','black')
        $('#search').css('color','black')
        $('.main-center iframe').attr('src','http://localhost:63342/untitled/项目/weishang/product/list.html')
    })
    $('#create-product').click(function(){
        $('#create-product').css('color','red')
        $('#search-product').css('color','black');
        $('#search').css('color','black')
        $('.main-center iframe').attr('src','http://localhost:63342/untitled/项目/weishang/product/create.html')
    })
    $('#search').click(function(){
        $('#search').css('color','red')
        $('#search-product').css('color','black');
        $('#create-product').css('color','black')
        $('.main-center iframe').attr('src','http://localhost:63342/untitled/项目/weishang/category/list.html')
    })
};
