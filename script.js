function moveButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Calculate random positions within the window
    // We subtract the button width/height so it doesn't go off-screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    const message = document.createElement("div");
message.innerHTML = "YAY! I knew you'd say yes! ❤️";
message.style.cssText = "position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); padding:20px; background:white; border-radius:15px; box-shadow: 0 0 20px rgba(0,0,0,0.2); z-index:1000; font-family: sans-serif; font-weight: bold; color: #d63384;";
document.body.appendChild(message);

// This removes the message if they click anywhere
window.onclick = () => message.remove();
    // You could also redirect to a cute video or change the image here
}
