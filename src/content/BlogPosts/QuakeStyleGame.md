---
title: "Quake-Style PC & PS5 Multiplayer FPS in a Custom C++ Engine"
date: "2026-04-15"
tags: ["C++ & OpenGL", "Multiplayer Systems", "PS5 Rendering", "Gameplay Mechanics", "Audio Engineering", "Debugging and Tools"]
excerpt: "A fast-paced, Quake-inspired FPS built in a custom C++ engine over one month by a team of seven. Features cross-platform rendering (OpenGL & PS5), local multiplayer, dynamic audio, and a unique melee knockback system for chaotic, arcade-style combat."
---

## Video Demos

### Gameplay Overview - PC Version
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/iOAtWiHzFY4"
  title="Quake-Style Game PC"
  frameborder="0"
  allowfullscreen>
</iframe>

### PS5 Version - Rendering Showcase on a Console

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/QGP9eVH0AKo"
  title="Quake-Style Game PS5"
  frameborder="0"
  allowfullscreen>
</iframe>

### Multiplayer Showcase - Local LAN Play
<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/b53l6fEUIlM"
  title="Quake-Style Game Multiplayer"
  frameborder="0"
  allowfullscreen>

## CSC8503: Quake-Style Multiplayer FPS Technical Demo

This Real-Time Graphics and Systems Demo is a Quake-inspired first-person shooter developed over one month by a team of seven programmers, myself included. The project serves as a technical showcase of our teamwork, combining **modern OpenGL rendering**, **PS5 platform integration**, and **multiplayer gameplay systems** into a cohesive and responsive fps combat experience.

The game and its engine allow for high-speed movement, responsive shooting mechanics, and a unique **cartoon-inspired melee knockback system**, blending classic arena shooter design with some experimental gameplay elements.

---

## Technical Architecture

### Rendering Pipeline

To support fast-paced gameplay and cross-platform compatibility, the project implements a flexible and optimized rendering pipeline designed for both desktop OpenGL and PS5 hardware as per University course extra credit specifications.

* **Cross-Platform Rendering**: Built on a modular rendering layer supporting both OpenGL (PC) and PS5-native graphics pipelines, ensuring more consistent visual output and performance.
* **Forward+ Rendering Approach**: Chosen for its efficiency in handling dynamic lighting in tight, indoor arenas typical of Quake-style maps.
* **Model & Texture Integration**: Implemented full support for external assets, including mesh loading, material parsing, and texture binding.
* **Shader System**: Developed reusable shader programs for lighting, UI rendering, and debug visualization.

---

### Gameplay Systems and Mechanics

The core gameplay loop is built around responsive and intuitive controls made for tight feedback and cross platform modularity.

* **Custom Melee Knockback Mechanic**: Introduced a Smash Bros style knockback system, allowing players to launch opponents across the map. This creates a more dynamic and chaotic combat flow compared to traditional hitscan-only shooters.
* **Weapon Systems**: Designed modular weapon handling for hitscan and projectile-based firing across weapons.
* **Player Controller**: Implemented responsive movement including strafing, jumping, and air control inspired by classic arena shooters.
* **Game State Management**: Centralized system managing match flow, player states, scoring, game timers and respawn logic.

---

### Multiplayer and Networking

The project includes a functional multiplayer system, primarily designed for local network play with extensibility for online support.

* **Local Multiplayer Support**: Enabled multiple players to connect and compete over LAN.
* **State Synchronization**: Implemented efficient replication of player position, actions, and game events.
* **Client-Server Structure**: Designed a lightweight architecture to manage authority and reduce desynchronization.
* **Latency Handling**: Basic interpolation techniques(albeit mainly Linear Interpolation) used to smooth player movement across clients.

---

### Audio and Feedback Systems

Audio plays a critical role in reinforcing gameplay responsiveness and immersion.

* **Sound Engineering**: Integrated spatial audio for game background music and slight sound effects.

---

### Environment and Asset Pipeline

Though not perfect given the time frame, the visual identity of the game looks to reflect a mor stylized, arcade-like interpretation of classic FPS arenas.

* **Level Design**: Designed compact, vertical arenas to emphasize movement and knockback mechanics.
* **Asset Integration Pipeline**:

  * Models created and refined in Blender.
  * Textures processed and optimized for runtime efficiency.
  * Engine-side importers built for seamless asset integration.
* **Collision and Physics**: Implemented bounding volumes and basic physics interactions for player and projectile behavior through the Jolt physics library.

---

### Debugging and Development Tools

A robust suite of tools was developed to support rapid iteration and team collaboration.

* **Real-Time Debug UI**: Allowed live tweaking of gameplay variables and rendering parameters.
* **State Inspection Tools**: Visualized player states, network data, and physics interactions.
* **Hot Reloading**: Enabled rapid iteration on shaders and gameplay logic without full recompilation.
* **Logging and Diagnostics**: Provided detailed output for tracking bugs in networking and state management.

---

## Personal Contributions

My role in the project focused on both rendering and core gameplay systems, bridging technical and design elements:

* Developed and refined the **OpenGL rendering pipeline**.
* Contributed to **PS5 rendering integration** and ensured cross-platform compatibility.
* Implemented **model loading and asset integration systems** with our physics library and PS5.
* Played a key role in **gameplay planning**, particularly the melee knockback mechanic.
* Designed and refactored **game state management systems** for scalability and clarity.
* Ensured seamless **integration between gameplay systems, debug tools, and networking architecture**.

---

## Feature Overview

| Feature     | Description                                              |
| ----------- | -------------------------------------------------------- |
| Rendering   | Cross-platform (OpenGL + PS5), Forward+ lighting         |
| Multiplayer | Local LAN support with client-server architecture        |
| Gameplay    | Arena FPS with custom melee knockback mechanic           |
| Audio       | Spatial sound with event-driven playback                 |
| Assets      | External model/texture pipeline with Blender integration |
| Debug Tools | Real-time UI, hot reload, and system diagnostics         |

---

## Note on Implementation

This project ultimately represents an intensive, collaborative effort completed within a constrained one-month development cycle. The result is a technically robust prototype that demonstrates strong foundations in mine and my team's ability to create a functioning game from scratch within a set time with proper planning and communication.

While the multiplayer functionality is currently optimized for local play, the underlying architecture is designed to scale toward full online support. The modular rendering pipeline and gameplay systems also provide a solid base for future expansion, including additional weapons, maps, and advanced physics interactions.
