import './GetStarted.css';


const image = "https://img.freepik.com/free-vector/man-taking-break-from-work_23-2148508516.jpg?w=996&t=st=1681506344~exp=1681506944~hmac=655a7aca1a0c19a22ede9519ea8144c25c813734f871fb2598a0a85d00a4bce4"


export default function GetStarted(){
    return(

        <>
        <section id="hero" class="d-flex align-items-center">

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Timeपे </h1>
                        <h2>Join our platform and start gaining experience and earning money now.</h2>
                        <div class="d-flex">
                            <a href="/" class="btn-get-started scrollto">Get Started</a>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src={image} class="img-fluid animated" alt=""/>
                    </div>
                </div>
            </div>

        </section>
        
        </>

    );
}