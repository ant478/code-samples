import 'src/scss/initial.scss';
import { getHueValueFromLocalStorage } from 'src/helpers/hue';

document.documentElement.style.setProperty('--hue', getHueValueFromLocalStorage());

function handleBodyLoaded() {}
document.addEventListener('BodyLoadedCustomEvent', handleBodyLoaded, { once: true });
