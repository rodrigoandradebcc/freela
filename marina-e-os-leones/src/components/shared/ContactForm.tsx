/**
 * ContactForm — formulário de contratação. Duas variantes:
 *   'quick' → bloco curto da Home (nome, evento, WhatsApp)
 *   'full'  → página Mídia kit (nome, empresa, evento, WhatsApp ou e-mail)
 *
 * NÃO HÁ BACK-END: o submit monta uma mensagem com o que foi preenchido e abre
 * o WhatsApp da produção (`CONTACT.whatsapp`) via link `wa.me` já com o texto
 * pronto. O `window.open` acontece dentro do handler de submit (gesto do
 * usuário) para não ser barrado pelo bloqueador de pop-up; a confirmação
 * repete o link caso seja barrado mesmo assim.
 *
 * Acessibilidade: todo campo tem <label> VISÍVEL associado por htmlFor/id
 * (placeholder não é rótulo); a confirmação é role="status" + aria-live="polite".
 */

import { useId, useState, type FormEvent, type JSX } from 'react';

import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/data/site';

import styles from './ContactForm.module.css';

export type ContactFormVariant = 'quick' | 'full';

export interface ContactFormProps {
  variant: ContactFormVariant;
}

interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'tel';
  autoComplete: string;
  required: boolean;
}

const QUICK_FIELDS: readonly FieldConfig[] = [
  { name: 'name', label: 'Seu nome', type: 'text', autoComplete: 'name', required: true },
  {
    name: 'event',
    label: 'Evento, cidade e data',
    type: 'text',
    autoComplete: 'off',
    required: false,
  },
  { name: 'contact', label: 'WhatsApp', type: 'tel', autoComplete: 'tel', required: true },
];

const FULL_FIELDS: readonly FieldConfig[] = [
  { name: 'name', label: 'Seu nome', type: 'text', autoComplete: 'name', required: true },
  {
    name: 'company',
    label: 'Empresa',
    type: 'text',
    autoComplete: 'organization',
    required: false,
  },
  {
    name: 'event',
    label: 'Evento, cidade e data pretendida',
    type: 'text',
    autoComplete: 'off',
    required: false,
  },
  {
    name: 'contact',
    label: 'WhatsApp ou e-mail',
    // Aceita dois formatos, e os tokens de autocomplete são exclusivos
    // ('tel' OU 'email'): 'on' deixa o navegador escolher pelo que for digitado.
    type: 'text',
    autoComplete: 'on',
    required: true,
  },
];

function buildWhatsappMessage(
  fields: readonly FieldConfig[],
  values: Record<string, string>,
  variant: ContactFormVariant,
): string {
  const greeting =
    variant === 'quick'
      ? `Olá, ${CONTACT.whatsappContact}! Quero pedir uma proposta da Marina & Os Leones.`
      : `Olá, ${CONTACT.whatsappContact}! Vim pelo mídia kit e quero falar com a produção da Marina & Os Leones.`;

  const lines = fields
    .map((field) => [field.label, (values[field.name] ?? '').trim()] as const)
    .filter(([, value]) => value !== '')
    .map(([label, value]) => `${label}: ${value}`);

  return [greeting, '', ...lines].join('\n');
}

function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function ContactForm({ variant }: ContactFormProps): JSX.Element {
  const fields = variant === 'quick' ? QUICK_FIELDS : FULL_FIELDS;

  // Prefixo único: as duas variantes podem coexistir na mesma página.
  const idPrefix = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    // A validação de `required` fica com o HTML5: o browser bloqueia o submit
    // antes daqui e mostra a mensagem nativa, já traduzida e acessível.
    event.preventDefault();

    const url = buildWhatsappUrl(buildWhatsappMessage(fields, values, variant));
    setSentUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((field) => {
        const fieldId = `${idPrefix}-${field.name}`;

        return (
          <div key={field.name} className={styles.field}>
            <label className={styles.label} htmlFor={fieldId}>
              {field.label}
            </label>
            <input
              className={styles.input}
              id={fieldId}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required={field.required}
              value={values[field.name] ?? ''}
              onChange={(event) => {
                const { value } = event.target;
                setValues((current) => ({ ...current, [field.name]: value }));
              }}
            />
          </div>
        );
      })}

      <Button variant="orange" type="submit" className={styles.submit}>
        {variant === 'quick' ? 'PEDIR PROPOSTA' : 'ENVIAR PARA A PRODUÇÃO'}
      </Button>

      {/* Container sempre presente para que a região viva já esteja registrada
          quando o texto aparecer — regiões criadas junto com o conteúdo às
          vezes não são anunciadas. */}
      <div className={styles.statusRegion} role="status" aria-live="polite">
        {sentUrl ? (
          <p className={styles.statusMessage}>
            Abrimos o WhatsApp da produção com a sua mensagem pronta: é só enviar. Não abriu?{' '}
            <a
              className={styles.statusLink}
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp {CONTACT.phone}
            </a>{' '}
            ou escreva para{' '}
            <a className={styles.statusLink} href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
