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
  faDocker,
  faGoogle,
  faJs
} from '@fortawesome/free-brands-svg-icons';

import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

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
  google = faGoogle;
  js = faJs;
  pluralsight = faChalkboardTeacher;

  ngOnInit() {}
}
