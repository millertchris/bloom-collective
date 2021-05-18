export default function TestimonialItem(props) {
  return (
    <div className="col item">
      <p>{props.text}</p>
      <div className="image">
        <img src={props.personPhoto} />
      </div>
      <h3 className="name">{props.personName}</h3>
      <h4 className="position">{props.personTitle}</h4>
    </div>
  );
}
