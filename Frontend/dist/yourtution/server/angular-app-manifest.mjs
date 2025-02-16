
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ramarsivalancer.github.io/yourtution',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://ramarsivalancer.github.io/yourtution/home",
    "route": "/https:/ramarsivalancer.github.io/yourtution"
  },
  {
    "renderMode": 2,
    "route": "/https:/ramarsivalancer.github.io/yourtution/courses"
  },
  {
    "renderMode": 2,
    "route": "/https:/ramarsivalancer.github.io/yourtution/login"
  },
  {
    "renderMode": 2,
    "route": "/https:/ramarsivalancer.github.io/yourtution/signup"
  },
  {
    "renderMode": 2,
    "route": "/https:/ramarsivalancer.github.io/yourtution/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '1c869846c6fe5572473e111a43adf46b7730e3432ae8cad9d1a23b1a5745e395', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '3ce1ddac440a05132f15155d33d1a7a917cfaadf120107a55e735bd6cfc45ebd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'https:/ramarsivalancer.github.io/yourtution/login/index.html': {size: 3328, hash: 'd133a89c2cdd0f0d0417ecae01546a5b5d8d8d0e9c938334925f37b3de0c44fa', text: () => import('./assets-chunks/https:_ramarsivalancer_github_io_yourtution_login_index_html.mjs').then(m => m.default)},
    'https:/ramarsivalancer.github.io/yourtution/signup/index.html': {size: 3328, hash: 'd133a89c2cdd0f0d0417ecae01546a5b5d8d8d0e9c938334925f37b3de0c44fa', text: () => import('./assets-chunks/https:_ramarsivalancer_github_io_yourtution_signup_index_html.mjs').then(m => m.default)},
    'https:/ramarsivalancer.github.io/yourtution/courses/index.html': {size: 3328, hash: 'd133a89c2cdd0f0d0417ecae01546a5b5d8d8d0e9c938334925f37b3de0c44fa', text: () => import('./assets-chunks/https:_ramarsivalancer_github_io_yourtution_courses_index_html.mjs').then(m => m.default)},
    'https:/ramarsivalancer.github.io/yourtution/home/index.html': {size: 3328, hash: 'd133a89c2cdd0f0d0417ecae01546a5b5d8d8d0e9c938334925f37b3de0c44fa', text: () => import('./assets-chunks/https:_ramarsivalancer_github_io_yourtution_home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
