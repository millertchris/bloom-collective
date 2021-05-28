export default function TestimonialItem(props) {
  return (
    <>
      <div className="col">
        <img src={props.awardLogo} className="w-20 h-32" />
        <span className="title block font-bold text-center mx-auto">
          {props.awardName}
        </span>
        <p className="subtitle">{props.awardText}</p>
      </div>
    </>
  );
}
