/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:30
 * To change this template use File | Settings | File Templates.
 */


define(["js/mustache", "text!blocks/header.html"], function(Mustache, template){
    var Header = function (model) {
        this.model = model;
    }

    Header.prototype.render = function() {
        return Mustache.render(template, this.model);
    }

    Header.generateSampleModel = function() {
        return {
            caption: "Анкета для ШРИ 2013",
            comment: "Сделано как офигенная страничка. Надеюсь, Вам понравится"
        }
    }

    return Header;
});