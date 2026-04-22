import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from '../components/EyebrowTag';
import Icon from '../components/Icon';
import WhatsAppIcon from '../components/WhatsAppIcon';

const WHATSAPP_NUMBER = '237676858216';
const EMAIL = 'bridgeyoucm@gmail.com';
const PHONE = '+237 676 858 216';

const needOptions = ['website', 'booking', 'crm', 'ecommerce', 'automation', 'ads', 'custom', 'other'];
const budgetOptions = ['small', 'medium', 'large', 'enterprise', 'unsure'];

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    need: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const meta = {
    en: {
      title: 'Contact — BridgeYou',
      description: 'Tell us about the work. We reply within 24 hours — or skip the form and chat on WhatsApp.',
    },
    fr: {
      title: 'Contact — BridgeYou',
      description: 'Parlez-nous de votre projet. Réponse en moins de 24h — ou contactez-nous directement sur WhatsApp.',
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      try {
        await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        console.log('API call failed, but form submitted successfully');
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello! I would like to learn more about BridgeYou services.',
  )}`;

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{meta[lang].title}</title>
          <meta name="description" content={meta[lang].description} />
        </Helmet>
        <section className="bg-canvas min-h-[70vh] flex items-center">
          <div className="container-custom py-24">
            <div className="max-w-xl mx-auto text-center">
              <div
                className="w-20 h-20 flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(126,217,87,0.14)', borderRadius: 999, color: '#4A9A2F' }}
              >
                <Icon name="check" size={34} sw={2.4} />
              </div>
              <h1
                className="font-display font-medium text-ink mb-4"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.035em', lineHeight: 1.02 }}
              >
                {t('contact.success_title')}
              </h1>
              <p className="text-[17px] text-muted mb-8">
                {t('contact.success_message')}
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-ink inline-flex">
                <WhatsAppIcon size={18} />
                {t('contact.info.whatsapp')}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  const contactRows = [
    { i: 'whatsapp' as const, k: t('contact.info.whatsapp'), v: PHONE, href: whatsappUrl, c: '#25D366' },
    { i: 'mail' as const, k: t('contact.info.email'), v: EMAIL, href: `mailto:${EMAIL}`, c: '#FF914D' },
    { i: 'pin' as const, k: t('contact.info.studios'), v: t('contact.info.studios_value'), c: '#7ED957' },
  ];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
      </Helmet>

      <section className="bg-canvas">
        <div className="container-custom py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <EyebrowTag tone="orange">{t('contact.eyebrow')}</EyebrowTag>
              <h1
                className="font-display font-medium text-ink mt-4 mb-5"
                style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.035em', lineHeight: 0.98 }}
              >
                <Trans
                  i18nKey="contact.heading_rich"
                  components={{
                    italic: <span className="italic" style={{ color: '#FF914D' }} />,
                    br: <br />,
                  }}
                />
              </h1>
              <p className="text-[16px] text-muted max-w-md leading-relaxed mb-7">
                {t('contact.subtitle')}
              </p>
              <div className="flex flex-col gap-3.5">
                {contactRows.map((r) => {
                  const Wrapper = r.href ? 'a' : 'div';
                  const props = r.href ? { href: r.href, target: r.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
                  return (
                    <Wrapper
                      key={r.k}
                      {...(props as object)}
                      className="flex items-center gap-3.5 py-3.5 px-4 bg-white"
                      style={{ border: '1px solid #EAECF0', borderRadius: 14 }}
                    >
                      {r.i === 'whatsapp' ? (
                        <div className="flex items-center justify-center" style={{ width: 38, height: 38 }}>
                          <WhatsAppIcon size={38} />
                        </div>
                      ) : (
                        <div
                          className="flex items-center justify-center"
                          style={{ width: 38, height: 38, borderRadius: 10, background: `${r.c}18`, color: r.c }}
                        >
                          <Icon name={r.i} size={18} sw={1.8} />
                        </div>
                      )}
                      <div>
                        <div className="mono-caption">{r.k}</div>
                        <div className="text-[15px] font-medium text-ink">{r.v}</div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white p-5 sm:p-7 md:p-9"
              style={{ border: '1px solid #EAECF0', borderRadius: 24, boxShadow: '0 2px 6px rgba(16,24,40,0.05), 0 1px 2px rgba(16,24,40,0.03)' }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="mb-6">
                <EyebrowTag tone="orange">{t('contact.form_eyebrow')}</EyebrowTag>
                <h3
                  className="font-display font-medium text-ink mt-3 mb-1.5"
                  style={{ fontSize: 32, letterSpacing: '-0.03em' }}
                >
                  {t('contact.form_title')}
                </h3>
                <p className="text-[14px] text-muted">
                  <Trans
                    i18nKey="contact.form_hint"
                    components={{ strong: <span className="text-ink font-medium" /> }}
                  />
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Field
                  label={t('contact.form.name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.name_placeholder')}
                />
                <Field
                  label={t('contact.form.company')}
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.form.company_placeholder')}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Field
                  label={t('contact.form.email')}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.email_placeholder')}
                />
                <Field
                  label={t('contact.form.phone')}
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.phone_placeholder')}
                />
              </div>

              <div className="mb-5">
                <FieldLabel>{t('contact.form.need')}</FieldLabel>
                <div className="flex flex-wrap gap-2">
                  {needOptions.map((opt) => {
                    const active = formData.need === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, need: opt })}
                        className="flex items-center gap-1.5"
                        style={{
                          padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 500,
                          border: `1px solid ${active ? '#FF914D' : '#EAECF0'}`,
                          background: active ? 'rgba(255,145,77,0.08)' : '#FFFFFF',
                          color: active ? '#F26F1F' : '#1D2939',
                        }}
                      >
                        {active && <Icon name="check" size={11} sw={2.5} />}
                        {t(`contact.form.need_options.${opt}`)}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="need" value={formData.need} />
              </div>

              <div className="mb-5">
                <FieldLabel>{t('contact.form.budget')}</FieldLabel>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                  {budgetOptions.map((opt) => {
                    const active = formData.budget === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className="text-center"
                        style={{
                          padding: '10px 8px', borderRadius: 10, fontSize: 12.5, fontWeight: 500,
                          border: `1px solid ${active ? '#101828' : '#EAECF0'}`,
                          background: active ? '#101828' : '#FFFFFF',
                          color: active ? '#FFFFFF' : '#1D2939',
                        }}
                      >
                        {t(`contact.form.budget_options.${opt}`)}
                      </button>
                    );
                  })}
                </div>
                <input type="hidden" name="budget" value={formData.budget} />
              </div>

              <div className="mb-6">
                <FieldLabel>{t('contact.form.message')}</FieldLabel>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message_placeholder')}
                  className="w-full text-[14px] text-ink-2 leading-relaxed bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  style={{ border: '1px solid #EAECF0', borderRadius: 12, padding: '12px 14px' }}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[12px] text-muted">
                  <Icon name="lock" size={13} stroke="#667085" />
                  {t('contact.form.privacy')}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-ink w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  <Icon name="arrow" size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[12px] font-medium text-ink-2 mb-1.5">{children}</div>;
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, value, onChange, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <FieldLabel>{label}{required ? ' *' : ''}</FieldLabel>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full text-[14px] text-ink-2 bg-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        style={{ border: '1px solid #EAECF0', borderRadius: 10, padding: '11px 12px' }}
      />
    </div>
  );
}
