{!RequireScript("/soap/ajax/20.0/connection.js")} 
 
var theURL = [URL with parameters go here];

sforce.connection.remoteFunction({
        url : theURL,
        onSuccess : function(response) {
               alert("Result: " + response);
           }
    });