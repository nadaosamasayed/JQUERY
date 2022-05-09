$.getJSON("https://reqres.in/api/users/",function(items)
{
$("#myTable").dataTable(
    {
        data: items.data,
        columns:[
     
        { data: 'id' },
        { data: 'first_name' },
        { data: 'last_name' }
        ]
    }
)
})
