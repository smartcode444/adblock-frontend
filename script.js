// Single deliberate effect: the header picks up a slightly stronger
// shadow once the page has scrolled, so it reads as "above" the content.
const header = document.querySelector('.site-header');

// Set this to your Google Analytics 4 Measurement ID, for example "G-ABC1234567".
// Leave it blank to disable analytics.
const analyticsMeasurementId = 'G-8DNSRJP0HJ';

function loadAnalytics() {
  if (!analyticsMeasurementId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', analyticsMeasurementId, { anonymize_ip: true });
}

function trackEvent(eventName, eventParams = {}) {
  if (typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, eventParams);
}

function updateHeaderState() {
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 1px 0 rgba(22, 23, 26, 0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
}

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

loadAnalytics();

const downloadButton = document.querySelector('a[download]');

if (downloadButton) {
  downloadButton.addEventListener('click', () => {
    trackEvent('download_apk', {
      file_name: 'adblock.apk',
      link_url: downloadButton.href,
    });
  });
}
