export default function TestimonialItem(props) {
  return (
    <div className="col text-center max-w-2xl py-5 mx-24">
      <p className="serif py-5 text-center sm:text-xl">{props.text}</p>
      <div className="w-16 mx-auto">
        <img src={props.personPhoto} className="rounded-full w-16 h-16" />
      </div>
      <h4 className="font-bold text-xl py-2">{props.personName}</h4>
      <h5>{props.personTitle}</h5>
    </div>
  );
}
