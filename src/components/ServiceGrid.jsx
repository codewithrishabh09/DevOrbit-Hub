import { services } from "../data/siteData.js";
import { Card } from "./Card.jsx";

export function ServiceGrid({ detailed = false }) {
  return (
    <div className="card-grid service-grid">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Card key={service.title}>
            <div className="card-icon"><Icon size={24} /></div>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <span className="stack-line">{service.stack}</span>
            {detailed && (
              <ul className="micro-list">
                <li>Discovery, roadmap, architecture</li>
                <li>Production build and QA</li>
                <li>Launch support and iteration</li>
              </ul>
            )}
          </Card>
        );
      })}
    </div>
  );
}
