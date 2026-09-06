#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
merge_05_to_main.py — 1-Click Atomic Merge of Section 05 into index.html
Surgically updates ONLY Section 05 (<section class="tc-sys-r1" id="twitcanva-system-r1">...</section>)
leaving Section 06 (<section class="tc-thesis-r1">) and all other modules 100% untouched.
"""

import sys

with open("sections/01-twitcanva-05-system.html", "r", encoding="utf-8") as f:
    sec05_html = f.read().strip()

with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

start_marker = '<section class="tc-sys-r1" id="twitcanva-system-r1"'
end_marker = '<section class="tc-thesis-r1"'

start_pos = index_html.find(start_marker)
end_pos = index_html.find(end_marker)

if start_pos == -1:
    print("❌ Section 05 start marker not found in index.html!")
    sys.exit(1)

if end_pos == -1:
    print("❌ Section 06 start marker not found in index.html!")
    sys.exit(1)

# Find the comment right before Section 06
comment_marker = '<!-- ==================================================================='
split_pos = index_html.rfind(comment_marker, start_pos, end_pos)
if split_pos == -1:
    split_pos = end_pos

new_index = index_html[:start_pos] + sec05_html + "\n\n      " + index_html[split_pos:]

with open("index.html", "w", encoding="utf-8") as f:
    f.write(new_index)

print("🎉 Successfully merged Section 05 into index.html (Section 06 100% untouched)!")
