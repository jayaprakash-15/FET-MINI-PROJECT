class FormHandler 
{
    constructor() 
    {
        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById("myForm") as HTMLFormElement;
            form.addEventListener("submit", (event) => {
                event.preventDefault(); 
                const formData = new FormData(form);
                const formDataObject: any = {};
                formData.forEach((value, key) => {
                    formDataObject[key] = value;
                });
const queryString = new URLSearchParams(formDataObject).toString();
                const redirectURL = "destination.html?" + queryString;
                window.location.href = redirectURL;
            });
        });
    }
}
const formHandler = new FormHandler();
