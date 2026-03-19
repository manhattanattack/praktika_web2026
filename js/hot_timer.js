function startTimer() {
    if (!localStorage.getItem('timerEnd')) {
        localStorage.setItem('timerEnd', Date.now() + 3 * 24 * 60 * 60 * 1000);
    }
    setInterval(() => {
        let diff = Number(localStorage.getItem('timerEnd') - Date.now());
        if (diff <= 0) {
            localStorage.setItem('timerEnd', Date.now() + 3 * 24 * 60 * 60 * 1000);        
            diff = 3 * 24 * 60 * 60 * 1000;
        }
        document.getElementById('days').textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
        document.getElementById('hours').textContent = String(Math.floor(diff % 86400000 / 3600000)).padStart(2, '0');
        document.getElementById('minutes').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        document.getElementById('seconds').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

    }, 1000);
}
startTimer();
 