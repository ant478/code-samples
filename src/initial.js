import 'src/scss/initial.scss';
import { getHueValueFromLocalStorage } from 'src/helpers/hue';
import { Logo } from '@ant478/web-components';

customElements.define('ant478-logo', Logo);

document.documentElement.style.setProperty('--hue', getHueValueFromLocalStorage());

function handleBodyLoaded() {
  const root = document.getElementById('root');
  const spinner = document.createElement('ant478-logo');

  spinner.className = 'spinner';
  spinner.setAttribute('wc-gear-spin-duration', '9s');
  setTimeout(() => { spinner.classList.add('spinner__displayed'); }, 300);

  root.appendChild(spinner);
}

document.addEventListener('BodyLoadedCustomEvent', handleBodyLoaded, { once: true });
