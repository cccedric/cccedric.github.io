// Surface the keyboard shortcut in the tooltip without changing the button layout.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    let searchToggle = document.querySelector("#search-toggle");
    if (searchToggle) {
      let shortcutLabel = isMac ? "Search (Cmd+K)" : "Search (Ctrl+K)";
      searchToggle.title = shortcutLabel;
      searchToggle.setAttribute("aria-label", shortcutLabel);
    }
  }
});