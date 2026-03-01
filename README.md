# Daily Alignment

## Overview

**Daily Alignment** is a simple and powerful productivity and self-discipline web app designed to help users build momentum toward their goals through daily intentional action.

The core philosophy of the app is:

> Small daily actions, done consistently, lead to massive long-term results.

Users set one main goal and complete a daily check-in to measure whether their actions aligned with that goal. Over time, the app tracks streaks, alignment rate, and reflections to help users stay accountable.

---

## Features

### 1. Goal Setting

- Users set a single main goal.
- The goal is saved in local storage.
- The dashboard displays the goal when the app loads.
- If no goal is set, users are prompted to create one.

### 2. Daily Check-In

Users reflect on their day and answer:

- What they worked on.
- Whether their actions aligned with their goal.

Each check-in includes:

- Date
- Alignment status (Yes / No)
- Reflection

The app prevents multiple check-ins on the same day.

### 3. Streak Tracking

- Tracks the number of consecutive days users aligned with their goal.
- The streak resets when a user breaks alignment.
- Encourages consistency and habit formation.

### 4. Alignment Rate

Displays:

- Percentage of aligned days
- Total aligned days
- Total days checked in

This gives users a long-term performance metric.

### 5. Recent Check-Ins

- Shows the latest reflections.
- Helps users see progress and patterns.

---

## Tech Stack

- React
- React Router
- JavaScript (ES6+)
- CSS
- Local Storage for persistence

---

## Architecture

The app follows a modular and scalable structure:

### Components

- Dashboard
- Goal
- Streak
- Alignment Rate
- Recent Check-Ins
- Check-In Form

### Services

All business logic is separated into service files:

- Goal Service
- Alignment Service
- Check-In Service

This makes the app easier to maintain, test, and scale.

---

## How It Works

### Dashboard Flow

When the dashboard loads:

1. The app checks local storage.
2. If a goal exists, it displays it.
3. If not, the user is prompted to set a goal.
4. The dashboard calculates:
   - Streak
   - Alignment rate
   - Recent check-ins

### Check-In Flow

When a user submits a check-in:

1. The app checks if today's check-in already exists.
2. If not, it saves the check-in.
3. The dashboard updates streaks and metrics.

---

## Motivation Behind the Project

Most productivity apps are complex and overwhelming. Daily Alignment focuses on simplicity:

- One goal
- One daily action
- One decision: aligned or not

This creates clarity, focus, and accountability.

---
