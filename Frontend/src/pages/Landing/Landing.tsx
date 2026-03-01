import Marquee from "react-fast-marquee";
import img_1 from "../../assets/2clic-1.svg";
import img_2 from "../../assets/2clic-2.svg";
import img_4 from "../../assets/2clic-4.svg";

export default function Landing() {

  return (
    <div>
<Marquee autoFill={true} speed={100} className="bg-[#AA3EEE] py-5">
  <img src={img_1} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={250} className="bg-[#0024F8] py-5" direction="right">
  <img src={img_2} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={100} className="bg-[#FF16D0] py-5">
  <img src={img_1} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={200} className="bg-[#FF6600] py-5" direction="right">
  <img src={img_4} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={150} className="bg-[#AA3EEE] py-5">
  <img src={img_1} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={250} className="bg-[#0024F8] py-5" direction="right">
  <img src={img_2} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={100} className="bg-[#FF16D0] py-5">
  <img src={img_1} className="mx-10 w-70" />
</Marquee>
<Marquee autoFill={true} speed={200} className="bg-[#FF6600] py-5" direction="right">
  <img src={img_4} className="mx-10 w-70" />
</Marquee>
    </div>
  );
}

