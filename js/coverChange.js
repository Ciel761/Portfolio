const normalWrapper = '88vh';
const shorterWrapper = '4vh';

const normalMargin = '35vh';
const smallerMargin = '0';

const normalPadding = '15px';
const smallerPadding = '10px';

const normalText = '72pt';
const smallerText = '14pt';

const normalTextHeight = '82pt';
const smallerTextHeight = '20pt';

$(document).ready(function () {
    $(".nav").hover(
        function () {
            /* cover */
            $("#personalCover").stop().animate({
                height: normalWrapper
            });
            $("#personalCoverIntro").stop().animate({
                paddingTop: normalPadding,
                marginTop: normalMargin
            });
            $("#personalCoverTitle > p").stop().animate({
                fontSize: normalText,
                height: normalTextHeight
            });
            $("#coverSuplemental").fadeIn();
            $("#personalCoverNotes").fadeIn();

            /* tangible dial */
            $("#tangibleDial").stop().animate({
                height: shorterWrapper
            });
            $("#tangibelDialInto").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#tangibleDialTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#tangibleDialNotes").fadeOut();

            /* future work */
            $("#workBetterFromHome2021").stop().animate({
                height: shorterWrapper
            });
            $("#workBetterFromHome2021Intro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#workBetterFromHome2021Title").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#workBetterFromHome2021Notes").fadeOut();

            /* still surviving */
            $("#imStillSurviving").stop().animate({
                height: shorterWrapper
            });
            $("#imStillSurvivingIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#imStillSurvivingTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#imStillSurvivingNotes").fadeOut();
        });
    $("#personalCover").hover(
        function () {
        /* cover */
            $("#personalCover").stop().animate({
                height: normalWrapper
            });
            $("#personalCoverIntro").stop().animate({
                paddingTop: normalPadding,
                marginTop: normalMargin
            });
            $("#personalCoverTitle").stop().animate({
                fontSize: normalText,
                height: normalTextHeight
            });
            $("#coverSuplemental").fadeIn(50);
            $("#personalCoverNotes").fadeIn();

            /* tangible dial */
            $("#tangibleDial").stop().animate({
                height: shorterWrapper
            });
            $("#tangibelDialInto").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#tangibleDialTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#tangibleDialNotes").fadeOut();

        /* future work */
            $("#workBetterFromHome2021").stop().animate({
                height: shorterWrapper
            });
            $("#workBetterFromHome2021Intro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#workBetterFromHome2021Title").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#workBetterFromHome2021Notes").fadeOut();

        /* still surviving */
            $("#imStillSurviving").stop().animate({
                height: shorterWrapper
            });
            $("#imStillSurvivingIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#imStillSurvivingTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#imStillSurvivingNotes").fadeOut();
        });
/* Tangible Dial */
    $("#tangibleDial").hover(
        function () {
            /* cover */
            $("#personalCover").stop().animate({
                height: shorterWrapper
            });
            $("#personalCoverIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#personalCoverTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#personalCoverNotes").fadeOut();
            $("#coverSuplemental").fadeOut();

            /* tangible dial */
            $("#tangibleDial").stop().animate({
                height: normalWrapper
            });
            $("#tangibelDialInto").stop().animate({
                paddingTop: normalPadding,
                marginTop: normalMargin
            });
            $("#tangibleDialTitle").stop().animate({
                fontSize: normalText,
                height: normalTextHeight
            });
            $("#tangibleDialNotes").fadeIn();

            /* future work */
            $("#workBetterFromHome2021").stop().animate({
                height: shorterWrapper
            });
            $("#workBetterFromHome2021Intro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#workBetterFromHome2021Title").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#workBetterFromHome2021Notes").fadeOut();

            /* still surviving */
            $("#imStillSurviving").stop().animate({
                height: shorterWrapper
            });
            $("#imStillSurvivingIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#imStillSurvivingTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#imStillSurvivingNotes").fadeOut();
        });
    /* future work */
    $("#workBetterFromHome2021").hover(
        function () {
            /* cover */
            $("#personalCover").stop().animate({
                height: shorterWrapper
            });
            $("#personalCoverIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#personalCoverTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#personalCoverNotes").fadeOut();
            $("#coverSuplemental").fadeOut();

            /* tangible dial */
            $("#tangibleDial").stop().animate({
                height: shorterWrapper
            });
            $("#tangibelDialInto").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#tangibleDialTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#tangibleDialNotes").fadeOut();

            /* future work */
            $("#workBetterFromHome2021").stop().animate({
                height: normalWrapper
            });
            $("#workBetterFromHome2021Intro").stop().animate({
                paddingTop: normalPadding,
                marginTop: normalMargin
            });
            $("#workBetterFromHome2021Title").stop().animate({
                fontSize: normalText,
                height: normalTextHeight
            });
            $("#workBetterFromHome2021Notes").fadeIn();

            /* still surviving */
            $("#imStillSurviving").stop().animate({
                height: shorterWrapper
            });
            $("#imStillSurvivingIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#imStillSurvivingTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#imStillSurvivingNotes").fadeOut();
        });
    /* still surviving */
    $("#imStillSurviving").hover(
        function () {
            /* cover */
            $("#personalCover").stop().animate({
                height: shorterWrapper
            });
            $("#personalCoverIntro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#personalCoverTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#personalCoverNotes").fadeOut();
            $("#coverSuplemental").fadeOut();

            /* tangible dial */
            $("#tangibleDial").stop().animate({
                height: shorterWrapper
            });
            $("#tangibelDialInto").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#tangibleDialTitle").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#tangibleDialNotes").fadeOut();

            /* future work */
            $("#workBetterFromHome2021").stop().animate({
                height: shorterWrapper
            });
            $("#workBetterFromHome2021Intro").stop().animate({
                paddingTop: smallerPadding,
                marginTop: smallerMargin
            });
            $("#workBetterFromHome2021Title").stop().animate({
                fontSize: smallerText,
                height: smallerTextHeight
            });
            $("#workBetterFromHome2021Notes").fadeOut();

            /* still surviving */
            $("#imStillSurviving").stop().animate({
                height: normalWrapper
            });
            $("#imStillSurvivingIntro").stop().animate({
                paddingTop: normalPadding,
                marginTop: normalMargin
            });
            $("#imStillSurvivingTitle").stop().animate({
                fontSize: normalText,
                height: normalTextHeight
            });
            $("#imStillSurvivingNotes").fadeIn();
        });
});