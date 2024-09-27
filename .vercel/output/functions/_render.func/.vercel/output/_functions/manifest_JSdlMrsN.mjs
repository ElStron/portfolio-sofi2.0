import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Dph97b-Z.mjs';
import { d as decodeKey } from './chunks/astro/server_CKLF1DZK.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sofidev/laboratorio/portfolio-sofi2.0/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BOnzuLtn.js"}],"styles":[{"type":"external","src":"/_astro/about.BT7557sr.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/email-sender","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/email-sender\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"email-sender","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/email-sender.ts","pathname":"/api/email-sender","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/[datatype]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"dataType","dynamic":true,"spread":false}]],"params":["dataType"],"component":"src/pages/api/[dataType].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/builtwith.json","isIndex":false,"type":"endpoint","pattern":"^\\/builtwith\\.json\\/?$","segments":[[{"content":"builtwith.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/builtwith.json.js","pathname":"/builtwith.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.hxSDxoMi.js"}],"styles":[{"type":"inline","content":".backgroud{min-height:100dvh;position:relative;z-index:1;overflow:hidden;width:100%;background:#000}.backgroud:after,.backgroud:before{content:\"\";position:absolute;inset:0;height:100%;width:100%;overflow-x:hidden;z-index:-10}.backgroud:before{content:\"\";position:absolute;background-color:#090c12;background-image:radial-gradient(37.88% 68.62% at 50% 0,#1103284d,#08041000 80%),radial-gradient(10% 10% at 50% 10%,#8342f4a1,#080d1c66 90%,#035b9f00),radial-gradient(100% 28.09% at 100% 10%,#0d0c1a33,#46007c1a 80%,#00007c00),linear-gradient(180deg,#44007c13 35.79%,#46007c0d 80%,#100d17 80%),radial-gradient(74.84% 135.56% at 100% 10%,#290a9776,#0e0d17 80%);background-repeat:no-repeat;background-size:cover;height:100svh;z-index:-2;filter:blur(50px);top:-50px;left:-50px;right:-50px;width:100%}.dark .backgroud:before{content:\"\";position:absolute;background-color:#090c12;background-image:radial-gradient(37.88% 68.62% at 50% 0,#1103284d,#08041000 80%),radial-gradient(10% 10% at 50% 10%,#8342f4a1,#080d1c66 90%,#035b9f00),radial-gradient(100% 28.09% at 100% 10%,#0d0c1a33,#46007c1a 80%,#00007c00),linear-gradient(180deg,#44007c13 35.79%,#46007c0d 80%,#100d17 80%),radial-gradient(74.84% 135.56% at 100% 10%,#290a9776,#0e0d17 80%);background-repeat:no-repeat;background-size:cover;height:100svh;z-index:-2;filter:blur(50px);top:-50px;left:-50px;right:-50px;width:100%}.dark .background:after{content:\"\";background-color:#13131c;z-index:-3}.youtubeThumbnail{background-size:cover;width:100%;height:116%;position:absolute;z-index:-1;top:-17%;left:0;mix-blend-mode:multiply;filter:opacity(.5) blur(4px);overflow:hidden}.youtube__button{max-width:10rem}.youtube__card:hover .youtube__button__play{filter:opacity(1)}.youtube__modal__box[data-astro-cid-cniau3tn]{position:fixed;top:55%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;max-width:1200px;max-height:780px;background-color:#000000df;z-index:1000;backdrop-filter:blur(21px)}@media screen and (max-width: 768px){.youtube__modal__box[data-astro-cid-cniau3tn]{width:100vw;height:100dvh}}.latestVideoEmbed[data-astro-cid-cniau3tn]{width:100%;height:100%}@media screen and (max-width: 768px){.latestVideoEmbed[data-astro-cid-cniau3tn]{height:25%}}.modal__close__button[data-astro-cid-cniau3tn]{position:absolute;top:-1px;right:50%;cursor:pointer;width:5rem;height:5rem;color:#00bbf5}.modal__close__button[data-astro-cid-cniau3tn]:hover{color:red;transform:scale(.95)}.modal__container[data-astro-cid-cniau3tn]{display:flex;align-items:center;justify-content:center;height:100%;width:100%}\n"},{"type":"external","src":"/_astro/about.BT7557sr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https:/Frida-ai.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/builtwith.json@_@js":"pages/builtwith.json.astro.mjs","\u0000@astro-page:src/pages/api/email-sender@_@ts":"pages/api/email-sender.astro.mjs","\u0000@astro-page:src/pages/api/[dataType]@_@ts":"pages/api/_datatype_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/sofidev/laboratorio/portfolio-sofi2.0/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_JSdlMrsN.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BOnzuLtn.js","@astrojs/react/client.js":"_astro/client.B-MJstjg.js","/astro/hoisted.js?q=0":"_astro/hoisted.hxSDxoMi.js","@src/components/molecules/GithubCalendar/Calendar":"_astro/Calendar.Dk5JRcq_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BT7557sr.css","/robots.txt","/_astro/Calendar.Dk5JRcq_.js","/_astro/LanguageFlag.astro_astro_type_script_index_0_lang.BnP4WC8V.js","/_astro/client.B-MJstjg.js","/_astro/hoisted.BOnzuLtn.js","/_astro/hoisted.hxSDxoMi.js","/_astro/index.CqAYE0DX.js","/docs/Angela_Sofia_Osorio_CV2024_updated.pdf","/img/about-sofi.jpeg","/img/atomic-design.webp","/img/cuadriculaDifuminada.png","/img/funkoSofi.png","/img/portadaLIVE.webp","/img/sofi-pic-1.webp","/img/sofi-pic-2.webp","/img/sofi-selfie.webp","/img/icons/DiscordLogo.svg","/img/icons/btn-play.svg","/img/icons/cuadricula.svg","/img/icons/sofi-icon.webp","/img/icons/youtube.svg","/img/loaders/loadcat.gif","/img/icons/skills/astro.svg","/img/icons/skills/css-color.svg","/img/icons/skills/file-type-html.svg","/img/icons/skills/javascript-color.svg","/img/icons/skills/nodejs-dark (1).svg","/img/icons/skills/nodejs-dark.svg","/img/icons/skills/react-dark.svg","/img/icons/skills/sass.svg","/img/icons/skills/styledcomponents.svg","/img/icons/skills/ubuntu.svg","/img/icons/skills/vue.svg","/img/icons/skills/wordpress.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"vQ/izUXQFr7OfISGcdlZX9pAobj6mgmVJ5o9hlicZeI=","experimentalEnvGetSecretEnabled":true});

export { manifest };
