import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faKeybase,
  faStackOverflow,
  faInstagram,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}

  twitter = faTwitter;
  facebook = faFacebook;
  github = faGithub;
  linkedin = faLinkedin;
  medium = faMedium;
  keybase = faKeybase;
  stackoverflow = faStackOverflow;
  instagram = faInstagram;
  docker = faDocker;

  ngOnInit() {}
}
