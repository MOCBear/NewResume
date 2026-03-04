import { useId } from 'react';

export default function FormField({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  placeholder, 
  required, 
  maxLength,
  showCount 
}) {
  const id = useId();

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={id} className="field-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      
      {type === 'textarea' ? (
        <div className="textarea-wrapper">
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            maxLength={maxLength}
            className="field-textarea"
          />
          {showCount && maxLength && (
            <span className="char-count">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="field-input"
        />
      )}
    </div>
  );
}
