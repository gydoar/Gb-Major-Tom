(()=>{"use strict";var e,t={227:()=>{const e=window.wp.element,t=window.wp.blocks,r=window.wp.i18n,a=window.wp.blockEditor,o=JSON.parse('{"u2":"create-block/major-tom-block"}');(0,t.registerBlockType)(o.u2,{icon:{src:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},(0,e.createElement)("path",{d:"M448 64.01v384c0 17.67-14.31 32-32 32s-32-14.33-32-32V169.7l-133.4 200.1c-11.88 17.81-41.38 17.81-53.25 0L64 169.7v278.3c0 17.67-14.31 32-32 32s-32-14.33-32-32v-384c0-14.09 9.219-26.55 22.72-30.63c13.47-4.156 28.09 1.141 35.91 12.88L224 294.3l165.4-248.1c7.812-11.73 22.47-17.03 35.91-12.88C438.8 37.47 448 49.92 448 64.01z"})),background:"#F0E77B",foreground:"#000000"},attributes:{heading1:{type:"string",source:"html",selector:"h5"},heading2:{type:"string",source:"html",selector:"h2"},paragraph:{type:"string",source:"html",selector:"p"}},edit:function(t){let{attributes:o,setAttributes:n}=t;const{heading1:l,heading2:c,paragraph:i}=o;return(0,e.createElement)("div",(0,a.useBlockProps)(),(0,e.createElement)(a.RichText,{placeholder:(0,r.__)("This is lorem"),tagName:"h5",onChange:e=>{n({heading1:e})},value:l,allowedFormats:[]}),(0,e.createElement)(a.RichText,{placeholder:(0,r.__)("Introduction Header"),tagName:"h2",onChange:e=>{n({heading2:e})},value:c,allowedFormats:[]}),(0,e.createElement)(a.RichText,{placeholder:(0,r.__)("Paragraph..."),tagName:"p",onChange:e=>{n({paragraph:e})},value:i,allowedFormats:[]}))},save:function(t){let{attributes:r,setAttributes:o}=t;const{heading1:n,heading2:l,paragraph:c}=r;return(0,e.createElement)("div",a.useBlockProps.save(),(0,e.createElement)(a.RichText.Content,{tagName:"h5",value:n}),(0,e.createElement)(a.RichText.Content,{tagName:"h2",value:l}),(0,e.createElement)(a.RichText.Content,{tagName:"p",value:c}))}})}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,o,n)=>{if(!r){var l=1/0;for(h=0;h<e.length;h++){for(var[r,o,n]=e[h],c=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(c=!1,n<l&&(l=n));if(c){e.splice(h--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[r,o,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[l,c,i]=r,s=0;if(l.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(i)var h=i(a)}for(t&&t(r);s<l.length;s++)n=l[s],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(h)},r=globalThis.webpackChunkmajor_tom_block=globalThis.webpackChunkmajor_tom_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[431],(()=>a(227)));o=a.O(o)})();