
    document.getElementById("signinForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const email = this.email.value;
      const password = this.password.value;

      fetch("https://fatuma.onrender.com/users?email=" + email)
        .then(response => response.json())
        .then(users => {
          if (users.length === 0) {
            alert("❌ Email not found");
            return;
          }

          const user = users[0];

          if (user.password === password) {
            alert("✅ Login successful!");
            localStorage.setItem("loggedInUser", JSON.stringify(user)); 
           window.location.href = "/Dashboard.html"; 
          } else {
            alert("❌ Incorrect password");
          }
        })
      
      

        .catch(error => {
          console.error("Error:", error);
          alert("❌ Something went wrong. Try again.");
        });
    });

    
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("You're not logged in.");
      window.location.href = "signIn.html";
    } else {
      document.getElementById("welcomeMessage").textContent = `Welcome, ${user.name}!`;

      const role = user.role.toLowerCase();

      if (role === "admin") {
        document.getElementById("adminSection").style.display = "block";
      } else if (role === "student") {
        document.getElementById("studentSection").style.display = "block";
      } else if (role === "teacher") {
        document.getElementById("teacherSection").style.display = "block";
      } else if (role === "class" || role === "classes") {
        document.getElementById("classSection").style.display = "block";
      } else {
        alert("Unknown role. No dashboard available.");
      }
    }


  
