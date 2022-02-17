import { LANGUAGES } from '../../../../shared/constants/languages.constant';

export const FOOTER_LINKS = [
  [
    {
      label: LANGUAGES[0].label,
      url: `/${LANGUAGES[0].code}`,
    },
    {
      label: LANGUAGES[1].label,
      url: `/${LANGUAGES[1].code}`,
    },
  ],
  [
    { label: 'features.landing.footer.contactUs' },
    { label: 'features.landing.footer.orderingAndPayment' },
    { label: 'features.landing.footer.faqs' },
  ],
  [
    { label: 'features.landing.footer.aboutInterviewDream' },
    { label: 'features.landing.footer.workWithUs' },
    { label: 'features.landing.footer.privacyPolicy' },
    { label: 'features.landing.footer.termsAndConditions' },
    { label: 'features.landing.footer.faqs' },
  ],
];
export const SOCIAL_LINKS = [
  { icon: 'instagram', url: 'https://www.instagram.com/nav2510/' },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/navdeep-singh-4631a9127',
  },
  { icon: 'github', url: 'https://github.com/Nav2510/interviewDream' },
  { icon: 'google-plus', url: '' },
];
