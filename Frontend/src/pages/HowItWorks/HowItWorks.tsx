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
        <div className="text-center my-10">
          <p className="text-base font-medium text-gray-800 max-w-sm mx-auto leading-relaxed px-2">
            Jump into pools of live online events.
          </p>
          <p className="text-base font-medium text-gray-800 max-w-sm mx-auto mt-2 leading-relaxed px-2">
            Talk to members we know you'll Clic with.
          </p>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          How It Works
        </h2>

        <article className="">
          <h4 className="gill-sans-bold text-2xl">1. Sign up</h4>
          <p className="text-2xl">
            Complete a questionnaire to become a Clic Club member. 
            Membership gives you access to live online events - called pools - 
            at which you speak to members we pooled together especially for that event.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">2. Register for a pool </h4>
          <p className="text-2xl">
            The pools are live, online and require you to turn on your video camera. 
            In a series of short video dates, you'll speak to members we select for that pool.
            Connect from the inside out, through conversation, and not the outside in, based on photos.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">3. Download the app</h4>
          <p className="text-2xl">
            You can download the app after you sign up for membership or register for an event.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">4. Join the pool </h4>
          <p className="text-2xl">
            Turn on your video camera and show up on time. 
            Go to the pool page in the App and press Join. Relax and be yourself. 
            The app will start presenting members for you to video-date.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">5. Did you Clic?</h4>
          <p className="text-2xl">
            Each video date and pool has a fixed duration. 
            If you Clic with your date, you'll have the option to extend it. 
            If they also Clic'd with you, the date will be extended. 
            But remember that each extension could reduce the time available to speak to others in the pool.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">6. Feedback</h4>
          <p className="text-2xl">
            As we work on improving your experience, 
            we would love to hear your thoughts. 
            Please complete the short feedback form after each date.
          </p>
          <br />
          <hr className="border-black" />
          <br />
        </article>

      </div>
    </section>
  );
}
