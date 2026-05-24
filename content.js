/* ═══════════════════════════════════════════════════════════
   content.js — Rico Documentation Page Content
   All page content lives here as a data map.
   Key = page identifier, Value = { title, subtitle, breadcrumb[], toc[], sections[], pagination }
   ═══════════════════════════════════════════════════════════ */

const CONTENT = {

  /* ─── Welcome ─── */
  'welcome': {
    title: 'Welcome to Rico Documentation',
    subtitle: 'Your complete guide to the <strong>Rico Shopify theme</strong>',
    breadcrumb: ['Welcome'],
    toc: [
      { id: 'overview',      label: 'Overview' },
      { id: 'structure',     label: 'Documentation Structure' },
      { id: 'support',       label: 'Getting Support' },
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Overview',
        body: `Rico is a premium Shopify theme built for modern storefronts that demand both beauty and performance. Designed with a focus on conversion, flexibility, and developer-friendliness, Rico gives merchants the tools they need to create a world-class shopping experience without writing a single line of code — while still offering deep customization for those who want it.
        <br/><br/>
        This documentation covers every section, block, and setting available in the Rico theme. Whether you're setting up the theme for the first time, customizing its appearance, or troubleshooting an issue, you'll find clear guidance here.`
      },
      {
        id: 'structure',
        heading: 'Documentation Structure',
        body: `The documentation is organized into logical groups that mirror the theme's own structure. <strong>Getting Started</strong> walks you through installation and initial configuration. <strong>Theme Configuration</strong> covers global settings like colors, typography, and languages. <strong>Global Sections</strong> documents each reusable section available across your storefront — from the announcement bar to the utility bar's localization block.
        <br/><br/>
        Each page follows a consistent format: a description of what the feature does, its requirements, a settings reference table, and behavioral notes explaining edge cases or conditional logic.`
      },
      {
        id: 'support',
        heading: 'Getting Support',
        body: `If you encounter an issue not covered in this documentation, our support team is available via the Shopify Theme Store listing. Please include your store URL, a description of the issue, and any relevant screenshots when submitting a support request. We aim to respond within one business day.
        <br/><br/>
        For feature requests and community discussion, join the Rico Merchants community forum linked from our theme store page.`
      }
    ],
    pagination: { prev: null, next: { id: 'install', label: 'Install Rico theme' } }
  },

  /* ─── Install Rico theme ─── */
  'install': {
    title: 'Install Rico Theme',
    subtitle: 'Get up and running in minutes with the <strong>Shopify Theme Store</strong>',
    breadcrumb: ['Getting Started', 'Install Rico theme'],
    toc: [
      { id: 'purchase',    label: 'Purchase & Install' },
      { id: 'first-steps', label: 'First Steps' },
      { id: 'preview',     label: 'Preview Mode' },
    ],
    sections: [
      {
        id: 'purchase',
        heading: 'Purchase & Install',
        body: `Rico is available exclusively through the Shopify Theme Store. Navigate to the Theme Store, search for Rico, and click <strong>Try theme</strong> to add it to your store for free trial, or <strong>Buy theme</strong> to purchase. Once purchased, the theme is added directly to your Shopify admin under <strong>Online Store → Themes</strong>.
        <br/><br/>
        You do not need to manually upload any files. Shopify handles the installation automatically. The theme will appear in your theme library within a few seconds of purchase.`
      },
      {
        id: 'first-steps',
        heading: 'First Steps After Installing',
        body: `After installation, we recommend the following steps before publishing: First, click <strong>Customize</strong> to open the theme editor and review the default layout. Second, configure your <strong>Colors</strong> and <strong>Typography</strong> under Theme Settings to match your brand. Third, add your logo by navigating to <strong>Header → Logo</strong>.
        <br/><br/>
        Take time to explore each section in the left panel of the theme editor. Every section is documented here — use the sidebar navigation to find the relevant page for detailed settings guidance.`
      },
      {
        id: 'preview',
        heading: 'Preview Mode',
        body: `Shopify's theme preview mode lets you see Rico applied to your live store data without publishing it. Click the eye icon beside the theme name in your theme library to enter preview mode. All changes made in preview mode are saved to the theme but won't affect your live store until you click <strong>Publish</strong>.
        <br/><br/>
        We strongly recommend completing your configuration in preview mode before publishing, especially if you are switching from an existing theme.`
      }
    ],
    pagination: { prev: { id: 'welcome', label: 'Welcome to Rico Documentation' }, next: { id: 'refund', label: 'Refund Policy' } }
  },

  /* ─── Refund Policy ─── */
  'refund': {
    title: 'Refund Policy',
    subtitle: 'Understanding purchases and refunds in the <strong>Shopify Theme Store</strong>',
    breadcrumb: ['Legal', 'Refund Policy'],
    toc: [
      { id: 'policy',      label: 'Our Policy' },
      { id: 'eligibility', label: 'Eligibility' },
      { id: 'process',     label: 'Refund Process' },
    ],
    sections: [
      {
        id: 'policy',
        heading: 'Our Policy',
        body: `Rico theme purchases made through the Shopify Theme Store are subject to Shopify's standard theme refund policy. As digital products, theme purchases are generally non-refundable once downloaded or installed. However, refunds may be issued at our discretion under specific circumstances outlined below.
        <br/><br/>
        We are committed to your satisfaction and will work with you to resolve any issues before processing a refund request. Please contact our support team first — most issues can be resolved quickly.`
      },
      {
        id: 'eligibility',
        heading: 'Eligibility for Refund',
        body: `You may be eligible for a refund if the theme contains a critical defect that renders it non-functional and our support team is unable to resolve it within a reasonable timeframe. Refunds are not provided for reasons such as: changing your mind after purchase, finding a theme that better suits your needs, or issues caused by third-party app conflicts.
        <br/><br/>
        Customization incompatibilities introduced by modifications to theme files are also not eligible for refund, as these fall outside the scope of the original product.`
      },
      {
        id: 'process',
        heading: 'Refund Process',
        body: `To request a refund, contact our support team through the Shopify Theme Store listing with your order number and a detailed description of the issue. If the refund is approved, it will be processed through Shopify and credited to your original payment method within 5–10 business days, depending on your bank or card issuer.`
      }
    ],
    pagination: { prev: { id: 'install', label: 'Install Rico theme' }, next: { id: 'privacy', label: 'Privacy Policy' } }
  },

  /* ─── Privacy Policy ─── */
  'privacy': {
    title: 'Privacy Policy',
    subtitle: 'How Rico and its documentation handle your <strong>data and privacy</strong>',
    breadcrumb: ['Legal', 'Privacy Policy'],
    toc: [
      { id: 'data-collected', label: 'Data Collected' },
      { id: 'usage',          label: 'How We Use Data' },
      { id: 'rights',         label: 'Your Rights' },
    ],
    sections: [
      {
        id: 'data-collected',
        heading: 'Data Collected',
        body: `Rico theme itself does not collect, store, or transmit any personal data from your customers. All customer data — including names, emails, addresses, and payment information — is handled exclusively by Shopify and governed by Shopify's own privacy policy and data processing agreements.
        <br/><br/>
        This documentation site uses minimal analytics to understand which pages are most visited, helping us improve the content. No personally identifiable information is collected through this documentation.`
      },
      {
        id: 'usage',
        heading: 'How We Use Data',
        body: `Any data submitted through the Shopify Theme Store — such as support requests or reviews — is used solely for the purpose of providing support and improving the product. We do not sell, share, or use your data for marketing purposes beyond the Shopify ecosystem.
        <br/><br/>
        If you contact our support team via email, we retain that correspondence to provide consistent support. You may request deletion of your support history at any time.`
      },
      {
        id: 'rights',
        heading: 'Your Rights',
        body: `Depending on your jurisdiction, you may have rights including the right to access, correct, or delete your personal data. For data held by Shopify (your store data, customer records), please refer to Shopify's privacy documentation and their GDPR/CCPA compliance resources.
        <br/><br/>
        For any data held directly by our support team, submit a request to our support email and we will respond within 30 days.`
      }
    ],
    pagination: { prev: { id: 'refund', label: 'Refund Policy' }, next: { id: 'customization', label: 'Theme customization options' } }
  },

  /* ─── Theme customization options ─── */
  'customization': {
    title: 'Theme Customization Options',
    subtitle: 'A complete reference for Rico\'s <strong>global theme settings</strong>',
    breadcrumb: ['Theme Configuration', 'Theme customization options'],
    toc: [
      { id: 'colors',     label: 'Colors' },
      { id: 'typography', label: 'Typography' },
      { id: 'layout',     label: 'Layout & Spacing' },
    ],
    sections: [
      {
        id: 'colors',
        heading: 'Colors',
        body: `Rico uses a color scheme system that lets you define up to six named color schemes, each with a background, text, and accent color. These schemes can then be assigned to any section or block throughout the theme — giving you a consistent, flexible palette without manual color-picking on every element.
        <br/><br/>
        Access color settings via <strong>Online Store → Themes → Customize → Theme Settings → Colors</strong>. Changes to color schemes propagate instantly across all sections using that scheme.`
      },
      {
        id: 'typography',
        heading: 'Typography',
        body: `Rico supports any font available through Shopify's font picker, including hundreds of Google Fonts and system fonts. You can set separate font families for headings and body text, as well as a global base font size. Font weights for headings can also be configured independently.
        <br/><br/>
        For best performance, we recommend choosing fonts from Shopify's curated font library, which are served through Shopify's CDN and optimized for fast loading.`
      },
      {
        id: 'layout',
        heading: 'Layout & Spacing',
        body: `Global layout settings control the maximum page width, section vertical padding, and card/image corner radius. These values are applied consistently across the entire theme, ensuring a cohesive visual rhythm without needing to adjust individual sections.
        <br/><br/>
        The <strong>Page width</strong> setting constrains all content to a maximum container width (e.g. 1200px), while still allowing sections with full-bleed backgrounds to span the full viewport.`
      }
    ],
    pagination: { prev: { id: 'privacy', label: 'Privacy Policy' }, next: { id: 'languages', label: 'Languages & currencies' } }
  },

  /* ─── Languages & currencies ─── */
  'languages': {
    title: 'Languages & Currencies',
    subtitle: 'Configure <strong>international selling</strong> across markets and locales',
    breadcrumb: ['Theme Configuration', 'Languages & currencies'],
    toc: [
      { id: 'languages-setup', label: 'Adding Languages' },
      { id: 'currencies',      label: 'Currencies & Markets' },
      { id: 'switcher',        label: 'Storefront Switcher' },
    ],
    sections: [
      {
        id: 'languages-setup',
        heading: 'Adding Languages',
        body: `Shopify allows you to publish multiple languages for your storefront via <strong>Settings → Languages</strong>. Once you add and publish a language, it becomes available for customers to select. Rico's Localization block (available in the Utility Bar section) surfaces this selector automatically.
        <br/><br/>
        Translations can be managed manually through Shopify's translation editor or via third-party translation apps available in the Shopify App Store. Rico's theme strings are fully translatable and available in the Shopify translation editor.`
      },
      {
        id: 'currencies',
        heading: 'Currencies & Markets',
        body: `Currency support in Shopify is managed through the <strong>Markets</strong> feature, available on Basic plans and above. Each Market represents a group of countries that share a pricing configuration. You can set country-specific prices, enable automatic currency conversion, or set fixed prices per market.
        <br/><br/>
        Once a market is enabled, Rico's country/currency selector in the Utility Bar displays automatically for customers browsing from that market's countries.`
      },
      {
        id: 'switcher',
        heading: 'Storefront Switcher',
        body: `The language and currency selectors appear in the Utility Bar section as part of the Localization block. On desktop they display as compact dropdowns anchored to the utility bar. On mobile, they adapt to a touch-friendly format. See the <strong>Localization</strong> documentation page for full block settings.`
      }
    ],
    pagination: { prev: { id: 'customization', label: 'Theme customization options' }, next: { id: 'announcement', label: 'Announcement bar' } }
  },

  /* ─── Announcement bar ─── */
  'announcement': {
    title: 'Announcement Bar',
    subtitle: 'Global section for site-wide <strong>messages and promotions</strong>',
    breadcrumb: ['Global Sections', 'Announcement bar'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Announcement Bar is a thin, full-width banner displayed at the very top of every page, above the header. It is designed for short, high-visibility messages such as promotions, shipping notices, or site-wide alerts. It supports multiple slides that auto-rotate, allowing you to display several messages without taking up extra vertical space.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `Access settings via <strong>Online Store → Themes → Customize → Announcement Bar</strong>. Key options include:<br/><br/>
        <strong>Auto-rotate</strong>: Enable automatic cycling between announcement slides.<br/>
        <strong>Rotation speed</strong>: Set the interval (in seconds) between slide transitions.<br/>
        <strong>Show close button</strong>: Allow visitors to dismiss the bar. The dismissed state is saved in the session.<br/>
        <strong>Color scheme</strong>: Choose from your defined color schemes.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `If only one announcement block is added, the auto-rotate controls and navigation dots are hidden automatically. The close button, if enabled, hides the bar for the duration of the browser session — refreshing the page will restore it. The announcement bar respects reduced-motion preferences and disables animations for users who have enabled that system setting.`
      }
    ],
    pagination: { prev: { id: 'languages', label: 'Languages & currencies' }, next: { id: 'customer-account', label: 'Customer account' } }
  },

  /* ─── Customer account ─── */
  'customer-account': {
    title: 'Customer Account',
    subtitle: 'Block type for the <strong>utility bar</strong> section',
    breadcrumb: ['Global Sections', 'Feature highlights', 'Customer account'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'requirements', label: 'Requirements' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Customer Account block adds an account icon and link to the Utility Bar section, giving customers quick access to their account dashboard, order history, and saved addresses. When a customer is logged in, the icon reflects their authenticated state. When logged out, clicking the icon directs them to the login page.`
      },
      {
        id: 'requirements',
        heading: 'Requirements',
        body: `Customer accounts must be enabled in your Shopify admin under <strong>Settings → Customer accounts</strong>. You can choose between Classic customer accounts and the newer Shopify-hosted customer accounts experience. Rico supports both, but the new customer accounts experience provides a more modern, integrated login flow.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `<strong>show_account_link</strong>: Toggle the account icon on or off in the utility bar.<br/><br/>
        <strong>icon_style</strong>: Choose between a silhouette icon (default) or a filled icon variant.<br/><br/>
        <strong>alignment</strong>: Control alignment within the utility bar — left, center, or right.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `On mobile, the account icon is moved to the main header area for better accessibility rather than the utility bar, which may be hidden on smaller screens. The icon uses an accessible aria-label and is keyboard navigable. If customer accounts are disabled in Shopify admin, this block will not render on the storefront even if enabled in the theme editor.`
      }
    ],
    pagination: { prev: { id: 'announcement', label: 'Announcement bar' }, next: { id: 'localization', label: 'Localization' } }
  },

  /* ─── Localization (default/active page) ─── */
  'localization': {
    title: 'Localization',
    subtitle: 'Block type for the <strong>utility bar</strong> section',
    breadcrumb: ['Global Sections', 'Feature highlights', 'Localization'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'requirements', label: 'Requirements' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Localization block adds localization functionality within the Utility bar section. It enables customers to switch between languages and currencies directly from the storefront header, providing a seamless international shopping experience without leaving the current page.
        <br/><br/>
        When enabled, a dropdown appears in the header allowing users to select their preferred language and currency. The selector updates the storefront content and prices in real time, using Shopify's built-in Markets and translation features. No page reload is required — the experience stays smooth and uninterrupted across all devices.`
      },
      {
        id: 'requirements',
        heading: 'Requirements',
        body: `Before enabling the Localization block, ensure the following are configured in your Shopify admin. Without these, the selectors will not appear even if toggled on in the theme editor.
        <br/><br/>
        Navigate to <strong>Settings → Languages</strong> to add and publish additional languages for your store. For currency support, go to <strong>Settings → Markets</strong> and enable the countries or regions you want to support. Once published, the country/currency selector becomes available to customers browsing from those regions. Make sure your Shopify plan supports the Markets feature, as it requires a Basic plan or above.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `Configure the Localization block using the following settings in the theme editor. Open your Shopify admin, go to <strong>Online Store → Themes → Customize</strong>, then navigate to the Utility bar section and add or select the Localization block to reveal these options.`,
        table: {
          headers: ['Setting', 'Type', 'Description'],
          rows: [
            ['show_country_selector', 'Boolean', 'Show or hide the country/currency selector in the utility bar. Requires Markets to be enabled in Shopify admin.'],
            ['show_locale_selector', 'Boolean', 'Show or hide the language selector. Requires multiple published languages in Shopify Settings → Languages.'],
            ['alignment', 'Select', 'Control the alignment of the localization block within the utility bar. Options: left, center, or right.'],
            ['color_scheme', 'Color scheme', 'Choose a color scheme that visually matches the utility bar design. Applies background and text colors defined in your theme settings.'],
          ]
        }
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `The language selector uses Shopify's native locale switching, which updates the storefront URL to include a locale prefix (e.g. <code>/fr</code> for French). The country/currency selector relies on Shopify Markets and updates pricing based on the customer's selected region.
        <br/><br/>
        Both selectors open as dropdowns anchored to the utility bar. On mobile, they adapt to a compact format to fit smaller screens without overlapping other header elements. If only one language or one currency is available, the respective selector is automatically hidden even if toggled on, to avoid showing an empty dropdown.`
      }
    ],
    pagination: { prev: { id: 'customer-account', label: 'Customer account' }, next: { id: 'social-media', label: 'Social media' } }
  },

  /* ─── Social media ─── */
  'social-media': {
    title: 'Social Media',
    subtitle: 'Block type for the <strong>utility bar</strong> section',
    breadcrumb: ['Global Sections', 'Feature highlights', 'Social media'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Social Media block adds social network icon links to the Utility Bar section. It displays a row of small, accessible icon buttons linking to your brand's social profiles — including Instagram, Facebook, TikTok, Pinterest, YouTube, X (Twitter), and more. The icons are lightweight SVGs that render crisply at any resolution.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `Social profile URLs are configured globally under <strong>Theme Settings → Social Media</strong> rather than in each block individually. This means setting them once populates the icons everywhere the Social Media block is used.
        <br/><br/>
        Within the block itself, you can control: <strong>alignment</strong> (left, center, right), <strong>icon size</strong> (small, medium, large), and whether to show only the networks you've configured URLs for, or to display placeholder icons for unconfigured networks.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `Only networks with a configured URL are rendered on the storefront. If no social URLs are set in Theme Settings, the block renders nothing and takes up no space. Icons open links in a new tab with proper <code>rel="noopener noreferrer"</code> attributes for security. Each icon includes an accessible <code>aria-label</code> for screen reader compatibility.`
      }
    ],
    pagination: { prev: { id: 'localization', label: 'Localization' }, next: { id: 'link', label: 'Link' } }
  },

  /* ─── Link ─── */
  'link': {
    title: 'Link',
    subtitle: 'Block type for the <strong>utility bar</strong> section',
    breadcrumb: ['Global Sections', 'Feature highlights', 'Link'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Link block adds a single text link to the Utility Bar. This is useful for surfacing a specific page in a prominent position — for example, a link to your store's loyalty program, a blog, a contact page, or a promotional landing page. Multiple Link blocks can be added to the Utility Bar to create a small nav row.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `<strong>label</strong>: The visible text of the link.<br/><br/>
        <strong>url</strong>: The destination URL. Can be internal (e.g. <code>/pages/about</code>) or external.<br/><br/>
        <strong>open_in_new_tab</strong>: Toggle whether external links open in a new tab.<br/><br/>
        <strong>alignment</strong>: Position the link within the utility bar — left, center, or right.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `If no URL is set, the link block renders as plain text rather than a broken anchor. On mobile, Link blocks in the Utility Bar may be collapsed into a simplified view depending on available space and other blocks present in the section. The link text respects the utility bar's color scheme for consistent visual integration.`
      }
    ],
    pagination: { prev: { id: 'social-media', label: 'Social media' }, next: { id: 'system-notifications', label: 'System notifications' } }
  },

  /* ─── System notifications ─── */
  'system-notifications': {
    title: 'System Notifications',
    subtitle: 'Global section for <strong>status messages and alerts</strong>',
    breadcrumb: ['Global Sections', 'System notifications'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The System Notifications section displays status messages to customers — such as cart confirmations, login success messages, newsletter signup confirmations, and error alerts. These notifications appear as toast-style banners or inline messages depending on their context and placement.
        <br/><br/>
        This section is rendered automatically by Shopify when relevant events occur (e.g. adding to cart, submitting a form) and uses the styles defined in your Rico theme settings.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `<strong>position</strong>: Choose where notifications appear — top-left, top-center, top-right, bottom-left, or bottom-right.<br/><br/>
        <strong>auto_dismiss</strong>: Toggle automatic dismissal after a set duration.<br/><br/>
        <strong>dismiss_delay</strong>: Time in milliseconds before a notification auto-dismisses (default: 4000ms).<br/><br/>
        <strong>color_scheme</strong>: Apply a color scheme to match your store's design.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `Multiple notifications can queue and display sequentially. Error messages (e.g. out-of-stock alerts) are not auto-dismissed and require manual interaction to close. All notifications are announced to screen readers via ARIA live regions. On mobile, notifications always appear at the bottom of the screen regardless of the position setting, to avoid covering the header.`
      }
    ],
    pagination: { prev: { id: 'link', label: 'Link' }, next: { id: 'maintenance', label: 'Maintenance updates' } }
  },

  /* ─── Maintenance updates ─── */
  'maintenance': {
    title: 'Maintenance Updates',
    subtitle: 'Display a <strong>coming soon or maintenance</strong> page to visitors',
    breadcrumb: ['Global Sections', 'Maintenance updates'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The Maintenance Updates section allows you to display a customizable maintenance or coming soon page to all visitors while you work on your store. When enabled, the storefront is replaced with a branded holding page. Store owners and authenticated staff members can still access the store by logging in.
        <br/><br/>
        This is useful for pre-launch periods, major redesigns, or planned downtime windows.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `<strong>enable_maintenance_mode</strong>: Toggle the maintenance page on or off. When on, all non-admin visitors see the holding page.<br/><br/>
        <strong>heading</strong>: The main headline displayed on the maintenance page.<br/><br/>
        <strong>message</strong>: A short description or expected return date shown below the heading.<br/><br/>
        <strong>background_image</strong>: Optional background image for the maintenance page.<br/><br/>
        <strong>show_email_signup</strong>: Display a newsletter signup form so visitors can be notified when the store reopens.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `The maintenance page is rendered at all storefront URLs when enabled — customers cannot navigate to any product or collection pages. Password-protected preview links generated by Shopify will bypass the maintenance page, making them useful for sharing progress with clients or collaborators. Search engine crawlers are served a <code>503 Service Unavailable</code> response to prevent de-indexing of your existing content.`
      }
    ],
    pagination: { prev: { id: 'system-notifications', label: 'System notifications' }, next: { id: 'user-onboarding', label: 'User onboarding' } }
  },

  /* ─── User onboarding ─── */
  'user-onboarding': {
    title: 'User Onboarding',
    subtitle: 'Guide new visitors through your store with <strong>onboarding flows</strong>',
    breadcrumb: ['Global Sections', 'User onboarding'],
    toc: [
      { id: 'what-it-does', label: 'What It Does' },
      { id: 'settings',     label: 'Settings' },
      { id: 'steps',        label: 'Onboarding Steps' },
      { id: 'behavior',     label: 'Behavior Notes' },
    ],
    sections: [
      {
        id: 'what-it-does',
        heading: 'What It Does',
        body: `The User Onboarding section provides a guided introduction for new visitors to your store. It can surface key information — such as your brand story, size guide, loyalty program, or return policy — in a structured, step-by-step format, either as a modal, a welcome banner, or an inline section on the homepage.
        <br/><br/>
        Onboarding flows are shown only once per visitor (tracked via local storage) unless the store owner manually resets the state or the visitor clears their browser data.`
      },
      {
        id: 'settings',
        heading: 'Settings',
        body: `<strong>trigger</strong>: Choose when the onboarding flow appears — on first visit, after a delay (in seconds), or on exit intent.<br/><br/>
        <strong>display_style</strong>: Select between a modal overlay, a slide-in panel, or an inline homepage section.<br/><br/>
        <strong>show_progress</strong>: Display a step indicator so users know how many steps remain.<br/><br/>
        <strong>color_scheme</strong>: Apply a color scheme to the onboarding UI.`
      },
      {
        id: 'steps',
        heading: 'Onboarding Steps',
        body: `Each step in the onboarding flow is a separate block added to the section in the theme editor. Steps support a heading, body text, an optional image, and an optional CTA button. You can add, remove, and reorder steps freely.
        <br/><br/>
        For best results, limit onboarding to 3–5 steps. Longer flows see significantly higher drop-off rates. Keep each step focused on a single message or action.`
      },
      {
        id: 'behavior',
        heading: 'Behavior Notes',
        body: `The onboarding state is stored in <code>localStorage</code> under the key <code>rico_onboarding_seen</code>. Clearing this key (or opening the store in a private/incognito window) will trigger the flow again. In the theme editor preview, the flow always displays regardless of prior state, so you can test changes without clearing storage. Users who have opted into a "Do Not Track" browser setting will not see the flow if it uses exit intent triggering.`
      }
    ],
    pagination: { prev: { id: 'maintenance', label: 'Maintenance updates' }, next: null }
  },

};

window.CONTENT = CONTENT;