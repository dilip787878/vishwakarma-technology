import Menu from './Menu';
function Footer(){
    return(
    <>
<div className="container-fluid bg">
        <div className="container">
            <div className="row">
                <div className="footer">
                    <div className="span span_4_of_12">
                    <img src="img/415544.png"></img>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="span span_4_of_12">
                    <h3>Menu</h3>
                        <Menu />
                    </div>
                    <div className="span span_4_of_12">
                    <h3>Subscribe Now</h3>  
                    <div className="subscribe">
                    <input type="text" placeholder="Subscribe Now"></input>
                    <a href="#">Submit</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</div>
    </>
      );
    }
    export default Footer;