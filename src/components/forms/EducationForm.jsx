import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../contexts/ResumeContext';
import FormField from '../common/FormField';
import './Forms.css';

const emptyEducation = {
  school: '',
  degree: '',
  major: '',
  startDate: '',
  endDate: '',
  gpa: '',
  description: ''
};

export default function EducationForm() {
  const { state, dispatch } = useResume();
  const { education } = state;

  const addEducation = () => {
    dispatch({ type: 'ADD_EDUCATION', payload: { ...emptyEducation } });
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'UPDATE_EDUCATION', payload: { index, data: updated[index] } });
  };

  const removeEducation = (index) => {
    dispatch({ type: 'REMOVE_EDUCATION', payload: index });
  };

  return (
    <div className="form-section">
      <AnimatePresence>
        {education.map((edu, index) => (
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
                onClick={() => removeEducation(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <FormField 
                label="学校名称"
                value={edu.school}
                onChange={(v) => updateEducation(index, 'school', v)}
                placeholder="例如：清华大学"
              />
              <FormField 
                label="学位"
                value={edu.degree}
                onChange={(v) => updateEducation(index, 'degree', v)}
                placeholder="例如：学士、硕士、博士"
              />
            </div>

            <div className="form-grid">
              <FormField 
                label="专业"
                value={edu.major}
                onChange={(v) => updateEducation(index, 'major', v)}
                placeholder="例如：计算机科学"
              />
              <FormField 
                label="GPA/成绩"
                value={edu.gpa}
                onChange={(v) => updateEducation(index, 'gpa', v)}
                placeholder="例如：3.8/4.0"
              />
            </div>

            <div className="form-grid">
              <FormField 
                label="入学时间"
                value={edu.startDate}
                onChange={(v) => updateEducation(index, 'startDate', v)}
                placeholder="例如：2019-09"
              />
              <FormField 
                label="毕业时间"
                value={edu.endDate}
                onChange={(v) => updateEducation(index, 'endDate', v)}
                placeholder="例如：2023-06"
              />
            </div>

            <FormField 
              label="描述"
              type="textarea"
              value={edu.description}
              onChange={(v) => updateEducation(index, 'description', v)}
              placeholder="描述您的学习经历、成就等..."
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <button className="add-btn" onClick={addEducation}>
        <Plus size={18} />
        <span>添加教育经历</span>
      </button>

      {education.length === 0 && (
        <div className="empty-hint">
          点击上方按钮添加您的教育背景
        </div>
      )}
    </div>
  );
}
