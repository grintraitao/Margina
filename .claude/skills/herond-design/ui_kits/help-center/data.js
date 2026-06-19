// Herond Help Center — data
window.HC_CATEGORIES = [
  { name: 'Desktop Browser', icon: 'monitor', accent: '#3373F6', count: 12, desc: 'Installation, features & browsing guides' },
  { name: 'Herond Wallet', icon: 'wallet', accent: '#6b33fa', count: 10, desc: 'Create, manage & secure your wallet' },
  { name: 'Account & Services', icon: 'user-circle', accent: '#00b3ED', count: 8, desc: 'Sign in, sync & account settings' },
  { name: 'Herond Shield', icon: 'shield-check', accent: '#ff4070', count: 11, desc: 'Privacy, ad-blocking & security' },
  { name: 'Herond Ecosystem', icon: 'globe', accent: '#00CCC0', count: 5, desc: 'Explore the Herond ecosystem' },
  { name: 'Personalization', icon: 'palette', accent: '#EC4899', count: 5, desc: 'Themes, extensions & customization' },
];

window.HC_POPULAR = [
  { title: 'How to Install Herond Browser', category: 'Desktop Browser' },
  { title: 'How to Create Your Wallet on Desktop', category: 'Herond Wallet' },
  { title: 'What is a Herond Account?', category: 'Account & Services' },
  { title: 'How do I use Herond Shield?', category: 'Herond Shield' },
  { title: 'How to Swap Coins in Herond Wallet', category: 'Herond Wallet' },
  { title: 'Set Herond as your Default Browser', category: 'Desktop Browser' },
  { title: 'What is Account Abstraction?', category: 'Herond Wallet' },
  { title: 'What does TOR Integration mean?', category: 'Herond Shield' },
];

// A sample article rendered in the article view
window.HC_ARTICLE = {
  title: 'How to Create Your Wallet on Desktop',
  category: 'Herond Wallet',
  description: 'Set up your non-custodial wallet on Herond Desktop in minutes.',
  steps: [
    {
      h: 'Step 1 · Open Herond Browser and Access the Wallet',
      body: 'Open Herond Browser, then click the Wallet icon in the top-right corner. This opens the Wallet Sidebar where you can manage your wallet and accounts.',
    },
    {
      h: 'Step 2 · Create Your Herond Keyless Wallet',
      body: 'When the sidebar appears, tap Log in to Herond and choose Create Wallet. Herond will generate a secure key using MPC-TSS technology — no seed phrase needed.',
    },
    {
      h: 'Step 3 · Set a Strong Password',
      body: 'Set a device password to protect your wallet on this device. Your password stays on your device only — Herond never stores it.',
      tip: 'Use at least 10 characters, mix upper/lower case, numbers and symbols, and avoid simple patterns.',
    },
    {
      h: 'Step 4 · Wait for Setup to Complete',
      body: 'Herond prepares your wallet. After a few seconds you reach the success screen — tap Get Started to open your wallet homepage.',
    },
  ],
};
