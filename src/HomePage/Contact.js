import React, { Component } from "react";
import firebase from "../Firebase/FireBase.js";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'',
        message:''  
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendMassage = this.sendMassage.bind(this);
  }

  handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
  
  sendMassage(){
      let data = this.state;
      firebase.database().ref('/Messages').push(data);
      alert("ההודעה נשלחה למערכת תקבל מענה בהקדם");
      this.setState({name:'',email:'',message:''})
  }
      render() {
          return(
            <div className="contact">
                <input type="checkbox" className="contCB" id="butTog"/>
                <label for="butTog" className="contButt">MENU</label>

              <div className="contBG"></div>
              <nav className="contNav">
                  <form className="contBox">
                        <h1 className="headLine">צור קשר</h1>
                        <input name="name" type="text" className="formCont" placeholder ="הכנס שם מלא" required/><br/>
                        <input name="email" type="email" className="formCont" placeholder = "הכנס כתובת דואר אלקטרוני" required/><br/>
                        <textarea name="messege" className="formCont" placeholder="הכנס הודעתך" row="4" required></textarea><br/>
                        <input type="submit" className= "btnForm" value="שלח הודעה"/>
                    </form>
              </nav>
            </div>
      );
}
}


export default Contact;
