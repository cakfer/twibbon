/* modals.js */

        (function($) {
            "use strict";
                $(document).ready(function() {
                        $('.button-3').on('click', function() {
                        $('body').addClass("modal-open");
                    });
                    $('.close-modal').on('click', function() {
                        $('body').removeClass("modal-open");
                    });
                });
        }(jQuery));
