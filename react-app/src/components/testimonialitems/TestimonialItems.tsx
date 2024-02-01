import useFetch from "../../hooks/useFetch";
import classes from "./TestimonialItems.module.css";

interface ITestimonial {
  id: string;
  avatar: string;
  name: string;
  designation: string;
  testimonial: string;
}

interface ITestimonials extends Array<ITestimonial> {}

export default function TestimonialItems() {
  const testimonials = useFetch<ITestimonials>("/data/testimonial.json", [
    {
      id: "",
      avatar: "",
      name: "",
      designation: "",
      testimonial: "",
    },
  ]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          {testimonials.map((data) => {
            return (
              <div className="col-lg-6 mb-3" key={data.id}>
                <div className={`${classes.testimonial_item}`} key={data.id}>
                  {/* <img src={data.avatar} className="testimonial-img" alt="" /> */}
                  <h3>{data.name}</h3>
                  <h4>{data.designation}</h4>
                  <p>
                    <i
                      className={`bx bxs-quote-alt-left  ${classes.quote_left}`}
                    ></i>
                    {data.testimonial}
                    <i
                      className={`bx bxs-quote-alt-right ${classes.quote_right}`}
                    ></i>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
