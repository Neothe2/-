import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tests",
  templateUrl: "./tests.component.html",
  styleUrls: ["./tests.component.css"],
})
export class TestsComponent {
  displayNumber: string;
  register: number;
  PPO: string;
  FT: boolean = true;
  
  constructor() {
    this.displayNumber = ""
  }

  onNumberPress(value: number) {
    if (this.displayNumber.length < 18) {
      this.displayNumber = this.displayNumber + value.toString();
    console.log(this.displayNumber);
    }     
  }
  
  sub() {
    if (this.FT == true) {
      this.register = parseInt(this.displayNumber)
      this.displayNumber = ""
      this.PPO = "-"
      this.FT = false;
      return;
    }                
    if (this.PPO == "-") {
      this.register = this.register - parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "-"
      return;
    }
    if (this.PPO == "+") {
      this.register = this.register + parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "-"
      return;
    }
    if (this.PPO == "x") {
      this.register = this.register * parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "-"
      return;
    }
    if (this.PPO == "/") {
      this.register = this.register / parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "-"
      return;
    }
  }

    add() {
    if (this.FT == true) {
      this.register = this.register = parseInt(this.displayNumber)
      this.displayNumber = ""
      this.PPO = "+"
      this.FT = false;
      return;
    }                
    if (this.PPO == "-") {
      this.register = this.register - parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "+"
      return;
    }
    if (this.PPO == "+") {
      this.register = this.register + parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "+"
      return;
    }
    if (this.PPO == "x") {
      this.register = this.register * parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "+"
      return;
    }
    if (this.PPO == "/") {
      this.register = this.register / parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "+"
      return;
    }
  }
  
    div() {
    if (this.FT == true) {
      this.register = parseInt(this.displayNumber)
      this.displayNumber = ""
      this.PPO = "/"
      this.FT = false;
      return;
    }                
    if (this.PPO == "-") {
      this.register = this.register - parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "/"
      return;
    }
    if (this.PPO == "+") {
      this.register = this.register + parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "/"
      return;
    }
    if (this.PPO == "x") {
      this.register = this.register * parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "/"
      return;
    }
    if (this.PPO == "/") {
      this.register = this.register / parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO =  "/"
      return;
    }
  }

      mul() {
    if (this.FT == true) {
      this.register = this.register = parseInt(this.displayNumber)
      this.displayNumber = ""
      this.PPO = "x"
      this.FT = false;
      return;
    }                
    if (this.PPO == "-") {
      this.register = this.register - parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "x"
      return;
    }
    if (this.PPO == "+") {
      this.register = this.register + parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "x"
      return;
    }
    if (this.PPO == "x") {
      this.register = this.register * parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO = "x"
      return;
    }
    if (this.PPO == "/") {
      this.register = this.register / parseInt(this.displayNumber);
      this.displayNumber = ""
      this.PPO =  "x"
      return;
    }
  }

  calc() {
    console.log("adfjhaihglakds")
    if (this.FT == true) {
      throw new Error("you may not calculate till you have an equation")
    }
        if (this.PPO == "-") {
      this.register = this.register - parseInt(this.displayNumber);
      this.displayNumber = this.register.toString();
      this.FT = true;
      return;
    }
    if (this.PPO == "+") {
      this.register = this.register + parseInt(this.displayNumber);
      this.displayNumber = this.register.toString();
      this.FT = true;
      return;
    }
    if (this.PPO == "x") {
      this.register = this.register * parseInt(this.displayNumber);
      this.displayNumber = this.register.toString();
      this.FT = true;
      return;
    }
    if (this.PPO == "/") {
      this.register = this.register / parseInt(this.displayNumber);
      this.displayNumber = this.register.toString();
      this.FT = true;
      return;
    }
  }

  del() {
    this.register = 0;
    this.displayNumber = "";
    this.FT = true;
  }
}
//textbox width is 147 pixles
