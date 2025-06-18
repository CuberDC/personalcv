import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useTranslation } from "react-i18next";
import "./ProjectDetails.scss";

export default function ProjectDetails() {
  const {isDark} = useContext(StyleContext);
  const { t } = useTranslation();

  return (
    <div className="main">
      {/* AI-Powered Customer Service Chatbot */}
      <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="ai-chatbot-project">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("projects.projects.0.projectName")}
            </h2>
            
            {/* 技术栈部分 - 移到项目描述之前 */}
            {/* <div className="tech-stack-section" id="ai-chatbot-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("projects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>Flask</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>MySQL</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>Python</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>JavaScript</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>HTML/CSS</span>
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("projects.projects.0.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("projects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                <li>{t("projects.projects.0.features.0")}</li>
                <li>{t("projects.projects.0.features.1")}</li>
                <li>{t("projects.projects.0.features.2")}</li>
                <li>{t("projects.projects.0.features.3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* Intelligent Document Analysis System */}
      <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="document-ai-project">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("projects.projects.1.projectName")}
            </h2>
            
            {/* 技术栈部分 - 移到项目描述之前 */}
            {/* <div className="tech-stack-section" id="document-ai-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("projects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>FastAPI</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>React</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>MySQL</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>JWT</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>Python</span>
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("projects.projects.1.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("projects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                <li>{t("projects.projects.1.features.0")}</li>
                <li>{t("projects.projects.1.features.1")}</li>
                <li>{t("projects.projects.1.features.2")}</li>
                <li>{t("projects.projects.1.features.3")}</li>
                <li>{t("projects.projects.1.features.4")}</li>
                <li>{t("projects.projects.1.features.5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* Real-time AI Emotion Recognition Platform */}
      <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="emotion-ai-project">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("projects.projects.2.projectName")}
            </h2>
            
            {/* 技术栈部分 - 移到项目描述之前 */}
            {/* <div className="tech-stack-section" id="emotion-ai-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("projects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>Flask</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>PyTorch</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>YOLO</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>React</span>
                  <span className={isDark ? "dark-mode tech-tag" : "tech-tag"}>Docker</span>
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("projects.projects.2.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("projects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                <li>{t("projects.projects.2.features.0")}</li>
                <li>{t("projects.projects.2.features.1")}</li>
                <li>{t("projects.projects.2.features.2")}</li>
                <li>{t("projects.projects.2.features.3")}</li>
                <li>{t("projects.projects.2.features.4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* Company Projects Section */}
      {/* Machine Section Data Center */}
      {/* <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="machine-data-center">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("companyProjects.projects.0.projectName")}
            </h2>
            <p className={isDark ? "dark-mode project-duration" : "project-duration"}>
              {t("companyProjects.projects.0.duration")}
            </p> */}
            
            {/* 技术栈部分 */}
            {/* <div className="tech-stack-section" id="machine-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("companyProjects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  {t("companyProjects.projects.0.techStack", { returnObjects: true }).map((tech, index) => (
                    <span key={index} className={isDark ? "dark-mode tech-tag" : "tech-tag"}>{tech}</span>
                  ))}
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            {/* <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("companyProjects.projects.0.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("companyProjects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                {t("companyProjects.projects.0.features", { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade> */}

      {/* HSE Production Platform */}
      {/* <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="hse-platform">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("companyProjects.projects.1.projectName")}
            </h2>
            <p className={isDark ? "dark-mode project-duration" : "project-duration"}>
              {t("companyProjects.projects.1.duration")}
            </p> */}
            
            {/* 技术栈部分 */}
            {/* <div className="tech-stack-section" id="hse-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("companyProjects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  {t("companyProjects.projects.1.techStack", { returnObjects: true }).map((tech, index) => (
                    <span key={index} className={isDark ? "dark-mode tech-tag" : "tech-tag"}>{tech}</span>
                  ))}
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            {/* <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("companyProjects.projects.1.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("companyProjects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                {t("companyProjects.projects.1.features", { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade> */}

      {/* Warehouse Management System Improvement */}
      {/* <Fade bottom duration={1000} distance="20px">
        <div className="project-details-section" id="warehouse-system">
          <div className="project-detail-container">
            <h2 className={isDark ? "dark-mode project-detail-title" : "project-detail-title"}>
              {t("companyProjects.projects.2.projectName")}
            </h2>
            <p className={isDark ? "dark-mode project-duration" : "project-duration"}>
              {t("companyProjects.projects.2.duration")}
            </p> */}
            
            {/* 技术栈部分 */}
            {/* <div className="tech-stack-section" id="warehouse-tech">
              <div className="tech-container">
                <h3 className={isDark ? "dark-mode tech-title" : "tech-title"}>
                  {t("companyProjects.techStack.title")}
                </h3>
                <div className="tech-tags">
                  {t("companyProjects.projects.2.techStack", { returnObjects: true }).map((tech, index) => (
                    <span key={index} className={isDark ? "dark-mode tech-tag" : "tech-tag"}>{tech}</span>
                  ))}
                </div>
              </div>
            </div> */}
            
            {/* 分隔线 */}
            {/* <div className="section-divider"></div>
            
            <p className={isDark ? "dark-mode project-detail-desc" : "project-detail-desc"}>
              {t("companyProjects.projects.2.projectDesc")}
            </p>
            <div className="project-features">
              <h3 className={isDark ? "dark-mode features-title" : "features-title"}>
                {t("companyProjects.features.title")}
              </h3>
              <ul className={isDark ? "dark-mode features-list" : "features-list"}>
                {t("companyProjects.projects.2.features", { returnObjects: true }).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade> */}
    </div>
  );
}