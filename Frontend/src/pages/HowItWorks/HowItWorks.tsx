"use client";

export default function HowItWorks() {
  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Animation container */}
        {/* <div className="mb-6 p-6 rounded-lg bg-[#CDA0C3] flex justify-center items-center">
          <CLIC color="#B46E28" />
        </div> */}

        {/* Tagline */}
        <div className="text-center mb-10">
          <p className="text-base font-medium text-[#005a2d] max-w-sm mx-auto leading-relaxed px-2">
            Jump into pools of live online events.
          </p>
          <p className="text-base font-medium text-[#005a2d] max-w-sm mx-auto mt-2 leading-relaxed px-2">
            Talk to members we know you'll Clic with.
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:hidden font-bold text-gray-900 text-center mb-14">
          How It Works
        </h2>

        <article className="">
          <h4 className="gill-sans-bold text-2xl">1. Sign up: Become a 2CC member</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>Complete a questionnaire to become a Two Clic Club member.</li>
            <li>
              Membership gives you access to live online events where you speak to a series of members we pooled
              together for that event.
            </li>
            <li>Once your membership is approved, sign up for events ("pools") to start chatting.</li>
          </ul>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">2. Download the app: You need the app to attend a pool and use the in-tool messaging</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>You can download the app after signing up for membership or when registering for an event.</li>
          </ul>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">3. Register for a pool: Connect from the inside out, through conversation, and not the outside in</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>Pools are live, online events lasting one to one and a half hours.</li>
            <li>You must turn on your video camera to participate.</li>
            <li>
              You&apos;ll join a series of short video dates ("bubbles") with members of the opposite sex
              consecutively.
            </li>
            <li>The guest list is curated from our pool of members.</li>
            <li>You can share pool details with friends you&apos;d like to bring along.</li>
          </ul>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">4. Join the pool</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>Log into the pool through the app on time and turn on your video camera.</li>
            <li>Go to the pools page (wave icon) and press Join.</li>
            <li>Relax and be yourself.</li>
            <li>The app will present members for consecutive two-person video-date "bubbles".</li>
          </ul>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">5. Did you Clic?</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>Each video date ("bubble") lasts 2-3 minutes (varies by pool/event).</li>
            <li>You can extend the date if both participants agree.</li>
            <li>After the date (or extensions), both participants are asked if they "Clic&apos;d".</li>
            <li>If both say yes, you can message each other in the app after the event.</li>
            <li>Pools have a fixed duration, so extending one bubble may reduce time for others.</li>
          </ul>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">6. Feedback</h4>
          <ul className="text-2xl list-disc pl-8">
            <li>Help us improve your experience.</li>
            <li>Complete the short feedback form after each date.</li>
          </ul>
          <br />
          {/* <hr className="border-black" /> */}
          <br />
        </article>
      </div>
    </section>
  );
}
