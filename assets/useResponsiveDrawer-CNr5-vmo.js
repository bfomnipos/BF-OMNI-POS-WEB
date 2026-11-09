import{c as a}from"./shield-check-D6Ao-HWB.js";import{r as s}from"./index-CVSqEp8a.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=a("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=a("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=a("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=a("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function M(h,t,n){const r=s.useRef(null),u=s.useRef(null),i=s.useCallback(()=>{t(!1),window.matchMedia(`(max-width: ${n}px)`).matches&&u.current?.focus()},[n,t]);return s.useEffect(()=>{if(!h)return;const d=window.matchMedia(`(max-width: ${n}px)`);if(!d.matches){t(!1);return}const p=document.body.style.overflow;document.body.style.overflow="hidden",r.current?.querySelector("[data-drawer-close]")?.focus();const f=e=>{if(e.key==="Escape"){e.preventDefault(),i();return}if(e.key!=="Tab")return;const o=Array.from(r.current?.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')??[]).filter(m=>m.getClientRects().length>0&&getComputedStyle(m).visibility!=="hidden");if(!o.length){e.preventDefault();return}const c=o[0],l=o[o.length-1];r.current?.contains(document.activeElement)?e.shiftKey&&document.activeElement===c?(e.preventDefault(),l.focus()):!e.shiftKey&&document.activeElement===l&&(e.preventDefault(),c.focus()):(e.preventDefault(),(e.shiftKey?l:c).focus())},y=e=>{e.matches||t(!1)};return document.addEventListener("keydown",f),d.addEventListener("change",y),()=>{document.removeEventListener("keydown",f),d.removeEventListener("change",y),document.body.style.overflow=p}},[h,n,i,t]),{drawerRef:r,openerRef:u,closeDrawer:i}}export{w as B,b as C,x as F,C as L,g as a,M as u};
