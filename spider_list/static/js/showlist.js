var website_list = new Array("all", "36kr","cyb","other")
function onChangeWebsite(website, e){
    $("#website_menu li").removeClass("active");
    $(e).addClass("active")
    onChangeItem("", e)
}

function onChangeItem(item, e){
   //已有的和这一条 
    $(e).find("a").toggleClass("selected");
    var item_list = new Array()
    $("#item_menu li").find("a.selected").each(function(){
        item_list.push($(this).attr("name"));
    });
    var website = $("#website_menu .active a").attr("name");
    var query_path = "website=" + website + "&item=" + item_list.join(",");
    $.get("/item?" + query_path,function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        var title, create_time, content, link_url;
        $('#content_list li').remove()
        $('#content_list br').remove()
        for (var i = data.length - 1; i >= 0; i--) {
            title = "<h2 class='title'>"  + data[i].hash_title + "</h2>";
            create_time = "<div class = 'share_groups'>" + data[i].create_time + "</div>";
            content = "<p>" + data[i].description_text + "</p>";
            if(data[i].news_url != "")
                link_url = "<a href= " + data[i].news_url + ">原文链接</a>";
            else 
                link_url = "<a href=javascript:void(0); " + ">原文链接</a>";
            $('#content_list').append("<li style='list-style: none'>" + title + create_time + content + link_url + "</li><br/>")
        };
    });
}
