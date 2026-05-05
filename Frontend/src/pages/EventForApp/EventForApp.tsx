import { useFormContext } from "@/contexts/FormContext";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EventForApp = () => {
    const { data } = useFormContext();
    const { id } = useParams<{ id: string }>();
      const [searchParams] = useSearchParams();
  const refid = searchParams.get("refid");
  if (refid) localStorage.setItem("refid", refid);
    return (
        <section className="py-12 px-4 sm:px-8">
            <p className="max-w-3xl mx-auto mb-5">
            App isn't installed on your phone!
          </p>
            {data.token ?
                <div className="max-w-3xl mx-auto ">
                    <p className="text-2xl">
                        1. Download the app
                    </p>
                    <p className="text-2xl">
                        2. Press the <a href={"https://twoclicclub.com/eventForApp/" + id}
                            className="text-blue-700">
                            link
                        </a> again 
                    </p>
                </div>
                :
                <div className="max-w-3xl mx-auto ">
                    <p className="text-2xl">
                        1. <Link to="/signup" className="text-blue-600">Create an account</Link> &&nbsp;
                        <Link to="/login" className="text-blue-600">Login</Link>
                    </p>
                    <p className="text-2xl">
                        2. Get Approved
                    </p>
                    <p className="text-2xl">
                        3. Download the app
                    </p>
                    <p className="text-2xl">
                        4. Press the <a href={"https://twoclicclub.com/eventForApp/" + id}
                            className="text-blue-700">
                            link
                        </a> again 
                    </p>
                </div>}


        </section>
    );
};

export default EventForApp;