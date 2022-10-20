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

	
});

	function changeUrlWa(){
		var nameContact = document.getElementById('name').value;
		var messageContact = document.getElementById('message').value;
		document.getElementById('link-to-wa').href = "https://api.whatsapp.com/send?phone=6283811641671&text=Halo nama saya "+nameContact+", "+messageContact;
	}
	//trigger scroll up and down for mobile
	var counter = 0;
	var descCount = 0;
	function scrollMenu(e){
		if(e == "mousedown") {
			counter += 45;
			descCount += 1;
			$('.side-about-box').css({"transform": "rotate("+ counter +"deg)"});
			$(".descBox").removeClass('active');
			if(descCount > 7){descCount = 0}
				$(".descBox").eq(descCount).addClass('active');
		}else if (e == "mouseup"){
			counter -= 45;
			descCount -= 1;
			$('.side-about-box').css({"transform": "rotate("+ counter +"deg)"});
			$(".descBox").removeClass('active');
			if(descCount < -7){descCount = 0}
				$(".descBox").eq(descCount).addClass('active');
		}
	}

	var count = 0;
	function scrollPorto(e){
		if(e == "mousedown") {
			count -= 10;
			$('#GalleryCenter').css({"transform": "translate(-50%, -50%) perspective(1000px) rotateY("+count+"deg)"});
		}else if (e == "mouseup"){
			count += 10;
			$('#GalleryCenter').css({"transform": "translate(-50%, -50%) perspective(1000px) rotateY("+count+"deg)"});
		}
	}

	//kontrol modal
	function showModal(id){
		const modalContent = document.querySelector('#modal'+id);	
		modalContent.classList.add('active');
		
	}

	// kontrol close modal
	function closeBtn(id){
		const modalContent = document.querySelector('#modal'+id);
		modalContent.classList.remove('active');
	}