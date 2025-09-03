(function () {
    let timer = null;

    function hold(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            if (confirm('Stop stargazing?')) {
                window.location.assign('/');
            }
        }, 400);
    }

    function anull() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    document.addEventListener('pointerdown', hold);
    document.addEventListener('pointerup', anull, { passive: true });
    document.addEventListener('pointercancel', anull, { passive: true });
    document.addEventListener('pointerleave', anull, { passive: true });
})();

setTimeout(() => {
    document.getElementById('text').style.display = 'none';
}, 1500);