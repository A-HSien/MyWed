declare const $: any;
declare const ScrollMagic: any;
import { Menu } from './Menu';
import { VideoPage } from './VideoPage';
import { AnnouncePage } from './AnnouncePage';


const windowWidth = $(window).width() as number;
const windowHeight = $(window).height() as number;
let scrollMagicController = new ScrollMagic.Controller();

new Menu(windowHeight);
new VideoPage(scrollMagicController);
new AnnouncePage(windowWidth, scrollMagicController);