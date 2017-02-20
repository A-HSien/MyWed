declare const $: any;
declare const ScrollMagic: any;
import { Menu } from './Menu';
import { HeaderPage } from './HeaderPage';
import { AnnouncePage } from './AnnouncePage';
import { GalleryPage } from './GalleryPage';
import { StoryPage } from './StoryPage';


const windowWidth = $(window).width() as number;
const windowHeight = $(window).height() as number;
let scrollMagicController = new ScrollMagic.Controller();

new Menu(windowHeight);
new HeaderPage(scrollMagicController, windowHeight, windowWidth);
new AnnouncePage(scrollMagicController, windowHeight, windowWidth);
new GalleryPage(scrollMagicController, windowHeight, windowWidth);
new StoryPage(scrollMagicController, windowHeight, windowWidth);