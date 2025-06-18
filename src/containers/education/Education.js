import React from "react";
import "./Education.scss";
import { useTranslation } from "react-i18next";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  const { t } = useTranslation();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t('education.title')}</h1>
        <div className="education-card-container">
          {(t('education.schools', { returnObjects: true }) || educationInfo.schools).map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
