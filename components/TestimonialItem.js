export default function TestimonialItem(props) {
  return (
    <div className="col">
      <p className="serif py-5 text-center sm:text-xl">{props.text}</p>
      <div className="w-16">
        <img src={props.personPhoto} className="rounded-full w-16 h-16" />
      </div>
      <h4 className="font-bold text-xl">{props.personName}</h4>
      <h5>{props.personTitle}</h5>
    </div>
  );
}
