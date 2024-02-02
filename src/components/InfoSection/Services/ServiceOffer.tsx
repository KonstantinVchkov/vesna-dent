import Link from "next/link";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
export type TOfferCard = {
  id?: number;
  title: string;
  img: string;
  paragraph: string;
};
const ServiceOfferCard = ({ title, img, paragraph }: TOfferCard) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={styles.article}
  >
    <figure className={styles.figure}>
      <img src={img} alt="dental-img.png" />
    </figure>
    <div className={styles.articleBody}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Link href={""} className={styles.readMore}>
        Прочитајте повеќе
      </Link>
    </div>
  </motion.div>
);

export default ServiceOfferCard;
