
    document.getElementById("signupForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);

      const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role")
      };

      fetch("https://fatuma.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to sign up");
        }
        return response.json();
      })
      .then(data => {
        alert("✅ Sign-up successful!");
        window.location.href = "/signIn.html"; 
      })
      .catch(error => {
        alert("❌ Error: " + error.message);
        console.error("Error:", error);
      });
    });
  
