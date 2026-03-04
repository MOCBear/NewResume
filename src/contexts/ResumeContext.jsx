import { createContext, useContext, useReducer, useEffect } from 'react';

const ResumeContext = createContext(null);

const initialState = {
  personal: {
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    summary: ''
  },
  education: [],
  experience: [],
  skills: {
    hard: [],
    soft: [],
    languages: [],
    tools: []
  },
  projects: [],
  awards: [],
  template: 'minimal',
  styles: {
    primaryColor: '#2D3748',
    accentColor: '#6366F1',
    font: 'Noto Sans SC',
    fontSize: 14,
    lineHeight: 1.6,
    spacing: 'normal',
    borderRadius: 4,
    sectionGap: 24
  },
  currentStep: 0,
  customCSS: ''
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    
    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, action.payload] };
    
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((item, index) => 
          index === action.payload.index ? action.payload.data : item
        )
      };
    
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((_, index) => index !== action.payload)
      };
    
    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, action.payload] };
    
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((item, index) =>
          index === action.payload.index ? action.payload.data : item
        )
      };
    
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((_, index) => index !== action.payload)
      };
    
    case 'SET_SKILLS':
      return { ...state, skills: { ...state.skills, ...action.payload } };
    
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((item, index) =>
          index === action.payload.index ? action.payload.data : item
        )
      };
    
    case 'REMOVE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((_, index) => index !== action.payload)
      };
    
    case 'ADD_AWARD':
      return { ...state, awards: [...state.awards, action.payload] };
    
    case 'UPDATE_AWARD':
      return {
        ...state,
        awards: state.awards.map((item, index) =>
          index === action.payload.index ? action.payload.data : item
        )
      };
    
    case 'REMOVE_AWARD':
      return {
        ...state,
        awards: state.awards.filter((_, index) => index !== action.payload)
      };
    
    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };
    
    case 'SET_STYLES':
      return { ...state, styles: { ...state.styles, ...action.payload } };
    
    case 'SET_CUSTOM_CSS':
      return { ...state, customCSS: action.payload };
    
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'LOAD_DATA':
      return { ...state, ...action.payload };
    
    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

const STORAGE_KEY = 'resumecraft_data';

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'LOAD_DATA', payload: parsed });
      } catch (e) {
        console.error('Failed to load saved data:', e);
      }
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [state]);

  const exportJSON = () => {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importJSON = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        dispatch({ type: 'LOAD_DATA', payload: data });
      } catch (err) {
        console.error('Failed to import JSON:', err);
      }
    };
    reader.readAsText(file);
  };

  const clearData = () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: 'RESET' });
  };

  return (
    <ResumeContext.Provider value={{ state, dispatch, exportJSON, importJSON, clearData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider');
  }
  return context;
}
