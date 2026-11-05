import { audience, copy, events, founder, presentation, principles, rich } from '../content';
import { esc, footer, media, nextBlock, pad, titleLines } from './parts';

const a = copy.about;

export function about() {
  return `
  <section class="page-hero" data-theme="steel" data-gl="about-hero">
    <p class="eyebrow mono">${esc(a.eyebrow)}</p>
    <h1 class="page-hero__title">${titleLines(a.title, rich)}</h1>
    <div class="page-hero__foot">
      <p class="page-hero__lead" data-reveal>${esc(a.lead)}</p>
      <p class="mono page-hero__meta" data-reveal>Cuisines · Buanderies professionnelles<br/>Tunisie · International</p>
    </div>
  </section>

  <section class="portrait" data-theme="steel" data-gl="about-dim">
    ${media('houda-ketari', founder.name + ', HK Consulting', 'portrait__media', { reveal: 'scrub', pos: '50% 0%', speed: 0.025 })}
    <div class="portrait__caption">
      <p class="portrait__name">Houda <em>Ketari</em></p>
      <p class="mono portrait__role">HK Consulting — Cuisines & buanderies professionnelles</p>
    </div>
  </section>

  <section class="manifesto" data-theme="steel" data-gl="about-dim">
    <p class="mono manifesto__label" data-reveal>(Manifeste)</p>
    <p class="manifesto__text" data-scrub>${esc(a.manifesto)}</p>
    <div class="manifesto__foot">
      <p class="manifesto__p" data-reveal>${esc(presentation[1])}</p>
      <div class="audience" data-reveal>
        <p class="mono audience__label">${esc(a.audienceLabel)}</p>
        <ul class="audience__list">${audience.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </div>
  </section>

  <section class="quote" data-theme="inox" data-gl="light">
    <figure class="quote__fig">
      <span class="quote__mark" aria-hidden="true" data-scroll data-scroll-speed="0.12">“</span>
      <blockquote class="quote__text" data-split>${esc(a.quote)}</blockquote>
      <figcaption class="mono quote__by" data-reveal>— ${esc(a.quoteBy)}</figcaption>
    </figure>
  </section>

  <section class="principles" data-theme="steel" data-gl="about-dim">
    <header class="section-head">
      <p class="eyebrow mono">${esc(a.principlesEyebrow)}</p>
      <h2 class="section-title" data-split>${rich(a.principlesTitle)}</h2>
    </header>
    <ol class="principles__list">
      ${principles
        .map(
          (p, i) => `
        <li class="principle" data-reveal tabindex="0">
          <span class="mono principle__n">${pad(i + 1)}</span>
          <h3 class="principle__k">${esc(p.k)}</h3>
          <p class="principle__v">${esc(p.v)}</p>
          <span class="principle__bar" aria-hidden="true"></span>
        </li>`,
        )
        .join('')}
    </ol>
  </section>

  <section class="spec" data-theme="inox" data-gl="light">
    <div class="spec__text">
      <p class="eyebrow mono">${esc(a.specEyebrow)}</p>
      <h2 class="section-title" data-split>${rich(a.specTitle)}</h2>
      <p class="spec__lead" data-reveal>${esc(a.specLead)}</p>
    </div>
    <div class="doc" data-scroll data-scroll-speed="0.05">
      <div class="doc__sheet">
        <header class="doc__head mono"><span>HK Consulting</span><span>CDC — Rév. A</span></header>
        <p class="doc__title">Cahier des charges</p>
        <ul class="doc__rows mono">
          ${a.spec
            .map((r) => {
              const [k, v] = r.split(' : ');
              return `<li class="doc__row"><span class="doc__k">${esc(k)}</span><span class="doc__dots"></span><span class="doc__v">${esc(v ?? '')}</span></li>`;
            })
            .join('')}
        </ul>
        <span class="doc__stamp mono" aria-hidden="true">Conforme</span>
      </div>
    </div>
  </section>

  <section class="events" data-theme="steel" data-gl="mission">
    <div class="events__pin">
      <header class="events__head">
        <p class="eyebrow mono">${esc(a.eventsEyebrow)}</p>
        <h2 class="section-title" data-split>${rich(a.eventsTitle)}</h2>
        <p class="mission__hint mono" aria-hidden="true">01 — 0${events.length} →</p>
      </header>
      <div class="events__track">
        ${events
          .map(
            (e) => `
          <article class="evt">
            ${media(e.img, e.title, 'evt__media', { speed: 0 })}
            <p class="mono evt__tag">${esc(e.tag)}</p>
            <h3 class="evt__title">${esc(e.title)}</h3>
            <p class="evt__text">${esc(e.text)}</p>
          </article>`,
          )
          .join('')}
      </div>
    </div>
  </section>

  ${nextBlock('Découvrir nos services', 'services')}
  ${footer()}`;
}
