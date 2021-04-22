import $ from "jquery";
import {gsap} from "gsap";

$(document).ready(function(){

  console.log('Page loaded');

  var cloud1 = $("#cloud-container img:nth-child(1)");
  var cloud2 = $("#cloud-container img:nth-child(2)");
  var cloud3 = $("#cloud-container img:nth-child(3)");
  var cloudArray = [cloud1,cloud2,cloud3];

  var mainTL = gsap.timeline();
  var flameTL = gsap.timeline({paused:true, repeat:-1});

  var rocket = $("#rocket-container");
  var middleFlame = $("#rocket-container img:nth-child(1)");
  var leftFlame = $("#rocket-container img:nth-child(2)");
  var rightFlame = $("#rocket-container img:nth-child(3)");
  var flamesArray = [middleFlame,leftFlame, rightFlame];

  var flameScale0 = gsap.utils.wrap([0.5,0.55,0.75]);
  var flameScale1 = gsap.utils.wrap([1.5,0.35,0.25]);
  var flameScale2 = gsap.utils.wrap([2,1.05,0.55]);
  var flameScale3 = gsap.utils.wrap([0.89,1,1]);
//
  var flameDur0 = gsap.utils.wrap([0.25,0.15,0.15]);
  var flameDur1 = gsap.utils.wrap([0.15,0.25,0.25]);


  //var tl = gsap.timeline();
  //init
  flameTL.to(flamesArray, {duration:flameDur0, scaleY:flameScale0, ease:"none", transformOrigin:"50% 0" })
  .to(flamesArray, {duration:flameDur1, scaleY:flameScale1, ease:"none", transformOrigin:"50% 0" })
  .to(flamesArray, {duration:flameDur0, scaleY:flameScale2, ease:"none", transformOrigin:"50% 0" })
  .to(flamesArray, {duration:flameDur1, scaleY:flameScale3, ease:"none", transformOrigin:"50% 0" })

  ;

  flameTL.play();

//clouds animation
  function cloudsTl(){
    var tl = gsap.timeline();

    tl.from(cloudArray ,{duration:1, stagger:0.3, y:"+=700", ease:"expo.out"})


      ;//timeline END

      return tl;

  }




//add main timeline
mainTL.add(cloudsTl())
//.add(aniBoxOrange(), "-=1")

;//timeline END



});
