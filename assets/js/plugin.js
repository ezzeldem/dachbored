$(document).ready(function() {

    // add class to bady by defoult 
    $('body').addClass(localStorage.getItem('pageColor'));

    //  windo load
    $( window ).load(function() {
        $('.loding-page').fadeOut();
      });

    // start dark-them
    $('.dark-mode-p-i').click(function() {
        $('body').toggleClass('darck-them');
        const bodyClass =  $('body').attr("class");
        localStorage.setItem('pageColor',bodyClass );
    });
    // end dark-them





    // start slide
    $(".aside-content").niceScroll({
        cursorwidth: "0px",
        background: "rgba(20,20,20,0)",
        cursorborder: "1px solid rgba(20,20,20,0)",
    });

    // end slide

    // start opne menu
    $('.open-mune, .over-flow, .exit i').click(function() {
        $('.aside-content').toggleClass('left-0');
        $('.over-flow').toggle()
    });
    // end open menu

    // start li children submwnu
    $('.content-dashboard .content-c .search-bar .search-bar-ul ul li').click(function(e) {
        e.stopPropagation();
        $(this).children().toggleClass('opne-li-op-top');
        $(this).siblings().children().removeClass('opne-li-op-top');
    });
    $('.content-dashboard .content-c .search-bar .search-bar-ul .user-box .img').click(function(e) {
        e.stopPropagation();
        $('.profile-box').toggleClass('opne-li-op-top1');
    });
    $(document).click(function() {
        $('.box-li-nav').removeClass('opne-li-op-top');
        $('.profile-box').removeClass('opne-li-op-top1');
        $('.chat-page .chat-right .frist-box .protfuile-detalise').removeClass('open-disdription-bar');
        $('.chat-left').removeClass('openchat-left');
    });

    $('.box-li-nav, .profile-box, .profile-masseg-left').click(function(r) {
        r.stopPropagation();
    });

    // end li children submwnu

    // start new message

    function newMessage() {
        message = $(".message-input input").val();
        $('<li class="send">    <p class="messages-prag">' + message + '</p>       <div class="img-masseg" style="background-image:url(assets/img/send.png)"></div></li>').appendTo($('.messages-box ul'));
        $('.message-input input').val(null);
        $('.messages-box ul').animate({
            scrollTop: $('.messages-box ul .send').offset().top
        }, 600);
    };

    $('.messages-box ul').scrollTop($(document).height());
    $('.submit').click(function(e) {
        e.preventDefault();
        if ($('.message-input input').val() == '') {} else {
            newMessage();
        }
    });

    // end new message

    // open discription-from
    $('.chat-page .chat-right .frist-box .header-chat-img').click(function(openDisdription) {
        openDisdription.stopPropagation();
        $('.chat-page .chat-right .frist-box .protfuile-detalise').addClass('open-disdription-bar');
    });

    $('.chat-page .chat-right .frist-box .protfuile-detalise').click(function(openDisdriptionBox) {
        openDisdriptionBox.stopPropagation()
    });

    $('.chat-page .chat-right .frist-box .protfuile-detalise .open-discription-edit-box .open-discription-edit').click(function() {
        $('.chat-page .chat-right .frist-box .form-edit').addClass('open-disdription-form');
    });

    $('.chat-page .chat-right .frist-box .form-edit').click(function(formEditBox) {
        formEditBox.stopPropagation()
    });

    $('.chat-page .chat-right .frist-box .form-edit .editDiscriptionForm').find("textarea").each(function(ev) {
        if (!$(this).val()) {
            $(this).attr("placeholder", $('.chat-page .chat-right .frist-box .protfuile-detalise .open-discription-edit-box .p-discription').text());
        }
    });

    $(' .chat-page .chat-right .frist-box .form-edit .editDiscriptionForm .endTheEdit').click(function(openDisdriptionButtom) {

        openDisdriptionButtom.preventDefault();

        if ($('.chat-page .chat-right .frist-box .form-edit .editDiscriptionForm #editetext').val() !== "") {
            masege = $('.chat-page .chat-right .frist-box .form-edit .editDiscriptionForm #editetext').val();
            $('.chat-page .chat-right .frist-box .protfuile-detalise .open-discription-edit-box .p-discription').text(masege);
            $('.chat-page .chat-right .frist-box .form-edit').removeClass('open-disdription-form');
        }
    });

    $('.chat-page .chat-right .frist-box .form-edit .exit-h').click(function() {
        $('.chat-page .chat-right .frist-box .form-edit').removeClass('open-disdription-form');
    });

    // open discription-from

    // send masseg

    function sendMasseg() {
        massegFormSend = $('.chat-page .chat-right .third-box .whriteMasseg #massegTextId').val();
        $('<li class="send"><p class="messages-prag">' + massegFormSend + '</p><div class="img-chat"><div class="img-box" style="background-image: url(assets/img/chat-1.svg)"></div></div></li>').appendTo($('.chat-page .chat-right .scound-box .chat-massege-write')).fadeIn();
        $('.chat-page .chat-right .scound-box .chat-massege-write').scrollTop($(document).height());
        $('.chat-page .chat-right .third-box .whriteMasseg #massegTextId').val(null);
    };

    $(".chat-page .chat-right .third-box .whriteMasseg #massegTextId").focus(function() {
        $('<li class="send writeMasseg-li"><p class="messages-prag"><span></span><span></span><span></span></p><div class="img-chat"> <div class="img-box" style="background-image: url(assets/img/chat-1.svg);"></div></div></li>').appendTo($('.chat-page .chat-right .scound-box .chat-massege-write'))
        $('.chat-page .chat-right .scound-box .chat-massege-write').scrollTop($(document).height());
    });

    $(".chat-page .chat-right .third-box .whriteMasseg #massegTextId").focusout(function() {
        $('.chat-page .chat-right .scound-box .chat-massege-write').find('li.writeMasseg-li').fadeOut();
    });

    $('.chat-page .chat-right .third-box .whriteMasseg #whriteMasseg').click(function(sendButtomMasseg) {
        sendButtomMasseg.preventDefault();

        if ($('.chat-page .chat-right .third-box .whriteMasseg #massegTextId').val() !== '') {
            $('.chat-page .chat-right .scound-box .chat-massege-write').find('li.writeMasseg-li').remove();
            sendMasseg();
        }

    });

    $('.chat-page .chat-right .scound-box .chat-massege-write').scrollTop($(document).height());

    // send masseg

    $('.chat-page .chat-right .menu-icon').click(function(chatLeft) {
        chatLeft.stopPropagation();
        $('.chat-left').addClass('openchat-left');
    });

    $('.chat-page .chat-left .frist-box .exit-contact i').click(function() {
        $('.chat-left').removeClass('openchat-left');
    })

    $('.chat-left').click(function(chatLeft2) {
        chatLeft2.stopPropagation();
    });

});