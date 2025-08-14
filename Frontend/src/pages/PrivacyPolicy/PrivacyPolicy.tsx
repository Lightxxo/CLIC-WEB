import React from "react";
import { motion } from "framer-motion";

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen py-12 bg-[#ABABAB] px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">

            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Privacy Policy
              </h1>

              <ul className="list-disc pl-5 mt-3">
                <li>
                  <p className="mt-3 text-sm">
                    This privacy policy or notice (referred to as the “notice")
                    applies to the Clic Club platform, including its website,
                    the app for mobile devices (the "App") and any live events,
                    collectively referred to as, the “Platform", which has been
                    developed by Clic Club Ltd., a company incorporated in the
                    United Kingdom (the "Service Provider", “us" or "we"). This
                    service is provided "AS IS".
                  </p>
                </li>
                <li>
                  <p>
                    The notice describes how and why we, the Service Provider,
                    as data controller, obtain, store and process personal data
                    when providing our services. Personal data is information
                    relating to you that enables you to be identified, for
                    example, your name, email address, payment details and
                    information about your access to our website(s) or App.
                  </p>
                </li>
                <li>
                  <p>
                    This privacy notice is intended to meet our duties of
                    Transparency. We process your information on the basis of
                    the applicable legislation, including the GDPR and the Data
                    Protection Act 2018.
                  </p>
                </li>
              </ul>
            </header>

            <section className="space-y-4">
              <ol className="list-decimal list-outside space-y-4 pl-6">
                <li>
                  <p className=" font-bold mt-6">
                    What information does the Platform obtain and how is it
                    used?
                  </p>

                  <p className=" mt-4 ml-10">
                    a.{"    "}
                    <span className="font-bold">User Provided Information</span>
                  </p>
                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      <p>
                        The Platform acquires the information, including
                        personal data, which you supply when you sign up on the
                        website(s), for live events and/or download and register
                        the App. Registration with the Service Provider is not
                        mandatory but you might not be able to use some of the
                        features offered by the Platform unless you register
                        with us.
                      </p>
                    </li>
                  </ul>

                  <p className=" mt-4 ml-10">
                    b.{"    "}
                    <span className="font-bold">Data</span>
                  </p>

                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      <p>
                        Personal data: Personal data means any information about
                        an individual from which that person can be identified.
                        It does not include anonymised data, where the identity
                        and identifying information has been removed. However,
                        it does include 'indirect identifiers' or 'pseudonymous
                        data' (i.e. information which alone doesn't identify an
                        individual but, when combined with certainadditional and
                        reasonably accessible information, could be attributed
                        to a particular person).{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <p>
                        Depending on the type and level of engagement you have
                        with us, we may collect the following categories of
                        personal data: Personal Information such as ID, name and
                        e-mail address, drivers licence or other ID, contact
                        details, hobbies and interests, photos, marital status,
                        gender, transactional information (including Services
                        purchased), as well as any other contact or other
                        information you choose to provide us or upload to our
                        systems in connection with the Platform.
                      </p>
                    </li>

                    <li>
                      <p>
                        If attend a live event, we may take photographs and
                        videos (Imagery) of the event and of people who attend.
                        Imagery in which you can be identified is classed as
                        personal data.
                      </p>
                    </li>

                    <li>
                      <p>
                        Financial data: Financial data when using our Platform
                        includes your bank account and payment card details,
                        including your bank account number, sort code, IBAN,
                        BIC, and bank address. Payment card details will be
                        collected directly by our payment processor and we won’t
                        receive them. However, in certain limited cases, we may
                        receive bank account details in the context of
                        administering refunds.
                      </p>
                    </li>

                    <li>
                      <p>
                        Behavioural data: we may collect inferred or assumed
                        information relating to your behaviour and interest,
                        based on your online activity and on our Platform. This
                        is typically aggregated and grouped into “segments”.
                      </p>
                    </li>

                    <li>
                      <p>
                        Aggregated data: We also collect, use and share
                        aggregated data such as statistical or demographic data
                        for any purpose. Aggregated data could be derived from
                        your personal data but is not considered personal data
                        in law as this data will not directly or indirectly
                        reveal your identity. For example, we may aggregate
                        personal data to understand and improve our Services.
                        However, if we combine or connect aggregated data with
                        your personal data so that it can directly or indirectly
                        identify you, we treat the combined data as personal
                        data which will be used in accordance with this privacy
                        notice.
                      </p>
                    </li>

                    <li>
                      Data from Third parties: We may also receive personal data
                      about you from various third parties, including: Technical
                      Data from third parties, including analytics providers
                      such as Google; Technical Data from affiliate networks
                      through whom you have accessed our website(s) or App;
                      Identity and Contact Data from social media platforms when
                      you log in to our website(s) or mobile app using such
                      social media platforms; Contact, Financial and Transaction
                      Data from providers of technical, payment and delivery
                      services.
                    </li>
                  </ul>

                  <p className=" mt-4 ml-10">
                    c.{"    "}
                    <span className="font-bold">
                      Automatically Collected Information
                    </span>
                  </p>
                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      <p>
                        We keep track of user activity in relation to the types
                        of services you use, configuration of your computers and
                        performance metrics related to the use of our Platform.
                        Specifically, the App may also collect certain
                        information automatically, including, but not limited
                        to, the type of mobile device you use, your mobile
                        devices unique device ID, the IP address of your mobile
                        device, your mobile operating system, the type of mobile
                        Internet browsers you use, and information about the way
                        you use the App.
                      </p>
                    </li>
                  </ul>

                  <p className=" mt-4 ml-10">
                    d.{"    "}
                    <span className="font-bold">
                      Does the App collect precise real time location
                      information of the device?
                    </span>
                  </p>
                  <ul className="list-disc pl-5 mt-3">
                    <li>
                      <p>
                        This App collects your device's location, which helps us
                        determine your approximate geographical location and
                        make use of in below ways:
                      </p>
                    </li>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>
                        Geolocation Services: The Service Provider utilizes
                        location data to provide features such as personalized
                        content, relevant recommendations, and location-based
                        services.
                      </li>
                      <li>
                        Analytics and Improvements: Aggregated and anonymized
                        location data helps the Service Provider to analyze user
                        behavior, identify trends, and improve the overall
                        performance and functionality of the Platform generally
                        and the App specifically.
                      </li>
                      <li>
                        Third-Party Services: Periodically, the Service Provider
                        may transmit anonymized location data to external
                        services. These services assist them in enhancing the
                        Platform generally and the App specifically to optimize
                        their offerings.
                      </li>
                    </ul>
                  </ul>
                </li>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">How We Collect Your Data</p>
                </li>
                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      We may collect your personal data in one of the following
                      ways: when you visit our website(s) or App; when you
                      create an account; when you engage with us on social
                      media; when you contact us with queries; when you review
                      our services; when you apply for an employment vacancy
                      with us; when you request marketing to be sent to you; or
                      when you sign up to and/or attend one of our events.
                    </p>
                  </li>
                </ul>

                <li>
                  <p className="font-bold mt-4">How We Use Your Data</p>
                </li>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <p>
                      We will only collect, process and use your personal data
                      for the following purposes, to: provide our services,
                      improve our services, make our marketing more relevant to
                      you and your interests, meet our legal responsibilities or
                      exercising legal rights or claims.
                    </p>
                  </li>
                  <li>
                    <p>
                      We may also use the information you provide to contact you
                      from time to time to provide you with important
                      information, required notices and marketing promotions
                      aimed at optimizing our services, the App, live events and
                      the user experience generally.
                    </p>
                  </li>
                  <li>
                    <p>
                      As part of our legal responsibilities and rights, we may
                      be required to investigate allegations of misconduct or
                      breach of our rules of play and/or engage in litigation or
                      other court, regulatory, enforcement or administrative
                      process or action.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">Legal basis</p>
                </li>
                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      The Service Provider will only collect and process your
                      personal data where we have a legal basis to do so. As a
                      data controller, the legal basis for our collection and
                      use of your personal data varies depending on the manner
                      and purpose for which we collected it. We will only
                      collect personal data from you if either:
                    </p>
                    <ul className="list-circle ml-6 space-y-2">
                      <li>we have your consent to do so</li>
                      <li>
                        we need your personal data to perform a contract with
                        you, e.g., to provide you with our services
                      </li>
                      <li>
                        pursuing our legitimate interests in a way that you
                        might reasonably expect to be a part of running our
                        business and that does not significantly impact your
                        interests, rights and freedoms, for example, showing our
                        advertisements to you as you browse the internet
                      </li>
                      <li>
                        we have a legal obligation to collect or disclose
                        personal data from you (e.g. in suspected instances of
                        fraud where we need to give personal data to the
                        National Crime Agency (NCA) or a government body).
                      </li>
                    </ul>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">
                    Why we process your personal data
                  </p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>This is why we process your personal data:</p>
                    <ul className="list-circle ml-6 space-y-2 mt-2">
                      <li>
                        To provide the Services: This processing is necessary to
                        perform the contract governing our provision of the
                        services on the Platform, including: managing
                        subscriptions on the Services, for ID and KYC
                        verification purposes and providing access to the
                        Services and its functionality; ensuring that your
                        device(s) are secured and you have the requisite
                        protection; scanning your emails and device(s) to ensure
                        we can carry out the services and secure your device(s);
                        communicating with you through our chat functions;
                        providing customer support; setting up and managing your
                        account; to process and complete transactions, and send
                        related information, including transaction confirmations
                        and invoices; keeping you up to date with the services
                        on our Platform and any new features, technical alerts,
                        security notifications and administrative communications
                        (including by email); providing any other elements of
                        the services to you; and for any other purposes about
                        which we notify customers and users.
                      </li>
                      <li>
                        Troubleshooting: To track technical issues that might be
                        occurring on our products and services.
                      </li>
                      <li>
                        Imagery: We may show imagery of you on our website(s),
                        our App, our social media pages and/or in marketing. You
                        may withdraw your consent by telling us that you do not
                        want us to use any Imagery taken of you.
                      </li>
                      <li>
                        Marketing: To prepare and send you marketing
                        communications about our Platform, events and services
                        we think you might be interested in, or to use your
                        personal data for our for marketing purposes, e.g. on
                        our website(s), social media page(s) and/or with our
                        marketing partners.
                      </li>
                      <li>
                        Security: To keep our Services, together with associated
                        systems, operational and secure.
                      </li>
                    </ul>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">
                    Do third parties see and/or have access to information
                    obtained by the Platform?
                  </p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      Aggregated, anonymized data is periodically transmitted to
                      external services to aide us in improving the App and our
                      services. We may share otherwise your information with
                      third parties in the ways that are described in this
                      notice.
                    </p>
                  </li>
                  <li>
                    <p>
                      Please note that the Platform utilizes third-party
                      services that have their own privacy policy about handling
                      data.
                    </p>
                  </li>
                  <li>
                    <p>
                      Please note that the Platform utilizes third-party
                      services that have their own privacy policy about handling
                      data.
                    </p>
                  </li>
                  <li>
                    <p>
                      The Service Provider may disclose User Provided and
                      Automatically Collected Information:
                    </p>
                    <ul className="list-circle ml-6 space-y-2">
                      <li>
                        as required by law, such as to comply with a subpoena,
                        or similar legal process;
                      </li>
                      <li>
                        when we believe in good faith that disclosure is
                        necessary to protect our rights, protect your safety or
                        the safety of others, investigate allegations of
                        misconduct or breach of our rules of play and/or for the
                        purposes of litigation or other court, regulatory,
                        enforcement or administrative process or action;
                      </li>
                      <li>
                        with their trusted services providers who work on their
                        behalf, do not have an independent use of the
                        information we disclose to them, and have agreed to
                        adhere to the rules set forth in this privacy statement;
                      </li>
                    </ul>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">Children</p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      The Service Provider does not use the Platform to
                      knowingly solicit data from or market to children under
                      the age of 13.
                    </p>
                  </li>

                  <li>
                    <p>
                      The Platform does not address anyone under the age of 13.
                      The Service Provider does not knowingly collect personally
                      identifiable information from children under 13 years of
                      age. In the case the Service Provider discover that a
                      child under 13 has provided personal information, the
                      Service Provider will immediately delete this from their
                      servers. If you are a parent or guardian and you are aware
                      that your child has provided us with personal information,
                      please contact the Service Provider (hello@clicclub.cc) so
                      that they will be able to take the necessary actions.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">Security</p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      The Service Provider are concerned about safeguarding the
                      confidentiality of your information. The Service Provider
                      provide physical, electronic, and procedural safeguards to
                      protect information we process and maintain. For example,
                      we limit access to this information to authorized
                      employees and contractors who need to know that
                      information in order to operate, develop or improve their
                      Platform. Please be aware that, although we endeavor
                      provide reasonable security for information we process and
                      maintain, no security system can prevent all potential
                      security breaches.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">
                    {" "}
                    Transferring Your Data Outside the UK and EEA
                  </p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      The personal data we collect from you may be transferred
                      to, and stored at, destinations outside the UK and
                      European Economic Area ("EEA") using legally-provided
                      mechanisms to lawfully transfer data across borders. It
                      may also be processed by staff operating outside the UK
                      and EEA who work for us or for one of our suppliers. Such
                      staff may be engaged in, among other things, the provision
                      of our services to you. We will take all steps necessary
                      to ensure that your data is treated securely and in
                      accordance with this privacy notice.
                    </p>
                  </li>
                  <li>
                    <p>
                      If we share your personal data outside of the UK or
                      European Economic Area, we ensure that there is an
                      appropriate transfer mechanism in place to protect your
                      personal data and comply with our data protection
                      obligations. Please contact us at hello@clicclub.cc.if you
                      want further information on the countries to which we may
                      transfer personal data and the specific mechanism used by
                      us when transferring your personal data outside the EEA.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">
                    {" "}
                    What are my opt-out rights?
                  </p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      You can halt all collection of personal information by the
                      Platform easily by uninstalling the App and deleting your
                      Clic Club account.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4">
                    {" "}
                    Data Retention Policy, Managing Your Information
                  </p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      The Service Provider will retain User Provided data for as
                      long as you use the Platform or App and/or your account
                      and for a reasonable time thereafter. The Service Provider
                      will retain Automatically Collected information for up to
                      24 months and thereafter may store it in aggregate. If
                      you'd like the Service Provider to delete User Provided
                      Data that you have provided via the websites(s) or App,
                      please contact them at hello@clicclub.cc and we will
                      respond in a reasonable time. Please note that some or all
                      of the User Provided Data may be required in order for the
                      App to function properly.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4"> Changes</p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      This notice may be updated from time to time for any
                      reason. The Service Provider will notify you of any
                      changes to the notice by updating this page with the new
                      Privacy Policy. You are also advised to consult this
                      Privacy Policy regularly for any changes, in case you miss
                      a notice and because continued use is deemed approval of
                      all changes.
                    </p>
                  </li>
                  <li>This notice is effective as of 9 August 2025.</li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4"> Your Consent</p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      By using the Platform, including the App, you give your
                      consent to the Service Provider to process of your
                      information as set forth in this Privacy Policy or notice
                      now and as amended by us. "Processing,” means using
                      cookies on a computer/hand held device or using or
                      touching information in any way, including, but not
                      limited to, collecting, storing, deleting, using,
                      combining and disclosing information.
                    </p>
                  </li>
                </ul>

                <li>
                  {"    "}
                  <p className=" font-bold mt-4"> Contact us</p>
                </li>

                <ul className="list-disc pl-5 mt-3">
                  <li>
                    <p>
                      If you have any questions regarding privacy while using
                      the Platform, or have questions about the practices,
                      please contact the Service Provider via email at
                      <a
                        className="underline ml-1"
                        href="mailto:hello@clicclub.cc"
                      >
                        hello@clicclub.cc
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </ol>
            </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
