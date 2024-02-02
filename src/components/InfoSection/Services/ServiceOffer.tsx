import Link from "next/link";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export type TOfferCard = {
  id?: number;
  title: string;
  img: string;
  paragraph: string;
  index?: number; // Add this line
};

export const framerMotionsInView = {
  initial: { opacity: 0, y: 100 }, // Start from the left
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: id * 0.2 },
  }),
};

const ServiceOfferCard = ({ id, title, img, paragraph }: TOfferCard) => (
  <motion.div
    variants={framerMotionsInView}
    whileInView="animate"
    custom={id} 
    initial="initial"
    viewport={{
      once:true
    }}
    className={styles.article}
  >
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
  </motion.div>
);

export default ServiceOfferCard;
