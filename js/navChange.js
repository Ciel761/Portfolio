

$(document).scroll(
    function () {
    let animateDuration = 120;

    let limitHeight1 = $(".projectContentWrapper").position().top;
    let scrollHeight1 = limitHeight1 / 5;
    
/* universal project intro
     if (window.scrollY < 55) {
        $(".projectIntroWrapper").stop().animate({
            height: '100vh'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '50vh 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".projectNotes").fadeIn();
        $(".projectTitle > p").stop().animate({
            fontSize: '72pt', height : '82pt'
        }, animateDuration);
        $("#résumé > div.backgroundImage").css("filter", "brightness(95%)");
    } else
    */
if (window.scrollY < scrollHeight1) {
        $(".projectIntroWrapper").stop().animate({
            height: '50vh'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '20vh 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".projectNotes").fadeIn();
        $(".projectTitle > p").stop().animate({
            fontSize: '72pt', height : '82pt'
        }, animateDuration);
        $("#résumé > div.backgroundImage").css("filter", "brightness(80%)");
    } else {
        $(".projectIntroWrapper").stop().animate({
            height: '50px'
        }, animateDuration);
        $(".projectTitle > p").stop().animate({
            fontSize: '16pt', height: '22pt'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '0px 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '12px'
        }, animateDuration);
        $(".projectNotes").fadeOut();
        $("#résumé > div.backgroundImage").css("filter", "brightness(70%)");
    };



        let a = $("#tenGuidelineTop").position().top;
    let scrollHeight2n1 = a;
    let scrollHeight2n2 = a + 100;

    /* chapter intro 
    if (window.scrollY < scrollHeight2n1) {

        $(".projectChapterIntroWrapper").stop().animate({
            height: '90vh'
        }, animateDuration);
        $(".chapterIntro").stop().animate({
            margin: '30vh 0 0 0'
        }, animateDuration);
        $(".chapterIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".chapterNotes").fadeIn();
        $(".chapterTitle > p").stop().animate({
            fontSize: '72pt', height: '82pt'
        }, animateDuration);
    } else */
    if (window.scrollY < scrollHeight2n2) {
        $("#tenGuideline").stop().animate({
            height: '50vh'
        }, animateDuration);
        $("#tenGuidelineIntro").stop().animate({
            margin: '15vh 0 0 0'
        }, animateDuration);
        $("#tenGuidelineContainer").stop().animate({
            paddingTop: '10px'
        }, animateDuration);
        $("#tenGuidelineNotes").fadeIn();
        $("#tenGuidelineTitle > p").stop().animate({
            fontSize: '36pt', height: '48pt'
        }, animateDuration);
    } else {
        $("#tenGuideline").stop().animate({
            height: '40px'
        }, animateDuration);
        $("#tenGuidelineIntro").stop().animate({
            margin: '8px 0 0 0'
        }, animateDuration);
        $("#tenGuidelineContainer").stop().animate({
            paddingTop: '2px'
        }, animateDuration);
        $("#tenGuidelineNotes").fadeOut();
        $("#tenGuidelineTitle > p").stop().animate({
            fontSize: '14pt', height: '20pt', fontWeight: '400'
        }, animateDuration);
        };

        let b = $("#emailApplicationTop").position().top;
        
        let scrollHeight3n1 = b ;
        let scrollHeight3n2 = b + 100;

        /* chapter intro 
        if (window.scrollY < scrollHeight2n1) {
    
            $(".projectChapterIntroWrapper").stop().animate({
                height: '90vh'
            }, animateDuration);
            $(".chapterIntro").stop().animate({
                margin: '30vh 0 0 0'
            }, animateDuration);
            $(".chapterIntroContainer").stop().animate({
                paddingTop: '15px'
            }, animateDuration);
            $(".chapterNotes").fadeIn();
            $(".chapterTitle > p").stop().animate({
                fontSize: '72pt', height: '82pt'
            }, animateDuration);
        } else */
        if (window.scrollY < scrollHeight3n2) {
            $("#emailApplication").stop().animate({
                height: '50vh'
            }, animateDuration);
            $("#emailApplicationIntro").stop().animate({
                margin: '15vh 0 0 0'
            }, animateDuration);
            $("#emailApplicationContainer").stop().animate({
                paddingTop: '10px'
            }, animateDuration);
            $("#emailApplicationNotes").fadeIn();
            $("#emailApplicationTitle > p").stop().animate({
                fontSize: '36pt', height: '48pt'
            }, animateDuration);
        } else {
            $("#emailApplication").stop().animate({
                height: '40px'
            }, animateDuration);
            $("#emailApplicationIntro").stop().animate({
                margin: '8px 0 0 0'
            }, animateDuration);
            $("#emailApplicationContainer").stop().animate({
                paddingTop: '2px'
            }, animateDuration);
            $("#emailApplicationNotes").fadeOut();
            $("#emailApplicationTitle > p").stop().animate({
                fontSize: '14pt', height: '20pt', fontWeight: '400'
            }, animateDuration);
        };
});

/*
function projectNavChange() {
    let limitHeight = $(".projectContentWrapper").position().top;
    let scrollHeight = limitHeight / 2;
    let animateDuration = 200;
    if (window.scrollY < 10) {
        
        $(".projectIntroWrapper").stop().animate({
            height: '100vh'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '50vh 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".projectNotes").fadeIn();
        $(".projectTitle > p").stop().animate({
            fontSize: '72pt', height: '82pt'
        }, animateDuration);
        
        $("#résumé > div.backgroundImage").css("filter", "brightness(95%)");
    } else if (window.scrollY < scrollHeight) {
        $(".projectIntroWrapper").stop().animate({
            height: '40vh'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '10vh 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".projectNotes").fadeIn();
        $(".projectTitle > p").stop().animate({
            fontSize: '48pt', height: '56pt'
        }, animateDuration);
        $("#résumé > div.backgroundImage").css("filter", "brightness(80%)");
    } else {
        $(".projectIntroWrapper").stop().animate({
            height: '50px'
        }, animateDuration);
        $(".projectTitle > p").stop().animate({
            fontSize: '16pt', height: '22pt'
        }, animateDuration);
        $(".projectIntro").stop().animate({
            margin: '0px 0 0 0'
        }, animateDuration);
        $(".projectIntroContainer").stop().animate({
            paddingTop: '12px'
        }, animateDuration);
        $(".projectNotes").fadeOut();
        $("#résumé > div.backgroundImage").css("filter", "brightness(70%)");
    };
}

function chapterIntroChange() {
    let limitHeight = $(".projectContentWrapper").position().top;
    let scrollHeight = limitHeight / 2;
    let animateDuration = 200;
    if (window.scrollY < 10) {
        
        $(".projectChapterIntroWrapper").stop().animate({
            height: '80vh'
        }, animateDuration);
        $(".chapterIntro").stop().animate({
            margin: '35vh 0 0 0'
        }, animateDuration);
        $(".chapterIntroContainer").stop().animate({
            paddingTop: '15px'
        }, animateDuration);
        $(".chapterNotes").fadeIn();
        $(".chapterTitle > p").stop().animate({
            fontSize: '72pt', height: '82pt'
        }, animateDuration);
    } else {
        
        $(".projectChapterIntroWrapper").stop().animate({
            height: '50px'
        }, animateDuration);
        $(".chapterIntro").stop().animate({
            margin: '0 0 0 0'
        }, animateDuration);
        $(".chapterIntroContainer").stop().animate({
            paddingTop: '12px'
        }, animateDuration);
        $(".chapterNotes").fadeOut();
        $(".chapterTitle > p").stop().animate({
            fontSize: '12pt', height: '18pt'
        }, animateDuration);
    };
}
*/


