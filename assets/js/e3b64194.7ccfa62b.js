"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[4363],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},39883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={id:"advanced_lsp",title:"Advanced LSP Setup"},o=void 0,r={unversionedId:"Recipes/advanced_lsp",id:"version-3.2.0/Recipes/advanced_lsp",title:"Advanced LSP Setup",description:"Customizing auto-format on save",source:"@site/versioned_docs/version-3.2.0/Recipes/advanced_lsp.md",sourceDirName:"Recipes",slug:"/Recipes/advanced_lsp",permalink:"/Recipes/advanced_lsp",draft:!1,tags:[],version:"3.2.0",frontMatter:{id:"advanced_lsp",title:"Advanced LSP Setup"},sidebar:"docs",previous:{title:"Black Belt Example User Configs",permalink:"/Recipes/black_belt"},next:{title:"Dashboard Customizations",permalink:"/Recipes/alpha"}},s={},p=[{value:"Customizing auto-format on save",id:"customizing-auto-format-on-save",level:2},{value:"Controlling Formatting",id:"controlling-formatting",level:2},{value:"Disabling formatting for a filter function",id:"disabling-formatting-for-a-filter-function",level:3},{value:"Disabling formatting for a list of language servers",id:"disabling-formatting-for-a-list-of-language-servers",level:3},{value:"Using both filter function and disabled list",id:"using-both-filter-function-and-disabled-list",level:3},{value:"Configure other formatting options",id:"configure-other-formatting-options",level:3},{value:"LSP Setup Without Installer",id:"lsp-setup-without-installer",level:2},{value:"Custom LSP Definition",id:"custom-lsp-definition",level:2},{value:"LSP Specific Plugins",id:"lsp-specific-plugins",level:2},{value:"Typescript (typescript.nvim)",id:"typescript-typescriptnvim",level:3},{value:"Deno (deno-nvim)",id:"deno-deno-nvim",level:3},{value:"C/C++ (clangd_extensions.nvim)",id:"cc-clangd_extensionsnvim",level:3},{value:"Dart Flutter (flutter-tools.nvim)",id:"dart-flutter-flutter-toolsnvim",level:3},{value:"Rust (rust-tools.nvim)",id:"rust-rust-toolsnvim",level:3},{value:"Java (nvim-jdtls)",id:"java-nvim-jdtls",level:3}],u={toc:p},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"customizing-auto-format-on-save"},"Customizing auto-format on save"),(0,i.kt)("p",null,"AstroNvim has made formatting on save part of the default functionality out of the box. If you don't want your code to get auto formatted on save, you can disable it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," table. Here is a minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that disables the formatting on save:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  lsp = {\n    formatting = {\n      format_on_save = false, -- enable or disable automatic formatting on save\n    },\n  },\n}\n")),(0,i.kt)("p",null,"We have also added an extension to just ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for this option to give more the user the ability to disable the auto formatting for specific filetypes. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      format_on_save = {\n        enabled = true, -- enable format on save\n        ignore_filetypes = { -- disable format on save for specified filetypes\n          "markdown",\n          "python",\n        }\n      },\n    },\n  },\n}\n')),(0,i.kt)("p",null,"If you would rather use a whitelist of filetypes for formatting on save rather than a blacklist type model, you can do that as well with the ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_filetypes")," table. If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_filetypes")," it will take presidence over ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore_filetypes"),". So please only use one of these options at a time. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      format_on_save = {\n        enabled = true, -- enable format on save\n        allow_filetypes = { -- only allow formatting on save for these filetypes\n          "lua",\n          "python",\n        }\n      },\n    },\n  },\n}\n')),(0,i.kt)("p",null,"If you would rather use a whitelist of filetypes for formatting on save rather than a blacklist type model, you can do that as well with the ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_filetypes")," table. If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"allow_filetypes")," it will take presidence over ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore_filetypes"),". So please only use one of these options at a time. Here is an example:\nFor even more control, you can provide a filter function with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),". This function takes a single parameter of the current buffer number and returns a boolean value of whether you want to format on save or not (",(0,i.kt)("inlineCode",{parentName:"p"},"true")," means format, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," means do not format). This function will run on each save to calculate if it should format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"return {\n  lsp = {\n    formatting = {\n      format_on_save = {\n        enabled = true, -- enable format on save\n        filter = function(bufnr)\n          -- any lua logic...\n          return true -- return boolean whether or not to format\n        end\n      }\n    }\n  }\n}\n")),(0,i.kt)("p",null,"With the formatting on save enabled, we have also provided the mapping ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>uf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>uF")," to toggle the auto formatting temporarily for either the current buffer or globally, along with the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.g.autoformat_enabled")," which allows you to control whether the auto formatter runs on startup initially (",(0,i.kt)("em",{parentName:"p"},"Note:")," Format on save must be enabled in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," table for this option and keybinding to do anything)."),(0,i.kt)("h2",{id:"controlling-formatting"},"Controlling Formatting"),(0,i.kt)("p",null,"Since Neovim v0.8 there have been improvements to how language servers are used for formatting files. Previously Neovim could only use a single language server to format files at a time and would prompt on each format if multiple were available. This led to users disabling formatting capabilities for different language servers and losing that functionality all together for convenience. Now you are able to format with many formatters at the same time and filter them with a function. To empower this, AstroNvim has a configuration option for controlling what formatters are used. This can be done either with a filter function or a list of disabled clients. Here are a couple example ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," contents that demonstrate each possibility."),(0,i.kt)("h3",{id:"disabling-formatting-for-a-filter-function"},"Disabling formatting for a filter function"),(0,i.kt)("p",null,"using the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," option you can supply filter function to be run on each client that has formatting capabilities and if it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then it will be used for formatting and if it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," then it will not be used. This applies to whenever you format your code either on save, with ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>lf"),", or with ",(0,i.kt)("inlineCode",{parentName:"p"},":Format"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      filter = function(client)\n        -- disable formatting for lua_ls\n        if client.name == "lua_ls" then\n          return false\n        end\n\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"disabling-formatting-for-a-list-of-language-servers"},"Disabling formatting for a list of language servers"),(0,i.kt)("p",null,"using the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," option you can supply an array like list of language server client names and those clients will be disabled with you format your code either on save, with ",(0,i.kt)("inlineCode",{parentName:"p"},"<leader>lf"),", or with ",(0,i.kt)("inlineCode",{parentName:"p"},":Format"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      disabled = {\n        "lua_ls",\n        "rust_analyzer",\n      },\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"using-both-filter-function-and-disabled-list"},"Using both filter function and disabled list"),(0,i.kt)("p",null,"When using the options together, a client listed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," list will always be disabled and then all other clients will then be passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," function. For example, we can simplify our previous ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," function by just disabling the ",(0,i.kt)("inlineCode",{parentName:"p"},"lua_ls")," client in the ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      disabled = { "lua_ls" },\n      filter = function(client)\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"configure-other-formatting-options"},"Configure other formatting options"),(0,i.kt)("p",null,"We have also provided an option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," table for easily enabling and disabling automatic formatting on save with ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting.format_on_save"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.formatting")," option also allows you to specify other parameters for the ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.lsp.buf.format()")," call. Any of the other formatting options are allowed to be used here to be used as the default options. This means being able to easily adjust the default ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout_ms")," for formatting in AstroNvim or making asynchronous formatting the default. For example you can do the following to increase the formatting timeout along with adjust the filtering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    formatting = {\n      format_on_save = true, -- enable or disable automatic formatting on save\n      timeout_ms = 3200, -- adjust the timeout_ms variable for formatting\n      disabled = { "lua_ls" },\n      filter = function(client)\n        -- only enable null-ls for javascript files\n        if vim.bo.filetype == "javascript" then\n          return client.name == "null-ls"\n        end\n\n        -- enable all other clients\n        return true\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"lsp-setup-without-installer"},"LSP Setup Without Installer"),(0,i.kt)("p",null,"AstroNvim comes with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/williamboman/mason-lspconfig.nvim"},"mason-lspconfig")," as an easy interface for setting up and installing language servers, but this might not be adequate for all users. The LSP installer doesn't support all of the language servers that Neovim's LSP config supports and some users may already have the language servers installed on their machine and don't want to reinstall it separately. In these cases we have added an easy interface for setting up these servers. The following is a minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"user/init.lua")," file that simply sets up ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," language server for a user with ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," already available on their system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n  },\n}\n')),(0,i.kt)("p",null,"If the user wants to configure server specific settings and configurations then they can do this with the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config")," table as well. For example if the user wants to use ",(0,i.kt)("inlineCode",{parentName:"p"},"pyright")," that is already available on their system and disable the single file support then can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "pyright",\n    },\n    config = {\n      pyright = {\n        single_filesupport = false,\n      },\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"custom-lsp-definition"},"Custom LSP Definition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nvim-lspconfig")," is great, but it doesn't support all language servers that exist. You may want to set up a custom server where you manually define the ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"root_dir"),". This can be done completely through ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.servers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config")," just like setting up servers that are supported by ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig"),"! For these custom servers, the minimum requirement is setting up a ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config")," entry, but to get automatic starting of language servers you also need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"filetypes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"root_dir"),". Here is a simple example setting up a Prolog LSP with ",(0,i.kt)("inlineCode",{parentName:"p"},"swipl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "prolog_lsp",\n    },\n    config = {\n      prolog_lsp = function()\n        return {\n          cmd = {"swipl",\n                 "-g", "use_module(library(lsp_server)).",\n                 "-g", "lsp_server:main",\n                 "-t", "halt",\n                 "--", "stdio"};\n          filetypes = {"prolog"};\n          root_dir = require("lspconfig.util").root_pattern("pack.pl");\n        }\n      end,\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"lsp-specific-plugins"},"LSP Specific Plugins"),(0,i.kt)("p",null,"There are some plugins available for doing advanced setup of language servers that require the user to not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup call and instead use their own plugin setup for handling this. AstroNvim provides a nice way to do this while still using ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-lspconfig")," for installing the language servers. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.setup_handlers")," table for specifying how language servers should be setup such as using a language specific plugin. This function for each handler has two parameters, the first is the name of the server and the second is the options we would be passing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"lspconfig")," setup call. These options include things such as our built in ",(0,i.kt)("inlineCode",{parentName:"p"},"capabilities"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"on_attach"),", as well as the user defined options in ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config"),". Here are a couple examples for some common LSP plugins:"),(0,i.kt)("h3",{id:"typescript-typescriptnvim"},"Typescript (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/jose-elias-alvarez/typescript.nvim"},"typescript.nvim"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    setup_handlers = {\n      -- add custom handler\n      tsserver = function(_, opts) require("typescript").setup { server = opts } end\n    }\n  },\n  plugins = {\n    "jose-elias-alvarez/typescript.nvim", -- add lsp plugin\n    {\n      "williamboman/mason-lspconfig.nvim",\n      opts = {\n        ensure_installed = { "tsserver" }, -- automatically install lsp\n      },\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"deno-deno-nvim"},"Deno (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/sigmaSd/deno-nvim"},"deno-nvim"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    setup_handlers = {\n      -- add custom handler\n      denols = function(_, opts) require("deno-nvim").setup { server = opts } end\n    }\n  },\n  plugins = {\n    "sigmasd/deno-nvim", -- add lsp plugin\n    {\n      "williamboman/mason-lspconfig.nvim",\n      opts = {\n        ensure_installed = { "denols" }, -- automatically install lsp\n      },\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"tsserver + denols")),(0,i.kt)("p",null,"Since both ",(0,i.kt)("inlineCode",{parentName:"p"},"tsserver")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"denols")," (and others such as ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier"),") attach to TypeScript/JavaScript files, some extra configuration may be required if both are installed."),(0,i.kt)("p",null,"To conditionally enable ",(0,i.kt)("inlineCode",{parentName:"p"},"tsserver"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"denols")," based on the presence of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"deno.json"),", add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"lsp.config"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    config = {\n      denols = function(opts)\n        opts.root_dir = require("lspconfig.util").root_pattern("deno.json", "deno.jsonc")\n        return opts\n      end,\n      tsserver = function(opts)\n        opts.root_dir = require("lspconfig.util").root_pattern("package.json")\n        return opts\n      end,\n      -- For eslint:\n      -- eslint = function(opts)\n      --   opts.root_dir = require("lspconfig.util").root_pattern("package.json", ".eslintrc.json", ".eslintrc.js"),\n      --   return opts\n      -- end,\n    },\n  },\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"null-ls")," packages (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prettierd"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint_d"),"), set the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"mason-null-ls.setup_handlers"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  plugins = {\n    {\n      "jay-babu/mason-null-ls.nvim",\n      config = function(plugin, opts)\n        local mason_null_ls = require("mason-null-ls")\n        local null_ls = require "null-ls"\n\n        mason_null_ls.setup(opts) -- run setup\n        mason_null_ls.setup_handlers { -- setup custom handlers\n          prettier = function()\n            null_ls.register(null_ls.builtins.formatting.prettier.with {\n              condition = function(utils)\n                return utils.root_has_file "package.json"\n                  or utils.root_has_file ".prettierrc"\n                  or utils.root_has_file ".prettierrc.json"\n                  or utils.root_has_file ".prettierrc.js"\n              end,\n            })\n          end,\n          -- For prettierd:\n          -- prettierd = function()\n          --   null_ls.register(null_ls.builtins.formatting.prettierd.with({\n          --     condition = function(utils)\n          --       return utils.root_has_file("package.json") or utils.root_has_file(".prettierrc") or utils.root_has_file(".prettierrc.json") or utils.root_has_file(".prettierrc.js")\n          --     end\n          --   }))\n          -- end,\n          -- For eslint_d:\n          -- eslint_d = function()\n          --   null_ls.register(null_ls.builtins.diagnostics.eslint_d.with({\n          --     condition = function(utils)\n          --       return utils.root_has_file("package.json") or utils.root_has_file(".eslintrc.json") or utils.root_has_file(".eslintrc.js")\n          --     end\n          --   }))\n          -- end,\n        }\n      end,\n    },\n  }\n}\n')),(0,i.kt)("h3",{id:"cc-clangd_extensionsnvim"},"C/C++ (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/p00f/clangd_extensions.nvim"},"clangd_extensions.nvim"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    setup_handlers = {\n      -- add custom handler\n      clangd = function(_, opts) require("clangd_extensions").setup { server = opts } end\n    },\n    config = {\n      clangd = {\n        capabilities = {\n          offsetEncoding = "utf-8",\n        },\n      },\n    },\n  },\n  plugins = {\n    "p00f/clangd_extensions.nvim", -- install lsp plugin\n    {\n      "williamboman/mason-lspconfig.nvim",\n      opts = {\n        ensure_installed = { "clangd" }, -- automatically install lsp\n      },\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"dart-flutter-flutter-toolsnvim"},"Dart Flutter (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/akinsho/flutter-tools.nvim"},"flutter-tools.nvim"),")"),(0,i.kt)("p",null,"Requires ",(0,i.kt)("inlineCode",{parentName:"p"},"dart")," to be available on the system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    servers = {\n      "dartls",\n    },\n    setup_handlers = {\n      -- add custom handler\n      dartls = function(_, opts) require("flutter-tools").setup { lsp = opts } end,\n    },\n    config = {\n      dartls = {\n        -- any changes you want to make to the LSP setup, for example\n        color = {\n          enabled = true,\n        },\n        settings = {\n          showTodos = true,\n          completeFunctionCalls = true,\n        },\n      },\n    },\n  },\n  plugins = {\n    "akinsho/flutter-tools.nvim", -- add lsp plugin\n  },\n}\n')),(0,i.kt)("h3",{id:"rust-rust-toolsnvim"},"Rust (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/simrat39/rust-tools.nvim"},"rust-tools.nvim"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    setup_handlers = {\n      -- add custom handler\n      rust_analyzer = function(_, opts) require("rust-tools").setup { server = opts } end\n    },\n  },\n  plugins = {\n    "simrat39/rust-tools.nvim", -- add lsp plugin\n    {\n      "williamboman/mason-lspconfig.nvim",\n      opts = {\n        ensure_installed = { "rust_analyzer" },\n      },\n    },\n  },\n}\n')),(0,i.kt)("h3",{id:"java-nvim-jdtls"},"Java (",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/mfussenegger/nvim-jdtls"},"nvim-jdtls"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  lsp = {\n    setup_handlers = {\n      -- add custom handler\n      jdtls = function(_, opts)\n        vim.api.nvim_create_autocmd("Filetype", {\n          pattern = "java", -- autocmd to start jdtls\n          callback = function()\n            if opts.root_dir and opts.root_dir ~= "" then require("jdtls").start_or_attach(opts) end\n          end,\n        })\n      end\n    },\n    config = {\n      -- set jdtls server settings\n      jdtls = function()\n        -- use this function notation to build some variables\n        local root_markers = { ".git", "mvnw", "gradlew", "pom.xml", "build.gradle" }\n        local root_dir = require("jdtls.setup").find_root(root_markers)\n\n        -- calculate workspace dir\n        local project_name = vim.fn.fnamemodify(vim.fn.getcwd(), ":p:h:t")\n        local workspace_dir = vim.fn.stdpath "data" .. "/site/java/workspace-root/" .. project_name\n        os.execute("mkdir " .. workspace_dir)\n\n        -- get the mason install path\n        local install_path = require("mason-registry").get_package("jdtls"):get_install_path()\n\n        -- get the current OS\n        local os\n        if vim.fn.has "macunix" then\n          os = "mac"\n        elseif vim.fn.has "win32" then\n          os = "win"\n        else\n          os = "linux"\n        end\n\n        -- return the server config\n        return {\n          cmd = {\n            "java",\n            "-Declipse.application=org.eclipse.jdt.ls.core.id1",\n            "-Dosgi.bundles.defaultStartLevel=4",\n            "-Declipse.product=org.eclipse.jdt.ls.core.product",\n            "-Dlog.protocol=true",\n            "-Dlog.level=ALL",\n            "-javaagent:" .. install_path .. "/lombok.jar",\n            "-Xms1g",\n            "--add-modules=ALL-SYSTEM",\n            "--add-opens",\n            "java.base/java.util=ALL-UNNAMED",\n            "--add-opens",\n            "java.base/java.lang=ALL-UNNAMED",\n            "-jar",\n            vim.fn.glob(install_path .. "/plugins/org.eclipse.equinox.launcher_*.jar"),\n            "-configuration",\n            install_path .. "/config_" .. os,\n            "-data",\n            workspace_dir,\n          },\n          root_dir = root_dir,\n        }\n      end,\n    },\n  },\n  plugins = {\n    "mfussenegger/nvim-jdtls", -- load jdtls on module\n    {\n      "williamboman/mason-lspconfig.nvim",\n      opts = {\n        ensure_installed = { "jdtls" },\n      },\n    },\n  },\n}\n')))}m.isMDXComponent=!0}}]);