import { customElement } from "lit/decorators.js";
import { baseButtonStyles } from "../base-button";
import { IconButton } from "./icon-button";
import styles from "./icon-button.style";

/**
 * @summary A customizable icon button component with various styles and states.

 * @slot - Icon button's content.
 *
 * @prop {boolean} [disabled=false] - Whether the icon button is disabled.
 * @prop {'small' | 'medium' | 'large'} [size='medium'] - The size of the icon button.
 * @prop {'primary' | 'ghost' | 'naked' | 'elevated' | 'destructive' | 'brand'} [variant='primary'] - The variant style of the icon button.
 *
 * @csspart [button] - The button element.
 *
 * @cssprop [--tap-font-family=--tap-sys-font-family] - The font family for the button.
 * @cssprop [--tap-sys-radius-full] - The border radius for the button.
 * @cssprop [--tap-button-color-surface-cover=--tap-sys-color-surface-overlay-light] - The surface cover color for the button.
 * @cssprop [--tap-sys-color-surface-overlay-light] - The overlay light color for the button.
 * @cssprop [--tap-sys-color-surface-disabled] - The disabled surface color for the button.
 * @cssprop [--tap-button-color-surface-disabled=--tap-sys-color-surface-disabled] - The disabled surface color for the button.
 * @cssprop [--tap-sys-spacing-9] - The spacing for the small button height.
 * @cssprop [--tap-sys-spacing-10] - The spacing for the medium button height.
 * @cssprop [--tap-sys-spacing-11] - The spacing for the large button height.
 * @cssprop [--tap-sys-spacing-5] - The spacing for the small button padding.
 * @cssprop [--tap-sys-spacing-6] - The spacing for the medium button padding.
 * @cssprop [--tap-sys-spacing-8] - The spacing for the large button padding.
 * @cssprop [--tap-button-typography-label-sm-height=--tap-sys-typography-label-sm-height] - The line height for the small button label.
 * @cssprop [--tap-button-typography-label-sm-size=--tap-sys-typography-label-sm-size] - The font size for the small button label.
 * @cssprop [--tap-button-typography-label-sm-weight=--tap-sys-typography-label-sm-weight] - The font weight for the small button label.
 * @cssprop [--tap-button-typography-label-md-height=--tap-sys-typography-label-sm-height] - The line height for the medium button label.
 * @cssprop [--tap-button-typography-label-md-size=--tap-sys-typography-label-sm-size] - The font size for the medium button label.
 * @cssprop [--tap-button-typography-label-md-weight=--tap-sys-typography-label-sm-weight] - The font weight for the medium button label.
 * @cssprop [--tap-button-typography-label-lg-height=--tap-sys-typography-label-lg-height] - The line height for the large button label.
 * @cssprop [--tap-button-typography-label-lg-size=--tap-sys-typography-label-lg-size] - The font size for the large button label.
 * @cssprop [--tap-button-typography-label-lg-weight=--tap-sys-typography-label-lg-weight] - The font weight for the large button label.
 * @cssprop [--tap-button-color-surface-inverse-primary=--tap-sys-color-surface-inverse-primary] - The surface color for the primary variant.
 * @cssprop [--tap-sys-color-surface-inverse-primary] - The surface color for the primary variant.
 * @cssprop [--tap-button-color-content-on-inverse=--tap-sys-color-content-on-inverse] - The content color on inverse surface.
 * @cssprop [--tap-sys-color-content-on-inverse] - The content color on inverse surface.
 * @cssprop [--tap-button-color-surface-tertiary=--tap-sys-color-surface-tertiary] - The surface color for the ghost variant.
 * @cssprop [--tap-sys-color-surface-tertiary] - The surface color for the ghost variant.
 * @cssprop [--tap-button-color-content-primary=--tap-sys-color-content-primary] - The content color for the primary variant.
 * @cssprop [--tap-sys-color-content-primary] - The content color for the primary variant.
 * @cssprop [--tap-button-color-surface-primary=--tap-sys-color-surface-primary] - The surface color for the elevated variant.
 * @cssprop [--tap-sys-color-surface-primary] - The surface color for the elevated variant.
 * @cssprop [--tap-button-color-surface-destructive=--tap-sys-color-surface-negative-light] - The surface color for the destructive variant.
 * @cssprop [--tap-sys-color-surface-negative-light] - The surface color for the destructive variant.
 * @cssprop [--tap-button-color-content-destructive=--tap-sys-color-content-negative] - The content color for the destructive variant.
 * @cssprop [--tap-sys-color-content-negative] - The content color for the destructive variant.
 * @cssprop [--tap-button-color-gradient-brand=--tap-sys-color-gradient-brand] - The gradient color for the brand variant.
 * @cssprop [--tap-sys-color-gradient-brand] - The gradient color for the brand variant.
 */
@customElement("tap-icon-button")
export class TapIconButton extends IconButton {
  public static override readonly styles = [baseButtonStyles, styles];
}

declare global {
  interface HTMLElementTagNameMap {
    "tap-icon-button": TapIconButton;
  }
}
