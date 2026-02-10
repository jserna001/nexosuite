import { useState, useEffect } from 'react';

const COOKIE_KEY = 'nexo_cookies';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    setShowModal(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    setVisible(false);
    setShowModal(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--color-border)] shadow-lg"
        role="alert"
        aria-label="Aviso de cookies"
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-[var(--color-text)]">
              Usamos cookies para mejorar tu experiencia y mostrar publicidad relevante.{' '}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[var(--color-primary)] hover:underline font-medium cursor-pointer bg-transparent border-none p-0 text-sm"
              >
                Saber mas
              </button>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={reject}
              className="px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={accept}
              className="px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50"
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white rounded-[var(--radius-xl)] shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[var(--color-secondary)]">Uso de Cookies</h2>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-[var(--radius-md)] hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer bg-transparent border-none text-[var(--color-text-muted)]"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-5 text-sm text-[var(--color-text-muted)] leading-relaxed">
              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">Cookies propias</h3>
                <p>
                  Utilizamos cookies esenciales para recordar tus preferencias de navegacion
                  y el estado del consentimiento de cookies. Estas son necesarias para el
                  funcionamiento basico del sitio.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">Cookies de terceros</h3>
                <p>
                  Utilizamos Google AdSense para mostrar publicidad relevante. Este servicio
                  puede instalar cookies para personalizar los anuncios segun tus intereses
                  y medir el rendimiento publicitario.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">Tus derechos</h3>
                <p>
                  Conforme a la <strong className="text-[var(--color-text)]">Ley 1581 de 2012</strong> de
                  proteccion de datos personales de Colombia, puedes rechazar las cookies no
                  esenciales en cualquier momento. Para mas informacion, consulta nuestra{' '}
                  <a href="/privacidad" className="text-[var(--color-primary)] hover:underline">
                    politica de privacidad
                  </a>.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-[var(--color-border)]">
              <button
                type="button"
                onClick={reject}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] transition-colors cursor-pointer"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={accept}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-[var(--radius-md)] bg-[var(--color-primary)] text-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
              >
                Aceptar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
