/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:45
 * To change this template use File | Settings | File Templates.
 */

define(["jquery", "js/mustache", "text!blocks/question-body.html", ], function($, Mustache, template){
    var QuestionBody = function(model) {
        this.model = model;
    };

    QuestionBody.prototype.render = function() {
        return $(Mustache.render(template, this.model));
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