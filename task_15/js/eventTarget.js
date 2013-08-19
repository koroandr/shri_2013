/**
 * EventTarget object and EventTargetException object
 * Used for creating custom events and listeners.
 * @param targetName - specifies target name for debugging purposes
 */
define(function(){
    function EventTarget(targetName) {
        this._types = [];      // to prevent conflicts with already defined
        this._listeners = [];  // object properties we use 2 arrays instead of 1 map
        this.targetName = targetName;
    }

    function EventTargetException(target, message) {
        this.message = message;
        this.name = "Custom Event Exception";
        this.target = target;
    }
    EventTarget.prototype = {
        addEventListener: function(type, listener) {

            if (empty(type)) {
                throw new EventTargetException(this.targetName, "empty type");
            }
            if (typeof(listener) != "function") {
                throw new EventTargetException(this.targetName, "provided listener for event type "
                    + type + " is not a function");
            }
            var ind = this._types.indexOf(type);
            if (ind == -1) {
                this._types.push(type);
                ind = this._types.indexOf(type);
            }
            if (!(this._listeners[ind] instanceof Array))
                this._listeners[ind] = [];

            for (var o in this._listeners[ind]) {
                if (o === listener) {
                    Debug.eventLog("Listener already exists:\ntargetName=" + this.targetName + ", type=" + type);
                    return; // to prevent duplicate entries
                }
            }
            this._listeners[ind].push(listener);
            Debug.eventLog("New event listener added:\ntargetName=" + this.targetName
                + ", type=" + type);
        },
        removeAllEventListeners: function(type) {
            var ind = this._types.indexOf(type);
            if (ind == -1) return;
            this._listeners[ind] = [];
            Debug.eventLog("All listeners were removed\ntargetName=" + this.targetName
                + ", type=" + type);
        },
        removeEventListener: function(type, listener) {
            var ind = this._types.indexOf(type);
            if (ind == -1) return;
            var indL = this._listeners[ind].indexOf(listener);
            if (indL == -1) return;
            this._listeners[ind].splice(indL, 1);
            Debug.eventLog("One listener was removed\ntargetName=" + this.targetName
                + ", type=" + type);
        },
        fire: function(event, args) {
            if (typeof event == "string")
                event = { type: event };
            if (!event.target)
                event.target = this;
            if (!event.type) {
                throw new EventTargetException(this.targetName, "Event missing 'type' property");
            }

            if (typeof args == "object") {
                for (var prop in args)
                    if (args.hasOwnProperty(prop))
                        event[prop] = args[prop];
            }
            var i = 0;
            var ind = this._types.indexOf(event.type);
            if (ind != -1 && this._listeners[ind]) {
                var listeners = this._listeners[ind];
                for (var len = listeners.length; i < len; i++) {
                    listeners[i].call(this, event);
                }
            }

            if (args && !args.isMessageTarget)
                Debug.eventLog("Event was fired, " + i + " listeners was called:\ntargetName="
                    + this.targetName + ", type=" + event.type);
        }
    };
    return new EventTarget("default");
});
