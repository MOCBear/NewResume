import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Lock, CreditCard, Settings, LogOut, ChevronRight, Check } from 'lucide-react';
import './AccountManager.css';

const plans = [
  {
    id: 'free',
    name: '免费版',
    price: '¥0',
    features: [
      '5个简历模板',
      '基本样式定制',
      'PDF导出',
      'HTML导出',
      '本地存储'
    ],
    popular: false
  },
  {
    id: 'pro',
    name: '专业版',
    price: '¥99/月',
    features: [
      '全部15个模板',
      '高级样式定制',
      'PDF导出 (无水印)',
      'HTML导出',
      'JSON导出',
      '云存储',
      '优先支持'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: '企业版',
    price: '¥299/月',
    features: [
      '全部功能',
      '团队协作',
      '自定义模板',
      'API访问',
      '专属客服',
      '多用户管理'
    ],
    popular: false
  }
];

export default function AccountManager() {
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedPlan, setSelectedPlan] = useState('free');

  const user = {
    name: '张三',
    email: 'zhangsan@example.com',
    plan: '免费版',
    joined: '2024-01-15',
    storage: '1.2/10 MB'
  };

  return (
    <div className="account-manager">
      <div className="account-nav">
        <button 
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <UserCircle size={18} />
          <span>个人资料</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'billing' ? 'active' : ''}`}
          onClick={() => setActiveTab('billing')}
        >
          <CreditCard size={18} />
          <span>订阅计划</span>
        </button>
        <button 
          className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={18} />
          <span>账户设置</span>
        </button>
      </div>

      <div className="account-content">
        {activeTab === 'profile' && (
          <motion.div 
            className="profile-section glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>个人资料</h3>
            <div className="profile-info">
              <div className="info-item">
                <label>姓名</label>
                <span>{user.name}</span>
              </div>
              <div className="info-item">
                <label>邮箱</label>
                <span>{user.email}</span>
              </div>
              <div className="info-item">
                <label>当前计划</label>
                <span className="plan-badge">{user.plan}</span>
              </div>
              <div className="info-item">
                <label>注册日期</label>
                <span>{user.joined}</span>
              </div>
              <div className="info-item">
                <label>存储空间</label>
                <span>{user.storage}</span>
              </div>
            </div>
            <button className="flat-button primary">编辑资料</button>
          </motion.div>
        )}

        {activeTab === 'billing' && (
          <motion.div 
            className="billing-section"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>订阅计划</h3>
            <div className="plans-grid">
              {plans.map((plan) => (
                <motion.div 
                  key={plan.id}
                  className={`plan-card glass-effect ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="popular-badge gradient-text">推荐</div>
                  )}
                  <h4>{plan.name}</h4>
                  <div className="plan-price">{plan.price}</div>
                  <ul className="plan-features">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <Check size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="flat-button primary">
                    {selectedPlan === plan.id ? '当前计划' : '选择计划'}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div 
            className="settings-section glass-effect"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>账户设置</h3>
            <div className="settings-list">
              <div className="setting-item">
                <span>通知设置</span>
                <ChevronRight size={16} />
              </div>
              <div className="setting-item">
                <span>隐私设置</span>
                <ChevronRight size={16} />
              </div>
              <div className="setting-item">
                <span>安全设置</span>
                <ChevronRight size={16} />
              </div>
              <div className="setting-item">
                <span>数据管理</span>
                <ChevronRight size={16} />
              </div>
              <div className="setting-item danger">
                <span>删除账户</span>
                <ChevronRight size={16} />
              </div>
            </div>
            <button className="flat-button danger logout-btn">
              <LogOut size={16} />
              <span>退出登录</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
