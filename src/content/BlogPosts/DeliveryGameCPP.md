---
title: "A C++ Glass Ball Delivery Game"
date: "2024-10-31"
tags: ["C++ & Open GL","Physics and Movement", "AI and Pathfinding", "Networking", "Gameplay and Level Design", "Debugging and Tools"]
excerpt: "Learn how to embed Spotify, YouTube, and Twitter content directly in your blog
  posts using Markdoc tags or Blocks."
---

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/o_caFMXuKcQ"
  title="Radium Discovery Documentary"
  frameborder="0"
  allowfullscreen>
</iframe>


# CSC8503: Glass Ball Delivery Game

My **Glass Ball Delivery Game** is a physics-based, cooperative multiplayer technical demonstration developed as part of a university led game engine project. This project showcases the implementation of a custom **rigid body physics system**, **client-server networking**, and **AI pathfinding** within a C++ made from the bottom up utilising OpenGl and custom physics code.

---

## Technical Architecture

### Physics and Movement

The core movement mechanics utilise a **rigid body physics system** where the player controls a rolling ball, featuring collisions and object carrying.

**Dynamic Constraints:** I implemented position and orientation constraints to manage both object carrying and enemy movement.


**Cooperative Weight Mechanics:** Physics weight values dynamically adjust based on the number of players interacting with an object.


**Interaction Logic:** While a single player can pick up objects alone, multiplayer mode requires both players to be near the object to carry it.



### AI and Pathfinding

To provide a challenging environment, I implemented two distinct enemy types the **AngryGoose** and **EnemyCourier** driven by **Finite State Machines (FSM)**.


**NavMesh Integration:** Enemies use a Navigation Mesh for pathfinding. The Goose is programmed to chase the carried object, while the Courier pursues the player.


**Visual Debugging:** A robust suite of debugging tools allows for real-time visualisation of the NavMesh and enemy paths during runtime.



### Networking and Systems

The project features a **full client-server architecture** supporting up to two players in a cooperative environment.

 
**State Synchronisation:** The architecture supports cooperative objective-based gameplay across connected clients.


 
**Data Persistence:** A persistent high-score system makes use of a **file-based storage**, generating a local text file to track performance across sessions.



---

## Gameplay and Level Design

The game loop is designed to balance objective-based tasks with high-risk sub-objectives.

 
**Core Objective:** Players must deliver objects to a designated green zone, requiring 3 successful deliveries to complete the level.



**Visual Feedback:** The objective ball changes color to indicate damage and features a health regeneration mechanic if it avoids damage for a period.



**Scoring System:** Includes collectible point orbs spread across the navigation mesh and a **multiplier pad** that provides a bonus after 3 seconds of interaction.



| Feature | Description |
| --- | --- |
| **Objective** | Deliver 3 objects to the Green Zone 
| **Enemies** | FSM-driven AngryGoose and EnemyCourier 
| **Multiplayer** | 2-Player Cooperative Client-Server 
| **Constraints** | Proximity-based carrying (Requires 2 players in MP) 
---

## Debugging and Tools

To ensure technical stability and ease of iteration, I developed a comprehensive set of developer commands:
- Toggle and show NavMesh visualisation.
- Toggle enemy pathfinding lines.
- Toggle gravity for physics testing.
- Print connected client status for network monitoring.



---

> 
> **Note on this project's final Implementation:** While the initial launch/loading sequence can be unstable, the underlying physics and networking systems provided a solid foundation for cooperative gameplay mechanics. I have since identified the loading sequence as an area for improvement, and I am actively working on optimising any future forms of such code to ensure a smoother player experience in future iterations.
> 
> 