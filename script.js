(function () {
  const cfg = window.CANYON_STORE_CONFIG || {};
  const fallback = cfg.tebexUrl || "#";
  document.querySelectorAll("[data-tebex]").forEach(el => el.href = fallback);
  document.querySelectorAll("[data-vehicles]").forEach(el => el.href = cfg.vehiclesUrl || fallback);
  document.querySelectorAll("[data-supporters]").forEach(el => el.href = cfg.supportersUrl || fallback);
  document.querySelectorAll("[data-discord]").forEach(el => {
    el.href = cfg.discordUrl || "#";
    if (!cfg.discordUrl || cfg.discordUrl.includes("YOUR-INVITE")) {
      el.addEventListener("click", event => {
        event.preventDefault();
        alert("Add your public Discord invite URL in config.js first.");
      });
    }
  });
  document.querySelectorAll("a[data-tebex], a[data-vehicles], a[data-supporters]").forEach(el => {
    el.addEventListener("click", event => {
      const url = el.href;
      if (!url || url.endsWith("#") || url.includes("YOUR-STORE")) {
        event.preventDefault();
        alert("Add your real public Tebex store/category URL in config.js first.");
      }
    });
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
