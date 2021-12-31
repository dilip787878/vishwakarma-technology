import Lorem from './Lorem';
import Slick from './Slick';
function Content(){
    return(
    <>
    <div className="container-fluid">
        <div className="Row">
            <div className="background-image">

            </div>
            <div className="container">
                <h2>Services</h2>
            <div className="paragraph">
                <div className="span span_4_of_12">
                    <h1>first paragraph</h1>
                    <Lorem/>
                </div>
                <div className="span span_4_of_12">
                    <h1>Second paragraph</h1>
                    <Lorem/>
                </div>
                <div className="span span_4_of_12">
                    <h1>Third paragraph</h1>
                    <Lorem/>
                </div>
            </div>
            </div>
        </div>
        <Slick />
    </div>
    </>
      );
    }
    export default Content;