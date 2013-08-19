/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 2:36
 * To change this template use File | Settings | File Templates.
 */

define(["js/mustache", "text!blocks/menu/menu.html"], function(Mustache, template){
    var Menu = function (model) {
        this.model = model;
    };

    Menu.prototype.render = function() {
        return Mustache.render(template, this.model);
    };

    Menu.generateTestItems = function() {
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
                },
                {
                    number: 4,
                    text: "4"
                },
                {
                    number: 5,
                    text: "5"
                }
            ]
        };
    };
    return Menu;
})

