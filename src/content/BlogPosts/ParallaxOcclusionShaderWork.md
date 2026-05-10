---
title: "Parallax Occlusion Shader Exploration in OpenGL: Shadows and Silhouettes"
date: "2026-05-15"
tags: ["OpenGL", "GLSL", "Computer Graphics", "Shaders", "Real-time Rendering"]
excerpt: "A technical breakdown of implementing Parallax Occlusion Mapping (POM) in OpenGL, alongside Geometry shaders for silhouette correction and Fragment-based raymarching for self-shadowing."
---

# Beyond Normal Mapping: Implementing Advanced POM

Standard normal mapping provides a decent illusion of detail, but it literally falls flat under a closer glance. To bridge the gap between flat textures and heavy geometry, I developed a multi-stage **Parallax Occlusion Mapping (POM)** pipeline in OpenGL.

Inspired by the seminal work of **Natalya Tatarchuk**, this implementation looked to go beyond simple depth offsets. I explored several variations to balance visual fidelity against performance, incorporating self-shadowing and geometry shader-assisted silhouette correction.

---

## Approaches to Occlusion Mapping

Over this month-long project, I explored four distinct methods to simulate depth, each offering unique trade-offs:

* **Basic POM:** Standard layered depth traversal. It provides convincing surface depth at a relatively low computational cost.
* **Secant POM:** An upgrade to the search algorithm. It uses secant-based intersection refinement to converge faster, significantly reducing visible "stepping" artifacts.
* **Prism POM:** A more advanced technique using prism-style depth volumes. This better preserves silhouettes and edge definition, especially at sharp viewing angles.
* **SSAO (Screen Space Ambient Occlusion):** Implemented primarily as a baseline comparison to demonstrate the difference between lightweight screen-space shadows and true depth-based raymarching.

---

## The Technical Pipeline

Achieving "3D" surfaces on a 2D plane requires a coordinated effort across the shader stages. The core goal is to simulate depth by finding where a view ray intersects a heightmap.

### 1. Vertex Shader: Tangent Space Transformation

The vertex shader handles the heavy lifting of coordinate spaces. For raymarching to work efficiently, the view and light vectors need to be transformed into **Tangent Space**.

* **TBN Matrix:** The shaders calculate the Tangent, Bitangent, and Normal vectors to orient the ray relative to the surface's local coordinate system.
* **Vector Passing:** These vectors are passed down the pipeline so that depth calculations correctly align with the texture orientation.

### 2. Geometry Shader: Silhouette Correction

Standard POM usually breaks at the edges of a mesh because the "virtual" depth has no actual geometry to render on. I utilized the **Geometry Shader** to solve this "flat edge" problem:

* **Mesh Expansion:** By detecting edge loops, the shader extrudes the geometry slightly, creating a "buffer" zone.
* **Ray Truncation:** This allows the fragment shader to continue raymarching even when the virtual surface is technically visible beyond the original polygon's boundary, resulting in accurate, properly shaped silhouettes at the seams.

---

## Fragment Shader: The Heavy Lifting

The fragment shader is where the actual intersection logic and lighting calculations are. I used a two-step intersection approach for maximum precision on the POM solutions.

### The Raymarching Algorithm

To find the exact intersection point, the shader steps through the heightmap using a search loop:

1. **Linear Search:** A coarse search to find the approximate layer where the ray "enters" the surface.
2. **Refined Search:** Traditionally a binary search, but I also implemented **Secant-based refinement** to improve convergence speed and smoothness.

### Self-Shadowing (POM Shadows)

Shadows are calculated by casting a **secondary ray** from the intersection point back toward the light source. If this ray encounters a "peak" in the heightmap before escaping the surface, the fragment is shadowed.

> **Note:** My heightmaps were initially interpreted as reversed (which were very apparent initially). However, I was fast to alter the logic to ensure that the final output provided proper shadow orientation across all solutions.

---

## Feature Summary & Optimization

| Feature | Implementation Detail |
| --- | --- |
| **Search Steps** | Adaptive (32 to 128 steps) based on the viewing angle. |
| **Shadowing** | Hard shadows via secondary raymarch; soft shadows via interpolation. |
| **Interpolation** | Steep Parallax Mapping (SPM) with linear interpolation for smoothness. |
| **Distance LOD** | Raymarch steps scale down as fragments move further from the camera. |
| **Early Exit** | Skips the loop if the view ray is nearly perpendicular to the surface. |

> **Note:** The performance of the shader is heavily dependent on the complexity of the heightmap and the number of steps. For real-time applications, I found that a balance of 64 steps with secant refinement provided a good mix of visual quality and performance. I had also found that Prism POM did not require guard rails to ensure visual fidelity at extreme angles, which was a significant advantage over the other methods. However, it did come with a higher computational cost due to the more complex intersection logic.

---

## Reflections and Future Iterations

While the Geometry shader approach for silhouettes is robust, it can be a performance hog on complex meshes. For future iterations, I'm looking into **Quad-Tree Displacement Mapping** to move away from linear stepping toward a hierarchical search, allowing for deeper "virtual" geometry without the massive overhead.

The greatest "growing pain" of this project was navigating the steep learning curve of the OpenGL pipeline, especially into what I considered a deep part of the pool in the case of parallel occlusion mapping. Iterating through various versions of raymarching logic was a challenge; especially handling visual artifacts on smooth-shaded meshes from Blender; but it has proven to be an invaluable deep dive into low level geometry and lighting manipulation.