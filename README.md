# Mercury Editor Demo

A comprehensive demo module for Mercury Editor setup and configuration, providing example components, content types, and development workflows for contributors and maintainers.

## Overview

Mercury Editor Demo showcases the power of Mercury Editor's "effortless, drag-and-drop editing" interface through:

- Pre-configured content types and paragraph components
- Example layouts using Layout Paragraphs integration
- Styled components with CSS/JS build process
- Template examples for custom components
- Development tools and workflows

## Prerequisites

- **Drupal Core**: ^10.3 || ~11.0
- **Node.js**: 22+

### Required Dependencies

The demo module automatically installs these dependencies:

- `mercury_editor:mercury_editor` - Core Mercury Editor module
- `layout_paragraphs:layout_paragraphs` - Layout system integration
- `style_options:style_options` - Styling framework
- `media:media` & `media:media_library` - Media handling
- `heading:heading` - Heading field type
- `svg_image:svg_image` - SVG image support
- `twig_field_value:twig_field_value` - Enhanced Twig functionality

## Installation

### 1. Install via Composer

```bash
composer require drupal/mercury_editor_demo
```

### 2. Enable the Module

```bash
drush en mercury_editor_demo -y
```

Or via the Drupal admin interface:
`Administration > Extend > Mercury Editor Demo`

### 3. Clear Cache

```bash
drush cr
```

## Component Showcase

The demo module leverages Drupal's Single Directory Components and includes a structured component library:

```
components/
├── 00-base/                # Base styles and variables
├── 01-elements/            # Basic HTML elements
└── 02-components/          # Complex components
    ├── card/               # Card component styles
    └── example-component/  # Additional components
```

## Development Workflow

### Asset Building

The module includes a complete build system:

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run watch

# Production build
npm run build
```
