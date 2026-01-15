TSNux.kernel = {}

async function loadComponent(name, path) {
  try {
    const module = await import(path);
    TSNux.kernel[name] = module.default;
    console.log(`Компонент ${name} загружен`);
  } catch (error) {
    console.error(`Ошибка загрузки ${name}:`, error);
  }
}

async function initKernel() {
  await loadComponent('init', '/TSNux/assets/js/kernel/init.js');
  await loadComponent('memory', '/TSNux/assets/js/kernel/memory.js');
}

window.addEventListener('load', initUI);
