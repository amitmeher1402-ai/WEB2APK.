function generateAPK() {
    const url = document.getElementById("websiteUrl").value.trim();
    const appName = document.getElementById("appName").value.trim();
    const message = document.getElementById("message");

    if (url === "") {
        message.textContent = "Please enter a website URL.";
        return;
    }

    if (!url.startsWith("https://")) {
        message.textContent = "Please enter a valid HTTPS URL.";
        return;
    }

    if (appName === "") {
        message.textContent = "Please enter an app name.";
        return;
    }

    message.textContent = "✅ Details are valid. APK generation will start soon...";
}