import PerfectScrollbar from 'perfect-scrollbar';

export * from './moment';

export const scrollbar = (node, options) => {
  if (node && !node.classList.contains('ps')) {
    if (getComputedStyle(node).position === 'static') node.style.position = 'relative';

    return new PerfectScrollbar(node, options);
  }
};

export const toPriceFormat = (price) => {
  return (typeof price === 'string' || typeof price === 'number') ?
    price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') :
    price;
};
