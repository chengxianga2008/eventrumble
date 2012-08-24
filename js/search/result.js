jQuery(document).ready(function($){
  //event result panel initialization by Jack April 2012
  $("#eventResultLeftArrow").hover(function(){
    $("#eventResultLeftArrow").addClass("ui-state-hover");
    $("#eventResultLeftArrow").removeClass("arrowMargin");
  },function(){
    $("#eventResultLeftArrow").addClass("arrowMargin");
    $("#eventResultLeftArrow").removeClass("ui-state-hover");
  });
  
  $("#eventResultRightArrow").hover(function(){
    $("#eventResultRightArrow").addClass("ui-state-hover");
    $("#eventResultRightArrow").removeClass("arrowMargin");
  },function(){
    $("#eventResultRightArrow").addClass("arrowMargin");
    $("#eventResultRightArrow").removeClass("ui-state-hover");
  });
  
  var i;
  for (i=0;i<24;i++){
    $("<div/>").attr("id","scrollHeadingItem"+i).addClass("scrollHeadingItem").appendTo("#scrollHeadingContainer");
    $("<span/>").text(i).appendTo("#scrollHeadingItem"+i);
    
  }
  
});