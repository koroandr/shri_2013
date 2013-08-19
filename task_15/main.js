/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:09
 * To change this template use File | Settings | File Templates.
 */

require([
    "jquery",
    "blocks/menu/menu",
    "blocks/header",
    "blocks/body",
    "js/controller",
    "js/eventTarget"
], function($, Menu, Header, Body, Controller, dispatcher) {
    $(function(){
        var controller = new Controller(3);

        var header = new Header(Header.generateSampleModel());
        $("body").append(header.render());

        var body = new Body(Body.generateSampleModel());
        $("body").append(body.render());

        dispatcher.addEventListener("item_selected", function(data){
            console.log("item_selected event: ", data);
        });

        dispatcher.addEventListener("next_item", function(data){
            console.log("next_item event: ", data);
        });
        dispatcher.addEventListener("prev_item", function(data){
            console.log("prev_item event: ", data);
        });

//        var qb = new Question(Question.generateSampleModel());
//        $(".body__content").append(qb.render());
    });
});