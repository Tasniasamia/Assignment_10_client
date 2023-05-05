import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { useNavigation } from 'react-router-dom';
import Pdf from "react-to-pdf";
import Loadingbtn from '../../../Loading/Loading';

const ref = React.createRef();
const Blog = () => {
  const navitgation2=useNavigation();
  if(navitgation2.state=="loading"){
      return <Loadingbtn></Loadingbtn>
  }
    return (
      <div>
        <div>
            <Container className='text-center'>
              <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary'>Download PDF</button>}
      </Pdf></Container>
            <div  >
                <Container className='my-5'>
                <div className="accordion"ref={ref} id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
     What is the difference between  differences between uncontrolled and controlled components?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      We can't use control component easily. There are some things added by default. Because of that we can't code comfortably.but We can use uncontrolled component easily.we can modify in our code easilly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      How to validate React props using PropTypes?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
      When we send props to any React component, we can use prop-types to check its type.With Test.propType, inside the second bracket, put the name of the props provider, then clone, then propaptps, then type.If correct then no error will be given.Test to check what type it Test.Defaultprops then single then bracket

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      What is the  the difference between nodejs and express js?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
      NodeJS  is Open Source Server.Express create Rest API of Node Js.Node js is powerfull than Express Js.Express js is a version framework of nodejs.Nodejs worked vanila.we can't use node js without express js.
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
      What is a custom hook, and why will you create a custom hook?
      </button>
    </h2>
    <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
      <div className="accordion-body">
      The hooks that we create in React are custom hooks.When we want to add a custom feature to React we create a custom hook and use.
      </div>
    </div>
  </div>









</div>
</Container>    </div>
        </div></div>
    );
};

export default Blog;