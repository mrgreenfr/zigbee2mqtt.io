"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60276],{76605:(e,t,d)=>{d.r(t),d.d(t,{data:()=>o});const o={key:"v-5d4699c6",path:"/devices/PSE03-V1.1.0.html",title:"EVOLOGY PSE03-V1.1.0 control via MQTT",lang:"en-US",frontmatter:{title:"EVOLOGY PSE03-V1.1.0 control via MQTT",description:"Integrate your EVOLOGY PSE03-V1.1.0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PSE03-V1.1.0.md",git:{updatedTime:166296638e4}}},14536:(e,t,d)=>{d.r(t),d.d(t,{default:()=>a});const o=(0,d(66252).uE)('<h1 id="evology-pse03-v1-1-0" tabindex="-1"><a class="header-anchor" href="#evology-pse03-v1-1-0" aria-hidden="true">#</a> EVOLOGY PSE03-V1.1.0</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PSE03-V1.1.0</td></tr><tr><td>Vendor</td><td>EVOLOGY</td></tr><tr><td>Description</td><td>Sound and flash siren</td></tr><tr><td>Exposes</td><td>warning, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PSE03-V1.1.0.jpg" alt="EVOLOGY PSE03-V1.1.0"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),i={},a=(0,d(83744).Z)(i,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[d,o]of t)e[d]=o;return e}}}]);