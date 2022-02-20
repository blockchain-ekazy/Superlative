import React from 'react';
import './Home.css'
import './Move.js'
import Img1 from '../Components/imgs/Main.jpeg'
import Img2 from '../Components/imgs/image1.gif'
import Img3 from '../Components/imgs/image2.gif'
import Img4 from '../Components/imgs/image3.gif'
import Img5 from '../Components/imgs/image4.gif'
import Img6 from '../Components/imgs/image5.gif'

import Imggif from '../Components/imgs/imageGif.gif'
import ImgTop from '../Components/imgs/removebg.png'

export default function Home() {
    return (
        <div className='Home'   >
<a id='L'></a>
            <div className='container '>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <h6 className="px-4 NavBtn" href="#">HOME<span className="sr-only">(current)</span></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn " href="#">  <a href="#lession1 ">ABOUT</a></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn" href="#"> <a href='#Roadmap'>ROADMAP</a></h6>
                            </li>
                            <li className="nav-item">
                                <h6 className="px-4 NavBtn" href="#"> <a href='#Team'>TEAM</a></h6>
                            </li>
                           

                        </ul>
                    </div>
                    <span>
                    <a href='https://mobile.twitter.com/babydoodleapes'><i class="fab fa-twitter NavBtn px-3  h2 text-white" ></i></a>
                      <a href='https://www.instagram.com/babydoodleapes/'> <i class="fab fa-instagram     NavBtn px-3  h2 text-white"></i></a>
                    </span>
                </nav>
            </div>
            <div className='container ' >
                <div className='row  ' >
                    <div className='col-12 ' >
                        <img src={ImgTop} className="rounded mx-auto d-block Imgs" alt="..."></img>
                        <br></br>
                        <button type="button" className="MainButton btn d-block mx-auto">Open Sea</button>
                        <br></br>
                    </div>

                </div>
            </div>

            <div className='container' >
            <a id="lession1"></a>
                <div className='row RowTwo py-5 align-items-center' >
                    <div className='col-12 col-md-6' >
                        <img className='mx-100 d-block  ImgBorder' src={Imggif}  ></img>
                    </div>
                    <div className='col-12 col-md-6' >
                        <h1>Doodle Baby Apes</h1>
                        <p>Doodle Baby Apes supports artists, musicians, actors and writers to pursue their dreams, by
                            providing a source of passive income.</p>
                    </div>
                </div>
            </div>


            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,Roadmap>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="container py-5">
                <a id='Roadmap'></a>
                <h2 className='text-center pb-5 ' >ROADMAP</h2>
                <div class="main-timeline">
                    <div class="timeline">
                        <div class="icon"></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <i class="fas fa-dice-one icons"></i>
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title ">Stage 1: A Creative Community</h5>
                            <p class="description">
                                Using our creative design style, we’ll be bringing together a community of people that are
                                committed to the creative arts.
                                Our first stage of development will look to bring together a group of people with similar values as
                                ourselves, and use them to create a positive future for creatives. By bringing together a group of
                                like-minded people, we want to encourage community-wide communication and networking
                            </p>
                        </div>
                    </div>



                    <div class="timeline">
                        <div class="icon"></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <i class="fas fa-dice-two icons"></i>
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title ">Step 2: Mint and Reveal</h5>
                            <p class="description">
                                Our collection of Doodle Baby Apes contains a wide variety of traits and rarity. Everybody will be
                                given a chance at minting one of our NFTs at the same time, with no whitelist available at all.
                                Reveal will happen straight after, meaning that you won't have to wait to determine the rarity or
                                visuals of your unique NFT.
                            </p>
                        </div>
                    </div>



                    <div class="timeline">
                        <div class="icon"></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <i class="fas fa-dice-three icons"></i>
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title ">Step 3: A Creative Future</h5>
                            <p class="description">
                                In order to show our appreciation to the creative arts, we’ll be donating a portion of mint sales to
                                relevant charities. It’s our way of supporting an ideal future, and showing our appreciation for
                                something that is criminally undervalued.
                                A further section of our mint profits will go into a community-governed DAO, that will invest in
                                projects that support the creative arts. This will allow our community to have their say on the
                                positive impact that they want to make.
                            </p>
                        </div>

                    </div>

                    <div class="timeline">
                        <div class="icon"></div>
                        <div class="date-content">
                            <div class="date-outer">
                                <span class="date">
                                    <i class="fas fa-dice-four icons"></i>
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content">
                            <h5 class="title ">Step 4: More Projects</h5>
                            <p class="description">
                                We’ll continue to show our appreciation for the creative arts for the foreseeable future, and we
                                hope you’ll be on this journey with up.
                                100% of after market revenue will go towards creating new NFT projects. These projects will be
                                built with the input of our community, and developed using the talents of people within our ranks.
                                Any profits will go straight into the same fund, and used to keep funding important creative
                                ventures.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<Team>>>>>>>>>>>>>>>>>>>>>>>>>>>>></Team> */}

            <div className='container py-5' >
                <a id='Team'></a>
                <h1 className='text-center'>TEAM</h1>
                <div className="row ">
                    <div className="col-12 col-md-3 pt-4">
                        <img src={Img2} className=" mx-auto d-block TeamImgs TeamImg" alt="..."></img>
                        <h3 className='text-center pt-3'>FIREBALL</h3>
                        <h6 className='text-center '>visionary</h6>
                    </div>
                    <div className="col-12 col-md-3 pt-4">
                        <img src={Img5} className=" mx-auto d-block TeamImgs TeamImg" alt="..."></img>
                        <h3 className='text-center pt-3'>ARURA</h3>
                        <h6 className='text-center '>focus</h6>
                    </div>
                    <div className="col-12 col-md-3 pt-4">
                        <img src={Img4} className=" mx-auto d-block TeamImgs TeamImg" alt="..."></img>
                        <h3 className='text-center pt-3'>DAXTER</h3>
                        <h6 className='text-center '>dreamer</h6>
                    </div>
                    <div className="col-12 col-md-3 py-4">
                        <a href='https://www.fiverr.com/share/vzY2RA' >
                            <img src={Img3} className=" mx-auto d-block TeamImgs TeamImg" alt="..."></img>
                            <h3 className='text-center pt-3'>DEVELOPER</h3>
                            <h6 className='text-center '>Sabir Pro</h6>
                        </a>
                    </div>
                </div>
                {/* <img src={Img2} class="img-fluid" alt="Responsive image"></img> */}

            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<faqs>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></faqs> */}

            <div className="container px-5 pb-5">
                <div className="row">
                    <div className="col-md-offset-3 col-md-12">

                        <h3 className='text-center pt-5'>Frequently Asked Questions</h3><br /><br />

                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a className="Sec" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Section 1
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ac leo vel rutrum. Integer varius tristique magna vel dictum. Vestibulum augue magna, convallis id velit a, porttitor fermentum sem.
                                    </div><br />
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingTwo">
                                    <h4 className="panel-title">
                                        <a className="collapsed Sec" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Section 2
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <div className="panel-body text-white ">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ac leo vel rutrum. Integer varius tristique magna vel dictum. Vestibulum augue magna, convallis id velit a, porttitor fermentum sem.
                                    </div><br />
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed Sec" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Section 3
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis ac leo vel rutrum. Integer varius tristique magna vel dictum. Vestibulum augue magna, convallis id velit a, porttitor fermentum sem.
                                    </div><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid footer' >
                <div className='row' >
                    {/* <img src={ImgTop} className="mx-auto d-block FtrImgs" alt="..."></img> */}
                </div>
                <nav className="navbar navbar-expand-lg navbar-light pt-1 pb-2 ">
                    <div className="collapse navbar-collapse pt-5 d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav Fm">
                            <li className="nav-item active ">
                            <h6 className="px-4 NavBtn" href="#" > <a href='#L'>HOME</a><span className="sr-only">(current)</span></h6>
                            </li>
                            <li className="nav-item">
                            <h6 className="px-4 NavBtn " href="#">  <a href="#lession1 ">ABOUT</a></h6>
                            </li>
                            <li className="nav-item">
                            <h6 className="px-4 NavBtn" href="#"> <a href='#Roadmap'>ROADMAP</a></h6>
                            </li>
                            <li className="nav-item">
                            <h6 className="px-4 NavBtn" href="#"> <a href='#Team'>TEAM</a></h6>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='container d-flex justify-content-center pb-2'>
                <a href='https://mobile.twitter.com/babydoodleapes'><i class="fab fa-twitter NavBtn px-3  h2 text-white" ></i></a>
                      <a href='https://www.instagram.com/babydoodleapes/'> <i class="fab fa-instagram     NavBtn px-3  h2 text-white"></i></a>
                    
                </div>
                <h6 className="px-4 d-flex justify-content-center textbtm " href="#">Copyright © Superlative apes 2021. All rights reserved</h6><br></br>
            </div>



        </div>
    )
}
