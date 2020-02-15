//利用js把json数据渲染到表格中
//需要json文件的url地址和columns的名称
//名称需要和json文件中的名称一样，不然读取不到数据
//可以直接在js中给列名直接取名，也可以在html中取名
$(function () {
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
})

