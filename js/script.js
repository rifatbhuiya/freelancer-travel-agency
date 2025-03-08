(function () {
    "use strict";

    // Close alert functionality
    document.querySelectorAll(".close-alert").forEach((button) => {
        button.addEventListener("click", function () {
            const alertBox = document.querySelector(".header-alert");
            if (alertBox) {
                alertBox.style.display = "none";
            }
        });
    });

    function heroSearchBar() {
        const searchInput = document.querySelector(".search-input");
        const searchMenu = document.querySelector(".searchbar-menu");

        if (!searchInput || !searchMenu) return;

        searchInput.addEventListener("input", function () {
            let inputVal = searchInput.value.trim();

            if (inputVal.length > 0) {
                searchMenu.style.display = "block";
            } else {
                searchMenu.style.display = "none";
            }
        });

        document.addEventListener("click", function (e) {
            if (!e.target.closest(".searchbar") && !e.target.closest(".searchbar-menu")) {
                searchMenu.style.display = "none";
            }
        });
    }

    heroSearchBar();
})();
