import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

      sectionTitle = [
        {
            title: `What Our Students Have To Say`,
            paragraph: `There are many variations of passages of lorem ipsum available,have suffered alterationby injectumour, or randomised words which don't look.`,
            buttonText: `View All`,
            buttonLink: `/testimonials`
        }
    ]
    feedbackBox = [
        {
            userImg: `assets/images/users/user1.jpg`,
            userName: `Phillip Randolph`,
            userDesignation: `Designer`,
            description: `“It is a long established fact that a reader by the readable content of a page whelooking layout. The point ofIphas a morless.”`,
            rating: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                }
            ]
        },
        {
            userImg: `assets/images/users/user2.jpg`,
            userName: `Numbers Collins`,
            userDesignation: `Developer`,
            description: `“It is a long established fact that a reader by the readable content of a page whelooking layout. The point ofIphas a morless.”`,
            rating: [
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star`
                },
                {
                    icon: `bx bxs-star-half`
                }
            ]
        }
    ]

}
