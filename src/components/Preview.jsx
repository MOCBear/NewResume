import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useResume } from '../contexts/ResumeContext';
import MinimalTemplate from './templates/MinimalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import AcademicTemplate from './templates/AcademicTemplate';
import TechTemplate from './templates/TechTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import VibrantTemplate from './templates/VibrantTemplate';
import './Preview.css';

const templateMap = {
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
  academic: AcademicTemplate,
  tech: TechTemplate,
  elegant: ElegantTemplate,
  vibrant: VibrantTemplate
};

export default function Preview() {
  const { state } = useResume();
  const previewRef = useRef(null);
  const { template, styles, customCSS } = state;

  const TemplateComponent = templateMap[template] || MinimalTemplate;

  return (
    <div className="preview-container">
      <motion.div 
        className="preview-wrapper glass-effect"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="preview-toolbar glass-effect">
          <div className="toolbar-info">
            <span className="template-badge gradient-border">{template}</span>
            <span className="preview-hint">实时预览</span>
          </div>
          <div className="toolbar-actions">
            <button className="toolbar-btn">
              <span className="btn-text">刷新</span>
            </button>
          </div>
        </div>
        
        <div className="preview-scroll">
          <div 
            ref={previewRef}
            className="resume-preview"
            style={{
              '--primary': styles.primaryColor,
              '--accent': styles.accentColor,
              '--font': styles.font,
              '--font-size': `${styles.fontSize}px`,
              '--line-height': styles.lineHeight,
              '--radius': `${styles.borderRadius}px`,
              '--gap': styles.sectionGap
            }}
          >
            <TemplateComponent data={state} />
            {customCSS && (
              <style>{customCSS}</style>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
