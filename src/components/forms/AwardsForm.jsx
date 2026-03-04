import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../contexts/ResumeContext';
import FormField from '../common/FormField';
import './Forms.css';

const emptyAward = {
  name: '',
  issuer: '',
  date: '',
  description: ''
};

export default function AwardsForm() {
  const { state, dispatch } = useResume();
  const { awards } = state;

  const addAward = () => {
    dispatch({ type: 'ADD_AWARD', payload: { ...emptyAward } });
  };

  const updateAward = (index, field, value) => {
    const updated = [...awards];
    updated[index] = { ...updated[index], [field]: value };
    dispatch({ type: 'UPDATE_AWARD', payload: { index, data: updated[index] } });
  };

  const removeAward = (index) => {
    dispatch({ type: 'REMOVE_AWARD', payload: index });
  };

  return (
    <div className="form-section">
      <AnimatePresence>
        {awards.map((award, index) => (
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
                onClick={() => removeAward(index)}
              >
                <Trash2 size={16} />
              </button>
            </div>

            <div className="form-grid">
              <FormField 
                label="证书/奖项名称"
                value={award.name}
                onChange={(v) => updateAward(index, 'name', v)}
                placeholder="例如：AWS认证解决方案架构师"
              />
              <FormField 
                label="颁发机构"
                value={award.issuer}
                onChange={(v) => updateAward(index, 'issuer', v)}
                placeholder="例如：Amazon Web Services"
              />
            </div>

            <div className="form-grid">
              <FormField 
                label="获得时间"
                value={award.date}
                onChange={(v) => updateAward(index, 'date', v)}
                placeholder="例如：2023-08"
              />
            </div>

            <FormField 
              label="描述"
              type="textarea"
              value={award.description}
              onChange={(v) => updateAward(index, 'description', v)}
              placeholder="描述该证书或奖项的详细信息..."
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <button className="add-btn" onClick={addAward}>
        <Plus size={18} />
        <span>添加证书/奖项</span>
      </button>

      {awards.length === 0 && (
        <div className="empty-hint">
          点击上方按钮添加您的证书或奖项
        </div>
      )}
    </div>
  );
}
