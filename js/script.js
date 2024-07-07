
const infoTop=$("#sliderDown").offset().top;
console.log(infoTop)
$(window).scroll(function(){
    let windowTop = $(window).scrollTop();
    if(windowTop > infoTop){
        
       $("#backToTop").fadeIn(500);

    }
    else{
        $("#backToTop").fadeOut(500); 
       }
})
$("#backToTop").on("click",function(){
    $(window).scrollTop(0);
})

//* navBar

$("#sideBar .openIcon").on("click",function(){
    console.log($("#sideBar").css("left"));

    if($("#sideBar").css("left")=="0px"){
        $("#sideBar").animate({left :`-${$(".navBar").innerWidth()}px`},1000)
    }else{
        $("#sideBar").animate({left :`0px`},500)
    }
    
})

$(".closebtn").on("click",function(){
    console.log("hiiii");
    $("#sideBar").animate({left :`-${$(".navBar").innerWidth()}px`},1000)
})

$(".navBar a").on("click",function(e){
    let clickedItem=($(e.target).attr("href"));
    let sectionTop=$(clickedItem).offset().top
    $("html,body").animate({scrollTop:sectionTop},500)
})



// * Card

$("#sliderDown .title").on("click",function(){
  console.log("hello");
  $('.inner').not($(this).next()).slideUp(500)
  $(this).next().slideToggle(500)
})

// *Counting Down
window.onload=function(){
    countDownTo("10 october 2025 9:56:00");
}

function countDownTo(countTo){
    let futureDate= new Date(countTo);
    futureDate=(futureDate.getTime()/1000);
    let now=new Date();
    now= (now.getTime()/1000);
    let timeDiff = (futureDate - now);

    let days = Math.floor( timeDiff / (24*60*60));
    let hours = Math.floor((timeDiff - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))



    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.sec').html(`${ secs} s`)


    setInterval(function() {  countDownTo(countTo); }, 1000);
}




// * text area 


let maxLength= 100;
$("textarea").keyup(function(){

    let length= $(this).val().length;
    let amountLeft=maxLength-length;
    console.log(length);

    if(amountLeft<=0){
        $("#chars").text("your available character finished")

    }else{
        $("#chars").text(amountLeft)
    }
})