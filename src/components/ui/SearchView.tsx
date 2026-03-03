'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, ReactNode, CSSProperties } from 'react';
 import Image from'next/image';

const searchViewClasses = cva(
  'flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-search-background border-border-muted focus-within:ring-primary-background',
        outline: 'bg-transparent border-2 border-primary-background focus-within:ring-primary-background',
        filled: 'bg-accent-lighter border-transparent focus-within:ring-primary-background',
      },
      size: {
        small: 'text-sm h-8',
        medium: 'text-lg h-12',
        large: 'text-xl h-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
)

interface SearchViewProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof searchViewClasses> {
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
  effect_box_shadow?: string;
  
  // Optional parameters
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  
  // Icon props
  leftImage?: {
    src: string;
    width?: number;
    height?: number;
  };
  rightImage?: {
    src: string;
    width?: number;
    height?: number;
  };
  
  // Container props
  containerClassName?: string;
  children?: ReactNode;
}

const SearchView = ({
  // Required parameters with defaults
  placeholder = "Search for anything",
  text_font_size = "text-lg",
  text_font_family = "Nunito",
  text_font_weight = "font-normal",
  text_line_height = "leading-xl",
  text_text_align = "left",
  text_color = "text-text-muted",
  fill_background_color = "bg-search-background",
  border_border = "border-[1px] border-solid border-border-muted",
  border_border_radius = "rounded-sm",
  effect_box_shadow = "shadow-[0px_4px_4px_#00000019]",
  
  // Optional parameters
  layout_gap,
  layout_width,
  padding,
  margin,
  position,
  
  // Icon props
  leftImage,
  rightImage,
  
  // Standard React props
  variant,
  size,
  className,
  containerClassName,
  children,
  disabled = false,
  ...props
}: SearchViewProps) => {
  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : 'gap-[16px]',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
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
    effect_box_shadow,
  ].filter(Boolean).join(' ')

  return (
    <div className={twMerge(containerClassName, optionalClasses)}>
      <div 
        className={twMerge(
          searchViewClasses({ variant, size }),
          styleClasses,
          className
        )}
        style={customStyles}
      >
        {leftImage && (
          <Image
            src={leftImage.src}
            alt="Search icon"
            width={leftImage.width || 20}
            height={leftImage.height || 20}
            className="flex-shrink-0"
          />
        )}
        
        <input
          {...props}
          type="search"
          placeholder={placeholder}
          disabled={disabled}
          className={twMerge(
            'flex-1 bg-transparent border-none outline-none',
            text_font_size,
            text_font_weight,
            text_color,
            'placeholder:' + text_color,
            disabled && 'cursor-not-allowed opacity-50'
          )}
          style={customStyles}
        />
        
        {rightImage && (
          <Image
            src={rightImage.src}
            alt="Search action"
            width={rightImage.width || 20}
            height={rightImage.height || 20}
            className="flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity"
          />
        )}
        
        {children}
      </div>
    </div>
  )
}

export default SearchView