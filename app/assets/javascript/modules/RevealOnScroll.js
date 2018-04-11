import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    var selector;
    var offset;
    constructor(selector, offset) {
        this.itemsToReveal = selector;
        this.hideInitially();
        this.createWaypoints();
        this.offsetPercentagen = offset;
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        this.itemsToReveal.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--visible");
                },
                offset: $(currentItem).offsetPercentagen;
            });
        });
    }
}

export default RevealOnScroll;
