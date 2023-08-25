const parentNode = document.querySelector('.staggered');

const content = parentNode.textContent;

const words = content.split(' ');
const newTextNodes = words.map((word, index) => {
  const node = document.createElement('span');

  node.textContent = word;
  node.style.setProperty('--index', index);

  return node;
});

parentNode.firstChild.replaceWith(...newTextNodes);