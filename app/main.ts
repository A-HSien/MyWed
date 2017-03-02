declare const $: any;
declare const ScrollMagic: any;
declare const firebase: any;
import { Menu } from './Menu';
import { HeaderPage } from './HeaderPage';
import { AnnouncePage } from './AnnouncePage';
import { GalleryPage } from './GalleryPage';
import { StoryPage } from './StoryPage';
import { RSVPController } from './controllers/RSVPController';

//db init
const config = {
    apiKey: "AIzaSyCiAAj1bTaHLocP5P-PlNZ7dEz0BOxUAj0",
    databaseURL: "https://mywed-f3944.firebaseio.com"
};
firebase.initializeApp(config);


//controllers
const windowWidth = $(window).width() as number;
const windowHeight = $(window).height() as number;
let scrollMagicController = new ScrollMagic.Controller();

new Menu(windowHeight);
new HeaderPage(scrollMagicController, windowHeight, windowWidth);
new AnnouncePage(scrollMagicController, windowHeight, windowWidth);
new GalleryPage(scrollMagicController, windowHeight, windowWidth);
new StoryPage(scrollMagicController, windowHeight, windowWidth);
new RSVPController(scrollMagicController, windowHeight, windowWidth);