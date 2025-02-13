
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/yourtution/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/yourtution/home",
    "route": "/yourtution"
  },
  {
    "renderMode": 2,
    "route": "/yourtution/courses"
  },
  {
    "renderMode": 2,
    "route": "/yourtution/login"
  },
  {
    "renderMode": 2,
    "route": "/yourtution/signup"
  },
  {
    "renderMode": 2,
    "route": "/yourtution/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: '1005a4848837212e440b5e745232a5d809537abe7b683c49a2c0761db997622b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'ea7684ab40a892ce1997c26b6083d8888721facdfe3ba2af622ede752b0f573c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3239, hash: 'dc56a198b0a2e96b779c71d42e57b74869d93950fe29a9bee12c148a5fbddd8b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 3245, hash: '874fef2c17e4c8bb021076e4d430fc2710773fc9051724ea6fbf097ddd534019', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3233, hash: '3a022bc04b779354947bb3665fe155da52729704d58b5eb3241cb44698b44d36', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 6874, hash: '92a93cd79a16af8748bd8a07644ea6cbb52131c065f0f82aec526bcdc23cad04', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
