import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  emailControl: FormControl;
  footerLinks = [
    [
      { label: '+91 444 444 4444' },
      { label: 'singh.navdeep2510@gmail.com' },
      { label: 'find a store' },
    ],
    [
      { label: 'contact us' },
      { label: 'ordering and payment' },
      { label: 'faqs' },
    ],
    [
      { label: 'about interviewdream' },
      { label: 'work with us' },
      { label: 'privacy policy' },
      { label: 'terms & conditions' },
      { label: 'faqs' },
    ],
  ];
  socialLinks = [
    { icon: 'instagram', url: '' },
    { icon: 'linkedin', url: '' },
    { icon: 'github', url: '' },
    { icon: 'google-plus', url: '' },
  ];
}
