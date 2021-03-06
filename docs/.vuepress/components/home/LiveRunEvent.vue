<template>
  <canvas class="example-canvas" ref="example-custom-canvas"></canvas>
</template>

<script>
export default {
  name: "LiveRunEvent",
  props: ["play"],
  mounted() {
    this.flowConnect = new FlowConnect(this.$refs["example-custom-canvas"]);
    window.eventExampleFC = this.flowConnect;
    let flow = this.flowConnect.createFlow({ name: "Events Example" });

    let timer1 = new StandardNodes.Common.Timer(flow, {
      state: {
        delay: 500,
        lastBlink: 0,
        isBlinking: false,
        blinkDuration: 20,
        emitValue: "Event from Timer1",
      },
      position: new Vector(39.6, 5.1),
    });
    let timer2 = new StandardNodes.Common.Timer(flow, {
      state: {
        delay: 1000,
        lastBlink: 0,
        isBlinking: false,
        blinkDuration: 20,
        emitValue: "Event from Timer2",
      },
      position: new Vector(39.6, 126.8),
    });
    let timer3 = new StandardNodes.Common.Timer(flow, {
      state: {
        delay: 200,
        lastBlink: 0,
        isBlinking: false,
        blinkDuration: 20,
        emitValue: "Event from Timer3",
      },
      position: new Vector(304.3, 194),
    });
    let sync1 = new StandardNodes.Common.SyncEvent(flow, {
      position: new Vector(262.8, 57.8),
      state: { lastBlink: 0, isBlinking: false, blinkDuration: 20 },
    });
    let sync2 = new StandardNodes.Common.SyncEvent(flow, {
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
      let currTime = this.flowConnect.time;
      [...terminal.node.nodeButtons.values()][1].style.color = "#000";
      terminal.node.state.lastBlink = currTime;
    };
    flow.nodes.forEach((node) => {
      if (!node.outputs[0]) return;
      node.addNodeButton(
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
      node.outputs[0] &&
        node.outputs[0].on("emit", (terminal) => handleEmitEvent(terminal));
    });

    flow.flowConnect.on("tick", () => {
      flow.nodes.forEach((node) => {
        let statusBlip = [...node.nodeButtons.values()][1];
        if (statusBlip && statusBlip.style.color === "#000") {
          if (flow.flowConnect.time - node.state.lastBlink > 50)
            statusBlip.style.color = "transparent";
        }
      });
    });
    this.flowConnect.on("stop", () => {
      flow.nodes.forEach((node) => {
        if (node.nodeButtons.size === 2) {
          [...node.nodeButtons.values()][1].style.color = "transparent";
        }
      });
    });

    this.flowConnect.render(flow);
  },
  watch: {
    play(newVal) {
      if (newVal) {
        this.flowConnect.currFlow.start();
      } else {
        this.flowConnect.currFlow.stop();
      }
    },
  },
};
</script>

<style scoped>
.example-canvas {
  width: 100%;
  height: 100%;
  background-color: white;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
