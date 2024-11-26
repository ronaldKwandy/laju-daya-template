function sendMessage() {
    Toastify({
        text: "Message sent!",
        duration: 3000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "gray",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}