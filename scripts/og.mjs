// Renders public/og.jpg (1200×630) and public/logo.png (512×512): the HK Consulting logo over a drafting grid, crossed by the red flow line.
// Logo paths are the same as LOGO_H / LOGO_K in src/pages/parts.ts.
import sharp from 'sharp';

const H = 'M10 130V78H66V44H78V130H66V90H22V130Z';
const K = 'M98 44H110V77L152 44H170L127 80L177 130H158L98 71Z';
const grid = [...Array(16)].map((_, i) => `<path d="M${i * 80} 0V630" />`).join('') + [...Array(9)].map((_, i) => `<path d="M0 ${i * 80}H1200" />`).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0d0e0f"/>
  <g stroke="#ecebe7" stroke-opacity="0.06" stroke-width="1">${grid}</g>
  <g transform="translate(310 150) scale(3.2) translate(-8 -42)">
    <rect x="10" y="44" width="12" height="12" fill="#ecebe7"/>
    <path d="${H}" fill="#a61a17"/><path d="${K}" fill="#a61a17"/>
  </g>
  <text x="600" y="490" text-anchor="middle" fill="#ecebe7" font-family="Helvetica, Arial, sans-serif" font-weight="300" font-size="58" letter-spacing="14">CONSULTING</text>
  <path d="M0 560H1200" fill="none" stroke="#e2231a" stroke-width="4" stroke-dasharray="18 10"/>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile('public/og.jpg');
// Square raster logo for search engines (structured data) and the iOS home screen.
await sharp('public/favicon.svg', { density: 300 }).resize(512, 512).png().toFile('public/logo.png');
console.log('og.jpg + logo.png done');
