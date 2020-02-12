$("#mytable").bootstrapTable({
    url:'table.json',
    columns: [{
        field: 'id',
    }, {
        field: 'data'
    }, {
        field: 'number'
    },{
        field:'bty'
    }

     ]
})