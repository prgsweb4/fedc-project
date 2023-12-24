import TestimCard from "../util/TestimCard";

const Testimonials = ({ data }) => {
  return (
    <section className="testimonials">
        <div className="container">
        <section className="testimonials-wrap">
            <p className="heading">What people say about us !</p>
                <div className="flex-items">
                {data.map((element, index) => {
                return <TestimCard key={index} data={element} />;
                })}
            </div>
            </section>
        </div>
    </section>
  );
};

export default Testimonials;