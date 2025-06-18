import React, {useContext} from "react";
import "./StartupProjects.scss";
import {companyProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from 'react-i18next';

export default function CompanyProject() {
  const { t } = useTranslation();
  const {isDark} = useContext(StyleContext);
  if (!companyProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="company-projects">
        <div>
          <h1 className="skills-heading">{t(companyProjects.title)}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {t(companyProjects.subtitle)}
          </p>

          <div className="projects-container">
            {companyProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={t(project.projectName)}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {t(project.displayName) || t(project.projectName)}
                    </h5>
                    {project.duration && (
                      <p
                        className={
                          isDark ? "dark-mode project-duration" : "project-duration"
                        }
                      >
                        {t(project.duration)}
                      </p>
                    )}
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle project-desc" : "card-subtitle project-desc"
                      }
                    >
                      {t(project.projectDesc)}
                    </p>
                    {/* {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
} 