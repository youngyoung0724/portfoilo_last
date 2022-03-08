$(document).ready(function(){
  // 마우스 이벤트
    $("body").mousemove(function(e){
        // console.log(e);

        const c_x = e.clientX;
        const c_y = e.clientY;

        // console.log(c_x);
        // console.log(c_y);

        $(".trace_circle").css({ left: c_x + "px", top: c_y + "px" })
    
    });
    // nav hover
    $("nav ul li").hover(function(){
        $(".trace_circle").addClass("active");
    },function(){
        $(".trace_circle").removeClass("active");
    });
    // stop();

    $(".logo").hover(function(){
        $(".trace_circle").addClass("active");
    },
    function(){
        $(".trace_circle").removeClass("active");
    });

    // intro hover
    $(".intros h2").hover(function(){
        $(".trace_circle").addClass("active");
        // console.log("마우스");
    },
    function(){
        $(".trace_circle").removeClass("active");
    });

    // intro - emoji hover
    $(".intro .emoji .img").mouseover(function(){
        $(this).closest(".emoji").addClass("active");
        $(".trace_circle").addClass("active").css("opacity", "0.8");
        // console.log("마우스");
    });

    $(".intro .emoji .img").mouseout(function(){
        $(this).closest(".emoji").removeClass("active");
        $(".trace_circle").removeClass("active");
    });

    // aboutme - title 
    $(".aboutme .title span").hover(function(){
        $(".trace_circle").addClass("active");
        console.log("마우스");
    },function(){
        $(".trace_circle").removeClass("active");
    });

    // aboutme - title 
    $(".aboutme .timeline .subtitle span").hover(function(){
        $(".trace_circle").addClass("active");
    },
    function(){
        $(".trace_circle").removeClass("active");
    });

    //skills - title
    $(".skill .title span").hover(function(){
        $(".trace_circle").addClass("active");
    },
    function(){
        $(".trace_circle").removeClass("active");
    });

    // portfolio - title
    $(".portfolio .title span").hover(function(){
        $(".trace_circle").addClass("active");
    },
    function(){
        $(".trace_circle").removeClass("active");
    });

    //footer - contact
    $("footer .title").hover(function(){
        $(".trace_circle").addClass("active");
    },function(){
        $(".trace_circle").removeClass("active");
    });
    

    //Skills 원형

    let startCount = 0;

    $(".skill .box").each(function(index){
        // console.log(index);
        // console.log(this);
        const sel_count = $(this).find(".count").attr("data-limit");
        console.log(sel_count);
  
        $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(440 - 440 * ${sel_count} / 100)`);
  
  
        const counter = setInterval(function(){
          if(startCount < sel_count){
            startCount++;
            // console.log(startCount);
            $(".box").eq(index).find(".count").text(startCount);
          }else if(startCount == sel_count){  //startCount++ 도달되었으나 값이 적용이 되지 않은 경우, 최종적으로 현재 저장된 data-limit 값을 넣겠다는 의미
              $(".box").eq(index).find(".count").text(sel_count);
          }else{
            clearInterval(counter);
          }
        }, 50);
    });
  

    // portfolio - tabbox
    $(".portfolio .tabbtn li").click(function(){
        const $index = $(this).index();
        console.log("클릭" + $index);

        $(".portfolio .tabbtn li").removeClass("active");
        $(this).addClass("active");

        $(".portfolio .contents .tabbbox").removeClass("active");
        $(".portfolio .contents .tabbbox").eq($index).addClass("active");

        return false;
    });

    const typed = new Typed(".typed", {
        strings: [
        "Thank you for watching my portfolio :)",
        "포트폴리오 봐주셔서 감사합니다 :)",
        ], //브라우저에 띄워줄 문구
        stringsElement: null, //초기상태에서 공간을 비운다.
        typeSpeed: 50, //타이핑 속도
        backSpeed: 50, //backspace 속도
        smartBackspace: true, //동일한 값 또는 문구가 존재할 때, backspace로 제거하지 못하도록 구성 후, 다음 문장을 표현
        startDelay: 1000, //1초 후 타이핑을 통해서 글자가 작성되도록 시간을 지연시킴
        backDelay: 1000, //첫번째 문장을 모두 작성한 후, 1초 후에 backspace가 진행되도록 만듬
        loop: true, //타이핑 문장의 반복여부(true 또는 false)
        showCursor: true,
        cursorChar: "", //커서의 형대를 지정
    });


    // portfolio - web 구성
    var $web = [
        {img : "web_img1.png",
        title : "Kuliner website", 
        explain : "HTML, CSS, JQUERY를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/kuliner_web/"
        }, 

        {img : "web_img2.png",
        title : "Cakehouse website", 
        explain : "HTML, CSS, JQUERY를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/cakehouse/"
        }, 

        {img : "web_img3.png",
        title : "세종병원", 
        explain : "HTML, CSS를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/sejonghosptial/"
        }, 

        {img : "web_img4.png",
        title : "Cashmere", 
        explain : "HTML, CSS를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/Cashmere/"
        }, 

        {img : "web_img5.png",
        title : "Bang & Olufsen", 
        explain : "HTML, CSS를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/Bang-Olufsen/"
        }, 

        {img : "web_img6.png",
        title : "InvestPlan", 
        explain : "HTML, CSS, JQUERY를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "메인페이지와 5개의 서브페이지로 이루어져 있습니다.",
        link : "https://youngyoung0724.github.io/InvestPlan/"
        }, 

        {img : "web_img7.png",
        title : "INSPACE", 
        explain : "HTML, CSS, JQUERY를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/INSPACE/"
        }, 

        {img : "web_img8.png",
        title : "PUMA", 
        explain : "HTML, CSS, JQUERY, JAVASCRIPT를 이용했습니다.",
        version: "반응형으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/PUMA/"
        }, 

        {img : "web_img9.png",
        title : "Movie Poster", 
        explain : "HTML, CSS, JQUERY, JAVASCRIPT, GRID를 이용했습니다.",
        version: "반응형으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/Movieposter/"
        }, 

        {img : "web_img10.png",
        title : "Hanwha", 
        explain : "HTML, CSS, JQUERY, JAVASCRIPT를 이용했습니다.",
        version: "반응형으로 제작되었습니다.",
        version2 : "메인페이지와 5개의 서브페이지로 이루어져 있습니다.",
        link : "https://youngyoung0724.github.io/Hanwha/main.html"
        }, 

        {img : "web_img11.png",
        title : "Wedding", 
        explain : "HTML, CSS, JQUERY, JAVASCRIPT를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/wedding/"
        }, 
    ]

    for(i=0; i<$web.length; i++){
        $(".portfolio .wrap .contents .web").append(`
                <div class="boxs">
                <div class="contentimg">
                    <img src="./img/${$web[i].img}" alt="">
                </div>
                <div class="text">
                    <h1 class="font">${$web[i].title}</h1>
                    <p class="font">${$web[i].explain}</p>
                    <p class="font">${$web[i].version}</p>
                    <p class="font">${$web[i].version2}</p>
                    <a class="font" href="${$web[i].link}"target="_blank">바로가기</a>
                </div>
        `);
    };


    // portfolio - ajax 구성
    var $ajax = [
        {img : "ajax_img1.png",
        title : "영화 장사리 홍보사이트", 
        explain : "HTML, CSS, JQUERY, AJAX를 이용했습니다.",
        version: "",
        version2 : "",
        link : "https://youngyoung0724.github.io/Battle-of-Jangsari/"
        }, 

        {img : "ajax_img2.png",
        title : "Weather", 
        explain : "HTML, CSS, JQUERY, AJAX를 이용했습니다.",
        version: "날씨 API를 받아와서 제작했습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/Weather/"
        }, 

    ]

    for(i=0; i<$ajax.length; i++){
        $(".portfolio .wrap .contents .ajax").append(`
                <div class="boxs">
                <div class="contentimg">
                    <img src="./img/${$ajax[i].img}" alt="">
                </div>
                <div class="text">
                    <h1>${$ajax[i].title}</h1>
                    <p>${$ajax[i].explain}</p>
                    <p>${$ajax[i].version}</p>
                    <p>${$ajax[i].version2}</p>
                    <a href="${$ajax[i].link}"target="_blank">바로가기</a>
                </div>
        `);
    };

    // portfolio - vue 구성
    var $vue = [
        {img : "vue_img1.png",
        title : "Film Makers", 
        explain : "HTML, CSS, VUE를 이용했습니다.",
        version: "PC 버전으로 제작되었습니다.",
        version2 : "",
        link : "https://youngyoung0724.github.io/Vue_site/"
        }, 
    ]

    for(i=0; i<$vue.length; i++){
        $(".portfolio .wrap .contents .vue").append(`
                <div class="boxs">
                <div class="contentimg">
                    <img src="./img/${$vue[i].img}" alt="">
                </div>
                <div class="text">
                    <h1>${$vue[i].title}</h1>
                    <p>${$vue[i].explain}</p>
                    <p>${$vue[i].version}</p>
                    <p>${$vue[i].version2}</p>
                    <a href="${$vue[i].link}"target="_blank">바로가기</a>
                </div>
        `);
    };

    var $php = [
        { img : "php_img1.png",
        title : "Yami Mile", 
        explain : "HTML, CSS, JQUERY, JAVASCRIPT를 이용했습니다.",
        version: "PC 버전으로 제작되었고 가상의 사이트를 만들었습니다.",
        version2 : "",
        link : "http://kingeunyoung.dothome.co.kr/mile/"
        }, 
    ]

    for(i=0; i<$vue.length; i++){
        $(".portfolio .wrap .contents .php").append(`
                <div class="boxs">
                <div class="contentimg">
                    <img src="./img/${$php[i].img}" alt="">
                </div>
                <div class="text">
                    <h1>${$php[i].title}</h1>
                    <p>${$php[i].explain}</p>
                    <p>${$php[i].version}</p>
                    <p>${$php[i].version2}</p>
                    <a href="${$php[i].link}"target="_blank">바로가기</a>
                </div>
        `);
    };


    // 클릭했을시 해당 메뉴로 이동 
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop : $("header").offset().top}, 1000);
        return false; 
    });

    $(".navabout").click(function(){
        $("html, body").animate({scrollTop : $(".aboutme").offset().top - 60}, 1000);
        return false;
    });
    $(".navskill").click(function(){
        $("html, body").animate({scrollTop : $(".skill").offset().top - 100}, 1000);
        return false;
    });
    $(".navportfolio").click(function(){
        $("html, body").animate({scrollTop : $(".portfolio").offset().top - -100}, 1000);
        return false;
    });
    $(".navcontactme").click(function(){
        $("html, body").animate({scrollTop : $("footer").offset().top - 60}, 1000);
        return false;
    });

    var r_menu = document.querySelector("header .res_menu img");

    var targetMenu = document.querySelector("header nav ul");

    r_menu.addEventListener("click", function(){
        var targetActive = targetMenu.classList.contains("active"); 
        console.log(targetActive);
        if(targetActive == false ){
            targetMenu.classList.add("active");
        }else{
            targetMenu.classList.remove("active");
        }
    });



});


