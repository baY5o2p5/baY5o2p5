import * as G from "@use-gesture/vanilla"
import './style.css'
// import 'normalize.css'
// import  $ from "jquery";
import $ = require('jquery');
import { GiftPoll } from "./controller";

import { DragGesture, UserDragConfig } from "@use-gesture/vanilla";

import anime, { AnimeInstance } from 'animejs';




const el = document.getElementById('test') as HTMLElement

const dragHandler: G.Handler<'drag'> = ((state) => {
    let [mx, my] = state.movement
    let active = state.active
    anime({
        targets: el,
        translateX: active ? mx : 0,
        translateY: active ? my : 0,
        duration: active ? 0 : 1000,
        rotate: active ? 10 : 0,
    })

})
let a = new G.DragGesture(el, dragHandler)

const dislike_btn = document.getElementById('dislike') as HTMLElement
let running_dislike = new G.HoverGesture(
    dislike_btn,
    ((state) => {
        console.log('Hovering');

        const hovering = state.hovering
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        anime({
            targets: dislike_btn,
            translateX: x,
            translateY: y,
            duration: 1000,
        })

    }) as G.Handler<"hover">
)
running_dislike.destroy()

new GiftPoll($("#giftpoll"))

let wh1 = `${$('body').height()}`
const wh = `Height:${$("body").height()};Width:${$('body').width()}`
$("#wh")?.text(wh)
$("#dislike")?.on("click", (() => {
    console.log("Click by jquery");
}))