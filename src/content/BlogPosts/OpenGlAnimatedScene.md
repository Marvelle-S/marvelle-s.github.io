---
title: "An Open Gl Custom Engine Animated Scene"
date: "2024-10-31"
tags: ["C++ & Open GL","Physics and Movement", "Networking", "Environment Design", "Debugging and Tools", "Tutorial"]
excerpt: "Learn how to embed Spotify, YouTube, and Twitter content directly in your blog
  posts using Markdoc tags or Blocks"
---

<iframe
  width="560"
  height="315"
  src="https://www.youtube-nocookie.com/embed/ozkcuFumRSw"
  title="Radium Discovery Documentary"
  frameborder="0"
  allowfullscreen>
</iframe>


# CSC8502: Real-Time Time-Skip Technical Demo

This **Real-Time Graphics Demo** is a technical showcase of a modern rendering pipeline developed to explore environmental storytelling through dynamic scene transitions. The project features a **Deferred Rendering Pipeline**, **Skeletal Animation**, and **Post-Processing effects**, all implemented within a custom C++ engine utilizing OpenGL to simulate a 1,000-year environmental decay from a lush forest to a desert wasteland.

---

## Technical Architecture

### Rendering Pipeline

To handle complex lighting across a large-scale environment, I implemented a **Deferred Rendering Pipeline**. This approach decouples geometry calculation from lighting, allowing for a high volume of dynamic light sources without a significant performance hit.

* **G-Buffer Implementation:** The pipeline utilizes multiple render targets to store depth, normals, and diffuse colors.
* **Lighting Models:** Implemented **Ambient, Diffuse, and Specular lighting** using the **Phong Reflection Model**, ensuring realistic light interaction across both terrain and geometry.
* **Advanced Mapping:** Integrated **Normal Mapping** (Bump Mapping) to provide high surface detail on the castle and terrain textures without increasing the geometric vertex count.

### Animation and Scene Management

The project manages complex hierarchical relationships and movement through a structured scene graph and interpolation logic.

* **Skeletal Animation:** Features three-dimensional bird models with rigged skeletons, integrated directly into the lighting pipeline to ensure consistent shading during movement.
* **Hierarchical Scene Graph:** Used to manage the spatial relationships between the castle, moving birds, and environmental props.
* **Camera Interpolation:** An automatic camera track utilizes smooth interpolation to guide the viewer through the environment during the time-skip sequence.

### Post-Processing and Visual Effects

To enhance the "Time-Skip" narrative, I developed a suite of custom post-processing shaders.

* **Dynamic Gaussian Blur:** A high-intensity blur effect is automatically triggered during transition sequences to ease the visual shift between environments.
* **Environmental Fog:** A white fog effect was implemented that reacts to the scene’s lighting, adding depth and atmosphere to the desert wasteland.
* **Environment Mapping:** Utilizes dual **Skybox Cubemaps** (Forest and Desert) that swap dynamically based on the active time period.

---

## Environment and Assets

The project demonstrates the transition between two distinct biomes using a **Heightmap Terrain** system.

* **Forest Scene:** Features a detailed castle asset and lush green textures.
* **Desert Scene:** Swaps textures and removes the castle geometry to indicate centuries of decay and erosion.
* **Asset Pipeline:** Sourced unique textures and models (Polyhaven), which were processed through **Blender** for compatibility and **GIMP** for baseline JPEG conversion to ensure efficient engine loading.

| Feature | Description |
| --- | --- |
| **Pipeline** | Deferred Rendering (G-Buffer & Light Volumes) |
| **Transitions** | Real-time "Time-Skip" with Post-Processing Blur |
| **Animation** | Skeletal/Skinning for avian NPC movement |
| **Terrain** | Heightmap-based with Normal/Diffuse mapping |

---

## Debugging and Tools

A robust set of developer tools was integrated to monitor performance and adjust visual fidelity in real-time:

- Live reload shaders for rapid visual iteration.
- Toggle **Split-Screen Mode**, rendering two independent viewports to screen for camera comparison.
- Manually increase or decrease blur intensity for testing.
- Print active camera coordinates for pathing and level design.

---

> **Note on Implementation:** This project served as a deep dive into the OpenGL pipeline. While the transition logic is currently tied to a manual trigger, the underlying deferred lighting system provides the scalability required for more complex, multi-light environments in future engine development.