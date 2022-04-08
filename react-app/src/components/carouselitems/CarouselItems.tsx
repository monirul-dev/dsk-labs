import { Carousel } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import classes from "./CarouselItems.module.css";

export default function CarouselItems() {
  const carousel = useFetch("./data/home/carousel.json", [
    {
      id: "",
      heading: "",
      description: "",
      imagePath: "",
    },
  ]);
  return (
    <section className={classes.hero}>
      <Carousel fade>
        {carousel.map((data) => {
          return (
            <Carousel.Item
              key={data.id}
              interval={10000}
              style={{ backgroundImage: `${data.imagePath}` }}
            >
              <div className={classes.carousel_container}>
                <div className="container text-center">
                  <h2 className="animate__animated animate__fadeInDown">
                    {data.heading}
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    {data.description}
                  </p>
                  <a
                    href="#about"
                    className={`${classes.btn_get_started} animate__animated animate__fadeInUp scrollto`}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
        {/* <Carousel.Item
          interval={10000}
          style={{ backgroundImage: "url(images/slide/slide-1.jpg)" }}
        >
          <div className={classes.carousel_container}>
            <div className="container text-center">
              <h2 className="animate__animated animate__fadeInDown">
                Welcome to <span>Sailor</span>
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className={`${classes.btn_get_started} animate__animated animate__fadeInUp scrollto`}
              >
                Read More
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          interval={10000}
          style={{ backgroundImage: "url(images/slide/slide-2.jpg)" }}
        >
          <div className={classes.carousel_container}>
            <div className="container text-center">
              <h2 className="animate__animated animate__fadeInDown">
                Lorem Ipsum Dolor
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className={`${classes.btn_get_started} animate__animated animate__fadeInUp scrollto`}
              >
                Read More
              </a>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          interval={10000}
          style={{ backgroundImage: "url(images/slide/slide-3.jpg)" }}
        >
          <div className={classes.carousel_container}>
            <div className="container text-center">
              <h2 className="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                className={`${classes.btn_get_started} animate__animated animate__fadeInUp scrollto`}
              >
                Read More
              </a>
            </div>
          </div>
        </Carousel.Item> */}
      </Carousel>
    </section>
  );
}
