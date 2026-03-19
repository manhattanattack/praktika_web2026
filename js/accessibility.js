function toggleAccessibility() {
    document.body.classList.toggle('accessible');
    if (document.body.classList.contains('accessible')) {
        localStorage.setItem('accessible', 'true');
    } else {
        localStorage.removeItem('accessible');
    }
}

if (localStorage.getItem('accessible') === 'true') {
    document.body.classList.add('accessible');
}
