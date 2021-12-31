import { Terminal, TerminalType, SerializedTerminal } from "../core/terminal";
import { Node } from "../core/node";
import { SerializedVector2, Vector2 } from "../core/vector";
import { get } from "../utils/utils";
import { SerializedUINode, UINode, UINodeStyle, UIType } from "./ui-node";
import { Serializable } from "../common/interfaces";
import { Color } from "../core/color";
import { FlowState } from "../core/flow";
import { Constant } from "../resource/constants";

export class Slider2D extends UINode implements Serializable {
  private _value: Vector2;
  private thumbHitColor: string;
  offThumbCanvas: OffscreenCanvas | HTMLCanvasElement;
  private offThumbContext: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D;
  private pointDiameter: number = 20;

  get value(): Vector2 {
    if (this.propName) return this.getProp();
    return this._value;
  }
  set value(value: Vector2) {
    value = value.clamp(0, 1);

    let oldVal = this.value;
    let newVal = value;

    if (this.propName) this.setProp(newVal);
    else {
      this._value = newVal;
    }
    this.renderOffThumb();

    if (this.node.flow.state !== FlowState.Stopped) this.call('change', this, oldVal, newVal);
  }

  constructor(
    node: Node,
    options: Slider2DOptions = DefaultSlider2DOptions(node)
  ) {
    super(node, Vector2.Zero(), UIType.Slider2D, {
      draggable: true,
      style: options.style ? { ...DefaultSlider2DStyle(), ...options.style } : DefaultSlider2DStyle(),
      propName: options.propName,
      input: options.input && (typeof options.input === 'boolean'
        ? new Terminal(node, TerminalType.IN, 'vector2', '', {})
        : Terminal.deSerialize(node, options.input)),
      output: options.output && (typeof options.output === 'boolean'
        ? new Terminal(node, TerminalType.OUT, 'vector2', '', {})
        : Terminal.deSerialize(node, options.output)),
      id: options.id,
      hitColor: options.hitColor
    });

    this.height = get(options.height, this.node.style.rowHeight * 4);
    this._value = this.propName ? this.getProp() : get(options.value, new Vector2(.5, .5));
    this._value.clampInPlace(0, 1);

    if (this.input) {
      this.input.on('connect', (_, connector) => {
        if (connector.data) this.value = connector.data;
      });
      this.input.on('data', (_, data) => {
        if (data) this.value = data;
      });
    }
    if (this.output) this.output.on('connect', (_, connector) => connector.data = this.value);

    this.node.on('process', () => {
      if (this.output) this.output.setData(this.value);
    });

    this.thumbHitColor = Color.Random().hexValue;
    if (typeof OffscreenCanvas !== 'undefined') {
      this.offThumbCanvas = new OffscreenCanvas(this.width, this.height);
    } else {
      this.offThumbCanvas = document.createElement('canvas');
      this.offThumbCanvas.width = this.width;
      this.offThumbCanvas.height = this.height;
    }
    this.offThumbContext = this.offThumbCanvas.getContext('2d');
    this.renderOffThumb();
  }

  renderOffThumb() {
    let [width, height] = [this.width - this.pointDiameter, this.height - this.pointDiameter];
    this.offThumbContext.clearRect(0, 0, width, height);

    let coord = new Vector2(this.value.x, 1 - this.value.y).multiply(width, height).add(this.pointDiameter / 2);
    this.offThumbContext.fillStyle = this.thumbHitColor;
    this.offThumbContext.beginPath();
    this.offThumbContext.arc(coord.x, coord.y, this.pointDiameter / 2, 0, Constant.TAU);
    this.offThumbContext.fill();
  }

  /** @hidden */
  paint(): void {
    let context = this.node.context;

    context.fillStyle = this.style.backgroundColor;
    context.strokeStyle = this.style.borderColor;
    context.lineWidth = this.style.borderWidth;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    context.strokeRect(this.position.x, this.position.y, this.width, this.height);

    let [width, height] = [this.width - this.pointDiameter, this.height - this.pointDiameter];
    let point = new Vector2(this.value.x, 1 - this.value.y)
      .multiplyInPlace(width, height)
      .addInPlace(this.position)
      .addInPlace(this.pointDiameter / 2);

    context.fillStyle = this.style.thumbColor;
    context.beginPath();
    context.arc(point.x, point.y, this.pointDiameter / 2, 0, Constant.TAU);
    context.fill();
  }
  /** @hidden */
  paintLOD1() {
    let context = this.context;
    context.strokeStyle = '#000';
    context.fillStyle = this.style.backgroundColor;
    context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  /** @hidden */
  offPaint(): void {
    this.offUIContext.fillStyle = this.hitColor.hexValue;
    this.offUIContext.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  /** @hidden */
  reflow(): void {
    let [newWidth, newHeight] = [this.width, this.height];

    if (
      Math.floor(this.offThumbCanvas.width) !== Math.floor(newWidth)
      || Math.floor(this.offThumbCanvas.height) !== Math.floor(newHeight)
    ) {

      this.offThumbCanvas.width = newWidth;
      this.offThumbCanvas.height = newHeight;
      this.renderOffThumb();
    }

    if (this.input) {
      this.input.position.assign(
        this.node.position.x - this.node.style.terminalStripMargin - this.input.style.radius,
        this.position.y + this.height / 2
      );
    }
    if (this.output) {
      this.output.position.assign(
        this.node.position.x + this.node.width + this.node.style.terminalStripMargin + this.output.style.radius,
        this.position.y + this.height / 2
      );
    }
  }

  getHitPoint(realPosition: Vector2): boolean {
    let coord = realPosition.subtract(this.position);
    let hitColor = Color.rgbaToHex(this.offThumbContext.getImageData(coord.x, coord.y, 1, 1).data);
    return this.thumbHitColor === hitColor;
  }
  movePoint(realPosition: Vector2) {
    let [width, height] = [this.width - this.pointDiameter, this.height - this.pointDiameter];

    this._value = realPosition
      .clamp(
        this.position.x + this.pointDiameter / 2, this.position.x + this.width - this.pointDiameter / 2,
        this.position.y + this.pointDiameter / 2, this.position.y + this.height - this.pointDiameter / 2
      )
      .subtractInPlace(this.position.add(this.pointDiameter / 2))
      .clampInPlace(0, width, 0, height)
      .normalizeInPlace(0, width, 0, height);

    this.value = new Vector2(this._value.x, 1 - this._value.y);
  }

  /** @hidden */
  onPropChange(_oldVal: any, newVal: any) {
    this._value = newVal;
    this.renderOffThumb();

    this.output && this.output.setData(this.value);
  }
  /** @hidden */
  onOver(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('over', this, screenPosition, realPosition);
  }

  private isHit: boolean;
  /** @hidden */
  onDown(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    this.call('down', this, screenPosition, realPosition);
  }
  /** @hidden */
  onUp(screenPosition: Vector2, realPosition: Vector2): void {
    if (this.disabled) return;

    if (this.node.flow.state !== FlowState.Stopped) this.call('change', this, null, this._value);
    this.isHit = false;

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

    this.movePoint(realPosition);

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

    if (this.isHit) {
      this.movePoint(realPosition);
      if (this.node.flow.state !== FlowState.Stopped) this.call('change', this, null, this._value);
    }
    this.isHit = false;

    this.call('exit', this, screenPosition, realPosition);
  }
  /** @hidden */
  onWheel(direction: boolean, screenPosition: Vector2, realPosition: Vector2) {
    if (this.disabled) return;

    this.call('wheel', this, direction, screenPosition, realPosition);
  }
  /** @hidden */
  onContextMenu(): void {
    if (this.disabled) return;
  }

  serialize(): SerializedSlider2D {
    return {
      value: this.value.serialize(),
      propName: this.propName,
      input: this.input ? this.input.serialize() : null,
      output: this.output ? this.output.serialize() : null,
      height: this.height,
      style: this.style,
      id: this.id,
      hitColor: this.hitColor.serialize(),
      type: this.type,
      childs: []
    }
  }
  static deSerialize(node: Node, data: SerializedSlider2D) {
    return new Slider2D(node, {
      value: Vector2.deSerialize(data.value),
      propName: data.propName,
      input: data.input,
      output: data.output,
      height: data.height,
      style: data.style,
      id: data.id,
      hitColor: Color.deSerialize(data.hitColor)
    });
  }
}

export interface Slider2DStyle extends UINodeStyle {
  backgroundColor?: string,
  thumbColor?: string
  borderColor?: string,
  borderWidth?: number
}
/** @hidden */
let DefaultSlider2DStyle = () => {
  return {
    backgroundColor: '#666',
    thumbColor: '#fff',
    borderColor: '#000',
    borderWidth: 1
  }
}

export interface SerializedSlider2D extends SerializedUINode {
  value: SerializedVector2,
  height: number
}

interface Slider2DOptions {
  value?: Vector2,
  propName?: string,
  input?: boolean | SerializedTerminal,
  output?: boolean | SerializedTerminal,
  height?: number,
  style?: Slider2DStyle,
  id?: string,
  hitColor?: Color
}
/** @hidden */
let DefaultSlider2DOptions = (node: Node): Slider2DOptions => {
  return {
    height: node.style.rowHeight * 4
  }
};