import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showText= false;

    clickHandler(){
        this.showText = true;
    }
}