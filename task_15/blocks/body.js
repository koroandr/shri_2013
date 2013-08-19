/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 10:24
 * To change this template use File | Settings | File Templates.
 */

define([
    "jquery",
    "js/mustache",
    "text!blocks/body.html",
    "blocks/question",
    "blocks/menu/menu"
], function($, Mustache, template, Question, Menu) {
    var Body = function(model) {
        this.model = model;
    };

    Body.prototype.render = function() {
        var body = $(Mustache.render(template, this.model));
        body.prepend((new Menu(this.model.menu)).render());

        var content = body.find(".body__content");
        for (var i in this.model.questions) {
            var question = this.model.questions[i];
            var question_dom = (new Question(question)).render();
            content.append(question_dom);
            if (i != this.model.active_question) {
                question_dom.hide();
            }
        }

        return body;
    };

    Body.generateSampleModel = function() {
        return {
            menu: Menu.generateSampleModel(),
            questions: [Question.generateSampleModel(), Question.generateSampleModel(), Question.generateSampleModel()],
            active_question: 1

        };
    }

    return Body;
});
