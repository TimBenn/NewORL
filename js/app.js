var scrollpos = window.scrollY;
  var header = document.getElementById('header');
  console.log(header)
  function add_class_on_scroll() {
      header.classList.add('shrunk');
  }
  function remove_class_on_scroll() {
      header.classList.remove('shrunk');
  }

window.addEventListener('scroll', function(){
      scrollpos = window.scrollY;
      if(scrollpos > 0){
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
  });
