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
    "blocks/menu/menu",
    "js/eventTarget"
], function($, Mustache, template, Question, Menu, dispatcher) {
    var Body = function(model) {
        this.model = model;

        this.left_arrow_disabled = true;
        this.right_arrow_disabled = false;
        this.arrow_left = null;
        this.arrow_right = null;

        this.questions = [];

        dispatcher.addEventListener("left_bound_leave", this.handleLeftBoundLeave.bind(this));
        dispatcher.addEventListener("right_bound_leave", this.handleRightBoundLeave.bind(this));
        dispatcher.addEventListener("left_bound_reach", this.handleLeftBoundReach.bind(this));
        dispatcher.addEventListener("right_bound_reach", this.handleRightBoundReach.bind(this));
        dispatcher.addEventListener("item_changed", this.handleItemChanged.bind(this));
    };

    Body.prototype.render = function() {
        var self = this;
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
            this.questions.push(question_dom);
        }

        this.arrow_left = body.find(".body__left-arrow");
        this.arrow_right = body.find(".body__right-arrow");

        this.arrow_right.click(function(){
            if (!self.right_arrow_disabled) {
                dispatcher.fire("next_item");
            }
        });
        this.arrow_left.click(function(){
            if (!self.left_arrow_disabled) {
                dispatcher.fire("prev_item");
            }
        });
        return body;
    };
    Body.prototype.handleItemChanged = function(event) {
        $(this.questions[event.previous_item - 1]).hide();
        $(this.questions[event.selected_item - 1]).show();
    };
    Body.prototype.handleLeftBoundLeave = function() {
        this.left_arrow_disabled = false;
        this.arrow_left.removeClass("body__arrow_disabled");
    };
    Body.prototype.handleRightBoundLeave = function() {
        this.right_arrow_disabled = false;
        this.arrow_right.removeClass("body__arrow_disabled");
    };
    Body.prototype.handleLeftBoundReach = function() {
        this.left_arrow_disabled = true;
        this.arrow_left.addClass("body__arrow_disabled");
    };
    Body.prototype.handleRightBoundReach = function() {
        this.right_arrow_disabled = true;
        this.arrow_right.addClass("body__arrow_disabled");
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
