---
layout: default
permalink: /projects/shelfview/
---

<div class="section" markdown="1">

# Product Recognition in Retail Stores

<div class="project-hero">
  <img src="/assets/images/shelfview.avif" alt="ShelfView product recognition system">
</div>

## Overview

As tech lead of the product recognition team at Scandit, I led the Machine Learning development of ShelfView, an AI-powered solution that helps retailers understand what products are on their shelves through computer vision.

ShelfView revolutionizes retail operations by providing real-time shelf monitoring, planogram compliance checking, and inventory management through advanced computer vision technology. The system processes millions of images daily, helping major retailers optimize their shelf space and reduce out-of-stock scenarios.

## Key Achievements

- **Built large-scale object detection and classification pipelines** validated in the stores of European and US retailers
- **Led visual search product development** for 3 years from a simple prototype to a system that scaled to processing >1M images/day with 10 customer pilots
- **Increased end-to-end accuracy from 40% to 90%** within 18 months through systematic improvements
- **Built an annotation system from ground** including guideliens and taxonomy of product classes that lead to ~100M annotations for training and testing
- **Grew project squad from 2 to 8 engineers** with mentoring and technical leadership

## Technical Stack

- **Python** - Primary development language for ML pipelines
- **PyTorch** - Deep learning framework for computer vision models
- **Django** and **PostgreSQL** - Backend development, admin panels and production database
- **OpenAPI** - API specification
- **GCP** - Cloud infrastructure and ML services
- **ClickHouse** and **Metabase** - Evaluation database, metric dashboards and debugging panels
- **Dataloop** - Image annotation tooling according to project-specific standards and progress tracking of human-labeled annotations 

## Machine Learning

I trained custom ML models from scratch in PyTorch for object detection and for image embedding extraction. 
- TODO details models

Training and evaluation was based on in-house data that was collected through an external pool of annotators. 
- TODO details process

Implemented GUI tools speed up debugging and enable quicker root cause analysis of regressions. 
- TODO detail stack

[Learn more about ShelfView →](https://www.scandit.com/products/shelfview/)

<div class="navigation-links">
  <a href="/" class="nav-link">← Back to Portfolio</a>
</div>

</div>