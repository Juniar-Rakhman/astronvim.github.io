"use strict";(self.webpackChunkastro_vim=self.webpackChunkastro_vim||[]).push([[5146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=i,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={id:"manage_user_config",title:"Managing User Configuration",sidebar_position:1},a=void 0,s={unversionedId:"configuration/manage_user_config",id:"version-1.7.0/configuration/manage_user_config",title:"Managing User Configuration",description:"One of the best parts of separating the user configuration of AstroNvim away from modifying the system files is the ability to manage and track your own user configuration while maintaining the ability to still get AstroNvim updates. The easiest process to do this would be as follows:",source:"@site/versioned_docs/version-1.7.0/configuration/manage_user_config.md",sourceDirName:"configuration",slug:"/configuration/manage_user_config",permalink:"/1.7.0/configuration/manage_user_config",draft:!1,tags:[],version:"1.7.0",sidebarPosition:1,frontMatter:{id:"manage_user_config",title:"Managing User Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"Default Mappings",permalink:"/1.7.0/usage/mappings"},next:{title:"Managing AstroNvim Updates",permalink:"/1.7.0/configuration/updater"}},l={},u=[{value:"Setting up a user configuration",id:"setting-up-a-user-configuration",level:2},{value:"Installing from an existing User Configuration",id:"installing-from-an-existing-user-configuration",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the best parts of separating the user configuration of AstroNvim away from modifying the system files is the ability to manage and track your own user configuration while maintaining the ability to still get AstroNvim updates. The easiest process to do this would be as follows:"),(0,i.kt)("h2",{id:"setting-up-a-user-configuration"},"Setting up a user configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new repository using whatever version control system you would like. For these steps we will assume you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"git")," with the repo ",(0,i.kt)("inlineCode",{parentName:"li"},"username/astronvim_config")),(0,i.kt)("li",{parentName:"ol"},"Clone AstroNvim (normal installation instructions)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Clone your empty new repository to your ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/nvim/lua")," folder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/username/astronvim_config.git ~/.config/nvim/lua/user\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you want to keep your user configuration completely separate from the cloned repository, you can also put this folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim/lua/user"),". AstroNvim adds the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"$XDG_CONFIG_HOME/astronvim")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"runtimepath")," so any ",(0,i.kt)("inlineCode",{parentName:"p"},"vimscript")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lua")," files in there can be sourced.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Copy the example ",(0,i.kt)("inlineCode",{parentName:"li"},"init.lua")," file provided with AstroNvim to your user directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cp -r ~/.config/nvim/lua/user_example/ ~/.config/nvim/lua/user/\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Initlialize AstroNvim (this example is using the unattended installation as described above)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nvim  --headless -c 'autocmd User PackerComplete quitall' -c 'PackerSync'\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/nvim/lua/user")," folder and ",(0,i.kt)("inlineCode",{parentName:"li"},"user/init.lua")," file to your liking and push the changes you make to your repository")),(0,i.kt)("h2",{id:"installing-from-an-existing-user-configuration"},"Installing from an existing User Configuration"),(0,i.kt)("p",null,"If you have already created your user configuration and have it tracked in a repository, then the process of getting your system up and running is very easy:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone AstroNvim (normal installation instructions)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/AstroNvim/AstroNvim ~/.config/nvim\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Clone your empty new repository to your ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/nvim/lua")," folder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/username/astronvim_config.git ~/.config/nvim/lua/user\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Initialize AstroNvim")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nvim  --headless -c 'autocmd User PackerComplete quitall' -c 'PackerSync'\n")))}p.isMDXComponent=!0}}]);