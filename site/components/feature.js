const html = require('choo/html')

module.exports = opts => html`

<li class="center w-100 w-50-l fl">
  <div class="center w-90 lh-copy bg-white border-box pa3 ma3 mid-gray ba br3 h8-l h10">
    <div class="tc">
      <img class="fl w-100" src="${opts.img}" data-zoom="zoom" />
      <h3 class="f3 w-100 avenir fw6">${opts.txt}</h3>
    </div>
    <hr class="mw5 bb bw1 b--black-10">
    <p class="lh-copy measure center f4 black-70 tl pa2">${opts.detail}</p>
  </div>
</li>

`
