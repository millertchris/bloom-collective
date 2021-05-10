export default function TestimonialItem(props) {
  return (
    <>
      <div className="col flex flex-col justify-center items-baseline w-28">
        <img src={props.awardLogo} className="w-20 h-32" />
        <span className="font-bold text-center">{props.awardName}</span>
      </div>
    </>
  );
}
