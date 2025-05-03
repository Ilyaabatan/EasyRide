const form = document.getElementById("booking-form");
if(form){
    form.addEventListener("submit", (e) =>{
        e.preventDefault(); // Prevent the default form submission
        
        alert("Booking request submitted successfully!");
});
}

