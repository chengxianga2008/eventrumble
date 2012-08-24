jQuery(document).ready(function($){
  //global variable
  var resultCache = {};
  var timeStampCache = {};
  
  //ui datepick initialization by Jack April 2012
  $("#event_date_input").datepicker("option",{
    "numberOfMonths" : 3,
    "minDate" : 0,
    "dateFormat": "dd/mm/yy"
  });
  
  
  //search panel logic by Jack April 2012  
  jQuery.fn.reset = function () {
    $(this).each (function() { this.reset(); });
  };
  
  $("#event_name_input").autocomplete({
    source: function( request, response ) {
      
      // ajax query to retrieve name data and send back to autocomplete source by Jack Sep 2011 
      var ajaxQuery = function(){
        jQuery.ajax({
          type: "GET",
          url: "index.php?option=com_eventrumble&controller=ajax&task=getEventName&format=json",
          dataType: "json",
          success: function(jsonResult){
            resultCache["event_name"] = jsonResult;
            response( $.ui.autocomplete.filter(jsonResult, request.term) );
          }
        });
      };
      
      var now = new Date();;
      var nowTime = now.getTime();
      
      // cache the ajax result for 1 minute by Jack Sep 2011 
      if ("event_name" in timeStampCache){
         var elapsedTime = nowTime - timeStampCache["event_name"];
         if (elapsedTime > 60000){
           ajaxQuery();
           timeStampCache["event_name"] = nowTime;
         }
         else{
           if("event_name" in resultCache){
             response( $.ui.autocomplete.filter(resultCache["event_name"], request.term) );
           }else{
             ajaxQuery();
             timeStampCache["event_name"] = nowTime;
           }
         }
      }else{       
        ajaxQuery();
        timeStampCache["event_name"] = nowTime;
      }
    }
  });
  
  $("#event_location_input").autocomplete({
    source: function( request, response ) {
      
      var requestTerm = request.term;
      var requestTermLen = requestTerm.length;
      
      jQuery.ajax({
        type: "GET",
        url: "http://maps.google.com.au/maps/suggest?q="+requestTerm+"&cp="+requestTermLen+"&hl=en&gl=au&v=2&clid=1&ll=-25.335448,135.745076&spn=45.572775,79.013672&callback=?",
        dataType: "json",
        success: function(jsonResult){
          var suggestion = jsonResult.suggestion;
          response( $.map(suggestion, function(item){
            return {
              label: item.query,
              value: item.query
            };
          }));
          //response( $.ui.autocomplete.filter(jsonResult, request.term) );
        }
      });
      
      /*
      $('#event_search_map_canvas').gmap('search', { 'address': request.term, 'region': 'au'}, function(result, status) {
        response( $.map(result, function(item){
            return {
              label: item.formatted_address,
              value: item.formatted_address,
              lat: item.geometry.location.lat(),
              lng: item.geometry.location.lng()
            };
          })
        );
      }        
      );
      */
    },
    minLength: 2
  });
  
  $("#event_search_submit").click(function(event){
    $('#event_search_map_canvas').gmap('addMarker', {'position': '57.7973333,12.0502107' });
    $('#event_search_form').reset();
    return false;
  });  
        
});