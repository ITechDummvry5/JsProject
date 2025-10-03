

  function generateQR() {
    const qrText = document.getElementById("qrText").value.trim();
    const qrImage = document.getElementById("qrImage");
    const qrPlaceholder = document.getElementById("qrPlaceholder");

    if (!qrText) {
      alert("Please enter text!");
      return;
    }

    // Show QR image and hide placeholder
    qrPlaceholder.style.display = "none";
    qrImage.style.display = "block";

    // Load QR code from API
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;
  }
