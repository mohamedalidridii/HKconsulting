import { gsap } from 'gsap';
import { copy } from '../content';

const k = copy.contactPage;
/**
 * HK Consulting's existing mail script on their hosting (it already powers their current site's form).
 * It takes nom, tel, mail, projet, description as form data and answers JSON { succes, message? }.
 */
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || '/php/formulaire.php';

/** Contact page: copy-to-clipboard, and the project form, sent to their PHP script. */
export function initForm(root: HTMLElement) {
  initCopy(root);
  const form = root.querySelector<HTMLFormElement>('.form');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('.form__status')!;
  const label = form.querySelector<HTMLElement>('.form__send-label')!;
  const button = form.querySelector<HTMLButtonElement>('.form__send')!;

  const say = (text: string, kind: 'ok' | 'error' | '' = '') => {
    status.textContent = text;
    status.dataset.kind = kind;
    gsap.fromTo(status, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'expo.out' });
  };

  // Clear a field's error as soon as it is edited.
  form.addEventListener('input', (e) => (e.target as HTMLElement).closest('.field-in')?.classList.remove('is-invalid'));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const required = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]')];
    const invalid = required.filter((el) => !el.value.trim() || (el.type === 'email' && !el.checkValidity()));
    required.forEach((el) => el.closest('.field-in')?.classList.toggle('is-invalid', invalid.includes(el)));
    if (invalid.length) {
      say(k.invalid, 'error');
      invalid[0].focus();
      gsap.fromTo(invalid.map((el) => el.closest('.field-in')), { x: -8 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
      return;
    }
    const data = new FormData(form);
    if (data.get('botcheck')) return;
    const get = (name: string) => String(data.get(name) ?? '').trim();

    // Map this form onto the fields their script expects.
    const body = new FormData();
    body.append('nom', [get('nom'), get('etablissement')].filter(Boolean).join(' — '));
    body.append('tel', get('telephone'));
    body.append('mail', get('email'));
    body.append('projet', [get('projet'), get('type')].filter(Boolean).join(' · '));
    body.append('description', get('message'));

    button.disabled = true;
    label.textContent = k.sending;
    form.classList.add('is-sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body });
      const json = (await res.json().catch(() => ({}))) as { succes?: boolean; message?: string };
      if (!res.ok || !json.succes) throw new Error(json.message || 'send failed');
      form.reset();
      form.classList.add('is-sent');
      say(k.sent, 'ok');
    } catch (err) {
      const msg = err instanceof Error && err.message !== 'send failed' && !/fetch|network/i.test(err.message) ? err.message : '';
      say(msg ? `${msg} — ${k.error}` : k.error, 'error');
    } finally {
      button.disabled = false;
      label.textContent = k.send;
      form.classList.remove('is-sending');
    }
  });
}

function initCopy(root: HTMLElement) {
  const toast = root.querySelector<HTMLElement>('.toast');
  root.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((b) =>
    b.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copy!);
      } catch {
        return;
      }
      if (!toast) return;
      toast.textContent = k.copied;
      gsap
        .timeline()
        .fromTo(toast, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, ease: 'expo.out' })
        .to(toast, { y: -10, autoAlpha: 0, duration: 0.5, ease: 'power2.in' }, '+=1.6');
    }),
  );
}
