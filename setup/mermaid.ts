// Палитра темы vzhyx (styles/root.css): синие узлы с белым текстом читаются
// и на тёмном (#333), и на светлом (#f1f1f1) фоне.
// Без defineMermaidSetup: @slidev/types не стоит в зависимостях колоды,
// а хелпер — просто identity-функция.
export default () => {
  return {
    theme: 'base',
    themeVariables: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '16px',
      primaryColor: '#3845cf',
      primaryTextColor: '#ffffff',
      primaryBorderColor: '#babde7',
      secondaryColor: '#566ae4',
      secondaryTextColor: '#ffffff',
      secondaryBorderColor: '#babde7',
      tertiaryColor: '#566ae4',
      tertiaryTextColor: '#ffffff',
      tertiaryBorderColor: '#babde7',
      lineColor: '#566ae4',
      textColor: '#566ae4',
      edgeLabelBackground: 'transparent',
      clusterBkg: 'transparent',
      clusterBorder: '#566ae4',
    },
  }
}
