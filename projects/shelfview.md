---
layout: default
permalink: /projects/shelfview/
---

<div class="section" markdown="1">

# Product Recognition in Retail Stores

{% include carousel.html id="shelfview-carousel" images="shelfview.avif,shelfview2.avif,shelfview4.jpg,shelfview5.jpg,shelfview3.avif" %}

## Overview

As tech lead of the product recognition team at Scandit, I was driving the ML development of ShelfView, a cloud solution that helps retailers understand what products are on their shelves through computer vision.

ShelfView revolutionizes retail operations by providing real-time shelf monitoring, planogram compliance checking, and inventory management through advanced computer vision technology. The system processes millions of images daily, helping major retailers optimize their shelf space and reduce out-of-stock scenarios.

[→ Learn more about ShelfView](https://www.scandit.com/products/shelfview/)

## Key Achievements

- **Built large-scale object detection and classification pipelines** validated during pilots in the stores of European and US supermarket retailers
- **Led visual search product development** for 3 years from a simple prototype to a system that scaled to processing >1M images/day
- **Increased end-to-end accuracy from 40% to 95%** for the product search across >10K unique products
- **Built an evaluation and annotation system from ground** that grew to >1M images with >100M annotations for training and testing
- **Grew my project squad from 2 to 8 engineers** while giving them mentoring and technical leadership

## Technical Stack

- **Python** - Primary development language for ML pipelines and backend
- **PyTorch** - ML framework for computer vision models
- [**Comet**](https://www.comet.com/) - ML experiment tracking framework 
- **Django** and **PostgreSQL** - Backend development, admin panels and production database
- **OpenAPI** and **Swagger** - API specification and development
- **GCP** - Google Cloud infrastructure and ML services
- [**ClickHouse**](https://clickhouse.com/) and [**Metabase**](https://www.metabase.com/) - Evaluation database and metric dashboards
- [**Dataloop**](https://dataloop.ai/) - Image annotation tooling and labelling job management
- **Gitlab** - Git server and build, evaluation and deployment workflows

## Machine Learning

I trained custom ML models from scratch in PyTorch for object detection and for image embedding extraction. We did continuous training and experiments based on investigating failure modes and discussing ideas on how to incorporate new and improved data and architectures.

The training and evaluation was based on in-house data that was collected through an external pool of annotators. We collected and annotated ~1M images with >100M single annotations for detection and classification. We contracted external human labelers to scale annotation work. Their labelling followed project-specific standards that we defined and validated through tooling.  

I implemented GUI tools to speed up debugging and which enabled quicker root cause analysis of regressions. This included metrics dashboard that tracked progress on custom metrics over time and reported regressions. 

</div>