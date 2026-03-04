import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import './TemplateSelector.css';

const templates = [
  {
    id: 'minimal',
    name: '简约商务',
    description: '经典黑白配色，清晰层次结构',
    preview: 'minimal'
  },
  {
    id: 'creative',
    name: '创意设计',
    description: '彩色强调，现代独特排版',
    preview: 'creative'
  },
  {
    id: 'academic',
    name: '专业学术',
    description: '严谨布局，强调教育背景',
    preview: 'academic'
  },
  {
    id: 'tech',
    name: '现代技术',
    description: '深色主题，科技感设计',
    preview: 'tech'
  },
  {
    id: 'elegant',
    name: '优雅经典',
    description: '精致细节，正式感强',
    preview: 'elegant'
  },
  {
    id: 'vibrant',
    name: '活力创意',
    description: '渐变配色，圆角活泼风格',
    preview: 'vibrant'
  }
];

export default function TemplateSelector() {
  const { state, dispatch } = useResume();
  const currentTemplate = state.template;

  const selectTemplate = (id) => {
    dispatch({ type: 'SET_TEMPLATE', payload: id });
  };

  return (
    <motion.div 
      className="template-selector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="template-grid">
        {templates.map((template, index) => (
          <motion.button
            key={template.id}
            className={`template-card ${currentTemplate === template.id ? 'active' : ''}`}
            onClick={() => selectTemplate(template.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`template-preview ${template.preview}`}>
              <div className="preview-header">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="preview-content">
                <div className="preview-line title"></div>
                <div className="preview-line subtitle"></div>
                <div className="preview-line"></div>
                <div className="preview-line short"></div>
                <div className="preview-line"></div>
              </div>
            </div>
            <div className="template-info">
              <span className="template-name">{template.name}</span>
              <span className="template-desc">{template.description}</span>
            </div>
            {currentTemplate === template.id && (
              <div className="selected-badge">
                <Check size={14} />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
