import 'core-js/fn/array/includes';
import 'core-js/fn/array/find';
import { polyfill } from 'mobile-drag-drop';
import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour';

polyfill({
	dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride,
});
