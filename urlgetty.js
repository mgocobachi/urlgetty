/**
 * $.URLgetty() - URL parameters via GET method
 * 
 * It is a simple jQuery plugin to get the parameters setted via GET method
 * 
 * $.URLgetty() to initialize it
 * $.URLgetty.param('name') to get a specific value of the parameters
 * 
 * @author Miguel Gocobachi <miguelg@vsisoft.com>
 */
if (window.jQuery) {
    $(function($) {
        $.URLgetty = function() {
            var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            
            if (params.length > 0) {
                $.URLgetty.parameters = {};
                $.each(params, function(key, param) {
                    param = param.split('=');
                    $.URLgetty.parameters[param[0]] = param[1];
                });
            }
        };

        $.URLgetty.param = function(name) {
            if (('undefined' === typeof name) ||
                'undefined' === typeof $.URLgetty.parameters[name]) {
                return null;
            }
            
            return $.URLgetty.parameters[name];
        };

        $.URLgetty.parameters = null;
    }(jQuery));
}
