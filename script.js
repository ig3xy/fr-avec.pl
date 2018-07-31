$(function() {

	$('.tab-panels .tabs li').on('click', function(){

		var panelToShow = $(this).attr('rel');



		$('.tab-panels .panel.active').hide(200, function(){
			$(this).removeClass('active');

			$('#'+panelToShow).show(200, function(){
				$(this).addClass('active');
				});
		});

	});
});


// wysuwa "kategorie"

$(document).ready(function(){
	$("#dropkat").click(function(){
		$("#pkat").slideToggle("fast");
		
	});
});


// do zamknięcia "kategorii"

$(function(){
	$("#x").on('click', function(){
		$("#zamknij").hide();
	});
});

$(function(){
	$("#x").on('click', function(){
		$(this).hide();
	});
});



$(function(){
	$("#dropkat").on('click', function(){
		$("#zamknij").show();
		$("#x").show();				
	});
});




$(function(){
	$(".tab-panels .tabs li").on('click', function(){
		$(".media").hide();
		$(".recap").hide();
		$(".recap2").hide();
	});
});

$(function(){
	$(".main").on('click', function(){
		$(".media").show();
		$(".recap").show();
		$(".recap2").show();
	});
});

