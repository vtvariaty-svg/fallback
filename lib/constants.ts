export const COMPANY_LEGAL_NAME = "Contamei Tecnologia e Sistemas Digitais LTDA";
export const COMPANY_CNPJ = "64.790.325/0001-06";
export const COMPANY_BRAND_NAME = "Fallback Automações";
export const COMPANY_PHONE = "16994367481";
export const COMPANY_PHONE_DISPLAY = "+55 (16) 99436-7481";
export const COMPANY_EMAIL = "contato@fallbackautomacoes.com.br";

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/55${COMPANY_PHONE}?text=${encodeURIComponent(message)}`;
};
