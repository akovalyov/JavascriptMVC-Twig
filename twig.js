steal('jquery', 'jquery/view', 'jquery/view/twig/twig').then(function (jQuery) {
    "use strict";
    jQuery.View.register({
        j:jQuery,
        suffix:"twig",
        renderer:function (id, text) {
           return function(data){
               return twig({data:text}).render(data)
           }
        },
        script:function (id, str) {

        }
    });
    jQuery.View.ext = ".html.twig"
});