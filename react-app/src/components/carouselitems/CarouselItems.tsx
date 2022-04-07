import { Carousel } from "react-bootstrap";
import data from "../../data/home/carousle.json";
import classes from "./CarouselItems.module.css";

export default function CarouselItems() {
  return (
    <section className={classes.hero}>
      <Carousel fade>
        {data.map((data) => {
          return (
            <Carousel.Item
              interval={10000}
              style={{ backgroundImage: `${data.imagePath}` }}
            >
              <div className={classes.carousel_container}>
                <div className="container text-center">
                  <h2 className="animate__animated animate__fadeInDown">
                    {data.header}
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
