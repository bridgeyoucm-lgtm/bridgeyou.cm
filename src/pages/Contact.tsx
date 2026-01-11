import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const WHATSAPP_NUMBER = '237676858216';
const EMAIL = 'bridgeyoucm@gmail.com';
const PHONE = '+237 676 858 216';

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
      title: 'Contact Us - BridgeYou',
      description: 'Get in touch with BridgeYou. Book a free consultation or chat with us on WhatsApp.',
    },
    fr: {
      title: 'Contactez-Nous - BridgeYou',
      description: 'Contactez BridgeYou. Réservez une consultation gratuite ou discutez avec nous sur WhatsApp.',
    },
  };

  const needOptions = [
    { value: 'website', label: t('contact.form.need_options.website') },
    { value: 'booking', label: t('contact.form.need_options.booking') },
    { value: 'crm', label: t('contact.form.need_options.crm') },
    { value: 'ecommerce', label: t('contact.form.need_options.ecommerce') },
    { value: 'automation', label: t('contact.form.need_options.automation') },
    { value: 'custom', label: t('contact.form.need_options.custom') },
    { value: 'other', label: t('contact.form.need_options.other') },
  ];

  const budgetOptions = [
    { value: 'small', label: t('contact.form.budget_options.small') },
    { value: 'medium', label: t('contact.form.budget_options.medium') },
    { value: 'large', label: t('contact.form.budget_options.large') },
    { value: 'enterprise', label: t('contact.form.budget_options.enterprise') },
    { value: 'unsure', label: t('contact.form.budget_options.unsure') },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      // Also call the API function
      try {
        await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      } catch {
        // API call is optional, don't fail if it doesn't work
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

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I would like to learn more about BridgeYou services.')}`;

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <html lang={lang} />
          <title>{meta[lang].title}</title>
          <meta name="description" content={meta[lang].description} />
        </Helmet>

        <section className="section bg-gradient-hero min-h-[70vh] flex items-center">
          <div className="container-custom">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-display text-heading-1 text-text mb-4">
                {t('contact.success_title')}
              </h1>
              <p className="text-lg text-text-muted mb-8">
                {t('contact.success_message')}
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('contact.info.whatsapp')}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
        <meta property="og:title" content={meta[lang].title} />
        <meta property="og:description" content={meta[lang].description} />
      </Helmet>

      {/* Hero */}
      <section className="section bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-display-1 text-text mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-text-muted">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="card"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.name_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.company_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.email_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.form.phone_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Need */}
                  <div>
                    <label htmlFor="need" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.need')} *
                    </label>
                    <select
                      id="need"
                      name="need"
                      required
                      value={formData.need}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">{t('contact.form.need_placeholder')}</option>
                      {needOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">{t('contact.form.budget_placeholder')}</option>
                      {budgetOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-body-sm font-medium text-text mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.message_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card bg-gradient-soft-1 border border-white/50 sticky top-24">
                <h3 className="text-heading-3 text-text mb-6">
                  {t('contact.info.title')}
                </h3>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-accent-green/10 rounded-xl hover:bg-accent-green/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-body font-semibold text-text">
                        {t('contact.info.whatsapp')}
                      </div>
                      <div className="text-body-sm text-text-muted">
                        {PHONE}
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-body font-semibold text-text">
                        {t('contact.info.email')}
                      </div>
                      <div className="text-body-sm text-text-muted">
                        {EMAIL}
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 bg-accent-yellow/10 rounded-xl hover:bg-accent-yellow/20 transition-colors"
                  >
                    <div className="w-10 h-10 bg-accent-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-body font-semibold text-text">
                        {t('contact.info.phone')}
                      </div>
                      <div className="text-body-sm text-text-muted">
                        {PHONE}
                      </div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-body font-semibold text-text">
                        {t('contact.info.address_title')}
                      </div>
                      <div className="text-body-sm text-text-muted">
                        {t('contact.info.address')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

