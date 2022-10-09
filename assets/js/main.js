/* 
  _    __   _        _             __
/  | /  _|/  |____ /__|  __       |   |
|  |/  /  |   __  \ __  /  |___   |   |
|  |  /   |  |  \_/|  ||   ___/   |   |
|     \   |  |     |  ||   |      |___|
|  |\  \_ |  |_    |  ||   |_      ___
|__| \___|\____/   |__| \____/   /___ /

Selamat datang distruktur kode js web portfolio - kompetisi web design Ibnu Khaldun.
Temui saya di linkedin, github atau sosial media yang anda miliki dengan keyword @KritiMauludin.

Terima Kasih, Sampai Jumpa.
*/

$(document).ready(function() {
	//trigger untuk mematikan preload
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	

	//untuk side box di header
	var counter = 0;
	var descCount = 0
	var hero = document.querySelector('#hero');
	hero.addEventListener('wheel', function(event) {
		if(event.deltaY < 0){
			counter += 45;
			descCount += 1;
			$('.side-about-box').css({"transform": "rotate("+ counter +"deg)"});
			$(".descBox").removeClass('active');
			if(descCount > 7){descCount = 0}
				$(".descBox").eq(descCount).addClass('active');
		} else if(event.deltaY > 0){
			counter -= 45;
			descCount -= 1;
			$('.side-about-box').css({"transform": "rotate("+ counter +"deg)"});
			$(".descBox").removeClass('active');
			if(descCount < -7){descCount = 0}
				$(".descBox").eq(descCount).addClass('active');
		}
	});

	//portfolio gallery
	var GalleryCenter = document.getElementById('GalleryCenter');
	var count = 0;
	window.addEventListener('wheel', function(event){
		if(event.deltaY < 0){
			count -= 10;
			GalleryCenter.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY('+count+'deg)';
		} else if(event.deltaY > 0){
			count += 10;
			GalleryCenter.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY('+count+'deg)';
		}
	});

	//swiper for thank to company

});

	//kontrol modal
	function showModal(id){
		const modalContent = document.querySelector('#modal'+id);	
		modalContent.classList.add('active');
		
	}

	function closeBtn(id){
		const modalContent = document.querySelector('#modal'+id);
		modalContent.classList.remove('active');
	}