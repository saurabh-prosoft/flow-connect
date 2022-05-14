import path from "path";
import { merge } from "webpack-merge";
import common from './webpack.common.js';
import * as fs from 'fs';
const examples = fs.readdirSync("dev/scripts/examples/");

export default merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: [
      { directory: path.join(__dirname, "dev") },
      { directory: path.join(__dirname, "dist") },
    ],
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.get("/examples", function (_req, res) {
        res.json(examples);
      });
    },
    compress: true,
    port: 9000,
  },
});
