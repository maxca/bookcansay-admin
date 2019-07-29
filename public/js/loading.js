(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/loading"],{

/***/ "./bower_components/jquery-loading/dist sync recursive":
/*!***************************************************!*\
  !*** ./bower_components/jquery-loading/dist sync ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./bower_components/jquery-loading/dist sync recursive";

/***/ }),

/***/ "./bower_components/jquery-loading/dist/jquery.loading.js":
/*!****************************************************************!*\
  !*** ./bower_components/jquery-loading/dist/jquery.loading.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  jquery-easy-loading - v1.3.0
 *  Easily add and manipulate loading states of any element on the page
 *  http://github.com/CarlosBonetti/jquery-loading
 *
 *  Made by Carlos Bonetti <carlosb_bc@hotmail.com>
 *  Under MIT License
 */
(function(factory) {
  'use strict';
  
  if (typeof window !== 'undefined') {
    if (true) {
      // AMD
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__("./bower_components/jquery-loading/dist sync recursive")(window)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  } else {
    throw new Error('Could not find DOM window object.');
  }
})(function($, window, undefined) {

  var Loading = function(element, options) {
    this.element = element;
    this.settings = $.extend({}, Loading.defaults, options);
    this.settings.fullPage = this.element.is('body');

    this.init();

    if (this.settings.start) {
      this.start();
    }
  };

  Loading.defaults = {

    /**
     * jQuery element to be used as overlay
     * If not defined, a default overlay will be created
     */
    overlay: undefined,

    /**
     * z-index to be used by the default overlay
     * If not defined, a z-index will be calculated based on the
     * target's z-index
     * Has no effect if a custom overlay is defined
     */
    zIndex: undefined,

    /**
     * Message to be rendered on the overlay content
     * Has no effect if a custom overlay is defined
     */
    message: 'Loading...',

    /**
     * Theme to be applied on the loading element
     *
     * Some default themes are implemented on `jquery.loading.css`, but you can
     *  define your own. Just add a `.loading-theme-my_awesome_theme` selector
     *  somewhere with your custom styles and change this option
     *  to 'my_awesome_theme'. The class is applied to the parent overlay div
     *
     * Has no effect if a custom overlay is defined
     */
    theme: 'light',

    /**
     * Class(es) to be applied to the overlay element when the loading state is started
     */
    shownClass: 'loading-shown',

    /**
     * Class(es) to be applied to the overlay element when the loading state is stopped
     */
    hiddenClass: 'loading-hidden',

    /**
     * Set to true to stop the loading state if the overlay is clicked
     * This options does NOT override the onClick event
     */
    stoppable: false,

    /**
     * Set to false to not start the loading state when initialized
     */
    start: true,

    /**
     * Function to be executed when the loading state is started
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.start` event
     */
    onStart: function(loading) {
      loading.overlay.fadeIn(150);
    },

    /**
     * Function to be executed when the loading state is stopped
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.stop` event
     */
    onStop: function(loading) {
      loading.overlay.fadeOut(150);
    },

    /**
     * Function to be executed when the overlay is clicked
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.click` event
     */
    onClick: function() {}
  };

  /**
   * Extend the Loading plugin default settings with the user options
   * Use it as `$.Loading.setDefaults({ ... })`
   *
   * @param {Object} options Custom options to override the plugin defaults
   */
  Loading.setDefaults = function(options) {
    Loading.defaults = $.extend({}, Loading.defaults, options);
  };

  $.extend(Loading.prototype, {

    /**
     * Initializes the overlay and attach handlers to the appropriate events
     */
    init: function() {
      this.isActive = false;
      this.overlay = this.settings.overlay || this.createOverlay();
      this.resize();
      this.attachMethodsToExternalEvents();
      this.attachOptionsHandlers();
    },

    /**
     * Return a new default overlay
     *
     * @return {jQuery} A new overlay already appended to the page's body
     */
    createOverlay: function() {
      var overlay = $('<div class="loading-overlay loading-theme-' + this.settings.theme + '"><div class="loading-overlay-content">' + this.settings.message + '</div></div>')
        .addClass(this.settings.hiddenClass)
        .hide()
        .appendTo('body');

      var elementID = this.element.attr('id');
      if (elementID) {
        overlay.attr('id', elementID + '_loading-overlay');
      }

      return overlay;
    },

    /**
     * Attach some internal methods to external events
     * e.g. overlay click, window resize etc
     */
    attachMethodsToExternalEvents: function() {
      var self = this;

      // Add `shownClass` and remove `hiddenClass` from overlay when loading state
      // is activated
      self.element.on('loading.start', function() {
        self.overlay
          .removeClass(self.settings.hiddenClass)
          .addClass(self.settings.shownClass);
      });

      // Add `hiddenClass` and remove `shownClass` from overlay when loading state
      // is stopped
      self.element.on('loading.stop', function() {
        self.overlay
          .removeClass(self.settings.shownClass)
          .addClass(self.settings.hiddenClass);
      });

      // Attach the 'stop loading on click' behaviour if the `stoppable` option is set
      if (self.settings.stoppable) {
        self.overlay.on('click', function() {
          self.stop();
        });
      }

      // Trigger the `loading.click` event if the overlay is clicked
      self.overlay.on('click', function() {
        self.element.trigger('loading.click', self);
      });

      // Bind the `resize` method to `window.resize`
      $(window).on('resize', function() {
        self.resize();
      });

      // Bind the `resize` method to `document.ready` to guarantee right
      // positioning and dimensions after the page is loaded
      $(function() {
        self.resize();
      });
    },

    /**
     * Attach the handlers defined on `options` for the respective events
     */
    attachOptionsHandlers: function() {
      var self = this;

      self.element.on('loading.start', function(event, loading) {
        self.settings.onStart(loading);
      });

      self.element.on('loading.stop', function(event, loading) {
        self.settings.onStop(loading);
      });

      self.element.on('loading.click', function(event, loading) {
        self.settings.onClick(loading);
      });
    },

    /**
     * Calculate the z-index for the default overlay element
     * Return the z-index passed as setting to the plugin or calculate it
     * based on the target's z-index
     */
    calcZIndex: function() {
      if (this.settings.zIndex !== undefined) {
        return this.settings.zIndex;
      } else {
        return (parseInt(this.element.css('z-index')) || 0) + 1 + this.settings.fullPage;
      }
    },

    /**
     * Reposition the overlay on the top of the target element
     * This method needs to be called if the target element changes position
     *  or dimension
     */
    resize: function() {
      var self = this;

      var element = self.element,
          totalWidth = element.outerWidth(),
          totalHeight = element.outerHeight();

      if (this.settings.fullPage) {
        totalHeight = '100%';
        totalWidth = '100%';
      }

      this.overlay.css({
        position: self.settings.fullPage ? 'fixed' : 'absolute',
        zIndex: self.calcZIndex(),
        top: element.offset().top,
        left: element.offset().left,
        width: totalWidth,
        height: totalHeight
      });
    },

    /**
     * Trigger the `loading.start` event and turn on the loading state
     */
    start: function() {
      this.isActive = true;
      this.resize();
      this.element.trigger('loading.start', this);
    },

    /**
     * Trigger the `loading.stop` event and turn off the loading state
     */
    stop: function() {
      this.isActive = false;
      this.element.trigger('loading.stop', this);
    },

    /**
     * Check whether the loading state is active or not
     *
     * @return {Boolean}
     */
    active: function() {
      return this.isActive;
    },

    /**
     * Toggle the state of the loading overlay
     */
    toggle: function() {
      if (this.active()) {
        this.stop();
      } else {
        this.start();
      }
    },

    /**
     * Destroy plugin instance.
     */
    destroy: function() {
    	this.overlay.remove();
    }

  });

  /**
   * Name of the data attribute where the plugin object will be stored
   */
  var dataAttr = 'jquery-loading';

  /**
   * Initializes the plugin and return a chainable jQuery object
   *
   * @param {Object} [options] Initialization options. Extends `Loading.defaults`
   * @return {jQuery}
   */
  $.fn.loading = function (options) {
    return this.each(function() {
      // (Try to) retrieve an existing plugin object associated with element
      var loading = $.data(this, dataAttr);

      if (!loading) {
        // First call. Initialize and save plugin object
        if (options === undefined || typeof options === 'object' ||
            options === 'start' || options === 'toggle') {
          // Initialize it just if argument is undefined, a config object
          // or a direct call to 'start' or 'toggle' methods
          $.data(this, dataAttr, new Loading($(this), options));
        }
      } else {
        // Already initialized
        if (options === undefined) {
          // $(...).loading() call. Call the 'start' by default
          loading.start();
        } else if (typeof options === 'string') {
          // $(...).loading('method') call. Execute 'method'
          loading[options].apply(loading);
        } else {
          // $(...).loading({...}) call. New configurations. Reinitialize
          // plugin object with new config options and start the plugin
          // Also, destroy the old overlay instance
          loading.destroy();
          $.data(this, dataAttr, new Loading($(this), options));
        }
      }
    });
  };

  /**
   * Return the loading object associated to the element or initialize it
   * This method is interesting if you need the plugin object to access the
   * internal API
   * Example: `$('#some-element').Loading().toggle()`
   *
   * @param {Object} [options] Initialization options. If new options are given
   * to a previously initialized object, the old ones are overriden and the
   * plugin restarted
   * @return {Loading}
   */
  $.fn.Loading = function(options) {
    var loading = $(this).data(dataAttr);

    if (!loading || options !== undefined) {
      $(this).data(dataAttr, (loading = new Loading($(this), options)));
    }

    return loading;
  };

  /**
   * Create the `:loading` jQuery selector
   * Return all the jQuery elements with the loading state active
   *
   * Using the `:not(:loading)` will return all jQuery elements that are not
   *  loading, even the ones with the plugin not attached.
   *
   * Examples of usage:
   *  `$(':loading')` to get all the elements with the loading state active
   *  `$('#my-element').is(':loading')` to check if the element is loading
   */
  $.expr[':'].loading = function(element) {
    var loadingObj = $.data(element, dataAttr);

    if (!loadingObj) {
      return false;
    }

    return loadingObj.active();
  };

  $.Loading = Loading;

});


/***/ }),

/***/ "./resources/sass/backend/app.scss":
/*!*****************************************!*\
  !*** ./resources/sass/backend/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/frontend/app.scss":
/*!******************************************!*\
  !*** ./resources/sass/frontend/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi ./bower_components/jquery-loading/dist/jquery.loading.js ./resources/sass/frontend/app.scss ./resources/sass/backend/app.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/bower_components/jquery-loading/dist/jquery.loading.js */"./bower_components/jquery-loading/dist/jquery.loading.js");
__webpack_require__(/*! /var/www/html/resources/sass/frontend/app.scss */"./resources/sass/frontend/app.scss");
module.exports = __webpack_require__(/*! /var/www/html/resources/sass/backend/app.scss */"./resources/sass/backend/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS1sb2FkaW5nL2Rpc3Qgc3luYyIsIndlYnBhY2s6Ly8vLi9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS1sb2FkaW5nL2Rpc3QvanF1ZXJ5LmxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvYmFja2VuZC9hcHAuc2Nzcz8zNzJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2Zyb250ZW5kL2FwcC5zY3NzP2RhNTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSxpRjs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsSUFBMEM7QUFDbEQ7QUFDQSxNQUFNLGlDQUFPLENBQUMseUVBQVEsRUFBRSxtRkFBTSxFQUFDLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDekMsS0FBSyxNQUFNLEVBTU47QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7OztBQ3BaRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvbG9hZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5LWxvYWRpbmcvZGlzdCBzeW5jIHJlY3Vyc2l2ZVwiOyIsIi8qXG4gKiAganF1ZXJ5LWVhc3ktbG9hZGluZyAtIHYxLjMuMFxuICogIEVhc2lseSBhZGQgYW5kIG1hbmlwdWxhdGUgbG9hZGluZyBzdGF0ZXMgb2YgYW55IGVsZW1lbnQgb24gdGhlIHBhZ2VcbiAqICBodHRwOi8vZ2l0aHViLmNvbS9DYXJsb3NCb25ldHRpL2pxdWVyeS1sb2FkaW5nXG4gKlxuICogIE1hZGUgYnkgQ2FybG9zIEJvbmV0dGkgPGNhcmxvc2JfYmNAaG90bWFpbC5jb20+XG4gKiAgVW5kZXIgTUlUIExpY2Vuc2VcbiAqL1xuKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgLy8gQU1EXG4gICAgICBkZWZpbmUoWydqcXVlcnknLCB3aW5kb3ddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gQ29tbW9uSlNcbiAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JyksIHdpbmRvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgZmFjdG9yeShqUXVlcnksIHdpbmRvdyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgRE9NIHdpbmRvdyBvYmplY3QuJyk7XG4gIH1cbn0pKGZ1bmN0aW9uKCQsIHdpbmRvdywgdW5kZWZpbmVkKSB7XG5cbiAgdmFyIExvYWRpbmcgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe30sIExvYWRpbmcuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0dGluZ3MuZnVsbFBhZ2UgPSB0aGlzLmVsZW1lbnQuaXMoJ2JvZHknKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgTG9hZGluZy5kZWZhdWx0cyA9IHtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBlbGVtZW50IHRvIGJlIHVzZWQgYXMgb3ZlcmxheVxuICAgICAqIElmIG5vdCBkZWZpbmVkLCBhIGRlZmF1bHQgb3ZlcmxheSB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKi9cbiAgICBvdmVybGF5OiB1bmRlZmluZWQsXG5cbiAgICAvKipcbiAgICAgKiB6LWluZGV4IHRvIGJlIHVzZWQgYnkgdGhlIGRlZmF1bHQgb3ZlcmxheVxuICAgICAqIElmIG5vdCBkZWZpbmVkLCBhIHotaW5kZXggd2lsbCBiZSBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZVxuICAgICAqIHRhcmdldCdzIHotaW5kZXhcbiAgICAgKiBIYXMgbm8gZWZmZWN0IGlmIGEgY3VzdG9tIG92ZXJsYXkgaXMgZGVmaW5lZFxuICAgICAqL1xuICAgIHpJbmRleDogdW5kZWZpbmVkLFxuXG4gICAgLyoqXG4gICAgICogTWVzc2FnZSB0byBiZSByZW5kZXJlZCBvbiB0aGUgb3ZlcmxheSBjb250ZW50XG4gICAgICogSGFzIG5vIGVmZmVjdCBpZiBhIGN1c3RvbSBvdmVybGF5IGlzIGRlZmluZWRcbiAgICAgKi9cbiAgICBtZXNzYWdlOiAnTG9hZGluZy4uLicsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSB0byBiZSBhcHBsaWVkIG9uIHRoZSBsb2FkaW5nIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFNvbWUgZGVmYXVsdCB0aGVtZXMgYXJlIGltcGxlbWVudGVkIG9uIGBqcXVlcnkubG9hZGluZy5jc3NgLCBidXQgeW91IGNhblxuICAgICAqICBkZWZpbmUgeW91ciBvd24uIEp1c3QgYWRkIGEgYC5sb2FkaW5nLXRoZW1lLW15X2F3ZXNvbWVfdGhlbWVgIHNlbGVjdG9yXG4gICAgICogIHNvbWV3aGVyZSB3aXRoIHlvdXIgY3VzdG9tIHN0eWxlcyBhbmQgY2hhbmdlIHRoaXMgb3B0aW9uXG4gICAgICogIHRvICdteV9hd2Vzb21lX3RoZW1lJy4gVGhlIGNsYXNzIGlzIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBvdmVybGF5IGRpdlxuICAgICAqXG4gICAgICogSGFzIG5vIGVmZmVjdCBpZiBhIGN1c3RvbSBvdmVybGF5IGlzIGRlZmluZWRcbiAgICAgKi9cbiAgICB0aGVtZTogJ2xpZ2h0JyxcblxuICAgIC8qKlxuICAgICAqIENsYXNzKGVzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBvdmVybGF5IGVsZW1lbnQgd2hlbiB0aGUgbG9hZGluZyBzdGF0ZSBpcyBzdGFydGVkXG4gICAgICovXG4gICAgc2hvd25DbGFzczogJ2xvYWRpbmctc2hvd24nLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MoZXMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIG92ZXJsYXkgZWxlbWVudCB3aGVuIHRoZSBsb2FkaW5nIHN0YXRlIGlzIHN0b3BwZWRcbiAgICAgKi9cbiAgICBoaWRkZW5DbGFzczogJ2xvYWRpbmctaGlkZGVuJyxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIHN0b3AgdGhlIGxvYWRpbmcgc3RhdGUgaWYgdGhlIG92ZXJsYXkgaXMgY2xpY2tlZFxuICAgICAqIFRoaXMgb3B0aW9ucyBkb2VzIE5PVCBvdmVycmlkZSB0aGUgb25DbGljayBldmVudFxuICAgICAqL1xuICAgIHN0b3BwYWJsZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gZmFsc2UgdG8gbm90IHN0YXJ0IHRoZSBsb2FkaW5nIHN0YXRlIHdoZW4gaW5pdGlhbGl6ZWRcbiAgICAgKi9cbiAgICBzdGFydDogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxvYWRpbmcgc3RhdGUgaXMgc3RhcnRlZFxuICAgICAqIFJlY2VpdmVzIHRoZSBsb2FkaW5nIG9iamVjdCBhcyBwYXJhbWV0ZXJcbiAgICAgKlxuICAgICAqIFRoZSBmdW5jdGlvbiBpcyBhdHRhY2hlZCB0byB0aGUgYGxvYWRpbmcuc3RhcnRgIGV2ZW50XG4gICAgICovXG4gICAgb25TdGFydDogZnVuY3Rpb24obG9hZGluZykge1xuICAgICAgbG9hZGluZy5vdmVybGF5LmZhZGVJbigxNTApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsb2FkaW5nIHN0YXRlIGlzIHN0b3BwZWRcbiAgICAgKiBSZWNlaXZlcyB0aGUgbG9hZGluZyBvYmplY3QgYXMgcGFyYW1ldGVyXG4gICAgICpcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgYXR0YWNoZWQgdG8gdGhlIGBsb2FkaW5nLnN0b3BgIGV2ZW50XG4gICAgICovXG4gICAgb25TdG9wOiBmdW5jdGlvbihsb2FkaW5nKSB7XG4gICAgICBsb2FkaW5nLm92ZXJsYXkuZmFkZU91dCgxNTApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBvdmVybGF5IGlzIGNsaWNrZWRcbiAgICAgKiBSZWNlaXZlcyB0aGUgbG9hZGluZyBvYmplY3QgYXMgcGFyYW1ldGVyXG4gICAgICpcbiAgICAgKiBUaGUgZnVuY3Rpb24gaXMgYXR0YWNoZWQgdG8gdGhlIGBsb2FkaW5nLmNsaWNrYCBldmVudFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKCkge31cbiAgfTtcblxuICAvKipcbiAgICogRXh0ZW5kIHRoZSBMb2FkaW5nIHBsdWdpbiBkZWZhdWx0IHNldHRpbmdzIHdpdGggdGhlIHVzZXIgb3B0aW9uc1xuICAgKiBVc2UgaXQgYXMgYCQuTG9hZGluZy5zZXREZWZhdWx0cyh7IC4uLiB9KWBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQ3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIHBsdWdpbiBkZWZhdWx0c1xuICAgKi9cbiAgTG9hZGluZy5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBMb2FkaW5nLmRlZmF1bHRzID0gJC5leHRlbmQoe30sIExvYWRpbmcuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICB9O1xuXG4gICQuZXh0ZW5kKExvYWRpbmcucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgb3ZlcmxheSBhbmQgYXR0YWNoIGhhbmRsZXJzIHRvIHRoZSBhcHByb3ByaWF0ZSBldmVudHNcbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuc2V0dGluZ3Mub3ZlcmxheSB8fCB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICB0aGlzLmF0dGFjaE1ldGhvZHNUb0V4dGVybmFsRXZlbnRzKCk7XG4gICAgICB0aGlzLmF0dGFjaE9wdGlvbnNIYW5kbGVycygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBuZXcgZGVmYXVsdCBvdmVybGF5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtqUXVlcnl9IEEgbmV3IG92ZXJsYXkgYWxyZWFkeSBhcHBlbmRlZCB0byB0aGUgcGFnZSdzIGJvZHlcbiAgICAgKi9cbiAgICBjcmVhdGVPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cImxvYWRpbmctb3ZlcmxheSBsb2FkaW5nLXRoZW1lLScgKyB0aGlzLnNldHRpbmdzLnRoZW1lICsgJ1wiPjxkaXYgY2xhc3M9XCJsb2FkaW5nLW92ZXJsYXktY29udGVudFwiPicgKyB0aGlzLnNldHRpbmdzLm1lc3NhZ2UgKyAnPC9kaXY+PC9kaXY+JylcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuaGlkZGVuQ2xhc3MpXG4gICAgICAgIC5oaWRlKClcbiAgICAgICAgLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgIHZhciBlbGVtZW50SUQgPSB0aGlzLmVsZW1lbnQuYXR0cignaWQnKTtcbiAgICAgIGlmIChlbGVtZW50SUQpIHtcbiAgICAgICAgb3ZlcmxheS5hdHRyKCdpZCcsIGVsZW1lbnRJRCArICdfbG9hZGluZy1vdmVybGF5Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdmVybGF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggc29tZSBpbnRlcm5hbCBtZXRob2RzIHRvIGV4dGVybmFsIGV2ZW50c1xuICAgICAqIGUuZy4gb3ZlcmxheSBjbGljaywgd2luZG93IHJlc2l6ZSBldGNcbiAgICAgKi9cbiAgICBhdHRhY2hNZXRob2RzVG9FeHRlcm5hbEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIEFkZCBgc2hvd25DbGFzc2AgYW5kIHJlbW92ZSBgaGlkZGVuQ2xhc3NgIGZyb20gb3ZlcmxheSB3aGVuIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIGlzIGFjdGl2YXRlZFxuICAgICAgc2VsZi5lbGVtZW50Lm9uKCdsb2FkaW5nLnN0YXJ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYub3ZlcmxheVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhzZWxmLnNldHRpbmdzLmhpZGRlbkNsYXNzKVxuICAgICAgICAgIC5hZGRDbGFzcyhzZWxmLnNldHRpbmdzLnNob3duQ2xhc3MpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBgaGlkZGVuQ2xhc3NgIGFuZCByZW1vdmUgYHNob3duQ2xhc3NgIGZyb20gb3ZlcmxheSB3aGVuIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIGlzIHN0b3BwZWRcbiAgICAgIHNlbGYuZWxlbWVudC5vbignbG9hZGluZy5zdG9wJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYub3ZlcmxheVxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhzZWxmLnNldHRpbmdzLnNob3duQ2xhc3MpXG4gICAgICAgICAgLmFkZENsYXNzKHNlbGYuc2V0dGluZ3MuaGlkZGVuQ2xhc3MpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgJ3N0b3AgbG9hZGluZyBvbiBjbGljaycgYmVoYXZpb3VyIGlmIHRoZSBgc3RvcHBhYmxlYCBvcHRpb24gaXMgc2V0XG4gICAgICBpZiAoc2VsZi5zZXR0aW5ncy5zdG9wcGFibGUpIHtcbiAgICAgICAgc2VsZi5vdmVybGF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJpZ2dlciB0aGUgYGxvYWRpbmcuY2xpY2tgIGV2ZW50IGlmIHRoZSBvdmVybGF5IGlzIGNsaWNrZWRcbiAgICAgIHNlbGYub3ZlcmxheS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5lbGVtZW50LnRyaWdnZXIoJ2xvYWRpbmcuY2xpY2snLCBzZWxmKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHRoZSBgcmVzaXplYCBtZXRob2QgdG8gYHdpbmRvdy5yZXNpemVgXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEJpbmQgdGhlIGByZXNpemVgIG1ldGhvZCB0byBgZG9jdW1lbnQucmVhZHlgIHRvIGd1YXJhbnRlZSByaWdodFxuICAgICAgLy8gcG9zaXRpb25pbmcgYW5kIGRpbWVuc2lvbnMgYWZ0ZXIgdGhlIHBhZ2UgaXMgbG9hZGVkXG4gICAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJlc2l6ZSgpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCB0aGUgaGFuZGxlcnMgZGVmaW5lZCBvbiBgb3B0aW9uc2AgZm9yIHRoZSByZXNwZWN0aXZlIGV2ZW50c1xuICAgICAqL1xuICAgIGF0dGFjaE9wdGlvbnNIYW5kbGVyczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHNlbGYuZWxlbWVudC5vbignbG9hZGluZy5zdGFydCcsIGZ1bmN0aW9uKGV2ZW50LCBsb2FkaW5nKSB7XG4gICAgICAgIHNlbGYuc2V0dGluZ3Mub25TdGFydChsb2FkaW5nKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLmVsZW1lbnQub24oJ2xvYWRpbmcuc3RvcCcsIGZ1bmN0aW9uKGV2ZW50LCBsb2FkaW5nKSB7XG4gICAgICAgIHNlbGYuc2V0dGluZ3Mub25TdG9wKGxvYWRpbmcpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuZWxlbWVudC5vbignbG9hZGluZy5jbGljaycsIGZ1bmN0aW9uKGV2ZW50LCBsb2FkaW5nKSB7XG4gICAgICAgIHNlbGYuc2V0dGluZ3Mub25DbGljayhsb2FkaW5nKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHotaW5kZXggZm9yIHRoZSBkZWZhdWx0IG92ZXJsYXkgZWxlbWVudFxuICAgICAqIFJldHVybiB0aGUgei1pbmRleCBwYXNzZWQgYXMgc2V0dGluZyB0byB0aGUgcGx1Z2luIG9yIGNhbGN1bGF0ZSBpdFxuICAgICAqIGJhc2VkIG9uIHRoZSB0YXJnZXQncyB6LWluZGV4XG4gICAgICovXG4gICAgY2FsY1pJbmRleDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy56SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy56SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHRoaXMuZWxlbWVudC5jc3MoJ3otaW5kZXgnKSkgfHwgMCkgKyAxICsgdGhpcy5zZXR0aW5ncy5mdWxsUGFnZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwb3NpdGlvbiB0aGUgb3ZlcmxheSBvbiB0aGUgdG9wIG9mIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAqIFRoaXMgbWV0aG9kIG5lZWRzIHRvIGJlIGNhbGxlZCBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgY2hhbmdlcyBwb3NpdGlvblxuICAgICAqICBvciBkaW1lbnNpb25cbiAgICAgKi9cbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB2YXIgZWxlbWVudCA9IHNlbGYuZWxlbWVudCxcbiAgICAgICAgICB0b3RhbFdpZHRoID0gZWxlbWVudC5vdXRlcldpZHRoKCksXG4gICAgICAgICAgdG90YWxIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmZ1bGxQYWdlKSB7XG4gICAgICAgIHRvdGFsSGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB0b3RhbFdpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm92ZXJsYXkuY3NzKHtcbiAgICAgICAgcG9zaXRpb246IHNlbGYuc2V0dGluZ3MuZnVsbFBhZ2UgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyxcbiAgICAgICAgekluZGV4OiBzZWxmLmNhbGNaSW5kZXgoKSxcbiAgICAgICAgdG9wOiBlbGVtZW50Lm9mZnNldCgpLnRvcCxcbiAgICAgICAgbGVmdDogZWxlbWVudC5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICB3aWR0aDogdG90YWxXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0b3RhbEhlaWdodFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIGBsb2FkaW5nLnN0YXJ0YCBldmVudCBhbmQgdHVybiBvbiB0aGUgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC50cmlnZ2VyKCdsb2FkaW5nLnN0YXJ0JywgdGhpcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIGBsb2FkaW5nLnN0b3BgIGV2ZW50IGFuZCB0dXJuIG9mZiB0aGUgbG9hZGluZyBzdGF0ZVxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnRyaWdnZXIoJ2xvYWRpbmcuc3RvcCcsIHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayB3aGV0aGVyIHRoZSBsb2FkaW5nIHN0YXRlIGlzIGFjdGl2ZSBvciBub3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgYWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhlIHN0YXRlIG9mIHRoZSBsb2FkaW5nIG92ZXJsYXlcbiAgICAgKi9cbiAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlKCkpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgcGx1Z2luIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIFx0dGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIH1cblxuICB9KTtcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZGF0YSBhdHRyaWJ1dGUgd2hlcmUgdGhlIHBsdWdpbiBvYmplY3Qgd2lsbCBiZSBzdG9yZWRcbiAgICovXG4gIHZhciBkYXRhQXR0ciA9ICdqcXVlcnktbG9hZGluZyc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwbHVnaW4gYW5kIHJldHVybiBhIGNoYWluYWJsZSBqUXVlcnkgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gSW5pdGlhbGl6YXRpb24gb3B0aW9ucy4gRXh0ZW5kcyBgTG9hZGluZy5kZWZhdWx0c2BcbiAgICogQHJldHVybiB7alF1ZXJ5fVxuICAgKi9cbiAgJC5mbi5sb2FkaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gKFRyeSB0bykgcmV0cmlldmUgYW4gZXhpc3RpbmcgcGx1Z2luIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggZWxlbWVudFxuICAgICAgdmFyIGxvYWRpbmcgPSAkLmRhdGEodGhpcywgZGF0YUF0dHIpO1xuXG4gICAgICBpZiAoIWxvYWRpbmcpIHtcbiAgICAgICAgLy8gRmlyc3QgY2FsbC4gSW5pdGlhbGl6ZSBhbmQgc2F2ZSBwbHVnaW4gb2JqZWN0XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICBvcHRpb25zID09PSAnc3RhcnQnIHx8IG9wdGlvbnMgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpdCBqdXN0IGlmIGFyZ3VtZW50IGlzIHVuZGVmaW5lZCwgYSBjb25maWcgb2JqZWN0XG4gICAgICAgICAgLy8gb3IgYSBkaXJlY3QgY2FsbCB0byAnc3RhcnQnIG9yICd0b2dnbGUnIG1ldGhvZHNcbiAgICAgICAgICAkLmRhdGEodGhpcywgZGF0YUF0dHIsIG5ldyBMb2FkaW5nKCQodGhpcyksIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWxyZWFkeSBpbml0aWFsaXplZFxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gJCguLi4pLmxvYWRpbmcoKSBjYWxsLiBDYWxsIHRoZSAnc3RhcnQnIGJ5IGRlZmF1bHRcbiAgICAgICAgICBsb2FkaW5nLnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gJCguLi4pLmxvYWRpbmcoJ21ldGhvZCcpIGNhbGwuIEV4ZWN1dGUgJ21ldGhvZCdcbiAgICAgICAgICBsb2FkaW5nW29wdGlvbnNdLmFwcGx5KGxvYWRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vICQoLi4uKS5sb2FkaW5nKHsuLi59KSBjYWxsLiBOZXcgY29uZmlndXJhdGlvbnMuIFJlaW5pdGlhbGl6ZVxuICAgICAgICAgIC8vIHBsdWdpbiBvYmplY3Qgd2l0aCBuZXcgY29uZmlnIG9wdGlvbnMgYW5kIHN0YXJ0IHRoZSBwbHVnaW5cbiAgICAgICAgICAvLyBBbHNvLCBkZXN0cm95IHRoZSBvbGQgb3ZlcmxheSBpbnN0YW5jZVxuICAgICAgICAgIGxvYWRpbmcuZGVzdHJveSgpO1xuICAgICAgICAgICQuZGF0YSh0aGlzLCBkYXRhQXR0ciwgbmV3IExvYWRpbmcoJCh0aGlzKSwgb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbG9hZGluZyBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGUgZWxlbWVudCBvciBpbml0aWFsaXplIGl0XG4gICAqIFRoaXMgbWV0aG9kIGlzIGludGVyZXN0aW5nIGlmIHlvdSBuZWVkIHRoZSBwbHVnaW4gb2JqZWN0IHRvIGFjY2VzcyB0aGVcbiAgICogaW50ZXJuYWwgQVBJXG4gICAqIEV4YW1wbGU6IGAkKCcjc29tZS1lbGVtZW50JykuTG9hZGluZygpLnRvZ2dsZSgpYFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIEluaXRpYWxpemF0aW9uIG9wdGlvbnMuIElmIG5ldyBvcHRpb25zIGFyZSBnaXZlblxuICAgKiB0byBhIHByZXZpb3VzbHkgaW5pdGlhbGl6ZWQgb2JqZWN0LCB0aGUgb2xkIG9uZXMgYXJlIG92ZXJyaWRlbiBhbmQgdGhlXG4gICAqIHBsdWdpbiByZXN0YXJ0ZWRcbiAgICogQHJldHVybiB7TG9hZGluZ31cbiAgICovXG4gICQuZm4uTG9hZGluZyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgbG9hZGluZyA9ICQodGhpcykuZGF0YShkYXRhQXR0cik7XG5cbiAgICBpZiAoIWxvYWRpbmcgfHwgb3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAkKHRoaXMpLmRhdGEoZGF0YUF0dHIsIChsb2FkaW5nID0gbmV3IExvYWRpbmcoJCh0aGlzKSwgb3B0aW9ucykpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGluZztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBgOmxvYWRpbmdgIGpRdWVyeSBzZWxlY3RvclxuICAgKiBSZXR1cm4gYWxsIHRoZSBqUXVlcnkgZWxlbWVudHMgd2l0aCB0aGUgbG9hZGluZyBzdGF0ZSBhY3RpdmVcbiAgICpcbiAgICogVXNpbmcgdGhlIGA6bm90KDpsb2FkaW5nKWAgd2lsbCByZXR1cm4gYWxsIGpRdWVyeSBlbGVtZW50cyB0aGF0IGFyZSBub3RcbiAgICogIGxvYWRpbmcsIGV2ZW4gdGhlIG9uZXMgd2l0aCB0aGUgcGx1Z2luIG5vdCBhdHRhY2hlZC5cbiAgICpcbiAgICogRXhhbXBsZXMgb2YgdXNhZ2U6XG4gICAqICBgJCgnOmxvYWRpbmcnKWAgdG8gZ2V0IGFsbCB0aGUgZWxlbWVudHMgd2l0aCB0aGUgbG9hZGluZyBzdGF0ZSBhY3RpdmVcbiAgICogIGAkKCcjbXktZWxlbWVudCcpLmlzKCc6bG9hZGluZycpYCB0byBjaGVjayBpZiB0aGUgZWxlbWVudCBpcyBsb2FkaW5nXG4gICAqL1xuICAkLmV4cHJbJzonXS5sb2FkaW5nID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHZhciBsb2FkaW5nT2JqID0gJC5kYXRhKGVsZW1lbnQsIGRhdGFBdHRyKTtcblxuICAgIGlmICghbG9hZGluZ09iaikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBsb2FkaW5nT2JqLmFjdGl2ZSgpO1xuICB9O1xuXG4gICQuTG9hZGluZyA9IExvYWRpbmc7XG5cbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=