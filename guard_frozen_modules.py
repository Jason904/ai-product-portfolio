#!/usr/bin/env python3
"""
guard_frozen_modules.py — Automated Cryptographic Hash Lock for Frozen Modules
Guarantees 0% regression on all frozen HTML and CSS sections across the portfolio.
"""

import sys
import os
import hashlib
import json

LOCK_FILE = "frozen_modules.lock"

FROZEN_CSS_FILES = [
    "css/00-global.css",
    "css/01-twitcanva.css",
    "css/03-ui-skill-lab.css",
    "css/04-guangfan.css",
    "css/05-footer.css"
]

def hash_string(data: str) -> str:
    return hashlib.sha256(data.strip().encode("utf-8")).hexdigest()

def extract_html_sections(html_content: str):
    sections = {}
    
    # 1. TwitCanva
    twit_start = html_content.find('<section class="project project--twit"')
    hermes_start = html_content.find('<section class="project project--hermes"')
    if twit_start != -1 and hermes_start != -1:
        sections["html_twitcanva"] = html_content[twit_start:hermes_start]

    # 2. UI Skill Lab
    ui_start = html_content.find('<section class="project project--ui"')
    gf_start = html_content.find('<section class="project project--guangfan"')
    if ui_start != -1 and gf_start != -1:
        sections["html_ui_skill_lab"] = html_content[ui_start:gf_start]

    # 3. Guangfan
    closing_start = html_content.find('<section class="closing reveal">')
    if closing_start == -1:
        closing_start = html_content.find('<section class="closing"')
    if gf_start != -1 and closing_start != -1:
        sections["html_guangfan"] = html_content[gf_start:closing_start]

    # 4. Closing & Footer
    if closing_start != -1:
        sections["html_closing_footer"] = html_content[closing_start:]

    return sections

def compute_current_hashes():
    hashes = {}
    
    # Compute CSS hashes
    for css_file in FROZEN_CSS_FILES:
        if os.path.exists(css_file):
            with open(css_file, "r", encoding="utf-8") as f:
                hashes[css_file] = hash_string(f.read())
        else:
            hashes[css_file] = "FILE_MISSING"

    # Compute HTML section hashes
    if os.path.exists("index.html"):
        with open("index.html", "r", encoding="utf-8") as f:
            html = f.read()
        html_sections = extract_html_sections(html)
        for sec_name, sec_content in html_sections.items():
            hashes[sec_name] = hash_string(sec_content)

    return hashes

def lock():
    hashes = compute_current_hashes()
    with open(LOCK_FILE, "w", encoding="utf-8") as f:
        json.dump(hashes, f, indent=2)
    print(f"🔒 [LOCK GENERATED] Successfully locked {len(hashes)} frozen modules into {LOCK_FILE}")
    for k, v in hashes.items():
        print(f"   - {k}: {v[:12]}...")

def verify():
    if not os.path.exists(LOCK_FILE):
        print(f"⚠️ Lockfile {LOCK_FILE} not found. Run with --lock first.")
        return False

    with open(LOCK_FILE, "r", encoding="utf-8") as f:
        locked_hashes = json.load(f)

    current_hashes = compute_current_hashes()
    violations = []

    print("🛡️ [FROZEN MODULES INTEGRITY AUDIT] Checking cryptographic signatures...")
    for mod, locked_hash in locked_hashes.items():
        curr_hash = current_hashes.get(mod, "NOT_FOUND")
        if curr_hash != locked_hash:
            violations.append((mod, locked_hash, curr_hash))
        else:
            print(f"   ✅ [LOCKED & UNTOUCHED] {mod}")

    if violations:
        print("\n❌ FATAL REGRESSION ERROR: Frozen modules have been tampered with!")
        for mod, locked, curr in violations:
            print(f"   🚨 VIOLATION in {mod}: Expected {locked[:12]}..., Found {curr[:12]}...")
        print("\n👉 ACTION REQUIRED: Revert changes to frozen modules immediately.")
        return False
    else:
        print("\n🎉 ALL FROZEN MODULES VERIFIED: 100% Zero-Regression Integrity Guaranteed.")
        return True

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--lock":
        lock()
        sys.exit(0)
    else:
        success = verify()
        sys.exit(0 if success else 1)
