import { LightningElement, api} from 'lwc';

export default class PopupChildComponent extends LightningElement {
    @api heading;
    @api msg;

    closeHandler(){
        this.dispatchEvent(new CustomEvent('close'));
    }
}