import $ = require('jquery')
import anime, { AnimeParams } from 'animejs'
import type AnimeTarget from 'animejs'

type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

export class GiftPoll {
    private container: HTMLElement
    private gift_count: Number

    constructor(container: HTMLElement, gift_count: Number = 3) {
        this.container = container
        this.gift_count = gift_count
    }

    private set_gift_anime() {

    }

    private excape_anime(target: AnimeTarget) {

        const x = Math.random() * 500;
        const y = Math.random() * 500;
        anime({
            targets: target,
            translateX: x,
            translateY: y,
            duration: 1500,
        })

    }

}