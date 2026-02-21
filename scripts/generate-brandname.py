#!/usr/bin/env python3
"""Generate high-quality GradTensor brand name PNG (Grad=green, Tensor=black)."""

from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_PATH = os.path.join(BASE, "scripts", "fonts", "PlusJakartaSans-Bold.woff")
OUTPUT_PATH = os.path.join(BASE, "public", "gradtensor-brandname.png")

GREEN = (76, 175, 80)  # #4CAF50
BLACK = (0, 0, 0)

# High-res: render at large size for quality
FONT_SIZE = 300

font = ImageFont.truetype(FONT_PATH, FONT_SIZE)

# Measure each part
grad_bbox = font.getbbox("Grad")
tensor_bbox = font.getbbox("Tensor")

grad_w = grad_bbox[2] - grad_bbox[0]
tensor_w = tensor_bbox[2] - tensor_bbox[0]
total_w = grad_w + tensor_w
text_h = max(grad_bbox[3], tensor_bbox[3]) - min(grad_bbox[1], tensor_bbox[1])

# Add padding
pad_x = 40
pad_y = 40
img_w = total_w + pad_x * 2
img_h = text_h + pad_y * 2

# Create transparent image
img = Image.new("RGBA", (img_w, img_h), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

# Draw "Grad" in green
y_offset = pad_y - min(grad_bbox[1], tensor_bbox[1])
draw.text((pad_x, y_offset), "Grad", fill=GREEN, font=font)

# Draw "Tensor" in black
draw.text((pad_x + grad_w, y_offset), "Tensor", fill=BLACK, font=font)

img.save(OUTPUT_PATH, "PNG")
print(f"Brand name PNG generated: {OUTPUT_PATH}")
print(f"Size: {img_w}x{img_h}px")
