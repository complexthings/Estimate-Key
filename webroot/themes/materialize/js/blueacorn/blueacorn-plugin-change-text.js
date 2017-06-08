/**
 * @package     Blueacorn\\TextChange
 * @version     1.0
 * @author      Blue Acorn <code@blueacorn.com>
 * @copyright   Copyright © 2015 Blue Acorn.
 *
 * jQuery plugin for when we need to change the text of
 * an HTML element based on some set of stipulations.
 *
 * ##### EXAMPLES
 *
 * For instance, if we need to edit the text of the .page-title element
 * from the current text (Sample) to something else (New Page Title) we
 * can use the following method to allow that.
 *
 * // Initiate the plugin on element
 * var $pageTitle = $j('.page-title > h1').textChange();
 *
 * // On button click, change the text using custom jQuery method
 * $('button').on('click', function(){
 *      $pageTitle.updateText("New Page Title");
 * });
 *
 * If you by chance want to change the element back to the original
 * text, you can simply pass in nothing into the updateText() method.
 *
 * $pageTitle.updateText();
 *
 */

(function (root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(window.jQuery);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else {
        // Global Variables
        root.ba.moduleLoader.define('jqueryChangeText', ['jquery'], factory);
    }

}(this, function ($) {
    'use strict';

    var pluginName = "textChange";

    // The actual plugin constructor
    function TextChange(element) {
        this.$element = $(element);
        this.init();
    }

    /**
     * Initiation of plugin object scope.
     * Will accept an element
     *
     * @param element
     *  jQuery element to act upon
     */
    TextChange.prototype = {

        init: function() {
            this.addDefaultPropToElement();
        },

        addDefaultPropToElement: function(){
            this.$element.attr('data-text', this.$element.text().trim());
        },

        updateText: function(text){
            if(!text && typeof this.$element.data('text') !== "undefined"){
                this.$element.text(this.$element.data('text'));
            }
            this.$element.text(text);
        }
    };

    $.fn[pluginName] = function() {
        return new TextChange(this);
    };
}));
