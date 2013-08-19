/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:58
 * To change this template use File | Settings | File Templates.
 */

define(["js/mustache", "text!blocks/question.html", "blocks/question-body"], function(Mustache, template, QuestionBody) {
    var Question = function(model) {
        this.model = model;
    };

    Question.prototype.render = function() {
        return Mustache.render(template, this.model, {
            question_body: QuestionBody.template
        });
    };

    Question.generateSampleModel = function() {
        return {
            question_body: QuestionBody.generateSampleModel()
        };
    };

    return Question;
});