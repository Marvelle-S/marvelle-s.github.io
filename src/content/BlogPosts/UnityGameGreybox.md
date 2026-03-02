---
title: "Druidic Drink - A Unity Greybox Demo"
date: "2024-10-31"
tags: ["Unity GreyBoxing","Game Design","Physics and Movement", "Environment Design", "Debugging and Tools", "Tutorial"]
excerpt: "A Unity greybox technical prototype demonstrating core gameplay loops, 
  physics-based movement, and time-management systems in a magical cafe setting."
---

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/9WoTxkkljMs"
  title="Radium Discovery Documentary"
  frameborder="0"
  allowfullscreen>
</iframe>


# CSC3231: Druidic Drink

**Druidic Drink** is a greybox technical prototype developed to demonstrate core gameplay loops in a time-management and puzzle-solving environment. Built with a focus on functionality and iterative design, this project showcases a custom-tuned **rigid body physics movement system**, a **multi-stage crafting engine**, and a **layered environment design** using the Unity Cinemachine package.

---

## Technical Architecture

### Physics and Movement

The core player controller utilizes a **rigid body physics system** tuned to provide a specific "slippery" movement feel, requiring players to master momentum during high-pressure gameplay.

**Dashing Mechanic:** Implemented a dash ability (Left Shift) for short bursts of speed, balanced by a cooldown period to ensure players still engage with the primary walking mechanics.

**Object Interaction:** A physics-based carrying system allows players to interact with ingredients, potions, and trash. To maintain strategic depth, the system limits the player to carrying one object at a time.

**Predictive Camera:** Integrated the **Cinemachine package** to create a delayed lookahead effect, ensuring smooth camera tracking during rapid dashes and preventing disorienting jitter.

### Gameplay Systems and Logic

The prototype features several interlocking systems that drive the "chaos management" experience of the magical cafe.

**QTE Crafting Engine:** Potion creation is handled through a **Directional Input Quick Time Event (QTE)** system. The difficulty of these inputs scales as other gameplay stressors increase.

**Patience Logic:** Customers utilize a dynamic patience value represented by color-changing emoticons (Green to Red). If the value depletes, the player is penalized through point loss.

**Global Modifiers (Spells):** A centralized power-up system provides three random "spells" that temporarily alter game variables:
- **Dash Boost:** Reduces movement cooldowns.
- **Extended Patience:** Globally slows customer decay rates.
- **Slow Trash Generation:** Effectively pauses the trash penalty loop.

---

## Level Design and Flow

The environment is designed with a **layered room architecture** to force intentional movement and prioritization.

- **Kitchen (Layer 1):** The primary crafting hub where players interact with ingredient machines and cauldrons.
- **Utility Rooms (Layer 2):** Includes the Trash Room and the Power-Up Room, placed "out of the way" to force players to temporarily abandon their main objectives.
- **Serving Room (Layer 3):** The customer-facing area featuring color-coded tables that update in real-time based on active orders.

| Feature | Technical Implementation |
| --- | --- |
| **Crafting** | Multi-key directional QTE system |
| **Patience** | Time-based depletion with visual emoticon feedback |
| **Trash Management** | Periodic byproduct generation with a 50% score penalty |
| **Movement** | Physics-driven "slidy" controller with burst dashing |

---

## Iteration and Debugging

To achieve a balanced gameplay loop, the project underwent three distinct agile development iterations:

- **Iteration 1:** Focused on the **Cinemachine camera integration** and tuning the physics-based collisions.
- **Iteration 2:** Addressed balancing issues where the patience duration was too punishing, leading to the implementation of visual cues for better player feedback.
- **Iteration 3:** Finalized the map layout by adding **navigational barriers**, creating movement challenges that require efficient pathing.

---

> **Note on Prototype Implementation:** The current version is a greybox model focusing on the core "Druidic Drink" loop. While the prototype successfully integrates the patience and trash penalty systems, future iterations aim to expand the player's capabilities with a "Mage Hand" ability to support multi-object carrying and introduce a narrative visual novel layer.