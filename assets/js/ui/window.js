function createWindow(options) {
  const win = document.createElement('div');
  win.className = 'tsnux-window';
  win.style.cssText = `
    position: fixed;
    left: ${options.left || '100px'};
    top: ${options.top || '100px'};
    width: ${options.width || '300px'};
    height: ${options.height || '200px'};
    background: var(--window-bg);
    border: 1px solid var(--border-color);
    padding: 5px;
  `;
  win.innerHTML = `
    <div class="window-title">${options.title || 'Окно'}</div>
    <div class="window-content">${options.content || ''}</div>
  `;
  document.body.appendChild(win);
  return win;
}
export default {
  create: TSNuxUiWndows,
  close: (win) => win.remove()
};
