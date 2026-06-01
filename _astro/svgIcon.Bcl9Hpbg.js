function i(t,e){return t.replace(/^<svg([^>]*)>/,(n,c)=>`<svg${c.replace(/\s+width="[^"]*"/,"").replace(/\s+height="[^"]*"/,"")} width="${e}" height="${e}">`)}export{i};
