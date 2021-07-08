import $ = require('jquery')
import anime, { AnimeParams } from 'animejs'

type AnimeTarget = string | object | HTMLElement | SVGElement | NodeList | null;

export class GiftPoll {
    private container: JQuery<HTMLElement>
    private gift_count: Number
    private gift_element_ids: Array<string>
    private REAL_GIFT_FLAG = "realGift"

    constructor(container: JQuery<HTMLElement>, gift_count: Number = 3) {
        this.container = container
        this.gift_count = gift_count
        this.gift_element_ids = new Array
        //  create gifts
        for (let i = 0; i < gift_count; i++) {
            const tmp_element = document.createElement('img')
            tmp_element.id = `gift${i + 1}`
            tmp_element.className = 'giftItem'
            tmp_element.innerHTML = tmp_element.id
            tmp_element.src = './imgs/gift.svg'

            this.container.append(tmp_element)
            this.gift_element_ids.push(tmp_element.id)
        }
        // choice one gift to be real gift
        let real_gift_id = this.gift_element_ids[Math.floor((Math.random() * this.gift_element_ids.length))]
        $(`#${real_gift_id}`).addClass(this.REAL_GIFT_FLAG)



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