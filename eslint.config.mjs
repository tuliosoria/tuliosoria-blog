import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
const config = [...nextCoreWebVitals, ...nextTypescript,
  { ignores: ['.next/**', 'out/**', 'next-env.d.ts', '.agent/**'] },
  // Existing theme initialization is outside this dependency-only migration.
  { files: ['components/ThemeToggle.tsx'], rules: { 'react-hooks/set-state-in-effect': 'warn' } },
];
export default config;
