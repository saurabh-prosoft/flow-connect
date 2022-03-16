const markdownItAttrs = require('markdown-it-attrs');

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Flow Connect',
  description: 'A lightweight yet powerful library for creating node-based visual programming interfaces.',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['script', { src: '/libs/flow-connect.js' }],
    ['script', { src: '/libs/standard-nodes.js' }],
    ['script', { src: '/example/custom-nodes.js' }]
  ],

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    smoothScroll: true,
    navbar: [
      { text: 'Guide', link: '/guide/' },
      // { text: 'Examples', link: '/examples/' },
      {
        text: 'Reference', children: [
          { text: 'Flow Connect', children: [{ text: 'API', link: '/reference/api/classes/flow-connect' }] },
          {
            text: 'Standard Nodes', children: [
              { text: 'Common', link: '/reference/standard-nodes/common/' },
              { text: 'Audio', link: '/reference/standard-nodes/audio/' },
              { text: 'Math', link: '/reference/standard-nodes/math/' },
              { text: 'Net', link: '/reference/standard-nodes/net/' },
              { text: 'UI', link: '/reference/standard-nodes/ui/' },
              { text: 'Visual', link: '/reference/standard-nodes/visual/' }
            ]
          }
        ]
      },
      { text: 'v1.0.1-beta', link: '/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/get-started.md',
            '/guide/setup.md',
            '/guide/flow.md',
            '/guide/nodes.md',
            '/guide/node-ui.md',
            '/guide/groups.md',
            '/guide/connect.md',
            '/guide/sub-flows.md'
          ]
        }
      ],
      '/reference/api/': [
        {
          text: 'Classes',
          collapsible: true,
          children: [
            { text: 'FlowConnect', link: '/reference/api/classes/flow-connect.md' },
            { text: 'Color', link: '/reference/api/classes/color.md' },
            { text: 'Connector', link: '/reference/api/classes/connector.md' },
            { text: 'Flow', link: '/reference/api/classes/flow.md' },
            { text: 'Graph', link: '/reference/api/classes/graph.md' },
            { text: 'GraphNode', link: '/reference/api/classes/graph-node.md' },
            { text: 'Group', link: '/reference/api/classes/group.md' },
            { text: 'Hooks', link: '/reference/api/classes/hooks.md' },
            { text: 'Node', link: '/reference/api/classes/node.md' },
            { text: 'SubFlowNode', link: '/reference/api/classes/subflow-node.md' },
            { text: 'Terminal', link: '/reference/api/classes/terminal.md' },
            { text: 'TunnelNode', link: '/reference/api/classes/tunnel-node.md' },
            { text: 'Vector', link: '/reference/api/classes/vector.md' }
          ],
        },
        {
          text: 'Interfaces',
          collapsible: true,
          children: [],
        },
        {
          text: 'Enums',
          collapsible: true,
          children: [],
        },
        {
          text: 'Functions',
          collapsible: true,
          children: [],
        }
      ],
      '/reference/standard-nodes/': [
        {
          text: 'Common',
          children: []
        },
        {
          text: 'Math',
          children: []
        },
        {
          text: 'Net',
          children: []
        },
        {
          text: 'UI',
          children: []
        },
        {
          text: 'Audio',
          children: []
        },
        {
          text: 'Visual',
          children: []
        }
      ]
    },
    repo: 'saurabh-prosoft/flow-connect',
    lastUpdated: true,
    search: true,
    docsRepo: 'saurabh-prosoft/flow-connect',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true
  },
  extendsMarkdown: (md) => {
    md.use(markdownItAttrs)
  },
  plugins: [
    ['@vuepress/search', {
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }],
    ['@vuepress/medium-zoom', {
      selector: 'img.zoomable'
    }]
  ]
}
