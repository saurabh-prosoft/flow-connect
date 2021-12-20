import { Color } from "../core/color";
import { Serializable } from "../common/interfaces";
import { Node } from "../core/node";
import { Vector2 } from "../core/vector";
import { Button } from "./button";
import { Display } from "./display";
import { HorizontalLayout } from "./horizontal-layout";
import { Stack } from "./stack";
import { Image } from './image';
import { Input } from "./input";
import { Label } from "./label";
import { Select } from "./select";
import { Slider } from "./slider";
import { Source } from "./source";
import { Toggle } from "./toggle";
import { SerializedUINode, UINode, UINodeStyle, UIType } from "./ui-node";

/** @hidden */
export class Container extends UINode implements Serializable {
  contentWidth: number;

  constructor(
    node: Node,
    width: number,
    options: ContainerOptions = DefaultContainerOptions()
  ) {
    super(node, node.position, UIType.Container, {
      style: options.style ? { ...DefaultContainerStyle(), ...options.style } : DefaultContainerStyle(),
      id: options.id,
      hitColor: options.hitColor
    });

    this.width = width;
    this.height = this.node.style.padding * 2;
    this.contentWidth = this.width - 2 * this.node.style.padding;
  }

  /** @hidden */
  paint(): void {
    let context = this.context;
    context.shadowColor = this.style.shadowColor;
    context.shadowBlur = 3;
    context.shadowOffsetX = this.style.shadowOffset.x;
    context.shadowOffsetY = this.style.shadowOffset.y;
    context.fillStyle = this.style.backgroundColor;
    context.strokeStyle = this.style.borderColor;
    context.lineWidth = this.style.borderWidth;
    context.roundRect(
      this.position.x, this.position.y + this.node.style.titleHeight,
      this.width, this.height - this.node.style.titleHeight, 5
    );
    context.stroke();
    context.fill();
  }
  /** @hidden */
  paintLOD1() {
    let context = this.context;
    context.fillStyle = this.style.backgroundColor;
    context.strokeStyle = this.style.borderColor;
    context.lineWidth = this.style.borderWidth;
    context.roundRect(
      this.position.x, this.position.y + this.node.style.titleHeight,
      this.width, this.height - this.node.style.titleHeight, 5
    );
    context.stroke();
    context.fill();
  }
  /** @hidden */
  offPaint(): void {
    this.offUIContext.fillStyle = this.hitColor.hexValue;
    this.offUIContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  /** @hidden */
  reflow(): void {
    this.position = this.node.position;
    let terminalsDisplayHeight = Math.max(this.node.inputs.length, this.node.outputs.length) * this.node.style.terminalRowHeight + this.node.style.titleHeight;
    let x = this.position.x + this.node.style.padding;
    let y = this.position.y + terminalsDisplayHeight;
    this.children.filter(child => child.visible).forEach(child => {
      y += this.node.style.spacing;
      child.width = this.width - this.node.style.padding * 2;
      child.position = new Vector2(x, y);
      y += child.height;
    });
    this.height = y + this.node.style.padding - this.position.y;
  }

  /** @hidden */
  onPropChange() { /**/ }
  /** @hidden */
  onOver(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('over', this, screenPosition, realPosition);
  }
  /** @hidden */
  onDown(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('down', this, screenPosition, realPosition);
  }
  /** @hidden */
  onUp(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('up', this, screenPosition, realPosition);
  }
  /** @hidden */
  onClick(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('click', this, screenPosition, realPosition);
  }
  /** @hidden */
  onDrag(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('drag', this, screenPosition, realPosition);
  }
  /** @hidden */
  onEnter(screenPosition: Vector2, realPosition: Vector2) {
    if (this.disabled) return;

    this.call('enter', this, screenPosition, realPosition);
  }
  /** @hidden */
  onExit(screenPosition: Vector2, realPosition: Vector2) {
    if (this.disabled) return;

    this.call('exit', this, screenPosition, realPosition);
  }
  /** @hidden */
  onWheel(direction: boolean, screenPosition: Vector2, realPosition: Vector2) {
    if (this.disabled) return;

    this.call('wheel', this, direction, screenPosition, realPosition);
  }
  /** @hidden */
  onContextMenu(): void { /**/ }

  serialize(): SerializedContainer {
    return {
      width: this.width,
      propName: this.propName,
      input: this.input ? this.input.serialize() : null,
      output: this.output ? this.output.serialize() : null,
      id: this.id,
      style: {
        backgroundColor: this.style.backgroundColor,
        shadowColor: this.style.shadowColor,
        shadowBlur: this.style.shadowBlur,
        shadowOffset: this.style.shadowOffset.serialize(),
        borderWidth: this.style.borderWidth,
        borderColor: this.style.borderColor
      },
      hitColor: this.hitColor.serialize(),
      type: this.type,
      childs: this.children.map(child => (child as any).serialize())
    }
  }
  static deSerialize(node: Node, data: SerializedContainer): Container {
    let uiContainer = new Container(node, data.width, {
      style: data.style,
      id: data.id,
      hitColor: Color.deSerialize(data.hitColor)
    });

    uiContainer.children.push(...data.childs.map(serializedChild => {
      switch (serializedChild.type) {
        case UIType.Button: return Button.deSerialize(node, serializedChild);
        case UIType.Container: return Container.deSerialize(node, serializedChild);
        case UIType.Display: return Display.deSerialize(node, serializedChild);
        case UIType.HorizontalLayout: return HorizontalLayout.deSerialize(node, serializedChild);
        case UIType.Stack: return Stack.deSerialize(node, serializedChild);
        case UIType.Image: return Image.deSerialize(node, serializedChild);
        case UIType.Input: return Input.deSerialize(node, serializedChild);
        case UIType.Label: return Label.deSerialize(node, serializedChild);
        case UIType.Select: return Select.deSerialize(node, serializedChild);
        case UIType.Slider: return Slider.deSerialize(node, serializedChild);
        case UIType.Source: return Source.deSerialize(node, serializedChild);
        case UIType.Toggle: return Toggle.deSerialize(node, serializedChild);
        default: return;
      }
    }));
    return uiContainer;
  }
}

export interface ContainerStyle extends UINodeStyle {
  backgroundColor?: string,
  shadowColor?: string,
  shadowBlur?: number,
  shadowOffset?: Vector2,
  borderColor?: string,
  borderWidth?: number
}
/** @hidden */
let DefaultContainerStyle = () => {
  return {
    backgroundColor: '#dddddd',
    shadowColor: '#666',
    shadowBlur: 3,
    shadowOffset: new Vector2(3, 3),
    borderWidth: 1,
    borderColor: '#444',
    visible: true
  };
};

export interface SerializedContainer extends SerializedUINode {
  width: number
}

interface ContainerOptions {
  style?: ContainerStyle,
  id?: string,
  hitColor?: Color
}
/** @hidden */
let DefaultContainerOptions = () => {
  return {};
};
