import { FlowConnect } from 'flow-connect';
import { Vector } from 'flow-connect/core';
import { Timer, SyncEvent } from '@flow-connect/common';

let flowConnect = new FlowConnect(document.getElementById('canvas'));
let flow = flowConnect.createFlow({ name: "Events Example" });

let timer1 = new Timer(flow, {
  state: {
    delay: 500,
    lastBlink: 0,
    isBlinking: false,
    blinkDuration: 20,
    emitValue: "Event from Timer1",
  },
  position: new Vector(39.6, 5.1),
});
let timer2 = new Timer(flow, {
  state: {
    delay: 1000,
    lastBlink: 0,
    isBlinking: false,
    blinkDuration: 20,
    emitValue: "Event from Timer2",
  },
  position: new Vector(39.6, 126.8),
});
let timer3 = new Timer(flow, {
  state: {
    delay: 200,
    lastBlink: 0,
    isBlinking: false,
    blinkDuration: 20,
    emitValue: "Event from Timer3",
  },
  position: new Vector(304.3, 194),
});
let sync1 = new SyncEvent(flow, {
  position: new Vector(262.8, 57.8),
  state: { lastBlink: 0, isBlinking: false, blinkDuration: 20 },
});
let sync2 = new SyncEvent(flow, {
  position: new Vector(526.7, 118.8),
  state: { lastBlink: 0, isBlinking: false, blinkDuration: 20 },
});

let outputNode = flow.createNode("Output", new Vector(746.7, 82.8), 110, {
  state: { isLogEnabled: false },
  inputs: [{ name: "out", dataType: "event" }],
});
outputNode.ui.append(
  outputNode.createHozLayout(
    [
      outputNode.createLabel("Log output ?"),
      outputNode.createToggle({
        height: 10,
        propName: "isLogEnabled",
        style: { grow: 1 },
      }),
    ],
    { style: { spacing: 5 } }
  )
);
outputNode.inputs[0].on("event", (_terminal, data) => {
  if (outputNode.state.isLogEnabled) console.log(data);
});

timer1.outputs[0].connect(sync1.inputs[0]);
timer2.outputs[0].connect(sync1.inputs[1]);
sync1.outputs[0].connect(sync2.inputs[0]);
timer3.outputs[0].connect(sync2.inputs[1]);
sync2.outputs[0].connect(outputNode.inputs[0]);

let handleEmitEvent = (terminal) => {
  let currTime = flowConnect.time;
  if (!terminal.node.state.isBlinking) {
    [...terminal.node.nodeButtons.values()][1].style.color = "#000";
    terminal.node.state.lastBlink =
      currTime + terminal.node.state.blinkDuration;
    terminal.node.state.isBlinking = !terminal.node.state.isBlinking;
  }
};

flow.nodes.forEach((node) => {
  if (!node.outputs[0]) return;
  let statusBlip = node.addNodeButton(
    () => null,
    (context, params, nodeButton) => {
      let nodeStyle = nodeButton.node.style;
      let nodeButtonStyle = nodeButton.style;
      context.fillStyle = nodeButtonStyle.color || "transparent";
      context.strokeStyle = "#000";
      context.beginPath();
      context.arc(
        params.position.x + nodeStyle.nodeButtonSize / 2,
        params.position.y + nodeStyle.nodeButtonSize / 2,
        nodeStyle.nodeButtonSize / 2,
        0,
        2 * Math.PI
      );
      context.stroke();
      context.fill();
    },
    Align.Right
  );
  statusBlip.on("render", (nodeButton) => {
    if (
      flowConnect.time - nodeButton.node.state.lastBlink >
      nodeButton.node.state.blinkDuration
    ) {
      nodeButton.style.color = "transparent";
      nodeButton.node.state.isBlinking = false;
    }
  });
  node.outputs[0] &&
    node.outputs[0].on("emit", (terminal) => handleEmitEvent(terminal));
});

flowConnect.on("stop", () => {
  flow.nodes.forEach((node) => {
    if (node.nodeButtons.size === 2) {
      [...node.nodeButtons.values()][1].style.color = "transparent";
    }
  });
});

flowConnect.render(flow);
