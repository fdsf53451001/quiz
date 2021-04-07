var dataUrl = "https://www.dcard.tw/service/api/v2/forums/cgu/posts?popular=true&limit=30";
var data = $.getJSON(dataUrl);
data.done(function(msg){
    console.log(msg)
    $.each(msg,function(key,val){
        $('#contain').append($("<h2/>").text(val.title));
        $('#contain').append($("<h3/>").text(val.excerpt));
        // $('#contain').append($("<img/>").attr("src",val.media.m));
    });
});
data.fail( function(msg) { 
    $('#contain').html('Failed');
});