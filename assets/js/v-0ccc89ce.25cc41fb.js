"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[69373],{70734:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-0ccc89ce",path:"/devices/NAS-AB02B2.html",title:"Neo NAS-AB02B2 control via MQTT",lang:"en-US",frontmatter:{title:"Neo NAS-AB02B2 control via MQTT",description:"Integrate your Neo NAS-AB02B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Alarm (binary)",slug:"alarm-binary",children:[]},{level:3,title:"Melody (enum)",slug:"melody-enum",children:[]},{level:3,title:"Duration (numeric)",slug:"duration-numeric",children:[]},{level:3,title:"Volume (enum)",slug:"volume-enum",children:[]},{level:3,title:"Battpercentage (numeric)",slug:"battpercentage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/NAS-AB02B2.md",git:{updatedTime:166296638e4}}},75590:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i});const d=(0,o(66252).uE)('<h1 id="neo-nas-ab02b2" tabindex="-1"><a class="header-anchor" href="#neo-nas-ab02b2" aria-hidden="true">#</a> Neo NAS-AB02B2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>NAS-AB02B2</td></tr><tr><td>Vendor</td><td>Neo</td></tr><tr><td>Description</td><td>Alarm</td></tr><tr><td>Exposes</td><td>battery_low, alarm, melody, duration, volume, battpercentage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/NAS-AB02B2.jpg" alt="Neo NAS-AB02B2"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary" aria-hidden="true">#</a> Alarm (binary)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> alarm is ON, if <code>false</code> OFF.</p><h3 id="melody-enum" tabindex="-1"><a class="header-anchor" href="#melody-enum" aria-hidden="true">#</a> Melody (enum)</h3><p>Value can be found in the published state on the <code>melody</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;melody&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code>, <code>12</code>, <code>13</code>, <code>14</code>, <code>15</code>, <code>16</code>, <code>17</code>, <code>18</code>.</p><h3 id="duration-numeric" tabindex="-1"><a class="header-anchor" href="#duration-numeric" aria-hidden="true">#</a> Duration (numeric)</h3><p>Value can be found in the published state on the <code>duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1800</code>. The unit of this value is <code>second</code>.</p><h3 id="volume-enum" tabindex="-1"><a class="header-anchor" href="#volume-enum" aria-hidden="true">#</a> Volume (enum)</h3><p>Value can be found in the published state on the <code>volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="battpercentage-numeric" tabindex="-1"><a class="header-anchor" href="#battpercentage-numeric" aria-hidden="true">#</a> Battpercentage (numeric)</h3><p>Value can be found in the published state on the <code>battpercentage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),a={},i=(0,o(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);