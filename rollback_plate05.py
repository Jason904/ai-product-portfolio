#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
rollback_plate05.py — 1-Click Rollback of Section 05 to the verified stable snapshot
"""

import shutil
import sys

if not shutil.os.path.exists("index.html.plate05_locked_stable"):
    print("❌ index.html.plate05_locked_stable not found!")
    sys.exit(1)

shutil.copy2("index.html.plate05_locked_stable", "index.html")
shutil.copy2("css/01-twitcanva-system-r1.css.locked_stable", "css/01-twitcanva-system-r1.css")
print("🎉 Successfully rolled back Plate 05 to the locked stable baseline!")
