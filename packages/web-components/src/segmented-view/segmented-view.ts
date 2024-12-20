import { html, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";
import { getRenderRootSlot, isSSR, logger } from "../utils";
import { Slots } from "./constants";
import { SegmentedViewItem } from "./item";

export class SegmentedView extends LitElement {
  private _activeItem = "";

  /**
   * The label used for screen readers.
   */
  @property({ type: String, attribute: "screen-reader-label" })
  public screenReaderLabel = "";

  private get _items() {
    const itemsSlot = getRenderRootSlot(this.renderRoot, Slots.DEFAULT);

    if (!itemsSlot) return [];

    const items = itemsSlot
      .assignedNodes()
      .filter(node => node instanceof SegmentedViewItem);

    return items;
  }

  private get _queryActiveItem() {
    return this._items.find(item => item.active) ?? null;
  }

  /**
   * The value of the currently activated item.
   */
  @property({ type: String, attribute: false })
  public get activeItem() {
    return this._activeItem;
  }

  public set activeItem(value: string) {
    if (isSSR()) return;

    this._activate(value);
  }

  private _activate(itemValue: string) {
    const targetItem = this._items.find(item => {
      return item.value === itemValue;
    });

    if (!targetItem || targetItem.active) return;

    this._items.forEach(item => {
      if (item !== targetItem) item.active = false;
    });

    this._activeItem = itemValue;
    targetItem.active = true;
  }

  private _handleItemsSlotChange() {
    const hasActiveItem = !!this._queryActiveItem;
    const firstItem = this._items[0];

    if (hasActiveItem || !firstItem) return;

    firstItem.active = true;
  }

  protected override render() {
    if (!this.screenReaderLabel) {
      logger(
        "Set `screen-reader-label` attribute for better accessibility.",
        "segmented-view",
        "warning",
      );
    }

    return html`
      <div
        role="tablist"
        class="root"
        part="root"
        aria-label=${this.screenReaderLabel || nothing}
      >
        <slot @slotchange=${this._handleItemsSlotChange}></slot>
      </div>
    `;
  }
}
