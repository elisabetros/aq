let endpoint = "https://architecturequote.com/wp-json/wp/v2/faq";

window.addEventListener("load", function() {
  init();
});

function fetchFaq() {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(function(data) {
        resolve(data);
      });
  });
}

function showFaq(faqData) {
  let templateFaq = document.querySelector(".faqTemplate").content;
  let allFaq = document.querySelector("section");

  // clone.querySelector(".question").textContent = faqData[0].title.rendered;
  // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
  for (let i = 0; i < faqData.length; i++) {
    let clone = templateFaq.cloneNode(true);
    clone.querySelector(".question").textContent = faqData[i].title.rendered;
    clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
    allFaq.appendChild(clone);
  }
}

  function showFaq(faqData){
      let templateFaq = document.querySelector(".faqTemplate").content;
      let allFaq = document.querySelector("section");
 
    // clone.querySelector(".question").textContent = faqData[0].title.rendered;
    // clone.querySelector(".answer").innerHTML = faqData[0].content.rendered;
    for (let i = 0; i < faqData.length; i++) {
        let clone = templateFaq.cloneNode(true);
        clone.querySelector(".question").textContent =
          faqData[i].title.rendered;
          clone.querySelector(".answer").innerHTML = faqData[i].content.rendered;
          allFaq.appendChild(clone);
      }
    }
      
  
  function timelineAnimation() {
    let tl = new new TimelineMax({ repeat:-1, reverse:true });
    tl.staggerFromTo(".timelineWrapper", .3,
     { 
      scale:1.2,
      opacity:0,
      rotation: 0.01,
      // autoAlpha:0,
      skewY:15
    },
    {scale:1,
      opacity:1,
      rotation: 0,
      // autoAlpha:1,
      skewY:0,
      ease: Power0.easeNone
    }, 
    .1).staggerFromTo(
      ".timelineContent",
      .3,{
       rotation: 0.01,
       opacity:0
      // autoAlpha:1
      },
      {
      rotation: 0,
        opacity:1,
        ease: Power0.easeNone
      }, .1);
  }
    timelineAnimation();

async function init() {
  const faqData = await fetchFaq();
  // console.log(faqData);
  showFaq(faqData);
  let plusses = document.querySelectorAll(".plus");
  let open = false;
  plusses.forEach(plus => {
    plus.addEventListener("click", function() {
      console.log(open);
      if (open === false) {
        plus.parentElement.style.height = "40vh";
        plus.style.transform = "rotate(180deg)";

        open = true;
      } else {
        plus.parentElement.style.height = "4em";
        plus.style.transform = "rotate(0)";
        open = false;
      }
    });
  });
}
