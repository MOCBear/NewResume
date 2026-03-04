import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useResume } from '../../contexts/ResumeContext';
import './Forms.css';

function TagInput({ label, values, onChange, placeholder }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!values.includes(input.trim())) {
        onChange([...values, input.trim()]);
      }
      setInput('');
    }
  };

  const removeTag = (index) => {
    onChange(values.filter((_, i) => i !== index));
  };

  return (
    <div className="tag-input-container">
      <label className="field-label">{label}</label>
      <div className="tag-input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="tag-input"
        />
        <button
          type="button"
          className="tag-add-btn"
          onClick={() => {
            if (input.trim() && !values.includes(input.trim())) {
              onChange([...values, input.trim()]);
              setInput('');
            }
          }}
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="tags-list">
        {values.map((tag, index) => (
          <motion.span
            key={index}
            className="tag"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {tag}
            <button onClick={() => removeTag(index)}>
              <X size={12} />
            </button>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsForm() {
  const { state, dispatch } = useResume();
  const { skills } = state;

  const updateSkill = (category, value) => {
    dispatch({ 
      type: 'SET_SKILLS', 
      payload: { [category]: value } 
    });
  };

  return (
    <motion.div 
      className="form-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <TagInput
        label="硬技能 (Hard Skills)"
        values={skills.hard}
        onChange={(v) => updateSkill('hard', v)}
        placeholder="输入技能后按回车添加 (例如：React, Python)"
      />
      
      <TagInput
        label="软技能 (Soft Skills)"
        values={skills.soft}
        onChange={(v) => updateSkill('soft', v)}
        placeholder="输入技能后按回车添加 (例如：团队协作, 沟通)"
      />

      <TagInput
        label="语言能力"
        values={skills.languages}
        onChange={(v) => updateSkill('languages', v)}
        placeholder="输入语言后按回车添加 (例如：英语 - CET-6)"
      />

      <TagInput
        label="工具/软件"
        values={skills.tools}
        onChange={(v) => updateSkill('tools', v)}
        placeholder="输入工具后按回车添加 (例如：VS Code, Figma)"
      />
    </motion.div>
  );
}
