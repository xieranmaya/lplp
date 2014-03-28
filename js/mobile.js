$(function() {
    //菜单栏选择
    $(".header").click(function() {
        if ($(".header").hasClass('down')) {         
            slideUp();
        } else {            
            slideDown();
        }        
    });

    var current = -1;
    var itemOffset = new Array();
    $(".nav-title").each(function(index) {
        var top = $(this).offset().top;
        //alert("top:"+top);
        var height = $(this).height();
        //alert("height:"+height);
        itemOffset[index] = {
            offset : top + height,
            nav_title : $(this),
            header_title : $("#chooseChannel ul li").eq(index)
        };
    });
    //bind function
    $(window).bind("scroll", scrollItem);

    $("#chooseChannel ul li a").click(function(e) {
        e.preventDefault();
        var element = $(this);
        var target = $(this).attr("href");
        if ($(target)[0]) {
            $(window).unbind("scroll");
            $('html, body').animate({
                scrollTop : $(target).offset().top - 30
            }, 600, function() {
                $("#chooseChannel ul li a").removeClass('ui-btn-active');
                element.addClass("ui-btn-active");
                $(window).bind("scroll", scrollItem);
                scrollItem();
            });
            slideUp();
        }
    });

    //PC Version
    $(".pc_version").click(function(e) {
        e.preventDefault();
        $.cookie("UXLAB_VERSION", "PC", {
            expires : 7
        });
        var href = $(this).find("a").attr("href");
        location.href = href;
    });
    $(".container").click(function(){
        $(".header").removeClass("down");
        if($(".header img:eq(0)").css("display")=="none"){
        	$(".header img").toggle();
        }
        $("#chooseChannel").stop(true,true).animate({"top":"-100%"},200);
    });

    function scrollItem() {
        //slideUp();
        var top = $(window).scrollTop();
        for (var i = 0; i < itemOffset.length; i++) {
            if (top > itemOffset[i].offset - 120) {
                if (current != i) {
                    current = i;
                    $("#chooseChannel ul li a").removeClass('ui-btn-active');
                    itemOffset[i].header_title.find("a").addClass("ui-btn-active");
                    var title = itemOffset[i].header_title.find("a").text();
                    $(".header img").each(function(){
                    	var img_src = $(this).attr("src");
                    	var img_style=$(this).attr("style");
                   		 title += "<img style='"+img_style+"' src='" + img_src + "' />";
                    });
                    
                    $(".header").html(title);
                }
            }
        }
    }
    function slideUp(){
        $(".header").removeClass("down");
        $(".header img").toggle();
        $("#chooseChannel").stop(true,true).animate({"top":"-100%"},200);
    }
    function slideDown(){
        $(".header").addClass("down");
        $(".header img").toggle();
        $("#chooseChannel").stop(true,true).animate({"top":"45px"},200);
    }
    //PC Version
    $(".pc_version").click(function(e){
        e.preventDefault();
        var ua = navigator.userAgent, mobileAgents = ["240x320", "acer", "acoon", "acs-", "abacho", "ahong", "airness", "alcatel", "amoi", "android", "anywhereyougo.com", "applewebkit/525", "applewebkit/532", "asus", "audio", "au-mic", "avantogo", "becker", "benq", "bilbo", "bird", "blackberry", "blazer", "bleu", "cdm-", "compal", "coolpad", "danger", "dbtel", "dopod", "elaine", "eric", "etouch", "fly ", "fly_", "fly-", "go.web", "goodaccess", "gradiente", "grundig", "haier", "hedy", "hitachi", "htc", "huawei", "hutchison", "inno", "ipad", "ipaq", "ipod", "jbrowser", "kddi", "kgt", "kwc", "lenovo", "lg ", "lg2", "lg3", "lg4", "lg5", "lg7", "lg8", "lg9", "lg-", "lge-", "lge9", "longcos", "maemo", "mercator", "meridian", "micromax", "midp", "mini", "mitsu", "mmm", "mmp", "mobi", "mot-", "moto", "nec-", "netfront", "newgen", "nexian", "nf-browser", "nintendo", "nitro", "nokia", "nook", "novarra", "obigo", "palm", "panasonic", "pantech", "philips", "phone", "pg-", "playstation", "pocket", "pt-", "qc-", "qtek", "rover", "sagem", "sama", "samu", "sanyo", "samsung", "sch-", "scooter", "sec-", "sendo", "sgh-", "sharp", "siemens", "sie-", "softbank", "sony", "spice", "sprint", "spv", "symbian", "tablet", "talkabout", "tcl-", "teleca", "telit", "tianyu", "tim-", "toshiba", "tsm", "up.browser", "utec", "utstar", "verykool", "virgin", "vk-", "voda", "voxtel", "vx", "wap", "wellco", "wig browser", "wii", "windows ce", "wireless", "xda", "xde", "zte"];
        for (var i = 0; i < mobileAgents.length; i++) {
            if (ua.toLowerCase().indexOf(mobileAgents[i]) > -1) {
                $.cookie("UXLAB_VERSION","PC", { expires: 1 });            
                break;
            }            
        }        
        var href=$(this).find("a").attr("href");
        location.href=href;
    });   
});