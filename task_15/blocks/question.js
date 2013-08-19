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
        var qbody = (new QuestionBody(this.model.question_body)).render();
        var body = $(Mustache.render(template, this.model));

        body.prepend(qbody);

        return body;
    };

    Question.generateSampleModel = function() {
        return {
            question_body: QuestionBody.generateSampleModel(),
            button_type: "next",
            button_caption: "Далее"
        };
    };

    return Question;
});