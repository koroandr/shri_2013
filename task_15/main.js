/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 3:09
 * To change this template use File | Settings | File Templates.
 */

require(["jquery", "blocks/menu/menu", "blocks/header", "blocks/body"], function($, Menu, Header, Body) {
    $(function(){
        var header = new Header(Header.generateSampleModel());
        $("body").append(header.render());

        var body = new Body(Body.generateSampleModel());
        $("body").append(body.render());


//        var qb = new Question(Question.generateSampleModel());
//        $(".body__content").append(qb.render());
    });
});