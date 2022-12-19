"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[9768],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),o=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){const{lazy:t,block:a,defaultValue:i,values:c,groupId:d,className:h}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===i?i:i??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[y,w]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==y&&(A(t),w(n),null!=d&&N(d,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:T},i,{className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},83551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},s=void 0,u={unversionedId:"intro",id:"version-2.10.0/intro",title:"Getting Started",description:"AstroNvim Screenshot",source:"@site/versioned_docs/version-2.10.0/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"2.10.0",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting Started",slug:"/",sidebar_position:1},sidebar:"docs",next:{title:"Basic Walkthrough",permalink:"/Basic Usage/walkthrough"}},p={},m=[{value:"\u26a1 Requirements",id:"-requirements",level:2},{value:"\ud83d\udee0\ufe0f Installation",id:"\ufe0f-installation",level:2},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder",level:4},{value:"Clean neovim folders (Optional but recommended)",id:"clean-neovim-folders-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Make a backup of your current nvim folder",id:"make-a-backup-of-your-current-nvim-folder-1",level:4},{value:"Clean old plugins (Optional but recommended)",id:"clean-old-plugins-optional-but-recommended",level:4},{value:"Clone the repository",id:"clone-the-repository-1",level:4},{value:"\ud83d\udce6 Setup",id:"-setup",level:2},{value:"Install LSP",id:"install-lsp",level:4},{value:"Install language parser",id:"install-language-parser",level:4},{value:"Install Debugger",id:"install-debugger",level:4},{value:"Manage plugins",id:"manage-plugins",level:4},{value:"Update AstroNvim",id:"update-astronvim",level:4},{value:"Update AstroNvim Packages",id:"update-astronvim-packages",level:4},{value:"Reload AstroNvim (<em>EXPERIMENTAL</em>)",id:"reload-astronvim-experimental",level:4},{value:"\u2728 Features",id:"-features",level:2},{value:"\u2699\ufe0f Configuration",id:"\ufe0f-configuration",level:2}],c={toc:m};function d(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"AstroNvim Screenshot",src:a(5708).Z,width:"1920",height:"1080"})),(0,l.kt)("h2",{id:"-requirements"},"\u26a1 Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")," (",(0,l.kt)("em",{parentName:"li"},"Optional with manual intervention:")," See ",(0,l.kt)("a",{parentName:"li",href:"Recipes/icons#disable-icons"},"Recipes/Customizing Icons"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/neovim/neovim/releases/tag/v0.8.0"},"Neovim 0.8 (",(0,l.kt)("em",{parentName:"a"},"Not")," including nightly)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tree-sitter/tree-sitter/blob/master/cli/README.md"},"Tree-sitter CLI")," (",(0,l.kt)("em",{parentName:"li"},"Note:")," This is only necessary if you want to use ",(0,l.kt)("inlineCode",{parentName:"li"},"auto_install")," feature with Treesitter)"),(0,l.kt)("li",{parentName:"ul"},"A clipboard tool is necessary for the integration with the system clipboard (see ",(0,l.kt)("a",{parentName:"li",href:"https://neovim.io/doc/user/provider.html#clipboard-tool"},(0,l.kt)("inlineCode",{parentName:"a"},":help clipboard-tool"))," for supported solutions)"),(0,l.kt)("li",{parentName:"ul"},"Terminal with true color support (for the default theme, otherwise it is dependent on the theme you are using)"),(0,l.kt)("li",{parentName:"ul"},"Optional Requirements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," - live grep telescope search (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>fw"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jesseduffield/lazygit"},"lazygit")," - git ui toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tl")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>gg"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dundee/gdu"},"go DiskUsage()")," - disk usage toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tu"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ClementTsang/bottom"},"bottom")," - process viewer toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tt"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")," - python repl toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tp"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," - node repl toggle terminal (",(0,l.kt)("inlineCode",{parentName:"li"},"<leader>tn"),")")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"When using default theme: For MacOS, the default terminal does not have true color support. You will need to use ",(0,l.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"iTerm2")," or another ",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/XVilka/8346728#terminal-emulators"},"terminal emulator")," that has true color support.")),(0,l.kt)("h2",{id:"\ufe0f-installation"},"\ud83d\udee0\ufe0f Installation"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"nix",label:"Linux/Mac OS (Unix)",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder"},"Make a backup of your current nvim folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.config/nvim ~/.config/nvim.bak\n")),(0,l.kt)("h4",{id:"clean-neovim-folders-optional-but-recommended"},"Clean neovim folders (Optional but recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"mv ~/.local/share/nvim ~/.local/share/nvim.bak\nmv ~/.local/state/nvim ~/.local/state/nvim.bak\nmv ~/.cache/nvim ~/.cache/nvim.bak\n")),(0,l.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\nnvim\n"))),(0,l.kt)(i.Z,{value:"windoze",label:"Windows (PowerShell)",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"make-a-backup-of-your-current-nvim-folder-1"},"Make a backup of your current nvim folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Move-Item $env:LOCALAPPDATA\\nvim $env:LOCALAPPDATA\\nvim.bak\n")),(0,l.kt)("h4",{id:"clean-old-plugins-optional-but-recommended"},"Clean old plugins (Optional but recommended)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Move-Item $env:LOCALAPPDATA\\nvim-data $env:LOCALAPPDATA\\nvim-data.bak\n")),(0,l.kt)("h4",{id:"clone-the-repository-1"},"Clone the repository"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/AstroNvim/AstroNvim $env:LOCALAPPDATA\\nvim\nnvim\n"))),(0,l.kt)(i.Z,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"If you want to try AstroNvim before installing you can use the following Docker command to open a test instance without touching your current Neovim configuration. This also allows you to use ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall")," and ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall")," to load and evaluate language servers and treesitter parsers as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -w /root -it --rm alpine:edge sh -uelic '\n  apk add bash git lua nodejs npm lazygit bottom python3 go neovim ripgrep alpine-sdk --update\n  git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\n  # Uncomment the line below and replace the link with your user config repo to load a user config\n  # git clone https://github.com/username/AstroNvim_user ~/.config/nvim/lua/user\n  nvim --headless -c \"autocmd User PackerComplete quitall\"\n  nvim\n'\n")))),(0,l.kt)("h2",{id:"-setup"},"\ud83d\udce6 Setup"),(0,l.kt)("h4",{id:"install-lsp"},"Install LSP"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall")," followed by the name of the server you want to install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},":LspInstall pyright"))),(0,l.kt)("h4",{id:"install-language-parser"},"Install language parser"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall")," followed by the name of the language you want to install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},":TSInstall python"))),(0,l.kt)("h4",{id:"install-debugger"},"Install Debugger"),(0,l.kt)("p",null,"Enter ",(0,l.kt)("inlineCode",{parentName:"p"},":DapInstall")," followed by the name of the debugger you want to install"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Example: ",(0,l.kt)("inlineCode",{parentName:"p"},":DapInstall python"))),(0,l.kt)("h4",{id:"manage-plugins"},"Manage plugins"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":PackerClean")," to remove any disabled or unused plugins"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":PackerSync")," to update and clean plugins"),(0,l.kt)("h4",{id:"update-astronvim"},"Update AstroNvim"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":AstroUpdate")," (",(0,l.kt)("inlineCode",{parentName:"p"},"<leader>pA"),") to get the latest updates from the repository"),(0,l.kt)("h4",{id:"update-astronvim-packages"},"Update AstroNvim Packages"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":AstroUpdatePackages")," (",(0,l.kt)("inlineCode",{parentName:"p"},"<leader>pa"),") to update both Packer plugins and Mason packages"),(0,l.kt)("h4",{id:"reload-astronvim-experimental"},"Reload AstroNvim (",(0,l.kt)("em",{parentName:"h4"},"EXPERIMENTAL"),")"),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},":AstroReload")," to reload the AstroNvim configuration and any new user configuration changes without restarting. This is currently an experimental feature and may lead to instability until the next restart. We have noticed that in particular some language servers do not correctly unattach and reattach after the reloading and cause multiple LSP clients to attach to the same buffer."),(0,l.kt)("h2",{id:"-features"},"\u2728 Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File explorer with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-neo-tree/neo-tree.nvim"},"Neo-tree")),(0,l.kt)("li",{parentName:"ul"},"Autocompletion with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/hrsh7th/nvim-cmp"},"Cmp")),(0,l.kt)("li",{parentName:"ul"},"Git integration with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lewis6991/gitsigns.nvim"},"Gitsigns")),(0,l.kt)("li",{parentName:"ul"},"Statusline with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rebelot/heirline.nvim"},"Heirline")),(0,l.kt)("li",{parentName:"ul"},"Terminal with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/akinsho/toggleterm.nvim"},"Toggleterm")),(0,l.kt)("li",{parentName:"ul"},"Fuzzy finding with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-telescope/telescope.nvim"},"Telescope")),(0,l.kt)("li",{parentName:"ul"},"Syntax highlighting with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"Treesitter")),(0,l.kt)("li",{parentName:"ul"},"Formatting and linting with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jose-elias-alvarez/null-ls.nvim"},"Null-ls")),(0,l.kt)("li",{parentName:"ul"},"Language Server Protocol with ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/neovim/nvim-lspconfig"},"Native LSP"))),(0,l.kt)("h2",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,l.kt)("p",null,"To begin making custom user configurations you must create a ",(0,l.kt)("inlineCode",{parentName:"p"},"user/")," folder. The provided example can be created with (please note the trailing slashes after the directory names)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,l.kt)("p",null,"The provided example\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AstroNvim/AstroNvim/blob/main/lua/user_example"},"user_example"),"\ncontains an ",(0,l.kt)("inlineCode",{parentName:"p"},"init.lua")," file which can be used for all user configuration. After\nrunning the ",(0,l.kt)("inlineCode",{parentName:"p"},"cp")," command above this file can be found in\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/nvim/lua/user/init.lua"),"."))}d.isMDXComponent=!0},5708:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/overview-5af09d12ff00455df138660519208019.png"}}]);