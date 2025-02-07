    function copyToClipboard() {
      const accountInfo = document.getElementById("account-info").innerText;
      const textarea = document.createElement("textarea");
      textarea.value = accountInfo;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      const successMessage = document.getElementById("copy-success");
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    }
