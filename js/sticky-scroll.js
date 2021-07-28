window.onload = function() {
  const SHOWING_CLASS = "showing";
  const firstSlide = document.querySelector(".slider-item:first-child");

  function slide(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

    if (currentSlide) { // 만약 현재 슬라이드라면
      currentSlide.classList.remove(SHOWING_CLASS); // 현재 슬라이드에서 SHOWING_CLASS를 제거한다
      const nextSlide = currentSlide.nextElementSibling; // 다음 슬라이드를 정의한다.

      if (nextSlide) { //만약 다음 슬라이드가 있다면
        nextSlide.classList.add(SHOWING_CLASS); //다음 슬라이드에 SHOWING_CLASS를 붙인다.
      } else { // 다음 슬라이드가 없다면 =>  5번째 슬라이드라면(마지막 슬라이드라면)
        firstSlide.classList.add(SHOWING_CLASS); // 첫번째 슬라이드에 SHOWING_CLASS를 붙인다.
      }
      
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }

  slide();
  setInterval(slide, 5000);
}