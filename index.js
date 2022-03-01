$(".right").click(function(){
  $(".Dice-img").attr("src","Gemes-Images/TinDog.png");
  $(".Dice-header").css("background-color","#ff4c68");
  $("#Title1").text("Website, Ecommerce");
  $("#Name1").text("TinDog 🐶");
  $("#Desc1").text("Tindog is a fun app that provides dog lovers with the fastest, easiest way to meet other pet parents and their dog counterparts. built using HTML 🧱 CSS 🎨 JS 🎮 and JQ 🔮");
  $("#Site1").attr("href","MySites/TinDog-Start-master/index.html");

  $(".Simon-img").attr("src","Gemes-Images/Dice.png");
  $(".Simon-header").css("background-color","#3f3f44");
  $("#Title2").text("WEBSITE, GAME");
  $("#Name2").text("Random Dice Game 🎲");
  $("#Desc2").text("A game with two players each one have a dice , A player with heighest dice number will win.  built using HTML 🧱 CSS 🎨 JS 🎮 and JQ 🔮 ");
  $("#Site2").attr("href","MySites/Dice/index.html");

  $(".Drum-img").attr("src","Gemes-Images/Simon.png");
  $(".Drum-header").css("background-color","#011F3F");
  $("#Title3").text("WEBSITE, GAME");
  $("#Name3").text("Simon Game ✨");
  $("#Desc3").text("Simon is an electronic game of memory skill , The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. built using HTML 🧱 CSS 🎨 JS 🎮 and JQ 🔮 ");
  $("#Site3").attr("href","MySites/SimonGame/index.html");
  $(".Paging-right").attr("href","#Projects");
});

$(".left").click(function(){
  location.reload();
  $(".Paging-left").attr("href","#Projects");
});








// linkedin
$(".Social-Border-linkedin").mouseover(function(){
  $(".Social-Border-linkedin").css("background-color","#efb960");
  $(".Media-linkedin").css("color","#22273b");
});
$(".Social-Border-linkedin").mouseout(function(){
  $(".Social-Border-linkedin").css("background-color","#303451");
  $(".Media-linkedin").css("color","#efb960");
});

// Email
$(".Social-Border-Email").mouseover(function(){
  $(".Social-Border-Email").css("background-color","#efb960");
  $(".Media-Email").css("color","#22273b");
});
$(".Social-Border-Email").mouseout(function(){
  $(".Social-Border-Email").css("background-color","#303451");
  $(".Media-Email").css("color","#efb960");
});

// Phone
$(".Social-Border-Phone").mouseover(function(){
  $(".Social-Border-Phone").css("background-color","#efb960");
  $(".Media-Phone").css("color","#22273b");
});
$(".Social-Border-Phone").mouseout(function(){
  $(".Social-Border-Phone").css("background-color","#303451");
  $(".Media-Phone").css("color","#efb960");
});



// About Me Box
$("#TECHNICAL-SKILLS").click(function(){
  $(".ABOUT-ME").addClass("Hide");
  $("#CERTIFICATE").addClass("CERTIFICATES-SKILLS");
  $("#SoftSkill").addClass("SOFT-SKILLS");
  $(".TECHNICAL-SKILLS").removeClass("TECHNICAL-SKILLS");
  $("#TECHNICAL-SKILLS").attr("href","#About");
});

$("#ABOUT").click(function(){
  $("#TECHNICAL").addClass("TECHNICAL-SKILLS");
  $("#CERTIFICATE").addClass("CERTIFICATES-SKILLS");
    $("#SoftSkill").addClass("SOFT-SKILLS");
  $(".ABOUT-ME").removeClass("Hide");
  $("#ABOUT").attr("href","#About");
});

$("#CERTIFICATES").click(function(){
  $(".ABOUT-ME").addClass("Hide");
  $("#TECHNICAL").addClass("TECHNICAL-SKILLS");
  $("#SoftSkill").addClass("SOFT-SKILLS");
  $(".CERTIFICATES-SKILLS").removeClass("CERTIFICATES-SKILLS");
  $("#CERTIFICATES").attr("href","#About");
});

$("#SOFT").click(function(){
  $(".ABOUT-ME").addClass("Hide");
  $("#TECHNICAL").addClass("TECHNICAL-SKILLS");
  $("#CERTIFICATE").addClass("CERTIFICATES-SKILLS");
  $(".SOFT-SKILLS").removeClass("SOFT-SKILLS");
  $("#SOFT").attr("href","#About");
});
