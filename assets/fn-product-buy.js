/* Zet de hoeveelheid-teller in dezelfde container als de koop-knoppen, zodat
   [ − 1 + ] [ In m'n boom ] netjes naast elkaar kan (rij 1) en "Nu kopen"
   eronder over de volle breedte (rij 2). Puur een DOM-verplaatsing;
   listeners en form-koppeling (input heeft form="...") blijven intact. */
(function () {
  function arrange(root) {
    var rows = (root || document).querySelectorAll('.fn-purchase-row');
    rows.forEach(function (row) {
      var qty = row.querySelector('.product-form__quantity');
      var buttons = row.querySelector('.product-form__buttons');
      if (!qty || !buttons) return;
      var submit = buttons.querySelector('.product-form__submit');
      if (qty.parentElement === buttons) return;
      if (submit) {
        buttons.insertBefore(qty, submit);
      } else {
        buttons.prepend(qty);
      }
      row.setAttribute('data-fn-arranged', 'true');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { arrange(); });
  } else {
    arrange();
  }
  document.addEventListener('shopify:section:load', function (e) { arrange(e.target); });
})();
