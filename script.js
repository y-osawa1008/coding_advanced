$(function(){
        // scroll    .fade-in要素を監視
        $(window).on('scroll', function () {
		　　$('.fade-in').each(function () {
			    var elemPos = $(this).offset().top; // 要素の位置
			    var scroll = $(window).scrollTop(); // 現在のスクロール位置
			    var windowHeight = $(window).height(); // ウィンドウの高さ
                			// 要素が画面内に入ったらshowクラスを追加
　　　　　　　　　if (scroll > elemPos - windowHeight + 100) {
				$(this).addClass('show');
　　　　　　　　　}
　　　　　　　});
　　　　});
        // ハンバーガークリックでメニュー開閉
        $('.hamburger').on('click', function() {
		    $(this).toggleClass('active');      // ハンバーガーアイコンのアニメーション
		    $('#global-nav').toggleClass('open'); // メニュー表示/非表示
        });

        /* swiper */
        var swiper = new Swiper(".mySwiper", {
        slidesPerView:1,
        loop: true, // ループさせる
            autoplay: {
                delay: 3000, // 3秒ごとに自動再生
                disableOnInteraction: false, // ユーザー操作後も自動再生を継続
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            breakpoints: {
            601: { // 601px以上の場合に適用
                slidesPerView: 2, // PCやタブレットで2スライド表示
            }
        }
        });

        /* info */
        $(".info dt").on("click",function(){
            $(this).nextUntil("dt").slideToggle();
        });
    });