(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var r=s(0),i=s.n(r),n=s(12),a=(s(34),s(8)),c=s(3),l=s(11),o=s(28),d=s(26),m=s(1),h=function(e){if("undefined"!==typeof window&&window.localStorage){var t=window.localStorage.getItem("color-theme");if("string"===typeof t)return t;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"mode-dark"}return"mode-light"},j=i.a.createContext(),b=function(e){var t=e.initialTheme,s=e.children,r=i.a.useState(h),n=Object(d.a)(r,2),a=n[0],c=n[1],l=function(e){var t=window.document.documentElement,s="mode-dark"===e;t.classList.remove(s?"mode-light":"mode-dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&l(t),i.a.useEffect((function(e){l(a)}),[a]),Object(m.jsx)(j.Provider,{value:{theme:a,setTheme:c},children:s})},x=function(e){e.children;var t=Object(o.a)(e,["children"]),s=i.a.useContext(j),r=s.theme,n=s.setTheme;return Object(m.jsx)("div",Object(l.a)(Object(l.a)({},t),{},{children:Object(m.jsx)("button",{className:"p-3 text-gray-800 dark:text-gray-300 cursor-pointer focus:outline-none group",onClick:function(){n("mode-dark"===r?"mode-light":"mode-dark")},children:"mode-light"===r?Object(m.jsx)("svg",{className:"w-5 h-5 group-hover:fill-current",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):Object(m.jsx)("svg",{className:"w-5 h-5 group-hover:fill-current",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})}))};function u(){return Object(m.jsxs)("div",{className:"h-16 flex items-center px-5",children:[Object(m.jsx)(a.b,{className:"text-gray-800 dark:text-gray-400 text-2xl font-bold hover:no-underline",to:"",children:"Christian Waldmann"}),Object(m.jsx)(x,{className:"ml-auto"})]})}function g(e){var t=e.children;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"fixed w-full bg-white dark:bg-gray-900 z-10",children:Object(m.jsx)("div",{className:"container mx-auto",children:Object(m.jsx)(u,{})})}),Object(m.jsx)("div",{className:"container mx-auto",children:Object(m.jsx)("div",{className:"px-6 flex flex-row sm:text-lg text-gray-800 dark:text-gray-450",children:Object(m.jsx)("div",{className:"w-192 mx-auto",children:t})})})]})}function p(e){return Object(m.jsx)("h1",{className:"pt-8 sm:pt-12 pb-2 text-gray-900 dark:text-gray-400 text-3xl font-bold",children:e.children})}function f(e){return Object(m.jsx)("h2",{className:"pt-8 pb-3 text-gray-900 dark:text-gray-400 text-2xl font-bold",children:e.children})}var O=["I'm Christian, a student at Kempten University of applied Sciences doing my Masters Degree in Computer Science.","I graduated with a B. Eng. in Mechanical Engineering before making the decision to switch to Computer Science. I've previously worked at <a href='https://www.grobgroup.com/'>Grob</a>, <a href='https://www.bbg-mbh.com/'>BBG</a> and <a href='https://www.hs-kempten.de/fakultaet-maschinenbau/forschung/einrichtungen/adrive-living-lab'>Adrive Living Lab</a>."],w=[{href:"mailto:waldmann-christian@web.de",text:"Email"},{href:"https://github.com/christianwaldmann",text:"Github"}],k=[{title:"Geometrie Rechner",description:"A website for calculating properties of simple geometries.",splash_img:"images/GeometrieRechner.png",languages:["HTML","CSS","Javascript"],frameworks_and_libraries:["React","Tailwind CSS"],tools:["Git","GitHub Pages","Travis CI","Netlify"],links:[{text:"Source Code",href:"https://github.com/christianwaldmann/geometrierechner"},{text:"Deployed Website",href:"https://www.geometrierechner.de/"}]},{title:"Bookmarks",description:"A fullstack web application for managing bookmarks.",splash_img:"images/Bookmarks.png",languages:["HTML","CSS","Javascript","Python"],frameworks_and_libraries:["React","Django Rest Framework","Tailwind CSS"],tools:["Git","Nginx","VPS"],links:[{text:"Deployed Website",href:"https://bookmarks.christianwaldmann.com/"}]},{title:"Homepage",description:"This website. A way to display some projects of mine.",splash_img:"images/Homepage.png",languages:["HTML","CSS","Javascript"],frameworks_and_libraries:["React","Tailwind CSS"],tools:["Git","GitHub Pages","Travis CI"],links:[{text:"Source Code",href:"https://github.com/christianwaldmann/portfolio"}]},{title:"Orange Engine",description:"A game / rendering engine. This project is not implemented completely on my own, but instead it is my own version of a game engine based on the <a href='https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT'>tutorial series</a> of the <a href='https://github.com/TheCherno/Hazel'>Hazel Engine</a>.",splash_img:"images/OrangeEngine.png",languages:["C++"],frameworks_and_libraries:["OpenGL","Dear ImGui","Entt"],tools:["Git","Premake"],links:[{text:"Source Code",href:"https://github.com/christianwaldmann/Orange"}]},{title:"Music Player",description:"A music player for Windows with basic functionality.",splash_img:"images/MusicPlayer.png",languages:["C++"],frameworks_and_libraries:["Qt"],tools:["Git"],links:[]}];function v(){return Object(m.jsxs)(g,{children:[Object(m.jsx)("div",{className:"mt-12"}),Object(m.jsx)(p,{children:"Welcome!"}),Object(m.jsx)("div",{className:"-mb-2"}),O.map((function(e,t){return Object(m.jsx)("p",{className:"pt-4",dangerouslySetInnerHTML:{__html:e},style:{a:"red"}},t)})),Object(m.jsx)(f,{children:"Links"}),Object(m.jsx)("ul",{className:"mb-2 list-disc list-inside",children:w.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.href,children:e.text})},t)}))}),Object(m.jsx)(p,{children:"Projects"}),k.map((function(e,t){return Object(m.jsxs)("div",{className:"my-6 px-6 py-4 bg-gray-130 dark:bg-gray-850 rounded-lg text-base text-gray-800 dark:text-gray-450",children:[Object(m.jsx)("h2",{className:"mb-1 text-xl font-bold text-gray-800 dark:text-gray-400",children:e.title}),Object(m.jsx)("p",{children:e.description.replace(/<[^>]+>/g,"")}),Object(m.jsx)(a.b,{to:"/projects/"+e.title.toLowerCase().replace(" ","-"),className:"hover:no-underline",children:Object(m.jsx)("p",{className:"mt-2 text-sm",children:"More Information \u2192"})})]},t)}))]})}var y=s(27);s(40);function N(e){return Object(m.jsx)(y.a,{overlayBgColorEnd:"hsl(0, 0%, 0%, 0.95)",children:Object(m.jsx)("img",Object(l.a)({alt:e.alt},e))})}function C(e){var t=e.project,s=0!==t.links.length?Object(m.jsxs)("div",{className:"mb-16",children:[Object(m.jsx)(f,{children:"Links"}),Object(m.jsx)("ul",{className:"list-disc list-inside",children:t.links.map((function(e,t){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.href,children:e.text})},t)}))})]}):Object(m.jsx)("div",{});return Object(m.jsxs)(g,{children:[Object(m.jsx)("div",{className:"mt-12"}),Object(m.jsx)(p,{children:t.title}),Object(m.jsx)("p",{className:"mt-4 mb-8",dangerouslySetInnerHTML:{__html:t.description}}),Object(m.jsx)(N,{className:"w-full object-cover",src:t.splash_img,alt:"Project Screenshot"}),Object(m.jsxs)("div",{className:"text-base",children:[s,Object(m.jsx)(f,{children:"Technology used"}),Object(m.jsx)("h3",{className:"mt-1 mb-2 font-bold",children:"Languages"}),Object(m.jsx)("ul",{className:"list-disc list-inside",children:t.languages.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}))}),Object(m.jsx)("h3",{className:"mt-4 mb-2 font-bold",children:"Frameworks and Libraries"}),Object(m.jsx)("ul",{className:"list-disc list-inside",children:t.frameworks_and_libraries.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}))}),Object(m.jsx)("h3",{className:"mt-4 mb-2 font-bold",children:"Tools"}),Object(m.jsx)("ul",{className:"list-disc list-inside",children:t.tools.map((function(e,t){return Object(m.jsx)("li",{children:e},t)}))}),Object(m.jsx)("div",{className:"mb-12"})]})]})}function S(){return Object(m.jsxs)("div",{className:"h-screen w-screen flex flex-col justify-center items-center text-gray-800",children:[Object(m.jsx)("h1",{className:"flex justify-center text-6xl mt-8 font-light",children:"404"}),Object(m.jsx)("div",{className:"flex justify-center text-2xl",children:"Page not found"}),Object(m.jsx)(a.b,{className:"mt-12 px-3 py-2 border dark:border-gray-600 bg-gray-100 hover:bg-gray-200 text-sm font-semibold ",to:"/",children:"Return to home"})]})}var _=s(23);function L(){var e=Object(c.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}function T(){return Object(m.jsxs)(a.a,{basename:"",children:[Object(m.jsx)(L,{}),Object(m.jsxs)(b,{children:[Object(m.jsxs)(_.a,{children:[k.map((function(e,t){return Object(m.jsx)("link",{rel:"prefetch",href:e.splash_img},t)})),Object(m.jsx)("body",{className:"bg-white dark:bg-gray-900"})]}),Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{exact:!0,path:["","/","/home"],children:Object(m.jsx)(v,{})}),k.map((function(e,t){return Object(m.jsx)(c.a,{exact:!0,path:"/projects/"+e.title.toLowerCase().replace(" ","-"),children:Object(m.jsx)(C,{project:e})},t)})),Object(m.jsx)(c.a,{component:S})]})]})]})}Object(n.render)(Object(m.jsx)(T,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.96d51f19.chunk.js.map