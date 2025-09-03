import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
        rules: {
      // Deshabilitar reglas base que pueden reportar errores incorrectos
      "no-unused-vars": "off",
      
      // Cambiar reglas TypeScript de "error" a "warn"
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      
      // Otras reglas comunes que puedes querer cambiar a advertencia
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      
      // Puedes agregar más reglas según tus preferencias
    },
  },
])
