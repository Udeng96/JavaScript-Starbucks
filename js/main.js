const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //search에 속해있는 div요소 아무거나 선택해도 input이 포커스가 된다. 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchInputEl.classList.add('focused'); // CLASS정보를 가지고 있는 객체에서 어떤 클래스요소를 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색'); // html속성을 지정할 때 쓰는 메소드 // input요소에 지정할 힌트작성

});
searchInputEl.addEventListener('blur', function () {
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html속성을 지정할 때 쓰는 메소드 // input요소에 지정할 힌트작성

});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { //스크롤을 했을 때
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간(초), 옵션) => 애니메이션 라이브러리(html에 추가해줘야한다.)
    gsap.to(badgeEl, .6, {
      opacity: 0, //점점 투명해지는 애니메이션
      display: 'none' // 투명해진 뒤에 사라지도록
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });

  } else {
    //배지를 다시 보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300)); //300 = 0.3초
// _.throttle(사용하려는 함수, 시간)


toTopEl.addEventListener('click',function(){
  gsap.to(window, .7,{
    scrollTo: 0 //화면의 위치를 scroll 0 으로 옮겨주겠다.
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7초 후에 계속 반복되는데 이를 index의 수만큼 반복
    opacity: 1
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); //생성자(클래스) 

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여주는 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초에 한 번 씩 자동슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자 ==> 동그라미를 누르면 해당 슬라이드로 넘어가는 것
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //반대값으로 만들다.true<->false
  if (isHidePromotion) {
    //true면 숨김처리
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');

  }
});

function random(min, max) {
  // '.toFixed()'를 통해 반환된 문자 데이터를,
  //'parseFloat()'을 통해 소수점을 가지는 숫자 데이터를 반환
  return parseFloat( ( Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: 20, //y축으로 이동
    repeat: -1,
    yoyo: true, //다시 전으로 이동 (둥둥 떠져있는 느낌)
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', .1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 뷰포트 시작하는 부분 0 , 끝나는 부분 1, .8부분에서 감시가 되어 실행
    })
    .setClassToggle(spyEl, 'show') // 각각의 요소에 show라는 명령을 실행할것이다.
    .addTo(new ScrollMagic.Controller()); //실제로 동작할 수 있는 구조를 만들어준다.

});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021이라는 숫자가 반환