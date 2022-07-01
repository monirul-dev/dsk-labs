import useFetch from "../../hooks/useFetch";
import classes from "./Faq.module.css";

interface IFaq {
  id: string;
  question: string;
  answer: string;
}
interface IFaqs extends Array<IFaq> {}

export default function Faq() {
  const faq = useFetch<IFaqs>("./data/faq.json", [
    {
      id: "",
      question: "",
      answer: "",
    },
  ]);
  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        {faq.map((data) => {
          return (
            <div
              className={`row ${classes.faq_item} d-flex align-items-stretch`}
              key={data.id}
            >
              <div className="col-lg-5">
                <i className="bi bi-question-octagon"></i>
                <h4>{data.question}</h4>
              </div>
              <div className="col-lg-7">
                <p>{data.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
