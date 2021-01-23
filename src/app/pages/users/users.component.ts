import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor (private UserService: UserService) { }

  ngOnInit(): void {
    this.LoadUsers();
  }
  
  LoadUsers () {
    this.UserService.GetSampleData()
    .subscribe((response) => {
      console.log(response);
      console.log(response.data.params.secs);
      this.users = response.data.users;
    });
  }

}
