import { LightningElement, track} from 'lwc';

export default class DataBinding extends LightningElement {
    @track name = '';
    changehandler(event){
        this.name = event.target.value;
    }
}