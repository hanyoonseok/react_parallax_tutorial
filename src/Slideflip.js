import react,{Component} from 'react'
import './style.css'
class Slideflip extends Component{
    
    constructor(){
        super()
        this.state={
            slide:false,
            flip:false
        }
    }
    handleSlide(){
        this.setState({slide:true})
    }
    handleFlip(){
        this.setState({flip:true})
    }
    render(){
        return(
            <div>
                <div className={"box "+ (this.state.slide ? "slide" : "")
                + (this.state.flip?"flip":"")}><img src="images/img-7.jpg" style={{width:100, height:100}}/></div>{    }
                <button onClick={(e)=>this.handleSlide(e)}>slide</button>
                <button onClick={(e)=>this.handleFlip(e)}>flip</button>
            </div>
        )
    }
}
export default Slideflip