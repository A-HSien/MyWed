declare const $: any;
declare const ScrollMagic: any;
declare const firebase: any;
import { MenuController } from './controllers/MenuController';
import { HeaderController } from './controllers/HeaderController';
import { AnnounceController } from './controllers/AnnounceController';
import { GalleryController } from './controllers/GalleryController';
import { StoryController } from './controllers/StoryController';
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

new MenuController(windowHeight);
new HeaderController(scrollMagicController, windowHeight, windowWidth);
new AnnounceController(scrollMagicController, windowHeight, windowWidth);
new GalleryController(scrollMagicController, windowHeight, windowWidth);
new StoryController(scrollMagicController, windowHeight, windowWidth);
new RSVPController(scrollMagicController, windowHeight, windowWidth);