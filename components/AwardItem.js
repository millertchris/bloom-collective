export default function TestimonialItem({ awardLogo, awardName, awardText }) {
  return (
    <>
      <div className="col">
        <img src={awardLogo} className="w-20 h-32" />
        <span className="title">{awardName}</span>
        <p className="subtitle">{awardText}</p>
      </div>
    </>
  );
}
