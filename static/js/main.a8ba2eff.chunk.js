(this["webpackJsonpastro-app1"]=this["webpackJsonpastro-app1"]||[]).push([[0],{16:function(e,t,s){},18:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),a=s.n(n),l=s(8),c=s.n(l),i=(s(16),s(7)),o=s.n(i),u=s(9),d=s(2),h=s(3),j=s(5),f=s(4),b=(s(18),s(10)),p=s.n(b),v=function(e){Object(j.a)(s,e);var t=Object(f.a)(s);function s(e){var r;return Object(d.a)(this,s),(r=t.call(this,e)).state={originalResults:r.props.results,results:r.props.results},r}return Object(h.a)(s,[{key:"makeHeadings",value:function(){var e=this,t=this.state.results;if(t.length){console.log(t);var s=[],n=[];for(var a in t[0])s.push(a);return s.unshift("#"),(n=s.map((function(t){return Object(r.jsxs)("th",{className:"results-tr",children:[Object(r.jsxs)("div",{className:"sorting-buttons",children:[Object(r.jsx)("p",{children:t}),Object(r.jsxs)("div",{className:"sorting-buttons-column",children:[Object(r.jsx)("button",{onClick:function(){return e.sortBodies(t,"increase")},children:Object(r.jsx)("i",{className:"fas fa-chevron-up"})}),Object(r.jsx)("button",{onClick:function(){return e.sortBodies(t,"decrease")},children:Object(r.jsx)("i",{className:"fas fa-chevron-down"})})]})]}),Object(r.jsxs)("div",{className:"small-search-form",children:[Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",className:"input-search",id:t})}),Object(r.jsx)("button",{onClick:function(){return e.search("".concat(t))},children:Object(r.jsx)("i",{className:"fas fa-search"})})]}),Object(r.jsx)("div",{id:String(t)+"err"})]},Math.random())})))[0]=Object(r.jsx)("th",{className:"results-tr",children:Object(r.jsx)("p",{children:"#"})},Math.random()),Object(r.jsx)("tr",{children:n})}return Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:"Results not found"},Math.random())},Math.random())}},{key:"makeResults",value:function(){var e=this.state.results,t=[];if(e){for(var s=0;s<e.length;s++){var n=[];for(var a in n.push(Object(r.jsx)("td",{children:s+1},Math.random())),e[s]){var l,c;if(Array.isArray(e[s][a])){var i=[];for(var o in e[s][a]){var u=JSON.stringify(e[s][a][o]);i.push(u)}l=i.join("\n").replaceAll("{","").replaceAll("}","").replaceAll('"'," ").replaceAll(",","\n").replaceAll("_"," ")}else if(!1===Array.isArray(e[s][a])&&null!==e[s][a]&&""!==e[s][a]){l=String(JSON.stringify(e[s][a])).replaceAll('"'," ").replaceAll("{","").replaceAll("}","")}else null!==e[s][a]&&"undefined"!==e[s][a]&&""!==e[s][a]||(l="---");if(l.length>40){var d=l.substr(0,15)+"...";c=Object(r.jsxs)(p.a,{className:"collapsible",trigger:d,children:["$",l]})}else c=l;n.push(Object(r.jsx)("td",{children:c},Math.random()))}t.push(Object(r.jsx)("tr",{children:n},Math.random()))}return Object(r.jsx)("tbody",{className:"results-tbody",children:t})}return Object(r.jsx)("tbody",{children:Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:"Results not found"},Math.random())},Math.random())})}},{key:"sortBodies",value:function(e,t){for(var s,r,n=this,a=e,l=t,c=this.state.results,i=c,o=0;o<c.length;o++){for(var u=o,d=o+1;d<c.length;d++){if(null==i[u][a]||null==i[d][a])s="0",r="0";else if("string"===typeof i[u][a]&&i[u][a].length<10)s=i[u][a].charAt(0),r=i[d][a].charAt(0);else if(Object.keys(i[u][a]).length>0&&Object.keys(i[d][a]).length>0){var h=[],j=[];for(var f in i[u][a])h.push(i[u][a][f]);for(var b in i[d][a])j.push(i[d][a][b]);s=h.join(),r=j.join()}else s=i[u][a],r=i[d][a];"increase"===l&&r<s&&(u=d),"decrease"===l&&r>s&&(u=d)}var p=i[o];i[o]=i[u],i[u]=p}this.setState({results:i},(function(){return console.log(n.state.results)}))}},{key:"convertToText",value:function(e){var t=this.state.results,s=[];for(var r in t[0])s.push(r);for(var n=0;n<t.length;n++){var a=[];for(var l in t[n]){var c=[];if(Array.isArray(t[n][l])){var i=[];for(var o in t[n][l]){var u=JSON.stringify(t[n][l][o]);i.push(u)}c=i.join("\n").replaceAll("{","").replaceAll("}","").replaceAll('"'," ").replaceAll(",","\n").replaceAll("_"," ")}else if(!1===Array.isArray(t[n][l])&&null!==t[n][l]&&""!==t[n][l]){c=String(JSON.stringify(t[n][l])).replaceAll('"'," ").replaceAll("{","").replaceAll("}","")}else null!==t[n][l]&&"undefined"!==t[n][l]&&""!==t[n][l]||(c="---");a.push(c)}s.push(a.join(","))}var d=s.join("\n");console.log(d);var h=document.createElement("a");"csv"===e?(h.setAttribute("href","data:text/csv;charset=utf-8,"+encodeURI(d)),h.setAttribute("download","data_csv.csv")):(h.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURI(d)),h.setAttribute("download","data_text.txt")),h.style.display="none",document.body.appendChild(h),h.click(),document.body.removeChild(h)}},{key:"search",value:function(e){var t=this,s=e,r=document.getElementById(s).value;console.log(s+"\n"+r);for(var n=this.state.originalResults,a=[],l=0;l<n.length;l++){if(n[l][s]){var c=[];if(Array.isArray(n[l][s])){var i=[];for(var o in n[l][s]){var u=JSON.stringify(n[l][s][o]);i.push(u)}c=i.join("\n").replaceAll("{","").replaceAll("}","").replaceAll('"'," ").replaceAll(",","\n").replaceAll("_"," ")}else if(!1===Array.isArray(n[l][s])&&null!==n[l][s]&&""!==n[l][s]){c=String(JSON.stringify(n[l][s])).replaceAll('"'," ").replaceAll("{","").replaceAll("}","")}else null!==n[l][s]&&"undefined"!==n[l][s]&&""!==n[l][s]||(c="---");(n[l][s]===r||c.includes(r))&&a.push(n[l])}console.log(a),a.length>0?this.setState({results:a},(function(){return console.log(t.state.results)})):document.getElementById("".concat(s+"err")).innerHTML='<p className="search-error-msg">No results found.</p>'}}},{key:"refresh",value:function(){var e=this;this.setState({results:this.state.originalResults},(function(){return console.log(e.state.results)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"display-results",children:[Object(r.jsx)("h2",{children:"Results"}),Object(r.jsxs)("div",{className:"results-extra",children:[Object(r.jsx)("p",{children:"Download table as a file:"}),Object(r.jsxs)("button",{className:"button-csv",onClick:function(){return e.convertToText("csv")},children:[Object(r.jsx)("i",{className:"fas fa-file-download"})," CSV (.csv) "]}),Object(r.jsxs)("button",{className:"button-text",onClick:function(){return e.convertToText("text")},children:[Object(r.jsx)("i",{className:"fas fa-file-download"})," Plain Text (.txt) "]}),Object(r.jsxs)("button",{onClick:function(){return e.refresh()},children:[" Reload",Object(r.jsx)("i",{className:"fas fa-redo"})]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"table-wrapper",children:Object(r.jsxs)("table",{className:"table",children:[Object(r.jsx)("thead",{className:"table-heading",children:this.makeHeadings()}),this.makeResults()]})})]})}}]),s}(n.Component),O=function(e){Object(j.a)(s,e);var t=Object(f.a)(s);function s(e){var r;return Object(d.a)(this,s),(r=t.call(this,e)).state={results:null},r}return Object(h.a)(s,[{key:"getResults",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,s=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({results:null},(function(){return console.log("null results :( "+s.state.results)})),t=document.querySelector(".input-link").value,console.log("api url "+t),e.next=5,fetch(t).then((function(e){return console.log(e),e.json()})).then((function(e){console.log("res "+e);var t=s.findResultsArray(e);s.setState({results:t},(function(){return console.log(s.state.results)}))})).catch((function(e){console.log("Error: "+e),alert("No results found. Check the URL and make sure that response is in JSON format or try again later."),s.setState({results:null},(function(){return console.log("null results :( "+s.state.results)}))}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findResultsArray",value:function(e){var t=e;if(console.log(t),!0===Array.isArray(t))return console.log(t),t;if("object"===typeof t){var s=0;for(var r in t)s++;var n=[];for(var a in t){var l=[];!0===Array.isArray(t[a])&&(l=t[a]).length>n.length&&(n=l)}if(s>n.length){var c=[];return c[0]=t,c}var i=[],o=[];for(var u in t)!0===Array.isArray(t[u])&&(i=t[u]).length>o.length&&(console.log(i),o=i);return console.log(o),o}}},{key:"copyLinkText",value:function(e){document.getElementById(e).select(),document.execCommand("copy")}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"frame",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("h1",{children:"API Data to Table Converter"}),Object(r.jsx)("h4",{children:"Convert Data from an API Request to Table or Text"}),Object(r.jsx)("p",{children:"JSON (JavaScript Object Notation) is a popular data format that is easy to transfer and process. It is commonly used for transporting data from APIs (Application Programming Interface)."}),Object(r.jsx)("p",{children:"Sometimes parsing the received JSON data can get complicated. This tool makes processing data from API requests easier. It first makes an API call. If the request is successful, the data gets parsed and displayed as a table. Users can then search and sort the data table as well as download the table in plain text or CSV format."}),Object(r.jsx)("p",{children:"For a successful API call please ensure that the API is either public or it includes an API key if necessary, and that it returns data in JSON format with properties and values. Please wait a few seconds for the results to load."}),Object(r.jsx)("p",{children:"Copy and paste an API request below:"}),Object(r.jsx)("h4",{children:"Try these requests:"}),Object(r.jsxs)("ol",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("textarea",{cols:"50",rows:"2",readOnly:!0,value:"https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY",id:"link1"}),Object(r.jsx)("button",{onClick:function(){return e.copyLinkText("link1")},children:"Copy"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("textarea",{cols:"50",rows:"2",readOnly:!0,value:"https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=DEMO_KEY",id:"link2"}),Object(r.jsx)("button",{onClick:function(){return e.copyLinkText("link2")},children:"Copy"})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("textarea",{cols:"50",rows:"2",readOnly:!0,value:"https://api.le-systeme-solaire.net/rest/bodies/",id:"link3"}),Object(r.jsx)("button",{onClick:function(){return e.copyLinkText("link3")},children:"Copy"})]})]}),Object(r.jsxs)("div",{className:"search-form",children:[Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",className:"input-link"})}),Object(r.jsx)("button",{onClick:function(){return e.getResults()},children:Object(r.jsx)("i",{className:"fas fa-search"})})]})]}),Object(r.jsx)("div",{className:"results",children:null!==this.state.results&&Object(r.jsx)(v,{results:this.state.results})}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:[Object(r.jsx)("i",{className:"fab fa-github"})," GitHub:"," "]}),Object(r.jsxs)("p",{children:["Made with"," ",Object(r.jsxs)("a",{href:"https://reactjs.org/",children:["React.js",Object(r.jsx)("i",{className:"fab fa-react"})]})]}),Object(r.jsx)("p",{children:"By A. A."})]})]})})}}]),s}(n.Component),x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;s(e),r(e),n(e),a(e),l(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.a8ba2eff.chunk.js.map