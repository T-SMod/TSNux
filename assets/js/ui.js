let TSNuxUI = {}

async function loadComponent(name, path) {
  try {
    const module = await import(path);
    TSNuxUI[name] = module.default;
    console.log(`Компонент ${name} загружен`);
  } catch (error) {
    console.error(`Ошибка загрузки ${name}:`, error);
  }
}

async function initUI() {
  await loadComponent('window', '/TSNux/assets/js/ui/window.js');
  await loadComponent('taskbar', '/TSNux/assets/js/ui/taskbar.js');
  await loadComponent('menu', '/TSNux/assets/js/ui/menu.js');
  await loadComponent('dialog', '/TSNux/assets/js/ui/dialog.js');
  await loadComponent('desktop', '/TSNux/assets/js/ui/desktop.js');
}

window.addEventListener('load', initUI);
