/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:45
 * To change this template use File | Settings | File Templates.
 */

define(["js/mustache", "text!blocks/question-body.html", ], function(Mustache, template){
    var QuestionBody = function(model) {
        this.model = model;
    };

    QuestionBody.prototype.render = function() {
        return Mustache.render(template, this.model);
    };

    QuestionBody.generateSampleModel = function() {
        return {
            caption: "Вопрос 1",
            text: "Содержимое тестового вопроса 1. Тебе нравится?"
        }
    };

    QuestionBody.template = template;

    return QuestionBody;
})