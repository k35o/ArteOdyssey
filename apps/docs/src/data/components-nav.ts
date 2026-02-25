import type { NavCategory } from './nav-types';

export const componentCategories: NavCategory[] = [
  {
    titleKey: 'components.categoryButtons',
    items: [
      { name: 'Button', path: '/components/button' },
      { name: 'IconButton', path: '/components/icon-button' },
      { name: 'LinkButton', path: '/components/link-button' },
    ],
  },
  {
    titleKey: 'components.categoryNavigation',
    items: [
      { name: 'Anchor', path: '/components/anchor' },
      { name: 'Tabs', path: '/components/tabs' },
      { name: 'Breadcrumb', path: '/components/breadcrumb' },
    ],
  },
  {
    titleKey: 'components.categoryForms',
    items: [
      { name: 'TextField', path: '/components/text-field' },
      { name: 'Textarea', path: '/components/textarea' },
      { name: 'NumberField', path: '/components/number-field' },
      { name: 'Select', path: '/components/select' },
      { name: 'Checkbox', path: '/components/checkbox' },
      { name: 'Radio', path: '/components/radio' },
      { name: 'Autocomplete', path: '/components/autocomplete' },
      { name: 'RangeField', path: '/components/range-field' },
      { name: 'FileField', path: '/components/file-field' },
      { name: 'FormControl', path: '/components/form-control' },
    ],
  },
  {
    titleKey: 'components.categoryDataDisplay',
    items: [
      { name: 'Accordion', path: '/components/accordion' },
      { name: 'Card', path: '/components/card' },
      { name: 'Code', path: '/components/code' },
      { name: 'TextTag', path: '/components/text-tag' },
      { name: 'BaselineStatus', path: '/components/baseline-status' },
      { name: 'Heading', path: '/components/heading' },
    ],
  },
  {
    titleKey: 'components.categoryFeedback',
    items: [
      { name: 'Alert', path: '/components/alert' },
      { name: 'Toast', path: '/components/toast' },
      { name: 'Progress', path: '/components/progress' },
    ],
  },
  {
    titleKey: 'components.categoryOverlays',
    items: [
      { name: 'Dialog', path: '/components/dialog' },
      { name: 'Drawer', path: '/components/drawer' },
      { name: 'Modal', path: '/components/modal' },
      { name: 'Popover', path: '/components/popover' },
      { name: 'DropdownMenu', path: '/components/dropdown-menu' },
      { name: 'Tooltip', path: '/components/tooltip' },
      { name: 'ListBox', path: '/components/list-box' },
    ],
  },
  {
    titleKey: 'components.categoryLayout',
    items: [
      { name: 'Separator', path: '/components/separator' },
      { name: 'ScrollLinked', path: '/components/scroll-linked' },
    ],
  },
  {
    titleKey: 'components.categoryUtility',
    items: [{ name: 'ErrorBoundary', path: '/components/error-boundary' }],
  },
];
