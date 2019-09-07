$("#ex12c").slider({id: "slider12c", min: 0, max: 10000, range: true, value: [400, 5000]});
let value = $("#ex12c").slider('getValue');
$('#rangeValue').text(`${value[0]} - ${value[1]}`);
$("#ex12c").slider().on('slide', function () {
    let value = $("#ex12c").slider('getValue');
    $('#rangeValue').text(`${value[0]} - ${value[1]}`);
});
