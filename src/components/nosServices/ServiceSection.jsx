import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import "./nosServices.css";
import { serviceData } from "./serviceData";

const ServiceSection = () => {
  const [services, setServices] = useState([]);

  const loadServices = () => setServices([...serviceData]);

  useEffect(() => loadServices(), []);

  return (
    <section
      id="services"
      data-aos="fade-down-big"
      className="service_section d-flex flex-column justify-content-between align-items-center"
    >
      <h2 className="section_title text-center">Nos Services</h2>
      <div className="card_container">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
