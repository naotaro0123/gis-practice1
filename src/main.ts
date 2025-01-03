import 'leaflet/dist/leaflet.css';
import { setupCounter } from './counter.ts';
import './style.css';

document.querySelector<HTMLDivElement>('#root')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
