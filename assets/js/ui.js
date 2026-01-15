let TSNuxUI = {
  "window": new Function(fetch(url("/TSNux/assets/js/ui/window.js")).text)
}
TSNuxUI = {
  "window": TSNuxUI.window()
}
