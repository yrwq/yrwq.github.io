import{t as e}from"./index-BeL-6Tui.js";import{t}from"./lib-esbqf6IU.js";var n=e();const r={title:`lush: why i built a wayland shell`,date:`2026-02-25`,description:``,tags:[`wayland`,`gtk`,`lua`],draft:!1};function i(e){let r={a:`a`,code:`code`,figure:`figure`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[`If you have spent any time in the wayland ecosystem, you know the drill. You move away from X11, find a `,(0,n.jsx)(r.code,{children:`compositor`}),` which is similar to the `,(0,n.jsx)(r.code,{children:`window manager`}),` you used. Then you are faced with the "status bar problem". You want something that isnt just a static line of text but a dynamic, interactive and beautiful part of your desktop.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Ive been a long time user of `,(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`AwesomeWM`})}),` and `,(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:`Neovim`})}),`. These tools share a core philosophy: `,(0,n.jsx)(r.strong,{children:`the tool should be a library, not just a binary`}),`. You dont just configure them, you program them. When i moved to wayland, i missed that feeling of total control.`]}),`
`,(0,n.jsxs)(r.p,{children:[`That's why i created `,(0,n.jsx)(r.strong,{children:`lush`})]}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsxs)(r.h2,{id:`what-lush-is`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#what-lush-is`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`what lush is`]}),`
`,(0,n.jsx)(r.p,{children:`lush is for people who liked the programmability of AwesomeWM, and wayland users who want to build their own desktop ui instead of stitching together fixed tools.`}),`
`,(0,n.jsx)(r.p,{children:`By "wayland shell" i mean a programmable GTK widget runtime for building bars, popups, notifications, desktop components, not a full a compositor/window manager.`}),`
`,(0,n.jsxs)(r.h2,{id:`alternatives`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#alternatives`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`alternatives`]}),`
`,(0,n.jsxs)(r.h3,{id:`ags-aylurs-gtk-shell`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#ags-aylurs-gtk-shell`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`AGS (Aylur's GTK Shell)`]}),`
`,(0,n.jsxs)(r.p,{children:[`AGS is built on `,(0,n.jsx)(r.strong,{children:`GJS (Gnome Javascript)`}),`. While it's very capable, it brings the entire `,(0,n.jsx)(r.code,{children:`SpiderMonkey`}),` engine to your status bar. It is powerful and mature but i wanted something with a smaller runtime model that feels closer to how i build desktop tooling.`]}),`
`,(0,n.jsxs)(r.h3,{id:`eww-elkowars-wacky-widgets`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#eww-elkowars-wacky-widgets`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`Eww (ElKowars wacky widgets)`]}),`
`,(0,n.jsxs)(r.p,{children:[`Eww is a great project, but it relies on `,(0,n.jsx)(r.strong,{children:`Yuck`}),`, a custom lisp like DSL. For my use case, i wanted a full language level extensibility instead of a widget dsl.`]}),`
`,(0,n.jsxs)(r.h3,{id:`quickshell`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#quickshell`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`Quickshell`]}),`
`,(0,n.jsxs)(r.p,{children:[`kinda `,(0,n.jsx)(r.strong,{children:`Qt`}),` :D`]}),`
`,(0,n.jsxs)(r.h2,{id:`tech`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#tech`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`tech`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`batching engine`}),`
`,(0,n.jsx)(r.p,{children:`lush's signal bus includes a native batching mechanism. This allows lush to update a lot of data in a single ui pass without a stutter.`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`segmented markup`}),`
`,(0,n.jsxs)(r.p,{children:[`Most status bars re-render the entire label when any part of it changes. lush's label can split a label into "segments" based on your `,(0,n.jsx)(r.code,{children:`format`}),` string. When for example your cpu usage changes, lush only updates the specific text fragment associated with that token.`]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`watchers`}),`
`,(0,n.jsxs)(r.p,{children:[`lush's `,(0,n.jsx)(r.code,{children:`process.watch`}),` implements queue policies. Using it ensures that if you are running a heavy shell command, lush will never queue up multiple instances of that command.
It protects your system from fork bombs if a script hangs.`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.h2,{id:`current-state`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#current-state`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`current state`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`built in notification daemon`}),`
`,(0,n.jsx)(r.p,{children:`you dont have to use an external notification daemon, you can style notifications, build a notification center, and react to notification signals`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`widgets`}),`
`,(0,n.jsx)(r.p,{children:`hbox, vbox, centerbox, dock, workspaces, label, image, scroll, overlay, revealer, popover`}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(r.p,{children:`data`}),`
`,(0,n.jsx)(r.p,{children:`cpu, memory, battery, disk, bluetooth, audio, mpris(music)`}),`
`,(0,n.jsx)(r.p,{children:`compositor: sway, river`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(r.h2,{id:`the-path-forward`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#the-path-forward`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`the path forward`]}),`
`,(0,n.jsx)(r.p,{children:`I just recently made the repo public because i feel like its getting to a state where other people could test it.`}),`
`,(0,n.jsxs)(r.p,{children:[`🌿 `,(0,n.jsx)(r.a,{href:`https://github.com/yrwq/lush`,children:`lush`})]}),`
`,(0,n.jsx)(r.figure,{"data-rehype-pretty-code-figure":``,children:(0,n.jsx)(r.pre,{style:{backgroundColor:`#1d2021`,color:`#ebdbb2`},tabIndex:`0`,"data-language":`rust`,"data-theme":`gruvbox-dark-hard`,children:(0,n.jsxs)(r.code,{"data-language":`rust`,"data-theme":`gruvbox-dark-hard`,style:{display:`grid`},children:[(0,n.jsxs)(r.span,{className:`line`,"data-line":``,children:[(0,n.jsx)(r.span,{style:{color:`#FB4934`},children:`while`}),(0,n.jsx)(r.span,{style:{color:`#FB4934`},children:` !`}),(0,n.jsx)(r.span,{style:{color:`#83A598`},children:`light`}),(0,n.jsx)(r.span,{style:{color:`#8EC07C`},children:`.`}),(0,n.jsx)(r.span,{style:{color:`#FABD2F`},children:`exists`}),(0,n.jsx)(r.span,{style:{color:`#A89984`},children:`()`}),(0,n.jsx)(r.span,{style:{color:`#A89984`},children:` {`})]}),`
`,(0,n.jsxs)(r.span,{className:`line`,"data-line":``,children:[(0,n.jsx)(r.span,{style:{color:`#83A598`},children:`    bloom`}),(0,n.jsx)(r.span,{style:{color:`#8EC07C`},children:`.`}),(0,n.jsx)(r.span,{style:{color:`#FABD2F`},children:`anyway`}),(0,n.jsx)(r.span,{style:{color:`#A89984`},children:`();`}),(0,n.jsx)(r.span,{style:{color:`#928374`,fontStyle:`italic`},children:` // :)`})]}),`
`,(0,n.jsx)(r.span,{className:`line`,"data-line":``,children:(0,n.jsx)(r.span,{style:{color:`#A89984`},children:`}`})})]})})})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as frontmatter};