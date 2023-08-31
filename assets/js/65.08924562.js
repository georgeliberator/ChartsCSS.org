(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{368:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"anatomy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anatomy"}},[t._v("#")]),t._v(" Anatomy")]),t._v(" "),a("p",[t._v("Charts are made of several "),a("RouterLink",{attrs:{to:"/components/"}},[t._v("components")]),t._v(" grouped together. The structure is built with a simple HTML "),a("code",[t._v("<table>")]),t._v(" element. The different components are styled using "),a("strong",[t._v("CSS classes")]),t._v(" which are defined for the parent element but applied on inner HTML elements.")],1),t._v(" "),a("h2",{attrs:{id:"chart-layers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chart-layers"}},[t._v("#")]),t._v(" Chart Layers")]),t._v(" "),a("p",[t._v("The following animation shows how the various elements are separated into layers:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"anatomy-layers"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n.layers-wrapper {\n\tposition: relative;\n\twidth: calc(100% * 0.42261826174); /* 100% * cos(65deg) */\n\twidth: 75%;\n    margin: 0 auto;\n\taspect-ratio: 1 / 1;\n}\n.layers-wrapper .charts-css {\n\tposition: absolute;\n\tinset: 0;\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0 auto;\n\tborder-radius: 10px;\n\tanimation-name: animate_layers;\n\tanimation-duration: 20s;\n\tanimation-iteration-count: infinite;\n\tanimation-timing-function: ease-in-out;\n\t--labels-size: 40px !important;\n\t--heading-size: 40px !important;\n}\n.layers-wrapper .charts-css caption {\n\tpadding: 10px !important;\n}\n.layers-wrapper .charts-css:nth-child(1) {\n\t--distance: -150px;\n}\n.layers-wrapper .charts-css:nth-child(2) {\n\t--distance: -50px;\n}\n.layers-wrapper .charts-css:nth-child(3) {\n\t--distance: 50px;\n}\n.layers-wrapper .charts-css:nth-child(4) {\n\t--distance: 150px;\n}\n.layers-wrapper:hover .charts-css {\n\tanimation-play-state: paused;\n}\n@keyframes animate_layers {\n\t5% {\n\t\ttransform: rotateX(0) rotate(0) translateZ(0);\n\t\tbackground-color: rgba(255, 255, 255, 0);\n\t\tbox-shadow: none;\n\t}\n\t20%{\n\t\ttransform: rotateX(65deg) rotate(45deg) translateZ(var(--distance));\n\t\tbackground-color: rgba(0, 0, 0, 0.1);\n\t\tbox-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\n\t}\n\t35% {\n\t\ttransform: rotateX(65deg) rotate(-135deg) translateZ(var(--distance));\n\t}\n\t65% {\n\t\ttransform: rotateX(65deg) rotate(135deg) translateZ(var(--distance));\n\t}\n\t80% {\n\t\ttransform: rotateX(65deg) rotate(-45deg) translateZ(var(--distance));\n\t\tbackground-color: rgba(0, 0, 0, 0.1);\n\t\tbox-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\n\t}\n\t95% {\n\t\ttransform: rotateX(0) rotate(0) translateZ(0);\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\tbox-shadow: none;\n\t}\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("div",{staticClass:"layers-wrapper"},[a("table",{staticClass:"charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes"},[a("caption"),t._v(" "),a("tbody",[a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0"}})])])]),t._v(" "),a("table",{staticClass:"charts-css column show-heading show-labels data-spacing-15"},[a("caption"),t._v(" "),a("tbody",[a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}})]),t._v(" "),a("tr",[a("th"),t._v(" "),a("td",{staticStyle:{"--size":"1"}})])])]),t._v(" "),a("table",{staticClass:"charts-css column show-heading show-labels"},[a("caption"),t._v(" "),a("tbody",[a("tr",[a("th",[t._v(" 2016 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2017 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2018 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2019 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2020 ")])])])]),t._v(" "),a("table",{staticClass:"charts-css column show-heading"},[a("caption",[t._v(" Chart Heading ")])])])]},proxy:!0}])}),t._v(" "),a("p",[t._v("As was previously mentioned, the layers are composed of different HTML elements nested inside the "),a("code",[t._v("<table>")]),t._v(" element.")]),t._v(" "),a("p",[t._v("For example, the "),a("RouterLink",{attrs:{to:"/components/heading/"}},[t._v("heading")]),t._v(" layer is created from the "),a("code",[t._v("<caption>")]),t._v(" element, the data "),a("RouterLink",{attrs:{to:"/components/labels/"}},[t._v("labels")]),t._v(" are created from the "),a("code",[t._v("<th>")]),t._v(" element, the "),a("RouterLink",{attrs:{to:"/components/data/"}},[t._v("data")]),t._v("/"),a("RouterLink",{attrs:{to:"/components/datasets/"}},[t._v("dataset")]),t._v(" uses "),a("code",[t._v("<td>")]),t._v(" elements, and the "),a("RouterLink",{attrs:{to:"/components/axes/"}},[t._v("axes")]),t._v(" layer is generated from the "),a("code",[t._v("<tbody>")]),t._v(" elements.")],1),t._v(" "),a("h2",{attrs:{id:"html-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-table"}},[t._v("#")]),t._v(" HTML Table")]),t._v(" "),a("p",[t._v("The raw data is a basic HTML "),a("code",[t._v("<table>")]),t._v(" element visible to search engines and screen readers:")]),t._v(" "),a("table",[a("caption",[t._v(" Chart Heading ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Value ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",[t._v(" 2016 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[t._v(" 20 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2017 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[t._v(" 40 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2018 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[t._v(" 60 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2019 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[t._v(" 80 ")])]),t._v(" "),a("tr",[a("th",[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[t._v(" 100 ")])])])]),t._v(" "),a("h2",{attrs:{id:"chart-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chart-table"}},[t._v("#")]),t._v(" Chart Table")]),t._v(" "),a("p",[t._v("With the use of CSS classes, we can convert the raw data into a chart. These classes change the HTML structure's appearance.")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("caption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Chart Heading "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("caption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("thead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Year "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scope")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Value "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("thead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tbody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 2016 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 2017 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 2018 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 2019 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0.8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 2020 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("th")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tbody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br")])]),a("p",[t._v("The result is a "),a("code",[t._v("<table>")]),t._v(" element displayed to the user as a chart:")]),t._v(" "),a("code-example",{attrs:{"code-example-id":"anatomy-simple-chart"},scopedSlots:t._u([{key:"css-code",fn:function(){return[t._v("\n#anatomy-simple-chart {\n  height: 300px;\n  max-width: 400px;\n  margin: 0 auto;\n}\n")]},proxy:!0},{key:"html-code",fn:function(){return[a("table",{staticClass:"charts-css column show-heading show-labels show-primary-axis show-4-secondary-axes show-data-axes data-spacing-15 hide-data",attrs:{id:"anatomy-simple-chart"}},[a("caption",[t._v(" Chart Heading ")]),t._v(" "),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Year ")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(" Value ")])])]),t._v(" "),a("tbody",[a("tr",[a("th",[t._v(" 2016 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.2"}},[a("span",{staticClass:"data"},[t._v(" 20 ")])])]),t._v(" "),a("tr",[a("th",[t._v(" 2017 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.4"}},[a("span",{staticClass:"data"},[t._v(" 40 ")])])]),t._v(" "),a("tr",[a("th",[t._v(" 2018 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.6"}},[a("span",{staticClass:"data"},[t._v(" 60 ")])])]),t._v(" "),a("tr",[a("th",[t._v(" 2019 ")]),t._v(" "),a("td",{staticStyle:{"--size":"0.8"}},[a("span",{staticClass:"data"},[t._v(" 80 ")])])]),t._v(" "),a("tr",[a("th",[t._v(" 2020 ")]),t._v(" "),a("td",{staticStyle:{"--size":"1.0"}},[a("span",{staticClass:"data"},[t._v(" 100 ")])])])])])]},proxy:!0}])})],1)}),[],!1,null,null,null);a.default=e.exports}}]);