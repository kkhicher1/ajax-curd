//inserting data
$(document).on('click', "#formbtn", function (e) {
    e.preventDefault();
    let data = {
        name: $('#name').val(),
        address: $('#address').val(),
        phone: $('#phone').val()
    }
    $.ajax({
        url: 'insert.php',
        method: "POST",
        data: data,
        success: function (res) {
            $('#name').val('');
            $('#address').val('');
            $('#phone').val('');
            load_data();
        }
    })
});
//Read Data
function load_data() {
    $.ajax({
        url: 'show.php',
        method: "GET",
        success: function (res, status) {
            if (status == "success") {
                $("#table").html(res);
            }
        }
    });


}
load_data();

//edit get data
$(document).on('click', '.edit', function () {
    let id_value = $(this).attr('id');
    $.ajax({
        url: 'edit.php',
        method: "POST",
        data: { id: id_value },
        success: function (res) {
            let data = $.parseJSON(res);
            $('#name').val(data.name);
            $('#address').val(data.address);
            $('#phone').val(data.phone);
            $('#dataid').val(data.id);
            $('#formbtn').text("Update Data").attr('id', "updatebtn").attr('type', '');
        }
    })
});


//update Data
$(document).on('click', "#updatebtn", function (e) {
    e.preventDefault();
    let data = {
        id: $('#dataid').val(),
        name: $('#name').val(),
        address: $('#address').val(),
        phone: $('#phone').val()
    }
    $.ajax({
        url: 'update.php',
        method: "POST",
        data: data,
        success: function (res) {
            $('#name').val('');
            $('#address').val('');
            $('#phone').val('');
            $('#updatebtn').text("Save Data").attr('id', "formbtn").attr('type', 'submit');
            load_data();
        }
    })
});

//delete data
$(document).on('click', '.delete', function () {
    let id_value = $(this).attr('id');
    $.ajax({
        url: 'delete.php',
        method: "POST",
        data: { id: id_value },
        success: function (res, status) {
            if (status == 'success') {
                load_data();
            }
        }
    })
});
