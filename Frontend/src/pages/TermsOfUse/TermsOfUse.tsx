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
                        <ul className="list-circle ml-6 space-y-2 mt-2">
                          <li>
                            in any way which causes, or may cause, damage to the
                            Platform or interferes with any other person's use
                            or enjoyment of the Platform;
                          </li>
                        </ul>
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Acceptable Use</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        You must ensure your registration details are correct
                        and update them promptly if they change.
                      </p>
                    </li>
                    <li>
                      <p>
                        We may suspend or cancel your account for any reasonable
                        purpose or if you breach these terms.
                      </p>
                    </li>
                    <li>
                      <p>
                        You may cancel your membership at any time by informing
                        us in writing. Upon cancellation, you must stop using
                        the Platform.
                      </p>
                    </li>
                    <li>
                      <p>
                        You can unsubscribe from our mailing list at any time
                        using the link provided in all emails.
                      </p>
                    </li>
                    <li>
                      <p>
                        We reserve the right to modify the Platform, App, or
                        events, and charge for services with clear notice.
                      </p>
                    </li>
                    <li>
                      <p>
                        You are responsible for maintaining the security of your
                        device and access to the App. We strongly advise against
                        jailbreaking or rooting your device.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Third Parties</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        The App uses third-party services with their own terms
                        and conditions.
                      </p>
                    </li>
                    <li>
                      <p>
                        The Platform may contain links to external sites. We are
                        not responsible for their content and disclaim all
                        liability from use of them.
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
                        Services are provided "as is" without warranties. We are
                        not responsible for internet connectivity issues,
                        charges from your provider, or your device running out
                        of battery.
                      </p>
                    </li>
                    <li>
                      <p>
                        We may update the Platform/App but do not guarantee
                        ongoing compatibility with all devices.
                      </p>
                    </li>
                    <li>
                      <p>
                        We may terminate the service without notice, and you
                        must cease usage if so.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Limitation of Liability</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>
                        Nothing in these terms limits liability for death,
                        personal injury, fraud, or anything else not permitted
                        under law.
                      </p>
                    </li>
                    <li>
                      <p>
                        We accept no liability for losses beyond our control,
                        business losses, data loss, or indirect damages.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Privacy Policy</p>
                  <p className="mt-2 ml-6">
                    Use of the Platform is also governed by our Privacy Policy.
                  </p>
                </li>

                <li>
                  <p className="font-bold mt-4">General</p>
                  <ul className="list-disc pl-5 mt-3 space-y-2">
                    <li>
                      <p>You may not transfer your rights under these terms.</p>
                    </li>
                    <li>
                      <p>
                        These terms may be updated at any time, and continued
                        use constitutes acceptance.
                      </p>
                    </li>
                    <li>
                      <p>
                        This agreement is governed by the law of England and
                        Wales, with disputes subject to their courts.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-bold mt-4">Changes</p>
                  <p className="mt-2 ml-6">
                    The Service Provider may periodically update these terms and
                    will post the new version on this page. These terms are
                    effective as of 9 August 2025.
                  </p>
                </li>

                <li>
                  <p className="font-bold mt-4">Contact Us</p>
                  <p className="mt-2 ml-6">
                    For questions or suggestions, contact us at{" "}
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
