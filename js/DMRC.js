/**
 * @author trhuo
 */
$(document).ready(function(){
	var index = 0;

	if($(window).height()>$(document.body).height()){
		var off = $(window).height() - $(document.body).height();
		$("#footer").css("margin-top",off+31);
		$("#bg").css("height",$(window).height());
	}
	
	$(".fli").hover(function(){
		$("#inner").css("border-bottom","3px solid #458aae");
	},function(){
		$("#inner").css("border-bottom","3px solid #999999");
	});
	
	$(".re").each(function(){
		var row=0;
		var num = 0;
		index = $(".re").index(this);
		row = index/4;
		num = index%4;
		$(this).css("top",parseInt(row)*80+80+parseInt(row));
		$(this).css("left",240*num);
	});
	
	var count = $(".re").length;
	var numofrow = (count-1)/4;
	$("#resource").css("height",(parseInt(numofrow)+1)*80+80+parseInt(numofrow));
	$(".re").hover(function(){
		$(this).css("background-color","#458aae").css("color","#ffffff");
		$(this).find("a").css("color","#ffffff");
	},function(){
		$(this).css("background-color","#f7f7f7").css("color","#000000");
		$(this).find("a").css("color","#3867cc");
	});
	
	
	
	$(".link").each(function(){
		var row=0;
		var num = 0;
		index = $(".link").index(this);
		row = index/4;
		num = index%4;
		$(this).css("top",parseInt(row)*80+80+parseInt(row));
		$(this).css("left",240*num);
	});
	
	var count1 = $(".link").length;
	var numofrow1 = (count1-1)/4;
	$("#link").css("height",(parseInt(numofrow1)+1)*80+80+parseInt(numofrow1));
	$(".link").hover(function(){
		$(this).css("background-color","#458aae").css("color","#ffffff");
		$(this).find("a").css("color","#ffffff");
	},function(){
		$(this).css("background-color","#f7f7f7").css("color","#000000");
		$(this).find("a").css("color","#3867cc");
	});
	
		$(".mate").each(function(){
		var row=0;
		var num = 0;
		index = $(".mate").index(this);
		row = index/4;
		num = index%4;
		$(this).css("top",parseInt(row)*100+80+parseInt(row));
		$(this).css("left",240*num);
	});
	
	var count2 = $(".mate").length;
	var numofrow2 = (count2-1)/4;
	$("#partner").css("height",(parseInt(numofrow2)+1)*100+80+parseInt(numofrow2));

	
	function disappear(){
		$(".meeting_spread").fadeOut("slow");
		$(".meeting_spread").fadeIn("slow");
	}
	
	$(".detail6").find(".txt_spread").click(function(){
		$(".innovation_spread").click();
	});
	$(".detail6").find(".txt_fold").click(function(){
		$(".innovation_fold").click();
	});
	$(".detail7").find(".txt_spread").click(function(){
		$(".innovation_fold").click();
	});
	$(".innovation_spread").click(function(){
		$(".detail6").find(".txt_spread").fadeOut("slow");
		$(".detail6").find(".txt_fold").fadeIn("slow");
		$(".detail6").unbind();
		$(".detail6").hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
		$(".innovation_fold").fadeIn("slow");
		$(".innovation_spread").fadeOut("slow");
		$(".detail7").slideDown("slow");
	});	
	$(".innovation_fold").click(function(){
		$(".detail6").find(".txt_spread").fadeIn("slow");
		$(".detail6").find(".txt_fold").fadeOut("slow");
		$(".detail6").unbind();
		$(".innovation_fold	").fadeOut("slow");
		$(".innovation_spread").fadeIn("slow");
		$(".detail7").slideUp("slow");								  
	});
	
	$(".detail8").find(".txt_spread").click(function(){
		$(".service_spread").click();
	});
	$(".detail8").find(".txt_fold").click(function(){
		$(".service_fold").click();
	});
	$(".detail9").find(".txt_spread").click(function(){
		$(".service_fold").click();
	});
	
	$(".service_spread").click(function(){
		$(".detail8").find(".txt_spread").fadeOut("slow");
		$(".detail8").find(".txt_fold").fadeIn("slow");
		$(".detail8").unbind();
		$(".detail8").hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
		$(".service_fold").fadeIn("slow");
		$(".service_spread").fadeOut("slow");
		$(".detail9").slideDown("slow");
	});	
	
	$(".service_fold").click(function(){
		$(".detail8").find(".txt_spread").fadeIn("slow");
		$(".detail8").find(".txt_fold").fadeOut("slow");
		$(".detail8").unbind();
		$(".service_fold").fadeOut("slow");
		$(".service_spread").fadeIn("slow");
		$(".detail9").slideUp("slow");								  
	});
	
	
	$(".detail10").find(".txt_spread").click(function(){
		$(".interaction_spread").click();
	});
	
	$(".detail10").find(".txt_fold").click(function(){
		$(".interaction_fold").click();
	});
	
	$(".detail11").find(".txt_spread").click(function(){
		$(".interaction_fold").click();
	});
	$(".interaction_spread").click(function(){
		$(".detail10").find(".txt_spread").fadeOut("slow");
		$(".detail10").find(".txt_fold").fadeIn("slow");
		$(".detail10").unbind();
		$(".detail10").hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
		$(".interaction_fold	").fadeIn("slow");
		$(".interaction_spread").fadeOut("slow");
		$(".detail11").slideDown("slow");
	});	
	$(".interaction_fold").click(function(){
		$(".detail10").find(".txt_spread").fadeIn("slow");
		$(".detail10").find(".txt_fold").fadeOut("slow");
		$(".detail10").unbind();
		$(".interaction_fold").fadeOut("slow");
		$(".interaction_spread").fadeIn("slow");
		$(".detail11").slideUp("slow");								  
	});

	$(".detail12").find(".txt_spread").click(function(){
		$(".media_spread").click();
	});
	$(".detail12").find(".txt_fold").click(function(){
		$(".media_fold").click();
	});
	$(".detail13").find(".txt_spread").click(function(){
		$(".media_fold").click();
	});
	$(".media_spread").click(function(){
		$(".detail12").find(".txt_spread").fadeOut("slow");
		$(".detail12").find(".txt_fold").fadeIn("slow");
		$(".detail12").unbind();
		$(".detail12").hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
		$(".media_fold").fadeIn("slow");
		$(".media_spread").fadeOut("slow");
		$(".detail13").slideDown("slow");
	});	
	
	$(".media_fold").click(function(){
		$(".detail12").find(".txt_spread").fadeIn("slow");
		$(".detail12").find(".txt_fold").fadeOut("slow");
		$(".detail12").unbind();
		$(".media_fold	").fadeOut("slow");
		$(".media_spread").fadeIn("slow");
		$(".detail13").slideUp("slow");							  
	});
	
	
	$(".detail4").eq(0).find(".txt_spread").click(function(){
		$(".achieve_spread").click();
	});
	
	$(".detail4").eq(0).find(".txt_fold").click(function(){
		$(".achieve_fold").click();
	});
	$(".detail4:gt(0)").find(".txt_spread").click(function(){
		$(".achieve_fold").click();
	});
	$(".achieve_spread").click(function(){
		$(".detail4").eq(0).find(".txt_spread").fadeOut("slow");
		$(".detail4").eq(0).find(".txt_fold").fadeIn("slow");
		$(".detail4").eq(0).unbind();
		$(".detail4").eq(0).hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
		$(".achieve_fold").fadeIn("slow");
		$(".achieve_spread").fadeOut("slow");
		$(".achi").slideDown("slow");
	});	
	$(".achieve_fold").click(function(){
		$(".detail4").eq(0).find(".txt_spread").fadeIn("slow");
		$(".detail4").eq(0).find(".txt_fold").fadeOut("slow");
		$(".detail4").eq(0).unbind();
		$(".achieve_fold").fadeOut("slow");
		$(".achieve_spread").fadeIn("slow");
		$(".achi").slideUp("slow");						  
	});


	$(".detail15").find(".txt_spread").click(function(){
		$(".meeting_spread").click();
	});
	$(".detail15").find(".txt_fold").click(function(){
		$(".meeting_fold").click();
	});
	$(".detail16").find(".txt_spread").click(function(){
		$(".meeting_fold").click();
	});
	$(".meeting_spread").click(function(){
		$(".detail15").find(".txt_spread").fadeOut("slow");
		$(".detail15").find(".txt_fold").fadeIn("slow");
		$(".detail15").unbind();
		$(".detail15").hover(function(){
			$(this).find(".txt_fold").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_fold").fadeOut("slow");	
		});
			$(".meeting_fold").fadeIn("slow");
			$(".meeting_spread").fadeOut("slow");
			$(".detail16").slideDown("slow");
		});
		
		$(".meeting_fold").click(function(){
			$(".detail15").find(".txt_spread").fadeIn("slow");
			$(".detail15").find(".txt_fold").fadeOut("slow");
			$(".detail15").unbind();
			$(".meeting_fold").fadeOut("slow");
			$(".meeting_spread").fadeIn("slow");
			$(".detail16").slideUp("slow");
		});
		
		
		$("#detail5").hover(function(){
			$(this).find(".txt_spread").fadeIn("slow");							 
		},function(){
			$(this).find(".txt_spread").fadeOut("slow");	
		});
		$(".detail23 .txt_spread").hide();
		$("#detail3").hover(function(){
			$(this).find(".txt_spread").fadeIn();			   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail7").hover(function(){
			$(this).find(".txt_spread").fadeIn();			   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail9").hover(function(){
			$(this).find(".txt_spread").fadeIn();		   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail11").hover(function(){
			$(this).find(".txt_spread").fadeIn();			   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail13").hover(function(){
			$(this).find(".txt_spread").fadeIn();			   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail4:gt(0)").hover(function(){
			$(this).find(".txt_spread").fadeIn();			   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail16").hover(function(){
			$(this).find(".txt_spread").fadeIn();		   
		},function(){
			$(this).find(".txt_spread").fadeOut();	
		});
		$(".detail23").hover(function(){
			$(".detail23").find(".txt_spread").fadeIn();			   
		},function(){
			$(".detail23").find(".txt_spread").fadeOut();	
		});
		
		/*
		 * mobile check
		 */

		var ua = navigator.userAgent, mobileAgents = ["240x320", "acer", "acoon", "acs-", "abacho", "ahong", "airness", "alcatel", "amoi", "android", "anywhereyougo.com", "applewebkit/525", "applewebkit/532", "asus", "audio", "au-mic", "avantogo", "becker", "benq", "bilbo", "bird", "blackberry", "blazer", "bleu", "cdm-", "compal", "coolpad", "danger", "dbtel", "dopod", "elaine", "eric", "etouch", "fly ", "fly_", "fly-", "go.web", "goodaccess", "gradiente", "grundig", "haier", "hedy", "hitachi", "htc", "huawei", "hutchison", "inno", "ipad", "ipaq", "ipod", "jbrowser", "kddi", "kgt", "kwc", "lenovo", "lg ", "lg2", "lg3", "lg4", "lg5", "lg7", "lg8", "lg9", "lg-", "lge-", "lge9", "longcos", "maemo", "mercator", "meridian", "micromax", "midp", "mini", "mitsu", "mmm", "mmp", "mobi", "mot-", "moto", "nec-", "netfront", "newgen", "nexian", "nf-browser", "nintendo", "nitro", "nokia", "nook", "novarra", "obigo", "palm", "panasonic", "pantech", "philips", "phone", "pg-", "playstation", "pocket", "pt-", "qc-", "qtek", "rover", "sagem", "sama", "samu", "sanyo", "samsung", "sch-", "scooter", "sec-", "sendo", "sgh-", "sharp", "siemens", "sie-", "softbank", "sony", "spice", "sprint", "spv", "symbian", "tablet", "talkabout", "tcl-", "teleca", "telit", "tianyu", "tim-", "toshiba", "tsm", "up.browser", "utec", "utstar", "verykool", "virgin", "vk-", "voda", "voxtel", "vx", "wap", "wellco", "wig browser", "wii", "windows ce", "wireless", "xda", "xde", "zte"];
        for (var i = 0; i < mobileAgents.length; i++) {
            if (ua.toLowerCase().indexOf(mobileAgents[i]) > -1) {
                var version=$.cookie("UXLAB_VERSION");
                if(version!="PC"){
                    location.href="center_mobile.html";
                    break;
                }
            }            
        }    
        $(".phone_version").click(function(e){
            e.preventDefault();
            $.cookie("UXLAB_VERSION",null);
            var href=$(this).find('a').attr("href");
            location.href=href;
        });        
});