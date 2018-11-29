tarteaucitron.init({
  "privacyUrl": "/privacy.html", /* Privacy policy url */
  "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
  "cookieName": "tartaucitron", /* Cookie name */
  "orientation": "bottom", /* Banner position (top - bottom) */
  "showAlertSmall": false, /* Show the small banner on bottom right */
  "cookieslist": true, /* Show the cookie list */
  "adblocker": false, /* Show a Warning if an adblocker is detected */
  "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
  "highPrivacy": false, /* Disable auto consent */
  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, accept all */
  "removeCredit": true, /* Remove credit link */
  "moreInfoLink": true, /* Show more info link */
  //"cookieDomain": ".my-multisite-domaine.fr" /* Shared cookie for subdomain */
});
tarteaucitron.user.gtagUa = 'UA-130123645-1';
tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */ };
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');
