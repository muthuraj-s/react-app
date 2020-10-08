
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'daily', label: 'daily' }, { value: 'monthly', label: 'monthly' }, { value: 'yearly', label: 'yearly' }
];
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',  
            data:[]       
        }
    }
   componentDidMount(){
        console.log("aaa");
       
            axios.get('http://localhost:3000/data/data.json').then((response) => {
                console.log(response);
                this.setState({ data: response.data })
            }).catch((error) => {
                console.log(error)
            })
        }
   
    handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        this.setState({ [field] : value});
        
    }
    
    handleCheck = check => {
        this.setState({ check })
        // console.log(check)
    }
    
    handleSubmit=(e)=>{
        
        e.preventDefault();
    }
    handleDrop = selectedOption => {
        this.setState({ selectedOption } );
        // console.log(selectedOption)
    };

    render() { 
        return (
           


    <div className="row">
                  <div className="col-sm-2"><h4>Form</h4></div>
                <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
               
                    <div style={{ height: '500px' }}>
                        <div style={{ textAlign: 'left', paddingTop: '20px' }}>
                            <label>Name </label><br />
                            <input type="text" className="form-control" style={{ height: '26px' }} value={this.state.name} onChange={this.handleChange} name="name" id="name" />
                        </div>
                        <div  style={{ textAlign: 'left', paddingTop: '10px' }}>
                            <label >Password </label><br />
                            <input type="password" className="form-control" style={{ height: '26px' }} value={this.state.password} onChange={this.handleChange} id="password" name="password" />
                        </div>

                        <div  style={{ textAlign: 'left', paddingTop: '10px' }}>
                            <label >Select preferences </label><br />
                            <input type="checkbox" onChange={this.handleCheck}  id="a"  />chennai
                                <input type="checkbox"  onChange={this.handleCheck} id="b"/>banglore
                                <input type="checkbox"  onChange={this.handleCheck} id="c"/>pune
                        </div>
                        <div  style={{ textAlign: 'left', paddingTop: '10px' }}>
                            <label >choose</label><br />
                            <Select
                                id="selectedOption"
                                onChange={this.handleDrop}
                                options={options}
                                name="selectedOption"
                            />
                            </div>
                      
                        <div  style={{ textAlign: 'left', paddingTop: '10px' }}>
                            <label >Terms&conditions</label><br />
                            <div>
                            <input name="group1"type="radio" id="a"  />agree&nbsp;&nbsp;
                                <input  name="group1" type="radio"  id="b"  />disagree
                               </div>
                        </div><br/>
                        <div className="row" align="center">
                    <button onClick={this.handleSubmit}><b>submit</b></button>
    
                    </div>
                </div>

               </div>
            </div>    
  
        )

    }
}
export default Form;