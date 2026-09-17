/* ============================================
   Contact.js — Form validation
   ============================================ */

(function () {
  "use strict";

  var form = document.querySelector("#contact-form");
  if (!form) return;

  var fields = Array.from(form.querySelectorAll("input, textarea"));

  function showError(field, message) {
    var errorEl = form.querySelector("#" + field.id + "-error");
    field.setAttribute("aria-invalid", "true");
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(field) {
    var errorEl = form.querySelector("#" + field.id + "-error");
    field.removeAttribute("aria-invalid");
    if (errorEl) errorEl.textContent = "";
  }

  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      clearError(field);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var status = form.querySelector(".form-status");
    var valid = true;

    fields.forEach(function (field) {
      var value = field.value.trim();

      if (field.required && !value) {
        showError(field, "This field is required.");
        valid = false;
      } else if (field.type === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) {
        showError(field, "Enter a valid email address.");
        valid = false;
      } else if (field.minLength > 0 && value.length < field.minLength) {
        showError(field, "Use at least " + field.minLength + " characters.");
        valid = false;
      }
    });

    if (!valid) {
      if (status) {
        status.textContent = "Please review the highlighted fields.";
        status.className = "form-status is-error";
      }
      return;
    }

    if (status) {
      status.textContent = "Message sent successfully. We will be in touch soon.";
      status.className = "form-status is-success";
    }
    form.reset();
  });
})();
