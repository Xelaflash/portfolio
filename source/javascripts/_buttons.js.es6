document.addEventListener("DOMContentLoaded", function(event) {
 const btn = document.querySelector('.form-btn');
  btn.onmousemove = (e) => {
   const x = e.pageX - e.target.offsetLeft;
   const y = e.pageY - e.target.offsetTop;
   e.target.style.setProperty('--x', `${ x }px`);
   e.target.style.setProperty('--y', `${ y }px`);
 }
});

// Parallax btn
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


if (!isMobile()) {
  document.addEventListener("DOMContentLoaded", function(event) {
    const docStyle = document.documentElement.style;
    const aElem = document.getElementById('parallax');
    const boundingClientRect = aElem.getBoundingClientRect();

    aElem.onmousemove = function(e) {
      const x = e.clientX - boundingClientRect.left;
      const y = e.clientY - boundingClientRect.top;
      const xc = boundingClientRect.width/2;
      const yc = boundingClientRect.height/2;
      const dx = x - xc;
      const dy = y - yc;

      docStyle.setProperty('--rx', `${ dy/-1 }deg`);
      docStyle.setProperty('--ry', `${ dx/10 }deg`);
    }

    aElem.onmouseleave = function(e) {
      docStyle.setProperty('--ty', '0');
      docStyle.setProperty('--rx', '0');
      docStyle.setProperty('--ry', '0');
    }

    aElem.onmousedown = function(e) {
      docStyle.setProperty('--tz', '-25px');
    }

    document.body.onmouseup = function(e) {
      docStyle.setProperty('--tz', '-12px');
    }
  });
};
