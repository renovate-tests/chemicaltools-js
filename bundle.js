!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).chemicaltools=n()}}(function(){return function(){return function n(i,e,a){function t(o,s){if(!e[o]){if(!i[o]){var m="function"==typeof require&&require;if(!s&&m)return m(o,!0);if(r)return r(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[o]={exports:{}};i[o][0].call(u.exports,function(n){return t(i[o][1][n]||n)},u,u.exports,n,i,e,a)}return e[o].exports}for(var r="function"==typeof require&&require,o=0;o<a.length;o++)t(a[o]);return t}}()({1:[function(n,i,e){var a=function(n,i,e){var a="";return n?(e<i-1&&(a+="H",i-e>2&&(a+=i-e-1)),a+="A",e>0&&(e>1&&(a+=e),a+="-")):(a+="B",i-e>2?a+="(OH)"+(i-e-1):i-e==2&&(a+="OH"),e>0&&(e>1&&(a+=e),a+="+")),a};i.exports=function(n,i,e,t=14){for(var r=0;r<i.length;r++)i[r]<-1.74&&(i[r]=-1.74);var o=function(n,i,e){var a=Math.pow(10,-n[0]),t=Math.pow(10,-e),r=.5*(Math.sqrt(a*a+4*a*i+t)-a);return r>0?-Math.log(r)/Math.LN10:1024}(i,n,t),s=function(n,i,e){for(var a=0,t=1,r=new Array,o=new Array,s=new Array,m=Math.pow(10,-e),l=Math.pow(m,n.length+1),u=0;u<n.length;u++)o[u]=Math.pow(10,-n[u]);for(u=0;u<n.length+1;u++)r[u]=l*t,a+=r[u],l/=m,t*=o[u];for(u=0;u<n.length+1;u++)s[u]=i*r[u]/a;return s}(i,n,o);e||(o=t-o);var m=[{name:s?"H+":"OH-",c:Math.pow(10,-o)}];for(r=0;r<s.length;r++)m.push({name:a(e,s.length,r),c:s[r]});return{c:n,pH:o,ion:m}}},{}],2:[function(n,e,a){e.exports=function(n){var e=n.length;if(e>1){var a=n.reduce((n,i)=>n+i,0)/e,t=0;for(i=0;i<e;i++){t+=Math.abs(parseFloat(n[i])-a);var r=0+Math.pow(parseFloat(n[i])-a,2)}var o=t/e,s=o/a,m=Math.sqrt(r/(e-1));return{input:n,average:a,average_deviation:o,relative_average_deviation:s,standard_deviation:m,relative_standard_deviation:m/o}}return null}},{}],3:[function(n,i,e){var a=n("tiny-pinyin"),t=n("../info/elementinfo");i.exports=function(n){var i;n=String(n).toLowerCase();try{var e=a.convertToPinyin(n).toLowerCase()}catch(n){e=""}return t.some(function(a){a.name!=n&&a.number!=n&&a.symbol.toLowerCase()!=n&&a.iupac.toLowerCase()!=n&&a.pinyin.toLowerCase()!=n&&a.pinyin!=e||(i=a)}),i}},{"../info/elementinfo":8,"tiny-pinyin":11}],4:[function(n,i,e){var a=n("../info/elementinfo");e.makequestion=function(n="name",i="iupac",e=86){var t=Array.from(Array(e).keys()).sort(()=>Math.random()-.5).slice(0,4),r=a[t[0]][n];t.sort();for(var o=new Array(4),s=0;s<4;s++)o[s]=a[t[s]][i];return{question:r,options:o}},e.correctanswer=function(n,i,e="name",t="iupac"){var r,o,s,m=(r=e,o=n,a.some(function(n){n[r]!=o||(s=n)}),s)[t];return{correct:m==i,question:n,correct_answer:m,answer:i}}},{"../info/elementinfo":8}],5:[function(n,i,e){const a=8.314;i.exports=function(n=null,i=null,e=null,t=null){if(n)if(i)if(e){if(t)return null;t=n*i/e/a}else e=n*i/a/t;else i=e*a*t/n;else n=e*a*t/i;return{p:n,V:i,n:e,T:t}}},{}],6:[function(n,i,e){var a=n("../info/elementinfo"),t=function(n){var i=n.substr(0,1).charCodeAt();return i>64&i<91?1:i>96&i<123?2:i>47&i<58?3:40==i|91==i|-23640==i?4:41==i|93==i|-23639==i?5:0},r=function(n){var i=-1;return a.some(function(e){e.symbol!=n||(i=e.number-1)}),i};i.exports=function(n){var i,e,o,s,m=n.length,l=0,u=0,p=0,b=new Array,f=new Int8Array(118),c=new Array,g=new Array,h=new Array,y=new Array,N=new Array;if(m>0){for(;l<m;)c[++l]=1,i=n.substr(l-1,1),4==t(i)?g[l]=1:5==t(i)?g[l]=-1:g[l]=0,u+=g[l];if(0==u){l=1;for(var d=0;l<m;){if(1==g[l]){var A=1,I=l+1;for(h[++d]=l;A>0;)A+=g[I],I++;I--,y[d]=I,o=I+1>m?"a":n.substr(I,1),3==t(o)?(s=I+2>m?"a":n.substr(I+1,1),3==t(s)?N[d]=parseInt(o+s):N[d]=parseInt(o)):N[d]=1}l++}for(l=0;l<d;)for(I=h[++l];I<=y[l];I++)c[I]*=N[l];for(l=0;l<m;)l++,i=n.substr(l-1,1),1==t(i)?(e=l>=m?"1":n.substr(l,1),2==t(e)?-1!=(d=r(i+e))&&(o=l+1>=m?"1":n.substr(l+1,1),3==t(o)?(s=l+2>=m?"a":n.substr(l+2,1),3==t(s)?(f[d]=f[d]+parseInt(o+s)*c[l],l+=3):(f[d]=f[d]+parseInt(o)*c[l],l+=2)):(f[d]+=c[l],l++)):3==t(e)?-1!=(d=r(i))&&(o=l+1>=m?"a":n.substr(l+1,1),3==t(o)?(f[d]+=parseInt(e+o)*c[l],l+=2):f[d]+=parseInt(e)*c[l]):-1!=(d=r(i))&&(f[d]+=c[l])):5==t(i)&&(e=l>=m?"a":n.substr(l,1),3==t(e)&&(l+1>=m?e="a":o=n.substr(l+1,1),3==t(o)&&l++,l++));for(l=0;l<118;l++)f[l]>0&&(p+=f[l]*parseFloat(a[l].mass))}}if(p>0){var G=new Array(0);for(l=0;l<118;l++)f[l]>0&&(b[l]=parseFloat(f[l])*parseFloat(a[l].mass)/parseFloat(p)*100,G.push({name:a[l].name,iupac:a[l].iupac,symbol:a[l].symbol,atomnumber:f[l],mass:a[l].mass,massper:b[l]}));return{name:n,mass:p,peratom:G}}return null}},{"../info/elementinfo":8}],7:[function(n,i,e){e.searchElement=n("./functions/element"),e.calculateMass=n("./functions/mass"),e.calculateGas=n("./functions/gas"),e.calculateAcid=n("./functions/acid"),e.calculateDeviation=n("./functions/deviation");var a=n("./functions/exam");e.makeQuestion=a.makequestion,e.correctAnswer=a.correctanswer,e.elementinfo=n("./info/elementinfo")},{"./functions/acid":1,"./functions/deviation":2,"./functions/element":3,"./functions/exam":4,"./functions/gas":5,"./functions/mass":6,"./info/elementinfo":8}],8:[function(n,i,e){i.exports=[{number:"1",name:"氢",symbol:"H",mass:"1.008",iupac:"Hydrogen",origin:"Composed of the Greek elements hydro-and -gen meaning water-forming",pinyin:"qing",url:"https://i.loli.net/2018/03/31/5abf78f72c517.png"},{number:"2",name:"氦",symbol:"He",mass:"4.003",iupac:"Helium",origin:"The Greek helios, sun",pinyin:"hai",url:"https://i.loli.net/2018/03/31/5abf78fb29b3e.png"},{number:"3",name:"锂",symbol:"Li",mass:"6.941",iupac:"Lithium",origin:"The Greek lithos, stone",pinyin:"li",url:"https://i.loli.net/2018/03/31/5abf78ff61f6d.png"},{number:"4",name:"铍",symbol:"Be",mass:"9.012",iupac:"Beryllium",origin:"Beryl, a mineral",pinyin:"pi",url:"https://i.loli.net/2018/03/31/5abf79033b661.png"},{number:"5",name:"硼",symbol:"B",mass:"10.81",iupac:"Boron",origin:"Borax, a mineral",pinyin:"peng",url:"https://i.loli.net/2018/03/31/5abf790632b69.png"},{number:"6",name:"碳",symbol:"C",mass:"12.01",iupac:"Carbon",origin:"The Latin carbo, coal",pinyin:"tan",url:"https://i.loli.net/2018/03/31/5abf790a5d246.png"},{number:"7",name:"氮",symbol:"N",mass:"14.01",iupac:"Nitrogen",origin:"The Greek nitron and -gen meaning niter-forming",pinyin:"dan",url:"https://i.loli.net/2018/03/31/5abf790f6de41.png"},{number:"8",name:"氧",symbol:"O",mass:"16",iupac:"Oxygen",origin:"From the Greek oxy-, both sharp and acid, and -gen, meaning acid-forming",pinyin:"yang",url:"https://i.loli.net/2018/03/31/5abf791367638.png"},{number:"9",name:"氟",symbol:"F",mass:"19",iupac:"Fluorine",origin:"The Latin fluere, to flow",pinyin:"fu",url:"https://i.loli.net/2018/03/31/5abf791b56c50.png"},{number:"10",name:"氖",symbol:"Ne",mass:"20.18",iupac:"Neon",origin:"The Greek neos, meaning new",pinyin:"nai",url:"https://i.loli.net/2018/03/31/5abf79201479d.png"},{number:"11",name:"钠",symbol:"Na",mass:"22.99",iupac:"Sodium",origin:"The English word soda (natrium in Latin)",pinyin:"na",url:"https://i.loli.net/2018/03/31/5abf79262c0c0.png"},{number:"12",name:"镁",symbol:"Mg",mass:"24.31",iupac:"Magnesium",origin:"Magnesia, a district of Eastern Thessalyin Greece",pinyin:"mei",url:"https://i.loli.net/2018/03/31/5abf792b3a942.png"},{number:"13",name:"铝",symbol:"Al",mass:"26.98",iupac:"Aluminium",origin:"From alumina, a compound (originally aluminum)",pinyin:"lv",url:"https://i.loli.net/2018/03/31/5abf792fdb969.png"},{number:"14",name:"硅",symbol:"Si",mass:"28.09",iupac:"Silicon",origin:"From the Latin silex, flint (originally silicium)",pinyin:"gui",url:"https://i.loli.net/2018/03/31/5abf793f68260.png"},{number:"15",name:"磷",symbol:"P",mass:"30.98",iupac:"Phosphorus",origin:"The Greek phoosphoros, carrying light",pinyin:"lin",url:"https://i.loli.net/2018/03/31/5abf7943de158.png"},{number:"16",name:"硫",symbol:"S",mass:"32.07",iupac:"Sulfur",origin:"The Latin sulphur, fire and brimstone",pinyin:"liu",url:"https://i.loli.net/2018/03/31/5abf7948aa7db.png"},{number:"17",name:"氯",symbol:"Cl",mass:"35.45",iupac:"Chlorine",origin:"The Greek chloros, greenish yellow",pinyin:"lv",url:"https://i.loli.net/2018/03/31/5abf794c1190c.png"},{number:"18",name:"氩",symbol:"Ar",mass:"39.95",iupac:"Argon",origin:"The Greek argos, idle",pinyin:"ya",url:"https://i.loli.net/2018/03/31/5abf794f59742.png"},{number:"19",name:"钾",symbol:"K",mass:"39.1",iupac:"Potassium",origin:"New Latin potassa, potash (kalium in Latin)",pinyin:"jia",url:"https://i.loli.net/2018/03/31/5abf7955eb159.png"},{number:"20",name:"钙",symbol:"Ca",mass:"40.08",iupac:"Calcium",origin:"The Latin calx, lime",pinyin:"gai",url:"https://i.loli.net/2018/03/31/5abf79677caef.png"},{number:"21",name:"钪",symbol:"Sc",mass:"44.96",iupac:"Scandium",origin:"Scandia, the Latin name for Scandinavia",pinyin:"kang",url:"https://i.loli.net/2018/03/31/5abf796b46bc9.png"},{number:"22",name:"钛",symbol:"Ti",mass:"47.87",iupac:"Titanium",origin:"Titans, the sons of the Earth goddess of Greek mythology",pinyin:"tai",url:"https://i.loli.net/2018/03/31/5abf79707833d.png"},{number:"23",name:"钒",symbol:"V",mass:"50.94",iupac:"Vanadium",origin:"Vanadis, an Old Norse name for the Scandinavian goddess Freyja",pinyin:"fan",url:"https://i.loli.net/2018/03/31/5abf79747c418.png"},{number:"24",name:"铬",symbol:"Cr",mass:"52",iupac:"Chromium",origin:"The Greek chroma, color",pinyin:"ge",url:"https://i.loli.net/2018/03/31/5abf79781844b.png"},{number:"25",name:"锰",symbol:"Mn",mass:"54.94",iupac:"Manganese",origin:"Corrupted from magnesia negra, see Magnesium",pinyin:"meng",url:"https://i.loli.net/2018/03/31/5abf797c8c1a1.png"},{number:"26",name:"铁",symbol:"Fe",mass:"55.85",iupac:"Iron",origin:"English word (ferrum in Latin)",pinyin:"tie",url:"https://i.loli.net/2018/03/31/5abf7981b875f.png"},{number:"27",name:"钴",symbol:"Co",mass:"58.93",iupac:"Cobalt",origin:"The German word Kobold, goblin",pinyin:"gu",url:"https://i.loli.net/2018/03/31/5abf7985b8929.png"},{number:"28",name:"镍",symbol:"Ni",mass:"58.69",iupac:"Nickel",origin:"From Swedish kopparnickel, containing the German word Nickel, goblin",pinyin:"nie",url:"https://i.loli.net/2018/03/31/5abf7989ec197.png"},{number:"29",name:"铜",symbol:"Cu",mass:"63.55",iupac:"Copper",origin:"English word (Latin cuprum)",pinyin:"tong",url:"https://i.loli.net/2018/03/31/5abf798f3125a.png"},{number:"30",name:"锌",symbol:"Zn",mass:"65.38",iupac:"Zinc",origin:"The German Zink",pinyin:"xin",url:"https://i.loli.net/2018/03/31/5abf7994618db.png"},{number:"31",name:"镓",symbol:"Ga",mass:"69.72",iupac:"Gallium",origin:"Gallia, the Latin name for France",pinyin:"jia",url:"https://i.loli.net/2018/03/31/5abf7998dc937.png"},{number:"32",name:"锗",symbol:"Ge",mass:"72.64",iupac:"Germanium",origin:"Germania, the Latin name for Germany",pinyin:"zhe",url:"https://i.loli.net/2018/03/31/5abf799f2c940.png"},{number:"33",name:"砷",symbol:"As",mass:"74.92",iupac:"Arsenic",origin:"English word (Latin arsenicum)",pinyin:"shen",url:"https://i.loli.net/2018/03/31/5abf79a67057f.png"},{number:"34",name:"硒",symbol:"Se",mass:"78.97",iupac:"Selenium",origin:"The Greek selene, moon",pinyin:"xi",url:"https://i.loli.net/2018/03/31/5abf79ac88218.png"},{number:"35",name:"溴",symbol:"Br",mass:"79.9",iupac:"Bromine",origin:"The Greek bromos, stench",pinyin:"xiu",url:"https://i.loli.net/2018/03/31/5abf79b476a12.png"},{number:"36",name:"氪",symbol:"Kr",mass:"83.8",iupac:"Krypton",origin:"The Greek kryptos, hidden",pinyin:"ke",url:"https://i.loli.net/2018/03/31/5abf79b89efff.png"},{number:"37",name:"铷",symbol:"Rb",mass:"85.47",iupac:"Rubidium",origin:"The Latin rubidus, deep red",pinyin:"ru",url:"https://i.loli.net/2018/03/31/5abf79bce65d1.png"},{number:"38",name:"锶",symbol:"Sr",mass:"87.62",iupac:"Strontium",origin:"Strontian, a small town in Scotland",pinyin:"si",url:"https://i.loli.net/2018/03/31/5abf79c2288fa.png"},{number:"39",name:"钇",symbol:"Y",mass:"88.91",iupac:"Yttrium",origin:"Ytterby, Sweden",pinyin:"yi",url:"https://i.loli.net/2018/03/31/5abf79c7d69bf.png"},{number:"40",name:"锆",symbol:"Zr",mass:"91.22",iupac:"Zirconium",origin:"Persian Zargun, gold-colored; German Zirkoon, jargoon",pinyin:"gao",url:"https://i.loli.net/2018/03/31/5abf79cdaddad.png"},{number:"41",name:"铌",symbol:"Nb",mass:"92.91",iupac:"Niobium",origin:"Niobe, daughter of king Tantalus from Greek mythology",pinyin:"ni",url:"https://i.loli.net/2018/03/31/5abf79d3444c8.png"},{number:"42",name:"钼",symbol:"Mo",mass:"95.95",iupac:"Molybdenum",origin:"The Greek molybdos meaning lead",pinyin:"mu",url:"https://i.loli.net/2018/03/31/5abf79d9864d1.png"},{number:"43",name:"锝",symbol:"Tc",mass:"98.91",iupac:"Technetium",origin:"The Greek tekhnètos meaning artificial",pinyin:"de",url:"https://i.loli.net/2018/03/31/5abf79e323d60.png"},{number:"44",name:"钌",symbol:"Ru",mass:"101.1",iupac:"Ruthenium",origin:"Ruthenia, the New Latin name for Russia",pinyin:"liao",url:"https://i.loli.net/2018/03/31/5abf79e898712.png"},{number:"45",name:"铑",symbol:"Rh",mass:"102.9",iupac:"Rhodium",origin:"The Greek rhodos, meaning rose coloured",pinyin:"lao",url:"https://i.loli.net/2018/03/31/5abf79ee94dd7.png"},{number:"46",name:"钯",symbol:"Pd",mass:"106.4",iupac:"Palladium",origin:"The then recently discovered asteroid Pallas, considered a planet at the time",pinyin:"ba",url:"https://i.loli.net/2018/03/31/5abf79f42ad2a.png"},{number:"47",name:"银",symbol:"Ag",mass:"107.9",iupac:"Silver",origin:"English word (argentum in Latin)",pinyin:"yin",url:"https://i.loli.net/2018/03/31/5abf79f99fb02.png"},{number:"48",name:"镉",symbol:"Cd",mass:"112.4",iupac:"Cadmium",origin:"The New Latin cadmia, from King Kadmos",pinyin:"ge",url:"https://i.loli.net/2018/03/31/5abf79fe90314.png"},{number:"49",name:"铟",symbol:"In",mass:"114.8",iupac:"Indium",origin:"Indigo",pinyin:"yin",url:"https://i.loli.net/2018/03/31/5abf7a0489e3b.png"},{number:"50",name:"锡",symbol:"Sn",mass:"118.7",iupac:"Tin",origin:"English word (stannum in Latin)",pinyin:"xi",url:"https://i.loli.net/2018/03/31/5abf7a0a9fe69.png"},{number:"51",name:"锑",symbol:"Sb",mass:"121.8",iupac:"Antimony",origin:"Composed from the Greek anti, against, and monos, alone (stibium in Latin)",pinyin:"ti",url:"https://i.loli.net/2018/03/31/5abf7a1096c2f.png"},{number:"52",name:"碲",symbol:"Te",mass:"127.6",iupac:"Tellurium",origin:"Latin tellus, earth",pinyin:"di",url:"https://i.loli.net/2018/03/31/5abf7a15d89df.png"},{number:"53",name:"碘",symbol:"I",mass:"126.9",iupac:"Iodine",origin:"French iode (after the Greek ioeides, violet)",pinyin:"dian",url:"https://i.loli.net/2018/03/31/5abf7a1be4e4f.png"},{number:"54",name:"氙",symbol:"Xe",mass:"131.3",iupac:"Xenon",origin:"The Greek xenos, strange",pinyin:"xian",url:"https://i.loli.net/2018/03/31/5abf7a2170cef.png"},{number:"55",name:"铯",symbol:"Cs",mass:"132.9",iupac:"Caesium",origin:"The Latin caesius, sky blue",pinyin:"se",url:"https://i.loli.net/2018/03/31/5abf7a294fc17.png"},{number:"56",name:"钡",symbol:"Ba",mass:"137.3",iupac:"Barium",origin:"The Greek barys, heavy",pinyin:"bei",url:"https://i.loli.net/2018/03/31/5abf7a2f91564.png"},{number:"57",name:"镧",symbol:"La",mass:"138.9",iupac:"Lanthanum",origin:"The Greek lanthanein, to lie hidden",pinyin:"lan",url:"https://i.loli.net/2018/03/31/5abf7a37b892c.png"},{number:"58",name:"铈",symbol:"Ce",mass:"140.1",iupac:"Cerium",origin:"The then recently discovered asteroid Ceres, considered a planet at the time",pinyin:"shi",url:"https://i.loli.net/2018/03/31/5abf7a3f4e54a.png"},{number:"59",name:"镨",symbol:"Pr",mass:"140.9",iupac:"Praseodymium",origin:"The Greek praseios didymos meaning green twin",pinyin:"pu",url:"https://i.loli.net/2018/03/31/5abf7a46ef559.png"},{number:"60",name:"钕",symbol:"Nd",mass:"144.2",iupac:"Neodymium",origin:"The Greek neos didymos meaning new twin",pinyin:"nv",url:"https://i.loli.net/2018/03/31/5abf7a4e1f6a8.png"},{number:"61",name:"钷",symbol:"Pm",mass:"144.9",iupac:"Promethium",origin:"Prometheus of Greek mythology who stole fire from the Gods and gave it to humans",pinyin:"po",url:"https://i.loli.net/2018/03/31/5abf7a5723f68.png"},{number:"62",name:"钐",symbol:"Sm",mass:"150.4",iupac:"Samarium",origin:"Samarskite, the name of the mineral from which it was first isolated",pinyin:"shan",url:"https://i.loli.net/2018/03/31/5abf7a614b52c.png"},{number:"63",name:"铕",symbol:"Eu",mass:"152",iupac:"Europium",origin:"Europe",pinyin:"you",url:"https://i.loli.net/2018/03/31/5abf7a69cf979.png"},{number:"64",name:"钆",symbol:"Gd",mass:"157.3",iupac:"Gadolinium",origin:"Johan Gadolin, chemist, physicist and mineralogist",pinyin:"ga",url:"https://i.loli.net/2018/03/31/5abf7a7097f4e.png"},{number:"65",name:"铽",symbol:"Tb",mass:"158.9",iupac:"Terbium",origin:"Ytterby, Sweden",pinyin:"te",url:"https://i.loli.net/2018/03/31/5abf7a77eab76.png"},{number:"66",name:"镝",symbol:"Dy",mass:"162.5",iupac:"Dysprosium",origin:"The Greek dysprositos, hard to get",pinyin:"di",url:"https://i.loli.net/2018/03/31/5abf7a7fb8f8a.png"},{number:"67",name:"钬",symbol:"Ho",mass:"164.9",iupac:"Holmium",origin:"Holmia, the New Latin name for Stockholm",pinyin:"huo",url:"https://i.loli.net/2018/03/31/5abf7a8cd6e7d.png"},{number:"68",name:"铒",symbol:"Er",mass:"167.3",iupac:"Erbium",origin:"Ytterby, Sweden",pinyin:"er",url:"https://i.loli.net/2018/03/31/5abf7a8ddbe89.png"},{number:"69",name:"铥",symbol:"Tm",mass:"168.9",iupac:"Thulium",origin:"Thule, the ancient name for Scandinavia",pinyin:"diu",url:"https://i.loli.net/2018/03/31/5abf7a8ea3d71.png"},{number:"70",name:"镱",symbol:"Yb",mass:"173.1",iupac:"Ytterbium",origin:"Ytterby, Sweden",pinyin:"yi",url:"https://i.loli.net/2018/03/31/5abf7a8f55230.png"},{number:"71",name:"镥",symbol:"Lu",mass:"175",iupac:"Lutetium",origin:"Lutetia, the Latin name for Paris",pinyin:"lu",url:"https://i.loli.net/2018/03/31/5abf7a90121e3.png"},{number:"72",name:"铪",symbol:"Hf",mass:"178.5",iupac:"Hafnium",origin:"Hafnia, the New Latin name for Copenhagen",pinyin:"ha",url:"https://i.loli.net/2018/03/31/5abf7a90c8da6.png"},{number:"73",name:"钽",symbol:"Ta",mass:"181",iupac:"Tantalum",origin:"King Tantalus, father of Niobe from Greek mythology",pinyin:"tan",url:"https://i.loli.net/2018/03/31/5abf7a9242b2e.png"},{number:"74",name:"钨",symbol:"W",mass:"183.8",iupac:"Tungsten",origin:"The Swedish tung sten, heavy stone (W is wolfram, the old name of the tungsten mineral wolframite)",pinyin:"wu",url:"https://i.loli.net/2018/03/31/5abf7a92de9ca.png"},{number:"75",name:"铼",symbol:"Re",mass:"186.2",iupac:"Rhenium",origin:"Rhenus, the Latin name for the river Rhine",pinyin:"lai",url:"https://i.loli.net/2018/03/31/5abf7a93849a1.png"},{number:"76",name:"锇",symbol:"Os",mass:"190.2",iupac:"Osmium",origin:"The Greek osmè, meaning smell",pinyin:"e",url:"https://i.loli.net/2018/03/31/5abf7a944e02a.png"},{number:"77",name:"铱",symbol:"Ir",mass:"192.2",iupac:"Iridium",origin:"Iris, the Greek goddess of the rainbow",pinyin:"yi",url:"https://i.loli.net/2018/03/31/5abf7aa224351.png"},{number:"78",name:"铂",symbol:"Pt",mass:"195.1",iupac:"Platinum",origin:"The Spanish platina, meaning little silver",pinyin:"bo",url:"https://i.loli.net/2018/03/31/5abf7aa2c77e3.png"},{number:"79",name:"金",symbol:"Au",mass:"197",iupac:"Gold",origin:"English word (aurum in Latin)",pinyin:"jin",url:"https://i.loli.net/2018/03/31/5abf7aa504c84.png"},{number:"80",name:"汞",symbol:"Hg",mass:"200.6",iupac:"Mercury",origin:"The New Latin name mercurius, named after the Roman god (Hg from former name hydrargyrum, from Greek hydr-, water, and argyros, silver)",pinyin:"gong",url:"https://i.loli.net/2018/03/31/5abf7aa620095.png"},{number:"81",name:"铊",symbol:"Tl",mass:"204.4",iupac:"Thallium",origin:"The Greek thallos, green twig",pinyin:"ta",url:"https://i.loli.net/2018/03/31/5abf7aa6a73bb.png"},{number:"82",name:"铅",symbol:"Pb",mass:"207.2",iupac:"Lead",origin:"English word (plumbum in Latin)",pinyin:"qian",url:"https://i.loli.net/2018/03/31/5abf7aa7ab47f.png"},{number:"83",name:"铋",symbol:"Bi",mass:"209",iupac:"Bismuth",origin:"German word, now obsolete",pinyin:"bi",url:"https://i.loli.net/2018/03/31/5abf7aa84e014.png"},{number:"84",name:"钋",symbol:"Po",mass:"209",iupac:"Polonium",origin:"Polonia, the New Latin name for Poland",pinyin:"po",url:"https://i.loli.net/2018/03/31/5abf7aa90f8ee.png"},{number:"85",name:"砹",symbol:"At",mass:"210",iupac:"Astatine",origin:"The Greek astatos, unstable",pinyin:"ai",url:"https://i.loli.net/2018/03/31/5abf7aaa80948.png"},{number:"86",name:"氡",symbol:"Rn",mass:"222",iupac:"Radon",origin:"From radium, as it was first detected as an emission from radium during radioactive decay",pinyin:"dong",url:"https://i.loli.net/2018/03/31/5abf7aab4a027.png"},{number:"87",name:"钫",symbol:"Fr",mass:"223",iupac:"Francium",origin:"Francia, the New Latin name for France",pinyin:"fang",url:"https://i.loli.net/2018/03/31/5abf7abb16878.png"},{number:"88",name:"镭",symbol:"Re",mass:"226",iupac:"Radium",origin:"The Latin radius, ray",pinyin:"lei",url:"https://i.loli.net/2018/03/31/5abf7abc32253.png"},{number:"89",name:"锕",symbol:"Ac",mass:"227",iupac:"Actinium",origin:"The Greek aktis, ray",pinyin:"a",url:"https://i.loli.net/2018/03/31/5abf7abc89fdb.png"},{number:"90",name:"钍",symbol:"Th",mass:"232",iupac:"Thorium",origin:"Thor, the Scandinavian god of thunder",pinyin:"tu",url:"https://i.loli.net/2018/03/31/5abf7abd49cc0.png"},{number:"91",name:"镤",symbol:"Pa",mass:"231",iupac:"Protactinium",origin:"The Greek protos, first, and actinium, which is produced through the radioactive decay of protactinium",pinyin:"pu",url:"https://i.loli.net/2018/03/31/5abf7abe7ae37.png"},{number:"92",name:"铀",symbol:"U",mass:"238",iupac:"Uranium",origin:"Uranus, the seventh planet in the Solar System",pinyin:"you",url:"https://i.loli.net/2018/03/31/5abf7abf32902.png"},{number:"93",name:"镎",symbol:"Np",mass:"237",iupac:"Neptunium",origin:"Neptune, the eighth planet in the Solar System",pinyin:"na",url:"https://i.loli.net/2018/03/31/5abf7ac06514c.png"},{number:"94",name:"钚",symbol:"Pu",mass:"239.1",iupac:"Plutonium",origin:"Pluto, a dwarf planet in the Solar System (considered the ninth planet at the time)",pinyin:"bu",url:"https://i.loli.net/2018/03/31/5abf7ac10abb0.png"},{number:"95",name:"镅",symbol:"Am",mass:"243.1",iupac:"Americium",origin:"The Americas, as the element was first synthesized on the continent, by analogy with europium",pinyin:"mei",url:"https://i.loli.net/2018/03/31/5abf7ac19b953.png"},{number:"96",name:"锔",symbol:"Cm",mass:"247.1",iupac:"Curium",origin:"Pierre Curie, a physicist, and Marie Curie, a physicist and chemist, named after great scientists by analogy with gadolinium",pinyin:"ju",url:"https://i.loli.net/2018/03/31/5abf7ac2d813a.png"},{number:"97",name:"锫",symbol:"Bk",mass:"247.1",iupac:"Berkelium",origin:"Berkeley, California, where the element was first synthesized, by analogy with terbium",pinyin:"pei",url:"https://i.loli.net/2018/03/31/5abf7ad12c60f.png"},{number:"98",name:"锎",symbol:"Cf",mass:"251.1",iupac:"Californium",origin:"California, where the element was first synthesized",pinyin:"kai",url:"https://i.loli.net/2018/03/31/5abf7ad1d43f6.png"},{number:"99",name:"锿",symbol:"Es",mass:"252.1",iupac:"Einsteinium",origin:"Albert Einstein, physicist",pinyin:"ai",url:"https://i.loli.net/2018/03/31/5abf7ad2f0be1.png"},{number:"100",name:"镄",symbol:"Fm",mass:"257.1",iupac:"Fermium",origin:"Enrico Fermi, physicist",pinyin:"fei",url:"https://i.loli.net/2018/03/31/5abf7ad34e21a.png"},{number:"101",name:"钔",symbol:"Md",mass:"258.1",iupac:"Mendelevium",origin:"Dmitri Mendeleev, chemist and inventor",pinyin:"men",url:"https://i.loli.net/2018/03/31/5abf7ad47e7a1.png"},{number:"102",name:"锘",symbol:"No",mass:"259.1",iupac:"Nobelium",origin:"Alfred Nobel, chemist, engineer, innovator, and armaments manufacturer",pinyin:"nuo",url:"https://i.loli.net/2018/03/31/5abf7b1b94af3.png"},{number:"103",name:"铹",symbol:"Lr",mass:"262.1",iupac:"Lawrencium",origin:"Ernest O. Lawrence, physicist",pinyin:"lao",url:"https://i.loli.net/2018/03/31/5abf7b1c8d810.png"},{number:"104",name:"𬬻",symbol:"Rf",mass:"261.1",iupac:"Rutherfordium",origin:"Ernest Rutherford, chemist and physicist",pinyin:"lu",url:"https://i.loli.net/2018/03/31/5abf7b1d1f497.png"},{number:"105",name:"𬭊",symbol:"Db",mass:"262.1",iupac:"Dubnium",origin:"Dubna, Russia",pinyin:"du",url:"https://i.loli.net/2018/03/31/5abf7b1de3d3b.png"},{number:"106",name:"𬭳",symbol:"Sg",mass:"266.1",iupac:"Seaborgium",origin:"Glenn T. Seaborg, scientist",pinyin:"xi",url:"https://i.loli.net/2018/03/31/5abf7b1ec4739.png"},{number:"107",name:"𬭛",symbol:"Bh",mass:"264.1",iupac:"Bohrium",origin:"Niels Bohr, physicist",pinyin:"bo",url:"https://i.loli.net/2018/03/31/5abf7b1f9e6e7.png"},{number:"108",name:"𬭶",symbol:"Hs",mass:"277",iupac:"Hassium",origin:"Hesse, Germany, where the element was first synthesized",pinyin:"hei",url:"https://i.loli.net/2018/03/31/5abf7b20bdab8.png"},{number:"109",name:"鿏",symbol:"Mt",mass:"268",iupac:"Meitnerium",origin:"Lise Meitner, physicist",pinyin:"mai",url:"https://i.loli.net/2018/03/31/5abf7b2169856.png"},{number:"110",name:"𫟼",symbol:"Ds",mass:"271",iupac:"Darmstadtium",origin:"Darmstadt, Germany, where the element was first synthesized",pinyin:"da",url:"https://i.loli.net/2018/03/31/5abf7b220423c.png"},{number:"111",name:"𬬭",symbol:"Rg",mass:"272",iupac:"Roentgenium",origin:"Wilhelm Conrad Röntgen, physicist",pinyin:"lun",url:"https://i.loli.net/2018/03/31/5abf7b22ae9bf.png"},{number:"112",name:"鿔",symbol:"Cn",mass:"285",iupac:"Copernicium",origin:"Nicolaus Copernicus, astronomer",pinyin:"ge",url:"https://i.loli.net/2018/03/31/5abf7b2f1ce34.png"},{number:"113",name:"鉨",symbol:"Nh",mass:"284",iupac:"Nihonium",origin:"Japanese word meaning Japan",pinyin:"xi",url:"https://i.loli.net/2018/03/31/5abf7b2fdd0e2.png"},{number:"114",name:"𫓧",symbol:"Fl",mass:"289",iupac:"Flerovium",origin:"Georgy Flyorov, physicist",pinyin:"fu",url:"https://i.loli.net/2018/03/31/5abf7b314eced.png"},{number:"115",name:"镆",symbol:"Mc",mass:"288",iupac:"Moscovium",origin:"In recognition of the Moscow region and honors the ancient Russian land that is the home of the Joint Institute for Nuclear Research",pinyin:"mo",url:"https://i.loli.net/2018/03/31/5abf7b3222857.png"},{number:"116",name:"𫟷",symbol:"Lv",mass:"292",iupac:"Livermorium",origin:"Lawrence Livermore National Laboratory(in Livermore, California) which collaborated with JINR on its synthesis",pinyin:"li",url:"https://i.loli.net/2018/03/31/5abf7b32e5131.png"},{number:"117",name:"石田",symbol:"Ts",mass:"295",iupac:"Tennessine",origin:"In recognition of the contribution of the Tennessee region",pinyin:"tian",url:"https://i.loli.net/2018/03/31/5abf7b33b110f.png"},{number:"118",name:"气奥",symbol:"Og",mass:"293",iupac:"Oganesson",origin:"Honoring a scientist and recognizes Professor Yuri Oganessian",pinyin:"ao",url:"https://i.loli.net/2018/03/31/5abf7b345da2c.png"}]},{}],9:[function(n,i,e){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t=n("./dict"),r="阿",o="鿿",s=1,m=2,l=3,u=null,p=void 0;function b(n){return n||null===u?("object"===("undefined"==typeof Intl?"undefined":a(Intl))&&Intl.Collator?(p=new Intl.Collator(["zh-Hans-CN","zh-CN"]),u=1===Intl.Collator.supportedLocalesOf(["zh-CN"]).length):u=!1,u):u}function f(n){var i=t.UNIHANS,e=t.PINYINS,a=t.EXCEPTIONS,u={source:n};if(n in a)return u.type=m,u.target=a[n],u;var b=-1,f=void 0;if(n.charCodeAt(0)<256)return u.type=s,u.target=n,u;if((f=p.compare(n,r))<0)return u.type=l,u.target=n,u;if(0===f)u.type=m,b=0;else{if((f=p.compare(n,o))>0)return u.type=l,u.target=n,u;0===f&&(u.type=m,b=i.length-1)}if(u.type=m,b<0)for(var c=0,g=i.length-1;c<=g;){var h=i[b=~~((c+g)/2)];if(0===(f=p.compare(n,h)))break;f>0?c=b+1:g=b-1}return f<0&&b--,u.target=e[b],u.target||(u.type=l,u.target=u.source),u}function c(n){if("string"!=typeof n)throw new Error("argument should be string.");if(!b())throw new Error("not support Intl or zh-CN language.");return n.split("").map(function(n){return f(n)})}i.exports={isSupported:b,parse:c,patchDict:function(n){n&&("function"==typeof n&&(n=[n]),n.forEach&&n.forEach(function(n){"function"==typeof n&&n(t)}))},genToken:f,convertToPinyin:function(n,i,e){return c(n).map(function(n){return e&&n.type===m?n.target.toLowerCase():n.target}).join(i||"")}}},{"./dict":10}],10:[function(n,i,e){"use strict";i.exports={PINYINS:["A","AI","AN","ANG","AO","BA","BAI","BAN","BANG","BAO","BEI","BEN","BENG","BI","BIAN","BIAO","BIE","BIN","BING","BO","BU","CA","CAI","CAN","CANG","CAO","CE","CEN","CENG","CHA","CHAI","CHAN","CHANG","CHAO","CHE","CHEN","CHENG","CHI","CHONG","CHOU","CHU","CHUA","CHUAI","CHUAN","CHUANG","CHUI","CHUN","CHUO","CI","CONG","COU","CU","CUAN","CUI","CUN","CUO","DA","DAI","DAN","DANG","DAO","DE","DEN","DENG","DI","DIAN","DIAO","DIE","DING","DIU","DONG","DOU","DU","DUAN","DUI","DUN","DUO","E","EI","EN","ENG","ER","FA","FAN","FANG","FEI","FEN","FENG","FIAO","FO","FOU","FU","GA","GAI","GAN","GANG","GAO","GE","GEI","GEN","GENG","GONG","GOU","GU","GUA","GUAI","GUAN","GUANG","GUI","GUN","GUO","HA","HAI","HAN","HANG","HAO","HE","HEI","HEN","HENG","HM","HONG","HOU","HU","HUA","HUAI","HUAN","HUANG","HUI","HUN","HUO","JI","JIA","JIAN","JIANG","JIAO","JIE","JIN","JING","JIONG","JIU","JU","JUAN","JUE","JUN","KA","KAI","KAN","KANG","KAO","KE","KEN","KENG","KONG","KOU","KU","KUA","KUAI","KUAN","KUANG","KUI","KUN","KUO","LA","LAI","LAN","LANG","LAO","LE","LEI","LENG","LI","LIA","LIAN","LIANG","LIAO","LIE","LIN","LING","LIU","LO","LONG","LOU","LU","LV","LUAN","LVE","LUN","LUO","M","MA","MAI","MAN","MANG","MAO","ME","MEI","MEN","MENG","MI","MIAN","MIAO","MIE","MIN","MING","MIU","MO","MOU","MU","N","NA","NAI","NAN","NANG","NAO","NE","NEI","NEN","NENG","NI","NIAN","NIANG","NIAO","NIE","NIN","NING","NIU","NONG","NOU","NU","NV","NUAN","NVE","NUN","NUO","O","OU","PA","PAI","PAN","PANG","PAO","PEI","PEN","PENG","PI","PIAN","PIAO","PIE","PIN","PING","PO","POU","PU","QI","QIA","QIAN","QIANG","QIAO","QIE","QIN","QING","QIONG","QIU","QU","QUAN","QUE","QUN","RAN","RANG","RAO","RE","REN","RENG","RI","RONG","ROU","RU","RUA","RUAN","RUI","RUN","RUO","SA","SAI","SAN","SANG","SAO","SE","SEN","SENG","SHA","SHAI","SHAN","SHANG","SHAO","SHE","SHEN","SHENG","SHI","SHOU","SHU","SHUA","SHUAI","SHUAN","SHUANG","SHUI","SHUN","SHUO","SI","SONG","SOU","SU","SUAN","SUI","SUN","SUO","TA","TAI","TAN","TANG","TAO","TE","TENG","TI","TIAN","TIAO","TIE","TING","TONG","TOU","TU","TUAN","TUI","TUN","TUO","WA","WAI","WAN","WANG","WEI","WEN","WENG","WO","WU","XI","XIA","XIAN","XIANG","XIAO","XIE","XIN","XING","XIONG","XIU","XU","XUAN","XUE","XUN","YA","YAN","YANG","YAO","YE","YI","YIN","YING","YO","YONG","YOU","YU","YUAN","YUE","YUN","ZA","ZAI","ZAN","ZANG","ZAO","ZE","ZEI","ZEN","ZENG","ZHA","ZHAI","ZHAN","ZHANG","ZHAO","ZHE","ZHEN","ZHENG","ZHI","ZHONG","ZHOU","ZHU","ZHUA","ZHUAI","ZHUAN","ZHUANG","ZHUI","ZHUN","ZHUO","ZI","ZONG","ZOU","ZU","ZUAN","ZUI","ZUN","ZUO",""],UNIHANS:["阿","哎","安","肮","凹","八","挀","扳","邦","勹","陂","奔","伻","屄","边","灬","憋","汃","冫","癶","峬","嚓","偲","参","仓","撡","冊","嵾","曽","叉","芆","辿","伥","抄","车","抻","阷","吃","充","抽","出","欻","揣","巛","刅","吹","旾","逴","呲","匆","凑","粗","汆","崔","邨","搓","咑","呆","丹","当","刀","嘚","扥","灯","氐","甸","刁","爹","丁","丟","东","吺","厾","耑","垖","吨","多","妸","诶","奀","鞥","儿","发","帆","匚","飞","分","丰","覅","仏","紑","夫","旮","侅","甘","冈","皋","戈","给","根","刯","工","勾","估","瓜","乖","关","光","归","丨","呙","哈","咍","佄","夯","茠","诃","黒","拫","亨","噷","叿","齁","乎","花","怀","欢","巟","灰","昏","吙","丌","加","戋","江","艽","阶","巾","坕","冂","丩","凥","姢","噘","军","咔","开","刊","忼","尻","匼","肎","劥","空","抠","扝","夸","蒯","宽","匡","亏","坤","扩","垃","来","兰","啷","捞","肋","勒","崚","哩","俩","奁","良","撩","毟","拎","伶","溜","囖","龙","瞜","噜","驴","娈","掠","抡","罗","呣","妈","埋","嫚","牤","猫","么","呅","门","甿","咪","宀","喵","乜","民","名","谬","摸","哞","毪","嗯","拏","腉","囡","囔","孬","疒","娞","恁","能","妮","拈","娘","鸟","捏","囜","宁","妞","农","羺","奴","女","奻","疟","黁","挪","喔","讴","妑","拍","眅","乓","抛","呸","喷","匉","丕","囨","剽","氕","姘","乒","钋","剖","仆","七","掐","千","呛","悄","癿","亲","靑","卭","丘","区","峑","缺","夋","呥","穣","娆","惹","人","扔","日","茸","厹","邚","挼","堧","婑","瞤","捼","仨","毢","三","桒","掻","閪","森","僧","杀","筛","山","伤","弰","奢","申","升","尸","収","书","刷","衰","闩","双","脽","吮","说","厶","忪","捜","苏","狻","夊","孙","唆","他","囼","坍","汤","夲","忑","熥","剔","天","旫","帖","厅","囲","偷","凸","湍","推","吞","乇","穵","歪","弯","尣","危","昷","翁","挝","乌","夕","虲","仙","乡","灱","些","心","星","凶","休","吁","吅","削","坃","丫","恹","央","幺","倻","一","囙","应","哟","佣","优","扜","囦","曰","晕","帀","災","兂","匨","傮","则","贼","怎","増","扎","捚","沾","张","佋","蜇","贞","争","之","中","州","朱","抓","拽","专","妆","隹","宒","卓","乲","宗","邹","租","钻","厜","尊","昨","兙"],EXCEPTIONS:{"曾":"ZENG","沈":"SHEN","嗲":"DIA","碡":"ZHOU","聒":"GUO","炔":"QUE","蚵":"KE","砉":"HUA","嬤":"MO","嬷":"MO","蹒":"PAN","蹊":"XI","丬":"PAN","霰":"XIAN","莘":"XIN","豉":"CHI","饧":"XING","筠":"JUN","长":"CHANG","帧":"ZHEN","峙":"SHI","郍":"NA","芎":"XIONG","谁":"SHUI"}}},{}],11:[function(n,i,e){"use strict";var a=n("./core"),t=n("./patchers/56l");a.isSupported()&&t.shouldPatch(a.genToken)&&a.patchDict(t),i.exports=a},{"./core":9,"./patchers/56l":12}],12:[function(n,i,e){"use strict";(i.exports=function(n){n.EXCEPTIONS={"嗲":"DIA","碡":"ZHOU","聒":"GUO","炔":"QUE","蚵":"KE","砉":"HUA","嬷":"MO","蹊":"XI","丬":"PAN","霰":"XIAN","豉":"CHI","饧":"XING","帧":"ZHEN","芎":"XIONG","谁":"SHUI","钶":"KE"},n.UNIHANS[91]="伕",n.UNIHANS[347]="仚",n.UNIHANS[393]="诌",n.UNIHANS[39]="婤",n.UNIHANS[50]="腠",n.UNIHANS[369]="攸",n.UNIHANS[123]="乯",n.UNIHANS[171]="刕",n.UNIHANS[102]="佝",n.UNIHANS[126]="犿",n.UNIHANS[176]="列",n.UNIHANS[178]="刢",n.UNIHANS[252]="娝",n.UNIHANS[330]="偸"}).shouldPatch=function(n){return"function"==typeof n&&("FOU"===n("伕").target&&"XIA"===n("仚").target&&"ZHONG"===n("诌").target&&"CHONG"===n("婤").target&&"CONG"===n("腠").target&&"YONG"===n("攸").target&&"HOU"===n("乯").target&&"LENG"===n("刕").target&&"GONG"===n("佝").target&&"HUAI"===n("犿").target&&"LIAO"===n("列").target&&"LIN"===n("刢").target&&"E"===n("钶").target)}},{}]},{},[7])(7)});
