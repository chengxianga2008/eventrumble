jQuery(document).ready(function($){
  
  // active button hovering bug fixes by Jack April 2012
  $(".icon_button_effect").hover(function(){
    if($(this).hasClass("icon_button_no_active")){
      $(this).css({
        "color": "#999999",
        "padding-left": "7px",
        "padding-top": "11px"
      });
    }
    else{
      $(this).css({
        "color": "#555555",
        "padding-left": "6px",
        "padding-top": "10px"
      });
    }
    
  },function(){
    if($(this).hasClass("icon_button_no_active")){
      $(this).css({
        "color": "#555555",
        "padding-left": "6px",
        "padding-top": "10px"
      });
    }
    else{
      $(this).css({
        "color": "#999999",
        "padding-left": "7px",
        "padding-top": "11px"
      });
    }
    
  });

  //calendar button click event handler by Jack April 2012
  $("#calendarNavButton").click(function(event){
    
    if($('#top-right_popup').hasClass("display_none")){
      
      $("#calendarNavButton .icon_button").removeClass("icon_button_no_active");
      $("#calendarNavButton .icon_button").addClass("icon_button_active");
      $('#top-right_popup').removeClass("display_none");
      
    }
    else{
      $('#top-right_popup').addClass("display_none");
      $("#calendarNavButton .icon_button").removeClass("icon_button_active");
      $("#calendarNavButton .icon_button").addClass("icon_button_no_active");
    }
           
       
  });
  
  
  // map button click event handler by Jack April 2012
  $("#mapNavButton").click(function(event){
    
    if($('#bottom-right_popup').hasClass("display_none")){
      
      $("#mapNavButton .icon_button").removeClass("icon_button_no_active");
      $("#mapNavButton .icon_button").addClass("icon_button_active");
      $('#bottom-right_popup').removeClass("display_none");
      $('#event_search_map_canvas').gmap('refresh');
      
    }
    else{
      $('#bottom-right_popup').addClass("display_none");
      $("#mapNavButton .icon_button").removeClass("icon_button_active");
      $("#mapNavButton .icon_button").addClass("icon_button_no_active");
    }
           
       
  });
  
  
  $("#bottom-right_sidebar_hide").click(function(event){
    
    $('#bottom-right_popup').addClass("display_none");
  
  });
  
  
});