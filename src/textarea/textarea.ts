import { TemplateResult, html } from 'lit';
import { live } from 'lit/directives/live.js';
import { Input } from '../input';

export class Textarea extends Input {
  protected renderInput(): TemplateResult {
    return html`
      <textarea
        class="input"
        id="textarea"
        .value=${live(this.value)}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        aria-invalid=${this.error}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        @input=${this.handleInput}
      >
      </textarea>
    `;
  }
}
