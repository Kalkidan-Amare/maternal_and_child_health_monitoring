# Ade - Transforming Child Health Data Collection

Welcome to the Ade GitHub repository! Ade is digital platform designed to enhance maternal and child health monitoring in rural areas by leveraging AI and GPS technology. This repository contains the source code, development history, and supporting materials for the Ade platform.

## Structure

This repository is structured as follows:
- `backend/`: This directory contains the backend code of the Ade platform, including the API endpoints, database models, and business logic implemented in Python using the Django framework.
- `frontend/`: Here, you will find the frontend code for the Ade platform, implemented using JavaScript, React, and Vite. This directory also includes the HTML, CSS, and JavaScript files for the user interface.

## Purpose

The purpose of this repository is to provide a collaborative space for the development and improvement of the Ade platform. By making the repository publicly accessible, we aim to foster community engagement, allowing developers, contributors, and users to explore the codebase, report issues, and suggest enhancements.

## How AI Models Power Ade

Ade leverages the integration of GPT 3.5 to provide insightful analysis and visualization of health data. Key features include:
- **Efficient Data Collection**: Streamlined forms for easy data submission by NGO data collectors.
- **AI-Driven Analysis**: Advanced AI models analyze health data to uncover trends and insights.
- **Interactive Visualizations**: User-friendly dashboards and visualizations to present data in an intuitive manner.
- **Secure and Accessible**: Ensuring data security while providing access to authorized users.

## Getting Started

To get started with the Ade platform, follow the instructions below:

### Prerequisites

- Python 3.8+
- Node.js
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kalkidan-Amare/maternal_and_child_health_monitoring.git
    cd maternal_and_child_health_monitoring
    ```

2. Set up the backend:
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
    ```

3. Set up the frontend:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```
