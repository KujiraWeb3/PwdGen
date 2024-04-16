function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    
    let password = "";
    
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    let allChars = "";
    
    if (uppercase) {
      allChars += uppercaseChars;
    }
    
    if (lowercase) {
      allChars += lowercaseChars;
    }
    
    if (numbers) {
      allChars += numberChars;
    }
    
    if (symbols) {
      allChars += symbolChars;
    }
    
    if (allChars === "") {
      alert("Please select at least one character type.");
      return;
    }
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    
    document.getElementById("password").value = password;
  }
  
  function copyToClipboard() {
    const password = document.getElementById("password");
    
    if (password.value === "") {
      alert("Please generate a password first.");
      return;
    }
    
    password.select();
    document.execCommand("copy");
    
    alert("Password copied to clipboard!");
  }
  