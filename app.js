let deferredPrompt;

// Install prompt capture karna
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    // Install prompt 3 second ke baad automatically show hoga
    setTimeout(() => {
        deferredPrompt.prompt();
    }, 3000);

    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User ne app install kar li');
        } else {
            console.log('User ne install ko cancel kar diya');
        }
        deferredPrompt = null;
    });
});
