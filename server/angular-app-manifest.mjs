
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/courses"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 494, hash: 'b43f150ef22c5e3facad6f2475cb5e09bd7fbb48d8d646e6f5a58a65f655d1d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '68268457394b322af9e199085258803f16354637f6e93b8a05e9326c7a560dfe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3184, hash: '8ac2a68103d8c9232fee7ecfe5243e12232cbecc6398908a3f52ac3c42542d7a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 3190, hash: '555ad7cb74697d24ea634400e4a90bf806a6198526082a5a724ca3aa23c4b4df', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 6819, hash: 'a25c329813c9a9c7ec9c1b799dfb7600128d6055625777fdf3fcc29f0ef2a914', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3178, hash: '94618ff4b6718e029b71f6e5e8566ff0f3d96698751b31c3c6051b94faf5061e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
