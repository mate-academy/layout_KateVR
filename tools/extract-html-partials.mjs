import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../src');
const indexPath = resolve(root, 'index.html');
const lines = fs.readFileSync(indexPath, 'utf-8').split(/\r?\n/);

function slice(start, end) {
  return lines.slice(start - 1, end).join('\n');
}

const partials = [
  ['components/NavBar/navbar.html', 37, 163],
  ['components/SideMenu/side-menu.html', 165, 242],
  ['components/LangMenu/lang-menu.html', 244, 341],
  ['components/FaqPanel/faq-panel.html', 343, 417],
  ['components/HelpPanel/help-panel.html', 419, 509],
  ['components/BuyPanel/buy-panel.html', 511, 688],
  ['components/PayPanel/pay-panel.html', 690, 837],
  ['components/OrderComplete/order-complete.html', 839, 902],
  ['components/MoreThanGaming/more-than-gaming.html', 905, 966],
  ['components/AboutProduct/about-product.html', 968, 1044],
  ['components/TechSpecs/tech-specs.html', 1046, 1150],
  ['components/Benefits/benefits.html', 1152, 1199],
  ['components/ContactForm/contact-form.html', 1201, 1288],
  ['components/ScrollTop/scroll-top.html', 1291, 1294],
  ['components/Footer/footer.html', 1296, 1427],
  ['components/VideoModal/video-modal.html', 1428, 1451],
];

partials.forEach(([filePath, start, end]) => {
  const fullPath = resolve(root, filePath);

  fs.mkdirSync(dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, `${slice(start, end)}\n`);
});

console.log(`Extracted ${partials.length} HTML partials.`);
