function isElementInView(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener("scroll", function(event) {
    var elements = document.querySelectorAll(".fly-in");
    for (var i = 0; i < elements.length; i++) {
      if (isElementInView(elements[i])) {
        elements[i].classList.add("in-view");
      }
    }
  });
  