/* ============================================
   Products.js — Filters & product modal
   ============================================ */

(function () {
  "use strict";

  var modal = document.querySelector("#product-modal");
  var modalTitle = document.querySelector("#modal-title");
  var modalCopy = document.querySelector("#modal-copy");

  var productData = {
    pos: ["Nexora POS", "Track sales, inventory, customers, and reports from a single point-of-sale workspace."],
    crm: ["Nexora CRM", "Keep customer information, sales activity, and communication organized for the whole team."],
    cloud: ["Nexora Cloud", "Store, share, and manage important business files with secure access from anywhere."],
    learn: ["Nexora Learn", "Give learners a focused home for courses, video lessons, quizzes, and progress."]
  };

  /* --- Filter --- */

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;

      document.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });

      document.querySelectorAll(".product-detail").forEach(function (card) {
        var isHidden = filter !== "all" && card.dataset.category !== filter;
        card.classList.toggle("is-hidden", isHidden);
        card.hidden = isHidden;
      });
    });
  });

  /* --- Modal open --- */

  document.querySelectorAll(".product-open").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var data = productData[btn.dataset.product];
      if (!data || !modal || !modalTitle || !modalCopy) return;

      modalTitle.textContent = data[0];
      modalCopy.textContent = data[1];
      modal.showModal();
    });
  });

  /* --- Modal close --- */

  var closeBtn = document.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) modal.close();
    });
  }
})();