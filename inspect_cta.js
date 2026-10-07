const fs = require('fs');

const indexHtml = fs.readFileSync('public/index.html', 'utf8');

// Find all fixed elements or badges
const fixedRegex = /fixed|sticky|bottom|left/gi;

// Let's inspect data-framer-name
const names = [...indexHtml.matchAll(/data-framer-name="([^"]+)"/g)].map(m => m[1]);
console.log('Framer names:', [...new Set(names)].filter(n => n.toLowerCase().includes('cta') || n.toLowerCase().includes('badge') || n.toLowerCase().includes('chat') || n.toLowerCase().includes('support') || n.toLowerCase().includes('contact') || n.toLowerCase().includes('bottom') || n.toLowerCase().includes('avatar') || n.toLowerCase().includes('person')));

// Let's see what images have alt or are portraits
const imgRegex = /<img[^>]+alt="([^"]*)"[^>]*>/g;
const alts = [...indexHtml.matchAll(imgRegex)].map(m => m[1]);
console.log('Img alts:', alts);
