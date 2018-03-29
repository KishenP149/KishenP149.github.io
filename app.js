//serviceworker register
navigator.serviceWorker.register("./sw.js").then(function(registration){
 console.log("service worker has been registerd with scope!", registration.scope);
 }); 