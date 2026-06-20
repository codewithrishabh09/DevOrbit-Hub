import { ExternalLink, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data/siteData.js";
import { Card } from "./Card.jsx";

export function ProjectGrid() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const matchesQuery = `${project.title} ${project.copy} ${project.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="filter-bar">
        <div className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects" />
        </div>
        <div className="segmented">
          {categories.map((item) => (
            <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {filtered.map((project) => (
          <Card key={project.title} className="project-card">
            <img src={project.image} alt="" />
            <div>
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="card-actions">
                <button><ExternalLink size={16} /> Live Demo</button>
                <button><Github size={16} /> Repository</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
