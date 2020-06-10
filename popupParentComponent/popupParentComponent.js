import { LightningElement } from 'lwc';

export default class PopupParentComponent extends LightningElement {
    openChildComponent = false;
    openHandler(){
        this.openChildComponent = true;
    }
    closeHandlerParent(){
        this.openChildComponent = false;
    }
}