/**
 * ContactForm — formulário de contratação. Duas variantes:
 *   'quick' → bloco curto da Home (nome, evento, WhatsApp)
 *   'full'  → página Mídia kit (nome, empresa, evento, WhatsApp ou e-mail)
 *
 * NÃO HÁ BACK-END. Nada é enviado a lugar nenhum: o submit só troca o estado
 * local para 'sent' e mostra os canais reais de contato. A mensagem de
 * confirmação deixa isso explícito em vez de fingir um envio — e por não haver
 * requisição não existe estado de "Enviando…" (seria loading falso).
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

export function ContactForm({ variant }: ContactFormProps): JSX.Element {
  const fields = variant === 'quick' ? QUICK_FIELDS : FULL_FIELDS;

  // Prefixo único: as duas variantes podem coexistir na mesma página.
  const idPrefix = useId();
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    // A validação de `required` fica com o HTML5: o browser bloqueia o submit
    // antes daqui e mostra a mensagem nativa, já traduzida e acessível.
    event.preventDefault();
    setStatus('sent');
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
        {status === 'sent' ? (
          <p className={styles.statusMessage}>
            Anotado! Este formulário ainda não envia mensagens automaticamente — para falar com a
            produção agora, chame no WhatsApp{' '}
            <a className={styles.statusLink} href={`tel:+55${CONTACT.phone.replace(/\D/g, '')}`}>
              {CONTACT.phone}
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
