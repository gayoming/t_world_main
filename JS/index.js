//swiper JS
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    rewind: true,
    loop: true,
    loopedSlides: 2,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
    keyboard: true,
  });

  const toggleButton = document.getElementById('toggleButton');
  const toggleImage = document.getElementById('toggleImage');
  let isPlaying = true;
   
  //swiper slide 재생 정지 버튼
  toggleButton.addEventListener('click', () => {
    if (isPlaying) {
      swiper.autoplay.stop(); 
      toggleImage.src = 'img/play-icon.png'; 
      toggleImage.alt = '재생 버튼'; 
    } else {
      swiper.autoplay.start(); 
      toggleImage.src = 'img/pause-icon.png'; 
      toggleImage.alt = '정지 버튼';
    }
    isPlaying = !isPlaying; // 상태 전환
  });

  // HOT & NEW 작은 슬라이드
  document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector(".hotnew_box ul");
    const nextBtn = document.querySelector(".next_btn");
    const prevBtn = document.querySelector(".prev_btn");

    let currentIndex = 0; // 현재 보여지는 이미지의 인덱스
    const itemWidth = ul.querySelector("li").offsetWidth; // 각 li의 너비
    const totalItems = ul.querySelectorAll("li").length; // 총 아이템 개수

    nextBtn.addEventListener("click", function () {
      if (currentIndex < totalItems - 1) {
        currentIndex++; // 인덱스를 증가
        ul.style.transform = `translateX(-${itemWidth * currentIndex}px)`; // 이동
      }
    });

    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--; // 인덱스를 감소
        ul.style.transform = `translateX(-${itemWidth * currentIndex}px)`; // 이동
      }
    });
  }); 

      //스크롤 시 mt 속성 변경
      window.addEventListener("scroll", function () {
      const stickBox = document.querySelector(".stick_box");
      if (window.scrollY > 500) { 
        stickBox.style.marginTop = "5%"; 
      } 
      else {
        stickBox.style.marginTop = "35%";
      }
    });

    window.addEventListener("scroll", function () {
        const headerMenu = this.document.querySelector(".second_header");
        if (window.scrollY > 70) { 
            headerMenu.style.display = "sticky";
            headerMenu.style.top = "0"; 
        } 
        else {
            headerMenu.style.display = "relative";
        }
      });
   
    $(document).ready(function(){
        //간단 메뉴 스크롤 이벤트
        let currentPosition = parseInt($(".stick_box").css("top"));
          $(window).scroll(function() {
           let position = $(window).scrollTop(); 
              $(".stick_box").stop().animate({"top":position+currentPosition+"px"},800);
         });
         //메뉴 호버시 이미지 attr 변경
         $(".right li img").hover(function () {
          $(this).attr("src", $(this).attr("src").replace("_off.png", "_active.png"));
          }, function () {
          $(this).attr("src", $(this).attr("src").replace("_active.png", "_off.png"));
        });

        $(".phone_wrap > h2 > span").click(function () {
            $(".phone_wrap > h2 > ul").stop().toggle();
        });
        //footer family 사이트
        $(".btn .family_site").click(function () {
            $(".column_box_right .family_list").stop().toggle();
            $(this).toggleClass('on');
        });
      });