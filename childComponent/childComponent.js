import { LightningElement, api} from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message
    @api className

    get parentClass(){
        return this.className? `alert ${this.className}`:`alert`;
    }
}