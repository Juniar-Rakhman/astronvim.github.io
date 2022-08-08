"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[5855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2557:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const a={id:"splitting_up",title:"Splitting Up Configuration"},l=void 0,o={unversionedId:"configuration/splitting_up",id:"version-1.7.0/configuration/splitting_up",title:"Splitting Up Configuration",description:"AstroNvim can be fully configured using just the user/init.lua file, but also",source:"@site/versioned_docs/version-1.7.0/configuration/splitting_up.md",sourceDirName:"configuration",slug:"/configuration/splitting_up",permalink:"/1.7.0/configuration/splitting_up",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"splitting_up",title:"Splitting Up Configuration"},sidebar:"docs",previous:{title:"Override Formats",permalink:"/1.7.0/configuration/override_formats"},next:{title:"Advanced LSP Setup",permalink:"/1.7.0/recipes/advanced_lsp"}},u={},p=[{value:"Lazy Loaded Files",id:"lazy-loaded-files",level:2},{value:"Example File Tree",id:"example-file-tree",level:2}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AstroNvim can be fully configured using just the ",(0,r.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file, but also\nsupports easily being configured with separate files. These files will be\nautomatically detected if the file location corresponds to the location in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"init.lua")," table."),(0,r.kt)("p",null,"For example the plugins ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins.init")," override table (or\n",(0,r.kt)("inlineCode",{parentName:"p"},"function(table)...end"),") can be placed in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua"),"\nwhich would be a ",(0,r.kt)("inlineCode",{parentName:"p"},"lua")," file that returns the override ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"function(table)...end"),"."),(0,r.kt)("p",null,"Example ",(0,r.kt)("inlineCode",{parentName:"p"},"user/plugins/init.lua")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  { "andweeb/presence.nvim" },\n  {\n    "ray-x/lsp_signature.nvim",\n    event = "BufRead",\n    config = function()\n      require("lsp_signature").setup()\n    end,\n  },\n}\n')),(0,r.kt)("p",null,"Another example would be adding a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp.on_attach")," function, this could\nbe in a file ",(0,r.kt)("inlineCode",{parentName:"p"},"lsp/on_attach.lua")," that returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"function(client, bufnr)...end"),"\nfor example, if you wanted to enable document formatting for the ",(0,r.kt)("inlineCode",{parentName:"p"},"sumneko_lua"),"\nLSP:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'return function(client, bufnr)\n  if client.name == "sumneko_lua" then\n    client.resolved_capabilities.document_formatting = true\n  end\nend\n')),(0,r.kt)("h2",{id:"lazy-loaded-files"},"Lazy Loaded Files"),(0,r.kt)("p",null,"When separating these files into separate files they are lazy loaded by AstroNvim and only called when they are needed. This is particularly useful when configuring plugins when you may want to ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," them."),(0,r.kt)("p",null,"For example if you want to add bindings to ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-tree")," that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim_tree_callback")," function. This can be easily achieved with the file ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/nvim-tree.lua")," with the contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local tree_cb = require("nvim-tree.config").nvim_tree_callback\n\nreturn {\n  view = {\n    mappings = {\n      custom_only = false,\n      list = {\n        { key = { "l", "<CR>", "o" }, cb = tree_cb "edit" },\n        { key = "h", cb = tree_cb "close_node" },\n        { key = "v", cb = tree_cb "vsplit" },\n      },\n    },\n  },\n}\n')),(0,r.kt)("h2",{id:"example-file-tree"},"Example File Tree"),(0,r.kt)("p",null,"A heavily modified AstroNvim setup that leverages these separate files could have a file structure as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"user/\n\u251c\u2500\u2500 init.lua\n\u251c\u2500\u2500 default_theme/\n\u2502   \u251c\u2500\u2500 init.lua\n\u2502   \u251c\u2500\u2500 colors.lua\n\u2502   \u2514\u2500\u2500 highlights.lua\n\u251c\u2500\u2500 diagnostics.lua\n\u251c\u2500\u2500 lsp/\n\u2502   \u251c\u2500\u2500 on_attach.lua\n\u2502   \u251c\u2500\u2500 server_registration.lua\n\u2502   \u2514\u2500\u2500 server-settings/\n\u2502       \u251c\u2500\u2500 texlab.lua\n\u2502       \u2514\u2500\u2500 yamlls.lua\n\u251c\u2500\u2500 luasnip.lua\n\u251c\u2500\u2500 plugins/\n|   \u251c\u2500\u2500 init.lua\n|   \u251c\u2500\u2500 null-ls.lua\n\u2502   \u251c\u2500\u2500 bufferline.lua\n\u2502   \u251c\u2500\u2500 which-key.lua\n|   \u251c\u2500\u2500 packer.lua\n|   \u251c\u2500\u2500 aerial.lua\n|   \u251c\u2500\u2500 telescope.lua\n|   \u251c\u2500\u2500 toggleterm.lua\n|   \u251c\u2500\u2500 treesitter.lua\n\u2502   \u2514\u2500\u2500 nvim-tree.lua\n\u2514\u2500\u2500 which-key/\n    \u2514\u2500\u2500 register_n_leader.lua\n")))}c.isMDXComponent=!0}}]);