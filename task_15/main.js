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
    "js/model",
    "js/eventTarget"
], function($, Menu, Header, Body, Controller, model, dispatcher) {
    $(function(){
        var controller = new Controller(15);

        var header = new Header(Header.generateSampleModel());
        $("body").append(header.render());

        var body = new Body(model);
        $("body").append(body.render());

    });
});