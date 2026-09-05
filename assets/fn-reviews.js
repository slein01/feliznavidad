/* fn-reviews — haalt (optioneel) alleen de GEMIDDELDE SCORE + AANTAL live op
   vanuit een JSON-bron (bv. een gratis Featurable-koppeling met je Google
   Bedrijfsprofiel). De 3 reviews op de pagina blijven altijd de handmatige.
   Faalt stil: geen bron of mislukte fetch -> de ingestelde score blijft staan. */
(function () {
  function hydrate(root) {
    var src = root.getAttribute('data-reviews-src');
    if (!src) return;
    var scoreEl = root.querySelector('[data-reviews-score]');
    var countEl = root.querySelector('[data-reviews-count]');
    if (!scoreEl && !countEl) return;

    fetch(src, { headers: { Accept: 'application/json' } })
      .then(function (res) { if (!res.ok) throw new Error(res.status); return res.json(); })
      .then(function (data) {
        var meta = data.meta || data;
        var avg = data.averageRating || data.rating || data.average || meta.averageRating;
        var total = data.totalReviewCount || data.total || data.reviewCount || meta.totalReviewCount ||
          (Array.isArray(data.reviews) ? data.reviews.length : null);
        if (scoreEl && avg != null) {
          scoreEl.textContent = String(Math.round(parseFloat(avg) * 10) / 10).replace('.', ',');
        }
        if (countEl && total != null) {
          countEl.textContent = total + ' beoordelingen op Google';
        }
      })
      .catch(function () { /* stil */ });
  }

  function init() {
    document.querySelectorAll('.fn-reviews[data-reviews-src]').forEach(hydrate);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  document.addEventListener('shopify:section:load', function (e) {
    var r = e.target.querySelector && e.target.querySelector('.fn-reviews[data-reviews-src]');
    if (r) hydrate(r);
  });
})();
