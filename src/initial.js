import 'src/scss/initial.scss';
import { getHueValueFromLocalStorage } from 'src/helpers/hue';
import 'src/web-components/ant478-logo';

document.documentElement.style.setProperty('--hue', getHueValueFromLocalStorage());

function handleBodyLoaded() {
  const root = document.getElementById('root');
  const spinner = document.createElement('ant478-logo');

  spinner.className = 'spinner';
  setTimeout(() => { spinner.classList.add('spinner__displayed'); }, 300);

  root.appendChild(spinner);
}

document.addEventListener('BodyLoadedCustomEvent', handleBodyLoaded, { once: true });
