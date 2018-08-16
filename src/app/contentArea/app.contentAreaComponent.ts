import { Component, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjx/Observable';
import { FilterPipe } from '../filter.pipe'




@Component({
  selector: "contentArea",
  templateUrl: "./contentArea.html",
  pipe: [FilterPipe]
  // styleUrls: ["./test.component.css"]
})
export class contentAreaComponent implements OnInit {
  user:User;
  profile = [];
  inputField: FormControl = new FormControl();
  searchResults: any[]= [];
constructor(private testService: TestService,private router: Router) { }

// onSelect(git){
    
//     let user= this.router.navigate(['/profiles', git.login]);
// }
// public myVar: any;
  ngOnInit() {
  this.testService.getProfiles()
  .subscribe(resProfiles => this.profile =resProfiles)
  
  // this._myData.myData1(this.myVar).subscribe(res => { })
  
 
  
  this.inputField.valueChanges
  .subscribe(inputField => this.testService.searchArtists(inputField)
  .subscribe(result => {
    if(result.status === 400)
    {
      return (console.log('jbhb'));
    }
    else{
      this.searchResults= result.branch_name;
      console.log('result: ' + result.profiles);
    }
    }
// }));
  
  
  },
  onChange(value) {
    console.log(value);
    this.testService.getProfiles(value).subscribe(res => {this.value = res;console.log(res);});
}
  
}
