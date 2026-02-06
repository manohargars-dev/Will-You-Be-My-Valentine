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
    alert("YAY! I knew you'd say yes! ❤️");
    // You could also redirect to a cute video or change the image here
}
