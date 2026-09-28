import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

for name in ['basic', 'intermediate', 'advanced']:
    with open(f'data/questions/{name}.ts', 'r', encoding='utf-8') as f:
        text = f.read()
    topics = re.findall(r"topic:\s*'([^']+)'", text)
    counts = {}
    for t in topics:
        counts[t] = counts.get(t, 0) + 1
    print(f"=== {name.upper()} ({len(topics)} questions) ===")
    for t, c in sorted(counts.items()):
        print(f"  {t}: {c}")
