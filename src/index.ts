import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue } h4 { color: green }`;

  @property()
  name = 'Somebody';

  @property()
  age = 10;

  render() {
    return html`<p>Hello, ${this.name}!</p><h4>You are ${this.age} years old.</h4>`;
  }
}
