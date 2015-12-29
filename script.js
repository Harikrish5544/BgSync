if (navigator.serviceWorker) {
    console.log("ServiceWorkers are supported");

    navigator.serviceWorker.register('sw.js', {
            scope: './'
        })
        .then(function(reg) {
            console.log("ServiceWorker registered...!", reg);
        })
        .catch(function(error) {
            console.log("Failed to register ServiceWorker ಠ_ಠ", error);
        });
}

function registerOneTimeSync() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(reg) {
            if (reg.sync) {

                reg.sync.register({
                        tag: 'oneTimeSync'
                    })
                    .then(function(event) {
                        console.log('Sync registration successfull..!', event);
                    })
                    .catch(function(error) {
                        console.log('Sync registration failed', error);
                    });
            } else {
                console.log("One time Sync not supported");
            }
        });
    } else {
        console.log("No active ServiceWorker");
    }
}

