/**
  Item
*/
import { SieveItem } from "./SieveItem.js"

export class GrassSieveItem extends SieveItem {
  /**
    constructor()
    @description constructs the block
  */
  constructor(position = {x: 0, y: 0}) {
    super(position)
    this._durability = 5;
    this.name = "GrassSieveItem"
    this.tooltip.html = "Grass Sieve: Used to collect seeds from water"
  }


  /**
    createGraphic()
    @description override this function to draw the graphics for the
      block.
      Each svg should be added to this.svg
    @param group the svg group to create the graphics on
  */
  createGraphic(group) {
    super.createGraphic(group)
    // draw the blade of grass
    this.svg.label = group.append("text")
  }

  /**
    initSVG()
    @description initialize the values for the svg
  */
  initSVG() {
    super.initSVG();

    this.svg.image
      .attr("x", this._position.x)
      .attr("y", this._position.y)
      .attr("width", this.size)
      .attr("height", this.size)
      .attr("href", "images/grassSieve.png")
  }




  /**
    setPosition()
    @description sets the position of this item
    @param position the new position of this item
  */
  set position(position) {
    super.position = position;

    this.svg.image
      .attr("x", this._position.x)
      .attr("y", this._position.y)
  }

  /**
    get position
    @description gets the position of the item
  */
  get position() {
    return super.position;
  }

  /**
    clone()
    @description make a copy of this crop
  */
  clone() {
    var clone = new GrassSieveItem(this._position);
    clone.quantity = this.quantity;

    clone.initSVG()
    return clone
  }

  /**
    onClick()
    @description the function called when this block is clicked
  */
  onClick() {
    // do something ...
    console.log(this.name);
  }
}
