import { Component } from '@angular/core';
import { FormGroup, FormControl,FormArray, Validators, FormBuilder, FormArrayName} from '@angular/forms';
import { RegisterService } from './register.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  ages = [];
  namepattern = "[a-zA-Z ]*";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  regForm: FormGroup;
  listUser:any;
  getUserList;
  // regForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(this.namepattern)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   age: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   gender: new FormControl('', Validators.required,),
  //   mobile: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern(this.mobnumPattern)]),
  //   hasChildren:new FormControl(false, Validators.requiredTrue),
  //   hobbies: new FormControl('', Validators.required),
  //   body: new FormControl('', Validators.required)
  //   skills: new FormControl()
  // });

  constructor(private fb: FormBuilder,private serv:RegisterService) {
    for ( var i = 17; i < 99; i++ ){
      this.ages.push(i+1);
    }
    this.regForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3),Validators.pattern(this.namepattern)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      age: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      gender:this.fb.control('', Validators.required,),
      mobile: this.fb.control('', [Validators.required, Validators.minLength(10),Validators.pattern(this.mobnumPattern)]),
      hasChildren:this.fb.control(false, Validators.requiredTrue),
      body: this.fb.control('', Validators.required),
      skills: this.fb.array([this.fb.control('',Validators.required)])

    })
    this.listUser = this.serv.userList;
    //console.log("cons", this.listUser);
  }
  ngOnInit(): void {
   // console.log("ng",this.serv.getUser());
  }
get gender() {
    return this.regForm.get('gender');
} 
  get f() {
      return this.regForm.controls;
    }

  submit() {
    console.log("Hiii",this.regForm.status);

      if (this.regForm.status === 'VALID') {
        console.log(this.regForm.value);
        this.serv.addSubmit(this.regForm.value);
        this.regForm.reset();
      }
    }



  resetValue() {
      this.regForm.reset({name: '', email: '', body: ''});
    }
  get skills(): FormArray {
    return this.regForm.get('skills') as FormArray;
  }

  addFeature(): void {
    this.skills.push(this.fb.control('', Validators.required));
  }

  getValidity(i) {
    return (<FormArray> this.regForm.get('skills')).controls[i].invalid;
  }

  removeFeature(index): void {
    this.skills.removeAt(index);
    console.log(this.skills);
  }
  deleteUser(index){
    this.serv.userDelete(index);
  }
}
