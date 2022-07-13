import { Inventory } from "./inventories.js"

export class Toolbar extends Inventory {
  /**
    constructor()
    @description constructs the toolbar
    @param manager the inventory manager to add the toolbar to
  */
  constructor(player, manager) {
    super(player, manager, 1, 10)

    this.selectedSlot = this._slots[0][0];
    this._onRightClickEnabled = false;
    this._allowPickup = false;
  }
}
