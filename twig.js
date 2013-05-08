steal('jquery', 'jquery/view').then(function (jQuery) {
    "use strict";
    jQuery.View.register({
        j:jQuery,
        suffix:"html.twig",
        renderer:function (id, text) {
            return function (data) {

            };
        },
        script:function (id, str) {

        }
    });
    jQuery.View.ext = ".html.twig"
});