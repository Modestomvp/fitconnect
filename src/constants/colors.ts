// Constantes de cores do projeto FitConnect

export const COLORS = {
  // Cor primária
  PRIMARY: '#0093FF',
  PRIMARY_HOVER: '#0077CC',
  PRIMARY_DARK: '#005AA3',
  
  // Cores secundárias
  SECONDARY: '#38a169',
  SECONDARY_HOVER: '#2f855a',
  
  // Cores neutras
  GRAY_50: '#f9fafb',
  GRAY_100: '#f3f4f6',
  GRAY_200: '#e5e7eb',
  GRAY_300: '#d1d5db',
  GRAY_600: '#4b5563',
  GRAY_700: '#374151',
  GRAY_800: '#1f2937',
  GRAY_900: '#111827',
  
  // Estados
  SUCCESS: '#38a169',
  ERROR: '#e53e3e',
  WARNING: '#d69e2e',
  
  // Background
  WHITE: '#ffffff',
  BACKGROUND_LIGHT: '#f9fafb'
} as const;

export const CSS_CLASSES = {
  // Classes de texto primário
  TEXT_PRIMARY: 'text-primary',
  TEXT_PRIMARY_HOVER: 'hover:text-primary-hover',
  
  // Classes de background primário
  BG_PRIMARY: 'bg-primary',
  BG_PRIMARY_HOVER: 'hover:bg-primary-hover',
  
  // Classes de borda primária
  BORDER_PRIMARY: 'border-primary',
  
  // Classes de ring (focus) primário
  RING_PRIMARY: 'focus:ring-primary',
  
  // Botões
  BUTTON_PRIMARY: 'bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg',
  BUTTON_SECONDARY: 'bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors',
  
  // Inputs
  INPUT_FOCUS: 'focus:ring-2 focus:ring-primary focus:border-transparent'
} as const;
