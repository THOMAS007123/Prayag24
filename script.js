
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
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
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
        ./i/0001.png
        ./i/0002.png
        ./i/0003.png
        ./i/0004.png
        ./i/0005.png
        ./i/0006.png
        ./i/0007.png
        ./i/0008.png
        ./i/0009.png
        ./i/0010.png
        ./i/0011.png
        ./i/0012.png
        ./i/0013.png
        ./i/0014.png
        ./i/0015.png
        ./i/0016.png
        ./i/0017.png
        ./i/0018.png
        ./i/0019.png
        ./i/0020.png
        ./i/0021.png
        ./i/0022.png
        ./i/0023.png
        ./i/0024.png
        ./i/0025.png
        ./i/0026.png
        ./i/0027.png
        ./i/0028.png
        ./i/0029.png
        ./i/0030.png
        ./i/0031.png
        ./i/0032.png
        ./i/0033.png
        ./i/0034.png
        ./i/0035.png
        ./i/0036.png
        ./i/0037.png
        ./i/0038.png
        ./i/0039.png
        ./i/0040.png
        ./i/0041.png
        ./i/0042.png
        ./i/0043.png
        ./i/0044.png
        ./i/0045.png
        ./i/0046.png
        ./i/0047.png
        ./i/0048.png
        ./i/0049.png
        ./i/0050.png
        ./i/0051.png
        ./i/0052.png
        ./i/0053.png
        ./i/0054.png
        ./i/0055.png
        ./i/0056.png
        ./i/0057.png
        ./i/0058.png
        ./i/0059.png
        ./i/0060.png
        ./i/0061.png
        ./i/0062.png
        ./i/0063.png
        ./i/0064.png
        ./i/0065.png
        ./i/0066.png
        ./i/0067.png
        ./i/0068.png
        ./i/0069.png
        ./i/0070.png
        ./i/0071.png
        ./i/0072.png
        ./i/0073.png
        ./i/0074.png
        ./i/0075.png
        ./i/0076.png
        ./i/0077.png
        ./i/0078.png
        ./i/0079.png
        ./i/0080.png
        ./i/0081.png
        ./i/0082.png
        ./i/0083.png
        ./i/0084.png
        ./i/0085.png
        ./i/0086.png
        ./i/0087.png
        ./i/0088.png
        ./i/0089.png
        ./i/0090.png
        ./i/0091.png
        ./i/0091.png
        ./i/0092.png
        ./i/0093.png
        ./i/0094.png
        ./i/0095.png
        ./i/0096.png
        ./i/0097.png
        ./i/0098.png
        ./i/0099.png
        ./i/0100.png
        ./i/0101.png
        ./i/0102.png
        ./i/0103.png
        ./i/0104.png
        ./i/0105.png
        ./i/0106.png
        ./i/0107.png
        ./i/0108.png
        ./i/0109.png
        ./i/0110.png
        ./i/0111.png
        ./i/0112.png
        ./i/0113.png
        ./i/0114.png
        ./i/0115.png
        ./i/0116.png
        ./i/0117.png
        ./i/0118.png
        ./i/0119.png
        ./i/0120.png
        ./i/0121.png
        ./i/0122.png
        ./i/0123.png
        ./i/0124.png
        ./i/0125.png
        ./i/0126.png
        ./i/0127.png
        ./i/0128.png
        ./i/0129.png
        ./i/0130.png
        ./i/0131.png
        ./i/0132.png
        ./i/0133.png
        ./i/0134.png
        ./i/0135.png
        ./i/0136.png
        ./i/0137.png
        ./i/0138.png
        ./i/0139.png
        ./i/0140.png
        ./i/0141.png
        ./i/0142.png
        ./i/0143.png
        ./i/0144.png
        ./i/0145.png
        ./i/0146.png
        ./i/0147.png
        ./i/0148.png
        ./i/0149.png
        ./i/0150.png
        ./i/0151.png
        ./i/0152.png
        ./i/0153.png
        ./i/0154.png
        ./i/0155.png
        ./i/0156.png
        ./i/0157.png
        ./i/0158.png
        ./i/0159.png
        ./i/0160.png
        ./i/0161.png
        ./i/0162.png
        ./i/0163.png
        ./i/0164.png
        ./i/0165.png
        ./i/0166.png
        ./i/0167.png
        ./i/0168.png
        ./i/0169.png
        ./i/0170.png
        ./i/0171.png
        ./i/0172.png
        ./i/0173.png
        ./i/0174.png
        ./i/0175.png
        ./i/0176.png
        ./i/0177.png
        ./i/0178.png
        ./i/0179.png
        ./i/0180.png
        ./i/0181.png
        ./i/0182.png
        ./i/0183.png
        ./i/0184.png
        ./i/0185.png
        ./i/0186.png
        ./i/0187.png
        ./i/0188.png
        ./i/0189.png
        ./i/0190.png
        ./i/0191.png
        ./i/0191.png
        ./i/0192.png
        ./i/0193.png
        ./i/0194.png
        ./i/0195.png
        ./i/0196.png
        ./i/0197.png
        ./i/0198.png
        ./i/0199.png
        ./i/0200.png
        ./i/0201.png
        ./i/0202.png
        ./i/0203.png
        ./i/0204.png
        ./i/0205.png
        ./i/0206.png
        ./i/0207.png
        ./i/0208.png
        ./i/0209.png
        ./i/0210.png
        ./i/0211.png
        ./i/0212.png
        ./i/0213.png
        ./i/0214.png
        ./i/0215.png
        ./i/0216.png
        ./i/0217.png
        ./i/0218.png
        ./i/0219.png
        ./i/0220.png
        ./i/0221.png
        ./i/0222.png
        ./i/0223.png
        ./i/0224.png
        ./i/0225.png
        ./i/0226.png
        ./i/0227.png
        ./i/0228.png
        ./i/0229.png
        ./i/0230.png
        ./i/0231.png
        ./i/0232.png
        ./i/0233.png
        ./i/0234.png
        ./i/0235.png
        ./i/0236.png
        ./i/0237.png
        ./i/0238.png
        ./i/0239.png
        ./i/0240.png
        ./i/0241.png
        ./i/0242.png
        ./i/0243.png
        ./i/0244.png
    `;
  return data.split("\n")[index];
}

const frameCount = 244;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
      scrub: 0.5,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
      pin: true, // Pin the canvas during the scroll
      onUpdate: () => {
        render(); // Keep updating the frame
        if (imageSeq.frame >= frameCount - 1) {
          redirectToNextPage(); // Redirect to PRAYAG244.html
        }
      },
  },
});
  
  images[1].onload = render;
  
  function redirectToNextPage() {
    console.log("All frames rendered, redirecting to PRAYAG244.html...");
    setTimeout(() => {
      window.location.replace("./PRAYAG244.html");
    }, 1000); // wait for 1 second before redirecting
  }
function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `400% top`, // Adjust if needed
});

// gsap.to("#container", {
//   scrollTrigger: {
//     trigger: `#container`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`,
//   },
// });
  
// gsap.to("#container1", {
//   scrollTrigger: {
//     trigger: `#container1`,
//     start: `top top`,
//     end: `bottom top`,
//     pin: true,
//     scroller: `#main`,
//   },
// });


