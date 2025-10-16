// 📄 src/config/partners.js
const BASE = 'helpusbr.com';

/**
 * 🧩 Lista oficial de parceiros HelpUS
 * Cada item contém:
 * - id: identificador único (sem espaços ou acentos)
 * - name: nome exibido
 * - url: subdomínio completo
 */
export const partners = [
  { id: 'wagnerdriver', name: 'Wagner Driver', url: `https://wagnerdriver.${BASE}` },
  { id: 'cgdetails', name: 'CG Details', url: `https://cgdetails.${BASE}` },
  { id: 'bluebox', name: 'Blue Box', url: `https://bluebox.${BASE}` },
  { id: 'publicarte', name: 'Public Arte', url: `https://publicarte.${BASE}` },
  { id: 'memoriaviva', name: 'Memória Viva', url: `https://memoriaviva.${BASE}` },
  { id: 'tuliobicicletas', name: 'Tulio Bicicletas', url: `https://tuliobicicletas.${BASE}` },
  { id: 'waleska', name: 'Waleska Imóveis', url: `https://waleska.${BASE}` },
  { id: 'katiaxavier', name: 'Kátia Xavier', url: `https://katiaxavier.${BASE}` },
  { id: 'marciotopbarber', name: 'Márcio Top Barber', url: `https://marciotopbarber.${BASE}` },
  { id: 'escolaestacaomusical', name: 'Escola Estação Musical', url: `https://escolaestacaomusical.${BASE}` },
  { id: 'tatica', name: 'Tática Assessoria', url: `https://tatica.${BASE}` },
  { id: 'plural', name: 'Plural Locações', url: `https://plurallocacoes.${BASE}` }, // ✅ confirmado
];
