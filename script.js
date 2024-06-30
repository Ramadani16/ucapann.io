// Function to show the popup
function showPopup(nama) {
    var popup = document.getElementById('popup');
    var popupName = document.getElementById('popup-name');
    var popupImage = document.getElementById('popup-image');
    
    // Set nama pengirim di popup
    popupName.textContent = nama;
    
    // Set foto pengirim di popup (contoh: menggunakan foto default)
    popupImage.src = 'buhe.jpg'; // Ganti dengan URL foto yang sesuai
    
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.transition = 'opacity 0.5s ease'; // Efek transisi opacity selama 0.5 detik
    popup.style.opacity = '0'; // Set opacity menjadi 0
    setTimeout(function() {
        popup.style.display = 'none'; // Setelah transisi selesai, sembunyikan popup
        popup.style.opacity = '1'; // Set opacity kembali ke 1 untuk digunakan lagi
    }, 500); // Timeout 500ms (0.5 detik)
}

// Form submission handler
document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get value from nama input
    var nama = document.getElementById('nama').value;
    
    // Show the popup with nama
    showPopup(nama);
    

    if (effort == '100%'){
        life.getRewards();
    }else {
        throw new TryHarderExpection()
    }
});


