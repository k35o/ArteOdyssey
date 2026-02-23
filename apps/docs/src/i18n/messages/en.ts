import type { MessageKey } from '../types';

export const en = {
  'nav.home': 'Home',
  'nav.getStarted': 'Get Started',
  'nav.components': 'Components',
  'nav.theming': 'Theming',
  'nav.hooks': 'Hooks',
  'nav.helpers': 'Helpers',
  'home.title': 'ArteOdyssey',
  'home.description': 'React UI Component Library',
  'home.github': 'GitHub',
  'home.storybook': 'Storybook',
  'common.language': 'Language',
  'nav.openMenu': 'Open menu',
  'getStarted.introduction':
    'ArteOdyssey is a UI component library built with React 19 and Tailwind CSS 4. It provides a minimal design with a calm, serene aesthetic that makes use of whitespace.',
  'getStarted.installationTitle': 'Installation',
  'getStarted.installationDescription':
    'Install with your preferred package manager.',
  'getStarted.setupTitle': 'Setup',
  'getStarted.setupDescription':
    'After installation, complete the following two configuration steps.',
  'getStarted.setupCssDescription':
    'Import the CSS file at your application entry point.',
  'getStarted.setupProviderDescription':
    'Wrap your application with ArteOdysseyProvider.',
  'getStarted.usageTitle': 'Usage',
  'getStarted.usageDescription':
    'Once setup is complete, you can import and use components.',
  'getStarted.requirementsTitle': 'Requirements',
  'getStarted.requirementsDescription':
    'ArteOdyssey requires the following peer dependencies.',
  'getStarted.nextStepsTitle': 'Next Steps',
  'getStarted.nextStepsComponents':
    'Browse the component catalog to discover available UI parts',
  'getStarted.nextStepsTheming': 'Learn how to customize the theme',
  'getStarted.nextStepsStorybook':
    'View detailed documentation for each component in Storybook',
  'getStarted.packageManagerLabel': 'Package manager',
} as const satisfies Record<MessageKey, string>;
