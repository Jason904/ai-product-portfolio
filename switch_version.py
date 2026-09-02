#!/usr/bin/env python3
"""
switch_version.py — Instant Version Switcher & Rollback Guard for Hermes Plate 1
Supported targets:
  - original (or baseline / prev): Git committed baseline (commit ed3ff34)
  - 3tier (or calibrated / latest): 3-Tier Full-Width Editorial Matrix
  - matrix_column (or matrix / shift): 2x2 Matrix inside left column
"""

import sys
import shutil
import subprocess
import os

VERSIONS = {
    "original": {
        "html": "index.html.plate1_prev",
        "css": "css/02-hermes.css.plate1_prev",
        "desc": "Original Git Baseline (01/02 Dual Feature Cards + 4-Box Architecture)",
    },
    "3tier": {
        "html": "index.html.snapshot_calibrated_3tier",
        "css": "css/02-hermes.css.snapshot_calibrated_3tier",
        "desc": "Full-Width 3-Tier Architecture (Top Hero + 2x2 Editorial Matrix + Value Delivery Ribbon)",
    },
    "matrix_column": {
        "html": "index.html.plate1_shift_backup",
        "css": "css/02-hermes.css.plate1_shift_backup",
        "desc": "Left-Column 2x2 Editorial Matrix under Proposition",
    }
}

ALIAS = {
    "baseline": "original",
    "prev": "original",
    "head": "original",
    "latest": "3tier",
    "calibrated": "3tier",
    "new": "3tier",
    "matrix": "matrix_column",
    "shift": "matrix_column",
}

def switch(target="original"):
    key = ALIAS.get(target.lower(), target.lower())
    if key not in VERSIONS:
        print(f"❌ Unknown target '{target}'. Available: {list(VERSIONS.keys())}")
        sys.exit(1)
        
    cfg = VERSIONS[key]
    print(f"🔄 Switching Hermes Plate 1 to [{key}]: {cfg['desc']}...")
    
    if key == "original":
        subprocess.run(["git", "checkout", "HEAD", "index.html", "css/02-hermes.css"], check=True)
    else:
        if not os.path.exists(cfg["html"]) or not os.path.exists(cfg["css"]):
            print(f"❌ Snapshot files missing for {key}!")
            sys.exit(1)
        shutil.copyfile(cfg["html"], "index.html")
        shutil.copyfile(cfg["css"], "css/02-hermes.css")
        
    print(f"✅ Restored files for [{key}].")
    
    # Integrity & Guard check
    res1 = subprocess.run(["python3", "verify_css_integrity.py"], capture_output=True, text=True)
    res2 = subprocess.run(["python3", "guard_frozen_modules.py"], capture_output=True, text=True)
    print(res1.stdout.strip())
    print(res2.stdout.strip())
    
    print(f"🎉 Successfully switched to version [{key}]!")

if __name__ == "__main__":
    t = sys.argv[1] if len(sys.argv) > 1 else "original"
    switch(t)
