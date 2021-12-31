import Menu from './Menu';
function Header(){
return(
<>
<div className="container-fluid">
    <div className="container">
        <div className="row">
        <div className="header">
            <div className="left-side">
                <img src="img/415544.png"></img>
            </div>
            <div className="right-side">
                <Menu />
            </div>
        </div>
        </div>
    </div>
</div>
</>
  );
}
export default Header;