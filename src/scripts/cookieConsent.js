// Cookie Consent Management
const CONSENT_KEY = 'saveinn_cookie_consent';

export function initCookieConsent() {
  // Check if user has already made a choice
  const savedConsent = localStorage.getItem(CONSENT_KEY);

  if (savedConsent) {
    // User has already consented, don't show popup
    return;
  }

  // Show cookie popup
  const popup = document.getElementById('cookie-consent-popup');
  if (popup) {
    popup.classList.add('active');
  }

  // Setup event listeners
  setupConsentButtons();
}

function setupConsentButtons() {
  const acceptAllBtn = document.getElementById('accept-all-cookies');
  const declineOptionalBtn = document.getElementById('decline-optional-cookies');
  const saveSelectionBtn = document.getElementById('save-cookie-selection');

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener('click', () => {
      saveConsent({
        hasConsented: true,
        essentiell: true,
        funktional: true,
        statistikMarketing: true,
        timestamp: new Date().toISOString()
      });
      hidePopup();
    });
  }

  if (declineOptionalBtn) {
    declineOptionalBtn.addEventListener('click', () => {
      saveConsent({
        hasConsented: true,
        essentiell: true,
        funktional: false,
        statistikMarketing: false,
        timestamp: new Date().toISOString()
      });
      hidePopup();
    });
  }

  if (saveSelectionBtn) {
    saveSelectionBtn.addEventListener('click', () => {
      const funktional = document.getElementById('cookie-funktional')?.checked || false;
      const statistikMarketing = document.getElementById('cookie-statistik')?.checked || false;

      saveConsent({
        hasConsented: true,
        essentiell: true,
        funktional,
        statistikMarketing,
        timestamp: new Date().toISOString()
      });
      hidePopup();
    });
  }
}

function saveConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  console.log('Cookie consent saved:', consent);
}

function hidePopup() {
  const popup = document.getElementById('cookie-consent-popup');
  if (popup) {
    popup.classList.remove('active');
  }
}

// Initialize on DOM load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
  } else {
    initCookieConsent();
  }
}
