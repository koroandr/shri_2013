/**
 * Created with IntelliJ IDEA.
 * User: koroandr
 * Date: 19.08.13
 * Time: 18:06
 * To change this template use File | Settings | File Templates.
 */


define(["js/eventTarget"], function(dispatcher){
    var Controller = function(num_items) {
        this.num_items = num_items;
        this.selected_item = 1;
        this.results = [];

//        dispatcher.addEventListener("next_item")
        dispatcher.addEventListener("next_item", this.handleNextItem.bind(this));
        dispatcher.addEventListener("prev_item", this.handlePrevItem.bind(this));
        dispatcher.addEventListener("item_selected", this.handleItemSelected.bind(this));
        dispatcher.addEventListener("validation_success", this.handleValidationSuccess.bind(this));
        dispatcher.addEventListener("submit", this.handleSubmit.bind(this));
    }

    Controller.prototype.handleNextItem = function() {
        var prev = this.selected_item;
        if (this.selected_item == 1) {
            dispatcher.fire("left_bound_leave")
        }
        this.selected_item += 1;
        if (this.selected_item >= this.num_items) {
            this.selected_item = this.num_items;
            dispatcher.fire("right_bound_reach");
        }
        dispatcher.fire("item_changed", {
            previous_item: prev,
            num_items: this.num_items,
            selected_item: this.selected_item
        });
    }
    Controller.prototype.handlePrevItem = function() {
        var prev = this.selected_item;
        if (this.selected_item == this.num_items) {
            dispatcher.fire("right_bound_leave")
        }
        this.selected_item -= 1;
        if (this.selected_item == 1) {
            dispatcher.fire("left_bound_reach");
        }
        dispatcher.fire("item_changed", {
            previous_item: prev,
            num_items: this.num_items,
            selected_item: this.selected_item
        });
    }
    Controller.prototype.handleItemSelected = function(event) {
        var prev = this.selected_item;
        if (this.selected_item == this.num_items) {
            dispatcher.fire("right_bound_leave")
        }
        if (this.selected_item == 1) {
            dispatcher.fire("left_bound_leave")
        }

        this.selected_item = event.item;

        if (this.selected_item >= this.num_items) {
            this.selected_item = this.num_items;
            dispatcher.fire("right_bound_reach");
        }
        if (this.selected_item == 1) {
            dispatcher.fire("left_bound_reach");
        }

        dispatcher.fire("item_changed", {
            previous_item: prev,
            num_items: this.num_items,
            selected_item: this.selected_item
        });
    }
    Controller.prototype.handleValidationSuccess = function(event) {
        this.results[event.item - 1] = event.data;
    }
    Controller.prototype.handleValidationFault = function(event) {
        this.results[event.item - 1] = null;
    }
    Controller.prototype.handleSubmit = function() {
        var showError = function() {
            alert("Форма заполнена не до конца!");
        };
        if (this.results.length < this.num_items) {
            showError();
            return;
        }
        for (var i in this.results) {
            if (this.results[i] == null) {
                showError();
                return;
            }
        }
        console.log("Here comes ajax or some other submit of results: ", this.results);
        alert("Далее идет отправка на сервер!");
    }

    return Controller;
});