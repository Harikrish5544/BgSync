self.addEventListener('sync', function(event) {
     console.log("Inside sync event listner...");
     if (event.registration.tag == "oneTimeSync") {
    	console.log("One Time Sync getting..started");
        console.dir(self.registration);
        console.log("One Time Sync Fired");
    }else{
    	console.log("In Else of SW.js...");

    	console.log("One Time Sync Failed .. ",event.registration.tag);
    }
});