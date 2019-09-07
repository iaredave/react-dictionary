(window["webpackJsonpreact-dictionary"]=window["webpackJsonpreact-dictionary"]||[]).push([[0],{51:function(e,n,t){e.exports=t(81)},79:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(39),i=t.n(o),l=t(15),c=t(40),u=t(17),p=t(41),s=t(42),f=t(49),d=t(23),m=t.n(d),b=t(3),g=t(2),y=t(4);function x(){var e=Object(b.a)(["\n  box-sizing: border-box;\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"]);return x=function(){return e},e}var h=g.d.div(x(),y.a,y.b,y.c,y.f,y.g,y.h,y.i),v=t(91);function E(){var e=Object(b.a)(["\n  user-select: none;\n  text-decoration: none;\n  -webkit-user-select: none; /* webkit (safari, chrome) browsers */\n  -moz-user-select: none; /* mozilla browsers */\n  -ms-user-select: none; /* IE10+ */\n"]);return E=function(){return e},e}var j=Object(g.c)(E());Object(v.a)("none");function O(){var e=Object(b.a)(["\n  ",";\n  ",";\n  ",";\n  ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border: none;\n  border-radius: 2px;\n  color: ",";\n  height: ",";\n  width: ",";\n  line-height: 36px;\n  padding: 0 16px;\n  text-align: center;\n  vertical-align: middle;\n  transition: background-color 0.2s ease-out;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n    transition: background-color 0.2s;\n  }\n  &:active {\n    background-color: ",";\n    background-size: 100%;\n    transition: background 0s;\n  }\n"]);return O=function(){return e},e}var S=g.d.div(O(),y.f,y.h,y.j,j,function(e){return e.theme.colors.grey2},function(e){return e.theme.colors.textPrimary},function(e){return e.height},function(e){return e.width},function(e){return e.theme.colors.grey4},function(e){return e.theme.colors.grey6});S.defaultProps={boxShadow:1,height:"30px",width:"auto"};var k=S;function w(){var e=Object(b.a)(["\n  ",";\n  display: flex;\n"]);return w=function(){return e},e}var z=Object(g.d)(h)(w(),y.d);z.displayName="Flex";var T=z;function D(){var e=Object(b.a)(["\n  ",";\n  display: grid;\n"]);return D=function(){return e},e}var F=Object(g.d)(h)(D(),y.e);function I(){var e=Object(b.a)(["\n  ",";\n  ",";\n  border: none;\n  ",";\n  ",";\n  transition: all 100ms;\n  display: inline-block;\n  vertical-align: middle;\n  outline: none;\n  ::placeholder {\n    color: ",";\n  }\n  width: 100%;\n"]);return I=function(){return e},e}function P(){var e=Object(b.a)(["\n  border-radius: 3px;\n  border: 1px solid ",";\n  height: 42px;\n  padding: 6px 18px;\n  &:hover {\n    border-color: ",";\n  }\n  &:focus {\n    border: solid 2px ",";\n    outline: none;\n    padding: 5px 17px;\n  }\n"]);return P=function(){return e},e}function C(){var e=Object(b.a)(["\n  border-bottom: solid 1px ",";\n  height: 32px;\n  padding-left: 2px;\n  padding-right: 5px;\n"]);return C=function(){return e},e}var H={variant:t(11).string},A=Object(g.c)(C(),function(e){return e.theme.colors.grey8}),B=Object(g.c)(P(),function(e){return e.theme.colors.grey8},function(e){return e.theme.colors.grey9},function(e){return e.theme.colors.blue5}),N=g.d.input(I(),y.c,y.j,function(e){return e.variant&&"normal"===e.variant&&A},function(e){return e.variant&&"outlined"===e.variant&&B},function(e){return e.theme.colors.grey10});N.defaultProps={backgroundColor:"grey2"},N.propTypes=H,N.displayName="Input";var W=N;function J(){var e=Object(b.a)(["\n  ",";\n  ",";\n"]);return J=function(){return e},e}var R=g.d.div(J(),y.c,y.j);R.displayName="Text";var G={Box:h,Button:k,Flex:T,Grid:F,Input:W,Text:R},L=t(45),M=t.n(L);function q(){var e=Object(b.a)(["\n  margin-right: 3px;\n  color: #aaaaaa;\n  font-style: italic;\n"]);return q=function(){return e},e}function K(){var e=Object(b.a)(["\n  &:before {\n    content: \"''\";\n  }\n  &:after {\n    content: \"''\";\n  }\n  color: #aaaaaa;\n  font-size: 13px;\n  font-weight: 300;\n"]);return K=function(){return e},e}var Q=Object(g.d)(G.Box)(K()),U=Object(g.d)(G.Box)(q()),V=function(e){var n=e.onChange,t=e.onClick,r=e.onSearch;return a.a.createElement(G.Flex,{flexDirection:"column",margin:"auto",bg:"white",border:"1px solid #DDDDDD",borderRadius:"8px",width:[300,400,500,600,700],lineHeight:[0,1,2,3,4,5]},a.a.createElement(G.Text,{fontSize:"18px",color:"#545454",style:{textIndent:"30px",marginTop:"15px"}},"Dictionary"),a.a.createElement(G.Flex,{pt:20,pl:20,pr:5},a.a.createElement(G.Input,{style:{width:"100%"},fontSize:1,onChange:function(e){return n(e.target.value)}}),a.a.createElement(G.Button,{boxShadow:"0px",alignSelf:"flex-start",fontSize:3,onClick:function(){return t()}},a.a.createElement(M.a,null))),a.a.createElement("ul",{style:{listStyle:"disc"}},r.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement(G.Text,{fontSize:"18px",fontWeight:500},e.word),a.a.createElement(G.Text,{fontSize:"15px",color:"#AAAAAA"},e.phonetic),a.a.createElement(a.a.Fragment,null,e.meaning.noun&&a.a.createElement(G.Text,{style:{textIndent:"-30px"},fontStyle:"italic",lineHeight:[0,1,2,3,4,5]},"noun")),e.meaning.noun&&e.meaning.noun.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("li",{style:{fontSize:"13px"}},e.definition),e.example&&a.a.createElement(Q,null,e.example),e.synonyms&&a.a.createElement("span",{style:{fontSize:"13px",color:"#aaaaaa",fontStyle:"italic"}},"synonyms:"," "),e.synonyms&&e.synonyms.map(function(e,n){return a.a.createElement("div",{style:{display:"inline-block"},key:n},a.a.createElement(U,null,a.a.createElement(G.Text,{fontSize:["13px"],color:"#1a0dab"},e+", ")))}))}),a.a.createElement(a.a.Fragment,null,e.meaning.verb&&a.a.createElement(G.Text,{style:{textIndent:"-30px"},fontStyle:"italic",lineHeight:[0,1,2,3,4,5]},"verb")),e.meaning.verb&&e.meaning.verb.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("li",{style:{fontSize:"13px"}},e.definition),e.example&&a.a.createElement(Q,null,e.example),e.synonyms&&a.a.createElement("span",{style:{fontSize:"13px",color:"#aaaaaa",fontStyle:"italic"}},"synonyms:"," "),e.synonyms&&e.synonyms.map(function(e,n){return a.a.createElement("div",{style:{display:"inline-block"},key:n},a.a.createElement(U,null,a.a.createElement(G.Text,{fontSize:["13px"],color:"#1a0dab"},e+", ")))}))}),a.a.createElement(a.a.Fragment,null,e.meaning.adjective&&a.a.createElement(G.Text,{style:{textIndent:"-30px"},fontStyle:"italic",lineHeight:[0,1,2,3,4,5]},"adjective")),e.meaning.adjective&&e.meaning.adjective.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("li",{style:{fontSize:"13px"}},e.definition),e.example&&a.a.createElement(Q,null,e.example),e.synonyms&&a.a.createElement("span",{style:{fontSize:"13px",color:"#aaaaaa",fontStyle:"italic"}},"synonyms:"," "),e.synonyms&&e.synonyms.map(function(e,n){return a.a.createElement("div",{style:{display:"inline-block"},key:n},a.a.createElement(U,null,a.a.createElement(G.Text,{fontSize:["13px"],color:"#1a0dab"},e+", ")))}))}),a.a.createElement(a.a.Fragment,null,e.meaning.adverb&&a.a.createElement(G.Text,{style:{textIndent:"-30px"},fontStyle:"italic",lineHeight:[0,1,2,3,4,5]},"adverb")),e.meaning.adverb&&e.meaning.adverb.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("li",{style:{fontSize:"13px"}},e.definition),e.example&&a.a.createElement(Q,null,e.example),e.synonyms&&a.a.createElement("span",{style:{fontSize:"13px",color:"#aaaaaa",fontStyle:"italic"}},"synonyms:"," "),e.synonyms&&e.synonyms.map(function(e,n){return a.a.createElement("div",{style:{display:"inline-block"},key:n},a.a.createElement(U,null,a.a.createElement(G.Text,{fontSize:["13px"],color:"#1a0dab"},e+", ")))}))}),a.a.createElement(a.a.Fragment,null,e.meaning.abbreviation&&a.a.createElement(G.Text,{style:{textIndent:"-30px"},fontStyle:"italic",lineHeight:[0,1,2,3,4,5]},"abbreviation")),e.meaning.abbreviation&&e.meaning.abbreviation.map(function(e,n){return a.a.createElement("div",{key:n},a.a.createElement("li",{style:{fontSize:"13px"}},e.definition),e.example&&a.a.createElement(Q,null,e.example),e.synonyms&&a.a.createElement("span",{style:{fontSize:"13px",color:"#aaaaaa",fontStyle:"italic"}},"synonyms:"," "),e.synonyms&&e.synonyms.map(function(e,n){return a.a.createElement("div",{style:{display:"inline-block"},key:n},a.a.createElement(U,null,a.a.createElement(G.Text,{fontSize:["13px"],color:"#1a0dab"},e+", ")))}))}))})))},X=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(p.a)(this,Object(s.a)(n).call(this))).searchWord=function(){var n="https://dictionaryapi.herokuapp.com/?define="+e.state.wordsearch+"&lang="+e.state.laungage;m.a.get(n).then(function(e){return e.data}).then(function(n){e.setState({wordresponse:n})})},e.state={wordresponse:[],laungage:"en",wordsearch:"right"},e}return Object(f.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,n="https://dictionaryapi.herokuapp.com/?define="+this.state.wordsearch+"&lang="+this.state.laungage;m.a.get(n).then(function(e){return e.data}).then(function(n){e.setState({wordresponse:n})})}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(V,{onClick:this.searchWord,onChange:function(n){return e.setState({wordsearch:n})},onSearch:this.state.wordresponse}))}}]),n}(r.Component),Y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{exact:!0,path:"/",component:X}))},Z=t(22);t(79);function $(){var e=Object(b.a)(["\n  body {\n    padding: 0 !important;\n    margin: 0 !important;\n    ",";\n  }\n  input {\n  padding: 0;\n    ",";\n    ::placeholder {\n      ",";\n    }\n  }\n  button, div, span, td {\n    ","\n  }\n"]);return $=function(){return e},e}function _(){var e=Object(b.a)(['\n  font-family: "Rubik", sans-serif;\n  font-weight: 300;\n']);return _=function(){return e},e}var ee=Object(g.c)(_()),ne=Object(g.b)($(),ee,ee,j,ee),te=t(16),re={listItemColor:"rgba(184, 199, 211, 0.3)",listItemColorLight:"rgba(200, 215, 227, 0.3)",textPrimary:"#282828",white:"#fff",black:"#000",red1:"#ffcdd2",red2:"#ef9a9a",red3:"#e57373",red4:"#ef5350",red5:"#f44336",red6:"#e53935",red7:"#d32f2f",red8:"#c62828",red9:"#b71c1c",purple1:"#d1c4e9",purple2:"#b39ddb",purple3:"#9575cd",purple4:"#7e57c2",purple5:"#673ab7",purple6:"#5e35b1",purple7:"#512da8",purple8:"#4527a0",purple9:"#311b92",orange1:"#ffe0b2",orange2:"#ffcc80",orange3:"#ffb74d",orange4:"#ffa726",orange5:"#ff9800",orange6:"#fb8c00",orange7:"#f57c00",orange8:"#ef6c00",orange9:"#e65100",blue1:"#bbdefb",blue2:"#90caf9",blue3:"#64b5f6",blue4:"#42a5f5",blue5:"#2196f3",blue6:"#1e88e5",blue7:"#1976d2",blue8:"#1565c0",blue9:"#0d47a1",green1:"#c8e6c9",green2:"#a5d6a7",green3:"#81c784",green4:"#66bb6a",green5:"#4caf50",green6:"#43a047",green7:"#388e3c",green8:"#2e7d32",green9:"#1b5e20",grey1:"#fcfcfc",grey2:"#fafafa",grey3:"#f6f6f6",grey4:"#f3f3f3",grey5:"#f1f1f1",grey6:"#eeeeee",grey7:"#e0e0e0",grey8:"#bdbdbd",grey9:"#9e9e9e",grey10:"#8a8a8a",grey11:"#757575",grey12:"#616161",grey13:"#424242"};function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var oe={breakpoints:["550px","950px","1200px","1440px","1800px"],colors:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(t,!0).forEach(function(n){Object(te.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},re,{primary:re.blue4,success:re.green6,warning:re.orange5,error:re.red7}),fontFamily:"'Open Sans', sans-serif",fontSizes:["14px","16px","20px","25px","31.25px","39.06px"],lineHeights:["18.2px","20.8px","26px","32.5104px","40.6224px","50.7728px"],shadows:["0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.05)","0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.20)","0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.20)"],space:[0,8,16,24,32,40,48,64]};i.a.render(a.a.createElement(Z.a,null,a.a.createElement(g.a,{theme:oe},a.a.createElement(a.a.Fragment,null,a.a.createElement(Y,null),a.a.createElement(ne,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e1239395.chunk.js.map