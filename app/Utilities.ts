declare const $: any;

export function scrollTo(eleSeltor: string, speed?: string | number) {
    speed = speed || 400;
    $('html, body').animate({ scrollTop: $(eleSeltor).offset().top }, speed);
};