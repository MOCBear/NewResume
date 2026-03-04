import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useResume } from '../../contexts/ResumeContext';
import FormField from '../common/FormField';
import './Forms.css';

export default function PersonalForm() {
  const { state, dispatch } = useResume();
  const { personal } = state;

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_PERSONAL', payload: { [field]: value } });
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="form-section"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="form-grid">
        <FormField 
          label="姓名 *" 
          value={personal.name} 
          onChange={(v) => handleChange('name', v)}
          placeholder="请输入您的姓名"
          required
        />
        <FormField 
          label="职业标题" 
          value={personal.title} 
          onChange={(v) => handleChange('title', v)}
          placeholder="例如：全栈工程师"
        />
      </div>

      <div className="form-grid">
        <FormField 
          label="邮箱 *" 
          type="email"
          value={personal.email} 
          onChange={(v) => handleChange('email', v)}
          placeholder="your@email.com"
          required
        />
        <FormField 
          label="电话" 
          value={personal.phone} 
          onChange={(v) => handleChange('phone', v)}
          placeholder="+86 138 0000 0000"
        />
      </div>

      <div className="form-grid">
        <FormField 
          label="所在地" 
          value={personal.location} 
          onChange={(v) => handleChange('location', v)}
          placeholder="城市, 国家"
        />
        <FormField 
          label="个人网站" 
          value={personal.website} 
          onChange={(v) => handleChange('website', v)}
          placeholder="https://"
        />
      </div>

      <div className="form-grid">
        <FormField 
          label="LinkedIn" 
          value={personal.linkedin} 
          onChange={(v) => handleChange('linkedin', v)}
          placeholder="LinkedIn 个人主页"
        />
        <FormField 
          label="GitHub" 
          value={personal.github} 
          onChange={(v) => handleChange('github', v)}
          placeholder="GitHub 用户名"
        />
      </div>

      <FormField 
        label="个人简介" 
        type="textarea"
        value={personal.summary} 
        onChange={(v) => handleChange('summary', v)}
        placeholder="用200字以内的文字介绍自己，突出您的专业背景和核心优势..."
        maxLength={200}
        showCount
      />
    </motion.div>
  );
}
