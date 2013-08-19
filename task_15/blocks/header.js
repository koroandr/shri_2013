/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:30
 * To change this template use File | Settings | File Templates.
 */


define(["jquery", "js/mustache", "text!blocks/header.html"], function($, Mustache, template){
    var Header = function (model) {
        this.model = model;
    }

    Header.prototype.render = function() {
        return  $(Mustache.render(template, this.model));
    }

    Header.generateSampleModel = function() {
        return {
            caption: "Анкета для ШРИ 2013",
            comment: "Сделано в качестве тестового задания для Школы Разработки Интерфейсов Яндекс.  <br/>" +
                "Отсутствует поддержка IE " +
                "(так как нет доступа к компьютеру с ОС Windows). " +
                "На разрабоотку данной страницы было потрачено 2 дня (примерно 12 часов рабочего времени).<br/>" +
                "<small><b>koroandr</b></small>"
        }
    }

    return Header;
});