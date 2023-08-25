class UI{
    static showAlert(message,className) {
        const alertContainer = document.querySelector('.msgDiv')
        const alertDiv = document.createElement('div')
        alertDiv.classList.add('alert', className, 'mb-3')
        alertDiv.textContent = message
        alertContainer.appendChild(alertDiv)

        setTimeout(() => {
            alertDiv.remove()
        }, 3000)
    }
}
document.addEventListener("DOMContentLoaded", (event) => {
    let form = document.querySelector('form')
    let button = document.querySelector('button')
    let msgDiv = document.getElementsByClassName("msgDiv")
    
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedOption = document.querySelector('input[name="option"]:checked').value;
        let txtInput = document.getElementById("expression").value;
        if (selectedOption === "Email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            const isValid = emailRegex.test(txtInput);
            if(isValid){
                UI.showAlert(`Is valid email`,'alert-success')
            }else{
                UI.showAlert(`Is not valid email`,'alert-danger')
            }
            document.getElementById("expression").value = ''
        }else if (selectedOption === "Phone") {
            const phoneRegex = /^01\d{9}$/
            const altPhoneRegex = /^8801\d{9}$/
            const altPhoneRegex1 = /^\+8801\d{9}$/
            const isValid = phoneRegex.test(txtInput) || altPhoneRegex.test(txtInput) || altPhoneRegex1.test(txtInput)
            if(isValid){
                UI.showAlert(`Is valid Phone`,'alert-success')
            }else{
                UI.showAlert(`Is not valid Phone`,'alert-danger')
            }
            document.getElementById("expression").value = ''
        }else if (selectedOption === "Postcode") {
            const postcodeRegex = /^\d{4}$/
            const isValid = postcodeRegex.test(txtInput)
            if(isValid){
                UI.showAlert(`Is valid Postcode`,'alert-success')
            }else{
                UI.showAlert(`Is not valid Postcode`,'alert-danger')
            }
            document.getElementById("expression").value = ''
        }
    });
});