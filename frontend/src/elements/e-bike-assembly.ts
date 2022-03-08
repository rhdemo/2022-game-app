import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { svg, unsafeStatic } from 'lit/static-html.js';
import styles from '../../assets/style/summit-22-style.css.ts';

export type State =
  | 'frame'
  | 'color'
  | 'pedals'
  | 'handles'
  | null

export type Color =
  | 'Red'
  | 'Orange'
  | 'Navy'
  | 'Blue'
  | null

export type BikeType =
  | 'Road'
  | 'loRider'
  | 'wagon'
  | 'Tri'
  | 'eBike'
  | null

export class EBikeAssembly extends LitElement {
  static styles = [styles, css`
    #bikeFrames {
      z-index: 2;
      position: relative;
    }
  `];

  @property({ type: String }) public state:State = null;
  @property({ type: String }) public frame:BikeType = null;
  @property({ type: String }) public pedals:BikeType = null;
  @property({ type: String }) public handles:BikeType = null;
  @property({ type: String }) public seat:BikeType = null;
  @property({ type: String }) public wheels:BikeType = null;

  private getFrameViewboxStart(): string {
    switch (this.frame) {
      case 'Tri':
        return '0 0 360 360'
        break;
      case 'Road':
        return '360 0 360 360'
        break;
      case 'loRider':
        return '720 0 360 360'
        break;
      case 'wagon':
        return '1080 0 360 360'
        break;
      case 'eBike':
        return '1440 0 360 360'
        break;
      default:
        return '0 0 360 360';
        break;
    }
  }

  render() {
    return html`
      <div id="bike-assembly-wrapper">
        ${this.frame ? svg`
        	<svg version="1.1" id="bikeFrames" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewbox="${unsafeStatic(this.getFrameViewboxStart())}" xml:space="preserve"><style>.st1{fill:#142c4d}.st2{fill:#aedcdd}.st3{opacity:.2;enable-background:new}.st5{opacity:.6}.st6{fill:#fff}.st7{fill:#faaa4f}.st10{fill:#4f4646}.st11{fill:#9e9298}.st12,.st13{fill:#231e1e;stroke:#142c4d;stroke-width:1.2963;stroke-miterlimit:10}.st13{fill:none;stroke:#f06;stroke-width:.8642}.st14{opacity:.28}</style><switch><g><g id="loRiderFrame"><path d="M786.2 196.2c-1.7 0-3.2-1-3.9-2.5-.8-1.8-.3-3.8 1.2-5.1l67.1-55.3-4.2-12.2c-.2-.5-.1-1.1.3-1.7 1-1.4 3.7-2.4 5.5-2.4 1.6 0 2.1.8 2.3 1.3l3.8 10.9 111.1-39.8-1.8-4.4c-.1-.3-.3-1 .2-1.7 1-1.5 3.9-2.6 5.6-2.6 1.4 0 1.9.7 2.1 1.1l43.9 106.1c.9 2.2-.1 4.7-2.3 5.6-.5.2-1.1.3-1.6.3-1.7 0-3.3-1-4-2.6l-33.3-80.5-104.7 71.8c-.5.4-1.1.6-1.8.7L787 196.3c-.4-.1-.6-.1-.8-.1zm14.7-10.9 64.1-9.9-11.5-33.4-52.6 43.3zm72.1-13.1 101.7-69.7-2.1-5.2-111.6 40 12 34.9z" fill="#27579a"/><path class="st1" d="M973.3 81.5c.6 0 1.1.2 1.2.6l43.9 106.1c.7 1.7-.1 3.7-1.8 4.4-.4.2-.9.3-1.3.3-1.3 0-2.6-.8-3.1-2.1l-33.7-81.5-105.6 72.4c-.4.3-.9.5-1.4.5l-84.7 13.1h-.5c-1.3 0-2.5-.8-3.1-2-.6-1.4-.2-3 .9-4l67.6-55.7-4.4-12.8c-.4-1.3 2.9-2.8 5-2.8.7 0 1.3.2 1.4.7l4.1 11.8L970.5 90l-2.2-5.3c-.5-1.3 3-3.2 5-3.2m-100.8 92.2 103.3-70.8-2.7-6.6-113.2 40.6 12.6 36.8m-74.7 13 68.4-10.6-12.2-35.7-56.2 46.3m175.5-107c-2 0-5.2 1.3-6.3 3-.8 1.1-.5 2.1-.3 2.6l1.5 3.5L858.9 128l-3.5-10c-.2-.6-.9-1.9-3.1-1.9-2 0-5.1 1.1-6.2 2.8-.6.8-.7 1.7-.4 2.5l4 11.6-66.6 54.9c-1.8 1.5-2.4 4-1.4 6.1.8 1.9 2.7 3.1 4.7 3.1.3 0 .5 0 .8-.1l84.7-13.1c.8-.1 1.5-.4 2.1-.8L977.6 112l32.9 79.5c.8 1.9 2.7 3.2 4.8 3.2.7 0 1.4-.1 2-.4 2.6-1.1 3.9-4.1 2.8-6.8L976.2 81.4c-.2-.5-.9-1.7-2.9-1.7zm-111.2 58.2L972 98.5l1.5 3.7-100.1 68.6-11.3-32.9zm-58 46 49.1-40.5 10.7 31.2-59.8 9.3z"/><circle cx="788" cy="190.6" r="2.7"/><g><circle cx="1015.1" cy="187.9" r="2.7"/></g></g><g id="wagonFrame"><g id="wagonLight"><path class="st2" d="M1344.3 107.2c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.2 3.1-3.2l7.8-.1c1.8 0 3.2 1.4 3.2 3.1 0 .3 0 .7-.1 1-.4 1.3-1.6 2.2-3 2.2l-7.9.1z"/><path class="st1" d="M1352 101.7c1.2 0 2.2 1 2.2 2.2 0 .2 0 .5-.1.7-.3.9-1.1 1.6-2.1 1.6l-7.8.1c-1.2 0-2.2-1-2.2-2.2s1-2.3 2.2-2.3l7.8-.1m0-1.8-7.8.1c-2.2 0-4 1.9-4 4.1s1.8 4 4 4l7.8-.1c1.8 0 3.3-1.2 3.8-2.8.1-.4.2-.8.2-1.3.1-2.2-1.8-4-4-4z"/><path class="st3" d="M1354.3 104c0 .2 0 .5-.1.7-.3.9-1.1 1.6-2.1 1.6l-7.8.1c-1.2 0-2.3-1-2.3-2.2v-.4h12.2c.1 0 .1.1.1.2z"/><path d="M1358.7 111.8c-2.5 0-4.6-2.1-4.6-4.6v-6.1c0-2.5 2.1-4.6 4.6-4.6h1.1c2.5 0 4.6 2.1 4.6 4.6v6.1c0 2.5-2.1 4.6-4.6 4.6h-1.1z" fill="#fafa4f"/><path class="st1" d="M1359.9 97.4c2 0 3.7 1.7 3.7 3.7v6.1c0 2-1.7 3.7-3.7 3.7h-1.1c-2 0-3.7-1.7-3.7-3.7v-6.1c0-2 1.7-3.7 3.7-3.7h1.1m0-1.8h-1.1c-3 0-5.5 2.5-5.5 5.5v6.1c0 3 2.5 5.5 5.5 5.5h1.1c3 0 5.5-2.5 5.5-5.5v-6.1c0-3-2.5-5.5-5.5-5.5z"/><path class="st3" d="M1363.6 106.1v2.1c0 1.5-1.2 2.7-2.7 2.7h-3.2c-1.5 0-2.7-1.2-2.7-2.7v-8.1c0-.4.1-.7.2-1.1v6c0 1.5 1.2 2.7 2.7 2.7h3.2c1.1.1 2.1-.6 2.5-1.6z"/><path class="st2" d="M1355.3 115.9c-2 0-3.6-1.6-3.6-3.6V96.1c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v16.2c0 1.9-1.6 3.6-3.6 3.6z"/><path class="st1" d="M1355.3 93.4c1.5 0 2.7 1.2 2.7 2.7v16.2c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V96.1c0-1.5 1.2-2.7 2.7-2.7m0-1.8c-2.5 0-4.5 2-4.5 4.5v16.2c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5V96.1c0-2.5-2-4.5-4.5-4.5z"/><path class="st3" d="M1358 103.3v9c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7v-9c0 1.5 1.2 1.8 2.7 1.8 1.5 0 2.7-.4 2.7-1.8z"/><g class="st5"><path class="st6" d="M1352.6 98.8v-2.7c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v2.7c0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7z"/></g><circle class="st6" cx="1361.6" cy="99.7" r="1.8"/></g><g id="wagonBikeframe"><path class="st7" d="M1120.8 204.4c-1.8 0-3.4-1.1-4-2.8l-22.9-64.3c-.5-1.3-.3-2.8.5-3.9s2.1-1.8 3.5-1.8h94.7c1.3 0 2.5.6 3.4 1.6 6 7.7 23.2 12.8 49.7 14.9 1.5.1 3.1.2 4.6.3l-15-45.8c-.7-2.2.5-4.7 2.7-5.4.4-.1.9-.2 1.3-.2 1.9 0 3.5 1.2 4.1 2.9l16 48.9c3.8.1 7.7.2 11.6.2 7.3 0 12.5-.2 14-.3 4.1-3.5 8.6-7.3 13.3-11.5 19.4-17.4 36.2-35.1 36.9-35.8.2-.2.4-.3.5-.5l-1.4-3.4c-.4-1.1-.4-2.2 0-3.3.4-1.1 1.3-1.9 2.3-2.3.5-.2 1.1-.3 1.6-.3 1.7 0 3.3 1 4 2.7l42.7 104.3c.4 1.1.4 2.2 0 3.3s-1.3 1.9-2.3 2.3c-.5.2-1.1.3-1.6.3-1.7 0-3.3-1-4-2.7l-27-65.8-75.6 67.3c-.5.5-1.2.8-1.9 1h-.8l-150.9.1zm15.2-8.5-16.2-55.8h-15.9l19.9 55.8h12.2zm12.2 0c.3-.5.7-1 1.2-1.4 4.7-3.6 10.3-7 16.6-10.1l-12.9-44.2h-24.5l16.2 55.8h3.4v-.1zm64.5-15.3c-3.5 0-7.5.4-11.7 1.1-12.8 2.2-27.2 7.6-38.4 14.2h103l-6.2-19c-5.1 2.5-9.5 3.8-13 3.8h-33.7v-.1zm60.9 12.1 73-65-7.5-18.2c-5.2 5.4-19.3 19.7-35.2 34-14.9 13.4-27 23-36.9 29.1l6.6 20.1zm-99.7-11.9c6.9-2.9 14.2-5.1 21.1-6.7l-9.9-34h-23l11.8 40.7zm29.5-8.1c3.3-.4 6.4-.6 9.3-.6h33.7c1.7 0 4.9-.6 10.3-3.4l-3.8-11.5c-2.7-.1-5.4-.3-8.1-.5-23.5-1.8-40.2-6.1-49.9-12.7l8.5 28.7zm60.9-8.5c2.9-1.9 6.1-4.1 9.5-6.7h-3c-2.9 0-5.9 0-8.7-.1l2.2 6.8z"/><path class="st1" d="M1338.2 92.5c1.3 0 2.6.8 3.1 2.1l42.7 104.3c.7 1.7-.1 3.7-1.8 4.4-.4.2-.8.3-1.3.3-1.3 0-2.6-.8-3.1-2.1l-27.4-66.9-76.5 68.1c-.4.4-1 .6-1.5.8H1120.8c-1.4 0-2.7-.9-3.2-2.2l-22.9-64.3c-.4-1-.2-2.2.4-3.1.6-.9 1.7-1.4 2.8-1.4h94.7c1 0 2 .5 2.6 1.3 6.2 7.9 23.6 13.1 50.4 15.2 2 .2 4 .3 5.9.4l-15.4-47.1c-.6-1.8.4-3.7 2.2-4.3.3-.1.7-.2 1-.2 1.4 0 2.7.9 3.2 2.3l16.2 49.5c4.5.1 8.6.2 12.3.2 7.9 0 13.4-.2 14.3-.3 4.1-3.4 8.6-7.3 13.6-11.8 19.7-17.7 36.8-35.7 36.9-35.9.3-.3.6-.6 1-.7l-1.7-4.1c-.7-1.7.1-3.7 1.8-4.4.4 0 .8-.1 1.3-.1m-65 101.7 74.4-66.3-8.2-20.1c-4.2 4.4-19.2 19.8-36.1 35-15.1 13.6-27.5 23.3-37.4 29.4l7.3 22m-99.9-12.2c7.5-3.1 15.3-5.6 22.8-7.2l-10.4-35.6h-24.9l12.5 42.8m-29.1 14.8h4.7c.2-.6.6-1.1 1.1-1.6 4.9-3.8 10.8-7.3 17.1-10.4l-13.3-45.6h-26.4l16.8 57.6m-21.1 0h14l-16.7-57.6h-17.8l20.5 57.6m79.7-23.1c3.5-.5 6.8-.7 9.9-.7h33.7c2.1 0 5.6-.8 11.4-3.9l-4.2-12.8c-2.8-.1-5.7-.3-8.7-.5-25.2-1.9-42.5-6.7-51.6-14.1l9.5 32m61-8.1c3.6-2.3 7.8-5.2 12.7-9h-5.7c-3 0-6.4 0-10-.1l3 9.1m-104.3 31.2h107.4l-6.9-21.2c-5.4 2.8-9.9 4.1-13.5 4.1h-33.7c-3.7 0-7.7.4-11.8 1.1h-.1c-13.9 2.4-29.6 8.4-41.4 16m178.7-106.1c-.7 0-1.3.1-2 .4-1.3.5-2.3 1.5-2.8 2.8s-.5 2.7 0 4l1.2 2.8-.1.1c-.2.2-17.3 18.2-36.8 35.8-4.6 4.1-9 7.9-13 11.3-1.8.1-6.8.3-13.7.3-3.7 0-7.4-.1-10.9-.2l-15.8-48.3c-.7-2.1-2.7-3.6-4.9-3.6-.5 0-1.1.1-1.6.3-1.3.4-2.4 1.3-3 2.6-.6 1.2-.7 2.6-.3 3.9l14.6 44.6c-1.1-.1-2.2-.1-3.2-.2-25.9-2-43.3-7.1-49.1-14.5-1-1.3-2.5-2-4.1-2H1098c-1.7 0-3.3.8-4.2 2.2-1 1.4-1.2 3.1-.6 4.7l22.9 64.3c.7 2.1 2.7 3.4 4.9 3.4h152c.9-.2 1.6-.6 2.3-1.2l74.6-66.5 26.4 64.6c.8 2 2.7 3.2 4.8 3.2.7 0 1.3-.1 2-.4 1.3-.5 2.3-1.5 2.8-2.8s.5-2.7 0-4L1343 93.9c-.8-2-2.7-3.2-4.8-3.2zm-70.1 82.3c9.8-6.2 21.7-15.6 36.4-28.8 15-13.5 28.5-27.1 34.3-33.1l6.7 16.3-71.5 63.7-5.9-18.1zm-104.9-32h21.2l9.4 32.5c-6.4 1.5-13 3.5-19.4 6.1l-11.2-38.6zm-33.4 0h22.6l12.5 42.9c-6.1 3-11.5 6.4-16.1 9.9-.4.3-.8.7-1.1 1.2h-2.2l-15.7-54zm-24.6 0h13.9l15.7 54h-10.4l-19.2-54zm98.9 30.7-7.5-25.8c10 6 26.2 9.8 48.3 11.5 2.4.2 4.9.3 7.5.5l3.3 10.2c-4.9 2.4-7.7 3-9.2 3h-33.7c-2.8.1-5.7.2-8.7.6zm60.7-8.9-1.5-4.4c2.5 0 5 .1 7.5.1h.2c-2.1 1.5-4.2 3-6.2 4.3zm-63.7 19.8c4.2-.7 8.1-1.1 11.6-1.1h33.7c3.5 0 7.6-1.1 12.5-3.4l5.5 16.9H1166c10.7-5.8 23.6-10.4 35.1-12.4z"/></g></g><g id="triFrame_00000069360486775067907790000014405921538337096594_"><path class="st1" d="M124.9 121c-2.1 0-4.2-.5-6-1.4l-13.8-6.6c-.6-.3-1.1-.6-1.6-1-.6-.4-1.1-.8-1.6-1.3-.8-.8-1.5-1.7-2-2.7-.2-.3-.3-.6-.5-1l-4.7-10.4c-.8-1.7-.6-3.7.4-5.3 1-1.6 2.8-2.5 4.6-2.5h26.1l6.6 32h-7.5v.2z"/><path class="st1" d="m125 89.8 6.3 30.3h-6.4c-2 0-3.9-.4-5.7-1.3l-10.9-5.2-2.9-1.4-1.5-.9-1.5-1.2c-.7-.7-1.4-1.6-1.9-2.5-.2-.3-.3-.6-.5-.9l-1.1-2.4-.6-1.4-1.1-2.5-.3-.6-1.6-3.4c-1.4-3.1.9-6.6 4.3-6.6H125m1.3-1.7H99.6c-2.2 0-4.2 1.1-5.4 2.9-1.2 1.8-1.3 4.1-.4 6.1l1.6 3.4.3.6 1.1 2.5.6 1.4 1.1 2.4c.2.4.4.7.5 1.1.6 1 1.3 2 2.2 2.8.5.5 1.1 1 1.7 1.4.5.4 1.1.7 1.7 1l2.9 1.4 10.8 5.2c2 .9 4.2 1.5 6.4 1.5h8.5l-.4-2-6.3-30.3-.2-1.4z"/><path class="st2" d="m116.5 89.8-14.1 20.3c-.7-.7-1.4-1.6-1.9-2.5l12.4-17.9 3.6.1z" opacity=".8"/><g class="st5"><path class="st2" d="m109 89.8-10.1 14.5-.6-1.3 9.2-13.2z"/></g><path class="st2" d="m104.6 89.8-7.4 10.7-.3-.7 7-10z" opacity=".4"/><g><path class="st2" d="m124.9 89.8-16.6 23.8-2.9-1.4c-.5-.3 15.1-22.5 15.1-22.5l4.4.1z"/></g><g id="triFrame"><path class="st2" d="M156.9 212.9c-11.9 0-23.9-5.2-31.1-8.4l-.8-.4c-4.2-1.8-15.8-3.7-27-5.6-21.1-3.4-29.7-5.1-29.7-7.9 0-.1-1.3-15.1 15.4-18.2 14.7-2.7 48.5-18.2 53.4-20.5L117 55.1c-.3-1.4.1-2.8.9-3.9a4.6 4.6 0 0 1 3.6-1.7h13.8c2.2 0 4.1 1.6 4.6 3.7l7.6 36.6h114.1l29.1 95.5c.1.5.2.9.2 1.4 0 2.7-2.2 4.8-4.8 4.8-1.9 0-3.6-1.1-4.4-2.8L253 127c-1.1-2.1-2.5-3.1-4.4-3.1-3.1 0-7.6 2.8-13 8.2-6.2 6.2-11.5 13.8-11.5 13.8l-.1.1-51.8 62.3c-1 1.2-2.3 2.1-3.8 2.7-3.5 1.3-7.4 1.9-11.5 1.9zm-16.5-52c-24.1 9.9-59.1 18.7-59.4 18.8-2.3.6-3.3 2.5-3.2 4.1.1 1.9 1.6 3.3 4 3.6.4 0 46.3 3.4 53.4 4.2.7.1 1.4.1 2 .1 3.6 0 6.6-1.2 8.1-3.2 1.2-1.6 1.5-3.6.8-6.1l-5.7-21.5zm16.7-24.8c2.2 9.9 10.3 23.7 18.8 23.7 2.7 0 5.2-1.4 7.5-4.2l38.7-46.5c-.3-6.3-11.3-12.1-23.4-12.1h-49.8l8.2 39.1z"/><path class="st1" d="M135.3 50.4c1.8 0 3.4 1.3 3.7 3l7.7 37.2h114.2l29 94.9c.1.4.2.8.2 1.2 0 2.1-1.7 4-4 4-1.5 0-3-.9-3.6-2.3l-28.8-61.7c-1.3-2.6-3.1-3.6-5.2-3.6-4 0-9.1 3.9-13.6 8.5-6.2 6.2-11.4 13.6-11.6 14l-51.9 62.3c-.9 1.1-2.1 1.9-3.4 2.4-3.6 1.3-7.4 1.8-11.2 1.8-12.2 0-24.5-5.6-31.6-8.7-9.8-4.2-56.2-8.5-56.2-12.7 0 0-1.4-14.4 14.7-17.4s54.2-20.9 54.2-20.9l-6.7-32.3-6.2-30.3-7.2-34.8c-.5-2.4 1.3-4.6 3.7-4.6h13.8m40.5 110.2c2.7 0 5.5-1.3 8.2-4.5l38.9-46.8c0-7.2-11.6-13.2-24.2-13.2h-50.8l8.3 40c2.3 10.6 10.8 24.5 19.6 24.5m-38.6 31.9c6.3 0 11.6-3.4 9.7-10.3l-5.9-22.5c-22.5 9.3-55.1 17.8-60.2 19.1s-5.5 8.5.8 9.3c0 0 46.2 3.4 53.4 4.2.7.2 1.5.2 2.2.2m-1.9-143.8h-13.8c-1.7 0-3.2.7-4.3 2-1.1 1.3-1.5 3-1.1 4.6l7.2 34.8 6.3 30.3 6.4 31c-6.6 3.1-38.5 17.6-52.6 20.2-13.9 2.6-16.6 13.6-16.1 19.2.1 3.3 6.4 4.7 30.4 8.7 11.2 1.8 22.7 3.7 26.8 5.5l.8.4c7.2 3.2 19.4 8.4 31.5 8.4 4.2 0 8.2-.7 11.8-1.9 1.6-.6 3-1.6 4.2-2.9l51.8-62.3.1-.1.1-.2s5.2-7.5 11.4-13.7c6.6-6.6 10.4-8 12.4-8 1 0 2.4.3 3.6 2.7l28.7 61.7c.9 2 2.9 3.3 5.1 3.3 3.1 0 5.7-2.5 5.7-5.7 0-.6-.1-1.1-.3-1.7l-29-94.9-.4-1.2H148.1L140.7 53c-.5-2.5-2.8-4.3-5.4-4.3zM150 97.8h48.7c11.4 0 21.8 5.1 22.5 10.9L182.7 155c-2.2 2.6-4.5 3.9-6.9 3.9-3.5 0-7.3-2.7-10.9-7.6-3.3-4.5-5.9-10.2-7-15.5v-.1L150 97.8zm-68.2 88.7c-1.9-.3-3.1-1.3-3.2-2.8-.1-1.2.7-2.8 2.6-3.2.4-.1 34.5-8.7 58.7-18.4l5.4 20.6c.6 2.2.4 4-.6 5.4-1.3 1.8-4.1 2.8-7.4 2.8-.6 0-1.3 0-1.9-.1-7.3-.9-51.1-4.1-53.6-4.3z"/></g><g><circle class="st1" cx="73.5" cy="187.3" r="3"/></g><g><circle class="st1" cx="286" cy="186" r="3"/></g></g><g id="eBikeFrame_00000065057586240151479720000016445949659876729772_"><path class="st10" d="M1612 166.6c-2.8-2.8-3.2-7.2-.8-10.5l26.5-36.2c1.1-1.5 2.7-2.6 4.4-3l7.1-1.9c.4-.1.8-.2 1.2-.2.3 0 .6-.1.9-.1 1.7 0 3.3.5 4.6 1.5l5.1 3.6-40.1 55.6-8.9-8.8z"/><path class="st1" d="M1651.2 115.4c1.5 0 3 .5 4.3 1.4l4.5 3.2-39.3 54.4-8.3-8.2c-2.6-2.6-2.9-6.7-.8-9.6l25.5-34.9 1-1.3c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c.4-.1.7-.2 1.1-.2.3-.1.5-.1.8-.1m0-1.3c-.3 0-.7 0-1 .1-.4 0-.8.1-1.3.2l-7.1 1.9c-1.9.5-3.6 1.7-4.8 3.3l-1 1.3-25.5 34.9c-2.6 3.5-2.2 8.2.9 11.3l8.3 8.2 1.1 1.1.9-1.2 39.3-54.4.8-1.1-1.1-.8-4.5-3.2c-1.4-1.1-3.2-1.6-5-1.6z"/><path class="st11" d="m1636.8 125.9-1.1 1.5-1.7-1.4 1.3-1.7zM1634.6 129.8l-.4.4-.3-.3-1.8-1.3.5-.7 1.6 1.5zM1652.7 121.6l-12.5 4.8-2.9-4.9 1-1.3c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c.4-.1.7-.2 1.1-.2l2.1 6.3z"/><path class="st12" d="m1621.5 177-8.3-8.2c-2.6-2.6-2.9-6.7-.8-9.6l26.5-36.2c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c2.1-.6 4.4-.2 6.2 1.1l4.5 3.2-39.3 54.4z"/><path class="st10" d="M1612 166.6c-2.8-2.8-3.2-7.2-.8-10.5l26.5-36.2c1.1-1.5 2.7-2.6 4.4-3l7.1-1.9c.4-.1.8-.2 1.2-.2.3 0 .6-.1.9-.1 1.7 0 3.3.5 4.6 1.5l5.1 3.6-40.1 55.6-8.9-8.8z"/><path class="st1" d="M1651.2 115.4c1.5 0 3 .5 4.3 1.4l4.5 3.2-39.3 54.4-8.3-8.2c-2.6-2.6-2.9-6.7-.8-9.6l25.5-34.9 1-1.3c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c.4-.1.7-.2 1.1-.2.3-.1.5-.1.8-.1m0-1.3c-.3 0-.7 0-1 .1-.4 0-.8.1-1.3.2l-7.1 1.9c-1.9.5-3.6 1.7-4.8 3.3l-1 1.3-25.5 34.9c-2.6 3.5-2.2 8.2.9 11.3l8.3 8.2 1.1 1.1.9-1.2 39.3-54.4.8-1.1-1.1-.8-4.5-3.2c-1.4-1.1-3.2-1.6-5-1.6z"/><path class="st11" d="m1636.8 125.9-1.1 1.5-1.7-1.4 1.3-1.7zM1634.6 129.8l-.4.4-.3-.3-1.8-1.3.5-.7 1.6 1.5zM1652.7 121.6l-12.5 4.8-2.9-4.9 1-1.3c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c.4-.1.7-.2 1.1-.2l2.1 6.3z"/><path class="st12" d="m1621.5 177-8.3-8.2c-2.6-2.6-2.9-6.7-.8-9.6l26.5-36.2c1-1.4 2.4-2.3 4.1-2.8l7.1-1.9c2.1-.6 4.4-.2 6.2 1.1l4.5 3.2-39.3 54.4z"/><path class="st6" d="m1621.8 167.3-7.5-5.2 2.9-4.1.8.6-1.7 2.5 2.5 1.7 1.2-1.7.8.6-1.2 1.7 2.5 1.7 1.7-2.5.8.6-2.8 4.1zM1621.9 160l-.8-.6 2.9-4.1.8.6-2.9 4.1zM1629 156.9l-7.5-5.2 2.3-3.3c.3-.5.7-.7 1.3-.8.6-.1 1.1 0 1.5.3l.5.3c.4.3.6.6.8 1.1.2.5 0 1-.4 1.6l.6-.8c.2-.2.4-.4.7-.4.3 0 .5 0 .8.2l2.9 2-1.2 1.7-2.5-1.7c-.2-.2-.5-.2-.8-.2-.3.1-.5.2-.7.4l-.6.8 3.3 2.3-1 1.7zm-3-4.6.6-.8c.2-.2.2-.5.2-.8-.1-.3-.2-.5-.4-.7l-.8-.6c-.2-.2-.5-.2-.8-.2-.3.1-.5.2-.6.4l-.6.8 2.4 1.9zM1633.9 149.8l-5.8-4-.6.8-.8-.6.3-2.2.6-.8 7.5 5.2-1.2 1.6zM1636.4 146.2l-7.5-5.2 2.3-3.3c.3-.5.7-.7 1.3-.8.6-.1 1.1 0 1.5.3l4.1 2.9c.4.3.7.7.8 1.3.1.6 0 1.1-.3 1.5l-2.2 3.3zm.3-2.2.6-.8c.2-.2.2-.5.2-.8-.1-.3-.2-.5-.4-.6l-4.1-2.9c-.2-.2-.5-.2-.8-.2-.3.1-.5.2-.6.4l-.6.8 5.7 4.1zM1641 139.6l-7.5-5.2 2.3-3.3c.3-.5.7-.7 1.3-.8.6-.1 1.1 0 1.5.3l.5.3c.4.3.6.6.8 1.1.2.5 0 1-.4 1.6l.6-.8c.2-.2.4-.4.7-.4.3 0 .5 0 .8.2l2.9 2-1.2 1.7-2.5-1.7c-.2-.2-.5-.2-.8-.2-.3.1-.5.2-.7.4l-.6.8 3.3 2.3-1 1.7zm-3-4.5.6-.8c.2-.2.2-.5.2-.8-.1-.3-.2-.5-.4-.7l-.8-.6c-.2-.2-.5-.2-.8-.2-.3.1-.5.2-.6.4l-.6.8 2.4 1.9z"/><g class="st14"><path class="st10" d="m1624.6 163.2-2.8 4.1-7.5-5.2 1-1.4 2.3-2.4.4.2-1.7 2.5 2.5 1.8 1.1-1.7.8.6-1.1 1.6 2.5 1.8 1.7-2.5z"/></g><g class="st14"><path class="st10" d="m1624.8 155.8-2.9 4.2-.8-.6 2.9-4.1z"/></g><g class="st14"><path class="st10" d="m1644.5 134.6-1.2 1.7-2.5-1.7s-.1 0-.1-.1l1.4-1.5 2.4 1.6z"/></g><g class="st14"><path class="st10" d="m1642.2 137.9-1.2 1.7-3.1-2.2 1.4-1.4z"/></g><g class="st14"><path class="st10" d="m1638.7 142.9-2.3 3.3-4.2-2.9 1.4-1.5 3.1 2.2.6-.8c.2-.2.2-.5.2-.8-.1-.3-.2-.5-.4-.6l-2-1.4 1.4-1.5 1.7 1.2c.4.3.7.7.8 1.3.1.5 0 1-.3 1.5z"/></g><g class="st14"><path class="st10" d="m1635.1 148.1-1.2 1.7-4.8-3.4 1.4-1.4z"/></g><g class="st14"><path class="st10" d="m1627.4 152.1-.6.8 3.3 2.3-1.1 1.7-6-4.2 1.4-1.5 1.6 1.1.6-.8c.2-.2.2-.5.2-.8-.1-.3-.2-.5-.4-.7l-.4-.3 1.4-1.5c.3.2.5.6.6 1 .2.5 0 1-.4 1.6l.6-.8c.2-.2.4-.4.7-.4.3 0 .5 0 .8.2l2.9 2-1.1 1.7-2.5-1.7c-.2-.2-.5-.2-.8-.2-.4.1-.6.3-.8.5z"/></g><g><path d="M1610.3 202.2h-.6l-94.2-14.3c-1.4-.2-2.6-1.1-3.1-2.4-.3-.7-.4-1.4-.3-2.2.1-.6.3-1.2.6-1.8.6-.8 13.8-20.9 31.5-35.1 15.8-12.6 33.3-23.3 38-26.1l-8.7-28.2c-.2-.5 0-1.1.3-1.6.9-1.3 3.5-2.1 5.2-2.1s2.2.8 2.3 1.3l9.5 30.8c1.8.3 3.8.5 5.8.5 4.2 0 8.4-.7 12.4-2 5-1.7 15-9.6 25.5-17.9 17.6-14 37.6-29.8 50.5-29.8 1.7 0 3.2 1.1 3.8 2.6 4 10.6 34.4 84.2 43.7 106.5.4 1 .4 2.1 0 3.1s-1.2 1.8-2.2 2.2c-.5.2-1 .3-1.6.3-1.7 0-3.2-1-3.8-2.5-10-24.1-28-67.7-37.7-91.6l-73.6 108.3c-.1.1-.1.2-.2.2 0 .1-.1.1-.2.2l-.2.2v.1h-.1l-.2.2-.2.1c-.1.1-.2.1-.3.2-.1.1-.2.1-.4.2-.1.1-.3.1-.4.2l-.2.1c-.1 0-.2 0-.2.1-.1.2-.4.2-.7.2zm-5.8-9.1-19.8-64.6c-5.7 3.5-21.3 13.3-35.3 24.4-11.2 9-20.8 20.9-26 27.9l81.1 12.3zm7.2-4.4 71.9-105.8c-.5-1.1-.9-2.2-1.2-3.1-10.6 2.3-28.4 16.3-42.7 27.7-11.7 9.2-21.7 17.2-28.1 19.3-4.9 1.6-9.9 2.4-14.8 2.4-1.1 0-2.2 0-3.3-.1l18.2 59.6z" fill="#e00"/><path class="st1" d="M1685.1 72.2c1.3 0 2.6.8 3 2.1 4.2 11.1 37.1 90.7 43.7 106.6.7 1.7-.1 3.6-1.8 4.2-.4.2-.8.2-1.2.2-1.3 0-2.5-.8-3-2-7.3-17.7-28-67.7-38.3-93L1614 198.5l-.9 1.4v.1c0 .1-.1.1-.1.2s-.1.1-.1.2c-.1.1-.1.2-.2.2l-.2.2s-.1 0-.1.1c-.1.1-.2.1-.2.2-.1.1-.2.1-.3.2-.1.1-.2.1-.3.1-.1 0-.1 0-.2.1h-.2c-.2.1-.5.1-.7.1h-.5l-2.8-.4-91.4-13.8c-1.1-.2-2-.9-2.5-1.9-.2-.5-.3-1.1-.3-1.7.1-.5.2-1 .5-1.4.6-.8 13.9-20.9 31.4-34.9 16.8-13.4 35.5-24.7 38.5-26.4l-8.9-28.9c-.4-1.2 2.8-2.6 4.7-2.6.8 0 1.3.2 1.5.7l9.6 31.3c1.8.3 4 .6 6.5.6 3.7 0 8.1-.5 12.7-2.1 5.1-1.7 15.2-9.7 25.8-18.1 17.3-14.1 37.2-29.8 49.8-29.8m-88.3 56.2c-1.6 0-3.1-.1-4.5-.2l19.2 62.5L1684.6 83c-.7-1.6-1.2-3-1.7-4.2-10.8 1.8-29 16.3-43.8 28-11.6 9.2-21.5 17.1-27.8 19.1-5.4 1.9-10.4 2.5-14.5 2.5m8.9 65.8-20.5-67c-5.2 3.1-21.6 13.3-36.4 25.1-12 9.6-22.2 22.6-27 29.2l83.9 12.7m79.4-123.8c-13.2 0-33.3 15.9-51.1 30-10 7.9-20.4 16.2-25.3 17.8-3.9 1.3-8 2-12.1 2-1.7 0-3.5-.1-5.1-.4l-9.3-30.3c-.2-.6-.8-1.9-3.1-1.9-2 0-4.8 1-5.9 2.5-.5.7-.7 1.5-.5 2.3l8.5 27.6c-5.4 3.2-22.2 13.6-37.5 25.8-17.8 14.2-31.2 34.4-31.7 35.3-.4.6-.7 1.4-.8 2.2-.1.9 0 1.8.4 2.6.7 1.6 2.1 2.6 3.8 2.9l91.4 13.8 2.8.4c.3 0 .5.1.7.1.3 0 .7 0 1-.1.1 0 .2 0 .2-.1h.1l.2-.1c.2 0 .4-.1.5-.2.2-.1.3-.1.4-.2.1-.1.2-.1.3-.2l.1-.1.1-.1.1-.1.1-.1.5-.5v-.2s.1-.1.1-.2l.9-1.4 71.7-105.6c9.8 24.1 27.3 66.4 37.1 90.1.8 1.9 2.6 3.1 4.6 3.1.7 0 1.3-.1 1.9-.4 1.2-.5 2.2-1.5 2.7-2.7s.5-2.6 0-3.8c-11.8-28.6-39.8-96.3-43.7-106.5-.2-2-2.1-3.3-4.1-3.3zm-88.3 59.7c5.1 0 10.2-.8 15.1-2.5 6.5-2.2 16.6-10.2 28.3-19.4 13.9-11 31.2-24.7 41.6-27.4.2.6.5 1.3.8 2l-70.6 104-17.4-56.7h2.2zm-71.9 50.1c5.3-7.1 14.5-18.1 25-26.6 13.2-10.6 27.9-19.9 34.3-23.8l19.1 62.2-78.4-11.8z"/></g></g><g id="streetFrame"><path class="st7" d="M519.2 205.2h-.5l-86.8-12.8c-1.6-.2-3-1.3-3.7-2.8-.6-1.5-.5-3.3.5-4.6l61.6-86.4-4.8-20.2c-.1-.4-.1-1 .4-1.7 1.1-1.3 3.8-2.2 5.8-2.2 2.3 0 2.8 1 3 1.7l4.3 18.2 101.7-11c-1.2-3.7-2.3-7.3-3.4-10.7l-.1-.2c-.2-.6-.1-1.2.4-1.8 1.1-1.5 4.1-2.5 6.1-2.5 1.9 0 2.5.9 2.7 1.5.3 1 31.3 101 47.4 119.2.8 1 1.3 2.2 1.2 3.4-.1 1.3-.7 2.4-1.6 3.3-.9.8-2 1.2-3.1 1.2-1.4 0-2.7-.6-3.6-1.6-10.7-12.2-26.4-54.1-37.9-87.7l-86 96.2-.1.1-.3.3c-.1.1-.2.2-.4.3-.1.1-.3.2-.4.3-.1 0-.2.1-.3.1s-.1.1-.2.1-.2.1-.3.1-.2.1-.3.1-.2.1-.3.1c-.2 0-.5.1-.8.1.1-.1 0-.1-.2-.1zm-6.2-10.5-19.8-83.9-52.3 73.3 72.1 10.6zm8.7-4.2L605.2 97c-.5-1.4-.9-2.8-1.4-4.1l-.1-.4-102.5 11.1 20.5 86.9z"/><path class="st1" d="M603.7 69.1c.9 0 1.5.2 1.7.8.3 1 31.4 101.2 47.6 119.6 1.4 1.6 1.2 3.9-.3 5.3-.7.6-1.6.9-2.5.9-1 0-2.1-.4-2.8-1.3-11-12.5-27.5-57.2-38.2-89L522 202.9c-.1.1-.1.2-.2.2-.1.1-.2.2-.3.2-.1.1-.2.1-.3.2-.1 0-.1.1-.2.1 0 0-.1 0-.1.1-.1 0-.2.1-.2.1-.1 0-.2.1-.2.1-.1 0-.2 0-.2.1-.2 0-.4.1-.6.1h-.9l-86.7-12.7c-1.3-.2-2.4-1-2.9-2.2s-.4-2.6.4-3.6l61.9-86.8-4.9-20.6c-.3-1.4 3-2.6 5.3-2.6 1 0 1.9.3 2 .9l4.5 19.1 103.8-11.3c-2.2-6.8-3.6-11.2-3.8-12.1-.6-1.5 3-3.1 5.3-3.1m-82.5 123.5 85.1-95.3c-.7-2-1.3-4-1.9-5.8L500 102.8l21.2 89.8m-6.9 3.3-20.7-87.5-54.5 76.4 75.2 11.1m89.4-128.8c-2.3 0-5.6 1.2-6.9 2.9-.6.8-.8 1.8-.5 2.7l.1.2c.9 3 1.9 6.2 3 9.6l-99.6 10.8-4.1-17.3c-.2-.7-.9-2.4-4-2.4-1.9 0-5.2.8-6.6 2.5-.6.8-.8 1.7-.6 2.5l4.7 19.7-61.3 86c-1.2 1.6-1.4 3.8-.6 5.6s2.5 3.1 4.5 3.4l86.7 12.7h1.3c.3 0 .6-.1.9-.1.1 0 .3-.1.4-.1.1 0 .2-.1.4-.1.1 0 .2-.1.3-.2.1 0 .1-.1.2-.1.1-.1.2-.1.4-.2.1-.1.3-.2.4-.3.2-.1.3-.2.4-.4l.3-.3 84.8-94.9c11.4 33.4 26.9 74.3 37.5 86.5 1.1 1.2 2.7 2 4.3 2 1.4 0 2.8-.5 3.8-1.4 1.1-1 1.8-2.4 1.9-3.9.1-1.5-.4-3-1.4-4.2-6.5-7.4-16.6-30.1-29.4-65.7-9.9-27.7-17.7-52.9-17.8-53.2-.1-.7-.8-2.3-3.5-2.3zm-101.3 37.4L603 93.6c.3 1 .7 2.1 1 3.2l-81.8 91.6-19.8-83.9zm-59.8 78.9 50-70.2 19 80.3-69-10.1z"/><circle cx="433.8" cy="186.5" r="3"/><circle cx="645.8" cy="186.5" r="3"/></g></g></switch></svg>
          ${this.pedals ? html`<div class="bikePedals bikePedals-${this.pedals} bikePedals-${this.pedals}--${this.frame}"></div>`:''}
          ${this.handles ? html`<div class="bikeHandles bikeHandles-${this.handles} bikeHandles-${this.handles}--${this.frame}"></div>`:''}
          ${this.seat ? html`<div class="bikeSeat bikeSeat-${this.seat} bikeSeat-${this.seat}--${this.frame}"></div>`:''}
          ${this.wheels ? html`<div class="bikeWheels bikeWheels-${this.wheels} bikeWheels-${this.wheels}Rear--${this.frame}"></div>`:''}
          ${this.wheels ? html`<div class="bikeWheels bikeWheels-${this.wheels} bikeWheels-${this.wheels}Front--${this.frame}"></div>`:''}
        `:''}
      </div>
      ${this.state === 'color' ? html`
        <div class="bike-parts-wrapper">
          <h2>Choose your color</h2>
          <ul class="bikePart-carousel">
            <li id="cardColor-Tri"><a href=""><img src="assets/img/card-colors/card-Blue.svg" alt="Light blue color"/></a></li>
            <li id="cardColor-eBike"><a href=""><img src="assets/img/card-colors/card-Red.svg" alt="Red color"/></a></li>
            <li id="cardColor-wagon"><a href=""><img src="assets/img/card-colors/card-Orange.svg" alt="Orange color"/></a></li>
            <li id="cardColor-loRider"><a href=""><img src="assets/img/card-colors/card-Navy.svg" alt="Navy blue color"/></a></li>
          </ul>
        </div>
      ` : ''}
      ${this.state === 'pedals' ? html`
        <div class="bike-parts-wrapper">
          <h2>Choose your pedals</h2>
          <ul class="bikePart-carousel">
            <li id="cardPedal-loRider"><a href=""><img src="assets/img/card-pedals/cardPedals-loRider.svg" alt="Pedals low rider bike"/></a></li>
            <li id="cardPedals-Tri"><a href=""><img src="assets/img/card-pedals/cardPedals-Tri.svg" alt="Pedals Triathlon bike"/></a></li>
            <li id="cardSeat-wagon"><a href=""><img src="assets/img/card-pedals/cardPedals-wagon.svg" alt="Pedals wagon bike"/></a></li>
            <li id="cardPedal-eBike"><a href=""><img src="assets/img/card-pedals/cardPedals-eBike.svg" alt="Pedals eBike bike"/></a></li>
            <li id="cardPedal-Road"><a href=""><img src="assets/img/card-pedals/cardPedals-Road.svg" alt="Pedals road bike"/></a></li>
          </ul>
        </div>
      ` : ''}
      ${this.state === 'handles' ? html`
        <div class="bike-parts-wrapper">
          <h2>Choose your handles</h2>
          <ul class="bikePart-carousel">
            <li id="cardHandles-loRider"><a href=""><img src="assets/img/card-handles/cardHandles-loRider.svg" alt="Handles low rider bike"/></a></li>
            <li id="cardHandles-Tri"><a href=""><img src="assets/img/card-handles/cardHandles-Tri.svg" alt="Handles Triathlon bike"/></a></li>
            <li id="cardHandles-wagon"><a href=""><img src="assets/img/card-handles/cardHandles-wagon.svg" alt="Handles wagon bike"/></a></li>
            <li id="cardHandles-eBike"><a href=""><img src="assets/img/card-handles/cardHandles-eBike.svg" alt="Handles eBike bike"/></a></li>
            <li id="cardHandles-Road"><a href=""><img src="assets/img/card-handles/cardHandles-Road.svg" alt="Handles road bike"/></a></li>
          </ul>
        </div>
      ` : ''}
      ${this.state === 'seat' ? html`
        <div class="bike-parts-wrapper">
          <h2>Choose your Seat</h2>
          <ul class="bikePart-carousel">
              <li id="cardSeat-loRider"><a href=""><img src="assets/img/card-seats/cardSeat-loRider.svg" alt="Seat low rider bike"/></a></li>
              <li id="cardSeat-Tri"><a href=""><img src="assets/img/card-seats/cardSeat-Tri.svg" alt="Seat Triathlon bike"/></a></li>
              <li id="cardSeat-wagon"><a href=""><img src="assets/img/card-seats/cardSeat-wagon.svg" alt="Seat wagon bike"/></a></li>
              <li id="cardSeat-eBike"><a href=""><img src="assets/img/card-seats/cardSeat-eBike.svg" alt="Seat eBike bike"/></a></li>
              <li id="cardSeat-Road"><a href=""><img src="assets/img/card-seats/cardSeat-Road.svg" alt="Seat road bike"/></a></li>
          </ul>
        </div>
      ` : ''}
      ${this.state === 'wheels' ? html`
        <div class="bike-parts-wrapper">
          <h2>Choose your wheels</h2>
          <ul class="bikePart-carousel">
            <li id="cardWheels-loRider"><a href=""><img src="assets/img/card-wheels/cardWheels-eBike.svg" alt="Wheels low rider bike"/></a></li>
            <li id="cardWheels-Tri"><a href=""><img src="assets/img/card-wheels/cardWheels-Tri.svg" alt="Wheels Triathlon bike"/></a></li>
            <li id="cardWheels-wagon"><a href=""><img src="assets/img/card-wheels/cardWheels-wagon.svg" alt="Wheels wagon bike"/></a></li>
            <li id="cardWheels-eBike"><a href=""><img src="assets/img/card-wheels/cardWheels-loRider.svg" alt="Wheels eBike bike"/></a></li>
            <li id="cardWheels-Road"><a href=""><img src="assets/img/card-wheels/cardWheels-Road.svg" alt="Wheels road bike"/></a></li>
          </ul>
        </div>
      `:''}
    `;
  }
}

customElements.define('e-bike-assembly', EBikeAssembly);
