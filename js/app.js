import initMap from './map'



  var scrollpos = window.scrollY;
  var header = document.getElementById('header');
  console.log(header)
  function addClassOnScroll() {
      header.classList.add('shrunk');
  }
  function RemoveClassOnScroll() {
      header.classList.remove('shrunk');
  }

window.addEventListener('scroll', function(){
      scrollpos = window.scrollY;
      if(scrollpos > 0){
          addClassOnScroll();
      }
      else {
          RemoveClassOnScroll();
      }
  });