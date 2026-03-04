import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../contexts/ResumeContext';
import FormField from '../common/FormField';
import './Forms.css';

const emptyExperience = {
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  description: [],
  achievements: []
};

export default function ExperienceForm() {
  const { state, dispatch } = useResume();
  const { experience } = state;

  const addExperience = () => {
    dispatch({ type: 'ADD_EXPERIENCE', payload: { ...emptyExperience } });
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'UPDATE_EXPERIENCE', payload: { index, data: updated[index] } });
  };

  const addDescription = (index) => {
    const current = experience[index].description || [];
    updateExperience(index, 'description', [...current, '']);
  };

  const updateDescription = (index, descIndex, value) => {
    const current = [...experience[index].description];
    current[descIndex] = value;
    updateExperience(index, 'description', current);
  };

  const removeDescription = (index, descIndex) => {
    const current = experience[index].description.filter((_, i) => i !== descIndex);
    updateExperience(index, 'description', current);
  };

  const removeExperience = (index) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', payload: index });
  };

  return (
    <div className="form-section">
      <AnimatePresence>
        {experience.map((exp, index) => (
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
                onClick={() => removeExperience(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <FormField 
                label="公司名称"
                value={exp.company}
                onChange={(v) => updateExperience(index, 'company', v)}
                placeholder="例如：字节跳动"
              />
              <FormField 
                label="职位"
                value={exp.position}
                onChange={(v) => updateExperience(index, 'position', v)}
                placeholder="例如：高级前端工程师"
              />
            </div>

            <div className="form-grid">
              <FormField 
                label="入职时间"
                value={exp.startDate}
                onChange={(v) => updateExperience(index, 'startDate', v)}
                placeholder="例如：2021-03"
              />
              <FormField 
                label="离职时间"
                value={exp.endDate}
                onChange={(v) => updateExperience(index, 'endDate', v)}
                placeholder="例如：至今"
              />
            </div>

            <div className="description-list">
              <label className="field-label">工作职责</label>
              {(exp.description || []).map((desc, descIndex) => (
                <div key={descIndex} className="description-item">
                  <FormField 
                    value={desc}
                    onChange={(v) => updateDescription(index, descIndex, v)}
                    placeholder={`职责 ${descIndex + 1}`}
                  />
                  <button 
                    className="remove-desc-btn"
                    onClick={() => removeDescription(index, descIndex)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              <button 
                className="add-desc-btn"
                onClick={() => addDescription(index)}
              >
                <Plus size={14} />
                <span>添加职责</span>
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <button className="add-btn" onClick={addExperience}>
        <Plus size={18} />
        <span>添加工作经历</span>
      </button>

      {experience.length === 0 && (
        <div className="empty-hint">
          点击上方按钮添加您的工作经历
        </div>
      )}
    </div>
  );
}
