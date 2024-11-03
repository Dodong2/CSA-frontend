  //PWA service worker
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', () => {
  //     navigator.serviceWorker.register('/src/service-worker.js')
  //       .then((registration) => {
  //         console.log('ServiceWorker registration successful with scope: ', registration.scope);
  //       })
  //       .catch((error) => {
  //         console.error('ServiceWorker registration failed: ', error);
  //       });
  //   });
  // }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }