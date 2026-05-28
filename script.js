gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("video");

video.pause();

video.addEventListener("loadedmetadata", () => {
  gsap.to(video, {
    currentTime: video.duration,
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "+=1500",
      scrub: true
    }
  });
});
