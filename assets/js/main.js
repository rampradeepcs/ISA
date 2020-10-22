$(document).ready(function(){
    /* Login Script Start*/
    $(document).on("click",".login-user .item",function() {
        $('.login-user .item').removeClass("active");
        $(this).addClass("active");
    });
    /* Login Script End*/
  });