/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 2:36
 * To change this template use File | Settings | File Templates.
 */

define(["jquery","js/mustache", "text!blocks/menu/menu.html", "js/eventTarget"], function($, Mustache, template, dispatcher){
    var Menu = function (model) {
        this.model = model;
    };

    Menu.prototype.render = function() {
        var menu = $(Mustache.render(template, this.model));
        menu.find(".menu__question-number").click(function(){
            dispatcher.fire("item_change", {
                item: parseInt($(this).data("number")) + 1
            })
        });

        return menu;
    };

    Menu.generateSampleModel = function() {
        return {
            menu_items: [
                {
                    number: 0,
                    text: "1"
                },
                {
                    number: 1,
                    text: "2"
                },
                {
                    number: 2,
                    text: "3"
                },
                {
                    number: 3,
                    text: "4"
                },
                {
                    number: 4,
                    text: "5"
                }
            ]
        };
    };
    return Menu;
})

