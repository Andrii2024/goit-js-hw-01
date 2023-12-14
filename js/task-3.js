//  getElementWidth(content, padding, border);
let content = parseFloat('50px');
let padding = parseFloat('8px');
let border = parseFloat('4px');
let getElementWidth = content + 2 * padding + 2 * border;

console.log(getElementWidth);

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
