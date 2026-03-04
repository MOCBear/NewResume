import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, GraduationCap, Briefcase, Code, FolderKanban, Award,
  Palette, Download, Upload, Trash2, ChevronRight, ChevronLeft,
  LayoutTemplate, Settings, Menu, X, UserCircle, LogOut
} from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import PersonalForm from './forms/PersonalForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import AwardsForm from './forms/AwardsForm';
import TemplateSelector from './TemplateSelector';
import StyleCustomizer from './StyleCustomizer';
import AccountManager from './AccountManager';
import './Sidebar.css';

const tabs = [
  { id: 'personal', icon: User, label: '个人信息' },
  { id: 'education', icon: GraduationCap, label: '教育背景' },
  { id: 'experience', icon: Briefcase, label: '工作经历' },
  { id: 'skills', icon: Code, label: '技能特长' },
  { id: 'projects', icon: FolderKanban, label: '项目经验' },
  { id: 'awards', icon: Award, label: '证书奖项' },
];

const settingsTabs = [
  { id: 'templates', icon: LayoutTemplate, label: '模板选择' },
  { id: 'styles', icon: Palette, label: '样式定制' },
  { id: 'account', icon: UserCircle, label: '账户管理' },
];

export default function Sidebar({ onExport }) {
  const { state, exportJSON, importJSON, clearData } = useResume();
  const [activeTab, setActiveTab] = useState('personal');
  const [showSettings, setShowSettings] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      importJSON(file);
    }
  };

  const renderForm = () => {
    if (showSettings) {
      if (activeTab === 'templates') return <TemplateSelector />;
      if (activeTab === 'styles') return <StyleCustomizer />;
      if (activeTab === 'account') return <AccountManager />;
      return null;
    }

    switch (activeTab) {
      case 'personal': return <PersonalForm />;
      case 'education': return <EducationForm />;
      case 'experience': return <ExperienceForm />;
      case 'skills': return <SkillsForm />;
      case 'projects': return <ProjectsForm />;
      case 'awards': return <AwardsForm />;
      default: return <PersonalForm />;
    }
  };

  const currentTabData = [...tabs, ...settingsTabs].find(t => t.id === activeTab);
  const currentIcon = currentTabData?.icon || User;

  return (
    <>
      {/* 移动端菜单按钮 */}
      <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <aside className={`sidebar glass-effect ${collapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon gradient-border">
              <span>R</span>
            </div>
            {!collapsed && <span className="logo-text gradient-text">ResumeCraft</span>}
          </div>
          <button 
            className="collapse-btn" 
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? '展开' : '收起'}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="nav-section-title">信息填写</span>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-item ${activeTab === tab.id && !showSettings ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setShowSettings(false); setMobileMenuOpen(false); }}
                title={tab.label}
              >
                <tab.icon size={18} />
                {!collapsed && <span>{tab.label}</span>}
              </button>
            ))}
          </div>

          <div className="nav-section">
            <span className="nav-section-title">设置</span>
            {settingsTabs.map(tab => (
              <button
                key={tab.id}
                className={`nav-item ${activeTab === tab.id && showSettings ? 'active' : ''}`}
                onClick={() => { setActiveTab(tab.id); setShowSettings(true); setMobileMenuOpen(false); }}
                title={tab.label}
              >
                <tab.icon size={18} />
                {!collapsed && <span>{tab.label}</span>}
              </button>
            ))}
          </div>
        </nav>

        <div className="sidebar-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="form-container glass-effect"
            >
              <div className="form-header">
                <currentIcon size={20} />
                <h3>{currentTabData?.label}</h3>
              </div>
              {renderForm()}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="sidebar-footer">
          <button className="action-btn primary" onClick={onExport} title="导出简历">
            <Download size={18} />
            {!collapsed && <span>导出</span>}
          </button>
          
          <label className="action-btn secondary" title="导入数据">
            <Upload size={18} />
            {!collapsed && <span>导入</span>}
            <input 
              type="file" 
              accept=".json" 
              onChange={handleFileImport} 
              style={{ display: 'none' }}
            />
          </label>

          <button 
            className="action-btn danger" 
            onClick={clearData} 
            title="清除所有数据"
          >
            <Trash2 size={18} />
            {!collapsed && <span>清除</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
