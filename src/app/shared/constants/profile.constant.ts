import { ProfileInfoCardModel } from '../components/profile-info-card/profile-info-card.model';

const SUMMARY: ProfileInfoCardModel = {
  title: 'summary',
  summary:
    // tslint:disable-next-line: max-line-length
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quasi facilis voluptates soluta alias blanditiis? Alias, odit quod? Nihil unde corrupti nulla labore tempore cupiditate voluptate aliquam quibusdam voluptas atque.',
};

const BASIC: ProfileInfoCardModel = {
  title: 'basic Info',
  list: [
    {
      label: 'full name',
      value: 'Navdeep Singh',
      type: 'input',
    },
    {
      label: 'email',
      value: 'singh.navdeep2510@gmail.com',
      type: 'input',
    },
    {
      label: 'username',
      value: 'nav2510',
      type: 'input',
    },
    {
      label: 'password',
      value: '123456',
      type: 'input',
    },
  ],
};

const EDUCATION: ProfileInfoCardModel = {
  title: 'education and work information',
  list: [
    {
      label: 'school',
      value: 'SDA School',
      type: 'input',
    },
    {
      label: 'college',
      value: 'Chitkara University',
      type: 'input',
    },
    {
      label: 'workplace',
      value: 'WMSS Pvt. ltd',
      type: 'input',
    },
  ],
};

const ADDITIONAL: ProfileInfoCardModel = {
  title: 'additional information',
  list: [
    {
      label: 'gender',
      value: 'Male',
      type: 'input',
    },
    {
      label: 'country',
      value: 'India',
      type: 'input',
    },
    {
      label: 'DOB',
      value: '25/10/1996',
      type: 'input',
    },
  ],
};

const CONTACT: ProfileInfoCardModel = {
  title: 'contact information',
  list: [
    {
      label: 'email',
      value: 'singh.navdeep2510@gmail.com',
      type: 'input',
    },
    {
      label: 'website',
      value: 'www.intervieDream@heroku-app.com',
      type: 'input',
    },
    {
      label: 'phone no.',
      value: '444-444-4444',
      type: 'input',
    },
    {
      label: 'mobile no.',
      value: '+91-9793334444',
      type: 'input',
    },
  ],
};

export const PROFILE = {
  summary: SUMMARY,
  basic: BASIC,
  education: EDUCATION,
  additional: ADDITIONAL,
  contact: CONTACT,
};
