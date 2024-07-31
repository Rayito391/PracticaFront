/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_NOMINATIM_URL: string;
    // Agrega aquí cualquier otra variable de entorno que estés usando
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  