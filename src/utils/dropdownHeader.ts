export const setupDropdown = (buttonId: string, menuId: string) => {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  if (button && menu) {
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event: MouseEvent) => {
      if (!button.contains(event.target as Node) && !menu.contains(event.target as Node)) {
        menu.classList.add('hidden');
      }
    });
  }
};