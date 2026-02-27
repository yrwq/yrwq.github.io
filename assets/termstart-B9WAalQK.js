import{t as e}from"./index-Db_6ULQS.js";import{t}from"./lib-DsslF00a.js";var n=e();const r={title:`termstart`,description:`terminal themed bookmark manager for web browsers`,stack:[`react`,`bun`,`vite`],status:`active`,draft:!1};function i(e){let r={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,span:`span`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(`a`,{href:`https://github.com/yrwq/termstart`,target:`_blank`,children:`source`}),`
`,(0,n.jsx)(`a`,{href:`https://yrwq.github.io/termstart`,target:`_blank`,children:`app`}),`
`,(0,n.jsx)(`img`,{className:`mt-8`,width:`460`,height:`300`,src:`/projects/termstart.png`}),`
`,(0,n.jsxs)(r.h2,{id:`overview`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#overview`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`overview`]}),`
`,(0,n.jsx)(r.p,{children:`manage bookmarks like how you would manage files in a terminal but on a keyboard driven website`}),`
`,(0,n.jsx)(r.p,{children:`behaves like a small shell:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`navigate directories`}),`
`,(0,n.jsx)(r.li,{children:`create/delete/move files and directories`}),`
`,(0,n.jsx)(r.li,{children:`store bookmark URLs in files`}),`
`,(0,n.jsx)(r.li,{children:`open bookmark files in a new tab`}),`
`,(0,n.jsxs)(r.li,{children:[`persist everything to `,(0,n.jsx)(r.code,{children:`localStorage`})]}),`
`]}),`
`,(0,n.jsxs)(r.h2,{id:`why`,children:[(0,n.jsx)(r.a,{"aria-hidden":`true`,tabIndex:`-1`,href:`#why`,children:(0,n.jsx)(r.span,{className:`icon icon-link`})}),`why`]}),`
`,(0,n.jsxs)(r.p,{children:[`i always switched between bookmark managers, i used `,(0,n.jsx)(r.a,{href:`https://raindrop.io`,children:`raindrop`}),` for a long time on mac, but on linux i didnt find
a solution that fits me. first i written a plain html only page and used it as the new tab, but it was a pain to manage bookmarks
there with hand. i started to add keyboard shortcuts with plain js (this was back in `,(0,n.jsx)(r.code,{children:`2021`}),`) for each bookmark so i didnt have to use the
mouse to open them. at some point i just gave up and used plain text to store links. since i lived in the terminal, i wrote a script to
interactively select a bookmark then open it in browser, and this is where i got the idea from. i implemented a very basic prototype in
`,(0,n.jsx)(r.code,{children:`2022`}),` with a simple input bar, where i could type commands like `,(0,n.jsx)(r.code,{children:`add <key> <url>`}),`, `,(0,n.jsx)(r.code,{children:`ls`}),`, `,(0,n.jsx)(r.code,{children:`open <key>`})]}),`
`,(0,n.jsx)(r.p,{children:`this is how it looked like back then:`}),`
`,(0,n.jsx)(`img`,{className:`mt-8`,width:`400`,src:`/projects/termstart_old.png`})]})}function a(e={}){let{wrapper:r}={...t(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}export{a as default,r as frontmatter};