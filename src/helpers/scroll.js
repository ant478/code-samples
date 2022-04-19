import { VIEW_ID as APP_SCROLL_ELEMENT_ID } from 'src/components/App/components/AppScrollbar';

let appScrollElement;
export function getAppScrollElement() {
  return appScrollElement || (appScrollElement = document.getElementById(APP_SCROLL_ELEMENT_ID));
}
