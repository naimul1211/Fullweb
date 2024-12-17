
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '20%';
    popup.style.left = '30%';
    popup.style.width = '40%';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000';
    popup.innerHTML = '<h2>Special Offer!</h2><p>Get 20% off your first order!</p><button id="closePopup">Close</button>';
    document.body.appendChild(popup);

    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});
