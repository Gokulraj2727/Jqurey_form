$('#submit').on('click', function (e) {
    e.preventDefault();



    var firstName = $('#fullname').val();

    var email = $.trim($('#email').val());
    var mobile = $.trim($('#mbno').val());
    var country = $.trim($('#select1').val());
    var state = $.trim($('#select2').val());
    var district = $.trim($('#select3').val());

    var numRows = $('#table').find('tr').length;
    var newRow = $('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td><button id = "dtl"class="btn btn-danger" onclick="onDelete()">Delete</button></td></tr>');
    var cols = newRow.children();
    cols.eq(0).text(numRows + 0);
    cols.eq(1).text(firstName);
    cols.eq(2).text(email);
    cols.eq(3).text(mobile);
    cols.eq(4).text(country);
    cols.eq(5).text(state);
    cols.eq(6).text(district);
    newRow.appendTo('#table');
});

// Delete
function onDelete() {
    if (confirm("Do you want delete"))
        $("#table").remove();
}
// name validation  

$("#fullname").keypress((a) => {

    var textCode = a.textCode ? a.textCode : a.which;

    if (
        !(textCode < 48 || textCode > 57)) { return false }
    else {
        return true;
    }

})
// mobile validation

$("#mbno").keypress((e) => {
    if (e.which < 48 || e.which > 58) { return false }
    else { return true }
})
// email valiadtion 
function ename() {
    var email1 = document.getElementById('email').value;
    var mailrex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email1.match(mailrex)) {
        return true;
    }
    else {


        return false;

    }


}
  


