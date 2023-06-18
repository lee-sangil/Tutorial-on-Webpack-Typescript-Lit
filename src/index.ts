import '../static/style.scss'
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property()
  color = 'red'

  @property()
  name = 'Somebody';

  @property()
  age = 10;

  render() {
    return html`
      <style>
        p { color: ${this.color} } 
        h4 { color: green }
      </style>
      <p>Hello, ${this.name}!</p>
      <h4>You are ${this.age} years old.</h4>
    `;
  }
}
