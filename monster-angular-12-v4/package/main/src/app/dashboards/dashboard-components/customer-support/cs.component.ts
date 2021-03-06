import { Component } from '@angular/core';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-cs',
  templateUrl: './cs.component.html'
})
export class CustomerSupportComponent {
  constructor() {}
	
	public config: PerfectScrollbarConfigInterface = {};

  recentcomments: Object[] = [
    {
      image: 'assets/images/users/1.jpg',
      name: 'James Anderson',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2016',
      status: 'Pending',
      labelcolor: 'badge-light-info text-info'
    },
    {
      image: 'assets/images/users/2.jpg',
      name: 'Michael Jorden',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2016',
      status: 'Approved',
      labelcolor: 'badge-light-success text-success'
    },
    {
      image: 'assets/images/users/4.jpg',
      name: 'Johnathan Doeting',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2016',
      status: 'Rejected',
      labelcolor: 'badge-light-danger text-danger'
    },
    {
      image: 'assets/images/users/5.jpg',
      name: 'James Anderson',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
      date: 'April 14, 2016',
      status: 'Pending',
      labelcolor: 'badge-light-info text-info'
    }
  ];
}
