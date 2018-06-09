import { Component, OnInit } from "@angular/core";
import { TestService } from '../test.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
 public Username;
  public user:profiles = [];
constructor(private testService: TestService, private route: ActivatedRoute) { }
 
  ngOnInit() {
  // this.testService.getProfiles()
  // .subscribe(resProfiles => this.profiles=resProfiles)
   
  
  
  // get username from the url
  let username= this.route.snapshot.params['username'];
  console.log(username);
  // use the userService to getUser()
    this.testService.getUser(username)
    .subscribe(user => this.user = user)
  
  // this.Username=profile.find(function(user){
    
  //   return user.username === username
  // });
  

  }
  
  
}
