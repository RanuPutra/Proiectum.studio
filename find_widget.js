const fs = require('fs');
const indexHtml = fs.readFileSync('public/index.html', 'utf8');

const regex = /<div class="framer-1hy941f-container"[\s\S]*?<\/div><\/div><\/div><\/div><\/div><\/div>/g;
// Let's find exactly where it starts and ends
const startIdx = indexHtml.indexOf('<div class="framer-1hy941f-container"');
console.log('Start index:', startIdx);
if (startIdx !== -1) {
  const nextContainer = indexHtml.indexOf('<div class="framer-1tvd59c', startIdx);
  console.log('Next container index:', nextContainer);
  console.log('Block length:', nextContainer - startIdx);
  console.log(indexHtml.substring(startIdx, nextContainer));
}
