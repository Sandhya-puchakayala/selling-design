'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, ReactNode, CSSProperties, forwardRef } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-input-background border-border-primary focus:ring-primary-background',
        outline: 'bg-transparent border-2 border-primary-background focus:ring-primary-background',
        filled: 'bg-accent-lighter border-transparent focus:ring-primary-background',
        underline: 'bg-transparent border-0 border-b-2 border-border-primary rounded-none focus:ring-0 focus:border-primary-background',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-sm px-4 py-3',
        large: 'text-xl px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Container props
  containerClassName?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  children?: ReactNode;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "Enter your email adress",
  text_font_size = "text-sm",
  text_font_family = "Inter",
  text_font_weight = "font-normal",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-text-light",
  fill_background_color = "bg-input-background",
  border_border = "border-[1px] border-solid border-border-primary",
  border_border_radius = "rounded-2xl",
  
  // Optional parameters
  layout_width,
  padding,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  containerClassName,
  label,
  helperText,
  errorText,
  disabled = false,
  children,
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_color,
    fill_background_color,
    border_border,
    border_border_radius,
  ].filter(Boolean).join(' ')

  const hasError = Boolean(errorText)
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className={twMerge('w-full', containerClassName, optionalClasses)}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-text-primary mb-1"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          {...props}
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          disabled={disabled}
          className={twMerge(
            editTextClasses({ variant, size }),
            styleClasses,
            hasError && 'border-accent-background focus:ring-accent-background',
            `placeholder:${text_color}`,
            className
          )}
          style={customStyles}
          aria-invalid={hasError}
          aria-describedby={
            hasError ? `${inputId}-error` : 
            helperText ? `${inputId}-helper` : undefined
          }
        />
        
        {children}
      </div>
      
      {errorText && (
        <p 
          id={`${inputId}-error`}
          className="mt-1 text-sm text-accent-background"
          role="alert"
        >
          {errorText}
        </p>
      )}
      
      {helperText && !errorText && (
        <p 
          id={`${inputId}-helper`}
          className="mt-1 text-sm text-text-muted"
        >
          {helperText}
        </p>
      )}
    </div>
  )
})

EditText.displayName = 'EditText'

export default EditText