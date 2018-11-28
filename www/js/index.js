var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var acionar = document.getElementById('acionar');
        var resposta = document.getElementById('resposta');

        acionar.addEventListener('click', function() {
            resposta.innerText = 'ação executada.';
        });

        var notificationOpenedCallback = function(jsonData) {
            var titulo = jsonData.notification.payload.title;
            var mensagem = jsonData.notification.payload.body;
            var notification = titulo + ": " + mensagem;

            localStorage.setItem('notification', notification);

            window.location.reload();
        };

        window.plugins.OneSignal
        .startInit("e3439baa-31cb-4e81-bb84-0245aaf5a187")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    }
};

app.initialize();
