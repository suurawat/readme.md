var contoken = "90932970|-31949275478880852|90949389";
var dbname = "school";
var dbrel = "school-Rel";
var createTime=false;
var updateTime=false;
function save_rectoLS(res)
{
    var lvdata=JSON.parse(res.data);
    localStorage.SetItem('recno',lvdata.Roll_no);

}
function Getstudent_Roll_no_AsJsonobj()
{
    var student_Roll_no=$('#Roll_no').val();
    var jsonStr={
        student_Roll_no:Roll_no
    };
    return JSON.stringify(jsonStr);
}
function  filldata(res)
{
    save_rectoLS(res);
    var data=JSON.parse(res.data).record;
    $('#Full_name').val(data.Full_name);
    $('#Class').val(data.Class);
    $('#Birth_date').val(data.Birth_date);
    $('#Address').val(data.Address);
    $('#Enrollment_date').val(data.Enrollment_date);

}
function getemp()
{
    var obj = Getstudent_Roll_no_();
    var getrequest = createGET_BY_KEYRequest(contoken, dbname, dbrel, obj,createTime, updateTime);
    jQuery.ajaxSetup({async: false});
    var res = executeCommandAtGivenBaseUrl(getrequest, "http://api.login2explore.com:5577", "/api/iml");

    jQuery.ajaxSetup({async: true});
    if (res.status === 400)
    {
        $('#submit').prop('disabled', false);

        $('#reset').prop('disabled', false);

    }
    else if (res.status === 200)
    {
        filldata(res);
        $('#change').prop('disabled', false);

        $('#reset').prop('disabled', false);
       $('#Roll_no').focus();
    }



}
function validate_form()
{
    var regBirth_date = /^\d{5}$/;
    var regFull_name = /\d+$/g;
    var ERoll_no, EFull_name, EClass, EBirth_date, EAddress, EEnrollment_date;
    ERoll_no = $('#Roll_no').val();
    EFull_name = $('#Full_name').val();
    EClass = $('#Class').val();
    EBirth_date = $('#Birth_date').val();
    EAddress= $('#Adress').val();
    EEnrollment_date = $('#Enrollment_date').val();
    if (ERoll_no === "" || regRoll_no.test(ERoll_no)) {
        alert("Please enter correct student roll_no ");
        $("#Roll_no").focus();
        return "";
    }
    if (EFull_name === "" || regFull_name.test(EFull_name)) {
        alert("Please enter correct student name ");
        $("#Full_name").focus();
        return "";
    }

    if (EClass=== "" || !regClass.test(EClass)) {
        alert("Enter correct student class");
        $("#Class").focus();
        return "";
    }
    if (EBirth_date=== "" || !regBirth_date.test(EBirth_date)) {
        alert("Enter Birth_date");
        $("#sal").focus();
        return "";
    }
    if (EAddress === "") {
        alert("emter Address");
        $("#Address").focus();
        return "";
    }
    if (EEnrollment_date=== "") {
        alert("enter Enrollment");
        $("#Enrollment_date").focus();
        return "";
    }
    var jsonStrObj = {
        ERoll_no: ERoll_no,
        EFull_name: EFull_name,
        EClass: EClass,
        EBirth_date: EBirth_date,
        EAddress: EAddress,
        EEnrollment_date: EEnrollment_date

    };
    return JSON.stringify(jsonStrObj);

}


function save()
{
    var json_valid = validate_form();
    if (json_valid === '')
        return '';
    var putrequest = createPUTRequest(contoken, json_valid, dbname, dbrel);
    jQuery.ajaxSetup({async: false});
    executeCommandAtGivenBaseUrl(putrequest, "http://api.login2explore.com:5577", "/api/iml");

    jQuery.ajaxSetup({async: true});
    reset();

    alert('Data saved sucessfully');
    $('#Roll_no').focus();
}
function reset()
{
    $('#Roll_no').val("");
    $('#Full_name').val("");
    $('#Class').val("");
    $('#Birth_date').val("");
    $('#Address').val("");
    $('#Enrollment_date').val("");
    $('#submit').prop('disabled', true);
    $('#reset').prop('disabled', true);
    $('#change').prop('disabled', true);
    $('#Roll_no').focus();
}
function change()
{
    $('#change').prop('disabled', true);
    var jsonobj = validate_form();
    var updateRequest = createUPDATERecordRequest(contoken, jsonobj, dbname, dbrel, localStorage.getItem('recno'));
    jQuery.ajaxSetup({async: false});
    var res = executeCommandAtGivenBaseUrl(updateRequest, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    console.log(res);
    reset();

    alert('Data Updated sucessfully');
    $('#Roll_no').focus();
}

function getdata() {
    var rec = $('#Roll_no').val();
    alert(rec);
    var json_valid = validate_form();
     if (json_valid === '')
     return '';
    var getrequest = createGET_RECORDRequest(contoken, dbname, dbrel, rec);
    jQuery.ajaxSetup({async: false});
    var record = executeCommandAtGivenBaseUrl(getrequest, "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({async: true});
    alert(record);
    $('#Roll_no').val(record.Roll_no);
    $('#Full_name').val(record.Full_name);
    $('#Class').val(record.Class);
    $('#Birth_date').val(record.Birth_date);
    $('#Address').val(record.Address);
    $('#Enrollment_date').val(record.Enrollment_date);
    $('#Roll_no').focus();
}