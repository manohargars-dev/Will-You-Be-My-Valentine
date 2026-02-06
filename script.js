const yesBtn = document.getElementById("yesBtn"); (Note: No dot, and it uses getElementById);

yesBtn.addEventListener("click", () => {
  // Create the custom pop-up box
  const modal = document.createElement("div");
  
  // Design the box (No URL header!)
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    text-align: center;
    z-index: 1000;
    font-family: 'Arial', sans-serif;
  `;

  // Add your custom message and a close button
  modal.innerHTML = `
    <h2 style="color: #ff4d6d; margin-bottom: 20px;">YAY! I knew you'd say yes my love! ❤️</h2>
    <button id="closeModal" style="background: #ff4d6d; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer;">Close</button>
  `;

  document.body.appendChild(modal);

  // Make the close button work
  document.getElementById("closeModal").onclick = () => modal.remove();
});
