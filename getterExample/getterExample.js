import { LightningElement } from "lwc";

export default class GetterExample extends LightningElement {
  title = "This is getter method";

  get getTitle() {
    return this.title.toUpperCase();
  }
}
