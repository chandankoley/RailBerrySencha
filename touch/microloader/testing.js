(function(e){var c=e.document.head;if(typeof b==="undefined"){var b=e.Ext={}}function d(f){document.write(f)}function a(f,g){var h=document.createElement("meta");h.setAttribute("name",f);h.setAttribute("content",g);c.appendChild(h)}b.blink=function(p){var j=p.js||[],n=p.css||[],l,m,o,h,k;if(navigator.userAgent.match(/IEMobile\/10\.0/)){var g=document.createElement("style");g.appendChild(document.createTextNode("@media screen and (orientation: portrait) {@-ms-viewport {width: 320px !important;}}@media screen and (orientation: landscape) {@-ms-viewport {width: 560px !important;}}"));document.getElementsByTagName("head")[0].appendChild(g)}a("viewport","width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no");a("apple-mobile-web-app-capable","yes");a("apple-touch-fullscreen","yes");if(!window.Ext){window.Ext={}}var f=window.Ext.filterPlatform=function(t){var C=false,r=navigator.userAgent,v,z;t=[].concat(t);function y(D){var i=/Mobile(\/|\s)/.test(D);return/(iPhone|iPod)/.test(D)||(!/(Silk)/.test(D)&&(/(Android)/.test(D)&&(/(Android 2)/.test(D)||i)))||(/(BlackBerry|BB)/.test(D)&&i)||/(Windows Phone)/.test(D)}function x(i){return !y(i)&&(/iPad/.test(i)||/Android/.test(i)||/(RIM Tablet OS)/.test(i)||(/MSIE 10/.test(i)&&/; Touch/.test(i)))}var q=window.location.search.substr(1),s=q.split("&"),u={},A,w;for(w=0;w<s.length;w++){var B=s[w].split("=");u[B[0]]=B[1]}A=u.platform;if(A){return t.indexOf(A)!=-1}for(v=0,z=t.length;v<z;v++){switch(t[v]){case"phone":C=y(r);break;case"tablet":C=x(r);break;case"desktop":C=!y(r)&&!x(r);break;case"ios":C=/(iPad|iPhone|iPod)/.test(r);break;case"android":C=/(Android|Silk)/.test(r);break;case"blackberry":C=/(BlackBerry|BB)/.test(r);break;case"safari":C=/Safari/.test(r)&&!(/(BlackBerry|BB)/.test(r));break;case"chrome":C=/Chrome/.test(r);break;case"ie10":C=/MSIE 10/.test(r);break}if(C){return true}}return false};for(l=0,m=n.length;l<m;l++){o=n[l];if(typeof o!="string"){h=o.profile;k=o.theme;o=o.path}if(h){if(!f(h)){continue}b.theme={name:k||"Default"}}d('<link rel="stylesheet" href="'+o+'">')}for(l=0,m=j.length;l<m;l++){o=j[l];if(typeof o!="string"){h=o.profile;o=o.path}if(h){if(!f(h)){continue}}d('<script src="'+o+'"><\/script>')}}})(this);