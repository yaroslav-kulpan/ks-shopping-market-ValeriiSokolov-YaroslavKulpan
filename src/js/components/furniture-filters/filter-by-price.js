$("#ex12c").slider({id: "slider12c", min: 0, max: 1000, range: true, value: [30, 600]});
let value1 = $("#ex12c").slider('getValue');
$('#rangeValue').text(`$${value1[0]} - ${value1[1]}`);
$("#ex12c").slider().on('slide', function () {
    let value1 = $("#ex12c").slider('getValue');
    $('#rangeValue').text(`$${value1[0]} - ${value1[1]}`);
});

$("#ex12b").slider({id: "slider12b", min: 0, max: 1000, range: true, value: [30, 600]});
let value2 = $("#ex12b").slider('getValue');
$('#rangeValueModal').text(`$${value2[0]} - ${value2[1]}`);
$("#ex12b").slider().on('slide', function () {
    let value2 = $("#ex12b").slider('getValue');
    $('#rangeValueModal').text(`$${value2[0]} - ${value2[1]}`);
});

