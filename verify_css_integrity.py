#!/usr/bin/env python3
"""
verify_css_integrity.py — AI Product Portfolio Automated CSS Integrity & Regression Guard
Validates that styles.css loads all modular files and that each physical modular CSS file
contains all required sentinels and critical selectors across all modules.
"""

import sys
import os

REQUIRED_MODULAR_FILES = [
    ("css/00-global.css", ">>> [MODULE 00: GLOBAL BASE, HERO & DESIGN TOKENS - START] <<<", ">>> [MODULE 00: GLOBAL BASE, HERO & DESIGN TOKENS - END] <<<"),
    ("css/01-twitcanva.css", ">>> [MODULE 01: TWITCANVA - START] <<<", ">>> [MODULE 01: TWITCANVA - END] <<<"),
    ("css/02-hermes.css", ">>> [MODULE 02: HERMES P7+ PRODUCT THINKING - START] <<<", ">>> [MODULE 02: HERMES P7+ PRODUCT THINKING - END] <<<"),
    ("css/03-ui-skill-lab.css", ">>> [MODULE 03: UI SKILL LAB - START] <<<", ">>> [MODULE 03: UI SKILL LAB - END] <<<"),
    ("css/04-guangfan.css", ">>> [MODULE 04: GUANGFAN AI CONCEPT VALIDATION - START] <<<", ">>> [MODULE 04: GUANGFAN AI CONCEPT VALIDATION - END] <<<"),
    ("css/05-footer.css", ">>> [MODULE 05: CLOSING & GLOBAL SITE FOOTER - START] <<<", ">>> [MODULE 05: CLOSING & GLOBAL SITE FOOTER - END] <<<"),
]

CRITICAL_SELECTORS_BY_FILE = {
    "css/00-global.css": [
        ".topbar", ".brand-mark", ".nav-pill", ".hero-scroll", ".hero-card", ".work-intro"
    ],
    "css/01-twitcanva.css": [
        ".feature-stream", ".feature-block", ".feature-media"
    ],
    "css/02-hermes.css": [
        ".project--hermes", ".hermes-masterhead", ".hermes-plate--master", 
        ".hermes-plate--pipeline", ".hermes-tier", ".hermes-paradigm-section",
        ".hermes-inspector-console", ".hermes-axiom-footer"
    ],
    "css/03-ui-skill-lab.css": [
        ".project--ui", ".ui-sheet", ".ui-sheet-header", ".terminal-fixture", 
        ".ui-sheet-frictions", ".ui-sheet-manifesto", ".ui-missing-layer", 
        ".ui-workflow-section", ".ui-skills-section", 
        ".ui-aipm-proof"
    ],
    "css/04-guangfan.css": [
        ".project--guangfan", ".gf-hero--editorial", ".gf-core-levers-section", 
        ".gf-ai-lever", ".gf-case", ".gf-role"
    ],
    "css/05-footer.css": [
        ".closing", ".closing-inner", ".closing-title", ".site-footer", ".site-footer-inner"
    ]
}

def verify():
    errors = []

    # 1. Verify styles.css @import master links
    print("🔍 [1/3] Checking Master styles.css @import links...")
    try:
        with open("styles.css", "r", encoding="utf-8") as f:
            master_css = f.read()
    except Exception as e:
        print(f"❌ Error reading styles.css: {e}")
        return False

    for mod_file, _, _ in REQUIRED_MODULAR_FILES:
        expected_import = f'@import "./{mod_file}";'
        if expected_import not in master_css:
            errors.append(f"styles.css missing @import for '{mod_file}'")

    # 2. Check Physical Modular Files & Sentinels
    print("🔍 [2/3] Checking Physical Module Files & Sentinel Boundaries...")
    for mod_file, start_tag, end_tag in REQUIRED_MODULAR_FILES:
        if not os.path.exists(mod_file):
            errors.append(f"Missing physical CSS file: '{mod_file}'")
            continue
        with open(mod_file, "r", encoding="utf-8") as f:
            content = f.read()
        if start_tag not in content:
            errors.append(f"{mod_file} missing START sentinel: '{start_tag}'")
        if end_tag not in content:
            errors.append(f"{mod_file} missing END sentinel: '{end_tag}'")

    # 3. Check Critical Selectors in Each Module
    print("🔍 [3/3] Checking Critical Selectors per Modular File...")
    for mod_file, selectors in CRITICAL_SELECTORS_BY_FILE.items():
        if not os.path.exists(mod_file):
            continue
        with open(mod_file, "r", encoding="utf-8") as f:
            content = f.read()
        missing = [sel for sel in selectors if sel not in content]
        if missing:
            errors.append(f"{mod_file} missing critical selectors: {', '.join(missing)}")
        else:
            print(f"   ✅ {mod_file}: All {len(selectors)} critical selectors verified.")

    if errors:
        print("\n❌ CSS INTEGRITY VERIFICATION FAILED:")
        for err in errors:
            print(f"   - {err}")
        return False
    else:
        print("\n🎉 ALL CSS INTEGRITY CHECKS PASSED: 100% Modular Sentinel & Selector Coverage Verified.")
        return True

if __name__ == "__main__":
    success = verify()
    sys.exit(0 if success else 1)
