/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:45
 * To change this template use File | Settings | File Templates.
 */

define(["jquery", "js/mustache", "text!blocks/question-body.html", "js/eventTarget"], function($, Mustache, template, dispatcher){
    var QuestionBody = function(model) {
        this.model = model;
        this.body = null;

        dispatcher.addEventListener("item_changed", this.handleItemChanged.bind(this));
    };

    QuestionBody.prototype.render = function() {
        var body =  $(Mustache.render(template, this.model));
        this.body = body;
        return body;
    };
    QuestionBody.prototype.handleItemChanged = function(event) {
        var index = parseInt(this.body.data("number"));
        if (index == event.previous_item) {
            var area = this.body.find(".question-body__answer");
            var text = area.val();
            if (text) {
                area.removeClass("question-body__answer_error");
                dispatcher.fire("validation_success", {
                    item: index,
                    data: text
                });
            } else {
                area.addClass("question-body__answer_error");
                dispatcher.fire("validation_fault", {
                    item: index
                })
            }
        }
    };


    //Для генерации тестового контента (все вопросы нумеруются)
    var samples = 0;
    QuestionBody.generateSampleModel = function() {
        samples++;
        return {
            number: samples,
            caption: "Вопрос " + samples,
            text: "Содержимое тестового вопроса " + samples +". Тебе нравится?"
        }
    };

    QuestionBody.template = template;

    return QuestionBody;
})