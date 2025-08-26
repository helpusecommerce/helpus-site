// 📄 src/pages/Contato.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contato() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-center text-gray-600 mb-10">
          {t('contact.subtitle')}
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-lg shadow-md p-8 space-y-6"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.name_label', 'Name')}
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.email_label')}
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('contact.message_label', 'Message')}
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            {t('contact.send_button', 'Send Message')}
          </button>
        </form>
      </div>
    </section>
  );
}
