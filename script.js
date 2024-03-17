function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco();

function loader(){
  var timer = document.querySelector(".no h1");
  var grow = 0
  setInterval(() => {
    grow++
    if(grow <= 100) {
      timer.innerHTML = grow
    }else{
      timer.innerHTML + grow
    }
  },15);

  var tl3 = gsap.timeline();
  tl3.to(".loader",{
    y:"-100%",
    delay:.7,
    duration:1,
  })

  tl3.to(".loader",{
    opacity:0,
    display: "none",
  })
  tl3.from("#main",{
    opacity: 0
  })
  tl3.from(".nav",{
    y : "-50%",
    opacity: 0,
  })
  tl3.from(".htext h1",{
    opacity: 0,
    y : "150%",
  })
  tl3.from(".pg2",{
    opacity: 0,
    y : "50%",
  })
}
loader();
function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor, .cursor2",{
            left: dets.x,
            top: dets.y
        })
    })
    
}
cursor();

function pg2ani(){
  var tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".pg2 #f",
      scroller: "#main",
      start: "top 100%",
      end: "top 80%",
      // markers: true,
      scrub: 1,
    },
});
tl.from("#f",{
    scale:3.5,
})


}
pg2ani();


function pg9ani(){
  gsap.to(".pg9 img",{
    scale: 1,
    scrollTrigger:{
      trigger: ".pg9",
      scroller: "#main",
      start: "top 90%",
      // markers: true,
      end: "top 60%",
      scrub: 2,
    }
  })
}
pg9ani();

function poly(){
  
const trigger = document.querySelector('.bigimg');

gsap.to('.bigimg', {
  clipPath: "polygon(0 0, 100% 0, 58% 70%, 58% 100%, 42% 100%, 42% 70%)",
  scrollTrigger: {
    trigger: trigger,
    scroller: '#main',
    // markers: true,
    start: 'top 90%',
    end: 'top 70%',
    scrub: true
  }
})
}
poly();






