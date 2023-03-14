"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[2288],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=i,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||r;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},11476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={id:"dap",title:"Debugger Setup"},o=void 0,p={unversionedId:"Recipes/dap",id:"version-3.2.0/Recipes/dap",title:"Debugger Setup",description:"AstroNvim does not currently support debugging in Windows, and the debugging plugins will not be installed by default",source:"@site/versioned_docs/version-3.2.0/Recipes/dap.md",sourceDirName:"Recipes",slug:"/Recipes/dap",permalink:"/Recipes/dap",draft:!1,tags:[],version:"3.2.0",frontMatter:{id:"dap",title:"Debugger Setup"},sidebar:"docs",previous:{title:"Custom Plugins",permalink:"/Recipes/custom_plugins"},next:{title:"Disable Tabline",permalink:"/Recipes/disable_tabline"}},l={},u=[{value:"Installing Debuggers With Mason",id:"installing-debuggers-with-mason",level:2},{value:"Automatically Install Debuggers",id:"automatically-install-debuggers",level:3},{value:"Setting Up Custom Debuggers",id:"setting-up-custom-debuggers",level:2},{value:"Disabling Auto Debugging UI",id:"disabling-auto-debugging-ui",level:2},{value:"Enable Plugins on Windows",id:"enable-plugins-on-windows",level:2}],s={toc:u},d="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"AstroNvim does not currently support debugging in Windows, and the debugging plugins will not be installed by default")),(0,i.kt)("p",null,"AstroNvim v2.9 introduced debugging support with AstroNvim. We use a combination of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mfussenegger/nvim-dap"},(0,i.kt)("inlineCode",{parentName:"a"},"nvim-dap"))," for the debugger, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jay-babu/mason-nvim-dap.nvim"},(0,i.kt)("inlineCode",{parentName:"a"},"mason-nvim-dap"))," for interoperability with the Mason package manager, and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rcarriga/nvim-dap-ui"},(0,i.kt)("inlineCode",{parentName:"a"},"nvim-dap-ui"))," for a nice user interface while debugging."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-dap")," can be very manual and require deep knowledge of the debugger that you are trying to set up. We cannot provide support for all of these debuggers and how to set them up outside of being able to provide APIs to interact with the underlying plugins. Please proceed with caution and expect it to take some time and effort to get things working perfectly.")),(0,i.kt)("h2",{id:"installing-debuggers-with-mason"},"Installing Debuggers With Mason"),(0,i.kt)("p",null,"By default there are a few debuggers that can be automatically installed and configured just through Mason (with the help of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jay-babu/mason-nvim-dap.nvim"},(0,i.kt)("inlineCode",{parentName:"a"},"mason-nvim-dap")),"). This can be done using either the ",(0,i.kt)("inlineCode",{parentName:"p"},":DapInstall")," command or through the Mason UI with ",(0,i.kt)("inlineCode",{parentName:"p"},":Mason"),". For details on configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-nvim-dap")," as well as which debuggers are supported, please check their ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," and documentation. It provides a function for setting up custom handlers for when a recognizable debugger is installed, this can be configured by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," function of the plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "jay-babu/mason-nvim-dap.nvim",\n      config = function(plugin, opts)\n        local mason_nvim_dap = require "mason-nvim-dap"\n        mason_nvim_dap.setup(opts) -- run setup\n        -- do more configuration as needed\n        mason_nvim_dap.setup_handlers {\n          python = function(source_name)\n            local dap = require "dap"\n            dap.adapters.python = {\n              type = "executable",\n              command = "/usr/bin/python3",\n              args = {\n                "-m",\n                "debugpy.adapter",\n              },\n            }\n\n            dap.configurations.python = {\n              {\n                type = "python",\n                request = "launch",\n                name = "Launch file",\n                program = "${file}", -- This configuration will launch the current file if used.\n              },\n            }\n          end,\n        }\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"automatically-install-debuggers"},"Automatically Install Debuggers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mason-nvim-dap")," also allows you to automatically install debuggers that you may want. This can be configured by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-nvim-dap")," plugin options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "jay-babu/mason-nvim-dap.nvim",\n      opts = {\n        ensure_installed = { "python" }\n      }\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"setting-up-custom-debuggers"},"Setting Up Custom Debuggers"),(0,i.kt)("p",null,"Not all debugging adapters are supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-nvim-dap")," or to be installed with Mason itself. For these it may be necessary for manually configuring adapters and configurations for ",(0,i.kt)("inlineCode",{parentName:"p"},"dap")," directly. For details on configuring debuggers manually, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mfussenegger/nvim-dap/wiki"},(0,i.kt)("inlineCode",{parentName:"a"},"nvim-dap")," wiki"),". You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dap.adapters")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dap.configurations")," tables in your ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file (or ",(0,i.kt)("inlineCode",{parentName:"p"},"user/dap/adapters.lua")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user/dap/configurations.lua")," files):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  dap = {\n    adapters = {\n      python = {\n        type = "executable",\n        command = "path/to/virtualenvs/debugpy/bin/python",\n        args = { "-m", "debugpy.adapter" },\n      },\n    },\n    configurations = {\n      python = {\n        {\n          -- The first three options are required by nvim-dap\n          type = "python", -- the type here established the link to the adapter definition: `dap.adapters.python`\n          request = "launch",\n          name = "Launch file",\n\n          -- Options below are for debugpy, see https://github.com/microsoft/debugpy/wiki/Debug-configuration-settings for supported options\n\n          program = "${file}", -- This configuration will launch the current file if used.\n          pythonPath = function()\n            -- debugpy supports launching an application with a different interpreter then the one used to launch debugpy itself.\n            -- The code below looks for a `venv` or `.venv` folder in the current directly and uses the python within.\n            -- You could adapt this - to for example use the `VIRTUAL_ENV` environment variable.\n            local cwd = vim.fn.getcwd()\n            if vim.fn.executable(cwd .. "/venv/bin/python") == 1 then\n              return cwd .. "/venv/bin/python"\n            elseif vim.fn.executable(cwd .. "/.venv/bin/python") == 1 then\n              return cwd .. "/.venv/bin/python"\n            else\n              return "/usr/bin/python"\n            end\n          end,\n        },\n      },\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"disabling-auto-debugging-ui"},"Disabling Auto Debugging UI"),(0,i.kt)("p",null,"By default, AstroNvim sets up event listeners with ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-dap")," to automatically open and close the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvim-dap-ui"),". This can be disabled by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},'require("dapui").setup({...})')," call with the function override method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "rcarriga/nvim-dap-ui",\n      config = function(plugin, opts)\n        -- run default AstroNvim nvim-dap-ui configuration function\n        require "plugins.configs.nvim-dap-ui"(plugin, opts)\n\n        -- disable dap events that are created\n        local dap = require "dap"\n        dap.listeners.after.event_initialized["dapui_config"] = nil\n        dap.listeners.before.event_terminated["dapui_config"] = nil\n        dap.listeners.before.event_exited["dapui_config"] = nil\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"enable-plugins-on-windows"},"Enable Plugins on Windows"),(0,i.kt)("p",null,"This does not work out of the box and we cannot provide support for it at the moment, but if you want to enable the plugins on Windows then you can manually enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"dap")," plugin in your user configuration. Here is an example in ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    { "mfussenegger/nvim-dap", enabled = true },\n  },\n}\n')))}g.isMDXComponent=!0}}]);