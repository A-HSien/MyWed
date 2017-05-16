declare const $: any;
declare const ScrollMagic: any;
declare const firebase: any;
import { FullWindowToggleController } from './components/FullWindowToggleController';
import { MenuController } from './components/MenuController';
import { ShowcaseController } from './components/ShowcaseController';

import { HeaderController } from './sections/HeaderController';
import { AnnounceController } from './sections/AnnounceController';
import { GalleryController } from './sections/GalleryController';
import { StoryController } from './sections/StoryController';
import { RSVPController } from './sections/RSVPController';
import { ProgramController } from './sections/ProgramController';
import { PartyController } from './sections/PartyController';
import { ImgUploadController } from './sections/ImgUploadController';
import { scrollTo } from './Utilities';


//db init
const config = {
    apiKey: "AIzaSyCiAAj1bTaHLocP5P-PlNZ7dEz0BOxUAj0",
    databaseURL: "https://mywed-f3944.firebaseio.com",
    storageBucket: "mywed-f3944.appspot.com",
};
firebase.initializeApp(config);


//controllers
const windowWidth = $(window).width() as number;
const windowHeight = $(window).height() as number;
let scrollMagicController = new ScrollMagic.Controller();

new FullWindowToggleController();
new MenuController(windowHeight);
new ShowcaseController();
new HeaderController(scrollMagicController, windowHeight, windowWidth);
new AnnounceController(scrollMagicController, windowHeight, windowWidth);
new GalleryController(scrollMagicController, windowHeight, windowWidth);
new StoryController(scrollMagicController, windowHeight, windowWidth);
new RSVPController(scrollMagicController, windowHeight, windowWidth);
new ProgramController(scrollMagicController, windowHeight, windowWidth);
new PartyController();
new ImgUploadController(scrollMagicController, windowHeight, windowWidth)

if (location.hash)
    scrollTo(location.hash);
