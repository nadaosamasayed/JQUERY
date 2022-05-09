$("#modal").dialog({
    modal:true,
    autoOpen:false,
    buttons:{
      ok:function()
      {
        var name=$("#name").val()
        $("#appendd").append("Hello in my page"+"  "+name);
      }
    }
}
)
$("#open").click(function()
    {
      $("#modal").dialog("open")
    })
