let flow = flowConnect.createFlow({
  name: 'Stock Flow',
  rules: {},
  terminalColors: {
    'number': '#7aff66',
    'string': '#ffe366',
    'array': '#66e6ff',
    'any': '#6675ff',
    'event': '#ffb066',
  }
});

let timer = new StandardNodes.Common.Timer(flow, { state: { delay: 1000 } });
let api = new StandardNodes.Net.API(flow, { state: { src: 'https://public.polygon.io/v2/market/now' } });
let log = new StandardNodes.Common.Log(flow);
let extract = flow.createNode('Data Extract', new Vector(50, 50), 100, {
  inputs: [{ name: 'data', dataType: 'any' }],
  outputs: [{ name: 'BTC', dataType: 'number' }, { name: 'ETH', dataType: 'number' }, { name: 'LTC', dataType: 'number' }]
});
extract.on('process', (_, inputs) => {
  if (!inputs[0]) return;
  extract.setOutputs({
    'BTC': inputs[0].crypto['X:BTCUSD'].lastTrade.p,
    'ETH': inputs[0].crypto['X:ETHUSD'].lastTrade.p,
    'LTC': inputs[0].crypto['X:LTCUSD'].lastTrade.p
  });
});
let btcBuffer = new StandardNodes.Common.Buffer(flow, { state: { size: 30 } });
let ethBuffer = new StandardNodes.Common.Buffer(flow, { state: { size: 30 } });
let ltcBuffer = new StandardNodes.Common.Buffer(flow, { state: { size: 30 } });
let btcNormalize = new StandardNodes.Math.Normalize(flow, 'array', { state: { relative: true, constant: 5 } });
let ethNormalize = new StandardNodes.Math.Normalize(flow, 'array', { state: { relative: true, constant: 5 } });
let ltcNormalize = new StandardNodes.Math.Normalize(flow, 'array', { state: { relative: true, constant: 5 } });
let btcEthToArray = new StandardNodes.Common.ToArray(flow, 2);
let btcLtcToArray = new StandardNodes.Common.ToArray(flow, 2);
let btcEthLtcToArray = new StandardNodes.Common.ToArray(flow, 3);

let btcEthChart = new StandardNodes.Visual.LineChartMini(
  flow, 100, ['#ff6666', '#66d4ff'], { backgroundColor: '#7a7a7a' }, { name: 'Example', width: 250 }
);
let btcLtcChart = new StandardNodes.Visual.LineChartMini(
  flow, 100, ['#ffb066', '#668fff'], { backgroundColor: '#7a7a7a' }, { name: 'BTC : LTC', width: 250 }
);
let btcEthLtcChart = new StandardNodes.Visual.LineChartMini(
  flow, 100, ['#ff66ad', '#669eff', '#66ffe3'], { backgroundColor: '#7a7a7a' }, { name: 'BTC : ETH : LTC', width: 250 }
);

timer.outputs[0].connect(api.inputs[0]);
api.outputs[1].connect(extract.inputs[0]);
extract.outputs[0].connect(btcBuffer.inputs[0]);
extract.outputs[1].connect(ethBuffer.inputs[0]);
extract.outputs[2].connect(ltcBuffer.inputs[0]);
//log.ui.query('button')[1].call('click');
log.ui.children[0].children[1].call('click');
log.ui.children[0].children[1].call('click');
btcBuffer.outputs[0].connect(btcNormalize.inputs[0]);
ethBuffer.outputs[0].connect(ethNormalize.inputs[0]);
ltcBuffer.outputs[0].connect(ltcNormalize.inputs[0]);
btcNormalize.outputs[0].connect(btcEthToArray.inputs[0]);
ethNormalize.outputs[0].connect(btcEthToArray.inputs[1]);
// btcEthToArray.outputs[0].connect(log.inputs[1]);
btcNormalize.outputs[0].connect(btcLtcToArray.inputs[0]);
ltcNormalize.outputs[0].connect(btcLtcToArray.inputs[1]);
// btcLtcToArray.outputs[0].connect(log.inputs[2]);
btcNormalize.outputs[0].connect(btcEthLtcToArray.inputs[0]);
ethNormalize.outputs[0].connect(btcEthLtcToArray.inputs[1]);
ltcNormalize.outputs[0].connect(btcEthLtcToArray.inputs[2]);
// btcEthLtcToArray.outputs[0].connect(log.inputs[3]);

btcBuffer.outputsUI[0].connect(btcEthChart.inputsUI[1]);
btcBuffer.outputsUI[0].connect(btcLtcChart.inputsUI[1]);
btcBuffer.outputsUI[0].connect(btcEthLtcChart.inputsUI[1]);

btcEthToArray.outputs[0].connect(btcEthChart.inputs[0]);
btcLtcToArray.outputs[0].connect(btcLtcChart.inputs[0]);
btcEthLtcToArray.outputs[0].connect(btcEthLtcChart.inputs[0]);
