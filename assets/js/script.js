function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("messager").value,

    };
    const serviceID = "service_r5uhffb";
    const templateID = "template_wk5o7a6";
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("messager").value = "";
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch((err) => console.log(err));
}