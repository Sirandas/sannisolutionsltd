import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  @Input() sideImg = 'assets/images/about-bg-aliments.png';
  @Input() title1 = ' Create A ';
  @Input() title2 = 'Revolutionary';
  @Input()
  p1 = `Our expertise includes skilled web development, website redesign,
            web design, and the creation of dynamic and static websites. Our
            primary goal for all types of organizations is to create websites
            that are efficient, knowledgeable, approachable, and appealing. Our
            knowledgeable staff transforms the user specifications into the most
            appropriate form after first understanding the client's
            requirements. We assist you with this process whether you are a
            multibillion-dollar corporation that generates significant revenue
            year after year or a small business trying to make a name for itself
            in the industry.`;
  @Input()
  p2 = `We've been working on complex problem solutions for over a decade.
            Each member of our small but adaptable team is responsible for
            taking your digital design strategy from ordinary to extraordinary.
            We have created and launched numerous websites, and we are currently
            working on client projects. Our knowledgeable experts put forth a
            genuine effort through their creative ideas, obtaining the
            appropriate answers in a timely manner in accordance with the
            client's requirements.`;
  @Input()
  p3 = `We help businesses reach more customers through website development,
            digital marketing, and e-commerce development.`;
  @Input() isHome = false;
}
