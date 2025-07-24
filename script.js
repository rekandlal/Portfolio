// make the date/time dynamic : logic here
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    dateStyle: 'short',
    timeStyle: 'medium',
  });
  document.getElementById('datetime').textContent = formatted;
}

updateDateTime();

setInterval(updateDateTime, 1000);
