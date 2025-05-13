//------intersection observer section

const options = { 
    root: null,
    threshold: 0,
    rootMargin: "-100px"
  };
  
  let popupShown = false
  const popup = document.querySelector('.popup');
  const observer = new IntersectionObserver(function(entries, options){
    entries.forEach(entry => {
      console.log(entry);
      console.log(popup);
      if (entry.isIntersecting && !popupShown){
        //document.getElementById("popup-id").classList.toggle("active");
        popup.classList.add('active');
        console.log(popup.classList);
        popupShown = true;
      }
    })
  });
  
  
  
  const elements = document.querySelectorAll('.arrange-services');
  console.log(elements);
  elements.forEach(element => observer.observe(element));
  /*const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };*/
  
  