(function ($) {
    $.fn.Statesman = function (config) {

        var self = {
            //-- VARIABLES --/// <--- these are passed in when you instantiate the object
            allModals: [],
            Settings: {
                modalClass: 'modal',
                openClass: 'in'
            },
            hashString: function () { },
            // -- END VARIABLES -- // 



            // -- DOCUMENT READY ACTIONS -- //
            init: function () {
                this.DOMId = 'jqstatesman-plugin-id';
                this.enableHash()
                this.updateModals();
                this.attachEvents();
            },
            // END DOCUMENT READY ACTIONS -- //



            // -- EVENTS HANDLERS (attached on document ready) -- //
            attachEvents: function () {
                $('.' + this.Settings.modalClass).on('show.bs.modal hide.bs.modal shown.bs.modal hidden.bs.modal', function (e) {
                    self.updateModals();
                });
            },
            // -- END EVENT HANDLERS -- //



            // -- FUNCTIONS -- //
            Modals: function (modal) {
                this.updateModals();
                return this.allModals[modal];
            },
            updateModals: function () {
                var tmp = $('.' + this.Settings.modalClass);
                $.each(tmp, function(k, m) {
                    self.modalFactory(m);
                });
                console.log(this.allModals);
            },
            isOpen: function (modalId) {
                el = document.getElementById(modalId);
                return (' ' + el.className + ' ').indexOf(' ' + this.Settings.openClass + ' ') > -1;
            },
            isClosed: function (modalId) {
                el = document.getElementById(modalId);
                return  !( (' ' + el.className + ' ').indexOf(' ' + this.Settings.openClass + ' ') > -1 );
            },
            getState: function (modalId) {
                return this.isOpen(modalId) ? 'open' : 'closed';
            },
            modalFactory: function(m) {
                var pluginHash = m.id._jqshash_noConflict();
                self.allModals[m.id] = {
                    id: m.id,
                    pluginId: pluginHash,
                    attributes: m.attributes,
                    state: self.getState(m.id),
                    open: self.isOpen(m.id),
                    isOpen: function() {
                        return self.isOpen(m.id);
                    },
                    isClosed: function() {
                        return !self.isOpen(m.id);
                    },
                    getState: function() {
                        return self.getState(m.id);
                    }
                };
                this.addHashToModal(m.id, pluginHash);
            },
            addHashToModal: function (modalId, hash) {
                m = document.getElementById(modalId);
                m.setAttribute('jqstatesman-plugin-id', hash);
            },
            enableHash: function () {
                String.prototype._jqshash_noConflict = function() {
                    var hash = 0, i, chr;
                    if (this.length === 0) return hash;
                    for (i = 0; i < this.length; i++) {
                      chr   = this.charCodeAt(i);
                      hash  = ((hash << 5) - hash) + chr;
                      hash |= 0;
                    }
                    return '_' + (hash > 0 ? hash : hash*-1);
                }
            }
            // END FUNCTIONS -- /

        };
        var new_object = $.extend({}, self, config);
        $.extend(self, config);
        return new_object;
    };
}(jQuery));