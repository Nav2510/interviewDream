import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FOOTTER_LINKS, SOCIAL_LINKS } from './footer.mock';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailControl: FormControl;
  footerLinks = FOOTTER_LINKS;
  socialLinks = SOCIAL_LINKS;

  ngOnInit(): void {
    this.emailControl = new FormControl('');
  }
}
