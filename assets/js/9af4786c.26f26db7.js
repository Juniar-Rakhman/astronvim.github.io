"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[3495],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>_});var i=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=i.createContext({}),c=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return i.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=r(n,["components","mdxType","originalType","parentName"]),d=c(t),_=o,m=d["".concat(s,".").concat(_)]||d[_]||u[_]||a;return t?i.createElement(m,l(l({ref:e},p),{},{components:t})):i.createElement(m,l({ref:e},p))}));function _(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,l=new Array(a);l[0]=d;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r.mdxType="string"==typeof n?n:o,l[1]=r;for(var c=2;c<a;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1900:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={id:"plugin_defaults",title:"Default Plugin Configurations"},l=void 0,r={unversionedId:"configuration/plugin_defaults",id:"version-1.7.0/configuration/plugin_defaults",title:"Default Plugin Configurations",description:"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options would go in the plugins table in the user/init.lua configuration file.",source:"@site/versioned_docs/version-1.7.0/configuration/plugin_defaults.md",sourceDirName:"configuration",slug:"/configuration/plugin_defaults",permalink:"/1.7.0/configuration/plugin_defaults",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"plugin_defaults",title:"Default Plugin Configurations"},sidebar:"docs",previous:{title:"Basic Configuration",permalink:"/1.7.0/configuration/basic_configuration"},next:{title:"Available User Options",permalink:"/1.7.0/configuration/config_options"}},s={},c=[{value:"Autopairs",id:"autopairs",level:2},{value:"Better Escape",id:"better-escape",level:2},{value:"Bufferline",id:"bufferline",level:2},{value:"cmp",id:"cmp",level:2},{value:"Colorizer",id:"colorizer",level:2},{value:"Comment",id:"comment",level:2},{value:"GitSigns",id:"gitsigns",level:2},{value:"Web Devicons",id:"web-devicons",level:2},{value:"Indent Blankline",id:"indent-blankline",level:2},{value:"Indent-o-Matic",id:"indent-o-matic",level:2},{value:"Feline",id:"feline",level:2},{value:"Cinnamon",id:"cinnamon",level:2},{value:"Neo-Tree",id:"neo-tree",level:2},{value:"Packer",id:"packer",level:2},{value:"Aerial",id:"aerial",level:2},{value:"Telescope",id:"telescope",level:2},{value:"ToggleTerm",id:"toggleterm",level:2},{value:"Treesitter",id:"treesitter",level:2},{value:"Which-Key",id:"which-key",level:2}],p={toc:c};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page documents the default options that are set by AstroNvim for each individual plugin. All of these options would go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," table in the ",(0,o.kt)("inlineCode",{parentName:"p"},"user/init.lua")," configuration file."),(0,o.kt)("h2",{id:"autopairs"},"Autopairs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'autopairs = {\n  check_ts = true,\n  ts_config = {\n    lua = { "string", "source" },\n    javascript = { "string", "template_string" },\n    java = false,\n  },\n  disable_filetype = { "TelescopePrompt", "spectre_panel" },\n  fast_wrap = {\n    map = "<M-e>",\n    chars = { "{", "[", "(", \'"\', "\'" },\n    pattern = string.gsub([[ [%\'%"%)%>%]%)%}%,] ]], "%s+", ""),\n    offset = 0,\n    end_key = "$",\n    keys = "qwertyuiopzxcvbnmasdfghjkl",\n    check_comma = true,\n    highlight = "PmenuSel",\n    highlight_grey = "LineNr",\n  },\n},\n')),(0,o.kt)("h2",{id:"better-escape"},"Better Escape"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"better_escape = {},\n")),(0,o.kt)("h2",{id:"bufferline"},"Bufferline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'bufferline = {\n  options = {\n    offsets = {\n      { filetype = "NvimTree", text = "", padding = 1 },\n      { filetype = "neo-tree", text = "", padding = 1 },\n      { filetype = "Outline", text = "", padding = 1 },\n    },\n    buffer_close_icon = "\uf655",\n    modified_icon = "\uf444",\n    close_icon = "\uf658",\n    show_close_icon = true,\n    left_trunc_marker = "\uf0a8",\n    right_trunc_marker = "\uf0a9",\n    max_name_length = 14,\n    max_prefix_length = 13,\n    tab_size = 20,\n    show_tab_indicators = true,\n    enforce_regular_tabs = false,\n    view = "multiwindow",\n    show_buffer_close_icons = true,\n    separator_style = "thin",\n    always_show_bufferline = true,\n    diagnostics = false,\n  },\n},\n')),(0,o.kt)("h2",{id:"cmp"},"cmp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'cmp = {\n  preselect = cmp.PreselectMode.None,\n  formatting = {\n    fields = { "kind", "abbr", "menu" },\n    format = function(_, vim_item)\n      vim_item.kind = string.format("%s", kind_icons[vim_item.kind])\n      return vim_item\n    end,\n  },\n  snippet = {\n    expand = function(args)\n      luasnip.lsp_expand(args.body)\n    end,\n  },\n  duplicates = {\n    nvim_lsp = 1,\n    luasnip = 1,\n    cmp_tabnine = 1,\n    buffer = 1,\n    path = 1,\n  },\n  confirm_opts = {\n    behavior = cmp.ConfirmBehavior.Replace,\n    select = false,\n  },\n  documentation = {\n    border = { "\u256d", "\u2500", "\u256e", "\u2502", "\u256f", "\u2500", "\u2570", "\u2502" },\n  },\n  experimental = {\n    ghost_text = false,\n  },\n  completion = {\n    keyword_length = 1,\n  },\n  mapping = {\n    ["<C-k>"] = cmp.mapping.select_prev_item(),\n    ["<C-j>"] = cmp.mapping.select_next_item(),\n    ["<C-d>"] = cmp.mapping(cmp.mapping.scroll_docs(-1), { "i", "c" }),\n    ["<C-f>"] = cmp.mapping(cmp.mapping.scroll_docs(1), { "i", "c" }),\n    ["<C-Space>"] = cmp.mapping(cmp.mapping.complete(), { "i", "c" }),\n    ["<C-y>"] = cmp.config.disable,\n    ["<C-e>"] = cmp.mapping {\n      i = cmp.mapping.abort(),\n      c = cmp.mapping.close(),\n    },\n    ["<CR>"] = cmp.mapping.confirm { select = true },\n    ["<Tab>"] = cmp.mapping(function(fallback)\n      if cmp.visible() then\n        cmp.select_next_item()\n      elseif luasnip.expandable() then\n        luasnip.expand()\n      elseif luasnip.expand_or_jumpable() then\n        luasnip.expand_or_jump()\n      else\n        fallback()\n      end\n    end, {\n      "i",\n      "s",\n    }),\n    ["<S-Tab>"] = cmp.mapping(function(fallback)\n      if cmp.visible() then\n        cmp.select_prev_item()\n      elseif luasnip.jumpable(-1) then\n        luasnip.jump(-1)\n      else\n        fallback()\n      end\n    end, {\n      "i",\n      "s",\n    }),\n  },\n},\n')),(0,o.kt)("h2",{id:"colorizer"},"Colorizer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'colorizer = {\n  { "*" },\n  {\n    RGB = true, -- #RGB hex codes\n    RRGGBB = true, -- #RRGGBB hex codes\n    names = false, -- "Name" codes like Blue\n    RRGGBBAA = false, -- #RRGGBBAA hex codes\n    rgb_fn = false, -- CSS rgb() and rgba() functions\n    hsl_fn = false, -- CSS hsl() and hsla() functions\n    css = false, -- Enable all css features: rgb_fn, hsl_fn, names, RGB, RRGGBB\n    css_fn = false, -- Enable all CSS *functions*: rgb_fn, hsl_fn\n    mode = "background", -- Set the display mode\n  },\n},\n')),(0,o.kt)("h2",{id:"comment"},"Comment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'comment = {\n  pre_hook = function(ctx)\n    local U = require "Comment.utils"\n\n    local location = nil\n    if ctx.ctype == U.ctype.block then\n      location = require("ts_context_commentstring.utils").get_cursor_location()\n    elseif ctx.cmotion == U.cmotion.v or ctx.cmotion == U.cmotion.V then\n      location = require("ts_context_commentstring.utils").get_visual_start_location()\n    end\n\n    return require("ts_context_commentstring.internal").calculate_commentstring {\n      key = ctx.ctype == U.ctype.line and "__default" or "__multiline",\n      location = location,\n    }\n  end,\n},\n')),(0,o.kt)("h2",{id:"gitsigns"},"GitSigns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'gitsigns = {\n  signs = {\n    add = { hl = "GitSignsAdd", text = "\u258e", numhl = "GitSignsAddNr", linehl = "GitSignsAddLn" },\n    change = { hl = "GitSignsChange", text = "\u258e", numhl = "GitSignsChangeNr", linehl = "GitSignsChangeLn" },\n    delete = { hl = "GitSignsDelete", text = "\u258e", numhl = "GitSignsDeleteNr", linehl = "GitSignsDeleteLn" },\n    topdelete = {\n      hl = "GitSignsDelete",\n      text = "\uf909",\n      numhl = "GitSignsDeleteNr",\n      linehl = "GitSignsDeleteLn",\n    },\n    changedelete = {\n      hl = "GitSignsChange",\n      text = "\u258e",\n      numhl = "GitSignsChangeNr",\n      linehl = "GitSignsChangeLn",\n    },\n  },\n  signcolumn = true,\n  numhl = false,\n  linehl = false,\n  word_diff = false,\n  watch_gitdir = {\n    interval = 1000,\n    follow_files = true,\n  },\n  attach_to_untracked = true,\n  current_line_blame = false,\n  current_line_blame_opts = {\n    virt_text = true,\n    virt_text_pos = "eol",\n    delay = 1000,\n    ignore_whitespace = false,\n  },\n  current_line_blame_formatter_opts = {\n    relative_time = false,\n  },\n  sign_priority = 6,\n  update_debounce = 100,\n  status_formatter = nil,\n  max_file_length = 40000,\n  preview_config = {\n    border = "single",\n    style = "minimal",\n    relative = "cursor",\n    row = 0,\n    col = 1,\n  },\n  yadm = {\n    enable = false,\n  },\n},\n')),(0,o.kt)("h2",{id:"web-devicons"},"Web Devicons"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'["nvim-web-devicons"] = {\n  c = {\n    icon = "\ue61e",\n    color = colors.c,\n    name = "c",\n  },\n  css = {\n    icon = "\ue749",\n    color = colors.css,\n    name = "css",\n  },\n  deb = {\n    icon = "\uf306",\n    color = colors.deb,\n    name = "deb",\n  },\n  Dockerfile = {\n    icon = "\uf308",\n    color = colors.docker,\n    name = "Dockerfile",\n  },\n  html = {\n    icon = "\uf13b",\n    color = colors.html,\n    name = "html",\n  },\n  js = {\n    icon = "\ue74e",\n    color = colors.js,\n    name = "js",\n  },\n  kt = {\n    icon = "\udb84\ude19",\n    color = colors.kt,\n    name = "kt",\n  },\n  lock = {\n    icon = "\uf83d",\n    color = colors.lock,\n    name = "lock",\n  },\n  lua = {\n    icon = "\ue620",\n    color = colors.lua,\n    name = "lua",\n  },\n  mp3 = {\n    icon = "\uf885",\n    color = colors.mp3,\n    name = "mp3",\n  },\n  mp4 = {\n    icon = "\uf144",\n    color = colors.mp4,\n    name = "mp4",\n  },\n  out = {\n    icon = "\ue612",\n    color = colors.out,\n    name = "out",\n  },\n  py = {\n    icon = "\ue606",\n    color = colors.py,\n    name = "py",\n  },\n  ["robots.txt"] = {\n    icon = "\ufba7",\n    color = colors.robot,\n    name = "robots",\n  },\n  toml = {\n    icon = "\uf013",\n    color = colors.toml,\n    name = "toml",\n  },\n  ts = {\n    icon = "\ue628",\n    color = colors.ts,\n    name = "ts",\n  },\n  ttf = {\n    icon = "\uf031",\n    color = colors.ttf,\n    name = "TrueTypeFont",\n  },\n  rb = {\n    icon = "\ue791",\n    color = colors.rb,\n    name = "rb",\n  },\n  rpm = {\n    icon = "\uf316",\n    color = colors.rpm,\n    name = "rpm",\n  },\n  vue = {\n    icon = "\ufd42",\n    color = colors.vue,\n    name = "vue",\n  },\n  woff = {\n    icon = "\uf031",\n    color = colors.woff,\n    name = "WebOpenFontFormat",\n  },\n  woff2 = {\n    icon = "\uf031",\n    color = colors.woff2,\n    name = "WebOpenFontFormat2",\n  },\n  xz = {\n    icon = "\uf1c6",\n    color = colors.zip,\n    name = "xz",\n  },\n  zip = {\n    icon = "\uf1c6",\n    color = colors.zip,\n    name = "zip",\n  },\n  jsx = {\n    icon = "\ufc06",\n    color = colors.jsx,\n    name = "jsx",\n  },\n  rust = {\n    icon = "\ue7a8",\n    color = colors.rs,\n    name = "rs",\n  },\n  jpg = {\n    icon = "\uf74e",\n    color = colors.jpg,\n    name = "jpg",\n  },\n  png = {\n    icon = "\uf74e",\n    color = colors.png,\n    name = "png",\n  },\n  jpeg = {\n    icon = "\uf74e",\n    color = colors.jpeg,\n    name = "jpeg",\n  },\n},\n')),(0,o.kt)("h2",{id:"indent-blankline"},"Indent Blankline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"indent_blankline = {\n  show_current_context = true,\n  show_current_context_start = false,\n},\n")),(0,o.kt)("h2",{id:"indent-o-matic"},"Indent-o-Matic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'["indent-o-matic"] = {\n  max_lines = 2048,\n  standard_widths = { 2, 4, 8 },\n},\n')),(0,o.kt)("h2",{id:"feline"},"Feline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'feline = {\n  disable = { filetypes = { "^NvimTree$", "^neo%-tree$", "^dashboard$", "^Outline$", "^aerial$" } },\n  theme = {\n    fg = status.get_hl_prop("Feline", "foreground", colors.fg),\n    bg = status.get_hl_prop("Feline", "background", colors.bg_1),\n  },\n  components = {\n    active = {\n      {\n        status.colored_spacer(1),\n        status.spacer(2),\n        {\n          provider = "git_branch",\n          hl = status.fg_hl(colors.purple_1, "Conditional", "foreground", { style = "bold" }),\n          icon = "\ue725 ",\n        },\n        status.spacer(3, status.git_head_available),\n        {\n          provider = { name = "file_type", opts = { filetype_icon = true, case = "lowercase" } },\n          enabled = status.filetype_available,\n        },\n        status.spacer(2, status.filetype_available),\n        { provider = "git_diff_added", hl = status.fg_hl(colors.green, "GitSignsAdd"), icon = " \uf0fe " },\n        { provider = "git_diff_changed", hl = status.fg_hl(colors.orange_1, "GitSignsChange"), icon = " \uf9c9" },\n        { provider = "git_diff_removed", hl = status.fg_hl(colors.red_1, "GitSignsDelete"), icon = " \uf146 " },\n        status.spacer(2, status.git_changed),\n        {\n          provider = "diagnostic_errors",\n          enabled = status.diagnostic_exists "ERROR",\n          hl = status.fg_hl(colors.red_1, "DiagnosticError"),\n          icon = " \uf057 ",\n        },\n        {\n          provider = "diagnostic_warnings",\n          enabled = status.diagnostic_exists "WARN",\n          hl = status.fg_hl(colors.orange_1, "DiagnosticWarn"),\n          icon = " \uf071 ",\n        },\n        {\n          provider = "diagnostic_info",\n          enabled = status.diagnostic_exists "INFO",\n          hl = status.fg_hl(colors.white_2, "DiagnosticInfo"),\n          icon = " \uf7fb ",\n        },\n        {\n          provider = "diagnostic_hints",\n          enabled = status.diagnostic_exists "HINT",\n          hl = status.fg_hl(colors.yellow_1, "DiagnosticHint"),\n          icon = " \uf834 ",\n        },\n      },\n      {\n        { provider = status.lsp_progress, hl = { gui = "none" }, enabled = status.hide_in_width },\n        { provider = "lsp_client_names", hl = { gui = "none" }, icon = " \uf085  ", enabled = status.hide_in_width },\n        status.spacer(2, status.hide_in_width),\n        {\n          provider = status.treesitter_status,\n          hl = status.fg_hl(colors.green, "GitSignsAdd"),\n          enabled = status.hide_in_width,\n        },\n        status.spacer(2),\n        { provider = "position" },\n        status.spacer(2),\n        { provider = "line_percentage" },\n        status.spacer(1),\n        { provider = "scroll_bar", hl = status.fg_hl(colors.yellow, "TypeDef") },\n        status.spacer(2),\n        status.colored_spacer(1),\n      },\n    },\n  },\n},\n')),(0,o.kt)("h2",{id:"cinnamon"},"Cinnamon"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"cinnamon = {\n  extra_keymaps = true,\n  extended_keymaps = true,\n},\n")),(0,o.kt)("h2",{id:"neo-tree"},"Neo-Tree"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'["neo-tree"] = {\n  close_if_last_window = true,\n  popup_border_style = "rounded",\n  enable_git_status = true,\n  enable_diagnostics = false,\n  default_component_configs = {\n    indent = {\n      indent_size = 2,\n      padding = 0,\n      with_markers = true,\n      indent_marker = "\u2502",\n      last_indent_marker = "\u2514",\n      highlight = "NeoTreeIndentMarker",\n      with_expanders = false,\n      expander_collapsed = "\uf460",\n      expander_expanded = "\uf47c",\n      expander_highlight = "NeoTreeExpander",\n    },\n    icon = {\n      folder_closed = "\ue5ff",\n      folder_open = "\ue5fe",\n      folder_empty = "\uf414",\n      default = "\ue612",\n    },\n    name = {\n      trailing_slash = false,\n      use_git_status_colors = true,\n    },\n    git_status = {\n      symbols = {\n        added = "\uf196",\n        deleted = "\uf458",\n        modified = "\uf444",\n        renamed = "\u279c",\n        untracked = "\u2605",\n        ignored = "\u25cc",\n        unstaged = "\u2717",\n        staged = "\u2713",\n        conflict = "\ue727",\n      },\n    },\n  },\n  window = {\n    position = "left",\n    width = 25,\n    mappings = {\n      ["<2-LeftMouse>"] = "open",\n      ["<cr>"] = "open",\n      ["o"] = "open",\n      ["S"] = "open_split",\n      ["s"] = "open_vsplit",\n      ["C"] = "close_node",\n      ["<bs>"] = "navigate_up",\n      ["."] = "set_root",\n      ["H"] = "toggle_hidden",\n      ["R"] = "refresh",\n      ["/"] = "fuzzy_finder",\n      ["f"] = "filter_on_submit",\n      ["<c-x>"] = "clear_filter",\n      ["a"] = "add",\n      ["d"] = "delete",\n      ["r"] = "rename",\n      ["y"] = "copy_to_clipboard",\n      ["x"] = "cut_to_clipboard",\n      ["p"] = "paste_from_clipboard",\n      ["c"] = "copy",\n      ["m"] = "move",\n      ["q"] = "close_window",\n    },\n  },\n  nesting_rules = {},\n  filesystem = {\n    filtered_items = {\n      visible = false,\n      hide_dotfiles = true,\n      hide_gitignored = false,\n      hide_by_name = {\n        ".DS_Store",\n        "thumbs.db",\n        "node_modules",\n        "__pycache__",\n      },\n    },\n    follow_current_file = true,\n    hijack_netrw_behavior = "open_current",\n    use_libuv_file_watcher = true,\n  },\n  buffers = {\n    show_unloaded = true,\n    window = {\n      mappings = {\n        ["bd"] = "buffer_delete",\n      },\n    },\n  },\n  git_status = {\n    window = {\n      position = "float",\n      mappings = {\n        ["A"] = "git_add_all",\n        ["gu"] = "git_unstage_file",\n        ["ga"] = "git_add_file",\n        ["gr"] = "git_revert_file",\n        ["gc"] = "git_commit",\n        ["gp"] = "git_push",\n        ["gg"] = "git_commit_and_push",\n      },\n    },\n  },\n  event_handlers = {\n    {\n      event = "vim_buffer_enter",\n      handler = function(_)\n        if vim.bo.filetype == "neo-tree" then\n          vim.wo.signcolumn = "auto"\n        end\n      end,\n    },\n  },\n},\n')),(0,o.kt)("h2",{id:"packer"},"Packer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'packer = {\n  compile_path = vim.fn.stdpath "config" .. "/lua/packer_compiled.lua",\n  display = {\n    open_fn = function()\n      return require("packer.util").float { border = "rounded" }\n    end,\n  },\n  profile = {\n    enable = true,\n    threshold = 0.0001,\n  },\n  git = {\n    clone_timeout = 300,\n    subcommands = {\n      update = "pull --ff-only --progress --rebase=true",\n    },\n  },\n  auto_clean = true,\n  compile_on_sync = true,\n},\n')),(0,o.kt)("h2",{id:"aerial"},"Aerial"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'aerial = {\n  close_behavior = "global",\n  backends = { "lsp", "treesitter", "markdown" },\n  min_width = 28,\n  show_guides = true,\n  filter_kind = {\n    "Array",\n    "Boolean",\n    "Class",\n    "Constant",\n    "Constructor",\n    "Enum",\n    "EnumMember",\n    "Event",\n    "Field",\n    "File",\n    "Function",\n    "Interface",\n    "Key",\n    "Method",\n    "Module",\n    "Namespace",\n    "Null",\n    "Number",\n    "Object",\n    "Operator",\n    "Package",\n    "Property",\n    "String",\n    "Struct",\n    "TypeParameter",\n    "Variable",\n  },\n  icons = {\n    Array = "\uf669",\n    Boolean = "\u22a8",\n    Class = "\uf816",\n    Constant = "\ue22c",\n    Constructor = "\ue20f",\n    Key = "\uf805",\n    Function = "\uf09a",\n    Method = "\u0192",\n    Namespace = "\uf669",\n    Null = "NULL",\n    Number = "#",\n    Object = "\u29bf",\n    Property = "\uf0ad",\n    TypeParameter = "\ud835\ude4f",\n    Variable = "\ue79b",\n    Enum = "\u2130",\n    Package = "\uf8d6",\n    EnumMember = "\uf15d",\n    File = "\uf713",\n    Module = "\uf6a6",\n    Field = "\uf6a7",\n    Interface = "\ufc2e",\n    String = "\ud835\udcd0",\n    Struct = "\ud835\udce2",\n    Event = "\uf0e7",\n    Operator = "+",\n  },\n  guides = {\n    mid_item = "\u251c ",\n    last_item = "\u2514 ",\n    nested_top = "\u2502 ",\n    whitespace = "  ",\n  },\n  on_attach = function(bufnr)\n    -- Jump forwards/backwards with \'{\' and \'}\'\n    vim.keymap.set("n", "{", "<cmd>AerialPrev<cr>", { buffer = bufnr, desc = "Jump backwards in Aerial" })\n    vim.keymap.set("n", "}", "<cmd>AerialNext<cr>", { buffer = bufnr, desc = "Jump forwards in Aerial" })\n    -- Jump up the tree with \'[[\' or \']]\'\n    vim.keymap.set("n", "[[", "<cmd>AerialPrevUp<cr>", { buffer = bufnr, desc = "Jump up and backwards in Aerial" })\n    vim.keymap.set("n", "]]", "<cmd>AerialNextUp<cr>", { buffer = bufnr, desc = "Jump up and forwards in Aerial" })\n  end,\n},\n')),(0,o.kt)("h2",{id:"telescope"},"Telescope"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'telescope = {\n  defaults = {\n\n    prompt_prefix = "\uf002 ",\n    selection_caret = "\u276f ",\n    path_display = { "truncate" },\n    selection_strategy = "reset",\n    sorting_strategy = "ascending",\n    layout_strategy = "horizontal",\n    layout_config = {\n      horizontal = {\n        prompt_position = "top",\n        preview_width = 0.55,\n        results_width = 0.8,\n      },\n      vertical = {\n        mirror = false,\n      },\n      width = 0.87,\n      height = 0.80,\n      preview_cutoff = 120,\n    },\n\n    mappings = {\n      i = {\n        ["<C-n>"] = actions.cycle_history_next,\n        ["<C-p>"] = actions.cycle_history_prev,\n\n        ["<C-j>"] = actions.move_selection_next,\n        ["<C-k>"] = actions.move_selection_previous,\n\n        ["<C-c>"] = actions.close,\n\n        ["<Down>"] = actions.move_selection_next,\n        ["<Up>"] = actions.move_selection_previous,\n\n        ["<CR>"] = actions.select_default,\n        ["<C-x>"] = actions.select_horizontal,\n        ["<C-v>"] = actions.select_vertical,\n        ["<C-t>"] = actions.select_tab,\n\n        ["<C-u>"] = actions.preview_scrolling_up,\n        ["<C-d>"] = actions.preview_scrolling_down,\n\n        ["<PageUp>"] = actions.results_scrolling_up,\n        ["<PageDown>"] = actions.results_scrolling_down,\n\n        ["<Tab>"] = actions.toggle_selection + actions.move_selection_worse,\n        ["<S-Tab>"] = actions.toggle_selection + actions.move_selection_better,\n        ["<C-q>"] = actions.send_to_qflist + actions.open_qflist,\n        ["<M-q>"] = actions.send_selected_to_qflist + actions.open_qflist,\n        ["<C-l>"] = actions.complete_tag,\n      },\n\n      n = {\n        ["<esc>"] = actions.close,\n        ["<CR>"] = actions.select_default,\n        ["<C-x>"] = actions.select_horizontal,\n        ["<C-v>"] = actions.select_vertical,\n        ["<C-t>"] = actions.select_tab,\n\n        ["<Tab>"] = actions.toggle_selection + actions.move_selection_worse,\n        ["<S-Tab>"] = actions.toggle_selection + actions.move_selection_better,\n        ["<C-q>"] = actions.send_to_qflist + actions.open_qflist,\n        ["<M-q>"] = actions.send_selected_to_qflist + actions.open_qflist,\n\n        ["j"] = actions.move_selection_next,\n        ["k"] = actions.move_selection_previous,\n        ["H"] = actions.move_to_top,\n        ["M"] = actions.move_to_middle,\n        ["L"] = actions.move_to_bottom,\n\n        ["<Down>"] = actions.move_selection_next,\n        ["<Up>"] = actions.move_selection_previous,\n        ["gg"] = actions.move_to_top,\n        ["G"] = actions.move_to_bottom,\n\n        ["<C-u>"] = actions.preview_scrolling_up,\n        ["<C-d>"] = actions.preview_scrolling_down,\n\n        ["<PageUp>"] = actions.results_scrolling_up,\n        ["<PageDown>"] = actions.results_scrolling_down,\n      },\n    },\n  },\n  pickers = {},\n  extensions = {},\n},\n')),(0,o.kt)("h2",{id:"toggleterm"},"ToggleTerm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'toggleterm = {\n  size = 10,\n  open_mapping = [[<c-\\>]],\n  hide_numbers = true,\n  shade_filetypes = {},\n  shade_terminals = true,\n  shading_factor = 2,\n  start_in_insert = true,\n  insert_mappings = true,\n  persist_size = true,\n  direction = "float",\n  close_on_exit = true,\n  shell = vim.o.shell,\n  float_opts = {\n    border = "curved",\n    winblend = 0,\n    highlights = {\n      border = "Normal",\n      background = "Normal",\n    },\n  },\n},\n')),(0,o.kt)("h2",{id:"treesitter"},"Treesitter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'treesitter = {\n  ensure_installed = {},\n  sync_install = false,\n  ignore_install = {},\n  highlight = {\n    enable = true,\n    additional_vim_regex_highlighting = false,\n  },\n  context_commentstring = {\n    enable = true,\n    enable_autocmd = false,\n  },\n  autopairs = {\n    enable = true,\n  },\n  incremental_selection = {\n    enable = true,\n  },\n  indent = {\n    enable = false,\n  },\n  rainbow = {\n    enable = true,\n    disable = { "html" },\n    extended_mode = false,\n    max_file_lines = nil,\n  },\n  autotag = {\n    enable = true,\n  },\n},\n')),(0,o.kt)("h2",{id:"which-key"},"Which-Key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'["which-key"] = {\n  plugins = {\n    marks = true,\n    registers = true,\n    spelling = {\n      enabled = true,\n      suggestions = 20,\n    },\n    presets = {\n      operators = false,\n      motions = true,\n      text_objects = true,\n      windows = true,\n      nav = true,\n      z = true,\n      g = true,\n    },\n  },\n  key_labels = {},\n  icons = {\n    breadcrumb = "\xbb",\n    separator = "\u279c",\n    group = "+",\n  },\n  popup_mappings = {\n    scroll_down = "<c-d>",\n    scroll_up = "<c-u>",\n  },\n  window = {\n    border = "rounded",\n    position = "bottom",\n    margin = { 1, 0, 1, 0 },\n    padding = { 2, 2, 2, 2 },\n    winblend = 0,\n  },\n  layout = {\n    height = { min = 4, max = 25 },\n    width = { min = 20, max = 50 },\n    spacing = 3,\n    align = "left",\n  },\n  ignore_missing = true,\n  hidden = { "<silent>", "<cmd>", "<Cmd>", "<CR>", "call", "lua", "^:", "^ " },\n  show_help = true,\n  triggers = "auto",\n  triggers_blacklist = {\n    i = { "j", "k" },\n    v = { "j", "k" },\n  },\n},\n')))}u.isMDXComponent=!0}}]);