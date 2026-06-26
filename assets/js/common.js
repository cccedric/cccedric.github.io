$(document).ready(function () {
  const publicationPanelButtonSelector = "a.award, a.bibtex, a.abstract-toggle, a.video-toggle";
  const publicationPanelSelector = ".award.hidden, .bibtex.hidden, .abstract.hidden, .video.hidden";
  const publicationActiveButtonStyles = {
    backgroundColor: "color-mix(in srgb, var(--global-theme-color) 12%, transparent)",
    borderColor: "color-mix(in srgb, var(--global-theme-color) 20%, transparent)",
    color: "var(--global-theme-color)",
    fontWeight: "600",
  };

  const resetPublicationButtonStyles = (buttons) => {
    buttons.removeClass("is-active").attr("aria-expanded", "false").each(function () {
      this.style.backgroundColor = "";
      this.style.borderColor = "";
      this.style.color = "";
      this.style.fontWeight = "";
    });
  };

  const activatePublicationButtonStyles = (button) => {
    button.addClass("is-active").attr("aria-expanded", "true").css(publicationActiveButtonStyles);
  };

  const togglePublicationPanel = (element, panelClass) => {
    const button = $(element);
    const card = button.closest(".publication-card");
    const panel = card.find(`.${panelClass}.hidden`);
    const isOpening = !panel.hasClass("open");

    card.find(publicationPanelSelector).removeClass("open");
    resetPublicationButtonStyles(card.find(publicationPanelButtonSelector));

    if (isOpening) {
      panel.addClass("open");
      activatePublicationButtonStyles(button);
    }
  };

  // add toggle functionality to abstract, award and bibtex buttons
  $(publicationPanelButtonSelector).attr("aria-expanded", "false");

  $("a.abstract-toggle").click(function (event) {
    event.preventDefault();
    togglePublicationPanel(this, "abstract");
  });
  $("a.video-toggle").click(function (event) {
    event.preventDefault();
    togglePublicationPanel(this, "video");
  });
  $("a.award").click(function (event) {
    event.preventDefault();
    togglePublicationPanel(this, "award");
  });
  $("a.bibtex").click(function (event) {
    event.preventDefault();
    togglePublicationPanel(this, "bibtex");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});