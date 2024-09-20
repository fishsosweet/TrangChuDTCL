document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let content = document.querySelector('.nen4');
      let contentPosition = content.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
  
      if (contentPosition < screenPosition) {
        content.classList.add('in-view');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let content = document.querySelector('.nen5');
      let contentPosition = content.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
  
      if (contentPosition < screenPosition) {
        content.classList.add('in-view1');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let content = document.querySelector('.thongtincontent3');
      let contentPosition = content.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
  
      if (contentPosition < screenPosition) {
        content.classList.add('in-view2');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let content = document.querySelector('.nen6');
      let contentPosition = content.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
  
      if (contentPosition < screenPosition) {
        content.classList.add('in-view3');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      let content = document.querySelector('.thongtin2content3');
      let contentPosition = content.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.2;
  
      if (contentPosition < screenPosition) {
        content.classList.add('in-view4');
      }
    });
  });