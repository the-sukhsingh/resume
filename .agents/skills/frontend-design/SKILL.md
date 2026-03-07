---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Project Context: Resume Editor Application

This is a resume editor with a split-screen layout:
- **Left Panel**: Form-based editor for resume details (personal info, experience, education, skills)
- **Right Panel**: Live preview of the formatted resume
- **Design Philosophy**: Sleek, professional, and tasteful - balancing sophistication with usability

## Design System for Resume Editor

**Aesthetic Direction**: Modern Professional with Editorial Refinement
- Clean, sophisticated interface that feels like a premium design tool
- Emphasis on clarity, hierarchy, and breathing room
- Subtle elegance over flashy effects
- Professional enough for career-focused users, refined enough to feel premium

### Core Design Principles

**Typography Hierarchy**:
- **Display/Headers**: Use "Playfair Display" or "Crimson Pro" for elegant, editorial headers
- **UI Text**: Use "DM Sans" or "Outfit" for clean, modern interface elements
- **Resume Preview**: Use "Libre Baskerville" or "Lora" for resume body text to convey professionalism
- Font sizes: Clear hierarchy with 2xl-3xl for headers, base for body, sm for labels
- Line heights: Generous (1.6-1.8) for readability

**Color Palette** (CSS Variables):
- **Primary**: Sophisticated navy or deep charcoal (#1a2332, #0f172a)
- **Accent**: Refined gold/amber (#d4af37, #f59e0b) or deep teal (#0d9488)
- **Background**: Soft off-white (#fafaf9, #f8fafc) with subtle warmth
- **Surface**: Pure white (#ffffff) for cards and panels
- **Text**: Rich black (#0a0a0a) with muted variants (#64748b, #94a3b8)
- **Borders**: Subtle grays (#e2e8f0, #cbd5e1)

**Spatial Design**:
- Split-screen layout: 45% editor / 55% preview (or 50/50 on smaller screens)
- Generous padding: 24-32px for main containers, 16-20px for cards
- Consistent spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Vertical rhythm: 8px baseline grid
- Card-based sections with subtle shadows (0 1px 3px rgba(0,0,0,0.08))

**Motion & Interactions**:
- Smooth transitions: 200-300ms ease-in-out for most interactions
- Form field focus: Subtle border color shift + soft glow
- Save/update feedback: Gentle success animations
- Panel resize: Smooth drag interactions with visual feedback
- Scroll behavior: Smooth scrolling with momentum
- Micro-interactions: Hover states on buttons (slight scale or color shift)

**Visual Details**:
- Subtle background texture: Very light noise or grain (opacity: 0.02-0.03)
- Dividers: 1px solid borders with subtle shadows for depth
- Input fields: Soft borders that strengthen on focus
- Buttons: Solid primary actions, ghost secondary actions
- Icons: Lucide or Heroicons for consistency
- Resume preview: Paper-like appearance with subtle shadow to simulate document

## Implementation Guidelines

When building components for this resume editor:

1. **Maintain Consistency**: Always reference the established color palette, typography, and spacing system
2. **Component Patterns**: 
   - Form sections with clear labels and helpful placeholders
   - Grouped inputs with logical visual hierarchy
   - Action buttons positioned consistently (primary right-aligned)
   - Status indicators (saved, saving, error) with appropriate colors
3. **Responsive Behavior**: 
   - Stack panels vertically on mobile (<768px)
   - Maintain readability at all breakpoints
   - Touch-friendly targets (min 44px)
4. **Accessibility**:
   - Proper ARIA labels for form fields
   - Keyboard navigation support
   - Sufficient color contrast (WCAG AA minimum)
   - Focus indicators clearly visible

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually cohesive with the established design system
- Professional and refined in every detail
- Consistent across all pages and components


## Technical Stack Preferences

For this Next.js + TypeScript + Tailwind CSS project:
- Use Tailwind utility classes following the design system
- Leverage shadcn/ui components as base, customized to match aesthetic
- Implement theme support (light/dark) using CSS variables
- Use Framer Motion for complex animations when needed
- Prefer composition over prop drilling
- Keep components focused and reusable

## Anti-Patterns to Avoid

NEVER use:
- Generic font families (Inter, Roboto, Arial, system fonts)
- Purple gradients on white backgrounds
- Overly rounded corners everywhere (border-radius: 9999px)
- Inconsistent spacing that breaks the 8px grid
- Heavy drop shadows or excessive blur effects
- Cluttered layouts without clear visual hierarchy
- Inconsistent button styles across the application

Remember: This is a professional tool for career advancement. Every design decision should reinforce trust, clarity, and sophistication. The interface should feel like a premium product that users are proud to use.
