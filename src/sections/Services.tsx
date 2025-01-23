import React from "react";
import styles from "../styles/Services.module.css";
import { servicesData } from "@/utils/helpers";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section id="DSN Events Services" className={styles.servicesMainContainer}>
      <div className={styles.servicesHeaderContainer}>
        <h2 className={styles.servicesHeader}>OUR SERVICES</h2>
        <h2 className={styles.servicesHeading}>Services by DSN Décors</h2>
        <h3 className={styles.servicesSubHeading}>
          {`At DSN Events, we specialize in crafting extraordinary celebrations,
          ensuring every moment is cherished for a lifetime. From intimate
          gatherings to grand festivities, we provide seamless planning,
          creative execution, and impeccable service for a wide range of events.`}
        </h3>
      </div>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <div className={styles.servicesGrid} key={index}>
            <div className={styles.servicesCard}>
              <Image
                src={service.imgSrc}
                alt={`Services Img${service.id}`}
                height={200}
                width={200}
                priority
                className={styles.servicesImg}
              />
              <div className={styles.servicesInfo}>
                <h2 className={styles.servicesCategory}>{service.category}</h2>
                <h3 className={styles.servicesDesc}>{service.desc}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
