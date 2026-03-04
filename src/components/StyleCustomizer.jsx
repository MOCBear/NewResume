import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Type, Sliders, Code, RotateCcw } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import './StyleCustomizer.css';

const fonts = [
  { value: 'Noto Sans SC', label: '思源黑体' },
  { value: 'Arial', label: 'Arial' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Verdana', label: 'Verdana' },
  { value: 'Tahoma', label: 'Tahoma' },
  { value: 'Trebuchet MS', label: 'Trebuchet MS' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Roboto', label: 'Roboto' }
];

const colorPresets = [
  { primary: '#2D3748', accent: '#6366F1', name: '商务灰' },
  { primary: '#1A365D', accent: '#3182CE', name: '海军蓝' },
  { primary: '#744210', accent: '#DD6B20', name: '温暖棕' },
  { primary: '#22543D', accent: '#38A169', name: '森林绿' },
  { primary: '#702459', accent: '#B83280', name: '优雅紫' },
  { primary: '#0C8599', accent: '#0BC5EA', name: '青色系' },
  { primary: '#9B2C2C', accent: '#E53E3E', name: '红色系' },
  { primary: '#285E61', accent: '#319795', name: '青绿' }
];

const spacingOptions = [
  { value: 'compact', label: '紧凑' },
  { value: 'normal', label: '标准' },
  { value: 'relaxed', label: '宽松' }
];

export default function StyleCustomizer() {
  const { state, dispatch } = useResume();
  const { styles, customCSS } = state;
  const [activeTab, setActiveTab] = useState('colors');

  const updateStyle = (key, value) => {
    dispatch({ type: 'SET_STYLES', payload: { [key]: value } });
  };

  const updateCustomCSS = (value) => {
    dispatch({ type: 'SET_CUSTOM_CSS', payload: value });
  };

  const resetStyles = () => {
    dispatch({ 
      type: 'SET_STYLES', 
      payload: {
        primaryColor: '#2D3748',
        accentColor: '#6366F1',
        font: 'Noto Sans SC',
        fontSize: 14,
        lineHeight: 1.6,
        spacing: 'normal',
        borderRadius: 4,
        sectionGap: 24
      }
    });
    dispatch({ type: 'SET_CUSTOM_CSS', payload: '' });
  };

  return (
    <motion.div 
      className="style-customizer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="customizer-tabs glass-effect">
        <button 
          className={`tab-btn ${activeTab === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveTab('colors')}
        >
          <Palette size={16} />
          <span>颜色</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'typography' ? 'active' : ''}`}
          onClick={() => setActiveTab('typography')}
        >
          <Type size={16} />
          <span>字体</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'layout' ? 'active' : ''}`}
          onClick={() => setActiveTab('layout')}
        >
          <Sliders size={16} />
          <span>布局</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveTab('advanced')}
        >
          <Code size={16} />
          <span>高级</span>
        </button>
      </div>

      <div className="customizer-content">
        {activeTab === 'colors' && (
          <motion.div 
            className="tab-panel glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="preset-section">
              <label className="section-label">颜色预设</label>
              <div className="color-presets">
                {colorPresets.map((preset, index) => (
                  <motion.button
                    key={index}
                    className={`preset-btn ${
                      styles.primaryColor === preset.primary ? 'active' : ''
                    }`}
                    onClick={() => {
                      updateStyle('primaryColor', preset.primary);
                      updateStyle('accentColor', preset.accent);
                    }}
                    title={preset.name}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span 
                      className="preset-primary" 
                      style={{ background: preset.primary }}
                    />
                    <span 
                      className="preset-accent" 
                      style={{ background: preset.accent }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="color-section">
              <label className="section-label">主色调</label>
              <div className="color-picker">
                <input
                  type="color"
                  value={styles.primaryColor}
                  onChange={(e) => updateStyle('primaryColor', e.target.value)}
                />
                <input
                  type="text"
                  value={styles.primaryColor}
                  onChange={(e) => updateStyle('primaryColor', e.target.value)}
                  className="color-input"
                />
              </div>
            </div>

            <div className="color-section">
              <label className="section-label">强调色</label>
              <div className="color-picker">
                <input
                  type="color"
                  value={styles.accentColor}
                  onChange={(e) => updateStyle('accentColor', e.target.value)}
                />
                <input
                  type="text"
                  value={styles.accentColor}
                  onChange={(e) => updateStyle('accentColor', e.target.value)}
                  className="color-input"
                />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'typography' && (
          <motion.div 
            className="tab-panel glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="option-section">
              <label className="section-label">字体选择</label>
              <select
                value={styles.font}
                onChange={(e) => updateStyle('font', e.target.value)}
                className="select-input"
              >
                {fonts.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="option-section">
              <label className="section-label">
                字号大小: {styles.fontSize}px
              </label>
              <input
                type="range"
                min="12"
                max="20"
                value={styles.fontSize}
                onChange={(e) => updateStyle('fontSize', parseInt(e.target.value))}
                className="slider"
              />
            </div>

            <div className="option-section">
              <label className="section-label">
                行高: {styles.lineHeight}
              </label>
              <input
                type="range"
                min="1.2"
                max="2.0"
                step="0.1"
                value={styles.lineHeight}
                onChange={(e) => updateStyle('lineHeight', parseFloat(e.target.value))}
                className="slider"
              />
            </div>
          </motion.div>
        )}

        {activeTab === 'layout' && (
          <motion.div 
            className="tab-panel glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="option-section">
              <label className="section-label">间距风格</label>
              <div className="spacing-options">
                {spacingOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    className={`spacing-btn ${styles.spacing === option.value ? 'active' : ''}`}
                    onClick={() => updateStyle('spacing', option.value)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="option-section">
              <label className="section-label">
                区块间距: {styles.sectionGap}px
              </label>
              <input
                type="range"
                min="16"
                max="40"
                value={styles.sectionGap}
                onChange={(e) => updateStyle('sectionGap', parseInt(e.target.value))}
                className="slider"
              />
            </div>

            <div className="option-section">
              <label className="section-label">
                圆角: {styles.borderRadius}px
              </label>
              <input
                type="range"
                min="0"
                max="12"
                value={styles.borderRadius}
                onChange={(e) => updateStyle('borderRadius', parseInt(e.target.value))}
                className="slider"
              />
            </div>
          </motion.div>
        )}

        {activeTab === 'advanced' && (
          <motion.div 
            className="tab-panel glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="option-section">
              <label className="section-label">自定义 CSS</label>
              <textarea
                value={customCSS}
                onChange={(e) => updateCustomCSS(e.target.value)}
                placeholder="在这里输入自定义CSS代码..."
                className="css-editor"
              />
            </div>
          </motion.div>
        )}
      </div>

      <motion.button 
        className="reset-btn glass-effect"
        onClick={resetStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <RotateCcw size={14} />
        <span>重置样式</span>
      </motion.button>
    </motion.div>
  );
}
