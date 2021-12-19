let flow = flowConnect.createFlow({
  name: 'Sample Flow',
  rules: {
    'r': ['r', 'g', 'b'],
    'g': ['r', 'g', 'b'],
    'b': ['r', 'g', 'b'],
    'image': ['image']
  },
  terminalTypeColors: {
    'r': '#ff0000',
    'g': '#00ff00',
    'b': '#0000ff',
    'image': 'grey'
  }
});

let node = flow.createNode(
  'Test Node',
  new Vector2(50, 50),
  250,
  [{ name: 'R', dataType: 'r' }, { name: 'G', dataType: 'g' }, { name: 'B', dataType: 'b' }],
  [{ name: 'Image', dataType: 'image' }],
  { padding: 10, spacing: 10, rowHeight: 10 },
  {},
  { labelText: 'Label Text', sliderValue: 50, toggle: false, selectedValue: null, file: null, inputValue: 365 }
);
node.ui.append([
  node.createLabel('', { propName: 'labelText', input: true, output: true, style: { align: Align.Center, fontSize: '17px' } }),
  node.createImage(null, null, { align: Align.Center }),
  node.createHozLayout([
    node.createLabel('', { propName: 'sliderValue', style: { grow: .2, precision: 2 } }),
    node.createSlider(0, 150, { propName: 'sliderValue', input: true, output: true, height: 15, style: { grow: .8, railHeight: 5 } })
  ]),
  node.createButton('Click Me !', true, true),
  node.createHozLayout([
    node.createLabel('Toggle: ', { style: { grow: .8 } }),
    node.createToggle({ propName: 'toggle', input: true, output: true, style: { grow: .2 } })
  ]),
  node.createHozLayout([
    node.createLabel('Select: ', { style: { grow: .3 } }),
    node.createSelect(['ABC', 'DEF', 'GHI', 'JKL', 'MNO'], { propName: 'selectedValue', input: true, output: true, height: 20, style: { grow: .7 } })
  ]),
  node.createHozLayout([
    node.createLabel('Source: ', { style: { grow: .5 } }),
    node.createSource({ propName: 'file', input: true, output: true, height: 20, style: { grow: .5 } })
  ]),
  node.createHozLayout([
    node.createLabel('Input: ', { style: { grow: .4 } }),
    node.createInput({
      propName: 'inputValue', input: true, output: true, height: 20, style: { type: InputType.Number, grow: .6, align: Align.Right }
    })
  ])
]);
let numberNode = flow.createNode(
  'Number Source',
  new Vector2(50, 50),
  140, [], [],
  { padding: 10, spacing: 10, rowHeight: 10 }, {},
  { value: 15 }
);
numberNode.ui.append(numberNode.createInput({
  propName: 'value', input: true, output: true, height: 20, style: { type: InputType.Number, grow: .6, align: Align.Right }
}));
let textNode = flow.createNode(
  'Text Source',
  new Vector2(50, 120),
  140, [], [],
  { padding: 10, spacing: 10, rowHeight: 10 }, {},
  { value: 'Example Text' }
);
textNode.ui.append(textNode.createInput({
  propName: 'value', input: true, output: true, height: 20, style: { type: InputType.Text, grow: .6, align: Align.Right }
}));
let toggleNode = flow.createNode(
  'Toggle Source',
  new Vector2(50, 190),
  140, [], [],
  { padding: 10, spacing: 10, rowHeight: 10 }, {},
  { value: true }
);
toggleNode.ui.append(toggleNode.createToggle({ propName: 'value', input: true, output: true, style: { grow: .2 } }));

node.on('process', () => console.log('Test Node'));
numberNode.on('process', () => console.log('Number Source'));
textNode.on('process', () => console.log('Text Source'));
toggleNode.on('process', () => console.log('Toggle Source'));


let flow2 = flowConnect.createFlow({ name: 'Test Flow 2', rules: {}, terminalTypeColors: {} });
flow2.addInput('Input 1', 'number', new Vector2(100, 100));
flow2.addOutput('Output 1', 'string', new Vector2(200, 200));
let convertNode = flow2.createNode(
  'Converter',
  new Vector2(50, 50), 130,
  [{ name: 'Number', dataType: 'number' }],
  [{ name: 'Text', dataType: 'string' }],
  {}, {}, {}
);
convertNode.on('process', (node, inputs) => {
  console.log('Convert Node');
  node.setOutputs('Text', inputs[0] ? inputs[0].toString() : 'Error');
});
let subFlowNode = flow.addSubFlow(flow2, new Vector2(200, 200));
