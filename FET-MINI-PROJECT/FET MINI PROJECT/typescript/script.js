document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        var formData = new FormData(form);
        var formDataObject = {};
        formData.forEach(function (value, key) {
            formDataObject[key] = value;
        });
        var queryString = new URLSearchParams(formDataObject).toString();
        var redirectURL = "destination.html?" + queryString;
        window.location.href = redirectURL;
    });
});
