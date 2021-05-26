export default function TestimonialItem(props) {
  return (
    <>
      <div className="col w-full sm:w-1/3 md:w-1/6 mx-4 text-center">
        <img src={props.awardLogo} className="w-20 h-32" />
        <span className="block w-32 font-bold text-center mx-auto">{props.awardName}</span>
        <p>{props.awardText}</p>
      </div>
    </>
  );
}
