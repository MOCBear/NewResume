import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../contexts/ResumeContext';
import FormField from '../common/FormField';
import './Forms.css';

const emptyProject = {
  name: '',
  description: '',
  technologies: [],
  url: '',
  role: ''
};

export default function ProjectsForm() {
  const { state, dispatch } = useResume();
  const { projects } = state;

  const addProject = () => {
    dispatch({ type: 'ADD_PROJECT', payload: { ...emptyProject } });
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'UPDATE_PROJECT', payload: { index, data: updated[index] } });
  };

  const addTech = (index) => {
    const current = projects[index].technologies || [];
    updateProject(index, 'technologies', [...current, '']);
  };

  const updateTech = (index, techIndex, value) => {
    const current = [...projects[index].technologies];
    current[techIndex] = value;
    updateProject(index, 'technologies', current);
  };

  const removeTech = (index, techIndex) => {
    const current = projects[index].technologies.filter((_, i) => i !== techIndex);
    updateProject(index, 'technologies', current);
  };

  const removeProject = (index) => {
    dispatch({ type: 'REMOVE_PROJECT', payload: index });
  };

  return (
    <div className="form-section">
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="item-card"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="item-header">
              <span className="item-number">{index + 1}</span>
              <button 
                className="remove-btn"
                onClick={() => removeProject(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <FormField 
                label="项目名称"
                value={project.name}
                onChange={(v) => updateProject(index, 'name', v)}
                placeholder="例如：电商平台"
              />
              <FormField 
                label="项目链接"
                value={project.url}
                onChange={(v) => updateProject(index, 'url', v)}
                placeholder="https://"
              />
            </div>

            <FormField 
              label="项目描述"
              type="textarea"
              value={project.description}
              onChange={(v) => updateProject(index, 'description', v)}
              placeholder="描述项目的主要功能和您的贡献..."
            />

            <FormField 
              label="在项目中的角色"
              value={project.role}
              onChange={(v) => updateProject(index, 'role', v)}
              placeholder="例如：全栈开发、主要负责人"
            />

            <div className="tech-list">
              <label className="field-label">技术栈</label>
              {(project.technologies || []).map((tech, techIndex) => (
                <div key={techIndex} className="tech-item">
                  <FormField 
                    value={tech}
                    onChange={(v) => updateTech(index, techIndex, v)}
                    placeholder={`技术 ${techIndex + 1}`}
                  />
                  <button 
                    className="remove-desc-btn"
                    onClick={() => removeTech(index, techIndex)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button 
                className="add-desc-btn"
                onClick={() => addTech(index)}
              >
                <Plus size={14} />
                <span>添加技术</span>
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button className="add-btn" onClick={addProject}>
        <Plus size={18} />
        <span>添加项目经验</span>
      </button>

      {projects.length === 0 && (
        <div className="empty-hint">
          点击上方按钮添加您的项目经验
        </div>
      )}
    </div>
  );
}
