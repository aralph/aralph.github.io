# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages repository using Jekyll with the Cayman theme. The site is automatically built and deployed by GitHub Pages whenever changes are pushed to the master branch.

## Architecture

- **Static Site Generator**: Jekyll (managed by GitHub Pages)
- **Theme**: `jekyll-theme-cayman` (configured in `_config.yml`)
- **Content**: Markdown files in the root directory
- **Main Page**: `index.md` serves as the homepage

## File Structure

- `_config.yml` - Jekyll configuration file specifying the theme
- `index.md` - Main homepage content in Markdown format
- GitHub Pages automatically processes these files to generate the static site

## Development Workflow

Since this is a GitHub Pages repository:
- Content changes are made by editing Markdown files
- The site rebuilds automatically when changes are pushed to master
- No local build process or dependencies are required
- Preview changes using GitHub's online editor or by pushing to master

## Content Guidelines

- All content should be written in GitHub Flavored Markdown
- Jekyll will process any Markdown files in the repository root
- The Cayman theme provides the visual styling and layout