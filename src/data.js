export const countries = [
  { name: 'Austria', currency: 'EUR', dialCode: '+43', flag: 'AT' },
  { name: 'Belgium', currency: 'EUR', dialCode: '+32', flag: 'BE' },
  { name: 'France', currency: 'EUR', dialCode: '+33', flag: 'FR' },
  { name: 'Germany', currency: 'EUR', dialCode: '+49', flag: 'DE' },
  { name: 'Italy', currency: 'EUR', dialCode: '+39', flag: 'IT' },
  { name: 'Japan', currency: 'JPN', dialCode: '+81', flag: 'JP' },
  { name: 'Poland', currency: 'EUR', dialCode: '+48', flag: 'PL' },
  { name: 'Spain', currency: 'EUR', dialCode: '+34', flag: 'ES' },
  { name: 'Switzerland', currency: 'CHF', dialCode: '+41', flag: 'CH' },
  { name: 'Uk', currency: 'EUR', dialCode: '+44', flag: 'UK' },
  { name: 'Ukraine', currency: 'EUR', dialCode: '+380', flag: 'UA' },
  { name: 'United States', currency: 'USD', dialCode: '+1', flag: 'US' },
];

export const errors = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  from: '',
  to: '',
};

export const initialState = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  currency: 'EUR',
  from: '',
  to: '',
  isInvestor: false,
  estateOptions: {
    singleFamily: false,
    residentialMultifamily: false,
    commercialRetail: false,
    commercialIndustrial: false,
    commercialHospitality: false,
    commercialWarehousing: false,
    commercialOffice: false,
    other: false,
  },
};

export const quotes = [
  {
    text: `We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete`,
    authorName: 'William Mac',
    authorRole: 'co founder investor',
  },
  {
    text: `Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free`,
    authorName: 'Jodie Sears',
    authorRole: "unitedproperties' agent",
  },
  {
    text: `United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side`,
    authorName: 'Ollie Macmahon',
    authorRole: 'managing director',
  },
];

export const rangeSteps = [
  10000, 20000, 50000, 100000, 200000, 500000, 1000000,
];

export default { initialState, errors, quotes, countries, rangeSteps };
