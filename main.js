function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateTimeString = now.toLocaleString('tr-TR', options); // Türkçe formatta tarih ve saat
  document.getElementById('current-time-text').innerText = dateTimeString;
}

// Sayfa yüklendiğinde ve her saniye bir kez tarih ve saati güncelle
setInterval(updateDateTime, 1000);
window.onload = updateDateTime;

