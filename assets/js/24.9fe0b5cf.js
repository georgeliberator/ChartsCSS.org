(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{287:function(t,a,e){},312:function(t,a,e){"use strict";e(287)},330:function(t,a,e){"use strict";e.r(a);e(49);var s={name:"ChartBuilder",data:()=>({chartControls:{chartType:[{type:"legend",label:"Chart Type"},{type:"button",id:"",label:"None"},{type:"button",id:"bar",label:"Bar"},{type:"button",id:"column",label:"Column"},{type:"button",id:"area",label:"Area"},{type:"button",id:"line",label:"Line"},{type:"button",id:"radial",label:"Radial",disabled:"disabled"},{type:"button",id:"pie",label:"Pie",disabled:"disabled"},{type:"button",id:"radar",label:"Radar",disabled:"disabled"},{type:"button",id:"polar",label:"Polar",disabled:"disabled"}],multiple:[{type:"legend",label:"Datasets"},{type:"button",id:"multiple",label:"Multiple"}],data:[{type:"legend",label:"Data"},{type:"button",id:"hide-data",label:"Hide Data",condition:["bar","column","area","line"]},{type:"button",id:"show-data-on-hover",label:"Show Data on Hover",condition:["bar","column","area","line"]}],heading:[{type:"legend",label:"Heading"},{type:"button",id:"show-heading",label:"Show Heading",condition:["bar","column","area","line"]}],labels:[{type:"legend",label:"Labels"},{type:"button",id:"show-labels",label:"Show Labels",condition:["bar","column","area","line"]}],orientation:[{type:"legend",label:"Orientation"},{type:"button",id:"reverse",label:"Reverse",condition:["bar","column","area","line"]},{type:"button",id:"reverse-data",label:"Reverse Data",condition:["bar","column","area","line"]},{type:"button",id:"reverse-datasets",label:"Reverse Datasets",condition:["multiple"]}],primaryAxis:[{type:"legend",label:"Primary Axis"},{type:"button",id:"show-primary-axis",label:"Primary Axis",condition:["bar","column","area","line"]}],dataAxes:[{type:"legend",label:"Data Axes"},{type:"button",id:"show-data-axes",label:"Data Axes",condition:["bar","column","area","line"]}],secondaryAxes:[{type:"legend",label:"Secondary Axes"},{type:"button",id:"show-1-secondary-axes",label:"1",condition:["bar","column","area","line"]},{type:"button",id:"show-2-secondary-axes",label:"2",condition:["bar","column","area","line"]},{type:"button",id:"show-3-secondary-axes",label:"3",condition:["bar","column","area","line"]},{type:"button",id:"show-4-secondary-axes",label:"4",condition:["bar","column","area","line"]},{type:"button",id:"show-5-secondary-axes",label:"5",condition:["bar","column","area","line"]},{type:"button",id:"show-6-secondary-axes",label:"6",condition:["bar","column","area","line"]},{type:"button",id:"show-7-secondary-axes",label:"7",condition:["bar","column","area","line"]},{type:"button",id:"show-8-secondary-axes",label:"8",condition:["bar","column","area","line"]},{type:"button",id:"show-9-secondary-axes",label:"9",condition:["bar","column","area","line"]},{type:"button",id:"show-10-secondary-axes",label:"10",condition:["bar","column","area","line"]}],dataSpacing:[{type:"legend",label:"Data Spacing",condition:["bar","column"]},{type:"button",id:"data-spacing-1",label:"1",condition:["bar","column"]},{type:"button",id:"data-spacing-2",label:"2",condition:["bar","column"]},{type:"button",id:"data-spacing-3",label:"3",condition:["bar","column"]},{type:"button",id:"data-spacing-4",label:"4",condition:["bar","column"]},{type:"button",id:"data-spacing-5",label:"5",condition:["bar","column"]},{type:"button",id:"data-spacing-6",label:"6",condition:["bar","column"]},{type:"button",id:"data-spacing-7",label:"7",condition:["bar","column"]},{type:"button",id:"data-spacing-8",label:"8",condition:["bar","column"]},{type:"button",id:"data-spacing-9",label:"9",condition:["bar","column"]},{type:"button",id:"data-spacing-10",label:"10",condition:["bar","column"]},{type:"button",id:"data-spacing-11",label:"11",condition:["bar","column"]},{type:"button",id:"data-spacing-12",label:"12",condition:["bar","column"]},{type:"button",id:"data-spacing-13",label:"13",condition:["bar","column"]},{type:"button",id:"data-spacing-14",label:"14",condition:["bar","column"]},{type:"button",id:"data-spacing-15",label:"15",condition:["bar","column"]},{type:"button",id:"data-spacing-16",label:"16",condition:["bar","column"]},{type:"button",id:"data-spacing-17",label:"17",condition:["bar","column"]},{type:"button",id:"data-spacing-18",label:"18",condition:["bar","column"]},{type:"button",id:"data-spacing-19",label:"19",condition:["bar","column"]},{type:"button",id:"data-spacing-20",label:"20",condition:["bar","column"]}],datasetsSpacing:[{type:"legend",label:"Datasets Spacing"},{type:"button",id:"datasets-spacing-1",label:"1",condition:["bar","column"]},{type:"button",id:"datasets-spacing-2",label:"2",condition:["bar","column"]},{type:"button",id:"datasets-spacing-3",label:"3",condition:["bar","column"]},{type:"button",id:"datasets-spacing-4",label:"4",condition:["bar","column"]},{type:"button",id:"datasets-spacing-5",label:"5",condition:["bar","column"]},{type:"button",id:"datasets-spacing-6",label:"6",condition:["bar","column"]},{type:"button",id:"datasets-spacing-7",label:"7",condition:["bar","column"]},{type:"button",id:"datasets-spacing-8",label:"8",condition:["bar","column"]},{type:"button",id:"datasets-spacing-9",label:"9",condition:["bar","column"]},{type:"button",id:"datasets-spacing-10",label:"10",condition:["bar","column"]},{type:"button",id:"datasets-spacing-11",label:"11",condition:["bar","column"]},{type:"button",id:"datasets-spacing-12",label:"12",condition:["bar","column"]},{type:"button",id:"datasets-spacing-13",label:"13",condition:["bar","column"]},{type:"button",id:"datasets-spacing-14",label:"14",condition:["bar","column"]},{type:"button",id:"datasets-spacing-15",label:"15",condition:["bar","column"]},{type:"button",id:"datasets-spacing-16",label:"16",condition:["bar","column"]},{type:"button",id:"datasets-spacing-17",label:"17",condition:["bar","column"]},{type:"button",id:"datasets-spacing-18",label:"18",condition:["bar","column"]},{type:"button",id:"datasets-spacing-19",label:"19",condition:["bar","column"]},{type:"button",id:"datasets-spacing-20",label:"20",condition:["bar","column"]}]},userData:{chartType:[""],multiple:[],data:[],heading:[],labels:[],orientation:[],primaryAxis:[],dataAxes:[],secondaryAxes:[],dataSpacing:[],datasetsSpacing:[]}}),computed:{isMultiple(){return this.userData.multiple.includes("multiple")},chartClass(){let t="";t+=!Array.isArray(this.userData.chartType)||this.userData.chartType.length<=0||""===this.userData.chartType[0]?"":"charts-css "+this.userData.chartType;const a=["multiple","data","heading","labels","orientation","primaryAxis","dataAxes","secondaryAxes","dataSpacing","datasetsSpacing"];for(const e of a)t+=this.userData[e]?" "+this.userData[e].join(" "):"";return t.trim()}},methods:{toggleUserData(t,a){if("chartType"===t)return this.userData.chartType=[],void this.userData[t].push(a.id);if("button"===a.type){var e=this.userData[t].indexOf(a.id);-1===e?this.userData[t].push(a.id):this.userData[t].splice(e,1)}},checkCondition(t){return void 0!==t&&!t.some(t=>this.chartClass.split(" ").includes(t))}}},n=(e(312),e(12)),i=Object(n.a)(s,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"chart-builder"},[a("form",{staticClass:"controls"},[t._l(t.chartControls,(function(e,s){return a("fieldset",[t._l(e,(function(e){return["legend"===e.type?a("legend",[t._v("\n          "+t._s(e.label)+"\n        ")]):t._e(),t._v(" "),"button"===e.type?a("button",{class:{pressed:t.userData[s].includes(e.id)},attrs:{disabled:e.disabled||t.checkCondition(e.condition)},on:{click:function(a){return a.preventDefault(),t.toggleUserData(s,e)}}},[t._v("\n          "+t._s(e.label)+"\n        ")]):t._e()]}))],2)})),t._v(" "),a("fieldset",{staticClass:"chart-code"},[a("legend",[t._v("Chart code")]),t._v(" "),a("code",[t._v('\n        <table class="'),a("strong",[t._v(t._s(t.chartClass))]),t._v('">\n        '),a("br"),t._v("\n        ...\n        "),a("br"),t._v("\n        </table>\n      ")])])],2),t._v(" "),t.isMultiple?a("table",{class:t.chartClass},[a("caption",[t._v(" Multiple Dataset Table ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.isMultiple?t._e():a("table",{class:t.chartClass},[a("caption",[t._v(" Single Dataset Table ")]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])}),[function(){var t=this,a=t._self._c;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 1 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 2 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 3 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 4 ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Progress 5 ")])])])},function(){var t=this,a=t._self._c;return a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2000 ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.4","--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.3","--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.2","--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.1","--size":"0.7"}},[a("span",{staticClass:"data"},[t._v(" 70 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.0","--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2010 ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.2","--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.5","--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"1.0","--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.7","--size":"0.3"}},[a("span",{staticClass:"data"},[t._v(" 30 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.4","--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.9","--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.6","--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.4","--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.3","--size":"0.1"}},[a("span",{staticClass:"data"},[t._v(" 10 ")])]),t._v(" "),a("td",{staticStyle:{"--start":"0.2","--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])])])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[this._v(" Month ")]),this._v(" "),t("th",{attrs:{scope:"col"}},[this._v(" Progress ")])])])},function(){var t=this,a=t._self._c;return a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jan ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.0","--size":"0.3"}},[a("span",{staticClass:"data"},[t._v(" 30 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Feb ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.3","--size":"0.5"}},[a("span",{staticClass:"data"},[t._v(" 50 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Mar ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.5","--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Apr ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.8","--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" May ")]),t._v(" "),a("td",{staticStyle:{"--start":"1.0","--size":"0.65"}},[a("span",{staticClass:"data"},[t._v(" 65 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jun ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.65","--size":"0.45"}},[a("span",{staticClass:"data"},[t._v(" 45 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Jul ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.45","--size":"0.15"}},[a("span",{staticClass:"data"},[t._v(" 15 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Aug ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.15","--size":"0.32"}},[a("span",{staticClass:"data"},[t._v(" 32 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Sep ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.32","--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Oct ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.6","--size":"0.9"}},[a("span",{staticClass:"data"},[t._v(" 90 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Nov ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.9","--size":"0.55"}},[a("span",{staticClass:"data"},[t._v(" 55 ")])])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" Dec ")]),t._v(" "),a("td",{staticStyle:{"--start":"0.55","--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])])])}],!1,null,null,null);a.default=i.exports}}]);