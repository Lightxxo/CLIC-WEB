import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TermsOfUseProps {}

const TermsOfUse: React.FC<TermsOfUseProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="shadow-lg">
          <CardContent className="p-10">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Terms of Use
              </h1>

              <ul className="list-disc pl-5 mt-3">
                <li>
                  <p className="mt-3 text-sm text-black">
                    These terms and conditions apply to the Clic Club platform,
                    including its website(s), the app for mobile devices (the
                    "App") and any live events, collectively referred to as the
                    “Platform”, which has been developed by Clic Club Ltd., a
                    company incorporated in the United Kingdom (the "Service
                    Provider”, “us” or “we”).
                  </p>
                </li>
                <li>
                  <p>
                    Upon accessing the website(s), downloading or utilizing the
                    App, or attending any live events, you automatically agree
                    to the following terms. It is strongly advised that you
                    thoroughly read and understand these terms prior to doing
                    so.
                  </p>
                </li>
                <li>
                  <p>
                    Unauthorized copying or modification of the Application, any
                    part of the Application, or our trademarks is strictly
                    prohibited. Attempts to extract the source code, translate
                    the Application into other languages, or create derivative
                    versions are not permitted. All trademarks, copyrights,
                    database rights, and other intellectual property rights
                    related to the Application remain the property of the
                    Service Provider.
                  </p>
                </li>
              </ul>
            </header>

            <section className="space-y-4">
              <ol className="list-decimal list-outside space-y-4 pl-6">
                <li>
                  <p className="font-bold mt-6">Intellectual Property</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        All Content included on the Platform, unless uploaded by
                        Users, is the property of  the Service Provider, our
                        affiliates or other relevant third parties. In these
                        terms and conditions, Content means any text, graphics,
                        images, audio, video, software, data compilations, page
                        layout, underlying code and software and any other form
                        of information capable of being stored in a computer
                        that appears on or forms part of this Platform,
                        including any such content uploaded by Users. By
                        continuing to use the Platform you acknowledge that such
                        Content is protected by copyright, trademarks, database
                        rights and other intellectual property rights. Nothing
                        on this site shall be construed as granting, by
                        implication, estoppel, or otherwise, any license or
                        right to use any trademark, logo or service mark
                        displayed on the site without the owner's prior written
                        permission.
                      </p>
                    </li>
                    <li>
                      <p>
                        You may, for your own personal, non-commercial use only,
                        do the following: retrieve, display and view the Content
                        on a computer screen
                      </p>
                    </li>
                    <li>
                      <p>
                        You must not otherwise reproduce, modify, copy,
                        distribute or use for commercial purposes any Content
                        without the written permission of the Service Provider.
                      </p>
                    </li>
                    <li>
                      <p>
                        You may not use the Platform for any of the following
                        purposes:
                        </p>
                        <ul className="list-circle ml-6 space-y-2 mt-2">
                          <li>
                            in any way which causes, or may cause, damage to the
                            Platform or interferes with any other person's use
                            or enjoyment of the Platform;
                          </li>
                          <li>
                            in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or 
                            otherwise objectionable or in breach of any applicable law, regulation, 
                            governmental order;
                          </li>
                          <li>
                            making, transmitting or storing electronic copies of Content protected by 
                            copyright without the permission of the owner.
                          </li>
                        </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Acceptable Use</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        You must ensure that the details provided by you on sign on, login, registration or 
                        at any time are correct and complete.
                      </p>
                    </li>
                    <li>
                      <p>
                        You must inform us immediately of any changes to the information that you provide when 
                        registering by updating your personal details 
                        to ensure we can communicate with you effectively.
                      </p>
                    </li>
                    <li>
                      <p>
                        We may suspend or cancel your membership, login or registration with immediate effect 
                        for any reasonable purposes or if you breach these terms and conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        You may cancel your membership, login or registration at any time by informing 
                        us in writing to the address at the end of these terms and conditions. If you do so, you must immediately 
                        stop using the Platform. Cancellation or suspension of your membership, 
                        login or registration does not affect any statutory rights.
                      </p>
                    </li>
                    <li>
                      <p>
                        You can also unsubscribe from the mailing list at anytime. The link 
                        to unsubscribe is included at the bottom of all email correspondence.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Service Provider is dedicated to ensuring that the Platform, App and the live events are as beneficial and run as efficiently as 
                        possible. As such, they reserve the right to modify them or charge for their services at any time and for any reason. 
                        The Service Provider assures 
                        you that any charges for the Platform, App, the live events or its services will be clearly communicated to you.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Platform stores and processes personal data that you have provided to the Service Provider in order to provide the Service. 
                        It is your responsibility to maintain the security of your phone and access to the App. 
                        The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions 
                        and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, 
                        malicious programs, compromise your phone's security features, and may result in the App not functioning correctly or at all.
                      </p>
                    </li>
                   
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Third Parties</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        Please note that the App utilizes third-party services that have their own Terms and Conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Platform may contain links to other sites. Unless expressly stated, these sites 
                        are not under the control of the Service Provider or that of our affiliates.
                      </p>
                    </li>
                    <li>
                      <p>
                        We assume no responsibility for the content of such Websites and disclaim liability for
                        any and all forms of loss or damage arising out of the use of them.
                      </p>
                    </li>
                    <li>
                      <p>
                        The inclusion of a link to another site on this Website does not imply any endorsement of 
                        the sites themselves or of those in control of them.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">
                    Availability of the Platform and Disclaimers
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        Any online facilities, tools, services or information that the Service Provider 
                        makes available through the Platform is provided "as is" and on an "as available" 
                        basis. We give no warranty that the Platform or services provided will be free of defects and/or faults. 
                        To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular 
                        purpose, accuracy of information, compatibility and satisfactory quality. The Service Provider 
                        is under no obligation to update information on the Platform.
                      </p>
                    </li>
                    <li>
                      <p>
                        Please be aware that the Service Provider does not assume 
                        responsibility for certain aspects. Some functions of the Platform require an active internet 
                        connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider 
                        cannot be held responsible if the Platform or specifically the App does not function at full capacity 
                        due to lack of access to Wi-Fi or if you have exhausted your data allowance.
                      </p>
                    </li>
                    <li>
                      <p>
                        If you are using the Platform outside of a Wi-Fi area, please be aware that your mobile 
                        network provider's agreement terms still apply. Consequently, you may incur charges from your mobile 
                        provider for data usage during the connection to the application, or other third-party charges. 
                        By using the application, you accept responsibility for any such charges, including roaming data 
                        charges if you use the application outside of your home territory (i.e., region or country) 
                        without disabling data roaming. If you are not the bill payer for the device on which you are using the 
                        application, they assume that you have obtained permission from the bill payer.
                      </p>
                    </li>
                    <li>
                      <p>
                        Similarly, the Service Provider cannot always assume responsibility for your usage 
                        of the Platform. For instance, it is your responsibility to ensure that your device remains 
                        charged. If your device runs out of battery and you are unable to access the Service, the 
                        Service Provider cannot be held responsible.
                      </p>
                    </li>
                    <li>
                      <p>
                        In terms of the Service Provider's responsibility for your use of the Platform, 
                        it is important to note that while they strive to ensure that it is updated and accurate at 
                        all times, they do rely on third parties to provide information to them so that they can make 
                        it available to you. The Service Provider accepts no liability for any loss, direct or indirect, 
                        that you experience as a result of relying entirely on this functionality of the application.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Service Provider may wish to update the Platform and/or App from time to time. 
                        The App is currently available as per the requirements for the operating system 
                        (and for any additional systems they decide to extend the availability of the App to) 
                        may change, and you will need to download the updates if you want to continue using the App. 
                        The Service Provider does not guarantee that it will always update the App so that it is relevant 
                        to you and/or compatible with the particular operating system version installed on your device. 
                        However, you agree to always accept updates to the App when offered to you.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Service Provider may also wish to cease providing the Platform and/or App and may 
                        terminate its use at any time without providing termination notice to you. Unless they inform 
                        you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; 
                        (b) you must cease using the application, and (if necessary) delete it from your device.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Limitation of Liability</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        Nothing in these terms and conditions will: (a) limit or exclude our 
                        or your liability for death or personal injury resulting 
                        from our or your negligence, as applicable; (b) limit or exclude our or your 
                        liability for fraud or fraudulent misrepresentation; or (c) limit or exclude 
                        any of our or your liabilities in any way that is not permitted under applicable law.
                      </p>
                    </li>
                    <li>
                      <p>
                       We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.
                      </p>
                    </li>
                    <li>
                      <p>
                       To the maximum extent permitted by law, the Service Provider accepts 
                       no liability for any of the following:a. any business losses, such as loss of profits, 
                       income, revenue, anticipated savings, business, contracts, goodwill or 
                       commercial opportunities;b. loss or corruption of any data, database or software;c. 
                       any special, indirect or consequential loss or damage.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Privacy Policy</p>
                  <p className="mt-2 ml-6">
                    Use of the Platform is also governed by our Privacy Policy, 
                    which is incorporated into these terms and conditions by this reference. 
                  </p>
                </li>

                <li>
                  <p className="font-bold mt-4">General</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        You may not transfer any of your rights under these terms and 
                        conditions to any other person. The Service Provider may transfer 
                        our rights under these terms and conditions where we reasonably 
                        believe your rights will not be affected.
                      </p>
                    </li>
                    <li>
                      <p>
                        These terms and conditions may be varied by us, 
                        the Service Provider, from time to time. Such revised terms
                         will apply to the Platform from the date of publication. 
                         Users should check the terms and conditions regularly to 
                         ensure familiarity with the then current version.
                      </p>
                    </li>
                    <li>
                      <p>
                        These terms and conditions together with the Privacy Policy contain 
                        the whole agreement between the parties relating to its subject matter 
                        and supersede all prior discussions, arrangements or agreements that might 
                        have taken place in relation to the terms and conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Contracts (Rights of Third Parties) Act 1999 shall not apply 
                        to these terms and conditions and no third party will have any right 
                        to enforce or rely on any provision of these terms and conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        If any court or competent authority finds that any provision 
                        of these terms and conditions (or part of any provision) is invalid, 
                        illegal or unenforceable, that provision or part-provision will, to the extent required, 
                        be deemed to be deleted, and the validity and enforceability of the other provisions of 
                        these terms and conditions will not be affected.
                      </p>
                    </li>
                    <li>
                      <p>
                        Unless otherwise agreed, no delay, act or omission 
                        by a party in exercising any right or remedy will be deemed 
                        a waiver of that, or any other, right or remedy.
                      </p>
                    </li>
                    <li>
                      <p>
                        This Agreement shall be governed by and interpreted according 
                        to the law of England and Wales and all disputes arising under 
                        the Agreement (including non-contractual disputes or claims) shall 
                        be subject to the exclusive jurisdiction of the English and Welsh courts.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Changes</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p className="mt-2 ml-6">
                      The Service Provider may periodically update their Terms and Conditions. 
                    Therefore, you are advised to review this page regularly for any changes. 
                    The Service Provider will notify you of any changes by posting the 
                    new Terms and Conditions on this page.
                      </p>
                    </li>
                    <li>
                      <p className="mt-2 ml-6">
                        These terms and conditions are effective as of 9 August 2025.
                      </p>
                    </li>
                  </ul>
                  
                </li>

                <li>
                  <p className="font-bold mt-4">Contact Us</p>
                  <p className="mt-2 ml-6">
                    If you have any questions or suggestions about the Terms and Conditions, 
                    please do not hesitate to contact the Service Provider at {" "}
                    <a className="underline" href="mailto:hello@clicclub.cc">
                      hello@clicclub.cc
                    </a>
                    .
                  </p>
                </li>
              </ol>
            </section>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default TermsOfUse;
