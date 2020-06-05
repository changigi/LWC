import { LightningElement } from 'lwc';

export default class ToggleText extends LightningElement {
    showText = true;
    clickHandler(){
        this.showText = !this.showText;
    }
}