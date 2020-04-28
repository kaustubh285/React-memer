import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            age:null,
            fname:"",
            lname:"",
            gender:"",
            location:"",
            veg_diet:false,
            k_diet:false,
            lf_diet:false,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name, value, checked, type} = event.target
        type === "checbox" ? 
        this.setState({[name]: checked}): 
        this.setState({[name] : value})
    }  
    render() {
        return (
            <main>
                <form>
                    <input type="text"  
                            name="fname"
                            value={this.state.fname}
                            placeholder="First Name"
                            onChange={this.handleChange}
                            />
                    <br />
                    <input onChange={this.handleChange} 
                           type="text" 
                           name="lname" 
                           placeholder="Last Name" 
                           />
                           
                    <br />
                    <input onChange={this.handleChange} 
                           type="text" 
                           name="age" 
                           placeholder="Age" 
                           />
                    <br />
                    <label>
                    <input type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                             />
                             Male
                    </label>
                    <label>
                    <input type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                             /> 
                             Female
                    </label>
                    {/* Create radio buttons for gender here */}
                    <br />lo
                    <label> Location:</label>
                    <select value={this.state.location}
                            name="location"
                            onChange={this.handleChange}>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Pune">Pune</option>                    
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.fname} {this.state.lname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender:{this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main> 
        )
    }
}

export default App
