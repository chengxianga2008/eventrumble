jQuery(document).ready(function($){
  
  // map panel initialization by Jack April 2012
  $('#event_search_map_canvas').width($(window).width()/3);
  $('#event_route_panel').width($(window).width()/3);

  $('#event_search_map_canvas').height($(window).height()/3);  
  $('#event_route_panel').height($(window).height()/4);
  
  
  //add scroll to route by Jack Feb 2012  
  var scrollPane = $("#event_route_panel");
  var scrollContent = $("#event_route_content");
  
  $("#route_slider_wrapper").css("padding-left",($('#event_search_map_canvas').width()-5) +"px");
  $("#route_slider").height($('#event_route_panel').height()-40);
  
  $("#route_slider").slider({  
    orientation: 'vertical' ,
    value: 100,
    slide: function(event, ui) {
      
      if ( scrollContent.height() > scrollPane.height() ) {
        scrollContent.css( "margin-top", Math.round(
          (100 - ui.value) / 100 * ( scrollPane.height() - scrollContent.height() )
        ) + "px" );
      } 
      else{
        scrollContent.css( "margin-top", 0 );
      }
      
    }
  });
  
  
  // google map initialization by Jack April 2012
  $("#event_search_map_canvas").gmap({
    'center': '42.345573,-71.098326',
    'mapTypeControlOptions' : {
      'mapTypeIds' : [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN ]
    }
  
  });
  
  $('#event_search_map_canvas').gmap('search', { 'address': 'Preston'}, function(result, status) {
    $.each(result, function(index, item){
      console.log(item.geometry.bounds.getNorthEast());
      var position = item.geometry.location.lat()+','+item.geometry.location.lng();
      //$('#event_search_map_canvas').gmap('addMarker', {'position': position});
    });
  });
  
 
  $('#event_search_map_canvas').gmap('displayDirections', { 'origin': 'The University of Melbourne, Parkville, VIC ', 'destination': 'North Melbourne, VIC', 'travelMode': google.maps.DirectionsTravelMode.WALKING, "unitSystem": google.maps.UnitSystem.METRIC }, { 'panel': document.getElementById('event_route_content'), 'draggable': true }, function(result, status) {
      if ( status === 'OK' ) {
              
      }
  });
  
  // detecting current location by Jack Apr 2012
  // geolocation service by Jack April 2012
  navigator.geolocation.getCurrentPosition(function(position){
    
    latlng = position.coords.latitude + ',' + position.coords.longitude;
    $('#event_search_map_canvas').gmap('addMarker', {'position': latlng });
    
  });
  
  /*
  $.extend($.ui.gmap.prototype, {
    
    placesSearch: function(a, b) {
      if ( !this.get('services').PlacesService ) {
        this.get('services').PlacesService = new google.maps.places.PlacesService(this.get('map'));
      }
      this.get('services').PlacesService.search(a, b);
    }
    
  });
  */
 
});