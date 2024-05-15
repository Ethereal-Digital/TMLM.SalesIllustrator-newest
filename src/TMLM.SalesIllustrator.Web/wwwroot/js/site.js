// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var sitename = "https://localhost:7019/";

function failApiResponse(data) {
    if (data.status == 401) {
        alert("Session has been timeout. Please re-login");
        window.close();
        //window.location.href = sitename + "/login?timeout=1";
        return;
    }
    else if (data.status == 400) {
        alert(data.responseJSON);
        return;
    }
}

function showLoader() {
    $('#loader').removeClass('hide')
    $('.page_section>div').css('opacity', '0')
}

function hideloader() {
    $('#loader').addClass('hide')
    $('.page_section>div').css('opacity', '1')
}