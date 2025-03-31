(function () {
    'use strict';

    function start() {
        if (window.lampa_listner_extensions) {
            return;
        }

        window.lampa_listner_extensions = true;

        Object.defineProperty(window.Lampa.Card.prototype, 'build', {
            get: function () {
                return this._build;
            },
            set: function (value) {
                this._build = function () {
                    value.apply(this);

                    Lampa.Listener.send('card', {
                        type: 'build',
                        object: this
                    });
                }.bind(this);
            }
        });
    }

    start();
})()