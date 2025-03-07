(function () {
    "use-strict";

    $('.close-alert').on('click', function () {
        $('.header-alert').hide(500);
    });

    function heroSearchBar() {
        $(".search-input").on("input", function () {
            let inputVal = $(this).val().trim();

            if (inputVal.length > 0) {
                $(".searchbar-menu").show(500);
            } else {
                $(".searchbar-menu").hide(500);
            }
        });

        $(document).on("click", function (e) {
            if (!$(e.target).closest(".searchbar, .searchbar-menu").length) {
                $(".searchbar-menu").hide(500);
            }
        });
    }
    heroSearchBar();
})(jQuery());