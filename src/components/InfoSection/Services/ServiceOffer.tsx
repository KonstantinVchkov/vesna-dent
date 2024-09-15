import Link from "next/link";
import styles from "./styles.module.scss";

export type TOfferCard = {
  id?: number;
  title: string;
  img: string;
  paragraph: string;
  index?: number;
};
const ServiceOfferCard = ({ id, title, img, paragraph }: TOfferCard) => (
  <div className={styles.article}>
    <figure className={styles.figure}>
      <img src={img} alt={title} />
    </figure>
    <div className={styles.articleBody}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Link href={`/services/${id}`} className={styles.readMore}>
        Read More
      </Link>
    </div>
  </div>
);

export default ServiceOfferCard;
