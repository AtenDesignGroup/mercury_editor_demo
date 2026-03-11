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

- **Drupal Core**: ^10 || ^11
- **Node.js**: 22.11.0 (see `.nvmrc`)

### Required Dependencies (Composer)

- `drupal/mercury_editor` - Core Mercury Editor module

### Recipe Dependencies

Additional modules are installed via the `mercury_editor_demo_recipe`. These are handled automatically when the recipe is applied:

- `svg_image` - SVG image support
- `twig_field_value` - Enhanced Twig functionality
- `field`, `text`, `link` - Drupal core field modules
- Core recipes: `image_media_type`, `remote_video_media_type`

## Installation

### Option A: Module only

As `mercury_editor_demo` ships as a submodule of `drupal/mercury_editor`, no separate Composer require is needed. Enable the submodule directly:

```bash
drush en mercury_editor_demo -y
drush cr
```

### Option B: Full demo setup via Recipe (recommended)

Apply the `mercury_editor_demo_recipe` to install all required modules, import configuration, and load default content in one step:

```bash
drush recipe recipes/mercury_editor_demo_recipe
drush cr
```

## Component Library

The module includes a structured component library built with Sass and plain CSS:

```
components/
├── 00-base/                # Design tokens: colors, spacing, typography, sizes, animations
├── 01-elements/            # Basic HTML elements: button, divider, heading, icon, link, text
├── 02-components/          # Compound components: banner, card, cta, featured-card, slideshow, teaser
└── 03-pages/               # Page-level layout styles
```

## Development Workflow

### Asset Building

The module uses Gulp as its build system. Node.js 22.11.0 is required (managed via `.nvmrc`).

```bash
# Install dependencies
npm install

# Development build (watch mode)
npm run watch

# Production build
npm run build

# Remove compiled assets
npm run clean
```

## Working with the Recipe

### Applying the Recipe

```bash
drush recipe recipes/mercury_editor_demo_recipe
```

### Exporting Default Content

After editing or creating demo content, export it back into the recipe's content directory using the Drupal content export script. Run these commands inside the DDEV environment:

```bash
ddev ssh
cd web
php core/scripts/drupal content:export node 1 --dir=../recipes/mercury_editor_demo_recipe/content/ --with-dependencies
```

- `node 1` — replace `1` with the node ID you want to export
- `--with-dependencies` — exports all related entities (paragraphs, media, files, etc.)
- `--dir` — output directory relative to the `web/` folder; files are written into `recipes/mercury_editor_demo_recipe/content/`

Repeat the export command for each node that should be included as default content in the recipe.
