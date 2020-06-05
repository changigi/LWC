import { LightningElement } from 'lwc';

export default class ConditionalRenderingFalse extends LightningElement {
    showText = false;
    clickHandler(){
        this.showText = true;
    }
}