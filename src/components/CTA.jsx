import SectionHead from "./SectionHead";
import RippleButton from "./RippleButton";

const CTA = ({ rippleData, headData, style, wa = false }) => {
  return (
    <section className="flex flex-col px-3 items-center md:gap-6 gap-3">
      <SectionHead h1={"text-center"} data={headData} />
      <div className="max-w-54 w-full rounded-lg overflow-hidden">
        <RippleButton wa={wa} style={style} content={rippleData} />
      </div>
    </section>
  );
};

export default CTA;
