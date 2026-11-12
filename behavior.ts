export default String.raw`(function () {
  if (window.__jmBound) return; window.__jmBound = true;
  var root = document;
  var jm = root.querySelector(".jm"); if (jm) jm.classList.add("js");
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal on scroll
  var els = root.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }

  // Counters
  function runCount(el) {
    var end = parseFloat(el.getAttribute("data-count")), suf = el.getAttribute("data-suf") || "", pre = el.getAttribute("data-pre") || "";
    if (reduce) { el.textContent = pre + end + suf; return; }
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1400, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = pre + v + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var cs = root.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (x) { if (x.isIntersecting) { runCount(x.target); io2.unobserve(x.target); } });
    }, { threshold: 0.6 });
    cs.forEach(function (c) { io2.observe(c); });
  }

  // Tabs
  root.querySelectorAll("[data-tabs]").forEach(function (box) {
    var tabs = box.querySelectorAll("[data-tab]"), panels = box.querySelectorAll("[data-panel]");
    tabs.forEach(function (t, i) {
      t.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") n = 0;
        else if (e.key === "End") n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); tabs[n].focus(); tabs[n].click(); }
      });
      t.addEventListener("click", function () {
        var k = t.getAttribute("data-tab");
        tabs.forEach(function (x) { var on = x === t; x.classList.toggle("active", on); x.setAttribute("aria-selected", on ? "true" : "false"); x.setAttribute("tabindex", on ? "0" : "-1"); });
        panels.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === k); });
        box.setAttribute("data-active", k);
      });
    });
  });

  // FAQ
  function faqSet(q, open) {
    var btn = q.querySelector("button"), pn = q.querySelector(".a");
    q.classList.toggle("open", open); btn.setAttribute("aria-expanded", open ? "true" : "false"); btn.lastChild.textContent = open ? "\u2212" : "+";
    if (pn) { if (open) pn.removeAttribute("inert"); else pn.setAttribute("inert", ""); }
  }
  root.querySelectorAll(".q").forEach(function (q) {
    faqSet(q, false);
    q.querySelector("button").addEventListener("click", function () {
      var o = q.classList.contains("open");
      root.querySelectorAll(".q.open").forEach(function (x) { faqSet(x, false); });
      if (!o) faqSet(q, true);
    });
  });

  // Mobile menu
  var mb = root.querySelector(".menu"), nv = root.querySelector(".nav");
  if (mb && nv) {
    mb.addEventListener("click", function () {
      var o = nv.classList.toggle("open"); mb.setAttribute("aria-expanded", o ? "true" : "false");
    });
    nv.querySelectorAll(".navlinks a").forEach(function (a) {
      a.addEventListener("click", function () { nv.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); });
    });
    root.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nv.classList.contains("open")) { nv.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); mb.focus(); }
    });
  }

  // Scroll progress + nav shadow
  var bar = root.querySelector(".progress"), nav = root.querySelector(".nav");
  function onScroll() {
    var h = root.documentElement, max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    if (nav) nav.classList.toggle("scrolled", h.scrollTop > 320);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Hero glow follows pointer
  var hero = root.querySelector(".hero-wrap");
  if (hero && !reduce) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      hero.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  }

  // Rotating hero phrase
  var rot = root.querySelector(".rot");
  if (rot && !reduce) {
    var words = (rot.getAttribute("data-words") || "").split("|"), wi = 0;
    if (words.length > 1) setInterval(function () {
      if (root.hidden) return;
      rot.classList.add("out");
      setTimeout(function () { wi = (wi + 1) % words.length; rot.textContent = words[wi]; rot.classList.remove("out"); }, 380);
    }, 3600);
  }

  // Funnel calculator
  var fb = root.querySelector("[data-funnel]");
  if (fb) {
    var nf = function (n, d) { return n.toLocaleString("es-AR", { maximumFractionDigits: d }); };
    var g = function (id) { var v = parseFloat(fb.querySelector("#" + id).value); return isNaN(v) ? 0 : v; };
    var set = function (id, t) { var e = fb.querySelector("#" + id); if (e) e.textContent = t; };
    var calc = function () {
      var v = g("f-visits"), l = g("f-leads"), o = g("f-opps"), s = g("f-sales"), sp = g("f-spend");
      var ins = fb.querySelector("#o-insight");
      var rates = [[l, v], [o, l], [s, o]];
      rates.forEach(function (r, i) {
        var pct = r[1] > 0 ? r[0] / r[1] * 100 : 0;
        set("o-r" + (i + 1), r[1] > 0 ? nf(pct, 1) + "%" : "–");
        var bar = fb.querySelector("#b-r" + (i + 1)); if (bar) bar.style.width = Math.min(pct, 100) + "%";
      });
      set("o-cpl", sp > 0 && l > 0 ? nf(sp / l, 0) : "–");
      set("o-cac", sp > 0 && s > 0 ? nf(sp / s, 0) : "–");
      set("o-all", v > 0 ? nf(s / v * 100, 2) + "%" : "–");
      if (!(v > 0 && l > 0 && o > 0 && s > 0)) ins.textContent = "Completá las cuatro etapas para ver el resultado.";
      else if (l > v || o > l || s > o) ins.textContent = "Revisá los números: una etapa tiene más resultados que la anterior.";
      else ins.textContent = "Mejorar una sola etapa un 10% llevaría tus ventas de " + nf(s, 1) + " a " + nf(s * 1.1, 1) + " por mes. Cuál conviene mejorar primero depende de cuánto cuesta y qué tan fácil es cada una, y eso es lo que se revisa en el diagnóstico.";
    };
    fb.querySelectorAll("input").forEach(function (i) { i.addEventListener("input", calc); });
  }

  // Copy email
  root.querySelectorAll("[data-copy]").forEach(function (btn) {
    var label = btn.textContent;
    btn.addEventListener("click", function () {
      var done = function (ok) { btn.textContent = ok ? "¡Copiado!" : "Seleccioná y copiá el mail de abajo"; setTimeout(function () { btn.textContent = label; }, 2200); };
      try { navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () { done(true); }, function () { done(false); }); }
      catch (e) { done(false); }
    });
  });

  // Sticky CTA: visible after the hero, hidden near the contact section; on mobile only when scrolling up
  var sc = root.querySelector(".sticky-cta"), ct = root.querySelector("#contacto"), hw = root.querySelector(".hero"), lastY = window.scrollY, up = true;
  function stickyUpdate() {
    if (!sc) return;
    var y = window.scrollY, hh = hw ? hw.offsetHeight : 600, near = false;
    if (Math.abs(y - lastY) > 6) { up = y < lastY; lastY = y; }
    [ct, root.querySelector("#embudo"), root.querySelector(".final")].forEach(function (el) {
      if (!el) return; var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.8 && r.bottom > window.innerHeight * 0.2) near = true;
    });
    var mobile = window.matchMedia("(max-width:900px)").matches;
    sc.classList.toggle("show", y > hh * 0.8 && !near && (!mobile || up));
  }
  window.addEventListener("scroll", stickyUpdate, { passive: true }); stickyUpdate();

  // Global motion toggle (ticker + carousel)
  root.querySelectorAll("[data-motion]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var s = jm.classList.toggle("still");
      btn.setAttribute("aria-pressed", s ? "true" : "false");
      btn.textContent = s ? "Reanudar animaciones" : "Pausar animaciones";
    });
  });

  // Recommendation reader dialog
  var dlg = root.querySelector(".rdlg"), data = root.querySelector("#rec-data");
  if (dlg && data && typeof dlg.showModal === "function") {
    var arts = Array.prototype.slice.call(data.querySelectorAll("[data-rec]")), rpos = 0, opener = null, recsBox = root.querySelector("[data-recs]"), wasPaused = false;
    var $ = function (id) { return dlg.querySelector(id); };
    var show = function (pos) {
      rpos = (pos + arts.length) % arts.length; var a = arts[rpos];
      $("#rdlg-g").textContent = a.getAttribute("data-group");
      $("#rdlg-t").textContent = a.getAttribute("data-name");
      $("#rdlg-role").textContent = a.getAttribute("data-role");
      $("#rdlg-rel").textContent = a.getAttribute("data-rel");
      var body = $("#rdlg-body"); body.innerHTML = a.innerHTML;
      var lg = a.getAttribute("lang"); if (lg) body.setAttribute("lang", lg); else body.removeAttribute("lang");
      $("#rdlg-n").textContent = (rpos + 1) + " / " + arts.length;
    };
    root.querySelectorAll("[data-open]").forEach(function (bt) {
      bt.addEventListener("click", function () {
        var idx = parseInt(bt.getAttribute("data-open"), 10), pos = 0;
        arts.forEach(function (a, k) { if (parseInt(a.getAttribute("data-rec"), 10) === idx) pos = k; });
        opener = bt; show(pos);
        if (recsBox) { wasPaused = recsBox.classList.contains("paused"); recsBox.classList.add("paused"); }
        dlg.showModal();
      });
    });
    dlg.querySelector("[data-rdlg-close]").addEventListener("click", function () { dlg.close(); });
    dlg.querySelector("[data-rdlg-prev]").addEventListener("click", function () { show(rpos - 1); });
    dlg.querySelector("[data-rdlg-next]").addEventListener("click", function () { show(rpos + 1); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(rpos - 1); else if (e.key === "ArrowRight") show(rpos + 1);
    });
    dlg.addEventListener("close", function () {
      if (recsBox && !wasPaused) recsBox.classList.remove("paused");
      if (opener) opener.focus();
    });
  } else {
    root.querySelectorAll("[data-open]").forEach(function (bt) { bt.disabled = true; });
  }

  // Recommendations carousel: pause / resume button
  root.querySelectorAll("[data-recs-toggle]").forEach(function (btn) {
    var box = root.querySelector("[data-recs]");
    if (!box) return;
    btn.addEventListener("click", function () {
      var p = box.classList.toggle("paused");
      btn.setAttribute("aria-pressed", p ? "true" : "false");
      btn.textContent = p ? "Reanudar movimiento" : "Pausar movimiento";
    });
  });

  // Fecha y número de edición
  var td = root.querySelector("[data-today]"), dy = root.querySelector("[data-doy]");
  var now = new Date();
  if (td) { try { td.textContent = now.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }); } catch (e) {} }
  if (dy) { dy.textContent = String(Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000)); }

  // Índice lateral: marca la sección visible
  var railLinks = root.querySelectorAll("[data-rail]");
  if (railLinks.length && "IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (x) {
        if (x.isIntersecting) {
          railLinks.forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-rail") === x.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    railLinks.forEach(function (a) { var s = root.getElementById(a.getAttribute("data-rail")); if (s) ro.observe(s); });
  }

  // Método: la línea se llena al scrollear y se enciende cada paso
  var stepsBox = root.querySelector("[data-steps]");
  if (stepsBox) {
    var stepEls = stepsBox.querySelectorAll(".step");
    var fill = function () {
      var r = stepsBox.getBoundingClientRect(), mid = window.innerHeight * 0.55;
      var p = Math.max(0, Math.min(1, (mid - r.top) / Math.max(r.height - 60, 1)));
      stepsBox.style.setProperty("--p", p.toFixed(3));
      stepEls.forEach(function (s) { s.classList.toggle("on", s.getBoundingClientRect().top < mid); });
    };
    window.addEventListener("scroll", fill, { passive: true }); fill();
  }

  // Cursor propio (solo con mouse)
  if (!reduce && window.matchMedia && matchMedia("(hover: hover) and (pointer: fine)").matches && jm) {
    var cur = root.createElement("div"); cur.className = "cur"; cur.setAttribute("aria-hidden", "true"); jm.appendChild(cur);
    window.addEventListener("pointermove", function (e) {
      cur.classList.add("on");
      cur.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
      var t = e.target && e.target.closest ? e.target.closest("a,button,input,.rcard,.tab,.photo") : null;
      cur.classList.toggle("big", !!t);
    }, { passive: true });
    root.addEventListener("pointerleave", function () { cur.classList.remove("on"); });
  }

  // Hero portrait tilt
  var po = root.querySelector(".hero .portrait");
  if (po && !reduce && window.matchMedia && matchMedia("(hover: hover)").matches) {
    po.addEventListener("pointermove", function (e) {
      var r = po.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - 0.5, dy = (e.clientY - r.top) / r.height - 0.5;
      po.style.transform = "perspective(900px) rotateY(" + (dx * 7) + "deg) rotateX(" + (-dy * 7) + "deg)";
    });
    po.addEventListener("pointerleave", function () { po.style.transform = ""; });
  }

  // Formulario de inscripcion: arma el mensaje y abre WhatsApp (o mail)
  root.querySelectorAll("form[data-lead]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = f.querySelector("[data-lead-msg]");
      if (!f.checkValidity()) { if (msg) { msg.className = "form-msg err"; msg.textContent = "Revisá los campos marcados antes de enviar."; } f.reportValidity(); return; }
      var v = function (n) { var el = f.elements[n]; return el && el.value ? el.value.trim() : "-"; };
      var t = "Hola Juan Manuel, quiero reservar mi lugar en el workshop de Rio Gallegos.\n\n" +
        "Nombre: " + v("nombre") + "\nWhatsApp: " + v("whatsapp") + "\nMail: " + v("mail") + "\nCiudad: " + v("ciudad") +
        "\nNegocio y rubro: " + v("negocio") + "\nInversion en publicidad: " + v("inversion") + "\nQuiero resolver: " + v("objetivo");
      var wa = (f.getAttribute("data-wa") || "").replace(/[^0-9]/g, ""), mail = f.getAttribute("data-mail");
      var url = wa ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(t) : "mailto:" + mail + "?subject=" + encodeURIComponent("Workshop Rio Gallegos") + "&body=" + encodeURIComponent(t);
      if (msg) { msg.className = "form-msg"; msg.textContent = wa ? "Se abre WhatsApp con tus datos. Enviá el mensaje para terminar la reserva." : "Se abre tu correo con tus datos. Enviá el mensaje para terminar la reserva."; }
      window.open(url, "_blank", "noopener");
    });
  });
})();
`;
