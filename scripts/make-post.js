#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get today's date: YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

// Where posts live
const postsDir = path.join(__dirname, "..", "src", "posts");
const filePath = path.join(postsDir, `${today}.md`);

// Front matter template
const content = `---
title: NEW TITLE
date: ${today}
tags: [
  post
] 
---

Write your post content here.

[A link to Falmouth Github](https://github.falmouth.ac.uk/)
 
![Photo by Sami Aksu from Pexels: https://www.pexels.com/photo/a-black-long-haired-angry-cat-with-blue-collar-9820722/](/assets/img/pexels-sami-aksu-48867324-9820722.jpg)

<video controls>
  <source src="/assets/vid/6869671-uhd_4096_2160_25fps.mp4" type="video/mp4">
</video>
`;

// Make sure posts directory exists
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// Don’t overwrite existing post
if (fs.existsSync(filePath)) {
  console.error(`❌ Post already exists: ${filePath}`);
  process.exit(1);
}

// Write the file
fs.writeFileSync(filePath, content);
console.log(`✅ New post created: posts/${today}.md`);