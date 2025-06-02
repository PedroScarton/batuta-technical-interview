function ThemeColorSwitch({ theme }) {
  return (
    theme === 'light' && (
      <style>
        {`
:root {
    --color-neutral-0: 26 26 26;
    --color-neutral-100: 38 39 41;
    --color-neutral-200: 58 59 61;
    --color-neutral-300: 72 72 72;
    --color-neutral-400: 84 84 86;
    --color-neutral-500: 163 163 163;
    --color-neutral-600: 199 197 198;
    --color-neutral-700: 229 229 229;
    --color-neutral-800: 241 241 241;
    --color-neutral-900: 255 255 255;

    --background-gradient: linear-gradient(rgb(var(--color-neutral-800)), rgb(var(--color-neutral-900)));
}`}
      </style>
    )
  );
}

export default ThemeColorSwitch;
