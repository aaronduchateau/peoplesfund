import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Footer from "../containers/Marketplace/components/Footer";

const timberIndustry = () => {


    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
            <HeaderSecondaryContainer termsUrl="./tip.png" />
            <div id="main_content">
                <div className="terms-of-use">
                    <div className="">
                        <div className="">

                            <section className="grid justify-items-center" id="section1">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h1 className="normal mb-5 mt-2">| Our value proposition to the Timber Industry</h1>

                                    <div className="pl-5">
                                        <p>
                                            At KeepTree.org our mission is to keep trees standing when possible. <br /><br />

                                            We hope to work cooperatively with those performing responsible forest harvesting, by syncing alternative funding models directly into their bottom line, using technology.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section1">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h1 className="normal mb-5">| Our Plan</h1>

                                    <div className="pl-5">
                                        <p>
                                            We believe that effective funding distribution in relation to tree preservation will be a cooperative combination of data aggregation, data visualization, easy to use tools, and online payment processing.
                                            <br /><br />
                                            Our goal is to use modern technology to work cooperatively with the timber industry to pre-actualize alternative funding models before a potential cut may be required.
                                            <br /><br />
                                            For this to be successful, it must be both <b>easy</b> and <b>fast</b> for timber companies to bring ‘preservation candidates’ to alternative markets. 
                                            <br /><br />
                                            By using combinations of geo coordinated satellite imagery and other technologies, we hope to provide the ‘baseline data’ required to generate real time reports that transition instantly into funding campaigns, and ultimately funding resolution. 
                                            <br /><br />
                                            We hope to work cooperatively with those performing responsible forest harvesting, by syncing alternative funding models directly into their bottom line, using technology.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section2">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <div className="easy-to-read">
                                        <table className="text-white w-100">
                                            <tbody>
                                            <tr>
                                                <td valign="top">
                                                    <h1>1) Identify</h1>
                                                    We will work with Timber Partners to identify possible preservation candidates at their discretion. 
                                                </td>
                                                <td valign="top">
                                                <h1>2) Document</h1>
                                                We transition the prospective preservation candidate into our system using our technology. 
                                                </td>
                                                <td valign="top">  <h1>3) Launch</h1>
                                                Campaign goes live with critical information about the target plot and generated carbon sequestration data. 
                                                </td>
                                                <td valign="top"><h1>4) Funding</h1>
                                                We provide payment processing to fullfill the campaign with the propsective funding provided. You get paid, the trees remain standing.  
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>



                                    </div>
                        
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section3">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                <h1 className="normal mb-5">| Let's work together & Get Paid, Keep Trees Standing</h1>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        "The shape and solutions of the future rely totally on the collective effort of people working together. We are all an integral part of the web of life."<br/>
                                        -Jacque Fresco
                                        </p>
                                    </div>
                                   
                                </div>
                            </section>
                           
                        </div>
                    </div>
                </div>
            </div >



            <Footer />
        </div >
    );
};

export default timberIndustry;
