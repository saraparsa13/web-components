import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export class EmptyState extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';

  render() {
    return html`
      <div class="container" part="container">
        <span class="icon" part="icon">
          <slot name="icon"></slot>
        </span>
        <div class="content" part="content">
          ${this.title
            ? html`<span part="title" class="title">${this.title}</span>`
            : nothing}
          ${this.description
            ? html`<p part="description" class="description">
                ${this.description}
              </p>`
            : nothing}
        </div>
        <div class="actions" part="actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }
}
