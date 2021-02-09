export default class NewsTabs {

    constructor() {
        this.init();
    }

    init() {
        $(document).ready(function(){

            $(".news-list-header__link").click(function(){
                var value = $(this).attr('data-filter');

                $(".news-list-header__link:first-child").removeClass('active');
                $(this).removeClass('active');
                $(this).toggleClass('active');

                if(value == "all")
                {
                    $('.news-card').show('1000');
                }
                else
                {
                    $(".news-card").not('.'+value).hide('3000');
                    $('.news-card').filter('.'+value).show('3000');

                }
            });

        });
    }
}