"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[43548],{8397:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-4aab7e44",path:"/devices/DIYRuZ_AirSense.html",title:"DIYRuZ DIYRuZ_AirSense control via MQTT",lang:"en-US",frontmatter:{title:"DIYRuZ DIYRuZ_AirSense control via MQTT",description:"Integrate your DIYRuZ DIYRuZ_AirSense via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-01T19:02:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Co2 (numeric)",slug:"co2-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Pressure (numeric)",slug:"pressure-numeric",children:[]},{level:3,title:"Led_feedback (binary)",slug:"led-feedback-binary",children:[]},{level:3,title:"Enable_abc (binary)",slug:"enable-abc-binary",children:[]},{level:3,title:"Threshold1 (numeric)",slug:"threshold1-numeric",children:[]},{level:3,title:"Threshold2 (numeric)",slug:"threshold2-numeric",children:[]},{level:3,title:"Temperature_offset (numeric)",slug:"temperature-offset-numeric",children:[]},{level:3,title:"Humidity_offset (numeric)",slug:"humidity-offset-numeric",children:[]},{level:3,title:"Pressure_offset (numeric)",slug:"pressure-offset-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DIYRuZ_AirSense.md",git:{updatedTime:166296638e4}}},6575:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(66252);const a=(0,i._)("h1",{id:"diyruz-diyruz-airsense",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#diyruz-diyruz-airsense","aria-hidden":"true"},"#"),(0,i.Uk)(" DIYRuZ DIYRuZ_AirSense")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DIYRuZ_AirSense")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Vendor"),(0,i._)("td",null,"DIYRuZ")],-1),c=(0,i._)("td",null,"Description",-1),s={href:"https://modkam.ru/?p=1715",target:"_blank",rel:"noopener noreferrer"},l=(0,i.Uk)("Air quality sensor"),n=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"co2, temperature, humidity, pressure, led_feedback, enable_abc, threshold1, threshold2, temperature_offset, humidity_offset, pressure_offset, linkquality")],-1),h=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIYRuZ_AirSense.jpg",alt:"DIYRuZ DIYRuZ_AirSense"})])],-1),p=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.Uk)("How to use device type specific configuration"),f=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric" aria-hidden="true">#</a> Co2 (numeric)</h3><p>The measured CO2 (carbon dioxide) value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric" aria-hidden="true">#</a> Pressure (numeric)</h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>hPa</code>.</p><h3 id="led-feedback-binary" tabindex="-1"><a class="header-anchor" href="#led-feedback-binary" aria-hidden="true">#</a> Led_feedback (binary)</h3><p>Enable LEDs feedback. Value can be found in the published state on the <code>led_feedback</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_feedback&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_feedback&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led_feedback is ON, if <code>OFF</code> OFF.</p><h3 id="enable-abc-binary" tabindex="-1"><a class="header-anchor" href="#enable-abc-binary" aria-hidden="true">#</a> Enable_abc (binary)</h3><p>Enable ABC (Automatic Baseline Correction). Value can be found in the published state on the <code>enable_abc</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_abc&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_abc&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable_abc is ON, if <code>OFF</code> OFF.</p><h3 id="threshold1-numeric" tabindex="-1"><a class="header-anchor" href="#threshold1-numeric" aria-hidden="true">#</a> Threshold1 (numeric)</h3><p>Warning (LED2) CO2 level. Value can be found in the published state on the <code>threshold1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;threshold1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="threshold2-numeric" tabindex="-1"><a class="header-anchor" href="#threshold2-numeric" aria-hidden="true">#</a> Threshold2 (numeric)</h3><p>Critical (LED3) CO2 level. Value can be found in the published state on the <code>threshold2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;threshold2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;threshold2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>50000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric" aria-hidden="true">#</a> Temperature_offset (numeric)</h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-20</code> and the maximum value is <code>20</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric" aria-hidden="true">#</a> Humidity_offset (numeric)</h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="pressure-offset-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-offset-numeric" aria-hidden="true">#</a> Pressure_offset (numeric)</h3><p>Adjust pressure. Value can be found in the published state on the <code>pressure_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pressure_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pressure_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-1000</code> and the maximum value is <code>1000</code>. The unit of this value is <code>hPa</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),b={},v=(0,o(83744).Z)(b,[["render",function(e,t){const o=(0,i.up)("OutboundLink"),b=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[u,r,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i._)("a",s,[l,(0,i.Wm)(o)])])]),n,h])]),p,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(b,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[m])),_:1})])]),f],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);