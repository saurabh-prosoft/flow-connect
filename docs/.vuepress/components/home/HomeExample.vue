<template>
  <div class="home-example-container">
    <GraphControls class="home-example-graph-controls" @control="handleControl" :show-text="false" />
    <canvas class="home-example" ref="home-example"></canvas>
  </div>
</template>

<script setup>
import GraphControls from "../common/GraphControls.vue";
</script>
<script>
export default {
  name: "HomeExample",
  components: [GraphControls],
  mounted() {
    this.lastTheme = document.querySelector("html").className;
    this.themeChanged();

    fetch("images/hero-dark.png")
      .then((res) => res.blob())
      .then((blob) => (this.loadedDarkHeroImage = URL.createObjectURL(blob)));
    fetch("images/hero.png")
      .then((res) => res.blob())
      .then((blob) => (this.loadedLightHeroImage = URL.createObjectURL(blob)));

    setTimeout(() => {
      this.flowConnect = new FlowConnect(this.$refs["home-example"]);
      window.flowConnect = this.flowConnect;
      this.flowConnect.disableScale = true;

      this.flowConnect.on("dimension-change", (_inst, width, height) => this.arrange(width, height));

      let flow = this.flowConnect.createFlow({ name: "Math Plot", rules: {} });

      this.tovector = flow.createNode("common/to-vector", Vector.create(585, 105), {
        name: "Node",
      });
      this.func1 = flow.createNode("math/func", Vector.create(295, 54), { name: "Node", expression: "cos(t)" });
      this.func2 = flow.createNode("math/func", Vector.create(295, 184.3), {
        name: "Node",
        expression: "sin(t) + 0.2cos(2.8t)",
      });
      this.parametricPlotter = flow.createNode("visual/function-plotter", Vector.create(775, 77.2), {
        width: 250,
        name: "Node",
        plotStyle: { axisColor: "grey" },
      });
      this.parametricPlotter.plotStyle.plotColor = "#fa9868";
      this.parametricPlotter.ui.query("core/display")[0].style.borderColor = "#fff";
      this.arraySource = flow.createNode("common/array-source", Vector.create(12.4, 120.4), {
        name: "Node",
        state: {
          number: true,
          range: true,
          min: -5 * Math.PI,
          max: 5 * Math.PI,
          step: 0.1,
        },
      });

      this.arraySource.outputs[0].connect(this.func1.inputs[0]);
      this.arraySource.outputs[0].connect(this.func2.inputs[0]);
      this.func1.outputs[0].connect(this.tovector.inputs[0]);
      this.func2.outputs[0].connect(this.tovector.inputs[1]);
      this.tovector.outputs[0].connect(this.parametricPlotter.inputs[0]);

      this.flowConnect.render(flow);

      flow.nodes.forEach((node) => {
        this.orgPositions[node.id] = node.position.clone();
        node.style.color = "#fff";
        node.ui.query("core/label").forEach((label) => (label.style.color = "#fff"));
        node.ui.query("core/input").forEach((input) => (input.style.border = "#fff"));
        node.ui.query("core/toggle").forEach((toggle) => {
          toggle.style.color = "#fff";
          toggle.style.backgroundColor = "#777";
        });
      });
      flow.connectors.forEach((connector) => {
        connector.style.width = 2;
        connector.style.border = false;
        connector.style.color = "#000";
      });

      this.flowConnect.registerRenderer("background", () => {
        return (context, params, _target) => {
          context.fillStyle = "#292929";
          context.shadowColor = "#000";
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowBlur = 15;
          context.fillRect(params.position.x, params.position.y, params.width, params.height);
        };
      });

      this.arrange(this.flowConnect.canvasDimensions.width, this.flowConnect.canvasDimensions.height);

      this.themeChangeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            this.themeChanged();
          }
        });
      });

      this.themeChangeObserver.observe(document.querySelector("html"), {
        attributes: true,
      });
    }, 0);
  },
  beforeUnmount() {
    this.themeChangeObserver.disconnect();
  },
  data() {
    return {
      orgPositions: {},
      lastTheme: "",
      loadedDarkHeroImage: null,
      loadedLightHeroImage: null,
    };
  },
  methods: {
    arrange(width, _height) {
      let nodes = [[this.arraySource], [this.func1, this.func2], [this.tovector], [this.parametricPlotter]];
      let totalWidth = nodes.reduce((acc, nodeCol) => acc + this.maxWidth(nodeCol), 0);
      let spacing = (width - 40 - totalWidth) / 3;
      let x = 20;
      if (width > 419) {
        nodes.forEach((nodeCol) => {
          nodeCol.forEach((node) => {
            node.position = node.position.assign(x, this.orgPositions[node.id].y);
          });
          x += this.maxWidth(nodeCol) + spacing;
        });
      } else {
        Object.values(this.flowConnect.currFlow.nodes).forEach((node) => {
          node.position = this.orgPositions[node.id].clone();
        });
      }
      let origin = Vector.create(this.flowConnect.canvasDimensions.width, this.flowConnect.canvasDimensions.height);
      this.flowConnect.translateBy(origin.subtract(origin.transform(this.flowConnect.transform)));
    },
    maxWidth(nodes) {
      let max = -Infinity;
      nodes.forEach((node) => {
        if (node.width > max) max = node.width;
      });
      return max;
    },
    themeChanged() {
      this.lastTheme = document.querySelector("html").className;
      document.querySelector(".home .hero img").src = this.lastTheme.includes("dark")
        ? this.loadedDarkHeroImage || "images/hero-dark.png"
        : this.loadedLightHeroImage || "images/hero.png";

      let titleColor, outlineColor, connectorColor;
      if (this.lastTheme === "dark") {
        titleColor = "#fff";
        outlineColor = "#ccc";
        connectorColor = "#fff";
      } else {
        titleColor = "#000";
        outlineColor = "#000";
        connectorColor = "#000";
      }
      if (this.flowConnect) {
        this.flowConnect.currFlow.nodes.forEach((node) => {
          node.style.titleColor = titleColor;
          node.style.outlineColor = outlineColor;
        });
        this.flowConnect.currFlow.connectors.forEach((connector) => {
          connector.style.color = connectorColor;
        });
      }
    },
    handleControl(controlName) {
      if (controlName === "play") {
        if (this.flowConnect.state === FlowConnectState.Running) this.flowConnect.currFlow.stop();
        else this.flowConnect.currFlow.start();
      }
    },
  },
};
</script>

<style scoped>
.home-example-container {
  position: absolute;
  top: var(--navbar-height);
  width: calc(100% - 4rem);
  height: calc(var(--navbar-height) * 8.5);
  z-index: -1;
}
.home-example-graph-controls {
  z-index: 1;
  top: 0;
  left: unset;
  right: 0;
  transform: unset;
  border-bottom: unset;
  border-left: unset;
  border-right: unset;
  border-top: unset;
  border-bottom-left-radius: unset;
  border-top-right-radius: unset;
  border-top-left-radius: unset;
  box-shadow: -5px 4px 6px -2px var(--c-block-shadow);
  background-color: #ffffff55;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.home-example-graph-controls div {
  padding-left: 0.7rem;
}
.home-example-graph-controls .graph-control-button:first-child .graph-control-button-text {
  display: none;
}
@media (max-width: 419px) {
  .home-example-container {
    position: relative;
    top: 0;
    width: 100%;
    height: 60vh;
    z-index: 1;
  }
  .home-example {
    box-shadow: 0 0 10px grey;
  }
}
</style>
