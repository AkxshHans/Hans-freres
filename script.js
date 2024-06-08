
var t1 = gsap.timeline()


function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
        else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
    },150)
}
time()


t1.to("#loader h1",{
    
    delay  : 0.5,
    duration : 1 ,
    onStart : time() ,
    // color:"rgb(226, 173, 173)",


})

gsap.to("#loader",{
    top : "-100vh" ,
    delay : 2.4,
    duration : 1.9 ,
})






var t2 = gsap.timeline()



t2.from("#loader #please", {
    y:-30,
    delay:0.6,
    duration:0.4,
    opacity:0,
    stagger:0.1



    
})
t2.from("#loader #website", {
    y:-30,
    opacity:0,
   

 


})


document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y,

    })
})



function cursoranimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
    
        })
    })
    

    Shery.makeMagnet("#navpart2 h4", {});
}
cursoranimation();

Shery.makeMagnet("#page1 h6", {});
Shery.makeMagnet("#nav h3", {});


var navtl = gsap.timeline()
navtl.from("#nav h3",{
    y:-80,
    delay:3,
    duration:2,
    // stagger:o,
    stagger:0.3,
    opacity:0,
})
navtl.from("#nav #navpart2 h4",{
    y:-80,
 
    opacity:0,
    stagger:0.3
   
})



gsap.from("#hero h5 , #hero h1",{
    y:100,
    delay:3,
    duration:2,
    stagger:0.5,
    opacity:0,
    
})

gsap.to("#videocontainer video",{
    width:"80%" ,
    scrollTrigger : {
        trigger:"#page2",
        scroll:"body",
        markers:false,
        start:"top 0%",
        end:"top -100%",
        scrub:5,
        pin:true,


    }
})




Shery.makeMagnet("#page4 #p2", {});
Shery.makeMagnet("#page4content p", {});
Shery.makeMagnet("#footerdiv h5", {});





function sheryanimation(){
    Shery.imageEffect("#imgdiv",{
        style:5,
        gooey:true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"996999","range":[-9999999,9999999]},"aspect":{"value":0.7272695633070845},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.34,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.72,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    })
}
sheryanimation();






Shery.imageEffect("#page4content img", {
    style: 4/*OR 5 for different variant */,

  });





  Shery.makeMagnet("#page3 #webdesign1 h4", {});
  Shery.makeMagnet(" #page3 #webdesign1 h5 ",{});



  Shery.makeMagnet(" #page4circle ",{});




  Shery.textAnimate("#page6 h2" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });




//   Shery.imageEffect("#page3 video", {
//     style: 4,
  
//     config:{"uColor":{"value":false},"uSpeed":{"value":0.3,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.19,"range":[0,5]},"uFrequency":{"value":0.76,"range":[0,10]},"geoVertex":{"range":[1,64],"value":4.37},"zindex":{"value":996999,"range":[999999,9999999]},"aspect":{"value":0.5},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
//   });


