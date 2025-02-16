
export default {
  basePath: 'https://ramarsivalancer.github.io/yourtution',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
