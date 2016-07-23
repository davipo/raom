var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicitly call 'app.receivedEvent(...);'
        onDeviceReady: function() {
                app.init();
        },
};

app.initialize();

app.init = function()
{
        $(document).ready(function()
        {
                
        });
}



/*********** tools *************/
app.toast= function(msg,timeshown)
        {
		//set time to show message
		if (timeshown)
		{
			var t = timeshown*1000;
		}else
		{
			var t = 1500;
		}
                $("#toast").html(msg)
                .show().delay( t )
                .fadeOut( 400, function(){
                        $(this).remove();
                });
        }