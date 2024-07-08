import React, { useEffect, useState } from "react";
import WorkItems from "./WorkItems";
import { projectsData, projectsNav } from "./Data";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjectsData = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjectsData);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent})
    setActive(index)
  }

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item, index) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
