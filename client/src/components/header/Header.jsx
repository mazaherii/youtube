import "./header.css";
export default function Header() {
  return (
    <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="widget">
                            <div className="footer-text text-left">
                                <a href="index.html"><img src="images/main/footer-logo.png" alt="" className="img-fluid" /></a>
                                <p>YTU BLog, Bilişim dünyası hakkında bilgilendirici yazıların yayınlandığı bağımsız bir kuruluştur.</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <div className="copyright">&copy; YTU Blog Team</div>
                    </div>
                </div>
            </div>
        </footer>
    
  );
}