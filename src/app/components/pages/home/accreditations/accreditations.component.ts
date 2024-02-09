import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accreditations',
  templateUrl: './accreditations.component.html',
  styleUrls: ['./accreditations.component.scss'],
})
export class AccreditationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

      partnerContent = [
        {
            title: `Our Global Honorable Partners`,
            list: [
                {
                    img: `assets/images/partners/partner1.png`
                },
                {
                    img: `assets/images/partners/partner2.png`
                },
                {
                    img: `assets/images/partners/partner3.png`
                },
                {
                    img: `assets/images/partners/partner4.png`
                },
                {
                    img: `assets/images/partners/partner5.png`
                }
            ]
        }
    ]

}
