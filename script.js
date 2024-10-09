// function isMobileDevice() {
//   return /Mobi|Android|iPhone/i.test(navigator.userAgent);
// }

// function locomotive() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true ,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     pinType: document.querySelector("#main").style.transform
//       ? "transform"
//       : "fixed",
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }
// locomotive();


// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//       ./i/0001.webp
//       ./i/0002.webp
//       ./i/0003.webp
//       ./i/0004.webp
//       ./i/0005.webp
//       ./i/0006.webp
//       ./i/0007.webp
//       ./i/0008.webp
//       ./i/0009.webp
//       ./i/0010.webp
//       ./i/0011.webp
//       ./i/0012.webp
//       ./i/0013.webp
//       ./i/0014.webp
//       ./i/0015.webp
//       ./i/0016.webp
//       ./i/0017.webp
//       ./i/0018.webp
//       ./i/0019.webp
//       ./i/0020.webp
//       ./i/0021.webp
//       ./i/0022.webp
//       ./i/0023.webp
//       ./i/0024.webp
//       ./i/0025.webp
//       ./i/0026.webp
//       ./i/0027.webp
//       ./i/0028.webp
//       ./i/0029.webp
//       ./i/0030.webp
//       ./i/0031.webp
//       ./i/0032.webp
//       ./i/0033.webp
//       ./i/0034.webp
//       ./i/0035.webp
//       ./i/0036.webp
//       ./i/0037.webp
//       ./i/0038.webp
//       ./i/0039.webp
//       ./i/0040.webp
//       ./i/0041.webp
//       ./i/0042.webp
//       ./i/0043.webp
//       ./i/0044.webp
//       ./i/0045.webp
//       ./i/0046.webp
//       ./i/0047.webp
//       ./i/0048.webp
//       ./i/0049.webp
//       ./i/0050.webp
//       ./i/0051.webp
//       ./i/0052.webp
//       ./i/0053.webp
//       ./i/0054.webp
//       ./i/0055.webp
//       ./i/0056.webp
//       ./i/0057.webp
//       ./i/0058.webp
//       ./i/0059.webp
//       ./i/0060.webp
//       ./i/0061.webp
//       ./i/0062.webp
//       ./i/0063.webp
//       ./i/0064.webp
//       ./i/0065.webp
//       ./i/0066.webp
//       ./i/0067.webp
//       ./i/0068.webp
//       ./i/0069.webp
//       ./i/0070.webp
//       ./i/0071.webp
//       ./i/0072.webp
//       ./i/0073.webp
//       ./i/0074.webp
//       ./i/0075.webp
//       ./i/0076.webp
//       ./i/0077.webp
//       ./i/0078.webp
//       ./i/0079.webp
//       ./i/0080.webp
//       ./i/0081.webp
//       ./i/0082.webp
//       ./i/0083.webp
//       ./i/0084.webp
//       ./i/0085.webp
//       ./i/0086.webp
//       ./i/0087.webp
//       ./i/0088.webp
//       ./i/0089.webp
//       ./i/0090.webp
//       ./i/0091.webp
//       ./i/0091.webp
//       ./i/0092.webp
//       ./i/0093.webp
//       ./i/0094.webp
//       ./i/0095.webp
//       ./i/0096.webp
//       ./i/0097.webp
//       ./i/0098.webp
//       ./i/0099.webp
//       ./i/0100.webp
//       ./i/0101.webp
//       ./i/0102.webp
//       ./i/0103.webp
//       ./i/0104.webp
//       ./i/0105.webp
//       ./i/0106.webp
//       ./i/0107.webp
//       ./i/0108.webp
//       ./i/0109.webp
//       ./i/0110.webp
//       ./i/0111.webp
//       ./i/0112.webp
//       ./i/0113.webp
//       ./i/0114.webp
//       ./i/0115.webp
//       ./i/0116.webp
//       ./i/0117.webp
//       ./i/0118.webp
//       ./i/0119.webp
//       ./i/0120.webp
//       ./i/0121.webp
//       ./i/0122.webp
//       ./i/0123.webp
//       ./i/0124.webp
//       ./i/0125.webp
//       ./i/0126.webp
//       ./i/0127.webp
//       ./i/0128.webp
//       ./i/0129.webp
//       ./i/0130.webp
//       ./i/0131.webp
//       ./i/0132.webp
//       ./i/0133.webp
//       ./i/0134.webp
//       ./i/0135.webp
//       ./i/0136.webp
//       ./i/0137.webp
//       ./i/0138.webp
//       ./i/0139.webp
//       ./i/0140.webp
//       ./i/0141.webp
//       ./i/0142.webp
//       ./i/0143.webp
//       ./i/0144.webp
//       ./i/0145.webp
//       ./i/0146.webp
//       ./i/0147.webp
//       ./i/0148.webp
//       ./i/0149.webp
//       ./i/0150.webp
//       ./i/0151.webp
//       ./i/0152.webp
//       ./i/0153.webp
//       ./i/0154.webp
//       ./i/0155.webp
//       ./i/0156.webp
//       ./i/0157.webp
//       ./i/0158.webp
//       ./i/0159.webp
//       ./i/0160.webp
//       ./i/0161.webp
//       ./i/0162.webp
//       ./i/0163.webp
//       ./i/0164.webp
//       ./i/0165.webp
//       ./i/0166.webp
//       ./i/0167.webp
//       ./i/0168.webp
//       ./i/0169.webp
//       ./i/0170.webp
//       ./i/0171.webp
//       ./i/0172.webp
//       ./i/0173.webp
//       ./i/0174.webp
//       ./i/0175.webp
//       ./i/0176.webp
//       ./i/0177.webp
//       ./i/0178.webp
//       ./i/0179.webp
//       ./i/0180.webp
//       ./i/0181.webp
//       ./i/0182.webp
//       ./i/0183.webp
//       ./i/0184.webp
//       ./i/0185.webp
//       ./i/0186.webp
//       ./i/0187.webp
//       ./i/0188.webp
//       ./i/0189.webp
//       ./i/0190.webp
//       ./i/0191.webp
//       ./i/0191.webp
//       ./i/0192.webp
//       ./i/0193.webp
//       ./i/0194.webp
//       ./i/0195.webp
//       ./i/0196.webp
//       ./i/0197.webp
//       ./i/0198.webp
//       ./i/0199.webp
//       ./i/0200.webp
//       ./i/0201.webp
//       ./i/0202.webp
//       ./i/0203.webp
//       ./i/0204.webp
//       ./i/0205.webp
//       ./i/0206.webp
//       ./i/0207.webp
//       ./i/0208.webp
//       ./i/0209.webp
//       ./i/0210.webp
//       ./i/0211.webp
//       ./i/0212.webp
//       ./i/0213.webp
//       ./i/0214.webp
//       ./i/0215.webp
//       ./i/0216.webp
//       ./i/0217.webp
//       ./i/0218.webp
//       ./i/0219.webp
//       ./i/0220.webp
//       ./i/0221.webp
//       ./i/0222.webp
//       ./i/0223.webp
//       ./i/0224.webp
//       ./i/0225.webp
//       ./i/0226.webp
//       ./i/0227.webp
//       ./i/0228.webp
//       ./i/0229.webp
//       ./i/0230.webp
//       ./i/0231.webp
//       ./i/0232.webp
//       ./i/0233.webp
//       ./i/0234.webp
//       ./i/0235.webp
//       ./i/0236.webp
//       ./i/0237.webp
//       ./i/0238.webp
//       ./i/0239.webp
//       ./i/0240.webp
//       ./i/0241.webp
//       ./i/0242.webp
//       ./i/0243.webp
//       ./i/0244.webp
//   `;
//   return data.split("\n")[index];
// }

// const frameCount = 244;

// const images = [];
// const imageSeq = {
// frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
// const img = new Image();
// img.src = files(i);
// images.push(img);
// }

// gsap.to(imageSeq, {
// frame: frameCount - 1,
// snap: "frame",
// ease: `none`,
// scrollTrigger: {
//     scrub: 0.5,
//     trigger: `#page>canvas`,
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//     pin: true, // Pin the canvas during the scroll
//     onUpdate: () => {
//       render(); // Keep updating the frame
//       if (imageSeq.frame >= frameCount - 1) {
//         redirectToNextPage(); // Redirect to PRAYAG244.html
//       }
//     },
// },
// });

// images[1].onload = render;

// function redirectToNextPage() {
//   console.log("All frames rendered, redirecting to PRAYAG244.html...");
//   setTimeout(() => {
//     window.location.replace("./PRAYAG24.html");
//   }, 1000); // wait for 1 second before redirecting
// }
// function render() {
// scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
// var canvas = ctx.canvas;
// var hRatio = canvas.width / img.width;
// var vRatio = canvas.height / img.height;
// var ratio = Math.max(hRatio, vRatio);
// var centerShift_x = (canvas.width - img.width * ratio) / 2;
// var centerShift_y = (canvas.height - img.height * ratio) / 2;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.drawImage(
//   img,
//   0,
//   0,
//   img.width,
//   img.height,
//   centerShift_x,
//   centerShift_y,
//   img.width * ratio,
//   img.height * ratio
// );
// }
// ScrollTrigger.create({
// trigger: "#page>canvas",
// pin: true,
// scroller: `#main`,
// start: `top top`,
// end: `400% top`, // Adjust if needed
// });

// Function to initialize the video playback when scrolled into view
function initializeVideoOnScroll() {
  const videoContainer = document.getElementById("videoContainer");  // Update this to match the container of your video
  const video = document.getElementById("myVideo");  // Update this to match the ID of your video element

  // Check if ScrollTrigger and LocomotiveScroll are properly initialized
  if (video && videoContainer) {
    // Set up Locomotive Scroll and ScrollTrigger if needed
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    // ScrollTrigger for playing video when it comes into view
    ScrollTrigger.create({
      trigger: videoContainer,
      scroller: "#main",
      start: "top center",  // Adjust when you want the video to start playing
      onEnter: () => {
        video.play();
      },
    });

    // Redirect to PRAYAG24.html when video ends
    video.addEventListener("ended", () => {
      window.location.replace("./PRAYAG24.html");
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  } else {
    console.error("Video or video container not found!");
  }
}

// Call the function to initialize video on scroll
initializeVideoOnScroll();
