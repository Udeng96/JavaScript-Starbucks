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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021이라는 숫자가 반환