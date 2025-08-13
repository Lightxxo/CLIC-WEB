"use client";

import { CLIC } from "@/components/CLIC/CLIC";

export default function HowItWorks() {


  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Animation container */}
        <div className="mb-6 p-6 rounded-lg bg-[#CDA0C3] flex justify-center items-center">
          <CLIC color="#B46E28" />
        </div>

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
            Complete a short questionnaire to become a member of Clic Club. 
            Clic Club gives you access to pools of like-minded people to connect with from the inside out, 
            through conversation, and not the outside in based on photos.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">2. RSVP for a pool</h4>
          <p className="text-2xl">
            (Dating) Pools are live online events at which you speak to a series of members in short video dates. 
            We pool together the most appropriate members for each event.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">3. Download the app</h4>
          <p className="text-2xl">
            Download here for Apple iOS and here for Android. 
            You can download the app after you sign up for membership or after you've RSVP'd for a pool, 
            but you'll need the app to join a live pool. Once your membership is approved, 
            you can navigate to “Pools” on the top right hand on your screen to explore upcoming events.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">4. Jump into a pool!</h4>
          <p className="text-2xl">
            Make sure your video camera is on. Join the live pool through the app.
            <br />• Click on the Pools icon (the waves in the middle of the bottom of your screen)
            <br />• Under Confirmed Pools, click on your Pool
            <br />• Press the big “Go live” button.<br />
            Be punctual because Pools go live as scheduled. Once you've joined, 
            the app will start presenting members for you to video-date one at a time. 
            There will be time for you to catch your breath between video dates.
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">5. Did you Clic?</h4>
          <p className="text-2xl">
            The events and video dates are scheduled for a fixed duration. 
            If you Clic with a member, you'll have the option to extend your date. 
            If they also Clic'd with you, you can speak to each other for a bit longer. 
            But remember that each extension could reduce the remaining time available 
            to speak to other members at the event. Is a bird in hand worth two in the bush?
          </p>
          <br />
          <hr className="border-black" />
          <br />
          <h4 className="gill-sans-bold text-2xl">6. Feedback</h4>
          <p className="text-2xl">
            We're just starting out. As we work on improving your experience, 
            we would love to hear your thoughts. Please complete the short feedback form after each date.
          </p>
          <br />
          <hr className="border-black" />
          <br />
        </article>


        {/* <div ref={containerRef} className="relative">
         
          <div
            className="absolute w-[2px] bg-black rounded"
            style={{
              top: lineTop,
              left: lineLeft,
              height: lineHeight,
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

         
          {steps.map((step, index) => {
            // Split first line as title, rest as description
            const [title, ...descLines] = step.split("\n");
            const description = descLines.join("\n");

            return (
              <div
                key={index}
                className="relative flex items-start mb-16 last:mb-0"
              >
                
                <div
                  ref={
                    index === 0
                      ? firstCircleRef
                      : index === steps.length - 1
                      ? lastCircleRef
                      : undefined
                  }
                  className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-black bg-white text-gray-700 font-bold shrink-0 mt-1 select-none"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>

           
                <div
                  className="h-[2px] bg-black mt-6 ml-3 mt-8"
                  style={{ width: 28, marginLeft: "0px" }}
                  aria-hidden="true"
                />

                
                <div className="flex-1">
                  <Card className="shadow-sm border-2 border-black">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {title}
                      </h3>
                      <p className="whitespace-pre-line text-gray-800 text-sm sm:text-base leading-relaxed">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
