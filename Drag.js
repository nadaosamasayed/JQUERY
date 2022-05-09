$(".drag").draggable({
    revert:"invalid"
     });

 $("#one").droppable({
     accept:"#d1",
     drop:function()
     {
        
         $(this).css("background-color","black")
     }
     
 });


    