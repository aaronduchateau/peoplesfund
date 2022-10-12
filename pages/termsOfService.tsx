import type { NextPage } from "next";
import { SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Footer from "../containers/Marketplace/components/Footer";

const termsOfService = () => {


    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
            <HeaderSecondaryContainer termsUrl="./terms.png" />
            <div id="main_content">
                <div className="terms-of-use">
                    <div className="">
                        <div className="">
                            <section id="toc" className="t-o-c grid justify-items-center bg-brt-green pd-10 content-center">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">Table Of Contents</h2>
                                    <ol className="list-simple ml4">
                                        <li className="type-16">
                                            <b><a href="#section1">1. Welcome to FundMeUP!</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section2">2. About Account Creation</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section3">3. Things Not to do</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section4">4. Building Projects</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section5">5. Funding Projects</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section6">6. Things we are not responsible for</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section7">7. Site Fees</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section9">9. Intellectual Property owned by you</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section10">10. FundMeUP’s Intellectual Property</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section11">11. Copyright Issues</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section12">12. Account Termination</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section13">13. FundMeUp's Rights</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section14">14. Warranty Disclaimer and information</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section15">15. Indemnification and Associated Matters</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section16">16. Limitation of Liability by Law</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section17">17. Dispute Resolution and Governing Law</a></b>
                                        </li>
                                        <li className="type-16">
                                            <b><a href="#section18">18. Other Considerations</a></b>
                                        </li>
                                    </ol>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section1">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">1. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section2">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">2. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section3">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">3. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section4">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">4. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section5">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">5. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section6">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">6. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section7">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">7. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section8">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">8. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section9">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">9. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section10">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">10. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section11">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">11. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section12">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">12. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section13">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">13. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section14">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">14. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section15">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">15. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section16">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">16. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section17">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">17. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="grid justify-items-center" id="section18">
                                <div className="max-w-screen-md pt-5 pb-5 text-white">
                                    <h2 className="normal">18. Vestibulum pretium nunc</h2>
                                    <div className="easy-to-read">
                                        <p className="text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque neque non ultrices pulvinar. Ut consequat nibh lorem, in fringilla felis sagittis quis. Sed non tristique libero, eu semper justo. Nam pharetra tellus in rhoncus euismod. Curabitur lacinia nisi neque, vel aliquet massa consequat vel. Mauris vitae dui blandit, consequat tortor tincidunt, mollis ligula. Integer ut diam blandit, auctor elit et, mattis erat.
                                        </p>
                                    </div>
                                    <div className="">
                                        <p>
                                            Vestibulum pretium nunc tortor, sit amet tincidunt libero pharetra hendrerit. Mauris commodo urna vel eleifend volutpat. Etiam volutpat a ligula sit amet facilisis. Pellentesque sed congue risus. Quisque feugiat, mi nec cursus condimentum, justo quam iaculis augue, non rutrum arcu justo a mauris. Sed luctus ante erat, et consectetur est mollis at. Etiam pretium aliquet nisl, id consectetur urna tincidunt vitae. Vestibulum sed rutrum nisl.
                                        </p>
                                        <p>
                                            Vestibulum non lorem vitae enim vestibulum efficitur. Proin luctus massa iaculis, bibendum magna faucibus, placerat dolor. Integer scelerisque felis eleifend lacus cursus accumsan. Quisque nec mattis lorem, molestie vulputate ex. Phasellus eu ullamcorper augue, vel pulvinar purus. Duis pretium ultricies lectus ut vulputate. Donec feugiat, lacus sit amet posuere mattis, metus nulla accumsan justo, ac hendrerit est ante sed felis. Fusce quis est nisi. Nulla aliquam nisi diam, nec sagittis tortor egestas quis.
                                        </p>
                                        <p>
                                            Praesent rutrum condimentum semper. Integer et ante massa. Duis tempor magna ut cursus vestibulum. Suspendisse eu orci et leo faucibus vestibulum. Integer eleifend ipsum non egestas aliquam. Ut dapibus vel mi sit amet efficitur. Duis dolor nisi, commodo in leo in, dapibus condimentum magna. Morbi finibus risus a tellus sagittis vehicula.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default termsOfService;
