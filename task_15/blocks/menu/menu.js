/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 2:36
 * To change this template use File | Settings | File Templates.
 */

define([
    "jquery",
    "js/mustache",
    "text!blocks/menu/menu.html",
    "js/eventTarget"
], function($, Mustache, template, dispatcher){
    var Menu = function (model) {
        this.model = model;
        this.items = null;
        this.menu = null;

        dispatcher.addEventListener("item_changed", this.handleItemChanged.bind(this));
    };

    Menu.prototype.render = function() {
        var menu = $(Mustache.render(template, this.model));
        this.items = menu.find(".menu__question-number");
        this.menu = menu;
        this.items.click(function(){
            dispatcher.fire("item_selected", {
                item: parseInt($(this).data("number"))
            })
        });

        return menu;
    };
    Menu.prototype.handleItemChanged = function(event) {
        this.menu.find(".menu__question-number_state_selected").removeClass("menu__question-number_state_selected");
        $(this.items[event.selected_item - 1]).addClass("menu__question-number_state_selected");
    };

    Menu.generateSampleModel = function() {
        return {
            menu_items: [
                {
                    number: 1,
                    text: "1"
                },
                {
                    number: 2,
                    text: "2"
                },
                {
                    number: 3,
                    text: "3"
                }
            ]
        };
    };
    return Menu;
})

