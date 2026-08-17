async function generateAPK() {
    const url = document.getElementById("websiteUrl").value.trim();
    const appName = document.getElementById("appName").value.trim();
    const message = document.getElementById("message");

    if (url === "" || appName === "") {
        message.textContent = "Please enter both Website URL and App Name.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Request bhej rahe hain... kripya wait karein!";
    message.style.color = "blue";

    try {
        const response = await fetch("https://web2apk-backend-ckbp.onrender.com/generate-apk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ webUrl: url, appName: appName })
        });

        const data = await response.json();

        if (data.success) {
            message.textContent = data.message;
            message.style.color = "green";
        } else {
            message.textContent = "Error: " + (data.error || "Kuch dikkat aayi.");
            message.style.color = "red";
        }
    } catch (error) {
        console.error(error);
        message.textContent = "Backend server se connect nahi ho paya!";
        message.style.color = "red";
    }
}
