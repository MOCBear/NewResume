import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Globe, Download, Loader } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import './ExportModal.css';

export default function ExportModal({ onClose }) {
  const { state } = useResume();
  const [exporting, setExporting] = useState(false);
  const [exportType, setExportType] = useState(null);

  const generateHTML = () => {
    const { template, styles, customCSS, ...data } = state;
    const templateMap = {
      minimal: 'MinimalTemplate',
      creative: 'CreativeTemplate',
      academic: 'AcademicTemplate',
      tech: 'TechTemplate',
      elegant: 'ElegantTemplate',
      vibrant: 'VibrantTemplate'
    };
    const templateName = templateMap[template] || 'MinimalTemplate';

    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personal.name || '简历'} - Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Noto Sans SC', sans-serif; 
      background: #f5f5f5;
      padding: 40px;
    }
    .resume-container {
      max-width: 210mm;
      margin: 0 auto;
      background: white;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    @media print {
      body { padding: 0; }
      .resume-container { box-shadow: none; }
    }
    ${styles.font !== 'Noto Sans SC' ? `body { font-family: '${styles.font}', sans-serif; }` : ''}
  </style>
</head>
<body>
  <div class="resume-container">
    ${document.querySelector('.resume-preview')?.innerHTML || '简历内容'}
  </div>
</body>
</html>`;
  };

  const handleExport = async (type) => {
    setExportType(type);
    setExporting(true);

    try {
      if (type === 'pdf') {
        const previewElement = document.querySelector('.resume-preview');
        if (previewElement) {
          const html2pdf = (await import('html2pdf.js')).default;
          const opt = {
            margin: 0,
            filename: `${state.personal.name || 'resume'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          await html2pdf().set(opt).from(previewElement).save();
        }
      } else if (type === 'html') {
        const html = generateHTML();
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${state.personal.name || 'resume'}.html`;
        link.click();
        URL.revokeObjectURL(url);
      } else if (type === 'json') {
        const dataStr = JSON.stringify(state, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${state.personal.name || 'resume'}-data.json`;
        link.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setExporting(false);
      setExportType(null);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>导出简历</h2>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="modal-body">
            <p className="modal-desc">选择导出格式</p>

            <div className="export-options">
              <button 
                className={`export-option ${exportType === 'pdf' ? 'active' : ''}`}
                onClick={() => handleExport('pdf')}
                disabled={exporting}
              >
                {exporting && exportType === 'pdf' ? (
                  <Loader size={24} className="spinner" />
                ) : (
                  <FileText size={24} />
                )}
                <span className="option-title">PDF</span>
                <span className="option-desc">适用于打印和投递</span>
              </button>

              <button 
                className={`export-option ${exportType === 'html' ? 'active' : ''}`}
                onClick={() => handleExport('html')}
                disabled={exporting}
              >
                {exporting && exportType === 'html' ? (
                  <Loader size={24} className="spinner" />
                ) : (
                  <Globe size={24} />
                )}
                <span className="option-title">HTML</span>
                <span className="option-desc">网页版简历</span>
              </button>

              <button 
                className={`export-option ${exportType === 'json' ? 'active' : ''}`}
                onClick={() => handleExport('json')}
                disabled={exporting}
              >
                {exporting && exportType === 'json' ? (
                  <Loader size={24} className="spinner" />
                ) : (
                  <Download size={24} />
                )}
                <span className="option-title">JSON</span>
                <span className="option-desc">数据备份</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
